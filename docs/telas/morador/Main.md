# Início · gestor da casa — `Main.dc.html`

| Campo | Valor |
| --- | --- |
| App | Conecta Cidade (morador) |
| Página do canvas | Primeira página (`morador`, "Conecta Cidade"). O board não tem a chave `page` no `canvas.json`, então fica na primeira página da lista `pages`. |
| Nome na lista "Telas da versão 1" dos requisitos | Início · gestor (e também abriga o conteúdo da tela "Coleta seletiva", que não tem arquivo próprio no app do morador; ver abaixo) |
| Versão | V1 com partes ocultas até a Fase 2 |
| Perfil que vê | Gestor da casa. Pelo protótipo, também o adulto da casa: os dois finais de `CadastroGestor.dc.html` ("Entrar no app") levam a esta tela, e o `Login.dc.html` manda a aba gestor para cá (`enterHref: gest ? 'Main.dc.html' : 'JovemInicio.dc.html'`). |
| Protótipo | [`design/prototipo/Main.dc.html`](../../../design/prototipo/Main.dc.html) |
| Tamanho | 390×844 |

## Para que serve
É a tela inicial do gestor: "Saudação, áreas do app, coleta do dia, último aviso e próximos eventos" (requisitos, tabela "Telas da versão 1"). A tela rola. No protótipo ela também é o lugar da coleta seletiva do morador: o aviso "Coleta seletiva: lixo até as 10h" de `Avisos.dc.html` diz "cronograma no início do app".

## Conteúdo da tela (de cima para baixo)
A área de conteúdo rola (`overflow-y: auto`, de cima até 80 px do fim); a barra de navegação fica fixa embaixo.

