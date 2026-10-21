// Ligação das telas do protótipo com os dados reais.
//
// Cada tela continua sendo o arquivo do artefato. Aqui ficam só as trocas de texto que tiram os
// dados de exemplo e chamam o CC (src/dados/cc.js). Formatos:
//   [procurar, trocar]               troca um trecho que aparece exatamente uma vez
//   [inicio, fim, trocar]            troca do início até o fim (inclusive), usado para listas de exemplo
// Se o artefato mudar e um trecho não for mais encontrado, a tela mostra o erro e `npm test` falha.
//
// `exige` diz quem pode abrir a tela:
//   'morador'      qualquer morador com conta ativa
//   'adulto'       gestor ou adulto da casa
//   'gestor'       só gestor da casa
//   'jovem'        só jovem
//   'jovem:Area'   jovem com a área liberada pelo gestor
//   'organizador'  conta do Conecta Cidade Organizadores

export const ajustes = {
  // ------------------------------------------------------------------ Entrar
  Login: {
    script: [
      ['const accounts = [', '\n    ];', 'const accounts = CC.contasParaLogin(this, s.ident);'],
      ["else if (!acc) idState = 'notfound';", "else if (!acc) idState = CC.buscandoConta(s.ident) ? 'typing' : 'notfound';"],
      // A senha é conferida no servidor quando a pessoa toca em Entrar.
      ['const passOk = acc && s.pass === acc.pass;', 'const passOk = false;'],
      [
        'tryEnter: () => this.setState({ tried: true, forgot: false }),',
        "tryEnter: () => CC.entrarMorador(this, { ident: s.ident, senha: s.pass, perfil: s.tab, ok: idState === 'found' && !!s.pass }),",
      ],
    ],
  },

  // ------------------------------------------------------------------ Entrada do organizador
  AdminEntrada: {
    template: [
      ['<input id="email" type="email"', '<input id="email" type="email" onInput="{{ccSetEmail}}"'],
      ['<input id="codigo" type="password"', '<input id="codigo" type="password" onInput="{{ccSetCodigo}}"'],
      // Requisitos: "Sem convite, não entra". O protótipo não desenha a mensagem de erro; ela usa
      // o amarelo #FFD27A que a própria tela já usa sobre o fundo escuro.
      [
        '<a href="AdminInicio.dc.html" style=',
        '<sc-if value="{{ccTemErro}}"><span role="alert" style="font-size: 14px; font-weight: 700; text-align: center; color: #FFD27A">{{ccErro}}</span></sc-if>\n    <a href="AdminInicio.dc.html" onClick="{{ccEntrar}}" style=',
      ],
    ],
    script: [['renderVals() { return {}; }', 'renderVals() { return CC.entradaOrganizador(this); }']],
  },

  // ------------------------------------------------------------------ Início · gestor
  Main: {
    exige: 'adulto',
    template: [['Olá, Lucca!', 'Olá, {{ccPrimeiroNome}}!']],
    script: [
      ['const all = [', '\n    ];', 'const all = CC.eventosInicio(this);'],
      ['const g = !!this.state.going[e.id];', 'const g = CC.confirmado(e.id);'],
      [
        'toggle: () => {\n            const n = Object.assign({}, this.state.going);\n            n[e.id] = !n[e.id];\n            this.setState({ going: n });\n          }',
        'toggle: () => CC.alternarPresenca(this, e.id)',
      ],
      ['return {\n      ...this.coletaVals(),', 'return {\n      ccPrimeiroNome: CC.primeiroNome(this),\n      ...this.coletaVals(),'],
    ],
  },

  // ------------------------------------------------------------------ Início · jovem
  JovemInicio: {
    exige: 'jovem',
    template: [['E aí, Lucca!', 'E aí, {{ccPrimeiroNome}}!']],
    script: [['return {\n      votes: votes,', 'return {\n      ccPrimeiroNome: CC.primeiroNome(this),\n      votes: votes,']],
  },

  // ------------------------------------------------------------------ Minha casa
  GestorFamilia: {
    exige: 'gestor',
    template: [
      ['Rua Japurá, 12 · você é o gestor', '{{ccEndereco}}você é o gestor'],
      ['font-weight: 700">Lucca Ribeiro</span>', 'font-weight: 700">{{ccNome}}</span>'],
      ['letter-spacing: 3px">CKS-4821</span>', 'letter-spacing: 3px">{{ccCodigo}}</span>'],
    ],
    script: [
      // Moradores da casa vêm do cadastro; os acrescentados nesta tela ficam só na tela, como no protótipo.
      [
        "jovens: [{ name: 'Davi Ribeiro', sub: '15 anos · perfil jovem' }], adultos: [{ name: 'Marina Ribeiro', sub: '44 anos · também gestora' }] };",
        'jovens: [], adultos: [] };',
      ],
      // O pedido de liberação de exemplo ("Davi pediu para liberar a Carona") é da Fase 2 (Carona).
      ['request: true', 'request: false'],
      ['const s = this.state;', 'const s = Object.assign({}, this.state, { on: CC.permissoesDaCasa(this, this.state.on) });'],
      [
        'const flip = (id, v) => {\n      const n = Object.assign({}, this.state.on);\n      n[id] = v === undefined ? !n[id] : v;\n      this.setState({ on: n });\n    };',
        'const flip = (id, v) => CC.alternarPermissao(this, id, v, s.on);',
      ],
      [
        'jovens: s.jovens.map(mem),\n      adultos: s.adultos.map(mem),',
        "ccNome: CC.nomeCompleto(this),\n      ccCodigo: CC.codigoDaFamilia(this),\n      ccEndereco: CC.endereco(this),\n      jovens: CC.membros(this, 'jovem').concat(s.jovens).map(mem),\n      adultos: CC.membros(this, 'adulto').concat(s.adultos).map(mem),",
      ],
    ],
  },

  // ------------------------------------------------------------------ Avisos
  Avisos: {
    exige: 'adulto',
    script: [['const all = [', '\n    ];', 'const all = CC.avisos(this);']],
  },
  JovemAvisos: {
    exige: 'jovem',
    script: [['const all = [', '\n    ];', 'const all = CC.avisos(this);']],
  },

  // ------------------------------------------------------------------ Eventos
  Eventos: {
    exige: 'adulto',
    script: eventosDaAgenda(),
  },
  JovemEventos: {
    exige: 'jovem:Eventos',
    script: eventosDaAgenda(),
  },

  // ------------------------------------------------------------------ Publicar (organizador)
  AdminPublicar: {
    exige: 'organizador',
    script: [
      ["saveDraft: () => this.setState({ msg: 'Rascunho salvo. Ele aparece no painel.' }),", "saveDraft: () => CC.publicar(this, s, 'rascunho', chosen),"],
      [
        "publish: () => this.setState({ msg: sched ? 'Agendado! Sai no dia e hora marcados.' : 'Publicado! Já aparece no app dos moradores.' })",
        "publish: () => CC.publicar(this, s, sched ? 'agendado' : 'no ar', chosen)",
      ],
    ],
  },

  // ------------------------------------------------------------------ Painel (organizador)
  AdminInicio: {
    exige: 'organizador',
    template: [['letter-spacing: -0.4px">Olá, Lucca</span>', 'letter-spacing: -0.4px">Olá, {{ccPrimeiroNome}}</span>']],
    script: [
      ['return {\n      ...this.coletaVals(),', 'return {\n      ccPrimeiroNome: CC.primeiroNome(this),\n      ...this.coletaVals(),'],
      ['const all = [', '\n    ];', 'const all = CC.publicacoes(this);'],
      ['const o = !!off[p.id];', 'const o = CC.foraDoAr(p);'],
      [
        'toggle: () => {\n            const n = Object.assign({}, this.state.off);\n            n[p.id] = !n[p.id];\n            this.setState({ off: n });\n          }',
        'toggle: () => CC.alternarNoAr(this, p)',
      ],
    ],
  },

  // ------------------------------------------------------------------ Demais telas: só quem pode abrir
  GestorMinhaFamilia: { exige: 'gestor' },
  JovemFamilia: { exige: 'jovem' },
  JovemGuia: { exige: 'jovem:Oportunidades' },
  JovemTrilhas: { exige: 'jovem' },
  Desapego: { exige: 'morador:Desapego' },
  Energia: { exige: 'adulto' },
  Trilhas: { exige: 'adulto' },
  Carona: { exige: 'adulto' },
};

function eventosDaAgenda() {
  return [
    ['const all = [', '\n    ];', 'const all = CC.eventos(this);'],
    ['const g = !!s.going[e.id];', 'const g = CC.confirmado(e.id);'],
    [
      'toggle: () => {\n          const next = Object.assign({}, this.state.going);\n          next[e.id] = !next[e.id];\n          this.setState({ going: next });\n        }',
      'toggle: () => CC.alternarPresenca(this, e.id)',
    ],
  ];
}

// Telas do app dos organizadores que pedem a conta de organizador (a Entrada fica aberta).
for (const nome of [
  'AdminAlcance',
  'AdminAprovar',
  'AdminCasas',
  'AdminColeta',
  'AdminEnergia',
  'AdminEquipe',
  'AdminImpacto',
  'AdminPosEvento',
  'AdminRepresentantes',
  'AdminTrilhas',
]) {
  ajustes[nome] = { exige: 'organizador' };
}
