# Minha família (sem board no canvas) — `GestorMinhaFamilia.dc.html`

| Campo | Valor |
| --- | --- |
| App | Conecta Cidade (morador) |
| Página do canvas | Nenhuma. O arquivo existe em `design/prototipo/` (e no `design/prototipo.sha256`), mas não tem entrada em `boards` nem em `order` do `canvas.json`. O nome vem do `<title>` do arquivo: "Conecta Cidade – Minha família". |
| Nome na lista "Telas da versão 1" dos requisitos | Não está na lista da V1 (o conteúdo se sobrepõe em parte a "Minha casa") |
| Versão | Não definida nos documentos. Arquivo fora do canvas; mistura conteúdo de "Minha casa" (V1) com pedidos de Carona e Trilha e o item Energia na barra (Fase 2). |
| Perfil que vê | Gestor da casa (pelo texto da tela, que se dirige a quem libera os pedidos do jovem; o arquivo não diz o perfil) |
| Protótipo | [`design/prototipo/GestorMinhaFamilia.dc.html`](../../../design/prototipo/GestorMinhaFamilia.dc.html) |
| Tamanho | 390×844 (do markup e de `$preview` em `data-props`; não há tamanho no `canvas.json`) |

## Para que serve
Pelo próprio subtítulo, mostra "O que os jovens da casa pedem e fazem no app": pedidos de liberação, recados e atividade de um jovem da casa. Nenhum documento-fonte descreve esta tela. É o lado do gestor da tela `JovemFamilia.dc.html` (board "Família · jovem"): os três pedidos de exemplo são os mesmos nas duas.

## Quem aponta para este arquivo
- Nenhum outro arquivo do protótipo tem link para `GestorMinhaFamilia.dc.html`. O único `href` para ele está no próprio arquivo (item "Minha família" da barra, com `aria-current="page"`).
- `Main.dc.html` tem barra de 5 itens, sem "Minha família"; o item "Minha casa" leva a `GestorFamilia.dc.html`.
- A chave `conecta-cidade:familia:CKS-4821` do `localStorage`, que esta tela lê e grava, não aparece em nenhum outro arquivo. `JovemFamilia.dc.html` guarda os pedidos só no próprio estado, sem `localStorage`.
- Conclusão: a tela está órfã — não dá para chegar a ela pelo canvas nem pela navegação das outras telas.

## Conteúdo da tela (de cima para baixo)
1. **Cabeçalho** (fixo, sem botão de voltar): "Minha família" e "O que os jovens da casa pedem e fazem no app".
2. A partir daqui o conteúdo rola.
3. **Card do jovem**: avatar "D", "Davi Ribeiro", "15 anos · filho · perfil jovem" e etiqueta de situação ("1 pedido esperando", "N pedidos esperando" ou "Tudo respondido").
4. **"Pedidos do Davi"**: um card por pedido, do mais novo para o mais antigo. Cada card mostra "<tipo> · <data>" (em maiúsculas), o que foi pedido, a mensagem entre aspas (se houver) e a etiqueta de situação ("Esperando você", "Liberado" ou "Não liberado"). O pedido que espera resposta tem borda amarela e os botões "Não liberar" e "Liberar".
5. **"Recados do Davi"**: balões de mensagem com o texto e a hora ("· novo" quando ainda não lido). Sem recados: "Nenhum recado ainda."
6. **"O que o Davi está fazendo"**: lista de atividades com ponto laranja, texto e data (no máximo 8, da mais nova para a mais antiga).
7. Botão de contorno "Permissões e moradores em Minha casa" → `GestorFamilia.dc.html`.
8. **Barra de navegação inferior** (6 itens): "Início", "Eventos", "Desapego", "Energia", "Minha família" (ativo) e "Minha casa".

