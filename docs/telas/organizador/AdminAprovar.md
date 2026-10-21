# Aprovações — `AdminAprovar.dc.html`

| Campo | Valor |
| --- | --- |
| App | Conecta Cidade Organizadores |
| Página do canvas | `organizador` |
| Nome na lista "Telas da versão 1" dos requisitos | Aprovações |
| Versão | V1 (o script guarda dados de Desapego e Motoristas que não aparecem na tela) |
| Perfil que vê | Administração do Núcleo |
| Protótipo | [`design/prototipo/AdminAprovar.dc.html`](../../../design/prototipo/AdminAprovar.dc.html) |
| Tamanho | 390×844 |

## Para que serve
Lista os "Eventos de grupos esperando a administração". Pelos requisitos, "Aprovar publica na agenda; recusar avisa quem enviou".

## Conteúdo da tela (de cima para baixo)
O cabeçalho e a barra inferior ficam fixos e o meio da tela rola.

1. **Cabeçalho**
   - Rótulo "Conecta Cidade Organizadores".
   - Título "Aprovações".
   - Subtítulo "Eventos de grupos da cidade, antes de irem para a agenda".
2. **Lista de cards** (um por evento), cada um com:
   - Um quadrado colorido de 52 px, sem imagem nem texto.
   - Título, autor ("by") e detalhes ("meta").
   - Enquanto pendente: botões "Recusar" (contorno) e "Aprovar" (verde).
   - Depois de decidir: selo "Aprovado · já está no app" (verde) ou "Recusado" (vermelho) e o botão "Desfazer".
3. **Barra de navegação inferior**: "Painel", "Publicar", "Energia", "Aprovar" (ativo), "Equipe".

Não há abas no markup. O script calcula `tabs`, mas nenhum elemento da tela usa esse valor.

## Comportamento (script `Component`)
- **Estado inicial:** `{ tab: 'Eventos', dec: {} }`.
- **Dados mostrados** (`data['Eventos']`):

  | id | Título | Autor | Detalhes |
  | --- | --- | --- | --- |
  | e1 | "Festa junina" | "Escola · Escola Municipal do Núcleo" | "29/11 · Pátio da escola" |
  | e2 | "Campeonato de vôlei" | "Clube · Clube do Núcleo" | "5/12 · Ginásio poliesportivo" |
  | e3 | "Grupo de leitura" | "Moradores · Beatriz Nunes" | "Toda quarta, 19h · Biblioteca" |

- **Dados no script que não aparecem na tela:**
  - `data['Desapego']`:
    - "Sofá de 3 lugares" · "Rafael Moura · selo Mudança" · "Móveis · R$ 600".
    - "Bicicleta aro 26" · "Gustavo Pires" · "Esportes · R$ 300".
    - "Livros para o vestibular" · "Helena Castro · Doação" · "Livros · Grátis".
  - `data['Motoristas']`:
    - "Roberto Alves" · "Carona · Fiat Uno prata · 4 vagas".
    - "Fernanda Dias" · "Carona · Chevrolet Onix branco · 2 vagas".
    - Os dois têm o detalhe "Confira CNH e veículo em Trilhas e caronas".
  - A lista de abas é só `['Eventos']`, e o estado `tab` nunca muda pela tela. Por isso esses dados não aparecem.
- **Aprovar:** grava `dec[id] = 'ok'` e mostra "Aprovado · já está no app".
- **Recusar:** grava `dec[id] = 'no'` e mostra "Recusado".
- **Desfazer:** grava `dec[id] = null` e o card volta a mostrar "Recusar" e "Aprovar".
- Não há campo de motivo da recusa nem mensagem para quem enviou.
- O método `chips()` existe no script mas não é usado nesta tela.

