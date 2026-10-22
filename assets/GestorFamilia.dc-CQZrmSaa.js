const e=`<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<title>Meu Carajás Super App – Minha casa</title>
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

  <div style="padding: 52px 20px 12px 20px; display: flex; align-items: center; gap: 12px; flex-shrink: 0">
    <a href="Main.dc.html" aria-label="Voltar para o início" style="width: 44px; height: 44px; border-radius: 22px; background: #FFFFFF; display: flex; align-items: center; justify-content: center; flex-shrink: 0"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#13241B" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"></path></svg></a>
    <span style="display: flex; flex-direction: column"><span style="font-family: 'Bricolage Grotesque', system-ui, sans-serif; font-weight: 800; font-size: 24px; letter-spacing: -0.4px">Minha casa</span><span style="font-size: 13px; color: #4F5E55">Rua Japurá, 12 · você é o gestor</span></span>
  </div>

  <div style="flex-grow: 1; min-height: 0; overflow-y: auto; padding: 4px 20px 28px 20px; display: flex; flex-direction: column; gap: 14px">

    <div style="background: #1E5B40; color: #FFFFFF; border-radius: 20px; padding: 16px 18px; display: flex; flex-direction: column; gap: 4px">
      <span style="font-size: 12px; font-weight: 700; letter-spacing: 0.8px; text-transform: uppercase; color: #CFE3D7">Gestor da casa</span>
      <span style="font-family: 'Bricolage Grotesque', system-ui, sans-serif; font-size: 18px; font-weight: 700">Lucca Ribeiro</span>
      <span style="font-size: 13px; color: #CFE3D7">Acesso completo: energia, desapego, carona e avisos urgentes.</span>
    </div>

    <div style="background: #13241B; color: #FFFFFF; border-radius: 20px; padding: 14px 16px; display: flex; align-items: center; gap: 12px">
      <span style="display: flex; flex-direction: column; flex-grow: 1"><span style="font-size: 12px; font-weight: 700; letter-spacing: 0.8px; text-transform: uppercase; color: #FFD27A">Código da família</span><span style="font-family: 'Bricolage Grotesque', system-ui, sans-serif; font-weight: 800; font-size: 26px; letter-spacing: 3px">CKS-4821</span><span style="font-size: 12px; color: #CFE3D7">Os jovens usam para criar a conta deles</span></span>
      <button aria-label="Compartilhar código da família" style="width: 48px; height: 48px; border-radius: 24px; border: none; cursor: pointer; background: #FFD27A; display: flex; align-items: center; justify-content: center; flex-shrink: 0"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#13241B" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4"></path></svg></button>
    </div>

    <span style="font-family: 'Bricolage Grotesque', system-ui, sans-serif; font-weight: 700; font-size: 18px">Jovens da casa</span>

    <sc-for list="{{jovens}}" as="m" hint-placeholder-count="1">
      <div style="background: #FFFFFF; border-radius: 20px; padding: 14px 16px; display: flex; align-items: center; gap: 12px">
        <span style="width: 44px; height: 44px; border-radius: 22px; background: #FBE6DA; color: #8E3714; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 16px; flex-shrink: 0">{{m.initial}}</span>
        <span style="display: flex; flex-direction: column; flex-grow: 1"><span style="font-weight: 700; font-size: 15px">{{m.name}}</span><span style="font-size: 13px; color: #4F5E55">{{m.sub}}</span></span>
        <span style="font-size: 11px; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase; background: #DCEDE2; color: #17432F; padding: 4px 8px; border-radius: 6px">Ativo</span>
      </div>
    </sc-for>

    <span style="font-family: 'Bricolage Grotesque', system-ui, sans-serif; font-weight: 700; font-size: 18px">Adultos da casa</span>

    <sc-for list="{{adultos}}" as="m" hint-placeholder-count="1">
      <div style="background: #FFFFFF; border-radius: 20px; padding: 14px 16px; display: flex; align-items: center; gap: 12px">
        <span style="width: 44px; height: 44px; border-radius: 22px; background: #DCEDE2; color: #17432F; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 16px; flex-shrink: 0">{{m.initial}}</span>
        <span style="display: flex; flex-direction: column; flex-grow: 1"><span style="font-weight: 700; font-size: 15px">{{m.name}}</span><span style="font-size: 13px; color: #4F5E55">{{m.sub}}</span></span>
        <span style="font-size: 11px; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase; background: #DCEDE2; color: #17432F; padding: 4px 8px; border-radius: 6px">Ativo</span>
      </div>
    </sc-for>

    <div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px">
      <button onClick="{{addJovem}}" aria-pressed="{{jovemAttr}}" style="border: 2px solid #B4471C; cursor: pointer; min-height: 52px; padding: 8px 10px; border-radius: 26px; font-weight: 700; font-size: 14px; background: {{jovemBg}}; color: {{jovemFg}}; display: flex; align-items: center; justify-content: center; gap: 6px"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"></path></svg>Morador jovem</button>
      <button onClick="{{addAdulto}}" aria-pressed="{{adultoAttr}}" style="border: 2px solid #1E5B40; cursor: pointer; min-height: 52px; padding: 8px 10px; border-radius: 26px; font-weight: 700; font-size: 14px; background: {{adultoBg}}; color: {{adultoFg}}; display: flex; align-items: center; justify-content: center; gap: 6px"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"></path></svg>Morador adulto</button>
    </div>

    <sc-if value="{{adding}}" hint-placeholder-val="{{ false }}">
      <div style="background: #FFFFFF; border-radius: 20px; padding: 16px; display: flex; flex-direction: column; gap: 12px; border: 2px solid {{formBorder}}">
        <span style="font-family: 'Bricolage Grotesque', system-ui, sans-serif; font-weight: 700; font-size: 17px">{{formTitle}}</span>
        <span style="display: flex; flex-direction: column; gap: 6px"><label for="nome" style="font-size: 13px; font-weight: 700">Nome</label><input id="nome" type="text" placeholder="Como a pessoa quer ser chamada" onInput="{{setName}}" style="height: 48px; border-radius: 12px; border: 1px solid #C9D2CB; padding: 0 14px; font-size: 15px; color: #13241B; background: #FFFFFF"></span>
        <span style="display: flex; flex-direction: column; gap: 6px"><label for="idade" style="font-size: 13px; font-weight: 700">Idade</label><input id="idade" type="text" placeholder="Ex.: 15" onInput="{{setAge}}" style="height: 48px; border-radius: 12px; border: 1px solid #C9D2CB; padding: 0 14px; font-size: 15px; color: #13241B; background: #FFFFFF"></span>
        <sc-if value="{{isAdulto}}" hint-placeholder-val="{{ false }}">
          <button onClick="{{toggleCoGestor}}" aria-pressed="{{coAttr}}" style="border: none; cursor: pointer; text-align: left; background: #F4F6F1; border-radius: 14px; padding: 12px 14px; display: flex; align-items: center; gap: 12px; min-height: 56px">
            <span style="display: flex; flex-direction: column; flex-grow: 1"><span style="font-weight: 700; font-size: 14px; color: #13241B">Também é gestor da casa</span><span style="font-size: 12px; color: #4F5E55">Pode liberar os jovens e ver energia</span></span>
            <span style="width: 46px; height: 28px; border-radius: 14px; background: {{coTrack}}; display: flex; align-items: center; justify-content: {{coKnob}}; padding: 3px; box-sizing: border-box; flex-shrink: 0"><span style="width: 22px; height: 22px; border-radius: 11px; background: #FFFFFF"></span></span>
          </button>
        </sc-if>
        <span style="font-size: 13px; color: #4F5E55">{{formHint}}</span>
        <button onClick="{{save}}" style="border: none; cursor: pointer; height: 52px; border-radius: 26px; font-weight: 700; font-size: 15px; background: {{formBorder}}; color: #FFFFFF">Salvar e enviar convite</button>
      </div>
    </sc-if>

    <sc-if value="{{hasRequest}}" hint-placeholder-val="{{ true }}">
      <div style="background: #F8EDC9; border-radius: 18px; padding: 14px 16px; display: flex; flex-direction: column; gap: 10px">
        <span style="font-size: 14px; color: #13241B"><span style="font-weight: 700">Davi</span> pediu para liberar a <span style="font-weight: 700">Carona</span>.</span>
        <span style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px">
          <button onClick="{{deny}}" style="border: 2px solid #C9D2CB; cursor: pointer; height: 44px; border-radius: 22px; font-weight: 700; font-size: 14px; background: #FFFFFF; color: #13241B">Agora não</button>
          <button onClick="{{allow}}" style="border: none; cursor: pointer; height: 44px; border-radius: 22px; font-weight: 700; font-size: 14px; background: #1E5B40; color: #FFFFFF">Liberar</button>
        </span>
      </div>
    </sc-if>

    <span style="font-family: 'Bricolage Grotesque', system-ui, sans-serif; font-weight: 700; font-size: 18px">O que os jovens podem usar</span>

    <div style="background: #FFFFFF; border-radius: 20px; padding: 4px 16px; display: flex; flex-direction: column">
      <sc-for list="{{perms}}" as="p" hint-placeholder-count="5">
        <button onClick="{{p.toggle}}" aria-pressed="{{p.pressed}}" style="border: none; cursor: pointer; text-align: left; background: transparent; padding: 12px 0; display: flex; align-items: center; gap: 12px; border-bottom: 1px solid #EEF1EC; min-height: 60px">
          <span style="display: flex; flex-direction: column; flex-grow: 1"><span style="font-weight: 700; font-size: 15px; color: #13241B">{{p.name}}</span><span style="font-size: 12px; color: #4F5E55">{{p.desc}}</span></span>
          <span style="width: 46px; height: 28px; border-radius: 14px; background: {{p.track}}; display: flex; align-items: center; justify-content: {{p.knob}}; padding: 3px; box-sizing: border-box; flex-shrink: 0"><span style="width: 22px; height: 22px; border-radius: 11px; background: #FFFFFF"></span></span>
        </button>
      </sc-for>
    </div>

    <span style="font-size: 12px; color: #4F5E55">Energia e avisos urgentes ficam sempre com o gestor. Os jovens veem só os avisos informativos e de eventos.</span>


  </div>
</div>
</x-dc>
<script type="text/x-dc" data-dc-script data-props='{"$preview":{"width":390,"height":844}}'>
class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { on: { eventos: true, oportunidades: true, trilhas: true, carona: false, desapego: false }, request: true, adding: null, name: '', age: '', co: false, jovens: [{ name: 'Davi Ribeiro', sub: '15 anos · perfil jovem' }], adultos: [{ name: 'Marina Ribeiro', sub: '44 anos · também gestora' }] };
  }
  renderVals() {
    const s = this.state;
    const list = [
      { id: 'eventos', name: 'Eventos', desc: 'Ver a agenda e confirmar presença' },
      { id: 'oportunidades', name: 'Oportunidades', desc: 'Cursos, estágios e vestibular' },
      { id: 'trilhas', name: 'Trilhas em grupo', desc: 'Só caminhadas organizadas' },
      { id: 'carona', name: 'Carona', desc: 'Pedir vaga nas caronas dos vizinhos' },
      { id: 'desapego', name: 'Desapego', desc: 'Anunciar e conversar com compradores' }
    ];
    const flip = (id, v) => {
      const n = Object.assign({}, this.state.on);
      n[id] = v === undefined ? !n[id] : v;
      this.setState({ on: n });
    };
    const mem = (m) => Object.assign({ initial: (m.name || '?').replace('[', '').charAt(0).toUpperCase() }, m);
    const isJ = s.adding === 'jovem';
    const isA = s.adding === 'adulto';
    const save = () => {
      const name = this.state.name || (isJ ? 'Novo jovem' : 'Novo adulto');
      const age = this.state.age || '?';
      if (isJ) this.setState({ jovens: this.state.jovens.concat([{ name: name, sub: age + ' anos · perfil jovem' }]), adding: null, name: '', age: '' });
      else this.setState({ adultos: this.state.adultos.concat([{ name: name, sub: age + ' anos · ' + (this.state.co ? 'também gestor' : 'perfil adulto') }]), adding: null, name: '', age: '', co: false });
    };
    return {
      jovens: s.jovens.map(mem),
      adultos: s.adultos.map(mem),
      adding: !!s.adding,
      isAdulto: isA,
      jovemAttr: isJ ? 'true' : 'false',
      adultoAttr: isA ? 'true' : 'false',
      jovemBg: isJ ? '#B4471C' : '#FFFFFF',
      jovemFg: isJ ? '#FFFFFF' : '#B4471C',
      adultoBg: isA ? '#1E5B40' : '#FFFFFF',
      adultoFg: isA ? '#FFFFFF' : '#1E5B40',
      addJovem: () => this.setState({ adding: isJ ? null : 'jovem', name: '', age: '' }),
      addAdulto: () => this.setState({ adding: isA ? null : 'adulto', name: '', age: '', co: false }),
      formTitle: isJ ? 'Novo morador jovem' : 'Novo morador adulto',
      formBorder: isJ ? '#B4471C' : '#1E5B40',
      formHint: isJ ? 'O jovem entra com o perfil jovem e usa só o que você liberar.' : 'O adulto entra com o perfil completo, sem energia e permissões, a não ser que seja gestor.',
      setName: (e) => this.setState({ name: e.target.value }),
      setAge: (e) => this.setState({ age: e.target.value }),
      coAttr: s.co ? 'true' : 'false',
      coTrack: s.co ? '#1E5B40' : '#9AA69F',
      coKnob: s.co ? 'flex-end' : 'flex-start',
      toggleCoGestor: () => this.setState({ co: !this.state.co }),
      save: save,
      perms: list.map((p) => ({
        name: p.name, desc: p.desc,
        pressed: s.on[p.id] ? 'true' : 'false',
        track: s.on[p.id] ? '#1E5B40' : '#9AA69F',
        knob: s.on[p.id] ? 'flex-end' : 'flex-start',
        toggle: () => flip(p.id)
      })),
      hasRequest: s.request,
      allow: () => { flip('carona', true); this.setState({ request: false }); },
      deny: () => this.setState({ request: false })
    };
  }
}
<\/script>
</body>
</html>
`;export{e as default};
