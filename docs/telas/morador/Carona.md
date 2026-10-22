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
4. **Card de CO₂** (fundo verde-claro, ícone de folha): "Você deixou de emitir", "32 kg de CO₂" em destaque e "Dividindo o carro com os vizinhos. Bom para o meio ambiente." O número é de exemplo (`co2`). Acrescentado em 22/10/2026 (A-18).
5. **Card de avaliações**: título "Avaliações dos motoristas", ícone de estrela, subtítulo "Notas que os vizinhos deram a quem oferece carona". Os motoristas aparecem em ordem alfabética, sem posição nem medalha. Cada linha tem inicial, nome, descrição, estrelas e "nota · N avaliações". Botão "Ver todas as avaliações" / "Mostrar menos" (`aria-expanded`). Era o "Ranking · Top 10 caronas" até 22/10/2026 (A-18).
6. **Modo "Procurar carona"**: título "Caronas oferecidas" e uma linha por carona com inicial, nome, "{quando} · {vagas}", a nota (sem posição) e o botão "Pedir vaga" (vira "Pedido enviado"; `aria-pressed`).
7. **Modo "Oferecer carona"** (formulário):
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
  | Ana Júlia Santos | Hoje, 7h30 | 3 vagas | ★ 2,4 |
  | Roberto Alves | Hoje, 9h | 4 vagas | ★ 4,5 |
  | Pedro Lima | Hoje, 13h | 1 vaga | ★ 3,1 |
  | Fernanda Dias | Hoje, 17h · volta às 18h | 2 vagas | ★ 5,0 |
  | Juliana Costa | Amanhã, 8h | 2 vagas | ★ 3,6 |
  | Marcos Pereira | Amanhã, 12h | 3 vagas | ★ 4,9 |
  | Carla Mendes | Sábado, 8h · feira de Parauapebas | 2 vagas | ★ 2,6 |
  | Thiago Rocha | Sábado, 14h | 3 vagas | ★ 3,9 |
  | Lívia Martins | Domingo, 9h | 1 vaga | Nova no Meu Carajás Super App |
  | Gustavo Pires | Segunda, 6h45 · horário de trabalho | 2 vagas | ★ 4,3 |

- **"Pedir vaga"**: alterna o pedido daquela carona (`asked[id]`). Tocar de novo em "Pedido enviado" desfaz o pedido. Não há confirmação nem envio real.
- **Avaliações** (`RK`, aba única "Motoristas"), em ordem alfabética: Ana Júlia Santos (210 caronas para Parauapebas, 2,4 · 128 avaliações), Beatriz Nunes (40 caronas, 4,8 · 27), Carla Mendes (66 caronas, 2,6 · 43), Fernanda Dias (95 caronas · volta às 18h, 5,0 · 61), Gustavo Pires (31 caronas, 4,3 · 18), Juliana Costa (120 caronas · carro com ar, 3,6 · 74), Marcos Pereira (80 caronas, 4,9 · 55), Pedro Lima (164 caronas · sai cedo, 3,1 · 96), Roberto Alves (142 caronas · 4 vagas, 4,5 · 88), Thiago Rocha (58 caronas, 3,9 · 39). As notas são de exemplo e foram variadas em 22/10/2026 (A-18), as mesmas da lista de caronas. Começa com 3 linhas; o botão alterna entre 3 e 10. O script calcula `rkTabs`, mas o markup não usa esse valor.
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
| Nota, número de avaliações, total de caronas do motorista | **Sem registro** | |
| CO₂ que a pessoa deixou de emitir | **Sem registro** | A conta ainda não está definida (ver perguntas em aberto) |
| Descrições do motorista ("sai cedo", "carro com ar") | **Sem registro** | |
| Marca "Nova no Meu Carajás Super App" | **Sem registro** | Os requisitos não definem quando um motorista é "novo" |

## Regras dos documentos que se aplicam
- "Conecta Cidade: requisitos da versão 1", "Objetivo e escopo": "Carona (moradores e visitantes)" é Fase 2.
- Requisitos, "Fase 2 e perguntas em aberto": a Fase 2 inclui "carona para moradores e visitantes" e "depende de equipes e dados de fora do grupo".
- Requisitos, "Perfis e permissões": perfis e o que cada um pode fazer na V1 (Carona não aparece em nenhum).
- Requisitos, "Dados que o sistema guarda": os 8 registros (nenhum de carona).

## Divergências entre protótipo e documentos
1. **Avaliações de motoristas e CO₂**: nenhum documento-fonte fala em notas, avaliações, contagem de caronas ou CO₂. Desde 22/10/2026 não há mais ranking (A-18).
2. **Carona para o jovem**: `JovemInicio.dc.html` mostra um card "Carona · Só com liberação do responsável" com botão de pedido. Os requisitos não incluem Carona entre as áreas do jovem, e o registro Permissão do jovem só tem Eventos, Oportunidades e Desapego.
3. **Formulário de oferta sem destino nem confirmação**: a oferta usa o trajeto do card de cima; não há campo de destino, de observação ou de regra de publicação. Os documentos não definem esse fluxo (nem se a oferta passa por aprovação).
4. **Lista não segue o trajeto**: inverter ida e volta não muda as caronas mostradas (limitação do protótipo; os documentos não descrevem o comportamento).
5. **Dados sem registro na V1**: carona, pedido de vaga, avaliações e CO₂ (ver tabela acima).

## Notas para implementação
- Tela inteira de Fase 2; na V1, o atalho "Carona" de `Main.dc.html` aponta para uma área fora do escopo (decisão a registrar na ficha do Início).
- Nomes, horários, notas e o CO₂ são dados de exemplo fixos no script.
- Os campos do formulário de oferta não têm `name`, estado nem validação no protótipo; o comportamento real (validação, onde a carona aparece) não está definido nos documentos.
- A tela não mostra telefone dos motoristas nem forma de contato; os documentos não dizem como o pedido de vaga chega ao motorista.

## Sem avaliação de motorista, 22/10/2026 (decisão A-24)

O card "Avaliações dos motoristas" e a nota de cada carona saíram da tela. A ordem agora é: seletor de modo, trajeto, card do CO₂ e, no modo "Procurar carona", as caronas oferecidas (inicial, nome, "{quando} · {vagas}" e "Pedir vaga"). O que está acima sobre avaliações vale só até essa data.
