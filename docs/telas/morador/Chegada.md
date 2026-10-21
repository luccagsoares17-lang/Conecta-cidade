# Acabei de chegar — `Chegada.dc.html`

| Campo | Valor |
| --- | --- |
| App | Conecta Cidade (morador) |
| Página do canvas | `morador` ("Conecta Cidade") |
| Nome na lista "Telas da versão 1" dos requisitos | Acabei de chegar |
| Versão | V1 com partes ocultas até a Fase 2 (os requisitos dizem que "A carona para visitantes fica desativada na versão 1"; o card de trilha para visitantes não aparece na lista da V1 — ver Divergências) |
| Perfil que vê | Quem ainda não tem conta: família recém-transferida e Visitante (quem "não mora em Carajás") |
| Protótipo | [`design/prototipo/Chegada.dc.html`](../../../design/prototipo/Chegada.dc.html) |
| Tamanho | 390×844 (raio 40, interativo) |

## Para que serve
Tela aberta pelo botão "Acabei de chegar no Núcleo" da Abertura. Nos requisitos: "Escolhe entre criar conta, ver o Guia ou, para quem mora fora, ver a carona". O documento *Conecta Cidade: o aplicativo do Núcleo de Carajás* descreve o "Guia 'Acabei de chegar', com o básico da vida em Carajás e contatos de boas-vindas".

## Conteúdo da tela (de cima para baixo)
Fundo `#F4F6F1`, texto `#13241B`, fonte DM Sans. O conteúdo rola na vertical (`overflow-y: auto`).

1. **Cabeçalho:** botão redondo branco de 44 px com seta para a esquerda (`aria-label` "Voltar para a abertura") e o nome "Conecta Cidade" (Bricolage Grotesque, 800, 20 px).
2. **Título:** "Bem-vindo ao Núcleo!" (Bricolage Grotesque, 800, 30 px).
3. **Subtítulo:** "Conta pra gente como você chegou, que a gente mostra o caminho." (15 px, `#4F5E55`).
4. **Rótulo de seção** "Vou morar em Carajás" (13 px, 700, caixa alta, `#4F5E55`).
5. **Card verde** (fundo `#1E5B40`, texto branco), com ícone de casa com "+" num quadrado branco translúcido (`rgba(255,255,255,0.14)`):
   - Título "Criar conta da família"
   - Texto "Para quem foi transferido. Você recebe o código da família." (`#CFE3D7`)
   - Seta para a direita.
6. **Card branco** com ícone de mapa dobrado azul (`#24578C` sobre `#DFE9F5`):
   - Título "Guia de quem chegou"
   - Texto "Serviços, emergência e o básico da vida no Núcleo."
   - Seta para a direita.
7. **Rótulo de seção** "Não moro em Carajás".
8. **Card branco com borda roxa** (`#7A52B3`, 2 px), ícone de carro roxo (`#7A52B3`, rodas `#3A2560`) sobre `#ECE4F5`:
   - Título "Carona para o Núcleo"
   - Texto "Tem o app, mas mora fora? Encontre carona com moradores do Núcleo."
   - Seta para a direita.
9. **Card branco com borda verde-oliva** (`#3F6B1F`, 2 px), ícone de pessoa caminhando ao lado de um pinheiro (`#3F6B1F` sobre `#E3EEDC`):
   - Título "Trilha com um grupo do Núcleo"
   - Texto "Visitantes entram nas trilhas junto com um grupo e um morador responsável."
   - Seta para a direita.
10. **Nota de rodapé:** "Visitantes precisam de autorização na portaria de acesso da Floresta Nacional de Carajás, na PA-275." (12 px, `#4F5E55`).

Não há barra de navegação inferior.

## Comportamento (script `Component`)
- Sem `this.state` e sem props editáveis; `renderVals()` devolve `{}`.
- Todos os cards são links simples (`<a href>`), sem lógica.
- `$preview`: 390×844.

