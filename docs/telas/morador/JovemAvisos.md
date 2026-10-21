# Avisos · jovem — `JovemAvisos.dc.html`

| Campo | Valor |
| --- | --- |
| App | Meu Carajás Super App (morador) |
| Página do canvas | `morador` ("Meu Carajás Super App") — conforme `design/prototipo/canvas.json` |
| Nome na lista "Telas da versão 1" dos requisitos | Avisos |
| Versão | V1 com partes ocultas até a Fase 2 (o botão "Ver no mapa" leva à Energia, que é Fase 2) |
| Perfil que vê | Jovem |
| Protótipo | [`design/prototipo/JovemAvisos.dc.html`](../../../design/prototipo/JovemAvisos.dc.html) |
| Tamanho | 390×844 |

## Para que serve
É a versão do perfil jovem da tela Avisos da V1: "Lista por urgência; tocar abre o que fazer e o contato", com a regra "O jovem não vê os urgentes" (Requisitos › Telas da versão 1). O jovem vê "avisos informativos e importantes" (Requisitos › Perfis e permissões).

## Conteúdo da tela (de cima para baixo)
1. **Cabeçalho** (fixo)
   - Botão voltar (`aria-label="Voltar para o início"`) → `JovemInicio.dc.html`.
   - Título: "Avisos"; subtítulo: "O que é bom você saber".
   - Selo à direita: "Jovem".
2. **Filtro por nível**: chips "Todos", "Importante" e "Informativo". Não há chip "Urgente".
3. **Filtro por formato**: chips roxos "Todos os formatos", "Texto" e "Imagem".
4. **Lista** (rola):
   - Faixa azul: "**Alertas por SMS:** os avisos importantes e urgentes também chegam por SMS no celular cadastrado."
   - Cards de aviso. Cada card tem:
     - etiqueta de nível ("Importante" amarela, "Informativo" verde), categoria em maiúsculas e etiqueta de formato ("Texto" ou "Imagem");
     - título;
     - linha de quando e onde.
     - Aberto, mostra "**O que fazer:** <texto>", "Dúvidas: (94) 0000-0000 – Administração do Núcleo" e o selo "✓ Aviso oficial".
   - O aviso em formato **Imagem** tem, acima do texto, a miniatura de um comunicado (SVG). A miniatura tem:
     - "COMUNICADO OFICIAL · CARAJÁS" e "Desligamento programado de energia";
     - "QUINTA-FEIRA · 12/11" / "das 8h às 12h" e "Onde: só no quarteirão 1";
     - um mapa com as ruas Acará, Amazonas, Araguaia, Arapiuns, Caeté e Grajaú, com Araguaia e Arapiuns destacadas;
     - "O que fazer: tire os aparelhos da tomada e carregue o celular antes das 8h." e o rodapé "Administração do Núcleo · SECOM 0800-2850-193";
     - o selo "Toque para abrir".
5. **Visualizador de comunicado** (camada de tela cheia que cobre a tela quando aberta):
   - Botão fechar (X, `aria-label="Fechar o comunicado"`), título "Comunicado em imagem" e a dica "Use + e − para ampliar".
   - Botões "−" (`aria-label="Diminuir"`) e "+" (`aria-label="Aumentar"`).
   - A imagem do comunicado em tamanho grande.
   - Rodapé com dois botões: "Ver no mapa" (link para `Energia.dc.html`) e "Lembrar na véspera" (muda para "Lembrete ativado ✓").
6. **Não há barra de navegação inferior** nesta tela.

## Comportamento (script `Component`)
- Estado inicial: `{ lvl: 'Todos', fmt: 'Todos', open: 'vacina', viewer: false, spot: 0, zoom: 1, remind: false }`. A tela abre com os dois filtros em "Todos", o aviso "Campanha de vacinação" já aberto e o visualizador fechado. `spot` não é usado.
- **Dados de exemplo** (array `all`, 7 avisos):

  | id | Formato | Nível | Categoria | Título | Quando · onde | O que fazer |
  | --- | --- | --- | --- | --- | --- | --- |
  | energia | Texto | Urgente | Falta de energia | Falta de energia na Rua Juruá | Agora · Rua Juruá, quarteirão 2 · previsão de volta: 16h | Tire os aparelhos da tomada. A equipe de rede elétrica já está a caminho. |
  | luz | Imagem | Importante | Falta de luz | Comunicado: desligamento programado | Quinta, 12/11, das 8h às 12h · Ruas Araguaia e Arapiuns | Abra a imagem para ver o comunicado completo. Tire aparelhos da tomada e carregue o celular antes das 8h. |
  | estrada | Texto | Urgente | Segurança | Interdição de estrada | Hoje, até 18h · Estrada de acesso ao Núcleo, km 8 | Evite o trecho e use o caminho indicado. |
  | agua | Texto | Importante | Falta de água | Interrupção no fornecimento de água | Quinta-feira, 5/11, das 8h às 14h · Ruas Japurá, Jari e Juruá | Armazene água na quarta-feira à noite. |
  | obra | Texto | Importante | Obras | Obra na rua | 26/10 a 30/10 · Rua Mearim | Estacione em outra rua durante a obra. |
  | vacina | Texto | Informativo | Saúde | Campanha de vacinação | Terça, 3/11, das 8h às 16h · Posto de saúde | Leve o cartão de vacina. |
  | lixo | Texto | Informativo | Coleta de lixo | Coleta seletiva: lixo até as 10h | Segunda a sexta · cronograma no início do app | Deixe o lixo do lado de fora até as 10h da manhã, separado conforme o dia da coleta. |

