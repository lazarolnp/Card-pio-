# Cardápio Digital — Restaurante Paladino

Site de cardápio digital (mobile-first, para acesso via QR code na mesa) do Restaurante Paladino, restaurante-fazenda mineiro na Pampulha, Belo Horizonte.

HTML/CSS/JS puros, sem build step e sem dependências — abra `index.html` direto num servidor estático (ex.: `python3 -m http.server`, Netlify, Vercel, GitHub Pages).

## Estrutura

```
index.html          página única (hero, busca, categorias, cardápio, sobre, avaliações, localização)
css/styles.css       identidade visual (vermelho Paladino, creme, verde, dourado)
js/main.js           dados do cardápio + busca, modal de prato, navegação por categoria
images/dishes/       fotos dos pratos (ver images/dishes/README.md)
```

## Dados usados

Endereço, telefone, WhatsApp, horário de funcionamento, avaliações agregadas (Google/Restaurant Guru) e a maior parte das descrições de pratos foram levantados a partir de fontes públicas (site oficial, iFood, perfis de avaliação) e conferidos entre si. Os 12 itens do cardápio com preço vieram diretamente do cardápio informado para este projeto.

## Limitações conhecidas (importante)

O ambiente usado para gerar este site **não teve acesso de rede para baixar arquivos** do site oficial do Paladino, do PDF de 14 páginas do cardápio nem de fotos (bloqueio de política de rede do ambiente de execução, não do site do restaurante). Por isso:

1. **Cardápio parcial**: o site já está pronto para o cardápio completo, mas hoje só contém os 12 itens (com preço) fornecidos + as categorias reais confirmadas (Tira-Gostos, Carnes, Peixes, além de uma nota sobre Doces & Bebidas). Para completar, adicione novos objetos no array `MENU` em `js/main.js` — é só nome, categoria, preço e descrição.
2. **Sem fotos reais ainda**: nenhuma foto de prato foi incluída, para não usar imagens genéricas ou geradas por IA no lugar da comida real do Paladino. Os cards usam um design tipográfico elegante como aparência definitiva até que fotos reais sejam adicionadas. Basta salvar `images/dishes/<id-do-prato>.jpg` (mesmo nome usado no `MENU`) que a foto passa a aparecer automaticamente, sem alterar código.
3. **Avaliações**: a seção de avaliações mostra as notas médias reais (Google 4.6, Restaurant Guru 4.5) e temas recorrentes reais nos comentários, mas não depoimentos individuais atribuídos a pessoas específicas — não há fabricação de testemunhos.

## Como estender o cardápio

Em `js/main.js`, adicione ao array `MENU`:

```js
{
  id: "novo-prato",           // usado no nome do arquivo de foto
  name: "Nome do Prato",
  category: "carnes",         // tira-gostos | carnes | peixes
  price: 65,
  desc: "Descrição curta do prato.",
  featured: true,              // opcional: aparece em "Destaques"
  badge: "Especial da casa"    // opcional
}
```
