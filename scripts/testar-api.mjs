// Teste das regras da API com um banco PGlite em memória: `npm run test:api`.
// Cria contas de teste próprias (as contas reais do piloto não são usadas).

import { PGlite } from '@electric-sql/pglite';

process.env.CC_SEM_EXEMPLOS = '1'; // o teste cria os próprios dados
import { usarCliente } from '../api/_lib/db.js';
import { tratar } from '../api/_lib/rotas.js';
import { cifrar } from '../api/_lib/seguranca.js';

const pg = new PGlite();
const banco = { query: async (t, p = []) => (await pg.query(t, p)).rows };
usarCliente(banco);

async function chamar(metodo, rota, corpo, cookie) {
  const req = {
    method: metodo,
    url: '/api/' + rota,
    headers: cookie ? { cookie } : {},
    body: corpo,
  };
  let status = 200;
  const cab = {};
  let texto = '';
  const res = {
    set statusCode(v) {
      status = v;
    },
    setHeader: (k, v) => (cab[k.toLowerCase()] = v),
    end: (t) => (texto = t),
  };
  await tratar(req, res);
  const sessao = cab['set-cookie'] ? cab['set-cookie'].split(';')[0] : cookie;
  return { status, dados: JSON.parse(texto), cookie: sessao };
}

let falhas = 0;
const confere = (cond, msg) => {
  console.log((cond ? '✓ ' : '✗ ') + msg);
  if (!cond) falhas++;
};

await chamar('GET', 'eu'); // cria as tabelas e a semente
await banco.query("insert into casas (codigo) values ('TST-0001'), ('TST-0002')");
const pessoa = (casa, nome, perfil) =>
  banco.query(
    `insert into pessoas (casa_id, nome, email, perfil, senha_hash)
     select id, $2, $3, $4, $5 from casas where codigo = $1`,
    [casa, nome, nome + '@teste.app', perfil, cifrar('senha-teste')],
  );
await pessoa('TST-0001', 'gestora', 'gestor');
await pessoa('TST-0001', 'adulto', 'adulto');
await pessoa('TST-0001', 'jovem', 'jovem');
await pessoa('TST-0002', 'vizinho', 'gestor');
await banco.query(
  `insert into organizadores (nome, email, grupo, areas, codigo_hash) values
   ('admin', 'admin@teste.app', 'Administração do Núcleo', '{Avisos,Eventos,Guia}', $1),
   ('clube', 'clube@teste.app', 'Clube do Núcleo', '{Eventos}', $1)`,
  [cifrar('COD-TESTE')],
);

const entrar = async (nome, perfil) =>
  (await chamar('POST', 'entrar', { ident: nome + '@teste.app', senha: 'senha-teste', perfil })).cookie;

confere((await chamar('POST', 'entrar', { ident: 'gestora@teste.app', senha: 'x' })).status === 401, 'senha errada é recusada');
confere(
  (await chamar('POST', 'entrar', { ident: 'jovem@teste.app', senha: 'senha-teste', perfil: 'gestor' })).status === 409,
  'aba errada é recusada',
);
const gestora = await entrar('gestora', 'gestor');
const adulto = await entrar('adulto', 'gestor');
const jovem = await entrar('jovem', 'jovem');
const vizinho = await entrar('vizinho', 'gestor');
const admin = (await chamar('POST', 'organizador/entrar', { email: 'admin@teste.app', codigo: 'cod-teste' })).cookie;
const clube = (await chamar('POST', 'organizador/entrar', { email: 'clube@teste.app', codigo: 'COD-TESTE' })).cookie;
confere(Boolean(admin && clube), 'organizadores entram com e-mail e código de acesso');

const euGestora = (await chamar('GET', 'eu', undefined, gestora)).dados;
confere(euGestora.casa.codigo === 'TST-0001' && euGestora.membros.length === 2, 'gestora vê o código e os moradores da casa');
const euJovem = (await chamar('GET', 'eu', undefined, jovem)).dados;
confere(!euJovem.casa.codigo, 'jovem não recebe o código da família');
confere(euJovem.permissoes.Desapego === false, 'Desapego do jovem começa desligado');

