const e=`<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<title>Meu Carajás Super App – Carona para visitantes</title>
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
  <div style="padding: 52px 20px 12px 20px; display: flex; align-items: center; gap: 12px; flex-shrink: 0">
    <a href="Chegada.dc.html" aria-label="Voltar" style="width: 44px; height: 44px; border-radius: 22px; background: #FFFFFF; display: flex; align-items: center; justify-content: center; flex-shrink: 0"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#13241B" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"></path></svg></a>
    <span style="display: flex; flex-direction: column; flex-grow: 1"><span style="font-family: 'Bricolage Grotesque', system-ui, sans-serif; font-weight: 800; font-size: 24px; letter-spacing: -0.4px">Carona</span><span style="font-size: 13px; color: #4F5E55">Para quem não mora em Carajás</span></span>
    <span style="font-size: 11px; font-weight: 700; letter-spacing: 0.8px; text-transform: uppercase; background: #ECE4F5; color: #3A2560; padding: 6px 10px; border-radius: 8px">Visitante</span>
  </div>
  <div class="sc" style="flex-grow: 1; min-height: 0; overflow-y: auto; padding: 4px 20px 28px 20px; display: flex; flex-direction: column; gap: 14px">

    <div style="background: #FFFFFF; border-radius: 20px; padding: 16px; display: flex; align-items: center; gap: 12px">
      <div style="display: flex; flex-direction: column; align-items: center; gap: 4px; flex-shrink: 0">
        <span style="width: 12px; height: 12px; border-radius: 6px; border: 3px solid #7A52B3; box-sizing: border-box"></span>
        <span style="width: 2px; height: 26px; background: #D5DDD6"></span>
        <span style="width: 12px; height: 12px; border-radius: 6px; background: #7A52B3"></span>
      </div>
      <div style="display: flex; flex-direction: column; gap: 18px; flex-grow: 1">
        <span style="display: flex; flex-direction: column"><span style="font-size: 12px; color: #4F5E55">Saindo de</span><span style="font-weight: 700; font-size: 16px">{{from}}</span></span>
        <span style="display: flex; flex-direction: column"><span style="font-size: 12px; color: #4F5E55">Indo para</span><span style="font-weight: 700; font-size: 16px">{{to}}</span></span>
      </div>
      <button onClick="{{swap}}" aria-label="Inverter ida e volta" style="width: 44px; height: 44px; border-radius: 22px; border: none; cursor: pointer; background: #ECE4F5; display: flex; align-items: center; justify-content: center; flex-shrink: 0"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5B3A8C" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 4v16M3 8l4-4 4 4"></path><path d="M17 20V4M21 16l-4 4-4-4"></path></svg></button>
    </div>

    <div style="display: flex; flex-wrap: wrap; gap: 8px">
        <sc-for list="{{days}}" as="c" hint-placeholder-count="3">
          <button onClick="{{c.pick}}" aria-pressed="{{c.pressed}}" style="border: 1px solid {{c.border}}; cursor: pointer; height: 40px; padding: 0 14px; border-radius: 20px; font-size: 14px; font-weight: 700; background: {{c.bg}}; color: {{c.fg}}">{{c.label}}</button>
        </sc-for>
      </div>

    <span style="font-family: 'Bricolage Grotesque', system-ui, sans-serif; font-weight: 700; font-size: 18px">Caronas oferecidas</span>
    <sc-for list="{{rides}}" as="r" hint-placeholder-count="3">
      <div style="background: #FFFFFF; border-radius: 18px; padding: 12px 14px; display: flex; flex-direction: column; gap: 10px">
        <span style="display: flex; align-items: center; gap: 12px">
          <span style="width: 44px; height: 44px; border-radius: 22px; background: #ECE4F5; color: #5B3A8C; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 15px; flex-shrink: 0">{{r.ini}}</span>
          <span style="display: flex; flex-direction: column; flex-grow: 1; min-width: 0"><span style="font-weight: 700; font-size: 15px">{{r.name}}</span><span style="font-size: 13px; color: #4F5E55">{{r.when}}</span><span style="font-size: 12px; color: #4F5E55">{{r.meet}}</span></span>
        </span>
        <span style="display: flex; align-items: center; gap: 8px">
          <span style="font-size: 11px; font-weight: 700; letter-spacing: 0.4px; text-transform: uppercase; background: #DCEDE2; color: #17432F; padding: 4px 8px; border-radius: 6px">✓ Morador do Núcleo</span>
          <span style="flex-grow: 1"></span>
          <button onClick="{{r.pick}}" aria-pressed="{{r.pressed}}" style="border: none; cursor: pointer; height: 44px; padding: 0 14px; border-radius: 22px; font-weight: 700; font-size: 14px; background: {{r.bg}}; color: {{r.fg}}; flex-shrink: 0">{{r.label}}</button>
        </span>
      </div>
    </sc-for>
    <sc-if value="{{none}}" hint-placeholder-val="{{ false }}">
      <div style="background: #FFFFFF; border-radius: 18px; padding: 18px; text-align: center; font-size: 14px; color: #4F5E55">Nenhuma carona nesse dia ainda. Tente outro dia.</div>
    </sc-if>

    <sc-if value="{{showForm}}" hint-placeholder-val="{{ false }}">
      <div style="background: #FFFFFF; border-radius: 20px; padding: 16px; display: flex; flex-direction: column; gap: 14px; border: 2px solid #7A52B3">
        <span style="font-family: 'Bricolage Grotesque', system-ui, sans-serif; font-weight: 700; font-size: 17px">Pedir vaga com {{formDriver}}</span>
        <span style="font-size: 13px; color: #4F5E55">Seus dados vão para o motorista e para a portaria liberar sua entrada.</span>
        <span style="display: flex; flex-direction: column; gap: 6px"><label for="vnome" style="font-size: 13px; font-weight: 700">Nome completo</label><input id="vnome" type="text" placeholder="Como está no documento" style="height: 50px; border-radius: 14px; border: 1px solid #C9D2CB; padding: 0 16px; font-size: 16px; color: #13241B; background: #FFFFFF"></span>
        <span style="display: flex; flex-direction: column; gap: 6px"><label for="vcpf" style="font-size: 13px; font-weight: 700">CPF</label><input id="vcpf" type="text" placeholder="000.000.000-00" style="height: 50px; border-radius: 14px; border: 1px solid #C9D2CB; padding: 0 16px; font-size: 16px; color: #13241B; background: #FFFFFF"></span>
        <span style="display: flex; flex-direction: column; gap: 6px"><label for="vcel" style="font-size: 13px; font-weight: 700">Celular</label><input id="vcel" type="tel" placeholder="(94) 90000-0000" style="height: 50px; border-radius: 14px; border: 1px solid #C9D2CB; padding: 0 16px; font-size: 16px; color: #13241B; background: #FFFFFF"></span>
        <span style="font-size: 13px; font-weight: 700">Motivo da visita</span>
        <div style="display: flex; flex-wrap: wrap; gap: 8px">
        <sc-for list="{{reasons}}" as="c" hint-placeholder-count="3">
          <button onClick="{{c.pick}}" aria-pressed="{{c.pressed}}" style="border: 1px solid {{c.border}}; cursor: pointer; height: 40px; padding: 0 14px; border-radius: 20px; font-size: 14px; font-weight: 700; background: {{c.bg}}; color: {{c.fg}}">{{c.label}}</button>
        </sc-for>
      </div>
        <button onClick="{{toggleOk}}" aria-pressed="{{okAttr}}" style="border: none; cursor: pointer; text-align: left; background: #F4F6F1; border-radius: 14px; padding: 12px 14px; display: flex; align-items: center; gap: 12px; min-height: 56px">
          <span style="width: 26px; height: 26px; border-radius: 8px; border: 2px solid {{okBorder}}; background: {{okBg}}; display: flex; align-items: center; justify-content: center; flex-shrink: 0"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg></span>
          <span style="font-size: 13px; color: #13241B">Autorizo enviar meus dados para a portaria da Floresta Nacional de Carajás.</span>
        </button>
        <button onClick="{{send}}" style="border: none; cursor: pointer; height: 54px; border-radius: 27px; font-weight: 700; font-size: 15px; background: {{sendBg}}; color: {{sendFg}}">Enviar pedido</button>
      </div>
    </sc-if>

    <div style="background: #13241B; color: #FFFFFF; border-radius: 20px; padding: 16px; display: flex; flex-direction: column; gap: 8px">
      <span style="display: flex; align-items: center; gap: 8px; font-size: 12px; font-weight: 700; letter-spacing: 0.8px; text-transform: uppercase; color: #FFD27A"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFD27A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>Na portaria (PA-275)</span>
      <span style="font-size: 14px">Leve documento com foto e CPF. A autorização de visitante é feita na portaria de acesso, das 8h às 16h, todos os dias.</span>
    </div>
    <span style="font-size: 12px; color: #4F5E55">As caronas são oferecidas por moradores do Núcleo cadastrados no app. Compartilhe a viagem com alguém de confiança.</span>

  </div>
</div>
</x-dc>
<script type="text/x-dc" data-dc-script data-props='{"$preview":{"width":390,"height":844}}'>
class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { back: false, day: 'Hoje', open: null, sent: {}, reason: 'Visitar família', ok: false };
  }
  chips(labels, cur, pick) {
    return labels.map((l) => {
      const on = l === cur;
      return { label: l, pressed: on ? 'true' : 'false', bg: on ? '#7A52B3' : '#FFFFFF', fg: on ? '#FFFFFF' : '#13241B', border: on ? '#7A52B3' : '#C9D2CB', pick: () => pick(l) };
    });
  }
  renderVals() {
    const s = this.state;
    const a = 'Parauapebas';
    const b = 'Núcleo de Carajás';
    const all = [
      { id: 'v1', day: 'Hoje', toNucleo: true, name: 'Ana Souza', when: 'Sai às 15h · 3 vagas', meet: 'Encontro: rodoviária de Parauapebas' },
      { id: 'v2', day: 'Hoje', toNucleo: false, name: 'Pedro Lima', when: 'Sai às 17h30 · 1 vaga', meet: 'Encontro: portaria do Núcleo' },
      { id: 'v3', day: 'Amanhã', toNucleo: true, name: 'Juliana Costa', when: 'Sai às 8h · 2 vagas', meet: 'Encontro: centro de Parauapebas' },
      { id: 'v4', day: 'Sábado', toNucleo: true, name: 'Roberto Alves', when: 'Sai às 9h · 4 vagas', meet: 'Encontro: rodoviária de Parauapebas' },
      { id: 'v5', day: 'Sábado', toNucleo: false, name: 'Fernanda Dias', when: 'Sai às 18h · 2 vagas', meet: 'Encontro: portaria do Núcleo' }
    ];
    const toN = !s.back;
    const list = all.filter((r) => r.day === s.day && r.toNucleo === toN);
    const rides = list.map((r) => {
      const sent = !!s.sent[r.id];
      const open = s.open === r.id;
      return Object.assign({}, r, {
        ini: r.name.charAt(0),
        pressed: sent || open ? 'true' : 'false',
        label: sent ? 'Pedido enviado' : (open ? 'Preenchendo…' : 'Pedir vaga'),
        bg: sent ? '#ECE4F5' : '#7A52B3',
        fg: sent ? '#3A2560' : '#FFFFFF',
        pick: () => { if (!sent) this.setState({ open: open ? null : r.id, ok: false }); }
      });
    });
    const cur = all.filter((r) => r.id === s.open)[0];
    return {
      from: toN ? a : b,
      to: toN ? b : a,
      swap: () => this.setState({ back: !this.state.back, open: null }),
      days: this.chips(['Hoje', 'Amanhã', 'Sábado'], s.day, (d) => this.setState({ day: d, open: null })),
      rides: rides,
      none: rides.length === 0,
      showForm: !!cur && list.indexOf(cur) >= 0,
      formDriver: cur ? cur.name.split(' ')[0] : '',
      reasons: this.chips(['Visitar família', 'Trabalho', 'Passeio', 'Outro'], s.reason, (v) => this.setState({ reason: v })),
      okAttr: s.ok ? 'true' : 'false',
      okBg: s.ok ? '#7A52B3' : '#FFFFFF',
      okBorder: s.ok ? '#7A52B3' : '#9AA69F',
      toggleOk: () => this.setState({ ok: !this.state.ok }),
      sendBg: s.ok ? '#7A52B3' : '#C9D2CB',
      sendFg: s.ok ? '#FFFFFF' : '#4F5E55',
      send: () => {
        if (!this.state.ok || !this.state.open) return;
        const n = Object.assign({}, this.state.sent);
        n[this.state.open] = true;
        this.setState({ sent: n, open: null });
      }
    };
  }
}
<\/script>
</body>
</html>
`;export{e as default};
