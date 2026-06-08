function renderTheme() {
  const id = params.get("id") || "emotion";
  const theme = D.themes.find((item) => item.id === id) || D.themes[0];

  layout(`${L(theme)} - DAMOLDA`);

  $(".app").innerHTML = `
    <main class="theme-detail-page theme-detail-${theme.id}" style="--theme-bg:url('assets/theme-backgrounds/${theme.id}.png')">
      <div class="theme-detail-bg" aria-hidden="true"></div>
      <div class="theme-detail-tabs">${tabs(theme.id)}</div>
      <section class="theme-label-board">
        <div class="kicker">DAMOLDA THEME NOTE</div>
        <h1>${L(theme)}</h1>
        <p class="theme-statement">${themePhrase(theme)}</p>
        <p class="theme-keywords">${lang === "ko" ? theme.noteKo : theme.noteEn}</p>
      </section>
      <section class="exhibit-label-list" aria-label="${L(theme)} objects">
        ${theme.objects
          .map((objectId, index) => {
            const object = D.objects[objectId];
            return `
              <a class="exhibit-label" href="${href("object.html", `&id=${objectId}`)}">
                <span class="exhibit-no">${String(index + 1).padStart(2, "0")}</span>
                <span class="exhibit-name"><b>${L(object)}</b></span>
                <span class="exhibit-arrow">→</span>
              </a>`;
          })
          .join("")}
      </section>
    </main>
    ${siteFooter()}`;
}
