// Modo sem banco (VITE_DADOS=local): as mesmas rotas e regras de api/_lib/rotas.js, rodando no
// navegador. A senha é conferida em JavaScript (PBKDF2 com Web Crypto) contra src/dados/contas-locais.js,
// e os dados ficam no localStorage do aparelho. Cada celular tem a sua cópia: o que se publica num
// aparelho aparece nele, para qualquer conta que entrar ali, mas não nos outros celulares.

import { ANUNCIOS, AVISOS, EVENTOS } from '../../api/_lib/conteudo-inicial.js';
import { horarioAgendado } from '../../api/_lib/agenda.js';
import { contasLocais } from './contas-locais.js';

const CHAVE_DADOS = 'conecta-cidade:dados:v1';
const CHAVE_SESSAO = 'conecta-cidade:sessao:v1';
const CONTATO_PADRAO = '(94) 0000-0000 – Administração do Núcleo';
const ADMINISTRACAO = 'Administração do Núcleo';

class Recusa extends Error {
  constructor(status, mensagem) {
    super(mensagem);
    this.status = status;
  }
}

// ---------------------------------------------------------------------------
// Guardar e ler

const agora = () => new Date().toISOString();
const antes = (minutos) => new Date(Date.now() - minutos * 60000).toISOString();

function ler(chave) {
  try {
    return JSON.parse(localStorage.getItem(chave) || 'null');
  } catch {
    return null;
  }
}

function gravar(chave, valor) {
  try {
    localStorage.setItem(chave, JSON.stringify(valor));
  } catch {
    // sem localStorage (janela anônima, por exemplo): os dados valem só enquanto a página estiver aberta
  }
}

let memoria = null;

function dados() {
  if (!memoria) {
    memoria = ler(CHAVE_DADOS) || semear();
    sincronizarContas(memoria);
  }
  return memoria;
}

// Contas acrescentadas depois que o aparelho já guardou os dados: entram sem apagar nada.
function sincronizarContas(d) {
  let mudou = false;
  // Contas tiradas do piloto saem também do aparelho (as pessoas daqui vêm todas de contas-locais.js).
  const emails = new Set(contasLocais.pessoas.map((p) => p.email));
  const codigos = new Set(contasLocais.casas.map((c) => c.codigo));
  const antes = d.pessoas.length + d.casas.length;
  d.pessoas = d.pessoas.filter((p) => emails.has(p.email));
  d.casas = d.casas.filter((c) => codigos.has(c.codigo));
  if (d.pessoas.length + d.casas.length !== antes) mudou = true;
  for (const c of contasLocais.casas) {
    if (!d.casas.some((x) => x.codigo === c.codigo)) {
      d.casas.push({ id: c.id, codigo: c.codigo, rua: null, numero: null, quarteirao: null });
      mudou = true;
    }
  }
  for (const p of contasLocais.pessoas) {
    if (d.pessoas.some((x) => x.email === p.email)) continue;
    d.pessoas.push({
      id: p.id,
      casaId: d.casas.find((c) => c.codigo === p.casa).id,
      nome: p.nome,
      apelido: p.apelido || null,
      idade: null,
      email: p.email,
      celular: null,
      perfil: p.perfil,
      situacao: 'ativa',
    });
    if (p.perfil === 'jovem') d.permissoes[p.id] = { Eventos: true, Oportunidades: true, Desapego: false };
    mudou = true;
  }
  if (mudou) salvar();
}

function salvar() {
  gravar(CHAVE_DADOS, memoria);
}

const proximoId = (lista) => lista.reduce((m, x) => Math.max(m, x.id), 0) + 1;

