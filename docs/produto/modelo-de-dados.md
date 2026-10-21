# Modelo de dados (V1)

Fonte: requisitos da V1, seção "Dados que o sistema guarda".

São **8 tipos de registro**. Todos os dados pessoais ficam no mesmo banco, com **acesso por perfil**.

| Registro | Campos | Quem vê |
| --- | --- | --- |
| **Casa** | Rua, número, quarteirão, código da família, data de cadastro | Gestores da casa e administração |
| **Pessoa** | Nome, apelido, data de nascimento ou idade, celular, e-mail, foto, perfil (gestor, adulto, jovem), situação (ativa ou esperando aprovação), casa, interesses, senha (guardada cifrada) | A própria pessoa, os gestores da casa e a administração |
| **Permissão do jovem** | Pessoa, área (Eventos, Oportunidades, Desapego), ligada ou desligada | Gestores da casa |
| **Organizador** | Nome, e-mail, grupo, áreas que pode publicar, código de convite | Administração |
| **Aviso** | Tipo, público (todos, só gestores, só jovens), nível (urgente, importante, informativo), categoria, o quê, quando, onde, o que fazer, contato, ruas, canais, situação (rascunho, agendado, no ar, fora do ar), data de envio, quem publicou | Público escolhido; organizadores |
| **Entrega do aviso** | Aviso, casa, canal, enviado, visto | Organizadores (para a tela de Alcance) |
| **Evento** | Nome, organizador, data e hora, local, interesse, ingresso solidário, vagas, situação (esperando aprovação, publicado), confirmações | Todos os moradores |
| **Anúncio do Desapego** | Autor, foto, título, categoria, preço ou doação, descrição, selo de mudança, situação (ativo, vendido), conversas | Todos os moradores; **telefone do autor nunca aparece** |

## Formatos e valores fixos

| Campo | Regra |
| --- | --- |
| Código da família | 3 letras e 4 números, ex.: `CKS-4821` |
| Senha | Mínimo de 8 caracteres; guardada cifrada |
| Perfil | `gestor`, `adulto`, `jovem` |
| Situação da pessoa | `ativa`, `esperando aprovação` |
| Área da permissão do jovem | `Eventos`, `Oportunidades`, `Desapego` |
| Público do aviso | `todos`, `só gestores`, `só jovens` |
| Nível do aviso | `urgente`, `importante`, `informativo` |
| Situação do aviso | `rascunho`, `agendado`, `no ar`, `fora do ar` |
| Situação do evento | `esperando aprovação`, `publicado` |
| Situação do anúncio | `ativo`, `vendido` |
| Categorias do Desapego | móveis, eletrônicos, roupas, livros, esportes (documento do Desapego) |
| Interesses | cinema, culinária, videogame, vôlei, futebol (mapeamento dos jovens) |
| Categorias de aviso | obras, falta de água, coleta de lixo, segurança, mudanças de horário (visão geral do app) |

## Tabela de ruas e quarteirões

> Os nomes das ruas e quarteirões ficam numa tabela própria, para corrigir sem mexer no app. As 18 ruas do protótipo já seguem a ordem real, de Acará a Tapajós.

A lista exata das 18 ruas e a divisão em 3 quarteirões está no [inventário de telas](../telas/README.md#ruas-e-quarteirões-do-protótipo), extraída do protótipo. A divisão em quarteirões ainda precisa ser confirmada com a administração do Núcleo.

## O que a V1 não guarda

- **CPF de visitantes** (LGPD: "dados de visitantes (CPF) não entram na versão 1").
- Dados das áreas de Fase 2 (energia, casas e manutenção, trilhas, carona, representantes, pós-evento, impacto). As fichas das telas de Fase 2 listam os dados que elas usam.

## Controle de custo

O sistema guarda **quantos SMS saíram por mês**, porque o serviço cobra por mensagem. Esse contador não está entre os 8 registros; pode ser derivado do registro "Entrega do aviso" (canal = SMS, enviado).
