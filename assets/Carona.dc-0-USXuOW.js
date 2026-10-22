const e=`<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<title>Meu Carajás Super App – Carona</title>
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
</style>
</helmet>
<div style="width: 390px; height: 844px; box-sizing: border-box; overflow: hidden; background: #F4F6F1; font-family: 'DM Sans', system-ui, sans-serif; color: #13241B; display: flex; flex-direction: column">

  <div style="padding: 52px 20px 12px 20px; display: flex; align-items: center; gap: 12px; flex-shrink: 0">
    <a href="Main.dc.html" aria-label="Voltar para o início" style="width: 44px; height: 44px; border-radius: 22px; background: #FFFFFF; display: flex; align-items: center; justify-content: center; flex-shrink: 0"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#13241B" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"></path></svg></a>
    <span style="display: flex; flex-direction: column"><span style="font-family: 'Bricolage Grotesque', system-ui, sans-serif; font-weight: 800; font-size: 24px; letter-spacing: -0.4px">Carona</span><span style="font-size: 13px; color: #4F5E55">Divida o caminho com os vizinhos</span></span>
  </div>

  <div style="flex-grow: 1; min-height: 0; overflow-y: auto; padding: 4px 20px 28px 20px; display: flex; flex-direction: column; gap: 14px">

    <div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); background: #E2E7E0; border-radius: 22px; padding: 4px; gap: 4px">
      <sc-for list="{{modes}}" as="m" hint-placeholder-count="2">
        <button onClick="{{m.pick}}" aria-pressed="{{m.pressed}}" style="border: none; cursor: pointer; height: 40px; border-radius: 18px; font-weight: 700; font-size: 14px; background: {{m.bg}}; color: #13241B">{{m.label}}</button>
      </sc-for>
    </div>

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

    <div style="background: #DCEDE2; border-radius: 20px; padding: 14px 16px; display: flex; align-items: center; gap: 12px">
      <span style="width: 44px; height: 44px; border-radius: 22px; background: #1E5B40; display: flex; align-items: center; justify-content: center; flex-shrink: 0"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg></span>
      <span style="display: flex; flex-direction: column; flex-grow: 1; min-width: 0"><span style="font-size: 13px; color: #17432F">Você deixou de emitir</span><span style="font-family: 'Bricolage Grotesque', system-ui, sans-serif; font-weight: 800; font-size: 24px; color: #17432F; letter-spacing: -0.3px">{{co2}} de CO₂</span><span style="font-size: 12px; color: #17432F">Dividindo o carro com os vizinhos. Bom para o meio ambiente.</span></span>
    </div>

    <sc-if value="{{isFind}}" hint-placeholder-val="{{ true }}">
      <div style="display: flex; flex-direction: column; gap: 10px">
        <span style="font-weight: 700; font-size: 16px">Caronas oferecidas</span>
        <sc-for list="{{rides}}" as="r" hint-placeholder-count="3">
          <div style="background: #FFFFFF; border-radius: 18px; padding: 12px 14px; display: flex; align-items: center; gap: 12px">
            <span style="width: 44px; height: 44px; border-radius: 22px; background: #ECE4F5; color: #5B3A8C; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 15px; flex-shrink: 0">{{r.initial}}</span>
            <span style="display: flex; flex-direction: column; flex-grow: 1; min-width: 0"><span style="font-weight: 700; font-size: 15px">{{r.name}}</span><span style="font-size: 13px; color: #4F5E55">{{r.when}} · {{r.seats}}</span></span>
            <button onClick="{{r.toggle}}" aria-pressed="{{r.pressed}}" style="border: none; cursor: pointer; height: 44px; padding: 0 14px; border-radius: 22px; font-weight: 700; font-size: 14px; background: {{r.btnBg}}; color: {{r.btnFg}}; flex-shrink: 0">{{r.btnLabel}}</button>
          </div>
        </sc-for>
      </div>
    </sc-if>

    <sc-if value="{{isOffer}}" hint-placeholder-val="{{ false }}">
      <div style="background: #FFFFFF; border-radius: 20px; padding: 16px; display: flex; flex-direction: column; gap: 14px">
        <span style="display: flex; flex-direction: column; gap: 6px">
          <label for="quando" style="font-size: 13px; font-weight: 700">Dia e horário de saída</label>
          <input id="quando" type="text" placeholder="Ex.: sábado, 9h" style="height: 48px; border-radius: 12px; border: 1px solid #C9D2CB; padding: 0 14px; font-size: 15px; color: #13241B; background: #FFFFFF">
        </span>
        <span style="display: flex; flex-direction: column; gap: 6px">
          <label for="ponto" style="font-size: 13px; font-weight: 700">Ponto de encontro</label>
          <input id="ponto" type="text" placeholder="Ex.: em frente à portaria" style="height: 48px; border-radius: 12px; border: 1px solid #C9D2CB; padding: 0 14px; font-size: 15px; color: #13241B; background: #FFFFFF">
        </span>
        <span style="display: flex; align-items: center; justify-content: space-between">
          <span style="font-size: 13px; font-weight: 700">Vagas no carro</span>
          <span style="display: flex; align-items: center; gap: 14px">
            <button onClick="{{less}}" aria-label="Menos uma vaga" style="width: 44px; height: 44px; border-radius: 22px; border: none; cursor: pointer; background: #ECE4F5; color: #5B3A8C; font-size: 22px; font-weight: 700">−</button>
            <span style="font-family: 'Bricolage Grotesque', system-ui, sans-serif; font-weight: 800; font-size: 22px; min-width: 16px; text-align: center">{{seats}}</span>
            <button onClick="{{more}}" aria-label="Mais uma vaga" style="width: 44px; height: 44px; border-radius: 22px; border: none; cursor: pointer; background: #ECE4F5; color: #5B3A8C; font-size: 22px; font-weight: 700">+</button>
          </span>
        </span>
        <button onClick="{{publish}}" style="border: none; cursor: pointer; height: 54px; border-radius: 27px; font-weight: 700; font-size: 16px; background: {{pubBg}}; color: {{pubFg}}">{{pubLabel}}</button>
      </div>
    </sc-if>

  </div>
</div>
</x-dc>
<script type="text/x-dc" data-dc-script data-props='{"$preview":{"width":390,"height":844}}'>
class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { mode: 'find', back: false, asked: {}, seats: 3, published: false };
  }
  renderVals() {
    const s = this.state;
    const a = 'Núcleo de Carajás';
    const b = 'Parauapebas';
    const all = [
      { id: 'r1', name: 'Ana Júlia Santos', initial: 'A', when: 'Hoje, 7h30', seats: '3 vagas' },
      { id: 'r2', name: 'Roberto Alves', initial: 'R', when: 'Hoje, 9h', seats: '4 vagas' },
      { id: 'r3', name: 'Pedro Lima', initial: 'P', when: 'Hoje, 13h', seats: '1 vaga' },
      { id: 'r4', name: 'Fernanda Dias', initial: 'F', when: 'Hoje, 17h · volta às 18h', seats: '2 vagas' },
      { id: 'r5', name: 'Juliana Costa', initial: 'J', when: 'Amanhã, 8h', seats: '2 vagas' },
      { id: 'r6', name: 'Marcos Pereira', initial: 'M', when: 'Amanhã, 12h', seats: '3 vagas' },
      { id: 'r7', name: 'Carla Mendes', initial: 'C', when: 'Sábado, 8h · feira de Parauapebas', seats: '2 vagas' },
      { id: 'r8', name: 'Thiago Rocha', initial: 'T', when: 'Sábado, 14h', seats: '3 vagas' },
      { id: 'r9', name: 'Lívia Martins', initial: 'L', when: 'Domingo, 9h', seats: '1 vaga' },
      { id: 'r10', name: 'Gustavo Pires', initial: 'G', when: 'Segunda, 6h45 · horário de trabalho', seats: '2 vagas' }
    ];
    const rides = all.map((r) => {
      const on = !!s.asked[r.id];
      return Object.assign({}, r, {
        pressed: on ? 'true' : 'false',
        btnLabel: on ? 'Pedido enviado' : 'Pedir vaga',
        btnBg: on ? '#ECE4F5' : '#7A52B3',
        btnFg: on ? '#3A2560' : '#FFFFFF',
        toggle: () => {
          const next = Object.assign({}, this.state.asked);
          next[r.id] = !next[r.id];
          this.setState({ asked: next });
        }
      });
    });
    const modes = [['find', 'Procurar carona'], ['offer', 'Oferecer carona']].map((m) => ({
      label: m[1],
      pressed: s.mode === m[0] ? 'true' : 'false',
      bg: s.mode === m[0] ? '#FFFFFF' : 'transparent',
      pick: () => this.setState({ mode: m[0] })
    }));
    return {
      co2: '32 kg',
      modes: modes,
      from: s.back ? b : a,
      to: s.back ? a : b,
      swap: () => this.setState({ back: !this.state.back }),
      isFind: s.mode === 'find',
      isOffer: s.mode === 'offer',
      rides: rides,
      seats: s.seats,
      less: () => this.setState({ seats: Math.max(1, this.state.seats - 1), published: false }),
      more: () => this.setState({ seats: Math.min(6, this.state.seats + 1), published: false }),
      pubLabel: s.published ? 'Carona publicada!' : 'Publicar carona',
      pubBg: s.published ? '#ECE4F5' : '#7A52B3',
      pubFg: s.published ? '#3A2560' : '#FFFFFF',
      publish: () => this.setState({ published: true })
    };
  }
}
<\/script>
</body>
</html>
`;export{e as default};
