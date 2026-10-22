// Dados reais das telas. As telas do protótipo continuam com o mesmo desenho e a mesma lógica;
// os trechos trocados em src/dados/ajustes.js chamam as funções deste objeto (CC) no lugar dos
// dados de exemplo. Quando um dado chega do servidor, as telas que o usam são redesenhadas.

import { chamarLocal, reiniciarDados } from './local.js';

const estado = {
  sessao: undefined, // undefined = ainda carregando; { tipo: null } = sem conta
  avisos: null,
  eventos: null,
  anuncios: null,
  familias: null,
  equipes: null,
  contas: new Map(),
  buscando: new Set(),
};

let irPara = () => {};
export function configurar(opcoes) {
  irPara = opcoes.irPara;
}

// ---------------------------------------------------------------------------
// Atualização das telas

const telas = new Set();
function ouvir(logica) {
  telas.add(logica);
}
function avisar() {
  for (const l of [...telas]) {
    if (l.__host) l.forceUpdate();
    else telas.delete(l);
  }
}

// ---------------------------------------------------------------------------
// Servidor: "local" (padrão) roda as regras no próprio aparelho, sem banco (src/dados/local.js);
// "servidor" usa a API da Vercel com o Neon (api/). Escolha no build com VITE_DADOS.
export const modoDados = import.meta.env.VITE_DADOS === 'servidor' ? 'servidor' : 'local';

export async function reiniciarDemonstracao() {
  if (modoDados === 'local') reiniciarDados();
  else await api('sair', {}).catch(() => {});
  await carregarSessao();
}

async function api(caminho, corpo) {
  if (modoDados === 'local') return chamarLocal(caminho, corpo);
  const opcoes = { credentials: 'same-origin', headers: {} };
  if (corpo !== undefined) {
    opcoes.method = 'POST';
    opcoes.headers['Content-Type'] = 'application/json';
    opcoes.body = JSON.stringify(corpo);
  }
  const r = await fetch((import.meta.env.BASE_URL || '/') + 'api/' + caminho, opcoes);
  const dados = await r.json().catch(() => ({}));
  if (!r.ok) {
    const erro = new Error(dados.erro || 'Não foi possível falar com o servidor.');
    erro.status = r.status;
    throw erro;
  }
  return dados;
}

export async function carregarSessao() {
  try {
    estado.sessao = await api('eu');
  } catch {
    estado.sessao = { tipo: null };
  }
  estado.avisos = null;
  estado.eventos = null;
  estado.anuncios = null;
  estado.familias = null;
  estado.equipes = null;
  avisar();
  return estado.sessao;
}

export const sessao = () => estado.sessao;

export async function sair() {
  await api('sair', {}).catch(() => {});
  await carregarSessao();
}

const carregando = {};
function carregarLista(chave) {
  if (estado[chave] !== null || carregando[chave]) return;
  carregando[chave] = api(chave)
    .then((d) => {
      estado[chave] = d[chave];
    })
    .catch(() => {
      estado[chave] = [];
    })
    .finally(() => {
      carregando[chave] = null;
      avisar();
    });
}
function recarregar(chave) {
  estado[chave] = null;
  carregarLista(chave);
}

// ---------------------------------------------------------------------------
// Entrar (tela Entrar · gestor ou jovem)

const formatoDaTela = (ident) => {
  const raw = (ident || '').trim().toLowerCase();
  const digits = raw.replace(/\D/g, '');
  const looksEmail = /^[^@\s]+@[^@\s]+\.[a-z]{2,}$/.test(raw);
  const looksPhone = digits.length >= 10 && !/[a-z@]/.test(raw);
  return { raw, digits, valido: looksEmail || looksPhone };
};

let espera = null;
function buscarConta(raw) {
  clearTimeout(espera);
  espera = setTimeout(() => {
    estado.buscando.add(raw);
    api('conta?ident=' + encodeURIComponent(raw))
      .then((r) => estado.contas.set(raw, r))
      .catch(() => estado.contas.set(raw, { existe: false }))
      .finally(() => {
        estado.buscando.delete(raw);
        avisar();
      });
  }, 250);
}

