# Publicar — `AdminPublicar.dc.html`

| Campo | Valor |
| --- | --- |
| App | Conecta Cidade Organizadores |
| Página do canvas | `organizador` |
| Nome na lista "Telas da versão 1" dos requisitos | Publicar |
| Versão | V1 com partes ocultas até a Fase 2 |
| Perfil que vê | Administração do Núcleo (avisos oficiais, eventos e Guia) / Organizador de eventos (eventos) / Comitê Jovem (eventos dos jovens) |
| Protótipo | [`design/prototipo/AdminPublicar.dc.html`](../../../design/prototipo/AdminPublicar.dc.html) |
| Tamanho | 390×844 |

## Para que serve
Formulário único para lançar informação no app dos moradores. Pelos requisitos, a tela tem tipo, para quem, nível, categoria, o quê, quando, onde, o que fazer, canais e agendamento, com "Prévia ao vivo; canais obrigatórios conforme o nível; rascunho e publicação agendada". É onde acontece o fluxo "Publicar um aviso (organizador)".

## Conteúdo da tela (de cima para baixo)
O cabeçalho e a barra inferior ficam fixos e o meio da tela rola. Os blocos marcados com "(só tipo X)" aparecem apenas quando aquele tipo está escolhido.

1. **Cabeçalho**
   - Rótulo "Organizador".
   - Título "Publicar".
   - Subtítulo "Escolha o que vai lançar no app dos moradores".
2. **Tipo**: chips de escolha única "Aviso", "Evento", "Energia", "Guia", "Trilha". Começa em "Aviso".
3. **Card "Para quem"**: chips "Todos os moradores", "Só gestores da casa", "Só jovens" e, abaixo, uma dica que muda com a escolha. Aparece para todos os tipos.
4. **(só tipo Aviso) Card do aviso**
   - "Nível de urgência": chips "Urgente", "Importante", "Informativo".
   - "Categoria": chips "Obras", "Falta de água", "Falta de luz", "Coleta de lixo", "Segurança", "Horários".
   - "Formato do aviso": dois cartões, "Texto" ("O quê, quando, onde e o que fazer") e "Imagem" ("O cartaz do comunicado").
   - (só formato Imagem) Área tracejada "Adicionar a imagem do comunicado". Depois de tocar, vira "Imagem adicionada · toque para trocar". Abaixo, a nota: "O SMS sai com o texto abaixo e um link para abrir a imagem no app."
   - Campos do aviso:

     | Rótulo | Tipo | Placeholder |
     | --- | --- | --- |
     | "O quê" | texto | "Ex.: Interrupção no fornecimento de água" |
     | "Quando" | texto | "Ex.: Quinta-feira, 5/11, das 8h às 14h" |
     | "Onde" | texto | "Ex.: Ruas Japurá, Jari e Juruá" |
     | "O que fazer" | área de texto | "Ex.: Armazene água na quarta-feira à noite" |

5. **(só tipo Aviso) "Como o morador vai ver"** (prévia em card tracejado)
   - Selo do nível, com a cor do nível.
   - Categoria.
   - Selo "✓ Oficial".
   - Título (o quê).
   - Linha "quando · onde".
   - "O que fazer: …".
   - Linha de toque e público.
6. **(só tipo Aviso) Card "Publicar também em"**
   - Chips de canal: "SMS", "Murais", "Redes sociais", "Carro de som", "Escolas", "Representantes".
   - Dica "Obrigatórios para <nível>: …".
   - Faixa azul: "Comunicados e alertas saem por SMS para o celular de cada casa. O WhatsApp é usado só para o cadastro dos moradores."
   - Botão "Copiar texto para SMS e murais" / "Texto copiado ✓", que mostra o texto padrão em fonte monoespaçada.
7. **(só tipo Evento) Card do evento**
   - Campos:

     | Rótulo | Tipo | Placeholder |
     | --- | --- | --- |
     | "Nome do evento" | texto | "Ex.: CineFases" |
     | "Data e hora" | texto | "Ex.: sábado, 19h" |
     | "Local" | texto | "Ex.: Clube do Núcleo" |
     | "Limite de vagas" | texto | "Deixe vazio se não tiver limite" |

   - "Interesse": chips "Cinema", "Culinária", "Videogame", "Vôlei", "Futebol", "Outro".
   - Chave "Ingresso solidário" / "1 kg de alimento por pessoa".
