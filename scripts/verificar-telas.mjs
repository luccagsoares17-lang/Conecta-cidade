// Verificação rápida, sem navegador: `npm test`.
// 1. design/prototipo/ continua igual à cópia do artefato (prototipo.sha256);
// 2. todo board do canvas.json tem arquivo, e todo arquivo tem <x-dc> e a classe Component;
// 3. o código de cada tela é JavaScript válido;
// 4. todo link entre telas (href="X.dc.html") aponta para uma tela que existe.

import { createHash } from 'node:crypto';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const pasta = new URL('../design/prototipo/', import.meta.url).pathname;
const erros = [];

const somas = readFileSync(new URL('../design/prototipo.sha256', import.meta.url), 'utf8')
  .trim()
  .split('\n')
  .map((l) => l.split(/\s+\*?/));
for (const [soma, arquivo] of somas) {
  const atual = createHash('sha256').update(readFileSync(join(pasta, arquivo))).digest('hex');
  if (atual !== soma) erros.push(`${arquivo}: diferente da cópia do artefato (prototipo.sha256)`);
}

const arquivos = readdirSync(pasta).filter((f) => f.endsWith('.dc.html'));
const nomes = new Set(arquivos.map((f) => f.replace(/\.dc\.html$/, '')));

const canvas = JSON.parse(readFileSync(join(pasta, 'canvas.json'), 'utf8'));
for (const board of Object.keys(canvas.boards)) {
  if (!arquivos.includes(board)) erros.push(`canvas.json: board ${board} sem arquivo`);
}
if (!arquivos.includes(canvas.launch.file)) erros.push(`canvas.json: tela de abertura ${canvas.launch.file} não existe`);

let links = 0;
for (const arquivo of arquivos) {
  const texto = readFileSync(join(pasta, arquivo), 'utf8');
  if (!/<x-dc>[\s\S]*<\/x-dc>/.test(texto)) erros.push(`${arquivo}: sem <x-dc>`);
  const script = texto.match(/<script\b[^>]*data-dc-script[^>]*>([\s\S]*?)<\/script>/);
  if (!script || !/class Component extends DCLogic/.test(script[1])) {
    erros.push(`${arquivo}: sem class Component extends DCLogic`);
  } else {
    try {
      new Function('DCLogic', 'StreamableLogic', 'React', script[1]); // eslint-disable-line no-new-func
    } catch (e) {
      erros.push(`${arquivo}: JavaScript inválido (${e.message})`);
    }
  }
  for (const [, destino] of texto.matchAll(/href="([A-Za-z0-9_-]+)\.dc\.html"/g)) {
    links++;
    if (!nomes.has(destino)) erros.push(`${arquivo}: link para ${destino}.dc.html, que não existe`);
  }
  for (const [, destino] of texto.matchAll(/'([A-Za-z0-9_-]+)\.dc\.html'/g)) {
    links++;
    if (!nomes.has(destino)) erros.push(`${arquivo}: link (no script) para ${destino}.dc.html, que não existe`);
  }
  // fotos usadas pelas telas (ex.: 'fotos/uxi.jpg') existem na cópia do artefato
  for (const [, foto] of texto.matchAll(/['"](fotos\/[A-Za-z0-9_.-]+)['"]/g)) {
    if (!existsSync(join(pasta, foto))) erros.push(`${arquivo}: foto ${foto} não existe em design/prototipo/`);
  }
}

// 5. as trocas de src/dados/ajustes.js ainda encontram os trechos no artefato e geram código válido.
const { ajustes } = await import('../src/dados/ajustes.js');
const { applyReplacements } = await import('../src/dc/runtime.js');
let trocas = 0;
for (const [nome, a] of Object.entries(ajustes)) {
  if (!nomes.has(nome)) {
    erros.push(`ajustes.js: a tela ${nome} não existe`);
    continue;
  }
  const texto = readFileSync(join(pasta, nome + '.dc.html'), 'utf8');
  const tpl = texto.match(/<x-dc[^>]*>([\s\S]*)<\/x-dc>/i)[1];
  const js = texto.match(/<script\b[^>]*data-dc-script[^>]*>([\s\S]*?)<\/script>/i)[1];
  try {
    applyReplacements(nome, 'template', tpl, a.template);
    const novo = applyReplacements(nome, 'script', js, a.script);
    new Function('DCLogic', 'StreamableLogic', 'React', 'CC', novo); // eslint-disable-line no-new-func
    trocas += (a.template || []).length + (a.script || []).length;
  } catch (e) {
    erros.push(e.message);
  }
}
if (erros.length) {
  console.error(erros.map((e) => '✗ ' + e).join('\n'));
  process.exit(1);
}
console.log(
  `✓ ${arquivos.length} telas, ${somas.length} arquivos conferidos com o artefato, ${links} links válidos, ${trocas} trocas de dados aplicadas`,
);
