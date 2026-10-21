# Desapego · gestor — `Desapego.dc.html`

| Campo | Valor |
| --- | --- |
| App | Conecta Cidade (morador) |
| Página do canvas | Primeira página (`morador`, "Conecta Cidade"). O board não tem a chave `page` no `canvas.json`. |
| Nome na lista "Telas da versão 1" dos requisitos | Desapego |
| Versão | V1 |
| Perfil que vê | Gestor da casa (título do board); adultos também chegam pelo Início. O jovem só usa o Desapego se o gestor liberar (requisitos, "Perfis e permissões"). |
| Protótipo | [`design/prototipo/Desapego.dc.html`](../../../design/prototipo/Desapego.dc.html) |
| Tamanho | 390×844 |

## Para que serve
"Lista com filtro, selo de mudança e formulário de anúncio" (requisitos, "Telas da versão 1"). É "a área do aplicativo Conecta Cidade onde os moradores do Núcleo Urbano de Carajás anunciam, vendem e doam o que não usam mais" (Desapego Carajás, "O que é o Desapego Carajás").

## Conteúdo da tela (de cima para baixo)
1. **Cabeçalho** (fixo): botão de voltar (`aria-label="Voltar para o início"`), título "Desapego" e subtítulo "Vender, comprar e doar entre vizinhos".
2. **Filtro de categoria** (rola na horizontal): "Todos", "Móveis", "Eletrônicos", "Roupas", "Livros", "Esportes".
3. **Interruptor "Mudança"** · "Só de quem está indo embora".
4. Área que rola, com:
   - **Aviso de publicação** (só depois de publicar): "Anúncio publicado!" · "Ele já aparece para todos os vizinhos do Núcleo. Quando vender, marque como vendido."
   - **Card de ranking**: título "Ranking · Top 10 vendedores" ou "Ranking · Top 10 vendas", subtítulo "Quem mais vende e o que mais sai no Desapego", abas "Vendedores" e "Mais vendidos", três linhas (posição com medalha, inicial, nome, detalhe, estrelas e nota ou contagem) e botão "Ver o top 10 completo" (vira "Mostrar só o top 3").
   - **Lista de anúncios**. Cada card tem: ilustração do objeto sobre fundo da cor da categoria; etiquetas "Mudança", "Em análise" e "Doação" (quando se aplicam); título; categoria; preço (ou "Grátis"); contagem de comentários ("N comentários", "1 comentário" ou "Sem comentários ainda"); e botão de balão (`aria-label="Ver comentários do anúncio"`).
   - **Comentários abertos** (no card escolhido): para cada comentário, inicial, nome, etiqueta "Anunciante" quando é o vendedor, tempo e texto. Abaixo, campo de texto (`aria-label="Escrever um comentário"`, placeholder "Pergunte ou faça uma oferta"), botão "Enviar" e a nota "Endereço e telefone só por mensagem privada no app."
   - Lista vazia: "Nenhum anúncio nessa categoria ainda."
5. **Botão flutuante "Anunciar"** (laranja, canto inferior direito).
6. **Folha "Novo anúncio"** (abre por cima da tela, com fundo escurecido):
   - Título "Novo anúncio" e botão de fechar (`aria-label="Fechar"`).
   - Área de foto: "Adicionar fotos" (vira "Foto adicionada · toque para trocar").
   - Campo "O que você está anunciando" (`type="text"`, placeholder "Ex.: Geladeira duplex").
   - "Categoria": chips "Móveis", "Eletrônicos", "Roupas", "Livros", "Esportes".
   - "Você quer": chips "Vender" e "Doar".
   - Com "Vender": campo "Preço (R$)" (`type="text"`, `inputmode="numeric"`, placeholder "Ex.: 800").
   - Com "Doar": "Doações podem ir para vizinhos ou para ONGs de Parauapebas, como a Via Autismo."
   - Campo "Descrição curta" (`type="text"`, placeholder "Estado, tamanho, retirada…").
   - Interruptor "Estou de mudança" · "Coloca o selo para quem chegou achar mais rápido".
   - Nota: "O anúncio aparece na hora para os vizinhos. A conversa acontece no app, sem mostrar seu telefone."
   - Linha do que falta ("Falta: …").
   - Botão "Publicar anúncio".

Não há barra de navegação inferior.

