const e=`<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<title>Meu Carajás Organizadores – Painel</title>
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
.sc > *{flex-shrink:0}
</style>
</helmet>
<div style="width: 390px; height: 844px; box-sizing: border-box; overflow: hidden; background: #F4F6F1; font-family: 'DM Sans', system-ui, sans-serif; color: #13241B; display: flex; flex-direction: column">
  <div style="background: #13241B; color: #FFFFFF; padding: 52px 20px 18px 20px; display: flex; flex-direction: column; gap: 4px; flex-shrink: 0">
    <span style="display: flex; align-items: center; gap: 8px"><svg width="18" height="22" viewBox="0 0 100 120" aria-hidden="true"><path d="M38.6 26.3 Q50.0 18.0 61.4 26.3 Q71.0 35.1 82.4 41.5 Q93.7 49.8 89.4 63.2 Q84.0 75.0 81.4 87.8 Q77.0 101.2 63.0 101.2 Q50.0 99.7 37.0 101.2 Q23.0 101.2 18.6 87.8 Q16.0 75.0 10.6 63.2 Q6.3 49.8 17.6 41.5 Q29.0 35.1 38.6 26.3 Z" fill="#E9558F"></path><path d="M40.4 32.3 Q50.0 25.4 59.6 32.3 Q67.6 39.7 77.2 45.1 Q86.7 52.1 83.1 63.3 Q78.5 73.3 76.4 84.0 Q72.7 95.3 60.9 95.3 Q50.0 94.0 39.1 95.3 Q27.3 95.3 23.6 84.0 Q21.5 73.3 16.9 63.3 Q13.3 52.1 22.8 45.1 Q32.4 39.7 40.4 32.3 Z" fill="#EC679B"></path><path d="M50.0 58.5 Q56.0 43.6 50.0 25.4 Q44.0 43.6 50.0 58.5 Z M55.2 62.3 Q71.3 63.4 86.7 52.1 Q67.6 52.0 55.2 62.3 Z M53.2 68.5 Q57.2 84.0 72.7 95.3 Q66.8 77.0 53.2 68.5 Z M46.8 68.5 Q33.2 77.0 27.3 95.3 Q42.8 84.0 46.8 68.5 Z M44.8 62.3 Q32.4 52.0 13.3 52.1 Q28.7 63.4 44.8 62.3 Z" fill="#C2346F"></path><circle cx="50" cy="64" r="11.0" fill="#FFE1EC"></circle><circle cx="50" cy="64" r="4.1" fill="#FFF1A8"></circle></svg><span style="font-size: 12px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: #FFD27A">Organizador</span></span>
    <span style="font-family: 'Bricolage Grotesque', system-ui, sans-serif; font-weight: 800; font-size: 26px; letter-spacing: -0.4px">Olá, Lucca</span>
    <span style="font-size: 14px; color: #CFE3D7">Administração do Núcleo · pode publicar avisos oficiais</span>
  </div>
  <div class="sc" style="flex-grow: 1; min-height: 0; overflow-y: auto; padding: 16px 20px 24px 20px; display: flex; flex-direction: column; gap: 14px">

    <a href="AdminPublicar.dc.html" style="text-decoration: none; height: 60px; box-sizing: border-box; border-radius: 30px; background: #B4471C; color: #FFFFFF; font-weight: 700; font-size: 17px; display: flex; align-items: center; justify-content: center; gap: 10px"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"></path></svg>Publicar informação</a>

    <span style="font-family: 'Bricolage Grotesque', system-ui, sans-serif; font-weight: 700; font-size: 18px">Precisa da sua atenção</span>
    <a href="AdminAlcance.dc.html" style="text-decoration: none; color: #13241B; background: #FFFFFF; border-radius: 20px; padding: 14px 16px; display: flex; align-items: center; gap: 12px">
      <span style="width: 44px; height: 44px; border-radius: 12px; background: #FBDCD6; display: flex; align-items: center; justify-content: center; flex-shrink: 0"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#9B1C10" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 3v18h18"></path><path d="m7 15 4-4 3 3 5-6"></path></svg></span>
      <span style="display: flex; flex-direction: column; flex-grow: 1"><span style="font-weight: 700; font-size: 15px">Aviso de água abaixo da meta</span><span style="font-size: 13px; color: #4F5E55">Ainda não chegou a 95% das casas</span></span>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4F5E55" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg>
    </a>
    <a href="AdminEnergia.dc.html" style="text-decoration: none; color: #13241B; background: #FFFFFF; border-radius: 20px; padding: 14px 16px; display: flex; align-items: center; gap: 12px">
      <span style="width: 44px; height: 44px; border-radius: 12px; background: #B4471C; display: flex; align-items: center; justify-content: center; flex-shrink: 0"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z"></path></svg></span>
      <span style="display: flex; flex-direction: column; flex-grow: 1"><span style="font-weight: 700; font-size: 15px">Moradores sem luz</span><span style="font-size: 13px; color: #4F5E55">Rua Juruá e Rua Paru · 10 relatos</span></span>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4F5E55" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg>
    </a>
    <a href="AdminAprovar.dc.html" style="text-decoration: none; color: #13241B; background: #FFFFFF; border-radius: 20px; padding: 14px 16px; display: flex; align-items: center; gap: 12px">
      <span style="width: 44px; height: 44px; border-radius: 12px; background: #F8EDC9; display: flex; align-items: center; justify-content: center; flex-shrink: 0"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7A5806" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="3"></rect><path d="m8 12 3 3 5-6"></path></svg></span>
      <span style="display: flex; flex-direction: column; flex-grow: 1"><span style="font-weight: 700; font-size: 15px">Aguardando aprovação</span><span style="font-size: 13px; color: #4F5E55">3 eventos de grupos da cidade</span></span>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4F5E55" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg>
    </a>

    <span style="font-family: 'Bricolage Grotesque', system-ui, sans-serif; font-weight: 700; font-size: 18px">Ferramentas</span>
    <div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px">
      <a href="AdminAlcance.dc.html" style="text-decoration: none; box-sizing: border-box; background: #FFFFFF; border-radius: 18px; padding: 12px; min-height: 92px; display: flex; flex-direction: column; justify-content: space-between; gap: 8px">
        <span style="width: 36px; height: 36px; border-radius: 11px; background: #FBDCD6; display: flex; align-items: center; justify-content: center"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9B1C10" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 3v18h18"></path><path d="m7 15 4-4 3 3 5-6"></path></svg></span>
        <span style="display: flex; flex-direction: column"><span style="font-weight: 700; font-size: 14px; color: #13241B">Alcance dos avisos</span><span style="font-size: 12px; color: #4F5E55">Quem já recebeu</span></span>
      </a>
      <a href="AdminRepresentantes.dc.html" style="text-decoration: none; box-sizing: border-box; background: #FFFFFF; border-radius: 18px; padding: 12px; min-height: 92px; display: flex; flex-direction: column; justify-content: space-between; gap: 8px">
        <span style="width: 36px; height: 36px; border-radius: 11px; background: #DFE9F5; display: flex; align-items: center; justify-content: center"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#24578C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 10.5 12 3l9 7.5V21H3z"></path><path d="m9 15 2 2 4-4"></path></svg></span>
        <span style="display: flex; flex-direction: column"><span style="font-weight: 700; font-size: 14px; color: #13241B">Representantes</span><span style="font-size: 12px; color: #4F5E55">Porta a porta</span></span>
      </a>
      <a href="AdminPosEvento.dc.html" style="text-decoration: none; box-sizing: border-box; background: #FFFFFF; border-radius: 18px; padding: 12px; min-height: 92px; display: flex; flex-direction: column; justify-content: space-between; gap: 8px">
        <span style="width: 36px; height: 36px; border-radius: 11px; background: #DCEDE2; display: flex; align-items: center; justify-content: center"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E5B40" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"></rect><path d="M16 2v4M8 2v4M3 10h18"></path><path d="m9 16 2 2 4-4"></path></svg></span>
        <span style="display: flex; flex-direction: column"><span style="font-weight: 700; font-size: 14px; color: #13241B">Depois do evento</span><span style="font-size: 12px; color: #4F5E55">Check-in e resultado</span></span>
      </a>
      <a href="AdminColeta.dc.html" style="text-decoration: none; box-sizing: border-box; background: #FFFFFF; border-radius: 18px; padding: 12px; min-height: 92px; display: flex; flex-direction: column; justify-content: space-between; gap: 8px">
        <span style="width: 36px; height: 36px; border-radius: 11px; background: #D6ECE6; display: flex; align-items: center; justify-content: center"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2E7D66" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 7h11v9H3z"></path><path d="M14 10h4l3 3v3h-7"></path><circle cx="7" cy="17.5" r="1.8"></circle><circle cx="17" cy="17.5" r="1.8"></circle></svg></span>
        <span style="display: flex; flex-direction: column"><span style="font-weight: 700; font-size: 14px; color: #13241B">Coleta seletiva</span><span style="font-size: 12px; color: #4F5E55">Rota do caminhão</span></span>
      </a>
      <a href="AdminCasas.dc.html" style="text-decoration: none; box-sizing: border-box; background: #FFFFFF; border-radius: 18px; padding: 12px; min-height: 92px; display: flex; flex-direction: column; justify-content: space-between; gap: 8px">
        <span style="width: 36px; height: 36px; border-radius: 11px; background: #FBE6DA; display: flex; align-items: center; justify-content: center"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B4471C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 10.5 12 3l9 7.5V21H3z"></path><path d="M14.5 13.5l3-3M15 16l3 3"></path><circle cx="10" cy="15" r="2.5"></circle></svg></span>
        <span style="display: flex; flex-direction: column"><span style="font-weight: 700; font-size: 14px; color: #13241B">Casas</span><span style="font-size: 12px; color: #4F5E55">Reformas e serviços</span></span>
      </a>
      <a href="AdminTrilhas.dc.html" style="text-decoration: none; box-sizing: border-box; background: #FFFFFF; border-radius: 18px; padding: 12px; min-height: 92px; display: flex; flex-direction: column; justify-content: space-between; gap: 8px">
        <span style="width: 36px; height: 36px; border-radius: 11px; background: #E3EEDC; display: flex; align-items: center; justify-content: center"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3F6B1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 2.5 14 9h2.5L13 15h10l-3.5-6H22z"></path><path d="M18 15v6.5"></path><path d="M2 21.5h20"></path><circle cx="7" cy="16" r="2"></circle></svg></span>
        <span style="display: flex; flex-direction: column"><span style="font-weight: 700; font-size: 14px; color: #13241B">Trilhas</span><span style="font-size: 12px; color: #4F5E55">Abertas e fechadas</span></span>
      </a>
      <a href="AdminImpacto.dc.html" style="text-decoration: none; box-sizing: border-box; background: #FFFFFF; border-radius: 18px; padding: 12px; min-height: 92px; display: flex; flex-direction: column; justify-content: space-between; gap: 8px">
        <span style="width: 36px; height: 36px; border-radius: 11px; background: #F8EDC9; display: flex; align-items: center; justify-content: center"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7A5806" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"></path></svg></span>
        <span style="display: flex; flex-direction: column"><span style="font-weight: 700; font-size: 14px; color: #13241B">Impacto</span><span style="font-size: 12px; color: #4F5E55">Números para a Vale</span></span>
      </a>
      <a href="AdminPublicar.dc.html" style="text-decoration: none; box-sizing: border-box; background: #FFFFFF; border-radius: 18px; padding: 12px; min-height: 92px; display: flex; flex-direction: column; justify-content: space-between; gap: 8px">
        <span style="width: 36px; height: 36px; border-radius: 11px; background: #ECE4F5; display: flex; align-items: center; justify-content: center"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5B3A8C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><path d="M14 3v6h6"></path><path d="M8 14h8M8 17h5"></path></svg></span>
        <span style="display: flex; flex-direction: column"><span style="font-weight: 700; font-size: 14px; color: #13241B">Rascunhos</span><span style="font-size: 12px; color: #4F5E55">Continuar editando</span></span>
      </a>
    </div>

    <span style="font-family: 'Bricolage Grotesque', system-ui, sans-serif; font-weight: 700; font-size: 18px">Coleta seletiva</span>
    <div style="background: #FFFFFF; border-radius: 20px; padding: 14px 16px; display: flex; flex-direction: column; gap: 12px">
      <span style="display: flex; align-items: center; gap: 10px">
        <span style="width: 40px; height: 40px; border-radius: 12px; background: #DCEDE2; display: flex; align-items: center; justify-content: center; flex-shrink: 0"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1E5B40" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 6h18"></path><path d="M8 6V4h8v2"></path><path d="M5 6l1 15h12l1-15"></path><path d="M10 11v6M14 11v6"></path></svg></span>
        <span style="display: flex; flex-direction: column; flex-grow: 1"><span style="font-weight: 700; font-size: 16px">Coleta seletiva</span><span style="font-size: 13px; color: #4F5E55">O que os moradores veem no app</span></span>
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
      <button onClick="{{colEdit}}" style="border: 2px solid #13241B; cursor: pointer; height: 44px; border-radius: 22px; font-weight: 700; font-size: 14px; background: #FFFFFF; color: #13241B">{{colEditLabel}}</button>
      <span style="font-size: 11px; color: #4F5E55">Cronograma oficial da coleta seletiva do Núcleo (PRO 022144).</span>
    </div>

    <span style="font-family: 'Bricolage Grotesque', system-ui, sans-serif; font-weight: 700; font-size: 18px">Agendados e rascunhos</span>
    <div style="background: #FFFFFF; border-radius: 20px; padding: 4px 16px; display: flex; flex-direction: column">
      <div style="display: flex; align-items: center; gap: 10px; padding: 12px 0; border-bottom: 1px solid #EEF1EC">
        <span style="display: flex; flex-direction: column; flex-grow: 1; min-width: 0"><span style="font-size: 11px; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase; color: #4F5E55">Energia · para gestores</span><span style="font-weight: 700; font-size: 15px">Lembrete de desligamento</span><span style="font-size: 12px; color: #4F5E55">Sai em 11/11, às 18h</span></span>
        <span style="font-size: 11px; font-weight: 700; text-transform: uppercase; background: #DFE9F5; color: #24578C; padding: 4px 8px; border-radius: 6px">Agendado</span>
      </div>
      <a href="AdminPublicar.dc.html" style="text-decoration: none; color: #13241B; display: flex; align-items: center; gap: 10px; padding: 12px 0">
        <span style="display: flex; flex-direction: column; flex-grow: 1; min-width: 0"><span style="font-size: 11px; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase; color: #4F5E55">Evento · para jovens</span><span style="font-weight: 700; font-size: 15px">Torneio de videogame</span><span style="font-size: 12px; color: #4F5E55">Falta: data e local</span></span>
        <span style="font-size: 11px; font-weight: 700; text-transform: uppercase; background: #ECE4F5; color: #5B3A8C; padding: 4px 8px; border-radius: 6px">Rascunho</span>
      </a>
    </div>

    <span style="font-family: 'Bricolage Grotesque', system-ui, sans-serif; font-weight: 700; font-size: 18px">Publicados por você</span>
    <div style="background: #FFFFFF; border-radius: 20px; padding: 4px 16px; display: flex; flex-direction: column">
      <sc-for list="{{posts}}" as="p" hint-placeholder-count="3">
        <div style="display: flex; align-items: center; gap: 10px; padding: 12px 0; border-bottom: 1px solid #EEF1EC">
          <a href="{{p.href}}" style="text-decoration: none; display: flex; flex-direction: column; flex-grow: 1; min-width: 0"><span style="font-size: 11px; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase; color: #4F5E55">{{p.kind}}</span><span style="font-weight: 700; font-size: 15px; color: #13241B">{{p.title}}</span><span style="font-size: 12px; color: #1E5B40; font-weight: 700">{{p.link}}</span></a>
          <button onClick="{{p.toggle}}" aria-pressed="{{p.pressed}}" style="border: none; cursor: pointer; height: 36px; padding: 0 12px; border-radius: 18px; font-size: 12px; font-weight: 700; background: {{p.bg}}; color: {{p.fg}}; flex-shrink: 0">{{p.label}}</button>
        </div>
      </sc-for>
    </div>
    <span style="font-size: 12px; color: #4F5E55">Toque em “No ar” para tirar do app.</span>

    <span style="font-family: 'Bricolage Grotesque', system-ui, sans-serif; font-weight: 700; font-size: 18px">Famílias cadastradas</span>
    <span style="font-size: 13px; color: #4F5E55">{{famResumo}}</span>
    <div style="background: #FFFFFF; border-radius: 20px; padding: 4px 16px; display: flex; flex-direction: column">
      <sc-for list="{{families}}" as="f" hint-placeholder-count="3">
        <div style="display: flex; align-items: flex-start; gap: 12px; padding: 12px 0; border-bottom: 1px solid #EEF1EC">
          <span aria-hidden="true" style="width: 44px; height: 44px; border-radius: 22px; background: #DCEDE2; color: #17432F; display: flex; align-items: center; justify-content: center; font-family: 'Bricolage Grotesque', system-ui, sans-serif; font-weight: 800; font-size: 17px; flex-shrink: 0">{{f.initial}}</span>
          <span style="display: flex; flex-direction: column; flex-grow: 1; min-width: 0"><span style="font-size: 11px; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase; color: #4F5E55">{{f.code}}</span><span style="font-weight: 700; font-size: 15px; color: #13241B">{{f.title}}</span><span style="font-size: 12px; color: #4F5E55">{{f.members}}</span></span>
        </div>
      </sc-for>
    </div>

  </div>
  <nav aria-label="Navegação do organizador" style="flex-shrink: 0; height: 80px; background: #13241B; display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); padding: 6px 4px 18px 4px; box-sizing: border-box">
    <a href="AdminInicio.dc.html" aria-current="page" style="text-decoration: none; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 3px; color: #FFD27A; font-size: 11px; font-weight: 700"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx="1.5"></rect><rect x="14" y="3" width="7" height="7" rx="1.5"></rect><rect x="3" y="14" width="7" height="7" rx="1.5"></rect><rect x="14" y="14" width="7" height="7" rx="1.5"></rect></svg>Painel</a>
    <a href="AdminPublicar.dc.html" style="text-decoration: none; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 3px; color: #CFE3D7; font-size: 11px; font-weight: 600"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><path d="M12 8v8M8 12h8"></path></svg>Publicar</a>
    <a href="AdminEnergia.dc.html" style="text-decoration: none; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 3px; color: #CFE3D7; font-size: 11px; font-weight: 600"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z"></path></svg>Energia</a>
    <a href="AdminAprovar.dc.html" style="text-decoration: none; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 3px; color: #CFE3D7; font-size: 11px; font-weight: 600"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="3"></rect><path d="m8 12 3 3 5-6"></path></svg>Aprovar</a>
    <a href="AdminEquipe.dc.html" style="text-decoration: none; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 3px; color: #CFE3D7; font-size: 11px; font-weight: 600"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="9" cy="8" r="3.5"></circle><path d="M2.5 20a6.5 6.5 0 0 1 13 0"></path><path d="M16 4.5a3.5 3.5 0 0 1 0 7"></path><path d="M18 14.5a6.5 6.5 0 0 1 3.5 5.5"></path></svg>Equipe</a>
  </nav>
</div>
</x-dc>
<script type="text/x-dc" data-dc-script data-props='{"$preview":{"width":390,"height":844}}'>
class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { off: {}, colDay: null, colTips: false, colEdited: false };
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
    const off = this.state.off;
    const all = [
      { id: 'agua', kind: 'Aviso · Importante · todos', title: 'Interrupção no fornecimento de água', href: 'AdminAlcance.dc.html', link: 'Ver alcance' },
      { id: 'vac', kind: 'Aviso · Informativo · todos', title: 'Campanha de vacinação', href: 'AdminAlcance.dc.html', link: 'Ver alcance' },
      { id: 'cine', kind: 'Evento · para jovens', title: 'CineFases', href: 'AdminPosEvento.dc.html', link: 'Check-in e resultado' }
    ];
    const familias = [
      { code: 'CKS-4821', address: 'Rua Japurá, 12', people: [['Lucca Ribeiro', 'gestor da casa'], ['Marina Ribeiro', 'gestor da casa'], ['Davi Ribeiro', 'jovem'], ['Duda Ribeiro', 'jovem, esperando aprovação']] }
    ];
    const pessoas = familias.reduce((n, f) => n + f.people.length, 0);
    return {
      ...this.coletaVals(),
      families: familias.map((f) => ({
        code: [f.code, f.address, f.people.length + (f.people.length === 1 ? ' morador' : ' moradores')].filter((x) => x).join(' · '),
        initial: (f.people[0] ? f.people[0][0] : '?').charAt(0).toUpperCase(),
        title: f.people.map((p) => p[0].split(' ')[0]).join(', '),
        members: f.people.map((p) => p[0] + ' (' + p[1] + ')').join(' · ')
      })),
      famResumo: familias.length + (familias.length === 1 ? ' família' : ' famílias') + ' · ' + pessoas + (pessoas === 1 ? ' morador com conta' : ' moradores com conta'),
      posts: all.map((p) => {
        const o = !!off[p.id];
        return Object.assign({}, p, {
          pressed: o ? 'false' : 'true',
          label: o ? 'Fora do ar' : 'No ar',
          bg: o ? '#E2E7E0' : '#DCEDE2',
          fg: o ? '#4F5E55' : '#17432F',
          toggle: () => {
            const n = Object.assign({}, this.state.off);
            n[p.id] = !n[p.id];
            this.setState({ off: n });
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
