# Logo e identidade — `Logo.dc.html`

| Campo | Valor |
| --- | --- |
| App | Identidade visual (vale para o Meu Carajás Super App e o Meu Carajás Organizadores) |
| Página do canvas | `morador` ("Meu Carajás Super App") — o board não tem campo `page` no `canvas.json`, então fica na primeira página, na posição (0, 0) |
| Nome na lista "Telas da versão 1" dos requisitos | Não está na lista da V1 (não é tela) |
| Versão | Identidade (não é tela) |
| Perfil que vê | Ninguém no app; é referência para design e desenvolvimento |
| Protótipo | [`design/prototipo/Logo.dc.html`](../../../design/prototipo/Logo.dc.html) |
| Tamanho | 1240×620 (board estático, sem `radius` nem `is_interactive`) |

## Para que serve
Mostra o logo, as variações do símbolo, a paleta de cores e as fontes do Meu Carajás Super App. Os requisitos pedem "cores, fontes (Bricolage Grotesque e DM Sans), ícones e logo iguais aos do protótipo".

## O símbolo
SVG com `viewBox="0 0 100 120"`, descrito no `aria-label` como "Símbolo do Meu Carajás Super App: um pino de mapa com três pontos conectados". É formado por:

| Parte | Desenho no SVG | Cor na versão principal |
| --- | --- | --- |
| Pino de mapa | `path` "M50 114 C50 114 12 74 12 46 A38 38 0 1 1 88 46 C88 74 50 114 50 114 Z" | `brand` (padrão `#1E5B40`) |
| Triângulo de ligação | contorno de (34,36) → (66,36) → (50,62), traço de 5, cantos arredondados | `#FFFFFF` |
| Dois pontos do alto | círculos de raio 8 em (34,36) e (66,36) | `#FFFFFF` |
| Ponto de baixo | círculo de raio 10 em (50,62) | `accent` (padrão `#E07A3F`) |

## Conteúdo do board (variações)
Fundo do board `#F4F6F1`, padding de 56 px. Linha de cima com três cards de 360 px de altura; linha de baixo com a paleta e as fontes.

1. **Logo principal** (card branco, 520 px, cantos de 28 px):
   - Símbolo de 110×132 px na versão principal (pino `brand`, detalhes brancos, ponto `accent`).
   - Ao lado, o nome em duas linhas: "Meu Carajás" em `#13241B` e "Super App" em `brand`, Bricolage Grotesque, peso 800, 54 px, espaçamento −1,5 px, entrelinha 0,95.
   - Abaixo: "Núcleo Urbano de Carajás" (DM Sans, 700, 14 px, caixa alta, espaçamento 2,4 px, `#4F5E55`).
2. **Ícone do app** (card `#DCEDE2`, 280 px):
   - Quadrado de 160×160 px, cantos de 38 px, fundo `brand`, com o símbolo **invertido** (pino branco; triângulo e dois pontos em `brand`; ponto de baixo `accent`). `aria-label`: "Ícone do aplicativo".
   - Duas versões pequenas, lado a lado: 60×60 px (cantos de 15 px) e 40×40 px (cantos de 10 px), fundo `brand`, com o símbolo **simplificado** — só o pino branco e o ponto `accent` (raio 12 na de 60 px e raio 14 na de 40 px), sem triângulo nem os dois pontos do alto.
   - Legenda "Ícone do app" (13 px, 700, `#17432F`).
3. **Versão clara** (card `#13241B`, 280 px):
   - Símbolo de 76×91 px com pino branco, triângulo e dois pontos em `#13241B` e ponto de baixo `accent`. `aria-label`: "Símbolo em versão clara".
   - "Meu Carajás Super App" em uma linha (Bricolage Grotesque, 800, 32 px, `#FFFFFF`).
   - "Feito pelo Comitê Jovem Entre Fases" (13 px, `#CFE3D7`).
4. **Paleta** (cinco amostras de cantos de 18 px, com nome e hex):

   | Nome no board | Hex escrito | Cor do texto da amostra |
   | --- | --- | --- |
   | Verde floresta | `#1E5B40` | `#FFFFFF` |
   | Mata escura | `#13241B` | `#FFFFFF` |
   | Terra de Carajás | `#B4471C` | `#FFFFFF` |
   | Minério | `#E07A3F` | `#13241B` |
   | Fundo | `#F4F6F1` | `#13241B` (amostra pintada de `#FFFFFF` com borda `#E2E7E0` — ver Divergências) |

5. **Fontes** (card branco, 300 px): "Bricolage Grotesque" escrito na própria fonte (800, 26 px, espaçamento −0,5 px) e "DM Sans para textos e botões" (14 px, `#4F5E55`).

