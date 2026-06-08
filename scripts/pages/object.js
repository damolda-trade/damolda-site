function renderObject() {
  const id = params.get("id") || "jiryeok";
  const object = D.objects[id] || D.objects.jiryeok;
  const theme = D.themes.find((item) => item.id === object.theme);

  layout(`${L(object)} - DAMOLDA`);

  $(".app").innerHTML = `
    <main class="page">
      <section class="object-page">
        <div class="object-visual"></div>
        <div class="object-copy">
          <div class="kicker">${L(theme)} / ${t[lang].object}</div>
          <h2>${L(object)}</h2>
          <div class="actions">
            <a class="linkline" href="${href("detail.html", `&id=${id}`)}">${t[lang].toDetails} →</a>
            ${object.status === "soon" ? `<span class="soon">${t[lang].coming}</span>` : ""}
          </div>
        </div>
      </section>
    </main>
    ${siteFooter()}`;
}
