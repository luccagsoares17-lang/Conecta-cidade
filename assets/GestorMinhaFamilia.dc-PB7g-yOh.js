const e=`<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<title>Meu Carajás Super App – Minha família</title>
<script src="./support.js"><\/script>
</head>
<body>
<x-dc>
<helmet>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500..800&amp;family=DM+Sans:opsz,wght@9..40,400..700&amp;display=swap">
<style>
body{margin:0}
a{color:#1E5B40}a:hover{color:#17432F}
button,input{font-family:inherit}
.sc > *{flex-shrink:0}
</style>
</helmet>
<div style="width: 390px; height: 844px; box-sizing: border-box; overflow: hidden; background: #F4F6F1; font-family: 'DM Sans', system-ui, sans-serif; color: #13241B; display: flex; flex-direction: column">

  <div style="padding: 52px 20px 8px 20px; display: flex; flex-direction: column; gap: 2px; flex-shrink: 0">
    <span style="font-family: 'Bricolage Grotesque', system-ui, sans-serif; font-weight: 800; font-size: 26px; letter-spacing: -0.4px">Minha família</span>
    <span style="font-size: 13px; color: #4F5E55">O que os jovens da casa pedem e fazem no app</span>
  </div>

  <div class="sc" style="flex-grow: 1; min-height: 0; overflow-y: auto; padding: 6px 20px 24px 20px; display: flex; flex-direction: column; gap: 12px">

    <div style="background: #FFFFFF; border-radius: 20px; padding: 14px 16px; display: flex; align-items: center; gap: 12px">
      <span style="width: 52px; height: 52px; border-radius: 26px; background: #FBE6DA; color: #8E3714; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 20px; flex-shrink: 0">D</span>
      <span style="display: flex; flex-direction: column; flex-grow: 1"><span style="font-weight: 700; font-size: 16px">Davi Ribeiro</span><span style="font-size: 13px; color: #4F5E55">15 anos · filho · perfil jovem</span></span>
      <span style="display: flex; flex-direction: column; align-items: flex-end; gap: 4px"><span style="font-size: 11px; font-weight: 700; padding: 4px 8px; border-radius: 6px; background: {{pendBg}}; color: {{pendFg}}">{{pendLabel}}</span></span>
    </div>

    <span style="font-family: 'Bricolage Grotesque', system-ui, sans-serif; font-weight: 700; font-size: 18px">Pedidos do Davi</span>
    <sc-for list="{{requests}}" as="r" hint-placeholder-count="3">
      <div style="background: #FFFFFF; border-radius: 18px; padding: 12px 14px; display: flex; flex-direction: column; gap: 10px; border: {{r.border}}">
        <span style="display: flex; align-items: center; gap: 10px">
          <span style="display: flex; flex-direction: column; flex-grow: 1; min-width: 0"><span style="font-size: 11px; font-weight: 700; letter-spacing: 0.4px; text-transform: uppercase; color: #4F5E55">{{r.kind}} · {{r.when}}</span><span style="font-weight: 700; font-size: 15px">{{r.what}}</span><sc-if value="{{r.hasMsg}}" hint-placeholder-val="{{ false }}"><span style="font-size: 13px; color: #13241B">“{{r.msg}}”</span></sc-if></span>
          <span style="font-size: 11px; font-weight: 700; padding: 4px 8px; border-radius: 6px; background: {{r.stBg}}; color: {{r.stFg}}; flex-shrink: 0">{{r.st}}</span>
        </span>
        <sc-if value="{{r.pending}}" hint-placeholder-val="{{ false }}">
          <span style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px">
            <button onClick="{{r.deny}}" style="border: 2px solid #C9D2CB; cursor: pointer; height: 44px; border-radius: 22px; font-weight: 700; font-size: 14px; background: #FFFFFF; color: #13241B">Não liberar</button>
            <button onClick="{{r.allow}}" style="border: none; cursor: pointer; height: 44px; border-radius: 22px; font-weight: 700; font-size: 14px; background: #1E5B40; color: #FFFFFF">Liberar</button>
          </span>
        </sc-if>
      </div>
    </sc-for>

    <span style="font-family: 'Bricolage Grotesque', system-ui, sans-serif; font-weight: 700; font-size: 18px; margin-top: 4px">Recados do Davi</span>
    <div style="background: #FFFFFF; border-radius: 20px; padding: 14px; display: flex; flex-direction: column; gap: 8px">
      <sc-for list="{{notes}}" as="n" hint-placeholder-count="1">
        <div style="align-self: flex-start; max-width: 88%; background: {{n.bg}}; border-radius: 16px 16px 16px 4px; padding: 10px 12px; display: flex; flex-direction: column; gap: 3px">
          <span style="font-size: 14px; color: #13241B">{{n.text}}</span>
          <span style="font-size: 11px; color: #4F5E55">{{n.when}}{{n.newTag}}</span>
        </div>
      </sc-for>
      <sc-if value="{{noNotes}}" hint-placeholder-val="{{ false }}"><span style="font-size: 14px; color: #4F5E55">Nenhum recado ainda.</span></sc-if>
    </div>

    <span style="font-family: 'Bricolage Grotesque', system-ui, sans-serif; font-weight: 700; font-size: 18px; margin-top: 4px">O que o Davi está fazendo</span>
    <div style="background: #FFFFFF; border-radius: 20px; padding: 4px 16px; display: flex; flex-direction: column">
      <sc-for list="{{activity}}" as="a" hint-placeholder-count="3">
        <div style="display: flex; gap: 10px; align-items: flex-start; padding: 12px 0; border-bottom: 1px solid #EEF1EC">
          <span style="width: 10px; height: 10px; border-radius: 5px; background: #E07A3F; margin-top: 5px; flex-shrink: 0"></span>
          <span style="display: flex; flex-direction: column; gap: 2px"><span style="font-size: 14px; color: #13241B">{{a.text}}</span><span style="font-size: 12px; color: #4F5E55">{{a.when}}</span></span>
        </div>
      </sc-for>
    </div>
    <a href="GestorFamilia.dc.html" style="text-decoration: none; height: 50px; box-sizing: border-box; border-radius: 25px; border: 2px solid #13241B; color: #13241B; font-weight: 700; font-size: 15px; display: flex; align-items: center; justify-content: center">Permissões e moradores em Minha casa</a>

  </div>
  <nav aria-label="Navegação principal" style="flex-shrink: 0; height: 80px; background: #FFFFFF; border-top: 1px solid #E2E7E0; display: grid; grid-template-columns: repeat(6, minmax(0, 1fr)); padding: 6px 2px 16px 2px; box-sizing: border-box">
    <a href="Main.dc.html" style="text-decoration: none; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 3px; color: #4F5E55; font-size: 10px; line-height: 1.1; text-align: center; font-weight: 600"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 10.5 12 3l9 7.5V21h-6v-6H9v6H3z"></path></svg>Início</a>
    <a href="Eventos.dc.html" style="text-decoration: none; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 3px; color: #4F5E55; font-size: 10px; line-height: 1.1; text-align: center; font-weight: 600"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"></rect><path d="M16 2v4M8 2v4M3 10h18"></path></svg>Eventos</a>
    <a href="Desapego.dc.html" style="text-decoration: none; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 3px; color: #4F5E55; font-size: 10px; line-height: 1.1; text-align: center; font-weight: 600"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8z"></path><circle cx="7.5" cy="7.5" r="1.5"></circle></svg>Desapego</a>
    <a href="Energia.dc.html" style="text-decoration: none; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 3px; color: #4F5E55; font-size: 10px; line-height: 1.1; text-align: center; font-weight: 600"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z"></path></svg>Energia</a>
    <a href="GestorMinhaFamilia.dc.html" aria-current="page" style="text-decoration: none; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 3px; color: #1E5B40; font-size: 10px; line-height: 1.1; text-align: center; font-weight: 700"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="8" cy="7" r="3"></circle><circle cx="17" cy="9" r="2.4"></circle><path d="M2.5 20a5.5 5.5 0 0 1 11 0"></path><path d="M13.5 20a4 4 0 0 1 8 0"></path></svg>Minha família</a>
    <a href="GestorFamilia.dc.html" style="text-decoration: none; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 3px; color: #4F5E55; font-size: 10px; line-height: 1.1; text-align: center; font-weight: 600"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 10.5 12 3l9 7.5V21H3z"></path><circle cx="12" cy="13" r="2.5"></circle><path d="M8 21a4 4 0 0 1 8 0"></path></svg>Minha casa</a>
  </nav>
</div>
</x-dc>
<script type="text/x-dc" data-dc-script data-props='{"$preview":{"width":390,"height":844}}'>
class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { fam: null };
  }

  famKey() { return 'conecta-cidade:familia:CKS-4821'; }
  famSeed() {
    return {
      requests: [
        { id: 'r1', kind: 'Evento', what: 'Olimpíadas Entre Fases', msg: '', when: '18/10', status: 'Liberado' },
        { id: 'r2', kind: 'Carona', what: 'Carona para Parauapebas', msg: 'É para ir ao cursinho no sábado', when: '19/10', status: 'Esperando' },
        { id: 'r3', kind: 'Trilha', what: 'Trilha Lagoa da Mata', msg: '', when: '12/10', status: 'Não liberado' }
      ],
      notes: [
        { id: 'n1', text: 'Pai, chego mais tarde hoje, vou ficar no ensaio do Comitê.', when: 'Ontem, 17h40', read: true }
      ],
      activity: [
        { id: 'a1', text: 'Confirmou presença nas Olimpíadas Entre Fases', when: '18/10' },
        { id: 'a2', text: 'Votou em Cinema para o próximo evento do Comitê', when: '17/10' }
      ]
    };
  }
  famLoad() {
    try { const v = window.localStorage.getItem(this.famKey()); if (v) return JSON.parse(v); } catch (e) {}
    return this.state && this.state.fam ? this.state.fam : this.famSeed();
  }
  famSave(d) {
    try { window.localStorage.setItem(this.famKey(), JSON.stringify(d)); } catch (e) {}
    this.setState({ fam: d });
  }
  famUpdate(fn) { const d = JSON.parse(JSON.stringify(this.famLoad())); fn(d); this.famSave(d); }
  famNow() { const t = new Date(); return 'Hoje, ' + String(t.getHours()).padStart(2, '0') + 'h' + String(t.getMinutes()).padStart(2, '0'); }
  componentDidMount() {
    this.setState({ fam: this.famLoad() });
    this._famSync = () => { const d = this.famLoad(); if (JSON.stringify(d) !== JSON.stringify(this.state.fam)) this.setState({ fam: d }); };
    try { window.addEventListener('storage', this._famSync); } catch (e) {}
    this._famTimer = setInterval(this._famSync, 1500);
  }
  componentWillUnmount() {
    try { window.removeEventListener('storage', this._famSync); } catch (e) {}
    clearInterval(this._famTimer);
  }

  renderVals() {
    const fam = this.state.fam || this.famSeed();
    const stLook = (st) => st === 'Liberado' ? ['#DCEDE2', '#17432F', '#1E5B40'] : (st === 'Não liberado' ? ['#FBDCD6', '#9B1C10', '#9B1C10'] : ['#F8EDC9', '#6B4D05', '#D4A017']);
    const decide = (id, st) => this.famUpdate((d) => {
      d.requests.forEach((r) => { if (r.id === id) r.status = st; });
      const r = d.requests.filter((x) => x.id === id)[0];
      if (r) d.activity.push({ id: 'a' + Date.now(), text: (st === 'Liberado' ? 'O pai liberou: ' : 'O pai não liberou: ') + r.what, when: this.famNow() });
    });
    const requests = fam.requests.slice().reverse().map((r) => {
      const lk = stLook(r.status), pending = r.status === 'Esperando';
      return {
        kind: r.kind, what: r.what, when: r.when, msg: r.msg, hasMsg: !!r.msg,
        st: pending ? 'Esperando você' : r.status, stBg: lk[0], stFg: lk[1],
        border: pending ? '2px solid #D4A017' : '2px solid transparent',
        pending: pending,
        allow: () => decide(r.id, 'Liberado'),
        deny: () => decide(r.id, 'Não liberado')
      };
    });
    const pend = fam.requests.filter((r) => r.status === 'Esperando').length;
    return {
      requests: requests,
      notes: fam.notes.slice().reverse().map((n) => ({ text: n.text, when: n.when, bg: n.read ? '#F4F6F1' : '#FBE6DA', newTag: n.read ? '' : ' · novo' })),
      noNotes: fam.notes.length === 0,
      activity: fam.activity.slice().reverse().slice(0, 8),
      pendLabel: pend ? pend + (pend > 1 ? ' pedidos esperando' : ' pedido esperando') : 'Tudo respondido',
      pendBg: pend ? '#F8EDC9' : '#DCEDE2',
      pendFg: pend ? '#6B4D05' : '#17432F'
    };
  }
  componentDidUpdate() {
    const f = this.state.fam;
    if (f && f.notes.some((n) => !n.read) && !this._marking) {
      this._marking = true;
      setTimeout(() => { this.famUpdate((d) => { d.notes.forEach((n) => { n.read = true; }); }); this._marking = false; }, 4000);
    }
  }
}
<\/script>
</body>
</html>
`;export{e as default};
