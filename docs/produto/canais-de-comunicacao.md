# Canais de comunicação do app: notificação, SMS e WhatsApp

Fontes: requisitos da V1, seção "SMS e WhatsApp" (vale para o app); Plano de Comunicação (vale para o Núcleo fora do app).

> Comunicados e alertas saem por SMS; o WhatsApp é usado só para o cadastro. O SMS chega em qualquer celular, mesmo sem internet.

## Canais

| Canal | Para que serve | Regras |
| --- | --- | --- |
| **Notificação do app** | Todo aviso e evento publicado | Urgente toca o celular; os outros chegam em silêncio |
| **SMS** | Comunicados e alertas | Obrigatório nos níveis urgente, importante e informativo; vai para o celular do cadastro; texto no modelo padrão |
| **WhatsApp** | Só cadastro | Conversa guiada que cria a conta e manda o código da família; **nenhum aviso sai por ele** |

## Níveis de urgência

Os nomes dos níveis no app são os dos requisitos. A cor vem do Plano de Comunicação e aparece na etiqueta do SMS.

| Nível no app | Cor / etiqueta do Plano | Meta de chegada | Toca o celular? | Jovem vê? |
| --- | --- | --- | --- | --- |
| Urgente | Vermelho `[VERMELHO]` | 95% das casas em 2 h; SMS em até 2 min | Sim | Não |
| Importante | Amarelo `[AMARELO]` | 95% das casas em 24 h | Não | Sim |
| Informativo | Verde `[VERDE]` | O Plano diz "até 3 dias"; os requisitos não fixam meta | Não | Sim |

Nos documentos só o `[AMARELO]` aparece escrito; o protótipo (`AdminPublicar`) usa `[VERMELHO]`, `[AMARELO]` e `[VERDE]` no texto padrão.

## Modelo padrão do SMS

Texto exato dos requisitos:

```text
[AMARELO] AVISO OFICIAL – NÚCLEO URBANO DE CARAJÁS
O QUÊ: Interrupção no fornecimento de água
QUANDO: Quinta-feira, 5/11, das 8h às 14h
ONDE: Ruas Japurá, Jari e Juruá
O QUE FAZER: Armazene água na quarta-feira à noite
DÚVIDAS: (94) 0000-0000 – Administração do Núcleo
```

Regras de escrita (Plano de Comunicação): frases curtas, sem siglas, data com dia da semana, sempre um contato para dúvidas. O mesmo texto vai para todos os canais.

`(94) 0000-0000` é um marcador: o telefone oficial ainda é pergunta em aberto.

## Regras de envio

1. **Urgente**: SMS em até 2 minutos depois de publicado, para todos os gestores das ruas escolhidas.
2. **Importante e informativo**: SMS para o público escolhido, no horário agendado ou na hora.
3. Um mesmo aviso **não manda dois SMS para o mesmo número**.
4. **"Reenviar para quem não viu"** manda SMS só para quem ainda não abriu o aviso no app.
5. O sistema guarda **quantos SMS saíram por mês** (o serviço cobra por mensagem).

## Diferenças com o Plano de Comunicação

O Plano diz que o SMS é "somente avisos urgentes" e que o canal oficial no WhatsApp é a base de todos os avisos. **No app, valem os requisitos** (SMS em todos os níveis; WhatsApp só no cadastro). Os outros canais do Plano (grupos de rua, redes sociais, murais, carro de som, escolas, representantes) são da comunicação do Núcleo e não são implementados pelo app na V1. Ver [conflitos entre fontes](../decisoes/conflitos-entre-fontes.md).
