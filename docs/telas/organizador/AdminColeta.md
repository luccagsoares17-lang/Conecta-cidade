# Coleta seletiva — `AdminColeta.dc.html`

| Campo | Valor |
| --- | --- |
| App | Conecta Cidade Organizadores |
| Página do canvas | `organizador` |
| Nome na lista "Telas da versão 1" dos requisitos | Não está na lista da V1. A lista da V1 tem uma tela "Coleta seletiva", mas ela é do app do morador, não do organizador |
| Versão | Fase 2 (a tela inteira é a rota do caminhão; a parte da V1, a tabela de dias, não está nesta tela — ver "V1 × Fase 2") |
| Perfil que vê | Não definido nos documentos. No protótipo, abre pelo Painel do organizador (Ferramentas → "Coleta seletiva · Rota do caminhão") |
| Protótipo | [`design/prototipo/AdminColeta.dc.html`](../../../design/prototipo/AdminColeta.dc.html) |
| Tamanho | 390×844 |

## Para que serve
Acompanhar a rota do caminhão da coleta seletiva no dia: quantos trechos de rua já foram coletados, onde o caminhão está e quanto falta. Também avisa por SMS as ruas que ainda vão receber o caminhão. É a "Rota do caminhão no mapa", que os requisitos colocam na Fase 2.

## V1 × Fase 2
| Parte | Onde está no protótipo | Versão |
| --- | --- | --- |
| Tabela de dias de cada coleta e o que vai em cada uma ("Coleta seletiva (dias de cada coleta)") | **Não está nesta tela.** No app do organizador, fica no Painel (`AdminInicio.dc.html`), bloco "Coleta seletiva — O que os moradores veem no app", com dias SEG a SEX, tipos de coleta, "Ver dicas de descarte", "Editar cronograma" e a nota "Cronograma oficial da coleta seletiva do Núcleo (PRO 022144)." | V1 ("Sim, só a tabela de dias") |
| Cabeçalho "Terça · Recicláveis" e "Saiu às 7h" | Esta tela, card de progresso | Faz parte do acompanhamento da rota do dia → Fase 2 |
| Progresso "<n> de 53 trechos coletados", previsão de término | Esta tela | Fase 2 |
| "Mapa da coleta" por trecho de rua, "Ver rua", botões de quarteirão | Esta tela | Fase 2 ("Rota do caminhão no mapa") |
| Botão "Caminhão passou no trecho atual" | Esta tela | Fase 2 |
| Botão "Avisar as ruas que faltam" (SMS) | Esta tela | Fase 2 (depende da rota) |

Conclusão: nada nesta tela é da V1. Se a tela for mantida na V1, sobra só o título.

## Conteúdo da tela (de cima para baixo)
1. **Cabeçalho** (fundo escuro): botão voltar (rótulo "Voltar para o painel"); "Conecta Cidade Organizadores"; título "Coleta seletiva"; subtítulo "Rota do caminhão hoje · recicláveis".
2. **Card de progresso** (escuro):
   - à esquerda "Terça · Recicláveis", à direita "Saiu às 7h";
   - número grande "<feitos> de <total> trechos coletados";
   - barra de progresso;
   - linha "Faltam <n> trechos · término previsto em cerca de <n×5> min" ou "Coleta de hoje concluída".
3. **Card "Mapa da coleta"** — à direita "por trecho de rua".
   - O mesmo mapa SVG do Núcleo usado em `AdminEnergia` e `AdminCasas`: PA-275 · Rod. Raimundo Mascarenhas, AV. KARAJÁS, AV. CATETE, QUARTEIRÃO 1/2/3, as 18 ruas de ACARÁ a TAPAJÓS, Hospital Yutaka Takeda, Trilha Uxi, Doce Norte E.C., Escola, Hotel, Portaria, "N ↑".
   - Legenda gerada pelo script: "Já passou" (verde), "Caminhão aqui" (azul), "Falta passar" (branco).
   - Campo **"Ver rua"** (select) com "Rua Acará" … "Rua Tapajós".
   - Botões "Quarteirão 1", "Quarteirão 2", "Quarteirão 3", com a situação do trecho ("Já passou", "Caminhão aqui", "Falta passar" ou "Não passa aqui").
   - Caixa de resumo: "Rua <rua> · Quarteirão <n>" + informação do trecho.
