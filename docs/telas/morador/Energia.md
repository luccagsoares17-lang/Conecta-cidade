# Energia · gestor — `Energia.dc.html`

| Campo | Valor |
| --- | --- |
| App | Conecta Cidade (morador) |
| Página do canvas | `morador` (o board não tem a chave `page` no `canvas.json`, então fica na primeira página, "Conecta Cidade") |
| Nome na lista "Telas da versão 1" dos requisitos | Não está na lista da V1 |
| Versão | Fase 2 ("Energia e mapa por quarteirão" está só na coluna Fase 2 da tabela de escopo dos requisitos) |
| Perfil que vê | Gestor da casa (título do board: "Energia · gestor") |
| Protótipo | [`design/prototipo/Energia.dc.html`](../../../design/prototipo/Energia.dc.html) |
| Tamanho | 390×844 |

## Para que serve
Coloca "na palma da mão de cada morador o quando, o onde e o até quando de cada falta de luz": situação da luz na rua do morador, mapa do Núcleo com as áreas sem luz, botão "Estou sem luz" e aviso antecipado de desligamentos programados (documento "Falta de energia no Núcleo: avisos na palma da mão", seção "A solução no Conecta Cidade").

## Conteúdo da tela (de cima para baixo)
1. **Cabeçalho**: botão redondo de voltar (seta, `aria-label="Voltar para o início"`, leva a `Main.dc.html`) e título "Energia". Não há barra de navegação inferior.
2. **Card de situação da sua rua** (fundo verde ou laranja, conforme o estado):
   - Rótulo: "Sua rua · Rua Japurá, quarteirão 2".
   - Título: "Luz normal na sua rua" (inicial) ou "Falta de luz informada".
   - Texto: "Nenhuma queda registrada agora." (inicial) ou "A equipe responsável já recebeu seu aviso.".
3. **Card "Mapa do Núcleo"**:
   - Título "Mapa do Núcleo" e subtítulo "18 ruas · 3 quarteirões cada".
   - Mapa em SVG (`aria-label="Mapa do Núcleo Urbano de Carajás: 18 ruas divididas em 3 quarteirões"`) com: a rodovia "PA-275 · Rod. Raimundo Mascarenhas"; as 18 ruas (ACARÁ, AMAZONAS, ARAGUAIA, ARAPIUNS, CAETÉ, GRAJAÚ, GUAMÁ, IRIRI, IGUARA, ITACAIÚNAS, JAPURÁ, JARI, JURUÁ, MEARIM, PARU, PURUS, SOLIMÕES, TAPAJÓS); "AV. KARAJÁS" e "AV. CATETE"; as faixas "QUARTEIRÃO 1", "QUARTEIRÃO 2" e "QUARTEIRÃO 3" (cada uma com uma cor); os pontos "Hospital Yutaka Takeda", "Trilha Uxi", "Doce Norte E.C.", "Escola", "Hotel", "Portaria"; e a rosa "N ↑". Cada trecho de rua (rua × quarteirão) é pintado conforme a situação, e um marcador mostra a casa do morador.
   - Legenda: "Com luz", "Sem luz", "Desligamento 12/11" e "Sua casa (Rua Japurá, 12 · quarteirão 2)".
   - Campo "Ver rua": `select` (`id="mapRua"`) com as 18 opções, de "Rua Acará" a "Rua Tapajós", na mesma ordem do mapa.
   - Três botões de quarteirão, "Quarteirão 1", "Quarteirão 2" e "Quarteirão 3", cada um com a situação embaixo: "Com luz", "Sem luz", "Desligamento" ou "Não passa aqui" (este último com borda tracejada e `aria-disabled="true"`).
   - Linha de resultado: "Rua {rua} · Quarteirão {n}" e a informação do trecho escolhido.
4. **Botão principal**: "Estou sem luz" (escuro) ou, depois de tocado, "Minha luz voltou" (claro). Usa `aria-pressed`.
5. **Card "Desligamentos programados"**: ícone, "Manutenção na rede" e "Quinta, 12/11, das 8h às 12h · Ruas Araguaia e Arapiuns".
6. **Botão-interruptor**: "Avisar quando cair ou voltar", com o texto "Aviso por SMS no seu celular" e uma chave liga/desliga (`aria-pressed`).