// Contas do piloto e conteúdo de demonstração do protótipo (o mesmo de api/_lib/conteudo-inicial.js).
function semear() {
  const casas = contasLocais.casas.map((c) => ({ id: c.id, codigo: c.codigo, rua: null, numero: null, quarteirao: null }));
  const pessoas = contasLocais.pessoas.map((p) => ({
    id: p.id,
    casaId: casas.find((c) => c.codigo === p.casa).id,
    nome: p.nome,
    apelido: p.apelido || null,
    idade: null,
    email: p.email,
    celular: null,
    perfil: p.perfil,
    situacao: 'ativa',
  }));
  const permissoes = {};
  for (const p of pessoas.filter((x) => x.perfil === 'jovem')) {
    permissoes[p.id] = { Eventos: true, Oportunidades: true, Desapego: false };
  }
  const mario = contasLocais.organizadores.find((o) => o.email === 'mario@conectacidade.app');
  const avisos = AVISOS.map(([publico, nivel, categoria, oque, quando, onde, fazer], i) => ({
    id: i + 1,
    publico,
    nivel,
    categoria,
    oque,
    quando,
    onde,
    oQueFazer: fazer,
    contato: CONTATO_PADRAO,
    canais: ['SMS'],
    situacao: 'no ar',
    agendadoPara: null,
    agendadoEm: null,
    enviadoEm: antes(i),
    criadoEm: antes(i),
    publicadoPor: mario ? mario.id : null,
  }));
  const eventos = EVENTOS.map(([nome, dataHora, local, interesse, solidario, quem], i) => ({
    id: i + 1,
    nome,
    organizadorId: quem ? null : mario ? mario.id : null,
    organizadorNome: quem,
    dataHora,
    local,
    interesse,
    ingressoSolidario: solidario,
    vagas: null,
    situacao: 'publicado',
    agendadoEm: null,
    criadoEm: antes(100 - i),
  }));
  const anuncios = [];
  const comentarios = [];
  ANUNCIOS.forEach(([titulo, categoria, preco, mudanca, doacao, ilustracao, vendedor, lista], i) => {
    const id = i + 1;
    anuncios.push({
      id,
      autorId: null,
      autorNome: vendedor,
      titulo,
      categoria,
      preco,
      doacao,
      mudanca,
      descricao: null,
      ilustracao,
      situacao: 'ativo',
      criadoEm: antes(1440 + i),
    });
    for (const [quem, texto, ha] of lista) {
      const [n, unidade] = ha.split(' ');
      const minutos = Number(n) * (unidade.startsWith('day') ? 1440 : unidade.startsWith('hour') ? 60 : 1);
      comentarios.push({
        id: comentarios.length + 1,
        anuncioId: id,
        autorId: null,
        autorNome: quem === '*' ? vendedor : quem,
        doVendedor: quem === '*',
        texto,
        criadoEm: antes(minutos),
      });
    }
  });
  const d = { casas, pessoas, permissoes, avisos, eventos, confirmacoes: [], anuncios, comentarios };
  memoria = d;
  salvar();
  return d;
}

export function reiniciarDados() {
  memoria = null;
  try {
    localStorage.removeItem(CHAVE_DADOS);
    localStorage.removeItem(CHAVE_SESSAO);
  } catch {
    // nada a apagar
  }
}

// ---------------------------------------------------------------------------
// Senhas (PBKDF2-SHA256, Web Crypto)

const deBase64 = (t) => Uint8Array.from(atob(t), (c) => c.charCodeAt(0));

async function confere(segredo, guardado) {
  if (typeof segredo !== 'string' || !guardado) return false;
  const [tipo, iteracoes, sal, hash] = guardado.split('$');
  if (tipo !== 'pbkdf2-sha256' || !globalThis.crypto || !crypto.subtle) return false;
  const chave = await crypto.subtle.importKey('raw', new TextEncoder().encode(segredo), 'PBKDF2', false, ['deriveBits']);
  const bits = new Uint8Array(
    await crypto.subtle.deriveBits({ name: 'PBKDF2', hash: 'SHA-256', salt: deBase64(sal), iterations: Number(iteracoes) }, chave, 256),
  );
  const esperado = deBase64(hash);
  let diferenca = bits.length ^ esperado.length;
  for (let i = 0; i < esperado.length; i++) diferenca |= bits[i] ^ esperado[i];
  return diferenca === 0;
}

// ---------------------------------------------------------------------------
// Sessão

const sessaoAtual = () => ler(CHAVE_SESSAO);

function morador() {
  const s = sessaoAtual();
  const p = s && s.tipo === 'morador' && dados().pessoas.find((x) => x.id === s.id);
  if (!p || p.situacao !== 'ativa') throw new Recusa(401, 'Entre com sua conta.');
  return p;
}