4. **Mensagem de confirmação** (verde), só depois de tocar em "Avisar as ruas que faltam".
5. Botão **"Caminhão passou no trecho atual"**, que vira "Rota concluída ✓" no fim.
6. Botão **"Avisar as ruas que faltam"**.
7. Nota: "O motorista marca cada trecho pelo celular. Os moradores veem no app quando o caminhão está chegando."
8. **Barra de navegação inferior**: **Painel (ativo)**, Publicar, Energia, Aprovar, Equipe.

## Comportamento (script `Component`)
- **Estado inicial:** `done: 22` (22 trechos já coletados), `sel: null`, `seg: null`, `msg: ''`.
- **Rota:** o script monta a rota passando pelas 18 ruas na ordem da lista. Nas ruas de posição par (Acará, Araguaia…), vai do Quarteirão 1 ao 3; nas de posição ímpar (Amazonas, Arapiuns…), do 3 ao 1. Tapajós só tem os quarteirões 2 e 3. Total: **53 trechos** (17 × 3 + 2).
- **Situação do trecho:**
  - posição na rota menor que `done` → "Já passou";
  - igual a `done` → "Caminhão aqui";
  - maior → "Falta passar".
- **Trecho mostrado por padrão:** o atual. Com `done = 22`, é **Rua Iriri · Quarteirão 2**. Na tela inicial aparecem "22 de 53 trechos coletados", barra em 42% e "Faltam 31 trechos · término previsto em cerca de 155 min".
- **Informação do trecho:**
  - "Coleta feita neste trecho";
  - "O caminhão está neste trecho agora";
  - "Falta passar · cerca de <posições até lá × 5> min".
- **"Caminhão passou no trecho atual":** soma 1 a `done` (até 53), volta o mapa para o trecho atual e apaga a mensagem.
- **"Avisar as ruas que faltam":** mostra "SMS enviado para as casas de <n> trechos: “O caminhão dos recicláveis passa na sua rua em breve.”"
- Select e botões de quarteirão funcionam como em `AdminEnergia`: trocar a rua limpa o quarteirão, e quarteirão inexistente fica desabilitado.
- Os 5 minutos por trecho e o "Saiu às 7h" são valores fixos do protótipo.

## Navegação
| Elemento | Leva para |
| --- | --- |
| Botão voltar (cabeçalho) | `AdminInicio.dc.html` |
| Barra inferior · Painel (ativo) | `AdminInicio.dc.html` |
| Barra inferior · Publicar | `AdminPublicar.dc.html` |
| Barra inferior · Energia | `AdminEnergia.dc.html` |
| Barra inferior · Aprovar | `AdminAprovar.dc.html` |
| Barra inferior · Equipe | `AdminEquipe.dc.html` |

A tela é aberta pelo atalho "Coleta seletiva · Rota do caminhão" do Painel.

## Dados mostrados → registros do sistema
| Dado na tela | Registro da V1 |
| --- | --- |
| Nomes das 18 ruas e dos 3 quarteirões | Fora dos 8 registros: "tabela própria" dos requisitos |
| Dia e tipo da coleta do dia ("Terça · Recicláveis") | **Sem registro correspondente.** A própria tabela de dias da V1 também não está entre os 8 registros |
| Rota (ordem dos trechos), trecho atual, trechos feitos | **Sem registro correspondente** |
| Hora de saída, previsão de término, tempo por trecho | **Sem registro correspondente** |
| Marcação do motorista em cada trecho | **Sem registro correspondente** (e não há perfil "motorista") |
| Casas dos trechos que faltam (destino do SMS) | **Casa** (rua, quarteirão) + celular de **Pessoa** |
| SMS "O caminhão dos recicláveis passa na sua rua em breve." | Não está ligado a um **Aviso**. Não tem nível, público nem situação |

