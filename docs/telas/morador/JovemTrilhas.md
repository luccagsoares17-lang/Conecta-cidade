# Trilhas · jovem — `JovemTrilhas.dc.html`

| Campo | Valor |
| --- | --- |
| App | Conecta Cidade (morador) |
| Página do canvas | `morador` |
| Nome na lista "Telas da versão 1" dos requisitos | Não está na lista da V1 |
| Versão | Fase 2 ("Trilhas com agenda" está só na coluna Fase 2 da tabela de escopo dos requisitos) |
| Perfil que vê | Jovem |
| Protótipo | [`design/prototipo/JovemTrilhas.dc.html`](../../../design/prototipo/JovemTrilhas.dc.html) |
| Tamanho | 390×844 |

## Para que serve
Versão para o jovem da tela de trilhas da Floresta Nacional de Carajás: mostra as trilhas, se cada uma precisa de condutor, como chegar, a autorização e um ranking de condutores, com o reforço de que o jovem vá com um adulto ou com o grupo do Comitê Jovem. Nos requisitos, a área aparece só como "Trilhas com agenda" (Fase 2).

## Conteúdo da tela (de cima para baixo)
O markup é o mesmo de [`Trilhas.md`](Trilhas.md), com estas diferenças:

1. **Título da página HTML**: "Conecta Cidade Jovem – Trilhas".
2. **Cabeçalho**: botão de voltar (`aria-label="Voltar"`) leva a `JovemInicio.dc.html`; título "Trilhas", subtítulo "Floresta Nacional de Carajás" e uma etiqueta "Jovem". Não há barra de navegação inferior.
3. **Alerta "Nunca faça trilha sozinho"** (no topo da lista e no detalhe): "Com ou sem guia, vá sempre com outras pessoas. Se você se machucar sozinho, ninguém consegue ajudar. Jovem: vá com um adulto ou com o grupo do Comitê Jovem."

O restante é igual ao da tela do gestor, de cima para baixo:
- Card "Precisa de autorização?" com "Mora no Núcleo: não precisa de autorização para as trilhas sem guia. É só ir de carro até o começo da trilha." e "Vem de Parauapebas ou de fora: precisa emitir a autorização de visitação no site do ICMBio Carajás.", e o link "Abrir o site do ICMBio Carajás".
- Link "Procure seu guia aqui" — "Lista de condutores credenciados".
- Card "Ranking · Top 10 guias" — "Condutores credenciados mais bem avaliados", com o botão "Ver o top 10 completo" / "Mostrar só o top 3".
- Chips "Todas", "Sem guia", "Com condutor", "Acessível".
- Lista das 8 trilhas, com etiquetas "Guia obrigatório"/"Sem guia" e "Acessível".
- Rodapé "Imagens ilustrativas. Informações do ICMBio Carajás e de condutores da região: confirme no site antes de ir."
- Detalhe da trilha com "Imagem ilustrativa", "Obrigatório ir com condutor" ou "Pode ir sem guia", "Distância", "Nível", "Tipo", "Para", "Sobre a trilha", "Como chegar:", "Autorização:", "O que levar", "Na trilha" e o link "Emergência em Carajás · SECOM 0800-2850-193".

## Comportamento (script `Component`)
O script é idêntico ao de `Trilhas.dc.html`:
- Estado inicial `{ f: 'Todas', open: null }`.
- `VIS = false`: os textos de "Como chegar" e "Autorização" são os do morador ("Vá de carro até o começo da trilha."; "Morador do Núcleo não precisa. Quem vem de Parauapebas ou de fora precisa emitir no site do ICMBio Carajás."; para trilhas com condutor, "O condutor leva o grupo a partir da portaria da Floresta Nacional de Carajás (PA-275)." e "O condutor credenciado emite a autorização do grupo.").
- Mesmas 8 trilhas de exemplo, mesmo filtro, mesmo detalhe e mesmo ranking de 10 condutores (ver a tabela e a lista em [`Trilhas.md`](Trilhas.md)).
- Nada no script depende do perfil jovem nem de permissão do gestor.