const aviso = (publico, nivel, oque) => ({
  publico, nivel, categoria: 'Obras', oque, quando: 'hoje', onde: 'Rua Jari', oQueFazer: 'atenção', canais: [],
});
confere(
  (await chamar('POST', 'avisos', aviso('Todos os moradores', 'Importante', 'A'), clube)).status === 403,
  'só a Administração publica avisos oficiais',
);
await chamar('POST', 'avisos', aviso('Todos os moradores', 'Importante', 'todos-importante'), admin);
await chamar('POST', 'avisos', aviso('Todos os moradores', 'Urgente', 'todos-urgente'), admin);
await chamar('POST', 'avisos', aviso('Só gestores da casa', 'Informativo', 'gestores-info'), admin);
await chamar('POST', 'avisos', aviso('Só jovens', 'Informativo', 'jovens-info'), admin);
await chamar('POST', 'avisos', aviso('Só jovens', 'Urgente', 'jovens-urgente'), admin);
const vistos = async (c) => (await chamar('GET', 'avisos', undefined, c)).dados.avisos.map((a) => a.oque).sort();
confere(
  JSON.stringify(await vistos(gestora)) === JSON.stringify(['gestores-info', 'jovens-urgente', 'todos-importante', 'todos-urgente']),
  'gestor: todos, só gestores e urgentes "só jovens" (regra 1)',
);
confere(JSON.stringify(await vistos(adulto)) === JSON.stringify(['todos-importante', 'todos-urgente']), 'adulto: só os de todos');
confere(JSON.stringify(await vistos(jovem)) === JSON.stringify(['jovens-info', 'todos-importante']), 'jovem: nunca urgentes (regra 2)');
const semCampos = await chamar('POST', 'avisos', { ...aviso('Todos os moradores', 'Importante', 'x'), onde: '' }, admin);
confere(semCampos.status === 400, 'aviso sem "onde" é recusado');
const sms = (await chamar('GET', 'avisos', undefined, admin)).dados.avisos.every((a) => a.canais.includes('SMS'));
confere(sms, 'todo aviso guarda o SMS entre os canais');

const ev = { nome: 'Festa', dataHora: 'sábado, 28/11, 17h', local: 'Praça', interesse: 'Cinema' };
const evClube = (await chamar('POST', 'eventos', ev, clube)).dados.evento;
const evAdmin = (await chamar('POST', 'eventos', { ...ev, nome: 'Oficial' }, admin)).dados.evento;
confere(evClube.situacao === 'esperando aprovação' && evAdmin.situacao === 'publicado', 'evento de grupo espera aprovação; da administração sai publicado');
const evJ = (await chamar('GET', 'eventos', undefined, jovem)).dados.eventos.map((e) => e.nome);
confere(JSON.stringify(evJ) === JSON.stringify(['Oficial']), 'moradores só veem eventos publicados');
await chamar('POST', 'eventos/presenca', { id: evAdmin.id, vou: true }, jovem);
const conf = (await chamar('GET', 'eventos', undefined, gestora)).dados.eventos[0].confirmacoes;
confere(conf === 1, '"Eu vou" conta a confirmação');

confere((await chamar('POST', 'permissoes', { area: 'Desapego', ligada: true }, adulto)).status === 403, 'adulto não muda permissões');
await chamar('POST', 'permissoes', { area: 'Desapego', ligada: true }, gestora);
confere((await chamar('GET', 'eu', undefined, jovem)).dados.permissoes.Desapego === true, 'gestor libera o Desapego e o jovem passa a ter');
await chamar('POST', 'permissoes', { area: 'Eventos', ligada: false }, gestora);
confere((await chamar('GET', 'eventos', undefined, jovem)).dados.eventos.length === 0, 'Eventos desligado: o jovem não vê eventos');
const euVizinho = (await chamar('GET', 'eu', undefined, vizinho)).dados;
confere(euVizinho.casa.codigo === 'TST-0002' && euVizinho.membros.length === 0, 'outra família não vê os moradores da primeira');

