---
markdown: html
meta-viewport: width=device-width, initial-scale=1.0
title: Práticas
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

<!-- LOGIN USP -->
<style>
#usp-gate{background:#f8f8f5;border:1px solid #ddd;border-radius:14px;padding:2rem 2.5rem;max-width:460px;margin:1rem auto 2rem;text-align:center;font-family:sans-serif}
#usp-gate h2{font-size:19px;color:#003B6F;margin:0 0 .5rem}
#usp-gate p{font-size:14px;color:#666;line-height:1.6;margin:0 0 1.2rem}
.btn-usp{display:inline-flex;align-items:center;gap:10px;background:#003B6F;color:white;padding:13px 24px;border-radius:8px;font-size:14px;font-weight:700;border:none;cursor:pointer;font-family:sans-serif;transition:background .2s}
.btn-usp:hover{background:#002850}
.usp-info{background:#E8EFF7;border:1px solid #B0C4D8;border-radius:8px;padding:.7rem 1rem;font-size:12px;color:#1A3050;margin-top:1rem;text-align:left;line-height:1.6}
#usp-bar{display:none;background:#E8EFF7;border:1px solid #B0C4D8;border-radius:8px;padding:7px 14px;font-size:13px;color:#1A3050;font-family:sans-serif;margin-bottom:1.2rem;align-items:center;gap:10px}
#usp-bar button{margin-left:auto;background:transparent;border:1px solid #B0C4D8;border-radius:5px;padding:3px 10px;font-size:12px;color:#555;cursor:pointer;font-family:sans-serif}
#usp-bar button:hover{color:#c00;border-color:#c00}
#conteudo{display:none}
</style>

<div id="usp-gate">
  <h2>🔒 Acesso restrito à USP</h2>
  <p>Este conteúdo é exclusivo para a comunidade USP.<br>Faça login com sua conta institucional para continuar.</p>
  <button class="btn-usp" onclick="loginUSP()">🎓 Entrar com conta USP</button>
  <div class="usp-info">
    <strong>Como funciona:</strong> você será redirecionado ao portal <code>oauth.usp.br</code>. Após o login com seu número USP e senha, voltará automaticamente a esta página.
  </div>
</div>

<div id="usp-bar">
  🎓 <span id="usp-nome"></span> &nbsp;·&nbsp; <span id="usp-email" style="color:#555"></span>
  <button onclick="logoutUSP()">Sair</button>
</div>

<div id="conteudo">

# Atividades

Selecione uma atividade abaixo para visualizar seu conteúdo.

## PREPARAÇÃO DOS AMBIENTES CONDA

### O que é ambiente conda?

- Um ambiente Conda é um espaço isolado dentro do gerenciador de pacotes Conda (usado no Anaconda ou Miniconda) que permite instalar e gerenciar versões específicas de pacotes, bibliotecas e dependências sem interferir em outros projetos.
- Uma boa prática é utilizar um ambiente conda para cada etapa no processamento dos dados.


### Como usar?

**1. Instalar Conda**

- Baixar e instalar **Anaconda** (completo) ou **Miniconda** (mais leve).
- Verificar instalação:
  📋

```
conda --version
```

**2. Criar um ambiente**

- Criar ambiente com nome específico e versão do Python desejada:
  📋

```
conda create -n meu_ambiente python=3.11
```

**3. Ativar e desativar ambiente**

- Ativar ambiente:
  📋

```
conda activate meu_ambiente
```


- Desativar ambiente:
  📋

```
conda deactivate
```

**4. Instalar pacotes**

⚠️ Nesta etapa, pesquise no Google o nome da ferramenta necessária seguido de `conda install` para cada atividade. Exemplo: `fastqc conda install`. Dessa forma, você descobrirá como instalar a ferramenta via Conda, incluindo todas as dependências necessárias.

⚠️ Certifique-se de instalar as ferramentas apenas com o ambiente Conda desejado ativo!

- Instalar pacotes dentro do ambiente ativo:
  📋

```
conda install numpy pandas
```


- Instalar de canais específicos (ex.: conda-forge):
  📋

```
conda install -c conda-forge pacote
```

## Atividade 1 — Definição do Problema

**Objetivo:** Iniciar o desenvolvimento do projeto. Aqui, você irá estruturar a base do estudo, identificando o que será investigado.

**Pergunta Norteadora:** Quais genes estão relacionados ao desenvolvimento do câncer de mama hereditário? (Se o aluno já estiver investigando outra doença, a análise pode ser adaptada para o tema escolhido.)

## Atividade 2 — Busca na Literatura

**Objetivo:** Realizar uma pesquisa bibliográfica sobre o tema do projeto para compreender o que já foi estudado, identificar lacunas e fundamentar cientificamente a proposta.

**Tarefa:**

1. Busque artigos e revisões recentes (últimos 5 anos) em bases científicas como:
  - [PubMed](https://pubmed.ncbi.nlm.nih.gov/)
  - [SciELO](https://www.scielo.org/)
  - [Google Scholar](https://scholar.google.com/)
2. Elabore um parágrafo integrando os achados e explicando como eles justificam e contribuem para o desenvolvimento do seu projeto.


**💡 Dica:** Aproveite para buscar estudos que adotem metodologias semelhantes à do seu projeto (como a análise de exoma germinativo) e que disponibilizem seus dados em bancos públicos de acesso aberto.

## Atividade 3 — Download dos Dados

**Objetivo:** Baixar os dados necessários para o projeto.

**Tarefa:**

**1 -** Com base nos dados encontrados durante a busca literária, acesse o banco onde os mesmos foram disponibilizados, encontre o código **SRA** e execute o seguinte comando para baixar:

📋

```
/CAMINHO/PARA/O/EXECUTÁVEL/prefetch SRRXXXXXX SRRYYYYYY SRRZZZZZZ
```

**2 -** Após baixar os dados .SRA, é necessário transformá-los para o formato **FASTQ**. Para isso, use o seguinte comando (para dados paired-end):

📋

```
/CAMINHO/PARA/O/EXECUTÁVEL/fastq-dump --splites-files --progress --outdir /CAMINHO/DE/SAIDA/DOS/ARQUIVOS/GERADOS/
```
# Caso suas amostras sejam single-end não use o parâmetro "--splites-files"

**💡 Dica:** Faça pastas separadas para armazenar os outputs de passo da pipeline!

## Atividade 4 — Controle de Qualidade

**Objetivo:** Realizar e analisar o controle de qualidade das amostras baixadas no passo anterior.

**Tarefa:**

**1 -** Tendo os arquivos FASTQ das amostras selecionadas, utilizaremos a ferramenta FastQC, para gerar os relatórios de controle de qualidade, executando o seguinte comando:

📋

```
fastqc amostra_A_R1.fastq.gz amostra_A_R2.fastq.gz amostra_B_R1.fastq.gz amostra_B_R2.fastq.gz
```


**2 -** Após realizar o controle de qualidade com a ferramenta FastQC, utilizaremos a ferramenta MultiQC para integrar os resultados de todas as amostras em somente um gráfico. Para isso, execute o seguinte comando:

📋

```
multiqc .
```
# Vá para o diretório que contém os arquivos que você deseja analisar com o MultiQC.  
# A entrada serão os arquivos gerados pelo FastQC ".fastq.gz"


**3 -** Analise os resultados obtidos, com auxilio do material teórico na aba "Desenvolvimento", módulo "4 - Controle de Qualidade".

## Atividade 5 — Trimagem

**Objetivo:** Efetuar a remoção dos adaptadores e o corte das bases de baixa qualidade, se necessário.

**Tarefa:**

**1 -** Após revisar os resultados do passo anterior, verifique se é necessário executar a trimagem para remover adaptadores e bases de baixa qualidade. Caso necessário, execute esse coomando no terminal do servidor:

📋

```
/CAMINHO/PARA/O/EXECUTÁVEL/trim_galore -j 24 -q 10 --phred33 --length 35 --paired --retain_unpaired -o /CAMINHO/PARA/OS/OUTPUTS/ amostra_A_R1.fastq.gz amostra_A_R2.fastq.gz
```

**2 -** Caso suas amostras tenham sido trimadas, repita a atividade 4. O objetivo é garantir que a qualidade dos dados é adequada para dar continuidade à análise.

## Atividade 6 — Alinhamento

**Objetivo:** Determinar a localização de origem de cada sequência curta (read) em um genoma de referência.

**Tarefa:**

**1 -** Após confirmar a qualidade das amostras, iremos realizar a etapa de alinhamento com o genoma de referência:

📋

```
bwa mem -M -t 24 [/CAMINHO/GENOMA/arquivo.fa] [leitura_R1.fastq.gz] [leitura_R2.fastq.gz] > [/CAMINHO/SAIDA/arquivo_alinhado.sam] 
```

**2 -** Converter SAM para BAM:

📋

```
samtools view -Sb [amostra.sam] > [amostra.bam]
samtools sort -@ 24 -o [amostra.sorted.bam] [amostra.bam]
```

## Atividade 7 — Boas Práticas GATK

**Objetivo:** Efetuar etapas para que garantem a qualidade das amostras.

**Tarefa:**

**1 -** Marcar duplicatas com Picard e **2 -** Recalibrar qualidade de bases com GATK BaseRecalibrator. Consulte o material teórico na aba Desenvolvimento, módulo 7.

## Atividade 8 — Chamada de Variantes

**Objetivo:** Detectar e genotipar variantes genéticas (SNPs e indels) a partir dos arquivos BAM.

Consulte o material teórico na aba Desenvolvimento, módulo 8, para os scripts completos.

## Atividade 9 — Anotação das Variantes

**Objetivo:** Realizar a anotação funcional das variantes com SnpEff e SnpSift.

Consulte o material teórico na aba Desenvolvimento, módulo 9, para os scripts completos.

## Atividade 10 — Análises

**Objetivo:** Realizar análises com os dados processados.

**Tarefa:** Explore o software **R** e seus pacotes para realizar análises com os dados. Por exemplo, o pacote [maftools](https://www.bioconductor.org/packages/release/bioc/html/maftools.html) permite gerar [**oncoplots**](https://bioconductor.org/packages/release/bioc/vignettes/maftools/inst/doc/oncoplots.html) e outras visualizações genômicas.

📋

```r
library(maftools)
laml.maf = system.file('extdata', 'tcga_laml.maf.gz', package = 'maftools')
laml.clin = system.file('extdata', 'tcga_laml_annot.tsv', package = 'maftools')
laml = read.maf(maf = laml.maf, clinicalData = laml.clin, verbose = FALSE)
oncoplot(maf = laml, draw_titv = TRUE)
```

</div><!-- /conteudo -->

<!-- BLOCO DÚVIDAS NO RODAPÉ -->
<div id="footer-groups" style="display:none;background:#E8EFF7;border:1px solid #B0C4D8;border-radius:10px;padding:1rem 1.4rem;margin-top:2.5rem;font-family:sans-serif;font-size:14px;color:#1A3050;">
  💬 Ficou com dúvidas?
  <a href="https://groups.google.com/g/SEU_GRUPO_AQUI" target="_blank" rel="noopener"
     style="color:#003B6F;font-weight:700;text-decoration:none;margin-left:4px;">
    Pergunte no Google Groups →
  </a>
</div>

<script>
function loginUSP(){
  // EM PRODUÇÃO: substitua pelo redirect real para oauth.usp.br
  // window.location.href = 'https://uspdigital.usp.br/wsusuario/oauthautorizacao'
  //   + '?redirect_uri=' + encodeURIComponent(location.href)
  //   + '&response_type=code&client_id=SEU_CLIENT_ID';
  //
  // SIMULAÇÃO para testes (remova em produção):
  localStorage.setItem('pub_user', JSON.stringify({nome:'Usuário USP', email:'usuario@usp.br'}));
  mostrar();
}
function logoutUSP(){localStorage.removeItem('pub_user');location.reload();}
function mostrar(){
  const u=JSON.parse(localStorage.getItem('pub_user')||'null');
  if(u){
    document.getElementById('usp-gate').style.display='none';
    document.getElementById('conteudo').style.display='block';
    document.getElementById('footer-groups').style.display='block';
    const bar=document.getElementById('usp-bar');
    bar.style.display='flex';
    document.getElementById('usp-nome').textContent=u.nome;
    document.getElementById('usp-email').textContent=u.email;
  }
}
mostrar();
</script>
