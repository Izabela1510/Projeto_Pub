---
markdown: html
meta-viewport: width=device-width, initial-scale=1.0
title: Desenvolvimento
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

# Desenvolvimento

#### Explicação teórica de cada etapa

Pipeline de análise em dados de exoma para genômica humana. (2025/2)

<!-- BARRA DE PROGRESSO -->
<style>
.prog-wrap{background:#f4f4f0;border:1px solid #ddd;border-radius:12px;padding:1.4rem 1.6rem;margin:1.2rem 0 2rem;font-family:sans-serif}
.prog-header{display:flex;align-items:baseline;justify-content:space-between;margin-bottom:10px}
.prog-titulo{font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#888}
.prog-pct-num{font-size:24px;font-weight:800;color:#1A6B4A}
.prog-barra-bg{background:#ddd;border-radius:100px;height:8px;margin-bottom:8px;overflow:hidden}
.prog-barra-fill{height:100%;background:#1A6B4A;border-radius:100px;transition:width .6s ease;width:0%}
.prog-sub{font-size:13px;color:#777}
.prog-sub strong{color:#1A6B4A}
.mod-lista{list-style:none;padding:0;margin:1rem 0 0}
.mod-item{display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid #e8e8e4;font-family:sans-serif;font-size:14px}
.mod-item:last-child{border-bottom:none}
.mod-check{width:22px;height:22px;border-radius:50%;border:2px solid #ccc;display:flex;align-items:center;justify-content:center;font-size:11px;flex-shrink:0;color:white;background:#ccc;transition:all .2s}
.mod-check.done{background:#1A6B4A;border-color:#1A6B4A}
.mod-link{flex:1;color:#333;text-decoration:none}
.mod-link:hover{color:#1A6B4A}
.mod-link.done{color:#1A6B4A;font-weight:600}
.mod-btn{font-size:12px;padding:5px 12px;border-radius:6px;border:none;cursor:pointer;font-family:sans-serif;font-weight:600;transition:opacity .15s}
.mod-btn:hover{opacity:.8}
.mod-btn.marcar{background:#1A6B4A;color:white}
.mod-btn.desmarcar{background:transparent;border:1px solid #ccc;color:#888;font-size:11px}
.cert-aviso{background:linear-gradient(135deg,#1A6B4A 0%,#0D4A33 100%);border-radius:12px;padding:1.4rem 1.8rem;margin-top:1.5rem;color:white;font-family:sans-serif;display:none;align-items:center;gap:16px}
.cert-aviso a{display:inline-block;margin-top:8px;background:#F2C94C;color:#111;padding:10px 22px;border-radius:8px;font-weight:800;font-size:14px;text-decoration:none}
</style>

<div class="prog-wrap">
  <div class="prog-header">
    <div class="prog-titulo">Seu progresso no curso</div>
    <div class="prog-pct-num" id="prog-pct">0%</div>
  </div>
  <div class="prog-barra-bg">
    <div class="prog-barra-fill" id="prog-fill"></div>
  </div>
  <div class="prog-sub">
    <strong id="prog-num">0</strong> de <strong>10</strong> módulos concluídos
  </div>
  <ul class="mod-lista">
    <li class="mod-item" data-i="0"><div class="mod-check" id="chk-0">✓</div><a class="mod-link" id="lnk-0" href="https://sophiaozorio.github.io/Projeto_Pub/problema.html">🧩 1. Definição do Problema</a><button class="mod-btn marcar" onclick="tog(0)">Marcar</button></li>
    <li class="mod-item" data-i="1"><div class="mod-check" id="chk-1">✓</div><a class="mod-link" id="lnk-1" href="https://sophiaozorio.github.io/Projeto_Pub/literatura.html">📕 2. Levantamento da Literatura</a><button class="mod-btn marcar" onclick="tog(1)">Marcar</button></li>
    <li class="mod-item" data-i="2"><div class="mod-check" id="chk-2">✓</div><a class="mod-link" id="lnk-2" href="https://sophiaozorio.github.io/Projeto_Pub/fastq.html">🧬 3. Arquivo FASTQ</a><button class="mod-btn marcar" onclick="tog(2)">Marcar</button></li>
    <li class="mod-item" data-i="3"><div class="mod-check" id="chk-3">✓</div><a class="mod-link" id="lnk-3" href="https://sophiaozorio.github.io/Projeto_Pub/qc.html">🧪 4. Controle de Qualidade</a><button class="mod-btn marcar" onclick="tog(3)">Marcar</button></li>
    <li class="mod-item" data-i="4"><div class="mod-check" id="chk-4">✓</div><a class="mod-link" id="lnk-4" href="https://sophiaozorio.github.io/Projeto_Pub/trimagem.html">✂️ 5. Trimagem</a><button class="mod-btn marcar" onclick="tog(4)">Marcar</button></li>
    <li class="mod-item" data-i="5"><div class="mod-check" id="chk-5">✓</div><a class="mod-link" id="lnk-5" href="https://sophiaozorio.github.io/Projeto_Pub/alinhamento.html">📌 6. Alinhamento</a><button class="mod-btn marcar" onclick="tog(5)">Marcar</button></li>
    <li class="mod-item" data-i="6"><div class="mod-check" id="chk-6">✓</div><a class="mod-link" id="lnk-6" href="https://sophiaozorio.github.io/Projeto_Pub/bp.html">✅ 7. Boas Práticas</a><button class="mod-btn marcar" onclick="tog(6)">Marcar</button></li>
    <li class="mod-item" data-i="7"><div class="mod-check" id="chk-7">✓</div><a class="mod-link" id="lnk-7" href="https://sophiaozorio.github.io/Projeto_Pub/variantes.html">🔎 8. Chamada de Variantes</a><button class="mod-btn marcar" onclick="tog(7)">Marcar</button></li>
    <li class="mod-item" data-i="8"><div class="mod-check" id="chk-8">✓</div><a class="mod-link" id="lnk-8" href="https://sophiaozorio.github.io/Projeto_Pub/anotacao.html">📑 9. Anotação de Variantes</a><button class="mod-btn marcar" onclick="tog(8)">Marcar</button></li>
    <li class="mod-item" data-i="9"><div class="mod-check" id="chk-9">✓</div><a class="mod-link" id="lnk-9" href="https://sophiaozorio.github.io/Projeto_Pub/analise.html">📊 10. Análises</a><button class="mod-btn marcar" onclick="tog(9)">Marcar</button></li>
  </ul>
</div>

<div class="cert-aviso" id="cert-aviso">
  <div>
    <div style="font-size:28px;margin-bottom:6px">🎉</div>
    <strong style="font-size:17px">Parabéns! Você concluiu todos os módulos.</strong>
    <p style="font-size:14px;opacity:.85;margin:6px 0 0">Agora você pode solicitar seu certificado.</p>
    <a href="https://sophiaozorio.github.io/Projeto_Pub/certificado.html">Ir para o certificado →</a>
  </div>
</div>

<script>
const T=10;let D=new Set(JSON.parse(localStorage.getItem('pub_prog')||'[]'));
function render(){const n=D.size,p=Math.round(n/T*100);document.getElementById('prog-fill').style.width=p+'%';document.getElementById('prog-num').textContent=n;document.getElementById('prog-pct').textContent=p+'%';for(let i=0;i<T;i++){const c=document.getElementById('chk-'+i),l=document.getElementById('lnk-'+i),b=document.querySelector('[data-i="'+i+'"] .mod-btn');if(D.has(i)){c.classList.add('done');l.classList.add('done');b.textContent='Desmarcar';b.className='mod-btn desmarcar';}else{c.classList.remove('done');l.classList.remove('done');b.textContent='Marcar';b.className='mod-btn marcar';}}document.getElementById('cert-aviso').style.display=n===T?'flex':'none';}
function tog(i){D.has(i)?D.delete(i):D.add(i);localStorage.setItem('pub_prog',JSON.stringify([...D]));render();}
render();
</script>

---

🧩

##### [1. Definição do Problema](https://sophiaozorio.github.io/Projeto_Pub/problema.html)

Ponto inicial para o desenvolvimento do projeto.

📕

##### [2. Levantamento da Literatura](https://sophiaozorio.github.io/Projeto_Pub/literatura.html)

Pesquisa e revisão de informações sobre o tema, para embasar o desenvolvimento do projeto.

🧬

##### [3. Arquivo FASTQ](https://sophiaozorio.github.io/Projeto_Pub/fastq.html)

Estrutura e formato do arquivo que armazena sequências biológicas.

🧪

##### [4. Controle de Qualidade](https://sophiaozorio.github.io/Projeto_Pub/qc.html)

QC dos arquivos FASTQ.

✂️

##### [5. Trimagem](https://sophiaozorio.github.io/Projeto_Pub/trimagem.html)

Remoção de adaptadores e bases de baixa qualidade.

📌

##### [6. Alinhamento](https://sophiaozorio.github.io/Projeto_Pub/alinhamento.html)

Mapeamento das leituras contra o genoma de referência.

✅

##### [7. Boas práticas](https://sophiaozorio.github.io/Projeto_Pub/bp.html)

Práticas aplicadas às amostras que asseguram a identificação precisa e confiável das variantes genéticas.

🔎

##### [8. Chamada de Variantes](https://sophiaozorio.github.io/Projeto_Pub/variantes.html)

Identificação de SNVs e indels nas amostras.

📑

##### [9. Anotação de Variantes](https://sophiaozorio.github.io/Projeto_Pub/anotacao.html)

Enriquecimento funcional das variantes.

📊

##### [10. Análises](https://sophiaozorio.github.io/Projeto_Pub/analise.html)

Exploração estatística e interpretação biológica dos resultados.
