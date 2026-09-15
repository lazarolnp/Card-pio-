"use strict";

/* Odonto Postale — mobile nav, smooth scroll offset and contact form handling. */

(function () {
  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("nav-menu");

  function closeMenu() {
    if (!menu || !toggle) return;
    menu.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }

  function toggleMenu() {
    if (!menu || !toggle) return;
    var isOpen = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  }

  if (toggle && menu) {
    toggle.addEventListener("click", toggleMenu);
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeMenu();
    });
  }

  // Smooth scroll that accounts for the sticky header height.
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
      var id = link.getAttribute("href");
      if (!id || id === "#") return;
      var target = document.querySelector(id);
      if (!target) return;

      event.preventDefault();
      var headerHeight = header ? header.offsetHeight : 0;
      var top = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 12;
      window.scrollTo({ top: top, behavior: "smooth" });
      target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });
    });
  });

  // Contact form: client-side validation + mailto handoff (site is static, no backend).
  var form = document.getElementById("contact-form");
  var status = document.getElementById("form-status");

  function showStatus(message, type) {
    if (!status) return;
    status.textContent = message;
    status.className = "form-status is-visible " + type;
  }

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var name = form.elements["name"].value.trim();
      var email = form.elements["email"].value.trim();
      var phone = form.elements["phone"].value.trim();
      var service = form.elements["service"].value;
      var message = form.elements["message"].value.trim();

      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!name || !email || !message) {
        showStatus("Por favor, preencha nome, e-mail e mensagem.", "error");
        return;
      }

      if (!emailPattern.test(email)) {
        showStatus("Informe um e-mail válido.", "error");
        return;
      }

      var subject = "Agendamento de consulta - " + name;
      var bodyLines = [
        "Nome: " + name,
        "E-mail: " + email,
        "Telefone: " + (phone || "não informado"),
        "Serviço de interesse: " + (service || "não informado"),
        "",
        message,
      ];
      var mailto =
        "mailto:contato@odontopostale.com.br" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(bodyLines.join("\n"));

      window.location.href = mailto;
      showStatus("Abrindo seu aplicativo de e-mail para enviar a mensagem para contato@odontopostale.com.br...", "success");
      form.reset();
    });
  }

  // Footer year.
  var yearEl = document.getElementById("current-year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
})();
