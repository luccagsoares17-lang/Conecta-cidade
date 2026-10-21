# Guia do morador · gestor — `Guia.dc.html`

| Campo | Valor |
| --- | --- |
| App | Conecta Cidade (morador) |
| Página do canvas | Primeira página (`morador`, "Conecta Cidade"). O board não tem a chave `page` no `canvas.json`. |
| Nome na lista "Telas da versão 1" dos requisitos | Guia do morador |
| Versão | V1 |
| Perfil que vê | Gestor da casa (título do board); adultos também chegam pelo Início. Quem acabou de chegar chega aqui pela tela "Acabei de chegar" (`Chegada.dc.html`). O jovem tem `JovemGuia.dc.html` ("Oportunidades · jovem"). |
| Protótipo | [`design/prototipo/Guia.dc.html`](../../../design/prototipo/Guia.dc.html) |
| Tamanho | 390×844 |

## Para que serve
"Emergência SECOM 0800-2850-193, serviços do Núcleo e de Parauapebas, oportunidades" (requisitos, "Telas da versão 1"). É "tudo o que alguém precisa saber para viver no Núcleo, principalmente quem acabou de chegar" (Conecta Cidade, "Informações da cidade").

## Conteúdo da tela (de cima para baixo)
1. **Cabeçalho** (fixo): botão de voltar (`aria-label="Voltar para o início"`) e título "Guia do morador".
2. A partir daqui o conteúdo rola.
3. **Bloco "Acabei de chegar"** (botão que abre e fecha): título "Acabei de chegar", indicação "Ver passos" (vira "Fechar") e texto "O básico da vida em Carajás e contatos de boas-vindas." Aberto, mostra:
   - "1. Entre no canal oficial de avisos do Núcleo"
   - "2. Conheça o representante da sua rua"
   - "3. Veja os próximos eventos e faça os primeiros amigos"
   - "4. Salve o número da SECOM: 0800-2850-193"
4. **"Emergência em Carajás"**: card que liga (`tel:08002850193`) com "SECOM", "0800-2850-193" e "Único número de emergência do Núcleo · toque para ligar".
5. **"Serviços"**: abas "Núcleo" e "Parauapebas".
   - Na aba "Parauapebas", antes da lista, o bloco "Emergência em Parauapebas" com três botões de ligar: "192" · "SAMU" (`tel:192`), "193" · "Bombeiros" (`tel:193`), "190" · "Polícia" (`tel:190`).
   - Lista de serviços da aba: nome e linha de detalhe.
6. **"Oportunidades"**: três cards fixos:
   - "Vestibular" · "Preparação para o vestibular" · "Cursinho Popular Carajás · inscrições até 30/11"
   - "Estágio" · "Vaga de estágio" · "Empresa parceira do Núcleo · Administração"
   - "Curso" · "Curso livre" · "Informática básica · Biblioteca do Núcleo"

Não há barra de navegação inferior.

## Comportamento (script `Component`)
- **Estado inicial**: `{ tab: 'Núcleo', welcome: false }`.
- **Serviços de exemplo**:
  | Aba | Nome | Detalhe |
  | --- | --- | --- |
  | Núcleo | Administração do Núcleo | Av. Principal, 100 · seg a sex, 7h às 17h |
  | Núcleo | Posto de saúde | Rua das Palmeiras, 45 · todos os dias, 7h às 19h |
  | Núcleo | Escolas | Rua das Escolas, 20 · seg a sex, 7h às 17h |
  | Núcleo | Supermercado | Praça central, 8 · todos os dias, 7h às 21h |
  | Núcleo | Portaria | Entrada do Núcleo · 24 horas |
  | Parauapebas | Hospital | Av. Central, 1500 · (94) 3000-0001 · 24 horas |
  | Parauapebas | Bancos e lotéricas | Centro · (94) 3000-0002 · seg a sex, 10h às 16h |
  | Parauapebas | Comércio e shopping | Centro · (94) 3000-0003 · seg a sáb, 9h às 22h |
  | Parauapebas | Faculdades | Cidade Nova · (94) 3000-0004 · seg a sex, 8h às 22h |
  | Parauapebas | ONG Via Autismo | Rua 10, 250 · (94) 3000-0005 · seg a sex, 8h às 17h |
