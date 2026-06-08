function renderThemes() {
  layout(`${t[lang].themes} - DAMOLDA`);

  let index = 0;
  const revealed = new Set();

  const setTheme = () => {
    const theme = D.themes[index];
    const firstView = !revealed.has(theme.id);
    revealed.add(theme.id);

    $(".app").innerHTML = `
      <main class="page theme-shell gallery-theme-shell">
        ${tabs(theme.id)}
        <section class="stage">
          <button class="arrow" id="prev" aria-label="Previous theme">&lsaquo;</button>
          <article class="theme-card gallery-theme-card ${firstView ? "is-entering" : "is-revealed"}">
            <div class="theme-visual">
              ${theme.heroImage ? `<img class="theme-product" src="${theme.heroImage}" alt="${L(theme)}">` : ""}
            </div>
            <div class="theme-copy">
              <div class="kicker">DAMOLDA THEME HALL</div>
              <h2>${L(theme)}</h2>
              <div class="subthemes">${lang === "ko" ? theme.noteKo : theme.noteEn}</div>
              <div class="actions">
                <a class="linkline" href="${href("theme.html", `&id=${theme.id}`)}">${theme.open ? t[lang].enterGallery : t[lang].viewObjects} &rarr;</a>
                ${!theme.open ? `<span class="soon">${t[lang].coming}</span>` : ""}
              </div>
            </div>
          </article>
          <button class="arrow" id="next" aria-label="Next theme">&rsaquo;</button>
        </section>
      </main>
      ${siteFooter()}`;

    $("#prev").onclick = () => {
      index = (index + D.themes.length - 1) % D.themes.length;
      setTheme();
    };
    $("#next").onclick = () => {
      index = (index + 1) % D.themes.length;
      setTheme();
    };
  };

  setTheme();
}
