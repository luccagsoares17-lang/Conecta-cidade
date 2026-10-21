// Dois modos de exibição:
//   - "prototipo" (padrão): todas as telas do artefato, exatamente como foram desenhadas.
//   - "v1": aplica só as regras que os requisitos da V1 escrevem de forma explícita:
//       1. as telas das áreas da Fase 2 não abrem (links para elas ficam inativos);
//       2. "o card de energia fica oculto até a fase 2" (tela Início · gestor);
//       3. "a carona para visitantes fica desativada na versão 1" (tela Acabei de chegar) —
//          coberta pela regra 1, porque CaronaVisitante é tela da Fase 2.
// O modo vem de VITE_MODO no build e pode ser trocado na hora com ?modo=v1 ou ?modo=prototipo.

const CHAVE = 'conecta-cidade:modo';
const MODOS = new Set(['prototipo', 'v1']);

let modo = MODOS.has(import.meta.env.VITE_MODO) ? import.meta.env.VITE_MODO : 'prototipo';

export function carregarModo() {
  try {
    const pedido = new URLSearchParams(location.search).get('modo');
    if (MODOS.has(pedido)) sessionStorage.setItem(CHAVE, pedido);
    const salvo = sessionStorage.getItem(CHAVE);
    if (MODOS.has(salvo)) modo = salvo;
  } catch {
    // sem sessionStorage: fica o modo do build
  }
}

export const modoAtual = () => modo;

const AJUSTES_V1 = {
  // Requisitos V1, tabela "Telas da versão 1", Início · gestor:
  // "A tela rola; o card de energia fica oculto até a fase 2".
  Main(raiz) {
    const card = raiz.querySelector('a[href="Energia.dc.html"]');
    if (card) card.remove();
  },
};

export function ajustesDoModo(nome) {
  if (modo !== 'v1') return undefined;
  return AJUSTES_V1[nome];
}
