# Entrar · gestor ou jovem — `Login.dc.html`

| Campo | Valor |
| --- | --- |
| App | Meu Carajás Super App (morador) |
| Página do canvas | `morador` ("Meu Carajás Super App") |
| Nome na lista "Telas da versão 1" dos requisitos | Entrar |
| Versão | V1 |
| Perfil que vê | Gestor da casa, Adulto e Jovem (antes de entrar) |
| Protótipo | [`design/prototipo/Login.dc.html`](../../../design/prototipo/Login.dc.html) |
| Tamanho | 390×844 (raio 40, interativo) |

## Para que serve
Tela de entrada do app do morador. Nos requisitos: "Abas Gestor da casa e Morador jovem, e-mail ou celular e senha"; "Mostra na hora se a conta existe, se é de outro perfil ou se espera aprovação; leva ao cadastro quando não existe".

## Conteúdo da tela (de cima para baixo)
Fundo `#F4F6F1`, texto `#13241B`, DM Sans. O conteúdo rola na vertical.

1. **Marca:** símbolo do Meu Carajás Super App (30×36 px, a flor de Carajás rosa; até 22/10/2026 era o pino `#1E5B40` com ponto `#E07A3F`, ver A-19 e A-20) + "Meu Carajás Super App" (Bricolage Grotesque, 800, 20 px).
2. **Título** "Entrar" (Bricolage Grotesque, 800, 30 px) e **subtítulo** "Escolha seu perfil e use o e-mail ou celular do cadastro."
3. **Seletor de perfil** (duas abas em fundo `#E2E7E0`, botões de 46 px com `aria-pressed`):
   - "Gestor da casa" (ativa: fundo `#1E5B40`, texto branco)
   - "Morador jovem" (ativa: fundo `#B4471C`, texto branco)
   - Inativa: fundo transparente, texto `#13241B`.
4. **Card do formulário** (branco, com faixa superior de 5 px na cor de destaque da aba: `#1E5B40` gestor / `#B4471C` jovem):
   - **Dica da aba** (`tabHint`):
     - Gestor: "Para quem é responsável pela casa: acesso completo, energia e permissões dos jovens."
     - Jovem: "Para os jovens da casa: eventos, trilhas e oportunidades. O gestor libera o resto."
   - **Campo "E-mail ou celular"** — `input type="text"`, `autocomplete="username"`, 52 px. Placeholder: "Ex.: lucca@email.com" (gestor) ou "Ex.: davi@email.com" (jovem). Borda muda de cor conforme a conta (ver Comportamento).
   - **Mensagem do campo** logo abaixo (13 px, 700), que muda enquanto se digita.
   - **Botão "Trocar para …"** (fundo `#13241B`, texto branco, 40 px) — aparece só quando a conta é de outro perfil.
   - **Campo "Senha"** — `input` (`password` ou `text`), placeholder "Sua senha", `autocomplete="current-password"`, 52 px, com botão de olho ao lado (52×52, `aria-label` "Mostrar ou esconder a senha").
   - **Caixa de aviso** (aparece conforme o estado): título, texto e, quando for o caso, botão de criar conta.
   - **Botão principal:** "Entrar" (quando ainda não pode entrar) ou "Entrar como {primeiro nome}" com seta (quando e-mail/celular e senha estão certos). Pílula de 56 px na cor de destaque da aba.
   - **Botão de texto** "Esqueci minha senha" (`#1E5B40`, 44 px).
5. **Bloco de cadastro:**
   - "Ainda não tem conta?"
   - Botão-link com borda na cor da aba: "Criar conta de gestor ou adulto" (aba gestor) ou "Criar conta de jovem" (aba jovem).
   - Botão de texto "ou faça o cadastro pelo WhatsApp" (sem ação ligada).
   - "Comunicados e alertas do Núcleo chegam por SMS." (12 px).
6. **Link de rodapé:** "Sou organizador · abrir o Meu Carajás Organizadores" (13 px, `#4F5E55`).

Não há barra de navegação inferior.

## Comportamento (script `Component`)
**Estado inicial:** `{ tab: 'gestor', ident: '', pass: '', show: false, tried: false, forgot: false }`.

**Contas de exemplo** (dados de exemplo dentro de `renderVals()`, todas com senha `12345678`):

| E-mail | Celular | Nome | Perfil | Situação |
| --- | --- | --- | --- | --- |
| lucca@email.com | 94999990012 | Lucca Ribeiro | gestor | ok |
| marina@email.com | 94999990013 | Marina Ribeiro | gestor | ok |
| davi@email.com | 94999990014 | Davi Ribeiro | jovem | ok |
| duda@email.com | 94999990015 | Duda Ribeiro | jovem | pending |