## Navegação
| Elemento | Leva para |
| --- | --- |
| Botão voltar do cabeçalho | `JovemInicio.dc.html` |
| "Abrir o site do ICMBio Carajás" | `https://flonacarajas.com.br` (externo, nova aba) |
| "Procure seu guia aqui" (na lista e no detalhe) | `https://drive.google.com/file/d/1tNRop_3W4fDJzq-ckRKBHGW1cOMyKvZk/view` (externo, nova aba) |
| "Emergência em Carajás · SECOM 0800-2850-193" | `tel:08002850193` |

Telas que apontam para esta: `JovemInicio.dc.html` (atalho "Trilhas · Só em grupo", entre as áreas liberadas, e item "Trilhas" da barra inferior) e `JovemFamilia.dc.html` (item "Trilhas" da barra inferior).

## Dados mostrados → registros do sistema
| Dado na tela | Registro da V1 | Observação |
| --- | --- | --- |
| Trilhas (nome, distância, nível, tipo, acessível, uso, descrição, como chegar, autorização) | **Sem registro** | |
| Condutores do ranking, nota e número de avaliações | **Sem registro** | |
| Lista de condutores (arquivo externo) e site do ICMBio | **Sem registro** | Dados de fora do grupo |
| Liberação de Trilhas para o jovem | **Sem registro** | Permissão do jovem só tem as áreas Eventos, Oportunidades e Desapego |
| Agenda de trilhas | **Não aparece na tela** | |

## Regras dos documentos que se aplicam
- "Conecta Cidade: requisitos da versão 1", "Objetivo e escopo": "Trilhas com agenda" é Fase 2.
- Requisitos, "Perfis e permissões": o jovem, na V1, usa "Eventos, Guia e oportunidades e avisos informativos e importantes; Desapego só se o gestor liberar"; "o gestor decide o que os jovens da casa podem usar".
- Requisitos, "Dados que o sistema guarda": Permissão do jovem = pessoa, área (Eventos, Oportunidades, Desapego), ligada ou desligada.
- Requisitos, "Requisitos gerais" (LGPD): proteger dados de menores.
- Requisitos, "Telas da versão 1" (Guia do morador): SECOM 0800-2850-193.
- "Eventos no Conecta Cidade", "Quem organiza os eventos": trilhas aparecem como exemplo de evento de moradores.

## Divergências entre protótipo e documentos
1. **Sem agenda**: a área da Fase 2 é "Trilhas com agenda", mas a tela não tem agenda.
2. **Trilhas não é área do jovem na V1 nem área controlada pelo gestor**: os requisitos não incluem Trilhas entre o que o jovem usa, e o registro Permissão do jovem não tem a área Trilhas. No protótipo, `JovemInicio.dc.html` mostra Trilhas entre as áreas liberadas e na barra inferior, sem depender do gestor.
3. **Recomendação "vá com um adulto ou com o grupo do Comitê Jovem"**: não aparece nos documentos-fonte.
4. **Textos de morador adulto mostrados ao jovem**: "É só ir de carro até o começo da trilha" e "Vá de carro até o começo da trilha." são os mesmos da tela do gestor (o script é igual).
5. **Ranking de condutores com avaliações e regras de acesso às trilhas**: não estão nos documentos-fonte (mesma divergência de [`Trilhas.md`](Trilhas.md)).
6. **Dados sem registro na V1**: trilhas, condutores, avaliações, liberação de Trilhas para o jovem.

## Notas para implementação
- Tela inteira de Fase 2; na V1, o atalho e o item "Trilhas" da barra inferior do jovem (`JovemInicio.dc.html`, `JovemFamilia.dc.html`) apontam para uma área fora do escopo (decisão a registrar nas fichas dessas telas).
- Se a tela entrar na Fase 2 como área que o gestor libera, o registro Permissão do jovem precisará de uma área a mais; os requisitos atuais não preveem isso.
- Mesmo script de `Trilhas.dc.html` e `TrilhaVisitante.dc.html`; os dados (trilhas, ranking, links) são de exemplo e estão fixos no script.
- "Imagens ilustrativas" e "Imagem ilustrativa" são só do protótipo.
