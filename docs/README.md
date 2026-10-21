# Documentação do Meu Carajás Super App

O app se chamava **Conecta Cidade**; desde 21/10/2026 os nomes são **Meu Carajás Super App** (moradores) e **Meu Carajás Organizadores** (quem publica). Os documentos-fonte em `fontes/` e as análises em `analise/` usam o nome antigo, porque são do material original.

## Estrutura

| Pasta | O que tem | Pode editar? |
| --- | --- | --- |
| [`fontes/`](fontes/) | Os 7 documentos originais, exatamente como vieram | Não |
| [`analise/`](analise/) | Uma análise por documento-fonte: papel, o que define, o que entra na V1, diferenças, perguntas | Sim, quando a fonte muda |
| [`produto/`](produto/) | Especificação viva da V1 por tema | Sim, com fonte citada |
| [`design/`](design/) | Identidade visual tirada do protótipo | Sim, quando o protótipo muda |
| [`telas/`](telas/README.md) | Inventário e uma ficha por tela do protótipo | Sim, quando o protótipo muda |
| [`decisoes/`](decisoes/) | Conflitos entre fontes e decisões tomadas | Sim, só acrescentando |
| [`perguntas-em-aberto.md`](perguntas-em-aberto.md) | Todas as perguntas sem resposta | Sim |

## Documentos-fonte e suas análises

| # | Documento-fonte | Tipo | Análise |
| --- | --- | --- | --- |
| 1 | [`contexto-entre-fases.txt`](fontes/contexto-entre-fases.txt) | Contexto | [01](analise/01-contexto-entre-fases.md) |
| 2 | [Conecta Cidade: o aplicativo do Núcleo de Carajás](<fontes/Conecta Cidade o aplicativo do Núcleo de Carajás.md>) | Visão de produto | [02](analise/02-visao-geral-do-app.md) |
| 3 | [Conecta Cidade: requisitos da versão 1](<fontes/Conecta Cidade requisitos da versão 1.md>) | **Requisitos (principal)** | [03](analise/03-requisitos-v1.md) |
| 4 | [Desapego Carajás](<fontes/Desapego Carajás venda de coisas usadas no Conecta Cidade.md>) | Área (V1) | [04](analise/04-desapego.md) |
| 5 | [Eventos no Conecta Cidade](<fontes/Eventos no Conecta Cidade conectando todo mundo de Carajás.md>) | Área (V1 parcial) | [05](analise/05-eventos.md) |
| 6 | [Falta de energia no Núcleo](<fontes/Falta de energia no Núcleo avisos na palma da mão.md>) | Área (Fase 2) | [06](analise/06-energia.md) |
| 7 | [Plano de Comunicação do Núcleo Urbano de Carajás](<fontes/Plano de Comunicação do Núcleo Urbano de Carajás.md>) | Comunicação do Núcleo | [07](analise/07-plano-de-comunicacao.md) |

Mais o protótipo, em [`../design/prototipo/`](../design/README.md).

## Ordem de precedência das fontes

Quando duas fontes dizem coisas diferentes:

1. **Requisitos da V1** — escopo, regras, telas, dados e canais da V1. É o único documento que se declara requisito e que aponta o protótipo como referência.
2. **Protótipo** — referência visual e de texto. Se mostrar algo que contradiz os requisitos, vale a regra dos requisitos.
3. **Documentos de área** (Desapego, Eventos, Energia) — o que eles têm a mais é visão de produto, não escopo da V1.
4. **Visão geral do app.**
5. **Plano de Comunicação** — vale para a comunicação do Núcleo fora do app.
6. **Contexto Entre Fases** — números e histórico.

Todos os documentos têm a mesma data (20/10/2026) e o mesmo autor (@Felipe Entre Fases); a ordem segue o nível de detalhe e o fato de os requisitos citarem os outros (ex.: "modelo padrão do SMS, igual ao do Plano de Comunicação"). Esta ordem é uma proposta de trabalho e deve ser confirmada pelo time — ver [`decisoes/conflitos-entre-fontes.md`](decisoes/conflitos-entre-fontes.md).

## Produto (especificação viva)

- [Escopo V1 × Fase 2](produto/escopo.md)
- [Perfis e permissões](produto/perfis-e-permissoes.md)
- [Fluxos principais](produto/fluxos.md)
- [Modelo de dados](produto/modelo-de-dados.md)
- [Canais: notificação, SMS e WhatsApp](produto/canais-de-comunicacao.md)
- [Requisitos gerais, piloto e aceite](produto/requisitos-gerais-e-piloto.md)
- [Identidade visual](design/identidade-visual.md)
