const e=`<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<title>Meu Carajás Super App – Tela inicial</title>
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
.home-scroll > *{flex-shrink:0}
</style>
</helmet>
<div style="width: 390px; height: 844px; box-sizing: border-box; position: relative; overflow: hidden; background: #F4F6F1; font-family: 'DM Sans', system-ui, sans-serif; color: #13241B">

  <div class="home-scroll" style="position: absolute; top: 0; left: 0; right: 0; bottom: 80px; overflow-y: auto; box-sizing: border-box; padding: 52px 20px 28px 20px; display: flex; flex-direction: column; gap: 12px">

    <div style="display: flex; align-items: center; justify-content: space-between">
      <div style="display: flex; align-items: center; gap: 10px">
        <svg width="30" height="36" viewBox="0 0 100 120" aria-hidden="true"><path d="M38.6 26.3 Q50.0 18.0 61.4 26.3 Q71.0 35.1 82.4 41.5 Q93.7 49.8 89.4 63.2 Q84.0 75.0 81.4 87.8 Q77.0 101.2 63.0 101.2 Q50.0 99.7 37.0 101.2 Q23.0 101.2 18.6 87.8 Q16.0 75.0 10.6 63.2 Q6.3 49.8 17.6 41.5 Q29.0 35.1 38.6 26.3 Z" fill="#E9558F"></path><path d="M40.4 32.3 Q50.0 25.4 59.6 32.3 Q67.6 39.7 77.2 45.1 Q86.7 52.1 83.1 63.3 Q78.5 73.3 76.4 84.0 Q72.7 95.3 60.9 95.3 Q50.0 94.0 39.1 95.3 Q27.3 95.3 23.6 84.0 Q21.5 73.3 16.9 63.3 Q13.3 52.1 22.8 45.1 Q32.4 39.7 40.4 32.3 Z" fill="#EC679B"></path><path d="M50.0 58.5 Q56.0 43.6 50.0 25.4 Q44.0 43.6 50.0 58.5 Z M55.2 62.3 Q71.3 63.4 86.7 52.1 Q67.6 52.0 55.2 62.3 Z M53.2 68.5 Q57.2 84.0 72.7 95.3 Q66.8 77.0 53.2 68.5 Z M46.8 68.5 Q33.2 77.0 27.3 95.3 Q42.8 84.0 46.8 68.5 Z M44.8 62.3 Q32.4 52.0 13.3 52.1 Q28.7 63.4 44.8 62.3 Z" fill="#C2346F"></path><circle cx="50" cy="64" r="11.0" fill="#FFE1EC"></circle><circle cx="50" cy="64" r="4.1" fill="#FFF1A8"></circle></svg>
        <span style="font-family: 'Bricolage Grotesque', system-ui, sans-serif; font-weight: 800; font-size: 20px; letter-spacing: -0.3px; color: #13241B">Meu Carajás Super App</span>
      </div>
      <a href="Avisos.dc.html" aria-label="Notificações" style="width: 44px; height: 44px; border-radius: 22px; background: #FFFFFF; display: flex; align-items: center; justify-content: center; position: relative">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#13241B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path></svg>
        <span style="position: absolute; top: 10px; right: 11px; width: 9px; height: 9px; border-radius: 5px; background: #B4471C; border: 2px solid #FFFFFF"></span>
      </a>
    </div>

    <div style="display: flex; flex-direction: column; gap: 2px">
      <span style="font-family: 'Bricolage Grotesque', system-ui, sans-serif; font-weight: 700; font-size: 26px; letter-spacing: -0.4px">Olá, Lucca!</span>
      <span style="font-size: 15px; color: #4F5E55">O que está rolando no Núcleo hoje</span>
    </div>

    <a href="Energia.dc.html" style="text-decoration: none; box-sizing: border-box; background: {{brand}}; color: #FFFFFF; border-radius: 20px; padding: 16px 18px; display: flex; align-items: center; gap: 14px; min-height: 84px">
      <span style="width: 48px; height: 48px; border-radius: 14px; background: rgba(255,255,255,0.14); display: flex; align-items: center; justify-content: center; flex-shrink: 0">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#FFD27A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z"></path></svg>
      </span>
      <span style="display: flex; flex-direction: column; gap: 3px; flex-grow: 1">
        <span style="font-size: 12px; font-weight: 700; letter-spacing: 0.8px; text-transform: uppercase; color: #CFE3D7">Energia</span>
        <span style="font-family: 'Bricolage Grotesque', system-ui, sans-serif; font-size: 18px; font-weight: 700; color: #FFFFFF">Luz normal na sua rua</span>
        <span style="font-size: 13px; color: #CFE3D7">Próximo desligamento programado: quinta, 12/11</span>
      </span>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg>
    </a>

    <span style="font-family: 'Bricolage Grotesque', system-ui, sans-serif; font-weight: 700; font-size: 18px">O que você procura?</span>

    <div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px">
      <a href="Desapego.dc.html" style="text-decoration: none; box-sizing: border-box; background: #FFFFFF; border-radius: 20px; padding: 14px; height: 84px; display: flex; flex-direction: column; justify-content: space-between">
        <span style="width: 36px; height: 36px; border-radius: 11px; background: #FBE6DA; display: flex; align-items: center; justify-content: center">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#B4471C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8z"></path><circle cx="7.5" cy="7.5" r="1.5"></circle></svg>
        </span>
        <span style="display: flex; flex-direction: column"><span style="font-weight: 700; font-size: 15px; color: #13241B">Desapego</span><span style="font-size: 12px; color: #4F5E55">Vender, comprar, doar</span></span>
      </a>
      <a href="Eventos.dc.html" style="text-decoration: none; box-sizing: border-box; background: #FFFFFF; border-radius: 20px; padding: 14px; height: 84px; display: flex; flex-direction: column; justify-content: space-between">
        <span style="width: 36px; height: 36px; border-radius: 11px; background: #DCEDE2; display: flex; align-items: center; justify-content: center">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1E5B40" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"></rect><path d="M16 2v4M8 2v4M3 10h18"></path><path d="m9 16 2 2 4-4"></path></svg>
        </span>
        <span style="display: flex; flex-direction: column"><span style="font-weight: 700; font-size: 15px; color: #13241B">Eventos</span><span style="font-size: 12px; color: #4F5E55">Agenda do Núcleo</span></span>
      </a>
      <a href="Guia.dc.html" style="text-decoration: none; box-sizing: border-box; background: #FFFFFF; border-radius: 20px; padding: 14px; height: 84px; display: flex; flex-direction: column; justify-content: space-between">
        <span style="width: 36px; height: 36px; border-radius: 11px; background: #DFE9F5; display: flex; align-items: center; justify-content: center">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#24578C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 6l6-3 6 3 6-3v15l-6 3-6-3-6 3z"></path><path d="M9 3v15M15 6v15"></path></svg>
        </span>
        <span style="display: flex; flex-direction: column"><span style="font-weight: 700; font-size: 15px; color: #13241B">Guia do morador</span><span style="font-size: 12px; color: #4F5E55">Serviços e contatos</span></span>
      </a>
      <a href="Avisos.dc.html" style="text-decoration: none; box-sizing: border-box; background: #FFFFFF; border-radius: 20px; padding: 14px; height: 84px; display: flex; flex-direction: column; justify-content: space-between">
        <span style="width: 36px; height: 36px; border-radius: 11px; background: #F8EDC9; display: flex; align-items: center; justify-content: center">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7A5806" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m3 11 18-5v12L3 14v-3z"></path><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path></svg>
        </span>
        <span style="display: flex; flex-direction: column"><span style="font-weight: 700; font-size: 15px; color: #13241B">Avisos</span><span style="font-size: 12px; color: #4F5E55">Oficiais do Núcleo</span></span>
      </a>
      <a href="Trilhas.dc.html" style="text-decoration: none; box-sizing: border-box; background: #FFFFFF; border-radius: 20px; padding: 10px 12px; height: 64px; display: flex; align-items: center; gap: 10px">
        <span style="width: 40px; height: 40px; border-radius: 12px; background: #E3EEDC; display: flex; align-items: center; justify-content: center; flex-shrink: 0">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#3F6B1F" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 2.5 14 9h2.5L13 15h10l-3.5-6H22z"></path><path d="M18 15v6.5"></path><circle cx="7" cy="3.8" r="1.6"></circle><path d="M7.3 6.8 6 13"></path><path d="M6 13l-2.5 8.5"></path><path d="M6 13l3 3.2v5.3"></path><path d="M3.5 10.5 7.2 8l2.6 2.6"></path><path d="M2 21.5h20"></path></svg>
        </span>
        <span style="display: flex; flex-direction: column; min-width: 0"><span style="font-weight: 700; font-size: 15px; color: #13241B">Trilhas</span><span style="font-size: 12px; color: #4F5E55">Na floresta</span></span>
      </a>
      <a href="Carona.dc.html" style="text-decoration: none; box-sizing: border-box; background: #FFFFFF; border-radius: 20px; padding: 10px 12px; height: 64px; display: flex; align-items: center; gap: 10px">
        <span style="width: 40px; height: 40px; border-radius: 12px; background: #ECE4F5; display: flex; align-items: center; justify-content: center; flex-shrink: 0">
          <svg width="30" height="30" viewBox="0 0 24 24" aria-hidden="true"><path d="M2.5 15.5v-2.2c0-.9.6-1.6 1.4-1.8l2.6-.6 2.2-3.1c.4-.5 1-.8 1.6-.8h5.1c.6 0 1.2.3 1.6.8l2.4 3 1.6.4c.8.2 1.4.9 1.4 1.8v2.5c0 .6-.4 1-1 1h-17.9c-.6 0-1-.4-1-1z" fill="#7A52B3"></path><path d="M10 8.2h2.3v3H7.8z" fill="#FFFFFF"></path><path d="M13.4 8.2h1.9c.3 0 .6.1.8.4l1.9 2.6h-4.6z" fill="#FFFFFF"></path><circle cx="21.2" cy="13.2" r="0.7" fill="#FFD27A"></circle><circle cx="7" cy="16.6" r="2.5" fill="#3A2560"></circle><circle cx="7" cy="16.6" r="1" fill="#ECE4F5"></circle><circle cx="17" cy="16.6" r="2.5" fill="#3A2560"></circle><circle cx="17" cy="16.6" r="1" fill="#ECE4F5"></circle><path d="M.8 10.2h2.4M.4 12.4h1.6" stroke="#7A52B3" stroke-width="1.1" stroke-linecap="round"></path></svg>
        </span>
        <span style="display: flex; flex-direction: column; min-width: 0"><span style="font-weight: 700; font-size: 15px; color: #13241B">Carona</span><span style="font-size: 12px; color: #4F5E55">Para Parauapebas</span></span>
      </a>
      <a href="Onibus.dc.html" style="grid-column: 1 / -1; text-decoration: none; box-sizing: border-box; background: #FFFFFF; border-radius: 20px; padding: 10px 12px; height: 64px; display: flex; align-items: center; gap: 10px">
        <span style="width: 40px; height: 40px; border-radius: 12px; background: #DFE9F5; display: flex; align-items: center; justify-content: center; flex-shrink: 0">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#24578C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="3" width="16" height="15" rx="3"></rect><path d="M4 11h16M8 21v-3M16 21v-3"></path><circle cx="8" cy="14.5" r="1"></circle><circle cx="16" cy="14.5" r="1"></circle></svg>
        </span>
        <span style="display: flex; flex-direction: column; flex-grow: 1; min-width: 0"><span style="font-weight: 700; font-size: 15px; color: #13241B">Ônibus</span><span style="font-size: 12px; color: #4F5E55">Horários da van Carajás e Parauapebas</span></span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4F5E55" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex-shrink: 0"><path d="m9 18 6-6-6-6"></path></svg>
      </a>
    </div>

    <div style="background: #FFFFFF; border-radius: 20px; padding: 14px 16px; display: flex; flex-direction: column; gap: 12px">
      <span style="display: flex; align-items: center; gap: 10px">
        <span style="width: 40px; height: 40px; border-radius: 12px; background: #DCEDE2; display: flex; align-items: center; justify-content: center; flex-shrink: 0"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1E5B40" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 6h18"></path><path d="M8 6V4h8v2"></path><path d="M5 6l1 15h12l1-15"></path><path d="M10 11v6M14 11v6"></path></svg></span>
        <span style="display: flex; flex-direction: column; flex-grow: 1"><span style="font-weight: 700; font-size: 16px">Coleta seletiva</span><span style="font-size: 13px; color: #4F5E55">Deixe o lixo do lado de fora até as 10h</span></span>
        <span style="font-size: 12px; font-weight: 800; background: #13241B; color: #FFD27A; padding: 6px 10px; border-radius: 10px; flex-shrink: 0">Até 10h</span>
      </span>
      <div style="display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 6px">
        <sc-for list="{{colDays}}" as="d" hint-placeholder-count="5">
          <button onClick="{{d.pick}}" aria-pressed="{{d.pressed}}" aria-label="{{d.aria}}" style="border: {{d.border}}; box-sizing: border-box; cursor: pointer; min-height: 56px; border-radius: 12px; background: {{d.bg}}; color: {{d.fg}}; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px; padding: 4px 0">
            <span style="font-size: 12px; font-weight: 800">{{d.label}}</span>
            <span style="display: flex; gap: 2px; height: 7px"><sc-for list="{{d.dots}}" as="c" hint-placeholder-count="2"><span style="width: 7px; height: 7px; border-radius: 4px; background: {{c}}; border: 1px solid rgba(255,255,255,0.6); box-sizing: border-box"></span></sc-for></span>
            <span style="font-size: 9px; font-weight: 700">{{d.today}}</span>
          </button>
        </sc-for>
      </div>
      <span style="font-weight: 700; font-size: 14px">{{colTitle}}</span>
      <div style="display: flex; flex-direction: column; gap: 8px">
        <sc-for list="{{colItems}}" as="t" hint-placeholder-count="3">
          <span style="display: flex; align-items: center; gap: 10px">
            <span style="min-width: 128px; box-sizing: border-box; padding: 7px 10px; border-radius: 10px; background: {{t.color}}; color: {{t.fg}}; font-size: 13px; font-weight: 800; text-align: center">{{t.name}}</span>
            <span style="font-size: 12px; color: #4F5E55">{{t.tip}}</span>
          </span>
        </sc-for>
      </div>
      <button onClick="{{colToggleTips}}" aria-expanded="{{colTipsAttr}}" style="border: none; cursor: pointer; text-align: left; background: #F4F6F1; border-radius: 12px; padding: 10px 12px; min-height: 44px; font-weight: 700; font-size: 13px; color: #13241B">{{colTipsLabel}}</button>
      <sc-if value="{{colTips}}" hint-placeholder-val="{{ false }}">
        <span style="display: flex; flex-direction: column; gap: 6px; font-size: 13px; color: #13241B; padding: 0 4px">
          <span>• Restos de alimentos em sacos bem amarrados.</span>
          <span>• Vidro em recipiente resistente, para a segurança dos coletores.</span>
          <span>• Óleo de fritura em garrafas PET.</span>
          <span>• Entulho misto em sacos fortes, com cerca de 20 kg.</span>
          <span>• Pilhas, baterias e lâmpadas fluorescentes nos coletores dos supermercados.</span>
          <span>• Big Bag: segunda, terça, quinta e sexta.</span>
        </span>
      </sc-if>
      <span style="font-size: 11px; color: #4F5E55">Cronograma oficial da coleta seletiva do Núcleo (PRO 022144).</span>
    </div>

    <span style="display: flex; align-items: center; justify-content: space-between; margin-top: 6px">
      <span style="font-family: 'Bricolage Grotesque', system-ui, sans-serif; font-weight: 700; font-size: 18px">Próximos eventos</span>
      <a href="Eventos.dc.html" style="font-size: 14px; font-weight: 700; color: #1E5B40">Ver agenda</a>
    </span>

    <sc-for list="{{events}}" as="e" hint-placeholder-count="5">
      <div style="display: flex; align-items: center; gap: 12px; background: #FFFFFF; border-radius: 20px; padding: 12px; flex-shrink: 0">
        <span style="width: 52px; height: 52px; border-radius: 14px; background: {{e.dateBg}}; color: #FFFFFF; display: flex; flex-direction: column; align-items: center; justify-content: center; flex-shrink: 0"><span style="font-size: 11px; font-weight: 700; color: #FFD27A">{{e.mon}}</span><span style="font-family: 'Bricolage Grotesque', system-ui, sans-serif; font-weight: 800; font-size: 18px">{{e.day}}</span></span>
        <a href="Eventos.dc.html" style="text-decoration: none; display: flex; flex-direction: column; flex-grow: 1; min-width: 0"><span style="font-weight: 700; font-size: 15px; color: #13241B">{{e.name}}</span><span style="font-size: 13px; color: #4F5E55">{{e.info}}</span></a>
        <button onClick="{{e.toggle}}" aria-pressed="{{e.pressed}}" style="border: none; cursor: pointer; background: {{e.bg}}; color: {{e.fg}}; font-weight: 700; font-size: 14px; border-radius: 22px; height: 44px; padding: 0 14px; flex-shrink: 0">{{e.label}}</button>
      </div>
    </sc-for>

    <a href="Eventos.dc.html" style="text-decoration: none; flex-shrink: 0; height: 52px; box-sizing: border-box; border-radius: 26px; border: 2px solid #1E5B40; color: #1E5B40; font-weight: 700; font-size: 15px; display: flex; align-items: center; justify-content: center">Ver todos os eventos</a>

    <span style="font-family: 'Bricolage Grotesque', system-ui, sans-serif; font-weight: 700; font-size: 18px; margin-top: 6px">Serviços da casa</span>
    <div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px">
      <a href="Energia.dc.html" style="text-decoration: none; box-sizing: border-box; background: #FFFFFF; border-radius: 18px; padding: 12px; min-height: 96px; display: flex; flex-direction: column; justify-content: space-between; gap: 8px">
        <span style="display: flex; align-items: center; gap: 8px"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E5B40" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z"></path></svg><span style="font-weight: 700; font-size: 15px; color: #13241B">Energia</span></span>
        <span style="font-size: 12px; color: #4F5E55">Luz normal na sua rua</span>
      </a>
      <a href="Avisos.dc.html" style="text-decoration: none; box-sizing: border-box; background: #FFFFFF; border-radius: 18px; padding: 12px; min-height: 96px; display: flex; flex-direction: column; justify-content: space-between; gap: 8px">
        <span style="display: flex; align-items: center; gap: 8px"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#24578C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2.7C9 7 6 10.3 6 14a6 6 0 0 0 12 0c0-3.7-3-7-6-11.3z"></path></svg><span style="font-weight: 700; font-size: 15px; color: #13241B">Água</span><span style="font-size: 10px; font-weight: 700; text-transform: uppercase; background: #F8EDC9; color: #6B4D05; padding: 2px 6px; border-radius: 5px">Aviso</span></span>
        <span style="font-size: 12px; color: #4F5E55">Sem água quinta, 5/11, das 8h às 14h · Ruas Japurá, Jari e Juruá</span>
      </a>
    </div>

  </div>

  </div>

  <nav aria-label="Navegação principal" style="position: absolute; left: 0; right: 0; bottom: 0; height: 80px; background: #FFFFFF; border-top: 1px solid #E2E7E0; display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); padding: 6px 4px 18px 4px; box-sizing: border-box">
    <a href="Main.dc.html" aria-current="page" style="text-decoration: none; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 3px; color: {{brand}}; font-size: 11px; font-weight: 700"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 10.5 12 3l9 7.5V21h-6v-6H9v6H3z"></path></svg>Início</a>
    <a href="Eventos.dc.html" style="text-decoration: none; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 3px; color: #4F5E55; font-size: 11px; font-weight: 600"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"></rect><path d="M16 2v4M8 2v4M3 10h18"></path></svg>Eventos</a>
    <a href="Desapego.dc.html" style="text-decoration: none; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 3px; color: #4F5E55; font-size: 11px; font-weight: 600"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8z"></path><circle cx="7.5" cy="7.5" r="1.5"></circle></svg>Desapego</a>
    <a href="Energia.dc.html" style="text-decoration: none; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 3px; color: #4F5E55; font-size: 11px; font-weight: 600"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z"></path></svg>Energia</a>
    <a href="GestorFamilia.dc.html" style="text-decoration: none; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 3px; color: #4F5E55; font-size: 11px; font-weight: 600"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 10.5 12 3l9 7.5V21H3z"></path><circle cx="12" cy="13" r="2.5"></circle><path d="M8 21a4 4 0 0 1 8 0"></path></svg>Minha casa</a>
  </nav>

</div>
</x-dc>
<script type="text/x-dc" data-dc-script data-props='{"brand":{"editor":"color","default":"#1E5B40","options":["#1E5B40","#17432F","#24578C"]},"accent":{"editor":"color","default":"#E07A3F","options":["#E07A3F","#D4A017","#C2562B"]},"accentDark":{"editor":"color","default":"#B4471C"},"$preview":{"width":390,"height":844}}'>
class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { going: {}, colDay: null, colTips: false };
  }
  coletaVals() {
    const T = {
      food: ['Restos de alimentação', '#8B4A2B', '#FFFFFF', 'Em sacos bem amarrados'],
      comum: ['Lixo comum', '#5A5A63', '#FFFFFF', ''],
      plast: ['Plástico', '#9B1B30', '#FFFFFF', ''],
      vidro: ['Vidro', '#4E8A26', '#FFFFFF', 'Em recipiente resistente'],
      elet: ['Componentes elétricos', '#C98A12', '#13241B', ''],
      papel: ['Papel', '#2B2FA8', '#FFFFFF', ''],
      entulho: ['Entulho misto', '#111111', '#FFFFFF', 'Sacos fortes, cerca de 20 kg'],
      folhas: ['Resto de folhas', '#7DBB4A', '#13241B', ''],
      metal: ['Metálico', '#E3C800', '#13241B', '']
    };
    const sched = { 1: ['food'], 2: ['comum', 'plast', 'vidro', 'elet'], 3: ['food', 'papel', 'entulho', 'folhas'], 4: ['comum', 'plast', 'metal'], 5: ['food', 'papel'] };
    const labels = { 1: 'SEG', 2: 'TER', 3: 'QUA', 4: 'QUI', 5: 'SEX' };
    const full = { 1: 'Segunda', 2: 'Terça', 3: 'Quarta', 4: 'Quinta', 5: 'Sexta' };
    const today = new Date().getDay();
    let day = this.state.colDay;
    if (!day) day = today >= 1 && today <= 5 ? today : 1;
    return {
      colDays: [1, 2, 3, 4, 5].map((d) => {
        const on = d === day;
        return {
          label: labels[d],
          today: d === today ? 'HOJE' : ' ',
          aria: full[d] + (d === today ? ', hoje' : ''),
          pressed: on ? 'true' : 'false',
          bg: on ? '#13241B' : '#F4F6F1',
          fg: on ? '#FFFFFF' : '#4F5E55',
          border: d === today && !on ? '2px solid #13241B' : '2px solid transparent',
          dots: sched[d].map((k) => T[k][1]),
          pick: () => this.setState({ colDay: d })
        };
      }),
      colTitle: full[day] + (day === today ? ' (hoje)' : '') + ': ' + sched[day].length + (sched[day].length === 1 ? ' coleta' : ' coletas') + ' · até 10h',
      colItems: sched[day].map((k) => ({ name: T[k][0], color: T[k][1], fg: T[k][2], tip: T[k][3] })),
      colTips: !!this.state.colTips,
      colTipsAttr: this.state.colTips ? 'true' : 'false',
      colTipsLabel: this.state.colTips ? 'Esconder dicas' : 'Ver dicas de descarte',
      colToggleTips: () => this.setState({ colTips: !this.state.colTips }),
      colEditLabel: this.state.colEdited ? 'Cronograma salvo ✓' : 'Editar cronograma',
      colEdit: () => this.setState({ colEdited: !this.state.colEdited })
    };
  }
  renderVals() {
    const dark = this.props.accentDark ?? '#B4471C';
    const all = [
      { id: 'cine', name: 'CineFases', mon: 'NOV', day: '7', info: 'Comitê Jovem · Ingresso: 1 kg de alimento', dateBg: '#13241B' },
      { id: 'pizza', name: 'Noite de Pizza', mon: 'NOV', day: '13', info: 'Comitê Jovem · Salão de festas', dateBg: '#B4471C' },
      { id: 'olimp', name: 'Olimpíadas Entre Fases', mon: 'NOV', day: '21', info: 'Comitê Jovem · Ingresso solidário', dateBg: '#1E5B40' },
      { id: 'boas', name: 'Encontro de boas-vindas', mon: 'NOV', day: '28', info: 'Administração do Núcleo · Oficial', dateBg: '#24578C' },
      { id: 'game', name: 'Torneio de videogame', mon: 'DEZ', day: '5', info: 'Grêmio estudantil · Biblioteca', dateBg: '#5B3A8C' }
    ];
    return {
      ...this.coletaVals(),
      brand: this.props.brand ?? '#1E5B40',
      accent: this.props.accent ?? '#E07A3F',
      events: all.map((e) => {
        const g = !!this.state.going[e.id];
        return Object.assign({}, e, {
          pressed: g ? 'true' : 'false',
          label: g ? 'Confirmado' : 'Eu vou',
          bg: g ? '#DCEDE2' : dark,
          fg: g ? '#17432F' : '#FFFFFF',
          toggle: () => {
            const n = Object.assign({}, this.state.going);
            n[e.id] = !n[e.id];
            this.setState({ going: n });
          }
        });
      })
    };
  }
}
<\/script>
</body>
</html>
`;export{e as default};
