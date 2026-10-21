# Energia (controle) — `AdminEnergia.dc.html`

| Campo | Valor |
| --- | --- |
| App | Meu Carajás Organizadores |
| Página do canvas | `organizador` |
| Nome na lista "Telas da versão 1" dos requisitos | Não está na lista da V1 |
| Versão | Fase 2 |
| Perfil que vê | Nenhum perfil da V1. O cabeçalho diz "Equipe responsável pela energia do Núcleo". Nas permissões iniciais de `AdminEquipe.dc.html`, a área "Energia" fica liberada para "Administração do Núcleo" e "Equipe de energia", grupo que não existe nos requisitos (ver Divergências) |
| Protótipo | [`design/prototipo/AdminEnergia.dc.html`](../../../design/prototipo/AdminEnergia.dc.html) |
| Tamanho | 390×844 |

## Para que serve
Tela de controle da equipe responsável pela energia: ver no mapa do Núcleo, por rua e quarteirão, onde falta luz; confirmar a falha relatada pelos moradores pelo botão "Estou sem luz"; publicar a previsão de volta; mandar equipes; registrar a volta da luz; e agendar desligamentos programados. Corresponde à área "Energia e mapa por quarteirão" e ao "botão de mandar equipes" que os requisitos colocam na Fase 2.

## Conteúdo da tela (de cima para baixo)
1. **Cabeçalho** (fundo escuro): ícone do app + "Meu Carajás Organizadores"; título "Controle de energia"; subtítulo "Equipe responsável pela energia do Núcleo". Não tem botão de voltar.
2. **Card "Mapa do Núcleo"** — à direita "18 ruas · 3 quarteirões cada".
   - Mapa em SVG (rótulo de acessibilidade "Mapa do Núcleo Urbano de Carajás: 18 ruas divididas em 3 quarteirões") com:
     - a rodovia "PA-275 · Rod. Raimundo Mascarenhas", as avenidas "AV. KARAJÁS" e "AV. CATETE";
     - as faixas coloridas "QUARTEIRÃO 1" (azul), "QUARTEIRÃO 2" (roxo) e "QUARTEIRÃO 3" (verde);
     - as 18 ruas, de cima para baixo: ACARÁ, AMAZONAS, ARAGUAIA, ARAPIUNS, CAETÉ, GRAJAÚ, GUAMÁ, IRIRI, IGUARA, ITACAIÚNAS, JAPURÁ, JARI, JURUÁ, MEARIM, PARU, PURUS, SOLIMÕES, TAPAJÓS. Cada rua é desenhada em trechos, um por quarteirão; Tapajós só tem trechos nos quarteirões 2 e 3;
     - os pontos "Hospital Yutaka Takeda", "Trilha Uxi", "Doce Norte E.C.", "Escola", "Hotel", "Portaria" e a seta "N ↑".
   - Legenda: "Com luz" (branco), "Sem luz" (vermelho), "Desligamento 12/11" (amarelo) e um quarto item com o texto "Escolha a rua e o quarteirão".
   - Campo **"Ver rua"** (select) com as opções "Rua Acará" … "Rua Tapajós", na mesma ordem do mapa.
   - Três botões de quarteirão: "Quarteirão 1", "Quarteirão 2", "Quarteirão 3", cada um com a situação do trecho embaixo ("Com luz", "Sem luz", "Desligamento" ou "Não passa aqui").
   - Caixa de resumo do trecho escolhido: título "Rua <rua> · Quarteirão <n>" e uma linha de informação (ver Comportamento).
3. **Título "Quedas agora"**.
4. **Botão largo de despacho** (ícone de caminhão), com texto variável: "Mandar equipes para as ocorrências", "Equipes a caminho · <n> ocorrência(s)" ou "Nenhuma ocorrência aberta".
5. **Cards de ocorrência** (dois no protótipo), cada um com:
   - etiqueta de situação ("Relatado", "Confirmado" ou "Resolvido") e o número de relatos;
   - nome do trecho (ex.: "Rua Juruá · quarteirão 2");
   - frase de situação;
   - "Causa provável: <causa>";
   - quando há equipe enviada: bloco escuro "Equipe enviada" com tempo de chegada, nome da equipe, composição e "Trocar equipe:" com os chips "Rede elétrica", "Poda", "Manutenção";
   - quando a ocorrência está confirmada: campo **"Previsão de volta"** (texto, placeholder "Ex.: hoje, até 16h");
   - botão de ação: "Confirmar falha e avisar a rua" (situação Relatado) ou "A luz voltou" (situação Confirmado). Some quando a ocorrência está Resolvida.
6. **Título "Desligamentos programados"** e card "Manutenção na rede" — "Quinta, 12/11, das 8h às 12h · Ruas Araguaia e Arapiuns · lembrete na véspera".
7. Botão-link **"Agendar desligamento"**.
8. Nota: "Os relatos chegam do botão “Estou sem luz” no app dos moradores."
9. **Barra de navegação inferior** (5 itens): Painel, Publicar, **Energia (ativo)**, Aprovar, Equipe.