function contasParaLogin(logica, ident) {
  ouvir(logica);
  const { raw, digits, valido } = formatoDaTela(ident);
  if (!valido) return [];
  const r = estado.contas.get(raw);
  if (!r) {
    buscarConta(raw);
    return [];
  }
  if (!r.existe) return [];
  return [
    {
      id: raw,
      phone: digits,
      name: r.nome,
      role: r.perfil === 'jovem' ? 'jovem' : 'gestor',
      status: r.situacao === 'ativa' ? 'ok' : 'pending',
    },
  ];
}

function buscandoConta(ident) {
  const { raw, valido } = formatoDaTela(ident);
  return valido && (!estado.contas.has(raw) || estado.buscando.has(raw));
}

async function entrarMorador(logica, { ident, senha, perfil, ok }) {
  if (!ok) {
    logica.setState({ tried: true, forgot: false });
    return;
  }
  try {
    const r = await api('entrar', { ident, senha, perfil });
    await carregarSessao();
    irPara(r.perfil === 'jovem' ? 'JovemInicio' : 'Main');
  } catch {
    logica.setState({ tried: true, forgot: false });
  }
}

// ---------------------------------------------------------------------------
// Entrada do organizador

function entradaOrganizador(logica) {
  const s = logica.state;
  return {
    ccSetEmail: (e) => logica.setState({ email: e.target.value, erro: '' }),
    ccSetCodigo: (e) => logica.setState({ codigo: e.target.value, erro: '' }),
    ccTemErro: Boolean(s.erro),
    ccErro: s.erro || '',
    ccEntrar: async (e) => {
      e.preventDefault();
      const email = (logica.state.email || '').trim();
      const codigo = (logica.state.codigo || '').trim();
      if (!email || !codigo) {
        logica.setState({ erro: 'Digite o e-mail e o código de acesso do convite.' });
        return;
      }
      try {
        await api('organizador/entrar', { email, codigo });
        await carregarSessao();
        irPara('AdminInicio');
      } catch (erro) {
        logica.setState({ erro: erro.message });
      }
    },
  };
}

// ---------------------------------------------------------------------------
// Quem está usando

function pessoa(logica) {
  ouvir(logica);
  return (estado.sessao && (estado.sessao.pessoa || estado.sessao.organizador)) || null;
}

// Saudação: o apelido do cadastro, se houver; senão o primeiro nome (como "Lucca" de "Lucca Ribeiro" no protótipo).
const primeiroNome = (logica) => {
  const p = pessoa(logica) || {};
  return p.apelido || (p.nome || '').split(' ')[0];
};
const nomeCompleto = (logica) => (pessoa(logica) || {}).nome || '';

function codigoDaFamilia(logica) {
  ouvir(logica);
  return (estado.sessao && estado.sessao.casa && estado.sessao.casa.codigo) || '';
}

function endereco(logica) {
  ouvir(logica);
  const casa = (estado.sessao && estado.sessao.casa) || {};
  return casa.rua ? casa.rua + (casa.numero ? ', ' + casa.numero : '') + ' · ' : '';
}

// ---------------------------------------------------------------------------
// Minha casa

function membros(logica, tipo) {
  ouvir(logica);
  const lista = (estado.sessao && estado.sessao.membros) || [];
  const anos = (m) => (m.idade ? m.idade + ' anos · ' : '');
  if (tipo === 'jovem') {
    return lista.filter((m) => m.perfil === 'jovem').map((m) => ({ name: m.nome, sub: anos(m) + 'perfil jovem' }));
  }
  return lista
    .filter((m) => m.perfil !== 'jovem')
    .map((m) => ({ name: m.nome, sub: anos(m) + (m.perfil === 'gestor' ? 'também gestor' : 'perfil adulto') }));
}

// Chaves da tela → áreas do registro "Permissão do jovem". Trilhas e Carona são da Fase 2 e
// continuam só na tela, como no protótipo.
const AREAS = { eventos: 'Eventos', oportunidades: 'Oportunidades', desapego: 'Desapego' };

