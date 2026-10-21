# Depois do evento — `AdminPosEvento.dc.html`

| Campo | Valor |
| --- | --- |
| App | Meu Carajás Organizadores |
| Página do canvas | `organizador` |
| Nome na lista "Telas da versão 1" dos requisitos | Não está na lista da V1 |
| Versão | Fase 2 |
| Perfil que vê | Quem organizou o evento. No protótipo, o subtítulo é "CineFases · Comitê Jovem", ou seja, o Comitê Jovem Entre Fases. Os documentos não restringem o perfil |
| Protótipo | [`design/prototipo/AdminPosEvento.dc.html`](../../../design/prototipo/AdminPosEvento.dc.html) |
| Tamanho | 390×844 |

## Para que serve
Fazer o check-in de quem chega ao evento e, depois, publicar o resultado para os moradores: pessoas presentes, alimentos arrecadados, cestas montadas, destino da doação e fotos. O documento de eventos descreve o passo assim: "Depois do evento, o organizador pode postar fotos e o resultado, como os alimentos arrecadados". Os requisitos põem o pós-evento na Fase 2.

## Conteúdo da tela (de cima para baixo)
1. **Cabeçalho** (fundo escuro): botão voltar ("Voltar para o painel"); "Meu Carajás Organizadores"; título "Depois do evento"; subtítulo "CineFases · Comitê Jovem".
2. **Abas** (controle segmentado): "Check-in" e "Resultado".
3. **Aba "Check-in"**:
   - card escuro com o número de presentes, a linha "pessoas na entrada · <n> de 6 confirmados" e o botão "+" (rótulo "Entrou alguém sem confirmação", legenda "sem confirmar");
   - texto "Toque em quem chegou. Ingresso: 1 kg de alimento por pessoa.";
   - lista de confirmados (botão por pessoa), com a inicial, o nome e a situação "Confirmado" ou "Chegou": "Ana Clara", "Bruno Santos", "Carla Mendes", "Diego Martins", "Elisa Rocha", "Felipe Araújo".
4. **Aba "Resultado"**:
   - "Pessoas presentes": o número, com a legenda "Vem do check-in";
   - campo **"Alimentos arrecadados (kg)"** (texto, placeholder "Ex.: 120");
   - campo **"Cestas básicas montadas"** (texto, placeholder "Ex.: 12");
   - campo **"Para quem foi a doação"** (texto, placeholder "Ex.: ONG Via Autismo, Parauapebas");
   - botão tracejado "Adicionar fotos do evento" (ícone de câmera);
   - mensagem "Resultado publicado! Aparece no evento e na tela de Impacto.", depois de publicar;
   - botão **"Publicar resultado para os moradores"**.
5. **Barra de navegação inferior**: **Painel (ativo)**, Publicar, Energia, Aprovar, Equipe.

## Comportamento (script `Component`)
- **Estado inicial:** `tab: 'Check-in'`, `inn: {}` (ninguém chegou), `walk: 0`, `posted: false`. A tela abre com "0" presentes e "0 de 6 confirmados".
- **Abas:** trocam entre os blocos Check-in e Resultado.
- **Tocar numa pessoa:** alterna entre "Confirmado" e "Chegou".
- **Botão "+":** soma 1 às pessoas sem confirmação. Não há como diminuir.
- **Presentes** = confirmados que chegaram + entradas sem confirmação. O mesmo número aparece nas duas abas.
- **Campos do Resultado:** não estão ligados ao estado, então os valores digitados não são guardados nem validados.
- **"Adicionar fotos do evento":** não tem ação no protótipo.
- **"Publicar resultado para os moradores":** marca `posted: true` e mostra a mensagem de sucesso, mesmo com os campos vazios.

