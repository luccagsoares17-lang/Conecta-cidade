# Família · jovem — `JovemFamilia.dc.html`

| Campo | Valor |
| --- | --- |
| App | Meu Carajás Super App (morador) |
| Página do canvas | `morador` ("Meu Carajás Super App") — conforme `design/prototipo/canvas.json` |
| Nome na lista "Telas da versão 1" dos requisitos | Não está na lista da V1 |
| Versão | V1 com partes ocultas até a Fase 2 (classificação proposta; ver justificativa abaixo) |
| Perfil que vê | Jovem |
| Protótipo | [`design/prototipo/JovemFamilia.dc.html`](../../../design/prototipo/JovemFamilia.dc.html) |
| Tamanho | 390×844 |

**Por que essa classificação.** A lista "Telas da versão 1" tem 13 telas do morador, e "Família · jovem" não é uma delas. A tabela de Fase 2 também não fala dela. O conteúdo da tela é o lado do jovem de duas coisas que estão na V1:
- o pedido de liberação ("O botão Pedir liberação envia o pedido para o gestor", linha Início · jovem);
- os "pedidos de liberação" que o gestor vê em "Minha casa".

Ela também atende à regra "Desapego só se o gestor liberar" (opção "Liberar o Desapego no meu perfil"). Por isso a função cabe na V1. Mas duas das quatro opções de pedido ("Trilha" e "Carona") são de áreas da Fase 2 e teriam de ficar ocultas. Os documentos não dizem se a tela deve ser a 14ª tela do morador ou se o pedido fica só no Início · jovem. Essa decisão continua em aberto (ver Divergências).

## Para que serve
No protótipo, a tela mostra ao jovem quem mora na casa e permite mandar pedidos aos gestores ("O pedido vai para os gestores da casa"). Ela também lista os pedidos já feitos e a situação de cada um. Nos documentos, isso corresponde ao fluxo "o gestor decide o que os jovens da casa podem usar" (Requisitos › Perfis e permissões).

## Conteúdo da tela (de cima para baixo)
1. **Cabeçalho** (fixo)
   - Título: "Família"
   - Subtítulo: "Rua Japurá, 12 · código CKS-4821"
   - Selo à direita: "Jovem"
2. **Área que rola:**
   1. **"Quem mora com você"**: card com a lista de moradores. Cada linha tem a inicial num círculo, o nome, a descrição e uma etiqueta:
      - "Marina Ribeiro" — "Mãe · gestora da casa" — etiqueta "Gestora"
      - "Paulo Ribeiro" — "Pai · adulto da casa" — etiqueta "Adulto"
      - "Lucca Ribeiro (você)" — "16 anos · perfil jovem" — etiqueta "Jovem"
      - "Davi Ribeiro" — "15 anos · irmão" — etiqueta "Jovem"
   2. **"Pedir para participar"**: card com formulário.
      - Texto: "Escolha o que você quer fazer. O pedido vai para os gestores da casa."
      - "O que é": 4 chips, "Evento", "Trilha", "Carona" e "Desapego".
      - "Qual": lista de opções (botões com título e subtítulo), que muda conforme o chip:
        - Evento: "CineFases" (Sábado, 7/11, 19h · Clube do Núcleo); "Noite de Pizza" (Sexta, 13/11, 19h30 · Salão de festas); "Torneio de videogame" (Sábado, 5/12, 14h · Biblioteca).
        - Trilha: "Trilha Uxi" (Sem guia · sempre em grupo); "Trilha Lagoa da Mata" (Guia obrigatório · 2,5 km); "Trilha Peito de Aço" (Guia obrigatório · cachoeira).
        - Carona: "Carona para Parauapebas" e "Carona de volta para o Núcleo" (as duas com "Com um vizinho do Núcleo").
        - Desapego: "Vender ou doar algo" (Liberar o Desapego no meu perfil); "Comprar um item" (Combinar a compra com a família).
      - Campo de texto: label "Recado para a família (opcional)", `type="text"`, `id="msg"`, placeholder "Ex.: vou com a turma do Comitê".
      - Botão: "Enviar pedido".
   3. **"Meus pedidos"**: lista de cards. Cada card tem uma faixa colorida, o tipo (em maiúsculas), o que foi pedido, a data e uma etiqueta com a situação.
