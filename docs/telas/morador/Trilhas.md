# Trilhas · gestor — `Trilhas.dc.html`

| Campo | Valor |
| --- | --- |
| App | Meu Carajás Super App (morador) |
| Página do canvas | `morador` (o board não tem a chave `page` no `canvas.json`, então fica na primeira página, "Meu Carajás Super App") |
| Nome na lista "Telas da versão 1" dos requisitos | Não está na lista da V1 |
| Versão | Fase 2 ("Trilhas com agenda" está só na coluna Fase 2 da tabela de escopo dos requisitos) |
| Perfil que vê | Gestor da casa (título do board: "Trilhas · gestor") |
| Protótipo | [`design/prototipo/Trilhas.dc.html`](../../../design/prototipo/Trilhas.dc.html) |
| Tamanho | 390×844 |

## Para que serve
Mostra as trilhas da Floresta Nacional de Carajás, se cada uma precisa de condutor, como chegar, a autorização necessária e as avaliações dos condutores. Nos requisitos, a área aparece só como "Trilhas com agenda" (Fase 2); os outros documentos-fonte citam trilhas apenas como exemplo de evento de moradores ("Eventos no Conecta Cidade", seção "Quem organiza os eventos").

## Conteúdo da tela (de cima para baixo)
1. **Cabeçalho**: botão de voltar (`aria-label="Voltar"`, leva a `Main.dc.html`), título "Trilhas" e subtítulo "Floresta Nacional de Carajás". Não há barra de navegação inferior.
2. **Alerta**: "Nunca faça trilha sozinho" — "Com ou sem guia, vá sempre com outras pessoas. Se você se machucar sozinho, ninguém consegue ajudar."
3. **Card "Precisa de autorização?"**:
   - "Mora no Núcleo: não precisa de autorização para as trilhas sem guia. É só ir de carro até o começo da trilha."
   - "Vem de Parauapebas ou de fora: precisa emitir a autorização de visitação no site do ICMBio Carajás."
   - Link "Abrir o site do ICMBio Carajás" (`https://flonacarajas.com.br`, abre em nova aba).
4. **Link "Procure seu guia aqui"** — "Lista de condutores credenciados" (arquivo no Google Drive, abre em nova aba).
5. **Card de avaliações**: título "Avaliações dos guias", ícone de estrela, subtítulo "Notas que os condutores credenciados receberam". Os guias aparecem em ordem alfabética, sem posição nem medalha. Cada linha tem a inicial do nome, o nome, a especialidade, as estrelas e "nota · N avaliações". Botão "Ver todas as avaliações" / "Mostrar menos" (`aria-expanded`). Mudança de 22/10/2026, decisão A-17.
6. **Chips de filtro**: "Todas", "Sem guia", "Com condutor", "Acessível" (`aria-pressed`).
7. **Lista de trilhas** (um botão por trilha, `aria-label="Ver detalhes da {nome}"`): ícone, nome, etiqueta "Guia obrigatório" ou "Sem guia", etiqueta "Acessível" quando se aplica, e a linha "{distância} · {nível}".
8. **Rodapé**: "Imagens ilustrativas. Informações do ICMBio Carajás e de condutores da região: confirme no site antes de ir."
9. **Detalhe da trilha** (camada por cima da tela, aparece ao tocar numa trilha):
   - Ilustração com o rótulo "Imagem ilustrativa" e botão de voltar (`aria-label="Voltar para as trilhas"`).
   - Nome da trilha.
   - Se precisa de condutor: bloco "Obrigatório ir com condutor" — "Esta trilha só pode ser feita com um condutor credenciado pelo ICMBio. Sem condutor, a entrada não é permitida." — e de novo o link "Procure seu guia aqui".
   - Se não precisa: bloco "Pode ir sem guia" — "A trilha é sinalizada e pode ser feita sem condutor, mas nunca sozinho: vá sempre em grupo."
   - Quatro dados: "Distância", "Nível", "Tipo" e "Para".
   - "Sobre a trilha": descrição, "Como chegar:" e "Autorização:".
   - De novo o alerta "Nunca faça trilha sozinho".
   - "O que levar": "Água, calçado fechado, repelente, protetor solar e celular carregado. Avise alguém sobre o horário de volta." e "Na trilha": "Não saia do caminho sinalizado, não alimente os animais e traga seu lixo de volta."
   - Link de telefone "Emergência em Carajás" · "SECOM 0800-2850-193" (`tel:08002850193`).

