# Minha casa · gestor — `GestorFamilia.dc.html`

| Campo | Valor |
| --- | --- |
| App | Meu Carajás Super App (morador) |
| Página do canvas | `morador` ("Meu Carajás Super App") |
| Nome na lista "Telas da versão 1" dos requisitos | Minha casa |
| Versão | V1 com partes ocultas até a Fase 2 (as permissões "Trilhas em grupo" e "Carona" e as menções a energia são de Fase 2) |
| Perfil que vê | Gestor da casa (inclusive o adulto marcado como segundo gestor) |
| Protótipo | [`design/prototipo/GestorFamilia.dc.html`](../../../design/prototipo/GestorFamilia.dc.html) |
| Tamanho | 390×844 |

## Para que serve
Tela onde o gestor cuida da casa: "Código da família, moradores, pedidos de liberação e permissões dos jovens" (requisitos, "Telas da versão 1"). É aqui que o gestor "liga e desliga o que cada jovem pode usar" (requisitos, "Perfis e permissões").

## Conteúdo da tela (de cima para baixo)
1. **Cabeçalho** (fixo): botão de voltar (`aria-label="Voltar para o início"`), título "Minha casa" e subtítulo "Rua Japurá, 12 · você é o gestor".
2. A partir daqui o conteúdo rola.
3. **Card do gestor** (verde): rótulo "Gestor da casa", nome "Lucca Ribeiro" e "Acesso completo: energia, desapego, carona e avisos urgentes."
4. **Card do código** (escuro): rótulo "Código da família", código "CKS-4821", "Os jovens usam para criar a conta deles" e botão redondo de compartilhar (`aria-label="Compartilhar código da família"`).
5. **"Jovens da casa"**: um card por jovem (inicial, nome, linha "<idade> anos · perfil jovem") com etiqueta "Ativo".
6. **"Adultos da casa"**: um card por adulto (inicial, nome, linha de idade e papel) com etiqueta "Ativo".
7. **Dois botões lado a lado**: "+ Morador jovem" (contorno laranja) e "+ Morador adulto" (contorno verde).
8. **Formulário de novo morador** (só aparece depois de tocar num dos botões acima):
   - Título "Novo morador jovem" ou "Novo morador adulto".
   - Campo "Nome" (`type="text"`, placeholder "Como a pessoa quer ser chamada").
   - Campo "Idade" (`type="text"`, placeholder "Ex.: 15").
   - Só para adulto: interruptor "Também é gestor da casa" · "Pode liberar os jovens e ver energia".
   - Dica: para jovem, "O jovem entra com o perfil jovem e usa só o que você liberar."; para adulto, "O adulto entra com o perfil completo, sem energia e permissões, a não ser que seja gestor."
   - Botão "Salvar e enviar convite".
9. **Pedido de liberação** (faixa amarela): "**Davi** pediu para liberar a **Carona**." com botões "Agora não" e "Liberar".
10. **"O que os jovens podem usar"**: lista de interruptores:
    - "Eventos" · "Ver a agenda e confirmar presença"
    - "Oportunidades" · "Cursos, estágios e vestibular"
    - "Trilhas em grupo" · "Só caminhadas organizadas"
    - "Carona" · "Pedir vaga nas caronas dos vizinhos"
    - "Desapego" · "Anunciar e conversar com compradores"
11. Nota de rodapé: "Energia e avisos urgentes ficam sempre com o gestor. Os jovens veem só os avisos informativos e de eventos."

Não há barra de navegação inferior nesta tela.

## Comportamento (script `Component`)
- **Estado inicial**:
  - `on`: `{ eventos: true, oportunidades: true, trilhas: true, carona: false, desapego: false }`
  - `request: true` (o pedido do Davi aparece)
  - `adding: null`, `name: ''`, `age: ''`, `co: false`
  - `jovens`: `[{ name: 'Davi Ribeiro', sub: '15 anos · perfil jovem' }]`
  - `adultos`: `[{ name: 'Marina Ribeiro', sub: '44 anos · também gestora' }]`
- **Iniciais** dos avatares: primeira letra do nome, em maiúscula (ou "?" sem nome).
- **"Morador jovem" / "Morador adulto"**: abre o formulário do tipo escolhido e limpa os campos; tocar de novo no mesmo botão fecha. O botão ativo fica preenchido (laranja para jovem, verde para adulto) e o formulário ganha borda da mesma cor.
- **Campos**: "Nome" e "Idade" gravam em `name` e `age` a cada tecla. Não há validação.
- **Interruptor "Também é gestor da casa"**: alterna `co`.
- **"Salvar e enviar convite"**: sem nome, usa "Novo jovem" ou "Novo adulto"; sem idade, usa "?". O jovem entra na lista "Jovens da casa" com "<idade> anos · perfil jovem"; o adulto entra em "Adultos da casa" com "<idade> anos · também gestor" (interruptor ligado) ou "<idade> anos · perfil adulto". O formulário fecha. Nenhum convite é enviado de fato no protótipo.
- **Pedido do Davi**: "Liberar" liga a permissão "Carona" e esconde o pedido; "Agora não" só esconde o pedido.
- **Interruptores de permissão**: cada toque inverte o valor (`flip`). Ligado = trilho verde e bolinha à direita; desligado = trilho cinza.
- **Botão de compartilhar o código**: não tem `onClick`; não faz nada no protótipo.

## Navegação
| Elemento | Leva para |
| --- | --- |
| Botão de voltar | `Main.dc.html` |

Chegam a esta tela: o item "Minha casa" da barra de `Main.dc.html` e, em `GestorMinhaFamilia.dc.html`, o item "Minha casa" da barra e o botão "Permissões e moradores em Minha casa".