- **Urgentes nunca aparecem:** antes dos filtros, o script descarta os urgentes (`all.filter((a) => a.lvl !== 'Urgente')`). Os avisos "energia" e "estrada" não aparecem em nenhuma combinação de filtro. A lista mostrada tem 5 avisos, na ordem do array: os 3 importantes e depois os 2 informativos.
- **Filtro de nível** (`lvl`) e **filtro de formato** (`fmt`) se combinam (E lógico).
- **Tocar no card** abre ou fecha o detalhe. Só um aviso fica aberto por vez (`open` guarda o id; tocar no aberto fecha).
- **Miniatura "Toque para abrir"** abre o visualizador (`viewer: true`, `zoom: 1`).
- **"+" e "−"** mudam o zoom de 0,2 em 0,2, entre 1 e 1,8. A largura da imagem é `358 × zoom` px.
- **"Lembrar na véspera"** alterna `remind`. Ligado, o rótulo é "Lembrete ativado ✓", com fundo branco.
- **X** fecha o visualizador.
- O contato "Dúvidas: (94) 0000-0000 – Administração do Núcleo" é o mesmo em todos os avisos (fixo no markup).

## Navegação
| Elemento | Leva para |
| --- | --- |
| Botão voltar | `JovemInicio.dc.html` |
| "Ver no mapa" (no visualizador) | `Energia.dc.html` (tela "Energia · gestor") |

Só se chega a esta tela pelo card "Avisos" de `JovemInicio.dc.html`.

## Dados mostrados → registros do sistema
| Dado na tela | Registro |
| --- | --- |
| Nível ("Importante", "Informativo") | Aviso (nível) |
| Categoria | Aviso (categoria) |
| Título | Aviso (o quê) |
| Quando · onde | Aviso (quando, onde) |
| "O que fazer" | Aviso (o que fazer) |
| "Dúvidas: (94) 0000-0000 – Administração do Núcleo" | Aviso (contato) — no protótipo, o mesmo texto fixo em todos |
| Selo "Aviso oficial" | Sem campo próprio no registro Aviso |
| Ruas citadas | Aviso (ruas) |
| Esconder os urgentes / avisos "só jovens" | Aviso (nível, público) + Pessoa (perfil) |
| Formato "Texto" / "Imagem" e a imagem do comunicado | **Sem registro correspondente** (o registro Aviso não tem formato nem imagem) |
| "Lembrar na véspera" / "Lembrete ativado" | **Sem registro correspondente** |
| Aviso visto ao abrir | Entrega do aviso (visto) — o protótipo não grava |

