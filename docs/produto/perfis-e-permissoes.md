# Perfis e permissões

Fonte: requisitos da V1, seção "Perfis e permissões".

Cada casa tem **pelo menos um gestor**, e o gestor decide o que os jovens da casa podem usar. Os organizadores só publicam nas áreas liberadas para o grupo deles.

## Perfis

| Perfil | App | Como entra | O que pode fazer na V1 |
| --- | --- | --- | --- |
| **Gestor da casa** | Conecta Cidade | Cria a conta com rua e número da casa | Tudo do app do morador; recebe todos os avisos, inclusive urgentes; cria o código da família; aprova jovens e adultos; liga e desliga o que cada jovem pode usar |
| **Adulto da casa** | Conecta Cidade | Usa o código da família | Tudo do app do morador; pode ser marcado como segundo gestor |
| **Jovem** | Conecta Cidade | Usa o código da família e espera a aprovação do gestor | Eventos, Guia e oportunidades e avisos informativos e importantes; Desapego só se o gestor liberar |
| **Administração do Núcleo** | Organizadores | Convite com código de acesso | Publica avisos oficiais com selo, eventos e Guia; convida pessoas; vê alcance; aprova eventos de grupos |
| **Organizador de eventos** | Organizadores | Convite com código de acesso | Publica eventos, que passam pela aprovação da administração |
| **Comitê Jovem Entre Fases** | Organizadores | Convite com código de acesso | Publica eventos dos jovens |

## Regras de permissão

1. Avisos **urgentes sempre vão para os gestores**, mesmo quando o público escolhido for "só jovens".
2. O **jovem nunca vê avisos urgentes** no app; eles são tratados pelos gestores da casa.
3. **Desapego não tem aprovação**: o anúncio aparece na hora para todos os moradores.
4. Um organizador **só vê no Painel as áreas que o grupo dele pode publicar**.

Regras ligadas, de outras seções dos requisitos:

- Adultos entram com o código e a conta **ativa na hora**; o gestor recebe um aviso.
- Conta de **menor de 18 anos** só ativa com aprovação do gestor (LGPD).
- Só gestores veem a tela **Minha casa**.
- **Só a administração muda permissões** de equipes (tela Equipes e permissões).
- O código de acesso de organizador **vale uma vez**.

## Permissões do jovem (registro "Permissão do jovem")

Áreas que o gestor liga ou desliga, por jovem: **Eventos, Oportunidades, Desapego**.

| Área | Padrão descrito nos requisitos |
| --- | --- |
| Eventos | Disponível ao jovem |
| Guia e oportunidades | Disponível ao jovem |
| Avisos informativos e importantes | Disponíveis ao jovem (urgentes nunca) |
| Desapego | Só se o gestor liberar |

O valor inicial de cada chave de permissão não está escrito nos requisitos além do que a tabela acima mostra; ver as fichas [`GestorFamilia`](../telas/morador/GestorFamilia.md) e [`JovemInicio`](../telas/morador/JovemInicio.md) para o que o protótipo mostra.

## Matriz de visibilidade dos avisos

| Público escolhido | Nível | Gestor | Adulto | Jovem |
| --- | --- | --- | --- | --- |
| Todos | Informativo / Importante | Vê | Vê | Vê |
| Todos | Urgente | Vê + SMS | Vê | **Não vê** |
| Só gestores | Qualquer | Vê | Não vê | Não vê |
| Só jovens | Informativo / Importante | Não vê | Não vê | Vê |
| Só jovens | Urgente | **Vê (regra 1)** | Não vê | **Não vê (regra 2)** |

Critério de aceite ligado: um aviso "só jovens" não aparece para quem não é jovem, e um urgente nunca aparece para o jovem. A combinação "só jovens + urgente" é a exceção da regra 1: vai para os gestores.

Os requisitos não dizem se o adulto que não é gestor recebe avisos urgentes de público "todos"; a tabela acima marca "Vê" porque o adulto tem "tudo do app do morador". Registrado em [perguntas em aberto](../perguntas-em-aberto.md).
