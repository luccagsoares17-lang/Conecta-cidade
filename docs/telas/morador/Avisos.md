# Avisos · gestor — `Avisos.dc.html`

| Campo | Valor |
| --- | --- |
| App | Conecta Cidade (morador) |
| Página do canvas | Primeira página (`morador`, "Conecta Cidade"). O board não tem a chave `page` no `canvas.json`. |
| Nome na lista "Telas da versão 1" dos requisitos | Avisos |
| Versão | V1 (com o atalho "Ver no mapa", que leva a Energia, de Fase 2) |
| Perfil que vê | Gestor da casa (título do board); adultos também chegam pelo Início. O jovem tem uma tela própria, `JovemAvisos.dc.html` ("Avisos · jovem"). |
| Protótipo | [`design/prototipo/Avisos.dc.html`](../../../design/prototipo/Avisos.dc.html) |
| Tamanho | 390×844 |

## Para que serve
"Lista por urgência; tocar abre o que fazer e o contato" (requisitos, "Telas da versão 1"). Os avisos oficiais "saem direto da administração do Núcleo para o celular dos moradores" (Conecta Cidade, "Avisos do Núcleo").

## Conteúdo da tela (de cima para baixo)
1. **Cabeçalho** (fixo): botão de voltar (`aria-label="Voltar para o início"`), título "Avisos" e subtítulo "Direto da administração do Núcleo".
2. **Filtro de nível**: chips "Todos", "Urgente", "Importante", "Informativo".
3. **Filtro de formato**: chips "Todos os formatos", "Texto", "Imagem" (em tons de roxo).
4. Área que rola, com:
   - **Faixa azul**: "**Alertas por SMS:** os avisos importantes e urgentes também chegam por SMS no celular cadastrado."
   - **Lista de avisos**. Cada card é um botão que abre e fecha e mostra: etiqueta do nível (Urgente em vermelho, Importante em amarelo, Informativo em verde), categoria, etiqueta de formato ("Texto" ou "Imagem"), título e linha de quando e onde.
   - Nos avisos em imagem, acima do card fica uma miniatura do comunicado com o selo "Toque para abrir" (`aria-label="Abrir o comunicado em imagem"`).
   - **Aviso aberto** mostra: "**O que fazer:** <texto>", "Dúvidas: (94) 0000-0000 – Administração do Núcleo" e o selo "Aviso oficial".
5. **Visualizador de comunicado em imagem** (tela cheia, fundo escuro):
   - Botão de fechar (`aria-label="Fechar o comunicado"`), título "Comunicado em imagem", subtítulo "Use + e − para ampliar", botões "−" (`aria-label="Diminuir"`) e "+" (`aria-label="Aumentar"`).
   - A imagem (SVG) diz: "COMUNICADO OFICIAL · CARAJÁS", "Desligamento programado de energia", "QUINTA-FEIRA · 12/11", "das 8h às 12h", "Onde: só no quarteirão 1", um minimapa com as ruas Acará, Amazonas, Araguaia, Arapiuns, Caeté e Grajaú (Araguaia e Arapiuns em destaque amarelo), "O que fazer: tire os aparelhos da tomada e carregue o celular antes das 8h." e o rodapé "Administração do Núcleo · SECOM 0800-2850-193".
   - Rodapé com "Ver no mapa" (link) e "Lembrar na véspera" (vira "Lembrete ativado ✓").

Não há barra de navegação inferior.

