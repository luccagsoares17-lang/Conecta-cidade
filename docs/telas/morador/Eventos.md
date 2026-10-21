# Eventos · gestor — `Eventos.dc.html`

| Campo | Valor |
| --- | --- |
| App | Meu Carajás Super App (morador) |
| Página do canvas | Primeira página (`morador`, "Meu Carajás Super App"). O board não tem a chave `page` no `canvas.json`. |
| Nome na lista "Telas da versão 1" dos requisitos | Eventos |
| Versão | V1 |
| Perfil que vê | Gestor da casa (título do board). Adultos também chegam pelo Início; o jovem tem uma tela própria, `JovemEventos.dc.html` ("Eventos · jovem"). |
| Protótipo | [`design/prototipo/Eventos.dc.html`](../../../design/prototipo/Eventos.dc.html) |
| Tamanho | 390×844 |

## Para que serve
"Agenda com filtro por interesse e botão Eu vou" (requisitos, "Telas da versão 1"). A agenda "mostra tudo o que vai acontecer no Núcleo Urbano de Carajás, de qualquer organizador" (Eventos no Conecta Cidade, "O que é a agenda de eventos").

## Conteúdo da tela (de cima para baixo)
1. **Cabeçalho** (fixo): botão de voltar (`aria-label="Voltar para o início"`), título "Eventos" e subtítulo "Tudo o que vai rolar no Núcleo".
2. **Fileira de filtros** (rola na horizontal): "Todos", "Cinema", "Culinária", "Videogame", "Vôlei", "Futebol". O filtro ativo fica com fundo escuro.
3. **Lista de eventos** (rola na vertical). Cada card tem:
   - Caixa de data colorida com o mês (ex.: "NOV") e o dia.
   - Nome do evento, organizador e linha "<dia da semana>, <hora> · <local>".
   - Etiqueta de interesse (ex.: "CINEMA").
   - Etiqueta "Ingresso: 1 kg de alimento", só nos eventos solidários.
   - Botão "Eu vou" (vira "Confirmado").

Não há barra de navegação inferior nem botão para criar evento.

## Comportamento (script `Component`)
- **Estado inicial**: `{ tag: 'Todos', going: {} }`.
- **Dados de exemplo** (na ordem do script, que é a ordem da lista):
  | id | Data | Nome | Organizador | Quando e onde | Interesses (filtro) | Etiqueta | Solidário |
  | --- | --- | --- | --- | --- | --- | --- | --- |
  | cine | NOV 7 | CineFases | Comitê Jovem Entre Fases | Sábado, 19h · Clube do Núcleo | Cinema | Cinema | Sim |
  | pizza | NOV 13 | Noite de Pizza | Comitê Jovem Entre Fases | Sexta, 19h30 · Salão de festas | Culinária | Culinária | Não |
  | olimp | NOV 21 | Olimpíadas Entre Fases | Comitê Jovem Entre Fases | Sábado, 8h · Ginásio poliesportivo | Vôlei, Futebol | Esportes | Sim |
  | game | DEZ 5 | Torneio de videogame | Grêmio estudantil | Sábado, 14h · Biblioteca do Núcleo | Videogame | Videogame | Não |
  | boas | NOV 28 | Encontro de boas-vindas | Administração do Núcleo · Oficial | Sábado, 17h · Praça central | (nenhum) | Novos moradores | Não |
