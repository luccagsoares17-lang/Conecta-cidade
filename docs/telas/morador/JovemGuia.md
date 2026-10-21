# Oportunidades · jovem — `JovemGuia.dc.html`

| Campo | Valor |
| --- | --- |
| App | Meu Carajás Super App (morador) |
| Página do canvas | `morador` ("Meu Carajás Super App") — conforme `design/prototipo/canvas.json` |
| Nome na lista "Telas da versão 1" dos requisitos | Guia do morador |
| Versão | V1 |
| Perfil que vê | Jovem |
| Protótipo | [`design/prototipo/JovemGuia.dc.html`](../../../design/prototipo/JovemGuia.dc.html) |
| Tamanho | 390×844 |

Nomes da tela: no canvas o board é "Oportunidades · jovem"; o `<title>` do arquivo é "Meu Carajás Super App Jovem – Guia do morador"; o título visível é "Oportunidades".

## Para que serve
É a versão do perfil jovem do Guia do morador: "Emergência SECOM 0800-2850-193, serviços do Núcleo e de Parauapebas, oportunidades" (Requisitos › Telas da versão 1). Corresponde ao "Guia e oportunidades" da linha Jovem em Perfis e permissões.

## Conteúdo da tela (de cima para baixo)
1. **Cabeçalho** (fixo)
   - Botão voltar (`aria-label="Voltar para o início"`) → `JovemInicio.dc.html`.
   - Título: "Oportunidades".
   - Selo à direita: "Jovem".
2. **Área que rola:**
   1. **Card "Acabei de chegar"** (botão azul que abre e fecha). Mostra "Acabei de chegar", a dica "Ver passos" ou "Fechar" e o texto "Chegou agora? Veja por onde começar e conheça o Comitê Jovem." Aberto, mostra:
      - "1. Entre no canal oficial de avisos do Núcleo"
      - "2. Conheça o representante da sua rua"
      - "3. Vá no próximo evento do Comitê e faça os primeiros amigos"
      - "4. Salve o número da SECOM: 0800-2850-193"
   2. **"Emergência em Carajás"**: card vermelho que liga (`href="tel:08002850193"`), com "SECOM", "0800-2850-193" e "Único número de emergência do Núcleo · toque para ligar".
   3. **"Serviços"**: duas abas, "Núcleo" e "Parauapebas", e um card com a lista da aba ativa.
      - Aba **Núcleo** (nome · endereço · horário, sem telefone):
        - "Administração do Núcleo" — "Av. Principal, 100 · seg a sex, 7h às 17h"
        - "Posto de saúde" — "Rua das Palmeiras, 45 · todos os dias, 7h às 19h"
        - "Escolas" — "Rua das Escolas, 20 · seg a sex, 7h às 17h"
        - "Supermercado" — "Praça central, 8 · todos os dias, 7h às 21h"
        - "Portaria" — "Entrada do Núcleo · 24 horas"
      - Aba **Parauapebas**: primeiro o bloco "Emergência em Parauapebas", com três botões de ligar: "192" SAMU (`tel:192`), "193" Bombeiros (`tel:193`) e "190" Polícia (`tel:190`). Depois:
        - "Hospital" — "Av. Central, 1500 · (94) 3000-0001 · 24 horas"
        - "Bancos e lotéricas" — "Centro · (94) 3000-0002 · seg a sex, 10h às 16h"
        - "Comércio e shopping" — "Centro · (94) 3000-0003 · seg a sáb, 9h às 22h"
        - "Faculdades" — "Cidade Nova · (94) 3000-0004 · seg a sex, 8h às 22h"
        - "ONG Via Autismo" — "Rua 10, 250 · (94) 3000-0005 · seg a sex, 8h às 17h"
   4. **"Oportunidades"**: três cards fixos, que não são clicáveis:
      - "Vestibular" — "Preparação para o vestibular" — "Cursinho Popular Carajás · inscrições até 30/11"
      - "Estágio" — "Vaga de estágio" — "Empresa parceira do Núcleo · Administração"
      - "Curso" — "Curso livre" — "Informática básica · Biblioteca do Núcleo"
3. **Não há barra de navegação inferior** nesta tela.

## Comportamento (script `Component`)
- Estado inicial: `{ tab: 'Núcleo', welcome: false }`. A tela abre na aba Núcleo, com o card "Acabei de chegar" fechado.
- **Card "Acabei de chegar":** alterna `welcome`. A dica muda entre "Ver passos" e "Fechar", e `aria-expanded` acompanha.
- **Abas Núcleo / Parauapebas:** gravam `tab`. A aba ativa fica com fundo branco e `aria-pressed="true"`. Com `tab === 'Parauapebas'` (`isPeba`), aparece o bloco com 192, 193 e 190.
- As listas de serviços estão no objeto `lists` do script. As oportunidades estão fixas no markup.
- Os números de emergência são links `tel:`.