function organizador() {
  const s = sessaoAtual();
  const o = s && s.tipo === 'organizador' && contasLocais.organizadores.find((x) => x.id === s.id);
  if (!o) throw new Recusa(401, 'Entre com o e-mail e o código de acesso.');
  return o;
}

const permissoesDoJovem = (id) => Object.assign({ Eventos: true, Oportunidades: true, Desapego: false }, dados().permissoes[id]);

const pessoaPublica = (p) => ({
  id: p.id,
  nome: p.nome,
  apelido: p.apelido,
  idade: p.idade,
  perfil: p.perfil,
  situacao: p.situacao,
});

function acharPessoa(ident) {
  const raw = String(ident || '').trim().toLowerCase();
  const digitos = raw.replace(/\D/g, '');
  return dados().pessoas.find((p) => (p.email && p.email.toLowerCase() === raw) || (digitos && p.celular === digitos));
}

// ---------------------------------------------------------------------------
// Formatos (os mesmos da API)

const nomeDoOrganizador = (id) => (contasLocais.organizadores.find((o) => o.id === id) || {}).nome || null;
const grupoDoOrganizador = (id) => (contasLocais.organizadores.find((o) => o.id === id) || {}).grupo || null;

const avisoPublico = (a) => ({
  id: a.id,
  publico: a.publico,
  nivel: a.nivel,
  categoria: a.categoria,
  oque: a.oque,
  quando: a.quando,
  onde: a.onde,
  oQueFazer: a.oQueFazer,
  contato: a.contato,
  canais: a.canais,
  situacao: a.situacao,
  agendadoPara: a.agendadoPara,
  enviadoEm: a.enviadoEm,
  criadoEm: a.criadoEm,
  publicadoPor: nomeDoOrganizador(a.publicadoPor),
});

function eventoPublico(e, pessoaId) {
  const confirmacoes = dados().confirmacoes.filter((c) => c.eventoId === e.id);
  return {
    id: e.id,
    nome: e.nome,
    dataHora: e.dataHora,
    local: e.local,
    interesse: e.interesse,
    ingressoSolidario: e.ingressoSolidario,
    vagas: e.vagas,
    situacao: e.situacao,
    organizador: e.organizadorId ? nomeDoOrganizador(e.organizadorId) : e.organizadorNome,
    grupo: e.organizadorId ? grupoDoOrganizador(e.organizadorId) : e.organizadorNome,
    confirmacoes: confirmacoes.length,
    euVou: confirmacoes.some((c) => c.pessoaId === pessoaId),
    criadoEm: e.criadoEm,
  };
}

function publicarAgendados() {
  const d = dados();
  let mudou = false;
  const t = Date.now();
  for (const a of d.avisos) {
    if (a.situacao === 'agendado' && a.agendadoEm && new Date(a.agendadoEm).getTime() <= t) {
      a.situacao = 'no ar';
      a.enviadoEm = agora();
      mudou = true;
    }
  }
  for (const e of d.eventos) {
    if (e.situacao === 'agendado' && e.agendadoEm && new Date(e.agendadoEm).getTime() <= t) {
      e.situacao = grupoDoOrganizador(e.organizadorId) === ADMINISTRACAO ? 'publicado' : 'esperando aprovação';
      mudou = true;
    }
  }
  if (mudou) salvar();
}

const ORDEM_NIVEL = { urgente: 0, importante: 1, informativo: 2 };
const PUBLICOS = { 'Todos os moradores': 'todos', 'Só gestores da casa': 'gestores', 'Só jovens': 'jovens' };
const NIVEIS = { Urgente: 'urgente', Importante: 'importante', Informativo: 'informativo' };
const SITUACOES_AVISO = new Set(['rascunho', 'agendado', 'no ar', 'fora do ar']);
const CATEGORIAS_DESAPEGO = new Set(['Móveis', 'Eletrônicos', 'Roupas', 'Livros', 'Esportes']);

const podeUsarDesapego = (p) => p.perfil !== 'jovem' || permissoesDoJovem(p.id).Desapego;

// ---------------------------------------------------------------------------
// Rotas

