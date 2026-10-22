const e=`<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<title>Meu Carajás Super App Jovem – Avisos</title>
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
<div style="width: 390px; height: 844px; box-sizing: border-box; overflow: hidden; position: relative; background: #F4F6F1; font-family: 'DM Sans', system-ui, sans-serif; color: #13241B; display: flex; flex-direction: column">

  <div style="padding: 52px 20px 8px 20px; display: flex; align-items: center; gap: 12px; flex-shrink: 0">
    <a href="JovemInicio.dc.html" aria-label="Voltar para o início" style="width: 44px; height: 44px; border-radius: 22px; background: #FFFFFF; display: flex; align-items: center; justify-content: center; flex-shrink: 0"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#13241B" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"></path></svg></a>
    <span style="display: flex; flex-direction: column"><span style="font-family: 'Bricolage Grotesque', system-ui, sans-serif; font-weight: 800; font-size: 24px; letter-spacing: -0.4px">Avisos</span><span style="font-size: 13px; color: #4F5E55">O que é bom você saber</span></span>
    <span style="font-size: 11px; font-weight: 700; letter-spacing: 0.8px; text-transform: uppercase; background: #FBE6DA; color: #8E3714; padding: 6px 10px; border-radius: 8px; margin-left: auto">Jovem</span>
  </div>

  <div style="display: flex; gap: 8px; overflow-x: auto; padding: 8px 20px 6px 20px; flex-shrink: 0">
    <sc-for list="{{chips}}" as="c" hint-placeholder-count="4">
      <button onClick="{{c.pick}}" aria-pressed="{{c.pressed}}" style="flex-shrink: 0; border: 1px solid {{c.border}}; cursor: pointer; height: 40px; padding: 0 16px; border-radius: 20px; font-size: 14px; font-weight: 700; background: {{c.bg}}; color: {{c.fg}}">{{c.label}}</button>
    </sc-for>
  </div>
  <div style="display: flex; gap: 8px; padding: 4px 20px 12px 20px; flex-shrink: 0">
    <sc-for list="{{formats}}" as="f" hint-placeholder-count="3">
      <button onClick="{{f.pick}}" aria-pressed="{{f.pressed}}" style="flex-shrink: 0; border: none; cursor: pointer; height: 36px; padding: 0 12px; border-radius: 18px; font-size: 13px; font-weight: 700; background: {{f.bg}}; color: {{f.fg}}; display: flex; align-items: center; gap: 6px">{{f.label}}</button>
    </sc-for>
  </div>

  <div class="sc" style="flex-grow: 1; min-height: 0; overflow-y: auto; padding: 0 20px 28px 20px; display: flex; flex-direction: column; gap: 10px">
    <div style="background: #DFE9F5; border-radius: 16px; padding: 10px 14px; font-size: 13px; color: #13241B"><span style="font-weight: 700">Alertas por SMS:</span> os avisos importantes e urgentes também chegam por SMS no celular cadastrado.</div>
    <sc-for list="{{avisos}}" as="a" hint-placeholder-count="4">
      <div style="background: #FFFFFF; border-radius: 18px; overflow: hidden; display: flex; flex-direction: column">
        <sc-if value="{{a.isImage}}" hint-placeholder-val="{{ false }}">
          <button onClick="{{openViewer}}" aria-label="Abrir o comunicado em imagem" style="border: none; cursor: pointer; padding: 0; background: #13241B; position: relative; display: block; width: 100%">
            <svg viewBox="0 0 320 400" width="100%" preserveAspectRatio="xMidYMin slice" role="img" aria-label="Comunicado em imagem: desligamento programado de energia" style="display: block; width: 100%; height: 190px"><rect width="320" height="400" rx="18" fill="#FFFFFF"></rect><rect width="320" height="118" rx="18" fill="#13241B"></rect><rect y="100" width="320" height="18" fill="#13241B"></rect><text x="24" y="30" font-size="10" font-weight="700" fill="#FFD27A" letter-spacing="1.5">COMUNICADO OFICIAL · CARAJÁS</text><circle cx="282" cy="44" r="18" fill="#F2C94C"></circle><path d="M284 32 L274 47 H282 L280 57 L290 42 H283 Z" fill="#13241B"></path><text x="24" y="66" font-size="21" font-weight="800" fill="#FFFFFF">Desligamento</text><text x="24" y="92" font-size="21" font-weight="800" fill="#FFFFFF">programado de energia</text><rect x="24" y="136" width="272" height="56" rx="12" fill="#F8EDC9"></rect><text x="40" y="160" font-size="11" font-weight="700" fill="#6B4D05">QUINTA-FEIRA · 12/11</text><text x="40" y="181" font-size="18" font-weight="800" fill="#13241B">das 8h às 12h</text><text x="24" y="214" font-size="11" font-weight="700" fill="#13241B">Onde: só no quarteirão 1</text><rect x="24" y="220" width="272" height="112" rx="10" fill="#E9E3D3"></rect><rect x="24" y="220" width="96" height="112" rx="10" fill="#2C5D96" fill-opacity=".14"></rect><line x1="119" y1="222" x2="119" y2="330" stroke="#13241B" stroke-width="1.5" stroke-dasharray="5 4"></line><line x1="209" y1="222" x2="209" y2="330" stroke="#13241B" stroke-width="1.5" stroke-dasharray="5 4"></line><text x="34" y="232" font-size="7" font-weight="700" fill="#4F5E55">ACARÁ</text><line x1="34" y1="236" x2="114" y2="236" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round"></line><line x1="124" y1="236" x2="204" y2="236" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round"></line><line x1="214" y1="236" x2="286" y2="236" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round"></line><text x="34" y="250" font-size="7" font-weight="700" fill="#4F5E55">AMAZONAS</text><line x1="34" y1="254" x2="114" y2="254" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round"></line><line x1="124" y1="254" x2="204" y2="254" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round"></line><line x1="214" y1="254" x2="286" y2="254" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round"></line><text x="34" y="268" font-size="7" font-weight="700" fill="#4F5E55">ARAGUAIA</text><line x1="34" y1="272" x2="114" y2="272" stroke="#F2C94C" stroke-width="7" stroke-linecap="round"></line><line x1="124" y1="272" x2="204" y2="272" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round"></line><line x1="214" y1="272" x2="286" y2="272" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round"></line><text x="34" y="286" font-size="7" font-weight="700" fill="#4F5E55">ARAPIUNS</text><line x1="34" y1="290" x2="114" y2="290" stroke="#F2C94C" stroke-width="7" stroke-linecap="round"></line><line x1="124" y1="290" x2="204" y2="290" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round"></line><line x1="214" y1="290" x2="286" y2="290" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round"></line><text x="34" y="304" font-size="7" font-weight="700" fill="#4F5E55">CAETÉ</text><line x1="34" y1="308" x2="114" y2="308" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round"></line><line x1="124" y1="308" x2="204" y2="308" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round"></line><line x1="214" y1="308" x2="286" y2="308" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round"></line><text x="34" y="322" font-size="7" font-weight="700" fill="#4F5E55">GRAJAÚ</text><line x1="34" y1="326" x2="114" y2="326" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round"></line><line x1="124" y1="326" x2="204" y2="326" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round"></line><line x1="214" y1="326" x2="286" y2="326" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round"></line><text x="24" y="348" font-size="11" font-weight="700" fill="#13241B">O que fazer: tire os aparelhos da tomada</text><text x="24" y="361" font-size="11" font-weight="700" fill="#13241B">e carregue o celular antes das 8h.</text><rect x="0" y="370" width="320" height="30" fill="#1E5B40"></rect><text x="24" y="389" font-size="10" font-weight="700" fill="#FFFFFF">Administração do Núcleo · SECOM 0800-2850-193</text></svg>
            <span style="position: absolute; right: 12px; bottom: 12px; display: flex; align-items: center; gap: 6px; background: #13241B; color: #FFFFFF; font-size: 13px; font-weight: 700; padding: 8px 12px; border-radius: 18px"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"></path></svg>Toque para abrir</span>
          </button>
        </sc-if>
        <button onClick="{{a.toggle}}" aria-expanded="{{a.expanded}}" style="border: none; cursor: pointer; text-align: left; background: #FFFFFF; padding: 14px 16px; display: flex; flex-direction: column; gap: 6px; color: #13241B">
          <span style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap">
            <span style="font-size: 11px; font-weight: 700; letter-spacing: 0.6px; text-transform: uppercase; background: {{a.lvBg}}; color: {{a.lvFg}}; padding: 3px 8px; border-radius: 6px">{{a.lvl}}</span>
            <span style="font-size: 11px; font-weight: 700; letter-spacing: 0.6px; text-transform: uppercase; color: #4F5E55">{{a.cat}}</span>
            <span style="margin-left: auto; font-size: 11px; font-weight: 700; color: {{a.fmtFg}}; background: {{a.fmtBg}}; padding: 3px 8px; border-radius: 6px">{{a.fmtLabel}}</span>
          </span>
          <span style="font-weight: 700; font-size: 15px">{{a.title}}</span>
          <span style="font-size: 13px; color: #4F5E55">{{a.meta}}</span>
          <sc-if value="{{a.open}}" hint-placeholder-val="{{ false }}">
            <span style="display: flex; flex-direction: column; gap: 6px; margin-top: 6px; padding-top: 10px; border-top: 1px solid #EEF1EC; font-size: 14px">
              <span><span style="font-weight: 700">O que fazer:</span> {{a.todo}}</span>
              <span style="color: #4F5E55">Dúvidas: (94) 0000-0000 – Administração do Núcleo</span>
              <span style="display: flex; align-items: center; gap: 4px; font-size: 12px; font-weight: 700; color: #1E5B40"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#1E5B40" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg>Aviso oficial</span>
            </span>
          </sc-if>
        </button>
      </div>
    </sc-for>
  </div>

  <sc-if value="{{viewer}}" hint-placeholder-val="{{ false }}">
    <div style="position: absolute; inset: 0; background: #0C1712; display: flex; flex-direction: column; color: #FFFFFF">
      <div style="padding: 52px 16px 10px 16px; display: flex; align-items: center; gap: 10px; flex-shrink: 0">
        <button onClick="{{closeViewer}}" aria-label="Fechar o comunicado" style="width: 44px; height: 44px; border-radius: 22px; border: none; cursor: pointer; background: #1C3327; display: flex; align-items: center; justify-content: center; flex-shrink: 0"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"></path></svg></button>
        <span style="display: flex; flex-direction: column; flex-grow: 1; min-width: 0"><span style="font-weight: 700; font-size: 15px">Comunicado em imagem</span><span style="font-size: 12px; color: #CFE3D7">Use + e − para ampliar</span></span>
        <button onClick="{{zoomOut}}" aria-label="Diminuir" style="width: 44px; height: 44px; border-radius: 22px; border: none; cursor: pointer; background: #1C3327; color: #FFFFFF; font-size: 22px; font-weight: 700; flex-shrink: 0">−</button>
        <button onClick="{{zoomIn}}" aria-label="Aumentar" style="width: 44px; height: 44px; border-radius: 22px; border: none; cursor: pointer; background: #1C3327; color: #FFFFFF; font-size: 22px; font-weight: 700; flex-shrink: 0">+</button>
      </div>
      <div class="sc" style="flex-grow: 1; min-height: 0; overflow: auto; padding: 6px 16px 12px 16px; display: flex; flex-direction: column; gap: 12px">
        <div style="position: relative; width: {{imgW}}; align-self: center">
          <svg viewBox="0 0 320 400" width="100%" role="img" aria-label="Comunicado oficial: desligamento programado de energia na quinta, 12/11, das 8h às 12h, nas Ruas Araguaia e Arapiuns, quarteirão 1" style="display: block; width: 100%; height: auto"><rect width="320" height="400" rx="18" fill="#FFFFFF"></rect><rect width="320" height="118" rx="18" fill="#13241B"></rect><rect y="100" width="320" height="18" fill="#13241B"></rect><text x="24" y="30" font-size="10" font-weight="700" fill="#FFD27A" letter-spacing="1.5">COMUNICADO OFICIAL · CARAJÁS</text><circle cx="282" cy="44" r="18" fill="#F2C94C"></circle><path d="M284 32 L274 47 H282 L280 57 L290 42 H283 Z" fill="#13241B"></path><text x="24" y="66" font-size="21" font-weight="800" fill="#FFFFFF">Desligamento</text><text x="24" y="92" font-size="21" font-weight="800" fill="#FFFFFF">programado de energia</text><rect x="24" y="136" width="272" height="56" rx="12" fill="#F8EDC9"></rect><text x="40" y="160" font-size="11" font-weight="700" fill="#6B4D05">QUINTA-FEIRA · 12/11</text><text x="40" y="181" font-size="18" font-weight="800" fill="#13241B">das 8h às 12h</text><text x="24" y="214" font-size="11" font-weight="700" fill="#13241B">Onde: só no quarteirão 1</text><rect x="24" y="220" width="272" height="112" rx="10" fill="#E9E3D3"></rect><rect x="24" y="220" width="96" height="112" rx="10" fill="#2C5D96" fill-opacity=".14"></rect><line x1="119" y1="222" x2="119" y2="330" stroke="#13241B" stroke-width="1.5" stroke-dasharray="5 4"></line><line x1="209" y1="222" x2="209" y2="330" stroke="#13241B" stroke-width="1.5" stroke-dasharray="5 4"></line><text x="34" y="232" font-size="7" font-weight="700" fill="#4F5E55">ACARÁ</text><line x1="34" y1="236" x2="114" y2="236" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round"></line><line x1="124" y1="236" x2="204" y2="236" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round"></line><line x1="214" y1="236" x2="286" y2="236" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round"></line><text x="34" y="250" font-size="7" font-weight="700" fill="#4F5E55">AMAZONAS</text><line x1="34" y1="254" x2="114" y2="254" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round"></line><line x1="124" y1="254" x2="204" y2="254" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round"></line><line x1="214" y1="254" x2="286" y2="254" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round"></line><text x="34" y="268" font-size="7" font-weight="700" fill="#4F5E55">ARAGUAIA</text><line x1="34" y1="272" x2="114" y2="272" stroke="#F2C94C" stroke-width="7" stroke-linecap="round"></line><line x1="124" y1="272" x2="204" y2="272" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round"></line><line x1="214" y1="272" x2="286" y2="272" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round"></line><text x="34" y="286" font-size="7" font-weight="700" fill="#4F5E55">ARAPIUNS</text><line x1="34" y1="290" x2="114" y2="290" stroke="#F2C94C" stroke-width="7" stroke-linecap="round"></line><line x1="124" y1="290" x2="204" y2="290" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round"></line><line x1="214" y1="290" x2="286" y2="290" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round"></line><text x="34" y="304" font-size="7" font-weight="700" fill="#4F5E55">CAETÉ</text><line x1="34" y1="308" x2="114" y2="308" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round"></line><line x1="124" y1="308" x2="204" y2="308" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round"></line><line x1="214" y1="308" x2="286" y2="308" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round"></line><text x="34" y="322" font-size="7" font-weight="700" fill="#4F5E55">GRAJAÚ</text><line x1="34" y1="326" x2="114" y2="326" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round"></line><line x1="124" y1="326" x2="204" y2="326" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round"></line><line x1="214" y1="326" x2="286" y2="326" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round"></line><text x="24" y="348" font-size="11" font-weight="700" fill="#13241B">O que fazer: tire os aparelhos da tomada</text><text x="24" y="361" font-size="11" font-weight="700" fill="#13241B">e carregue o celular antes das 8h.</text><rect x="0" y="370" width="320" height="30" fill="#1E5B40"></rect><text x="24" y="389" font-size="10" font-weight="700" fill="#FFFFFF">Administração do Núcleo · SECOM 0800-2850-193</text></svg>
        </div>
      </div>
      <div style="flex-shrink: 0; background: #13241B; border-radius: 24px 24px 0 0; padding: 16px 16px 28px 16px; display: flex; flex-direction: column; gap: 10px">
        <span style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px">
          <a href="Energia.dc.html" style="text-decoration: none; height: 46px; box-sizing: border-box; border-radius: 23px; background: #FFFFFF; color: #13241B; font-weight: 700; font-size: 14px; display: flex; align-items: center; justify-content: center">Ver no mapa</a>
          <button onClick="{{toggleRemind}}" aria-pressed="{{remindAttr}}" style="border: 2px solid #FFFFFF; cursor: pointer; height: 46px; border-radius: 23px; background: {{remindBg}}; color: {{remindFg}}; font-weight: 700; font-size: 14px">{{remindLabel}}</button>
        </span>
      </div>
    </div>
  </sc-if>

</div>
</x-dc>
<script type="text/x-dc" data-dc-script data-props='{"$preview":{"width":390,"height":844}}'>
class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { lvl: 'Todos', fmt: 'Todos', open: 'vacina', viewer: false, spot: 0, zoom: 1, remind: false };
  }
  renderVals() {
    const s = this.state;
    const colors = {
      'Urgente': ['#FBDCD6', '#9B1C10'],
      'Importante': ['#F8EDC9', '#6B4D05'],
      'Informativo': ['#DCEDE2', '#17432F']
    };
    const all = [
      { id: 'energia', fmt: 'Texto', lvl: 'Urgente', cat: 'Falta de energia', title: 'Falta de energia na Rua Juruá', meta: 'Agora · Rua Juruá, quarteirão 2 · previsão de volta: 16h', todo: 'Tire os aparelhos da tomada. A equipe de rede elétrica já está a caminho.' },
      { id: 'luz', fmt: 'Imagem', lvl: 'Importante', cat: 'Falta de luz', title: 'Comunicado: desligamento programado', meta: 'Quinta, 12/11, das 8h às 12h · Ruas Araguaia e Arapiuns', todo: 'Abra a imagem para ver o comunicado completo. Tire aparelhos da tomada e carregue o celular antes das 8h.' },
      { id: 'estrada', fmt: 'Texto', lvl: 'Urgente', cat: 'Segurança', title: 'Interdição de estrada', meta: 'Hoje, até 18h · Estrada de acesso ao Núcleo, km 8', todo: 'Evite o trecho e use o caminho indicado.' },
      { id: 'agua', fmt: 'Texto', lvl: 'Importante', cat: 'Falta de água', title: 'Interrupção no fornecimento de água', meta: 'Quinta-feira, 5/11, das 8h às 14h · Ruas Japurá, Jari e Juruá', todo: 'Armazene água na quarta-feira à noite.' },
      { id: 'obra', fmt: 'Texto', lvl: 'Importante', cat: 'Obras', title: 'Obra na rua', meta: '26/10 a 30/10 · Rua Mearim', todo: 'Estacione em outra rua durante a obra.' },
      { id: 'vacina', fmt: 'Texto', lvl: 'Informativo', cat: 'Saúde', title: 'Campanha de vacinação', meta: 'Terça, 3/11, das 8h às 16h · Posto de saúde', todo: 'Leve o cartão de vacina.' },
      { id: 'lixo', fmt: 'Texto', lvl: 'Informativo', cat: 'Coleta de lixo', title: 'Coleta seletiva: lixo até as 10h', meta: 'Segunda a sexta · cronograma no início do app', todo: 'Deixe o lixo do lado de fora até as 10h da manhã, separado conforme o dia da coleta.' }
    ];
    const avisos = all.filter((a) => a.lvl !== 'Urgente').filter((a) => (s.lvl === 'Todos' || a.lvl === s.lvl) && (s.fmt === 'Todos' || a.fmt === s.fmt)).map((a) => {
      const open = s.open === a.id;
      const img = a.fmt === 'Imagem';
      return Object.assign({}, a, {
        lvBg: colors[a.lvl][0],
        lvFg: colors[a.lvl][1],
        isImage: img,
        fmtLabel: img ? 'Imagem' : 'Texto',
        fmtBg: img ? '#ECE4F5' : '#F4F6F1',
        fmtFg: img ? '#5B3A8C' : '#4F5E55',
        open: open,
        expanded: open ? 'true' : 'false',
        toggle: () => this.setState({ open: this.state.open === a.id ? null : a.id })
      });
    });
    const chip = (label, cur, key) => {
      const on = label === cur;
      return { label: label, pressed: on ? 'true' : 'false', bg: on ? '#13241B' : '#FFFFFF', fg: on ? '#FFFFFF' : '#13241B', border: on ? '#13241B' : '#D5DDD6', pick: () => this.setState({ [key]: label }) };
    };
    const formats = [['Todos', 'Todos os formatos'], ['Texto', 'Texto'], ['Imagem', 'Imagem']].map((f) => {
      const on = s.fmt === f[0];
      return { label: f[1], pressed: on ? 'true' : 'false', bg: on ? '#5B3A8C' : '#ECE4F5', fg: on ? '#FFFFFF' : '#3A2560', pick: () => this.setState({ fmt: f[0] }) };
    });
    return {
      chips: ['Todos', 'Importante', 'Informativo'].map((l) => chip(l, s.lvl, 'lvl')),
      formats: formats,
      avisos: avisos,
      viewer: s.viewer,
      openViewer: () => this.setState({ viewer: true, zoom: 1 }),
      closeViewer: () => this.setState({ viewer: false }),
      zoomIn: () => this.setState({ zoom: Math.min(1.8, this.state.zoom + 0.2) }),
      zoomOut: () => this.setState({ zoom: Math.max(1, this.state.zoom - 0.2) }),
      imgW: Math.round(358 * s.zoom) + 'px',
      remindAttr: s.remind ? 'true' : 'false',
      remindLabel: s.remind ? 'Lembrete ativado ✓' : 'Lembrar na véspera',
      remindBg: s.remind ? '#FFFFFF' : 'transparent',
      remindFg: s.remind ? '#13241B' : '#FFFFFF',
      toggleRemind: () => this.setState({ remind: !this.state.remind })
    };
  }
}
<\/script>
</body>
</html>
`;export{e as default};
