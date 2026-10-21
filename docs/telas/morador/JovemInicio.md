# Início · morador jovem — `JovemInicio.dc.html`

| Campo | Valor |
| --- | --- |
| App | Conecta Cidade (morador) |
| Página do canvas | `morador` ("Conecta Cidade") — conforme `design/prototipo/canvas.json` |
| Nome na lista "Telas da versão 1" dos requisitos | Início · jovem |
| Versão | V1 com partes ocultas até a Fase 2 (Trilhas e Carona aparecem no protótipo e são Fase 2) |
| Perfil que vê | Jovem |
| Protótipo | [`design/prototipo/JovemInicio.dc.html`](../../../design/prototipo/JovemInicio.dc.html) |
| Tamanho | 390×844 |

## Para que serve
Tela inicial do perfil jovem. Segundo os requisitos ("Telas da versão 1"), mostra o "Card do Comitê Jovem, votação do próximo evento, áreas liberadas e áreas trancadas", e "o botão Pedir liberação envia o pedido para o gestor".

## Conteúdo da tela (de cima para baixo)
A área de conteúdo rola (`overflow-y: auto`); a barra de navegação fica fixa embaixo.

1. **Cabeçalho**
   - Logo (pino verde com triângulo e pontos) + texto "Conecta Cidade".
   - Selo à direita: "Jovem".
2. **Saudação**
   - Título: "E aí, Lucca!"
   - Subtítulo: "O que tem para a galera do Núcleo"
3. **Card do Comitê Jovem** (fundo escuro)
   - Rótulo: "Comitê Jovem Entre Fases" e, à direita, o link "@entrefasescks" (abre `https://instagram.com/entrefasescks`).
   - Título: "Próximo: CineFases · sábado, 7/11"
   - Texto: "Ingresso: 1 kg de alimento. Já viraram 33 cestas básicas para a Via Autismo."
   - "Vota no próximo evento:" seguido de 5 botões-chip: "Cinema", "Culinária", "Videogame", "Vôlei", "Futebol".
   - Linha de mensagem do voto (ver Comportamento).
4. **Seção "Bora?"** — grade 2×2 de cards clicáveis (áreas liberadas):
   - "Eventos" — "Cinema, culinária, games" → `JovemEventos.dc.html`
   - "Oportunidades" — "Vestibular, estágio, cursos" → `JovemGuia.dc.html`
   - "Trilhas" — "Só em grupo" → `JovemTrilhas.dc.html`
   - "Avisos" — "O que rola na cidade" → `JovemAvisos.dc.html`
5. **Seção "Só com liberação do gestor da casa"** (áreas trancadas, ícone de cadeado cinza):
   - Card "Carona" — "Só com liberação do responsável" — com botão à direita "Pedir liberação" (muda para "Pedido enviado").
   - Card "Desapego" — "Vender e combinar entrega é com o gestor" — **sem botão**.
6. **Barra de navegação inferior** (5 itens): "Início" (ativo, `aria-current="page"`, cor laranja), "Eventos", "Trilhas", "Família", "Perfil".

## Comportamento (script `Component`)
- Estado inicial: `{ vote: null, asked: false }`.
- **Votação:** os chips vêm da lista fixa `['Cinema', 'Culinária', 'Videogame', 'Vôlei', 'Futebol']`. Tocar num chip grava `vote` com o rótulo (um voto por vez; tocar em outro troca o voto). O chip escolhido fica amarelo (`#FFD27A`) com `aria-pressed="true"`.
  - Sem voto: "Seu voto ajuda o Comitê a escolher."
  - Com voto: "Voto registrado: <opção>. O Comitê vê o resultado."
- **Pedir liberação (Carona):** o botão alterna `asked` (`!asked`).
  - `asked = false`: rótulo "Pedir liberação", fundo escuro.
  - `asked = true`: rótulo "Pedido enviado", fundo verde-claro, `aria-pressed="true"`.
  - Tocar de novo em "Pedido enviado" volta para "Pedir liberação" (desfaz o pedido no protótipo).
- Dados de exemplo fixos no markup: nome "Lucca", evento "CineFases · sábado, 7/11", "33 cestas básicas", "Via Autismo".
- Não há validação nem chamada a servidor; nada é guardado.

## Navegação
| Elemento | Leva para |
| --- | --- |
| Link "@entrefasescks" | `https://instagram.com/entrefasescks` (externo) |
| Card "Eventos" | `JovemEventos.dc.html` |
| Card "Oportunidades" | `JovemGuia.dc.html` |
| Card "Trilhas" | `JovemTrilhas.dc.html` |
| Card "Avisos" | `JovemAvisos.dc.html` |
| Barra · "Início" (ativo) | `JovemInicio.dc.html` |
| Barra · "Eventos" | `JovemEventos.dc.html` |
| Barra · "Trilhas" | `JovemTrilhas.dc.html` |
| Barra · "Família" | `JovemFamilia.dc.html` |
| Barra · "Perfil" | `Login.dc.html` |

Chegam a esta tela: `Login.dc.html` (aba jovem), `CadastroJovem.dc.html` e o botão voltar de `JovemEventos`, `JovemGuia`, `JovemAvisos`, `JovemTrilhas`, além da barra de `JovemFamilia`.

