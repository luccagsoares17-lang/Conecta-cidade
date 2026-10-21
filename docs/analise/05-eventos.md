# Análise · "Eventos no Conecta Cidade: conectando todo mundo de Carajás"

Fonte: [`docs/fontes/Eventos no Conecta Cidade conectando todo mundo de Carajás.md`](<../fontes/Eventos no Conecta Cidade conectando todo mundo de Carajás.md>) · 20/10/2026 · @Felipe Entre Fases

## Papel no projeto

Documento de **área**: a visão completa da agenda de eventos. A V1 implementa só uma parte dela (agenda, filtro por interesse, "Eu vou", lembrete, aprovação de eventos de grupos). O resto é visão de produto.

## O que o documento define

**Objetivo**: agenda única com eventos de qualquer organizador, para nenhum morador ficar de fora. Responde ao desafio 1.

**Organizadores e exemplos**

| Organizador | Exemplos |
| --- | --- |
| Escolas | Festa junina, feira de ciências, apresentações |
| Igrejas e grupos religiosos | Celebrações, quermesses, caridade |
| Clubes e grupos esportivos | Campeonatos, aulas abertas, corridas e caminhadas |
| Administração do Núcleo e Vale | Datas comemorativas, mutirões, encontros |
| Comércio local | Feiras, promoções, inaugurações |
| Moradores | Grupos de leitura, trilhas, encontros |
| Comitê Jovem do Entre Fases | Noite de Pizza, CineFases, Olimpíadas |

**Fluxo (6 passos)**: criar evento (nome, data, hora, local, foto, categoria) → aparece na agenda → notificação para quem tem o interesse → "Eu vou" com contagem → lembrete no dia → pós-evento com fotos e resultado.

**Funcionalidades**: "Eu vou"; lembrete no dia; filtro por interesse **e por idade**; perfil do organizador (seguir); selo "oficial" para Administração e Vale; convidar um vizinho; calendário do mês.

**Público**: quem acabou de chegar, crianças, jovens, famílias, terceira idade, toda a cidade, quem quer ajudar.

**Interesses**: mapeamento só dos jovens (embed "Mapeamento de interesses dos jovens do Entre Fases, 2026" — o gráfico não veio no arquivo; os números estão no contexto e na visão geral: cinema 57,7%, culinária 49,3%, videogame 45%, vôlei 41%, futebol 30%). Proposta: o cadastro pergunta os interesses de cada morador.

## O que entra na V1 (segundo os requisitos)

| Funcionalidade do documento | V1? | Onde está definido |
| --- | --- | --- |
| Agenda com data, hora, local | Sim | Tela Eventos |
| Filtro por interesse, começando pelos do cadastro | Sim | Tela Eventos: "Mostra primeiro os interesses do cadastro" |
| "Eu vou" com confirmações | Sim | Tela Eventos; registro Evento.confirmações |
| Lembrete no dia | Sim | Tela Eventos |
| Interesses no cadastro | Sim | Criar conta (adulto/gestor e jovem) |
| Ingresso solidário | Sim | Registro Evento.ingresso solidário |
| Aprovação dos eventos de grupos | Sim | Tela Aprovações (Administração) |
| Votação do próximo evento (jovem) | Sim | Início · jovem |
| Pós-evento (fotos e resultado) | **Fase 2** | "pós-evento" na lista da Fase 2 |
| Filtro por idade | Não listado na V1 | — |
| Perfil do organizador / seguir | Não listado na V1 | — |
| Convidar um vizinho | Não listado na V1 | — |
| Calendário do mês | Não listado na V1 | — |
| Notificação por interesse | Parcial: os requisitos dizem "notificação do app: todo aviso e evento publicado" | Seção SMS e WhatsApp |
| Selo "oficial" em eventos | Não listado explicitamente para eventos (o selo está nos avisos) | — |

## Perguntas em aberto

- **Quem aprova os eventos antes de aparecerem na agenda?** → Respondida nos requisitos: a **Administração do Núcleo** aprova eventos de grupos (perfil "Organizador de eventos"); "Aprovar publica na agenda; recusar avisa quem enviou". Os requisitos não dizem se os eventos do Comitê Jovem passam por aprovação (o perfil diz apenas "Publica eventos dos jovens").
- **Quais grupos da comunidade são convidados primeiro?** → Não respondida.