## Cores
| Hex | Papel no board |
| --- | --- |
| `#1E5B40` | Verde floresta: cor de marca (`brand` padrão), pino do símbolo, fundo do ícone do app, linha "Super App" |
| `#13241B` | Mata escura: texto principal, linha "Meu Carajás", fundo da versão clara, detalhes do símbolo na versão clara |
| `#B4471C` | Terra de Carajás: só aparece na paleta deste board (nas telas, é a cor de destaque do jovem) |
| `#E07A3F` | Minério: ponto de baixo do símbolo (`accent` padrão) |
| `#F4F6F1` | Fundo: fundo do board (e das telas claras) |
| `#FFFFFF` | Cards, pino nas versões invertida e clara, detalhes do símbolo na versão principal |
| `#DCEDE2` | Fundo do card "Ícone do app" |
| `#17432F` | Legenda "Ícone do app"; também opção de `brand` no editor |
| `#4F5E55` | Textos secundários ("Núcleo Urbano de Carajás", "DM Sans para textos e botões") |
| `#CFE3D7` | Crédito "Feito pelo Comitê Jovem Entre Fases" no card escuro |
| `#E2E7E0` | Borda da amostra "Fundo" |
| `#24578C` | Só como opção de `brand` no editor |
| `#D4A017`, `#C2562B` | Só como opções de `accent` no editor |

## Fontes
| Fonte | Carregamento (Google Fonts) | Papel |
| --- | --- | --- |
| Bricolage Grotesque | eixo `opsz` 12–96, pesos 500–800 | Nome "Meu Carajás Super App" e títulos (no board, sempre peso 800) |
| DM Sans | eixo `opsz` 9–40, pesos 400–700 | "textos e botões" (fonte-base do board) |

## Comportamento (script `Component`)
- Sem estado. `renderVals()` devolve `brand: this.props.brand ?? '#1E5B40'` e `accent: this.props.accent ?? '#E07A3F'`.
- Opções no editor do protótipo: `brand` = `#1E5B40`, `#17432F`, `#24578C`; `accent` = `#E07A3F`, `#D4A017`, `#C2562B`.
- `$preview`: 1240×620.

## Usos nas telas documentadas nesta pasta
| Tela | Variação usada |
| --- | --- |
| `Splash.dc.html` (Abertura) | Símbolo de 70×84 px na versão principal (pino `brand`) dentro de um quadrado **branco** de 132×132 px com cantos de 34 px, sobre fundo `brand`; nome "Meu Carajás Super App" branco em uma linha (40 px) e "Núcleo Urbano de Carajás" em `#CFE3D7`; crédito "Feito pelo Comitê Jovem Entre Fases" |
| `Login.dc.html` (Entrar) | Símbolo de 30×36 px na versão principal + "Meu Carajás Super App" em uma linha (Bricolage Grotesque, 800, 20 px) |
| `Chegada.dc.html` (Acabei de chegar) | Só o nome "Meu Carajás Super App" em texto (Bricolage Grotesque, 800, 20 px), sem símbolo |
| `Icones.dc.html` | Ícones dos dois apps (ver `Icones.md`) |

## Regras dos documentos que se aplicam
- *Conecta Cidade: requisitos da versão 1*, "Requisitos gerais" → **Visual**: "cores, fontes (Bricolage Grotesque e DM Sans), ícones e logo iguais aos do protótipo".
- *Requisitos da versão 1*, "Requisitos gerais" → **Acessibilidade**: "contraste alto".
- *Requisitos da versão 1*, "Objetivo e escopo": "São dois apps sobre o mesmo banco de dados: o **Meu Carajás Super App**, para os moradores, e o **Meu Carajás Organizadores**, para quem publica."

## Divergências entre protótipo e documentos
1. **Amostra "Fundo" com cor trocada:** a amostra está pintada de `#FFFFFF` (com borda `#E2E7E0`), mas o texto diz `#F4F6F1`. É uma divergência dentro do próprio board; o fundo do board e das telas claras usa `#F4F6F1`.
2. **Variação da Abertura fora do board:** a Abertura (`Splash.dc.html`) usa o símbolo verde dentro de um quadrado branco, variação que não aparece neste board.
3. **Paleta incompleta em relação às telas:** o board mostra cinco cores, mas as telas usam outras (por exemplo `#4F5E55`, `#17432F`, `#CFE3D7`, `#C9D2CB`, `#E2E7E0` e as cores de situação `#9B1C10`, `#6B4D05`, `#F8EDC9`, `#FBE6DA`, `#FBDCD6`, `#DFE9F5`, `#24578C`, `#FFD27A`). Os documentos só pedem as cores "iguais aos do protótipo", sem listá-las.

Os documentos-fonte não definem cores, nomes de cores nem o desenho do logo; por isso não há outra divergência com eles.

## Notas para implementação
- As opções extras de cor das props (`#17432F`, `#24578C`, `#D4A017`, `#C2562B`) são alternativas do editor do protótipo; os padrões são `#1E5B40` e `#E07A3F`.
- O símbolo simplificado (sem triângulo) é o que o board mostra para os tamanhos de 60 px e 40 px.
- As fontes vêm do Google Fonts com os eixos e pesos listados acima.