function permissoesDaCasa(logica, locais) {
  ouvir(logica);
  const porJovem = Object.values((estado.sessao && estado.sessao.permissoesDosJovens) || {});
  if (!porJovem.length) return locais;
  const r = Object.assign({}, locais);
  for (const [chave, area] of Object.entries(AREAS)) r[chave] = porJovem.every((p) => p[area]);
  return r;
}

async function alternarPermissao(logica, id, v, atuais) {
  const area = AREAS[id];
  const porJovem = (estado.sessao && estado.sessao.permissoesDosJovens) || {};
  if (!area || !Object.keys(porJovem).length) {
    const n = Object.assign({}, logica.state.on);
    n[id] = v === undefined ? !n[id] : v;
    logica.setState({ on: n });
    return;
  }
  const ligada = v === undefined ? !atuais[id] : v;
  for (const p of Object.values(porJovem)) p[area] = ligada;
  avisar();
  try {
    await api('permissoes', { area, ligada });
  } catch {
    await carregarSessao();
  }
}

// ---------------------------------------------------------------------------
// Avisos

const NIVEL = { urgente: 'Urgente', importante: 'Importante', informativo: 'Informativo' };

function avisos(logica) {
  ouvir(logica);
  carregarLista('avisos');
  return (estado.avisos || []).map((a) => ({
    id: 'aviso-' + a.id,
    fmt: 'Texto',
    lvl: NIVEL[a.nivel],
    cat: a.categoria,
    title: a.oque,
    meta: [a.quando, a.onde].filter(Boolean).join(' · '),
    todo: a.oQueFazer || '',
  }));
}

// ---------------------------------------------------------------------------
// Eventos

const MESES = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'];
// Cores das datas usadas nos eventos do protótipo, na mesma ordem.
const CORES_DATA = ['#13241B', '#B4471C', '#1E5B40', '#5B3A8C', '#24578C'];

function dataDoTexto(texto) {
  const m = /(\d{1,2})\/(\d{1,2})/.exec(texto || '');
  if (!m) return null;
  const dia = Number(m[1]);
  const mes = Number(m[2]);
  if (mes < 1 || mes > 12 || dia < 1 || dia > 31) return null;
  return { dia, mes };
}

function origem(e) {
  if (e.grupo === 'Administração do Núcleo') return 'Administração do Núcleo · Oficial';
  return e.grupo || e.organizador || '';
}

function listaDeEventos(logica) {
  ouvir(logica);
  carregarLista('eventos');
  const lista = (estado.eventos || []).filter((e) => e.situacao === 'publicado');
  const ordem = (e) => {
    const d = dataDoTexto(e.dataHora);
    return d ? d.mes * 100 + d.dia : 9999;
  };
  return lista.slice().sort((a, b) => ordem(a) - ordem(b));
}

function eventos(logica) {
  return listaDeEventos(logica).map((e, i) => {
    const d = dataDoTexto(e.dataHora);
    const tags = e.interesse && e.interesse !== 'Outro' ? [e.interesse] : [];
    return {
      id: 'evento-' + e.id,
      mon: d ? MESES[d.mes - 1] : '',
      day: d ? String(d.dia) : '',
      when: [e.dataHora, e.local].filter(Boolean).join(' · '),
      name: e.nome,
      org: origem(e),
      tags,
      tagLabel: e.interesse || '',
      solid: Boolean(e.ingressoSolidario),
      dateBg: CORES_DATA[i % CORES_DATA.length],
    };
  });
}

function eventosInicio(logica) {
  return listaDeEventos(logica).map((e, i) => {
    const d = dataDoTexto(e.dataHora);
    const quem = e.grupo === 'Administração do Núcleo' ? 'Administração do Núcleo · Oficial' : origem(e);
    return {
      id: 'evento-' + e.id,
      name: e.nome,
      mon: d ? MESES[d.mes - 1] : '',
      day: d ? String(d.dia) : '',
      info: [quem, e.ingressoSolidario ? 'Ingresso solidário' : e.local].filter(Boolean).join(' · '),
      dateBg: CORES_DATA[i % CORES_DATA.length],
    };
  });
}

const idDoEvento = (chave) => Number(String(chave).replace('evento-', ''));

function confirmado(chave) {
  const e = (estado.eventos || []).find((x) => x.id === idDoEvento(chave));
  return Boolean(e && e.euVou);
}

