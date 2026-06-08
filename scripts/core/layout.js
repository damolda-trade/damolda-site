function layout(title = "DAMOLDA") {
  document.title = title;

  const nav = `
  <header class="top">
    <a class="brand" href="${href("index.html")}"><img class="brand-handwordmark" src="assets/damolda-handwordmark.png" alt="다몰다"></a>
    <nav id="siteNav" class="nav" aria-label="Main menu"><a href="${href("themes.html")}">${t[lang].themes}</a><span class="nav-sep">/</span><a href="${href("journal.html")}">${t[lang].journal}</a><span class="nav-sep">/</span><a href="${href("about.html")}">${t[lang].about}</a></nav>
    <div class="right-tools"><input id="search" class="search" placeholder="${t[lang].search}" autocomplete="off"><button class="mobile-menu-toggle" type="button" aria-controls="siteNav" aria-expanded="false" aria-label="Open menu"><span></span><span></span><span></span></button><div class="lang"><a class="${lang === "ko" ? "active" : ""}" href="?lang=ko">한국어</a> | <a class="${lang === "en" ? "active" : ""}" href="?lang=en">EN</a></div></div>
  </header><div id="searchPanel" class="search-panel"></div>`;

  document.body.insertAdjacentHTML("afterbegin", nav);
  setupSearch();
  setupMobileMenu();
}

function siteFooter() {
  const copy = {
    ko: {
      story: "브랜드 소개",
      phrase: "잊혀지기 전, 새겨질 수 있도록.",
      faq: "FAQ",
      shipping: "Shipping",
      returns: "Returns",
      policy: "Policy",
      email: "Email",
      contact: "Contact",
    },
    en: {
      story: "Brand Story",
      phrase: "Quietly kept.",
      faq: "FAQ",
      shipping: "Shipping",
      returns: "Returns",
      policy: "Policy",
      email: "Email",
      contact: "Contact",
    },
  };
  const f = copy[lang] || copy.ko;
  const email = "contact@damolda.com";

  return `
    <footer class="site-footer" aria-label="Footer">
      <div class="site-footer-inner">
        <div class="footer-brand">
          <h2>DAMOLDA</h2>
          <a href="${href("about.html")}">${f.story}</a>
          <p>${f.phrase}</p>
        </div>
        <nav class="footer-group" aria-label="Explore">
          <h2>Explore</h2>
          <a href="${href("themes.html")}">Themes</a>
          <a href="${href("object.html")}">Objects</a>
          <a href="${href("journal.html")}">Journal</a>
          <a href="${href("about.html")}">About</a>
        </nav>
        <nav class="footer-group" aria-label="Support">
          <h2>Support</h2>
          <a href="${href("about.html")}#faq">${f.faq}</a>
          <a href="${href("about.html")}#shipping">${f.shipping}</a>
          <a href="${href("about.html")}#returns">${f.returns}</a>
          <a href="${href("about.html")}#policy">${f.policy}</a>
        </nav>
        <div class="footer-group">
          <h2>Connect</h2>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer">Pinterest</a>
          <a href="mailto:${email}">${f.email}</a>
          <a href="mailto:${email}">${f.contact}</a>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2026 DAMOLDA</span>
      </div>
    </footer>`;
}

function setupMobileMenu() {
  const button = $(".mobile-menu-toggle");
  const nav = $("#siteNav");

  if (!button || !nav) return;

  const setOpen = (open) => {
    nav.classList.toggle("is-open", open);
    button.classList.toggle("is-open", open);
    button.setAttribute("aria-expanded", String(open));
    button.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  };

  button.addEventListener("click", (event) => {
    event.stopPropagation();
    setOpen(!nav.classList.contains("is-open"));
  });

  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) setOpen(false);
  });

  document.addEventListener("click", (event) => {
    if (!nav.contains(event.target) && !button.contains(event.target)) setOpen(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setOpen(false);
  });

  window.addEventListener("resize", () => {
    if (window.matchMedia("(min-width: 1101px)").matches) setOpen(false);
  });
}
