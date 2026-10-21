// API do Conecta Cidade. Uma função só na Vercel (api/index.js) atende todas as rotas abaixo.
// Regras: docs/produto/perfis-e-permissoes.md e docs/produto/canais-de-comunicacao.md.

import { horarioAgendado } from './agenda.js';
import { db } from './db.js';
import {
  confere,
  cookieApagado,
  cookieDeSessao,
  criarSessao,
  encerrarSessao,
  sessaoDoPedido,
} from './seguranca.js';

// ---------------------------------------------------------------------------
// Utilidades HTTP (funcionam na Vercel e no servidor de desenvolvimento)

function responder(res, status, corpo, cabecalhos = {}) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  for (const [k, v] of Object.entries(cabecalhos)) res.setHeader(k, v);
  res.end(JSON.stringify(corpo));
}

async function lerCorpo(req) {
  if (req.body !== undefined) return typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body;
  const partes = [];
  for await (const p of req) partes.push(p);
  const txt = Buffer.concat(partes).toString('utf8');
  return txt ? JSON.parse(txt) : {};
}

const seguro = (req) =>
  (req.headers['x-forwarded-proto'] || '').includes('https') || Boolean(process.env.VERCEL);

class Recusa extends Error {
  constructor(status, mensagem) {
    super(mensagem);
    this.status = status;
  }
}

// ---------------------------------------------------------------------------
// Quem está pedindo

async function morador(c, req) {
  const s = await sessaoDoPedido(c, req);
  if (!s || s.tipo !== 'morador') throw new Recusa(401, 'Entre com sua conta.');
  const [p] = await c.query('select * from pessoas where id = $1', [s.dono_id]);
  if (!p || p.situacao !== 'ativa') throw new Recusa(401, 'Entre com sua conta.');
  return p;
}

async function organizador(c, req) {
  const s = await sessaoDoPedido(c, req);
  if (!s || s.tipo !== 'organizador') throw new Recusa(401, 'Entre com o e-mail e o código de acesso.');
  const [o] = await c.query('select * from organizadores where id = $1', [s.dono_id]);
  if (!o) throw new Recusa(401, 'Entre com o e-mail e o código de acesso.');
  return o;
}

const ehGestor = (p) => p.perfil === 'gestor';
const ehAdministracao = (o) => o.grupo === 'Administração do Núcleo';

async function permissoesDoJovem(c, pessoaId) {
  const linhas = await c.query('select area, ligada from permissoes_jovem where pessoa_id = $1', [pessoaId]);
  const p = { Eventos: true, Oportunidades: true, Desapego: false };
  for (const l of linhas) p[l.area] = l.ligada;
  return p;
}

// ---------------------------------------------------------------------------
// Formatos devolvidos ao app

const pessoaPublica = (p) => ({
  id: p.id,
  nome: p.nome,
  apelido: p.apelido,
  idade: p.idade,
  perfil: p.perfil,
  situacao: p.situacao,
});

const avisoPublico = (a) => ({
  id: a.id,
  publico: a.publico,
  nivel: a.nivel,
  categoria: a.categoria,
  oque: a.oque,
  quando: a.quando,
  onde: a.onde,
  oQueFazer: a.o_que_fazer,
  contato: a.contato,
  canais: a.canais,
  situacao: a.situacao,
  agendadoPara: a.agendado_para,
  enviadoEm: a.enviado_em,
  criadoEm: a.criado_em,
  publicadoPor: a.publicado_por_nome || null,
});

const eventoPublico = (e) => ({
  id: e.id,
  nome: e.nome,
  dataHora: e.data_hora,
  local: e.local,
  interesse: e.interesse,
  ingressoSolidario: e.ingresso_solidario,
  vagas: e.vagas,
  situacao: e.situacao,
  organizador: e.organizador_nome || null,
  grupo: e.organizador_grupo || null,
  confirmacoes: Number(e.confirmacoes || 0),
  euVou: Boolean(e.eu_vou),
  criadoEm: e.criado_em,
});

// ---------------------------------------------------------------------------
// Rotas

const PUBLICOS = { 'Todos os moradores': 'todos', 'Só gestores da casa': 'gestores', 'Só jovens': 'jovens' };
const NIVEIS = { Urgente: 'urgente', Importante: 'importante', Informativo: 'informativo' };
const SITUACOES_AVISO = new Set(['rascunho', 'agendado', 'no ar', 'fora do ar']);
const CONTATO_PADRAO = '(94) 0000-0000 – Administração do Núcleo';

