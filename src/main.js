import React from 'react';
import { createRoot } from 'react-dom/client';
import { createScreen, dcLinkTarget } from './dc/runtime.js';
import { carregarArquivo, existeTela, telaInicial, telas, telaPorNome, telasFase2, tituloDoCanvas } from './telas.js';
import { carregarModo, modoAtual, ajustesDoModo } from './modo.js';
import { CC, carregarSessao, configurar, sair, sessao } from './dados/cc.js';
import { ajustes } from './dados/ajustes.js';
import './app.css';

const h = React.createElement;

carregarModo();

// ---------------------------------------------------------------------------
// Rotas: /<NomeDoArquivo> abre design/prototipo/<NomeDoArquivo>.dc.html

const ROTA_INDICE = 'telas';
const ROTA_SAIR = 'sair';

function rotaAtual() {
  const nome = decodeURIComponent(location.pathname.replace(/^\/+|\/+$/g, ''));
  if (!nome) return telaInicial;
  if (nome === ROTA_INDICE || nome === ROTA_SAIR) return nome;
  if (!existeTela(nome)) return telaInicial;
  if (bloqueada(nome)) return telaInicial;
  return nome;
}

function bloqueada(nome) {
  return modoAtual() === 'v1' && telasFase2.has(nome);
}

// Quem pode abrir cada tela (src/dados/ajustes.js → exige). Sem conta, vai para Entrar
// (moradores) ou para a Entrada do organizador; perfil errado volta para o início do perfil.
function destinoPermitido(nome) {
  const regra = ajustes[nome] && ajustes[nome].exige;
  if (!regra) return nome;
  const s = sessao();
  if (s === undefined) return null;
  if (regra === 'organizador') return s.tipo === 'organizador' ? nome : 'AdminEntrada';
  if (s.tipo !== 'morador') return 'Login';
  const jovem = s.pessoa.perfil === 'jovem';
  const inicio = jovem ? 'JovemInicio' : 'Main';
  const [tipo, area] = regra.split(':');
  const liberada = !area || Boolean(s.permissoes && s.permissoes[area]);
  if (tipo === 'gestor') return s.pessoa.perfil === 'gestor' ? nome : inicio;
  if (tipo === 'adulto') return jovem ? inicio : nome;
  if (tipo === 'jovem') return jovem && liberada ? nome : inicio;
  if (tipo === 'morador') return !jovem || liberada ? nome : inicio;
  return nome;
}

function irPara(nome, hash = '') {
  const url = '/' + nome + location.search + hash;
  if (url !== location.pathname + location.search + location.hash) history.pushState(null, '', url);
  window.dispatchEvent(new Event('cc:rota'));
  if (!hash) window.scrollTo(0, 0);
}

// Links entre telas: igual ao "Play" do artefato, um toque leva à outra tela.
function ajustarLink(props) {
  const alvo = dcLinkTarget(props.href);
  if (alvo) {
    props.href = '/' + alvo.name + alvo.hash;
    props['data-dc-link'] = alvo.name;
    if (alvo.hash) props['data-dc-hash'] = alvo.hash;
    if (bloqueada(alvo.name)) {
      props['data-dc-bloqueado'] = '';
      props['aria-disabled'] = 'true';
    }
  } else if (/^https?:\/\//i.test(props.href) && !props.target) {
    props.target = '_blank';
    props.rel = 'noopener noreferrer';
  }
}

document.addEventListener('click', (e) => {
  if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
  const a = e.target.closest && e.target.closest('a[data-dc-link]');
  if (!a) return;
  e.preventDefault();
  if (a.hasAttribute('data-dc-bloqueado')) return;
  irPara(a.getAttribute('data-dc-link'), a.getAttribute('data-dc-hash') || '');
});

// ---------------------------------------------------------------------------
// Telas compiladas sob demanda (uma vez por arquivo). Depois que uma tela abre, as telas
// para onde ela leva são baixadas em segundo plano, para o próximo toque ser imediato.

const compiladas = new Map();
const pendentes = new Map();

function carregarTela(nome) {
  if (compiladas.has(nome)) return Promise.resolve(compiladas.get(nome));
  if (!pendentes.has(nome)) {
    pendentes.set(
      nome,
      carregarArquivo(nome).then((texto) => {
        const tela = createScreen(nome, texto, {
          linkProps: ajustarLink,
          patchTemplate: ajustesDoModo(nome),
          replacements: ajustes[nome],
          globals: { CC },
        });
        tela.destinos = [...texto.matchAll(/href="([A-Za-z0-9_-]+)\.dc\.html"/g)].map((m) => m[1]);
        compiladas.set(nome, tela);
        return tela;
      }, (erro) => {
        pendentes.delete(nome); // sem internet: tenta de novo no próximo toque
        throw erro;
      }),
    );
  }
  return pendentes.get(nome);
}

function adiantarDestinos(tela) {
  const ocioso = window.requestIdleCallback || ((f) => setTimeout(f, 300));
  ocioso(() => {
    for (const destino of new Set(tela.destinos)) if (existeTela(destino) && !bloqueada(destino)) carregarTela(destino);
  });
}

