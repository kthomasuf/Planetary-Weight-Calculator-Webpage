const calculateWeight = (ev)=> {
  ev.preventDefault();
  let planetSelection = document.getElementById('planet-menu').value;
  let userWeight = document.getElementById('user-weight').value;
  let result = 0;

  if (userWeight < 0) {
    document.getElementById('result').innerHTML = "Invalid Weight!";
    return;
  }

  if (planetSelection == "Mercury") {
    result = (Number(userWeight) * 0.377);
  }
  else if (planetSelection == "Venus") {
    result = (Number(userWeight) * 0.905);
  }
  else if (planetSelection == "earth") {
    document.getElementById('result').innerHTML = Number(userWeight).toFixed(1);
    return;
  }
  else if (planetSelection == "Mars") {
    result = (Number(userWeight) * 0.379);
  }
  else if (planetSelection == "Jupiter") {
    result = (Number(userWeight) * 2.528);
  }
  else if (planetSelection == "Saturn") {
    result = (Number(userWeight) * 1.065);
  }
  else if (planetSelection == "Uranus") {
    result = (Number(userWeight) * 0.886);
  }
  else if (planetSelection == "Neptune") {
    result = (Number(userWeight) * 1.137);
  }
  else if (planetSelection == "Pluto") {
    result = (Number(userWeight) * 0.063);
  }
  document.getElementById('result').innerHTML = result.toFixed(1);
}

const translatePageEnglish = (ev)=> {
  ev.preventDefault();
  document.getElementById('title').innerHTML = "Planetary Weight Calculator";
  document.getElementById('credits').innerHTML = "Code & Art by Kenny Thomas";
  document.getElementById('menu-title').innerHTML = "Choose a Planet:";
  document.getElementById('mercury').innerHTML = "Mercury";
  document.getElementById('venus').innerHTML = "Venus";
  document.getElementById('earth').innerHTML = "Earth";
  document.getElementById('mars').innerHTML = "Mars";
  document.getElementById('jupiter').innerHTML = "Jupiter";
  document.getElementById('saturn').innerHTML = "Saturn";
  document.getElementById('uranus').innerHTML = "Uranus";
  document.getElementById('neptune').innerHTML = "Neptune";
  document.getElementById('pluto').innerHTML = "Pluto";
  document.getElementById('enter-weight-id').innerHTML = "Enter Weight:";
  document.getElementsByName('user-weight')[0].placeholder = "Ibs/kg";
  document.getElementById('submit').innerHTML = "Calculate";
  document.getElementById('result-label').innerHTML = "Weight (Ibs/kg):";
}

const translatePageSpanish = (ev)=> {
  ev.preventDefault();
  document.getElementById('title').innerHTML = "Calculadora de Peso en Otros Planetas";
  document.getElementById('credits').innerHTML = "Código y Arte de Kenny Thomas";
  document.getElementById('menu-title').innerHTML = "Elige un Planeta:";
  document.getElementById('mercury').innerHTML = "Mercurio";
  document.getElementById('venus').innerHTML = "Venus";
  document.getElementById('earth').innerHTML = "Tierra";
  document.getElementById('mars').innerHTML = "Marte";
  document.getElementById('jupiter').innerHTML = "Júpiter";
  document.getElementById('saturn').innerHTML = "Saturno";
  document.getElementById('uranus').innerHTML = "Urano";
  document.getElementById('neptune').innerHTML = "Neptuno";
  document.getElementById('pluto').innerHTML = "Plutón";
  document.getElementById('enter-weight-id').innerHTML = "Ingrese el Peso:";
  document.getElementsByName('user-weight')[0].placeholder = "Ibs/kg";
  document.getElementById('submit').innerHTML = "Calcular";
  document.getElementById('result-label').innerHTML = "El Peso (Ibs/kg):";
}

const translatePageJapanese = (ev)=> {
  ev.preventDefault();
  document.getElementById('title').innerHTML = "プラネタリー・ウェイト・キャルキュレータ";
  document.getElementById('credits').innerHTML = "コード・アンド・アート・バイ ケニー・トーマス";
  document.getElementById('menu-title').innerHTML = "チューズ・ア・プラネット:";
  document.getElementById('mercury').innerHTML = "マーキュリー";
  document.getElementById('venus').innerHTML = "ビーナス";
  document.getElementById('earth').innerHTML = "アース";
  document.getElementById('mars').innerHTML = "マーズ";
  document.getElementById('jupiter').innerHTML = "ジュピター";
  document.getElementById('saturn').innerHTML = "サターン";
  document.getElementById('uranus').innerHTML = "ユレーナス";
  document.getElementById('neptune').innerHTML = "ネプトゥーン";
  document.getElementById('pluto').innerHTML = "プルートー";
  document.getElementById('enter-weight-id').innerHTML = "エンター・ウェート:";
  document.getElementsByName('user-weight')[0].placeholder = "パウンド/キログラム";
  document.getElementById('submit').innerHTML = "キャルキュレート	";
  document.getElementById('result-label').innerHTML = "ウェート (パウンド/キログラム):";
}

const changeImage = (ev)=> {
  ev.preventDefault();
  let planetSelection = document.getElementById('planet-menu').value;
  document.getElementById('planet-image').src = "" + planetSelection + ".png";
}

document.addEventListener('DOMContentLoaded', ()=>{
  document.getElementById('planet-image').ondragstart = function() { return false; };
  document.getElementById('planet-menu').addEventListener('change', changeImage);
  document.getElementById('submit').addEventListener('click', calculateWeight);
  document.getElementById('en-button').addEventListener('click', translatePageEnglish);
  document.getElementById('es-button').addEventListener('click', translatePageSpanish);
  document.getElementById('jp-button').addEventListener('click', translatePageJapanese);
});