# Odonto Postale — Landing Page

Landing page institucional (mobile-first) da Odonto Postale, clínica odontológica no bairro da Pompeia, zona
oeste de São Paulo — SP.

HTML/CSS/JS puros, sem build step e sem dependências — abra `index.html` direto num servidor estático (ex.:
`python3 -m http.server`, Netlify, Vercel, GitHub Pages).

## Estrutura

```
index.html          página única (hero, serviços, sobre, depoimentos, contato, footer)
css/styles.css       identidade visual (azul-escuro, azul-claro, branco)
js/main.js           menu mobile, scroll suave com offset do header, formulário de contato
.github/workflows/   checks automáticos de CI (lint de HTML, sintaxe JS, links locais)
```

## Conteúdo

- **Serviços em destaque**: Implante Dentário, Ortodontia e Clareamento Dental.
- **Endereço, telefone e redes sociais** (Instagram, Facebook, WhatsApp) vieram de fontes públicas conferidas
  entre si (o site oficial da clínica não estava acessível a partir do ambiente usado para montar esta página).
- **Depoimentos**: a nota agregada exibida (4,8 de 5, com mais de 660 avaliações) é real e vem do Google. Como o
  ambiente usado para montar o site não teve acesso ao texto original das avaliações no Google Maps, os três
  cards de depoimento resumem **temas recorrentes** observados nos comentários (implante, ortodontia e
  clareamento) em vez de citar um comentário específico palavra por palavra — isso é dito explicitamente no
  texto abaixo da seção, com link para o perfil da clínica no Google Maps. Não há testemunhos fabricados
  atribuídos a uma pessoa nomeada específica.
- **Formulário de contato**: sem backend — ao enviar, o formulário valida os campos no navegador e abre o
  aplicativo de e-mail do usuário com uma mensagem pré-preenchida endereçada a `contato@odontopostale.com.br`.
- **Ícones**: todos em SVG inline (sem arquivos de imagem externos), para manter a página leve e rápida.
- **SEO**: meta tags de título/descrição/keywords, Open Graph, Twitter Card e dados estruturados
  (`schema.org/Dentist`) com nome, endereço, telefone e redes sociais da clínica.

## Limitações conhecidas

Não há fotos reais da clínica, da equipe ou do ambiente — o ambiente usado para montar este site não teve
acesso para obter fotos oficiais da Odonto Postale, e fotos genéricas de banco de imagens ou geradas por IA
não foram usadas para não representar errado a clínica real. A seção "Sobre" usa uma ilustração vetorial
(SVG) no lugar de foto.

## Como estender

- Novos serviços: duplique um `.service-card` em `index.html` (seção `#servicos`) e um ícone SVG correspondente.
- Fotos reais: quando disponíveis, adicione-as em uma pasta `images/` e referencie nos `<img>` ou como
  `background-image` nos blocos que hoje usam ilustração SVG (`.hero-card`, `.about-visual`).
- Formulário com backend real: troque a lógica de `mailto:` em `js/main.js` por uma chamada `fetch` para o
  endpoint desejado, mantendo a validação client-side já existente.
