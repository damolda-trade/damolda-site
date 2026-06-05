function layout(title = "DAMOLDA") {
  document.title = title;

  const nav = `
  <header class="top">
    <a class="brand" href="${href("index.html")}"><img class="brand-handwordmark" src="assets/damolda-handwordmark.png" alt="다몰다"></a>
    <nav class="nav"><a href="${href("themes.html")}">${t[lang].themes}</a><span class="nav-sep">/</span><a href="${href("journal.html")}">${t[lang].journal}</a><span class="nav-sep">/</span><a href="${href("about.html")}">${t[lang].about}</a></nav>
    <div class="right-tools"><input id="search" class="search" placeholder="${t[lang].search}" autocomplete="off"><div class="lang"><a class="${lang === "ko" ? "active" : ""}" href="?lang=ko">한국어</a> | <a class="${lang === "en" ? "active" : ""}" href="?lang=en">EN</a></div></div>
  </header><div id="searchPanel" class="search-panel"></div>`;

  document.body.insertAdjacentHTML("afterbegin", nav);
  setupSearch();
}
