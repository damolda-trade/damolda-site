function layout(title = "DAMOLDA") {
  document.title = title;

  const nav = `
  <header class="top">
    <a class="brand" href="${href("index.html")}"><img class="brand-handwordmark" src="assets/damolda-handwordmark.png" alt="DAMOLDA"></a>
    <nav id="siteNav" class="nav" aria-label="Main menu"><a href="${href("themes.html")}">${t[lang].themes}</a><span class="nav-sep">/</span><a href="${href("journal.html")}">${t[lang].journal}</a><span class="nav-sep">/</span><a href="${href("about.html")}">${t[lang].about}</a></nav>
    <div class="right-tools"><input id="search" class="search" placeholder="${t[lang].search}" autocomplete="off"><button class="mobile-menu-toggle" type="button" aria-controls="siteNav" aria-expanded="false" aria-label="Open menu"><span></span><span></span><span></span></button><div class="lang"><a class="${lang === "ko" ? "active" : ""}" href="?lang=ko">한국어</a> | <a class="${lang === "en" ? "active" : ""}" href="?lang=en">EN</a></div></div>
  </header><div id="searchPanel" class="search-panel"></div>`;

  document.body.insertAdjacentHTML("afterbegin", nav);
  setupSearch();
  setupMobileMenu();
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