- **Filtro**: tocar num chip define `tag`. Com "Todos", aparecem todos os eventos; com outro chip, só os eventos cuja lista de interesses contém aquele valor. O "Encontro de boas-vindas" não tem interesse e só aparece em "Todos". As Olimpíadas aparecem em "Vôlei" e em "Futebol".
- **"Eu vou"**: alterna `going[id]`. Confirmado: texto "Confirmado", fundo verde-claro; senão: "Eu vou", fundo laranja (#B4471C). O estado é só desta tela; não é compartilhado com `Main.dc.html`.

## Navegação
| Elemento | Leva para |
| --- | --- |
| Botão de voltar | `Main.dc.html` |

Chegam a esta tela, a partir de `Main.dc.html`: o atalho "Eventos", "Ver agenda", o nome de cada evento, "Ver todos os eventos" e o item "Eventos" da barra. `GestorMinhaFamilia.dc.html` (fora do canvas) também tem o item "Eventos" na barra.

## Dados mostrados → registros do sistema
| Dado na tela | Registro |
| --- | --- |
| Nome | Evento (nome) |
| Organizador ("Comitê Jovem Entre Fases", "Administração do Núcleo · Oficial") | Evento (organizador) |
| Mês, dia, dia da semana e hora | Evento (data e hora) |
| Local | Evento (local) |
| Etiqueta e filtro de interesse | Evento (interesse) |
| "Ingresso: 1 kg de alimento" | Evento (ingresso solidário) |
| "Eu vou" / "Confirmado" | Evento (confirmações) |
| Chips de filtro (Cinema, Culinária, Videogame, Vôlei, Futebol) | Lista fixa no script; os interesses do morador ficam em Pessoa (interesses), mas a tela não os usa |
| "Oficial" no nome do organizador | **Sem campo próprio** no registro Evento (o selo existe no registro Aviso) |

Campos do registro Evento que a tela não mostra: vagas e situação (esperando aprovação, publicado).

## Regras dos documentos que se aplicam
- Requisitos da versão 1, "Telas da versão 1": Eventos — "Mostra primeiro os interesses do cadastro; lembrete no dia".
- Requisitos, "Perfis e permissões": os eventos do organizador de eventos "passam pela aprovação da administração". Na tela Aprovações do organizador, "Aprovar publica na agenda" (registro Evento, situação "esperando aprovação, publicado").
- Requisitos, "SMS e WhatsApp": notificação do app para todo evento publicado.
- Requisitos, "Dados que o sistema guarda": Evento é visto por "Todos os moradores".
- Eventos no Conecta Cidade, "Como funciona": o morador "toca em 'Eu vou' e vê quantas pessoas já confirmaram"; "No dia, o app manda um lembrete com o horário e o local".
- Eventos no Conecta Cidade, "Funcionalidades": "Selo 'oficial': eventos da administração do Núcleo e da Vale aparecem marcados".

## Divergências entre protótipo e documentos
1. **Sem número de confirmações**: o botão "Eu vou" não mostra quantas pessoas confirmaram, embora o documento de Eventos diga que mostra, e o registro Evento tenha "confirmações".
2. **Ordem dos interesses do cadastro**: os requisitos dizem que a tela "Mostra primeiro os interesses do cadastro". No protótipo a tela abre em "Todos", com chips fixos na mesma ordem para todos e eventos na ordem do script.
3. **Lembrete no dia**: os requisitos e o documento de Eventos pedem o lembrete; a tela não mostra nada sobre ele.
4. **Ordem da lista não é por data**: "Torneio de videogame" (5/12) vem antes de "Encontro de boas-vindas" (28/11).
5. **Selo "oficial" só no texto**: o evento da administração mostra "Administração do Núcleo · Oficial" na linha do organizador, sem selo visual próprio, e o registro Evento não tem campo de selo.
6. **Etiqueta diferente do filtro**: as Olimpíadas têm a etiqueta "Esportes", mas aparecem nos filtros "Vôlei" e "Futebol"; o "Encontro de boas-vindas" tem a etiqueta "Novos moradores", que não é um filtro, e some em qualquer filtro que não seja "Todos".
7. **Funcionalidades do documento de Eventos ausentes**: filtro por idade, perfil do organizador e "seguir", "Convidar um vizinho", "Calendário do mês" e foto do evento não aparecem. Também não estão na lista da V1 dos requisitos.
8. **"Eu vou" sem ligação com o Início**: confirmar aqui não muda o botão do mesmo evento em `Main.dc.html`, e vice-versa.

## Notas para implementação
- A lista de chips e os eventos são dados de exemplo do script.
- Os requisitos pedem a ordem pelos interesses do cadastro e o lembrete no dia; o protótipo não mostra como isso aparece na tela.
- As confirmações ficam no registro Evento, o que vale para esta tela e para os "Próximos eventos" do Início.
- A versão do jovem é outra tela (`JovemEventos.dc.html`), com ficha própria.
