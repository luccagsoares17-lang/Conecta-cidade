const e=`<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<title>Meu Carajás Super App – Energia</title>
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
    <span style="font-family: 'Bricolage Grotesque', system-ui, sans-serif; font-weight: 800; font-size: 24px; letter-spacing: -0.4px">Energia</span>
  </div>

  <div style="flex-grow: 1; min-height: 0; overflow-y: auto; padding: 4px 20px 28px 20px; display: flex; flex-direction: column; gap: 14px; width: 364px; height: 634px">

    <div style="background: {{statusBg}}; color: #FFFFFF; border-radius: 20px; padding: 18px; display: flex; flex-direction: column; gap: 4px">
      <span style="font-size: 12px; font-weight: 700; letter-spacing: 0.8px; text-transform: uppercase; color: #FFFFFF">Sua rua · Rua Japurá, quarteirão 2</span>
      <span style="font-family: 'Bricolage Grotesque', system-ui, sans-serif; font-size: 22px; font-weight: 700">{{statusTitle}}</span>
      <span style="font-size: 14px; color: #FFFFFF">{{statusText}}</span>
    </div>

    <div style="background: #FFFFFF; border-radius: 20px; padding: 14px; display: flex; flex-direction: column; gap: 12px">
      <span style="display: flex; align-items: center; justify-content: space-between"><span style="font-weight: 700; font-size: 16px">Mapa do Núcleo</span><span style="font-size: 12px; color: #4F5E55">18 ruas · 3 quarteirões cada</span></span>
      <svg width="100%" viewBox="40 250 1080 1290" role="img" aria-label="Mapa do Núcleo Urbano de Carajás: 18 ruas divididas em 3 quarteirões" style="display: block; width: 100%; height: auto; border-radius: 12px; font-family: 'DM Sans', system-ui, sans-serif"><rect x="40" y="250" width="1080" height="1290" fill="#9EC28A"></rect><circle cx="300" cy="300" r="60" fill="#8DB678"></circle><circle cx="900" cy="300" r="80" fill="#8DB678"></circle><circle cx="1100" cy="900" r="70" fill="#8DB678"></circle><circle cx="200" cy="1500" r="90" fill="#8DB678"></circle><circle cx="700" cy="1520" r="70" fill="#8DB678"></circle><circle cx="1000" cy="1500" r="60" fill="#8DB678"></circle><path d="M120 250 C 200 330 400 420 600 440 C 800 460 1000 360 1120 560" fill="none" stroke="#F7F4EC" stroke-width="16"></path><text x="640" y="420" font-size="28" font-weight="700" fill="#13241B">PA-275 · Rod. Raimundo Mascarenhas</text><clipPath id="nucleoClip"><polygon points="85,600 840,600 1030,650 1040,1300 940,1480 840,1500 460,1490 270,1470 85,1420"></polygon></clipPath><polygon points="85,600 840,600 1030,650 1040,1300 940,1480 840,1500 460,1490 270,1470 85,1420" fill="#E9E3D3"></polygon><g clip-path="url(#nucleoClip)"><rect x="85" y="590" width="375" height="930" fill="#2C5D96" fill-opacity="{{qb0}}"></rect><rect x="460" y="590" width="380" height="930" fill="#6A47A8" fill-opacity="{{qb1}}"></rect><rect x="840" y="590" width="210" height="930" fill="#2E7D66" fill-opacity="{{qb2}}"></rect></g><line x1="270" y1="600" x2="270" y2="1470" stroke="#FFFFFF" stroke-width="10"></line><line x1="650" y1="600" x2="650" y2="1500" stroke="#FFFFFF" stroke-width="10"></line><line x1="935" y1="680" x2="935" y2="1470" stroke="#FFFFFF" stroke-width="10"></line><line x1="460" y1="600" x2="460" y2="1490" stroke="#F7F4EC" stroke-width="20"></line><line x1="460" y1="600" x2="460" y2="1490" stroke="#13241B" stroke-width="4" stroke-dasharray="16 12"></line><line x1="840" y1="600" x2="840" y2="1500" stroke="#F7F4EC" stroke-width="20"></line><line x1="840" y1="600" x2="840" y2="1500" stroke="#13241B" stroke-width="4" stroke-dasharray="16 12"></line><line x1="85" y1="600" x2="85" y2="1420" stroke="#F7F4EC" stroke-width="18"></line><path d="M85 600 L840 600 C 960 600 1030 650 1030 760 L1030 1290 L1120 1240" fill="none" stroke="#F7F4EC" stroke-width="18"></path><line x1="85" y1="655" x2="450" y2="655" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so0_0}}"></line><line x1="85" y1="655" x2="450" y2="655" stroke="{{sc0_0}}" stroke-width="{{sw0_0}}" stroke-linecap="round"></line><line x1="470" y1="655" x2="830" y2="655" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so0_1}}"></line><line x1="470" y1="655" x2="830" y2="655" stroke="{{sc0_1}}" stroke-width="{{sw0_1}}" stroke-linecap="round"></line><line x1="850" y1="655" x2="935" y2="655" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so0_2}}"></line><line x1="850" y1="655" x2="935" y2="655" stroke="{{sc0_2}}" stroke-width="{{sw0_2}}" stroke-linecap="round"></line><text x="205" y="644" font-size="22" font-weight="700" fill="#4F5E55">ACARÁ</text><line x1="85" y1="702" x2="450" y2="702" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so1_0}}"></line><line x1="85" y1="702" x2="450" y2="702" stroke="{{sc1_0}}" stroke-width="{{sw1_0}}" stroke-linecap="round"></line><line x1="470" y1="702" x2="830" y2="702" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so1_1}}"></line><line x1="470" y1="702" x2="830" y2="702" stroke="{{sc1_1}}" stroke-width="{{sw1_1}}" stroke-linecap="round"></line><line x1="850" y1="702" x2="935" y2="702" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so1_2}}"></line><line x1="850" y1="702" x2="935" y2="702" stroke="{{sc1_2}}" stroke-width="{{sw1_2}}" stroke-linecap="round"></line><text x="205" y="691" font-size="22" font-weight="700" fill="#4F5E55">AMAZONAS</text><line x1="85" y1="750" x2="450" y2="750" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so2_0}}"></line><line x1="85" y1="750" x2="450" y2="750" stroke="{{sc2_0}}" stroke-width="{{sw2_0}}" stroke-linecap="round"></line><line x1="470" y1="750" x2="830" y2="750" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so2_1}}"></line><line x1="470" y1="750" x2="830" y2="750" stroke="{{sc2_1}}" stroke-width="{{sw2_1}}" stroke-linecap="round"></line><line x1="850" y1="750" x2="935" y2="750" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so2_2}}"></line><line x1="850" y1="750" x2="935" y2="750" stroke="{{sc2_2}}" stroke-width="{{sw2_2}}" stroke-linecap="round"></line><text x="205" y="739" font-size="22" font-weight="700" fill="#4F5E55">ARAGUAIA</text><line x1="85" y1="797" x2="450" y2="797" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so3_0}}"></line><line x1="85" y1="797" x2="450" y2="797" stroke="{{sc3_0}}" stroke-width="{{sw3_0}}" stroke-linecap="round"></line><line x1="470" y1="797" x2="830" y2="797" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so3_1}}"></line><line x1="470" y1="797" x2="830" y2="797" stroke="{{sc3_1}}" stroke-width="{{sw3_1}}" stroke-linecap="round"></line><line x1="850" y1="797" x2="935" y2="797" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so3_2}}"></line><line x1="850" y1="797" x2="935" y2="797" stroke="{{sc3_2}}" stroke-width="{{sw3_2}}" stroke-linecap="round"></line><text x="205" y="786" font-size="22" font-weight="700" fill="#4F5E55">ARAPIUNS</text><line x1="85" y1="844" x2="450" y2="844" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so4_0}}"></line><line x1="85" y1="844" x2="450" y2="844" stroke="{{sc4_0}}" stroke-width="{{sw4_0}}" stroke-linecap="round"></line><line x1="470" y1="844" x2="830" y2="844" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so4_1}}"></line><line x1="470" y1="844" x2="830" y2="844" stroke="{{sc4_1}}" stroke-width="{{sw4_1}}" stroke-linecap="round"></line><line x1="850" y1="844" x2="1030" y2="844" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so4_2}}"></line><line x1="850" y1="844" x2="1030" y2="844" stroke="{{sc4_2}}" stroke-width="{{sw4_2}}" stroke-linecap="round"></line><text x="205" y="833" font-size="22" font-weight="700" fill="#4F5E55">CAETÉ</text><line x1="85" y1="892" x2="450" y2="892" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so5_0}}"></line><line x1="85" y1="892" x2="450" y2="892" stroke="{{sc5_0}}" stroke-width="{{sw5_0}}" stroke-linecap="round"></line><line x1="470" y1="892" x2="830" y2="892" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so5_1}}"></line><line x1="470" y1="892" x2="830" y2="892" stroke="{{sc5_1}}" stroke-width="{{sw5_1}}" stroke-linecap="round"></line><line x1="850" y1="892" x2="1030" y2="892" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so5_2}}"></line><line x1="850" y1="892" x2="1030" y2="892" stroke="{{sc5_2}}" stroke-width="{{sw5_2}}" stroke-linecap="round"></line><text x="205" y="881" font-size="22" font-weight="700" fill="#4F5E55">GRAJAÚ</text><line x1="85" y1="939" x2="450" y2="939" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so6_0}}"></line><line x1="85" y1="939" x2="450" y2="939" stroke="{{sc6_0}}" stroke-width="{{sw6_0}}" stroke-linecap="round"></line><line x1="470" y1="939" x2="830" y2="939" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so6_1}}"></line><line x1="470" y1="939" x2="830" y2="939" stroke="{{sc6_1}}" stroke-width="{{sw6_1}}" stroke-linecap="round"></line><line x1="850" y1="939" x2="1030" y2="939" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so6_2}}"></line><line x1="850" y1="939" x2="1030" y2="939" stroke="{{sc6_2}}" stroke-width="{{sw6_2}}" stroke-linecap="round"></line><text x="205" y="928" font-size="22" font-weight="700" fill="#4F5E55">GUAMÁ</text><line x1="85" y1="986" x2="450" y2="986" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so7_0}}"></line><line x1="85" y1="986" x2="450" y2="986" stroke="{{sc7_0}}" stroke-width="{{sw7_0}}" stroke-linecap="round"></line><line x1="470" y1="986" x2="830" y2="986" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so7_1}}"></line><line x1="470" y1="986" x2="830" y2="986" stroke="{{sc7_1}}" stroke-width="{{sw7_1}}" stroke-linecap="round"></line><line x1="850" y1="986" x2="1030" y2="986" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so7_2}}"></line><line x1="850" y1="986" x2="1030" y2="986" stroke="{{sc7_2}}" stroke-width="{{sw7_2}}" stroke-linecap="round"></line><text x="205" y="975" font-size="22" font-weight="700" fill="#4F5E55">IRIRI</text><line x1="85" y1="1033" x2="450" y2="1033" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so8_0}}"></line><line x1="85" y1="1033" x2="450" y2="1033" stroke="{{sc8_0}}" stroke-width="{{sw8_0}}" stroke-linecap="round"></line><line x1="470" y1="1033" x2="830" y2="1033" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so8_1}}"></line><line x1="470" y1="1033" x2="830" y2="1033" stroke="{{sc8_1}}" stroke-width="{{sw8_1}}" stroke-linecap="round"></line><line x1="850" y1="1033" x2="1030" y2="1033" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so8_2}}"></line><line x1="850" y1="1033" x2="1030" y2="1033" stroke="{{sc8_2}}" stroke-width="{{sw8_2}}" stroke-linecap="round"></line><text x="205" y="1022" font-size="22" font-weight="700" fill="#4F5E55">IGUARA</text><line x1="85" y1="1081" x2="450" y2="1081" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so9_0}}"></line><line x1="85" y1="1081" x2="450" y2="1081" stroke="{{sc9_0}}" stroke-width="{{sw9_0}}" stroke-linecap="round"></line><line x1="470" y1="1081" x2="830" y2="1081" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so9_1}}"></line><line x1="470" y1="1081" x2="830" y2="1081" stroke="{{sc9_1}}" stroke-width="{{sw9_1}}" stroke-linecap="round"></line><line x1="850" y1="1081" x2="1030" y2="1081" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so9_2}}"></line><line x1="850" y1="1081" x2="1030" y2="1081" stroke="{{sc9_2}}" stroke-width="{{sw9_2}}" stroke-linecap="round"></line><text x="205" y="1070" font-size="22" font-weight="700" fill="#4F5E55">ITACAIÚNAS</text><line x1="85" y1="1128" x2="450" y2="1128" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so10_0}}"></line><line x1="85" y1="1128" x2="450" y2="1128" stroke="{{sc10_0}}" stroke-width="{{sw10_0}}" stroke-linecap="round"></line><line x1="470" y1="1128" x2="830" y2="1128" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so10_1}}"></line><line x1="470" y1="1128" x2="830" y2="1128" stroke="{{sc10_1}}" stroke-width="{{sw10_1}}" stroke-linecap="round"></line><line x1="850" y1="1128" x2="1030" y2="1128" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so10_2}}"></line><line x1="850" y1="1128" x2="1030" y2="1128" stroke="{{sc10_2}}" stroke-width="{{sw10_2}}" stroke-linecap="round"></line><text x="205" y="1117" font-size="22" font-weight="700" fill="#4F5E55">JAPURÁ</text><line x1="85" y1="1175" x2="450" y2="1175" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so11_0}}"></line><line x1="85" y1="1175" x2="450" y2="1175" stroke="{{sc11_0}}" stroke-width="{{sw11_0}}" stroke-linecap="round"></line><line x1="470" y1="1175" x2="830" y2="1175" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so11_1}}"></line><line x1="470" y1="1175" x2="830" y2="1175" stroke="{{sc11_1}}" stroke-width="{{sw11_1}}" stroke-linecap="round"></line><line x1="850" y1="1175" x2="1030" y2="1175" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so11_2}}"></line><line x1="850" y1="1175" x2="1030" y2="1175" stroke="{{sc11_2}}" stroke-width="{{sw11_2}}" stroke-linecap="round"></line><text x="205" y="1164" font-size="22" font-weight="700" fill="#4F5E55">JARI</text><line x1="85" y1="1223" x2="450" y2="1223" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so12_0}}"></line><line x1="85" y1="1223" x2="450" y2="1223" stroke="{{sc12_0}}" stroke-width="{{sw12_0}}" stroke-linecap="round"></line><line x1="470" y1="1223" x2="830" y2="1223" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so12_1}}"></line><line x1="470" y1="1223" x2="830" y2="1223" stroke="{{sc12_1}}" stroke-width="{{sw12_1}}" stroke-linecap="round"></line><line x1="850" y1="1223" x2="1030" y2="1223" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so12_2}}"></line><line x1="850" y1="1223" x2="1030" y2="1223" stroke="{{sc12_2}}" stroke-width="{{sw12_2}}" stroke-linecap="round"></line><text x="205" y="1212" font-size="22" font-weight="700" fill="#4F5E55">JURUÁ</text><line x1="85" y1="1270" x2="450" y2="1270" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so13_0}}"></line><line x1="85" y1="1270" x2="450" y2="1270" stroke="{{sc13_0}}" stroke-width="{{sw13_0}}" stroke-linecap="round"></line><line x1="470" y1="1270" x2="830" y2="1270" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so13_1}}"></line><line x1="470" y1="1270" x2="830" y2="1270" stroke="{{sc13_1}}" stroke-width="{{sw13_1}}" stroke-linecap="round"></line><line x1="850" y1="1270" x2="1030" y2="1270" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so13_2}}"></line><line x1="850" y1="1270" x2="1030" y2="1270" stroke="{{sc13_2}}" stroke-width="{{sw13_2}}" stroke-linecap="round"></line><text x="205" y="1259" font-size="22" font-weight="700" fill="#4F5E55">MEARIM</text><line x1="85" y1="1317" x2="450" y2="1317" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so14_0}}"></line><line x1="85" y1="1317" x2="450" y2="1317" stroke="{{sc14_0}}" stroke-width="{{sw14_0}}" stroke-linecap="round"></line><line x1="470" y1="1317" x2="830" y2="1317" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so14_1}}"></line><line x1="470" y1="1317" x2="830" y2="1317" stroke="{{sc14_1}}" stroke-width="{{sw14_1}}" stroke-linecap="round"></line><line x1="850" y1="1317" x2="935" y2="1317" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so14_2}}"></line><line x1="850" y1="1317" x2="935" y2="1317" stroke="{{sc14_2}}" stroke-width="{{sw14_2}}" stroke-linecap="round"></line><text x="205" y="1306" font-size="22" font-weight="700" fill="#4F5E55">PARU</text><line x1="85" y1="1364" x2="450" y2="1364" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so15_0}}"></line><line x1="85" y1="1364" x2="450" y2="1364" stroke="{{sc15_0}}" stroke-width="{{sw15_0}}" stroke-linecap="round"></line><line x1="470" y1="1364" x2="830" y2="1364" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so15_1}}"></line><line x1="470" y1="1364" x2="830" y2="1364" stroke="{{sc15_1}}" stroke-width="{{sw15_1}}" stroke-linecap="round"></line><line x1="850" y1="1364" x2="935" y2="1364" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so15_2}}"></line><line x1="850" y1="1364" x2="935" y2="1364" stroke="{{sc15_2}}" stroke-width="{{sw15_2}}" stroke-linecap="round"></line><text x="205" y="1353" font-size="22" font-weight="700" fill="#4F5E55">PURUS</text><line x1="270" y1="1412" x2="450" y2="1412" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so16_0}}"></line><line x1="270" y1="1412" x2="450" y2="1412" stroke="{{sc16_0}}" stroke-width="{{sw16_0}}" stroke-linecap="round"></line><line x1="470" y1="1412" x2="830" y2="1412" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so16_1}}"></line><line x1="470" y1="1412" x2="830" y2="1412" stroke="{{sc16_1}}" stroke-width="{{sw16_1}}" stroke-linecap="round"></line><line x1="850" y1="1412" x2="935" y2="1412" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so16_2}}"></line><line x1="850" y1="1412" x2="935" y2="1412" stroke="{{sc16_2}}" stroke-width="{{sw16_2}}" stroke-linecap="round"></line><text x="290" y="1401" font-size="22" font-weight="700" fill="#4F5E55">SOLIMÕES</text><line x1="470" y1="1459" x2="830" y2="1459" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so17_1}}"></line><line x1="470" y1="1459" x2="830" y2="1459" stroke="{{sc17_1}}" stroke-width="{{sw17_1}}" stroke-linecap="round"></line><line x1="850" y1="1459" x2="935" y2="1459" stroke="#13241B" stroke-width="30" stroke-linecap="round" stroke-opacity="{{so17_2}}"></line><line x1="850" y1="1459" x2="935" y2="1459" stroke="{{sc17_2}}" stroke-width="{{sw17_2}}" stroke-linecap="round"></line><text x="480" y="1448" font-size="22" font-weight="700" fill="#4F5E55">TAPAJÓS</text><text x="300" y="585" font-size="26" font-weight="800" fill="#13241B">AV. KARAJÁS</text><text x="70" y="1150" font-size="24" font-weight="800" fill="#13241B" transform="rotate(-90 70 1150)">AV. CATETE</text><rect x="177" y="505" width="190" height="46" rx="23" fill="#2C5D96"></rect><text x="272" y="537" font-size="24" font-weight="800" fill="#FFFFFF" text-anchor="middle">QUARTEIRÃO 1</text><rect x="555" y="505" width="190" height="46" rx="23" fill="#6A47A8"></rect><text x="650" y="537" font-size="24" font-weight="800" fill="#FFFFFF" text-anchor="middle">QUARTEIRÃO 2</text><rect x="850" y="505" width="190" height="46" rx="23" fill="#2E7D66"></rect><text x="945" y="537" font-size="24" font-weight="800" fill="#FFFFFF" text-anchor="middle">QUARTEIRÃO 3</text><circle cx="230" cy="440" r="22" fill="#B4471C" stroke="#FFFFFF" stroke-width="5"></circle><path d="M230 428v24M218 440h24" stroke="#FFFFFF" stroke-width="6"></path><text x="265" y="450" font-size="26" font-weight="800" fill="#13241B">Hospital Yutaka Takeda</text><circle cx="170" cy="320" r="22" fill="#3F6B1F" stroke="#FFFFFF" stroke-width="5"></circle><text x="205" y="330" font-size="26" font-weight="800" fill="#13241B">Trilha Uxi</text><rect x="665" y="815" width="70" height="110" rx="35" fill="#E7A08E" stroke="#FFFFFF" stroke-width="5"></rect><text x="660" y="960" font-size="24" font-weight="800" fill="#13241B">Doce Norte E.C.</text><circle cx="470" cy="1000" r="22" fill="#5B3A8C" stroke="#FFFFFF" stroke-width="5"></circle><text x="380" y="1045" font-size="26" font-weight="800" fill="#13241B">Escola</text><circle cx="900" cy="1150" r="22" fill="#24578C" stroke="#FFFFFF" stroke-width="5"></circle><text x="870" y="1195" font-size="26" font-weight="800" fill="#13241B">Hotel</text><circle cx="1060" cy="1290" r="22" fill="#13241B" stroke="#FFFFFF" stroke-width="5"></circle><text x="960" y="1345" font-size="26" font-weight="800" fill="#13241B">Portaria</text><circle cx="{{pinX}}" cy="{{pinY}}" r="20" fill="#13241B" fill-opacity="{{pinOp}}" stroke="#FFFFFF" stroke-width="6" stroke-opacity="{{pinOp}}"></circle><circle cx="{{pinX}}" cy="{{pinY}}" r="8" fill="#FFD27A" fill-opacity="{{pinOp}}"></circle><text x="1000" y="290" font-size="30" font-weight="800" fill="#FFFFFF">N ↑</text></svg>
      <div style="display: flex; flex-wrap: wrap; gap: 6px 14px; font-size: 12px; color: #4F5E55">
        <span style="display: flex; align-items: center; gap: 6px"><span style="width: 14px; height: 6px; border-radius: 3px; background: #FFFFFF; border: 1px solid #9AA69F"></span>Com luz</span>
        <span style="display: flex; align-items: center; gap: 6px"><span style="width: 14px; height: 6px; border-radius: 3px; background: #D32F2F"></span>Sem luz</span>
        <span style="display: flex; align-items: center; gap: 6px"><span style="width: 14px; height: 6px; border-radius: 3px; background: #F2C94C"></span>Desligamento 12/11</span>
        <span style="display: flex; align-items: center; gap: 6px"><span style="width: 10px; height: 10px; border-radius: 5px; background: #13241B; border: 2px solid #FFD27A"></span>{{meLabel}}</span>
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

    <button onClick="{{report}}" aria-pressed="{{reportedAttr}}" style="border: none; cursor: pointer; border-radius: 27px; height: 54px; font-weight: 700; font-size: 16px; background: {{btnBg}}; color: {{btnFg}}">{{btnLabel}}</button>

    <div style="background: #FFFFFF; border-radius: 20px; padding: 16px; display: flex; flex-direction: column; gap: 10px">
      <span style="font-weight: 700; font-size: 16px">Desligamentos programados</span>
      <div style="display: flex; gap: 12px; align-items: center">
        <span style="width: 44px; height: 44px; border-radius: 12px; background: #F8EDC9; display: flex; align-items: center; justify-content: center; flex-shrink: 0"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7A5806" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9z"></path></svg></span>
        <span style="display: flex; flex-direction: column"><span style="font-weight: 700; font-size: 15px">Manutenção na rede</span><span style="font-size: 13px; color: #4F5E55">Quinta, 12/11, das 8h às 12h · Ruas Araguaia e Arapiuns</span></span>
      </div>
    </div>

    <button onClick="{{toggleNotify}}" aria-pressed="{{notifyAttr}}" style="border: none; cursor: pointer; text-align: left; background: #FFFFFF; border-radius: 20px; padding: 16px; display: flex; align-items: center; gap: 12px; min-height: 64px">
      <span style="display: flex; flex-direction: column; flex-grow: 1"><span style="font-weight: 700; font-size: 15px; color: #13241B">Avisar quando cair ou voltar</span><span style="font-size: 13px; color: #4F5E55">Aviso por SMS no seu celular</span></span>
      <span style="width: 52px; height: 30px; border-radius: 15px; background: {{trackBg}}; display: flex; align-items: center; justify-content: {{knobSide}}; padding: 3px; box-sizing: border-box; flex-shrink: 0"><span style="width: 24px; height: 24px; border-radius: 12px; background: #FFFFFF"></span></span>
    </button>

  </div>
</div>
</x-dc>
<script type="text/x-dc" data-dc-script data-props='{"$preview":{"width":390,"height":844}}'>
class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { reported: false, notify: true, sel: 'Japurá', seg: 1 };
  }
  mapVals(reported, admin) {
    const names = ['Acará', 'Amazonas', 'Araguaia', 'Arapiuns', 'Caeté', 'Grajaú', 'Guamá', 'Iriri', 'Iguara', 'Itacaiúnas', 'Japurá', 'Jari', 'Juruá', 'Mearim', 'Paru', 'Purus', 'Solimões', 'Tapajós'];
    const segs = {0:[0,1,2],1:[0,1,2],2:[0,1,2],3:[0,1,2],4:[0,1,2],5:[0,1,2],6:[0,1,2],7:[0,1,2],8:[0,1,2],9:[0,1,2],10:[0,1,2],11:[0,1,2],12:[0,1,2],13:[0,1,2],14:[0,1,2],15:[0,1,2],16:[0,1,2],17:[1,2]};
    const qcol = ['#2C5D96', '#6A47A8', '#2E7D66'];
    const out = { 'Juruá|1': '7 relatos · previsão de volta: 16h', 'Paru|2': '3 relatos · equipe a caminho' };
    const sched = { 'Araguaia|0': 1, 'Arapiuns|0': 1 };
    const sel = this.state.sel || (admin ? 'Juruá' : 'Japurá');
    const si = names.indexOf(sel);
    let seg = this.state.seg;
    if (seg === undefined || seg === null) seg = 1;
    if (segs[si].indexOf(seg) < 0) seg = segs[si][0];
    const status = (n, k) => {
      const key = n + '|' + k;
      if (out[key] || (reported && key === 'Japurá|1')) return 'out';
      if (sched[key]) return 'sched';
      return 'ok';
    };
    const look = { ok: ['#FFFFFF', '#13241B', 12], out: ['#D32F2F', '#FFFFFF', 22], sched: ['#F2C94C', '#13241B', 22] };
    const vals = {};
    names.forEach((n, i) => {
      segs[i].forEach((k) => {
        const st = status(n, k);
        vals['sc' + i + '_' + k] = look[st][0];
        vals['sw' + i + '_' + k] = String(look[st][2]);
        vals['so' + i + '_' + k] = (n === sel && k === seg) ? '0.9' : '0';
      });
    });
    [0, 1, 2].forEach((k) => { vals['qb' + k] = k === seg ? '0.30' : '0.12'; });
    vals.pinX = '700';
    vals.pinY = String(Math.round(655 + names.indexOf('Japurá') * 47.3));
    vals.pinOp = admin ? '0' : '1';
    vals.sel = sel;
    vals.pickStreet = (e) => this.setState({ sel: e.target.value, seg: null });
    vals.segBtns = [0, 1, 2].map((k) => {
      const has = segs[si].indexOf(k) >= 0;
      const st = has ? status(sel, k) : 'none';
      const on = has && k === seg;
      return {
        label: 'Quarteirão ' + (k + 1),
        qc: qcol[k],
        st: has ? ({ ok: 'Com luz', out: 'Sem luz', sched: 'Desligamento' })[st] : 'Não passa aqui',
        bg: !has ? '#FFFFFF' : (st === 'ok' ? '#F4F6F1' : look[st][0]),
        fg: !has ? '#4F5E55' : look[st][1],
        border: on ? '2px solid #13241B' : (has ? '1px solid transparent' : '1px dashed #C9D2CB'),
        pressed: on ? 'true' : 'false',
        disabled: has ? 'false' : 'true',
        pick: () => { if (has) this.setState({ seg: k }); }
      };
    });
    const st = status(sel, seg);
    const info = {
      ok: 'Luz normal · nenhum relato agora',
      out: (reported && sel === 'Japurá' && seg === 1 && !out['Japurá|1']) ? 'Você avisou que está sem luz · só o seu quarteirão foi marcado' : out[sel + '|' + seg],
      sched: 'Manutenção quinta, 12/11, das 8h às 12h'
    };
    vals.meLabel = admin ? 'Escolha a rua e o quarteirão' : 'Sua casa (Rua Japurá, 12 · quarteirão 2)';
    vals.selTitle = 'Rua ' + sel + ' · Quarteirão ' + (seg + 1);
    vals.selInfo = info[st];
    vals.selColor = st === 'ok' ? '#1E5B40' : look[st][0];
    return vals;
  }
  renderVals() {
    const r = this.state.reported;
    const n = this.state.notify;
    return {
      ...this.mapVals(r, false),
      statusBg: r ? '#B4471C' : '#1E5B40',
      statusTitle: r ? 'Falta de luz informada' : 'Luz normal na sua rua',
      statusText: r ? 'A equipe responsável já recebeu seu aviso.' : 'Nenhuma queda registrada agora.',
      reportedAttr: r ? 'true' : 'false',
      btnLabel: r ? 'Minha luz voltou' : 'Estou sem luz',
      btnBg: r ? '#FFFFFF' : '#13241B',
      btnFg: r ? '#13241B' : '#FFFFFF',
      report: () => this.setState({ reported: !this.state.reported }),
      notifyAttr: n ? 'true' : 'false',
      trackBg: n ? '#1E5B40' : '#9AA69F',
      knobSide: n ? 'flex-end' : 'flex-start',
      toggleNotify: () => this.setState({ notify: !this.state.notify })
    };
  }
}
<\/script>
</body>
</html>
`;export{e as default};
