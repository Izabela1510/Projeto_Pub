/* atividade-envio.js
   Adiciona, no fim de TODA caixa de atividade (.ativ-section), o aviso para enviar
   o print no Google Groups. Para mudar o texto ou o link, edite só este arquivo. */
(function () {
  var GRUPO_URL = 'https://groups.google.com/a/usp.br/g/abp.aeg';
  var TEXTO = 'Envie o print da sua atividade no Google Groups';

  function montar() {
    var caixas = document.querySelectorAll('.ativ-section');
    for (var i = 0; i < caixas.length; i++) {
      if (caixas[i].querySelector('.envio-print')) continue; // não duplica
      var box = document.createElement('div');
      box.className = 'envio-print';
      box.style.cssText = 'margin-top:1.2rem;padding:1rem 1.2rem;background:#fff;border:2px dashed #003B6F;border-radius:10px;display:flex;align-items:center;gap:12px;flex-wrap:wrap;';
      box.innerHTML =
        '<span style="font-size:24px">\uD83D\uDCF8</span>' +
        '<span style="flex:1;min-width:200px;font-size:14px;color:#1A3050"><strong>' + TEXTO + '</strong><br>' +
        'Tire um print da atividade feita e envie no grupo.</span>' +
        '<a href="' + GRUPO_URL + '" target="_blank" rel="noopener" ' +
        'style="background:#003B6F;color:#fff;padding:9px 18px;border-radius:8px;font-weight:700;font-size:13px;text-decoration:none;">Abrir Google Groups \u2192</a>';
      caixas[i].appendChild(box);
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', montar);
  else montar();
})();