**Reconhecimento do que foi digitado:** o texto é aparado e passado para minúsculas. Parece e-mail se casar com `^[^@\s]+@[^@\s]+\.[a-z]{2,}$`; parece celular se tiver 10 dígitos ou mais e nenhuma letra ou "@". A conta é procurada pelo e-mail exato ou, se parecer celular, pelos dígitos.

**Estados do campo e mensagens (aparecem na hora, enquanto digita):**

| Estado | Quando | Mensagem | Cor |
| --- | --- | --- | --- |
| `empty` | campo vazio | (vazio) | `#4F5E55` |
| `typing` | ainda não parece e-mail nem celular | "Continue digitando o e-mail ou celular…" | `#4F5E55` |
| `notfound` | não há conta | "✕ Não encontramos cadastro com esse e-mail" (ou "celular") | `#9B1C10` |
| `wrongtab` | conta é do outro perfil | "! Essa conta é de {gestor da casa / morador jovem}: {nome}" | `#6B4D05` |
| `pending` | conta esperando aprovação | "… Conta de {nome} esperando o gestor aprovar" | `#6B4D05` |
| `found` | conta encontrada e aprovada | "✓ Conta encontrada: {nome}" | `#17432F` |

Borda do campo: `#1E5B40` em `found`, `#B4471C` em `notfound`, `#C9D2CB` nos demais. Em `wrongtab` aparece o botão "Trocar para Gestor da casa" ou "Trocar para Morador jovem", que muda a aba para o perfil da conta.

**Senha:** fica certa quando é igual à da conta. Com conta `found` e senha certa, o botão vira o link "Entrar como {primeiro nome}". Borda da senha: `#B4471C` se tentou entrar com conta encontrada e senha errada; `#1E5B40` quando pode entrar; `#C9D2CB` nos demais. O botão de olho alterna entre mostrar e esconder a senha.

**Botão "Entrar" (quando não pode entrar)** marca `tried: true` e mostra uma caixa de aviso:

| Situação | Título | Texto | Cores (fundo / título) |
| --- | --- | --- | --- |
| Campo vazio ou incompleto | "Falta o e-mail ou celular" | "Use o mesmo que você colocou no cadastro." | `#F8EDC9` / `#6B4D05` |
| Conta não existe | "Você ainda não tem cadastro" | "Crie sua conta em poucos passos. " + "Você vai receber o código da família." (aba gestor) ou "Peça o código da família para o gestor da sua casa." (aba jovem) — com botão de criar conta | `#FBE6DA` / `#8E3714` |
| Esperando aprovação | "Quase lá!" | "Sua conta foi criada, mas o gestor da casa ainda não aprovou. Peça para ele abrir Minha casa no app." | `#F8EDC9` / `#6B4D05` |
| Perfil trocado | "Perfil trocado" | "Esse cadastro é de {perfil}. Troque a aba lá em cima." | `#F8EDC9` / `#6B4D05` |
| Senha errada | "Senha incorreta" | "Confira a senha ou toque em “Esqueci minha senha”." | `#FBDCD6` / `#9B1C10` |
| Senha vazia | "Falta a senha" | "Digite a senha que você criou no cadastro." | `#FBDCD6` / `#9B1C10` |

**"Esqueci minha senha"** marca `forgot: true` e mostra:
- com conta encontrada: "Código enviado" — "Mandamos um código para {e-mail digitado ou "o celular"} para você criar uma senha nova." (fundo `#DFE9F5`, título `#24578C`);
- sem conta encontrada: "Digite seu e-mail ou celular primeiro" — "Assim a gente encontra seu cadastro e manda o código." (fundo `#F4F6F1`).

Trocar de aba, editar o e-mail/celular ou editar a senha limpam `tried` e `forgot`.

**Lista `demo`:** `renderVals()` monta quatro atalhos de preenchimento ("Gestor: lucca@email.com", "Jovem: davi@email.com", "Jovem: duda@email.com", "Sem cadastro: novo@email.com"), mas nenhum elemento do markup usa `{{demo}}`; não aparecem na tela.

## Navegação
| Elemento | Leva para |
| --- | --- |
| "Entrar como {nome}" (aba gestor) | `Main.dc.html` |
| "Entrar como {nome}" (aba jovem) | `JovemInicio.dc.html` |
| "Criar conta de gestor ou adulto" (bloco de cadastro e caixa de aviso, aba gestor) | `CadastroGestor.dc.html` |
| "Criar conta de jovem" (bloco de cadastro e caixa de aviso, aba jovem) | `CadastroJovem.dc.html` |
| "Sou organizador · abrir o Meu Carajás Organizadores" | `AdminEntrada.dc.html` |

