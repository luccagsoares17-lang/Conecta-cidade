# Requisitos gerais, piloto e critérios de aceite

Fonte: requisitos da V1, seções "Requisitos gerais" e "Piloto: aceite e métricas".

O app precisa funcionar em celulares simples, proteger dados de menores e ser fácil para idosos.

## Requisitos gerais

| Tema | Requisito |
| --- | --- |
| **Plataformas** | Android e iPhone. Uma versão web (PWA) serve para o piloto, sem precisar das lojas. |
| **LGPD** | Termo de uso e política de privacidade aceitos no cadastro; conta de menor de 18 anos só ativa com aprovação do gestor; dados de visitantes (CPF) não entram na V1; qualquer pessoa pode pedir para apagar a conta. |
| **Segurança** | Senha cifrada; código de acesso de organizador vale uma vez; sair da conta em todos os aparelhos. |
| **Acessibilidade** | Texto que aumenta com a configuração do celular; contraste alto; botões de pelo menos 44 px; avisos também em SMS para quem não usa o app. |
| **Desempenho** | A tela inicial abre em até 3 segundos numa conexão 4G fraca. |
| **Visual** | Cores, fontes (Bricolage Grotesque e DM Sans), ícones e logo iguais aos do protótipo. Ver [`docs/design/identidade-visual.md`](../design/identidade-visual.md). |

## Piloto

30 dias com os **49 jovens do Comitê** e suas famílias. A V1 está pronta quando **todos** os itens abaixo passam.

### Critérios de aceite

- [ ] Um gestor cria a conta e recebe o código da família em menos de 3 minutos
- [ ] Um jovem entra com o código, e a conta só ativa depois que o gestor aprova
- [ ] O gestor liga e desliga o Desapego do jovem, e o app do jovem muda na hora
- [ ] Um aviso urgente chega por SMS a um celular sem internet em até 2 minutos
- [ ] Um aviso "só jovens" não aparece para quem não é jovem, e um urgente nunca aparece para o jovem
- [ ] Um anúncio do Desapego aparece para os vizinhos logo depois de publicado
- [ ] A tela de Alcance mostra quantas casas viram cada aviso

### Métricas

| Métrica | Meta |
| --- | --- |
| Famílias do Comitê cadastradas | Todas as 49, ou o máximo possível |
| Avisos importantes que chegam em 24 horas | 95% das casas |
| Avisos urgentes que chegam em 2 horas | 95% das casas |
| Confirmações em eventos pelo app | A definir no começo do piloto |
| Anúncios e doações no Desapego | A definir no começo do piloto |
