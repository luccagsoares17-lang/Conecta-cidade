# Impacto — `AdminImpacto.dc.html`

| Campo | Valor |
| --- | --- |
| App | Meu Carajás Organizadores |
| Página do canvas | `organizador` |
| Nome na lista "Telas da versão 1" dos requisitos | Não está na lista da V1 |
| Versão | Fase 2 |
| Perfil que vê | Não definido nos documentos. No protótipo, abre pelo Painel do organizador (Ferramentas → "Impacto · Números para a Vale") |
| Protótipo | [`design/prototipo/AdminImpacto.dc.html`](../../../design/prototipo/AdminImpacto.dc.html) |
| Tamanho | 390×844 |

## Para que serve
Reunir os números do Entre Fases e do uso do Meu Carajás Super App para apresentar à Vale, e ligar cada resultado da escuta a uma parte do app. Os requisitos chamam essa área de "tela de impacto" e a colocam na Fase 2.

## Conteúdo da tela (de cima para baixo)
1. **Cabeçalho** (fundo escuro): botão voltar ("Voltar para o painel"); "Meu Carajás Organizadores"; título "Impacto"; subtítulo "Resultados para apresentar à Vale".
2. **Seção "Entre Fases em 2026"**, com o texto "Resultados reais do Comitê Jovem, desde maio." e 4 cards:
   - "700+" — "pessoas nos 3 eventos"
   - "33" — "cestas básicas para a Via Autismo"
   - "340 mil" — "visualizações no @entrefasescks"
   - "49" — "jovens no Comitê"
3. **Seção "No Meu Carajás Super App"**, com o texto "Números de exemplo: o app preenche sozinho quando estiver em uso." e 6 cards:
   - "312" — "casas cadastradas"
   - "96%" — "avisos que bateram a meta de 95%"
   - "18" — "eventos publicados"
   - "540" — "confirmações em eventos"
   - "47" — "itens doados no Desapego"
   - "29" — "famílias novas recebidas"
4. **Seção "O que a escuta pediu"** (3 linhas):
   - "78%" — "Vínculos quebram nas transferências" → "Boas-vindas, eventos e Desapego entre vizinhos"
   - "54%" — "Não se sentem preparados para o futuro" → "Oportunidades: cursos, estágios e vestibular"
   - "42%" — "Falta lazer pensado para jovens" → "Perfil jovem e eventos pelos interesses deles"
5. Mensagem "Resumo gerado. Pronto para colocar no slide.", depois do botão.
6. Botão **"Gerar resumo para apresentação"**.
7. **Barra de navegação inferior**: **Painel (ativo)**, Publicar, Energia, Aprovar, Equipe.

## Comportamento (script `Component`)
- **Estado inicial:** `done: false`.
- **"Gerar resumo para apresentação":** marca `done: true` e mostra a mensagem "Resumo gerado. Pronto para colocar no slide." O protótipo não gera nem baixa nenhum arquivo.
- Todos os números estão escritos direto no markup. Nenhum é calculado.

## Navegação
| Elemento | Leva para |
| --- | --- |
| Botão voltar (cabeçalho) | `AdminInicio.dc.html` |
| Barra inferior · Painel (ativo) | `AdminInicio.dc.html` |
| Barra inferior · Publicar | `AdminPublicar.dc.html` |
| Barra inferior · Energia | `AdminEnergia.dc.html` |
| Barra inferior · Aprovar | `AdminAprovar.dc.html` |
| Barra inferior · Equipe | `AdminEquipe.dc.html` |

A tela é aberta pelo atalho "Impacto · Números para a Vale" do Painel. `AdminPosEvento` diz que o resultado publicado "Aparece … na tela de Impacto".

## Dados mostrados → registros do sistema
| Dado na tela | Registro da V1 |
| --- | --- |
| 700+, 33, 340 mil, 49 (Entre Fases) | **Sem registro.** São números fixos, tirados do *Contexto Entre Fases* |
| Casas cadastradas | **Casa** (contagem) |
| Avisos que bateram a meta de 95% | **Aviso** + **Entrega do aviso** (visto, por casa), com a meta de 95% dos requisitos |
| Eventos publicados | **Evento** (situação "publicado") |
| Confirmações em eventos | **Evento** (confirmações) |
| Itens doados no Desapego | **Anúncio do Desapego** (preço ou doação). Contar como "doado" exige saber se o item foi entregue: a situação do anúncio só tem "ativo, vendido" |
| Famílias novas recebidas | **Sem registro correspondente.** Casa tem "data de cadastro", mas "recebidas" remete às boas-vindas do representante de rua (Fase 2), que não têm registro |
| Percentuais da escuta (78%, 54%, 42%) | **Sem registro.** São números fixos do *Contexto Entre Fases* |
| Resumo para apresentação | **Sem registro correspondente** |

## Regras dos documentos que se aplicam
- *Requisitos*, "Objetivo e escopo": "Representantes de rua, pós-evento e impacto" ficam na Fase 2. "Fase 2 e perguntas em aberto" cita a "tela de impacto".
- *Requisitos*, "Piloto: aceite e métricas": metas de 95% das casas em 24 horas (importante) e em 2 horas (urgente). "Confirmações em eventos pelo app" e "Anúncios e doações no Desapego" ficam "A definir no começo do piloto".
- *Contexto Entre Fases*:
  - 49 jovens no Comitê;
  - "mais de 700 pessoas nos três eventos";
  - "@entrefasescks, … passou de 340 mil visualizações";
  - "33 cestas básicas, entregues à ONG Via Autismo";
  - 78% / 54% / 42% da escuta;
  - os três desafios da Vale.
- *Meu Carajás Super App: o aplicativo*, "Por que o Meu Carajás Super App ajuda": a tabela que liga 78% a "Guia de boas-vindas, eventos e desapego", 54% a "Mural de cursos, estágios e vestibular" e 42% a "Agenda de eventos filtrada pelos interesses deles".

## Divergências entre protótipo e documentos
1. **Escuta → app.** Para os 42%, a tela diz "Perfil jovem e eventos pelos interesses deles". O documento do aplicativo diz "Agenda de eventos filtrada pelos interesses deles". "Perfil jovem" vai além do documento.
2. **Meta só de 95%.** O card "avisos que bateram a meta de 95%" não separa os prazos de 24 horas (importante) e 2 horas (urgente) que os requisitos definem.
3. **"Itens doados".** O Anúncio do Desapego não tem situação "doado" (só "ativo, vendido"), então o número não sai direto do modelo.
4. **"Famílias novas recebidas"** não tem fonte no modelo da V1.
5. **Pós-evento não chega aqui.** `AdminPosEvento` promete que o resultado "Aparece … na tela de Impacto", mas esta tela não tem lugar para resultados de evento (kg, cestas).
6. **Perfil.** Os documentos não dizem quem vê a tela de impacto.
7. **Escala dos exemplos.** Os números de exemplo ("312 casas cadastradas") vão além do piloto da V1, que é com as 49 famílias do Comitê. Estão marcados como "Números de exemplo".

## Notas para implementação
- Tela inteira da Fase 2. Na V1, o atalho "Impacto · Números para a Vale" do Painel fica oculto.
- O texto "Números de exemplo: o app preenche sozinho quando estiver em uso." e os seis números da seção "No Meu Carajás Super App" são só do protótipo.
- Os números da seção "Entre Fases em 2026" e de "O que a escuta pediu" são fixos e vêm do *Contexto Entre Fases*. Não saem do banco.
- No protótipo, "Gerar resumo para apresentação" só mostra a mensagem. O formato do resumo não está definido nos documentos.
