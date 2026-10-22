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
//   'organizador'  conta do Meu Carajás Organizadores
//   'administracao' conta de organizador da Administração do Núcleo

// Título de seção do Painel, como está no protótipo.
const TITULO = "<span style=\"font-family: 'Bricolage Grotesque', system-ui, sans-serif; font-weight: 700; font-size: 18px\">";

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
      // "Os organizadores só publicam nas áreas liberadas para o grupo deles."
      ["type: 'Aviso', aud:", "type: CC.tiposDoGrupo(this, ['Aviso', 'Evento', 'Energia', 'Guia', 'Trilha'])[0] || 'Aviso', aud:"],
      [
        "types: this.chips(['Aviso', 'Evento', 'Energia', 'Guia', 'Trilha'], s.type, set('type')),",
        "types: this.chips(CC.tiposDoGrupo(this, ['Aviso', 'Evento', 'Energia', 'Guia', 'Trilha']), s.type, set('type')),",
      ],
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
    template: [
      ['letter-spacing: -0.4px">Olá, Lucca</span>', 'letter-spacing: -0.4px">Olá, {{ccPrimeiroNome}}</span>'],
      // Regra 4: o organizador só vê no Painel as áreas do grupo dele. Para os outros grupos, o que é
      // da Administração do Núcleo (atenção, ferramentas, coleta, agendados e famílias) fica oculto.
      ['Administração do Núcleo · pode publicar avisos oficiais</span>', '{{ccGrupo}}</span>'],
      ['>3 eventos de grupos da cidade</span>', '>{{ccAguardando}}</span>'],
      [
        `${TITULO}Precisa da sua atenção</span>`,
        `<sc-if value="{{ccAdm}}" hint-placeholder-val="{{ true }}">\n    ${TITULO}Precisa da sua atenção</span>`,
      ],
      [`${TITULO}Publicados por você</span>`, `</sc-if>\n    ${TITULO}Publicados por você</span>`],
      [
        `${TITULO}Famílias cadastradas</span>`,
        `<sc-if value="{{ccAdm}}" hint-placeholder-val="{{ true }}">\n    ${TITULO}Famílias cadastradas</span>`,
      ],
      ['    </div>\n\n  </div>\n  <nav', '    </div>\n    </sc-if>\n\n  </div>\n  <nav'],
    ],
    script: [
      [
        'return {\n      ...this.coletaVals(),',
        "return {\n      ccPrimeiroNome: CC.primeiroNome(this),\n      ccAdm: CC.daAdministracao(this),\n      ccAguardando: CC.aguardandoAprovacao(this),\n      ccGrupo: CC.grupoDoPainel(this, 'Administração do Núcleo · pode publicar avisos oficiais'),\n      ...this.coletaVals(),",
      ],
      ['const all = [', '\n    ];', 'const all = CC.publicacoes(this);'],
      // Famílias cadastradas: a família de exemplo do protótipo dá lugar às famílias com cadastro.
      ['const familias = [', '\n    ];', 'const familias = CC.familias(this);'],
      // Como na saudação: o apelido do cadastro, quando há ("Maria Tereza"), senão o primeiro nome.
      ["title: f.people.map((p) => p[0].split(' ')[0]).join(', '),", "title: f.people.map((p) => p[2] || p[0].split(' ')[0]).join(', '),"],
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
  // ------------------------------------------------------------------ Desapego
  // Anúncios e comentários vêm do banco; o anúncio publicado aparece na hora para todos (regra 3).
  // O ranking continua com os dados de exemplo do protótipo.
  Desapego: {
    exige: 'morador:Desapego',
    script: [
      ['const all = [', '\n    ];', 'const all = CC.anuncios(this);'],
      ['const COMMENTS = {', '\n    const s = this.state;', 'const COMMENTS = {};\n    const s = this.state;'],
      ["const base = COMMENTS[i.t] || { seller: 'Você', list: [] };", 'const base = CC.comentariosDoAnuncio(this, i);'],
      [
        "const a = Object.assign({}, this.state.added || {});\n            a[i.t] = (a[i.t] || []).concat([{ who: 'Lucca Ribeiro (você)', text: txt, time: 'agora', me: true }]);\n            this.setState({ added: a, draft: '' });",
        'CC.comentar(this, i, txt);',
      ],
      [
        "this.setState({ mine: [ad].concat(st.mine), form: false, toast: true, cat: 'Todos', onlyMove: false, fTitle: '', fPrice: '', fMove: false, fPhoto: false, fKind: 'Vender' });",
        'CC.publicarAnuncio(this, ad, st);',
      ],
    ],
  },
  Energia: { exige: 'adulto' },
  Trilhas: { exige: 'adulto' },
  Carona: { exige: 'adulto' },
};