const ag = await chamar('POST', 'avisos', { ...aviso('Todos os moradores', 'Informativo', 'agendado'), situacao: 'agendado', agendadoPara: 'quarta, 5/11, 18h' }, admin);
confere(ag.status === 200 && ag.dados.aviso.situacao === 'agendado', 'aviso agendado com "quarta, 5/11, 18h"');
const agRuim = await chamar('POST', 'avisos', { ...aviso('Todos os moradores', 'Informativo', 'x'), situacao: 'agendado', agendadoPara: 'amanhã' }, admin);
confere(agRuim.status === 400, 'agendamento sem data e hora é recusado');

await chamar('POST', 'permissoes', { area: 'Desapego', ligada: false }, gestora);
confere((await chamar('GET', 'anuncios', undefined, jovem)).status === 403, 'Desapego desligado: o jovem não abre os anúncios');
const semPreco = await chamar('POST', 'anuncios', { titulo: 'Mesa', categoria: 'Móveis' }, gestora);
confere(semPreco.status === 400, 'anúncio de venda sem preço é recusado');
const novo = await chamar('POST', 'anuncios', { titulo: 'Mesa', categoria: 'Móveis', preco: '450', mudanca: true }, gestora);
const doVizinho = (await chamar('GET', 'anuncios', undefined, vizinho)).dados.anuncios;
confere(doVizinho.length === 1 && doVizinho[0].preco === 'R$ 450' && doVizinho[0].mudanca, 'anúncio aparece na hora para os vizinhos (regra 3)');
confere(!JSON.stringify(doVizinho).match(/celular|telefone|email/), 'o telefone do autor nunca aparece');
await chamar('POST', 'anuncios/comentar', { id: novo.dados.id, texto: 'Ainda tem?' }, vizinho);
await chamar('POST', 'anuncios/comentar', { id: novo.dados.id, texto: 'Tem sim.' }, gestora);
const coment = (await chamar('GET', 'anuncios', undefined, adulto)).dados.anuncios[0].comentarios;
confere(coment.length === 2 && !coment[0].doVendedor && coment[1].doVendedor, 'comentários do comprador e do vendedor');

const fams = (await chamar('GET', 'familias', undefined, admin)).dados.familias;
const tst1 = fams.find((f) => f.codigo === 'TST-0001');
confere(tst1 && tst1.pessoas.map((p) => p.papel).join(',') === 'gestor da casa,adulto da casa,jovem', 'Painel: a administração vê as famílias e os moradores');
confere((await chamar('GET', 'familias', undefined, clube)).dados.familias.length === 0, 'Painel: outro grupo não vê as famílias');
confere((await chamar('GET', 'familias', undefined, gestora)).status === 401, 'morador não abre a lista de famílias');

confere((await chamar('POST', 'membros', { equipe: 'esc', nome: 'Joana Prado' }, admin)).status === 200, 'Equipes: a administração põe uma pessoa na equipe');
confere((await chamar('GET', 'membros', undefined, admin)).dados.membros.esc.join() === 'Joana Prado', 'Equipes: a pessoa fica guardada');
confere((await chamar('POST', 'membros', { equipe: 'esc', nome: 'X' }, clube)).status === 403, 'Equipes: outro grupo não põe pessoas');
confere((await chamar('POST', 'membros', { equipe: 'esc', nome: ' ' }, admin)).status === 400, 'Equipes: nome vazio é recusado');
confere((await chamar('GET', 'membros', undefined, gestora)).status === 401, 'morador não abre as equipes');

await chamar('POST', 'sair', {}, gestora);
confere((await chamar('GET', 'eu', undefined, gestora)).dados.tipo === null, 'sair encerra a sessão');

if (falhas) {
  console.error(`\n${falhas} teste(s) falharam`);
  process.exit(1);
}
console.log('\n✓ regras da API conferidas');