// Publicações agendadas entram no ar quando chega a hora (conferido a cada consulta).
async function publicarAgendados(c) {
  await c.query(
    "update avisos set situacao = 'no ar', enviado_em = now() where situacao = 'agendado' and agendado_em <= now()",
  );
  await c.query(
    `update eventos e set situacao = case when o.grupo = 'Administração do Núcleo' then 'publicado' else 'esperando aprovação' end
     from organizadores o where o.id = e.organizador_id and e.situacao = 'agendado' and e.agendado_em <= now()`,
  );
}

const rotas = {
  // Tela Entrar: "o app mostra se a conta existe, se é de outro perfil ou se espera aprovação".
  'GET conta': async (c, req, q) => {
    const ident = String(q.get('ident') || '').trim().toLowerCase();
    const digitos = ident.replace(/\D/g, '');
    if (!ident) return { existe: false };
    const [p] = await c.query('select nome, perfil, situacao from pessoas where lower(email) = $1 or celular = $2', [
      ident,
      digitos || '-',
    ]);
    if (!p) return { existe: false };
    return { existe: true, nome: p.nome, perfil: p.perfil, situacao: p.situacao };
  },

  'POST entrar': async (c, req, q, corpo, res) => {
    const ident = String(corpo.ident || '').trim().toLowerCase();
    const digitos = ident.replace(/\D/g, '');
    const [p] = await c.query('select * from pessoas where lower(email) = $1 or celular = $2', [ident, digitos || '-']);
    if (!p || !confere(String(corpo.senha || ''), p.senha_hash)) throw new Recusa(401, 'Senha incorreta');
    if (p.situacao !== 'ativa') throw new Recusa(403, 'Esperando aprovação');
    const aba = p.perfil === 'jovem' ? 'jovem' : 'gestor';
    if (corpo.perfil && corpo.perfil !== aba) throw new Recusa(409, 'Perfil trocado');
    const token = await criarSessao(c, 'morador', p.id);
    res.setHeader('Set-Cookie', cookieDeSessao(token, seguro(req)));
    return { ok: true, perfil: p.perfil };
  },

  // Entrada do organizador: e-mail e código de acesso do convite.
  'POST organizador/entrar': async (c, req, q, corpo, res) => {
    const email = String(corpo.email || '').trim().toLowerCase();
    const [o] = await c.query('select * from organizadores where lower(email) = $1', [email]);
    if (!o || !confere(String(corpo.codigo || '').trim().toUpperCase(), o.codigo_hash)) {
      throw new Recusa(401, 'E-mail ou código de acesso não confere.');
    }
    const token = await criarSessao(c, 'organizador', o.id);
    res.setHeader('Set-Cookie', cookieDeSessao(token, seguro(req)));
    return { ok: true };
  },

  'POST sair': async (c, req, q, corpo, res) => {
    await encerrarSessao(c, req);
    res.setHeader('Set-Cookie', cookieApagado(seguro(req)));
    return { ok: true };
  },

  'GET eu': async (c, req) => {
    const s = await sessaoDoPedido(c, req);
    if (!s) return { tipo: null };
    if (s.tipo === 'organizador') {
      const [o] = await c.query('select id, nome, email, grupo, areas from organizadores where id = $1', [s.dono_id]);
      return o ? { tipo: 'organizador', organizador: o } : { tipo: null };
    }
    const [p] = await c.query('select * from pessoas where id = $1', [s.dono_id]);
    if (!p || p.situacao !== 'ativa') return { tipo: null };
    const [casa] = await c.query('select id, rua, numero, quarteirao, codigo from casas where id = $1', [p.casa_id]);
    const outros = await c.query('select * from pessoas where casa_id = $1 and id <> $2 order by id', [p.casa_id, p.id]);
    const resposta = { tipo: 'morador', pessoa: pessoaPublica(p), membros: outros.map(pessoaPublica) };
    // Registro Casa: código da família visível aos gestores da casa e à administração.
    if (ehGestor(p)) {
      resposta.casa = casa;
      resposta.permissoesDosJovens = {};
      for (const m of outros.filter((m) => m.perfil === 'jovem')) {
        resposta.permissoesDosJovens[m.id] = await permissoesDoJovem(c, m.id);
      }
    } else {
      resposta.casa = { id: casa.id };
    }
    if (p.perfil === 'jovem') resposta.permissoes = await permissoesDoJovem(c, p.id);
    return resposta;
  },

  // Minha casa: o gestor liga e desliga o que os jovens da casa podem usar.
  'POST permissoes': async (c, req, q, corpo) => {
    const p = await morador(c, req);
    if (!ehGestor(p)) throw new Recusa(403, 'Só gestores mudam as permissões.');
    const area = String(corpo.area || '');
    if (!['Eventos', 'Oportunidades', 'Desapego'].includes(area)) throw new Recusa(400, 'Área desconhecida.');
    const ligada = Boolean(corpo.ligada);
    const jovens = await c.query("select id from pessoas where casa_id = $1 and perfil = 'jovem'", [p.casa_id]);
    const alvo = corpo.pessoaId ? jovens.filter((j) => j.id === Number(corpo.pessoaId)) : jovens;
    for (const j of alvo) {
      await c.query(
        `insert into permissoes_jovem (pessoa_id, area, ligada) values ($1, $2, $3)
         on conflict (pessoa_id, area) do update set ligada = excluded.ligada`,
        [j.id, area, ligada],
      );
    }
    return { ok: true };
  },

  'GET avisos': async (c, req) => {
    await publicarAgendados(c);
    const s = await sessaoDoPedido(c, req);
    if (s && s.tipo === 'organizador') {
      await organizador(c, req);
      const todos = await c.query(
        `select a.*, o.nome as publicado_por_nome from avisos a left join organizadores o on o.id = a.publicado_por
         order by a.criado_em desc`,
      );
      return { avisos: todos.map(avisoPublico) };
    }
    const p = await morador(c, req);
    // Regras de permissão 1 e 2 e público do aviso (todos, só gestores, só jovens).
    let filtro;
    if (p.perfil === 'gestor') filtro = "(publico in ('todos', 'gestores') or (publico = 'jovens' and nivel = 'urgente'))";
    else if (p.perfil === 'adulto') filtro = "publico = 'todos'";
    else filtro = "publico in ('todos', 'jovens') and nivel <> 'urgente'";
    const lista = await c.query(
      `select * from avisos where situacao = 'no ar' and ${filtro}
       order by case nivel when 'urgente' then 0 when 'importante' then 1 else 2 end, enviado_em desc`,
    );
    return { avisos: lista.map(avisoPublico) };
  },

  'POST avisos': async (c, req, q, corpo) => {
    const o = await organizador(c, req);
    if (!ehAdministracao(o) || !o.areas.includes('Avisos')) {
      throw new Recusa(403, 'Só a Administração do Núcleo publica avisos oficiais.');
    }
    const situacao = SITUACOES_AVISO.has(corpo.situacao) ? corpo.situacao : 'no ar';
    const publico = PUBLICOS[corpo.publico];
    const nivel = NIVEIS[corpo.nivel];
    if (!publico || !nivel) throw new Recusa(400, 'Escolha para quem e o nível.');
    const oque = String(corpo.oque || '').trim();
    const campos = [oque, corpo.quando, corpo.onde, corpo.oQueFazer].map((x) => String(x || '').trim());
    if (situacao !== 'rascunho' && campos.some((x) => !x)) {
      throw new Recusa(400, 'Preencha o quê, quando, onde e o que fazer.');
    }
    if (situacao === 'rascunho' && !oque) throw new Recusa(400, 'Preencha pelo menos o quê.');
    const canais = Array.isArray(corpo.canais) ? corpo.canais.map(String) : [];
    // Requisitos V1: SMS obrigatório em todos os níveis.
    if (!canais.includes('SMS')) canais.unshift('SMS');
    const agendadoEm = situacao === 'agendado' ? horarioAgendado(corpo.agendadoPara) : null;
    const [a] = await c.query(
      `insert into avisos (publico, nivel, categoria, oque, quando, onde, o_que_fazer, contato, canais, situacao,
                           agendado_para, enviado_em, publicado_por, agendado_em)
       values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, case when $10 = 'no ar' then now() else null end, $12, $13)
       returning *`,
      [
        publico,
        nivel,
        String(corpo.categoria || ''),
        oque,
        campos[1],
        campos[2],
        campos[3],
        CONTATO_PADRAO,
        canais,
        situacao,
        situacao === 'agendado' ? String(corpo.agendadoPara || '') : null,
        o.id,
        agendadoEm,
      ],
    );
    return { aviso: avisoPublico(a) };
  },

  // Painel: "No ar" e "Fora do ar" tiram ou põem a publicação no app.
  'POST avisos/situacao': async (c, req, q, corpo) => {
    const o = await organizador(c, req);
    if (!ehAdministracao(o)) throw new Recusa(403, 'Só a Administração do Núcleo muda avisos oficiais.');
    const situacao = corpo.situacao === 'fora do ar' ? 'fora do ar' : 'no ar';
    await c.query(
      `update avisos set situacao = $2, enviado_em = coalesce(enviado_em, case when $2 = 'no ar' then now() end)
       where id = $1`,
      [Number(corpo.id), situacao],
    );
    return { ok: true };
  },

  'GET eventos': async (c, req) => {
    await publicarAgendados(c);
    const s = await sessaoDoPedido(c, req);
    const base = `select e.*, coalesce(o.nome, e.organizador_nome) as organizador_nome,
                    coalesce(o.grupo, e.organizador_nome) as organizador_grupo,
                    (select count(*) from confirmacoes x where x.evento_id = e.id) as confirmacoes,
                    exists(select 1 from confirmacoes x where x.evento_id = e.id and x.pessoa_id = $1) as eu_vou
                  from eventos e left join organizadores o on o.id = e.organizador_id`;
    if (s && s.tipo === 'organizador') {
      await organizador(c, req);
      const todos = await c.query(base + ' order by e.criado_em desc', [0]);
      return { eventos: todos.map(eventoPublico) };
    }
    const p = await morador(c, req);
    if (p.perfil === 'jovem' && !(await permissoesDoJovem(c, p.id)).Eventos) return { eventos: [] };
    const lista = await c.query(base + " where e.situacao = 'publicado' order by e.criado_em", [p.id]);
    return { eventos: lista.map(eventoPublico) };
  },

  'POST eventos': async (c, req, q, corpo) => {
    const o = await organizador(c, req);
    if (!o.areas.includes('Eventos')) throw new Recusa(403, 'Seu grupo não publica eventos.');
    const nome = String(corpo.nome || '').trim();
    const dataHora = String(corpo.dataHora || '').trim();
    const local = String(corpo.local || '').trim();
    const rascunho = corpo.situacao === 'rascunho';
    const agendado = corpo.situacao === 'agendado';
    if (!rascunho && (!nome || !dataHora || !local)) throw new Recusa(400, 'Preencha o nome, a data e hora e o local.');
    if (rascunho && !nome) throw new Recusa(400, 'Preencha pelo menos o nome do evento.');
    const vagas = /^\d+$/.test(String(corpo.vagas || '').trim()) ? Number(corpo.vagas) : null;
    const agendadoEm = agendado ? horarioAgendado(corpo.agendadoPara) : null;
    // Eventos de grupos passam pela aprovação da administração; a administração publica direto.
    const situacao = rascunho
      ? 'rascunho'
      : agendado
        ? 'agendado'
        : ehAdministracao(o)
          ? 'publicado'
          : 'esperando aprovação';
    const [e] = await c.query(
      `insert into eventos (nome, organizador_id, data_hora, local, interesse, ingresso_solidario, vagas, situacao,
                            agendado_para, agendado_em)
       values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) returning *`,
      [
        nome,
        o.id,
        dataHora,
        local,
        corpo.interesse || null,
        Boolean(corpo.ingressoSolidario),
        vagas,
        situacao,
        agendado ? String(corpo.agendadoPara || '') : null,
        agendadoEm,
      ],
    );
    return { evento: eventoPublico({ ...e, organizador_nome: o.nome, organizador_grupo: o.grupo }) };
  },

  'POST eventos/situacao': async (c, req, q, corpo) => {
    const o = await organizador(c, req);
    if (!ehAdministracao(o)) throw new Recusa(403, 'Só a administração muda a situação dos eventos.');
    const situacao = corpo.situacao === 'fora do ar' ? 'fora do ar' : 'publicado';
    await c.query('update eventos set situacao = $2 where id = $1', [Number(corpo.id), situacao]);
    return { ok: true };
  },

  // Botão "Eu vou".
  'POST eventos/presenca': async (c, req, q, corpo) => {
    const p = await morador(c, req);
    const id = Number(corpo.id);
    if (corpo.vou) {
      await c.query(
        `insert into confirmacoes (evento_id, pessoa_id)
         select id, $2 from eventos where id = $1 and situacao = 'publicado'
         on conflict do nothing`,
        [id, p.id],
      );
    } else {
      await c.query('delete from confirmacoes where evento_id = $1 and pessoa_id = $2', [id, p.id]);
    }
    return { ok: true };
  },
};