## Comportamento (script `Component`)
- **Estado inicial:** `st: { c: 'confirmed', e: 'reported' }` (ocorrência da Rua Juruá já confirmada; a da Rua Paru só relatada), `sel: 'Juruá'`, `seg: 1` (Quarteirão 2), `sent: false` (equipes não enviadas), `team: { c: 'rede', e: 'poda' }`.
- **Mapa (`mapVals(false, true)`):** a tela chama a função no modo administrador, então o alfinete "sua casa" fica invisível (`pinOp = 0`) e a legenda mostra "Escolha a rua e o quarteirão".
  - Situação de cada trecho vem de dados fixos: sem luz em `Juruá|1` ("7 relatos · previsão de volta: 16h") e `Paru|2` ("3 relatos · equipe a caminho"); desligamento programado em `Araguaia|0` e `Arapiuns|0`; o resto "Com luz".
  - O trecho escolhido ganha contorno escuro; o quarteirão escolhido fica com o fundo mais forte.
  - Trocar a rua no select limpa o quarteirão; se o quarteirão não existe na rua (Tapajós, quarteirão 1), usa o primeiro que existe. O botão de um quarteirão que "Não passa aqui" fica desabilitado.
  - Linha de informação: "Luz normal · nenhum relato agora" (com luz), o texto fixo do trecho (sem luz) ou "Manutenção quinta, 12/11, das 8h às 12h" (desligamento).
- **Botão de despacho:** um toque marca `sent: true` para todas as ocorrências abertas de uma vez. Fica vermelho antes do envio e verde depois, ou quando não há ocorrência aberta.
- **Equipes** (dados de exemplo):
  - "Equipe de rede elétrica" — "3 eletricistas · caminhão com cesto" — "chega em 20 min";
  - "Equipe de poda + eletricista" — "2 podadores e 1 eletricista · motosserra e cesto" — "chega em 35 min";
  - "Equipe de manutenção" — "2 técnicos · revisão da ligação das casas" — "chega em 25 min".
  Os chips "Trocar equipe" mudam a equipe só daquela ocorrência.
- **Fluxo da ocorrência:** Relatado → (botão "Confirmar falha e avisar a rua") → Confirmado → (botão "A luz voltou") → Resolvido. Frases:
  - Relatado: "Moradores avisaram que estão sem luz.";
  - Confirmado: "Aviso oficial enviado para os moradores da rua.";
  - Resolvido: "Moradores avisados. Queda salva no histórico."
- **Ocorrências de exemplo:** "Rua Juruá · quarteirão 2", "7 relatos", causa "transformador do poste desarmou"; "Rua Paru · quarteirão 3", "3 relatos", causa "galho de árvore caiu sobre a fiação".
- **Previsão de volta:** o campo não está ligado ao estado. O valor digitado não é guardado nem aparece em outro lugar.
- Não há validação nem mensagem de erro na tela.

## Navegação
| Elemento | Leva para |
| --- | --- |
| Botão "Agendar desligamento" | `AdminPublicar.dc.html` |
| Barra inferior · Painel | `AdminInicio.dc.html` |
| Barra inferior · Publicar | `AdminPublicar.dc.html` |
| Barra inferior · Energia (ativo) | `AdminEnergia.dc.html` |
| Barra inferior · Aprovar | `AdminAprovar.dc.html` |
| Barra inferior · Equipe | `AdminEquipe.dc.html` |

A tela também é aberta pelo card de energia do Painel (`AdminInicio.dc.html`).

## Dados mostrados → registros do sistema
| Dado na tela | Registro da V1 |
| --- | --- |
| Nomes das 18 ruas e dos 3 quarteirões | Fica fora dos 8 registros: os requisitos dizem que ficam "numa tabela própria" |
| Rua e quarteirão do trecho | Campos `rua` e `quarteirão` de **Casa** (só para casas; o trecho de rua em si não tem registro) |
| Aviso oficial enviado à rua ao confirmar a falha | **Aviso** (categoria, ruas, nível etc.) e **Entrega do aviso** — a tela não mostra esses campos |
| Desligamento programado (dia, hora, ruas) | **Aviso** (o quê, quando, ruas), quando publicado pelo Publicar |
| "Lembrete na véspera" | Sem registro correspondente |
| Relatos "Estou sem luz" e a contagem por trecho | **Sem registro correspondente** |
| Ocorrência de queda (situação Relatado/Confirmado/Resolvido, causa provável) | **Sem registro correspondente** |
| Previsão de volta | **Sem registro correspondente** |
| Equipes (nome, composição, tempo de chegada) e envio de equipe | **Sem registro correspondente** |
| Histórico de quedas ("Queda salva no histórico") | **Sem registro correspondente** |
| Situação de energia por trecho (com luz / sem luz / desligamento) | **Sem registro correspondente** |

