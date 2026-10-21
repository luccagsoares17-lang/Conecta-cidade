// Verificação rápida, sem navegador: `npm test`.
// 1. design/prototipo/ continua igual à cópia do artefato (prototipo.sha256);
// 2. todo board do canvas.json tem arquivo, e todo arquivo tem <x-dc> e a classe Component;
// 3. o código de cada tela é JavaScript válido;
// 4. todo link entre telas (href="X.dc.html") aponta para uma tela que existe.

import { createHash } from 'node:crypto';
import { readFileSync, readdirSync } from 'node:fs';
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
}

if (erros.length) {
  console.error(erros.map((e) => '✗ ' + e).join('\n'));
  process.exit(1);
}
console.log(`✓ ${arquivos.length} telas, ${somas.length} arquivos conferidos com o artefato, ${links} links válidos`);
