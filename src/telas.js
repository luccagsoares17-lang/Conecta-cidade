// Catálogo das telas: tudo vem de design/prototipo/ (cópia fiel do artefato).
// canvas.json dá o título, a página (morador/organizador), o tamanho e a tela de abertura.

import canvas from '../design/prototipo/canvas.json';

// Cada tela vira um arquivo separado no build e só é baixada quando for aberta.
const fontes = import.meta.glob('../design/prototipo/*.dc.html', {
  query: '?raw',
  import: 'default',
});

const carregadores = Object.fromEntries(
  Object.entries(fontes).map(([caminho, carregar]) => [caminho.split('/').pop().replace(/\.dc\.html$/, ''), carregar]),
);

export const existeTela = (nome) => Object.prototype.hasOwnProperty.call(carregadores, nome);

export const carregarArquivo = (nome) => carregadores[nome]();

export const telaInicial = (canvas.launch?.file || 'Splash.dc.html').replace(/\.dc\.html$/, '');

// Telas das áreas que os requisitos da V1 colocam na Fase 2
// (docs/produto/escopo.md e docs/telas/README.md).
export const telasFase2 = new Set([
  'Energia',
  'Trilhas',
  'JovemTrilhas',
  'TrilhaVisitante',
  'Carona',
  'CaronaVisitante',
  'AdminEnergia',
  'AdminColeta',
  'AdminCasas',
  'AdminTrilhas',
  'AdminRepresentantes',
  'AdminPosEvento',
  'AdminImpacto',
]);

const paginas = Object.fromEntries((canvas.pages || []).map((p) => [p.id, p.name]));
const primeiraPagina = canvas.pages?.[0]?.id;

export const telas = Object.keys(carregadores)
  .map((nome) => {
    const board = canvas.boards?.[nome + '.dc.html'];
    const pagina = board?.page || primeiraPagina;
    return {
      nome,
      titulo: board?.title || nome,
      pagina,
      nomePagina: paginas[pagina] || '',
      largura: board?.w || 390,
      altura: board?.h || 844,
      raio: board?.radius ?? 0,
      noCanvas: Boolean(board),
      ordem: canvas.order ? canvas.order.indexOf(nome + '.dc.html') : -1,
    };
  })
  .sort((a, b) => (a.ordem < 0 ? 1e9 : a.ordem) - (b.ordem < 0 ? 1e9 : b.ordem));

export const telaPorNome = Object.fromEntries(telas.map((t) => [t.nome, t]));

export const tituloDoCanvas = canvas.title;
