# Painel — `AdminInicio.dc.html`

| Campo | Valor |
| --- | --- |
| App | Meu Carajás Organizadores |
| Página do canvas | `organizador` |
| Nome na lista "Telas da versão 1" dos requisitos | Painel |
| Versão | V1 com partes ocultas até a Fase 2 |
| Perfil que vê | Administração do Núcleo (é o perfil mostrado no protótipo: "Olá, Lucca" · "Administração do Núcleo"). Pelos requisitos, também Organizador de eventos e Comitê Jovem, cada um vendo só as áreas do seu grupo |
| Protótipo | [`design/prototipo/AdminInicio.dc.html`](../../../design/prototipo/AdminInicio.dc.html) |
| Tamanho | 390×844 |

## Para que serve
Tela inicial do organizador depois de entrar. Pelos requisitos: "Publicar informação, o que precisa de atenção, agendados, rascunhos e publicados", com "No ar" e "Fora do ar" para tirar ou pôr a publicação no app.

## Conteúdo da tela (de cima para baixo)
O cabeçalho e a barra inferior ficam fixos e o meio da tela rola.

1. **Cabeçalho (verde-escuro)**
   - Ícone do app pequeno e o rótulo "Organizador".
   - Título "Olá, Lucca".
   - Subtítulo "Administração do Núcleo · pode publicar avisos oficiais".
2. **Botão principal** "Publicar informação" (com ícone "+").
3. **Seção "Precisa da sua atenção"**: três cards, cada um com ícone, título, subtítulo e seta:
   - "Aviso de água abaixo da meta" / "Ainda não chegou a 95% das casas".
   - "Moradores sem luz" / "Rua Juruá e Rua Paru · 10 relatos".
   - "Aguardando aprovação" / "3 eventos de grupos da cidade".
4. **Seção "Ferramentas"**: grade de 2 colunas com 8 cards (título / subtítulo):
   - "Alcance dos avisos" / "Quem já recebeu".
   - "Representantes" / "Porta a porta".
   - "Depois do evento" / "Check-in e resultado".
   - "Coleta seletiva" / "Rota do caminhão".
   - "Casas" / "Reformas e serviços".
   - "Trilhas" / "Abertas e fechadas".
   - "Impacto" / "Números para a Vale".
   - "Rascunhos" / "Continuar editando".
5. **Seção "Coleta seletiva"**: um card com:
   - Cabeçalho "Coleta seletiva" / "O que os moradores veem no app" e selo "Até 10h".
   - Cinco botões de dia: "SEG", "TER", "QUA", "QUI", "SEX". Cada um mostra bolinhas com as cores das coletas do dia e, no dia de hoje, a palavra "HOJE".
   - Linha de título do dia escolhido (ex.: "Terça (hoje): 4 coletas · até 10h").
   - Lista das coletas do dia: uma etiqueta colorida com o nome e, quando houver, uma dica ao lado.
   - Botão "Ver dicas de descarte" / "Esconder dicas", que abre a lista:
     - "• Restos de alimentos em sacos bem amarrados."
     - "• Vidro em recipiente resistente, para a segurança dos coletores."
     - "• Óleo de fritura em garrafas PET."
     - "• Entulho misto em sacos fortes, com cerca de 20 kg."
     - "• Pilhas, baterias e lâmpadas fluorescentes nos coletores dos supermercados."
     - "• Big Bag: segunda, terça, quinta e sexta."
   - Botão "Editar cronograma" / "Cronograma salvo ✓".
   - Nota: "Cronograma oficial da coleta seletiva do Núcleo (PRO 022144)."
6. **Seção "Agendados e rascunhos"**: duas linhas:
   - "Energia · para gestores" / "Lembrete de desligamento" / "Sai em 11/11, às 18h", com selo "Agendado". Esta linha não é link.
   - "Evento · para jovens" / "Torneio de videogame" / "Falta: data e local", com selo "Rascunho". Esta linha é link.
