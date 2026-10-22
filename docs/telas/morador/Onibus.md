# Ônibus — `Onibus.dc.html`

| Campo | Valor |
| --- | --- |
| App | Meu Carajás Super App |
| Página do canvas | `morador` (board "Ônibus · morador") |
| Nome na lista "Telas da versão 1" dos requisitos | Não está na lista: tela pedida pela equipe em 22/10/2026 (decisão A-25) |
| Versão | V1 (decisão A-25) |
| Perfil que vê | Todo morador com conta: gestor, adulto e jovem |
| Protótipo | [`design/prototipo/Onibus.dc.html`](../../../design/prototipo/Onibus.dc.html) |
| Tamanho | 390×844 |

## Para que serve
Mostra os horários da van entre o Núcleo de Carajás e Parauapebas, nos dois sentidos, como no quadro do ponto ("Horários van Carajás/Parauapebas"), e a próxima saída de hoje.

## Conteúdo da tela (de cima para baixo)
1. **Cabeçalho**: voltar (`Main.dc.html`; o jovem volta ao Início do jovem), título "Ônibus", subtítulo "Van Carajás e Parauapebas" e o selo "R$ 10,00".
2. **Dias** (três botões): "Segunda a sexta", "Sábados e feriados", "Domingos". Começa no dia de hoje.
3. **Sentido** (dois botões): "Subindo para Carajás" (Parauapebas → Núcleo de Carajás) e "Descendo para Parauapebas" (Núcleo de Carajás → Parauapebas), cada um com o número de saídas do dia escolhido.
4. **Próxima saída hoje** (só quando o dia escolhido é hoje): horário em destaque, "Sai em N min" e as duas seguintes. Sem mais saídas no dia: "Hoje não tem mais saída neste sentido. Os horários de amanhã estão em “…”."
5. **Horários de saída**: os horários em grade de 4 colunas. Hoje, os que já saíram ficam riscados e a próxima fica em azul, com legenda.
6. **Rodapé**: "Passagem: R$ 10,00. Nos feriados, vale o horário de sábado. Horários do quadro da van Carajás/Parauapebas."

## Horários (do quadro da van, foto enviada pela equipe)

| Dia | Subindo para Carajás | Descendo para Parauapebas |
| --- | --- | --- |
| Segunda a sexta | 06:00, 06:30, 06:50, 07:10, 07:30, 07:50, 08:20, 09:00, 10:00, 11:00, 12:00, 13:00, 14:20, 15:00, 15:40, 16:20, 17:00, 18:00 | 06:50, 07:30, 08:00, 08:40, 09:20, 10:00, 10:40, 11:20, 12:00, 12:40, 13:40, 14:40, 15:40, 16:20, 17:00, 17:40, 18:00, 18:30 |
| Sábados e feriados | 07:00, 08:00, 10:00, 11:30, 13:00, 14:30, 16:00, 17:00 | 08:00, 09:00, 11:00, 12:30, 14:00, 16:00, 17:00, 18:00 |
| Domingos | 10:00, 11:00, 12:00, 13:00, 14:00, 15:00, 16:00, 17:00 | 11:00, 12:00, 13:00, 14:00, 15:00, 16:00, 17:00, 18:00 |

Valor da passagem: R$ 10,00.

## Comportamento
- Estado inicial: `{ dia: <hoje>, sentido: 'sobe' }`. O dia de hoje vem do relógio do celular; o app não sabe quais dias são feriado, então num feriado o morador escolhe "Sábados e feriados".
- A "próxima saída" e os horários riscados usam a hora do celular.
- Os horários estão fixos na tela; não há registro no modelo de dados.

## Navegação
| Elemento | Leva para |
| --- | --- |
| Voltar | Início (`Main.dc.html`; o jovem vai para o Início do jovem) |
| Atalho "Ônibus" no Início · gestor e no Início · jovem | Esta tela |
