# Análise · "Falta de energia no Núcleo: avisos na palma da mão"

Fonte: [`docs/fontes/Falta de energia no Núcleo avisos na palma da mão.md`](<../fontes/Falta de energia no Núcleo avisos na palma da mão.md>) · 20/10/2026 · @Felipe Entre Fases

## Papel no projeto

Documento de **área**, inteiro na **Fase 2**. Os requisitos da V1 colocam "Energia e mapa por quarteirão" fora da V1 porque depende de equipes e dados de fora do grupo. As telas já estão desenhadas no protótipo (Energia · gestor e Energia do organizador) e devem ser preservadas para a Fase 2.

## O que o documento define

**O problema**: ninguém sabe quando vai acontecer, onde aconteceu, quando volta; a informação se perde em grupos e boatos.

**Quem é afetado**: famílias, estudantes, quem trabalha, comércio, idosos e pessoas doentes, escolas e serviços.

**A solução**

| O morador não sabe hoje | O app mostra |
| --- | --- |
| Quando vai ter desligamento | Aviso antecipado de desligamentos programados (dia, hora, ruas) |
| Onde a luz caiu | Mapa do Núcleo com as áreas sem luz |
| Quando a luz volta | Previsão de volta, atualizada pela equipe |
| Se a informação é verdade | Selo "oficial" |
| Se já sabem do problema | Botão "Estou sem luz" |

Mais: notificação quando cai e quando volta; histórico das quedas de cada rua.

**Fluxo quando a luz cai (5 passos)**: cai → moradores tocam "Estou sem luz" e o mapa mostra as ruas → equipe confirma e publica aviso oficial com previsão → moradores das ruas afetadas recebem notificação → quando volta, o app avisa e registra no histórico.

**Desligamento programado**: aviso com dias de antecedência e lembrete na véspera.

**Smart city**: responde ao desafio 2.

## Relação com a V1

- Fora da V1. Na tela Início · gestor, **o card de energia fica oculto até a Fase 2** (requisitos, tela Início · gestor).
- A Fase 2 dos requisitos acrescenta ao que este documento descreve: **mapa por quarteirão** e **botão de mandar equipes** (no app do organizador).
- Um desligamento programado de energia pode ser publicado na V1 como **aviso comum** (o Plano de Comunicação cita "corte programado de energia" como exemplo de nível amarelo/importante). A área dedicada de energia é que fica para a Fase 2.

## Perguntas em aberto

- Quem é a equipe responsável pela energia no Núcleo? → Não respondida.
- Quem vai publicar os avisos no app? → Para avisos em geral, a Administração do Núcleo (requisitos); para energia, não definido.
- De onde vêm os dados para o mapa e a previsão de volta? → Não respondida (motivo de estar na Fase 2).