8. **(só tipo Energia) Card de energia**
   - "Tipo": chips "Queda agora", "Desligamento programado".
   - "Ruas afetadas": 18 chips de seleção múltipla, nesta ordem: Acará, Amazonas, Araguaia, Arapiuns, Caeté, Grajaú, Guamá, Iriri, Iguara, Itacaiúnas, Japurá, Jari, Juruá, Mearim, Paru, Purus, Solimões, Tapajós.
   - Campo "Previsão de volta ou data do desligamento" (placeholder "Ex.: hoje, até 16h").
   - Nota "Só os gestores das casas nas ruas marcadas recebem a notificação."
9. **(só tipo Guia) Card do Guia**
   - "Onde fica": chips "Núcleo", "Parauapebas".
   - Campos:

     | Rótulo | Placeholder |
     | --- | --- |
     | "Nome do serviço ou oportunidade" | "Ex.: Posto de saúde" |
     | "Endereço" | "Rua, número" |
     | "Telefone" | "(94) 0000-0000" |
     | "Horário de funcionamento" | "Ex.: seg a sex, 7h às 17h" |

10. **(só tipo Trilha) Card da trilha**
    - "Nome da trilha" (placeholder "Ex.: Trilha da cachoeira").
    - "Dificuldade": chips "Fácil", "Média", "Difícil".
    - "Distância e tempo" (placeholder "Ex.: 4 km · 2 horas").
    - "Ponto de saída" (placeholder "Ex.: portaria do Núcleo").
    - Link "Marcar as datas de saída no calendário".
11. **Card "Quando publicar"**: chips "Agora", "Agendar". Com "Agendar", aparece o campo "Data e hora da publicação" (placeholder "Ex.: quarta, 5/11, 18h"). Aparece para todos os tipos.
12. **Mensagem de confirmação** (faixa verde com ✓), só depois de tocar num dos botões abaixo.
13. **Botões**: "Salvar rascunho" e "Publicar agora" (vira "Agendar" quando "Agendar" está escolhido).
14. **Barra de navegação inferior**: "Painel", "Publicar" (ativo), "Energia", "Aprovar", "Equipe".

## Comportamento (script `Component`)
- **Estado inicial:**
  ```js
  { fmt: 'Texto', img: false, type: 'Aviso', aud: 'Todos os moradores', level: 'Importante', cat: 'Falta de água', what: '', when: '', where: '', todo: '', extra: [], showText: false, evCat: 'Cinema', solid: false, enType: 'Queda agora', streets: [], place: 'Núcleo', diff: 'Fácil', whenPub: 'Agora', msg: '' }
  ```
- **Chips de escolha única** (tipo, para quem, nível, categoria, interesse, tipo de energia, onde fica, dificuldade, quando publicar): tocar muda o valor no estado e apaga a mensagem (`msg: ''`).
- **Dica do "Para quem"** (`audHints`):
  - "Todos os moradores" → "Gestores da casa e jovens recebem."
  - "Só gestores da casa" → "Só os responsáveis pelas casas recebem."
  - "Só jovens" → "Aparece no app dos jovens. Avisos urgentes vão sempre também para os gestores."
- **Canais obrigatórios por nível** (`required`):

  | Nível | Canais obrigatórios no protótipo |
  | --- | --- |
  | Urgente | SMS, Carro de som, Representantes |
  | Importante | SMS, Murais, Redes sociais |
  | Informativo | SMS, Murais, Redes sociais, Escolas |

  - Os canais obrigatórios ficam sempre marcados. Tocar neles não faz nada (`toggleChan` retorna sem mudar).
  - Os outros canais podem ser ligados e desligados e ficam em `extra`.
  - A dica mostra "Obrigatórios para <nível em minúsculas>: <lista>."
  - Não existe chip de WhatsApp.
- **Prévia ao vivo** (atualiza a cada tecla nos quatro campos do aviso):
  - Título = o quê, ou "O quê" quando vazio.
  - Linha = "quando · onde", ou "Quando · Onde" quando vazio.
  - "O que fazer:" = texto digitado, ou "...".
  - Cores do selo do nível:

    | Nível | Fundo | Texto |
    | --- | --- | --- |
    | Urgente | `#FBDCD6` | `#9B1C10` |
    | Importante | `#F8EDC9` | `#6B4D05` |
    | Informativo | `#DCEDE2` | `#17432F` |

  - Linha de toque: "Urgente: faz o celular tocar. " (nível Urgente) ou "Notificação silenciosa. " (outros níveis), seguida de "Para: <público em minúsculas>."