## Comportamento (script `Component`)
- **Estado inicial**: `{ reported: false, notify: true, sel: 'Japurá', seg: 1 }` — rua selecionada Japurá, quarteirão 2 (índice 1), sem relato, aviso ligado.
- **Dados de exemplo** (`mapVals`):
  - Ruas: as 18 do `select`. Todas passam pelos quarteirões 1, 2 e 3, menos a Rua Tapajós, que só passa pelos quarteirões 2 e 3 (`segs[17] = [1, 2]`).
  - Trechos sem luz: Rua Juruá, quarteirão 2 → "7 relatos · previsão de volta: 16h"; Rua Paru, quarteirão 3 → "3 relatos · equipe a caminho".
  - Trechos com desligamento programado: Rua Araguaia e Rua Arapiuns, quarteirão 1.
  - Casa do morador (marcador do mapa): Rua Japurá, 12 · quarteirão 2.
- **Informação do trecho escolhido**: com luz → "Luz normal · nenhum relato agora"; sem luz → o texto do exemplo (ex.: "7 relatos · previsão de volta: 16h"); desligamento → "Manutenção quinta, 12/11, das 8h às 12h". Quando o próprio morador avisou (Japurá, quarteirão 2) → "Você avisou que está sem luz · só o seu quarteirão foi marcado".
- **"Ver rua"**: troca a rua (`sel`) e zera o quarteirão; o app volta para o quarteirão 2 ou, se a rua não passa por ele, para o primeiro quarteirão da rua. O trecho escolhido ganha contorno escuro no mapa e a faixa do quarteirão escolhido fica mais forte.
- **Botões de quarteirão**: escolhem o quarteirão; o botão "Não passa aqui" não faz nada.
- **"Estou sem luz" / "Minha luz voltou"**: alterna `reported`. Com `reported = true`, o card de situação fica laranja ("Falta de luz informada" / "A equipe responsável já recebeu seu aviso.") e o trecho Rua Japurá, quarteirão 2 passa a "Sem luz" no mapa. Tocar de novo desfaz tudo. Não há validação nem confirmação.
- **"Avisar quando cair ou voltar"**: alterna `notify` (começa ligado); muda só a cor e a posição da chave.
- O método `mapVals(reported, admin)` é o mesmo usado em `AdminEnergia.dc.html`; nesta tela ele é chamado com `admin = false` (marcador da casa visível e legenda "Sua casa (…)").

## Navegação
| Elemento | Leva para |
| --- | --- |
| Botão voltar (seta, "Voltar para o início") | `Main.dc.html` |

Telas que apontam para esta: `Main.dc.html` (card do topo, card "Energia · Luz normal na sua rua" em "Serviços da casa" e item "Energia" da barra inferior), `Avisos.dc.html` e `JovemAvisos.dc.html` (link "Ver no mapa") e `GestorMinhaFamilia.dc.html` (item "Energia" da barra inferior; arquivo que não está no `canvas.json`).

## Dados mostrados → registros do sistema
| Dado na tela | Registro da V1 | Observação |
| --- | --- | --- |
| Rua e quarteirão da casa ("Rua Japurá, quarteirão 2"), número ("12") | Casa (rua, número, quarteirão) | Corresponde |
| Lista das 18 ruas e dos 3 quarteirões | Tabela própria de ruas e quarteirões (requisitos, "Dados que o sistema guarda") | A tabela existe, mas os requisitos não dizem por quais quarteirões cada rua passa (aqui a Tapajós só passa por 2 e 3) |
| Situação de cada trecho rua × quarteirão (com luz, sem luz, desligamento) | **Sem registro** | |
| Relato "Estou sem luz" (quem, onde, quando) e "Minha luz voltou" | **Sem registro** | |
| Quantidade de relatos ("7 relatos", "3 relatos") | **Sem registro** | |
| Previsão de volta ("previsão de volta: 16h") | **Sem registro** | |
| Situação da equipe ("equipe a caminho") | **Sem registro** | |
| Desligamento programado ("Manutenção na rede", "Quinta, 12/11, das 8h às 12h", "Ruas Araguaia e Arapiuns") | Aviso (o quê, quando, ruas) poderia guardar o texto | O Aviso guarda ruas, não quarteirões; a marcação por quarteirão no mapa não tem registro |
| Preferência "Avisar quando cair ou voltar" | **Sem registro** | Pessoa não tem campo de preferência de aviso |

