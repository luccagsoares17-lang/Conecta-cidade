# Criar conta · jovem — `CadastroJovem.dc.html`

| Campo | Valor |
| --- | --- |
| App | Conecta Cidade (morador) |
| Página do canvas | `morador` ("Conecta Cidade") |
| Nome na lista "Telas da versão 1" dos requisitos | Criar conta · jovem |
| Versão | V1 |
| Perfil que vê | Jovem (antes de ter conta) |
| Protótipo | [`design/prototipo/CadastroJovem.dc.html`](../../../design/prototipo/CadastroJovem.dc.html) |
| Tamanho | 390×844 (raio 40, interativo) |

## Para que serve
Cadastro dos jovens da casa com o código da família. Nos requisitos: "Código da família, foto, nome, apelido, idade, celular, interesses e senha"; "A conta fica 'esperando aprovação' até o gestor liberar".

## Conteúdo da tela (de cima para baixo)
Fundo `#F4F6F1`, texto `#13241B`, DM Sans. O cabeçalho fica fixo; o formulário rola. A cor de destaque é a terracota `#B4471C`.

**Cabeçalho (fixo)**
- Botão redondo branco de 44 px com seta para a esquerda (`aria-label` "Voltar").
- "Criar conta" (Bricolage Grotesque, 800, 24 px) e "Para os jovens da casa" (13 px, `#4F5E55`).
- Etiqueta "Jovem" (11 px, caixa alta, fundo `#FBE6DA`, texto `#8E3714`).

**Formulário**
1. **Card WhatsApp** (borda `#1E5B40`): "Prefere pelo WhatsApp?" — "Mande um oi para (94) 99999-0100 e faça o cadastro pela conversa. O WhatsApp é usado só para isso." — botão "Abrir" (verde, sem ação ligada).
2. **Passo 1 · "Sua família"** — caixa escura `#13241B` com o campo **"Código da família"** (rótulo `#FFD27A`; `input type="text"`, placeholder "Ex.: CKS-4821", fundo `#1C3327`, borda `#4F6B5C`, maiúsculas, 20 px) e uma mensagem embaixo.
3. **Passo 2 · "Sobre você"**:
   - Botão de foto (88 px, redondo; sem foto: borda tracejada `#9AA69F` e ícone de câmera; com foto: fundo `#B4471C` e a inicial do nome em `#8E3714`), com selo "+". Ao lado: "Foto de perfil" e "Toque para tirar ou escolher uma foto" / "Foto adicionada. Toque para trocar."
   - **"Nome"** — `text`, placeholder "Seu nome completo".
   - **"Como quer ser chamado"** — `text`, placeholder "Ex.: Duda".
   - **"Idade"** — `text`, placeholder "Ex.: 15".
   - **"Celular (se tiver)"** — `tel`, placeholder "(94) 90000-0000"; ajuda: "Os comunicados e alertas do Núcleo chegam por SMS neste número."
4. **Passo 3 · "Do que você curte?"** — dez pílulas de múltipla escolha: "Cinema", "Culinária", "Videogame", "Vôlei", "Futebol", "Trilhas", "Música", "Leitura", "Dança", "Voluntariado" (selecionada: fundo `#B4471C`). Abaixo: "Escolha pelo menos um" ou "{n} escolhidos · a agenda mostra primeiro o que combina com você".
5. **Passo 4 · "Senha"**:
   - **"Criar senha"** — placeholder "Mínimo de 8 caracteres", botão de olho, barra de força em 3 partes e rótulo.
   - **"Repetir senha"** — placeholder "Digite de novo", com rótulo de conferência.
6. Caixa amarela (`#F8EDC9`): "O gestor da sua casa recebe um pedido para aprovar sua conta e escolhe o que você pode usar no app."
7. Linha "Falta: …" (13 px, 700, `#8E3714`).
8. Botão **"Pedir para entrar"** (56 px): `#B4471C` com texto branco quando tudo está certo; `#C9D2CB` com texto `#4F5E55` quando falta algo.

**Tela de espera (depois de "Pedir para entrar")**
- Círculo de 96 px (`#FBE6DA`) com a inicial do nome (`#8E3714`).
- "Quase lá, {primeiro nome}!"
- Texto: "Mandamos um pedido para o gestor da sua casa. Assim que ele aprovar, você entra." (aprovado: "O gestor aprovou! Sua agenda já vem com os eventos dos seus interesses.")
- Card branco com ponto de situação (`#D4A017` esperando / `#1E5B40` aprovado), o texto "Esperando o gestor aprovar" ou "Conta aprovada" e o botão "Simular aprovação".
- Botão-link "Entrar no app" (`#B4471C`) — só depois de aprovado.

Não há barra de navegação inferior.

## Comportamento (script `Component`)
**Estado inicial:** `{ name: '', age: '', code: '', ints: [], pass: '', pass2: '', show: false, photo: false, done: false, approved: false }`.

- **Código da família:** válido se casar com `^[A-Z]{3}-?[0-9]{4}$` (hífen opcional, texto posto em maiúsculas).
  - Vazio: "Peça para o gestor da sua casa. Ele recebe o código quando cria a conta." (`#CFE3D7`)
  - Válido: "✓ Família Rua Japurá, 12 · gestora: Marina Ribeiro" (`#FFD27A`)
  - Inválido: "O código tem 3 letras e 4 números" (`#FBDCD6`)
