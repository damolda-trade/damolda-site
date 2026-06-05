function renderDetail() {
  const id = params.get("id") || "jiryeok";
  const object = D.objects[id] || D.objects.jiryeok;
  const theme = D.themes.find((item) => item.id === object.theme);
  const skus = object.skus || ["Coming Soon"];

  layout(`${L(object)} ${t[lang].details} - DAMOLDA`);

  $(".app").innerHTML = `
    <main class="page">
      <div class="section-head">
        <h1>${L(object)}</h1>
        <p>${L(theme)}</p>
      </div>
      <div class="about-panel">
        <div class="about-title">
          <div class="kicker">${t[lang].details}</div>
          <h1>${L(object)}</h1>
        </div>
        <div class="about-text">
          <div class="detail-list">
            ${skus.map((sku) => `<div class="sku"><span>${L(object)} - ${sku}</span><span>${t[lang].buy}</span></div>`).join("")}
          </div>
        </div>
      </div>
    </main>`;
}
