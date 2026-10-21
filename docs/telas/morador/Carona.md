# Carona · gestor — `Carona.dc.html`

| Campo | Valor |
| --- | --- |
| App | Meu Carajás Super App (morador) |
| Página do canvas | `morador` (o board não tem a chave `page` no `canvas.json`, então fica na primeira página, "Meu Carajás Super App") |
| Nome na lista "Telas da versão 1" dos requisitos | Não está na lista da V1 |
| Versão | Fase 2 ("Carona (moradores e visitantes)" está só na coluna Fase 2 da tabela de escopo dos requisitos) |
| Perfil que vê | Gestor da casa (título do board: "Carona · gestor") |
| Protótipo | [`design/prototipo/Carona.dc.html`](../../../design/prototipo/Carona.dc.html) |
| Tamanho | 390×844 |

## Para que serve
Carona entre moradores do Núcleo de Carajás e Parauapebas: procurar uma carona oferecida e pedir vaga, ou oferecer uma carona. Subtítulo da tela: "Divida o caminho com os vizinhos". Os documentos-fonte só citam a área como "Carona (moradores e visitantes)", na Fase 2 dos requisitos.

## Conteúdo da tela (de cima para baixo)
1. **Cabeçalho**: botão de voltar (`aria-label="Voltar para o início"`, leva a `Main.dc.html`), título "Carona" e subtítulo "Divida o caminho com os vizinhos". Não há barra de navegação inferior.
2. **Seletor de modo** (dois botões, `aria-pressed`): "Procurar carona" e "Oferecer carona".
3. **Card de trajeto**: desenho de pontos e linha; "Saindo de" {origem} e "Indo para" {destino}; botão de inverter (`aria-label="Inverter ida e volta"`).
4. **Card de ranking**: título "Ranking · Top 10 caronas", subtítulo "Motoristas mais bem avaliados pelos vizinhos". Cada linha tem posição (1º a 3º com cor de medalha), inicial, nome, descrição, estrelas e "nota · N avaliações". Botão "Ver o top 10 completo" / "Mostrar só o top 3" (`aria-expanded`).
5. **Modo "Procurar carona"**: título "Caronas oferecidas" e uma linha por carona com inicial, nome, "{quando} · {vagas}", nota/posição no ranking e botão "Pedir vaga" (vira "Pedido enviado"; `aria-pressed`).
6. **Modo "Oferecer carona"** (formulário):
   - "Dia e horário de saída" — campo de texto (`id="quando"`), placeholder "Ex.: sábado, 9h".
   - "Ponto de encontro" — campo de texto (`id="ponto"`), placeholder "Ex.: em frente à portaria".
   - "Vagas no carro" — contador com botões "−" (`aria-label="Menos uma vaga"`) e "+" (`aria-label="Mais uma vaga"`).
   - Botão "Publicar carona" (vira "Carona publicada!").

## Comportamento (script `Component`)
- **Estado inicial**: `{ mode: 'find', back: false, asked: {}, seats: 3, published: false }` — modo "Procurar carona", trajeto Núcleo de Carajás → Parauapebas, nenhum pedido, 3 vagas.
- **Trajeto**: origem "Núcleo de Carajás" e destino "Parauapebas"; o botão de inverter troca os dois. A lista de caronas **não** muda com o trajeto.
- **Caronas de exemplo** (todas aparecem sempre, sem filtro):

  | Nome | Quando | Vagas | Nota |
  | --- | --- | --- | --- |
  | Ana Júlia Santos | Hoje, 7h30 | 3 vagas | ★ 4,9 · 1º no ranking |
  | Roberto Alves | Hoje, 9h | 4 vagas | ★ 4,7 · 4º no ranking |
  | Pedro Lima | Hoje, 13h | 1 vaga | ★ 4,8 · 2º no ranking |
  | Fernanda Dias | Hoje, 17h · volta às 18h | 2 vagas | ★ 4,7 · 5º no ranking |
  | Juliana Costa | Amanhã, 8h | 2 vagas | ★ 4,8 · 3º no ranking |
  | Marcos Pereira | Amanhã, 12h | 3 vagas | ★ 4,6 · 6º no ranking |
  | Carla Mendes | Sábado, 8h · feira de Parauapebas | 2 vagas | ★ 4,5 · 7º no ranking |
  | Thiago Rocha | Sábado, 14h | 3 vagas | ★ 4,4 · 8º no ranking |
  | Lívia Martins | Domingo, 9h | 1 vaga | Nova no Meu Carajás Super App |
  | Gustavo Pires | Segunda, 6h45 · horário de trabalho | 2 vagas | ★ 3,9 · 10º no ranking |

