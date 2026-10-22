# Entrada do organizador — `AdminEntrada.dc.html`

| Campo | Valor |
| --- | --- |
| App | Meu Carajás Organizadores |
| Página do canvas | `organizador` |
| Nome na lista "Telas da versão 1" dos requisitos | Entrada |
| Versão | V1 |
| Perfil que vê | Administração do Núcleo / Organizador de eventos / Comitê Jovem (antes de entrar; a tela é a mesma para os três) |
| Protótipo | [`design/prototipo/AdminEntrada.dc.html`](../../../design/prototipo/AdminEntrada.dc.html) |
| Tamanho | 390×844 |

## Para que serve
Porta de entrada do app Meu Carajás Organizadores. Pede "E-mail e código de acesso do convite"; a regra principal dos requisitos é "Sem convite, não entra".

## Conteúdo da tela (de cima para baixo)
Fundo verde-escuro (`#13241B`), sem barra de navegação inferior.

1. **Bloco da marca (centralizado)**
   - Ícone do app num quadrado arredondado verde: a flor de Carajás rosa desde 22/10/2026 (A-20); antes, um alfinete de mapa branco com três pontos ligados, um deles laranja.
   - Título "Meu Carajás Super App".
   - Selo amarelo "Organizadores".
   - Texto: "Onde a administração, a equipe de energia e os grupos da cidade publicam as informações do Núcleo."
2. **Formulário**
   - Campo "E-mail" — `input type="email"`, `id="email"`, placeholder "voce@exemplo.com".
   - Campo "Código de acesso" — `input type="password"`, `id="codigo"`, placeholder "Enviado pela administração".
   - Botão principal (link) "Entrar no painel".
   - Link secundário "Sou morador · abrir o app do morador".

## Comportamento (script `Component`)
- `this.state = {}` — a tela não tem estado.
- `renderVals()` devolve `{}`; o método `chips()` existe no script mas não é usado nesta tela.
- Os campos não têm `onInput` nem validação. "Entrar no painel" é um link direto para o Painel, qualquer que seja o conteúdo dos campos (ou vazio).
- Não há mensagens de erro (conta inexistente, código inválido, código já usado).

## Navegação
| Elemento | Leva para |
| --- | --- |
| Botão "Entrar no painel" | `AdminInicio.dc.html` (Painel) |
| Link "Sou morador · abrir o app do morador" | `Splash.dc.html` (Abertura do app do morador) |

## Dados mostrados → registros do sistema
| Campo na tela | Registro |
| --- | --- |
| E-mail | Organizador → e-mail |
| Código de acesso | Organizador → código de convite |

Nenhum dado de exemplo é mostrado.

## Regras dos documentos que se aplicam
- **Requisitos da V1 · Telas da versão 1 (Meu Carajás Organizadores) · Entrada:** "E-mail e código de acesso do convite"; "Sem convite, não entra".
- **Requisitos da V1 · Perfis e permissões:** Administração do Núcleo, Organizador de eventos e Comitê Jovem Entre Fases entram por "Convite com código de acesso".
- **Requisitos da V1 · Requisitos gerais · Segurança:** "código de acesso de organizador vale uma vez".
- **Requisitos da V1 · Requisitos gerais · Acessibilidade:** botões de pelo menos 44 px (o botão tem 54 px e o link secundário 44 px de altura).
- **Requisitos da V1 · Dados que o sistema guarda · Organizador:** Nome, e-mail, grupo, áreas que pode publicar, código de convite.

## Divergências entre protótipo e documentos
- **Fase 2 no texto da tela:** a frase de apresentação cita "a equipe de energia". Energia é Fase 2 nos requisitos (tabela de escopo: "Energia e mapa por quarteirão" → Fase 2), e "equipe de energia" não é um dos três perfis de organizador da V1 (Administração do Núcleo, Organizador de eventos, Comitê Jovem Entre Fases).
- **Regra "Sem convite, não entra" não aparece no protótipo:** não há validação nem mensagem; o botão leva ao Painel sempre.
- **Código de uso único:** o requisito de segurança diz que o código vale uma vez; a tela não mostra o que acontece num segundo uso (nenhuma mensagem ou estado).
- **Link para o app do morador:** "Sou morador · abrir o app do morador" não está descrito nos requisitos (a linha da tela Entrada fala só de e-mail e código). Os requisitos dizem que são "dois apps sobre o mesmo banco de dados"; o link entre eles é um acréscimo do protótipo.

## Notas para implementação
- A frase "Onde a administração, a equipe de energia e os grupos da cidade publicam…" cita a equipe de energia, que é Fase 2. O texto da V1 precisa ser decidido (ver Divergências).
- O campo de código usa `type="password"` (o texto fica oculto ao digitar).
- O comportamento de erro (sem convite, código inválido ou já usado) não está desenhado. Os requisitos exigem a recusa, mas não dão o texto das mensagens.
- O `<title>` do arquivo é "Meu Carajás Organizadores – Entrada".
