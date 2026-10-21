# Análise · "Conecta Cidade: o aplicativo do Núcleo de Carajás"

Fonte: [`docs/fontes/Conecta Cidade o aplicativo do Núcleo de Carajás.md`](<../fontes/Conecta Cidade o aplicativo do Núcleo de Carajás.md>) · 20/10/2026 · @Felipe Entre Fases

## Papel no projeto

É a **visão de produto**: diz o que o app é e por que ele existe, área por área. Foi escrito antes dos requisitos da V1, que recortam esta visão. Quando este documento e os requisitos divergirem, vale o que os requisitos dizem para a V1 (ver [precedência](../README.md#ordem-de-precedência-das-fontes)).

## O que o documento define

Um app que junta num só lugar: compra e venda de usados, eventos, informações da cidade, quedas de energia e avisos oficiais. Responde ao desafio 1 da Vale e dá o primeiro passo no desafio 2.

| Área | Funcionalidades descritas | Situação na V1 (segundo os requisitos) |
| --- | --- | --- |
| **Desapego Carajás** | Anúncio com foto, preço e categoria (móveis, eletrônicos, roupas, livros, esportes); selo "mudança"; doação (ex.: Via Autismo); conversa no app sem passar telefone | V1 |
| **Eventos** | Data, hora, local, confirmados; "Eu vou" e lembrete no dia; filtro por interesse (cinema 57,7%, culinária 49,3%, videogame 45%, vôlei 41%, futebol 30%); espaço do Comitê Jovem junto com @entrefasescks; eventos solidários (1 kg de alimento) | V1 |
| **Informações da cidade** ("guia do morador") | Serviços do Núcleo e de Parauapebas com endereço, telefone e horário; telefones de emergência; guia "Acabei de chegar"; mural de oportunidades (curso, estágio, vestibular) | V1 (Guia do morador, Acabei de chegar, Oportunidades) |
| **Queda de energia** | Notificação quando cai ou volta; mapa das áreas sem luz; botão "Estou sem luz"; aviso de desligamento programado | **Fase 2** |
| **Avisos do Núcleo** | Selo "oficial"; categorias obras, falta de água, coleta de lixo, segurança, mudanças de horário; urgência informativo/importante/urgente (só urgente toca o celular); histórico | V1 |

## Por que o app ajuda (tabela do documento)

| Problema da escuta | Resposta do app |
| --- | --- |
| 78%: vínculos quebram nas transferências | Guia de boas-vindas, eventos e desapego |
| 54%: falta preparo para o futuro | Mural de cursos, estágios e vestibular |
| 42%: falta lazer para jovens | Agenda filtrada pelos interesses |

## Diferenças em relação aos requisitos da V1

- **Energia** é descrita como parte do app, mas os requisitos a colocam na Fase 2 (depende de dados e equipe de fora do grupo). Na V1 o card de energia do Início fica oculto.
- **Telefones de emergência "sempre à mão"**: os requisitos detalham que o destaque é a SECOM 0800-2850-193 e que 192, 193 e 190 aparecem só na aba Parauapebas do Guia.
- **Categorias de aviso**: o documento lista obras, falta de água, coleta de lixo, segurança e mudanças de horário. Os requisitos não repetem a lista; a lista deste documento é a referência de categorias até haver outra definição.
- **Só urgente toca o celular**: coincide com a regra da notificação nos requisitos.
- **Avisos com SMS**: este documento não fala de SMS; os requisitos tornam o SMS obrigatório em todos os níveis.

## Perguntas em aberto que o documento deixa

- Quem vai cuidar dos avisos oficiais e dos dados de energia? → Parcialmente respondida nos requisitos (a Administração do Núcleo publica avisos oficiais), mas os requisitos repetem a pergunta "quem é o responsável oficial" como aberta.
- O app começa com teste só com o Comitê Jovem (49 pessoas)? → **Respondida** nos requisitos: piloto de 30 dias com os 49 jovens e suas famílias.