function useTela(nome) {
  const [tela, setTela] = React.useState(() => compiladas.get(nome) || null);
  React.useEffect(() => {
    let ativo = true;
    carregarTela(nome).then(
      (t) => {
        if (!ativo) return;
        setTela(t);
        adiantarDestinos(t);
      },
      (erro) => console.error('[conecta-cidade] não foi possível abrir a tela ' + nome, erro),
    );
    return () => {
      ativo = false;
    };
  }, [nome]);
  return tela;
}

// ---------------------------------------------------------------------------
// Moldura: no celular a tela ocupa a tela inteira; em telas maiores aparece no
// tamanho do protótipo (390×844, cantos de 40 px), reduzida se não couber.

function useJanela() {
  const [tam, setTam] = React.useState({ w: window.innerWidth, h: window.innerHeight });
  React.useEffect(() => {
    const f = () => setTam({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener('resize', f);
    return () => window.removeEventListener('resize', f);
  }, []);
  return tam;
}

function Palco({ nome }) {
  const info = telaPorNome[nome];
  const tela = useTela(nome);
  const janela = useJanela();
  React.useEffect(() => {
    if (tela) document.title = tela.title || info.titulo;
  }, [tela]);
  const Screen = tela ? tela.Screen : null;
  const conteudo = Screen ? h(Screen, { key: nome }) : null;

  const celular = info.largura === 390 && janela.w <= 500;
  if (celular) {
    // Mais estreito que 390 px: a tela inteira é reduzida na mesma proporção, para o layout
    // continuar exatamente o do protótipo. De 390 a 500 px, a tela acompanha a largura.
    const zoom = Math.min(1, janela.w / info.largura);
    const estilo = zoom < 1 ? { zoom, width: info.largura, height: janela.h / zoom } : undefined;
    return h('div', { className: 'cc-palco cc-tela-cheia', style: estilo }, conteudo);
  }
  const margem = 32;
  const escala = Math.min(1, (janela.w - margem) / info.largura, (janela.h - margem) / info.altura);
  return h(
    'div',
    { className: 'cc-palco cc-moldura' },
    h(
      'div',
      { className: 'cc-caixa', style: { width: info.largura * escala, height: info.altura * escala } },
      h(
        'div',
        {
          className: 'cc-aparelho',
          style: {
            width: info.largura,
            height: info.altura,
            borderRadius: info.raio,
            transform: escala < 1 ? `scale(${escala})` : undefined,
          },
        },
        conteudo,
      ),
    ),
  );
}

// ---------------------------------------------------------------------------
// Índice de todas as telas do protótipo (ferramenta da equipe; não é tela do app)

function Indice() {
  React.useEffect(() => {
    document.title = 'Telas · ' + tituloDoCanvas;
  }, []);
  const grupos = {};
  for (const t of telas) {
    const chave = t.noCanvas ? t.nomePagina : 'Fora do canvas';
    (grupos[chave] = grupos[chave] || []).push(t);
  }
  const modo = modoAtual();
  return h(
    'main',
    { className: 'cc-indice' },
    h('h1', null, tituloDoCanvas),
    h(
      'p',
      null,
      'Índice das telas do protótipo. Modo atual: ',
      h('strong', null, modo === 'v1' ? 'versão 1 (Fase 2 oculta)' : 'protótipo completo'),
      ' · ',
      h('a', { href: '?modo=' + (modo === 'v1' ? 'prototipo' : 'v1') }, modo === 'v1' ? 'ver protótipo completo' : 'ver só a versão 1'),
    ),
    Object.entries(grupos).map(([grupo, lista]) =>
      h(
        'section',
        { key: grupo },
        h('h2', null, grupo),
        h(
          'ul',
          null,
          lista.map((t) =>
            h(
              'li',
              { key: t.nome },
              h(
                'a',
                {
                  href: '/' + t.nome,
                  'data-dc-link': t.nome,
                  ...(bloqueada(t.nome) ? { 'data-dc-bloqueado': '', 'aria-disabled': 'true' } : {}),
                },
                t.titulo,
              ),
              h('span', null, ' · ' + t.nome + '.dc.html'),
              telasFase2.has(t.nome) ? h('em', null, ' · Fase 2') : null,
            ),
          ),
        ),
      ),
    ),
  );
}

function App() {
  const [rota, setRota] = React.useState(rotaAtual);
  const [, setVersao] = React.useState(0);
  React.useEffect(() => {
    const f = () => setRota(rotaAtual());
    window.addEventListener('popstate', f);
    window.addEventListener('cc:rota', f);
    carregarSessao().then(() => setVersao((v) => v + 1));
    return () => {
      window.removeEventListener('popstate', f);
      window.removeEventListener('cc:rota', f);
    };
  }, []);
  React.useEffect(() => {
    if (rota !== ROTA_SAIR) return;
    sair().then(() => {
      history.replaceState(null, '', '/');
      setRota(rotaAtual());
    });
  }, [rota]);
  if (rota === ROTA_INDICE) return h(Indice);
  if (rota === ROTA_SAIR) return null;
  const destino = destinoPermitido(rota);
  if (destino === null) return null; // conferindo a conta
  if (destino !== rota) {
    history.replaceState(null, '', '/' + destino + location.search);
    return h(Palco, { key: destino, nome: destino });
  }
  return h(Palco, { key: rota, nome: rota });
}

configurar({ irPara });

createRoot(document.getElementById('app')).render(h(App));

if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => navigator.serviceWorker.register('/sw.js').catch(() => {}));
}