- **"Pedir vaga"**: alterna o pedido daquela carona (`asked[id]`). Tocar de novo em "Pedido enviado" desfaz o pedido. Não há confirmação nem envio real.
- **Ranking** (`RK`, aba única "Motoristas"): Ana Júlia Santos (210 caronas para Parauapebas, 4,9 · 128 avaliações), Pedro Lima (164 caronas · sai cedo, 4,8 · 96), Juliana Costa (120 caronas · carro com ar, 4,8 · 74), Roberto Alves (142 caronas · 4 vagas, 4,7 · 88), Fernanda Dias (95 caronas · volta às 18h, 4,7 · 61), Marcos Pereira (80 caronas, 4,6 · 55), Carla Mendes (66 caronas, 4,5 · 43), Thiago Rocha (58 caronas, 4,4 · 39), Beatriz Nunes (40 caronas, 4,2 · 27), Gustavo Pires (31 caronas, 3,9 · 18). Começa com 3 linhas; o botão alterna entre 3 e 10. O script calcula `rkTabs`, mas o markup não usa esse valor.
- **"Oferecer carona"**: os campos "Dia e horário de saída" e "Ponto de encontro" não estão ligados ao estado e não têm validação. O contador de vagas vai de 1 a 6 e, ao mudar, volta o botão para "Publicar carona". "Publicar carona" só muda o rótulo para "Carona publicada!"; a carona não entra na lista.

## Navegação
| Elemento | Leva para |
| --- | --- |
| Botão voltar do cabeçalho | `Main.dc.html` |

Telas que apontam para esta: `Main.dc.html` (atalho "Carona · Para Parauapebas").

## Dados mostrados → registros do sistema
| Dado na tela | Registro da V1 | Observação |
| --- | --- | --- |
| Nome do motorista | Pessoa (nome) | Só o nome tem correspondência |
| Carona oferecida (origem, destino, dia e horário, ponto de encontro, vagas) | **Sem registro** | |
| Pedido de vaga | **Sem registro** | |
| Nota, número de avaliações, posição no ranking, total de caronas do motorista | **Sem registro** | |
| Descrições do motorista ("sai cedo", "carro com ar") | **Sem registro** | |
| Marca "Nova no Meu Carajás Super App" | **Sem registro** | Os requisitos não definem quando um motorista é "novo" |

## Regras dos documentos que se aplicam
- "Conecta Cidade: requisitos da versão 1", "Objetivo e escopo": "Carona (moradores e visitantes)" é Fase 2.
- Requisitos, "Fase 2 e perguntas em aberto": a Fase 2 inclui "carona para moradores e visitantes" e "depende de equipes e dados de fora do grupo".
- Requisitos, "Perfis e permissões": perfis e o que cada um pode fazer na V1 (Carona não aparece em nenhum).
- Requisitos, "Dados que o sistema guarda": os 8 registros (nenhum de carona).

## Divergências entre protótipo e documentos
1. **Ranking e avaliações de motoristas**: nenhum documento-fonte fala em notas, avaliações, ranking ou contagem de caronas.
2. **Carona para o jovem**: `JovemInicio.dc.html` mostra um card "Carona · Só com liberação do responsável" com botão de pedido. Os requisitos não incluem Carona entre as áreas do jovem, e o registro Permissão do jovem só tem Eventos, Oportunidades e Desapego.
3. **Formulário de oferta sem destino nem confirmação**: a oferta usa o trajeto do card de cima; não há campo de destino, de observação ou de regra de publicação. Os documentos não definem esse fluxo (nem se a oferta passa por aprovação).
4. **Lista não segue o trajeto**: inverter ida e volta não muda as caronas mostradas (limitação do protótipo; os documentos não descrevem o comportamento).
5. **Dados sem registro na V1**: carona, pedido de vaga, avaliações e ranking (ver tabela acima).

## Notas para implementação
- Tela inteira de Fase 2; na V1, o atalho "Carona" de `Main.dc.html` aponta para uma área fora do escopo (decisão a registrar na ficha do Início).
- Nomes, horários, notas e ranking são dados de exemplo fixos no script.
- Os campos do formulário de oferta não têm `name`, estado nem validação no protótipo; o comportamento real (validação, onde a carona aparece) não está definido nos documentos.
- A tela não mostra telefone dos motoristas nem forma de contato; os documentos não dizem como o pedido de vaga chega ao motorista.
