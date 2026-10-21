# Análise · "Conecta Cidade: requisitos da versão 1"

Fonte: [`docs/fontes/Conecta Cidade requisitos da versão 1.md`](<../fontes/Conecta Cidade requisitos da versão 1.md>) · 20/10/2026 · @Felipe Entre Fases

## Papel no projeto

É o documento **mais importante e mais recente em detalhe**. Define o escopo da V1, perfis, regras, telas, dados, canais e critérios de aceite. Aponta o protótipo como referência visual: [Conecta Cidade – Interface do App](https://claude.ai/artifact/PkQ9tajBdYdt6vXEFn7tX9), copiado em [`design/prototipo/`](../../design/prototipo/). Em caso de conflito com os outros documentos, **este vence para a V1**.

O conteúdo foi organizado por tema em `docs/produto/`:

| Tema | Documento vivo |
| --- | --- |
| Escopo V1 × Fase 2 | [`produto/escopo.md`](../produto/escopo.md) |
| Perfis e permissões | [`produto/perfis-e-permissoes.md`](../produto/perfis-e-permissoes.md) |
| Fluxos principais | [`produto/fluxos.md`](../produto/fluxos.md) |
| Dados | [`produto/modelo-de-dados.md`](../produto/modelo-de-dados.md) |
| SMS, WhatsApp e notificação | [`produto/canais-de-comunicacao.md`](../produto/canais-de-comunicacao.md) |
| Requisitos gerais, piloto e aceite | [`produto/requisitos-gerais-e-piloto.md`](../produto/requisitos-gerais-e-piloto.md) |

## Resumo do que o documento decide

1. **Dois apps, um banco**: Conecta Cidade (moradores) e Conecta Cidade Organizadores (quem publica).
2. **Critério da V1**: não depender de dados ou equipes de fora do grupo.
3. **Família pela casa**: o gestor cria a conta com rua e número e recebe o **código da família** (3 letras e 4 números, ex.: `CKS-4821`); adultos e jovens entram com o código; jovem só ativa com aprovação.
4. **Jovem protegido**: nunca vê urgentes; Desapego só se o gestor liberar.
5. **Avisos com SMS obrigatório** em todos os níveis; WhatsApp só para cadastro.
6. **13 telas no app do morador e 6 no app do organizador**, com nomes iguais aos do protótipo.
7. **Piloto de 30 dias** com os 49 jovens do Comitê e famílias, com 7 critérios de aceite.

## As 19 telas da V1 → arquivos do protótipo

Os requisitos dizem que "os nomes batem com os do protótipo". A ligação abaixo usa o título de cada board em `design/prototipo/canvas.json`.

**Conecta Cidade (morador) — 13 telas**

| # | Tela nos requisitos | Board no protótipo | Arquivo |
| --- | --- | --- | --- |
| 1 | Abertura | Abertura do app | `Splash.dc.html` |
| 2 | Acabei de chegar | Acabei de chegar | `Chegada.dc.html` |
| 3 | Entrar | Entrar · gestor ou jovem | `Login.dc.html` |
| 4 | Criar conta · adulto e gestor | Criar conta · adulto e gestor | `CadastroGestor.dc.html` |
| 5 | Criar conta · jovem | Criar conta · jovem | `CadastroJovem.dc.html` |
| 6 | Início · gestor | Início · gestor da casa | `Main.dc.html` |
| 7 | Início · jovem | Início · morador jovem | `JovemInicio.dc.html` |
| 8 | Minha casa | Minha casa · gestor | `GestorFamilia.dc.html` |
| 9 | Eventos | Eventos · gestor / Eventos · jovem | `Eventos.dc.html`, `JovemEventos.dc.html` |
| 10 | Desapego | Desapego · gestor | `Desapego.dc.html` |
| 11 | Avisos | Avisos · gestor / Avisos · jovem | `Avisos.dc.html`, `JovemAvisos.dc.html` |
| 12 | Guia do morador | Guia do morador · gestor / Oportunidades · jovem | `Guia.dc.html`, `JovemGuia.dc.html` |
| 13 | Coleta seletiva | Sem board próprio no app do morador — ver [inventário](../telas/README.md) | — |

**Conecta Cidade Organizadores — 6 telas**

| # | Tela nos requisitos | Board no protótipo | Arquivo |
| --- | --- | --- | --- |
| 1 | Entrada | Entrada do organizador | `AdminEntrada.dc.html` |
| 2 | Painel | Painel | `AdminInicio.dc.html` |
| 3 | Publicar | Publicar | `AdminPublicar.dc.html` |
| 4 | Alcance do aviso | Alcance do aviso | `AdminAlcance.dc.html` |
| 5 | Aprovações | Aprovações | `AdminAprovar.dc.html` |
| 6 | Equipes e permissões | Equipe e permissões | `AdminEquipe.dc.html` |

As outras telas do protótipo são Fase 2 ou identidade visual. Lista completa em [`docs/telas/README.md`](../telas/README.md).

## Pontos que exigem atenção

- **"Igual ao do Plano de Comunicação"**: o modelo de SMS dos requisitos difere do modelo do Plano em três detalhes (ruas de exemplo, sem linhas em branco, sem "Repasse para seus vizinhos."). Ver [conflitos](../decisoes/conflitos-entre-fontes.md).
- **Coleta seletiva** é uma das 13 telas do morador, mas o protótipo não tem um board com esse nome na página do morador.
- **"Minha casa"**: existe também um arquivo `GestorMinhaFamilia.dc.html` (título "Minha família") que não está no índice do canvas.
- **Os embeds** "cadastro e aprovação do jovem · 4 passos, 1 decisão" não vieram no arquivo; o fluxo foi reconstruído a partir do texto em [`produto/fluxos.md`](../produto/fluxos.md).
- **Categorias de aviso** não são listadas aqui; a lista está na visão geral do app.

## Perguntas em aberto (copiadas do documento)

- [ ] Quem é o responsável oficial pelos avisos: a administração do Núcleo, a Vale ou a associação de moradores?
- [ ] Quem paga o serviço de SMS e o número de WhatsApp do cadastro?
- [ ] Quem vai construir: ferramenta sem programação, parceria ou empresa contratada?
- [ ] A divisão das 18 ruas em 3 quarteirões confere com a da administração do Núcleo?
- [ ] Quem cuida dos dados pessoais (encarregado da LGPD)?
- [ ] Quais os dias reais de cada coleta seletiva no Núcleo?
- [ ] Qual é o telefone oficial para dúvidas que entra no modelo de SMS?

Consolidadas com as dos outros documentos em [`docs/perguntas-em-aberto.md`](../perguntas-em-aberto.md).
