# Análise · "Desapego Carajás: venda de coisas usadas no Conecta Cidade"

Fonte: [`docs/fontes/Desapego Carajás venda de coisas usadas no Conecta Cidade.md`](<../fontes/Desapego Carajás venda de coisas usadas no Conecta Cidade.md>) · 20/10/2026 · @Felipe Entre Fases

## Papel no projeto

Documento de **área**: detalha o Desapego. Está na V1. As regras de permissão e os campos obrigatórios vêm dos requisitos.

## O que o documento define

**Por que existe**: quem é transferido precisa vender rápido; quem chega precisa montar a casa.

**Fluxo (5 passos)**
1. O morador tira uma foto do objeto.
2. Escolhe a categoria, escreve descrição curta e coloca preço (ou marca como doação).
3. O anúncio aparece para todos os moradores do Núcleo.
4. Quem se interessa chama o vendedor pela conversa do app.
5. Combinam a entrega, e o vendedor marca como vendido.

**Funcionalidades**
- Categorias: móveis, eletrônicos, roupas, livros, esportes.
- Selo "mudança", com filtro só desses anúncios para quem chega.
- Conversa no app sem passar telefone.
- Item vendido sai da lista.

**Doações**: para moradores ou ONGs de Parauapebas, como a Via Autismo (continuação das 33 cestas básicas de 2026).

**Impacto**: aproxima quem chega de quem já mora (78% da escuta); responde ao desafio 1.

## Regras que vêm dos requisitos da V1 (e completam este documento)

- Desapego **não tem aprovação**: o anúncio aparece na hora para todos os moradores (regra de permissão 3).
- Foto, título e preço (ou doação) são **obrigatórios**.
- O **jovem** só usa o Desapego se o gestor liberar (permissão "Desapego" ligada/desligada).
- O telefone do autor **nunca aparece**.
- Registro "Anúncio do Desapego": autor, foto, título, categoria, preço ou doação, descrição, selo de mudança, situação (ativo, vendido), conversas.
- Critério de aceite: o anúncio aparece para os vizinhos logo depois de publicado; o gestor liga e desliga o Desapego do jovem e o app muda na hora.

## Diferenças e pontos de atenção

- O documento fala em "título" só implicitamente (descrição curta); os requisitos exigem **título** como campo próprio.
- Pergunta aberta do documento — "quem vai cuidar dos anúncios para evitar problemas" — foi respondida pelos requisitos com **"sem aprovação"**; a moderação depois da publicação não está definida.
- No protótipo, a tela de Aprovações do organizador tem dados de exemplo de Desapego no script, embora só a aba Eventos seja exibida. Isso não muda a regra: Desapego não passa por aprovação (ver [conflitos](../decisoes/conflitos-entre-fontes.md)).

## Perguntas em aberto

- Quem cuida dos anúncios para evitar problemas? → Respondida em parte (sem aprovação); moderação posterior continua sem dono.
- O Desapego começa com teste só com o Comitê Jovem? → Respondida: piloto com os 49 jovens e famílias.
