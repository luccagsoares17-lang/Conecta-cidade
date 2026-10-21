# Representantes de rua — `AdminRepresentantes.dc.html`

| Campo | Valor |
| --- | --- |
| App | Meu Carajás Organizadores |
| Página do canvas | `organizador` |
| Nome na lista "Telas da versão 1" dos requisitos | Não está na lista da V1 |
| Versão | Fase 2 |
| Perfil que vê | Representante de rua. O subtítulo diz "Rua Jari · você é o representante". Esse perfil não existe entre os perfis da V1 (ver Divergências) |
| Protótipo | [`design/prototipo/AdminRepresentantes.dc.html`](../../../design/prototipo/AdminRepresentantes.dc.html) |
| Tamanho | 390×844 |

## Para que serve
Tela do representante de rua do Plano de Comunicação: mostra o aviso que precisa ser repassado pessoalmente, a lista das casas da rua que não recebem pelo celular para marcar quem já foi avisado ("Você garante os últimos 5%") e os moradores novos que precisam de boas-vindas.

## Conteúdo da tela (de cima para baixo)
1. **Cabeçalho** (fundo escuro): botão voltar ("Voltar para o painel"); "Meu Carajás Organizadores"; título "Representantes de rua"; subtítulo "Rua Jari · você é o representante".
2. **Card do aviso**: etiquetas "Importante" (amarelo) e "Repassar pessoalmente"; título "Interrupção no fornecimento de água"; linha "Quinta-feira, 5/11, das 8h às 14h · Armazene água na quarta à noite".
3. **Card de progresso** (escuro): "<n> de 5 casas avisadas", barra de progresso e "Casas que não recebem pelo celular. Você garante os últimos 5%."
4. **Título "Casas para visitar"** e uma linha por casa (botão inteiro), com caixa de marcação, endereço, motivo e situação "Pendente" ou "Avisado":
   - "Rua Jari, 7" — "Idosa mora sozinha · não usa celular"
   - "Rua Jari, 15" — "Sem internet em casa"
   - "Rua Jari, 22" — "Pessoa com deficiência visual"
   - "Rua Jari, 31" — "Trabalha em turnos · não abriu o aviso"
   - "Rua Jari, 40" — "Idoso · prefere aviso pessoalmente"
5. **Título "Chegou gente nova"** e card "Rua Jari, 3" — "Família transferida esta semana", com o botão "Dar boas-vindas" (que vira "Feito ✓").
6. Nota: "Ao dar as boas-vindas, você entrega o QR Code do app e inscreve a família no canal oficial."
7. **Barra de navegação inferior**: **Painel (ativo)**, Publicar, Energia, Aprovar, Equipe.

## Comportamento (script `Component`)
- **Estado inicial:** `done: { h1: true }` (só "Rua Jari, 7" começa avisada) e `wel: false`. A tela abre com "1 de 5 casas avisadas" e a barra em 20%.
- **Tocar numa casa:** alterna entre "Pendente" e "Avisado" e recalcula o contador e a barra (`done / 5`).
- **"Dar boas-vindas":** alterna entre "Dar boas-vindas" e "Feito ✓". Tocar de novo desfaz.
- O aviso, as casas e a família nova são dados fixos do protótipo. Não há envio de mensagem nem validação.

## Navegação
| Elemento | Leva para |
| --- | --- |
| Botão voltar (cabeçalho) | `AdminInicio.dc.html` |
| Barra inferior · Painel (ativo) | `AdminInicio.dc.html` |
| Barra inferior · Publicar | `AdminPublicar.dc.html` |
| Barra inferior · Energia | `AdminEnergia.dc.html` |
| Barra inferior · Aprovar | `AdminAprovar.dc.html` |
| Barra inferior · Equipe | `AdminEquipe.dc.html` |

Telas que trazem para cá: o atalho "Representantes · Porta a porta" do Painel e o botão "Pedir porta a porta nas Ruas Jari e Juruá" de `AdminAlcance.dc.html`.

## Dados mostrados → registros do sistema
| Dado na tela | Registro da V1 |
| --- | --- |
| Aviso (nível "Importante", o quê, quando, o que fazer) | **Aviso** (nível, o quê, quando, o que fazer) |
| "não abriu o aviso" | **Entrega do aviso** (visto) |
| Endereço "Rua Jari, 7" | **Casa** (rua, número) |
| Representante de rua (pessoa, rua) e suplente | **Sem registro correspondente** |
| Motivo da visita (idoso que mora sozinho, sem internet, deficiência visual, trabalha em turnos, prefere aviso pessoalmente) | **Sem registro correspondente** |
| Situação "Avisado"/"Pendente" do porta a porta | **Sem registro correspondente.** A Entrega do aviso tem canal, enviado e visto, mas não tem o canal "porta a porta" na lista da V1 |
| "Chegou gente nova" / família transferida / boas-vindas feitas | **Sem registro correspondente.** Casa tem "data de cadastro", mas não tem chegada nem boas-vindas |
| Inscrição no "canal oficial" | **Sem registro correspondente** |

