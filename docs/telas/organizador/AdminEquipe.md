# Equipe e permissões — `AdminEquipe.dc.html`

| Campo | Valor |
| --- | --- |
| App | Conecta Cidade Organizadores |
| Página do canvas | `organizador` |
| Nome na lista "Telas da versão 1" dos requisitos | Equipes e permissões |
| Versão | V1 com partes ocultas até a Fase 2 |
| Perfil que vê | Administração do Núcleo ("convida pessoas"; "Só a administração muda permissões") |
| Protótipo | [`design/prototipo/AdminEquipe.dc.html`](../../../design/prototipo/AdminEquipe.dc.html) |
| Tamanho | 390×844 |

O título do board no `canvas.json` é "Equipe e permissões". O título dentro da tela e o nome na lista da V1 são "Equipes e permissões".

## Para que serve
Mostra os "Grupos e as áreas que cada um pode publicar" e permite o "convite de pessoas". Pelos requisitos, "Só a administração muda permissões".

## Conteúdo da tela (de cima para baixo)
O cabeçalho e a barra inferior ficam fixos e o meio da tela rola.

1. **Cabeçalho**
   - Rótulo "Organizador".
   - Título "Equipes e permissões".
   - Subtítulo "Quem trabalha em campo e quem publica no app".
2. **Seletor de abas** (dois botões): "Equipes de campo" (começa ativa) e "Permissões".
3. **Aba "Equipes de campo"**
   - Três contadores:
     - "4" equipes.
     - "23" pessoas.
     - "<n>" em campo agora, em vermelho (valor calculado: 2).
   - Um card por equipe, com:
     - Ponto colorido, nome e "<pessoas> · líder: <nome>".
     - Selo de situação e local ou tarefa.
     - Botão redondo de telefone (`aria-label="Ligar para o líder da equipe"`).
4. **Aba "Permissões"**
   - Texto: "Toque numa área para liberar ou tirar a permissão do grupo."
   - Um card por grupo, com ponto colorido, nome, quantidade e chips das áreas. As áreas liberadas aparecem com "✓ " e fundo escuro.
5. **Card "Convidar pessoa"** (só quando aberto; borda escura). Aparece abaixo de qualquer uma das abas:
   - Título "Convidar pessoa".
   - Campo "E-mail ou celular" (texto, placeholder "nome@exemplo.com").
   - "Entra em": chips "Administração", "Energia", "Eventos", "Comitê Jovem", "Equipe de campo".
   - Mensagem, depois de enviar: "Convite enviado com o código de acesso."
   - Botão "Enviar convite".
6. **Botão** "Convidar pessoa" (vira "Fechar" quando o card está aberto).
7. **Barra de navegação inferior**: "Painel", "Publicar", "Energia", "Aprovar", "Equipe" (ativo).

## Comportamento (script `Component`)
- **Estado inicial:**
  ```js
  { tab: 'field', inviting: false, role: 'Equipe de campo', sent: false,
    perm: { adm: { Avisos: true, Energia: true, Eventos: true, Trilhas: true, Casas: true, Coleta: true },
            ene: { Energia: true }, evt: { Eventos: true },
            cj: { Eventos: true, Trilhas: true }, campo: { Casas: true, Coleta: true } } }
  ```
- **Abas:** tocar troca `tab` entre `'field'` ("Equipes de campo") e `'perm'` ("Permissões").
- **Equipes de campo** (dados de exemplo):

  | Equipe | Pessoas | Líder | Situação | Local / tarefa | Telefone |
  | --- | --- | --- | --- | --- | --- |
  | Rede elétrica | 6 pessoas | Carlos Nogueira | Em campo | Rua Juruá · quarteirão 2 | `tel:+559430000101` |
  | Poda e jardinagem | 5 pessoas | Sandra Melo | Em campo | Rua Paru · quarteirão 3 | `tel:+559430000102` |
  | Manutenção das casas | 8 pessoas | José Ferreira | Disponível | 6 reformas na fila | `tel:+559430000103` |
  | Coleta seletiva | 4 pessoas | Paulo Santos | Na rota | Recicláveis · 22 de 53 trechos | `tel:+559430000104` |

  - "em campo agora" conta as equipes com `busy: true` (Rede elétrica e Poda e jardinagem, total 2).
  - Cores do selo:

    | Situação | Fundo | Texto |
    | --- | --- | --- |
    | Em campo | vermelho-claro | vermelho |
    | Na rota | verde-água | verde |
    | Disponível | verde-claro | verde |

  - "4 equipes" e "23 pessoas" estão fixos no markup.
- **Permissões:** 5 grupos × 6 áreas ("Avisos", "Energia", "Eventos", "Trilhas", "Casas", "Coleta").

  | Grupo | Quantidade | Áreas liberadas no início |
  | --- | --- | --- |
  | Administração do Núcleo | 4 pessoas | Avisos, Energia, Eventos, Trilhas, Casas, Coleta |
  | Equipe de energia | 3 pessoas | Energia |
  | Organizadores de eventos | 12 grupos | Eventos |
  | Comitê Jovem Entre Fases | 49 jovens | Eventos, Trilhas |
  | Equipes de campo | 23 pessoas | Casas, Coleta |

  - Tocar numa área inverte o valor em `perm[grupo][área]`. Não há confirmação nem checagem de perfil.
- **Convite:**
  - "Convidar pessoa" alterna `inviting` e apaga `sent`. O rótulo do botão muda entre "Convidar pessoa" e "Fechar".
  - Os chips "Entra em" são de escolha única. Começam em "Equipe de campo", e trocar apaga `sent`.
  - "Enviar convite" grava `sent: true` e mostra "Convite enviado com o código de acesso.".
  - O campo "E-mail ou celular" não tem `onInput` nem validação.
