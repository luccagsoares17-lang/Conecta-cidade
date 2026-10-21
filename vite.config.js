import { defineConfig } from 'vite';

// Em `npm run dev` e `npm run preview`, a API (/api/*) roda aqui mesmo, com um banco PGlite
// guardado em .dados-dev/ (ou em memória com CC_PGLITE=memoria). Na Vercel, quem atende é api/index.js com o Neon.
function apiLocal() {
  let pronto = null;
  const preparar = async () => {
    if (!pronto) {
      pronto = (async () => {
        const { usarCliente } = await import('./api/_lib/db.js');
        if (!process.env.DATABASE_URL && !process.env.POSTGRES_URL) {
          const { PGlite } = await import('@electric-sql/pglite');
          const pasta = process.env.CC_PGLITE === 'memoria' ? undefined : process.env.CC_PGLITE || './.dados-dev';
          const pg = new PGlite(pasta);
          usarCliente({ query: async (texto, params = []) => (await pg.query(texto, params)).rows });
        }
        const { tratar } = await import('./api/_lib/rotas.js');
        return tratar;
      })();
    }
    return pronto;
  };
  const middleware = async (req, res, next) => {
    if (!req.url.startsWith('/api/')) return next();
    const tratar = await preparar();
    return tratar(req, res);
  };
  return {
    name: 'conecta-cidade-api-local',
    configureServer(server) {
      server.middlewares.use(middleware);
    },
    configurePreviewServer(server) {
      server.middlewares.use(middleware);
    },
  };
}

export default defineConfig({
  plugins: [apiLocal()],
});
