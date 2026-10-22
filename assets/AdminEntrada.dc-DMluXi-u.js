const e=`<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<title>Meu Carajás Organizadores – Entrada</title>
<script src="./support.js"><\/script>
</head>
<body>
<x-dc>
<helmet>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500..800&amp;family=DM+Sans:opsz,wght@9..40,400..700&amp;display=swap">
<style>
body{margin:0}
a{color:#1E5B40}a:hover{color:#17432F}
button,input,textarea{font-family:inherit}
</style>
</helmet>
<div style="width: 390px; height: 844px; box-sizing: border-box; padding: 0 28px 44px 28px; background: #13241B; font-family: 'DM Sans', system-ui, sans-serif; color: #FFFFFF; display: flex; flex-direction: column">
  <div style="flex-grow: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 18px">
    <div style="width: 112px; height: 112px; border-radius: 30px; background: #1E5B40; display: flex; align-items: center; justify-content: center"><svg width="58" height="70" viewBox="0 0 100 120" aria-hidden="true"><path d="M38.6 26.3 Q50.0 18.0 61.4 26.3 Q71.0 35.1 82.4 41.5 Q93.7 49.8 89.4 63.2 Q84.0 75.0 81.4 87.8 Q77.0 101.2 63.0 101.2 Q50.0 99.7 37.0 101.2 Q23.0 101.2 18.6 87.8 Q16.0 75.0 10.6 63.2 Q6.3 49.8 17.6 41.5 Q29.0 35.1 38.6 26.3 Z" fill="#E9558F"></path><path d="M40.4 32.3 Q50.0 25.4 59.6 32.3 Q67.6 39.7 77.2 45.1 Q86.7 52.1 83.1 63.3 Q78.5 73.3 76.4 84.0 Q72.7 95.3 60.9 95.3 Q50.0 94.0 39.1 95.3 Q27.3 95.3 23.6 84.0 Q21.5 73.3 16.9 63.3 Q13.3 52.1 22.8 45.1 Q32.4 39.7 40.4 32.3 Z" fill="#EC679B"></path><path d="M50.0 58.5 Q56.0 43.6 50.0 25.4 Q44.0 43.6 50.0 58.5 Z M55.2 62.3 Q71.3 63.4 86.7 52.1 Q67.6 52.0 55.2 62.3 Z M53.2 68.5 Q57.2 84.0 72.7 95.3 Q66.8 77.0 53.2 68.5 Z M46.8 68.5 Q33.2 77.0 27.3 95.3 Q42.8 84.0 46.8 68.5 Z M44.8 62.3 Q32.4 52.0 13.3 52.1 Q28.7 63.4 44.8 62.3 Z" fill="#C2346F"></path><circle cx="50" cy="64" r="11.0" fill="#FFE1EC"></circle><circle cx="50" cy="64" r="4.1" fill="#FFF1A8"></circle></svg></div>
    <span style="font-family: 'Bricolage Grotesque', system-ui, sans-serif; font-weight: 800; font-size: 36px; letter-spacing: -1px">Meu Carajás</span>
    <span style="font-size: 13px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; background: #FFD27A; color: #13241B; padding: 6px 12px; border-radius: 8px">Organizadores</span>
    <span style="font-size: 15px; text-align: center; color: #CFE3D7; max-width: 290px; line-height: 1.4">Onde a administração, a equipe de energia e os grupos da cidade publicam as informações do Núcleo.</span>
  </div>
  <div style="display: flex; flex-direction: column; gap: 12px">
    <span style="display: flex; flex-direction: column; gap: 6px"><label for="email" style="font-size: 13px; font-weight: 700; color: #CFE3D7">E-mail</label><input id="email" type="email" placeholder="voce@exemplo.com" style="height: 52px; border-radius: 14px; border: 1px solid #4F6B5C; padding: 0 16px; font-size: 16px; color: #FFFFFF; background: #1C3327"></span>
    <span style="display: flex; flex-direction: column; gap: 6px"><label for="codigo" style="font-size: 13px; font-weight: 700; color: #CFE3D7">Código de acesso</label><input id="codigo" type="password" placeholder="Enviado pela administração" style="height: 52px; border-radius: 14px; border: 1px solid #4F6B5C; padding: 0 16px; font-size: 16px; color: #FFFFFF; background: #1C3327"></span>
    <a href="AdminInicio.dc.html" style="text-decoration: none; margin-top: 6px; height: 54px; box-sizing: border-box; border-radius: 27px; background: #B4471C; color: #FFFFFF; font-weight: 700; font-size: 16px; display: flex; align-items: center; justify-content: center">Entrar no painel</a>
    <a href="Splash.dc.html" style="text-decoration: none; height: 44px; display: flex; align-items: center; justify-content: center; color: #FFFFFF; font-size: 14px; font-weight: 600">Sou morador · abrir o app do morador</a>
  </div>
</div>
</x-dc>
<script type="text/x-dc" data-dc-script data-props='{"$preview":{"width":390,"height":844}}'>
class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = {};
  }
  chips(labels, cur, pick) {
    return labels.map((label) => {
      const on = Array.isArray(cur) ? cur.indexOf(label) >= 0 : cur === label;
      return {
        label: label,
        pressed: on ? 'true' : 'false',
        bg: on ? '#13241B' : '#FFFFFF',
        fg: on ? '#FFFFFF' : '#13241B',
        border: on ? '#13241B' : '#C9D2CB',
        pick: () => pick(label)
      };
    });
  }
  renderVals() { return {}; }
}
<\/script>
</body>
</html>
`;export{e as default};
