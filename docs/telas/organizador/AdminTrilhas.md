# Trilhas — `AdminTrilhas.dc.html`

| Campo | Valor |
| --- | --- |
| App | Meu Carajás Organizadores |
| Página do canvas | `organizador` |
| Nome na lista "Telas da versão 1" dos requisitos | Não está na lista da V1 |
| Versão | Fase 2 |
| Perfil que vê | Não definido nos documentos. No protótipo, abre pelo Painel do organizador (Ferramentas → "Trilhas · Abertas e fechadas"). Nas permissões iniciais de `AdminEquipe.dc.html`, a área "Trilhas" fica liberada para "Administração do Núcleo" e "Comitê Jovem Entre Fases" |
| Protótipo | [`design/prototipo/AdminTrilhas.dc.html`](../../../design/prototipo/AdminTrilhas.dc.html) |
| Tamanho | 390×844 |

## Para que serve
Marcar cada trilha como aberta ou fechada, escolher o motivo do fechamento e avisar os moradores. Faz parte da área "Trilhas com agenda", que os requisitos colocam na Fase 2.

## Conteúdo da tela (de cima para baixo)
1. **Cabeçalho** (fundo escuro): botão voltar ("Voltar para o painel"); "Meu Carajás Organizadores"; título "Situação das trilhas"; subtítulo "Abertas, fechadas e avisos para os moradores".
2. **Card de explicação:** "Trilhas sem guia não têm agenda: moradores do Núcleo vão quando quiserem, e quem vem de fora emite a autorização no site do ICMBio. Aqui a equipe avisa quando uma trilha fecha."
3. **Um card por trilha** (8 no total), com:
   - nome da trilha;
   - etiqueta do tipo: "Sem guia" (verde claro) ou "Guia obrigatório" (escuro);
   - botão de situação à direita: "Aberta" (verde) ou "Fechada" (vermelho);
   - quando a trilha está fechada: o rótulo "Motivo", os chips "Chuva forte", "Manutenção" e "Animais na trilha", e o botão "Avisar moradores" (que vira "Moradores avisados por SMS ✓").
4. **Barra de navegação inferior**: **Painel (ativo)**, Publicar, Energia, Aprovar, Equipe.

## Comportamento (script `Component`)
- **Trilhas (na ordem):**
  - Sem guia: "Trilha Uxi", "Trilha Castanheira", "Trilha Quarubarana", "Trilha Pequiá";
  - Guia obrigatório: "Trilha Lagoa da Mata", "Trilha Flor de Carajás e caverna", "Trilha Mirante Vale do Rio Azul", "Trilha Peito de Aço".
- **Estado inicial:** `st: { lagoa: { closed: true, reason: 'Chuva forte' } }`. Só a "Trilha Lagoa da Mata" começa fechada, com o motivo "Chuva forte"; as outras começam abertas.
- **Botão Aberta/Fechada:** alterna a situação da trilha e zera o "avisado" (`sent: false`).
- **Motivo:** escolha única entre os três chips. Sem escolha, o padrão é "Chuva forte". Trocar o motivo zera o "avisado".
- **"Avisar moradores":** marca `sent: true`, e o botão passa a "Moradores avisados por SMS ✓". A tela não mostra quem recebe nem o texto da mensagem.
- Nenhuma validação.

## Navegação
| Elemento | Leva para |
| --- | --- |
| Botão voltar (cabeçalho) | `AdminInicio.dc.html` |
| Barra inferior · Painel (ativo) | `AdminInicio.dc.html` |
| Barra inferior · Publicar | `AdminPublicar.dc.html` |
| Barra inferior · Energia | `AdminEnergia.dc.html` |
| Barra inferior · Aprovar | `AdminAprovar.dc.html` |
| Barra inferior · Equipe | `AdminEquipe.dc.html` |

Telas que trazem para cá: o atalho "Trilhas · Abertas e fechadas" do Painel e o link "Marcar as datas de saída no calendário" de `AdminPublicar.dc.html`.

## Dados mostrados → registros do sistema
| Dado na tela | Registro da V1 |
| --- | --- |
| Trilha (nome, tipo sem guia / guia obrigatório) | **Sem registro correspondente** |
| Situação aberta/fechada e motivo do fechamento | **Sem registro correspondente** |
| Aviso de fechamento por SMS | Poderia ser um **Aviso**, mas a tela não usa nenhum campo do Aviso (público, nível, categoria, canais) |

## Regras dos documentos que se aplicam
- *Requisitos*, "Objetivo e escopo": "Trilhas com agenda" fica na Fase 2.
- *Requisitos*, "Fase 2 e perguntas em aberto": "trilhas com agenda" está na lista da Fase 2, "já desenhadas no protótipo".
- *Requisitos*, "SMS e WhatsApp": SMS para "Comunicados e alertas", "texto no modelo padrão", obrigatório nos três níveis, com contagem mensal de SMS.
- *Plano de Comunicação*, "Os canais": SMS em massa "Somente avisos urgentes". "Modelo padrão de aviso": o quê, quando, onde, o que fazer, dúvidas.
- *Eventos no Conecta Cidade*, "Quem organiza os eventos": entre os exemplos de evento de moradores aparecem "trilhas".

## Divergências entre protótipo e documentos
1. **"Trilhas com agenda" sem agenda.** Os requisitos chamam a área de "Trilhas com agenda", mas esta tela não tem agenda nem calendário, só aberta/fechada. O card diz que as trilhas sem guia "não têm agenda".
2. **Link sem destino correspondente.** `AdminPublicar.dc.html` tem o link "Marcar as datas de saída no calendário" que leva para esta tela, mas aqui não há calendário nem datas de saída.
3. **SMS fora do fluxo de aviso.** "Avisar moradores" manda SMS sem passar pelo Publicar: não tem público, nível, categoria nem o modelo padrão. Pelo Plano de Comunicação, o SMS em massa é só para avisos urgentes.
4. **ICMBio.** A autorização no site do ICMBio para quem vem de fora depende de um órgão externo, e os documentos-fonte não falam disso.
5. **Perfil.** Os documentos não dizem quem altera a situação das trilhas. O texto da tela diz "a equipe", sem defini-la.
6. **Dados fora do modelo.** Trilhas, tipo, situação e motivo não têm registro entre os 8 da V1.

## Notas para implementação
- Tela inteira da Fase 2. Na V1, o atalho "Trilhas · Abertas e fechadas" do Painel e o link de `AdminPublicar` ficam ocultos.
- A lista de 8 trilhas, os tipos e o fechamento inicial da "Trilha Lagoa da Mata" por "Chuva forte" são dados de exemplo do protótipo.
- A "Trilha Uxi" também aparece como ponto no mapa do Núcleo (`AdminEnergia`, `AdminColeta`, `AdminCasas`).
- O motivo é de escolha única, e o padrão exibido é "Chuva forte".

## Fotos das trilhas, 22/10/2026 (decisão A-23)

Cada trilha mostra a foto (56×56 px, cantos de 12 px) à esquerda do nome. As fotos são as mesmas das telas de trilhas dos moradores (`fotos/<trilha>.jpg`).