## Comportamento (script `Component`)
- **Estado inicial**: `{ f: 'Todas', open: null }` (filtro "Todas", nenhum detalhe aberto). `rkOpen` e `rkTab` não estão no estado inicial (as avaliações começam com 3 linhas).
- **Constante `VIS = false`**: escolhe os textos de morador. Para trilhas sem guia: "Como chegar" = "Vá de carro até o começo da trilha." e "Autorização" = "Morador do Núcleo não precisa. Quem vem de Parauapebas ou de fora precisa emitir no site do ICMBio Carajás.". Para trilhas com condutor: "Como chegar" = "O condutor leva o grupo a partir da portaria da Floresta Nacional de Carajás (PA-275)." e "Autorização" = "O condutor credenciado emite a autorização do grupo.".
- **Trilhas de exemplo** (todas com nível "Fácil"):

  | Trilha | Distância | Tipo | Acessível | Para |
  | --- | --- | --- | --- | --- |
  | Trilha Uxi | 1,55 km ou 4,9 km | Sem guia | Não | Caminhada e bicicleta |
  | Trilha Castanheira | Circuito de Trilhas Carajás | Sem guia | Não | Caminhada |
  | Trilha Quarubarana | Circuito de Trilhas Carajás | Sem guia | Sim | Caminhada · acessível |
  | Trilha Pequiá | Circuito de Trilhas Carajás | Sem guia | Sim | Caminhada · acessível |
  | Trilha Lagoa da Mata | 2,5 km | Com condutor | Não | Caminhada |
  | Trilha Flor de Carajás e caverna | 1 km | Com condutor | Não | Caminhada e caverna |
  | Trilha Mirante Vale do Rio Azul | 1,2 km | Com condutor | Não | Caminhada e mirante |
  | Trilha Peito de Aço | 2 km | Com condutor | Não | Caminhada e cachoeira |

  A Trilha Uxi tem "Como chegar" próprio: "Fica no Núcleo, ao lado da rodoviária." Cada trilha tem uma descrição própria no script (ex.: Uxi, "O destaque é a ponte suspensa no meio da mata").
- **Filtro**: "Todas" mostra tudo; "Sem guia" mostra as que não exigem condutor; "Com condutor" as que exigem; "Acessível" só Quarubarana e Pequiá.
- **Detalhe**: tocar numa trilha grava `open` com o id; o botão de voltar do detalhe zera `open`. Em "Distância", quando o texto não tem "km" (trilhas do Circuito), aparece "Consulte no ICMBio".
- **Avaliações** (`RK`, aba única "Guias"), em ordem alfabética: Antônio Carvalho (Flor de Carajás e caverna, 2,3 · 150 avaliações), Edson Pereira (Lagoa da Mata, 4,1 · 120), Francisco Alves (Cavernas ferríferas, 3,4 · 90), Joana Nascimento (Mirante Vale do Rio Azul, 5,0 · 187), Luana Moraes (Peito de Aço e cachoeira, 3,7 · 133), Mateus Rocha (Peito de Aço, 4,6 · 64), Patrícia Lima (Grupos de escola, 2,8 · 98), Raimundo Souza (Lagoa da Mata · aves, 4,9 · 212), Rosa Silva (Mirante Vale do Rio Azul, 3,2 · 76), Sônia Barros (Observação de aves, 4,4 · 51). As notas são de exemplo e foram variadas em 22/10/2026 (A-17). As estrelas cheias são a nota arredondada. O botão alterna entre 3 e 10 linhas.
- O script calcula `rkTabs` (abas das avaliações), mas o markup não usa esse valor e só existe a aba "Guias".