## Comportamento (script `Component`)
- **Estado inicial**: `{ lvl: 'Todos', fmt: 'Todos', open: 'energia', viewer: false, spot: 0, zoom: 1, remind: false }`. A tela abre com o aviso "Falta de energia na Rua Juruá" aberto. `spot` não é usado.
- **Avisos de exemplo** (na ordem do script, que é a ordem da lista):
  | id | Formato | Nível | Categoria | Título | Quando e onde | O que fazer |
  | --- | --- | --- | --- | --- | --- | --- |
  | energia | Texto | Urgente | Falta de energia | Falta de energia na Rua Juruá | Agora · Rua Juruá, quarteirão 2 · previsão de volta: 16h | Tire os aparelhos da tomada. A equipe de rede elétrica já está a caminho. |
  | luz | Imagem | Importante | Falta de luz | Comunicado: desligamento programado | Quinta, 12/11, das 8h às 12h · Ruas Araguaia e Arapiuns | Abra a imagem para ver o comunicado completo. Tire aparelhos da tomada e carregue o celular antes das 8h. |
  | estrada | Texto | Urgente | Segurança | Interdição de estrada | Hoje, até 18h · Estrada de acesso ao Núcleo, km 8 | Evite o trecho e use o caminho indicado. |
  | agua | Texto | Importante | Falta de água | Interrupção no fornecimento de água | Quinta-feira, 5/11, das 8h às 14h · Ruas Japurá, Jari e Juruá | Armazene água na quarta-feira à noite. |
  | obra | Texto | Importante | Obras | Obra na rua | 26/10 a 30/10 · Rua Mearim | Estacione em outra rua durante a obra. |
  | vacina | Texto | Informativo | Saúde | Campanha de vacinação | Terça, 3/11, das 8h às 16h · Posto de saúde | Leve o cartão de vacina. |
  | lixo | Texto | Informativo | Coleta de lixo | Coleta seletiva: lixo até as 10h | Segunda a sexta · cronograma no início do app | Deixe o lixo do lado de fora até as 10h da manhã, separado conforme o dia da coleta. |
- **Filtros**: a lista mostra os avisos do nível escolhido (ou todos) e do formato escolhido (ou todos). Os dois filtros valem ao mesmo tempo.
- **Abrir/fechar**: tocar num card abre o "O que fazer"; tocar de novo fecha. Só um fica aberto.
- **Visualizador**: tocar na miniatura abre o visualizador com zoom 1. "+" aumenta 0,2 (máximo 1,8) e "−" diminui 0,2 (mínimo 1); a largura da imagem é 358 px × zoom. O "x" fecha.
- **"Lembrar na véspera"**: alterna `remind` e muda o texto para "Lembrete ativado ✓". Não agenda nada de fato.
- O contato "(94) 0000-0000 – Administração do Núcleo" é o mesmo texto fixo em todos os avisos.

## Navegação
| Elemento | Leva para |
| --- | --- |
| Botão de voltar | `Main.dc.html` |
| "Ver no mapa" (no visualizador) | `Energia.dc.html` (Fase 2) |

Chegam a esta tela, a partir de `Main.dc.html`: o sino "Notificações", o atalho "Avisos" e o card "Água" de "Serviços da casa".

## Dados mostrados → registros do sistema
| Dado na tela | Registro |
| --- | --- |
| Nível (Urgente, Importante, Informativo) | Aviso (nível) |
| Categoria | Aviso (categoria) |
| Título | Aviso (o quê) |
| Linha de quando e onde | Aviso (quando, onde, ruas) |
| "O que fazer" | Aviso (o que fazer) |
| "Dúvidas: (94) 0000-0000 – Administração do Núcleo" | Aviso (contato) — no protótipo é o mesmo texto para todos |
| Selo "Aviso oficial" | Sem campo próprio; os requisitos dizem que a administração publica avisos "oficiais com selo" |
| Formato Texto/Imagem e a imagem do comunicado | **Sem registro**: o registro Aviso não tem formato nem imagem |
| "Lembrar na véspera" | **Sem registro** |
| Abrir o aviso | Entrega do aviso (visto) — o protótipo não mostra como o "visto" é registrado |