Telas do protótipo que levam para esta: `Splash.dc.html`, `CadastroGestor.dc.html` e `CadastroJovem.dc.html` (voltar), `JovemInicio.dc.html` e `JovemFamilia.dc.html`.

## Dados mostrados → registros do sistema
| Campo na tela | Registro |
| --- | --- |
| E-mail ou celular | Pessoa → e-mail, celular |
| Senha | Pessoa → senha (guardada cifrada) |
| Aba Gestor da casa / Morador jovem e "Essa conta é de…" | Pessoa → perfil (gestor, adulto, jovem) |
| "esperando o gestor aprovar" | Pessoa → situação (ativa ou esperando aprovação) |
| Nome na mensagem e no botão "Entrar como…" | Pessoa → nome |
| Código para criar senha nova ("Esqueci minha senha") | Sem registro correspondente |

## Regras dos documentos que se aplicam
- *Conecta Cidade: requisitos da versão 1*, "Telas da versão 1", linha **Entrar**: "Abas Gestor da casa e Morador jovem, e-mail ou celular e senha"; "Mostra na hora se a conta existe, se é de outro perfil ou se espera aprovação; leva ao cadastro quando não existe".
- *Requisitos da versão 1*, "Fluxos principais" → **Entrar**: (1) escolhe a aba; (2) digita e-mail ou celular e o app mostra se a conta existe, se é de outro perfil ou se espera aprovação; (3) "Sem cadastro, o app oferece criar conta pelo app ou pelo WhatsApp"; (4) "Com a senha certa, entra no início do seu perfil".
- *Requisitos da versão 1*, "Fluxos principais": "o gestor aprova toda conta de jovem antes de ela funcionar".
- *Requisitos da versão 1*, "SMS e WhatsApp": "Comunicados e alertas saem por SMS; o WhatsApp é usado só para o cadastro".
- *Requisitos da versão 1*, "Requisitos gerais" → **Segurança**: "senha cifrada"; "sair da conta em todos os aparelhos". **Acessibilidade**: botões de pelo menos 44 px.
- *Requisitos da versão 1*, "Perfis e permissões": Administração, Organizador de eventos e Comitê Jovem entram no app **Organizadores** por "Convite com código de acesso".

## Divergências entre protótipo e documentos
1. **Dicas das abas citam áreas da Fase 2:** a aba gestor diz "acesso completo, energia e permissões dos jovens" e a aba jovem diz "eventos, trilhas e oportunidades". Energia e Trilhas são Fase 2 nos requisitos. Para o jovem, os requisitos listam "Eventos, Guia e oportunidades e avisos informativos e importantes; Desapego só se o gestor liberar".
2. **Onde entra o adulto:** os requisitos têm o perfil "Adulto da casa", mas a tela só tem as abas "Gestor da casa" e "Morador jovem". O botão da aba gestor diz "Criar conta de gestor ou adulto", mas a lógica só compara `gestor` e `jovem` e não há conta de exemplo de adulto; os documentos não dizem em qual aba o adulto entra.
3. **"Esqueci minha senha":** a recuperação de senha por código ("Mandamos um código para…") não aparece nos documentos.
4. **Link para o app de organizadores:** "Sou organizador · abrir o Meu Carajás Organizadores" liga o app do morador ao app Organizadores; os requisitos descrevem dois apps separados e não falam desse atalho.
5. **Quando o cadastro é oferecido:** a mensagem "✕ Não encontramos cadastro…" aparece na hora, mas a caixa com o botão de criar conta só aparece depois de tocar em "Entrar"; o bloco "Ainda não tem conta?" fica sempre visível. Os documentos só dizem "leva ao cadastro quando não existe".
6. **Cadastro pelo WhatsApp sem ação:** o botão "ou faça o cadastro pelo WhatsApp" não tem ação nem número nesta tela (o número "(94) 99999-0100" aparece só nas telas de cadastro).

## Notas para implementação
- As quatro contas, a senha `12345678` e os celulares `9499999001x` são dados de exemplo do protótipo.
- A lista `demo` do script não é mostrada na tela; é só apoio do protótipo.
- A cor de destaque da tela segue a aba: verde `#1E5B40` para gestor, terracota `#B4471C` para jovem (faixa do card, botões e borda do botão de cadastro).
- A conta "esperando aprovação" não entra, mesmo com a senha certa; a tela pede para o gestor "abrir Minha casa no app".
- Depois de entrar, o gestor vai para `Main.dc.html` (Início · gestor) e o jovem para `JovemInicio.dc.html` (Início · jovem).
