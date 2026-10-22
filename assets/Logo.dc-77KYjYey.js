const e=`<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<title>Meu Carajás Super App – Logo e identidade</title>
<script src="./support.js"><\/script>
</head>
<body>
<x-dc>
<helmet>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500..800&amp;family=DM+Sans:opsz,wght@9..40,400..700&amp;display=swap">
<style>
body{margin:0}
a{color:#1E5B40}a:hover{color:#17432F}
</style>
</helmet>
<div style="width: 1240px; height: 620px; box-sizing: border-box; padding: 56px; background: #F4F6F1; font-family: 'DM Sans', system-ui, sans-serif; color: #13241B; display: flex; flex-direction: column; gap: 24px">

  <div style="display: flex; gap: 24px; height: 360px">

    <div style="width: 520px; background: #FFFFFF; border-radius: 28px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 20px">
      <div style="display: flex; align-items: center; gap: 20px">
        <svg width="110" height="132" viewBox="0 0 100 120" role="img" aria-label="Símbolo do Meu Carajás Super App: a flor de Carajás"><path d="M38.6 26.3 Q50.0 18.0 61.4 26.3 Q71.0 35.1 82.4 41.5 Q93.7 49.8 89.4 63.2 Q84.0 75.0 81.4 87.8 Q77.0 101.2 63.0 101.2 Q50.0 99.7 37.0 101.2 Q23.0 101.2 18.6 87.8 Q16.0 75.0 10.6 63.2 Q6.3 49.8 17.6 41.5 Q29.0 35.1 38.6 26.3 Z" fill="#E9558F"></path><path d="M40.4 32.3 Q50.0 25.4 59.6 32.3 Q67.6 39.7 77.2 45.1 Q86.7 52.1 83.1 63.3 Q78.5 73.3 76.4 84.0 Q72.7 95.3 60.9 95.3 Q50.0 94.0 39.1 95.3 Q27.3 95.3 23.6 84.0 Q21.5 73.3 16.9 63.3 Q13.3 52.1 22.8 45.1 Q32.4 39.7 40.4 32.3 Z" fill="#EC679B"></path><path d="M50.0 58.5 Q56.0 43.6 50.0 25.4 Q44.0 43.6 50.0 58.5 Z M55.2 62.3 Q71.3 63.4 86.7 52.1 Q67.6 52.0 55.2 62.3 Z M53.2 68.5 Q57.2 84.0 72.7 95.3 Q66.8 77.0 53.2 68.5 Z M46.8 68.5 Q33.2 77.0 27.3 95.3 Q42.8 84.0 46.8 68.5 Z M44.8 62.3 Q32.4 52.0 13.3 52.1 Q28.7 63.4 44.8 62.3 Z" fill="#C2346F"></path><circle cx="50" cy="64" r="11.0" fill="#FFE1EC"></circle><circle cx="50" cy="64" r="4.1" fill="#FFF1A8"></circle></svg>
        <div style="display: flex; flex-direction: column; line-height: 0.95">
          <span style="font-family: 'Bricolage Grotesque', system-ui, sans-serif; font-weight: 800; font-size: 54px; letter-spacing: -1.5px; color: #13241B">Meu Carajás</span>
          <span style="font-family: 'Bricolage Grotesque', system-ui, sans-serif; font-weight: 800; font-size: 54px; letter-spacing: -1.5px; color: #C2346F">Super App</span>
        </div>
      </div>
      <span style="font-size: 14px; font-weight: 700; letter-spacing: 2.4px; text-transform: uppercase; color: #4F5E55">Núcleo Urbano de Carajás</span>
    </div>

    <div style="width: 280px; background: #DCEDE2; border-radius: 28px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 18px">
      <div style="width: 160px; height: 160px; border-radius: 38px; background: #FFFFFF; display: flex; align-items: center; justify-content: center">
        <svg width="84" height="101" viewBox="0 0 100 120" role="img" aria-label="Ícone do aplicativo"><path d="M38.6 26.3 Q50.0 18.0 61.4 26.3 Q71.0 35.1 82.4 41.5 Q93.7 49.8 89.4 63.2 Q84.0 75.0 81.4 87.8 Q77.0 101.2 63.0 101.2 Q50.0 99.7 37.0 101.2 Q23.0 101.2 18.6 87.8 Q16.0 75.0 10.6 63.2 Q6.3 49.8 17.6 41.5 Q29.0 35.1 38.6 26.3 Z" fill="#E9558F"></path><path d="M40.4 32.3 Q50.0 25.4 59.6 32.3 Q67.6 39.7 77.2 45.1 Q86.7 52.1 83.1 63.3 Q78.5 73.3 76.4 84.0 Q72.7 95.3 60.9 95.3 Q50.0 94.0 39.1 95.3 Q27.3 95.3 23.6 84.0 Q21.5 73.3 16.9 63.3 Q13.3 52.1 22.8 45.1 Q32.4 39.7 40.4 32.3 Z" fill="#EC679B"></path><path d="M50.0 58.5 Q56.0 43.6 50.0 25.4 Q44.0 43.6 50.0 58.5 Z M55.2 62.3 Q71.3 63.4 86.7 52.1 Q67.6 52.0 55.2 62.3 Z M53.2 68.5 Q57.2 84.0 72.7 95.3 Q66.8 77.0 53.2 68.5 Z M46.8 68.5 Q33.2 77.0 27.3 95.3 Q42.8 84.0 46.8 68.5 Z M44.8 62.3 Q32.4 52.0 13.3 52.1 Q28.7 63.4 44.8 62.3 Z" fill="#C2346F"></path><circle cx="50" cy="64" r="11.0" fill="#FFE1EC"></circle><circle cx="50" cy="64" r="4.1" fill="#FFF1A8"></circle></svg>
      </div>
      <div style="display: flex; align-items: flex-end; gap: 14px">
        <div style="width: 60px; height: 60px; border-radius: 15px; background: #FFFFFF; display: flex; align-items: center; justify-content: center"><svg width="32" height="38" viewBox="0 0 100 120" aria-hidden="true"><path d="M38.6 26.3 Q50.0 18.0 61.4 26.3 Q71.0 35.1 82.4 41.5 Q93.7 49.8 89.4 63.2 Q84.0 75.0 81.4 87.8 Q77.0 101.2 63.0 101.2 Q50.0 99.7 37.0 101.2 Q23.0 101.2 18.6 87.8 Q16.0 75.0 10.6 63.2 Q6.3 49.8 17.6 41.5 Q29.0 35.1 38.6 26.3 Z" fill="#E9558F"></path><path d="M40.4 32.3 Q50.0 25.4 59.6 32.3 Q67.6 39.7 77.2 45.1 Q86.7 52.1 83.1 63.3 Q78.5 73.3 76.4 84.0 Q72.7 95.3 60.9 95.3 Q50.0 94.0 39.1 95.3 Q27.3 95.3 23.6 84.0 Q21.5 73.3 16.9 63.3 Q13.3 52.1 22.8 45.1 Q32.4 39.7 40.4 32.3 Z" fill="#EC679B"></path><path d="M50.0 58.5 Q56.0 43.6 50.0 25.4 Q44.0 43.6 50.0 58.5 Z M55.2 62.3 Q71.3 63.4 86.7 52.1 Q67.6 52.0 55.2 62.3 Z M53.2 68.5 Q57.2 84.0 72.7 95.3 Q66.8 77.0 53.2 68.5 Z M46.8 68.5 Q33.2 77.0 27.3 95.3 Q42.8 84.0 46.8 68.5 Z M44.8 62.3 Q32.4 52.0 13.3 52.1 Q28.7 63.4 44.8 62.3 Z" fill="#C2346F"></path><circle cx="50" cy="64" r="11.0" fill="#FFE1EC"></circle><circle cx="50" cy="64" r="4.1" fill="#FFF1A8"></circle></svg></div>
        <div style="width: 40px; height: 40px; border-radius: 10px; background: #FFFFFF; display: flex; align-items: center; justify-content: center"><svg width="21" height="25" viewBox="0 0 100 120" aria-hidden="true"><path d="M38.6 26.3 Q50.0 18.0 61.4 26.3 Q71.0 35.1 82.4 41.5 Q93.7 49.8 89.4 63.2 Q84.0 75.0 81.4 87.8 Q77.0 101.2 63.0 101.2 Q50.0 99.7 37.0 101.2 Q23.0 101.2 18.6 87.8 Q16.0 75.0 10.6 63.2 Q6.3 49.8 17.6 41.5 Q29.0 35.1 38.6 26.3 Z" fill="#E9558F"></path><path d="M40.4 32.3 Q50.0 25.4 59.6 32.3 Q67.6 39.7 77.2 45.1 Q86.7 52.1 83.1 63.3 Q78.5 73.3 76.4 84.0 Q72.7 95.3 60.9 95.3 Q50.0 94.0 39.1 95.3 Q27.3 95.3 23.6 84.0 Q21.5 73.3 16.9 63.3 Q13.3 52.1 22.8 45.1 Q32.4 39.7 40.4 32.3 Z" fill="#EC679B"></path><path d="M50.0 58.5 Q56.0 43.6 50.0 25.4 Q44.0 43.6 50.0 58.5 Z M55.2 62.3 Q71.3 63.4 86.7 52.1 Q67.6 52.0 55.2 62.3 Z M53.2 68.5 Q57.2 84.0 72.7 95.3 Q66.8 77.0 53.2 68.5 Z M46.8 68.5 Q33.2 77.0 27.3 95.3 Q42.8 84.0 46.8 68.5 Z M44.8 62.3 Q32.4 52.0 13.3 52.1 Q28.7 63.4 44.8 62.3 Z" fill="#C2346F"></path><circle cx="50" cy="64" r="11.0" fill="#FFE1EC"></circle><circle cx="50" cy="64" r="4.1" fill="#FFF1A8"></circle></svg></div>
      </div>
      <span style="font-size: 13px; font-weight: 700; color: #17432F">Ícone do app</span>
    </div>

    <div style="width: 280px; background: #13241B; border-radius: 28px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 16px">
      <svg width="76" height="91" viewBox="0 0 100 120" role="img" aria-label="Símbolo em versão clara"><path d="M38.6 26.3 Q50.0 18.0 61.4 26.3 Q71.0 35.1 82.4 41.5 Q93.7 49.8 89.4 63.2 Q84.0 75.0 81.4 87.8 Q77.0 101.2 63.0 101.2 Q50.0 99.7 37.0 101.2 Q23.0 101.2 18.6 87.8 Q16.0 75.0 10.6 63.2 Q6.3 49.8 17.6 41.5 Q29.0 35.1 38.6 26.3 Z" fill="#E9558F"></path><path d="M40.4 32.3 Q50.0 25.4 59.6 32.3 Q67.6 39.7 77.2 45.1 Q86.7 52.1 83.1 63.3 Q78.5 73.3 76.4 84.0 Q72.7 95.3 60.9 95.3 Q50.0 94.0 39.1 95.3 Q27.3 95.3 23.6 84.0 Q21.5 73.3 16.9 63.3 Q13.3 52.1 22.8 45.1 Q32.4 39.7 40.4 32.3 Z" fill="#EC679B"></path><path d="M50.0 58.5 Q56.0 43.6 50.0 25.4 Q44.0 43.6 50.0 58.5 Z M55.2 62.3 Q71.3 63.4 86.7 52.1 Q67.6 52.0 55.2 62.3 Z M53.2 68.5 Q57.2 84.0 72.7 95.3 Q66.8 77.0 53.2 68.5 Z M46.8 68.5 Q33.2 77.0 27.3 95.3 Q42.8 84.0 46.8 68.5 Z M44.8 62.3 Q32.4 52.0 13.3 52.1 Q28.7 63.4 44.8 62.3 Z" fill="#C2346F"></path><circle cx="50" cy="64" r="11.0" fill="#FFE1EC"></circle><circle cx="50" cy="64" r="4.1" fill="#FFF1A8"></circle></svg>
      <span style="font-family: 'Bricolage Grotesque', system-ui, sans-serif; font-weight: 800; font-size: 32px; letter-spacing: -0.8px; color: #FFFFFF; text-align: center; line-height: 1.05">Meu Carajás<br>Super App</span>
      <span style="font-size: 13px; color: #CFE3D7">Feito pelo Comitê Jovem Entre Fases</span>
    </div>

  </div>

  <div style="display: flex; gap: 24px; flex-grow: 1">
    <div style="display: flex; gap: 12px; flex-grow: 1">
      <div style="flex: 1; border-radius: 18px; background: #1E5B40; padding: 14px; display: flex; flex-direction: column; justify-content: flex-end; color: #FFFFFF"><span style="font-weight: 700; font-size: 14px">Verde floresta</span><span style="font-size: 12px">#1E5B40</span></div>
      <div style="flex: 1; border-radius: 18px; background: #13241B; padding: 14px; display: flex; flex-direction: column; justify-content: flex-end; color: #FFFFFF"><span style="font-weight: 700; font-size: 14px">Mata escura</span><span style="font-size: 12px">#13241B</span></div>
      <div style="flex: 1; border-radius: 18px; background: #B4471C; padding: 14px; display: flex; flex-direction: column; justify-content: flex-end; color: #FFFFFF"><span style="font-weight: 700; font-size: 14px">Terra de Carajás</span><span style="font-size: 12px">#B4471C</span></div>
      <div style="flex: 1; border-radius: 18px; background: #E07A3F; padding: 14px; display: flex; flex-direction: column; justify-content: flex-end; color: #13241B"><span style="font-weight: 700; font-size: 14px">Minério</span><span style="font-size: 12px">#E07A3F</span></div>
      <div style="flex: 1; border-radius: 18px; background: #FFFFFF; padding: 14px; display: flex; flex-direction: column; justify-content: flex-end; color: #13241B; border: 1px solid #E2E7E0"><span style="font-weight: 700; font-size: 14px">Fundo</span><span style="font-size: 12px">#F4F6F1</span></div>
    </div>
    <div style="width: 300px; border-radius: 18px; background: #FFFFFF; padding: 14px 18px; display: flex; flex-direction: column; justify-content: center; gap: 4px">
      <span style="font-family: 'Bricolage Grotesque', system-ui, sans-serif; font-weight: 800; font-size: 26px; letter-spacing: -0.5px">Bricolage Grotesque</span>
      <span style="font-size: 14px; color: #4F5E55">DM Sans para textos e botões</span>
    </div>
  </div>

</div>
</x-dc>
<script type="text/x-dc" data-dc-script data-props='{"brand":{"editor":"color","default":"#1E5B40","options":["#1E5B40","#17432F","#24578C"]},"accent":{"editor":"color","default":"#E07A3F","options":["#E07A3F","#D4A017","#C2562B"]},"$preview":{"width":1240,"height":620}}'>
class Component extends DCLogic {
  renderVals() {
    return {
      brand: this.props.brand ?? '#1E5B40',
      accent: this.props.accent ?? '#E07A3F'
    };
  }
}
<\/script>
</body>
</html>
`;export{e as default};