- O método `chips()` é usado só nos chips "Entra em".

## Navegação
| Elemento | Leva para |
| --- | --- |
| Botão de telefone de cada equipe | Discagem `tel:` para o número do líder |
| Barra: Painel | `AdminInicio.dc.html` |
| Barra: Publicar | `AdminPublicar.dc.html` |
| Barra: Energia | `AdminEnergia.dc.html` (Fase 2) |
| Barra: Aprovar | `AdminAprovar.dc.html` |
| Barra: Equipe | `AdminEquipe.dc.html` (esta tela) |

## Dados mostrados → registros do sistema
| Dado na tela | Registro |
| --- | --- |
| Grupos e quantidade de pessoas | Organizador → grupo (a quantidade sai da contagem de organizadores por grupo) |
| Áreas liberadas por grupo | Organizador → áreas que pode publicar |
| Convite: e-mail | Organizador → e-mail |
| Convite: celular | **Sem campo no registro Organizador** (só e-mail) |
| Convite: "Entra em" | Organizador → grupo |
| "Convite enviado com o código de acesso." | Organizador → código de convite |
| Equipes de campo (nome, pessoas, líder, situação, local, telefone, "6 reformas na fila", "22 de 53 trechos") | **Sem registro correspondente** |
| "quarteirão 2", "quarteirão 3" | Tabela própria de ruas e quarteirões (fora dos 8 registros) |

## Regras dos documentos que se aplicam
- **Requisitos da V1 · Telas da versão 1 · Equipes e permissões:** "Grupos e as áreas que cada um pode publicar; convite de pessoas"; "Só a administração muda permissões".
- **Requisitos da V1 · Perfis e permissões:**
  - São três perfis de organizador (Administração do Núcleo, Organizador de eventos, Comitê Jovem Entre Fases), todos com "Convite com código de acesso".
  - A Administração "Publica avisos oficiais com selo, eventos e Guia; convida pessoas".
  - O Organizador de eventos "Publica eventos". O Comitê Jovem "Publica eventos dos jovens".
  - "Os organizadores só publicam nas áreas liberadas para o grupo deles."
  - Regra 4: um organizador só vê no Painel as áreas do seu grupo.
- **Requisitos da V1 · Dados · Organizador:** nome, e-mail, grupo, áreas que pode publicar, código de convite. Quem vê: Administração.
- **Requisitos da V1 · Requisitos gerais · Segurança:** "código de acesso de organizador vale uma vez".
- **Requisitos da V1 · Objetivo e escopo:** Energia, Casas e manutenção, Trilhas com agenda e Rota da coleta são Fase 2. O critério da V1 é "não depender de dados ou equipes de fora do grupo para funcionar".

## Divergências entre protótipo e documentos
- **Aba "Equipes de campo" inteira está fora da V1:**
  - Mostra equipes operacionais: Rede elétrica, Poda e jardinagem, Manutenção das casas, Coleta seletiva com rota ("22 de 53 trechos").
  - Os documentos não descrevem essas equipes, e elas ligam a Energia, Casas e Rota da coleta, que são Fase 2.
  - É a aba que abre primeiro na tela.
- **Grupos que não são perfis da V1:** "Equipe de energia" e "Equipes de campo" aparecem como grupos com permissão de publicar e como opções de convite ("Energia", "Equipe de campo"). A V1 tem só três perfis de organizador. O convite começa em "Equipe de campo".
- **Áreas de Fase 2 na lista de permissões:** "Energia", "Trilhas" e "Casas". "Coleta" também aparece como área publicável. Na V1 a coleta é "só a tabela de dias", e os documentos não dizem qual grupo a publica.
- **Áreas da V1 que faltam:** "Guia", que a Administração publica, não aparece entre as áreas.
- **Comitê Jovem com "Trilhas" liberado** no estado inicial. Os requisitos dão ao Comitê só "eventos dos jovens", e Trilhas é Fase 2.
- **Convite por celular:** o campo aceita "E-mail ou celular". O registro Organizador guarda só e-mail, e a Entrada pede e-mail.
- **Nome do convidado:** o registro Organizador tem "Nome", mas o convite não tem campo de nome.
- **"Só a administração muda permissões":** o protótipo não mostra restrição. A tela é a mesma para qualquer um, e qualquer toque muda a permissão.
- **Item "Energia" na barra inferior** (Fase 2).
- **Título do board** no `canvas.json` ("Equipe e permissões") é diferente do nome na lista da V1 e do título na tela ("Equipes e permissões").

## Notas para implementação
- Na V1, pela tabela de escopo, não entram a aba "Equipes de campo", os grupos "Equipe de energia" e "Equipes de campo", e as áreas "Energia", "Trilhas" e "Casas". Os documentos não definem se a área "Coleta" entra na V1 nem qual grupo a publicaria.
- Os grupos da V1 são os três perfis dos requisitos: Administração do Núcleo, Organizador de eventos e Comitê Jovem Entre Fases.
- Tudo o que está nesta tela são dados de exemplo:
  - nomes de líderes e telefones `tel:+5594300001xx`;
  - quantidades ("4 pessoas", "12 grupos", "49 jovens", "23 pessoas");
  - os textos "6 reformas na fila" e "22 de 53 trechos".
- O código de acesso enviado no convite vale uma vez (requisito de segurança). O protótipo não mostra o código nem como ele é enviado.
- O `<title>` do arquivo é "Conecta Cidade Organizador – Equipe".