## Navegação
| Elemento | Leva para |
| --- | --- |
| Botão voltar | `JovemInicio.dc.html` |
| Card SECOM | `tel:08002850193` (ligação) |
| "192" SAMU | `tel:192` |
| "193" Bombeiros | `tel:193` |
| "190" Polícia | `tel:190` |

Só se chega a esta tela pelo card "Oportunidades" de `JovemInicio.dc.html`.

## Dados mostrados → registros do sistema
| Dado na tela | Registro |
| --- | --- |
| Serviços do Núcleo e de Parauapebas (nome, endereço, telefone, horário) | **Sem registro correspondente** entre os 8 registros |
| Números de emergência (SECOM, 192, 193, 190) | **Sem registro correspondente** (fixos no markup) |
| Oportunidades (tipo, título, descrição, prazo) | **Sem registro correspondente** |
| Passos do "Acabei de chegar" | **Sem registro correspondente** (texto fixo) |
| Se o jovem pode ver Oportunidades | Permissão do jovem (área Oportunidades) — **o protótipo não usa** |

## Regras dos documentos que se aplicam
- **Requisitos › Telas da versão 1 › Guia do morador:** "Emergência SECOM 0800-2850-193, serviços do Núcleo e de Parauapebas, oportunidades"; "192, 193 e 190 aparecem só na aba Parauapebas". O protótipo segue as duas regras.
- **Requisitos › Objetivo e escopo:** "Guia do morador e SECOM 0800-2850-193" está na V1.
- **Requisitos › Perfis e permissões (linha Jovem):** "Eventos, Guia e oportunidades...".
- **Requisitos › Dados › Permissão do jovem:** a área "Oportunidades" pode estar ligada ou desligada pelo gestor.
- **Requisitos › Perfis e permissões (linha Administração do Núcleo):** "Publica avisos oficiais com selo, eventos e Guia".
- **Meu Carajás Super App: o aplicativo › Informações da cidade:** "Lista de serviços do Núcleo e de Parauapebas, com endereço, telefone e horário"; "Telefones de emergência sempre à mão"; "Guia 'Acabei de chegar'"; "Mural de oportunidades de curso, estágio e preparação para o vestibular".
- **Requisitos › SMS e WhatsApp:** "o WhatsApp é usado só para o cadastro... nenhum aviso sai por ele".
- **Plano de Comunicação › Os canais:** "Canal oficial no WhatsApp (só envio)"; **› Rede de representantes de rua**.

## Divergências entre protótipo e documentos
1. **Três nomes para a mesma tela:** o board se chama "Oportunidades · jovem", o `<title>` diz "Guia do morador" e o título visível é "Oportunidades". Na lista da V1 o nome é "Guia do morador".
2. **Serviços do Núcleo sem telefone.** O documento do aplicativo pede "endereço, telefone e horário", mas a aba Núcleo só tem endereço e horário. A aba Parauapebas tem os três.
3. **Passo 2 cita o representante de rua** ("Conheça o representante da sua rua"). "Representantes de rua" está na Fase 2 (tabela de escopo).
4. **Passo 1 cita o "canal oficial de avisos do Núcleo".** O protótipo não diz qual canal é esse. No Plano de Comunicação, o canal oficial é o WhatsApp. Nos Requisitos, o WhatsApp é "só cadastro" e "nenhum aviso sai por ele". Os documentos não concordam entre si, e o passo não resolve isso.
5. **Não há estado de "Oportunidades desligado".** Oportunidades é uma área que o gestor liga ou desliga (Permissão do jovem). Aqui ela divide a tela com o Guia (emergência e serviços), e o protótipo não mostra o que acontece quando ela está desligada.
6. **Nenhum registro guarda o Guia.** Serviços, oportunidades e passos não estão entre os 8 registros, embora a administração "publica... Guia".
7. **Oportunidades sem detalhe:** os cards não abrem e não têm link ou contato.
8. **Sem barra de navegação inferior;** só o botão voltar.
9. **Card "Acabei de chegar" diferente da tela "Acabei de chegar".** Aqui ele é um card que abre passos. Na lista da V1, "Acabei de chegar" é a tela que "Escolhe entre criar conta, ver o Guia ou... ver a carona".
10. **Abas com 40 px de altura:** "Requisitos gerais › Acessibilidade" pede "botões de pelo menos 44 px".

## Notas para implementação
- Os telefones "(94) 3000-000X" e os endereços são dados de exemplo do protótipo. O único número confirmado nos documentos é a SECOM 0800-2850-193.
- Os botões 192, 193 e 190 só aparecem na aba Parauapebas (regra da V1).
- Na V1, o passo "Conheça o representante da sua rua" depende de uma área da Fase 2. Os documentos não dizem se ele fica.
