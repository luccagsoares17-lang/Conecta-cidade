# Trilha · visitante — `TrilhaVisitante.dc.html`

| Campo | Valor |
| --- | --- |
| App | Conecta Cidade (morador) |
| Página do canvas | `morador` |
| Nome na lista "Telas da versão 1" dos requisitos | Não está na lista da V1 |
| Versão | Fase 2 ("Trilhas com agenda" está só na coluna Fase 2 da tabela de escopo dos requisitos) |
| Perfil que vê | Visitante (perfil que não existe entre os perfis da V1) |
| Protótipo | [`design/prototipo/TrilhaVisitante.dc.html`](../../../design/prototipo/TrilhaVisitante.dc.html) |
| Tamanho | 390×844 |

## Para que serve
Versão para quem vem de fora do Núcleo da tela de trilhas da Floresta Nacional de Carajás: mostra as trilhas, se cada uma precisa de condutor e como emitir a autorização de visitação. Chega-se a ela pela tela "Acabei de chegar", no bloco "Não moro em Carajás". Nos requisitos, a área aparece só como "Trilhas com agenda" (Fase 2).

## Conteúdo da tela (de cima para baixo)
O markup é o mesmo de [`Trilhas.md`](Trilhas.md), com estas diferenças:

1. **Título da página HTML**: "Conecta Cidade – Trilhas para visitantes".
2. **Cabeçalho**: botão de voltar (`aria-label="Voltar"`) leva a `Chegada.dc.html`; título "Trilhas", subtítulo "Floresta Nacional de Carajás" e uma etiqueta "Visitante". Não há barra de navegação inferior.
3. **Card de autorização** (no lugar de "Precisa de autorização?"): título "Você vem de fora do Núcleo" e o texto "Para entrar na Floresta Nacional de Carajás, emita a autorização de visitação no site do ICMBio Carajás antes de vir. Na portaria (PA-275), leve documento com foto e CPF." ("autorização de visitação" em destaque). Link "Emitir autorização no site do ICMBio" (`https://flonacarajas.com.br`, nova aba).

O restante é igual ao da tela do gestor:
- Alerta "Nunca faça trilha sozinho" — "Com ou sem guia, vá sempre com outras pessoas. Se você se machucar sozinho, ninguém consegue ajudar." (sem a frase extra da tela do jovem).
- Link "Procure seu guia aqui" — "Lista de condutores credenciados".
- Card "Ranking · Top 10 guias" — "Condutores credenciados mais bem avaliados", com "Ver o top 10 completo" / "Mostrar só o top 3".
- Chips "Todas", "Sem guia", "Com condutor", "Acessível".
- Lista das 8 trilhas com etiquetas "Guia obrigatório"/"Sem guia" e "Acessível".
- Rodapé "Imagens ilustrativas. Informações do ICMBio Carajás e de condutores da região: confirme no site antes de ir."
- Detalhe da trilha com os mesmos blocos (ver [`Trilhas.md`](Trilhas.md)) e o link "Emergência em Carajás · SECOM 0800-2850-193".

## Comportamento (script `Component`)
O script é o de `Trilhas.dc.html` com `VIS = true`. Isso muda só dois textos das trilhas sem guia no detalhe:
- "Como chegar:" → "Depois de emitir a autorização, entre pela portaria da Flona (PA-275) e siga até o começo da trilha." (exceto na Trilha Uxi, que mantém "Fica no Núcleo, ao lado da rodoviária.").
- "Autorização:" → "Quem vem de fora do Núcleo precisa emitir a autorização de visitação no site do ICMBio Carajás."

Nas trilhas com condutor, os textos continuam: "O condutor leva o grupo a partir da portaria da Floresta Nacional de Carajás (PA-275)." e "O condutor credenciado emite a autorização do grupo.".

Estado inicial `{ f: 'Todas', open: null }`; mesmas 8 trilhas, mesmo filtro, mesmo detalhe e mesmo ranking de 10 condutores. A tela não tem formulário: nenhum dado do visitante é pedido ou guardado.

