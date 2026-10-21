# Alcance do aviso — `AdminAlcance.dc.html`

| Campo | Valor |
| --- | --- |
| App | Meu Carajás Organizadores |
| Página do canvas | `organizador` |
| Nome na lista "Telas da versão 1" dos requisitos | Alcance do aviso |
| Versão | V1 com partes ocultas até a Fase 2 |
| Perfil que vê | Administração do Núcleo ("vê alcance", em Perfis e permissões). O registro Entrega do aviso diz "Organizadores (para a tela de Alcance)" |
| Protótipo | [`design/prototipo/AdminAlcance.dc.html`](../../../design/prototipo/AdminAlcance.dc.html) |
| Tamanho | 390×844 |

## Para que serve
Mostra "Quanto do público já viu o aviso, por rua e por canal", comparando com a "Meta de 95% em 24 horas (urgente: 2 horas)". Tem o botão para reenviar o aviso a quem ainda não viu. É o passo 5 do fluxo "Publicar um aviso": "Acompanha o alcance e reenvia para quem ainda não viu".

## Conteúdo da tela (de cima para baixo)
O cabeçalho e a barra inferior ficam fixos e o meio da tela rola.

1. **Cabeçalho**
   - Botão de voltar (seta, `aria-label="Voltar para o painel"`).
   - Rótulo "Meu Carajás Organizadores".
   - Título "Alcance do aviso".
   - Subtítulo com o nome do aviso: "Interrupção no fornecimento de água".
2. **Etiqueta** "Dados de exemplo".
3. **Card de resumo**
   - Número grande "78%", com "Meta: 95% em 24 h" à direita, em vermelho.
   - Texto: "das casas das Ruas Japurá, Jari e Juruá já viram o aviso · publicado há 9 h".
   - Barra de progresso preenchida até 78%, em amarelo, com uma linha preta em 95%.
   - Nota: "A linha preta marca a meta do Plano de Comunicação."
4. **Seção "Por rua"**: uma linha por rua, com nome, "<porcentagem> · <situação>" e uma barra de progresso.
5. **Seção "Por canal"**: grade 2×2 com:
   - "App Meu Carajás Super App" 61%.
   - "SMS" 12%.
   - "Representantes de rua" 5%.
   - "Ainda não viram" 22%, em vermelho.
6. **Mensagem** (faixa verde), só depois de reenviar.
7. **Botão** "Reenviar para quem não viu".
8. **Botão de contorno (link)** "Pedir porta a porta nas Ruas Jari e Juruá".
9. **Barra de navegação inferior**: "Painel" (marcado como ativo, `aria-current="page"`), "Publicar", "Energia", "Aprovar", "Equipe".

## Comportamento (script `Component`)
- **Estado inicial:** `{ msg: '' }`.
- **Ruas** (`renderVals().streets`), dados de exemplo:

  | Rua | % | Situação mostrada |
  | --- | --- | --- |
  | Rua Japurá | 92 | "quase lá" (barra verde `#1E5B40`) |
  | Rua Jari | 71 | "atrasada" (barra amarela `#D4A017`) |
  | Rua Juruá | 66 | "atrasada" (barra amarela `#D4A017`) |

  - Regra do script: com 90% ou mais, a situação é "quase lá" e a barra é verde; abaixo de 90%, é "atrasada" e a barra é amarela.
- **"Reenviar para quem não viu":** grava `msg` e mostra "Notificação reenviada para as casas que ainda não abriram o aviso." Nenhum número muda.
- O resumo (78%, meta, "publicado há 9 h") e os números por canal estão fixos no markup, sem relação com o script.
- O método `chips()` existe no script mas não é usado nesta tela.

## Navegação
| Elemento | Leva para |
| --- | --- |
| Botão voltar (cabeçalho) | `AdminInicio.dc.html` |
| "Pedir porta a porta nas Ruas Jari e Juruá" | `AdminRepresentantes.dc.html` (Fase 2) |
| Barra: Painel | `AdminInicio.dc.html` |
| Barra: Publicar | `AdminPublicar.dc.html` |
| Barra: Energia | `AdminEnergia.dc.html` (Fase 2) |
| Barra: Aprovar | `AdminAprovar.dc.html` |
| Barra: Equipe | `AdminEquipe.dc.html` |

Chega-se a esta tela pelo Painel: o card "Aviso de água abaixo da meta", a ferramenta "Alcance dos avisos" e os links "Ver alcance".

