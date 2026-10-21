# Carona · visitante — `CaronaVisitante.dc.html`

| Campo | Valor |
| --- | --- |
| App | Conecta Cidade (morador) |
| Página do canvas | `morador` |
| Nome na lista "Telas da versão 1" dos requisitos | Não está na lista da V1 (a linha "Acabei de chegar" diz que "A carona para visitantes fica desativada na versão 1") |
| Versão | Fase 2 ("Carona (moradores e visitantes)" está só na coluna Fase 2 da tabela de escopo dos requisitos) |
| Perfil que vê | Visitante (perfil que não existe entre os perfis da V1) |
| Protótipo | [`design/prototipo/CaronaVisitante.dc.html`](../../../design/prototipo/CaronaVisitante.dc.html) |
| Tamanho | 390×844 |

## Para que serve
Carona para "quem não mora em Carajás": o visitante encontra caronas oferecidas por moradores entre Parauapebas e o Núcleo e pede uma vaga, enviando seus dados ao motorista e à portaria. Chega-se a ela pela tela "Acabei de chegar" ("Carona para o Núcleo · Tem o app, mas mora fora? Encontre carona com moradores do Núcleo."). Nos requisitos, é a parte "visitantes" da área "Carona (moradores e visitantes)", da Fase 2.

## Conteúdo da tela (de cima para baixo)
1. **Cabeçalho**: botão de voltar (`aria-label="Voltar"`, leva a `Chegada.dc.html`), título "Carona", subtítulo "Para quem não mora em Carajás" e etiqueta "Visitante". Não há barra de navegação inferior.
2. **Card de trajeto**: desenho de pontos e linha; "Saindo de" {origem} e "Indo para" {destino}; botão de inverter (`aria-label="Inverter ida e volta"`).
3. **Chips de dia** (`aria-pressed`): "Hoje", "Amanhã", "Sábado".
4. **Título "Caronas oferecidas"** e uma linha por carona: inicial, nome, "Sai às {hora} · {vagas}", "Encontro: {local}", selo "✓ Morador do Núcleo" e botão "Pedir vaga" (vira "Preenchendo…" ou "Pedido enviado"; `aria-pressed`).
5. **Mensagem de lista vazia**: "Nenhuma carona nesse dia ainda. Tente outro dia."
6. **Formulário de pedido** (aparece abaixo da lista quando o visitante toca em "Pedir vaga"):
   - Título "Pedir vaga com {primeiro nome do motorista}".
   - Texto "Seus dados vão para o motorista e para a portaria liberar sua entrada."
   - "Nome completo" — campo de texto (`id="vnome"`), placeholder "Como está no documento".
   - "CPF" — campo de texto (`id="vcpf"`), placeholder "000.000.000-00".
   - "Celular" — campo `tel` (`id="vcel"`), placeholder "(94) 90000-0000".
   - "Motivo da visita" — chips "Visitar família", "Trabalho", "Passeio", "Outro".
   - Caixa de consentimento (botão com `aria-pressed`): "Autorizo enviar meus dados para a portaria da Floresta Nacional de Carajás."
   - Botão "Enviar pedido".
7. **Card "Na portaria (PA-275)"**: "Leve documento com foto e CPF. A autorização de visitante é feita na portaria de acesso, das 8h às 16h, todos os dias."
8. **Rodapé**: "As caronas são oferecidas por moradores do Núcleo cadastrados no app. Compartilhe a viagem com alguém de confiança."

## Comportamento (script `Component`)
- **Estado inicial**: `{ back: false, day: 'Hoje', open: null, sent: {}, reason: 'Visitar família', ok: false }` — trajeto Parauapebas → Núcleo de Carajás, dia "Hoje", nenhum formulário aberto, motivo "Visitar família", consentimento desmarcado.
- **Caronas de exemplo**:

  | Nome | Dia | Sentido | Quando | Encontro |
  | --- | --- | --- | --- | --- |
  | Ana Souza | Hoje | Parauapebas → Núcleo | Sai às 15h · 3 vagas | Encontro: rodoviária de Parauapebas |
  | Pedro Lima | Hoje | Núcleo → Parauapebas | Sai às 17h30 · 1 vaga | Encontro: portaria do Núcleo |
  | Juliana Costa | Amanhã | Parauapebas → Núcleo | Sai às 8h · 2 vagas | Encontro: centro de Parauapebas |
  | Roberto Alves | Sábado | Parauapebas → Núcleo | Sai às 9h · 4 vagas | Encontro: rodoviária de Parauapebas |
  | Fernanda Dias | Sábado | Núcleo → Parauapebas | Sai às 18h · 2 vagas | Encontro: portaria do Núcleo |

- **Filtro**: a lista mostra só as caronas do dia escolhido e do sentido do trajeto. Ex.: "Amanhã" no sentido Núcleo → Parauapebas não tem carona e mostra a mensagem de lista vazia.
- **Inverter** e **trocar de dia** fecham o formulário aberto.
- **"Pedir vaga"**: abre o formulário daquela carona (rótulo "Preenchendo…") e desmarca o consentimento; tocar de novo fecha. Depois de enviado ("Pedido enviado"), o botão não faz mais nada.
- **Motivo da visita**: um chip por vez; a escolha continua valendo de um formulário para outro.
- **Consentimento**: alterna `ok`. Sem consentimento, "Enviar pedido" fica cinza e não faz nada.
- **"Enviar pedido"**: só funciona com o consentimento marcado; marca a carona como "Pedido enviado" e fecha o formulário. Os campos Nome completo, CPF e Celular não estão ligados ao estado e não têm validação (o pedido sai mesmo com eles vazios).

