function renderAbout() {
  layout(`${t[lang].about} - DAMOLDA`);

  const titleKo = "잊혀지기 전 새겨질 수 있도록";
  const titleEn = "Some moments are worth carrying forward.";
  const bodyKo = `
    <p>잊혀지기 전 새겨질 수 있도록.</p>
    <p>드물어서가 아니라, 거창해서가 아니라, 우리 삶의 일부가 되었기 때문입니다.</p>
    <p>여행의 조각, 서랍 속 편지, 사랑하는 존재의 작은 흔적, 평범한 하루에 남은 물건.</p>
    <p>DAMOLDA는 그런 순간들이 일상 속에 머물 수 있는 형태를 생각합니다.</p>
    <p>DAMOLDA는 당신의 모든 시간이 한 장소에 깃들 수 있도록 존재합니다.</p>`;
  const bodyEn = `
    <p>Some moments are worth carrying forward.</p>
    <p>Not because they are rare. Not because they are grand. But because they become part of who we are.</p>
    <p>A ticket from a journey. A letter kept in a drawer. A small trace of a beloved companion. An object from an ordinary day.</p>
    <p>DAMOLDA exists for those moments. Not to preserve them exactly as they were, but to give them a form that can remain in everyday life.</p>
    <p>DAMOLDA exists for the moments worth carrying forward.</p>`;

  $(".app").innerHTML = `
    <main class="page about-shell">
      <div class="section-head">
        <h1 class="page-title">${t[lang].about}</h1>
        <p>DAMOLDA</p>
      </div>
      <section class="about-panel">
        <div class="about-title">
          <div class="kicker">DAMOLDA</div>
          <h1>${lang === "ko" ? titleKo : titleEn}</h1>
        </div>
        <div class="about-text">${lang === "ko" ? bodyKo : bodyEn}</div>
      </section>
    </main>`;
}