7. **Seção "Publicados por você"**: três linhas (vindas de `renderVals`), cada uma com tipo, título, link de ação e um botão "No ar" / "Fora do ar".
   - Nota abaixo: "Toque em “No ar” para tirar do app."
8. **Barra de navegação inferior** ("Navegação do organizador"), com 5 itens: "Painel" (ativo, `aria-current="page"`), "Publicar", "Energia", "Aprovar", "Equipe".

## Comportamento (script `Component`)
- **Estado inicial:** `{ off: {}, colDay: null, colTips: false, colEdited: false }`.
- **Publicados por você** (`renderVals().posts`), dados de exemplo:

  | id | Tipo (`kind`) | Título | Link | Destino |
  | --- | --- | --- | --- | --- |
  | agua | "Aviso · Importante · todos" | "Interrupção no fornecimento de água" | "Ver alcance" | AdminAlcance |
  | vac | "Aviso · Informativo · todos" | "Campanha de vacinação" | "Ver alcance" | AdminAlcance |
  | cine | "Evento · para jovens" | "CineFases" | "Check-in e resultado" | AdminPosEvento |

  - Botão de cada linha: começa como "No ar" (`aria-pressed="true"`, fundo verde-claro). Tocar alterna `off[id]` e o botão vira "Fora do ar" (fundo cinza). Tocar de novo volta a "No ar".
- **Coleta seletiva** (`coletaVals()`):
  - O cronograma está fixo no script, de segunda a sexta:

    | Dia | Coletas |
    | --- | --- |
    | Segunda | Restos de alimentação |
    | Terça | Lixo comum, Plástico, Vidro, Componentes elétricos |
    | Quarta | Restos de alimentação, Papel, Entulho misto, Resto de folhas |
    | Quinta | Lixo comum, Plástico, Metálico |
    | Sexta | Restos de alimentação, Papel |

  - Dicas curtas que aparecem ao lado da etiqueta:
    - Restos de alimentação → "Em sacos bem amarrados".
    - Vidro → "Em recipiente resistente".
    - Entulho misto → "Sacos fortes, cerca de 20 kg".
  - O dia selecionado começa no dia de hoje (`new Date().getDay()`). No sábado ou domingo, começa na segunda. Tocar num dia muda `colDay`.
  - Título do dia: `<Dia>` + " (hoje)" quando é hoje + ": N coleta(s) · até 10h".
  - O dia de hoje tem borda escura quando não está selecionado. O `aria-label` dos dias é o nome completo, com ", hoje" quando é o dia atual.
  - "Ver dicas de descarte" alterna `colTips` e troca o rótulo para "Esconder dicas".
  - "Editar cronograma" só alterna `colEdited` e troca o rótulo para "Cronograma salvo ✓". Não abre nenhum editor.
- O método `chips()` existe no script mas não é usado nesta tela.

## Navegação
| Elemento | Leva para |
| --- | --- |
| "Publicar informação" | `AdminPublicar.dc.html` |
| Card "Aviso de água abaixo da meta" | `AdminAlcance.dc.html` |
| Card "Moradores sem luz" | `AdminEnergia.dc.html` (Fase 2) |
| Card "Aguardando aprovação" | `AdminAprovar.dc.html` |
| Ferramenta "Alcance dos avisos" | `AdminAlcance.dc.html` |
| Ferramenta "Representantes" | `AdminRepresentantes.dc.html` (Fase 2) |
| Ferramenta "Depois do evento" | `AdminPosEvento.dc.html` (Fase 2) |
| Ferramenta "Coleta seletiva" | `AdminColeta.dc.html` (rota do caminhão, Fase 2) |
| Ferramenta "Casas" | `AdminCasas.dc.html` (Fase 2) |
| Ferramenta "Trilhas" | `AdminTrilhas.dc.html` (Fase 2) |
| Ferramenta "Impacto" | `AdminImpacto.dc.html` (Fase 2) |
| Ferramenta "Rascunhos" | `AdminPublicar.dc.html` |
| Linha de rascunho "Torneio de videogame" | `AdminPublicar.dc.html` |
| Publicados: "Interrupção no fornecimento de água" e "Campanha de vacinação" ("Ver alcance") | `AdminAlcance.dc.html` |
| Publicados: "CineFases" ("Check-in e resultado") | `AdminPosEvento.dc.html` (Fase 2) |
| Barra: Painel | `AdminInicio.dc.html` (esta tela) |
| Barra: Publicar | `AdminPublicar.dc.html` |
| Barra: Energia | `AdminEnergia.dc.html` (Fase 2) |
| Barra: Aprovar | `AdminAprovar.dc.html` |
| Barra: Equipe | `AdminEquipe.dc.html` |

