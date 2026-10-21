# Conecta Cidade: requisitos da versão 1

Oct 20, 2026 · @Felipe Entre Fases

## Objetivo e escopo

A versão 1 do Conecta Cidade liga as famílias do Núcleo Urbano de Carajás a uma fonte única de avisos e eventos, e deve ser testada com os 49 jovens do Comitê Jovem e suas famílias. O protótipo navegável é a referência visual: [Conecta Cidade – Interface do App](https://claude.ai/artifact/PkQ9tajBdYdt6vXEFn7tX9).

São dois apps sobre o mesmo banco de dados: o **Conecta Cidade**, para os moradores, e o **Conecta Cidade Organizadores**, para quem publica.

| Área | Versão 1 | Fase 2 |
| --- | --- | --- |
| Cadastro, login e código da família | Sim |  |
| Perfis gestor, adulto e jovem, com permissões | Sim |  |
| Avisos oficiais, com envio por SMS | Sim |  |
| Eventos com “Eu vou” | Sim |  |
| Desapego (vender e doar) | Sim |  |
| Guia do morador e SECOM 0800-2850-193 | Sim |  |
| Coleta seletiva (dias de cada coleta) | Sim, só a tabela de dias | Rota do caminhão no mapa |
| Painel do organizador, publicar e equipe | Sim |  |
| Alcance dos avisos | Sim |  |
| Energia e mapa por quarteirão |  | Sim |
| Casas e manutenção |  | Sim |
| Trilhas com agenda |  | Sim |
| Carona (moradores e visitantes) |  | Sim |
| Representantes de rua, pós-evento e impacto |  | Sim |

O critério para entrar na versão 1 é não depender de dados ou equipes de fora do grupo para funcionar.

## Perfis e permissões

Cada casa tem pelo menos um gestor, e o gestor decide o que os jovens da casa podem usar. Os organizadores só publicam nas áreas liberadas para o grupo deles.

| Perfil | App | Como entra | O que pode fazer na versão 1 |
| --- | --- | --- | --- |
| Gestor da casa | Conecta Cidade | Cria a conta com rua e número da casa | Tudo do app do morador; recebe todos os avisos, inclusive urgentes; cria o código da família; aprova jovens e adultos; liga e desliga o que cada jovem pode usar |
| Adulto da casa | Conecta Cidade | Usa o código da família | Tudo do app do morador; pode ser marcado como segundo gestor |
| Jovem | Conecta Cidade | Usa o código da família e espera a aprovação do gestor | Eventos, Guia e oportunidades e avisos informativos e importantes; Desapego só se o gestor liberar |
| Administração do Núcleo | Organizadores | Convite com código de acesso | Publica avisos oficiais com selo, eventos e Guia; convida pessoas; vê alcance; aprova eventos de grupos |
| Organizador de eventos | Organizadores | Convite com código de acesso | Publica eventos, que passam pela aprovação da administração |
| Comitê Jovem Entre Fases | Organizadores | Convite com código de acesso | Publica eventos dos jovens |

Regras de permissão:

1. Avisos urgentes sempre vão para os gestores, mesmo quando o público escolhido for “só jovens”.
2. O jovem nunca vê avisos urgentes no app; eles são tratados pelos gestores da casa.
3. Desapego não tem aprovação: o anúncio aparece na hora para todos os moradores.
4. Um organizador só vê no Painel as áreas que o grupo dele pode publicar.

## Fluxos principais

O código da família liga cada pessoa à casa certa, e o gestor aprova toda conta de jovem antes de ela funcionar.

[embedded content: cadastro e aprovação do jovem · 4 passos, 1 decisão]

Adultos da casa seguem o mesmo caminho com o código, mas a conta ativa na hora e o gestor recebe um aviso.

**Entrar**

1. A pessoa escolhe a aba Gestor da casa ou Morador jovem.
2. Digita e-mail ou celular; o app mostra se a conta existe, se é de outro perfil ou se espera aprovação.
3. Sem cadastro, o app oferece criar conta pelo app ou pelo WhatsApp.
4. Com a senha certa, entra no início do seu perfil.

**Publicar um aviso (organizador)**

1. Escolhe o tipo Aviso e para quem: todos, só gestores ou só jovens.
2. Escolhe o nível e a categoria e preenche o quê, quando, onde e o que fazer.
3. Confere a prévia e os canais obrigatórios do nível (sempre com SMS).
4. Publica na hora ou agenda; o aviso aparece no app e sai por SMS.
5. Acompanha o alcance e reenvia para quem ainda não viu.

## Telas da versão 1

São 13 telas no app do morador e 6 no app do organizador. Os nomes batem com os do protótipo, para o desenvolvedor achar cada uma.

**Conecta Cidade (morador)**

| Tela | O que faz | Regras principais |
| --- | --- | --- |
| Abertura | Botões Entrar e Acabei de chegar no Núcleo | Leva ao Login ou à tela Acabei de chegar |
| Acabei de chegar | Escolhe entre criar conta, ver o Guia ou, para quem mora fora, ver a carona | A carona para visitantes fica desativada na versão 1 |
| Entrar | Abas Gestor da casa e Morador jovem, e-mail ou celular e senha | Mostra na hora se a conta existe, se é de outro perfil ou se espera aprovação; leva ao cadastro quando não existe |
| Criar conta · adulto e gestor | Foto, nome, nascimento, celular, e-mail, casa ou código, interesses e senha | Gestor informa rua e número; outro adulto informa o código; senha com mínimo de 8 caracteres; no fim mostra o código da família |
| Criar conta · jovem | Código da família, foto, nome, apelido, idade, celular, interesses e senha | A conta fica “esperando aprovação” até o gestor liberar |
| Início · gestor | Saudação, áreas do app, coleta do dia, último aviso e próximos eventos | A tela rola; o card de energia fica oculto até a fase 2 |
| Início · jovem | Card do Comitê Jovem, votação do próximo evento, áreas liberadas e áreas trancadas | O botão Pedir liberação envia o pedido para o gestor |
| Minha casa | Código da família, moradores, pedidos de liberação e permissões dos jovens | Só gestores veem esta tela |
| Eventos | Agenda com filtro por interesse e botão Eu vou | Mostra primeiro os interesses do cadastro; lembrete no dia |
| Desapego | Lista com filtro, selo de mudança e formulário de anúncio | Publica na hora; foto, título e preço (ou doação) são obrigatórios; conversa no app sem mostrar o telefone |
| Avisos | Lista por urgência; tocar abre o que fazer e o contato | O jovem não vê os urgentes |
| Guia do morador | Emergência SECOM 0800-2850-193, serviços do Núcleo e de Parauapebas, oportunidades | 192, 193 e 190 aparecem só na aba Parauapebas |
| Coleta seletiva | Dias de cada coleta e o que vai em cada uma | Destaca a coleta do dia |

**Conecta Cidade Organizadores**

| Tela | O que faz | Regras principais |
| --- | --- | --- |
| Entrada | E-mail e código de acesso do convite | Sem convite, não entra |
| Painel | Publicar informação, o que precisa de atenção, agendados, rascunhos e publicados | “No ar” e “Fora do ar” tiram ou põem a publicação no app |
| Publicar | Tipo, para quem, nível, categoria, o quê, quando, onde, o que fazer, canais, agendamento | Prévia ao vivo; canais obrigatórios conforme o nível; rascunho e publicação agendada |
| Alcance do aviso | Quanto do público já viu o aviso, por rua e por canal | Meta de 95% em 24 horas (urgente: 2 horas); botão de reenviar |
| Aprovações | Eventos de grupos esperando a administração | Aprovar publica na agenda; recusar avisa quem enviou |
| Equipes e permissões | Grupos e as áreas que cada um pode publicar; convite de pessoas | Só a administração muda permissões |

## Dados que o sistema guarda

São 8 tipos de registro. Todos os dados pessoais ficam no mesmo banco, com acesso por perfil.

| Registro | Campos | Quem vê |
| --- | --- | --- |
| Casa | Rua, número, quarteirão, código da família (3 letras e 4 números, ex.: CKS-4821), data de cadastro | Gestores da casa e administração |
| Pessoa | Nome, apelido, data de nascimento ou idade, celular, e-mail, foto, perfil (gestor, adulto, jovem), situação (ativa ou esperando aprovação), casa, interesses, senha (guardada cifrada) | A própria pessoa, os gestores da casa e a administração |
| Permissão do jovem | Pessoa, área (Eventos, Oportunidades, Desapego), ligada ou desligada | Gestores da casa |
| Organizador | Nome, e-mail, grupo, áreas que pode publicar, código de convite | Administração |
| Aviso | Tipo, público (todos, só gestores, só jovens), nível (urgente, importante, informativo), categoria, o quê, quando, onde, o que fazer, contato, ruas, canais, situação (rascunho, agendado, no ar, fora do ar), data de envio, quem publicou | Público escolhido; organizadores |
| Entrega do aviso | Aviso, casa, canal, enviado, visto | Organizadores (para a tela de Alcance) |
| Evento | Nome, organizador, data e hora, local, interesse, ingresso solidário, vagas, situação (esperando aprovação, publicado), confirmações | Todos os moradores |
| Anúncio do Desapego | Autor, foto, título, categoria, preço ou doação, descrição, selo de mudança, situação (ativo, vendido), conversas | Todos os moradores; telefone do autor nunca aparece |

Os nomes das ruas e quarteirões ficam numa tabela própria, para corrigir sem mexer no app. As 18 ruas do protótipo já seguem a ordem real, de Acará a Tapajós.

## SMS e WhatsApp

Comunicados e alertas saem por SMS; o WhatsApp é usado só para o cadastro. O SMS chega em qualquer celular, mesmo sem internet.

| Canal | Para que serve | Regras |
| --- | --- | --- |
| Notificação do app | Todo aviso e evento publicado | Urgente toca o celular; os outros chegam em silêncio |
| SMS | Comunicados e alertas | Obrigatório nos níveis urgente, importante e informativo; vai para o celular do cadastro; texto no modelo padrão |
| WhatsApp | Só cadastro | Conversa guiada que cria a conta e manda o código da família; nenhum aviso sai por ele |

Modelo padrão do SMS, igual ao do Plano de Comunicação:

```markdown
[AMARELO] AVISO OFICIAL – NÚCLEO URBANO DE CARAJÁS
O QUÊ: Interrupção no fornecimento de água
QUANDO: Quinta-feira, 5/11, das 8h às 14h
ONDE: Ruas Japurá, Jari e Juruá
O QUE FAZER: Armazene água na quarta-feira à noite
DÚVIDAS: (94) 0000-0000 – Administração do Núcleo
```

Regras de envio:

1. Urgente: SMS em até 2 minutos depois de publicado, para todos os gestores das ruas escolhidas.
2. Importante e informativo: SMS para o público escolhido, no horário agendado ou na hora.
3. Um mesmo aviso não manda dois SMS para o mesmo número.
4. “Reenviar para quem não viu” manda SMS só para quem ainda não abriu o aviso no app.
5. O sistema guarda quantos SMS saíram por mês, porque o serviço cobra por mensagem.

## Requisitos gerais

O app precisa funcionar em celulares simples, proteger dados de menores e ser fácil para idosos.

- **Plataformas:** Android e iPhone. Uma versão web (PWA) serve para o piloto, sem precisar das lojas.
- **LGPD:** termo de uso e política de privacidade aceitos no cadastro; conta de menor de 18 anos só ativa com aprovação do gestor; dados de visitantes (CPF) não entram na versão 1; qualquer pessoa pode pedir para apagar a conta.
- **Segurança:** senha cifrada; código de acesso de organizador vale uma vez; sair da conta em todos os aparelhos.
- **Acessibilidade:** texto que aumenta com a configuração do celular; contraste alto; botões de pelo menos 44 px; avisos também em SMS para quem não usa o app.
- **Desempenho:** a tela inicial abre em até 3 segundos numa conexão 4G fraca.
- **Visual:** cores, fontes (Bricolage Grotesque e DM Sans), ícones e logo iguais aos do protótipo.

## Piloto: aceite e métricas

O piloto dura 30 dias com os 49 jovens do Comitê e suas famílias. A versão 1 está pronta quando todos os itens abaixo passam.

**Critérios de aceite**

- [ ] Um gestor cria a conta e recebe o código da família em menos de 3 minutos
- [ ] Um jovem entra com o código, e a conta só ativa depois que o gestor aprova
- [ ] O gestor liga e desliga o Desapego do jovem, e o app do jovem muda na hora
- [ ] Um aviso urgente chega por SMS a um celular sem internet em até 2 minutos
- [ ] Um aviso “só jovens” não aparece para quem não é jovem, e um urgente nunca aparece para o jovem
- [ ] Um anúncio do Desapego aparece para os vizinhos logo depois de publicado
- [ ] A tela de Alcance mostra quantas casas viram cada aviso

**Métricas do piloto**

| Métrica | Meta |
| --- | --- |
| Famílias do Comitê cadastradas | Todas as 49, ou o máximo possível |
| Avisos importantes que chegam em 24 horas | 95% das casas |
| Avisos urgentes que chegam em 2 horas | 95% das casas |
| Confirmações em eventos pelo app | A definir no começo do piloto |
| Anúncios e doações no Desapego | A definir no começo do piloto |

## Fase 2 e perguntas em aberto

A fase 2 entra depois do piloto, porque depende de equipes e dados de fora do grupo: energia com o mapa por quarteirão e o botão de mandar equipes, rota da coleta, casas e manutenção, trilhas com agenda, carona para moradores e visitantes, representantes de rua, pós-evento e tela de impacto. Todas já estão desenhadas no protótipo.

Perguntas que precisam de resposta antes de começar:

- [ ] Quem é o responsável oficial pelos avisos: a administração do Núcleo, a Vale ou a associação de moradores?
- [ ] Quem paga o serviço de SMS e o número de WhatsApp do cadastro?
- [ ] Quem vai construir: ferramenta sem programação, parceria ou empresa contratada?
- [ ] A divisão das 18 ruas em 3 quarteirões confere com a da administração do Núcleo?
- [ ] Quem cuida dos dados pessoais (encarregado da LGPD)?
- [ ] Quais os dias reais de cada coleta seletiva no Núcleo?
- [ ] Qual é o telefone oficial para dúvidas que entra no modelo de SMS?
