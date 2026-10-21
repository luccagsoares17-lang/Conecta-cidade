# Criar conta · adulto e gestor — `CadastroGestor.dc.html`

| Campo | Valor |
| --- | --- |
| App | Conecta Cidade (morador) |
| Página do canvas | `morador` ("Conecta Cidade") |
| Nome na lista "Telas da versão 1" dos requisitos | Criar conta · adulto e gestor |
| Versão | V1 |
| Perfil que vê | Gestor da casa e Adulto (antes de ter conta) |
| Protótipo | [`design/prototipo/CadastroGestor.dc.html`](../../../design/prototipo/CadastroGestor.dc.html) |
| Tamanho | 390×844 (raio 40, interativo) |

## Para que serve
Cadastro de adultos da casa. Nos requisitos: "Foto, nome, nascimento, celular, e-mail, casa ou código, interesses e senha"; "Gestor informa rua e número; outro adulto informa o código; senha com mínimo de 8 caracteres; no fim mostra o código da família".

## Conteúdo da tela (de cima para baixo)
Fundo `#F4F6F1`, texto `#13241B`, DM Sans. O cabeçalho fica fixo; o formulário rola.

**Cabeçalho (fixo)**
- Botão redondo branco de 44 px com seta para a esquerda (`aria-label` "Voltar").
- "Criar conta" (Bricolage Grotesque, 800, 24 px) e, abaixo, "Para adultos da casa" (13 px, `#4F5E55`).
- Etiqueta "Adulto" (11 px, caixa alta, fundo `#DCEDE2`, texto `#17432F`).

**Formulário (enquanto a conta não foi criada)**
1. **Card WhatsApp** (borda `#1E5B40`): "Prefere pelo WhatsApp?" — "Mande um oi para (94) 99999-0100 e faça o cadastro pela conversa. O WhatsApp é usado só para isso." — botão "Abrir" (verde, sem ação ligada).
2. **Card "Você é"** — duas opções em pílula: "Sou o gestor da casa" e "Moro com um gestor" (selecionada: fundo `#13241B`, texto branco). Abaixo, uma dica que muda:
   - Gestor: "O gestor é o responsável pela casa: recebe os avisos importantes e libera o que os jovens podem usar."
   - Outro adulto: "Você vai precisar do código da família que o gestor da sua casa recebeu."
   - Só para "Moro com um gestor": caixa escura (`#13241B`) com o campo **"Código da família"** (rótulo `#FFD27A`; `input type="text"`, placeholder "Ex.: CKS-4821", fundo `#1C3327`, borda `#4F6B5C`, letras maiúsculas, 20 px, espaçamento 3 px) e uma mensagem embaixo.
3. **Passo 1 · "Sobre você"** (número em círculo `#13241B`):
   - Botão de foto (88 px, redondo; sem foto: borda tracejada `#9AA69F` e ícone de câmera; com foto: fundo `#1E5B40` e a inicial do nome em `#17432F`), com selo "+" escuro. Ao lado: "Foto de perfil" e a dica "Toque para tirar ou escolher uma foto" / "Foto adicionada. Toque para trocar."
   - **"Nome completo"** — `text`, placeholder "Como está no documento".
   - **"Data de nascimento"** — `text`, placeholder "dd/mm/aaaa"; ajuda: "Usamos para confirmar que você é maior de idade."
   - **"Celular"** — `tel`, placeholder "(94) 90000-0000"; ajuda: "Os comunicados e alertas do Núcleo chegam por SMS neste número."
   - **"E-mail"** — `email`, placeholder "voce@exemplo.com".
4. **Passo 2 · "Sua casa"**:
   - Gestor: **"Rua"** (`text`, placeholder "Ex.: Rua Japurá"), **"Número da casa"** (`text`, placeholder "Ex.: 12") e o texto "Ao terminar, você recebe o **código da família** para os jovens e adultos da casa entrarem."
   - Outro adulto: ícone de casa com visto e o resultado do código (título e texto — ver Comportamento).
5. **Passo 3 · "Seus interesses"** — dez pílulas de múltipla escolha: "Cinema", "Culinária", "Videogame", "Vôlei", "Futebol", "Trilhas", "Música", "Leitura", "Dança", "Voluntariado" (selecionada: fundo `#1E5B40`). Abaixo: "Escolha pelo menos um" ou "{n} escolhidos · a agenda mostra primeiro o que combina com você".
6. **Passo 4 · "Segurança"**:
   - **"Criar senha"** — placeholder "Mínimo de 8 caracteres", botão de olho ("Mostrar ou esconder a senha"), barra de força em 3 partes e um rótulo.
   - **"Repetir senha"** — placeholder "Digite de novo", com rótulo de conferência.
7. Texto: "Seus dados só aparecem para a sua família e para a administração do Núcleo." (12 px).
8. Linha "Falta: …" (13 px, 700, `#8E3714`).
9. Botão **"Criar conta"** (56 px): verde `#1E5B40` com texto branco quando tudo está certo; cinza `#C9D2CB` com texto `#4F5E55` quando falta algo.

