# Perguntas em aberto

Tudo o que os documentos deixam sem resposta. Quando uma pergunta for respondida, marque `[x]`, escreva a resposta, a data e quem respondeu, e registre a decisão em [`decisoes/`](decisoes/).

## Dos requisitos da V1 (precisam de resposta antes de começar)

- [ ] Quem é o responsável oficial pelos avisos: a administração do Núcleo, a Vale ou a associação de moradores? *(também no Plano de Comunicação e na visão geral)*
- [ ] Quem paga o serviço de SMS e o número de WhatsApp do cadastro?
- [ ] Quem vai construir: ferramenta sem programação, parceria ou empresa contratada?
- [ ] A divisão das 18 ruas em 3 quarteirões confere com a da administração do Núcleo?
- [ ] Quem cuida dos dados pessoais (encarregado da LGPD)?
- [ ] Quais os dias reais de cada coleta seletiva no Núcleo?
- [ ] Qual é o telefone oficial para dúvidas que entra no modelo de SMS? *(hoje `(94) 0000-0000`)*

## Dos documentos de área

- [ ] **Desapego**: quem modera os anúncios depois de publicados? (A aprovação prévia já foi descartada pelos requisitos.)
- [ ] **Eventos**: quais grupos da comunidade são convidados primeiro para testar o app?
- [ ] **Energia (Fase 2)**: quem é a equipe responsável pela energia no Núcleo?
- [ ] **Energia (Fase 2)**: quem publica os avisos de energia no app?
- [ ] **Energia (Fase 2)**: de onde vêm os dados para o mapa e a previsão de volta?

## Já respondidas por outro documento

- [x] O app começa com teste só com o Comitê Jovem? → Sim: piloto de 30 dias com os 49 jovens e suas famílias (requisitos V1).
- [x] Quem aprova os eventos antes da agenda? → A Administração do Núcleo aprova os eventos de grupos (requisitos V1).
- [x] O Desapego tem aprovação? → Não: o anúncio aparece na hora (requisitos V1).

## Surgidas na análise (lacunas entre documentos e protótipo)

Cada item tem o código do registro em [`decisoes/conflitos-entre-fontes.md`](decisoes/conflitos-entre-fontes.md).

- [ ] **D-00** A ordem de precedência das fontes proposta neste repositório está correta?
- [ ] **C-04** O nível informativo tem meta de chegada (o Plano diz 3 dias)?
- [ ] **C-05** O SMS leva a linha "Repasse para seus vizinhos." e as linhas em branco do modelo do Plano?
- [ ] **C-06** O checklist de canais do Plano (murais, redes, carro de som, escolas) aparece no Publicar da V1?
- [ ] **C-08** Eventos do Comitê Jovem passam pela aprovação da administração?
- [ ] O adulto que não é gestor recebe avisos urgentes de público "todos"? (Os requisitos só garantem os urgentes aos gestores.)
- [ ] O que acontece quando o gestor recusa a conta de um jovem?
- [ ] **P-04** Onde o gestor aprova as contas "esperando aprovação"? (Não está desenhado em `GestorFamilia`.)
- [ ] **P-06** Como é a conversa privada do Desapego e onde se marca "vendido"? (O protótipo tem comentários públicos.)
- [ ] **P-07** Como mostrar confirmações, lembrete e interesses do cadastro em Eventos? (Não desenhado.)
- [ ] **P-09** Onde entra o aceite do termo de uso e da política de privacidade? Como entra o jovem sem e-mail e sem celular?
- [ ] **P-13** A tela `JovemFamilia` entra na V1? O jovem pode ver o código da família?
- [ ] **P-14** `GestorMinhaFamilia` é uma versão antiga ou alternativa de "Minha casa"?
- [ ] **P-15** Como o organizador escolhe as ruas e o contato de um aviso no Publicar?
- [ ] **P-19** Quais situações o registro Evento tem além de "esperando aprovação" e "publicado" (o Painel mostra rascunho e "No ar")?
- [ ] Os requisitos listam as categorias de aviso? (Hoje a lista vem da visão geral: obras, falta de água, coleta de lixo, segurança, mudanças de horário; o protótipo também usa "Falta de energia/luz" e "Saúde".)

## Surgidas ao criar os acessos (21/10/2026)

- [ ] Rua, número e quarteirão das casas do Lucas e do Gustavo.
- [ ] Idade da Micheline (o cadastro de jovem pede idade).
- [ ] Como trocar a senha provisória e como sair da conta (o protótipo não tem essas telas; hoje existe o endereço `/sair`).
- [ ] O código de acesso do organizador vale uma vez de verdade (A-04)?
- [ ] Qual serviço de SMS usar (A-03)?

## Surgidas na tela de Carona (22/10/2026)

- [ ] **A-18** Como calcular o CO₂ que a pessoa deixou de emitir na carona? Falta definir quais caronas contam (as que pegou, as que ofereceu ou as duas), a distância de cada trajeto (por exemplo, Núcleo de Carajás até Parauapebas) e quanto CO₂ um carro emite por quilômetro. Hoje a tela mostra 32 kg de exemplo.

## Surgidas com as fotos das trilhas (22/10/2026)

- [ ] **A-23** As fotos da Flor de Carajás (marca "Freedomlearned") e do Mirante Vale do Rio Azul (marca "Photoshop Express") podem ser usadas no app? Se não, quais fotos usar?
