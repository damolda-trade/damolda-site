function setupSearch() {
  const input = $("#search");
  const panel = $("#searchPanel");

  if (!input || !panel) return;

  input.addEventListener("input", () => {
    const query = input.value.trim().toLowerCase();

    if (!query) {
      panel.classList.remove("open");
      return;
    }

    const themeResults = D.themes
      .filter((theme) => [theme.ko, theme.en, theme.id].join(" ").toLowerCase().includes(query))
      .map((theme) => ({ type: t[lang].themes, name: L(theme), url: href("theme.html", `&id=${theme.id}`) }));

    const objectResults = Object.entries(D.objects)
      .filter(([id, object]) => [id, object.ko, object.en].join(" ").toLowerCase().includes(query))
      .map(([id, object]) => ({ type: t[lang].object, name: L(object), url: href("object.html", `&id=${id}`) }));

    const results = [...themeResults, ...objectResults].slice(0, 10);
    panel.innerHTML = results.length
      ? results.map((result) => `<a class="result" href="${result.url}"><b>${result.name}</b><small>${result.type}</small></a>`).join("")
      : `<div class="result"><small>No result</small></div>`;
    panel.classList.add("open");
  });

  document.addEventListener("click", (event) => {
    if (!panel.contains(event.target) && event.target !== input) {
      panel.classList.remove("open");
    }
  });
}
