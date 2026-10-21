// Senhas cifradas (scrypt) e sessões por cookie. Requisitos V1, "Segurança": senha cifrada.

import { createHash, randomBytes, scryptSync, timingSafeEqual } from 'node:crypto';

export function cifrar(segredo) {
  const sal = randomBytes(16);
  const h = scryptSync(segredo, sal, 32, { N: 16384, r: 8, p: 1 });
  return `scrypt$16384$8$1$${sal.toString('base64')}$${h.toString('base64')}`;
}

export function confere(segredo, guardado) {
  if (typeof segredo !== 'string' || typeof guardado !== 'string') return false;
  const [tipo, n, r, p, sal, hash] = guardado.split('$');
  if (tipo !== 'scrypt') return false;
  const esperado = Buffer.from(hash, 'base64');
  const calculado = scryptSync(segredo, Buffer.from(sal, 'base64'), esperado.length, { N: +n, r: +r, p: +p });
  return calculado.length === esperado.length && timingSafeEqual(calculado, esperado);
}

export const COOKIE = 'cc_sessao';
const DIAS = 90;

const resumo = (token) => createHash('sha256').update(token).digest('hex');

export async function criarSessao(c, tipo, donoId) {
  const token = randomBytes(32).toString('base64url');
  await c.query(
    `insert into sessoes (token_hash, tipo, dono_id, expira_em) values ($1, $2, $3, now() + interval '${DIAS} days')`,
    [resumo(token), tipo, donoId],
  );
  return token;
}

export function cookieDeSessao(token, seguro) {
  return `${COOKIE}=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${DIAS * 86400}${seguro ? '; Secure' : ''}`;
}

export function cookieApagado(seguro) {
  return `${COOKIE}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0${seguro ? '; Secure' : ''}`;
}

export function lerToken(req) {
  const cab = req.headers.cookie || '';
  for (const parte of cab.split(';')) {
    const [k, ...v] = parte.trim().split('=');
    if (k === COOKIE) return v.join('=');
  }
  return null;
}

export async function sessaoDoPedido(c, req) {
  const token = lerToken(req);
  if (!token) return null;
  const [s] = await c.query('select tipo, dono_id from sessoes where token_hash = $1 and expira_em > now()', [
    resumo(token),
  ]);
  return s || null;
}

export async function encerrarSessao(c, req) {
  const token = lerToken(req);
  if (token) await c.query('delete from sessoes where token_hash = $1', [resumo(token)]);
}
