function renderJournal() {
  layout(`${t[lang].journal} - DAMOLDA`);

  const cards = [
    { title: t[lang].making },
    { title: t[lang].materials },
    { title: t[lang].process },
    { title: t[lang].studio },
  ];

  $(".app").innerHTML = `
    <main class="page journal-shell journal-bg">
      <div class="journal-hero">
        <h1>${t[lang].journal}</h1>
        <p>다몰다의 생각과 과정, 그리고 일상의 기록들</p>
      </div>
      <div class="journal-grid">
        ${cards
          .map(
            (card) => `
              <article class="journal-card action-card">
                <div class="card-body">
                  <h2>${card.title}</h2>
                  <p>${t[lang].soonText}</p>
                </div>
              </article>`,
          )
          .join("")}
      </div>
    </main>`;
}