## Regras dos documentos que se aplicam
- "Conecta Cidade: requisitos da versão 1", "Objetivo e escopo": "Energia e mapa por quarteirão" é Fase 2; o critério da V1 é "não depender de dados ou equipes de fora do grupo".
- Requisitos, "Telas da versão 1", linha "Início · gestor": "o card de energia fica oculto até a fase 2".
- Requisitos, "Fase 2 e perguntas em aberto": a Fase 2 inclui "energia com o mapa por quarteirão e o botão de mandar equipes"; pergunta aberta "A divisão das 18 ruas em 3 quarteirões confere com a da administração do Núcleo?".
- Requisitos, "Dados que o sistema guarda": Casa tem quarteirão; nomes das ruas e quarteirões ficam numa tabela própria; "As 18 ruas do protótipo já seguem a ordem real, de Acará a Tapajós".
- Requisitos, "SMS e WhatsApp": notificação do app para todo aviso; SMS para comunicados e alertas, obrigatório nos níveis urgente, importante e informativo.
- "Falta de energia no Núcleo", "A solução no Conecta Cidade": aviso antecipado (dia, hora e ruas), mapa com as áreas sem luz, previsão de volta atualizada pela equipe, selo "oficial", botão "Estou sem luz", notificação no celular quando cai e quando volta, histórico das quedas de cada rua.
- "Falta de energia no Núcleo", "Como funciona quando a luz cai": passos 1 a 5; nos programados, aviso com dias de antecedência e lembrete na véspera.
- "Falta de energia no Núcleo", final: perguntas em aberto sobre quem é a equipe responsável, quem publica e de onde vêm os dados do mapa e da previsão.

## Divergências entre protótipo e documentos
1. **Tela de Fase 2 alcançável a partir de telas da V1**: `Main.dc.html` tem três links para Energia (card do topo, card em "Serviços da casa" e item da barra inferior), e `Avisos.dc.html`/`JovemAvisos.dc.html` têm "Ver no mapa". Os requisitos só dizem que o card de energia do Início fica oculto; não falam do item da barra inferior nem do link "Ver no mapa".
2. **Subtítulo "18 ruas · 3 quarteirões cada" x dados do script**: a Rua Tapajós só passa pelos quarteirões 2 e 3 (o botão "Quarteirão 1" mostra "Não passa aqui"). A divisão em quarteirões é pergunta em aberto nos requisitos.
3. **SMS x notificação**: o documento de energia fala em "notificação no celular quando a energia cai e quando volta"; a tela diz "Aviso por SMS no seu celular". Além disso, a chave permite desligar o aviso, e os requisitos não preveem que o morador desligue SMS (o SMS é obrigatório nos três níveis).
4. **Itens do documento de energia que a tela não mostra**: selo "oficial", histórico das quedas de cada rua e lembrete na véspera dos desligamentos programados.
5. **Itens da tela que os documentos não citam**: botão "Minha luz voltou" (o documento diz que "o app avisa" quando a luz volta, sem ação do morador); contagem de relatos; situação "equipe a caminho".
6. **Mapa por quarteirão x documento de energia**: o documento fala em "o mapa mostra as ruas afetadas"; a tela marca só o trecho rua × quarteirão ("só o seu quarteirão foi marcado").
7. **Equipe responsável**: o texto "A equipe responsável já recebeu seu aviso." supõe uma equipe que os dois documentos deixam como pergunta em aberto.
8. **Dados sem registro na V1**: situação por trecho, relatos, previsão de volta, situação da equipe e preferência de aviso (ver tabela acima).

## Notas para implementação
- Tela inteira de Fase 2: fica fora da V1, e o card de energia do Início fica oculto (conforme os requisitos). Os outros pontos de entrada (barra inferior, "Ver no mapa") precisam de decisão, porque os documentos não tratam deles.
- Todos os valores do script são dados de exemplo: rua da casa, relatos, previsão de 16h, desligamento de 12/11 e os nomes dos pontos do mapa.
- O mapa e a lógica `mapVals` são compartilhados com `AdminEnergia.dc.html` (chamada com `admin = true` lá).
- A ordem das ruas no `select` e no mapa é a mesma da tabela de ruas citada nos requisitos (de Acará a Tapajós).