## Navegação
| Elemento | Leva para |
| --- | --- |
| Botão voltar (seta) | `Splash.dc.html` |
| Card "Criar conta da família" | `CadastroGestor.dc.html` |
| Card "Guia de quem chegou" | `Guia.dc.html` (board "Guia do morador · gestor") |
| Card "Carona para o Núcleo" | `CaronaVisitante.dc.html` (board "Carona · visitante") |
| Card "Trilha com um grupo do Núcleo" | `TrilhaVisitante.dc.html` (board "Trilha · visitante") |

Telas do protótipo que levam para esta: `Splash.dc.html`, `CaronaVisitante.dc.html` e `TrilhaVisitante.dc.html`.

## Dados mostrados → registros do sistema
Nenhum dado de registro aparece; todos os textos são fixos.

| Informação na tela | Registro |
| --- | --- |
| "Você recebe o código da família" (só citado) | Casa → código da família (gerado no cadastro, não mostrado aqui) |
| Carona para visitantes | Sem registro na lista dos 8 tipos (Carona é Fase 2) |
| Trilha para visitantes | Sem registro na lista dos 8 tipos (Trilhas é Fase 2) |

## Regras dos documentos que se aplicam
- *Conecta Cidade: requisitos da versão 1*, "Telas da versão 1", linha **Acabei de chegar**: "Escolhe entre criar conta, ver o Guia ou, para quem mora fora, ver a carona"; "A carona para visitantes fica desativada na versão 1".
- *Requisitos da versão 1*, "Objetivo e escopo" (tabela de áreas): "Carona (moradores e visitantes)" e "Trilhas com agenda" são **Fase 2**; "Guia do morador e SECOM 0800-2850-193" é **V1**.
- *Requisitos da versão 1*, "Requisitos gerais" → **LGPD**: "dados de visitantes (CPF) não entram na versão 1".
- *Requisitos da versão 1*, "Perfis e permissões": o **Gestor da casa** "Cria a conta com rua e número da casa" e "cria o código da família".
- *Conecta Cidade: o aplicativo do Núcleo de Carajás*, "Informações da cidade": "Guia 'Acabei de chegar', com o básico da vida em Carajás e contatos de boas-vindas".

## Divergências entre protótipo e documentos
1. **Carona ativa:** o card "Carona para o Núcleo" é um link funcionando para `CaronaVisitante.dc.html`; os requisitos dizem que "A carona para visitantes fica desativada na versão 1".
2. **Card de trilha não previsto:** o card "Trilha com um grupo do Núcleo" (para visitantes) não está na descrição da tela na lista da V1 (que cita só criar conta, Guia e carona), e Trilhas é área da Fase 2.
3. **Nota sobre a portaria da PA-275:** o texto "Visitantes precisam de autorização na portaria de acesso da Floresta Nacional de Carajás, na PA-275." não aparece em nenhum documento-fonte.
4. **"Criar conta da família" vai direto ao cadastro de gestor:** o card abre `CadastroGestor.dc.html` (que também serve ao adulto que tem código), sem passar pelo Login; os documentos não dizem para qual cadastro este botão leva. O texto "Para quem foi transferido" também não está nos documentos.
5. **Guia aberto sem conta:** o card do Guia leva ao board "Guia do morador · gestor" (`Guia.dc.html`), que é a versão do gestor; os documentos não dizem qual versão do Guia quem ainda não tem conta vê.

## Notas para implementação
- Os requisitos pedem a carona para visitantes desativada na V1; como mostrar isso (card escondido ou desabilitado) não está definido nos documentos.
- O card de trilha para visitantes depende de uma decisão de escopo (ver Divergência 2); não está na lista da V1.
- O rótulo "Guia de quem chegou" corresponde ao "Guia 'Acabei de chegar'" do documento de visão do app.
- O botão voltar aponta sempre para a Abertura (`Splash.dc.html`).
