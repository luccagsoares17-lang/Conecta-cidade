# Inventário de telas do protótipo

Todas as telas do artefato [Conecta Cidade – Interface do App](https://claude.ai/artifact/PkQ9tajBdYdt6vXEFn7tX9), copiadas sem alteração em [`design/prototipo/`](../../design/prototipo/). Cada linha tem uma ficha com conteúdo, comportamento, navegação, dados, regras e divergências.

**Totais**: 38 arquivos `.dc.html` = 21 arquivos que cobrem as 19 telas da V1 (Eventos, Avisos e Guia têm versão gestor e versão jovem; a Coleta seletiva fica dentro do Início · gestor) + 2 telas extras sem versão definida + 13 telas de Fase 2 + 2 boards de identidade. O canvas abre em `Splash.dc.html`.

Legenda de versão: **V1** · **V1\*** = V1 com partes de Fase 2 que ficam ocultas · **F2** = Fase 2 · **?** = não definida nos documentos.

## Conecta Cidade (morador)

### Telas da V1

| Tela nos requisitos | Board no protótipo | Arquivo | Versão | Perfil | Ficha |
| --- | --- | --- | --- | --- | --- |
| Abertura | Abertura do app | `Splash.dc.html` | V1 | Todos | [Splash](morador/Splash.md) |
| Acabei de chegar | Acabei de chegar | `Chegada.dc.html` | V1\* | Quem chega / visitante | [Chegada](morador/Chegada.md) |
| Entrar | Entrar · gestor ou jovem | `Login.dc.html` | V1 | Gestor, adulto, jovem | [Login](morador/Login.md) |
| Criar conta · adulto e gestor | Criar conta · adulto e gestor | `CadastroGestor.dc.html` | V1 | Gestor, adulto | [CadastroGestor](morador/CadastroGestor.md) |
| Criar conta · jovem | Criar conta · jovem | `CadastroJovem.dc.html` | V1 | Jovem | [CadastroJovem](morador/CadastroJovem.md) |
| Início · gestor | Início · gestor da casa | `Main.dc.html` | V1\* | Gestor, adulto | [Main](morador/Main.md) |
| Início · jovem | Início · morador jovem | `JovemInicio.dc.html` | V1\* | Jovem | [JovemInicio](morador/JovemInicio.md) |
| Minha casa | Minha casa · gestor | `GestorFamilia.dc.html` | V1\* | Gestor | [GestorFamilia](morador/GestorFamilia.md) |
| Eventos | Eventos · gestor | `Eventos.dc.html` | V1 | Gestor, adulto | [Eventos](morador/Eventos.md) |
| Eventos | Eventos · jovem | `JovemEventos.dc.html` | V1 | Jovem | [JovemEventos](morador/JovemEventos.md) |
| Desapego | Desapego · gestor | `Desapego.dc.html` | V1 | Gestor, adulto (jovem se liberado) | [Desapego](morador/Desapego.md) |
| Avisos | Avisos · gestor | `Avisos.dc.html` | V1\* | Gestor, adulto | [Avisos](morador/Avisos.md) |
| Avisos | Avisos · jovem | `JovemAvisos.dc.html` | V1\* | Jovem (sem urgentes) | [JovemAvisos](morador/JovemAvisos.md) |
| Guia do morador | Guia do morador · gestor | `Guia.dc.html` | V1 | Gestor, adulto | [Guia](morador/Guia.md) |
| Guia do morador | Oportunidades · jovem | `JovemGuia.dc.html` | V1 | Jovem | [JovemGuia](morador/JovemGuia.md) |
| Coleta seletiva | *Sem board próprio*: é o card "Coleta seletiva" dentro do Início · gestor | `Main.dc.html` | V1 | Gestor, adulto | [Main](morador/Main.md) |

### Telas extras (não estão na lista da V1)

| Board | Arquivo | Versão | Observação | Ficha |
| --- | --- | --- | --- | --- |
| Família · jovem | `JovemFamilia.dc.html` | ? (proposta: V1\*) | Lado do jovem do pedido de liberação; mostra endereço e código da família, que o modelo de dados restringe a gestores | [JovemFamilia](morador/JovemFamilia.md) |
| *(sem board — "Minha família")* | `GestorMinhaFamilia.dc.html` | ? | Fora do `canvas.json`; nenhuma tela aponta para ela; faz par com `JovemFamilia` | [GestorMinhaFamilia](morador/GestorMinhaFamilia.md) |

### Fase 2

| Board | Arquivo | Área da Fase 2 | Ficha |
| --- | --- | --- | --- |
| Energia · gestor | `Energia.dc.html` | Energia e mapa por quarteirão | [Energia](morador/Energia.md) |
| Trilhas · gestor | `Trilhas.dc.html` | Trilhas com agenda | [Trilhas](morador/Trilhas.md) |
| Trilhas · jovem | `JovemTrilhas.dc.html` | Trilhas com agenda | [JovemTrilhas](morador/JovemTrilhas.md) |
| Trilha · visitante | `TrilhaVisitante.dc.html` | Trilhas com agenda | [TrilhaVisitante](morador/TrilhaVisitante.md) |
| Carona · gestor | `Carona.dc.html` | Carona (moradores) | [Carona](morador/Carona.md) |
| Carona · visitante | `CaronaVisitante.dc.html` | Carona (visitantes) — pede CPF, proibido na V1 | [CaronaVisitante](morador/CaronaVisitante.md) |

## Conecta Cidade Organizadores

### Telas da V1

| Tela nos requisitos | Board no protótipo | Arquivo | Versão | Ficha |
| --- | --- | --- | --- | --- |
| Entrada | Entrada do organizador | `AdminEntrada.dc.html` | V1 | [AdminEntrada](organizador/AdminEntrada.md) |
| Painel | Painel | `AdminInicio.dc.html` | V1\* | [AdminInicio](organizador/AdminInicio.md) |
| Publicar | Publicar | `AdminPublicar.dc.html` | V1\* | [AdminPublicar](organizador/AdminPublicar.md) |
| Alcance do aviso | Alcance do aviso | `AdminAlcance.dc.html` | V1\* | [AdminAlcance](organizador/AdminAlcance.md) |
| Aprovações | Aprovações | `AdminAprovar.dc.html` | V1 | [AdminAprovar](organizador/AdminAprovar.md) |
| Equipes e permissões | Equipe e permissões | `AdminEquipe.dc.html` | V1\* | [AdminEquipe](organizador/AdminEquipe.md) |

A tabela de dias da **coleta seletiva** (V1) é editada no Painel (`AdminInicio`), bloco "Coleta seletiva — O que os moradores veem no app", botão "Editar cronograma".

### Fase 2

| Board | Arquivo | Área da Fase 2 | Ficha |
| --- | --- | --- | --- |
| Energia (controle) | `AdminEnergia.dc.html` | Energia, mapa por quarteirão, mandar equipes | [AdminEnergia](organizador/AdminEnergia.md) |
| Coleta seletiva | `AdminColeta.dc.html` | Rota do caminhão no mapa (não tem a tabela de dias) | [AdminColeta](organizador/AdminColeta.md) |
| Casas e manutenção | `AdminCasas.dc.html` | Casas e manutenção | [AdminCasas](organizador/AdminCasas.md) |
| Trilhas | `AdminTrilhas.dc.html` | Trilhas com agenda | [AdminTrilhas](organizador/AdminTrilhas.md) |
| Representantes de rua | `AdminRepresentantes.dc.html` | Representantes de rua | [AdminRepresentantes](organizador/AdminRepresentantes.md) |
| Depois do evento | `AdminPosEvento.dc.html` | Pós-evento | [AdminPosEvento](organizador/AdminPosEvento.md) |
| Impacto | `AdminImpacto.dc.html` | Tela de impacto | [AdminImpacto](organizador/AdminImpacto.md) |

## Identidade visual

| Board | Arquivo | Ficha |
| --- | --- | --- |
| Logo e identidade | `Logo.dc.html` (1240×620) | [Logo](identidade/Logo.md) |
| Ícones dos dois apps | `Icones.dc.html` (600×620) | [Icones](identidade/Icones.md) |

Resumo em [`docs/design/identidade-visual.md`](../design/identidade-visual.md).

## Elementos de Fase 2 dentro de telas da V1 (ficam ocultos na V1)

| Tela V1 | Elemento |
| --- | --- |
| Início · gestor (`Main`) | Card de energia do topo (requisito explícito), card "Energia" em Serviços da casa, "Energia" na barra inferior, atalhos Trilhas e Carona |
| Início · jovem (`JovemInicio`) | Trilhas (liberada e na barra), card de Carona com "Pedir liberação" |
| Minha casa (`GestorFamilia`) | Permissões "Trilhas em grupo" e "Carona"; pedido de exemplo de Carona |
| Acabei de chegar (`Chegada`) | Card de carona para visitante (requisito: desativada na V1); card de trilha |
| Avisos (`Avisos`, `JovemAvisos`) | "Ver no mapa" (leva a Energia); "Lembrar na véspera" |
| Guia (`Guia`, `JovemGuia`) | Passo "Conheça o representante da sua rua" |
| Entrar (`Login`) | Dicas das abas citando energia e trilhas |
| Painel (`AdminInicio`) | "Energia" na barra, card "Moradores sem luz", ferramentas Representantes, Depois do evento, Rota da coleta, Casas, Trilhas, Impacto, agendado de Energia |
| Publicar (`AdminPublicar`) | Tipos Energia e Trilha; canal Representantes no Urgente |
| Alcance (`AdminAlcance`) | Canal "Representantes de rua"; botão "Pedir porta a porta" |
| Aprovações (`AdminAprovar`) | Dados de Motoristas no script (aba não exibida) |
| Equipes e permissões (`AdminEquipe`) | Aba "Equipes de campo"; grupo Equipe de energia; áreas Energia, Trilhas, Casas |
| Todas as telas do organizador | Item "Energia" na barra inferior |

## Ruas e quarteirões do protótipo

Iguais em `AdminEnergia`, `AdminColeta` e `AdminCasas`. Os requisitos dizem que as 18 ruas "já seguem a ordem real, de Acará a Tapajós" — **não ordenar por nome** (Iriri vem antes de Iguara).

| # | Rua | # | Rua | # | Rua |
| --- | --- | --- | --- | --- | --- |
| 1 | Acará | 7 | Guamá | 13 | Juruá |
| 2 | Amazonas | 8 | Iriri | 14 | Mearim |
| 3 | Araguaia | 9 | Iguara | 15 | Paru |
| 4 | Arapiuns | 10 | Itacaiúnas | 16 | Purus |
| 5 | Caeté | 11 | Japurá | 17 | Solimões |
| 6 | Grajaú | 12 | Jari | 18 | Tapajós |

- **Quarteirões**: 1, 2 e 3. Cada rua tem um trecho por quarteirão; a **Rua Tapajós** só passa pelos quarteirões 2 e 3 ("Não passa aqui" no 1) — 53 trechos no total.
- Outros nomes no mapa: Av. Karajás, Av. Catete, PA-275 (Rod. Raimundo Mascarenhas), Hospital Yutaka Takeda, Trilha Uxi, Doce Norte E.C., Escola, Hotel, Portaria.
- A divisão em quarteirões ainda precisa ser confirmada com a administração (pergunta em aberto dos requisitos).

## Observações gerais

- **Acessibilidade**: vários chips e botões secundários têm de 36 a 40 px; os requisitos pedem no mínimo 44 px. Cada ficha aponta onde.
- **Dados de exemplo**: nomes de pessoas, números de alcance, preços e eventos dentro de `renderVals()` são de demonstração.
- **Navegação**: os links `href` entre telas estão listados em cada ficha; `AdminInicio` (20 links de entrada) e `Main` (12) são os centros de navegação.