- **Texto padrão** (`stdText`), mostrado ao tocar "Copiar texto para SMS e murais". O rótulo vira "Texto copiado ✓". O botão só mostra ou esconde o texto; não há cópia de verdade no script.
  ```
  [<VERMELHO|AMARELO|VERDE>] AVISO OFICIAL – NÚCLEO URBANO DE CARAJÁS

  O QUÊ: <o quê ou ...>
  QUANDO: <quando ou ...>
  ONDE: <onde ou ...>
  O QUE FAZER: <o que fazer ou ...>
  DÚVIDAS: (94) 0000-0000 – Administração do Núcleo

  Repasse para seus vizinhos.
  ```
  A etiqueta sai do nível: Urgente → VERMELHO, Importante → AMARELO, Informativo → VERDE.
- **Formato Imagem:** tocar na área alterna `img`, o que muda o rótulo e a borda. Não há envio de arquivo.
- **Evento:** os campos de texto não têm `onInput`, então o que se digita não vai para o estado. A chave "Ingresso solidário" alterna `solid`, mudando a cor do trilho e a posição do botão.
- **Energia:** as ruas são de seleção múltipla (`toggleStreet`) e cada toque apaga a mensagem.
- **Guia e Trilha:** os campos de texto não têm `onInput`.
- **Agendamento:** com "Agendar", aparece o campo de data e hora e o botão principal passa a dizer "Agendar".
- **Mensagens:**

  | Ação | Mensagem |
  | --- | --- |
  | "Salvar rascunho" | "Rascunho salvo. Ele aparece no painel." |
  | "Publicar agora" | "Publicado! Já aparece no app dos moradores." |
  | "Agendar" | "Agendado! Sai no dia e hora marcados." |

- **Validação:** nenhuma. Dá para publicar com todos os campos vazios.

## Navegação
| Elemento | Leva para |
| --- | --- |
| Link "Marcar as datas de saída no calendário" (só tipo Trilha) | `AdminTrilhas.dc.html` (Fase 2) |
| Barra: Painel | `AdminInicio.dc.html` |
| Barra: Publicar | `AdminPublicar.dc.html` (esta tela) |
| Barra: Energia | `AdminEnergia.dc.html` (Fase 2) |
| Barra: Aprovar | `AdminAprovar.dc.html` |
| Barra: Equipe | `AdminEquipe.dc.html` |

## Dados mostrados → registros do sistema
| Campo na tela | Registro |
| --- | --- |
| Tipo "Aviso" | Aviso → tipo |
| Para quem | Aviso → público (todos, só gestores, só jovens) |
| Nível de urgência | Aviso → nível (urgente, importante, informativo) |
| Categoria | Aviso → categoria |
| O quê, Quando, Onde, O que fazer | Aviso → o quê, quando, onde, o que fazer |
| Publicar também em | Aviso → canais |
| Quando publicar / Data e hora da publicação | Aviso → data de envio; situação (agendado ou no ar) |
| Salvar rascunho | Aviso → situação "rascunho" |
| Selo "✓ Oficial" | Selo dos avisos oficiais da Administração (perfis da V1); **não há campo próprio** no registro Aviso |
| Formato do aviso (Texto/Imagem) e imagem do comunicado | **Sem registro correspondente** |
| "DÚVIDAS: (94) 0000-0000 – Administração do Núcleo" (fixo no texto) | Aviso → contato (o registro tem o campo, mas a tela não tem onde preencher) |
| Evento: Nome, Data e hora, Local, Limite de vagas, Interesse, Ingresso solidário | Evento → nome, data e hora, local, vagas, interesse, ingresso solidário |
| Para quem (no tipo Evento) | **Sem campo no registro Evento** |
| Energia: tipo, ruas afetadas, previsão de volta | **Sem registro correspondente** (Fase 2). As ruas vêm da tabela própria de ruas e quarteirões |
| Guia: onde fica, nome, endereço, telefone, horário | **Sem registro correspondente** (não há registro de Guia entre os 8) |
| Trilha: nome, dificuldade, distância e tempo, ponto de saída | **Sem registro correspondente** (Fase 2) |

