function renderHome() {
  layout("DAMOLDA");

  const heroTitle = lang === "ko" ? "조용한 깃듦." : "Quietly kept.";
  const heroSub = lang === "ko" ? "잔상이 고요하게 머물 수 있도록" : "Keep what matters.";

  $(".app").innerHTML = `
    <section class="hero">
      <img class="hero-bg" src="assets/hero.png" alt="">
      <div class="hero-copy">
        <h1>${heroTitle}</h1>
        <p>${heroSub}</p>
        <a class="linkline" href="${href("themes.html")}">${t[lang].enterThemes} →</a>
      </div>
    </section>
    ${siteFooter()}`;
}
