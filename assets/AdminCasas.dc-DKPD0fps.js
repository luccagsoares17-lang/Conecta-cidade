const e=`<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<title>Meu Carajás Organizadores – Casas e manutenção</title>
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
  <div style="background: #13241B; color: #FFFFFF; padding: 52px 20px 18px 20px; display: flex; align-items: center; gap: 12px; flex-shrink: 0">
    <a href="AdminInicio.dc.html" aria-label="Voltar para o painel" style="width: 44px; height: 44px; border-radius: 22px; background: #1C3327; display: flex; align-items: center; justify-content: center; flex-shrink: 0"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"></path></svg></a>
    <span style="display: flex; flex-direction: column; gap: 2px; min-width: 0">
      <span style="font-size: 11px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: #FFD27A">Meu Carajás Organizadores</span>
      <span style="font-family: 'Bricolage Grotesque', system-ui, sans-serif; font-weight: 800; font-size: 22px; letter-spacing: -0.4px">Casas e manutenção</span>
      <span style="font-size: 13px; color: #CFE3D7">Reformas, casas vazias e serviços</span>
    </span>
  </div>
  <div class="sc" style="flex-grow: 1; min-height: 0; overflow-y: auto; padding: 16px 20px 24px 20px; display: flex; flex-direction: column; gap: 14px">

    <div style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 8px">
      <sc-for list="{{cats}}" as="c" hint-placeholder-count="3">
        <button onClick="{{c.pick}}" aria-pressed="{{c.pressed}}" style="border: {{c.border}}; box-sizing: border-box; cursor: pointer; text-align: left; background: #FFFFFF; border-radius: 16px; padding: 10px 12px; display: flex; flex-direction: column; gap: 4px; min-height: 76px">
          <span style="display: flex; align-items: center; gap: 6px"><span style="width: 10px; height: 10px; border-radius: 5px; background: {{c.color}}"></span><span style="font-family: 'Bricolage Grotesque', system-ui, sans-serif; font-weight: 800; font-size: 22px; color: #13241B">{{c.count}}</span></span>
          <span style="font-size: 12px; font-weight: 700; color: #13241B">{{c.label}}</span>
        </button>
      </sc-for>
    </div>
    <sc-if value="{{filtered}}" hint-placeholder-val="{{ false }}">
      <button onClick="{{clear}}" style="align-self: flex-start; border: none; cursor: pointer; height: 40px; padding: 0 14px; border-radius: 20px; background: #13241B; color: #FFFFFF; font-weight: 700; font-size: 13px">Mostrar todas</button>
    </sc-if>

    <div style="background: #FFFFFF; border-radius: 20px; padding: 14px; display: flex; flex-direction: column; gap: 12px">
      <span style="display: flex; align-items: center; justify-content: space-between"><span style="font-weight: 700; font-size: 16px">Mapa das casas</span><span style="font-size: 12px; color: #4F5E55">por trecho de rua</span></span>
      <svg width="100%" viewBox="40 250 1080 1290" role="img" aria-label="Mapa do Núcleo Urbano de Carajás: 18 ruas divididas em 3 quarteirões" style="display: block; width: 100%; height: auto; border-radius: 12px; font-family: 'DM Sans', system-ui, sans-serif"><rect x="40" y="250" width="1080" height="1290" fill="#9EC28A"></rect><circle cx="300" cy="300" r="60" fill="#8DB678"></circle><circle cx="900" cy="300" r="80" fill="#8DB678"></circle><circle cx="1100" cy="900" r="70" fill="#8DB678"></circle><circle cx="200" cy="1500" r="90" fill="#8DB678"></circle><circle cx="700" cy="1520" r="70" fill="#8DB678"></circle><circle cx="1000" cy="1500" r="60" fill="#8DB678"></circle><path d="M120 250 C 200 330 400 420 600 440 C 800 460 1000 360 1120 560" fill="none" stroke="#F7F4EC" stroke-width="16"></path><text x="640" y="420" font-size="28" font-weight="700" fill="#13241B">PA-275 · Rod. Raimundo Mascarenhas</text><clipPath id="nucleoClip"><polygon points="85,600 840,600 1030,650 1040,1300 940,1480 840,1500 460,1490 270,1470 85,1420"></polygon></clipPath><polygon points="85,600 840,600 1030,650 1040,1300 940,1480 840,1500 460,1490 270,1470 85,1420" fill="#E9E3D3"></polygon><g clip-path="url(#nucleoClip)"><rect x="85" y="590" width="375" height="930" fill="#2C5D96" fill-opacity="{{qb0}}"></rect><rect x="460" y="590" width="380" height="930" fill="#6A47A8" fill-opacity="{{qb1}}"></rect><rect x="840" y="590" width="210" height="930" fill="#2E7D66" fill-opacity="{{qb2}}"></rect></g><line x1="270" y1="600" x2="270" y2="1470" stroke="#FFFFFF" stroke-width="10"></line><line x1="650" y1="600" x2="650" y2="1500" stroke="#FFFFFF" stroke-width="10"></line><line x1="935" y1="680" x2="935" y2="1470" stroke="#FFFFFF" stroke-width="10"></line><line x1="460" y1="600" x2="460" y2="1490" stroke="#F7F4EC" stroke-width="20"></line><line x1="460" y1="600" x2="460" y2="1490" stroke="#13241B" stroke-width="4" stroke-dasharray="16 12"></line><line x1="840" y1="600" x2="840" y2="1500" stroke="#F7F4EC" stroke-width="20"></line><line x1="840" y1="600" x2="840" y2="1500" stroke="#13241B" stroke-width="4" stroke-dasharray="16 12"></line><line x1="85" y1="600" x2="85" y2="1420" stroke="#F7F4EC" stroke-width="18"></line><path d="M85 600 L840 600 C 960 600 1030 650 1030 760 L1030 1290 L1120 1240" fill="none" stroke="#F7F4EC" stroke-width="18"></path><line x1="85" y1="655" x2="450" y2="655" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so0_0}}"></line><line x1="85" y1="655" x2="450" y2="655" stroke="{{sc0_0}}" stroke-width="{{sw0_0}}" stroke-linecap="round"></line><line x1="470" y1="655" x2="830" y2="655" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so0_1}}"></line><line x1="470" y1="655" x2="830" y2="655" stroke="{{sc0_1}}" stroke-width="{{sw0_1}}" stroke-linecap="round"></line><line x1="850" y1="655" x2="935" y2="655" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so0_2}}"></line><line x1="850" y1="655" x2="935" y2="655" stroke="{{sc0_2}}" stroke-width="{{sw0_2}}" stroke-linecap="round"></line><text x="205" y="644" font-size="22" font-weight="700" fill="#4F5E55">ACARÁ</text><line x1="85" y1="702" x2="450" y2="702" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so1_0}}"></line><line x1="85" y1="702" x2="450" y2="702" stroke="{{sc1_0}}" stroke-width="{{sw1_0}}" stroke-linecap="round"></line><line x1="470" y1="702" x2="830" y2="702" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so1_1}}"></line><line x1="470" y1="702" x2="830" y2="702" stroke="{{sc1_1}}" stroke-width="{{sw1_1}}" stroke-linecap="round"></line><line x1="850" y1="702" x2="935" y2="702" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so1_2}}"></line><line x1="850" y1="702" x2="935" y2="702" stroke="{{sc1_2}}" stroke-width="{{sw1_2}}" stroke-linecap="round"></line><text x="205" y="691" font-size="22" font-weight="700" fill="#4F5E55">AMAZONAS</text><line x1="85" y1="750" x2="450" y2="750" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so2_0}}"></line><line x1="85" y1="750" x2="450" y2="750" stroke="{{sc2_0}}" stroke-width="{{sw2_0}}" stroke-linecap="round"></line><line x1="470" y1="750" x2="830" y2="750" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so2_1}}"></line><line x1="470" y1="750" x2="830" y2="750" stroke="{{sc2_1}}" stroke-width="{{sw2_1}}" stroke-linecap="round"></line><line x1="850" y1="750" x2="935" y2="750" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so2_2}}"></line><line x1="850" y1="750" x2="935" y2="750" stroke="{{sc2_2}}" stroke-width="{{sw2_2}}" stroke-linecap="round"></line><text x="205" y="739" font-size="22" font-weight="700" fill="#4F5E55">ARAGUAIA</text><line x1="85" y1="797" x2="450" y2="797" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so3_0}}"></line><line x1="85" y1="797" x2="450" y2="797" stroke="{{sc3_0}}" stroke-width="{{sw3_0}}" stroke-linecap="round"></line><line x1="470" y1="797" x2="830" y2="797" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so3_1}}"></line><line x1="470" y1="797" x2="830" y2="797" stroke="{{sc3_1}}" stroke-width="{{sw3_1}}" stroke-linecap="round"></line><line x1="850" y1="797" x2="935" y2="797" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so3_2}}"></line><line x1="850" y1="797" x2="935" y2="797" stroke="{{sc3_2}}" stroke-width="{{sw3_2}}" stroke-linecap="round"></line><text x="205" y="786" font-size="22" font-weight="700" fill="#4F5E55">ARAPIUNS</text><line x1="85" y1="844" x2="450" y2="844" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so4_0}}"></line><line x1="85" y1="844" x2="450" y2="844" stroke="{{sc4_0}}" stroke-width="{{sw4_0}}" stroke-linecap="round"></line><line x1="470" y1="844" x2="830" y2="844" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so4_1}}"></line><line x1="470" y1="844" x2="830" y2="844" stroke="{{sc4_1}}" stroke-width="{{sw4_1}}" stroke-linecap="round"></line><line x1="850" y1="844" x2="1030" y2="844" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so4_2}}"></line><line x1="850" y1="844" x2="1030" y2="844" stroke="{{sc4_2}}" stroke-width="{{sw4_2}}" stroke-linecap="round"></line><text x="205" y="833" font-size="22" font-weight="700" fill="#4F5E55">CAETÉ</text><line x1="85" y1="892" x2="450" y2="892" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so5_0}}"></line><line x1="85" y1="892" x2="450" y2="892" stroke="{{sc5_0}}" stroke-width="{{sw5_0}}" stroke-linecap="round"></line><line x1="470" y1="892" x2="830" y2="892" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so5_1}}"></line><line x1="470" y1="892" x2="830" y2="892" stroke="{{sc5_1}}" stroke-width="{{sw5_1}}" stroke-linecap="round"></line><line x1="850" y1="892" x2="1030" y2="892" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so5_2}}"></line><line x1="850" y1="892" x2="1030" y2="892" stroke="{{sc5_2}}" stroke-width="{{sw5_2}}" stroke-linecap="round"></line><text x="205" y="881" font-size="22" font-weight="700" fill="#4F5E55">GRAJAÚ</text><line x1="85" y1="939" x2="450" y2="939" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so6_0}}"></line><line x1="85" y1="939" x2="450" y2="939" stroke="{{sc6_0}}" stroke-width="{{sw6_0}}" stroke-linecap="round"></line><line x1="470" y1="939" x2="830" y2="939" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so6_1}}"></line><line x1="470" y1="939" x2="830" y2="939" stroke="{{sc6_1}}" stroke-width="{{sw6_1}}" stroke-linecap="round"></line><line x1="850" y1="939" x2="1030" y2="939" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so6_2}}"></line><line x1="850" y1="939" x2="1030" y2="939" stroke="{{sc6_2}}" stroke-width="{{sw6_2}}" stroke-linecap="round"></line><text x="205" y="928" font-size="22" font-weight="700" fill="#4F5E55">GUAMÁ</text><line x1="85" y1="986" x2="450" y2="986" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so7_0}}"></line><line x1="85" y1="986" x2="450" y2="986" stroke="{{sc7_0}}" stroke-width="{{sw7_0}}" stroke-linecap="round"></line><line x1="470" y1="986" x2="830" y2="986" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so7_1}}"></line><line x1="470" y1="986" x2="830" y2="986" stroke="{{sc7_1}}" stroke-width="{{sw7_1}}" stroke-linecap="round"></line><line x1="850" y1="986" x2="1030" y2="986" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so7_2}}"></line><line x1="850" y1="986" x2="1030" y2="986" stroke="{{sc7_2}}" stroke-width="{{sw7_2}}" stroke-linecap="round"></line><text x="205" y="975" font-size="22" font-weight="700" fill="#4F5E55">IRIRI</text><line x1="85" y1="1033" x2="450" y2="1033" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so8_0}}"></line><line x1="85" y1="1033" x2="450" y2="1033" stroke="{{sc8_0}}" stroke-width="{{sw8_0}}" stroke-linecap="round"></line><line x1="470" y1="1033" x2="830" y2="1033" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so8_1}}"></line><line x1="470" y1="1033" x2="830" y2="1033" stroke="{{sc8_1}}" stroke-width="{{sw8_1}}" stroke-linecap="round"></line><line x1="850" y1="1033" x2="1030" y2="1033" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so8_2}}"></line><line x1="850" y1="1033" x2="1030" y2="1033" stroke="{{sc8_2}}" stroke-width="{{sw8_2}}" stroke-linecap="round"></line><text x="205" y="1022" font-size="22" font-weight="700" fill="#4F5E55">IGUARA</text><line x1="85" y1="1081" x2="450" y2="1081" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so9_0}}"></line><line x1="85" y1="1081" x2="450" y2="1081" stroke="{{sc9_0}}" stroke-width="{{sw9_0}}" stroke-linecap="round"></line><line x1="470" y1="1081" x2="830" y2="1081" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so9_1}}"></line><line x1="470" y1="1081" x2="830" y2="1081" stroke="{{sc9_1}}" stroke-width="{{sw9_1}}" stroke-linecap="round"></line><line x1="850" y1="1081" x2="1030" y2="1081" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so9_2}}"></line><line x1="850" y1="1081" x2="1030" y2="1081" stroke="{{sc9_2}}" stroke-width="{{sw9_2}}" stroke-linecap="round"></line><text x="205" y="1070" font-size="22" font-weight="700" fill="#4F5E55">ITACAIÚNAS</text><line x1="85" y1="1128" x2="450" y2="1128" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so10_0}}"></line><line x1="85" y1="1128" x2="450" y2="1128" stroke="{{sc10_0}}" stroke-width="{{sw10_0}}" stroke-linecap="round"></line><line x1="470" y1="1128" x2="830" y2="1128" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so10_1}}"></line><line x1="470" y1="1128" x2="830" y2="1128" stroke="{{sc10_1}}" stroke-width="{{sw10_1}}" stroke-linecap="round"></line><line x1="850" y1="1128" x2="1030" y2="1128" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so10_2}}"></line><line x1="850" y1="1128" x2="1030" y2="1128" stroke="{{sc10_2}}" stroke-width="{{sw10_2}}" stroke-linecap="round"></line><text x="205" y="1117" font-size="22" font-weight="700" fill="#4F5E55">JAPURÁ</text><line x1="85" y1="1175" x2="450" y2="1175" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so11_0}}"></line><line x1="85" y1="1175" x2="450" y2="1175" stroke="{{sc11_0}}" stroke-width="{{sw11_0}}" stroke-linecap="round"></line><line x1="470" y1="1175" x2="830" y2="1175" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so11_1}}"></line><line x1="470" y1="1175" x2="830" y2="1175" stroke="{{sc11_1}}" stroke-width="{{sw11_1}}" stroke-linecap="round"></line><line x1="850" y1="1175" x2="1030" y2="1175" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so11_2}}"></line><line x1="850" y1="1175" x2="1030" y2="1175" stroke="{{sc11_2}}" stroke-width="{{sw11_2}}" stroke-linecap="round"></line><text x="205" y="1164" font-size="22" font-weight="700" fill="#4F5E55">JARI</text><line x1="85" y1="1223" x2="450" y2="1223" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so12_0}}"></line><line x1="85" y1="1223" x2="450" y2="1223" stroke="{{sc12_0}}" stroke-width="{{sw12_0}}" stroke-linecap="round"></line><line x1="470" y1="1223" x2="830" y2="1223" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so12_1}}"></line><line x1="470" y1="1223" x2="830" y2="1223" stroke="{{sc12_1}}" stroke-width="{{sw12_1}}" stroke-linecap="round"></line><line x1="850" y1="1223" x2="1030" y2="1223" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so12_2}}"></line><line x1="850" y1="1223" x2="1030" y2="1223" stroke="{{sc12_2}}" stroke-width="{{sw12_2}}" stroke-linecap="round"></line><text x="205" y="1212" font-size="22" font-weight="700" fill="#4F5E55">JURUÁ</text><line x1="85" y1="1270" x2="450" y2="1270" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so13_0}}"></line><line x1="85" y1="1270" x2="450" y2="1270" stroke="{{sc13_0}}" stroke-width="{{sw13_0}}" stroke-linecap="round"></line><line x1="470" y1="1270" x2="830" y2="1270" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so13_1}}"></line><line x1="470" y1="1270" x2="830" y2="1270" stroke="{{sc13_1}}" stroke-width="{{sw13_1}}" stroke-linecap="round"></line><line x1="850" y1="1270" x2="1030" y2="1270" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so13_2}}"></line><line x1="850" y1="1270" x2="1030" y2="1270" stroke="{{sc13_2}}" stroke-width="{{sw13_2}}" stroke-linecap="round"></line><text x="205" y="1259" font-size="22" font-weight="700" fill="#4F5E55">MEARIM</text><line x1="85" y1="1317" x2="450" y2="1317" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so14_0}}"></line><line x1="85" y1="1317" x2="450" y2="1317" stroke="{{sc14_0}}" stroke-width="{{sw14_0}}" stroke-linecap="round"></line><line x1="470" y1="1317" x2="830" y2="1317" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so14_1}}"></line><line x1="470" y1="1317" x2="830" y2="1317" stroke="{{sc14_1}}" stroke-width="{{sw14_1}}" stroke-linecap="round"></line><line x1="850" y1="1317" x2="935" y2="1317" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so14_2}}"></line><line x1="850" y1="1317" x2="935" y2="1317" stroke="{{sc14_2}}" stroke-width="{{sw14_2}}" stroke-linecap="round"></line><text x="205" y="1306" font-size="22" font-weight="700" fill="#4F5E55">PARU</text><line x1="85" y1="1364" x2="450" y2="1364" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so15_0}}"></line><line x1="85" y1="1364" x2="450" y2="1364" stroke="{{sc15_0}}" stroke-width="{{sw15_0}}" stroke-linecap="round"></line><line x1="470" y1="1364" x2="830" y2="1364" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so15_1}}"></line><line x1="470" y1="1364" x2="830" y2="1364" stroke="{{sc15_1}}" stroke-width="{{sw15_1}}" stroke-linecap="round"></line><line x1="850" y1="1364" x2="935" y2="1364" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so15_2}}"></line><line x1="850" y1="1364" x2="935" y2="1364" stroke="{{sc15_2}}" stroke-width="{{sw15_2}}" stroke-linecap="round"></line><text x="205" y="1353" font-size="22" font-weight="700" fill="#4F5E55">PURUS</text><line x1="270" y1="1412" x2="450" y2="1412" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so16_0}}"></line><line x1="270" y1="1412" x2="450" y2="1412" stroke="{{sc16_0}}" stroke-width="{{sw16_0}}" stroke-linecap="round"></line><line x1="470" y1="1412" x2="830" y2="1412" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so16_1}}"></line><line x1="470" y1="1412" x2="830" y2="1412" stroke="{{sc16_1}}" stroke-width="{{sw16_1}}" stroke-linecap="round"></line><line x1="850" y1="1412" x2="935" y2="1412" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so16_2}}"></line><line x1="850" y1="1412" x2="935" y2="1412" stroke="{{sc16_2}}" stroke-width="{{sw16_2}}" stroke-linecap="round"></line><text x="290" y="1401" font-size="22" font-weight="700" fill="#4F5E55">SOLIMÕES</text><line x1="470" y1="1459" x2="830" y2="1459" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so17_1}}"></line><line x1="470" y1="1459" x2="830" y2="1459" stroke="{{sc17_1}}" stroke-width="{{sw17_1}}" stroke-linecap="round"></line><line x1="850" y1="1459" x2="935" y2="1459" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so17_2}}"></line><line x1="850" y1="1459" x2="935" y2="1459" stroke="{{sc17_2}}" stroke-width="{{sw17_2}}" stroke-linecap="round"></line><text x="480" y="1448" font-size="22" font-weight="700" fill="#4F5E55">TAPAJÓS</text><text x="300" y="585" font-size="26" font-weight="800" fill="#13241B">AV. KARAJÁS</text><text x="70" y="1150" font-size="24" font-weight="800" fill="#13241B" transform="rotate(-90 70 1150)">AV. CATETE</text><rect x="177" y="505" width="190" height="46" rx="23" fill="#2C5D96"></rect><text x="272" y="537" font-size="24" font-weight="800" fill="#FFFFFF" text-anchor="middle">QUARTEIRÃO 1</text><rect x="555" y="505" width="190" height="46" rx="23" fill="#6A47A8"></rect><text x="650" y="537" font-size="24" font-weight="800" fill="#FFFFFF" text-anchor="middle">QUARTEIRÃO 2</text><rect x="850" y="505" width="190" height="46" rx="23" fill="#2E7D66"></rect><text x="945" y="537" font-size="24" font-weight="800" fill="#FFFFFF" text-anchor="middle">QUARTEIRÃO 3</text><circle cx="230" cy="440" r="22" fill="#B4471C" stroke="#FFFFFF" stroke-width="5"></circle><path d="M230 428v24M218 440h24" stroke="#FFFFFF" stroke-width="6"></path><text x="265" y="450" font-size="26" font-weight="800" fill="#13241B">Hospital Yutaka Takeda</text><circle cx="170" cy="320" r="22" fill="#3F6B1F" stroke="#FFFFFF" stroke-width="5"></circle><text x="205" y="330" font-size="26" font-weight="800" fill="#13241B">Trilha Uxi</text><rect x="665" y="815" width="70" height="110" rx="35" fill="#E7A08E" stroke="#FFFFFF" stroke-width="5"></rect><text x="660" y="960" font-size="24" font-weight="800" fill="#13241B">Doce Norte E.C.</text><circle cx="470" cy="1000" r="22" fill="#5B3A8C" stroke="#FFFFFF" stroke-width="5"></circle><text x="380" y="1045" font-size="26" font-weight="800" fill="#13241B">Escola</text><circle cx="900" cy="1150" r="22" fill="#24578C" stroke="#FFFFFF" stroke-width="5"></circle><text x="870" y="1195" font-size="26" font-weight="800" fill="#13241B">Hotel</text><circle cx="1060" cy="1290" r="22" fill="#13241B" stroke="#FFFFFF" stroke-width="5"></circle><text x="960" y="1345" font-size="26" font-weight="800" fill="#13241B">Portaria</text><circle cx="{{pinX}}" cy="{{pinY}}" r="20" fill="#13241B" fill-opacity="{{pinOp}}" stroke="#FFFFFF" stroke-width="6" stroke-opacity="{{pinOp}}"></circle><circle cx="{{pinX}}" cy="{{pinY}}" r="8" fill="#FFD27A" fill-opacity="{{pinOp}}"></circle><text x="1000" y="290" font-size="30" font-weight="800" fill="#FFFFFF">N ↑</text></svg>
      <div style="display: flex; flex-wrap: wrap; gap: 6px 14px; font-size: 12px; color: #4F5E55">
        <sc-for list="{{legend}}" as="l" hint-placeholder-count="3">
          <span style="display: flex; align-items: center; gap: 6px"><span style="width: 14px; height: 6px; border-radius: 3px; background: {{l.color}}; border: {{l.border}}"></span>{{l.label}}</span>
        </sc-for>
      </div>
      <span style="display: flex; flex-direction: column; gap: 6px">
        <label for="mapRua" style="font-size: 13px; font-weight: 700">Ver rua</label>
        <select id="mapRua" value="{{sel}}" onChange="{{pickStreet}}" style="height: 48px; border-radius: 12px; border: 1px solid #C9D2CB; padding: 0 12px; font-family: inherit; font-size: 15px; font-weight: 700; color: #13241B; background: #FFFFFF"><option value="Acará">Rua Acará</option><option value="Amazonas">Rua Amazonas</option><option value="Araguaia">Rua Araguaia</option><option value="Arapiuns">Rua Arapiuns</option><option value="Caeté">Rua Caeté</option><option value="Grajaú">Rua Grajaú</option><option value="Guamá">Rua Guamá</option><option value="Iriri">Rua Iriri</option><option value="Iguara">Rua Iguara</option><option value="Itacaiúnas">Rua Itacaiúnas</option><option value="Japurá">Rua Japurá</option><option value="Jari">Rua Jari</option><option value="Juruá">Rua Juruá</option><option value="Mearim">Rua Mearim</option><option value="Paru">Rua Paru</option><option value="Purus">Rua Purus</option><option value="Solimões">Rua Solimões</option><option value="Tapajós">Rua Tapajós</option></select>
      </span>
      <div style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 6px">
        <sc-for list="{{segBtns}}" as="b" hint-placeholder-count="3">
          <button onClick="{{b.pick}}" aria-pressed="{{b.pressed}}" aria-disabled="{{b.disabled}}" style="min-height: 52px; border-radius: 12px; border: {{b.border}}; box-sizing: border-box; cursor: pointer; background: {{b.bg}}; color: {{b.fg}}; font-size: 12px; font-weight: 700; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 2px; padding: 4px"><span style="display: flex; align-items: center; gap: 5px"><span style="width: 8px; height: 8px; border-radius: 4px; background: {{b.qc}}"></span>{{b.label}}</span><span style="font-size: 11px; font-weight: 600">{{b.st}}</span></button>
        </sc-for>
      </div>
      <div style="background: #F4F6F1; border-radius: 14px; padding: 12px 14px; display: flex; align-items: center; gap: 12px">
        <span style="width: 12px; height: 40px; border-radius: 4px; background: {{selColor}}; flex-shrink: 0"></span>
        <span style="display: flex; flex-direction: column; gap: 2px"><span style="font-weight: 700; font-size: 15px">{{selTitle}}</span><span style="font-size: 13px; color: #4F5E55">{{selInfo}}</span></span>
      </div>
    </div>

    <span style="font-family: 'Bricolage Grotesque', system-ui, sans-serif; font-weight: 700; font-size: 18px">Pedidos</span>
    <sc-for list="{{items}}" as="it" hint-placeholder-count="4">
      <div style="background: #FFFFFF; border-radius: 18px; padding: 12px 14px; display: flex; flex-direction: column; gap: 10px">
        <span style="display: flex; align-items: center; gap: 8px"><span style="font-size: 11px; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase; background: {{it.bg}}; color: {{it.fg}}; padding: 3px 8px; border-radius: 6px">{{it.catLabel}}</span><span style="font-size: 12px; color: #4F5E55">Quarteirão {{it.q}}</span></span>
        <span style="display: flex; flex-direction: column; gap: 2px"><span style="font-weight: 700; font-size: 15px">{{it.where}}</span><span style="font-size: 13px; color: #4F5E55">{{it.need}}</span></span>
        <span style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px">
          <button onClick="{{it.show}}" style="border: 2px solid #C9D2CB; cursor: pointer; height: 44px; border-radius: 22px; font-weight: 700; font-size: 13px; background: #FFFFFF; color: #13241B">Ver no mapa</button>
          <button onClick="{{it.send}}" aria-pressed="{{it.pressed}}" style="border: none; cursor: pointer; height: 44px; border-radius: 22px; font-weight: 700; font-size: 13px; background: {{it.btnBg}}; color: {{it.btnFg}}">{{it.btnLabel}}</button>
        </span>
        <sc-if value="{{it.sent}}" hint-placeholder-val="{{ false }}"><span style="font-size: 12px; font-weight: 700; color: #17432F">{{it.sentLabel}}</span></sc-if>
      </div>
    </sc-for>

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
    this.state = { filter: null, sent: {}, sel: null, seg: null };
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
  gmap(cfg) {
    const names = ['Acará', 'Amazonas', 'Araguaia', 'Arapiuns', 'Caeté', 'Grajaú', 'Guamá', 'Iriri', 'Iguara', 'Itacaiúnas', 'Japurá', 'Jari', 'Juruá', 'Mearim', 'Paru', 'Purus', 'Solimões', 'Tapajós'];
    const segs = {0:[0,1,2],1:[0,1,2],2:[0,1,2],3:[0,1,2],4:[0,1,2],5:[0,1,2],6:[0,1,2],7:[0,1,2],8:[0,1,2],9:[0,1,2],10:[0,1,2],11:[0,1,2],12:[0,1,2],13:[0,1,2],14:[0,1,2],15:[0,1,2],16:[0,1,2],17:[1,2]};
    const qcol = ['#2C5D96', '#6A47A8', '#2E7D66'];
    const sel = this.state.sel || cfg.sel;
    const si = names.indexOf(sel);
    let seg = this.state.seg;
    if (seg === undefined || seg === null) seg = cfg.seg;
    if (segs[si].indexOf(seg) < 0) seg = segs[si][0];
    const L = cfg.looks;
    const vals = {};
    names.forEach((n, i) => {
      segs[i].forEach((k) => {
        const st = cfg.statusOf(n, k);
        vals['sc' + i + '_' + k] = L[st].c;
        vals['sw' + i + '_' + k] = String(L[st].w);
        vals['so' + i + '_' + k] = (n === sel && k === seg) ? '0.9' : '0';
      });
    });
    [0, 1, 2].forEach((k) => { vals['qb' + k] = k === seg ? '0.30' : '0.12'; });
    vals.pinX = '700'; vals.pinY = '1128'; vals.pinOp = '0';
    vals.legend = Object.keys(L).map((k) => ({ color: L[k].c, label: L[k].label, border: L[k].c === '#FFFFFF' ? '1px solid #9AA69F' : 'none' }));
    vals.sel = sel;
    vals.pickStreet = (e) => this.setState({ sel: e.target.value, seg: null });
    vals.segBtns = [0, 1, 2].map((k) => {
      const has = segs[si].indexOf(k) >= 0;
      const st = has ? cfg.statusOf(sel, k) : null;
      const on = has && k === seg;
      const light = st && (L[st].c === '#FFFFFF');
      return {
        label: 'Quarteirão ' + (k + 1), qc: qcol[k],
        st: has ? L[st].label : 'Não passa aqui',
        bg: !has ? '#FFFFFF' : (light ? '#F4F6F1' : L[st].c),
        fg: !has ? '#4F5E55' : (L[st].fg || '#13241B'),
        border: on ? '2px solid #13241B' : (has ? '1px solid transparent' : '1px dashed #C9D2CB'),
        pressed: on ? 'true' : 'false', disabled: has ? 'false' : 'true',
        pick: () => { if (has) this.setState({ seg: k }); }
      };
    });
    const st = cfg.statusOf(sel, seg);
    vals.selTitle = 'Rua ' + sel + ' · Quarteirão ' + (seg + 1);
    vals.selInfo = cfg.info(sel, seg, st);
    vals.selColor = L[st].c === '#FFFFFF' ? '#9AA69F' : L[st].c;
    return vals;
  }
  renderVals() {
    const s = this.state;
    const data = {
      'Acará|0': ['reforma', 4, 'Telhado com goteira'],
      'Caeté|2': ['reforma', 18, 'Pintura e troca de piso'],
      'Iriri|1': ['reforma', 9, 'Reforma do banheiro'],
      'Jari|1': ['reforma', 14, 'Reparos depois da mudança'],
      'Purus|0': ['reforma', 3, 'Forro caindo na cozinha'],
      'Solimões|2': ['reforma', 21, 'Telhado e calha'],
      'Guamá|1': ['vazia', 7, 'Vazia desde setembro'],
      'Iguara|2': ['vazia', 16, 'Família transferida em outubro'],
      'Mearim|0': ['vazia', 2, 'Vazia · precisa de limpeza'],
      'Tapajós|1': ['vazia', 11, 'Pronta para receber nova família'],
      'Araguaia|2': ['suporte', 20, 'Corte de árvore no quintal'],
      'Grajaú|0': ['suporte', 5, 'Cortar a grama'],
      'Itacaiúnas|1': ['suporte', 10, 'Poda de galhos na calçada'],
      'Juruá|2': ['suporte', 19, 'Cortar a grama'],
      'Paru|1': ['suporte', 13, 'Árvore encostando no telhado']
    };
    const meta = {
      reforma: { label: 'Reforma', c: '#E07A3F', fg: '#13241B', bg: '#FBE6DA', tfg: '#8E3714', team: 'Equipe de manutenção das casas', when: 'visita técnica amanhã, 9h' },
      vazia: { label: 'Casa vazia', c: '#4F5E55', fg: '#FFFFFF', bg: '#E2E7E0', tfg: '#13241B', team: 'Equipe de manutenção das casas', when: 'limpeza e vistoria na quinta, 8h' },
      suporte: { label: 'Serviço', c: '#5FA8D3', fg: '#13241B', bg: '#DFE9F5', tfg: '#24578C', team: 'Equipe de poda e jardinagem', when: 'amanhã, 8h' }
    };
    const f = s.filter;
    const statusOf = (n, k) => { const d = data[n + '|' + k]; return d && (!f || d[0] === f) ? d[0] : 'ok'; };
    const looks = {
      reforma: { c: meta.reforma.c, w: 22, label: 'Precisa de reforma', fg: '#13241B' },
      vazia: { c: meta.vazia.c, w: 22, label: 'Casa vazia', fg: '#FFFFFF' },
      suporte: { c: meta.suporte.c, w: 22, label: 'Precisa de serviço', fg: '#13241B' },
      ok: { c: '#FFFFFF', w: 12, label: 'Sem pedido' }
    };
    const m = this.gmap({
      sel: 'Acará', seg: 0, looks: looks, statusOf: statusOf,
      info: (n, k, st) => { const d = data[n + '|' + k]; return d ? 'Casa ' + d[1] + ' · ' + d[2] : 'Nenhum pedido neste trecho'; }
    });
    const keys = Object.keys(data);
    const counts = { reforma: 0, vazia: 0, suporte: 0 };
    keys.forEach((k) => { counts[data[k][0]]++; });
    const cats = ['reforma', 'vazia', 'suporte'].map((c) => ({
      label: { reforma: 'Reformas', vazia: 'Vazias', suporte: 'Serviços' }[c],
      count: String(counts[c]),
      color: meta[c].c,
      pressed: f === c ? 'true' : 'false',
      border: f === c ? '2px solid #13241B' : '2px solid transparent',
      pick: () => this.setState({ filter: f === c ? null : c })
    }));
    const items = keys.filter((k) => !f || data[k][0] === f).map((k) => {
      const [n, seg] = k.split('|');
      const d = data[k];
      const mt = meta[d[0]];
      const sent = !!s.sent[k];
      return {
        catLabel: mt.label, bg: mt.bg, fg: mt.tfg, q: String(Number(seg) + 1),
        where: 'Rua ' + n + ', casa ' + d[1],
        need: d[2],
        sent: sent,
        sentLabel: '✓ ' + mt.team + ' · ' + mt.when,
        pressed: sent ? 'true' : 'false',
        btnLabel: sent ? 'Equipe a caminho' : 'Mandar equipe',
        btnBg: sent ? '#DCEDE2' : '#13241B',
        btnFg: sent ? '#17432F' : '#FFFFFF',
        show: () => this.setState({ sel: n, seg: Number(seg) }),
        send: () => { const x = Object.assign({}, this.state.sent); x[k] = !x[k]; this.setState({ sent: x }); }
      };
    });
    return Object.assign(m, { cats: cats, items: items, filtered: !!f, clear: () => this.setState({ filter: null }) });
  }
}
<\/script>
</body>
</html>
`;export{e as default};
