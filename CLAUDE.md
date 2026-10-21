# CLAUDE.md — contexto do projeto Conecta Cidade

Leia este arquivo antes de qualquer tarefa neste repositório. Ele diz onde está cada informação e quais regras não podem ser quebradas.

## O projeto em 5 linhas

- **Conecta Cidade** é o app do Núcleo Urbano de Carajás (PA), núcleo habitacional ligado à Vale, com muitas famílias que chegam e saem por transferência.
- Nasceu do projeto **Entre Fases** (escuta de dez/2025, Comitê Jovem de 49 jovens) para o **Shark Tank Carajás** (19–23/10/2026), respondendo ao desafio 1 da Vale (engajamento e pertencimento) e dando o primeiro passo no desafio 2 (smart city).
- São **dois apps sobre o mesmo banco**: *Conecta Cidade* (moradores: gestor, adulto, jovem) e *Conecta Cidade Organizadores* (Administração do Núcleo, organizadores de eventos, Comitê Jovem).
- A **V1** tem 13 telas no app do morador e 6 no do organizador, e vai para um **piloto de 30 dias** com os 49 jovens do Comitê e suas famílias.
- Energia, casas, trilhas, carona, representantes de rua, pós-evento, impacto e rota da coleta são **Fase 2** — já desenhadas no protótipo.

## Regras que não podem ser quebradas

1. **Siga estritamente os documentos-fonte.** Não invente funcionalidade, texto, dado ou regra. Se faltar informação, registre em [`docs/perguntas-em-aberto.md`](docs/perguntas-em-aberto.md) em vez de supor.
2. **Use exatamente as telas do protótipo.** Layout, textos, cores, fontes (Bricolage Grotesque e DM Sans), ícones e logo vêm de [`design/prototipo/`](design/prototipo/). Nomes de tela batem com os do protótipo.
3. **Não edite `docs/fontes/` nem `design/prototipo/`.** São cópias fiéis do material original (zip e artefato `PkQ9tajBdYdt6vXEFn7tX9`). Atualizações entram como cópia nova, inteira.
4. **Respeite a ordem de precedência** quando as fontes divergirem (abaixo). Toda divergência nova vai para [`docs/decisoes/conflitos-entre-fontes.md`](docs/decisoes/conflitos-entre-fontes.md).
5. **Fase 2 não entra na V1** sem decisão registrada em `docs/decisoes/`. Elementos de Fase 2 dentro de telas da V1 ficam ocultos, não apagados.
6. **Regras de permissão** (resumo — detalhe em [`docs/produto/perfis-e-permissoes.md`](docs/produto/perfis-e-permissoes.md)):
   - urgentes sempre vão para os gestores, mesmo com público "só jovens";
   - o jovem nunca vê avisos urgentes;
   - Desapego não tem aprovação e o jovem só usa se o gestor liberar;
   - organizador só vê no Painel as áreas do grupo dele;
   - telefone do autor do anúncio nunca aparece.
7. **SMS obrigatório em todos os níveis de aviso; WhatsApp só no cadastro** (requisitos da V1, que prevalecem sobre o Plano de Comunicação dentro do app).
8. Escreva documentação e textos de interface em **português do Brasil**, frases curtas, sem siglas, como pedem os documentos.
9. **O app desenha as telas direto de `design/prototipo/`.** Nunca reescreva uma tela em JSX ou HTML à parte, nem edite a tela no código: mudança de tela é feita no artefato e copiada de novo. Antes de mexer no app, leia [`docs/desenvolvimento.md`](docs/desenvolvimento.md).
10. **Senhas e códigos de acesso nunca vão para o repositório**; só o resumo cifrado em `api/_lib/semente.js`.

## Ordem de precedência das fontes