## Regras dos documentos que se aplicam
- **Requisitos da V1 · Fluxos principais · Publicar um aviso (organizador):**
  1. Tipo Aviso e para quem (todos, só gestores ou só jovens).
  2. Nível e categoria; o quê, quando, onde e o que fazer.
  3. Prévia e canais obrigatórios do nível, "sempre com SMS".
  4. Publica na hora ou agenda; "o aviso aparece no app e sai por SMS".
  5. Acompanha o alcance e reenvia.
- **Requisitos da V1 · Telas da versão 1 · Publicar:** "Prévia ao vivo; canais obrigatórios conforme o nível; rascunho e publicação agendada".
- **Requisitos da V1 · Perfis e permissões:**
  - Administração "Publica avisos oficiais com selo, eventos e Guia".
  - Organizador de eventos "Publica eventos, que passam pela aprovação da administração".
  - Comitê Jovem "Publica eventos dos jovens".
  - Regra 1: "Avisos urgentes sempre vão para os gestores, mesmo quando o público escolhido for “só jovens”".
  - Regra 2: "O jovem nunca vê avisos urgentes no app".
  - Regra 4: um organizador só vê as áreas que o grupo dele pode publicar.
- **Requisitos da V1 · SMS e WhatsApp:**
  - Notificação do app: "Urgente toca o celular; os outros chegam em silêncio".
  - SMS: "Obrigatório nos níveis urgente, importante e informativo"; "texto no modelo padrão".
  - WhatsApp: "Só cadastro … nenhum aviso sai por ele".
  - Regras de envio 1 a 3: urgente em até 2 minutos para todos os gestores das ruas escolhidas; importante e informativo no horário agendado ou na hora; um SMS por número por aviso.
- **Requisitos da V1 · Modelo padrão do SMS** e **Plano de Comunicação · Modelo padrão de aviso:** formato "[COR] AVISO OFICIAL – NÚCLEO URBANO DE CARAJÁS / O QUÊ / QUANDO / ONDE / O QUE FAZER / DÚVIDAS".
- **Plano de Comunicação · Níveis de urgência:**
  - Vermelho: WhatsApp, SMS, carro de som, representantes de rua.
  - Amarelo: WhatsApp, grupos de rua, murais, redes sociais.
  - Verde: WhatsApp, murais, redes sociais, escolas.
  - "O nível vai escrito no início de cada aviso."
- **Plano de Comunicação · Modelo padrão de aviso · Regras de escrita:** frases curtas, sem siglas, data com dia da semana, sempre um contato para dúvidas.
- **Conecta Cidade: o aplicativo · Avisos do Núcleo:**
  - Categorias: "obras, falta de água, coleta de lixo, segurança e mudanças de horário".
  - "só os urgentes fazem o celular tocar".
- **Requisitos da V1 · Dados · Evento:** nome, organizador, data e hora, local, interesse, ingresso solidário, vagas, situação (esperando aprovação, publicado), confirmações.

## Divergências entre protótipo e documentos
- **SMS e WhatsApp: o protótipo segue os requisitos da V1, não o Plano de Comunicação.**
  - SMS é obrigatório nos três níveis, como dizem os requisitos. O Plano exige SMS "somente avisos urgentes" e só no nível Vermelho.
  - WhatsApp não aparece como canal, e a faixa diz que ele "é usado só para o cadastro". O Plano põe o WhatsApp como canal obrigatório em todos os níveis e como "a base do sistema".
- **Demais canais obrigatórios seguem o Plano de Comunicação, com cortes.**
  - Urgente: SMS, Carro de som, Representantes (o Plano tem ainda o WhatsApp).
  - Importante: SMS, Murais, Redes sociais (o Plano tem WhatsApp e "grupos de rua", e não tem SMS).
  - Informativo: SMS, Murais, Redes sociais, Escolas (o Plano tem WhatsApp e não tem SMS).
  - A tabela de canais dos requisitos da V1 só descreve Notificação do app, SMS e WhatsApp. Murais, redes sociais, carro de som, escolas e representantes não aparecem nela.
  - "Representantes" (de rua) é Fase 2 nos requisitos, mas é canal obrigatório do nível Urgente no protótipo.
