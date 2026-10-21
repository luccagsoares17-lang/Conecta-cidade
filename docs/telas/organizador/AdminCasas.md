# Casas e manutenção — `AdminCasas.dc.html`

| Campo | Valor |
| --- | --- |
| App | Conecta Cidade Organizadores |
| Página do canvas | `organizador` |
| Nome na lista "Telas da versão 1" dos requisitos | Não está na lista da V1 |
| Versão | Fase 2 |
| Perfil que vê | Não definido nos documentos. No protótipo, abre pelo Painel do organizador (Ferramentas → "Casas · Reformas e serviços"). Nas permissões iniciais de `AdminEquipe.dc.html`, a área "Casas" fica liberada para "Administração do Núcleo" e "Equipes de campo", grupo que não existe nos requisitos |
| Protótipo | [`design/prototipo/AdminCasas.dc.html`](../../../design/prototipo/AdminCasas.dc.html) |
| Tamanho | 390×844 |

## Para que serve
Ver no mapa do Núcleo, por trecho de rua, as casas que precisam de reforma, as casas vazias e os pedidos de serviço (corte de grama, poda), e mandar a equipe para cada pedido. É a área "Casas e manutenção", que os requisitos colocam na Fase 2.

## Conteúdo da tela (de cima para baixo)
1. **Cabeçalho** (fundo escuro): botão voltar ("Voltar para o painel"); "Conecta Cidade Organizadores"; título "Casas e manutenção"; subtítulo "Reformas, casas vazias e serviços".
2. **Três cards-filtro** com contagem: "Reformas" (laranja), "Vazias" (cinza), "Serviços" (azul claro).
3. Botão **"Mostrar todas"**, que só aparece quando um filtro está ativo.
4. **Card "Mapa das casas"** — à direita "por trecho de rua".
   - O mesmo mapa SVG do Núcleo de `AdminEnergia` e `AdminColeta`: PA-275 · Rod. Raimundo Mascarenhas, AV. KARAJÁS, AV. CATETE, QUARTEIRÃO 1/2/3, as 18 ruas de ACARÁ a TAPAJÓS, Hospital Yutaka Takeda, Trilha Uxi, Doce Norte E.C., Escola, Hotel, Portaria, "N ↑".
   - Legenda: "Precisa de reforma", "Casa vazia", "Precisa de serviço", "Sem pedido".
   - Campo **"Ver rua"** (select) "Rua Acará" … "Rua Tapajós".
   - Botões "Quarteirão 1/2/3", com a situação do trecho ou "Não passa aqui".
   - Caixa de resumo: "Rua <rua> · Quarteirão <n>" + "Casa <número> · <descrição>" ou "Nenhum pedido neste trecho".
5. **Título "Pedidos"** e um card por pedido, com:
   - etiqueta da categoria ("Reforma", "Casa vazia" ou "Serviço") + "Quarteirão <n>";
   - endereço "Rua <rua>, casa <número>";
   - descrição do pedido;
   - botões "Ver no mapa" e "Mandar equipe" (que vira "Equipe a caminho");
   - depois do envio, a linha "✓ <equipe> · <quando>".
6. **Barra de navegação inferior**: **Painel (ativo)**, Publicar, Energia, Aprovar, Equipe.

## Comportamento (script `Component`)
- **Estado inicial:** `filter: null`, `sent: {}`, `sel: null`, `seg: null`. O mapa abre em **Rua Acará · Quarteirão 1** ("Casa 4 · Telhado com goteira").
- **Dados de exemplo** (15 pedidos, um por trecho, na ordem em que aparecem na lista):

| Trecho | Categoria | Casa | Descrição |
| --- | --- | --- | --- |
| Acará · Q1 | Reforma | 4 | Telhado com goteira |
| Caeté · Q3 | Reforma | 18 | Pintura e troca de piso |
| Iriri · Q2 | Reforma | 9 | Reforma do banheiro |
| Jari · Q2 | Reforma | 14 | Reparos depois da mudança |
| Purus · Q1 | Reforma | 3 | Forro caindo na cozinha |
| Solimões · Q3 | Reforma | 21 | Telhado e calha |
| Guamá · Q2 | Casa vazia | 7 | Vazia desde setembro |
| Iguara · Q3 | Casa vazia | 16 | Família transferida em outubro |
| Mearim · Q1 | Casa vazia | 2 | Vazia · precisa de limpeza |
| Tapajós · Q2 | Casa vazia | 11 | Pronta para receber nova família |
| Araguaia · Q3 | Serviço | 20 | Corte de árvore no quintal |
| Grajaú · Q1 | Serviço | 5 | Cortar a grama |
| Itacaiúnas · Q2 | Serviço | 10 | Poda de galhos na calçada |
| Juruá · Q3 | Serviço | 19 | Cortar a grama |
| Paru · Q2 | Serviço | 13 | Árvore encostando no telhado |