- **Abas**: tocar em "Núcleo" ou "Parauapebas" troca `tab`. A aba ativa fica com fundo branco. O bloco 192/193/190 só aparece com `tab === 'Parauapebas'`.
- **"Acabei de chegar"**: alterna `welcome` e troca "Ver passos" por "Fechar".
- Os cards de serviço e de oportunidade não são clicáveis; só a SECOM e os números 192, 193 e 190 têm link (`tel:`).

## Navegação
| Elemento | Leva para |
| --- | --- |
| Botão de voltar | `Main.dc.html` |
| Card SECOM | `tel:08002850193` (ligação) |
| "192 SAMU" | `tel:192` (ligação) |
| "193 Bombeiros" | `tel:193` (ligação) |
| "190 Polícia" | `tel:190` (ligação) |

Chegam a esta tela: o atalho "Guia do morador" de `Main.dc.html` e a opção "Guia de quem chegou" de `Chegada.dc.html` ("Acabei de chegar").

## Dados mostrados → registros do sistema
| Dado na tela | Registro |
| --- | --- |
| SECOM e números 192/193/190 | **Sem registro** (fixos na tela) |
| Serviços do Núcleo e de Parauapebas (nome, endereço, telefone, horário) | **Sem registro correspondente** entre os 8 |
| Oportunidades (tipo, título, detalhe) | **Sem registro correspondente**. A Permissão do jovem tem a área "Oportunidades", mas não há registro para as oportunidades em si |
| Passos de "Acabei de chegar" | **Sem registro** (fixos na tela) |

## Regras dos documentos que se aplicam
- Requisitos da versão 1, "Telas da versão 1": Guia do morador — "192, 193 e 190 aparecem só na aba Parauapebas".
- Requisitos, "Objetivo e escopo": "Guia do morador e SECOM 0800-2850-193" é V1.
- Requisitos, "Perfis e permissões": a administração do Núcleo publica o Guia; o jovem usa o "Guia e oportunidades".
- Requisitos, "Telas da versão 1": Acabei de chegar — escolhe entre criar conta, ver o Guia ou ver a carona.
- Conecta Cidade, "Informações da cidade": "Lista de serviços do Núcleo e de Parauapebas, com endereço, telefone e horário"; "Telefones de emergência sempre à mão"; "Guia 'Acabei de chegar', com o básico da vida em Carajás e contatos de boas-vindas"; "Mural de oportunidades de curso, estágio e preparação para o vestibular".

## Divergências entre protótipo e documentos
1. **Representante de rua**: o passo "2. Conheça o representante da sua rua" depende dos representantes de rua, que são Fase 2 ("Objetivo e escopo").
2. **"Canal oficial de avisos do Núcleo"**: o passo 1 manda entrar num canal oficial que a tela não diz qual é. No Plano de Comunicação o canal oficial é um canal de WhatsApp; nos requisitos, o WhatsApp é "Só cadastro" e "nenhum aviso sai por ele".
3. **Serviços do Núcleo sem telefone**: o documento Conecta Cidade pede "endereço, telefone e horário"; os serviços da aba "Núcleo" têm endereço e horário, mas não telefone.
4. **Guia sem registro de dados**: os requisitos dizem que a administração publica o Guia, mas não há registro para serviços nem para oportunidades entre os 8 de "Dados que o sistema guarda".
5. **Oportunidades sem ação**: os cards não abrem nem levam a lugar nenhum; os documentos não dizem o que acontece ao tocar.

## Notas para implementação
- A regra dos números 192, 193 e 190 só na aba "Parauapebas" está no protótipo e nos requisitos.
- A SECOM aparece duas vezes: no card de emergência (com ligação) e no passo 4 de "Acabei de chegar" (só texto).
- Endereços, telefones (94) 3000-000X, horários e oportunidades são dados de exemplo do protótipo.
- A tela do jovem é `JovemGuia.dc.html`, com ficha própria.