## Comportamento (script `Component`)
- **Estado inicial**: `{ fam: null }`. Na montagem (`componentDidMount`), carrega os dados com `famLoad()`.
- **Dados de exemplo (`famSeed`)**:
  - Pedidos:
    | id | Tipo | O quê | Mensagem | Data | Situação |
    | --- | --- | --- | --- | --- | --- |
    | r1 | Evento | Olimpíadas Entre Fases | — | 18/10 | Liberado |
    | r2 | Carona | Carona para Parauapebas | "É para ir ao cursinho no sábado" | 19/10 | Esperando |
    | r3 | Trilha | Trilha Lagoa da Mata | — | 12/10 | Não liberado |
  - Recado: "Pai, chego mais tarde hoje, vou ficar no ensaio do Comitê." · "Ontem, 17h40" (já lido).
  - Atividades: "Confirmou presença nas Olimpíadas Entre Fases" (18/10) e "Votou em Cinema para o próximo evento do Comitê" (17/10).
- **Persistência**: `famLoad()` lê a chave `conecta-cidade:familia:CKS-4821` do `localStorage` (com `try/catch`); sem dado salvo, usa o estado ou o `famSeed()`. `famSave()` grava na mesma chave e atualiza o estado.
- **Sincronização**: escuta o evento `storage` e, a cada 1,5 s (`setInterval`), relê a chave e atualiza a tela se algo mudou. Para no `componentWillUnmount`.
- **"Liberar" / "Não liberar"**: muda a situação do pedido para "Liberado" ou "Não liberado" e acrescenta uma atividade "O pai liberou: <o quê>" ou "O pai não liberou: <o quê>", com a hora atual ("Hoje, HHhMM"). Não muda nenhuma permissão.
- **Etiquetas de situação**: "Liberado" em verde; "Não liberado" em vermelho; "Esperando" aparece como "Esperando você", em amarelo.
- **Recados novos**: quando há recado não lido, depois de 4 s (`componentDidUpdate` + `setTimeout`) todos são marcados como lidos e o "· novo" some.

## Navegação
| Elemento | Leva para |
| --- | --- |
| "Permissões e moradores em Minha casa" | `GestorFamilia.dc.html` |
| Barra: "Início" | `Main.dc.html` |
| Barra: "Eventos" | `Eventos.dc.html` |
| Barra: "Desapego" | `Desapego.dc.html` |
| Barra: "Energia" | `Energia.dc.html` (Fase 2) |
| Barra: "Minha família" | `GestorMinhaFamilia.dc.html` (esta tela) |
| Barra: "Minha casa" | `GestorFamilia.dc.html` |

## Comparação com `GestorFamilia.dc.html` (Minha casa · gestor)
| Aspecto | `GestorFamilia` (Minha casa) | `GestorMinhaFamilia` (Minha família) |
| --- | --- | --- |
| No canvas | Board "Minha casa · gestor", página `morador` | Sem board |
| Quem chega | `Main` (barra) e esta tela | Ninguém |
| Cabeçalho | "Minha casa", com botão de voltar | "Minha família", sem botão de voltar |
| Barra inferior | Não tem | 6 itens, com "Minha família" e "Minha casa" |
| Código da família | Mostra "CKS-4821" | Não mostra (só aparece na chave do `localStorage`) |
| Moradores | Lista de jovens e adultos, botões para incluir | Só o card do Davi |
| Pedidos de liberação | Um pedido fixo (Carona), botões "Agora não" / "Liberar" | Lista de pedidos com histórico (Evento, Carona, Trilha), botões "Não liberar" / "Liberar" |
| Efeito de liberar | Liga a permissão "Carona" | Só muda a situação do pedido e grava atividade |
| Permissões por área | Interruptores de 5 áreas | Não tem; manda para "Minha casa" |
| Recados e atividade do jovem | Não tem | Tem |
| Persistência | Só estado da tela | `localStorage` com sincronização |

As duas telas tratam pedidos de liberação, mas de modo diferente: em `GestorFamilia` o pedido é por área e libera a área; aqui o pedido é por item (um evento, uma carona, uma trilha) e não mexe em permissão.

