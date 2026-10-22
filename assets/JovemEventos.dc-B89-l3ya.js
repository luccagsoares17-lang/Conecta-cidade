const e=`<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<title>Meu Carajás Super App Jovem – Eventos</title>
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
</style>
</helmet>
<div style="width: 390px; height: 844px; box-sizing: border-box; overflow: hidden; background: #F4F6F1; font-family: 'DM Sans', system-ui, sans-serif; color: #13241B; display: flex; flex-direction: column">

  <div style="padding: 52px 20px 8px 20px; display: flex; align-items: center; gap: 12px; flex-shrink: 0">
    <a href="JovemInicio.dc.html" aria-label="Voltar para o início" style="width: 44px; height: 44px; border-radius: 22px; background: #FFFFFF; display: flex; align-items: center; justify-content: center; flex-shrink: 0"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#13241B" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"></path></svg></a>
    <span style="display: flex; flex-direction: column"><span style="font-family: 'Bricolage Grotesque', system-ui, sans-serif; font-weight: 800; font-size: 24px; letter-spacing: -0.4px">Eventos</span><span style="font-size: 13px; color: #4F5E55">Feito pela galera, para a galera</span></span>
    <span style="font-size: 11px; font-weight: 700; letter-spacing: 0.8px; text-transform: uppercase; background: #FBE6DA; color: #8E3714; padding: 6px 10px; border-radius: 8px; margin-left: auto">Jovem</span>
  </div>

  <div style="display: flex; gap: 8px; overflow-x: auto; padding: 8px 20px 12px 20px; flex-shrink: 0">
    <sc-for list="{{chips}}" as="c" hint-placeholder-count="6">
      <button onClick="{{c.pick}}" aria-pressed="{{c.pressed}}" style="flex-shrink: 0; border: 1px solid {{c.border}}; cursor: pointer; height: 40px; padding: 0 16px; border-radius: 20px; font-size: 14px; font-weight: 700; background: {{c.bg}}; color: {{c.fg}}">{{c.label}}</button>
    </sc-for>
  </div>

  <div style="flex-grow: 1; min-height: 0; overflow-y: auto; padding: 0 20px 28px 20px; display: flex; flex-direction: column; gap: 12px">
    <sc-for list="{{events}}" as="e" hint-placeholder-count="4">
      <div style="background: #FFFFFF; border-radius: 20px; padding: 14px; display: flex; flex-direction: column; gap: 12px">
        <div style="display: flex; gap: 12px; align-items: center">
          <span style="width: 56px; height: 56px; border-radius: 14px; background: {{e.dateBg}}; color: #FFFFFF; display: flex; flex-direction: column; align-items: center; justify-content: center; flex-shrink: 0"><span style="font-size: 11px; font-weight: 700; color: #FFD27A">{{e.mon}}</span><span style="font-family: 'Bricolage Grotesque', system-ui, sans-serif; font-weight: 800; font-size: 18px">{{e.day}}</span></span>
          <span style="display: flex; flex-direction: column; gap: 2px; min-width: 0">
            <span style="font-weight: 700; font-size: 16px">{{e.name}}</span>
            <span style="font-size: 13px; color: #4F5E55">{{e.org}}</span>
            <span style="font-size: 13px; color: #4F5E55">{{e.when}}</span>
          </span>
        </div>
        <div style="display: flex; align-items: center; gap: 8px">
          <span style="font-size: 11px; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase; background: #F4F6F1; color: #4F5E55; padding: 4px 8px; border-radius: 6px">{{e.tagLabel}}</span>
          <sc-if value="{{e.solid}}" hint-placeholder-val="{{ false }}"><span style="font-size: 11px; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase; background: #FBE6DA; color: #8E3714; padding: 4px 8px; border-radius: 6px">Ingresso: 1 kg de alimento</span></sc-if>
          <span style="flex-grow: 1"></span>
          <button onClick="{{e.toggle}}" aria-pressed="{{e.pressed}}" style="border: none; cursor: pointer; height: 44px; padding: 0 16px; border-radius: 22px; font-weight: 700; font-size: 14px; background: {{e.btnBg}}; color: {{e.btnFg}}; flex-shrink: 0">{{e.btnLabel}}</button>
        </div>
      </div>
    </sc-for>
  </div>

</div>
</x-dc>
<script type="text/x-dc" data-dc-script data-props='{"$preview":{"width":390,"height":844}}'>
class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { tag: 'Todos', going: {} };
  }
  renderVals() {
    const s = this.state;
    const all = [
      { id: 'cine', mon: 'NOV', day: '7', when: 'Sábado, 19h · Clube do Núcleo', name: 'CineFases', org: 'Comitê Jovem Entre Fases', tags: ['Cinema'], tagLabel: 'Cinema', solid: true, dateBg: '#13241B' },
      { id: 'pizza', mon: 'NOV', day: '13', when: 'Sexta, 19h30 · Salão de festas', name: 'Noite de Pizza', org: 'Comitê Jovem Entre Fases', tags: ['Culinária'], tagLabel: 'Culinária', solid: false, dateBg: '#B4471C' },
      { id: 'olimp', mon: 'NOV', day: '21', when: 'Sábado, 8h · Ginásio poliesportivo', name: 'Olimpíadas Entre Fases', org: 'Comitê Jovem Entre Fases', tags: ['Vôlei', 'Futebol'], tagLabel: 'Esportes', solid: true, dateBg: '#1E5B40' },
      { id: 'game', mon: 'DEZ', day: '5', when: 'Sábado, 14h · Biblioteca do Núcleo', name: 'Torneio de videogame', org: 'Grêmio estudantil', tags: ['Videogame'], tagLabel: 'Videogame', solid: false, dateBg: '#5B3A8C' },
      { id: 'boas', mon: 'NOV', day: '28', when: 'Sábado, 17h · Praça central', name: 'Encontro de boas-vindas', org: 'Administração do Núcleo · Oficial', tags: [], tagLabel: 'Novos moradores', solid: false, dateBg: '#24578C' }
    ];
    const events = all.filter((e) => s.tag === 'Todos' || e.tags.indexOf(s.tag) >= 0).map((e) => {
      const g = !!s.going[e.id];
      return Object.assign({}, e, {
        pressed: g ? 'true' : 'false',
        btnLabel: g ? 'Confirmado' : 'Eu vou',
        btnBg: g ? '#DCEDE2' : '#B4471C',
        btnFg: g ? '#17432F' : '#FFFFFF',
        toggle: () => {
          const next = Object.assign({}, this.state.going);
          next[e.id] = !next[e.id];
          this.setState({ going: next });
        }
      });
    });
    const chips = ['Todos', 'Cinema', 'Culinária', 'Videogame', 'Vôlei', 'Futebol'].map((label) => {
      const on = label === s.tag;
      return {
        label: label,
        pressed: on ? 'true' : 'false',
        bg: on ? '#13241B' : '#FFFFFF',
        fg: on ? '#FFFFFF' : '#13241B',
        border: on ? '#13241B' : '#D5DDD6',
        pick: () => this.setState({ tag: label })
      };
    });
    return { chips: chips, events: events };
  }
}
<\/script>
</body>
</html>
`;export{e as default};
