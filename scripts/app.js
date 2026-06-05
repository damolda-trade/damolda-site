const page = document.body.dataset.page;
const renderers = {
  home: renderHome,
  themes: renderThemes,
  theme: renderTheme,
  object: renderObject,
  detail: renderDetail,
  journal: renderJournal,
  about: renderAbout,
};

(renderers[page] || renderHome)();