## Navegação
| Elemento | Leva para |
| --- | --- |
| Barra: Painel | `AdminInicio.dc.html` |
| Barra: Publicar | `AdminPublicar.dc.html` |
| Barra: Energia | `AdminEnergia.dc.html` (Fase 2) |
| Barra: Aprovar | `AdminAprovar.dc.html` (esta tela) |
| Barra: Equipe | `AdminEquipe.dc.html` |

Chega-se a esta tela também pelo card "Aguardando aprovação · 3 eventos de grupos da cidade" do Painel.

## Dados mostrados → registros do sistema
| Dado na tela | Registro |
| --- | --- |
| Título | Evento → nome |
| Autor ("Escola · Escola Municipal do Núcleo" etc.) | Evento → organizador (e Organizador → grupo, nome) |
| Data e local ("29/11 · Pátio da escola") | Evento → data e hora, local |
| Pendente / "Aprovado · já está no app" | Evento → situação (esperando aprovação, publicado) |
| "Recusado" | **Sem valor correspondente**: a situação do Evento só tem "esperando aprovação" e "publicado" |
| Dados de Desapego no script | Anúncio do Desapego (autor, título, categoria, preço ou doação, selo de mudança). Não aparecem na tela |
| Dados de Motoristas no script (carro, vagas, CNH) | **Sem registro correspondente** (Carona é Fase 2). Não aparecem na tela |

## Regras dos documentos que se aplicam
- **Requisitos da V1 · Telas da versão 1 · Aprovações:** "Eventos de grupos esperando a administração"; "Aprovar publica na agenda; recusar avisa quem enviou".
- **Requisitos da V1 · Perfis e permissões:** a Administração do Núcleo "aprova eventos de grupos". O Organizador de eventos "Publica eventos, que passam pela aprovação da administração".
- **Requisitos da V1 · Perfis e permissões, regra 3:** "Desapego não tem aprovação: o anúncio aparece na hora para todos os moradores."
- **Requisitos da V1 · Dados · Evento:** situação "esperando aprovação" ou "publicado".
- **Eventos no Conecta Cidade · Quem organiza os eventos:** escolas, clubes e moradores (ex.: "Grupos de leitura") estão entre os organizadores. Festa junina e campeonatos são exemplos citados. O documento deixa em aberto "quem aprova os eventos antes de aparecerem na agenda". Os requisitos da V1 respondem: a administração.

## Divergências entre protótipo e documentos
- **Desapego com aprovação (só no script):** o script tem uma lista `Desapego` de anúncios para aprovar. Isso contradiz a regra 3 dos requisitos ("Desapego não tem aprovação"). A lista não aparece na tela porque a única aba é "Eventos".
- **Motoristas / Carona (só no script):** a lista `Motoristas`, com CNH e veículo, é de Carona, que é Fase 2. O texto "Confira CNH e veículo em Trilhas e caronas" cita uma área que não existe na V1. Também não aparece na tela.
- **"Recusar avisa quem enviou":** o protótipo só marca "Recusado". Não mostra aviso a quem enviou, nem motivo.
- **Situação "Recusado" e "Desfazer":** o registro Evento não tem a situação "recusado", e os documentos não falam em desfazer uma decisão.
- **Item "Energia" na barra inferior** (Fase 2).
- **Hora do evento:** dois dos três exemplos mostram só data e local ("29/11 · Pátio da escola", "5/12 · Ginásio poliesportivo"), sem a hora que o registro Evento prevê ("data e hora").

## Notas para implementação
- Na V1 a tela só trata eventos (requisitos). As listas `Desapego` e `Motoristas` do script não entram: Desapego não tem aprovação, e Carona é Fase 2.
- Falta definir como "recusar avisa quem enviou" e onde fica a recusa no registro Evento. Os documentos não trazem o texto do aviso nem o campo.
- Os três eventos, os nomes e as datas são dados de exemplo. O total "3" bate com o card do Painel.
- O quadrado colorido de cada card está vazio no protótipo. Os documentos não dizem o que vai nele.
- O `<title>` do arquivo é "Conecta Cidade Organizadores – Aprovações".