## Dados mostrados → registros do sistema
| Dado na tela | Registro |
| --- | --- |
| Nome do aviso, ruas ("Ruas Japurá, Jari e Juruá"), "publicado há 9 h" | Aviso (o quê, ruas, data de envio) |
| % das casas que viram, no total e por rua | Entrega do aviso (casa, visto), com a rua vinda do registro Casa |
| Por canal: App Meu Carajás Super App, SMS | Entrega do aviso (canal, enviado, visto) |
| Por canal: Representantes de rua | **Sem registro correspondente** (representantes de rua são Fase 2) |
| "Ainda não viram" | Entrega do aviso (visto = não) |
| Meta "95% em 24 h" | Não é campo de registro. É uma regra (requisitos e Plano de Comunicação) |
| Nomes das ruas | Tabela própria de ruas e quarteirões (fora dos 8 registros, citada nos requisitos) |

## Regras dos documentos que se aplicam
- **Requisitos da V1 · Telas da versão 1 · Alcance do aviso:** "Quanto do público já viu o aviso, por rua e por canal"; "Meta de 95% em 24 horas (urgente: 2 horas); botão de reenviar".
- **Requisitos da V1 · Fluxos principais · Publicar um aviso, passo 5:** "Acompanha o alcance e reenvia para quem ainda não viu."
- **Requisitos da V1 · SMS e WhatsApp · Regras de envio:**
  - Regra 3: "Um mesmo aviso não manda dois SMS para o mesmo número."
  - Regra 4: "“Reenviar para quem não viu” manda SMS só para quem ainda não abriu o aviso no app."
  - Regra 5: "O sistema guarda quantos SMS saíram por mês."
- **Requisitos da V1 · Piloto · Critérios de aceite:** "A tela de Alcance mostra quantas casas viram cada aviso."
- **Requisitos da V1 · Piloto · Métricas:** avisos importantes, 95% das casas em 24 horas; urgentes, 95% em 2 horas.
- **Plano de Comunicação · Resumo:** meta de 95% das casas em até 24 horas, urgentes em até 2 horas.
- **Plano de Comunicação · Os 5 princípios, nº 5:** "Confirmação de entrega. Não basta enviar; é preciso saber se chegou."
- **Requisitos da V1 · Dados · Entrega do aviso:** aviso, casa, canal, enviado, visto; visível para "Organizadores (para a tela de Alcance)".

## Divergências entre protótipo e documentos
- **Reenvio por notificação × por SMS:** a mensagem do protótipo diz "Notificação reenviada para as casas que ainda não abriram o aviso.". A regra de envio 4 dos requisitos diz que o reenvio "manda SMS só para quem ainda não abriu o aviso no app".
- **Itens de Fase 2 visíveis:**
  - Canal "Representantes de rua" (5%) no bloco "Por canal".
  - Botão "Pedir porta a porta nas Ruas Jari e Juruá" (→ AdminRepresentantes).
  - Item "Energia" na barra inferior.
- **Meta só de 24 h:** a tela mostra "Meta: 95% em 24 h" fixa. A regra "urgente: 2 horas" dos requisitos não aparece, e a meta não varia com o nível do aviso. O Plano de Comunicação traz ainda "até 3 dias" para o Verde (informativo), prazo que não aparece nem nos requisitos nem no protótipo.
- **Quantas casas × porcentagem:** o critério de aceite pede que a tela mostre "quantas casas viram cada aviso". O protótipo mostra só porcentagens, sem número de casas.
- **"Visto" por SMS e por representante:** o bloco "Por canal" atribui "viram" ao SMS (12%) e aos representantes (5%). Os requisitos definem "não viu" como "quem ainda não abriu o aviso no app" e não dizem como se registra que um SMS foi visto.
- **Um aviso só:** a tela mostra um aviso fixo. Não há como escolher outro aviso aqui.
- **Item ativo da barra:** a barra marca "Painel" como ativo (`aria-current="page"`), não um item próprio de Alcance. O Alcance não tem item na barra.
- **Contagem de SMS por mês** (regra de envio 5): não aparece nesta tela.

## Notas para implementação
- A etiqueta "Dados de exemplo" é só do protótipo. Os números (78%, 92/71/66%, 61/12/5/22%, "publicado há 9 h") são de exemplo.
- Na V1 o canal "Representantes de rua" e o botão "Pedir porta a porta…" não entram (Fase 2, tabela de escopo).
- A meta deve seguir o nível do aviso: 24 horas para importante e 2 horas para urgente, como dizem os requisitos. O protótipo só desenha a de 24 h.
- O reenvio, pelos requisitos, é por SMS, só para quem não abriu o aviso no app, sem repetir SMS para o mesmo número (regras de envio 3 e 4). Como conciliar as regras 3 e 4 não está descrito nos documentos.
- Os limites de cor e situação (90% → "quase lá"; abaixo → "atrasada") são do script do protótipo. Os documentos não definem esses limites.
- O `<title>` do arquivo é "Meu Carajás Organizadores – Alcance".