## Dados mostrados → registros do sistema
| Dado na tela | Registro |
| --- | --- |
| Nome "Lucca", grupo "Administração do Núcleo" | Organizador (nome, grupo) |
| "pode publicar avisos oficiais" | Organizador → áreas que pode publicar |
| Publicados / agendados / rascunhos: tipo, público ("todos", "para gestores", "para jovens"), nível ("Importante", "Informativo"), título, situação ("No ar", "Fora do ar", "Agendado", "Rascunho"), data de envio ("Sai em 11/11, às 18h") | Aviso (tipo, público, nível, o quê, situação, data de envio, quem publicou) |
| "Aviso de água abaixo da meta" / "Ainda não chegou a 95% das casas" | Entrega do aviso (visto), agregado por casa |
| "3 eventos de grupos da cidade" | Evento → situação "esperando aprovação" |
| "CineFases" (Evento · para jovens), "Torneio de videogame" (Rascunho) | Evento |
| "Moradores sem luz" · "10 relatos" | **Sem registro correspondente** (relatos de energia são Fase 2) |
| Cronograma da coleta seletiva (dias, tipos de coleta, "até 10h", dicas) | **Sem registro correspondente** entre os 8 |
| Ferramentas Representantes, Depois do evento, Rota da coleta, Casas, Trilhas, Impacto | **Sem registro correspondente** (Fase 2) |

## Regras dos documentos que se aplicam
- **Requisitos da V1 · Telas da versão 1 (Organizadores) · Painel:** "Publicar informação, o que precisa de atenção, agendados, rascunhos e publicados"; "“No ar” e “Fora do ar” tiram ou põem a publicação no app".
- **Requisitos da V1 · Perfis e permissões, regra 4:** "Um organizador só vê no Painel as áreas que o grupo dele pode publicar."
- **Requisitos da V1 · Dados · Aviso:** situação pode ser rascunho, agendado, no ar ou fora do ar.
- **Requisitos da V1 · Objetivo e escopo:** Coleta seletiva na V1 é "Sim, só a tabela de dias"; "Rota do caminhão no mapa" é Fase 2. Energia, Casas e manutenção, Trilhas com agenda, e "Representantes de rua, pós-evento e impacto" são Fase 2.
- **Requisitos da V1 · Piloto · Métricas** e **Plano de Comunicação · Resumo:** meta de 95% das casas (24 h para importantes, 2 h para urgentes). É a base do card "Aviso de água abaixo da meta".
- **Requisitos da V1 · Fase 2 e perguntas em aberto:** "Quais os dias reais de cada coleta seletiva no Núcleo?"
- **Requisitos da V1 · Requisitos gerais · Segurança:** "sair da conta em todos os aparelhos".

## Divergências entre protótipo e documentos
- **Itens de Fase 2 visíveis numa tela da V1:**
  - Card "Moradores sem luz" (→ AdminEnergia).
  - Item "Energia" na barra inferior.
  - Ferramentas "Representantes", "Depois do evento", "Coleta seletiva · Rota do caminhão" (→ AdminColeta), "Casas", "Trilhas" e "Impacto".
  - Link "Check-in e resultado" do CineFases (→ AdminPosEvento).
  - Agendado "Energia · para gestores · Lembrete de desligamento".