## Dados mostrados → registros do sistema
| Dado na tela | Registro |
| --- | --- |
| "Lucca" na saudação | Pessoa (nome ou apelido) |
| Selo "Jovem" | Pessoa (perfil) |
| "Próximo: CineFases · sábado, 7/11", "Ingresso: 1 kg de alimento" | Evento (nome, data e hora, ingresso solidário, organizador = Comitê Jovem) |
| "Já viraram 33 cestas básicas para a Via Autismo" | Sem registro correspondente (texto fixo; dado vem de `contexto-entre-fases.txt`) |
| Opções e voto "Vota no próximo evento" | **Sem registro correspondente** (nenhum dos 8 registros guarda votos) |
| Áreas liberadas/trancadas: Eventos, Oportunidades, Desapego | Permissão do jovem (área, ligada ou desligada) |
| Áreas Trilhas e Carona | **Sem registro correspondente** — o registro Permissão do jovem só prevê as áreas Eventos, Oportunidades e Desapego |
| Pedido de liberação ("Pedir liberação" / "Pedido enviado") | **Sem registro correspondente** (não há registro de pedido de liberação) |
| Avisos | Aviso (só o atalho; a lista está em `JovemAvisos`) |

## Regras dos documentos que se aplicam
- **Requisitos da versão 1 › Telas da versão 1 › Início · jovem:** "Card do Comitê Jovem, votação do próximo evento, áreas liberadas e áreas trancadas"; "O botão Pedir liberação envia o pedido para o gestor".
- **Requisitos › Perfis e permissões (linha Jovem):** "Eventos, Guia e oportunidades e avisos informativos e importantes; Desapego só se o gestor liberar". Também: "o gestor decide o que os jovens da casa podem usar".
- **Requisitos › Perfis e permissões › Regras de permissão, 2:** "O jovem nunca vê avisos urgentes no app".
- **Requisitos › Dados que o sistema guarda › Permissão do jovem:** "Pessoa, área (Eventos, Oportunidades, Desapego), ligada ou desligada".
- **Requisitos › Piloto › Critérios de aceite:** "O gestor liga e desliga o Desapego do jovem, e o app do jovem muda na hora".
- **Requisitos › Objetivo e escopo (tabela):** "Trilhas com agenda" e "Carona (moradores e visitantes)" são Fase 2.
- **Requisitos › Requisitos gerais › Desempenho:** "a tela inicial abre em até 3 segundos numa conexão 4G fraca".
- **Conecta Cidade: o aplicativo › Eventos que vão acontecer:** "Espaço para o Comitê Jovem divulgar os próprios eventos, junto com o Instagram @entrefasescks".
- **contexto-entre-fases.txt:** ingresso de 1 kg de alimento que virou 33 cestas básicas para a Via Autismo; interesses cinema, culinária, videogame, vôlei e futebol (as mesmas 5 opções da votação).

## Divergências entre protótipo e documentos
1. **"Pedir liberação" está só na Carona, não no Desapego.** A regra da V1 é "Desapego só se o gestor liberar", e o critério de aceite fala em ligar e desligar o Desapego do jovem. No protótipo, o card trancado do Desapego não tem botão "Pedir liberação"; o único botão está na Carona, que é Fase 2. Assim, sem a Carona, a V1 fica sem o botão citado na lista de telas.
2. **Texto do Desapego trancado** ("Vender e combinar entrega é com o gestor") dá a entender que o jovem nunca vende. Os requisitos dizem que o jovem pode usar o Desapego quando o gestor libera. O protótipo não mostra o Desapego liberado.
3. **Trilhas (Fase 2) aparece como área liberada** (card em "Bora?" e item na barra de navegação). A tabela de escopo põe "Trilhas com agenda" na Fase 2.
4. **Carona (Fase 2) aparece como área trancada**, com o pedido de liberação. A tabela de escopo põe "Carona" na Fase 2.
5. **Áreas sem registro de permissão:** Trilhas e Carona são tratadas como áreas que o gestor libera, mas o registro "Permissão do jovem" só tem Eventos, Oportunidades e Desapego.
6. **Eventos e Oportunidades estão sempre liberados.** Pelo registro "Permissão do jovem", o gestor pode desligar essas duas áreas, mas o protótipo não mostra como elas ficam desligadas.
7. **Votação do próximo evento** está na lista da V1, mas nenhum dos 8 registros guarda votos, e nenhuma tela de organizador mostra o resultado ("O Comitê vê o resultado").
8. **Pedido de liberação** não tem registro próprio entre os 8 registros.
9. **O botão de pedido funciona como liga/desliga:** tocar em "Pedido enviado" cancela o pedido. Os documentos não falam em cancelar pedido.
10. **Termos diferentes:** o título da seção diz "gestor da casa" e o card da Carona diz "Só com liberação do responsável".
11. **"Perfil" na barra leva para `Login.dc.html`.** Não há tela de perfil do jovem, e os documentos não falam em uma.
12. **"Família" na barra leva para `JovemFamilia.dc.html`**, uma tela que não está na lista das 13 telas da V1 (ver a ficha `JovemFamilia.md`).
13. **"Guia" não aparece com esse nome:** a linha Jovem dos requisitos fala em "Guia e oportunidades", mas o card se chama só "Oportunidades" (leva a `JovemGuia.dc.html`, que tem o Guia).
14. **Botões abaixo de 44 px:** os chips da votação têm 38 px e o botão "Pedir liberação" tem 40 px de altura. "Requisitos gerais › Acessibilidade" pede "botões de pelo menos 44 px".

## Notas para implementação
- Na V1, o card "Trilhas" (em "Bora?" e na barra) e o card "Carona" ficam ocultos até a Fase 2, conforme a tabela de escopo. O protótipo não define o que entra no lugar deles.
- As áreas liberadas e trancadas vêm do registro "Permissão do jovem" e mudam "na hora" quando o gestor liga ou desliga (critério de aceite).
- O nome "Lucca", o card "CineFases · sábado, 7/11" e "33 cestas básicas" são dados de exemplo do protótipo.
- As 5 opções da votação são fixas no script (`['Cinema', 'Culinária', 'Videogame', 'Vôlei', 'Futebol']`).