## Dados mostrados → registros do sistema
| Dado na tela | Registro |
| --- | --- |
| Nome, idade, perfil do jovem ("perfil jovem") | Pessoa (nome, idade, perfil) |
| Parentesco "filho" | **Sem registro**: Pessoa não tem campo de parentesco |
| Código na chave `CKS-4821` | Casa (código da família) |
| Pedidos (tipo, item, mensagem, data, situação) | **Sem registro**: não há pedido de liberação entre os 8 |
| Recados do jovem | **Sem registro** |
| Atividade do jovem (confirmou evento, votou) | **Sem registro** como histórico. "Confirmou presença" corresponde a Evento (confirmações); a votação não tem registro |

## Regras dos documentos que se aplicam
- Requisitos da versão 1, "Telas da versão 1": Minha casa — "Código da família, moradores, pedidos de liberação e permissões dos jovens"; "Só gestores veem esta tela".
- Requisitos, "Telas da versão 1": Início · jovem — "O botão Pedir liberação envia o pedido para o gestor".
- Requisitos, "Perfis e permissões": o gestor "liga e desliga o que cada jovem pode usar".
- Requisitos, "Dados que o sistema guarda": Permissão do jovem (Pessoa, área — Eventos, Oportunidades, Desapego —, ligada ou desligada); Pessoa vista pela "própria pessoa, os gestores da casa e a administração".
- Requisitos, "Requisitos gerais" (LGPD): o app precisa "proteger dados de menores".

## Divergências entre protótipo e documentos
1. **Tela fora do canvas e da lista da V1**: não tem board, não está em `order` e nenhum arquivo aponta para ela. A lista da V1 tem 13 telas do morador e não inclui "Minha família".
2. **Barra de navegação diferente**: 6 itens, com "Minha família" além de "Minha casa"; `Main.dc.html` tem 5 itens, sem "Minha família".
3. **Pedidos por item, não por área**: os pedidos são de um evento, uma carona ou uma trilha específicos. Os requisitos e o registro Permissão do jovem tratam de áreas (Eventos, Oportunidades, Desapego) ligadas ou desligadas.
4. **Itens de Fase 2**: pedidos de "Carona" e "Trilha" e o item "Energia" na barra.
5. **Recados e acompanhamento da atividade do jovem**: "Recados do Davi" e "O que o Davi está fazendo" não estão em nenhum documento nem em nenhum registro de dados.
6. **Votação do próximo evento** ("Votou em Cinema…"): os requisitos citam a "votação do próximo evento" em Início · jovem, mas não há registro de dados para ela.
7. **Sincronização sem par**: a tela lê e grava `conecta-cidade:familia:CKS-4821`, mas nenhuma outra tela escreve nessa chave; `JovemFamilia.dc.html` não usa `localStorage`.
8. **Papéis dos exemplos**: o texto da atividade é fixo, "O pai liberou" / "O pai não liberou", e o recado começa com "Pai,". Em `GestorFamilia.dc.html` o gestor é "Lucca Ribeiro" e a outra gestora é "Marina Ribeiro"; em `JovemFamilia.dc.html` o mesmo pedido de Carona aparece como "Esperando a mãe", Marina é "Mãe · gestora da casa", Paulo é "Pai · adulto da casa" e Lucca é jovem.

## Notas para implementação
- Nenhum documento diz se esta tela entra no produto. Ela fica registrada como existente no protótipo e sem decisão.
- Se o conteúdo for aproveitado, os pedidos de liberação já fazem parte de "Minha casa" nos requisitos; recados e atividade do jovem não têm regra nem registro nos documentos.
- O `localStorage` e o intervalo de 1,5 s são recursos do protótipo para simular dados compartilhados; os requisitos guardam os dados "no mesmo banco, com acesso por perfil".
- O texto "O pai liberou" é fixo no script e não depende de quem é o gestor.
