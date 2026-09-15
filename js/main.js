(function () {
  "use strict";

  /**
   * Menu data verified against the restaurant's own menu/pricing and
   * cross-checked with independent sources (iFood listing descriptions
   * for "Peixinho no Fubá" and "Pastel de Angu"). Add new items here —
   * each optionally picks up a real photo automatically if a file named
   * "images/dishes/<id>.jpg" exists (see images/dishes/README.md).
   */
  var MENU = [
    {
      id: "carne-de-panela",
      name: "Carne de Panela",
      category: "carnes",
      price: 82,
      desc: "Carne bovina cozida lentamente até ficar macia e suculenta, no estilo tradicional das cozinhas mineiras.",
      featured: true
    },
    {
      id: "norte-de-minas",
      name: "Norte de Minas",
      category: "carnes",
      price: 94,
      desc: "Especialidade da casa inspirada nos sabores do norte de Minas Gerais.",
      featured: true
    },
    {
      id: "costelinha-de-lata",
      name: "Costelinha de Lata",
      category: "carnes",
      price: 82,
      desc: "Costelinha suína preparada lentamente, um clássico dos fogões mineiros.",
      featured: true
    },
    {
      id: "linguica-chapada",
      name: "Linguiça Chapada",
      category: "carnes",
      price: 66,
      desc: "Linguiça grelhada na chapa, servida bem quente."
    },
    {
      id: "porquinho",
      name: "Porquinho",
      category: "carnes",
      price: 82,
      desc: "Carne suína preparada à moda da casa, um dos pratos mais tradicionais do cardápio.",
      featured: true
    },
    {
      id: "frango-a-passarinho",
      name: "Frango a Passarinho",
      category: "tira-gostos",
      price: 64,
      desc: "Frango frito em pedaços pequenos e crocantes, tradicional tira-gosto brasileiro."
    },
    {
      id: "torresminho-pipoca",
      name: "Torresminho Pipoca",
      category: "tira-gostos",
      price: 36,
      desc: "Torresmo crocante, cortado pequeno, para beliscar antes do prato principal."
    },
    {
      id: "bolinho-capitao",
      name: "Bolinho Capitão",
      category: "tira-gostos",
      price: 48,
      desc: "Bolinho frito da casa, servido quentinho como tira-gosto."
    },
    {
      id: "bolinho-de-mandioca",
      name: "Bolinho de Mandioca",
      category: "tira-gostos",
      price: 46,
      desc: "Bolinho crocante de mandioca, um clássico das mesas mineiras."
    },
    {
      id: "pastel-de-angu",
      name: "Pastel de Angu",
      category: "tira-gostos",
      price: 58,
      desc: "O campeão da casa: pastel recheado de angu, nos sabores carne, queijo, frango com catupiry, napolitano e carne de sol.",
      badge: "Especial da casa",
      featured: true
    },
    {
      id: "batata-frita-caseira",
      name: "Batata Frita Caseira",
      category: "tira-gostos",
      price: 48,
      desc: "Batatas fritas na hora, crocantes por fora e macias por dentro."
    },
    {
      id: "peixinho-no-fuba",
      name: "Peixinho no Fubá",
      category: "peixes",
      price: 78,
      desc: "Filé de tilápia em pedaços, empanados no fubá e servidos com molho tártaro.",
      featured: true
    }
  ];

  var CATEGORY_ICONS = {
    "tira-gostos": '<svg viewBox="0 0 24 24" fill="none"><path d="M4 12c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="currentColor" stroke-width="1.5"/><path d="M3 12h18l-1.5 7a2 2 0 0 1-2 1.6H6.5a2 2 0 0 1-2-1.6L3 12Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>',
    "carnes": '<svg viewBox="0 0 24 24" fill="none"><path d="M8 3c3 0 5 2 5 5 0 2-1 3-2 4l6 6a2 2 0 1 1-3 3l-6-6c-1 1-2 2-4 2-3 0-5-2-5-5s2-5 5-5c0-2 1-4 4-4Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>',
    "peixes": '<svg viewBox="0 0 24 24" fill="none"><path d="M3 12s4-6 11-6 7 6 7 6-1 6-7 6-11-6-11-6Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><circle cx="16" cy="10.5" r="0.8" fill="currentColor"/><path d="M3 12c-1 1-2 1.5-2 1.5s.4-2 0-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>'
  };

  function formatPrice(v) {
    return "R$ " + v.toFixed(2).replace(".", ",");
  }

  function dishVisualHTML(item, large) {
    var icon = CATEGORY_ICONS[item.category] || CATEGORY_ICONS["carnes"];
    return (
      '<div class="dish-visual cat-' + item.category + '">' +
        '<img src="images/dishes/' + item.id + '.jpg" alt="' + item.name + '" loading="lazy" ' +
          'onerror="this.style.display=\'none\'">' +
        '<div class="visual-fallback">' + icon + '</div>' +
      '</div>'
    );
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
          '<p>' + item.desc + '</p>' +
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
          '<p>' + item.desc + '</p>' +
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
      return (item.name + " " + item.desc + " " + item.category).toLowerCase().indexOf(q) !== -1;
    }

    // Featured section only shown with no active search
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

    document.getElementById("empty-state").hidden = !(q && visibleCount === 0);

    attachCardHandlers();
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
    modalVisual.innerHTML = dishVisualHTML(item, true);
    modalTitle.textContent = item.name;
    modalDesc.textContent = item.desc;
    modalPrice.textContent = formatPrice(item.price);
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

  var sections = ["destaques", "tira-gostos", "carnes", "peixes", "doces-bebidas", "local"]
    .map(function (id) { return document.getElementById(id); })
    .filter(Boolean);

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
