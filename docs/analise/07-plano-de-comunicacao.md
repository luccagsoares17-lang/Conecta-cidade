# Análise · "Plano de Comunicação do Núcleo Urbano de Carajás"

Fonte: [`docs/fontes/Plano de Comunicação do Núcleo Urbano de Carajás.md`](<../fontes/Plano de Comunicação do Núcleo Urbano de Carajás.md>) · 20/10/2026 · @Felipe Entre Fases

## Papel no projeto

É o plano de comunicação **do Núcleo inteiro**, não só do app. Define princípios, canais, níveis de urgência, rede de representantes de rua e o modelo padrão de aviso. O app é um dos canais. Os requisitos da V1 adotam parte do plano (modelo do aviso, níveis, metas de 95%) e **mudam** o papel de dois canais (SMS e WhatsApp) dentro do app.

## O que o documento define

**Meta**: nenhum aviso importante chega a menos de **95% das casas em até 24 horas**; urgentes em até **2 horas**.

**Diagnóstico**: ninguém sabe o canal oficial; um canal só; boca a boca distorce; grupos lotados; ficam de fora idosos, quem não tem internet, recém-chegados e quem trabalha em turnos.

**5 princípios**
1. Uma fonte única.
2. Vários canais, mesma mensagem.
3. Ninguém fica de fora.
4. Urgência define a velocidade.
5. Confirmação de entrega.

**Canais do plano**

| Canal | Alcance | Uso no plano | Custo |
| --- | --- | --- | --- |
| Canal oficial no WhatsApp (só envio) | Quem tem celular | Todos os avisos; base do sistema | Gratuito |
| Grupos por rua ou quadra | Vizinhos | Avisos de uma área | Gratuito |
| Instagram ou Facebook oficial | Mais conectados e visitantes | Divulgação e arquivo | Gratuito |
| SMS em massa | Celular sem internet | **Somente urgentes** | Baixo |
| Murais fixos | Quem não usa celular | Todos, trocados toda semana | Baixo |
| Carro de som | Todos | Urgências e eventos grandes | Médio |
| Escolas | Famílias com crianças | Rotina e eventos | Gratuito |
| Representantes de rua | Idosos, PcD, recém-chegados | Garantir que ninguém fique sem saber | Voluntário |

**Níveis de urgência**

| Nível | Exemplos | Prazo | Canais obrigatórios (no plano) |
| --- | --- | --- | --- |
| Vermelho (emergência) | Incêndio, falta de água geral, risco à segurança, interdição de estrada | Até 2 h | WhatsApp, SMS, carro de som, representantes |
| Amarelo (importante) | Corte programado de energia ou água, obra, mudança de horário | Até 24 h (3 dias de antecedência quando possível) | WhatsApp, grupos de rua, murais, redes sociais |
| Verde (informativo) | Eventos, vacinação, reuniões | Até 3 dias | WhatsApp, murais, redes sociais, escolas |

O nível vai escrito no início de cada aviso.

**Representantes de rua**: um voluntário (e suplente) por rua ou quadra; lista das casas (quem não usa celular, idosos sozinhos, PcD); repassa pessoalmente vermelhos e amarelos; recebe novos moradores; leva dúvidas à administração. Grupo de WhatsApp dos representantes, reunião trimestral, reconhecimento público.

**Modelo padrão de aviso**

```text
[AMARELO] AVISO OFICIAL – NÚCLEO URBANO DE CARAJÁS

O QUÊ: Interrupção no fornecimento de água
QUANDO: Quinta-feira, 5/11, das 8h às 14h
ONDE: Ruas A, B e C
O QUE FAZER: Armazene água na quarta-feira à noite
DÚVIDAS: (94) 0000-0000 – Administração do Núcleo

Repasse para seus vizinhos.
```

Regras de escrita: frases curtas, sem siglas, data com dia da semana, sempre um contato. O mesmo texto vai para todos os canais.

## O que os requisitos da V1 adotam e o que mudam

| Ponto | Plano de Comunicação | Requisitos V1 (vale para o app) |
| --- | --- | --- |
| Fonte única com selo oficial | Sim | Sim: avisos com selo, só Administração publica avisos oficiais |
| Níveis | Vermelho / Amarelo / Verde | Urgente / Importante / Informativo (mesma ordem; o modelo de SMS mantém a etiqueta de cor, ex.: `[AMARELO]`) |
| Metas | 95% em 24 h; urgente 2 h | Iguais (tela Alcance e métricas do piloto) |
| SMS | Só urgentes | **Obrigatório em urgente, importante e informativo** |
| WhatsApp | Base do sistema, todos os avisos | **Só cadastro; nenhum aviso sai por ele** |
| Confirmação de entrega | Princípio 5 | Registro "Entrega do aviso" (enviado, visto) e tela Alcance |
| Representantes de rua | Rede ativa | **Fase 2** no app |
| Murais, carro de som, escolas, redes sociais, grupos de rua | Canais do plano | Fora do app; o app não os implementa |
| Modelo de aviso | "Ruas A, B e C" e linha "Repasse para seus vizinhos." | Ruas de exemplo "Japurá, Jari e Juruá", sem a linha final e sem linhas em branco (é o modelo de **SMS**) |

O plano continua válido para a comunicação do Núcleo fora do app. Dentro do app, valem os requisitos. Detalhes em [conflitos entre fontes](../decisoes/conflitos-entre-fontes.md).

## Perguntas em aberto

- Quem é hoje o responsável oficial pelos avisos (administração do núcleo, Vale, associação de moradores) e por quais canais eles saem? → Repetida como aberta nos requisitos.
- Telefone de dúvidas: o modelo usa `(94) 0000-0000`, que é um marcador. → Repetida como aberta nos requisitos.
