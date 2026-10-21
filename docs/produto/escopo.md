# Escopo: versão 1 × Fase 2

Fonte: requisitos da V1, seção "Objetivo e escopo" e "Fase 2 e perguntas em aberto".

## Objetivo da V1

Ligar as famílias do Núcleo Urbano de Carajás a uma **fonte única de avisos e eventos**, testada com os **49 jovens do Comitê Jovem e suas famílias**.

**Critério para entrar na V1**: não depender de dados ou equipes de fora do grupo para funcionar.

## Dois apps sobre o mesmo banco de dados

| App | Para quem |
| --- | --- |
| **Meu Carajás Super App** | Moradores (gestor da casa, adulto, jovem) |
| **Meu Carajás Organizadores** | Quem publica (Administração do Núcleo, organizadores de eventos, Comitê Jovem) |

## Tabela de escopo

| Área | Versão 1 | Fase 2 |
| --- | --- | --- |
| Cadastro, login e código da família | Sim | |
| Perfis gestor, adulto e jovem, com permissões | Sim | |
| Avisos oficiais, com envio por SMS | Sim | |
| Eventos com "Eu vou" | Sim | |
| Desapego (vender e doar) | Sim | |
| Guia do morador e SECOM 0800-2850-193 | Sim | |
| Coleta seletiva (dias de cada coleta) | Sim, só a tabela de dias | Rota do caminhão no mapa |
| Painel do organizador, publicar e equipe | Sim | |
| Alcance dos avisos | Sim | |
| Energia e mapa por quarteirão | | Sim |
| Casas e manutenção | | Sim |
| Trilhas com agenda | | Sim |
| Carona (moradores e visitantes) | | Sim |
| Representantes de rua, pós-evento e impacto | | Sim |

## Fase 2

Entra **depois do piloto**, porque depende de equipes e dados de fora do grupo: energia com o mapa por quarteirão e o botão de mandar equipes, rota da coleta, casas e manutenção, trilhas com agenda, carona para moradores e visitantes, representantes de rua, pós-evento e tela de impacto. **Todas já estão desenhadas no protótipo** e foram copiadas para `design/prototipo/` sem alteração.

## Regra prática para quem desenvolve

- Uma tela ou elemento de Fase 2 que aparece dentro de uma tela da V1 (ex.: card de energia no Início · gestor, item "Energia" na barra do organizador) **fica oculto na V1**, não é apagado do protótipo.
- Nada da coluna Fase 2 entra na V1 sem uma decisão registrada em [`docs/decisoes/`](../decisoes/).
