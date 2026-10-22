// Banco de dados. Na Vercel, usa o Neon (variável DATABASE_URL criada pela integração Neon).
// Em desenvolvimento e nos testes, o vite.config.js entrega um banco PGlite em memória ou em pasta.
// As tabelas seguem os registros de docs/produto/modelo-de-dados.md.

import { conteudoInicial } from './conteudo-inicial.js';
import { semente } from './semente.js';

let cliente = null;
let pronto = null;

export function usarCliente(c) {
  cliente = c;
  pronto = null;
}

async function clientePadrao() {
  const url = process.env.DATABASE_URL || process.env.POSTGRES_URL;
  if (!url) {
    const erro = new Error('Banco de dados não configurado: conecte o Neon ao projeto na Vercel (DATABASE_URL).');
    erro.status = 503;
    throw erro;
  }
  const { neon } = await import('@neondatabase/serverless');
  const sql = neon(url);
  return { query: (texto, params = []) => sql.query(texto, params) };
}

export async function db() {
  if (!cliente) cliente = await clientePadrao();
  if (!pronto) {
    pronto = preparar(cliente).catch((e) => {
      pronto = null;
      throw e;
    });
  }
  await pronto;
  return cliente;
}

const ESQUEMA = [
  `create table if not exists casas (
    id serial primary key,
    rua text,
    numero text,
    quarteirao text,
    codigo text not null unique,
    criada_em timestamptz not null default now()
  )`,
  `create table if not exists pessoas (
    id serial primary key,
    casa_id integer not null references casas(id),
    nome text not null,
    apelido text,
    nascimento date,
    idade integer,
    celular text unique,
    email text unique,
    foto text,
    perfil text not null check (perfil in ('gestor', 'adulto', 'jovem')),
    situacao text not null default 'ativa' check (situacao in ('ativa', 'esperando aprovação')),
    interesses text[] not null default '{}',
    senha_hash text not null,
    criada_em timestamptz not null default now()
  )`,
  `create table if not exists permissoes_jovem (
    pessoa_id integer not null references pessoas(id) on delete cascade,
    area text not null check (area in ('Eventos', 'Oportunidades', 'Desapego')),
    ligada boolean not null,
    primary key (pessoa_id, area)
  )`,
  `create table if not exists organizadores (
    id serial primary key,
    nome text not null,
    email text not null unique,
    grupo text not null,
    areas text[] not null,
    codigo_hash text not null,
    criado_em timestamptz not null default now()
  )`,
  `create table if not exists sessoes (
    token_hash text primary key,
    tipo text not null check (tipo in ('morador', 'organizador')),
    dono_id integer not null,
    criada_em timestamptz not null default now(),
    expira_em timestamptz not null
  )`,
  `create table if not exists avisos (
    id serial primary key,
    tipo text not null default 'Aviso',
    publico text not null check (publico in ('todos', 'gestores', 'jovens')),
    nivel text not null check (nivel in ('urgente', 'importante', 'informativo')),
    categoria text not null,
    oque text not null,
    quando text,
    onde text,
    o_que_fazer text,
    contato text,
    ruas text[] not null default '{}',
    canais text[] not null default '{}',
    situacao text not null check (situacao in ('rascunho', 'agendado', 'no ar', 'fora do ar')),
    agendado_para text,
    agendado_em timestamptz,
    enviado_em timestamptz,
    publicado_por integer references organizadores(id),
    criado_em timestamptz not null default now()
  )`,
  `create table if not exists eventos (
    id serial primary key,
    nome text not null,
    organizador_id integer references organizadores(id),
    data_hora text not null,
    local text not null,
    interesse text,
    ingresso_solidario boolean not null default false,
    vagas integer,
    situacao text not null check (situacao in ('rascunho', 'agendado', 'esperando aprovação', 'publicado', 'fora do ar')),
    agendado_para text,
    agendado_em timestamptz,
    criado_em timestamptz not null default now()
  )`,
  `create table if not exists anuncios (
    id serial primary key,
    autor_id integer references pessoas(id),
    autor_nome text,
    titulo text not null,
    categoria text not null,
    preco text not null,
    doacao boolean not null default false,
    mudanca boolean not null default false,
    descricao text,
    ilustracao text,
    situacao text not null default 'ativo' check (situacao in ('ativo', 'vendido')),
    criado_em timestamptz not null default now()
  )`,
  `create table if not exists comentarios_anuncio (
    id serial primary key,
    anuncio_id integer not null references anuncios(id) on delete cascade,
    autor_id integer references pessoas(id),
    autor_nome text not null,
    do_vendedor boolean not null default false,
    texto text not null,
    criado_em timestamptz not null default now()
  )`,
  `alter table eventos add column if not exists organizador_nome text`,
  `alter table organizadores add column if not exists apelido text`,
  `create table if not exists membros_equipe (
    id serial primary key,
    equipe text not null,
    nome text not null,
    adicionado_por integer references organizadores(id),
    criado_em timestamptz not null default now()
  )`,
  `create table if not exists confirmacoes (
    evento_id integer not null references eventos(id) on delete cascade,
    pessoa_id integer not null references pessoas(id) on delete cascade,
    criada_em timestamptz not null default now(),
    primary key (evento_id, pessoa_id)
  )`,
];

// A semente manda nas senhas e nos códigos: se mudarem em semente.js, o banco passa a usar os novos
// (o app ainda não tem tela para a pessoa trocar a própria senha).
async function preparar(c) {
  for (const comando of ESQUEMA) await c.query(comando);
  for (const casa of semente.casas) {
    await c.query('insert into casas (codigo) values ($1) on conflict (codigo) do nothing', [casa.codigo]);
  }
  for (const p of semente.pessoas) {
    await c.query(
      `insert into pessoas (casa_id, nome, apelido, email, perfil, situacao, senha_hash)
       select id, $2, $6, $3, $4, 'ativa', $5 from casas where codigo = $1
       on conflict (email) do update set senha_hash = excluded.senha_hash`,
      [p.casa, p.nome, p.email, p.perfil, p.senha_hash, p.apelido || null],
    );
    if (p.perfil === 'jovem') {
      // Requisitos V1: o jovem usa Eventos e Oportunidades; Desapego só se o gestor liberar.
      for (const [area, ligada] of [
        ['Eventos', true],
        ['Oportunidades', true],
        ['Desapego', false],
      ]) {
        await c.query(
          `insert into permissoes_jovem (pessoa_id, area, ligada)
           select id, $2, $3 from pessoas where email = $1
           on conflict (pessoa_id, area) do nothing`,
          [p.email, area, ligada],
        );
      }
    }
  }
  for (const o of semente.organizadores) {
    await c.query(
      `insert into organizadores (nome, apelido, email, grupo, areas, codigo_hash) values ($1, $6, $2, $3, $4, $5)
       on conflict (email) do update set codigo_hash = excluded.codigo_hash`,
      [o.nome, o.email, o.grupo, o.areas, o.codigo_hash, o.apelido || null],
    );
  }
  if (!process.env.CC_SEM_EXEMPLOS) await conteudoInicial(c);
}