1. **Requisitos da V1** (`docs/fontes/Conecta Cidade requisitos da versão 1.md`) — escopo, regras, telas, dados e canais da V1.
2. **Protótipo** (`design/prototipo/`) — referência visual e de texto das telas. Se o protótipo mostrar algo que contradiz os requisitos, vale a regra dos requisitos e o elemento é tratado como Fase 2 ou como divergência registrada.
3. **Documentos de área** (Desapego, Eventos, Energia) — detalham cada área; o que não está nos requisitos é visão de produto, não escopo da V1.
4. **Visão geral do app** (`Conecta Cidade o aplicativo do Núcleo de Carajás.md`).
5. **Plano de Comunicação** — vale para a comunicação do Núcleo fora do app.
6. **Contexto Entre Fases** — números e histórico; referência para conferir dados.

## Mapa do repositório

```
CLAUDE.md                  ← este arquivo
README.md                  ← apresentação do projeto
index.html, src/           ← o app (Vite + React): motor das telas, rotas, modo V1, dados (src/dados/)
api/                       ← API na Vercel (Neon): contas, sessões, avisos, eventos, permissões
public/                    ← PWA: manifesto, ícones, service worker
scripts/verificar-telas.mjs← npm test
vercel.json                ← publicação na Vercel
design/
  README.md                ← origem, versão e regras do protótipo
  prototipo/               ← canvas.json + 38 telas .dc.html (cópia fiel, não editar)
  prototipo.sha256         ← conferência da cópia
docs/
  README.md                ← índice da documentação
  fontes/                  ← os 7 documentos originais (não editar)
  analise/                 ← uma análise por documento-fonte (01 a 07)
  produto/                 ← especificação viva por tema (escopo, perfis, fluxos, dados, canais, piloto)
  design/identidade-visual.md ← cores, fontes, logo, ícones, componentes
  telas/                   ← inventário + uma ficha por tela do protótipo
  decisoes/                ← conflitos entre fontes e decisões tomadas
  perguntas-em-aberto.md   ← tudo o que ainda precisa de resposta
  desenvolvimento.md       ← como o app funciona, roda, é publicado e atualizado
```

## Onde procurar

| Preciso saber… | Vá para |
| --- | --- |
| Se algo é V1 ou Fase 2 | `docs/produto/escopo.md` e a coluna "Versão" de `docs/telas/README.md` |
| Como uma tela deve ser | `docs/telas/<app>/<Arquivo>.md` e `design/prototipo/<Arquivo>.dc.html` |
| Quem pode ver ou fazer o quê | `docs/produto/perfis-e-permissoes.md` |
| Campos e valores de um registro | `docs/produto/modelo-de-dados.md` |
| Regras de SMS, níveis e modelo de aviso | `docs/produto/canais-de-comunicacao.md` |
| Quando a V1 está pronta | `docs/produto/requisitos-gerais-e-piloto.md` |
| Por que duas fontes dizem coisas diferentes | `docs/decisoes/conflitos-entre-fontes.md` |
| Como rodar, publicar ou mudar o app | `docs/desenvolvimento.md` |
| Quem tem conta e com qual perfil | `docs/acessos.md` (senhas nunca entram no repositório) |

## Como manter este contexto

- **Novo documento-fonte**: copie para `docs/fontes/` sem alterar, crie `docs/analise/NN-<nome>.md` seguindo o formato dos existentes, atualize `docs/produto/` e `docs/decisoes/` se ele mudar alguma regra, e adicione-o na ordem de precedência acima.
- **Protótipo atualizado**: copie de novo todos os arquivos do artefato para `design/prototipo/`, atualize versão e `prototipo.sha256` em `design/README.md`, e revise as fichas das telas que mudaram.
- **Decisão tomada** (ex.: resposta a uma pergunta em aberto): registre em `docs/decisoes/` com data, quem decidiu e fonte; marque a pergunta como respondida em `docs/perguntas-em-aberto.md`.
- **Código**: o app lê as telas de `design/prototipo/`; depois de copiar uma versão nova do artefato, rode `npm test` e `npm run build`. Dados reais entram pelo motor, sem mudar o desenho das telas.