async function alternarPresenca(logica, chave) {
  const e = (estado.eventos || []).find((x) => x.id === idDoEvento(chave));
  if (!e) return;
  e.euVou = !e.euVou;
  e.confirmacoes += e.euVou ? 1 : -1;
  avisar();
  try {
    await api('eventos/presenca', { id: e.id, vou: e.euVou });
  } catch {
    recarregar('eventos');
  }
}

// ---------------------------------------------------------------------------
// Publicar (organizador)

const valorDoCampo = (id) => {
  const el = document.getElementById(id);
  return el ? el.value : '';
};

const MENSAGENS = {
  rascunho: 'Rascunho salvo. Ele aparece no painel.',
  agendado: 'Agendado! Sai no dia e hora marcados.',
  'no ar': 'Publicado! Já aparece no app dos moradores.',
};

async function publicar(logica, s, situacao, canais) {
  const avisar_ = (msg) => logica.setState({ msg });
  if (s.type !== 'Aviso' && s.type !== 'Evento') {
    avisar_('Por enquanto o app publica avisos e eventos. Os outros tipos entram depois.');
    return;
  }
  if (s.type === 'Aviso' && s.fmt === 'Imagem') {
    avisar_('A publicação com imagem ainda não está disponível. Use o formato Texto.');
    return;
  }
  const agendadoPara = situacao === 'agendado' ? valorDoCampo('agenda') : undefined;
  try {
    if (s.type === 'Aviso') {
      await api('avisos', {
        publico: s.aud,
        nivel: s.level,
        categoria: s.cat,
        oque: s.what,
        quando: s.when,
        onde: s.where,
        oQueFazer: s.todo,
        canais,
        situacao,
        agendadoPara,
      });
      recarregar('avisos');
    } else {
      await api('eventos', {
        nome: valorDoCampo('evnome'),
        dataHora: valorDoCampo('evdata'),
        local: valorDoCampo('evlocal'),
        vagas: valorDoCampo('evvagas'),
        interesse: s.evCat,
        ingressoSolidario: s.solid,
        situacao,
        agendadoPara,
      });
      recarregar('eventos');
    }
    avisar_(MENSAGENS[situacao]);
  } catch (erro) {
    avisar_(erro.message);
  }
}

// ---------------------------------------------------------------------------
// Painel (organizador): publicados, com "No ar" e "Fora do ar"

const PUBLICO = { todos: 'todos', gestores: 'só gestores', jovens: 'só jovens' };

function publicacoes(logica) {
  ouvir(logica);
  carregarLista('avisos');
  carregarLista('eventos');
  const lista = [];
  for (const a of estado.avisos || []) {
    if (a.situacao !== 'no ar' && a.situacao !== 'fora do ar') continue;
    lista.push({
      id: 'aviso-' + a.id,
      kind: 'Aviso · ' + NIVEL[a.nivel] + ' · ' + PUBLICO[a.publico],
      title: a.oque,
      href: 'AdminAlcance.dc.html',
      link: 'Ver alcance',
      quando: a.enviadoEm || a.criadoEm,
      fora: a.situacao === 'fora do ar',
    });
  }
  for (const e of estado.eventos || []) {
    if (e.situacao !== 'publicado' && e.situacao !== 'fora do ar') continue;
    lista.push({
      id: 'evento-' + e.id,
      kind: 'Evento · ' + (e.interesse || 'todos'),
      title: e.nome,
      href: 'AdminPosEvento.dc.html',
      link: 'Check-in e resultado',
      quando: e.criadoEm,
      fora: e.situacao === 'fora do ar',
    });
  }
  return lista.sort((a, b) => String(b.quando).localeCompare(String(a.quando)));
}

const foraDoAr = (p) => Boolean(p.fora);

// Painel: famílias cadastradas, no formato da lista de exemplo do protótipo.
function familias(logica) {
  ouvir(logica);
  carregarLista('familias');
  return (estado.familias || []).map((f) => ({
    code: f.codigo,
    address: f.endereco,
    people: f.pessoas.map((p) => [p.nome, p.papel, p.apelido]),
  }));
}

