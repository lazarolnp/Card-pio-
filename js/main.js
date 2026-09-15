(function () {
  "use strict";

  /**
   * Full menu transcribed from the restaurant's own 14-page PDF menu
   * (categories, names, descriptions and prices verified against it).
   * Add new items here — each optionally picks up a real photo
   * automatically if a file named "images/dishes/<id>.jpg" exists
   * (see images/dishes/README.md).
   */
  var MENU = [
    // ---- TIRA-GOSTOS TRADICIONAIS ----
    {
      id: "carne-de-panela",
      name: "Carne de Panela",
      category: "tira-gostos",
      price: 82,
      desc: "Maçã de peito ensopada, servida com o seu próprio molho e acompanhada de pão artesanal.",
      featured: true
    },
    {
      id: "norte-de-minas",
      name: "Norte de Minas",
      category: "tira-gostos",
      price: 94,
      desc: "Carne de sol grelhada, acompanhada de mandioca cozida com manteiga de garrafa."
    },
    {
      id: "costelinha-de-lata",
      name: "Costelinha de Lata",
      category: "tira-gostos",
      price: 82,
      desc: "Costelinha preparada no método “pinga e frita” e depois armazenada na banha. Acompanhada de mandioca frita e melaço de cachaça."
    },
    {
      id: "linguica-chapada",
      name: "Linguiça Chapada",
      category: "tira-gostos",
      price: 66,
      desc: "Linguiça de lombo de porco produzida na casa, servida com quiabo tostado, cebola e couve na chapa. Acompanha farofa de torresmo e molho picante de maracujá."
    },
    {
      id: "porquinho",
      name: "Porquinho",
      category: "tira-gostos",
      price: 82,
      desc: "Barriga de porco assada e pururucada, molho de pimenta biquinho e limão capeta."
    },
    {
      id: "torresminho-pipoca",
      name: "Torresminho Pipoca",
      category: "tira-gostos",
      price: 36
    },
    {
      id: "peixinho-no-fuba",
      name: "Peixinho no Fubá",
      category: "tira-gostos",
      visual: "fish",
      price: 78,
      desc: "Iscas de tilápia empanadas no fubá de moinho d’água. Acompanha molho caipira.",
      featured: true
    },
    {
      id: "frango-a-passarinho",
      name: "Frango a Passarinho",
      category: "tira-gostos",
      visual: "chicken",
      price: 64,
      desc: "Pedaços de frango frito, servidos com alho, cebolinha e barbecue de goiabada. Típico dos botecos de BH."
    },
    {
      id: "bolinho-capitao",
      name: "Bolinho Capitão",
      category: "tira-gostos",
      price: 48,
      desc: "Preparado com o nosso Mexido Belisário e acompanhado de picles da casa.",
      portion: "8 unidades",
      halfPortion: { label: "1/2 porção (4 unidades)", price: 28 },
      badge: "Peça antes de acabar!",
      featured: true
    },
    {
      id: "bolinho-de-mandioca",
      name: "Bolinho de Mandioca",
      category: "tira-gostos",
      price: 46,
      desc: "O famoso bolinho de mandioca com queijo preparado semanalmente na casa.",
      portion: "10 unidades",
      halfPortion: { label: "1/2 porção (5 unidades)", price: 28 }
    },
    {
      id: "pastel-de-angu",
      name: "Pastel de Angu",
      category: "tira-gostos",
      price: 58,
      desc: "Produzido artesanalmente pelo Rei do Pastel de Angu de CMD, uma receita que vem de gerações. Escolha entre carne e queijo.",
      portion: "10 unidades",
      halfPortion: { label: "1/2 porção (5 unidades)", price: 36 },
      featured: true
    },
    {
      id: "batata-frita-caseira",
      name: "Batata Frita Caseira",
      category: "tira-gostos",
      price: 48,
      desc: "Batata frita de verdade, preparada na casa diariamente."
    },

    // ---- ENTRADAS E SALADAS ----
    {
      id: "brusqueta-da-roca",
      name: "Brusqueta da Roça",
      category: "entradas",
      price: 48,
      desc: "Pão de queijo com ragu de linguiça e um naco de queijo minas assado no forno."
    },
    {
      id: "burrata-mineira",
      name: "Burrata Mineira",
      category: "entradas",
      price: 88,
      desc: "Burrata de búfala Di Vicenzo servida com tomate e pesto mineiro. Acompanha pão artesanal."
    },
    {
      id: "salada-caesar-mineira",
      name: "Salada Caesar Mineira",
      category: "entradas",
      price: 48,
      desc: "Folhas e ervas frescas, bacon fritinho, crouton de pão de queijo, queijo Canastra ralado e molho da casa."
    },
    {
      id: "salada-simples",
      name: "Salada Simples",
      category: "entradas",
      price: 32,
      desc: "Folhas e ervas frescas, tomate e cebola."
    },

    // ---- PRATOS TRADICIONAIS: AVES, PEIXES & VEGETARIANO (servem 2 pessoas, salvo indicação) ----
    {
      id: "frango-com-quiabo",
      name: "Frango com Quiabo e Ora-Pro-Nóbis",
      category: "aves-peixes",
      visual: "chicken",
      price: 242,
      desc: "Uma das receitas mais tradicionais de Minas Gerais, o frango ensopado com quiabo e ora-pro-nóbis do nosso quintal, acompanha feijão, angu, couve e arroz branco.",
      serves: "Serve 4 pessoas"
    },
    {
      id: "galinhada-cocorico",
      name: "Galinhada Cocoricó",
      category: "aves-peixes",
      visual: "chicken",
      price: 192,
      desc: "Preparada com o frango ensopado da casa, a nossa galinhada é bem caldosa e refogada com açafrão. Vem guarnecida de milho assado, tomatinho, quiabo e ora-pro-nóbis do quintal do Paladino."
    },
    {
      id: "truta-da-serra",
      name: "Truta da Serra",
      category: "aves-peixes",
      visual: "fish",
      price: 208,
      desc: "Truta, peixe típico dos rios da Mantiqueira mineira, servida assada com purê de banana e arroz com brócolis. Acompanha molho de alcaparra e castanhas brasileiras.",
      featured: true
    },
    {
      id: "moqueca-da-terra",
      name: "Moqueca da Terra",
      category: "aves-peixes",
      visual: "fish",
      price: 238,
      desc: "Moqueca de peixe do dia preparada com uma base de legumes refogados e leite de coco, finalizada com banana da terra. Acompanha pirão da casa e arroz branco."
    },
    {
      id: "moqueca-vegana",
      name: "Moqueca Vegana",
      category: "aves-peixes",
      visual: "leaf",
      price: 84,
      desc: "Moqueca de legumes, cogumelos e banana da terra, servida com arroz branco."
    },

    // ---- PRATOS TRADICIONAIS: CARNES & PORCO (servem 2 pessoas, salvo indicação) ----
    {
      id: "ancho-sabara",
      name: "Ancho Sabará",
      category: "carnes-porco",
      visual: "cow",
      price: 258,
      desc: "Ancho grelhado servido com molho de jabuticaba de Sabará, arroz cremoso de alho-poró e batata frita caseira.",
      featured: true
    },
    {
      id: "picanha-brasileira",
      name: "Picanha Brasileira",
      category: "carnes-porco",
      visual: "cow",
      price: 262,
      desc: "Picanha grelhada servida com farofa de ovos, batata frita caseira, arroz branco e vinagrete."
    },
    {
      id: "moca-mais-bela",
      name: "Moça Mais Bela",
      category: "carnes-porco",
      visual: "cow",
      price: 218,
      desc: "Bombom de alcatra grelhado servido com molho de cogumelos frescos, legumes assados e arroz cremoso de alho-poró."
    },
    {
      id: "parmegiana-do-chef",
      name: "Parmegiana do Chef",
      category: "carnes-porco",
      visual: "cow",
      price: 218,
      desc: "Filé mignon empanado, molho de tomate da casa, queijo Canastra e muçarela de búfala. Tudo isso assado com um purê de batata e acompanhado de arroz branco."
    },
    {
      id: "porco-seu-tutu",
      name: "Porco Seu Tutu",
      category: "carnes-porco",
      visual: "pig",
      price: 198,
      desc: "Canela de porco assada servida com molho de doce de leite. Acompanha tutu de feijão, couve rasgada e arroz com brócolis."
    },
    {
      id: "ripa-na-chulipa",
      name: "Ripa na Chulipa",
      category: "carnes-porco",
      visual: "pig",
      price: 218,
      desc: "Costela de porco assada servida com barbecue de goiabada e acompanhada de feijão tropeiro, couve e arroz branco."
    },
    {
      id: "mexido-belisario",
      name: "Mexido Belisário",
      category: "carnes-porco",
      visual: "pig",
      price: 142,
      desc: "A tradicional receita da Família Belisário, do interior de Minas Gerais, adaptada ao cardápio da casa. Preparada no fogão a lenha e servida com couve rasgada, torresminho, ovo frito e molho de pimenta."
    },
    {
      id: "feijoada-paladino",
      name: "Feijoada Paladino",
      category: "carnes-porco",
      visual: "pig",
      price: 132,
      desc: "Preparada no fogão a lenha e servida em panela de pedra. Carne seca, costelinha, linguiça, lombo defumado e pertences gordinhos. Acompanha farofa, torresmo, couve, laranja, vinagrete e arroz branco.",
      note: "Servida somente aos sábados.",
      featured: true
    },

    // ---- SOBREMESAS ----
    {
      id: "mineirinho",
      name: "Mineirinho",
      category: "sobremesas",
      price: 30,
      desc: "Sorvete de queijo com calda quente de goiabada cascão.",
      badge: "Ícone do Paladino",
      featured: true
    },
    {
      id: "creme-brulee-mineiro",
      name: "Creme Brûlée Mineiro",
      category: "sobremesas",
      price: 28,
      desc: "Creme brûlée preparado com doce de leite mineiro e servido com compota de figo."
    },
    {
      id: "limoeiro",
      name: "Limoeiro",
      category: "sobremesas",
      price: 30,
      desc: "Brigadeiro de colher, servido com creme de limão e farofinha de castanhas brasileiras."
    },
    {
      id: "pudim",
      name: "Pudim",
      category: "sobremesas",
      price: 22,
      desc: "O clássico da confeitaria brasileira."
    },
    {
      id: "sorvete-paladininho",
      name: "Sorvete Paladininho",
      category: "sobremesas",
      price: 30,
      desc: "Sorvete servido com guloseimas variadas. Escolha um sabor: chocolate, Kinder Ovo ou morango."
    },
    {
      id: "sobremesa-diet",
      name: "Sobremesa Diet",
      category: "sobremesas",
      price: 30,
      desc: "Consulte a opção do dia com a equipe."
    },

    // ---- ALMOÇO EXECUTIVO ----
    {
      id: "mexido-belisario-executivo",
      name: "Mexido Belisário",
      category: "executivo",
      visual: "pig",
      price: 72,
      desc: "A receita da Família Belisário no fogão a lenha, com couve rasgada, torresminho, ovo frito e molho de pimenta."
    },
    {
      id: "executivo-de-boi",
      name: "Executivo de Boi",
      category: "executivo",
      visual: "cow",
      price: 82,
      desc: "Bombom de alcatra grelhado servido com molho de cogumelos, legumes assados e arroz cremoso de alho-poró."
    },
    {
      id: "parmegiana-executiva",
      name: "Parmegiana Executiva",
      category: "executivo",
      visual: "cow",
      price: 82,
      desc: "Filé mignon empanado, molho de tomate da casa, queijo Canastra e muçarela de búfala, servido com arroz branco e purê de batata."
    },
    {
      id: "tropeiro-executivo",
      name: "Tropeiro Executivo",
      category: "executivo",
      price: 72,
      desc: "Feijão tropeiro servido com linguiça da casa, couve e arroz branco."
    },

    // ---- PARA A CRIANÇADA ----
    {
      id: "paladininho",
      name: "Paladininho",
      category: "criancada",
      price: 46,
      desc: "Arroz branco, feijão, batata frita e salada de alface e tomate. Escolha a carne: bombom de alcatra, filé de frango ou filé de tilápia empanado."
    }
  ];

  var ICONS = {
    "tira-gostos": '<svg viewBox="0 0 24 24" fill="none"><path d="M4 12c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="currentColor" stroke-width="1.5"/><path d="M3 12h18l-1.5 7a2 2 0 0 1-2 1.6H6.5a2 2 0 0 1-2-1.6L3 12Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>',
    "entradas": '<svg viewBox="0 0 24 24" fill="none"><path d="M4 11a8 8 0 0 1 16 0" stroke="currentColor" stroke-width="1.5"/><path d="M3 11h18v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M9 8V5M12 8V4M15 8V5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
    "cow": '<svg viewBox="0 0 24 24" fill="none"><path d="M8 3c3 0 5 2 5 5 0 2-1 3-2 4l6 6a2 2 0 1 1-3 3l-6-6c-1 1-2 2-4 2-3 0-5-2-5-5s2-5 5-5c0-2 1-4 4-4Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>',
    "pig": '<svg viewBox="0 0 24 24" fill="none"><ellipse cx="12" cy="13" rx="8" ry="6" stroke="currentColor" stroke-width="1.5"/><circle cx="12" cy="13" r="2.4" stroke="currentColor" stroke-width="1.3"/><path d="M8 8l-1.5-2.5M16 8l1.5-2.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
    "chicken": '<svg viewBox="0 0 24 24" fill="none"><path d="M8 21c0-3 1-5 1-8a5 5 0 0 1 10 0c0 3-2 4-2 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="16" cy="7" r="3.2" stroke="currentColor" stroke-width="1.5"/><path d="M18.6 5.4 21 4M5 15c1-1 2-1 3 0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
    "fish": '<svg viewBox="0 0 24 24" fill="none"><path d="M3 12s4-6 11-6 7 6 7 6-1 6-7 6-11-6-11-6Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><circle cx="16" cy="10.5" r="0.8" fill="currentColor"/><path d="M3 12c-1 1-2 1.5-2 1.5s.4-2 0-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
    "leaf": '<svg viewBox="0 0 24 24" fill="none"><path d="M5 19c8 0 14-6 14-14-8 0-14 6-14 14Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M5 19c2-4 5-7 9-9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
    "sobremesas": '<svg viewBox="0 0 24 24" fill="none"><path d="M6 3c0 3 1.5 4 1.5 6a1.5 1.5 0 0 1-3 0c0-2 1.5-3 1.5-6ZM12 3v9M12 12a3 3 0 0 1-3-3M12 12a3 3 0 0 0 3-3M12 12v9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
    "executivo": '<svg viewBox="0 0 24 24" fill="none"><path d="M6 3v18M6 3c-1.5 0-2.5 1-2.5 2.5S4.5 8 6 8M6 8c1.5 0 2.5-1 2.5-2.5S7.5 3 6 3M18 3v6a2 2 0 0 1-4 0V3v0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M16 9v12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
    "criancada": '<svg viewBox="0 0 24 24" fill="none"><path d="m12 3 2.6 5.6 6 .8-4.4 4.2 1.1 6-5.3-3-5.3 3 1.1-6-4.4-4.2 6-.8L12 3Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>'
  };

  function visualKey(item) {
    return item.visual || item.category;
  }

  function formatPrice(v) {
    return "R$ " + v.toFixed(2).replace(".", ",");
  }

  function dishVisualHTML(item) {
    var key = visualKey(item);
    var icon = ICONS[key] || ICONS["tira-gostos"];
    return (
      '<div class="dish-visual cat-' + key + '">' +
        '<img src="images/dishes/' + item.id + '.jpg" alt="' + item.name + '" loading="lazy" ' +
          'onerror="this.style.display=\'none\'">' +
        '<div class="visual-fallback">' + icon + '</div>' +
      '</div>'
    );
  }

  function metaLineHTML(item) {
    var bits = [];
    if (item.serves) bits.push(item.serves);
    if (item.portion) bits.push(item.portion);
    if (!bits.length) return "";
    return '<p class="dish-meta">' + bits.join(" · ") + "</p>";
  }

  function featuredCardHTML(item) {
    return (
      '<button type="button" class="featured-card" data-id="' + item.id + '">' +
        '<div style="position:relative">' +
          dishVisualHTML(item) +
          (item.badge ? '<span class="featured-badge">' + item.badge + '</span>' : '') +
        '</div>' +
        '<div class="card-body">' +
          '<h3>' + item.name + '</h3>' +
          (item.desc ? '<p>' + item.desc + '</p>' : '') +
          '<div class="card-footer">' +
            '<span class="price">' + formatPrice(item.price) + '</span>' +
            '<span class="view-btn" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>' +
          '</div>' +
        '</div>' +
      '</button>'
    );
  }

  function dishCardHTML(item) {
    return (
      '<button type="button" class="dish-card" data-id="' + item.id + '">' +
        dishVisualHTML(item) +
        '<div class="card-body">' +
          '<h3>' + item.name + '</h3>' +
          (item.desc ? '<p>' + item.desc + '</p>' : '') +
          '<span class="price">' + formatPrice(item.price) + '</span>' +
        '</div>' +
      '</button>'
    );
  }

  function render(filterText) {
    var q = (filterText || "").trim().toLowerCase();
    var featuredGrid = document.getElementById("featured-grid");
    var grids = document.querySelectorAll(".dish-grid");
    var visibleCount = 0;

    function matches(item) {
      if (!q) return true;
      return (item.name + " " + (item.desc || "") + " " + item.category).toLowerCase().indexOf(q) !== -1;
    }

    if (q) {
      featuredGrid.closest(".section").hidden = true;
    } else {
      featuredGrid.closest(".section").hidden = false;
      featuredGrid.innerHTML = MENU.filter(function (i) { return i.featured; })
        .map(featuredCardHTML).join("");
    }

    grids.forEach(function (grid) {
      var cat = grid.getAttribute("data-category");
      var items = MENU.filter(function (i) { return i.category === cat && matches(i); });
      visibleCount += items.length;
      grid.innerHTML = items.map(dishCardHTML).join("");
      grid.closest(".section").hidden = q ? items.length === 0 : false;
    });

    var listVisible = filterStaticLists(q);

    document.getElementById("empty-state").hidden = !(q && visibleCount === 0 && !listVisible);

    attachCardHandlers();
  }

  function unitRows(unit) {
    return unit.classList.contains("list-rows") ? unit : unit.querySelector(".list-rows");
  }

  function filterStaticLists(q) {
    var anyVisible = false;
    document.querySelectorAll(".list-section").forEach(function (section) {
      var sectionVisible = false;
      section.querySelectorAll(".list-group").forEach(function (group) {
        var units;
        if (group.classList.contains("list-rows")) {
          units = [group];
        } else {
          var subgroups = group.querySelectorAll(":scope > .list-subgroup");
          units = subgroups.length ? subgroups : group.querySelectorAll(":scope > .list-rows");
        }
        var groupVisible = false;
        units.forEach(function (unit) {
          var rows = unitRows(unit);
          var rowVisible = false;
          rows.querySelectorAll(".list-row").forEach(function (row) {
            var match = !q || row.textContent.toLowerCase().indexOf(q) !== -1;
            row.hidden = !match;
            if (match) rowVisible = true;
          });
          if (unit !== group) unit.hidden = !rowVisible;
          if (rowVisible) groupVisible = true;
        });
        group.hidden = !groupVisible;
        if (groupVisible) {
          sectionVisible = true;
          if (q && group.tagName === "DETAILS") group.open = true;
        }
      });
      section.hidden = q ? !sectionVisible : false;
      if (sectionVisible) anyVisible = true;
    });
    return anyVisible;
  }

  function attachCardHandlers() {
    document.querySelectorAll(".featured-card, .dish-card").forEach(function (btn) {
      btn.addEventListener("click", function () {
        openModal(btn.getAttribute("data-id"));
      });
    });
  }

  // ===== Modal =====
  var backdrop = document.getElementById("modal-backdrop");
  var modalVisual = document.getElementById("modal-visual");
  var modalTitle = document.getElementById("modal-title");
  var modalDesc = document.getElementById("modal-desc");
  var modalPrice = document.getElementById("modal-price");
  var modalBadge = document.getElementById("modal-badge");

  function openModal(id) {
    var item = MENU.filter(function (i) { return i.id === id; })[0];
    if (!item) return;
    modalVisual.innerHTML = dishVisualHTML(item);
    modalTitle.textContent = item.name;
    modalDesc.innerHTML = (item.desc || "") + metaLineHTML(item) +
      (item.note ? '<p class="dish-note">' + item.note + '</p>' : '');

    var priceHTML = formatPrice(item.price);
    if (item.halfPortion) {
      priceHTML += '<span class="modal-price-alt">' + item.halfPortion.label + ": " + formatPrice(item.halfPortion.price) + '</span>';
    }
    modalPrice.innerHTML = priceHTML;

    if (item.badge) {
      modalBadge.textContent = item.badge;
      modalBadge.hidden = false;
    } else {
      modalBadge.hidden = true;
    }
    backdrop.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    backdrop.hidden = true;
    document.body.style.overflow = "";
  }

  document.getElementById("modal-close").addEventListener("click", closeModal);
  backdrop.addEventListener("click", function (e) {
    if (e.target === backdrop) closeModal();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeModal();
  });

  // ===== Search =====
  var searchInput = document.getElementById("menu-search");
  searchInput.addEventListener("input", function () {
    render(searchInput.value);
  });

  // ===== Category nav: smooth scroll + active state =====
  var catLinks = document.querySelectorAll(".cat-link");
  catLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      var target = document.querySelector(link.getAttribute("href"));
      if (target) {
        var offset = document.getElementById("cat-nav").offsetHeight + document.querySelector(".site-header").offsetHeight + 10;
        var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: top, behavior: "smooth" });
      }
    });
  });

  var sectionIds = ["destaques", "tira-gostos", "entradas", "aves-peixes", "carnes-porco", "sobremesas", "executivo", "bebidas", "cachacas-vinhos", "local"];
  var sections = sectionIds.map(function (id) { return document.getElementById(id); }).filter(Boolean);

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          catLinks.forEach(function (l) { l.classList.remove("active"); });
          var active = document.querySelector('.cat-link[data-cat="' + entry.target.id + '"]');
          if (active) active.classList.add("active");
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(function (s) { observer.observe(s); });
  }

  document.getElementById("year").textContent = new Date().getFullYear();

  render("");
})();