## Regras dos documentos que se aplicam
- *Requisitos*, "Objetivo e escopo": "Coleta seletiva (dias de cada coleta) — Sim, só a tabela de dias" na V1; "Rota do caminhão no mapa" na Fase 2.
- *Requisitos*, "Telas da versão 1" (app do morador): tela "Coleta seletiva", "Dias de cada coleta e o que vai em cada uma", com a regra "Destaca a coleta do dia".
- *Requisitos*, "Fase 2 e perguntas em aberto": "rota da coleta" está na Fase 2. Uma pergunta em aberto: "Quais os dias reais de cada coleta seletiva no Núcleo?"
- *Requisitos*, "Dados que o sistema guarda": ruas e quarteirões em tabela própria, "de Acará a Tapajós".
- *Requisitos*, "SMS e WhatsApp": o SMS serve para "Comunicados e alertas", com "texto no modelo padrão"; "Um mesmo aviso não manda dois SMS para o mesmo número"; "O sistema guarda quantos SMS saíram por mês, porque o serviço cobra por mensagem".
- *Plano de Comunicação*, "Os canais": SMS em massa "Somente avisos urgentes". "Modelo padrão de aviso": todo aviso segue o mesmo formato (o quê, quando, onde, o que fazer, dúvidas).
- *Conecta Cidade: o aplicativo*, "Avisos do Núcleo": "coleta de lixo" é uma das categorias de aviso.

## Divergências entre protótipo e documentos
1. **A tabela de dias da V1 não está aqui.** Os requisitos dizem que a coleta entra na V1 "só a tabela de dias". Esta tela do organizador só tem a rota (Fase 2). No app do organizador, a tabela de dias e o "Editar cronograma" ficam no Painel.
2. **Tela do organizador sem lugar na lista da V1.** A lista da V1 tem 6 telas do organizador, nenhuma de coleta. A única "Coleta seletiva" da V1 é do app do morador.
3. **Fase 2 dentro da V1.** O atalho do Painel (tela da V1) para esta tela já diz "Rota do caminhão".
4. **SMS fora das regras.** "Avisar as ruas que faltam" manda SMS com texto livre ("O caminhão dos recicláveis passa na sua rua em breve."):
   - não segue o modelo padrão;
   - não passa pelo Publicar (público, nível, canais);
   - não é um comunicado com nível.
   O Plano de Comunicação ainda limita o SMS em massa a avisos urgentes.
5. **Perfil "motorista".** A nota cita um motorista que "marca cada trecho pelo celular", mas não existe esse perfil nos documentos nem tela para ele no protótipo.
6. **Função do morador sem regra.** A nota diz "Os moradores veem no app quando o caminhão está chegando", e os documentos não descrevem isso.
7. **Divergência entre telas.** O cabeçalho chama a coleta de terça de "Recicláveis". A tabela de dias do Painel (`AdminInicio`) lista para terça "Lixo comum", "Plástico", "Vidro" e "Componentes elétricos". "Recicláveis" não é um dos tipos do cronograma.
8. **Dias da coleta.** "Terça" e o "Cronograma oficial … (PRO 022144)" do Painel aparecem como definidos, mas os requisitos ainda perguntam "Quais os dias reais de cada coleta seletiva no Núcleo?".
9. **Dados fora do modelo.** Rota, trechos, posição do caminhão, horários e a própria tabela de dias não têm registro entre os 8 da V1.

## Notas para implementação
- Na V1, esta tela fica oculta, junto com o atalho "Coleta seletiva · Rota do caminhão" do Painel. A tabela de dias da V1 é a do Painel e a da tela do morador.
- A tabela de dias precisa de um lugar para ser guardada, e os requisitos não definem esse registro. É preciso decidir isso antes de implementar.
- O mapa é o mesmo componente de `AdminEnergia` e `AdminCasas`. A ordem das ruas e a ausência da Rua Tapajós no Quarteirão 1 entram no cálculo da rota (53 trechos).
- Valores de exemplo do protótipo: `done = 22`, 5 min por trecho, "Saiu às 7h", "Terça · Recicláveis".
- Se o SMS for mantido na Fase 2, ele precisa seguir as regras de SMS dos requisitos (modelo padrão, contagem mensal, um SMS por número).
