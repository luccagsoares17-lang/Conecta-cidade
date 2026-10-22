# Ícones dos dois apps — `Icones.dc.html`

| Campo | Valor |
| --- | --- |
| App | Identidade visual (ícones do Meu Carajás Super App e do Meu Carajás Organizadores) |
| Página do canvas | `morador` ("Meu Carajás Super App") — o board não tem campo `page` no `canvas.json`, então fica na primeira página, na posição (1320, 0) |
| Nome na lista "Telas da versão 1" dos requisitos | Não está na lista da V1 (não é tela) |
| Versão | Identidade (não é tela) |
| Perfil que vê | Ninguém no app; é referência para os ícones de instalação dos dois apps |
| Protótipo | [`design/prototipo/Icones.dc.html`](../../../design/prototipo/Icones.dc.html) |
| Tamanho | 600×620 (board estático, sem `radius` nem `is_interactive`) |

## Para que serve
Mostra lado a lado o ícone de cada um dos dois apps. Os requisitos dizem: "São dois apps sobre o mesmo banco de dados: o **Meu Carajás Super App**, para os moradores, e o **Meu Carajás Organizadores**, para quem publica", e pedem "ícones e logo iguais aos do protótipo".

## Conteúdo do board (de cima para baixo)
Fundo `#DCEDE2`, padding de 48 px, texto `#13241B`, DM Sans.

1. **Título:** "Dois apps, uma cidade" (Bricolage Grotesque, 800, 30 px, espaçamento −0,6 px).
2. **Grade de dois cards brancos** (cantos de 28 px, padding de 24 px, conteúdo centralizado):

| | Meu Carajás Super App | Meu Carajás Organizadores |
| --- | --- | --- |
| Quadrado do ícone | 132×132 px, cantos de 32 px | 132×132 px, cantos de 32 px |
| Fundo do ícone | `#1E5B40` (verde floresta) | `#13241B` (mata escura) |
| Símbolo (70×84 px) | Pino `#FFFFFF`; triângulo e dois pontos do alto em `#1E5B40`; ponto de baixo `#E07A3F` | Pino `#FFFFFF`; triângulo e dois pontos do alto em `#13241B`; ponto de baixo `#E07A3F` |
| Selo | — | Círculo de 36 px no canto inferior direito (a 14 px das bordas), fundo `#FFD27A`, borda de 3 px `#13241B`, com pictograma de megafone em traço `#13241B` (path `m3 11 18-5v12L3 14v-3z`, traço 2,6) |
| `aria-label` | "Ícone do app Meu Carajás Super App" | "Ícone do app Meu Carajás Organizadores" |
| Nome (700, 18 px) | "Meu Carajás Super App" | "Meu Carajás Organizadores" |
| Legenda (14 px, `#4F5E55`) | "Para os moradores do Núcleo" | "Para quem publica as informações" |

O símbolo é o mesmo SVG do board `Logo.dc.html` (`viewBox="0 0 100 120"`: pino de mapa, triângulo ligando dois pontos no alto e um ponto de baixo), na versão invertida (pino branco).

## Cores
| Hex | Papel no board |
| --- | --- |
| `#1E5B40` | Fundo do ícone do app dos moradores e detalhes do símbolo nele |
| `#13241B` | Fundo do ícone do app Organizadores, detalhes do símbolo nele, borda e traço do selo; texto principal |
| `#E07A3F` | Ponto de baixo do símbolo nos dois ícones |
| `#FFD27A` | Fundo do selo de megafone do app Organizadores |
| `#FFFFFF` | Pino do símbolo e fundo dos cards |
| `#DCEDE2` | Fundo do board |
| `#4F5E55` | Legendas |
| `#17432F` | Só na cor de `a:hover` do estilo base (não há links no board) |

## Fontes
| Fonte | Papel |
| --- | --- |
| Bricolage Grotesque (800) | Título "Dois apps, uma cidade" |
| DM Sans (400–700) | Nomes dos apps e legendas |

Ambas carregadas do Google Fonts (Bricolage Grotesque `opsz` 12–96, pesos 500–800; DM Sans `opsz` 9–40, pesos 400–700).

## Comportamento (script `Component`)
- Sem estado e sem props editáveis; `renderVals()` devolve `{}`. As cores são fixas no markup.
- `$preview`: 600×620.

## Onde o ícone aparece
| Ícone | Relação com outros boards |
| --- | --- |
| Meu Carajás Super App | Igual ao "Ícone do app" do board `Logo.dc.html` (lá com 160 px, cantos de 38 px e cor `brand` editável) |
| Meu Carajás Organizadores | Só aparece neste board |

## Regras dos documentos que se aplicam
- *Conecta Cidade: requisitos da versão 1*, "Objetivo e escopo": os dois apps e o público de cada um ("para os moradores" e "para quem publica").
- *Requisitos da versão 1*, "Requisitos gerais" → **Visual**: "cores, fontes (Bricolage Grotesque e DM Sans), ícones e logo iguais aos do protótipo".
- *Requisitos da versão 1*, "Requisitos gerais" → **Plataformas**: "Android e iPhone. Uma versão web (PWA) serve para o piloto, sem precisar das lojas."

## Divergências entre protótipo e documentos
Nenhuma encontrada. Os nomes dos apps e as legendas batem com os requisitos. Os documentos não descrevem o desenho dos ícones.

## Notas para implementação
- O board `Logo.dc.html` mostra versões pequenas (60 px e 40 px) com o símbolo simplificado só para o ícone dos moradores; o protótipo não tem versão pequena do ícone Organizadores.
- Os tamanhos de ícone exigidos por Android, iPhone e PWA não estão no protótipo nem nos documentos.

## Ícone do Super App trocado em 22/10/2026 (decisão A-19)

O ícone do **Meu Carajás Super App** passou a ter a flor de Carajás (pétalas `#E07A3F`, raios e miolo `#B4471C`, centro `#FFD27A`, haste e folha `#DCEDE2`) sobre o mesmo fundo `#1E5B40`. O ícone do **Meu Carajás Organizadores** não mudou: continua o pino com o selo `#FFD27A`.

No app instalado no celular, o Super App usa `public/icons/icon.svg` e os PNGs com a flor. As telas dos organizadores usam o ícone e o manifesto próprios (`public/icons/organizador*.png`, `organizador.svg`, `manifest-organizador.webmanifest`).
