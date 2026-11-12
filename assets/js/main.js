(function () {
  "use strict";

  var toggle = document.querySelector(".menu-toggle");
  var nav = document.querySelector(".nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = document.body.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        document.body.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  var mobileCta = document.querySelector(".mobile-cta");
  var quoteSec = document.getElementById("quote");
  var footer = document.querySelector(".site-footer");
  if (mobileCta && "IntersectionObserver" in window && quoteSec) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.target.id === "quote" || e.target.classList.contains("site-footer")) {
          e.target._in = e.isIntersecting;
        }
      });
      mobileCta.classList.toggle("is-hidden", !!(quoteSec._in || (footer && footer._in)));
    }, { threshold: 0.12 });
    io.observe(quoteSec);
    if (footer) io.observe(footer);
  }
})();