## Navegação
| Elemento | Leva para |
| --- | --- |
| Botão voltar do cabeçalho | `Chegada.dc.html` |

Telas que apontam para esta: `Chegada.dc.html` (card "Carona para o Núcleo", no bloco "Não moro em Carajás").

## Dados mostrados → registros do sistema
| Dado na tela | Registro da V1 | Observação |
| --- | --- | --- |
| Nome do motorista e selo "✓ Morador do Núcleo" | Pessoa (nome; pessoa ligada a uma Casa) | Só isso tem correspondência |
| Carona oferecida (dia, sentido, horário de saída, vagas, ponto de encontro) | **Sem registro** | |
| Pedido de vaga | **Sem registro** | |
| Visitante (perfil) | **Sem registro** | Pessoa só tem os perfis gestor, adulto e jovem |
| Nome completo do visitante | **Sem registro** | |
| **CPF do visitante** | **Sem registro — proibido na V1** | LGPD dos requisitos: "dados de visitantes (CPF) não entram na versão 1" |
| Celular do visitante | **Sem registro** | Pessoa tem celular, mas o visitante não é Pessoa |
| Motivo da visita | **Sem registro** | |
| Consentimento para enviar dados à portaria | **Sem registro** | Os requisitos só preveem o aceite do termo de uso e da política de privacidade no cadastro |
| Horário da portaria ("das 8h às 16h, todos os dias") | **Sem registro** | Texto fixo |

## Regras dos documentos que se aplicam
- "Conecta Cidade: requisitos da versão 1", "Objetivo e escopo": "Carona (moradores e visitantes)" é Fase 2.
- Requisitos, "Telas da versão 1", linha "Acabei de chegar": "para quem mora fora, ver a carona"; "A carona para visitantes fica desativada na versão 1".
- Requisitos, "Requisitos gerais", LGPD: "termo de uso e política de privacidade aceitos no cadastro"; "dados de visitantes (CPF) não entram na versão 1"; "qualquer pessoa pode pedir para apagar a conta".
- Requisitos, "Perfis e permissões": os perfis do app do morador são gestor da casa, adulto da casa e jovem.
- Requisitos, "Fase 2 e perguntas em aberto": carona para visitantes depende de equipes e dados de fora do grupo; pergunta aberta "Quem cuida dos dados pessoais (encarregado da LGPD)?".

## Divergências entre protótipo e documentos
1. **CPF de visitante**: a tela pede CPF, nome completo e celular do visitante. Os requisitos dizem que dados de visitantes (CPF) não entram na V1; esta tela só pode existir na Fase 2.
2. **Envio de dados a terceiros**: "Seus dados vão para o motorista e para a portaria liberar sua entrada" e "Autorizo enviar meus dados para a portaria da Floresta Nacional de Carajás". Os documentos não preveem envio de dados pessoais ao motorista nem à portaria, nem um consentimento separado.
3. **Perfil visitante**: não existe nos requisitos. A tela também não diz se o visitante precisa ter conta (a tela de origem diz "Tem o app, mas mora fora?").
4. **Entrada ativa numa função desativada na V1**: os requisitos dizem que a carona para visitantes fica desativada na V1, mas `Chegada.dc.html` tem o link "Carona para o Núcleo" funcionando, sem indicação de desativado.
5. **Onde se faz a autorização**: esta tela diz "A autorização de visitante é feita na portaria de acesso, das 8h às 16h, todos os dias"; `TrilhaVisitante.dc.html` manda "emitir a autorização de visitação no site do ICMBio Carajás antes de vir"; `Chegada.dc.html` fala em "autorização na portaria de acesso da Floresta Nacional de Carajás, na PA-275". O horário da portaria e as duas formas de autorização não estão nos documentos-fonte.
6. **Diferenças em relação à carona do morador** (`Carona.dc.html`): aqui não há ranking nem notas, o trajeto e o dia filtram a lista e os motoristas de exemplo são outros (ex.: "Ana Souza" aqui, "Ana Júlia Santos" lá). Os documentos não descrevem nenhuma das duas telas.
7. **Dados sem registro na V1**: carona, pedido de vaga, visitante, CPF, motivo da visita, consentimento (ver tabela acima).

## Notas para implementação
- Tela inteira de Fase 2. Na V1, conforme os requisitos, a carona para visitantes fica desativada; o link de `Chegada.dc.html` precisa refletir isso (decisão a registrar na ficha dessa tela).
- O campo CPF não pode existir na V1 (LGPD dos requisitos). Para a Fase 2, a pergunta aberta sobre o encarregado da LGPD precisa de resposta antes de coletar esses dados.
- Os campos do formulário não têm `name`, estado nem validação no protótipo; só o consentimento é verificado antes do envio.
- Nomes, horários e pontos de encontro são dados de exemplo fixos no script.