## Navegação
| Elemento | Leva para |
| --- | --- |
| Botão voltar do cabeçalho | `Main.dc.html` |
| "Abrir o site do ICMBio Carajás" | `https://flonacarajas.com.br` (externo, nova aba) |
| "Procure seu guia aqui" (na lista e no detalhe) | `https://drive.google.com/file/d/1tNRop_3W4fDJzq-ckRKBHGW1cOMyKvZk/view` (externo, nova aba) |
| "Emergência em Carajás · SECOM 0800-2850-193" | `tel:08002850193` |

Telas que apontam para esta: `Main.dc.html` (atalho "Trilhas · Na floresta").

## Dados mostrados → registros do sistema
| Dado na tela | Registro da V1 | Observação |
| --- | --- | --- |
| Trilhas (nome, distância, nível, tipo, acessível, uso, descrição, como chegar, autorização) | **Sem registro** | |
| Condutores das avaliações (nome, especialidade) | **Sem registro** | Não são Pessoa nem Organizador |
| Nota e número de avaliações dos condutores | **Sem registro** | |
| Lista de condutores credenciados (arquivo externo) e site do ICMBio | **Sem registro** | Dados de fora do grupo |
| Agenda de trilhas | **Não aparece na tela** | A área da Fase 2 se chama "Trilhas com agenda" |
| SECOM 0800-2850-193 | Nenhum registro (é texto fixo, igual ao do Guia) | |

## Regras dos documentos que se aplicam
- "Conecta Cidade: requisitos da versão 1", "Objetivo e escopo": "Trilhas com agenda" é Fase 2; critério da V1 é "não depender de dados ou equipes de fora do grupo para funcionar".
- Requisitos, "Fase 2 e perguntas em aberto": a Fase 2 "depende de equipes e dados de fora do grupo" e inclui "trilhas com agenda"; "Todas já estão desenhadas no protótipo".
- Requisitos, "Objetivo e escopo" (área "Guia do morador e SECOM 0800-2850-193") e "Telas da versão 1" (Guia do morador): o número de emergência SECOM 0800-2850-193.
- "Eventos no Conecta Cidade", "Quem organiza os eventos": moradores organizam "Grupos de leitura, trilhas, encontros de vizinhos"; "Eventos para todo mundo": "Caminhadas" para a terceira idade.

## Divergências entre protótipo e documentos
1. **Sem agenda**: os requisitos chamam a área de "Trilhas com agenda", mas a tela não tem datas, horários, inscrição nem nenhuma forma de agenda.
2. **Avaliações de condutores**: nenhum documento-fonte fala em condutores, notas ou avaliações. Desde 22/10/2026 não há mais ranking (A-17).
3. **Regras de acesso às trilhas**: as regras de autorização (morador não precisa nas trilhas sem guia; quem vem de fora emite no site do ICMBio; trilhas com condutor obrigatório) e as recomendações ("O que levar", "Na trilha") não estão nos documentos-fonte. A própria tela diz "confirme no site antes de ir".
4. **Dados de fora do grupo**: a tela depende do site do ICMBio e de uma lista de condutores no Google Drive. Isso confirma o enquadramento como Fase 2 (requisitos: a Fase 2 "depende de equipes e dados de fora do grupo").
5. **Dados sem registro na V1**: trilhas, condutores, avaliações (ver tabela acima).

## Notas para implementação
- Tela inteira de Fase 2; na V1, o atalho "Trilhas" de `Main.dc.html` aponta para uma área fora do escopo (decisão a registrar na ficha do Início).
- "Imagens ilustrativas" e "Imagem ilustrativa": as ilustrações são só do protótipo.
- O conteúdo das trilhas, as avaliações e os links externos estão fixos no script; são dados de exemplo.
- Esta tela, `JovemTrilhas.dc.html` e `TrilhaVisitante.dc.html` têm o mesmo markup e o mesmo script; mudam o destino do voltar, uma etiqueta no cabeçalho, alguns textos e a constante `VIS`.
