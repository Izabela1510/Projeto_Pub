---
markdown: html
meta-viewport: width=device-width, initial-scale=1.0
title: Certificado
---

- [Home](https://sophiaozorio.github.io/Projeto_Pub/index.html)
- [Desenvolvimento](https://sophiaozorio.github.io/Projeto_Pub/desenvolvimento.html)
- [Atividades](https://sophiaozorio.github.io/Projeto_Pub/praticas.html)
- [Referências](https://sophiaozorio.github.io/Projeto_Pub/referencia.html)
- [Autores](https://sophiaozorio.github.io/Projeto_Pub/autores.html)
- [Certificado](https://sophiaozorio.github.io/Projeto_Pub/certificado.html)

<!-- BANNER GOOGLE GROUPS -->
<div style="background:#003B6F;color:white;padding:9px 1.5rem;font-size:13px;font-family:sans-serif;display:flex;align-items:center;justify-content:center;gap:10px;flex-wrap:wrap;border-radius:8px;margin-bottom:1.5rem;">
  💬 Dúvidas sobre o curso?
  <a href="https://groups.google.com/g/SEU_GRUPO_AQUI" target="_blank" rel="noopener"
     style="color:#F2C94C;font-weight:700;text-decoration:none;">
    ✉️ Acesse o grupo de discussão no Google Groups →
  </a>
</div>

# Certificado de Conclusão

<style>
.cert-wrap{max-width:560px;margin:2rem auto;font-family:sans-serif}
.cert-lock{background:#f8f8f5;border:1px solid #ddd;border-radius:14px;padding:2.5rem;text-align:center;color:#555}
.cert-lock h2{font-size:21px;color:#333;margin:0 0 .8rem}
.cert-lock p{font-size:15px;line-height:1.6;margin:.5rem 0}
.cert-lock a{color:#1A6B4A;font-weight:600}
.mini-bg{background:#ddd;border-radius:100px;height:8px;margin:1rem 0;overflow:hidden}
.mini-fill{height:100%;background:#1A6B4A;border-radius:100px;transition:width .5s}
.cert-ok{background:linear-gradient(135deg,#1A6B4A 0%,#0D4A33 100%);border-radius:20px;padding:2.5rem;color:white;text-align:center;position:relative;overflow:hidden}
.cert-ok::before{content:'🏆';font-size:90px;position:absolute;top:-10px;right:-10px;opacity:.08}
.cert-badge{display:inline-block;background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.25);border-radius:100px;padding:6px 18px;font-size:12px;font-weight:700;letter-spacing:.07em;text-transform:uppercase;margin-bottom:1rem}
.cert-ok h2{font-size:26px;font-weight:800;margin:0 0 .8rem;line-height:1.2}
.cert-ok p{font-size:15px;opacity:.85;line-height:1.6;margin:0 0 1.8rem}
.cert-btn{display:inline-flex;align-items:center;gap:8px;background:#F2C94C;color:#1A1A18;padding:14px 28px;border-radius:10px;font-size:15px;font-weight:800;text-decoration:none;font-family:sans-serif;transition:background .2s,transform .1s}
.cert-btn:hover{background:#FFD93D;transform:translateY(-1px);color:#111}
.cert-note{margin-top:1rem;font-size:13px;opacity:.6}
.cert-cards{display:grid;grid-template-columns:1fr 1fr;gap:.8rem;margin-top:1.5rem}
.cert-card{background:rgba(255,255,255,.1);border-radius:10px;padding:.9rem;text-align:left;font-size:13px}
.cert-card strong{display:block;font-size:10px;text-transform:uppercase;letter-spacing:.07em;opacity:.7;margin-bottom:3px}
</style>

<div class="cert-wrap">

  <div id="cert-lock" class="cert-lock" style="display:none">
    <div style="font-size:44px;margin-bottom:.5rem">🔒</div>
    <h2>Certificado não disponível ainda</h2>
    <p>Conclua todos os 10 módulos para liberar o formulário de certificado.</p>
    <div class="mini-bg"><div class="mini-fill" id="c-fill"></div></div>
    <p><strong id="c-num">0</strong> de <strong>10</strong> módulos concluídos (<span id="c-pct">0%</span>)</p>
    <p style="margin-top:1.2rem"><a href="https://sophiaozorio.github.io/Projeto_Pub/desenvolvimento.html">← Voltar ao desenvolvimento</a></p>
  </div>

  <div id="cert-ok" class="cert-ok" style="display:none">
    <div class="cert-badge">✨ Certificado disponível</div>
    <h2>Parabéns!<br>Você concluiu o curso.</h2>
    <p>Responda ao formulário de avaliação final e em até <strong>3 dias úteis</strong> você receberá seu certificado no e-mail USP.</p>
    <a class="cert-btn"
       href="https://docs.google.com/forms/d/e/SEU_FORMULARIO_AQUI/viewform"
       target="_blank" rel="noopener">
      📝 Acessar formulário de certificado
    </a>
    <p class="cert-note">Abrirá em nova aba · Use seu e-mail @usp.br ao preencher</p>
    <div class="cert-cards">
      <div class="cert-card"><strong>Curso</strong>Pipeline de Análise de Exoma — Genômica Humana</div>
      <div class="cert-card"><strong>Módulos concluídos</strong>10 de 10 ✅</div>
    </div>
  </div>

</div>

<script>
const d=new Set(JSON.parse(localStorage.getItem('pub_prog')||'[]'));
const n=d.size,p=Math.round(n/10*100);
if(n===10){document.getElementById('cert-ok').style.display='block';}
else{
  const el=document.getElementById('cert-lock');
  el.style.display='block';
  document.getElementById('c-fill').style.width=p+'%';
  document.getElementById('c-num').textContent=n;
  document.getElementById('c-pct').textContent=p+'%';
}
</script>