**Tela final — gestor** ("Sou o gestor da casa")
- "Conta criada, {primeiro nome}!"
- "Você é o gestor da casa. Passe este código para os jovens e adultos da sua família criarem a conta deles."
- Caixa escura `#13241B`: "Código da família" (`#FFD27A`), **"CKS-4821"** (Bricolage Grotesque, 800, 44 px) e "Fica salvo em Minha casa" (`#CFE3D7`).
- Dois botões: "Copiar código" (vira "Copiado ✓") e "Enviar no WhatsApp" (fundo `#24578C`, sem ação ligada).
- Botão-link "Entrar no app".

**Tela final — outro adulto** ("Moro com um gestor")
- "Conta criada, {primeiro nome}!"
- "Você entrou na família Rua Japurá, 12. O gestor da casa recebeu um aviso de que você chegou."
- Botão-link "Entrar no app".

Não há barra de navegação inferior.

## Comportamento (script `Component`)
**Estado inicial:** `{ role: 'Sou o gestor da casa', name: '', code: '', ints: [], pass: '', pass2: '', show: false, photo: false, done: false, copied: false }`.

- **Perfil:** começa em "Sou o gestor da casa". Trocar para "Moro com um gestor" mostra o campo de código no card "Você é" e troca o passo 2 pelo resultado do código.
- **Foto:** o botão só alterna `photo` entre ligado e desligado (no protótipo não abre câmera nem galeria); a foto é simulada pela inicial do nome (ou "?").
- **Código da família:** válido se casar com `^[A-Z]{3}-?[0-9]{4}$` (o hífen é opcional; o texto é posto em maiúsculas antes do teste).
  - Vazio: "Peça o código para o gestor da sua casa" (`#CFE3D7`); passo 2: "Falta o código da família" — "Coloque o código lá em cima para entrar na mesma casa do gestor."
  - Válido: "✓ Família encontrada: Rua Japurá, 12" (`#FFD27A`); passo 2: "Casa da Rua Japurá, 12" — "Gestor: Lucca Ribeiro. Você entra na mesma casa e recebe os avisos dela." (ícone `#1E5B40` sobre `#DCEDE2`).
  - Inválido: "O código tem 3 letras e 4 números" (`#FBDCD6`).
- **Força da senha** (barra com cores `#E2E7E0` vazia, `#B4471C`, `#D4A017`, `#1E5B40`):
  - nível 0 (menos de 8 caracteres): "Use 8 caracteres ou mais" (`#4F5E55`);
  - nível 1 (8 ou mais): "Senha fraca: coloque números" (`#8E3714`);
  - nível 2 (8 ou mais e com número): "Senha boa" (`#6B4D05`);
  - nível 3 (10 ou mais, com número e letra maiúscula): "Senha forte" (`#17432F`).
- **Conferência:** "✓ As senhas são iguais" (`#17432F`) ou "As senhas não são iguais" (`#9B1C10`); vazio enquanto "Repetir senha" estiver em branco.
- **O que é obrigatório** (lista "Falta: …", na ordem): "nome"; "código da família" (só para "Moro com um gestor"); "um interesse"; "senha" (menos de 8 caracteres ou senhas diferentes). Data de nascimento, celular, e-mail, rua, número e foto **não** são conferidos pelo script.
- **"Criar conta":** só age quando não falta nada; aí marca `done: true` e mostra a tela final do perfil escolhido.
- **"Copiar código":** marca `copied: true` e o rótulo vira "Copiado ✓".
- O valor `codeFg` é calculado mas não é usado no markup (o campo usa `codeFgDark`).

## Navegação
| Elemento | Leva para |
| --- | --- |
| Botão voltar | `Login.dc.html` |
| "Entrar no app" (tela final do gestor) | `Main.dc.html` |
| "Entrar no app" (tela final do outro adulto) | `Main.dc.html` |

Telas do protótipo que levam para esta: `Login.dc.html` (aba gestor) e `Chegada.dc.html` ("Criar conta da família").

## Dados mostrados → registros do sistema
| Campo na tela | Registro |
| --- | --- |
| Foto de perfil | Pessoa → foto |
| Nome completo | Pessoa → nome |
| Data de nascimento | Pessoa → data de nascimento ou idade |
| Celular | Pessoa → celular |
| E-mail | Pessoa → e-mail |
| "Sou o gestor da casa" / "Moro com um gestor" | Pessoa → perfil (gestor, adulto) |
| Rua, Número da casa | Casa → rua, número |
| Código da família (digitado pelo adulto ou mostrado ao gestor) | Casa → código da família; Pessoa → casa |
| Interesses | Pessoa → interesses |
| Criar senha / Repetir senha | Pessoa → senha (guardada cifrada) |
| "Gestor: Lucca Ribeiro" | Pessoa → nome (do gestor da casa) |
| "O gestor da casa recebeu um aviso" | Sem registro correspondente (não é um Aviso oficial; os documentos não definem onde fica) |
| Casa → quarteirão e data de cadastro | Não aparecem na tela |

