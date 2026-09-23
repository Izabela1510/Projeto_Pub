# COMO USAR ESTES ARQUIVOS NO SEU REPOSITÓRIO
# sophiaozorio/Projeto_Pub

## Estrutura dos arquivos gerados

  _includes_banner_groups.html   → renomear para _includes/banner_groups.html
  _includes_usp_gate.html        → renomear para _includes/usp_gate.html
  _includes_usp_gate_close.html  → renomear para _includes/usp_gate_close.html
  desenvolvimento.md             → substitui o desenvolvimento.md atual
  certificado.md                 → arquivo novo na raiz do repositório
  LEIA_PRIMEIRO.md               → este arquivo (pode apagar)

---

## PASSO A PASSO

### 1. Criar a pasta _includes (se não existir)
No GitHub: New file → digitar "_includes/banner_groups.html"
Cole o conteúdo de _includes_banner_groups.html

### 2. Criar _includes/usp_gate.html
Cole o conteúdo de _includes_usp_gate.html

### 3. Criar _includes/usp_gate_close.html
Cole o conteúdo de _includes_usp_gate_close.html

### 4. Substituir desenvolvimento.md
Copie TODO o conteúdo de desenvolvimento.md e cole no arquivo existente

### 5. Criar certificado.md
New file → certificado.md → cole o conteúdo

### 6. Adicionar link "Certificado" na navegação do site
Se você tiver um _config.yml com lista de páginas, adicione:
  - certificado

Se a navegação for manual em cada página, adicione o link:
  [Certificado](certificado.html)

---

## PARA CADA SUBPÁGINA DE MÓDULO
(problema.md, literatura.md, fastq.md, qc.md, trimagem.md,
 alinhamento.md, bp.md, variantes.md, anotacao.md, analise.md)

Adicione no INÍCIO do front matter ou logo após o ---:
  {% include banner_groups.html %}
  {% include usp_gate.html %}

E NO FIM da página, antes do último conteúdo:
  {% include usp_gate_close.html %}

---

## SUBSTITUIR AS URLs (buscar e trocar em todos os arquivos)

  SEU_GRUPO_AQUI
    → código do seu Google Groups (parte final da URL do grupo)
    → ex: groups.google.com/g/bioinformatica-usp-2025

  SEU_FORMULARIO_AQUI
    → ID do seu Google Forms (aparece na URL ao publicar)
    → ex: 1FAIpQLSe...ABC/viewform

  SEU_CLIENT_ID
    → client_id das credenciais USP OAuth que você já tem

---

## COMO FUNCIONA EM PRODUÇÃO

  Login USP (OAuth real):
  1. Usuário clica "Entrar com conta USP"
  2. Redireciona para oauth.usp.br com seus parâmetros
  3. USP autentica e devolve um code para o seu callback
  4. Seu backend troca o code pelo token e salva o usuário
  5. Backend grava o usuário em localStorage/cookie e redireciona
     de volta para a página protegida

  Progresso (localStorage):
  - Fica salvo no navegador do aluno automaticamente
  - Chave: pub_prog (array JSON de índices concluídos)
  - Compartilhado entre desenvolvimento.md e certificado.md

  Certificado:
  - Só aparece quando pub_prog tiver os 10 módulos
  - Abre o Google Forms em nova aba com a URL configurada