## Navegação
| Elemento | Leva para |
| --- | --- |
| Botão voltar do cabeçalho | `Chegada.dc.html` |
| "Emitir autorização no site do ICMBio" | `https://flonacarajas.com.br` (externo, nova aba) |
| "Procure seu guia aqui" (na lista e no detalhe) | `https://drive.google.com/file/d/1tNRop_3W4fDJzq-ckRKBHGW1cOMyKvZk/view` (externo, nova aba) |
| "Emergência em Carajás · SECOM 0800-2850-193" | `tel:08002850193` |

Telas que apontam para esta: `Chegada.dc.html` (card "Trilha com um grupo do Núcleo" — "Visitantes entram nas trilhas junto com um grupo e um morador responsável.").

## Dados mostrados → registros do sistema
| Dado na tela | Registro da V1 | Observação |
| --- | --- | --- |
| Trilhas (nome, distância, nível, tipo, acessível, uso, descrição, como chegar, autorização) | **Sem registro** | |
| Condutores do ranking, nota e número de avaliações | **Sem registro** | |
| Lista de condutores (arquivo externo) e site do ICMBio | **Sem registro** | Dados de fora do grupo |
| Visitante | **Sem registro** | Pessoa só tem os perfis gestor, adulto e jovem |
| CPF | Não é coletado nesta tela | Aparece só como orientação: "leve documento com foto e CPF" na portaria |
| Agenda de trilhas, grupo e morador responsável | **Não aparecem na tela** | |

## Regras dos documentos que se aplicam
- "Conecta Cidade: requisitos da versão 1", "Objetivo e escopo": "Trilhas com agenda" é Fase 2.
- Requisitos, "Telas da versão 1", linha "Acabei de chegar": "Escolhe entre criar conta, ver o Guia ou, para quem mora fora, ver a carona"; "A carona para visitantes fica desativada na versão 1".
- Requisitos, "Perfis e permissões": os perfis do app do morador são gestor da casa, adulto da casa e jovem.
- Requisitos, "Requisitos gerais" (LGPD): "dados de visitantes (CPF) não entram na versão 1".
- Requisitos, "Telas da versão 1" (Guia do morador): SECOM 0800-2850-193.

## Divergências entre protótipo e documentos
1. **Perfil visitante**: os requisitos não têm perfil de visitante; o protótipo tem uma tela com a etiqueta "Visitante".
2. **"Acabei de chegar" não prevê trilha para visitante**: a linha da tela nos requisitos lista criar conta, Guia e carona; o card "Trilha com um grupo do Núcleo" em `Chegada.dc.html` não aparece nos requisitos.
3. **Promessa da tela de origem x conteúdo desta tela**: `Chegada.dc.html` diz "Visitantes entram nas trilhas junto com um grupo e um morador responsável", mas esta tela não mostra grupos, morador responsável nem agenda; ela orienta o visitante a emitir a autorização no site do ICMBio e a entrar pela portaria da Flona (trilhas sem guia) ou a ir com um condutor credenciado.
4. **Onde se faz a autorização**: esta tela diz "emita a autorização de visitação no site do ICMBio Carajás antes de vir"; `Chegada.dc.html` diz "Visitantes precisam de autorização na portaria de acesso da Floresta Nacional de Carajás, na PA-275"; `CaronaVisitante.dc.html` diz "A autorização de visitante é feita na portaria de acesso, das 8h às 16h, todos os dias". Os documentos-fonte não tratam do assunto.
5. **Sem agenda**: a área da Fase 2 é "Trilhas com agenda", mas a tela não tem agenda.
6. **Ranking de condutores com avaliações e regras de acesso às trilhas**: não estão nos documentos-fonte (mesma divergência de [`Trilhas.md`](Trilhas.md)).
7. **Dados sem registro na V1**: trilhas, condutores, avaliações e o próprio visitante. O CPF só aparece como orientação, sem campo.

## Notas para implementação
- Tela inteira de Fase 2; na V1, o card "Trilha com um grupo do Núcleo" de `Chegada.dc.html` aponta para uma área fora do escopo e fora da lista da tela "Acabei de chegar" (decisão a registrar na ficha dessa tela).
- Esta tela não pede nenhum dado pessoal; a menção a CPF é só uma orientação sobre o que levar à portaria.
- Mesmo script de `Trilhas.dc.html` e `JovemTrilhas.dc.html`, com `VIS = true`; dados de exemplo fixos no script.
- "Imagens ilustrativas" e "Imagem ilustrativa" são só do protótipo.