## Comportamento (script `Component`)
- **Estado inicial**: `{ openC: 'Geladeira duplex', draft: '', added: {}, cat: 'Todos', onlyMove: false, form: false, mine: [], toast: false, fTitle: '', fCat: 'Móveis', fKind: 'Vender', fPrice: '', fMove: false, fPhoto: false }`. A tela abre com os comentários da "Geladeira duplex" visíveis.
- **Anúncios de exemplo** (título · categoria · preço · mudança · doação · anunciante):
  | Título | Categoria | Preço | Mudança | Doação | Anunciante |
  | --- | --- | --- | --- | --- | --- |
  | Sofá de 3 lugares | Móveis | R$ 600 | Sim | Não | Rafael Moura |
  | Geladeira duplex | Eletrônicos | R$ 1.200 | Sim | Não | Carla Mendes |
  | Mesa com 4 cadeiras | Móveis | R$ 450 | Sim | Não | Bruno Santos |
  | Smart TV 43 polegadas | Eletrônicos | R$ 900 | Sim | Não | Marcos Pereira |
  | Guarda-roupa 4 portas | Móveis | R$ 550 | Sim | Não | Helena Castro |
  | Micro-ondas 20 litros | Eletrônicos | R$ 250 | Sim | Não | Gustavo Pires |
  | Bicicleta aro 26 | Esportes | R$ 300 | Não | Não | Sandra Melo |
  | Chuteira tamanho 38 | Esportes | R$ 60 | Não | Não | José Ferreira |
  | Livros para o vestibular | Livros | Grátis | Não | Sim | Carlos Nogueira |
  | Ventilador de coluna | Eletrônicos | R$ 80 | Não | Não | Fernanda Dias |
  | Jaqueta jeans tamanho M | Roupas | R$ 70 | Não | Não | Juliana Costa |
  | Roupas infantis | Roupas | Grátis | Não | Sim | Pedro Lima |
- **Comentários de exemplo** (`COMMENTS`): de 1 a 3 por anúncio, com nome de quem pergunta e respostas do anunciante (marcadas com `"*"`, mostradas com o nome do anunciante e a etiqueta "Anunciante"). Exemplos: "Faz por R$ 500? Busco hoje mesmo."; "Fica na Rua Jari, quarteirão 2. Te mandei o número da casa por mensagem."; "Vocês desmontam para levar? Moro na Rua Purus."
- **Filtros**: a lista junta os anúncios novos (`mine`) no topo e os de exemplo depois; mostra só os da categoria escolhida (ou todos) e, com o interruptor "Mudança" ligado, só os que têm selo de mudança.
- **Comentários**: o botão de balão abre e fecha os comentários daquele card (só um aberto por vez) e limpa o rascunho. "Enviar" ignora texto vazio; senão acrescenta o comentário como "Lucca Ribeiro (você)", "agora", só no estado da tela.
- **Ranking** (dados fixos `RK`):
  - "Vendedores": 10 nomes com detalhe, nota e número de avaliações (ex.: "Rafael Moura" · "38 vendas · responde rápido" · 4,9 · 64 avaliações; "Helena Castro" · "29 vendas · selo mudança"; "Sandra Melo" · "17 vendas · doa muito").
  - "Mais vendidos": 10 tipos de item com categoria e contagem (ex.: "Geladeiras" · "Eletrônicos" · 14 vendas; "Livros de vestibular" · "Livros · doação" · 8 doações).
  - A aba padrão é "Vendedores"; mostra 3 linhas, ou 10 com "Ver o top 10 completo". Estrelas cheias = nota arredondada; a nota aparece com vírgula (ex.: "4,9 · 64 avaliações").
- **Formulário**:
  - "Anunciar" abre a folha e esconde o aviso de publicação; o "x" fecha.
  - A área de foto é um botão que liga e desliga `fPhoto` (simula a foto; não há envio de arquivo).
  - O preço aceita só números (o script remove o resto).
  - "Descrição curta" não está ligada ao estado: o texto não é guardado nem aparece no card.
  - **Validação**: falta "foto" se não houver foto; falta "o que é" se o título estiver vazio; falta "preço" se for "Vender" sem preço. A linha mostra "Falta: foto, o que é, preço" (só os que faltam), e o botão fica cinza e não faz nada até tudo estar preenchido.
  - **"Publicar anúncio"**: cria o anúncio no topo da lista (preço "R$ <valor>" ou "Grátis" para doação, selo de mudança conforme o interruptor), fecha a folha, mostra "Anúncio publicado!", volta os filtros para "Todos" e sem mudança e limpa o formulário. O novo anúncio usa a ilustração genérica e mostra "Sem comentários ainda".
- **"Em análise"**: o markup tem a etiqueta, mas `pending` é sempre `false` (inclusive no anúncio publicado), então ela nunca aparece.

## Navegação
| Elemento | Leva para |
| --- | --- |
| Botão de voltar | `Main.dc.html` |