async function alternarNoAr(logica, p) {
  const [tipo, id] = p.id.split('-');
  const lista = tipo === 'aviso' ? estado.avisos : estado.eventos;
  const item = (lista || []).find((x) => x.id === Number(id));
  if (!item) return;
  const sair_ = !p.fora;
  item.situacao = sair_ ? 'fora do ar' : tipo === 'aviso' ? 'no ar' : 'publicado';
  avisar();
  try {
    await api(tipo === 'aviso' ? 'avisos/situacao' : 'eventos/situacao', {
      id: Number(id),
      situacao: sair_ ? 'fora do ar' : 'no ar',
    });
  } catch {
    recarregar(tipo === 'aviso' ? 'avisos' : 'eventos');
  }
}

// ---------------------------------------------------------------------------
// Desapego

// Cores de fundo por categoria, as mesmas do protótipo.
const TINTAS = { Móveis: '#FBE6DA', Eletrônicos: '#DFE9F5', Roupas: '#ECE4F5', Livros: '#F8EDC9', Esportes: '#E3EEDC' };

function haQuanto(data) {
  const min = Math.max(0, Math.round((Date.now() - new Date(data).getTime()) / 60000));
  if (min < 1) return 'agora';
  if (min < 60) return 'há ' + min + ' min';
  const h = Math.round(min / 60);
  if (h < 24) return 'há ' + h + ' h';
  if (h < 48) return 'ontem';
  const d = new Date(data);
  return d.getDate() + '/' + (d.getMonth() + 1);
}

function anuncios(logica) {
  ouvir(logica);
  carregarLista('anuncios');
  return (estado.anuncios || []).map((a) => ({
    id: a.id,
    t: a.titulo,
    cat: a.categoria,
    price: a.preco,
    move: a.mudanca,
    donate: a.doacao,
    tint: TINTAS[a.categoria] || '#F4F6F1',
    k: a.ilustracao || undefined,
  }));
}

function comentariosDoAnuncio(logica, item) {
  const a = (estado.anuncios || []).find((x) => x.id === item.id);
  if (!a) return { seller: 'Você', list: [] };
  return {
    seller: a.meu ? nomeCompleto(logica) + ' (você)' : a.vendedor,
    list: a.comentarios.map((c) => ({
      who: c.doVendedor ? '*' : c.meu ? c.quem + ' (você)' : c.quem,
      text: c.texto,
      time: haQuanto(c.criadoEm),
      me: c.meu,
    })),
  };
}

async function comentar(logica, item, texto) {
  logica.setState({ draft: '' });
  try {
    await api('anuncios/comentar', { id: item.id, texto });
  } finally {
    recarregar('anuncios');
  }
}

async function publicarAnuncio(logica, anuncio, st) {
  try {
    await api('anuncios', {
      titulo: anuncio.t,
      categoria: anuncio.cat,
      doacao: anuncio.donate,
      preco: st.fPrice,
      mudanca: anuncio.move,
      descricao: valorDoCampo('adDesc'),
    });
    logica.setState({ form: false, toast: true, cat: 'Todos', onlyMove: false, fTitle: '', fPrice: '', fMove: false, fPhoto: false, fKind: 'Vender' });
  } finally {
    recarregar('anuncios');
  }
}

// Equipes e permissões: pessoas com conta em cada grupo.
function pessoasDoGrupo(logica, grupo) {
  ouvir(logica);
  carregarLista('equipes');
  const n = (estado.equipes || {})[grupo] || 0;
  return n ? n + (n === 1 ? ' pessoa' : ' pessoas') : 'Nenhuma pessoa ainda';
}

export const CC = {
  pessoasDoGrupo,
  familias,
  anuncios,
  comentariosDoAnuncio,
  comentar,
  publicarAnuncio,
  contasParaLogin,
  buscandoConta,
  entrarMorador,
  entradaOrganizador,
  primeiroNome,
  nomeCompleto,
  codigoDaFamilia,
  endereco,
  membros,
  permissoesDaCasa,
  alternarPermissao,
  avisos,
  eventos,
  eventosInicio,
  confirmado,
  alternarPresenca,
  publicar,
  publicacoes,
  foraDoAr,
  alternarNoAr,
};