## Regras dos documentos que se aplicam
- *Conecta Cidade: requisitos da versão 1*, "Telas da versão 1", linha **Criar conta · adulto e gestor**: campos e regras citados em "Para que serve".
- *Requisitos da versão 1*, "Perfis e permissões": Gestor "Cria a conta com rua e número da casa", "recebe todos os avisos, inclusive urgentes", "cria o código da família"; Adulto "Usa o código da família" e "pode ser marcado como segundo gestor".
- *Requisitos da versão 1*, "Fluxos principais": "Adultos da casa seguem o mesmo caminho com o código, mas a conta ativa na hora e o gestor recebe um aviso."
- *Requisitos da versão 1*, "Dados que o sistema guarda" → **Casa**: "código da família (3 letras e 4 números, ex.: CKS-4821)"; "Os nomes das ruas e quarteirões ficam numa tabela própria". **Pessoa**: visível para "A própria pessoa, os gestores da casa e a administração".
- *Requisitos da versão 1*, "SMS e WhatsApp": SMS "vai para o celular do cadastro"; WhatsApp "Só cadastro" — "Conversa guiada que cria a conta e manda o código da família; nenhum aviso sai por ele".
- *Requisitos da versão 1*, "Requisitos gerais" → **LGPD**: "termo de uso e política de privacidade aceitos no cadastro"; "conta de menor de 18 anos só ativa com aprovação do gestor". **Segurança**: "senha cifrada".
- *Requisitos da versão 1*, "Piloto: aceite e métricas": "Um gestor cria a conta e recebe o código da família em menos de 3 minutos".
- *Eventos no Conecta Cidade*, "Interesses dos jovens": "A proposta é o app perguntar os interesses de cada morador no cadastro".

## Divergências entre protótipo e documentos
1. **Sem aceite de termo de uso e política de privacidade:** a LGPD nos requisitos exige o aceite no cadastro; a tela não tem esse passo.
2. **Rua e número não são obrigatórios no protótipo:** os requisitos dizem "Gestor informa rua e número", mas o script não confere esses campos (nem data de nascimento, celular e e-mail).
3. **Rua em texto livre:** o campo "Rua" é texto livre (placeholder "Ex.: Rua Japurá"), enquanto os requisitos dizem que os nomes das ruas ficam numa tabela própria (18 ruas). O quarteirão do registro Casa não é pedido nem mostrado.
4. **Maioridade não conferida:** a ajuda diz "Usamos para confirmar que você é maior de idade", mas o script não confere a data; os documentos não dizem o que acontece se um menor usar este cadastro.
5. **Avisos do gestor:** a dica diz que o gestor "recebe os avisos importantes"; os requisitos dizem que ele "recebe todos os avisos, inclusive urgentes".
6. **Quem vê os dados:** o texto "Seus dados só aparecem para a sua família e para a administração do Núcleo" é mais amplo que o registro Pessoa ("A própria pessoa, os gestores da casa e a administração").
7. **"Enviar no WhatsApp" o código:** os requisitos usam o WhatsApp só para a conversa guiada de cadastro (que "manda o código da família"); compartilhar o código pelo WhatsApp a partir do app não está nos documentos.
8. **Número do WhatsApp:** "(94) 99999-0100" não aparece nos documentos; quem paga o número de WhatsApp do cadastro ainda é pergunta em aberto.
9. **Lista de interesses:** os documentos citam cinema, culinária, videogame, vôlei e futebol (mapeamento dos jovens), mas não definem a lista do cadastro; "Trilhas", "Música", "Leitura", "Dança" e "Voluntariado" só estão no protótipo.
10. **Medidor de força da senha:** os requisitos pedem só "mínimo de 8 caracteres"; os níveis "fraca/boa/forte" são do protótipo.
11. **Segundo gestor:** os requisitos dizem que o adulto "pode ser marcado como segundo gestor"; esta tela não trata disso (quem entra por código sempre vira adulto da casa).

## Notas para implementação
- O código "CKS-4821", a casa "Rua Japurá, 12" e o gestor "Lucca Ribeiro" são dados de exemplo; no protótipo qualquer código no formato válido "encontra" essa casa.
- A foto é simulada (o botão só liga e desliga); na tela final do gestor, o código mostrado é sempre "CKS-4821", sem relação com a rua digitada.
- O botão "Abrir" do card WhatsApp e o botão "Enviar no WhatsApp" não têm ação no protótipo.
- O cabeçalho mostra "Para adultos da casa" e a etiqueta "Adulto" nos dois casos (gestor e outro adulto).
- Os dois finais levam ao Início do gestor (`Main.dc.html`).
- A conta do adulto ativa na hora; a do gestor também (não há espera de aprovação nesta tela).