3. **Barra de navegação inferior** (5 itens): "Início", "Eventos", "Trilhas", "Família" (ativo, `aria-current="page"`) e "Perfil".

## Comportamento (script `Component`)
- Estado inicial: `{ kind: 'Evento', opt: null, msg: '', mine: [] }`. A tela abre com o chip "Evento" marcado e nenhuma opção escolhida.
- **Chip "O que é":** troca `kind` e limpa a opção escolhida (`opt: null`). O chip ativo fica laranja (`#B4471C`).
- **Opção "Qual":** grava `opt` com o título da opção, que ganha borda laranja e fundo claro.
- **Recado:** o campo atualiza `msg` a cada mudança.
- **"Enviar pedido":**
  - Sem opção escolhida, o botão fica cinza e tocar nele não faz nada (`if (!this.state.opt) return;`). Não aparece mensagem de erro.
  - Com opção escolhida, o botão fica laranja. Ao tocar, entra no topo de "Meus pedidos" um pedido com o tipo, a opção, a data "Agora" (mais ` · “<recado>”` se houver recado) e a situação "Enviado" (amarela). Depois a opção e o recado são limpos.
- **Pedidos de exemplo fixos** (sempre abaixo dos novos):
  - Evento · "Olimpíadas Entre Fases" · "Pedido em 18/10" · "Liberado" (verde)
  - Carona · "Carona para Parauapebas" · "Pedido em 19/10" · "Esperando a mãe" (amarelo)
  - Trilha · "Trilha Lagoa da Mata" · "Pedido em 12/10" · "Não liberado" (vermelho)
- Os moradores, o endereço e o código são fixos no markup ou no script.

## Navegação
| Elemento | Leva para |
| --- | --- |
| Barra · "Início" | `JovemInicio.dc.html` |
| Barra · "Eventos" | `JovemEventos.dc.html` |
| Barra · "Trilhas" | `JovemTrilhas.dc.html` |
| Barra · "Família" (ativo) | `JovemFamilia.dc.html` |
| Barra · "Perfil" | `Login.dc.html` |

Só se chega a esta tela pelo item "Família" da barra de `JovemInicio.dc.html` (e dela mesma).

## Dados mostrados → registros do sistema
| Dado na tela | Registro |
| --- | --- |
| "Rua Japurá, 12" | Casa (rua, número) |
| "código CKS-4821" | Casa (código da família) |
| Nomes dos moradores, idade ("16 anos", "15 anos") | Pessoa (nome, data de nascimento ou idade) |
| Etiquetas "Gestora", "Adulto", "Jovem" | Pessoa (perfil) |
| "Mãe", "Pai", "irmão" | **Sem registro correspondente** (o registro Pessoa não guarda parentesco) |
| Opções do tipo "Evento" | Evento (nome, data e hora, local) |
| Opções dos tipos "Trilha" e "Carona" | **Sem registro correspondente** (Fase 2; não há registro de trilha nem de carona entre os 8) |
| Opção "Vender ou doar algo · Liberar o Desapego no meu perfil" | Permissão do jovem (área Desapego) |
| Pedido, recado, data do pedido e situação ("Enviado", "Liberado", "Esperando a mãe", "Não liberado") | **Sem registro correspondente** (não há registro de pedido de liberação; Permissão do jovem só guarda "ligada ou desligada") |