- **Contagens:** Reformas 6, Vazias 4, Serviços 5. As contagens não mudam com o filtro.
- **Filtro:** tocar num card filtra a lista e o mapa por aquela categoria; tocar de novo, ou em "Mostrar todas", limpa o filtro. Com filtro, os trechos das outras categorias aparecem como "Sem pedido".
- **"Ver no mapa":** seleciona a rua e o quarteirão do pedido no mapa.
- **"Mandar equipe":** alterna o envio daquele pedido. Tocar de novo em "Equipe a caminho" desfaz. Equipes e prazos fixos por categoria:
  - Reforma → "Equipe de manutenção das casas · visita técnica amanhã, 9h";
  - Casa vazia → "Equipe de manutenção das casas · limpeza e vistoria na quinta, 8h";
  - Serviço → "Equipe de poda e jardinagem · amanhã, 8h".
- O mapa funciona como nas outras telas com mapa: o select limpa o quarteirão, e o quarteirão inexistente fica desabilitado.
- O protótipo não mostra de onde vêm os pedidos nem quem os cria.

## Navegação
| Elemento | Leva para |
| --- | --- |
| Botão voltar (cabeçalho) | `AdminInicio.dc.html` |
| Barra inferior · Painel (ativo) | `AdminInicio.dc.html` |
| Barra inferior · Publicar | `AdminPublicar.dc.html` |
| Barra inferior · Energia | `AdminEnergia.dc.html` |
| Barra inferior · Aprovar | `AdminAprovar.dc.html` |
| Barra inferior · Equipe | `AdminEquipe.dc.html` |

A tela é aberta pelo atalho "Casas · Reformas e serviços" do Painel.

## Dados mostrados → registros do sistema
| Dado na tela | Registro da V1 |
| --- | --- |
| Rua, número ("casa 4") e quarteirão | **Casa** (rua, número, quarteirão) |
| Nomes das 18 ruas e 3 quarteirões | Fora dos 8 registros: "tabela própria" dos requisitos |
| Situação "Casa vazia" e sua descrição ("Vazia desde setembro") | **Sem registro correspondente.** Casa não tem campo de situação ou ocupação |
| Pedido de reforma ou serviço (categoria, descrição) | **Sem registro correspondente** |
| Equipe enviada, data/hora da visita, situação "Equipe a caminho" | **Sem registro correspondente** |

## Regras dos documentos que se aplicam
- *Requisitos*, "Objetivo e escopo": "Casas e manutenção" fica na Fase 2. O critério da V1 é não depender de dados ou equipes de fora do grupo.
- *Requisitos*, "Fase 2 e perguntas em aberto": "casas e manutenção" está na lista da Fase 2, "já desenhadas no protótipo". Pergunta em aberto sobre a divisão das 18 ruas em 3 quarteirões.
- *Requisitos*, "Dados que o sistema guarda": Casa é vista por "Gestores da casa e administração". Ruas e quarteirões ficam em tabela própria, "de Acará a Tapajós".
- *Conecta Cidade: o aplicativo* e *Desapego*: muitas famílias "chegam e vão embora por causa de transferência de trabalho". É o contexto de "Família transferida em outubro" e "Pronta para receber nova família".

## Divergências entre protótipo e documentos
1. **Sem descrição nos documentos.** Nenhum documento-fonte descreve a área "Casas e manutenção" além do nome na tabela de escopo e na lista da Fase 2. Categorias, equipes, prazos e o botão "Mandar equipe" existem só no protótipo.
2. **Campos de Casa.** O registro Casa da V1 não tem situação "vazia", pedidos nem equipes. A tela depende de dados fora do modelo.
3. **Perfil.** Os documentos não dizem quem vê esta tela, e as "equipes" (manutenção das casas, poda e jardinagem) não são perfis do app Organizadores.
4. **Origem dos pedidos.** Não está definida. Nenhuma tela do protótipo permite abrir um pedido de reforma ou serviço; "reforma" só aparece nesta tela, no Painel e em `AdminEquipe`.

## Notas para implementação
- Tela inteira da Fase 2. Na V1, o atalho "Casas · Reformas e serviços" do Painel fica oculto.
- O mapa é o mesmo componente de `AdminEnergia` e `AdminColeta`. Ruas, ordem e trechos por quarteirão vêm da tabela de ruas e quarteirões.
- No protótipo, "Mandar equipe" é um interruptor (liga e desliga). As equipes e os horários são textos fixos por categoria.
- Números de casa ("casa 4", "casa 18"…) e pedidos são dados de exemplo. A equipe "Manutenção das casas" de `AdminEquipe` ("6 reformas na fila") bate com as 6 reformas desta tela.
- O protótipo tem um pedido por trecho de rua. Os documentos não dizem se pode haver mais de um.
