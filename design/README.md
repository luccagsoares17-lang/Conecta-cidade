# Protótipo navegável (cópia fiel)

Esta pasta guarda **exatamente** as telas do artefato
[Meu Carajás – Interface do App](https://claude.ai/artifact/PkQ9tajBdYdt6vXEFn7tX9),
que os requisitos da V1 definem como **referência visual** do projeto.

| Item | Valor |
| --- | --- |
| Artefato | `PkQ9tajBdYdt6vXEFn7tX9` (tipo Design / canvas) |
| Versão copiada | `1792639094-c310` (nome Meu Carajás; Painel com "Famílias cadastradas"; Equipes com Entre Fases, escola e clube, cada uma abrindo com as pessoas; trilhas com avaliações no lugar do ranking; carona sem avaliação de motorista; carona com o CO₂ que deixou de emitir; flor de Carajás rosa como logo dos dois apps; fotos das trilhas) |
| Data da cópia | 21/10/2026 (troca de nome no mesmo dia) |
| Arquivos | `prototipo/canvas.json` + 38 arquivos `.dc.html` + 8 fotos das trilhas em `prototipo/fotos/` (no artefato, `project/fotos/`) |
| Conferência | [`prototipo.sha256`](prototipo.sha256) (`sha256sum -c prototipo.sha256` dentro de `prototipo/`) |

## Regras

1. **Não edite os arquivos de `prototipo/`.** Eles são a cópia do artefato. Se o design mudar, a mudança é feita no artefato e copiada de novo para cá, inteira, atualizando a versão e o `prototipo.sha256` nesta página.
2. A documentação de cada tela fica em [`docs/telas/`](../docs/telas/README.md), uma ficha por arquivo, com o mesmo nome.
3. Rótulos como "Dados de exemplo" e os dados dentro de `renderVals()` são **conteúdo de demonstração** do protótipo, não dados reais.

## Formato dos arquivos

- `canvas.json` é o índice do canvas: título, páginas (`morador` = "Meu Carajás Super App", `organizador` = "Meu Carajás Organizadores"), posição, tamanho e título de cada board, e a tela de abertura (`launch`: `Splash.dc.html`).
- Cada `*.dc.html` é uma tela de 390×844 (exceto `Logo` 1240×620 e `Icones` 600×620), com:
  - o markup da tela dentro de `<x-dc>`;
  - `{{valor}}`, `<sc-for>` e `<sc-if>` ligados ao objeto devolvido por `renderVals()`;
  - um `<script type="text/x-dc">` com a classe `Component extends DCLogic`, que guarda o estado e os dados de exemplo;
  - links `href="Outra.dc.html"` que formam a navegação entre telas.
- A linha `<script src="./support.js"></script>` aponta para o runtime do editor de Design, que **não** faz parte deste repositório. O app (`npm run dev`) desenha estes arquivos com um motor próprio que segue as mesmas regras — ver [`docs/desenvolvimento.md`](../docs/desenvolvimento.md).
- `GestorMinhaFamilia.dc.html` existe no artefato, mas não tem entrada em `boards` no `canvas.json`. Ver a ficha [`docs/telas/morador/GestorMinhaFamilia.md`](../docs/telas/morador/GestorMinhaFamilia.md).