Chegam a esta tela, a partir de `Main.dc.html`: o atalho "Desapego" e o item "Desapego" da barra. `GestorMinhaFamilia.dc.html` (fora do canvas) também tem esse item na barra.

## Dados mostrados → registros do sistema
| Dado na tela | Registro |
| --- | --- |
| Foto (simulada) | Anúncio do Desapego (foto) |
| Título | Anúncio do Desapego (título) |
| Categoria | Anúncio do Desapego (categoria) |
| Preço ou "Grátis"/"Doação" | Anúncio do Desapego (preço ou doação) |
| Descrição curta (no formulário) | Anúncio do Desapego (descrição) |
| Etiqueta "Mudança" e filtro | Anúncio do Desapego (selo de mudança) |
| Nome do anunciante (nos comentários) | Anúncio do Desapego (autor) |
| Comentários | Anúncio do Desapego (conversas) — no protótipo são públicos |
| "Em análise" | **Sem registro**: a situação do anúncio só prevê ativo e vendido |
| Ranking: vendas por vendedor, nota, avaliações, mais vendidos | **Sem registro correspondente** |

## Regras dos documentos que se aplicam
- Requisitos da versão 1, "Telas da versão 1": Desapego — "Publica na hora; foto, título e preço (ou doação) são obrigatórios; conversa no app sem mostrar o telefone".
- Requisitos, "Perfis e permissões", regra 3: "Desapego não tem aprovação: o anúncio aparece na hora para todos os moradores". O jovem só usa o Desapego se o gestor liberar.
- Requisitos, "Dados que o sistema guarda": Anúncio do Desapego — "telefone do autor nunca aparece"; situação "ativo, vendido".
- Requisitos, "Piloto: aceite e métricas": "Um anúncio do Desapego aparece para os vizinhos logo depois de publicado".
- Desapego Carajás, "Como funciona": "Quem se interessa chama o vendedor pela conversa do app"; "o vendedor marca o item como vendido".
- Desapego Carajás, "Funcionalidades": categorias "móveis, eletrônicos, roupas, livros e esportes"; selo "mudança" com filtro para quem chega; "Conversa no app: comprador e vendedor conversam sem precisar passar o número de telefone"; "o anúncio sai da lista quando o vendedor marca que vendeu".
- Desapego Carajás, "Doações": doações podem ir para outros moradores ou para ONGs de Parauapebas, como a Via Autismo.

## Divergências entre protótipo e documentos
1. **Comentários públicos em vez de conversa entre comprador e vendedor**: o protótipo mostra perguntas e ofertas abertas a todos no card. Os documentos falam em "conversa no app" entre comprador e vendedor. A "mensagem privada no app", citada na nota, não aparece em nenhuma tela.
2. **Comentários expõem localização**: exemplos como "Fica na Rua Jari, quarteirão 2" e "Moro na Rua Purus" aparecem para todos, enquanto a própria tela diz "Endereço e telefone só por mensagem privada no app."
3. **Sem "marcar como vendido"**: o aviso de publicação diz "Quando vender, marque como vendido", mas a tela não tem essa ação, e nenhum anúncio aparece como vendido. Os documentos dizem que o anúncio vendido sai da lista.
4. **Etiqueta "Em análise"**: existe no markup (nunca ativa), o que sugere uma análise antes de publicar. Os requisitos dizem que o Desapego não tem aprovação, e o registro não prevê essa situação.
5. **Ranking com notas e avaliações**: "Top 10 vendedores" (estrelas, número de avaliações, número de vendas) e "Top 10 vendas" não estão em nenhum documento nem nos registros de dados.
6. **Descrição não guardada**: o campo "Descrição curta" não é salvo nem aparece no card, mas faz parte do registro Anúncio do Desapego e do fluxo do documento ("escreve uma descrição curta").
7. **Autor só aparece nos comentários**: o card do anúncio não mostra o autor; o nome só aparece quando ele responde um comentário.
8. **"Adicionar fotos" no plural**: o registro tem "foto" no singular.

## Notas para implementação
- A obrigatoriedade de foto, título e preço (quando "Vender") está no protótipo e nos requisitos; doação dispensa preço e aparece como "Grátis".
- A etiqueta "Em análise" nunca aparece no protótipo e contradiz a regra "Desapego não tem aprovação".
- A forma da conversa (pública ou entre os dois) precisa de decisão: o protótipo e os documentos divergem (divergências 1 e 2).
- O ranking e os anúncios são dados de exemplo; não há registro para notas e avaliações.
- A foto é simulada por um interruptor no protótipo.