- **Nomes e cores dos níveis:**
  - Os chips usam os nomes dos requisitos (Urgente, Importante, Informativo).
  - O texto padrão usa as cores do Plano: [VERMELHO], [AMARELO], [VERDE].
- **Texto padrão do SMS:** o protótipo segue o bloco do Plano de Comunicação, com linha em branco depois do cabeçalho e a frase final "Repasse para seus vizinhos.". O bloco dos requisitos da V1 não tem nenhuma das duas, embora diga ser "igual ao do Plano de Comunicação". O telefone "(94) 0000-0000" continua como pergunta em aberto nos requisitos.
- **Tipos de Fase 2 visíveis:** os tipos "Energia" e "Trilha", com seus cards e o link para AdminTrilhas. Também o item "Energia" na barra inferior.
- **Regra 2 (jovem nunca vê urgentes) não aparece na tela:**
  - Com "Só jovens", a dica diz "Aparece no app dos jovens…" mesmo com o nível Urgente.
  - Com "Todos os moradores", a dica diz "Gestores da casa e jovens recebem." sem exceção para urgentes.
  - A regra 1 aparece só em parte, no texto da dica de "Só jovens".
- **Adultos não aparecem na dica de "Todos os moradores"** ("Gestores da casa e jovens recebem."), embora o perfil Adulto da casa exista na V1.
- **Ruas do aviso:** a regra de envio 1 manda o SMS urgente "para todos os gestores das ruas escolhidas", e o registro Aviso tem o campo "ruas". O tipo Aviso, porém, não tem seleção de ruas (só o campo livre "Onde"). A seleção de ruas existe apenas no tipo Energia (Fase 2).
- **Contato:** o registro Aviso tem "contato", mas não há campo para ele. O texto padrão usa um "DÚVIDAS: (94) 0000-0000 – Administração do Núcleo" fixo.
- **Categoria "Falta de luz"** não está na lista de categorias do documento "Conecta Cidade: o aplicativo" (obras, falta de água, coleta de lixo, segurança e mudanças de horário). Os requisitos da V1 não listam categorias.
- **Formato "Imagem" e "link para abrir a imagem no app" pelo SMS:** não aparecem em nenhum documento nem no registro Aviso.
- **Publicação de evento sem aprovação:** a mensagem "Publicado! Já aparece no app dos moradores." aparece para qualquer tipo. Os requisitos dizem que eventos do Organizador de eventos "passam pela aprovação da administração". O protótipo não mostra o caminho "esperando aprovação".
- **"Para quem", rascunho e agendamento em Evento:** os cards "Para quem" e "Quando publicar" aparecem para todos os tipos. O registro Evento não tem público, e sua situação não prevê rascunho nem agendado.
- **Guia sem registro:** o Guia é publicado pela Administração (perfis da V1), mas não há registro de Guia entre os 8 tipos de dados.
- **Regra 4:** todos os tipos aparecem; a tela não filtra pelo grupo do organizador.
- **Passo 4 do fluxo ("sai por SMS")** não aparece na mensagem de confirmação, que fala só do app.
- **Passo 5 do fluxo (acompanhar o alcance):** não há link desta tela para a tela de Alcance depois de publicar.

## Notas para implementação
- Na V1 os tipos "Energia" e "Trilha" não entram (Fase 2, tabela de escopo). O canal "Representantes" também é Fase 2 e precisa de decisão para o nível Urgente (ver Divergências).
- Canais obrigatórios: decidir entre a tabela do protótipo, o Plano de Comunicação e a tabela de canais dos requisitos. Hoje só SMS e notificação do app têm regra de envio nos requisitos.
- Os campos de Evento, Guia e Trilha não guardam o que se digita no protótipo (sem `onInput`). A ligação com os registros fica para a implementação.
- O botão "Copiar texto para SMS e murais" só mostra o texto no protótipo.
- "(94) 0000-0000" é um número provisório. O telefone oficial é pergunta em aberto nos requisitos.
- A lista de 18 ruas (Acará a Tapajós) vem da tabela própria de ruas e quarteirões citada nos requisitos.
- O `<title>` do arquivo é "Conecta Cidade Organizador – Publicar".
