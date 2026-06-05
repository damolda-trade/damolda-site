function themePhrase(theme) {
  const phrase = THEME_PHRASES[theme.id] || { ko: theme.noteKo, en: theme.noteEn };
  return lang === "ko" ? phrase.ko : phrase.en;
}

function L(value) {
  return lang === "ko" ? value.ko : value.en;
}

function href(page, extra = "") {
  return `${page}?lang=${lang}${extra}`;
}

function tabs(active) {
  return `<div class="theme-tabs">${D.themes
    .map((theme) => `<a class="theme-tab ${theme.id === active ? "active" : ""}" href="${href("theme.html", `&id=${theme.id}`)}">${L(theme)}</a>`)
    .join("")}</div>`;
}
