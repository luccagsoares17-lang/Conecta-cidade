# Eventos · jovem — `JovemEventos.dc.html`

| Campo | Valor |
| --- | --- |
| App | Conecta Cidade (morador) |
| Página do canvas | `morador` ("Conecta Cidade") — conforme `design/prototipo/canvas.json` |
| Nome na lista "Telas da versão 1" dos requisitos | Eventos |
| Versão | V1 |
| Perfil que vê | Jovem |
| Protótipo | [`design/prototipo/JovemEventos.dc.html`](../../../design/prototipo/JovemEventos.dc.html) |
| Tamanho | 390×844 |

## Para que serve
É a versão do perfil jovem da tela Eventos da V1, uma "Agenda com filtro por interesse e botão Eu vou" (Requisitos › Telas da versão 1). Eventos é uma das áreas que o jovem pode usar (Requisitos › Perfis e permissões, linha Jovem).

## Conteúdo da tela (de cima para baixo)
1. **Cabeçalho** (fixo)
   - Botão voltar (seta, `aria-label="Voltar para o início"`) → `JovemInicio.dc.html`.
   - Título: "Eventos"; subtítulo: "Feito pela galera, para a galera".
   - Selo à direita: "Jovem".
2. **Filtro por interesse**: faixa de chips que rola na horizontal, com "Todos", "Cinema", "Culinária", "Videogame", "Vôlei" e "Futebol".
3. **Lista de eventos** (rola na vertical). Cada card tem:
   - um bloco com mês e dia (ex.: "NOV" / "7");
   - o nome, o organizador e o dia da semana, horário e local;
   - uma etiqueta de categoria e, quando o evento é solidário, a etiqueta "Ingresso: 1 kg de alimento";
   - o botão "Eu vou" (muda para "Confirmado").

   Eventos de exemplo, na ordem do script:

   | Data | Nome | Organizador | Quando · onde | Etiqueta | Solidário |
   | --- | --- | --- | --- | --- | --- |
   | NOV 7 | CineFases | Comitê Jovem Entre Fases | Sábado, 19h · Clube do Núcleo | Cinema | Sim |
   | NOV 13 | Noite de Pizza | Comitê Jovem Entre Fases | Sexta, 19h30 · Salão de festas | Culinária | Não |
   | NOV 21 | Olimpíadas Entre Fases | Comitê Jovem Entre Fases | Sábado, 8h · Ginásio poliesportivo | Esportes | Sim |
   | DEZ 5 | Torneio de videogame | Grêmio estudantil | Sábado, 14h · Biblioteca do Núcleo | Videogame | Não |
   | NOV 28 | Encontro de boas-vindas | Administração do Núcleo · Oficial | Sábado, 17h · Praça central | Novos moradores | Não |
4. **Não há barra de navegação inferior** nesta tela.

## Comportamento (script `Component`)
- Estado inicial: `{ tag: 'Todos', going: {} }`. A tela abre com o filtro "Todos" e nenhum evento confirmado.
- **Chips de filtro:** tocar num chip grava `tag`. O chip ativo fica escuro (`#13241B`). Com "Todos", a lista mostra os 5 eventos. Com outro chip, mostra só os eventos cuja lista interna `tags` contém aquele interesse:
  - "Cinema" → CineFases
  - "Culinária" → Noite de Pizza
  - "Videogame" → Torneio de videogame
  - "Vôlei" ou "Futebol" → Olimpíadas Entre Fases (`tags: ['Vôlei', 'Futebol']`, etiqueta "Esportes")
  - "Encontro de boas-vindas" tem `tags: []` e só aparece em "Todos".
- **"Eu vou":** alterna `going[id]`. Ligado, o rótulo vira "Confirmado", com fundo verde-claro e `aria-pressed="true"`. Tocar de novo desfaz a confirmação.
- Não aparece contagem de confirmações, lembrete nem mensagem de sucesso.

## Navegação
| Elemento | Leva para |
| --- | --- |
| Botão voltar | `JovemInicio.dc.html` |

Chegam a esta tela: o card "Eventos" e o item "Eventos" da barra de `JovemInicio.dc.html`, e o item "Eventos" da barra de `JovemFamilia.dc.html`.

