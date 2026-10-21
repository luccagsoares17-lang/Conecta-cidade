// Função única da Vercel para /api/* (vercel.json manda /api/<rota> para cá).
import { tratar } from './_lib/rotas.js';

export default function handler(req, res) {
  return tratar(req, res);
}