1. **Cabeçalho**: logo (marcador de mapa nas cores `brand` e `accent`) + "Conecta Cidade". À direita, botão redondo de sino (`aria-label="Notificações"`) com ponto vermelho (#B4471C), que leva a Avisos.
2. **Saudação**: "Olá, Lucca!" e, abaixo, "O que está rolando no Núcleo hoje".
3. **Card de energia** (fundo verde `brand`, link para Energia): ícone de raio, rótulo "Energia", título "Luz normal na sua rua", linha "Próximo desligamento programado: quinta, 12/11", seta à direita. **Fase 2 — fica oculto na V1.**
4. **Título "O que você procura?"** e grade de 2 colunas com 6 atalhos:
   - "Desapego" · "Vender, comprar, doar" → Desapego
   - "Eventos" · "Agenda do Núcleo" → Eventos
   - "Guia do morador" · "Serviços e contatos" → Guia
   - "Avisos" · "Oficiais do Núcleo" → Avisos
   - "Trilhas" · "Na floresta" → Trilhas (Fase 2)
   - "Carona" · "Para Parauapebas" → Carona (Fase 2)
5. **Card "Coleta seletiva"** (é a "coleta do dia" e o conteúdo da tela "Coleta seletiva" dos requisitos):
   - Ícone de lixeira, título "Coleta seletiva", subtítulo "Deixe o lixo do lado de fora até as 10h" e etiqueta "Até 10h".
   - Fileira de 5 botões de dia: "SEG", "TER", "QUA", "QUI", "SEX". Cada botão mostra bolinhas com a cor de cada coleta do dia e, no dia atual, a palavra "HOJE".
   - Título do dia escolhido (ex.: "Terça (hoje): 4 coletas · até 10h").
   - Lista das coletas do dia: etiqueta colorida com o nome do tipo e, ao lado, a dica do tipo (quando houver).
   - Botão "Ver dicas de descarte" (vira "Esconder dicas"), que abre a lista:
     - "• Restos de alimentos em sacos bem amarrados."
     - "• Vidro em recipiente resistente, para a segurança dos coletores."
     - "• Óleo de fritura em garrafas PET."
     - "• Entulho misto em sacos fortes, com cerca de 20 kg."
     - "• Pilhas, baterias e lâmpadas fluorescentes nos coletores dos supermercados."
     - "• Big Bag: segunda, terça, quinta e sexta."
   - Rodapé: "Cronograma oficial da coleta seletiva do Núcleo (PRO 022144)."
6. **"Próximos eventos"** com link "Ver agenda" (→ Eventos). Cinco cards; cada um tem caixa de data (mês e dia), nome e linha de informação (o texto é link para Eventos) e botão "Eu vou".
7. Botão de contorno "Ver todos os eventos" → Eventos.
8. **"Serviços da casa"**, grade de 2 cards:
   - "Energia" · "Luz normal na sua rua" → Energia (Fase 2).
   - "Água" com etiqueta "Aviso" · "Sem água quinta, 5/11, das 8h às 14h · Ruas Japurá, Jari e Juruá" → Avisos.
9. **Barra de navegação inferior** (`aria-label="Navegação principal"`, 5 itens): "Início" (ativo, `aria-current="page"`), "Eventos", "Desapego", "Energia", "Minha casa".

## Comportamento (script `Component`)
- **Estado inicial**: `{ going: {}, colDay: null, colTips: false }`.
- **Propriedades editáveis do protótipo** (`data-props`): `brand` (padrão #1E5B40), `accent` (padrão #E07A3F) e `accentDark` (padrão #B4471C, cor do botão "Eu vou"). Servem para testar cores no editor do protótipo.
- **Coleta (`coletaVals`)**:
  - Tipos de coleta (nome · cor · dica): "Restos de alimentação" (#8B4A2B, "Em sacos bem amarrados"); "Lixo comum" (#5A5A63); "Plástico" (#9B1B30); "Vidro" (#4E8A26, "Em recipiente resistente"); "Componentes elétricos" (#C98A12); "Papel" (#2B2FA8); "Entulho misto" (#111111, "Sacos fortes, cerca de 20 kg"); "Resto de folhas" (#7DBB4A); "Metálico" (#E3C800).
  - Cronograma por dia:
    | Dia | Coletas |
    | --- | --- |
    | Segunda | Restos de alimentação |
    | Terça | Lixo comum, Plástico, Vidro, Componentes elétricos |
    | Quarta | Restos de alimentação, Papel, Entulho misto, Resto de folhas |
    | Quinta | Lixo comum, Plástico, Metálico |
    | Sexta | Restos de alimentação, Papel |
  - O dia de hoje vem de `new Date().getDay()`. Se hoje for de segunda a sexta, ele vem selecionado e destacado; no sábado e no domingo a tela abre na segunda, e nenhum botão mostra "HOJE".
  - Tocar num dia (`pick`) muda `colDay`. O dia escolhido fica com fundo escuro; o dia de hoje, quando não está escolhido, ganha borda escura.
  - O título é "<Dia>" + " (hoje)" quando for o dia atual + ": N coleta(s) · até 10h".
  - "Ver dicas de descarte" / "Esconder dicas" liga e desliga `colTips`.
  - `coletaVals` também devolve `colEditLabel` ("Editar cronograma" / "Cronograma salvo ✓") e `colEdit`, mas o markup desta tela não usa esses valores.
- **Eventos (`renderVals`)**: dados de exemplo:
  | id | Nome | Data | Informação |
  | --- | --- | --- | --- |
  | cine | CineFases | NOV 7 | Comitê Jovem · Ingresso: 1 kg de alimento |
  | pizza | Noite de Pizza | NOV 13 | Comitê Jovem · Salão de festas |
  | olimp | Olimpíadas Entre Fases | NOV 21 | Comitê Jovem · Ingresso solidário |
  | boas | Encontro de boas-vindas | NOV 28 | Administração do Núcleo · Oficial |
  | game | Torneio de videogame | DEZ 5 | Grêmio estudantil · Biblioteca |
  - O botão "Eu vou" alterna `going[id]`: confirmado, mostra "Confirmado" (fundo verde-claro); senão, "Eu vou" (cor `accentDark`). O estado vale só nesta tela; não é compartilhado com `Eventos.dc.html`.
- Os demais blocos (energia, atalhos, serviços da casa) são estáticos.

## Navegação
| Elemento | Leva para |
| --- | --- |
| Sino "Notificações" | `Avisos.dc.html` |
| Card de energia | `Energia.dc.html` (Fase 2) |
| Atalho "Desapego" | `Desapego.dc.html` |
| Atalho "Eventos" | `Eventos.dc.html` |
| Atalho "Guia do morador" | `Guia.dc.html` |
| Atalho "Avisos" | `Avisos.dc.html` |
| Atalho "Trilhas" | `Trilhas.dc.html` (Fase 2) |
| Atalho "Carona" | `Carona.dc.html` (Fase 2) |
| "Ver agenda" | `Eventos.dc.html` |
| Nome/informação de cada evento | `Eventos.dc.html` |
| "Ver todos os eventos" | `Eventos.dc.html` |
| Card "Energia" (Serviços da casa) | `Energia.dc.html` (Fase 2) |
| Card "Água" (Serviços da casa) | `Avisos.dc.html` |
| Barra: "Início" | `Main.dc.html` (esta tela) |
| Barra: "Eventos" | `Eventos.dc.html` |
| Barra: "Desapego" | `Desapego.dc.html` |
| Barra: "Energia" | `Energia.dc.html` (Fase 2) |
| Barra: "Minha casa" | `GestorFamilia.dc.html` |

Chegam a esta tela: `Login.dc.html` (aba gestor), `CadastroGestor.dc.html` ("Entrar no app") e o botão de voltar de `Avisos`, `Desapego`, `Eventos`, `Guia`, `GestorFamilia`, `Energia`, `Trilhas`, `Carona`, além do item "Início" de `GestorMinhaFamilia.dc.html`.

## Dados mostrados → registros do sistema
| Dado na tela | Registro |
| --- | --- |
| Nome na saudação ("Lucca") | Pessoa (nome ou apelido) |
| Próximos eventos: nome, data, organizador, local, ingresso solidário | Evento (nome, organizador, data e hora, local, ingresso solidário) |
| Estado "Eu vou" / "Confirmado" | Evento (confirmações) |
| Card "Água" com etiqueta "Aviso" | Aviso (o quê, quando, onde) |
| Ponto vermelho no sino | Entrega do aviso (visto) — o protótipo não diz o que acende o ponto |
| Card e cartão de energia | Sem registro (energia é Fase 2) |
| Cronograma da coleta (dias, tipos, cores, dicas, horário 10h) | **Sem registro correspondente** entre os 8 |

## Regras dos documentos que se aplicam
- Requisitos da versão 1, "Telas da versão 1": Início · gestor — "A tela rola; o card de energia fica oculto até a fase 2".
- Requisitos, "Telas da versão 1": Coleta seletiva — "Dias de cada coleta e o que vai em cada uma"; "Destaca a coleta do dia".
- Requisitos, "Objetivo e escopo": coleta seletiva na V1 é "só a tabela de dias"; "Rota do caminhão no mapa" fica para a Fase 2. Energia, trilhas e carona são Fase 2.
- Requisitos, "Fase 2 e perguntas em aberto": "Quais os dias reais de cada coleta seletiva no Núcleo?" ainda é pergunta em aberto.
- Requisitos, "Perfis e permissões": a tela "Minha casa" é só de gestores ("Telas da versão 1": "Só gestores veem esta tela").
- Requisitos, "Requisitos gerais": botões de pelo menos 44 px; a tela inicial abre em até 3 segundos numa conexão 4G fraca.
- Eventos no Conecta Cidade, "Funcionalidades": botão "Eu vou".

## Divergências entre protótipo e documentos
1. **Itens de Fase 2 visíveis**: o card grande de energia, o card "Energia" em "Serviços da casa", o item "Energia" da barra inferior e os atalhos "Trilhas" e "Carona". Os requisitos só mandam ocultar o card de energia, mas energia, trilhas e carona são todos Fase 2 ("Objetivo e escopo").
2. **"Último aviso" não existe como bloco**: os requisitos pedem "último aviso", mas a tela não tem um bloco com esse nome. O mais próximo é o card "Água" com a etiqueta "Aviso" em "Serviços da casa", fixo no aviso de água (Importante). Em `Avisos.dc.html` o aviso mais recente é outro ("Falta de energia na Rua Juruá", Urgente, "Agora").
3. **Coleta seletiva sem tela própria**: os requisitos listam "Coleta seletiva" como uma das 13 telas do morador, com nome que "bate com o do protótipo". No protótipo do morador não existe arquivo nem board com esse nome; o conteúdo está no card "Coleta seletiva" desta tela. O único board chamado "Coleta seletiva" é `AdminColeta.dc.html`, na página `organizador`, e mostra a rota do caminhão (Fase 2).
4. **Cronograma apresentado como oficial**: o rodapé diz "Cronograma oficial da coleta seletiva do Núcleo (PRO 022144)", mas os requisitos ainda perguntam "Quais os dias reais de cada coleta seletiva no Núcleo?".
5. **Coleta sem registro de dados**: dias, tipos e dicas da coleta não estão entre os 8 registros de "Dados que o sistema guarda".
6. **"Minha casa" na barra para qualquer perfil que chega aqui**: o adulto que não é gestor também cai nesta tela (via `CadastroGestor`), e a barra mostra "Minha casa" sem variação, mas os requisitos dizem que só gestores veem essa tela. O protótipo não mostra uma versão do Início para adulto que não é gestor.
7. **Coleta só no Início do gestor**: `JovemInicio.dc.html` não tem bloco de coleta; o protótipo não mostra a coleta para o jovem. Os requisitos não dizem quais perfis veem a tela "Coleta seletiva".

## Notas para implementação
- O card de energia (item 3 do conteúdo) fica oculto na V1, por regra explícita dos requisitos. Os outros pontos de entrada de energia, trilhas e carona estão na divergência 1 e precisam de decisão.
- O card "Coleta seletiva" é a única representação da tela "Coleta seletiva" do morador no protótipo. O cronograma, as cores e as dicas são dados de exemplo enquanto os dias reais não forem confirmados.
- O destaque "HOJE" segue o dia da semana do aparelho; no fim de semana, a tela abre na segunda sem destaque.
- `brand`, `accent` e `accentDark` são propriedades do editor do protótipo; `colEditLabel`/`colEdit` não aparecem no markup desta tela.
- A confirmação "Eu vou" desta tela e a de `Eventos.dc.html` são estados separados no protótipo; os requisitos guardam as confirmações no registro Evento.