## Regras dos documentos que se aplicam
- **Requisitos › Telas da versão 1 › Avisos:** "Lista por urgência; tocar abre o que fazer e o contato"; "O jovem não vê os urgentes".
- **Requisitos › Perfis e permissões (linha Jovem):** "avisos informativos e importantes".
- **Requisitos › Regras de permissão, 1 e 2:** "Avisos urgentes sempre vão para os gestores, mesmo quando o público escolhido for 'só jovens'"; "O jovem nunca vê avisos urgentes no app; eles são tratados pelos gestores da casa".
- **Requisitos › Piloto › Critérios de aceite:** "Um aviso 'só jovens' não aparece para quem não é jovem, e um urgente nunca aparece para o jovem".
- **Requisitos › Dados › Aviso:** "Tipo, público (todos, só gestores, só jovens), nível (urgente, importante, informativo), categoria, o quê, quando, onde, o que fazer, contato, ruas, canais, situação..., data de envio, quem publicou"; "Quem vê: Público escolhido; organizadores".
- **Requisitos › Dados › Entrega do aviso:** "Aviso, casa, canal, enviado, visto".
- **Requisitos › SMS e WhatsApp:** SMS "Obrigatório nos níveis urgente, importante e informativo; vai para o celular do cadastro". Regra de envio 1: "Urgente: SMS... para todos os gestores das ruas escolhidas".
- **Requisitos › Objetivo e escopo:** "Energia e mapa por quarteirão" é Fase 2.
- **Meu Carajás Super App: o aplicativo › Avisos do Núcleo:** "Avisos com selo de 'oficial'"; "Categorias: obras, falta de água, coleta de lixo, segurança e mudanças de horário"; "Histórico de avisos para quem perdeu algum".
- **Plano de Comunicação › Modelo padrão de aviso:** o quê, quando, onde, o que fazer e "DÚVIDAS: (94) 0000-0000 – Administração do Núcleo".
- **Falta de energia no Núcleo › Como funciona:** "nos desligamentos programados... o app lembra os moradores na véspera".

## Divergências entre protótipo e documentos
1. **A faixa de SMS diz "importantes e urgentes".** A faixa diz que "os avisos importantes e urgentes também chegam por SMS". Mas:
   - os Requisitos dizem que o SMS é "Obrigatório nos níveis urgente, importante e informativo", ou seja, inclui os informativos;
   - o jovem não recebe urgentes, que vão para os gestores (Regra de envio 1 e Regras de permissão 1 e 2);
   - o Plano de Comunicação diz outra coisa: SMS "Somente avisos urgentes".
2. **O filtro dos urgentes está no app.** O protótipo carrega os urgentes ("Falta de energia na Rua Juruá", "Interdição de estrada") e só os esconde no script. A regra é que o jovem "nunca vê" urgentes. Os documentos não dizem onde o filtro deve ser feito.
3. **Formato "Imagem" e comunicado em imagem** (filtro de formato, miniatura, visualizador com zoom) não aparecem nos documentos, e o registro Aviso não tem campos de formato ou imagem.
4. **"Ver no mapa" leva a `Energia.dc.html`**, a tela "Energia · gestor": é da Fase 2 ("Energia e mapa por quarteirão") e do perfil gestor. O mapa de ruas dentro da imagem também é da área de energia.
5. **Avisos de energia como categorias.** Aparecem as categorias "Falta de luz" (e, entre os urgentes escondidos, "Falta de energia"), que não estão na lista de categorias ("obras, falta de água, coleta de lixo, segurança e mudanças de horário"). A categoria "Saúde" também não está na lista.
6. **"Lembrar na véspera"** não aparece nos documentos de avisos. Ele só aparece no documento de energia (Fase 2), e não há registro para o lembrete.
7. **Mesmo contato em todos os avisos.** O contato é fixo, "(94) 0000-0000 – Administração do Núcleo", embora o registro Aviso tenha o campo "contato". O telefone oficial ainda é uma pergunta em aberto ("Qual é o telefone oficial para dúvidas...").
8. **"cronograma no início do app"** (aviso de coleta) aponta para o Início, mas o Início do jovem (`JovemInicio.dc.html`) não mostra a coleta. A coleta do dia está no "Início · gestor".
9. **Outra tela diz o contrário sobre os importantes.** `GestorFamilia.dc.html` diz "Os jovens veem só os avisos informativos e de eventos". Esta tela e os Requisitos mostram também os importantes.
10. **Público "só jovens":** o protótipo não mostra o público de cada aviso e não filtra por ele.
11. **Sem barra de navegação inferior;** só o botão voltar. O Avisos também não está na barra do jovem.
12. **Botões abaixo de 44 px:** os chips de nível têm 40 px e os de formato têm 36 px. "Requisitos gerais › Acessibilidade" pede "botões de pelo menos 44 px".
13. **Ao abrir, o detalhe de um aviso já aparece aberto** ("Campanha de vacinação", `open: 'vacina'`). Isso é estado do protótipo; os documentos não definem.

## Notas para implementação
- Um aviso de nível urgente nunca aparece para o perfil jovem, nem com o público "só jovens" (Regras de permissão 1 e 2; critério de aceite). Por isso a lista não tem o chip "Urgente".
- Na V1, o botão "Ver no mapa" depende da tela Energia, que é da Fase 2.
- Os 7 avisos, as datas, as ruas e o telefone "(94) 0000-0000" são dados de exemplo do protótipo.
- O registro "Entrega do aviso" tem o campo "visto", que a tela de Alcance usa. O protótipo não mostra quando um aviso conta como visto.
