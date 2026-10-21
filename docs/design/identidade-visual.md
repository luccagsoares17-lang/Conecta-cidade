# Identidade visual

Fonte: requisitos da V1 ("Visual: cores, fontes (Bricolage Grotesque e DM Sans), ícones e logo iguais aos do protótipo") e os boards [`Logo`](../telas/identidade/Logo.md) e [`Icones`](../telas/identidade/Icones.md) do protótipo. Todos os valores abaixo foram tirados dos arquivos de `design/prototipo/`; nada foi criado.

## Fontes

| Fonte | Configuração (Google Fonts) | Uso |
| --- | --- | --- |
| **Bricolage Grotesque** | `opsz 12..96`, pesos `500..800` | Marca "Meu Carajás Super App" e títulos (800 nos títulos de tela, 700 em títulos de card e de passo) |
| **DM Sans** | `opsz 9..40`, pesos `400..700` | Textos, campos e botões |

Link usado em todas as telas:

```
https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500..800&family=DM+Sans:opsz,wght@9..40,400..700&display=swap
```

## Paleta da marca (nomeada no board Logo)

| Nome no protótipo | Hex | Papel |
| --- | --- | --- |
| Verde floresta | `#1E5B40` | Cor de marca; fundo da Abertura; destaque do **gestor** (aba, botões, chips); fundo do ícone do app dos moradores |
| Mata escura | `#13241B` | Texto principal; cabeçalho e barra do app Organizadores; caixas do código da família; fundo do ícone Organizadores |
| Terra de Carajás | `#B4471C` | Destaque do **jovem**; botão principal do Organizadores; borda de erro |
| Minério | `#E07A3F` | Ponto do símbolo do logo |
| Fundo | `#F4F6F1` | Fundo das telas claras |

O board mostra a amostra "Fundo" pintada de `#FFFFFF`, embora o rótulo diga `#F4F6F1`; as telas usam `#F4F6F1` como fundo.

## Cores de apoio usadas nas telas

| Hex | Papel |
| --- | --- |
| `#FFFFFF` | Cards; texto sobre fundo escuro |
| `#4F5E55` | Texto secundário |
| `#17432F` | Verde escuro: texto de sucesso, hover de link |
| `#CFE3D7` | Texto claro sobre verde ou sobre a Mata escura; itens inativos da barra do Organizadores |
| `#DCEDE2` | Verde claro: fundo de sucesso e de etiquetas |
| `#E2E7E0` / `#EEF1EC` | Fundo de abas e barras vazias / divisórias |
| `#C9D2CB` | Borda de campos e chips; botão desabilitado |
| `#9AA69F` | Borda tracejada da foto; ícone inativo |
| `#FFD27A` | Rótulos sobre fundo escuro ("Código da família", "Meu Carajás Organizadores"); item ativo da barra do Organizadores |
| `#1C3327` / `#4F6B5C` | Fundo e borda de campos sobre fundo escuro |

## Cores de situação

| Situação | Texto | Fundo |
| --- | --- | --- |
| Erro / urgente | `#9B1C10` | `#FBDCD6` |
| Atenção / espera | `#6B4D05` (barra `#D4A017`) | `#F8EDC9` |
| Falta, etiqueta "Jovem" | `#8E3714` | `#FBE6DA` |
| Informação | `#24578C` | `#DFE9F5` |
| Sucesso | `#17432F` | `#DCEDE2` |

Cores de área que aparecem em telas específicas (ex.: roxo `#7A52B3` / `#3A2560` / `#ECE4F5` para carona; verde-oliva `#3F6B1F` / `#E3EEDC` para trilha) estão descritas nas fichas das telas.

## Logo e ícones

- Símbolo: um pino de mapa com três pontos ligados por um triângulo; o ponto de baixo em Minério `#E07A3F`. O SVG está repetido inline em várias telas (`viewBox="0 0 100 120"`).
- Ícone do app **Meu Carajás Super App**: fundo Verde floresta. Ícone do **Meu Carajás Organizadores**: fundo Mata escura com selo `#FFD27A`.
- Ícones de interface: SVG de traço (`stroke-width` 2 a 2,2, pontas arredondadas), cor herdada do texto.
- Detalhes, variações e medidas: fichas [`Logo`](../telas/identidade/Logo.md) e [`Icones`](../telas/identidade/Icones.md).

## Medidas recorrentes

| Elemento | Valor no protótipo |
| --- | --- |
| Tela | 390 × 844 px, cantos de 40 px no canvas |
| Cabeçalho | `padding: 52px 20px 18px` |
| Barra inferior | 80 px de altura, 5 itens em grade |
| Botão principal | 54 px de altura, raio 27 px |
| Campo de texto | 52 px de altura, raio 14 px |
| Card | raio 16 a 20 px, fundo branco |
| Botão de ícone | 44 × 44 px |

## Acessibilidade

Os requisitos pedem botões de **pelo menos 44 px**. Vários chips e botões secundários do protótipo têm de 36 a 40 px; cada ficha de tela registra onde. Na implementação, vale o mínimo de 44 px, mantendo o resto do visual.