const rotas = {
  'GET conta': (q) => {
    const p = acharPessoa(q.get('ident'));
    if (!p) return { existe: false };
    return { existe: true, nome: p.nome, perfil: p.perfil, situacao: p.situacao };
  },

  'POST entrar': async (q, corpo) => {
    const p = acharPessoa(corpo.ident);
    const conta = p && contasLocais.pessoas.find((x) => x.id === p.id);
    if (!p || !(await confere(String(corpo.senha || ''), conta && conta.senha))) throw new Recusa(401, 'Senha incorreta');
    if (p.situacao !== 'ativa') throw new Recusa(403, 'Esperando aprovação');
    const aba = p.perfil === 'jovem' ? 'jovem' : 'gestor';
    if (corpo.perfil && corpo.perfil !== aba) throw new Recusa(409, 'Perfil trocado');
    gravar(CHAVE_SESSAO, { tipo: 'morador', id: p.id });
    return { ok: true, perfil: p.perfil };
  },

  'POST organizador/entrar': async (q, corpo) => {
    const email = String(corpo.email || '').trim().toLowerCase();
    const o = contasLocais.organizadores.find((x) => x.email === email);
    if (!o || !(await confere(String(corpo.codigo || '').trim().toUpperCase(), o.codigo))) {
      throw new Recusa(401, 'E-mail ou código de acesso não confere.');
    }
    gravar(CHAVE_SESSAO, { tipo: 'organizador', id: o.id });
    return { ok: true };
  },

  'POST sair': () => {
    try {
      localStorage.removeItem(CHAVE_SESSAO);
    } catch {
      // nada a apagar
    }
    return { ok: true };
  },

  'GET eu': () => {
    const s = sessaoAtual();
    if (!s) return { tipo: null };
    if (s.tipo === 'organizador') {
      const o = contasLocais.organizadores.find((x) => x.id === s.id);
      return o
        ? { tipo: 'organizador', organizador: { id: o.id, nome: o.nome, apelido: o.apelido || null, email: o.email, grupo: o.grupo, areas: o.areas } }
        : { tipo: null };
    }
    const d = dados();
    const p = d.pessoas.find((x) => x.id === s.id);
    if (!p || p.situacao !== 'ativa') return { tipo: null };
    const casa = d.casas.find((c) => c.id === p.casaId);
    const outros = d.pessoas.filter((m) => m.casaId === p.casaId && m.id !== p.id);
    const resposta = { tipo: 'morador', pessoa: pessoaPublica(p), membros: outros.map(pessoaPublica) };
    if (p.perfil === 'gestor') {
      resposta.casa = { ...casa };
      resposta.permissoesDosJovens = {};
      for (const m of outros.filter((x) => x.perfil === 'jovem')) resposta.permissoesDosJovens[m.id] = permissoesDoJovem(m.id);
    } else {
      resposta.casa = { id: casa.id };
    }
    if (p.perfil === 'jovem') resposta.permissoes = permissoesDoJovem(p.id);
    return resposta;
  },

  'POST permissoes': (q, corpo) => {
    const p = morador();
    if (p.perfil !== 'gestor') throw new Recusa(403, 'Só gestores mudam as permissões.');
    const area = String(corpo.area || '');
    if (!['Eventos', 'Oportunidades', 'Desapego'].includes(area)) throw new Recusa(400, 'Área desconhecida.');
    const d = dados();
    const jovens = d.pessoas.filter((x) => x.casaId === p.casaId && x.perfil === 'jovem');
    for (const j of corpo.pessoaId ? jovens.filter((x) => x.id === Number(corpo.pessoaId)) : jovens) {
      d.permissoes[j.id] = { ...permissoesDoJovem(j.id), [area]: Boolean(corpo.ligada) };
    }
    salvar();
    return { ok: true };
  },

  'GET avisos': () => {
    publicarAgendados();
    const s = sessaoAtual();
    const lista = dados().avisos;
    if (s && s.tipo === 'organizador') {
      // Regra 4: cada grupo vê só as áreas dele; avisos oficiais são da Administração do Núcleo.
      if (organizador().grupo !== ADMINISTRACAO) return { avisos: [] };
      return { avisos: lista.slice().sort((a, b) => b.criadoEm.localeCompare(a.criadoEm)).map(avisoPublico) };
    }
    const p = morador();
    const ve = (a) => {
      if (p.perfil === 'gestor') return a.publico !== 'jovens' || a.nivel === 'urgente';
      if (p.perfil === 'adulto') return a.publico === 'todos';
      return a.publico !== 'gestores' && a.nivel !== 'urgente';
    };
    const visiveis = lista
      .filter((a) => a.situacao === 'no ar' && ve(a))
      .sort((a, b) => ORDEM_NIVEL[a.nivel] - ORDEM_NIVEL[b.nivel] || String(b.enviadoEm).localeCompare(String(a.enviadoEm)));
    return { avisos: visiveis.map(avisoPublico) };
  },

  'POST avisos': (q, corpo) => {
    const o = organizador();
    if (o.grupo !== ADMINISTRACAO || !o.areas.includes('Avisos')) {
      throw new Recusa(403, 'Só a Administração do Núcleo publica avisos oficiais.');
    }
    const situacao = SITUACOES_AVISO.has(corpo.situacao) ? corpo.situacao : 'no ar';
    const publico = PUBLICOS[corpo.publico];
    const nivel = NIVEIS[corpo.nivel];
    if (!publico || !nivel) throw new Recusa(400, 'Escolha para quem e o nível.');
    const campos = [corpo.oque, corpo.quando, corpo.onde, corpo.oQueFazer].map((x) => String(x || '').trim());
    if (situacao !== 'rascunho' && campos.some((x) => !x)) throw new Recusa(400, 'Preencha o quê, quando, onde e o que fazer.');
    if (situacao === 'rascunho' && !campos[0]) throw new Recusa(400, 'Preencha pelo menos o quê.');
    const canais = Array.isArray(corpo.canais) ? corpo.canais.map(String) : [];
    if (!canais.includes('SMS')) canais.unshift('SMS');
    const d = dados();
    const a = {
      id: proximoId(d.avisos),
      publico,
      nivel,
      categoria: String(corpo.categoria || ''),
      oque: campos[0],
      quando: campos[1],
      onde: campos[2],
      oQueFazer: campos[3],
      contato: CONTATO_PADRAO,
      canais,
      situacao,
      agendadoPara: situacao === 'agendado' ? String(corpo.agendadoPara || '') : null,
      agendadoEm: situacao === 'agendado' ? horarioAgendado(corpo.agendadoPara) : null,
      enviadoEm: situacao === 'no ar' ? agora() : null,
      criadoEm: agora(),
      publicadoPor: o.id,
    };
    d.avisos.push(a);
    salvar();
    return { aviso: avisoPublico(a) };
  },

  'POST avisos/situacao': (q, corpo) => {
    const o = organizador();
    if (o.grupo !== ADMINISTRACAO) throw new Recusa(403, 'Só a Administração do Núcleo muda avisos oficiais.');
    const a = dados().avisos.find((x) => x.id === Number(corpo.id));
    if (a) {
      a.situacao = corpo.situacao === 'fora do ar' ? 'fora do ar' : 'no ar';
      if (a.situacao === 'no ar' && !a.enviadoEm) a.enviadoEm = agora();
      salvar();
    }
    return { ok: true };
  },

  'GET eventos': () => {
    publicarAgendados();
    const s = sessaoAtual();
    const lista = dados().eventos;
    if (s && s.tipo === 'organizador') {
      // Regra 4: a Administração vê todos os eventos; os outros grupos, só os do próprio grupo.
      const o = organizador();
      const doGrupo = o.grupo === ADMINISTRACAO ? lista : lista.filter((e) => e.organizadorId && grupoDoOrganizador(e.organizadorId) === o.grupo);
      return { eventos: doGrupo.slice().sort((a, b) => b.criadoEm.localeCompare(a.criadoEm)).map((e) => eventoPublico(e, 0)) };
    }
    const p = morador();
    if (p.perfil === 'jovem' && !permissoesDoJovem(p.id).Eventos) return { eventos: [] };
    return {
      eventos: lista
        .filter((e) => e.situacao === 'publicado')
        .sort((a, b) => a.criadoEm.localeCompare(b.criadoEm))
        .map((e) => eventoPublico(e, p.id)),
    };
  },

  'POST eventos': (q, corpo) => {
    const o = organizador();
    if (!o.areas.includes('Eventos')) throw new Recusa(403, 'Seu grupo não publica eventos.');
    const nome = String(corpo.nome || '').trim();
    const dataHora = String(corpo.dataHora || '').trim();
    const local = String(corpo.local || '').trim();
    const rascunho = corpo.situacao === 'rascunho';
    const agendado = corpo.situacao === 'agendado';
    if (!rascunho && (!nome || !dataHora || !local)) throw new Recusa(400, 'Preencha o nome, a data e hora e o local.');
    if (rascunho && !nome) throw new Recusa(400, 'Preencha pelo menos o nome do evento.');
    const d = dados();
    const e = {
      id: proximoId(d.eventos),
      nome,
      organizadorId: o.id,
      organizadorNome: null,
      dataHora,
      local,
      interesse: corpo.interesse || null,
      ingressoSolidario: Boolean(corpo.ingressoSolidario),
      vagas: /^\d+$/.test(String(corpo.vagas || '').trim()) ? Number(corpo.vagas) : null,
      situacao: rascunho ? 'rascunho' : agendado ? 'agendado' : o.grupo === ADMINISTRACAO ? 'publicado' : 'esperando aprovação',
      agendadoEm: agendado ? horarioAgendado(corpo.agendadoPara) : null,
      criadoEm: agora(),
    };
    d.eventos.push(e);
    salvar();
    return { evento: eventoPublico(e, 0) };
  },

  'POST eventos/situacao': (q, corpo) => {
    const o = organizador();
    if (o.grupo !== ADMINISTRACAO) throw new Recusa(403, 'Só a administração muda a situação dos eventos.');
    const e = dados().eventos.find((x) => x.id === Number(corpo.id));
    if (e) {
      e.situacao = corpo.situacao === 'fora do ar' ? 'fora do ar' : 'publicado';
      salvar();
    }
    return { ok: true };
  },

  'POST eventos/presenca': (q, corpo) => {
    const p = morador();
    const d = dados();
    const id = Number(corpo.id);
    d.confirmacoes = d.confirmacoes.filter((c) => !(c.eventoId === id && c.pessoaId === p.id));
    const e = d.eventos.find((x) => x.id === id && x.situacao === 'publicado');
    if (corpo.vou && e) d.confirmacoes.push({ eventoId: id, pessoaId: p.id, criadaEm: agora() });
    salvar();
    return { ok: true };
  },

  'GET anuncios': () => {
    const p = morador();
    if (!podeUsarDesapego(p)) throw new Recusa(403, 'O gestor da casa ainda não liberou o Desapego.');
    const d = dados();
    const nomeDe = (id) => (d.pessoas.find((x) => x.id === id) || {}).nome;
    return {
      anuncios: d.anuncios
        .filter((a) => a.situacao === 'ativo')
        .sort((a, b) => b.criadoEm.localeCompare(a.criadoEm))
        .map((a) => ({
          id: a.id,
          titulo: a.titulo,
          categoria: a.categoria,
          preco: a.preco,
          doacao: a.doacao,
          mudanca: a.mudanca,
          descricao: a.descricao,
          ilustracao: a.ilustracao,
          vendedor: a.autorId ? nomeDe(a.autorId) : a.autorNome,
          meu: a.autorId === p.id,
          criadoEm: a.criadoEm,
          comentarios: d.comentarios
            .filter((c) => c.anuncioId === a.id)
            .map((c) => ({ quem: c.autorNome, doVendedor: c.doVendedor, texto: c.texto, criadoEm: c.criadoEm, meu: c.autorId === p.id })),
        })),
    };
  },

  'POST anuncios': (q, corpo) => {
    const p = morador();
    if (!podeUsarDesapego(p)) throw new Recusa(403, 'O gestor da casa ainda não liberou o Desapego.');
    const titulo = String(corpo.titulo || '').trim();
    const categoria = String(corpo.categoria || '');
    const doacao = Boolean(corpo.doacao);
    const valor = String(corpo.preco || '').replace(/[^0-9]/g, '');
    if (!titulo || !CATEGORIAS_DESAPEGO.has(categoria) || (!doacao && !valor)) {
      throw new Recusa(400, 'Foto, título e preço (ou doação) são obrigatórios.');
    }
    const d = dados();
    const id = proximoId(d.anuncios);
    d.anuncios.push({
      id,
      autorId: p.id,
      autorNome: null,
      titulo,
      categoria,
      preco: doacao ? 'Grátis' : 'R$ ' + valor,
      doacao,
      mudanca: Boolean(corpo.mudanca),
      descricao: String(corpo.descricao || '').trim() || null,
      ilustracao: null,
      situacao: 'ativo',
      criadoEm: agora(),
    });
    salvar();
    return { id };
  },

  'POST anuncios/comentar': (q, corpo) => {
    const p = morador();
    if (!podeUsarDesapego(p)) throw new Recusa(403, 'O gestor da casa ainda não liberou o Desapego.');
    const texto = String(corpo.texto || '').trim();
    if (!texto) throw new Recusa(400, 'Escreva o comentário.');
    const d = dados();
    const a = d.anuncios.find((x) => x.id === Number(corpo.id) && x.situacao === 'ativo');
    if (!a) throw new Recusa(404, 'Anúncio não encontrado.');
    d.comentarios.push({
      id: proximoId(d.comentarios),
      anuncioId: a.id,
      autorId: p.id,
      autorNome: p.nome,
      doVendedor: a.autorId === p.id,
      texto,
      criadoEm: agora(),
    });
    salvar();
    return { ok: true };
  },
};

