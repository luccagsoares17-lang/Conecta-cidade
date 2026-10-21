# Acessos do piloto

Contas criadas a pedido da equipe em 21/10/2026. Hoje o app roda **sem banco** (modo `local`): o login é conferido em JavaScript no aparelho, e só estas contas entram. Os dados ficam em cada celular. Detalhes em [`desenvolvimento.md`](desenvolvimento.md#dados-reais-contas-e-banco). **As senhas e os códigos de acesso não ficam no repositório**: foram entregues à equipe em separado. Aqui ficam só os nomes, os perfis e os logins. As contas estão em [`api/_lib/semente.js`](../api/_lib/semente.js), só com o resumo cifrado (scrypt) de cada senha. O servidor cria essas contas sozinho na primeira vez que sobe com o banco vazio.

## Conecta Cidade (moradores)

| Pessoa | Perfil | Família | Login | Entra pela aba |
| --- | --- | --- | --- | --- |
| Lucas | Gestor da casa | Família 1 · código **CKS-2925** | `lucas@conectacidade.app` | Gestor da casa |
| Micheline | Jovem (conta ativa, já aprovada) | Família 1 · código **CKS-2925** | `micheline@conectacidade.app` | Morador jovem |
| Gustavo | Gestor da casa | Família 2 · código **CKS-5420** (só ele) | `gustavo@conectacidade.app` | Gestor da casa |

- O Lucas é o gestor da Micheline: na tela **Minha casa** ele vê a Micheline e liga ou desliga o que ela pode usar.
- Permissões iniciais da Micheline, seguindo os requisitos: Eventos **ligado**, Oportunidades **ligado** e Desapego **desligado** ("Desapego só se o gestor liberar").
- O Gustavo é de outra família e não vê nada da família do Lucas.
- Rua, número e quarteirão das duas casas ainda não foram informados. Por isso a Minha casa mostra só "você é o gestor".

## Conecta Cidade Organizadores

| Pessoa | Grupo | Login | Pode |
| --- | --- | --- | --- |
| Mário | Administração do Núcleo | `mario@conectacidade.app` | Publicar avisos oficiais, eventos e Guia; ver alcance; aprovar eventos de grupos |
| Ivison | Administração do Núcleo | `ivison@conectacidade.app` | O mesmo do Mário |

Os dois entram na tela **Entrada do organizador** com o e-mail e o código de acesso.

## Observações

- Os logins `@conectacidade.app` servem só para entrar no app. Ninguém recebe e-mail por eles.
- As senhas são provisórias. O protótipo ainda não tem tela para trocar a senha (ver [perguntas em aberto](perguntas-em-aberto.md)).
- Para sair de uma conta no aparelho, abra o endereço `/sair` do app. O protótipo não tem botão de sair.
- Para recomeçar a demonstração num aparelho (apaga o que foi publicado nele e volta ao conteúdo inicial), abra `/reiniciar`.

## Conteúdo de demonstração

Na primeira vez que o servidor sobe com o banco vazio, ele publica os exemplos do protótipo:
- 5 avisos, publicados pelo Mário: interdição de estrada (urgente), falta de água, obra, vacinação e coleta seletiva;
- 5 eventos: CineFases, Noite de Pizza, Olimpíadas Entre Fases, Encontro de boas-vindas e Torneio de videogame;
- 12 anúncios do Desapego, com os comentários do protótipo.

No modo `local`, `/reiniciar` volta esse conteúdo ao começo no aparelho. No modo `servidor`, para apagar tudo isso antes do piloto real, rode no console SQL do Neon:

```sql
delete from comentarios_anuncio where anuncio_id in (select id from anuncios where autor_id is null);
delete from anuncios where autor_id is null;
delete from eventos where organizador_id is null or nome in ('Encontro de boas-vindas');
delete from avisos where oque in ('Interdição de estrada', 'Interrupção no fornecimento de água', 'Obra na rua',
  'Campanha de vacinação', 'Coleta seletiva: lixo até as 10h');
```
