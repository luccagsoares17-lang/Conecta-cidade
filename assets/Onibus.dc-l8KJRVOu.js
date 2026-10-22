const n=`<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<title>Meu Carajás Super App – Ônibus</title>
<script src="./support.js"><\/script>
</head>
<body>
<x-dc>
<helmet>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500..800&amp;family=DM+Sans:opsz,wght@9..40,400..700&amp;display=swap">
<style>
body{margin:0}
a{color:#1E5B40}a:hover{color:#17432F}
button{font-family:inherit}
.sc > *{flex-shrink:0}
</style>
</helmet>
<div style="width: 390px; height: 844px; box-sizing: border-box; overflow: hidden; background: #F4F6F1; font-family: 'DM Sans', system-ui, sans-serif; color: #13241B; display: flex; flex-direction: column">

  <div style="padding: 52px 20px 12px 20px; display: flex; align-items: center; gap: 12px; flex-shrink: 0">
    <a href="Main.dc.html" aria-label="Voltar para o início" style="width: 44px; height: 44px; border-radius: 22px; background: #FFFFFF; display: flex; align-items: center; justify-content: center; flex-shrink: 0"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#13241B" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"></path></svg></a>
    <span style="display: flex; flex-direction: column; flex-grow: 1"><span style="font-family: 'Bricolage Grotesque', system-ui, sans-serif; font-weight: 800; font-size: 24px; letter-spacing: -0.4px">Ônibus</span><span style="font-size: 13px; color: #4F5E55">Van Carajás e Parauapebas</span></span>
    <span style="font-size: 12px; font-weight: 800; background: #13241B; color: #FFD27A; padding: 7px 10px; border-radius: 10px; flex-shrink: 0">R$ 10,00</span>
  </div>

  <div class="sc" style="flex-grow: 1; min-height: 0; overflow-y: auto; padding: 4px 20px 28px 20px; display: flex; flex-direction: column; gap: 14px">

    <div style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); background: #E2E7E0; border-radius: 22px; padding: 4px; gap: 4px">
      <sc-for list="{{dias}}" as="d" hint-placeholder-count="3">
        <button onClick="{{d.pick}}" aria-pressed="{{d.pressed}}" style="border: none; cursor: pointer; min-height: 44px; padding: 4px 6px; border-radius: 18px; font-weight: 700; font-size: 13px; line-height: 1.15; background: {{d.bg}}; color: #13241B">{{d.label}}</button>
      </sc-for>
    </div>

    <div style="display: flex; flex-direction: column; gap: 8px">
      <sc-for list="{{sentidos}}" as="t" hint-placeholder-count="2">
        <button onClick="{{t.pick}}" aria-pressed="{{t.pressed}}" style="border: 2px solid {{t.border}}; cursor: pointer; text-align: left; background: {{t.bg}}; border-radius: 18px; padding: 12px 14px; display: flex; align-items: center; gap: 12px; color: #13241B">
          <span style="width: 40px; height: 40px; border-radius: 20px; background: {{t.iconBg}}; display: flex; align-items: center; justify-content: center; flex-shrink: 0"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="{{t.iconFg}}" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="transform: {{t.rot}}"><path d="M12 19V5M5 12l7-7 7 7"></path></svg></span>
          <span style="display: flex; flex-direction: column; flex-grow: 1; min-width: 0"><span style="font-weight: 700; font-size: 16px">{{t.label}}</span><span style="font-size: 13px; color: #4F5E55">{{t.rota}}</span></span>
          <span style="font-size: 12px; font-weight: 700; color: #4F5E55; flex-shrink: 0">{{t.qtd}}</span>
        </button>
      </sc-for>
    </div>

    <sc-if value="{{temProxima}}" hint-placeholder-val="{{ true }}">
      <div style="background: #24578C; color: #FFFFFF; border-radius: 20px; padding: 14px 16px; display: flex; align-items: center; gap: 12px">
        <span style="width: 44px; height: 44px; border-radius: 22px; background: #FFFFFF; display: flex; align-items: center; justify-content: center; flex-shrink: 0"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#24578C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="3" width="16" height="15" rx="3"></rect><path d="M4 11h16M8 21v-3M16 21v-3"></path><circle cx="8" cy="14.5" r="1"></circle><circle cx="16" cy="14.5" r="1"></circle></svg></span>
        <span style="display: flex; flex-direction: column; flex-grow: 1; min-width: 0"><span style="font-size: 13px; color: #DFE9F5">{{proximaTitulo}}</span><span style="font-family: 'Bricolage Grotesque', system-ui, sans-serif; font-weight: 800; font-size: 26px; letter-spacing: -0.4px">{{proxima}}</span><span style="font-size: 12px; color: #DFE9F5">{{proximaDepois}}</span></span>
      </div>
    </sc-if>
    <sc-if value="{{semMais}}" hint-placeholder-val="{{ false }}">
      <div style="background: #FFFFFF; border-radius: 20px; padding: 14px 16px; font-size: 14px; color: #4F5E55">Hoje não tem mais saída neste sentido. Os horários de amanhã estão em “{{amanha}}”.</div>
    </sc-if>

    <div style="background: #FFFFFF; border-radius: 20px; padding: 14px 16px; display: flex; flex-direction: column; gap: 12px">
      <span style="display: flex; align-items: center; justify-content: space-between; gap: 10px"><span style="font-weight: 700; font-size: 16px">Horários de saída</span><span style="font-size: 12px; color: #4F5E55">{{diaLabel}}</span></span>
      <div style="display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 8px">
        <sc-for list="{{horarios}}" as="h" hint-placeholder-count="12">
          <span aria-label="{{h.aria}}" style="height: 42px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 15px; background: {{h.bg}}; color: {{h.fg}}; text-decoration: {{h.risco}}">{{h.hora}}</span>
        </sc-for>
      </div>
      <sc-if value="{{hojeAqui}}" hint-placeholder-val="{{ true }}">
        <span style="display: flex; flex-wrap: wrap; gap: 12px; font-size: 12px; color: #4F5E55">
          <span style="display: flex; align-items: center; gap: 6px"><span style="width: 12px; height: 12px; border-radius: 4px; background: #24578C"></span>Próxima</span>
          <span style="display: flex; align-items: center; gap: 6px"><span style="width: 12px; height: 12px; border-radius: 4px; background: #E2E7E0"></span>Já saiu</span>
        </span>
      </sc-if>
    </div>

    <span style="font-size: 12px; color: #4F5E55">Passagem: R$ 10,00. Nos feriados, vale o horário de sábado. Horários do quadro da van Carajás/Parauapebas.</span>

  </div>
</div>
</x-dc>
<script type="text/x-dc" data-dc-script data-props='{"$preview":{"width":390,"height":844}}'>
class Component extends DCLogic {
  constructor(props) {
    super(props);
    const d = new Date().getDay();
    this.state = { dia: d === 0 ? 'dom' : d === 6 ? 'sab' : 'util', sentido: 'sobe' };
  }
  renderVals() {
    const s = this.state;
    const H = {
      util: {
        sobe: ['06:00', '06:30', '06:50', '07:10', '07:30', '07:50', '08:20', '09:00', '10:00', '11:00', '12:00', '13:00', '14:20', '15:00', '15:40', '16:20', '17:00', '18:00'],
        desce: ['06:50', '07:30', '08:00', '08:40', '09:20', '10:00', '10:40', '11:20', '12:00', '12:40', '13:40', '14:40', '15:40', '16:20', '17:00', '17:40', '18:00', '18:30']
      },
      sab: {
        sobe: ['07:00', '08:00', '10:00', '11:30', '13:00', '14:30', '16:00', '17:00'],
        desce: ['08:00', '09:00', '11:00', '12:30', '14:00', '16:00', '17:00', '18:00']
      },
      dom: {
        sobe: ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'],
        desce: ['11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00']
      }
    };
    const DIAS = [['util', 'Segunda a sexta'], ['sab', 'Sábados e feriados'], ['dom', 'Domingos']];
    const agora = new Date();
    const hoje = agora.getDay() === 0 ? 'dom' : agora.getDay() === 6 ? 'sab' : 'util';
    const amanhaDia = agora.getDay() === 6 ? 'dom' : agora.getDay() === 5 ? 'sab' : 'util';
    const min = agora.getHours() * 60 + agora.getMinutes();
    const emMin = (h) => Number(h.slice(0, 2)) * 60 + Number(h.slice(3));
    const lista = H[s.dia][s.sentido];
    const hojeAqui = s.dia === hoje;
    const iProx = hojeAqui ? lista.findIndex((h) => emMin(h) >= min) : -1;
    const proxima = iProx >= 0 ? lista[iProx] : '';
    const falta = iProx >= 0 ? emMin(proxima) - min : 0;
    const faltaTxt = falta < 1 ? 'Saindo agora' : falta < 60 ? 'Sai em ' + falta + ' min' : 'Sai em ' + Math.floor(falta / 60) + ' h' + (falta % 60 ? ' e ' + (falta % 60) + ' min' : '');
    const depois = iProx >= 0 ? lista.slice(iProx + 1, iProx + 3) : [];
    return {
      dias: DIAS.map((d) => ({
        label: d[1], pressed: s.dia === d[0] ? 'true' : 'false', bg: s.dia === d[0] ? '#FFFFFF' : 'transparent',
        pick: () => this.setState({ dia: d[0] })
      })),
      sentidos: [['sobe', 'Subindo para Carajás', 'Parauapebas → Núcleo de Carajás', 'none'], ['desce', 'Descendo para Parauapebas', 'Núcleo de Carajás → Parauapebas', 'rotate(180deg)']].map((t) => {
        const on = s.sentido === t[0];
        return {
          label: t[1], rota: t[2], rot: t[3], qtd: H[s.dia][t[0]].length + ' saídas',
          pressed: on ? 'true' : 'false', bg: on ? '#FFFFFF' : '#F4F6F1', border: on ? '#24578C' : '#E2E7E0',
          iconBg: on ? '#24578C' : '#DFE9F5', iconFg: on ? '#FFFFFF' : '#24578C',
          pick: () => this.setState({ sentido: t[0] })
        };
      }),
      temProxima: iProx >= 0,
      proxima: proxima,
      proximaTitulo: 'Próxima saída hoje · ' + faltaTxt,
      proximaDepois: depois.length ? 'Depois: ' + depois.join(' e ') : 'É a última saída de hoje',
      semMais: hojeAqui && iProx < 0,
      amanha: DIAS.filter((d) => d[0] === amanhaDia)[0][1],
      hojeAqui: hojeAqui,
      diaLabel: DIAS.filter((d) => d[0] === s.dia)[0][1],
      horarios: lista.map((h, i) => {
        const passou = hojeAqui && emMin(h) < min;
        const prox = i === iProx;
        return {
          hora: h,
          aria: h + (prox ? ', próxima saída' : passou ? ', já saiu' : ''),
          bg: prox ? '#24578C' : passou ? '#E2E7E0' : '#DFE9F5',
          fg: prox ? '#FFFFFF' : passou ? '#7D8A82' : '#13241B',
          risco: passou ? 'line-through' : 'none'
        };
      })
    };
  }
}
<\/script>
</body>
</html>
`;export{n as default};