## Regras dos documentos que se aplicam
- *Requisitos*, "Objetivo e escopo": "Representantes de rua, pós-evento e impacto" ficam na Fase 2.
- *Plano de Comunicação*, "Rede de representantes de rua":
  - "Cada rua ou quadra tem um morador voluntário (e um suplente)"; "É isso que garante os últimos 5%".
  - Tarefas do representante:
    - manter "uma lista simples das casas da sua rua, marcando quem não usa celular, idosos que moram sozinhos e pessoas com deficiência";
    - repassar "pessoalmente os avisos vermelhos e amarelos para essas casas";
    - receber "novos moradores e os inscreve no canal oficial";
    - levar "à administração dúvidas e problemas da rua".
  - Organização: grupo de WhatsApp só dos representantes com a administração, reunião por trimestre e reconhecimento público.
- *Plano de Comunicação*, "Níveis de urgência": "Representantes de rua" é canal obrigatório do nível Vermelho. "Corte programado de energia ou água" é exemplo do Amarelo.
- *Plano de Comunicação*, "Os canais": dica de "imprimir um QR Code de inscrição" do canal do WhatsApp e "entregar no kit de boas-vindas de quem chega ao núcleo".
- *Requisitos*, "SMS e WhatsApp": "WhatsApp — Só cadastro … nenhum aviso sai por ele".
- *Requisitos*, "Piloto: aceite e métricas": meta de 95% das casas em 24 horas (importante) e em 2 horas (urgente).

## Divergências entre protótipo e documentos
1. **Perfil novo.** A tela é do app Organizadores, mas quem a usa é o representante de rua ("você é o representante"), que o Plano define como "morador voluntário". Esse perfil não está na tabela de perfis da V1 (Administração, Organizador de eventos, Comitê Jovem) nem em `AdminEquipe`.
2. **Ponto de vista diferente da tela de origem.** `AdminAlcance` leva para cá com "Pedir porta a porta nas Ruas Jari e Juruá", que é uma ação da administração. Esta tela mostra só a Rua Jari, do ponto de vista do representante. Não há tela para a administração pedir ou acompanhar o porta a porta de várias ruas.
3. **"Canal oficial" e QR Code.** No Plano de Comunicação, o canal oficial é o "Canal oficial no WhatsApp", e o QR Code é de inscrição nesse canal. O protótipo fala em "QR Code do app" e "canal oficial", e os requisitos dizem que nenhum aviso sai pelo WhatsApp. Os documentos não dizem qual é o "canal oficial" no Meu Carajás Super App.
4. **Suplente ausente.** O Plano prevê um suplente por rua, e a tela não mostra suplente.
5. **Tarefa do Plano ausente.** "Leva à administração dúvidas e problemas da rua" não aparece na tela.
6. **Motivos além do Plano.** A lista inclui "Sem internet em casa" e "Trabalha em turnos · não abriu o aviso". O Plano cita "quem não usa celular, idosos que moram sozinhos e pessoas com deficiência". Os novos motivos combinam com o Diagnóstico do Plano ("quem não tem internet", "quem trabalha em turnos"), mas não com a lista do representante.
7. **Unidade: rua ou quadra.** O Plano fala em "rua ou quadra". O protótipo usa a rua (Rua Jari) como unidade do representante.
8. **Dados fora do modelo.** Representante, lista de casas com motivo, situação do porta a porta e moradores novos não têm registro entre os 8 da V1.

## Notas para implementação
- Tela inteira da Fase 2. Na V1, o atalho "Representantes · Porta a porta" do Painel e o botão "Pedir porta a porta…" de `AdminAlcance` ficam ocultos.
- O aviso de exemplo é o mesmo do modelo de SMS dos requisitos: interrupção de água na quinta-feira, 5/11, das 8h às 14h, nas Ruas Japurá, Jari e Juruá.
- "5 casas", os endereços e os motivos são dados de exemplo. O cálculo do progresso no protótipo é `casas avisadas / casas da lista`.
- A marcação das casas e as boas-vindas são interruptores (tocar de novo desfaz).