## Regras dos documentos que se aplicam
- Requisitos da versão 1, "Telas da versão 1": Avisos — "O jovem não vê os urgentes".
- Requisitos, "Perfis e permissões", regras 1 e 2: avisos urgentes sempre vão para os gestores; o jovem nunca vê avisos urgentes no app.
- Requisitos, "SMS e WhatsApp": SMS "Obrigatório nos níveis urgente, importante e informativo; vai para o celular do cadastro". Notificação do app: "Urgente toca o celular; os outros chegam em silêncio".
- Requisitos, "SMS e WhatsApp", regras de envio: urgente em até 2 minutos para todos os gestores das ruas escolhidas; "Reenviar para quem não viu" manda SMS só para quem ainda não abriu o aviso no app.
- Requisitos, "Dados que o sistema guarda": Aviso (tipo, público, nível, categoria, o quê, quando, onde, o que fazer, contato, ruas, canais, situação, data de envio, quem publicou); Entrega do aviso (aviso, casa, canal, enviado, visto).
- Requisitos, "Fase 2 e perguntas em aberto": "Qual é o telefone oficial para dúvidas que entra no modelo de SMS?" ainda está em aberto.
- Conecta Cidade, "Avisos do Núcleo": selo de "oficial"; categorias "obras, falta de água, coleta de lixo, segurança e mudanças de horário"; "Histórico de avisos para quem perdeu algum".
- Plano de Comunicação, "Modelo padrão de aviso": o quê, quando, onde, o que fazer e "sempre um contato para dúvidas".

## Divergências entre protótipo e documentos
1. **SMS por nível**: a faixa diz que só "os avisos importantes e urgentes" chegam por SMS. Os requisitos dizem que o SMS é obrigatório também no nível informativo. O Plano de Comunicação ("Os canais") diz "Somente avisos urgentes" para o SMS em massa. Os três textos não batem.
2. **Lista não está em ordem de urgência**: os requisitos dizem "Lista por urgência". No protótipo a ordem é a do script (Urgente, Importante, Urgente, Importante, Importante, Informativo, Informativo); o nível só serve de filtro.
3. **Formato Texto/Imagem e visualizador de imagem**: o filtro de formato, a miniatura, o visualizador com zoom e o comunicado em imagem não estão nos documentos, e o registro Aviso não tem campo para formato ou imagem.
4. **"Ver no mapa" e "Lembrar na véspera"**: o primeiro leva a `Energia.dc.html` (Fase 2). O lembrete na véspera vem do documento de energia ("o app lembra os moradores na véspera") e não está nos requisitos da V1.
5. **Categorias**: a tela usa "Falta de energia", "Falta de luz" e "Saúde". O documento Conecta Cidade lista "obras, falta de água, coleta de lixo, segurança e mudanças de horário"; o formulário `AdminPublicar.dc.html` oferece "Obras", "Falta de água", "Falta de luz", "Coleta de lixo", "Segurança" e "Horários". "Falta de energia" e "Saúde" não estão em nenhuma das duas listas.
6. **Avisos de energia dependem de dados de Fase 2**: o aviso urgente traz "previsão de volta: 16h" e "A equipe de rede elétrica já está a caminho", que são conteúdo da área de energia (Fase 2).
7. **Contato igual para todos e em aberto**: todos os avisos mostram "(94) 0000-0000 – Administração do Núcleo", o número de exemplo do modelo de SMS, que os requisitos ainda listam como pergunta em aberto. O comunicado em imagem usa outro contato ("SECOM 0800-2850-193").
8. **Ruas do comunicado em imagem**: o texto do card diz "Ruas Araguaia e Arapiuns"; a imagem diz "Onde: só no quarteirão 1" e desenha as seis ruas do quarteirão, com Araguaia e Arapiuns em destaque.

## Notas para implementação
- Esta é a versão do gestor, que mostra os urgentes. Para o jovem, a tela é `JovemAvisos.dc.html`, onde vale a regra "O jovem não vê os urgentes".
- O selo "Aviso oficial" só aparece com o aviso aberto.
- O aviso de coleta remete ao "cronograma no início do app", que é o card "Coleta seletiva" de `Main.dc.html`.
- Os avisos, o contato e a imagem são dados de exemplo do protótipo.
- Os requisitos registram o "visto" de cada aviso (para a tela de Alcance e para "Reenviar para quem não viu"); o protótipo não mostra em que momento o aviso conta como visto.
