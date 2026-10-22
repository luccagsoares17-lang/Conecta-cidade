// Conteúdo de demonstração para o piloto e a apresentação: avisos, eventos e anúncios do
// Desapego copiados dos dados de exemplo do protótipo (design/prototipo/Avisos, Eventos e
// Desapego). Entra só quando a tabela está vazia, então não duplica nem apaga nada.
// Para subir sem ele, defina CC_SEM_EXEMPLOS=1. Para apagar depois, veja docs/acessos.md.

const AUTOR_AVISOS = 'mario@conectacidade.app';

export const AVISOS = [
  ['todos', 'urgente', 'Segurança', 'Interdição de estrada', 'Hoje, até 18h', 'Estrada de acesso ao Núcleo, km 8', 'Evite o trecho e use o caminho indicado.'],
  ['todos', 'importante', 'Falta de água', 'Interrupção no fornecimento de água', 'Quinta-feira, 5/11, das 8h às 14h', 'Ruas Japurá, Jari e Juruá', 'Armazene água na quarta-feira à noite.'],
  ['todos', 'importante', 'Obras', 'Obra na rua', '26/10 a 30/10', 'Rua Mearim', 'Estacione em outra rua durante a obra.'],
  ['todos', 'informativo', 'Saúde', 'Campanha de vacinação', 'Terça, 3/11, das 8h às 16h', 'Posto de saúde', 'Leve o cartão de vacina.'],
  ['todos', 'informativo', 'Coleta de lixo', 'Coleta seletiva: lixo até as 10h', 'Segunda a sexta', 'cronograma no início do app', 'Deixe o lixo do lado de fora até as 10h da manhã, separado conforme o dia da coleta.'],
];

// [nome, data e hora, local, interesse, ingresso solidário, quem organiza (null = Administração)]
export const EVENTOS = [
  ['CineFases', 'Sábado, 7/11, 19h', 'Clube do Núcleo', 'Cinema', true, 'Comitê Jovem Entre Fases'],
  ['Noite de Pizza', 'Sexta, 13/11, 19h30', 'Salão de festas', 'Culinária', false, 'Comitê Jovem Entre Fases'],
  ['Olimpíadas Entre Fases', 'Sábado, 21/11, 8h', 'Ginásio poliesportivo', 'Vôlei', true, 'Comitê Jovem Entre Fases'],
  ['Encontro de boas-vindas', 'Sábado, 28/11, 17h', 'Praça central', null, false, null],
  ['Torneio de videogame', 'Sábado, 5/12, 14h', 'Biblioteca do Núcleo', 'Videogame', false, 'Grêmio estudantil'],
];

// Pedidos de exemplo da tela Aprovações do protótipo: eventos de grupos esperando a Administração.
// [nome, data e hora, local, grupo]
export const EVENTOS_PARA_APROVAR = [
  ['Festa junina', '29/11', 'Pátio da escola', 'Escola Municipal do Núcleo'],
  ['Campeonato de vôlei', '5/12', 'Ginásio poliesportivo', 'Clube do Núcleo'],
  ['Grupo de leitura', 'Toda quarta, 19h', 'Biblioteca', 'Beatriz Nunes'],
];

