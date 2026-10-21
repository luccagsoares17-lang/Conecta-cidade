# Desenvolvimento do app

O app desenha **as telas do artefato diretamente**: ele lê os arquivos de [`design/prototipo/`](../design/prototipo/) (cópia fiel do artefato [Conecta Cidade – Interface do App](https://claude.ai/artifact/PkQ9tajBdYdt6vXEFn7tX9)) e os mostra com as mesmas regras do editor do artefato. Nenhuma tela foi redesenhada ou reescrita à mão.

## Como rodar

```bash
npm install
npm run dev       # http://localhost:5173, com a API e um banco local em .dados-dev/
npm test          # confere a cópia do artefato, o código das telas, os links e as trocas de dados
npm run test:api  # confere as regras da API (perfis, avisos, eventos, permissões) num banco em memória
npm run build     # gera dist/ (o que a Vercel publica)
npm run preview   # serve dist/ em http://localhost:4173, também com a API local
```

No `npm run dev`, as contas do piloto já existem no banco local (mesmos logins e senhas de [`acessos.md`](acessos.md)). Para começar do zero, apague a pasta `.dados-dev/`.

## Endereços

| Endereço | O que abre |
| --- | --- |
| `/` | Tela de abertura do canvas (`Splash`, definida em `canvas.json` → `launch`) |
| `/<Arquivo>` | A tela `design/prototipo/<Arquivo>.dc.html` (ex.: `/Main`, `/AdminInicio`) |
| `/AdminEntrada` | Entrada do app Conecta Cidade Organizadores |
| `/telas` | Índice de todas as telas (ferramenta da equipe; não é tela do app) |
| `?modo=v1` / `?modo=prototipo` | Troca o modo (ver abaixo) e guarda a escolha na aba |

Os links entre telas funcionam como o "Play" do artefato: tocar num link leva à outra tela, e cada tela começa com o estado inicial dela.

## Modos

| Modo | O que mostra |
| --- | --- |
| `prototipo` (padrão) | Todas as 38 telas do artefato, exatamente como foram desenhadas, incluindo as da Fase 2 |
| `v1` | Aplica só as regras escritas nos requisitos da V1: telas de Fase 2 não abrem (links ficam inativos) e o card de energia do Início · gestor fica oculto. A carona para visitantes fica desativada porque `CaronaVisitante` é tela de Fase 2 |

O modo do build vem da variável `VITE_MODO` (`prototipo` ou `v1`). Na Vercel, para publicar a V1 do piloto, defina `VITE_MODO=v1` nas variáveis de ambiente do projeto. As regras do modo V1 ficam em [`src/modo.js`](../src/modo.js), cada uma citando o requisito.

## Dados reais, contas e banco

O app agora tem contas de verdade (ver [`acessos.md`](acessos.md)) e guarda as publicações num banco Postgres.

**Na Vercel (uma vez só)**
1. No projeto da Vercel, abra **Storage → Create Database → Neon** (Marketplace) e conecte o banco ao projeto. A integração cria a variável `DATABASE_URL`.
2. Faça um novo deploy (**Deployments → Redeploy**).
3. Na primeira chamada à API, o servidor cria as tabelas e as contas do piloto sozinho.

Sem `DATABASE_URL`, a API responde que o banco não está configurado, e as telas que pedem conta não abrem.

**Como funciona**

| Parte | Arquivo |
| --- | --- |
| API (uma função na Vercel, rotas em `/api/*`) | [`api/index.js`](../api/index.js), [`api/_lib/rotas.js`](../api/_lib/rotas.js) |
| Tabelas (os registros de `docs/produto/modelo-de-dados.md`) e contas iniciais | [`api/_lib/db.js`](../api/_lib/db.js), [`api/_lib/semente.js`](../api/_lib/semente.js) |
| Senhas cifradas (scrypt) e sessão por cookie (90 dias) | [`api/_lib/seguranca.js`](../api/_lib/seguranca.js) |
| Dados nas telas (`CC`) | [`src/dados/cc.js`](../src/dados/cc.js) |
| Trocas nas telas e quem pode abrir cada uma | [`src/dados/ajustes.js`](../src/dados/ajustes.js) |

**Como os dados entram sem mudar o desenho.** Cada tela continua sendo o arquivo do artefato. [`src/dados/ajustes.js`](../src/dados/ajustes.js) lista trocas de texto pequenas e explícitas: por exemplo, a lista de avisos de exemplo vira `CC.avisos(this)`, e "Olá, Lucca!" vira "Olá, {{ccPrimeiroNome}}!". Cada trecho procurado tem de existir exatamente uma vez no arquivo. Se o artefato mudar e o trecho sumir, `npm test` falha e a tela mostra o erro, em vez de mostrar dado errado.

**O que já usa dados reais**

| Tela | O que é real |
| --- | --- |
| Entrar | Conta encontrada ou não, perfil trocado, esperando aprovação; senha conferida no servidor |
| Entrada do organizador | E-mail e código de acesso conferidos no servidor |
| Início · gestor | Nome na saudação; próximos eventos; "Eu vou" |
| Início · jovem | Nome na saudação |
| Minha casa | Nome do gestor, código da família, jovens e adultos da casa; chaves Eventos, Oportunidades e Desapego dos jovens |
| Avisos · gestor e Avisos · jovem | Avisos publicados, com as regras de público e nível (o jovem nunca vê urgentes) |
| Eventos · gestor e Eventos · jovem | Eventos publicados; "Eu vou" |
| Publicar | Aviso e Evento: rascunho, publicar agora e agendar |
| Painel | Nome do organizador; lista de publicados com "No ar" e "Fora do ar" |

**Quem pode abrir cada tela**: sem conta, as telas do morador levam para Entrar e as do organizador para a Entrada do organizador. O jovem não abre telas do gestor. Eventos e Oportunidades do jovem e o Desapego seguem as chaves da Minha casa. Ficam abertas sem conta: Abertura, Acabei de chegar, Entrar, Criar conta, Guia do morador, Entrada do organizador e as telas de visitante.

**O que ainda são dados de exemplo do protótipo**: o restante das telas, entre elas Desapego (anúncios), Guia, coleta seletiva, card do Comitê Jovem, os blocos "Precisa da sua atenção" do Painel, Alcance, Aprovações, Equipe, Criar conta e todas as telas da Fase 2.

**Limites conhecidos** (decisões em [`decisoes/conflitos-entre-fontes.md`](decisoes/conflitos-entre-fontes.md), itens A-01 a A-08)
- **SMS ainda não é enviado.** O aviso guarda o SMS entre os canais, como pedem os requisitos, mas ainda não há serviço de SMS contratado (pergunta em aberto: quem paga).
- O código de acesso do organizador pode ser usado mais de uma vez no piloto.
- A publicação agendada entra no ar na primeira consulta depois da hora marcada.

## Como o app funciona

| Arquivo | Papel |
| --- | --- |
| [`src/dc/runtime.js`](../src/dc/runtime.js) | Motor das telas. Lê o `.dc.html`, interpreta `{{ }}`, `<sc-for>`, `<sc-if>` e `<helmet>`, e roda a classe `Component extends DCLogic` da tela, que guarda o estado e os dados de exemplo |
| [`src/telas.js`](../src/telas.js) | Catálogo: lista as telas a partir de `design/prototipo/` e do `canvas.json`; marca as de Fase 2 |
| [`src/main.js`](../src/main.js) | Rotas, links entre telas, moldura e índice `/telas` |
| [`src/modo.js`](../src/modo.js) | Modos `prototipo` e `v1` |
| [`src/app.css`](../src/app.css) | Só a moldura; o visual de cada tela vem do arquivo dela |
| `public/` | Manifesto do PWA, ícones (do board Ícones), service worker |
| [`vercel.json`](../vercel.json) | Build e rotas na Vercel |

**Tamanho da tela**
- Celular de 390 a 500 px de largura: a tela ocupa o aparelho inteiro; a raiz da tela passa a ter a largura e a altura do aparelho.
- Celular mais estreito que 390 px: a tela inteira é reduzida na mesma proporção, para o layout continuar o do protótipo.
- Tela maior: a tela aparece no tamanho do protótipo (390 × 844, cantos de 40 px), reduzida se não couber. `Logo` e `Icones` aparecem no tamanho do board.

**Carregamento**: cada tela é um arquivo separado no build e só é baixada quando abre; as telas para onde ela leva são baixadas em segundo plano. O código comum (React + motor) tem cerca de 53 kB compactado.

**PWA**: manifesto com nome, cores e ícone do board Ícones; o service worker guarda as telas já abertas para funcionarem com internet fraca.

## Como foi verificada a fidelidade

Durante o desenvolvimento, as 36 telas de 390 × 844 foram desenhadas lado a lado com o motor original do artefato e com o app, e as capturas foram comparadas pixel a pixel:

| Teste | Resultado |
| --- | --- |
| Tela inicial de cada uma das 36 telas | 36 idênticas (a tela Início · gestor teve 8 pixels de suavização de borda diferentes) |
| Clique em cada um dos 6 primeiros botões de cada tela | 172 estados, todos idênticos |
| Digitação em até 4 campos de cada tela com formulário | 19 estados, todos idênticos |

O motor original do artefato não faz parte deste repositório (é do editor de Design), por isso a comparação não roda no `npm test`. Para repetir: renderize `design/prototipo/<Tela>.dc.html` no próprio artefato e compare com `/<Tela>` no app.

## Como atualizar quando o artefato mudar

1. Copie de novo **todos** os arquivos de `project/` do artefato para `design/prototipo/`, sem editar.
2. Recalcule `design/prototipo.sha256` (`cd design/prototipo && sha256sum * > ../prototipo.sha256`) e atualize a versão em [`design/README.md`](../design/README.md).
3. `npm test` e `npm run build`.
4. Revise as fichas de `docs/telas/` das telas que mudaram.

Nada mais precisa mudar: o app lê as telas novas sozinho. Se surgir uma tela nova de Fase 2, inclua o nome dela em `telasFase2` em [`src/telas.js`](../src/telas.js).

## Regras para quem for mexer no código

- **Não edite as telas no código.** Mudança de tela é feita no artefato e copiada para `design/prototipo/`.
- **Não reescreva telas em JSX/HTML à parte.** O motor existe para o app ser sempre o artefato.
- O que é do app e não do protótipo (moldura, rotas, modo V1, índice) fica em `src/` e não altera o desenho das telas.
- Dados reais entram só por trocas em [`src/dados/ajustes.js`](../src/dados/ajustes.js) e funções em [`src/dados/cc.js`](../src/dados/cc.js). Cada troca deve citar a regra que a justifica e nunca mudar o desenho.
- Senhas e códigos de acesso nunca vão para o repositório; em `semente.js` fica só o resumo cifrado.

## O que o app reproduz do jeito que o artefato tem

- Em `npm run dev`, o console mostra avisos do React como ``Invalid DOM property `stroke-width` ``. Eles vêm dos atributos de SVG escritos com hífen nos arquivos do protótipo; o motor do artefato também os repassa assim, e o desenho fica igual. Os avisos não aparecem no build de produção.
- Em `Main.dc.html` há um `</div>` a mais que deixa a barra de navegação de baixo fora da raiz da tela. Por isso os rótulos dessa barra aparecem na fonte padrão do navegador, e não em DM Sans — igual ao artefato. Registrado em [conflitos](decisoes/conflitos-entre-fontes.md) (P-23).
- Todos os outros pontos em que o protótipo diverge dos documentos estão nas fichas das telas e em [`decisoes/conflitos-entre-fontes.md`](decisoes/conflitos-entre-fontes.md).