// Painel: famílias cadastradas (só a Administração do Núcleo vê).
const PAPEIS = { gestor: 'gestor da casa', adulto: 'adulto da casa', jovem: 'jovem' };

rotas['GET familias'] = () => {
  const o = organizador();
  if (o.grupo !== ADMINISTRACAO) return { familias: [] };
  const d = dados();
  return {
    familias: d.casas
      .slice()
      .sort((a, b) => a.id - b.id)
      .map((casa) => ({
        codigo: casa.codigo,
        endereco: casa.rua ? casa.rua + (casa.numero ? ', ' + casa.numero : '') : null,
        pessoas: d.pessoas
          .filter((p) => p.casaId === casa.id)
          .map((p) => ({ nome: p.nome, apelido: p.apelido, papel: PAPEIS[p.perfil] + (p.situacao === 'ativa' ? '' : ', esperando aprovação') })),
      })),
  };
};

// Equipes e permissões: quantas pessoas cada grupo tem no Meu Carajás Organizadores.
rotas['GET equipes'] = () => {
  organizador();
  const n = {};
  for (const o of contasLocais.organizadores) n[o.grupo] = (n[o.grupo] || 0) + 1;
  return { equipes: n };
};

// Equipes que publicam: pessoas acrescentadas pela tela (as de exemplo vêm do protótipo).
const EQUIPES_COM_PESSOAS = new Set(['adm', 'ef', 'esc', 'clube']);