## Dados mostrados → registros do sistema
| Dado na tela | Registro |
| --- | --- |
| "Rua Japurá, 12" | Casa (rua, número) |
| "CKS-4821" | Casa (código da família, 3 letras e 4 números) |
| Nome, idade, perfil ("perfil jovem", "perfil adulto", "também gestor/gestora") | Pessoa (nome, data de nascimento ou idade, perfil) |
| Etiqueta "Ativo" | Pessoa (situação: ativa ou esperando aprovação) |
| Interruptores "Eventos", "Oportunidades", "Desapego" | Permissão do jovem (área, ligada ou desligada) |
| Interruptores "Trilhas em grupo" e "Carona" | **Sem registro**: a Permissão do jovem só prevê Eventos, Oportunidades e Desapego |
| Pedido "Davi pediu para liberar a Carona" | **Sem registro**: não há registro de pedido de liberação entre os 8 |
| "Salvar e enviar convite" | **Sem registro de convite para moradores**: o "código de convite" só existe no registro Organizador |
| Interruptor "Também é gestor da casa" | Pessoa (perfil) — os requisitos dizem que o adulto "pode ser marcado como segundo gestor" |

## Regras dos documentos que se aplicam
- Requisitos da versão 1, "Telas da versão 1": Minha casa — "Só gestores veem esta tela".
- Requisitos, "Perfis e permissões": o gestor "cria o código da família; aprova jovens e adultos; liga e desliga o que cada jovem pode usar". O adulto "pode ser marcado como segundo gestor". O jovem usa "Eventos, Guia e oportunidades e avisos informativos e importantes; Desapego só se o gestor liberar".
- Requisitos, "Perfis e permissões", regras 1 e 2: avisos urgentes sempre vão para os gestores; o jovem nunca vê avisos urgentes no app.
- Requisitos, "Fluxos principais": o gestor aprova toda conta de jovem antes de ela funcionar; o adulto entra pelo código, "a conta ativa na hora e o gestor recebe um aviso".
- Requisitos, "Dados que o sistema guarda": Casa (código no formato CKS-4821); Permissão do jovem (Pessoa, área — Eventos, Oportunidades, Desapego —, ligada ou desligada), visível aos gestores da casa.
- Requisitos, "Piloto: aceite e métricas": "O gestor liga e desliga o Desapego do jovem, e o app do jovem muda na hora".
- Requisitos, "Requisitos gerais" (LGPD): "conta de menor de 18 anos só ativa com aprovação do gestor".

## Divergências entre protótipo e documentos
1. **Áreas de Fase 2 nas permissões**: "Trilhas em grupo" e "Carona" aparecem como permissões, mas trilhas e carona são Fase 2, e o registro Permissão do jovem só prevê Eventos, Oportunidades e Desapego.
2. **Pedido de exemplo é de Fase 2**: o único pedido de liberação na tela é de "Carona".
3. **Menções a energia e carona**: o card do gestor diz "Acesso completo: energia, desapego, carona e avisos urgentes."; o interruptor de segundo gestor diz "Pode liberar os jovens e ver energia"; a dica do adulto diz "sem energia e permissões, a não ser que seja gestor". Energia e carona são Fase 2, e os requisitos dizem que o adulto tem "Tudo do app do morador", sem tirar energia dele.
4. **Avisos do jovem**: a nota de rodapé diz "Os jovens veem só os avisos informativos e de eventos". Os requisitos dizem que o jovem vê "avisos informativos e importantes".
5. **Permissões valem para todos os jovens**: a seção "O que os jovens podem usar" é uma lista só para a casa. Os requisitos dizem que o gestor liga e desliga "o que cada jovem pode usar", e o registro Permissão do jovem é por pessoa.
6. **Aprovação de contas não aparece**: todos os moradores aparecem como "Ativo" e não há nenhum jovem "esperando aprovação" nem botão de aprovar conta, embora os requisitos digam que o gestor "aprova jovens e adultos" e que a conta do jovem só ativa depois disso.
7. **Gestor cadastra o morador e "envia convite"**: o formulário "Novo morador jovem/adulto" com "Salvar e enviar convite" não está nos documentos. Pelos requisitos, o jovem e o adulto criam a própria conta com o código da família (`CadastroJovem`, `CadastroGestor`), e convite com código só existe para organizadores.
8. **Aviso ao gestor quando um adulto entra**: os requisitos dizem que "o gestor recebe um aviso"; a tela não mostra esse aviso.
9. **Pedido de liberação sem registro**: o pedido existe na tela (e "Pedir liberação" em Início · jovem), mas não há registro correspondente entre os 8 de "Dados que o sistema guarda".
10. **Dados de exemplo da família diferentes entre telas**: aqui o gestor é "Lucca Ribeiro", e "Marina Ribeiro" é "também gestora". Em `JovemFamilia.dc.html`, "Lucca Ribeiro (você)" é jovem de 16 anos, Marina é "Mãe · gestora da casa" e existe "Paulo Ribeiro", "Pai · adulto da casa".

## Notas para implementação
- Na V1, as permissões "Trilhas em grupo" e "Carona" e as menções a energia e carona pertencem a áreas de Fase 2 (ver divergências 1 a 3); a decisão de ocultá-las não está escrita nos requisitos para esta tela.
- O botão de compartilhar o código não tem ação no protótipo.
- "Salvar e enviar convite" só acrescenta o card na lista; o protótipo não define o que o convite envia.
- O valor padrão das permissões no protótipo é Eventos, Oportunidades e Trilhas ligados; Carona e Desapego desligados. Os requisitos não dão valores padrão; só dizem que o Desapego do jovem depende do gestor.
- Esta tela não tem barra inferior; a saída é o botão de voltar para `Main.dc.html`.