// ---------------------------------------------------------------------------
// Desapego: publica na hora, sem aprovação (regra 3); o telefone do autor nunca aparece.

const CATEGORIAS_DESAPEGO = new Set(['Móveis', 'Eletrônicos', 'Roupas', 'Livros', 'Esportes']);

async function podeUsarDesapego(c, p) {
  return p.perfil !== 'jovem' || (await permissoesDoJovem(c, p.id)).Desapego;
}

rotas['GET anuncios'] = async (c, req) => {
  const p = await morador(c, req);
  if (!(await podeUsarDesapego(c, p))) throw new Recusa(403, 'O gestor da casa ainda não liberou o Desapego.');
  const anuncios = await c.query(
    `select a.id, a.titulo, a.categoria, a.preco, a.doacao, a.mudanca, a.descricao, a.ilustracao, a.situacao,
            a.criado_em, coalesce(p.nome, a.autor_nome) as vendedor, (a.autor_id = $1) as meu
     from anuncios a left join pessoas p on p.id = a.autor_id
     where a.situacao = 'ativo' order by a.criado_em desc`,
    [p.id],
  );
  const comentarios = await c.query(
    `select id, anuncio_id, autor_nome, do_vendedor, texto, criado_em, (autor_id = $1) as meu
     from comentarios_anuncio order by criado_em, id`,
    [p.id],
  );
  return {
    anuncios: anuncios.map((a) => ({
      id: a.id,
      titulo: a.titulo,
      categoria: a.categoria,
      preco: a.preco,
      doacao: a.doacao,
      mudanca: a.mudanca,
      descricao: a.descricao,
      ilustracao: a.ilustracao,
      vendedor: a.vendedor,
      meu: Boolean(a.meu),
      criadoEm: a.criado_em,
      comentarios: comentarios
        .filter((x) => x.anuncio_id === a.id)
        .map((x) => ({ quem: x.autor_nome, doVendedor: x.do_vendedor, texto: x.texto, criadoEm: x.criado_em, meu: Boolean(x.meu) })),
    })),
  };
};

