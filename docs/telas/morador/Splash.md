# Abertura do app — `Splash.dc.html`

| Campo | Valor |
| --- | --- |
| App | Meu Carajás Super App (morador) |
| Página do canvas | `morador` ("Meu Carajás Super App") — o board não tem campo `page` no `canvas.json`, então fica na primeira página. É o arquivo de abertura do canvas (`"launch": {"file": "Splash.dc.html"}`). |
| Nome na lista "Telas da versão 1" dos requisitos | Abertura |
| Versão | V1 |
| Perfil que vê | Qualquer pessoa antes de entrar (gestor da casa, adulto, jovem ou quem ainda não tem conta) |
| Protótipo | [`design/prototipo/Splash.dc.html`](../../../design/prototipo/Splash.dc.html) |
| Tamanho | 390×844 (raio 40, interativo) |

## Para que serve
Primeira tela do app do morador. Segundo os requisitos, mostra os "Botões Entrar e Acabei de chegar no Núcleo" e "Leva ao Login ou à tela Acabei de chegar".

## Conteúdo da tela (de cima para baixo)
Fundo inteiro na cor de marca (`brand`, padrão `#1E5B40`), texto branco, fonte DM Sans.

1. **Bloco central** (centralizado na vertical):
   - Quadrado branco de 132×132 px com cantos de 34 px, contendo o símbolo do Meu Carajás Super App (pino de mapa na cor `brand`, triângulo de contorno branco ligando dois círculos brancos no alto e um círculo na cor `accent`, padrão `#E07A3F`, no vértice de baixo). `aria-label`: "Símbolo do Meu Carajás Super App".
   - "Meu Carajás Super App" — Bricolage Grotesque, peso 800, 40 px.
   - "Núcleo Urbano de Carajás" — 13 px, peso 700, caixa alta, espaçamento 2,2 px, cor `#CFE3D7`.
   - "Tudo o que acontece no Núcleo, num só lugar." — 17 px, centralizado.
2. **Rodapé** (empilhado):
   - Botão-link "Entrar" — pílula branca de 54 px de altura, texto na cor `brand`.
   - Botão-link "Acabei de chegar no Núcleo" — pílula de 54 px com borda branca de 2 px a 60% de opacidade (`rgba(255,255,255,0.6)`), texto branco.
   - "Feito pelo Comitê Jovem Entre Fases" — 12 px, cor `#CFE3D7`.

Não há barra de navegação inferior.

## Comportamento (script `Component`)
- Sem `this.state`; a tela é estática.
- `renderVals()` devolve só duas cores, vindas das props do editor:
  - `brand`: `this.props.brand ?? '#1E5B40'` (opções no editor: `#1E5B40`, `#17432F`, `#24578C`).
  - `accent`: `this.props.accent ?? '#E07A3F'` (opções no editor: `#E07A3F`, `#D4A017`, `#C2562B`).
- `$preview`: 390×844.

## Navegação
| Elemento | Leva para |
| --- | --- |
| Botão "Entrar" | `Login.dc.html` |
| Botão "Acabei de chegar no Núcleo" | `Chegada.dc.html` |

Telas do protótipo que voltam para esta: `Chegada.dc.html` (botão voltar) e `AdminEntrada.dc.html`.

## Dados mostrados → registros do sistema
Nenhum dado de registro aparece. Os textos são fixos (marca, nome do Núcleo, frase e crédito ao Comitê Jovem).

## Regras dos documentos que se aplicam
- *Conecta Cidade: requisitos da versão 1*, seção "Telas da versão 1", linha **Abertura**: "Botões Entrar e Acabei de chegar no Núcleo"; "Leva ao Login ou à tela Acabei de chegar".
- *Requisitos da versão 1*, "Requisitos gerais" → **Visual**: "cores, fontes (Bricolage Grotesque e DM Sans), ícones e logo iguais aos do protótipo".
- *Requisitos da versão 1*, "Requisitos gerais" → **Acessibilidade**: "botões de pelo menos 44 px" (os dois botões têm 54 px); "contraste alto".
- *Requisitos da versão 1*, "Requisitos gerais" → **Desempenho**: "a tela inicial abre em até 3 segundos numa conexão 4G fraca".

## Divergências entre protótipo e documentos
Nenhuma encontrada.

## Notas para implementação
- As opções de cor das props (`#17432F`, `#24578C`, `#D4A017`, `#C2562B`) são alternativas do editor do protótipo; os valores padrão são `#1E5B40` (fundo) e `#E07A3F` (ponto do símbolo).
- O símbolo é o mesmo SVG (viewBox `0 0 100 120`) usado no board `Logo.dc.html`; aqui aparece na versão "pino verde sobre quadrado branco".
- O botão "Acabei de chegar no Núcleo" leva à tela "Acabei de chegar" (`Chegada.dc.html`), e não ao cadastro direto.