- **Foto:** o botão só alterna `photo`; a foto é simulada pela inicial do nome (ou "?").
- **Apelido e celular:** os campos não guardam valor no estado nem são conferidos.
- **Força da senha e conferência:** iguais às de `CadastroGestor.dc.html` — "Use 8 caracteres ou mais" (menos de 8), "Senha fraca: coloque números" (8+), "Senha boa" (8+ com número), "Senha forte" (10+ com número e maiúscula); cores da barra `#E2E7E0`, `#B4471C`, `#D4A017`, `#1E5B40`. Conferência: "✓ As senhas são iguais" / "As senhas não são iguais".
- **O que é obrigatório** (lista "Falta: …", na ordem): "código da família", "nome", "idade" (só confere se não está vazia), "um interesse", "senha" (menos de 8 caracteres ou senhas diferentes).
- **"Pedir para entrar":** só age quando não falta nada; marca `done: true` e mostra a tela de espera.
- **"Simular aprovação":** alterna `approved` (liga e desliga); com `approved` ligado aparecem "Conta aprovada", o texto de aprovação e o botão "Entrar no app".

## Navegação
| Elemento | Leva para |
| --- | --- |
| Botão voltar | `Login.dc.html` |
| "Entrar no app" (depois de aprovado) | `JovemInicio.dc.html` |

Tela do protótipo que leva para esta: `Login.dc.html` (aba "Morador jovem").

## Dados mostrados → registros do sistema
| Campo na tela | Registro |
| --- | --- |
| Código da família | Casa → código da família; Pessoa → casa |
| Foto de perfil | Pessoa → foto |
| Nome | Pessoa → nome |
| Como quer ser chamado | Pessoa → apelido |
| Idade | Pessoa → data de nascimento ou idade |
| Celular (se tiver) | Pessoa → celular |
| Interesses | Pessoa → interesses |
| Criar senha / Repetir senha | Pessoa → senha (guardada cifrada) |
| "Esperando o gestor aprovar" / "Conta aprovada" | Pessoa → situação (ativa ou esperando aprovação) |
| "gestora: Marina Ribeiro" | Pessoa → nome (do gestor da casa) |
| "escolhe o que você pode usar no app" (só citado) | Permissão do jovem (definida pelo gestor em outra tela) |
| Pessoa → perfil | Fica implícito como "jovem" (não há campo) |

## Regras dos documentos que se aplicam
- *Conecta Cidade: requisitos da versão 1*, "Telas da versão 1", linha **Criar conta · jovem**: campos e regra citados em "Para que serve".
- *Requisitos da versão 1*, "Perfis e permissões": Jovem "Usa o código da família e espera a aprovação do gestor"; Gestor "aprova jovens e adultos; liga e desliga o que cada jovem pode usar".
- *Requisitos da versão 1*, "Fluxos principais": "o gestor aprova toda conta de jovem antes de ela funcionar".
- *Requisitos da versão 1*, "Dados que o sistema guarda" → **Casa** (código "3 letras e 4 números, ex.: CKS-4821"), **Pessoa** (apelido, idade, situação) e **Permissão do jovem** (áreas Eventos, Oportunidades, Desapego).
- *Requisitos da versão 1*, "Requisitos gerais" → **LGPD**: "termo de uso e política de privacidade aceitos no cadastro"; "conta de menor de 18 anos só ativa com aprovação do gestor".
- *Requisitos da versão 1*, "Piloto: aceite e métricas": "Um jovem entra com o código, e a conta só ativa depois que o gestor aprova".
- *Requisitos da versão 1*, "SMS e WhatsApp": WhatsApp "Só cadastro".
- *Requisitos da versão 1*, "Telas da versão 1", linha **Eventos**: "Mostra primeiro os interesses do cadastro".

## Divergências entre protótipo e documentos
1. **Sem aceite de termo de uso e política de privacidade:** exigido pela LGPD nos requisitos e ausente da tela.
2. **Jovem sem e-mail:** a tela não tem campo de e-mail (os requisitos também não listam e-mail para o jovem), mas a tela Entrar pede "E-mail ou celular" na aba "Morador jovem", com exemplo "Ex.: davi@email.com", e as contas de exemplo de jovens têm e-mail. Como o celular aqui é "(se tiver)", um jovem pode ficar sem e-mail e sem celular para entrar; os documentos não resolvem isso.
3. **Celular opcional:** os requisitos listam "celular" entre os campos sem dizer que é opcional; o protótipo mostra "Celular (se tiver)" e não confere o campo.
4. **Lista de interesses:** os documentos não definem a lista do cadastro; "Trilhas", "Música", "Leitura", "Dança" e "Voluntariado" só estão no protótipo.
5. **Medidor de força da senha:** os níveis "fraca/boa/forte" não estão nos documentos (a regra de senha mínima de 8 caracteres está escrita para o cadastro de adulto e gestor).
6. **Número do WhatsApp:** "(94) 99999-0100" não aparece nos documentos.
7. **Dados de exemplo diferentes entre telas:** aqui o código leva à "gestora: Marina Ribeiro"; em `CadastroGestor.dc.html` o mesmo endereço (Rua Japurá, 12) mostra "Gestor: Lucca Ribeiro". As duas pessoas aparecem como gestoras nas contas de exemplo de `Login.dc.html`.

## Notas para implementação
- O botão "Simular aprovação" é só do protótipo; na versão real, a aprovação vem do gestor (tela Minha casa).
- A casa "Rua Japurá, 12" e a "gestora: Marina Ribeiro" são dados de exemplo; qualquer código no formato válido "encontra" essa casa no protótipo.
- A foto é simulada (o botão só liga e desliga).
- O botão "Abrir" do card WhatsApp não tem ação no protótipo.
- Idade é texto livre; o script só confere se está preenchida.
- Depois de aprovado, o jovem vai para `JovemInicio.dc.html` (Início · jovem).
