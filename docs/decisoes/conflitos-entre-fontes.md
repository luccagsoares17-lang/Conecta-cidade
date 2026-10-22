# Conflitos entre fontes

Registro das divergências encontradas entre os documentos-fonte e entre os documentos e o protótipo. A coluna **Como tratar** aplica a [ordem de precedência](../README.md#ordem-de-precedência-das-fontes); onde ela não resolve, o item fica **Pendente** e vai para [perguntas em aberto](../perguntas-em-aberto.md).

Como manter: só acrescente linhas. Quando um item for decidido, preencha "Decisão" com data e quem decidiu, sem apagar o texto original.

## D-00 · A própria ordem de precedência

| | |
| --- | --- |
| Situação | Todos os documentos têm a mesma data e autor. A ordem (requisitos > protótipo > área > visão geral > plano > contexto) foi proposta na organização deste repositório. |
| Como tratar | Usar a ordem como regra de trabalho. |
| Decisão | **Pendente**: confirmar com o time. |

## Entre documentos

| ID | Tema | O que cada fonte diz | Como tratar |
| --- | --- | --- | --- |
| C-01 | SMS | Plano: SMS "somente avisos urgentes". Requisitos: SMS obrigatório em urgente, importante e informativo. | Requisitos (SMS nos três níveis). |
| C-02 | WhatsApp | Plano: canal oficial no WhatsApp é a base de todos os avisos. Requisitos: WhatsApp só para cadastro; nenhum aviso sai por ele. | Requisitos dentro do app. O Plano segue valendo para a comunicação do Núcleo fora do app. |
| C-03 | Nomes dos níveis | Plano: Vermelho/Amarelo/Verde. Visão geral e requisitos: urgente/importante/informativo. | No app, urgente/importante/informativo; a cor vai na etiqueta do SMS (`[AMARELO]` etc.). |
| C-04 | Prazo do informativo | Plano: verde até 3 dias. Requisitos: metas só para importante (24 h) e urgente (2 h). | Sem meta na V1 para informativo; registrar se o time quiser adotar 3 dias. **Pendente** |
| C-05 | Modelo do aviso/SMS | Requisitos dizem "igual ao do Plano", mas o bloco deles não tem linhas em branco nem "Repasse para seus vizinhos." e usa "Ruas Japurá, Jari e Juruá" no lugar de "Ruas A, B e C". O protótipo (`AdminPublicar`) usa o bloco do Plano, com a linha final. | **Pendente**: decidir se o SMS leva a linha "Repasse para seus vizinhos." (afeta tamanho e custo do SMS). |
| C-06 | Canais obrigatórios por nível | Plano: lista WhatsApp, grupos de rua, murais, redes, carro de som, escolas, representantes. Requisitos: no app só notificação, SMS e WhatsApp (cadastro). O protótipo (`AdminPublicar`) mostra SMS + canais do Plano sem WhatsApp e sem grupos de rua. | No app V1: notificação + SMS. Os outros canais aparecem no protótipo como checklist; **pendente** decidir se o checklist fica na V1 (Representantes é Fase 2). |
| C-07 | Energia | Visão geral e documento de Energia tratam como parte do app. Requisitos: Fase 2. | Fase 2. |
| C-08 | Aprovação de eventos | Documento de Eventos: pergunta aberta "quem aprova". Requisitos: Administração aprova eventos de grupos. Não dizem se eventos do Comitê Jovem passam por aprovação. | Administração aprova eventos de "Organizador de eventos". Comitê Jovem: **pendente**. |
| C-09 | Moderação do Desapego | Documento do Desapego: pergunta "quem cuida dos anúncios". Requisitos: sem aprovação. | Sem aprovação. Moderação depois de publicado: **pendente**. |
| C-10 | Funcionalidades de Eventos | Documento de Eventos: filtro por idade, perfil do organizador, seguir, convidar vizinho, calendário do mês, selo oficial em eventos. Requisitos não listam. | Fora da V1 (visão de produto). |
| C-11 | Emergência no Guia | Visão geral: "telefones de emergência sempre à mão". Requisitos: SECOM 0800-2850-193 em destaque; 192, 193 e 190 só na aba Parauapebas. | Requisitos (o protótipo segue). |

## Entre documentos e protótipo

| ID | Tela | Divergência | Como tratar |
| --- | --- | --- | --- |
| P-01 | `Avisos`, `JovemAvisos` | A faixa diz que SMS vale para "importantes e urgentes"; requisitos dizem os três níveis. | Requisitos; ajustar o texto na implementação. **Pendente** confirmação do texto. |
| P-02 | `GestorFamilia` | Nota diz que o jovem vê "só os avisos informativos e de eventos"; requisitos dizem informativos e importantes (e `JovemAvisos` mostra importantes). | Requisitos. |
| P-03 | `GestorFamilia`, `JovemInicio` | Permissões de Trilhas e Carona; requisitos só têm Eventos, Oportunidades, Desapego. Permissões aparecem por casa, não por jovem. | V1: as 3 áreas, por jovem (registro "Permissão do jovem"). Trilhas e Carona ocultas. |
| P-04 | `GestorFamilia` | Não há onde aprovar contas "esperando aprovação", requisito central (critério de aceite). | Requisito vale; **o protótipo não tem o elemento** — **pendente** definir onde fica, sem inventar layout. |
| P-05 | `AdminAprovar` | Script tem listas de Desapego para aprovar; requisitos: Desapego sem aprovação. Só a aba Eventos aparece. | Requisitos: só Eventos. |
| P-06 | `Desapego` | Comentários públicos no lugar de conversa privada; exemplos mostram rua e quarteirão; não há "marcar como vendido"; etiqueta "Em análise"; ranking com estrelas. | Requisitos: conversa no app sem mostrar telefone; "vendido" existe no registro. Ranking e "Em análise" fora da V1. **Pendente**: conversa privada não está desenhada. |
| P-07 | `Eventos`, `JovemEventos` | Não mostra confirmações, não começa pelos interesses do cadastro, sem lembrete, fora de ordem de data. | Requisitos valem; o protótipo não desenha esses elementos — **pendente**. |
| P-08 | `Main` | Não há bloco "último aviso" (o mais próximo é o card "Água · Aviso"); rodapé da coleta cita "Cronograma oficial (PRO 022144)", mas os dias reais são pergunta aberta. | Usar o card como "último aviso"; dias da coleta **pendentes**. |
| P-09 | `CadastroGestor`, `CadastroJovem` | Falta o aceite do termo de uso e política de privacidade (LGPD). Jovem sem e-mail e com celular opcional pode não conseguir entrar (Login pede e-mail ou celular). Rua em texto livre, sem quarteirão. | Requisitos valem; **pendente** onde entra o aceite e como o jovem sem celular entra. |
| P-10 | `CadastroGestor` | Texto diz que o gestor recebe "os avisos importantes"; requisitos: todos, inclusive urgentes. | Requisitos. |
| P-11 | `Chegada` | Card de carona para visitante funciona; requisitos: desativada na V1. | Desativado na V1. |
| P-12 | `CaronaVisitante` | Pede CPF, nome completo e celular de visitante; LGPD da V1 proíbe CPF de visitante. | Fase 2; não implementar na V1. |
| P-13 | `JovemFamilia` | Jovem vê endereço e código da família e dados de outros moradores; modelo de dados restringe a gestores e administração. Tela fora da lista da V1. | **Pendente**: decidir se a tela entra e o que ela mostra. |
| P-14 | `GestorMinhaFamilia` | Arquivo sem board no canvas e sem links de entrada; duplica parte de `GestorFamilia`. | **Pendente**: confirmar se é versão antiga ou alternativa de "Minha casa". |
| P-15 | `AdminPublicar` | Tipo Aviso não tem seleção de ruas nem campo de contato, embora o registro Aviso tenha "ruas" e "contato" e a regra do urgente use "ruas escolhidas". Evento publica direto, sem aprovação. | Requisitos valem; **pendente** desenho dos campos. |
| P-16 | `AdminAlcance` | "Reenviar" diz "Notificação reenviada"; regra 4 manda SMS. Mostra só %, critério pede quantas casas. Meta só de 24 h. | Requisitos: SMS, número de casas, meta 2 h para urgente. |
| P-17 | `AdminEquipe` | Aba "Equipes de campo" abre primeiro; grupos de energia e campo; áreas de Fase 2; falta Guia; Comitê Jovem com Trilhas. | V1: os 3 grupos dos requisitos e áreas da V1 (inclui Guia). |
| P-18 | `AdminEntrada` | Texto cita "a equipe de energia"; não há validação de convite de uso único. | Requisitos; texto da Fase 2 oculto. |
| P-19 | `AdminInicio` | Painel não varia por grupo (regra 4). Eventos com situações "rascunho"/"No ar", que o registro Evento não tem. | Regra 4 vale. **Pendente**: situações do Evento. |
| P-20 | Vários | Botões e chips de 36–40 px; requisito pede 44 px. | Requisito (44 px). |
| P-21 | `Energia`, `AdminEnergia` | "3 quarteirões cada", mas a Rua Tapajós só passa por 2. | Fase 2; confirmar com a administração. |
| P-22 | `TrilhaVisitante`, `Chegada`, `CaronaVisitante` | Informações diferentes sobre onde tirar a autorização (site do ICMBio, portaria, portaria das 8h às 16h). | Fase 2; **pendente**. |
| P-23 | `Main` | Há um `</div>` a mais no arquivo: a barra de navegação de baixo fica fora da raiz da tela e seus rótulos aparecem na fonte padrão do navegador, não em DM Sans (requisito visual: fontes iguais às do protótipo). O app reproduz o arquivo como está. | **Pendente**: corrigir no artefato e copiar de novo. |

## Decisões tomadas ao ligar os dados reais (21/10/2026)

| ID | Tema | Decisão | Situação |
| --- | --- | --- | --- |
| A-01 | Contas do piloto | Lucas (gestor) e Micheline (jovem) na família CKS-2925; Gustavo (gestor) sozinho na família CKS-5420; Mário e Ivison na Administração do Núcleo. Pedido da equipe; detalhes em [`acessos.md`](../acessos.md). | Feito |
| A-02 | Banco | Neon (Postgres) pela Vercel, escolhido pela equipe. | Feito; falta conectar na Vercel |
| A-03 | SMS | O aviso registra o SMS como canal obrigatório, mas nenhum SMS é enviado enquanto não houver serviço contratado. | **Pendente**: quem paga o SMS |
| A-04 | Código de acesso do organizador | Requisitos: "vale uma vez". No piloto, o código funciona como a senha do organizador e pode ser usado de novo, porque o protótipo não tem tela para pedir código novo. | **Pendente**: confirmar ou desenhar a troca de código |
| A-05 | Entrar | No protótipo, a senha certa troca o botão por "Entrar como Lucca". Com a senha conferida no servidor, o toque em "Entrar" já confere e abre o início; o passo "Entrar como" não aparece. | Feito |
| A-06 | Mensagem de erro na Entrada do organizador | O protótipo não desenha erro. Foi acrescentada uma linha de texto em #FFD27A (cor que a tela já usa) para "Sem convite, não entra". | Feito; revisar no artefato |
| A-07 | Publicar: tipos Energia, Guia e Trilha; formato Imagem | Ainda não gravam; a tela mostra uma mensagem curta. Energia e Trilha são Fase 2; Guia e Imagem ficam para a próxima etapa. | **Pendente** |
| A-08 | Situações do Evento | O registro Evento tem "esperando aprovação" e "publicado". Para o Painel e o Publicar funcionarem como no protótipo, o banco também aceita "rascunho", "agendado" e "fora do ar" (ver P-19). | Feito; confirmar |
| A-09 | Conteúdo de demonstração | Para a apresentação de 22/10/2026, o banco começa com os avisos, os eventos e os anúncios do Desapego que são exemplo no protótipo. Os avisos aparecem como publicados pelo Mário; os eventos do Comitê Jovem e do Grêmio levam o nome do grupo, sem conta. | Feito; apagar antes do piloto real (ver [`acessos.md`](../acessos.md)) |
| A-10 | Foto do anúncio | Requisitos: foto obrigatória. O protótipo não tem campo de arquivo, só o botão "Adicionar fotos", que marca a foto como adicionada. O app faz o mesmo e ainda não guarda imagem; o anúncio novo aparece com o ícone de câmera do protótipo. | **Pendente**: desenhar o envio de foto |
| A-11 | Comentários do Desapego | O app grava os comentários públicos desenhados no protótipo (ver P-06); a conversa privada dos requisitos continua pendente. | Feito como no protótipo |
| A-12 | Sem banco para a apresentação | A pedido da equipe (21/10/2026), o app roda sem banco (`VITE_DADOS=local`): login conferido em JavaScript, só as 5 contas entram, dados guardados em cada aparelho. O que um organizador publica aparece só no aparelho em que foi publicado. O modo com Neon (`VITE_DADOS=servidor`) continua pronto. | Feito; voltar para `servidor` no piloto real |
| A-13 | Nome do app | A pedido da equipe (21/10/2026): "Conecta Cidade" passou a ser **Meu Carajás Super App** (moradores) e **Meu Carajás Organizadores** (quem publica). A troca foi feita no artefato (versão `1792623732-21a5`) e copiada para `design/prototipo/`. Na Entrada do organizador, o título ficou "Meu Carajás" ao lado do selo "Organizadores" que a tela já tem. Na Abertura, no logo e nos ícones, o nome quebra em "Meu Carajás / Super App", centralizado. | Feito |
| A-14 | Famílias cadastradas no Painel | A pedido da equipe (21/10/2026), o Painel do organizador ganhou, no fim, a seção **Famílias cadastradas**: código, endereço quando houver, número de moradores e cada morador com o papel na casa. Não está na lista de telas dos requisitos, mas segue o modelo de dados: os registros Casa e Pessoa são visíveis à administração. Só a Administração do Núcleo vê; outros grupos recebem a lista vazia. Desenhada no artefato (versão `1792626529-94e1`) com o estilo dos cards do Painel. | Feito |
| A-15 | Equipes Entre Fases, escola e clube | A pedido da equipe (22/10/2026), a tela Equipes e permissões ganhou a **Equipe Entre Fases** (separada do Comitê Jovem Entre Fases, que continua), a **Equipe da escola** e a **Equipe do clube**. A primeira aba passou a se chamar "Equipes" e mostra "Equipes que publicam" (essas três e a Administração do Núcleo) acima das equipes de campo; em Permissões, as três começam publicando Eventos (nos requisitos, eventos de grupos passam pela aprovação da administração); em Convidar pessoa, entram as opções Entre Fases, Escola e Clube. O número de pessoas vem das contas de organizador. Desenhado no artefato (versão `1792630974-727b`). | Feito; as pessoas de cada equipe estão em A-16 |
| A-16 | Pessoas nas equipes que publicam | A pedido da equipe (22/10/2026), cada equipe de "Equipes que publicam" virou um botão. Tocar abre a lista de pessoas (ou "Nenhuma pessoa nesta equipe ainda.") e os botões **Adicionar pessoa** (nome e Salvar) e **Mandar convite** (abre Convidar pessoa já com a equipe escolhida). Pessoas de exemplo: Administração do Núcleo com Mário, Ivison, Ana Alice Gonçalves e Patrícia Lima; Equipe da escola com Micheline, Ricardo, Fernanda Costa e Paulo Henrique; Equipe do clube com Rafael Souza, Bruna Martins, Diego Alves, Camila Rocha e Thiago Nunes; Equipe Entre Fases sem ninguém. Patrícia, Fernanda, Paulo e as cinco do clube são **nomes fictícios para a demonstração**; na Administração, as duas vagas além do Mário e do Ivison ficaram com a Ana Alice (que já tem conta) e uma fictícia. Estar na lista não cria conta de organizador. Quem é acrescentado fica guardado (no aparelho, no modo local; na tabela `membros_equipe`, no modo servidor) e só a Administração do Núcleo acrescenta. "Mandar convite" e "Enviar convite" ainda não mandam nada, como no protótipo. Desenhado no artefato (versão `1792631403-a8b4`). | Feito; trocar os nomes fictícios pelos reais antes do piloto |