rotas['POST anuncios'] = async (c, req, q, corpo) => {
  const p = await morador(c, req);
  if (!(await podeUsarDesapego(c, p))) throw new Recusa(403, 'O gestor da casa ainda não liberou o Desapego.');
  const titulo = String(corpo.titulo || '').trim();
  const categoria = String(corpo.categoria || '');
  const doacao = Boolean(corpo.doacao);
  const valor = String(corpo.preco || '').replace(/[^0-9]/g, '');
  if (!titulo || !CATEGORIAS_DESAPEGO.has(categoria) || (!doacao && !valor)) {
    throw new Recusa(400, 'Foto, título e preço (ou doação) são obrigatórios.');
  }
  const preco = doacao ? 'Grátis' : 'R$ ' + valor;
  const [a] = await c.query(
    `insert into anuncios (autor_id, titulo, categoria, preco, doacao, mudanca, descricao)
     values ($1, $2, $3, $4, $5, $6, $7) returning id`,
    [p.id, titulo, categoria, preco, doacao, Boolean(corpo.mudanca), String(corpo.descricao || '').trim() || null],
  );
  return { id: a.id };
};

rotas['POST anuncios/comentar'] = async (c, req, q, corpo) => {
  const p = await morador(c, req);
  if (!(await podeUsarDesapego(c, p))) throw new Recusa(403, 'O gestor da casa ainda não liberou o Desapego.');
  const texto = String(corpo.texto || '').trim();
  if (!texto) throw new Recusa(400, 'Escreva o comentário.');
  const [a] = await c.query("select id, autor_id from anuncios where id = $1 and situacao = 'ativo'", [Number(corpo.id)]);
  if (!a) throw new Recusa(404, 'Anúncio não encontrado.');
  await c.query(
    `insert into comentarios_anuncio (anuncio_id, autor_id, autor_nome, do_vendedor, texto) values ($1, $2, $3, $4, $5)`,
    [a.id, p.id, p.nome, a.autor_id === p.id, texto],
  );
  return { ok: true };
};

export async function tratar(req, res) {
  const url = new URL(req.url, 'http://localhost');
  const caminho = (url.searchParams.get('rota') || url.pathname.replace(/^\/api\/?/, '')).replace(/^\/+|\/+$/g, '');
  const rota = rotas[req.method + ' ' + caminho];
  if (!rota) return responder(res, 404, { erro: 'Rota não encontrada.' });
  try {
    const corpo = req.method === 'POST' ? await lerCorpo(req) : {};
    const c = await db();
    const resultado = await rota(c, req, url.searchParams, corpo, res);
    responder(res, 200, resultado);
  } catch (e) {
    const status = e.status || 500;
    if (status >= 500) console.error('[api]', caminho, e);
    responder(res, status, { erro: status >= 500 && !e.status ? 'Erro no servidor.' : e.message });
  }
}