## Regras dos documentos que se aplicam
- **Requisitos › Telas da versão 1 › Início · jovem:** "O botão Pedir liberação envia o pedido para o gestor".
- **Requisitos › Telas da versão 1 › Minha casa:** "Código da família, moradores, pedidos de liberação e permissões dos jovens"; regra "Só gestores veem esta tela".
- **Requisitos › Perfis e permissões:** "Cada casa tem pelo menos um gestor, e o gestor decide o que os jovens da casa podem usar"; linha Jovem: "Desapego só se o gestor liberar"; linha Gestor: "liga e desliga o que cada jovem pode usar".
- **Requisitos › Dados que o sistema guarda:** Casa, com "Quem vê: Gestores da casa e administração"; Pessoa, com "Quem vê: A própria pessoa, os gestores da casa e a administração"; Permissão do jovem, com "Quem vê: Gestores da casa".
- **Requisitos › Dados que o sistema guarda (introdução):** "Todos os dados pessoais ficam no mesmo banco, com acesso por perfil".
- **Requisitos › Requisitos gerais › LGPD:** "proteger dados de menores".
- **Requisitos › Objetivo e escopo (tabela):** "Trilhas com agenda" e "Carona" são Fase 2.

## Divergências entre protótipo e documentos
1. **A tela não está na lista das 13 telas do morador da V1.** Os documentos não dizem se ela entra como tela própria.
2. **O jovem vê o código da família e o endereço da casa.** No registro Casa (rua, número, código da família), "Quem vê" é "Gestores da casa e administração". A tela mostra ao jovem "Rua Japurá, 12 · código CKS-4821".
3. **O jovem vê dados de outras pessoas da casa.** No registro Pessoa, "Quem vê" é "A própria pessoa, os gestores da casa e a administração". A tela mostra ao jovem os nomes, os perfis e a idade do irmão ("Davi Ribeiro — 15 anos").
4. **Parentesco** ("Mãe", "Pai", "irmão") não existe no registro Pessoa.
5. **Pedido de liberação não tem registro.** Os 8 registros não guardam pedido, recado, data do pedido nem situação ("Enviado", "Esperando a mãe", "Liberado", "Não liberado"). O registro Permissão do jovem é só "ligada ou desligada".
6. **Pedido por evento.** Nos requisitos, Eventos é uma área que o gestor liga ou desliga (Permissão do jovem). Aqui o jovem pede para ir a um evento específico ("CineFases", "Olimpíadas Entre Fases"). Os documentos não falam em autorização por evento.
7. **Trilha e Carona (Fase 2)** aparecem como tipos de pedido, com trilhas e caronas de exemplo.
8. **"Comprar um item · Combinar a compra com a família"** não aparece nos documentos.
9. **Recado para a família** (campo opcional) não aparece nos documentos.
10. **"O pedido vai para os gestores da casa"** (todos os gestores), mas a situação de exemplo diz "Esperando a mãe" (uma pessoa). Os documentos dizem só "envia o pedido para o gestor".
11. **Dois lugares para pedir liberação:** `JovemInicio.dc.html` tem o botão "Pedir liberação" (só na Carona), e esta tela tem o formulário completo. Os requisitos falam só do botão no Início · jovem.
12. **Botão desativado sem aviso:** "Enviar pedido" sem opção escolhida não faz nada e não mostra mensagem.
13. **Chips de 40 px de altura:** "Requisitos gerais › Acessibilidade" pede "botões de pelo menos 44 px".

## Notas para implementação
- Se a tela entrar na V1, os tipos "Trilha" e "Carona" ficam ocultos até a Fase 2, conforme a tabela de escopo.
- Moradores, endereço, código, opções e pedidos de exemplo são dados fixos do protótipo.
- Antes de implementar, é preciso resolver o que o jovem pode ver da Casa e das outras Pessoas (divergências 2 e 3). O protótipo contraria a coluna "Quem vê" dos requisitos.
- O botão "Enviar pedido" só funciona com uma opção escolhida em "Qual".