// [título, categoria, preço, mudança, doação, ilustração do protótipo, vendedor, comentários]
// Comentário: [quem ('*' = o vendedor), texto, há quanto tempo]
export const ANUNCIOS = [
  ['Sofá de 3 lugares', 'Móveis', 'R$ 600', true, false, 'sofa', 'Rafael Moura', [
    ['Ana Souza', 'Ainda está disponível? Tenho muito interesse!', '2 hours'],
    ['Pedro Lima', 'Faz por R$ 500? Busco hoje mesmo.', '1 hour'],
    ['*', 'Faço por R$ 550, Pedro. Te chamei no privado.', '40 minutes']]],
  ['Geladeira duplex', 'Eletrônicos', 'R$ 1.200', true, false, 'geladeira', 'Carla Mendes', [
    ['Juliana Costa', 'Onde fica a casa? Queria dar uma olhada antes de comprar.', '3 hours'],
    ['*', 'Fica na Rua Jari, quarteirão 2. Te mandei o número da casa por mensagem.', '2 hours'],
    ['Diego Martins', 'O freezer gela bem? Ela tem quantos anos?', '30 minutes']]],
  ['Mesa com 4 cadeiras', 'Móveis', 'R$ 450', true, false, 'mesa', 'Bruno Santos', [
    ['Elisa Rocha', 'As cadeiras estão inteiras? Tenho interesse.', '5 hours'],
    ['*', 'Todas inteiras, só tem um arranhão pequeno no tampo.', '4 hours']]],
  ['Smart TV 43 polegadas', 'Eletrônicos', 'R$ 900', true, false, 'tv', 'Marcos Pereira', [
    ['Felipe Araújo', 'Aceita R$ 800 no Pix?', '1 hour'],
    ['*', 'Fecho em R$ 850, Felipe. Vem buscar quando quiser.', '20 minutes']]],
  ['Guarda-roupa 4 portas', 'Móveis', 'R$ 550', true, false, 'guarda', 'Helena Castro', [
    ['Beatriz Nunes', 'Vocês desmontam para levar? Moro na Rua Purus.', '1 day'],
    ['*', 'Desmonto sim! Só precisa buscar até sábado, a mudança é domingo.', '1 day']]],
  ['Micro-ondas 20 litros', 'Eletrônicos', 'R$ 250', true, false, 'micro', 'Gustavo Pires', [
    ['Thiago Rocha', 'Posso passar aí às 18h para ver funcionando?', '3 hours'],
    ['*', 'Pode sim! Te mando o endereço no privado.', '2 hours']]],
  ['Bicicleta aro 26', 'Esportes', 'R$ 300', false, false, 'bike', 'Sandra Melo', [
    ['Paulo Santos', 'Faz R$ 250? É para o meu filho ir para a escola.', '6 hours'],
    ['*', 'Faço R$ 270 e dou o cadeado junto.', '5 hours']]],
  ['Chuteira tamanho 38', 'Esportes', 'R$ 60', false, false, 'chuteira', 'José Ferreira', [
    ['Davi Ribeiro', 'Ainda tem? Uso 38 certinho!', '1 hour'],
    ['*', 'Tenho! Só usei duas vezes.', '50 minutes']]],
  ['Livros para o vestibular', 'Livros', 'Grátis', false, true, 'livros', 'Carlos Nogueira', [
    ['Ana Clara', 'Que legal doar! Tem livro de matemática?', '4 hours'],
    ['*', 'Tem de matemática e de física. Pode vir buscar.', '3 hours']]],
  ['Ventilador de coluna', 'Eletrônicos', 'R$ 80', false, false, 'ventilador', 'Fernanda Dias', [
    ['Bruno Santos', 'Ele faz muito barulho? Quero para o quarto.', '2 hours']]],
  ['Jaqueta jeans tamanho M', 'Roupas', 'R$ 70', false, false, 'jaqueta', 'Juliana Costa', [
    ['Elisa Rocha', 'Qual a medida do ombro? Aceita R$ 50?', '1 hour']]],
  ['Roupas infantis', 'Roupas', 'Grátis', false, true, 'infantil', 'Pedro Lima', [
    ['Marina Ribeiro', 'Serve para 4 anos? Posso buscar amanhã?', '1 day'],
    ['*', 'Tem de 3 a 5 anos. Pode sim, fico em casa à tarde.', '1 day']]],
];

const vazia = async (c, tabela) => Number((await c.query(`select count(*) as n from ${tabela}`))[0].n) === 0;

export async function conteudoInicial(c) {
  const [autor] = await c.query('select id from organizadores where email = $1', [AUTOR_AVISOS]);
  const autorId = autor ? autor.id : null;

  if (await vazia(c, 'avisos')) {
    // Publicados em sequência, para a lista seguir a ordem do protótipo dentro de cada nível.
    for (const [i, [publico, nivel, categoria, oque, quando, onde, fazer]] of AVISOS.entries()) {
      await c.query(
        `insert into avisos (publico, nivel, categoria, oque, quando, onde, o_que_fazer, contato, canais, situacao,
                             enviado_em, publicado_por)
         values ($1, $2, $3, $4, $5, $6, $7, '(94) 0000-0000 – Administração do Núcleo', '{SMS}', 'no ar',
                 now() - make_interval(mins => $8), $9)`,
        [publico, nivel, categoria, oque, quando, onde, fazer, i, autorId],
      );
    }
  }

  if (await vazia(c, 'eventos')) {
    for (const [nome, dataHora, local, interesse, solidario, quem] of EVENTOS) {
      await c.query(
        `insert into eventos (nome, organizador_id, organizador_nome, data_hora, local, interesse, ingresso_solidario, situacao)
         values ($1, $2, $3, $4, $5, $6, $7, 'publicado')`,
        [nome, quem ? null : autorId, quem, dataHora, local, interesse, solidario],
      );
    }
    for (const [nome, dataHora, local, grupo] of EVENTOS_PARA_APROVAR) {
      await c.query(
        `insert into eventos (nome, organizador_nome, data_hora, local, situacao) values ($1, $2, $3, $4, 'esperando aprovação')`,
        [nome, grupo, dataHora, local],
      );
    }
  }

  if (await vazia(c, 'anuncios')) {
    for (const [i, [titulo, categoria, preco, mudanca, doacao, ilustracao, vendedor, comentarios]] of ANUNCIOS.entries()) {
      const [a] = await c.query(
        `insert into anuncios (autor_nome, titulo, categoria, preco, doacao, mudanca, ilustracao, criado_em)
         values ($1, $2, $3, $4, $5, $6, $7, now() - make_interval(days => 1, mins => $8)) returning id`,
        [vendedor, titulo, categoria, preco, doacao, mudanca, ilustracao, i],
      );
      for (const [quem, texto, ha] of comentarios) {
        await c.query(
          `insert into comentarios_anuncio (anuncio_id, autor_nome, do_vendedor, texto, criado_em)
           values ($1, $2, $3, $4, now() - $5::interval)`,
          [a.id, quem === '*' ? vendedor : quem, quem === '*', texto, ha],
        );
      }
    }
  }
}