## Dados mostrados → registros do sistema
| Dado na tela | Registro |
| --- | --- |
| Nome do evento | Evento (nome) |
| Organizador ("Comitê Jovem Entre Fases", "Grêmio estudantil", "Administração do Núcleo · Oficial") | Evento (organizador) → Organizador (grupo) |
| Mês/dia, dia da semana e horário | Evento (data e hora) |
| Local | Evento (local) |
| Etiqueta de categoria / interesses do filtro | Evento (interesse) |
| "Ingresso: 1 kg de alimento" | Evento (ingresso solidário) |
| "Eu vou" / "Confirmado" | Evento (confirmações) |
| Interesses do jovem, para ordenar o filtro | Pessoa (interesses) — **não é usado no protótipo** |
| "· Oficial" (selo de oficial) | Sem campo próprio; o registro Evento não tem um campo "oficial" |
| Etiquetas "Esportes" e "Novos moradores" | Não fazem parte da lista de interesses do filtro; o registro Evento tem um único campo "interesse" |

## Regras dos documentos que se aplicam
- **Requisitos › Telas da versão 1 › Eventos:** "Agenda com filtro por interesse e botão Eu vou"; "Mostra primeiro os interesses do cadastro; lembrete no dia".
- **Requisitos › Perfis e permissões (linha Jovem):** o jovem pode usar "Eventos".
- **Requisitos › Dados que o sistema guarda › Evento:** "Nome, organizador, data e hora, local, interesse, ingresso solidário, vagas, situação (esperando aprovação, publicado), confirmações"; "Quem vê: Todos os moradores".
- **Requisitos › Dados › Permissão do jovem:** a área "Eventos" pode estar ligada ou desligada pelo gestor.
- **Requisitos › SMS e WhatsApp › Notificação do app:** "Todo aviso e evento publicado".
- **Eventos no Conecta Cidade › Como funciona:** "O morador toca em 'Eu vou' e vê quantas pessoas já confirmaram"; "No dia, o app manda um lembrete com o horário e o local".
- **Eventos no Conecta Cidade › Funcionalidades:** "Selo 'oficial': eventos da administração do Núcleo e da Vale aparecem marcados".
- **Conecta Cidade: o aplicativo › Eventos que vão acontecer:** "data, hora, local e quantas pessoas confirmaram"; "Filtro por interesse... cinema (57,7%), culinária (49,3%), videogame (45%), vôlei (41%) e futebol (30%)".

## Divergências entre protótipo e documentos
1. **O filtro não começa pelos interesses do cadastro.** A regra é "Mostra primeiro os interesses do cadastro". O protótipo abre em "Todos", com a lista na ordem fixa do script.
2. **Não mostra quantas pessoas confirmaram.** Os documentos de Eventos e do aplicativo pedem essa contagem, e o registro Evento tem "confirmações". O botão só alterna "Eu vou" / "Confirmado".
3. **Não há lembrete no dia** ("lembrete no dia" na lista de telas).
4. **A lista não está em ordem de data:** "DEZ 5" (Torneio de videogame) vem antes de "NOV 28" (Encontro de boas-vindas).
5. **Etiquetas fora do filtro:** "Esportes" e "Novos moradores" não são chips de filtro. O evento "Encontro de boas-vindas" (`tags: []`) só aparece em "Todos". O evento das Olimpíadas tem dois interesses ("Vôlei" e "Futebol"), mas o registro Evento prevê um único campo "interesse".
6. **Selo "Oficial" como texto:** o selo aparece só como "· Oficial" junto do nome do organizador. O registro Evento não tem esse dado.
7. **Vagas** (campo do registro Evento) não aparecem.
8. **Não há estado de "Eventos desligado".** O gestor pode desligar a área Eventos (Permissão do jovem), mas o protótipo não mostra a tela nesse caso.
9. **Sem barra de navegação inferior.** O Início e a Família do jovem têm o item "Eventos" na barra, mas esta tela não tem barra; só o botão voltar.
10. **Chips de filtro com 40 px de altura:** "Requisitos gerais › Acessibilidade" pede "botões de pelo menos 44 px". O botão "Eu vou" tem 44 px.

## Notas para implementação
- Os 5 eventos, as datas e os locais são dados de exemplo fixos no script.
- O filtro compara o chip com a lista `tags` de cada evento, não com a etiqueta mostrada (`tagLabel`).
- Só aparecem eventos com situação "publicado". Isso decorre do registro Evento e da tela Aprovações ("Aprovar publica na agenda"); o protótipo não mostra eventos esperando aprovação.
