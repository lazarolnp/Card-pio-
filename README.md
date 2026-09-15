# Cardápio Digital — Restaurante Paladino

Site de cardápio digital (mobile-first, para acesso via QR code na mesa) do Restaurante Paladino, restaurante-fazenda mineiro na Pampulha, Belo Horizonte.

HTML/CSS/JS puros, sem build step e sem dependências — abra `index.html` direto num servidor estático (ex.: `python3 -m http.server`, Netlify, Vercel, GitHub Pages).

## Estrutura

```
index.html          página única (hero, busca, categorias, cardápio, sobre, avaliações, localização)
css/styles.css       identidade visual (vermelho Paladino, creme, verde, dourado)
js/main.js           dados dos pratos + busca, modal de prato, navegação por categoria
images/dishes/       fotos dos pratos (ver images/dishes/README.md)
images/restaurant/   fotos do ambiente / imagem de compartilhamento (ver images/restaurant/README.md)
.github/workflows/   checks automáticos de CI (lint de HTML, sintaxe JS, links locais)
```

## Dados usados

O cardápio completo (categorias, pratos, descrições e preços) foi transcrito diretamente do cardápio oficial em PDF do Paladino (14 páginas: tira-gostos, entradas, pratos tradicionais, acompanhamentos, sobremesas, almoço executivo, criançada, cervejas, não alcoólicas, coquetéis, mocktails, doses, licores, cafés, cachaças por região e vinhos). Endereço, telefone, WhatsApp, horário de funcionamento e avaliações agregadas (Google/Restaurant Guru) vieram de fontes públicas conferidas entre si.

Pratos são exibidos como cards interativos com foto/modal (o cardápio é o foco principal do site). A extensa carta de bebidas, cachaças e vinhos é exibida como listas organizadas e expansíveis (`<details>`), do mesmo jeito que o cardápio físico apresenta — mais fácil de escanear do que um card por rótulo.

## Limitações conhecidas

**Sem fotos reais ainda.** Nenhuma foto de prato foi incluída, para não usar imagens genéricas ou geradas por IA no lugar da comida real do Paladino (o ambiente usado para montar o site não teve acesso de rede para baixar fotos). Os cards usam um design tipográfico elegante (gradiente colorido por categoria + ícone) como aparência definitiva até que fotos reais sejam adicionadas. Basta salvar `images/dishes/<id-do-prato>.jpg` (mesmo `id` usado no array `MENU`) que a foto passa a aparecer automaticamente, sem alterar código — veja `images/dishes/README.md`.

A seção de avaliações mostra as notas médias reais (Google 4.6, Restaurant Guru 4.5) e temas recorrentes reais nos comentários, mas não depoimentos individuais atribuídos a pessoas específicas — não há fabricação de testemunhos.

## Como estender o cardápio

Em `js/main.js`, adicione ao array `MENU`:

```js
{
  id: "novo-prato",              // usado no nome do arquivo de foto
  name: "Nome do Prato",
  category: "carnes-porco",      // tira-gostos | entradas | aves-peixes | carnes-porco | sobremesas | executivo | criancada
  visual: "cow",                 // opcional: ícone/cor do card — tira-gostos | entradas | cow | pig | chicken | fish | leaf | sobremesas | executivo | criancada
  price: 65,
  desc: "Descrição curta do prato.",
  portion: "8 unidades",         // opcional
  halfPortion: { label: "1/2 porção (4 unidades)", price: 38 }, // opcional
  serves: "Serve 4 pessoas",     // opcional, sobrescreve a nota padrão da seção
  note: "Servida somente aos sábados.", // opcional
  featured: true,                // opcional: aparece em "Destaques"
  badge: "Especial da casa"      // opcional
}
```

Para os "Acompanhamentos" e a seção "Bebidas / Cachaças & Vinhos", os itens são HTML estático (listas `<li class="list-row">`) direto no `index.html` — sem necessidade de mexer no JS para adicionar ou editar um item.
