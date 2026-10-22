const e=`<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<title>Meu Carajás Super App – Criar conta de adulto</title>
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
    <a href="Login.dc.html" aria-label="Voltar" style="width: 44px; height: 44px; border-radius: 22px; background: #FFFFFF; display: flex; align-items: center; justify-content: center; flex-shrink: 0"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#13241B" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"></path></svg></a>
    <span style="display: flex; flex-direction: column; flex-grow: 1"><span style="font-family: 'Bricolage Grotesque', system-ui, sans-serif; font-weight: 800; font-size: 24px; letter-spacing: -0.4px">Criar conta</span><span style="font-size: 13px; color: #4F5E55">Para adultos da casa</span></span>
    <span style="font-size: 11px; font-weight: 700; letter-spacing: 0.8px; text-transform: uppercase; background: #DCEDE2; color: #17432F; padding: 6px 10px; border-radius: 8px">Adulto</span>
  </div>

  <sc-if value="{{form}}" hint-placeholder-val="{{ true }}">
  <div class="sc" style="flex-grow: 1; min-height: 0; overflow-y: auto; padding: 4px 20px 28px 20px; display: flex; flex-direction: column; gap: 14px">

    <div style="background: #FFFFFF; border-radius: 20px; padding: 14px 16px; display: flex; align-items: center; gap: 12px; border: 2px solid #1E5B40"><span style="display: flex; flex-direction: column; gap: 2px; flex-grow: 1"><span style="font-weight: 700; font-size: 15px">Prefere pelo WhatsApp?</span><span style="font-size: 13px; color: #4F5E55">Mande um oi para (94) 99999-0100 e faça o cadastro pela conversa. O WhatsApp é usado só para isso.</span></span><button style="border: none; cursor: pointer; height: 44px; padding: 0 14px; border-radius: 22px; background: #1E5B40; color: #FFFFFF; font-weight: 700; font-size: 13px; flex-shrink: 0">Abrir</button></div>

    
    <div style="background: #FFFFFF; border-radius: 20px; padding: 16px; display: flex; flex-direction: column; gap: 14px">
      <span style="font-size: 13px; font-weight: 700">Você é</span>
      <div style="display: flex; flex-wrap: wrap; gap: 8px">
        <sc-for list="{{roles}}" as="c" hint-placeholder-count="2">
          <button onClick="{{c.pick}}" aria-pressed="{{c.pressed}}" style="border: 1px solid {{c.border}}; cursor: pointer; height: 40px; padding: 0 14px; border-radius: 20px; font-size: 14px; font-weight: 700; background: {{c.bg}}; color: {{c.fg}}">{{c.label}}</button>
        </sc-for>
      </div>
      <span style="font-size: 13px; color: #4F5E55">{{roleHint}}</span>
      <sc-if value="{{isOther}}" hint-placeholder-val="{{ false }}">
        <div style="background: #13241B; color: #FFFFFF; border-radius: 16px; padding: 14px; display: flex; flex-direction: column; gap: 8px">
          <label for="cod" style="font-size: 13px; font-weight: 700; color: #FFD27A">Código da família</label>
          <input id="cod" type="text" placeholder="Ex.: CKS-4821" onInput="{{setCode}}" style="height: 54px; border-radius: 14px; border: 1px solid #4F6B5C; padding: 0 16px; font-size: 20px; color: #FFFFFF; background: #1C3327; text-transform: uppercase; letter-spacing: 3px; font-weight: 700">
          <span style="font-size: 13px; font-weight: 700; color: {{codeFgDark}}">{{codeLabel}}</span>
        </div>
      </sc-if>
    </div>

    <span style="display: flex; align-items: center; gap: 10px"><span style="width: 28px; height: 28px; border-radius: 14px; background: #13241B; color: #FFFFFF; font-size: 13px; font-weight: 800; display: flex; align-items: center; justify-content: center">1</span><span style="font-family: 'Bricolage Grotesque', system-ui, sans-serif; font-weight: 700; font-size: 18px">Sobre você</span></span>
    <div style="background: #FFFFFF; border-radius: 20px; padding: 16px; display: flex; flex-direction: column; gap: 14px">
      <div style="display: flex; align-items: center; gap: 16px">
        <button onClick="{{togglePhoto}}" aria-label="Adicionar foto de perfil" style="width: 88px; height: 88px; border-radius: 44px; border: {{photoBorder}}; cursor: pointer; background: {{photoBg}}; display: flex; align-items: center; justify-content: center; flex-shrink: 0; position: relative">
          <sc-if value="{{hasPhoto}}" hint-placeholder-val="{{ false }}"><span style="font-family: 'Bricolage Grotesque', system-ui, sans-serif; font-weight: 800; font-size: 32px; color: #17432F">{{initial}}</span></sc-if>
          <sc-if value="{{noPhoto}}" hint-placeholder-val="{{ true }}"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#4F5E55" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="6" width="18" height="14" rx="2"></rect><circle cx="12" cy="13" r="3.5"></circle><path d="M8.5 6 10 4h4l1.5 2"></path></svg></sc-if>
          <span style="position: absolute; right: -2px; bottom: -2px; width: 30px; height: 30px; border-radius: 15px; background: #13241B; border: 3px solid #FFFFFF; display: flex; align-items: center; justify-content: center"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"></path></svg></span>
        </button>
        <span style="display: flex; flex-direction: column; gap: 2px"><span style="font-weight: 700; font-size: 15px">Foto de perfil</span><span style="font-size: 13px; color: #4F5E55">{{photoHint}}</span></span>
      </div>
      <span style="display: flex; flex-direction: column; gap: 6px">
        <label for="nome" style="font-size: 13px; font-weight: 700">Nome completo</label>
        <input id="nome" type="text" placeholder="Como está no documento" onInput="{{setName}}" style="height: 50px; border-radius: 14px; border: 1px solid #C9D2CB; padding: 0 16px; font-size: 16px; color: #13241B; background: #FFFFFF">
      </span>
      <span style="display: flex; flex-direction: column; gap: 6px">
        <label for="nasc" style="font-size: 13px; font-weight: 700">Data de nascimento</label>
        <input id="nasc" type="text" placeholder="dd/mm/aaaa" style="height: 50px; border-radius: 14px; border: 1px solid #C9D2CB; padding: 0 16px; font-size: 16px; color: #13241B; background: #FFFFFF">
        <span style="font-size: 12px; color: #4F5E55">Usamos para confirmar que você é maior de idade.</span>
      </span>
      <span style="display: flex; flex-direction: column; gap: 6px">
        <label for="cel" style="font-size: 13px; font-weight: 700">Celular</label>
        <input id="cel" type="tel" placeholder="(94) 90000-0000" style="height: 50px; border-radius: 14px; border: 1px solid #C9D2CB; padding: 0 16px; font-size: 16px; color: #13241B; background: #FFFFFF">
        <span style="font-size: 12px; color: #4F5E55">Os comunicados e alertas do Núcleo chegam por SMS neste número.</span>
      </span>
      <span style="display: flex; flex-direction: column; gap: 6px">
        <label for="email" style="font-size: 13px; font-weight: 700">E-mail</label>
        <input id="email" type="email" placeholder="voce@exemplo.com" style="height: 50px; border-radius: 14px; border: 1px solid #C9D2CB; padding: 0 16px; font-size: 16px; color: #13241B; background: #FFFFFF">
      </span>
    </div>

    <span style="display: flex; align-items: center; gap: 10px"><span style="width: 28px; height: 28px; border-radius: 14px; background: #13241B; color: #FFFFFF; font-size: 13px; font-weight: 800; display: flex; align-items: center; justify-content: center">2</span><span style="font-family: 'Bricolage Grotesque', system-ui, sans-serif; font-weight: 700; font-size: 18px">Sua casa</span></span>
    <div style="background: #FFFFFF; border-radius: 20px; padding: 16px; display: flex; flex-direction: column; gap: 14px">
      <sc-if value="{{isGestor}}" hint-placeholder-val="{{ true }}">
        <span style="display: flex; flex-direction: column; gap: 14px">
          <span style="display: flex; flex-direction: column; gap: 6px">
        <label for="rua" style="font-size: 13px; font-weight: 700">Rua</label>
        <input id="rua" type="text" placeholder="Ex.: Rua Japurá" style="height: 50px; border-radius: 14px; border: 1px solid #C9D2CB; padding: 0 16px; font-size: 16px; color: #13241B; background: #FFFFFF">
      </span>
          <span style="display: flex; flex-direction: column; gap: 6px">
        <label for="num" style="font-size: 13px; font-weight: 700">Número da casa</label>
        <input id="num" type="text" placeholder="Ex.: 12" style="height: 50px; border-radius: 14px; border: 1px solid #C9D2CB; padding: 0 16px; font-size: 16px; color: #13241B; background: #FFFFFF">
      </span>
          <span style="font-size: 13px; color: #4F5E55">Ao terminar, você recebe o <span style="font-weight: 700">código da família</span> para os jovens e adultos da casa entrarem.</span>
        </span>
      </sc-if>
      <sc-if value="{{isOther}}" hint-placeholder-val="{{ false }}">
        <span style="display: flex; align-items: center; gap: 12px">
          <span style="width: 44px; height: 44px; border-radius: 12px; background: {{houseBg}}; display: flex; align-items: center; justify-content: center; flex-shrink: 0"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="{{houseStroke}}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 10.5 12 3l9 7.5V21H3z"></path><path d="m9 14 2 2 4-4"></path></svg></span>
          <span style="display: flex; flex-direction: column; gap: 2px"><span style="font-weight: 700; font-size: 15px">{{houseTitle}}</span><span style="font-size: 13px; color: #4F5E55">{{houseInfo}}</span></span>
        </span>
      </sc-if>
    </div>

    <span style="display: flex; align-items: center; gap: 10px"><span style="width: 28px; height: 28px; border-radius: 14px; background: #13241B; color: #FFFFFF; font-size: 13px; font-weight: 800; display: flex; align-items: center; justify-content: center">3</span><span style="font-family: 'Bricolage Grotesque', system-ui, sans-serif; font-weight: 700; font-size: 18px">Seus interesses</span></span>
    <div style="background: #FFFFFF; border-radius: 20px; padding: 16px; display: flex; flex-direction: column; gap: 14px">
      <div style="display: flex; flex-wrap: wrap; gap: 8px">
        <sc-for list="{{ints}}" as="c" hint-placeholder-count="10">
          <button onClick="{{c.pick}}" aria-pressed="{{c.pressed}}" style="border: 1px solid {{c.border}}; cursor: pointer; height: 40px; padding: 0 14px; border-radius: 20px; font-size: 14px; font-weight: 700; background: {{c.bg}}; color: {{c.fg}}">{{c.label}}</button>
        </sc-for>
      </div>
      <span style="font-size: 13px; color: #4F5E55">{{intsLabel}}</span>
    </div>

    <span style="display: flex; align-items: center; gap: 10px"><span style="width: 28px; height: 28px; border-radius: 14px; background: #13241B; color: #FFFFFF; font-size: 13px; font-weight: 800; display: flex; align-items: center; justify-content: center">4</span><span style="font-family: 'Bricolage Grotesque', system-ui, sans-serif; font-weight: 700; font-size: 18px">Segurança</span></span>
    <div style="background: #FFFFFF; border-radius: 20px; padding: 16px; display: flex; flex-direction: column; gap: 14px">
      <span style="display: flex; flex-direction: column; gap: 6px">
        <label for="senha" style="font-size: 13px; font-weight: 700">Criar senha</label>
        <span style="display: flex; gap: 8px">
          <input id="senha" type="{{passType}}" placeholder="Mínimo de 8 caracteres" onInput="{{setPass}}" style="flex-grow: 1; min-width: 0; height: 50px; border-radius: 14px; border: 1px solid #C9D2CB; padding: 0 16px; font-size: 16px; color: #13241B; background: #FFFFFF">
          <button onClick="{{toggleShow}}" aria-label="Mostrar ou esconder a senha" style="width: 50px; height: 50px; border-radius: 14px; border: 1px solid #C9D2CB; cursor: pointer; background: #FFFFFF; display: flex; align-items: center; justify-content: center; flex-shrink: 0"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#13241B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"></path><circle cx="12" cy="12" r="3"></circle></svg></button>
        </span>
        <span style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 6px"><span style="height: 6px; border-radius: 3px; background: {{s1}}"></span><span style="height: 6px; border-radius: 3px; background: {{s2}}"></span><span style="height: 6px; border-radius: 3px; background: {{s3}}"></span></span>
        <span style="font-size: 12px; font-weight: 700; color: {{sFg}}">{{sLabel}}</span>
      </span>
      <span style="display: flex; flex-direction: column; gap: 6px">
        <label for="senha2" style="font-size: 13px; font-weight: 700">Repetir senha</label>
        <input id="senha2" type="{{passType}}" placeholder="Digite de novo" onInput="{{setPass2}}" style="height: 50px; border-radius: 14px; border: 1px solid #C9D2CB; padding: 0 16px; font-size: 16px; color: #13241B; background: #FFFFFF">
        <span style="font-size: 12px; font-weight: 700; color: {{mFg}}">{{mLabel}}</span>
      </span>
    </div>

    <span style="font-size: 12px; color: #4F5E55">Seus dados só aparecem para a sua família e para a administração do Núcleo.</span>
    <span style="font-size: 13px; font-weight: 700; color: #8E3714">{{missing}}</span>
    <button onClick="{{create}}" style="border: none; cursor: pointer; height: 56px; border-radius: 28px; font-weight: 700; font-size: 16px; background: {{btnBg}}; color: {{btnFg}}">Criar conta</button>
  </div>
  </sc-if>

  <sc-if value="{{doneG}}" hint-placeholder-val="{{ false }}">
  <div style="flex-grow: 1; padding: 8px 20px 32px 20px; display: flex; flex-direction: column; gap: 16px; justify-content: center">
    <span style="font-family: 'Bricolage Grotesque', system-ui, sans-serif; font-weight: 800; font-size: 28px; letter-spacing: -0.5px">Conta criada, {{first}}!</span>
    <span style="font-size: 15px; color: #4F5E55">Você é o gestor da casa. Passe este código para os jovens e adultos da sua família criarem a conta deles.</span>
    <div style="background: #13241B; color: #FFFFFF; border-radius: 24px; padding: 24px; display: flex; flex-direction: column; align-items: center; gap: 8px">
      <span style="font-size: 12px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: #FFD27A">Código da família</span>
      <span style="font-family: 'Bricolage Grotesque', system-ui, sans-serif; font-weight: 800; font-size: 44px; letter-spacing: 4px">CKS-4821</span>
      <span style="font-size: 13px; color: #CFE3D7">Fica salvo em Minha casa</span>
    </div>
    <div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px">
      <button onClick="{{copy}}" style="border: 2px solid #13241B; cursor: pointer; height: 52px; border-radius: 26px; font-weight: 700; font-size: 15px; background: #FFFFFF; color: #13241B">{{copyLabel}}</button>
      <button style="border: none; cursor: pointer; height: 52px; border-radius: 26px; font-weight: 700; font-size: 15px; background: #24578C; color: #FFFFFF">Enviar no WhatsApp</button>
    </div>
    <a href="Main.dc.html" style="text-decoration: none; height: 56px; box-sizing: border-box; border-radius: 28px; background: #1E5B40; color: #FFFFFF; font-weight: 700; font-size: 16px; display: flex; align-items: center; justify-content: center">Entrar no app</a>
  </div>
  </sc-if>

  <sc-if value="{{doneO}}" hint-placeholder-val="{{ false }}">
  <div style="flex-grow: 1; padding: 8px 20px 32px 20px; display: flex; flex-direction: column; gap: 16px; justify-content: center">
    <span style="font-family: 'Bricolage Grotesque', system-ui, sans-serif; font-weight: 800; font-size: 28px; letter-spacing: -0.5px">Conta criada, {{first}}!</span>
    <span style="font-size: 15px; color: #4F5E55">Você entrou na família Rua Japurá, 12. O gestor da casa recebeu um aviso de que você chegou.</span>
    <a href="Main.dc.html" style="text-decoration: none; height: 56px; box-sizing: border-box; border-radius: 28px; background: #1E5B40; color: #FFFFFF; font-weight: 700; font-size: 16px; display: flex; align-items: center; justify-content: center">Entrar no app</a>
  </div>
  </sc-if>

</div>
</x-dc>
<script type="text/x-dc" data-dc-script data-props='{"$preview":{"width":390,"height":844}}'>
class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { role: 'Sou o gestor da casa', name: '', code: '', ints: [], pass: '', pass2: '', show: false, photo: false, done: false, copied: false };
  }
  chips(labels, cur, pick, onBg) {
    return labels.map((label) => {
      const on = Array.isArray(cur) ? cur.indexOf(label) >= 0 : cur === label;
      return { label: label, pressed: on ? 'true' : 'false', bg: on ? onBg : '#FFFFFF', fg: on ? '#FFFFFF' : '#13241B', border: on ? onBg : '#C9D2CB', pick: () => pick(label) };
    });
  }
  common(accentBg) {
    const s = this.state;
    const p = s.pass || '';
    let lv = 0;
    if (p.length >= 8) lv = 1;
    if (p.length >= 8 && /[0-9]/.test(p)) lv = 2;
    if (p.length >= 10 && /[0-9]/.test(p) && /[A-Z]/.test(p)) lv = 3;
    const cols = ['#E2E7E0', '#B4471C', '#D4A017', '#1E5B40'];
    const toggleInt = (i) => {
      const cur = this.state.ints.slice();
      const k = cur.indexOf(i);
      if (k >= 0) cur.splice(k, 1); else cur.push(i);
      this.setState({ ints: cur });
    };
    return {
      hasPhoto: s.photo, noPhoto: !s.photo,
      initial: (s.name || '?').trim().charAt(0).toUpperCase() || '?',
      photoBg: s.photo ? accentBg : '#F4F6F1',
      photoBorder: s.photo ? 'none' : '2px dashed #9AA69F',
      photoHint: s.photo ? 'Foto adicionada. Toque para trocar.' : 'Toque para tirar ou escolher uma foto',
      togglePhoto: () => this.setState({ photo: !this.state.photo }),
      setName: (e) => this.setState({ name: e.target.value }),
      setPass: (e) => this.setState({ pass: e.target.value }),
      setPass2: (e) => this.setState({ pass2: e.target.value }),
      passType: s.show ? 'text' : 'password',
      toggleShow: () => this.setState({ show: !this.state.show }),
      s1: lv >= 1 ? cols[lv] : cols[0], s2: lv >= 2 ? cols[lv] : cols[0], s3: lv >= 3 ? cols[lv] : cols[0],
      sLabel: ['Use 8 caracteres ou mais', 'Senha fraca: coloque números', 'Senha boa', 'Senha forte'][lv],
      sFg: lv === 0 ? '#4F5E55' : (lv === 1 ? '#8E3714' : (lv === 2 ? '#6B4D05' : '#17432F')),
      mLabel: !s.pass2 ? ' ' : (s.pass2 === s.pass ? '✓ As senhas são iguais' : 'As senhas não são iguais'),
      mFg: s.pass2 === s.pass ? '#17432F' : '#9B1C10',
      ints: this.chips(['Cinema', 'Culinária', 'Videogame', 'Vôlei', 'Futebol', 'Trilhas', 'Música', 'Leitura', 'Dança', 'Voluntariado'], s.ints, toggleInt, accentBg),
      intsLabel: s.ints.length ? s.ints.length + ' escolhidos · a agenda mostra primeiro o que combina com você' : 'Escolha pelo menos um'
    };
  }
  renderVals() {
    const s = this.state;
    const c = this.common('#1E5B40');
    const gest = s.role === 'Sou o gestor da casa';
    const codeOk = /^[A-Z]{3}-?[0-9]{4}$/.test((s.code || '').toUpperCase());
    const miss = [];
    if (!s.name) miss.push('nome');
    if (!gest && !codeOk) miss.push('código da família');
    if (!s.ints.length) miss.push('um interesse');
    if ((s.pass || '').length < 8 || s.pass !== s.pass2) miss.push('senha');
    const ok = miss.length === 0;
    return Object.assign(c, {
      roles: this.chips(['Sou o gestor da casa', 'Moro com um gestor'], s.role, (v) => this.setState({ role: v }), '#13241B'),
      roleHint: gest ? 'O gestor é o responsável pela casa: recebe os avisos importantes e libera o que os jovens podem usar.' : 'Você vai precisar do código da família que o gestor da sua casa recebeu.',
      isGestor: gest, isOther: !gest,
      setCode: (e) => this.setState({ code: e.target.value }),
      codeLabel: !s.code ? 'Peça o código para o gestor da sua casa' : (codeOk ? '✓ Família encontrada: Rua Japurá, 12' : 'O código tem 3 letras e 4 números'),
      codeFg: !s.code ? '#4F5E55' : (codeOk ? '#17432F' : '#9B1C10'),
      codeFgDark: !s.code ? '#CFE3D7' : (codeOk ? '#FFD27A' : '#FBDCD6'),
      houseTitle: codeOk ? 'Casa da Rua Japurá, 12' : 'Falta o código da família',
      houseInfo: codeOk ? 'Gestor: Lucca Ribeiro. Você entra na mesma casa e recebe os avisos dela.' : 'Coloque o código lá em cima para entrar na mesma casa do gestor.',
      houseBg: codeOk ? '#DCEDE2' : '#F4F6F1',
      houseStroke: codeOk ? '#1E5B40' : '#9AA69F',
      missing: ok ? ' ' : 'Falta: ' + miss.join(', '),
      btnBg: ok ? '#1E5B40' : '#C9D2CB',
      btnFg: ok ? '#FFFFFF' : '#4F5E55',
      create: () => { if (ok) this.setState({ done: true }); },
      form: !s.done,
      doneG: s.done && gest,
      doneO: s.done && !gest,
      first: (s.name || '').trim().split(' ')[0],
      copyLabel: s.copied ? 'Copiado ✓' : 'Copiar código',
      copy: () => this.setState({ copied: true })
    });
  }
}
<\/script>
</body>
</html>
`;export{e as default};