## Navegação
| Elemento | Leva para |
| --- | --- |
| Botão voltar (cabeçalho) | `AdminInicio.dc.html` |
| Barra inferior · Painel (ativo) | `AdminInicio.dc.html` |
| Barra inferior · Publicar | `AdminPublicar.dc.html` |
| Barra inferior · Energia | `AdminEnergia.dc.html` |
| Barra inferior · Aprovar | `AdminAprovar.dc.html` |
| Barra inferior · Equipe | `AdminEquipe.dc.html` |

Telas que trazem para cá: o atalho "Depois do evento · Check-in e resultado" do Painel e o link "Check-in e resultado" do evento publicado "CineFases" no Painel.

## Dados mostrados → registros do sistema
| Dado na tela | Registro da V1 |
| --- | --- |
| Nome do evento ("CineFases") e organizador ("Comitê Jovem") | **Evento** (nome, organizador) |
| Ingresso "1 kg de alimento por pessoa" | **Evento** (ingresso solidário) |
| Lista de confirmados e "<n> de 6 confirmados" | **Evento** (confirmações) + **Pessoa** (nome) |
| Check-in "Chegou" por pessoa | **Sem registro correspondente** |
| Entradas sem confirmação | **Sem registro correspondente** |
| Alimentos arrecadados (kg), cestas montadas, destino da doação | **Sem registro correspondente** |
| Fotos do evento | **Sem registro correspondente.** Evento não tem campo de foto, embora o documento de eventos cite "foto" na criação |
| Resultado publicado | **Sem registro correspondente** (nem situação do Evento para isso) |

## Regras dos documentos que se aplicam
- *Requisitos*, "Objetivo e escopo": "Representantes de rua, pós-evento e impacto" ficam na Fase 2.
- *Requisitos*, "Dados que o sistema guarda": Evento tem "nome, organizador, data e hora, local, interesse, ingresso solidário, vagas, situação (esperando aprovação, publicado), confirmações"; "Quem vê: Todos os moradores".
- *Eventos no Conecta Cidade*, "Como funciona", passo 6: "Depois do evento, o organizador pode postar fotos e o resultado, como os alimentos arrecadados."
- *Eventos no Conecta Cidade*, "Eventos para todo mundo": "1 kg de alimento por ingresso virou 33 cestas básicas para a ONG Via Autismo".
- *Contexto Entre Fases*: "O ingresso do cinema e das Olimpíadas era 1 kg de alimento: viraram 33 cestas básicas, entregues à ONG Via Autismo, de Parauapebas."
- *Requisitos*, "Requisitos gerais", LGPD: proteger dados de menores.

## Divergências entre protótipo e documentos
1. **Sem campos no modelo.** Check-in, entradas sem confirmação, kg arrecadados, cestas, destino da doação, fotos e resultado publicado não têm campo no registro Evento da V1.
2. **Fase 2 alcançável pela V1.** No Painel (tela da V1), o evento publicado "CineFases" tem o link "Check-in e resultado" para esta tela.
3. **Impacto não recebe o resultado.** A mensagem diz que o resultado "Aparece no evento e na tela de Impacto", mas `AdminImpacto.dc.html` só tem números fixos.
4. **Nomes de jovens para o organizador.** A lista de check-in mostra o nome de quem confirmou num evento "para jovens". Os requisitos dizem que Evento guarda "confirmações", mas não dizem se o organizador vê o nome de cada pessoa. O ponto é sensível por causa da regra da LGPD sobre dados de menores.
5. **Publicar sem validação.** "Publicar resultado para os moradores" funciona com os campos vazios. Os documentos não definem campos obrigatórios para o resultado.

## Notas para implementação
- Tela inteira da Fase 2. Na V1, o atalho do Painel e o link "Check-in e resultado" do CineFases ficam ocultos.
- Os nomes dos confirmados, "CineFases" e "1 kg de alimento" são dados de exemplo.
- O número de presentes do Resultado vem do check-in ("Vem do check-in").
- O botão "+" só soma. O protótipo não tem como corrigir uma entrada a mais.