// Equipes e permissões: o número de pessoas de cada equipe vem das contas de organizador.
// As permissões e os convites continuam como no protótipo (só na tela).
ajustes.AdminEquipe = {
  exige: 'organizador',
  script: [
    // Quem foi acrescentado com "Adicionar pessoa" fica guardado (os nomes de exemplo vêm da tela).
    ['const added = s.added || {};', 'const added = CC.membrosAdicionados(this);'],
    // As outras equipes contam as contas de organizador do grupo.
    ['? countLabel(membersOf(g.id).length) : g.people;', '? countLabel(membersOf(g.id).length) : CC.pessoasDoGrupo(this, g.name);'],
    [
      'const a = Object.assign({}, this.state.added || {});',
      "this.setState({ added: a, addingTeam: null, newName: '' });",
      'CC.adicionarMembro(this, g.id, nome);',
    ],
  ],
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

// ------------------------------------------------------------------ Aprovações (Administração do Núcleo)
// Os pedidos são os eventos de grupos esperando aprovação. Aprovar publica; recusar tira do ar.
ajustes.AdminAprovar = {
  exige: 'administracao',
  template: [
    [
      '    </sc-for>\n\n  </div>\n  <nav',
      '    </sc-for>\n    <sc-if value="{{ccSemPedidos}}" hint-placeholder-val="{{ false }}"><div style="background: #FFFFFF; border-radius: 20px; padding: 18px 16px; font-size: 14px; color: #4F5E55; text-align: center">Nenhum evento esperando aprovação.</div></sc-if>\n\n  </div>\n  <nav',
    ],
  ],
  script: [
    ["'Eventos': [", '\n      ],', "'Eventos': CC.eventosParaAprovar(this, s.dec),"],
    [
      'const decide = (id, v) => {\n      const n = Object.assign({}, this.state.dec);\n      n[id] = v;\n      this.setState({ dec: n });\n    };',
      'const decide = (id, v) => CC.decidirEvento(this, id, v);',
    ],
    ['return { tabs: tabs, items: items };', 'return { tabs: tabs, items: items, ccSemPedidos: items.length === 0 };'],
  ],
};

// Telas do app dos organizadores que pedem a conta de organizador (a Entrada fica aberta).
// As de áreas da Administração do Núcleo (energia, avisos, coleta, casas, trilhas) só abrem para ela.
ajustes.AdminPosEvento = { exige: 'organizador' };
for (const nome of ['AdminAlcance', 'AdminCasas', 'AdminColeta', 'AdminEnergia', 'AdminImpacto', 'AdminRepresentantes', 'AdminTrilhas']) {
  ajustes[nome] = { exige: 'administracao' };
}

// Barra de baixo: Energia e Aprovar só aparecem para a Administração do Núcleo (regra 4); para os
// outros grupos ficam ocultos e a barra passa a ter três itens. Vale nas telas que esses grupos abrem.
const NAV_ENERGIA =
  '<a href="AdminEnergia.dc.html" style="text-decoration: none; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 3px; color: #CFE3D7; font-size: 11px; font-weight: 600">';
for (const nome of ['AdminInicio', 'AdminPublicar', 'AdminEquipe', 'AdminPosEvento']) {
  ajustes[nome].template = (ajustes[nome].template || []).concat([
    [NAV_ENERGIA, '<sc-if value="{{ccAdm}}" hint-placeholder-val="{{ true }}">' + NAV_ENERGIA],
    ['Aprovar</a>', 'Aprovar</a></sc-if>'],
    [
      'grid-template-columns: repeat(5, minmax(0, 1fr)); padding: 6px 4px 18px 4px',
      'grid-template-columns: {{ccNavColunas}}; padding: 6px 4px 18px 4px',
    ],
  ]);
}