- **Card "Coleta seletiva" com edição:** os requisitos põem na V1 só a tabela de dias para o morador. A lista de telas do organizador não tem tela nem regra para editar o cronograma, e o botão "Editar cronograma" vai além do que os documentos descrevem. Os documentos também não dizem qual grupo cuida da coleta.
- **Cronograma "oficial" × pergunta em aberto:**
  - O protótipo afirma "Cronograma oficial da coleta seletiva do Núcleo (PRO 022144)" e traz dias fixos, o horário "até 10h" e "Big Bag: segunda, terça, quinta e sexta".
  - Os requisitos listam como pergunta em aberto "Quais os dias reais de cada coleta seletiva no Núcleo?".
  - O código "PRO 022144", o horário e as dicas não aparecem em nenhum documento-fonte.
- **Regra 4 (Painel por grupo):** o protótipo mostra um único Painel, o da Administração, com todas as áreas. Não há variação para Organizador de eventos ou Comitê Jovem.
- **Evento com público, rascunho e "no ar":**
  - O Painel mostra "Evento · para jovens", um evento em "Rascunho" e o CineFases com o botão "No ar".
  - O registro Evento não tem campo de público, e sua situação só prevê "esperando aprovação" e "publicado". Rascunho, no ar e fora do ar existem só no registro Aviso.
- **Ferramenta "Rascunhos"** leva para a tela Publicar, não para uma lista de rascunhos. A lista de rascunhos aparece só na seção "Agendados e rascunhos" deste Painel.
- **Sair da conta:** nenhum botão de sair aparece no Painel (requisito de segurança "sair da conta em todos os aparelhos").

## Notas para implementação
- Na V1, os itens de Fase 2 listados acima não entram, conforme a tabela de escopo dos requisitos. Entre eles estão o card "Moradores sem luz", o item "Energia" da barra e as ferramentas Representantes, Depois do evento, Rota da coleta, Casas, Trilhas e Impacto. Como a barra fica na V1 (4 itens ou outro arranjo) não está definido nos documentos.
- O cronograma da coleta e o texto "PRO 022144" são dados do protótipo. Os dias reais ainda são pergunta em aberto.
- O conteúdo do Painel deve variar pelo grupo do organizador (regra 4). O protótipo só desenha a versão da Administração.
- Os textos "Lucca", "3 eventos", "10 relatos", "Sai em 11/11, às 18h" e a lista "Publicados por você" são dados de exemplo.
- O `<title>` do arquivo é "Meu Carajás Organizadores – Painel" (no singular, diferente de "Organizadores" na Entrada).

## Famílias cadastradas (acrescentada em 21/10/2026, decisão A-14)

No fim do Painel, depois de "Publicados por você":

- Título **"Famílias cadastradas"** (Bricolage Grotesque 700, 18 px) e um resumo `{{famResumo}}` ("6 famílias · 7 moradores com conta").
- Um card branco com uma linha por família (`<sc-for list="{{families}}">`): círculo verde-claro com a inicial; linha pequena em maiúsculas com código · endereço (quando houver) · número de moradores; título com os nomes (apelido, quando houver, senão o primeiro nome); e a lista "Nome (papel)" — gestor da casa, adulto da casa, jovem, ou "jovem, esperando aprovação".
- No protótipo, o exemplo é a família Ribeiro (CKS-4821, Rua Japurá, 12). No app, a lista vem do cadastro (`CC.familias`), e só a Administração do Núcleo a vê.

## Para os grupos fora da Administração, desde 22/10/2026 (decisões A-21 e A-22)

- A linha de baixo do título mostra o grupo e o que ele publica, por exemplo "Equipe Entre Fases · pode publicar eventos".
- Ficam ocultos: "Precisa da sua atenção", "Ferramentas", "Coleta seletiva", "Agendados e rascunhos" e "Famílias cadastradas".
- Na barra de baixo, Energia e Aprovar ficam ocultos (a barra tem três itens). Vale também em Publicar, Equipe e Depois do evento.
- Para a Administração, o card "Aguardando aprovação" mostra o número de pedidos de verdade.