rotas['GET membros'] = () => {
  organizador();
  return { membros: dados().membros || {} };
};

rotas['POST membros'] = (q, corpo) => {
  const o = organizador();
  if (o.grupo !== ADMINISTRACAO) throw new Recusa(403, 'Só a Administração do Núcleo põe pessoas nas equipes.');
  const equipe = String(corpo.equipe || '');
  const nome = String(corpo.nome || '').trim().slice(0, 80);
  if (!EQUIPES_COM_PESSOAS.has(equipe)) throw new Recusa(400, 'Equipe não encontrada.');
  if (!nome) throw new Recusa(400, 'Escreva o nome da pessoa.');
  const d = dados();
  d.membros = d.membros || {};
  d.membros[equipe] = (d.membros[equipe] || []).concat([nome]);
  salvar();
  return { ok: true };
};

/** Atende uma chamada como a API faria. Devolve os dados ou lança um erro com `status`. */
export async function chamarLocal(caminho, corpo) {
  const [rota, busca] = caminho.split('?');
  const metodo = corpo === undefined ? 'GET' : 'POST';
  const tratar = rotas[metodo + ' ' + rota];
  if (!tratar) throw new Recusa(404, 'Rota não encontrada.');
  return tratar(new URLSearchParams(busca || ''), corpo || {});
}