## Regras dos documentos que se aplicam
- *Conecta Cidade: requisitos da versão 1*, "Objetivo e escopo": "Energia e mapa por quarteirão" fica na Fase 2. O critério da V1 é "não depender de dados ou equipes de fora do grupo para funcionar".
- *Requisitos*, "Fase 2 e perguntas em aberto": "energia com o mapa por quarteirão e o botão de mandar equipes". Uma das perguntas em aberto: "A divisão das 18 ruas em 3 quarteirões confere com a da administração do Núcleo?"
- *Requisitos*, "Dados que o sistema guarda": nomes das ruas e quarteirões em tabela própria; "As 18 ruas do protótipo já seguem a ordem real, de Acará a Tapajós."
- *Falta de energia no Núcleo*, "A solução no Meu Carajás Super App": aviso antecipado de desligamentos programados "com dia, hora e ruas"; mapa com as áreas sem luz; "Previsão de volta, atualizada pela equipe responsável"; selo "oficial"; botão "Estou sem luz"; notificação quando cai e quando volta; histórico das quedas de cada rua.
- *Falta de energia*, "Como funciona quando a luz cai", passos 1 a 5:
  1. a energia cai;
  2. os moradores tocam em "Estou sem luz" e o mapa mostra as ruas afetadas;
  3. a equipe confirma a falha e publica um aviso oficial com a previsão de volta;
  4. todos os moradores das ruas afetadas recebem notificação;
  5. quando a energia volta, o app avisa e a queda fica no histórico.
  Nos desligamentos programados, "o app lembra os moradores na véspera".
- *Falta de energia*, última seção: perguntas em aberto sobre quem é a equipe responsável e de onde vêm os dados do mapa e da previsão.
- *Requisitos*, "SMS e WhatsApp", regras de envio, regra 1: aviso urgente sai por SMS em até 2 minutos para todos os gestores das ruas escolhidas.
- *Plano de Comunicação*, "Níveis de urgência": "Corte programado de energia" é exemplo do nível Amarelo (importante), com 3 dias de antecedência quando possível.

## Divergências entre protótipo e documentos
1. **Fase 2 na navegação da V1.** O item "Energia" está na barra inferior de todas as telas do organizador, inclusive nas telas da V1. Os requisitos põem "Energia e mapa por quarteirão" na Fase 2.
2. **Perfil que não existe na V1.** O cabeçalho diz "Equipe responsável pela energia do Núcleo", mas os perfis do app Organizadores na V1 são só Administração do Núcleo, Organizador de eventos e Comitê Jovem Entre Fases. Os documentos deixam em aberto quem é essa equipe.
3. **Ordem do fluxo.** O documento de energia diz que a equipe "confirma a falha e publica um aviso oficial com a previsão de volta". No protótipo, "Confirmar falha e avisar a rua" envia o aviso antes; o campo "Previsão de volta" só aparece depois da confirmação, e o valor digitado não é usado.
4. **Aviso fora do fluxo de publicar.** O aviso oficial sai por um botão da tela de energia, sem passar pela escolha de público, nível, categoria e canais que os requisitos definem para "Publicar um aviso". A tela não diz o nível nem o canal (SMS) desse aviso.
5. **Rua × quarteirão.** O documento de energia fala em "ruas afetadas" e "histórico das quedas de cada rua". O protótipo marca e mostra por trecho (rua + quarteirão), como os requisitos ("mapa por quarteirão").
6. **Texto do card.** "18 ruas · 3 quarteirões cada" não bate com o próprio mapa: a Rua Tapajós só passa pelos quarteirões 2 e 3, e o Quarteirão 1 aparece como "Não passa aqui". A divisão em quarteirões é uma pergunta em aberto nos requisitos.
7. **Mapa com dados fixos.** O mapa usa dados fixos e não acompanha as ocorrências. Quando a ocorrência da Rua Juruá vira "Resolvido", o trecho continua vermelho. O trecho da Rua Paru diz "equipe a caminho" antes de qualquer equipe ser enviada.
8. **Diferença entre telas do protótipo.** Esta tela diz que a "Equipe de rede elétrica" tem "3 eletricistas". Em `AdminEquipe.dc.html`, a equipe "Rede elétrica" tem "6 pessoas".
9. **Dados fora do modelo.** Relatos, ocorrência, causa provável, previsão de volta, equipes, histórico e lembrete na véspera não têm registro entre os 8 da V1.

## Notas para implementação
- Tela inteira da Fase 2. Na V1, o item "Energia" da barra inferior e o acesso pelo Painel ficam ocultos ou desativados. A mesma regra já vale para o card de energia do Início do gestor, que os requisitos dizem ficar "oculto até a fase 2".
- A lista de ruas e quarteirões deve vir da tabela própria citada nos requisitos, na ordem do protótipo. Essa ordem não é alfabética (Iriri vem antes de Iguara), então não se deve ordenar por nome.
- O mapa é o mesmo componente usado em `AdminColeta` e `AdminCasas` (mesmas ruas, trechos por quarteirão, Tapajós sem trecho no Quarteirão 1).
- A tela usa a mesma função de mapa da tela do morador (`mapVals(reported, admin)`), aqui com `admin = true`. Por isso o alfinete da casa "Rua Japurá, 12 · quarteirão 2" fica oculto.
- Os números de relatos, as equipes, as causas e as datas (12/11) são dados de exemplo do protótipo.
- Antes de implementar, é preciso responder às perguntas em aberto: quem é a equipe responsável e de onde vêm os dados do mapa e da previsão de volta (*Falta de energia*).
