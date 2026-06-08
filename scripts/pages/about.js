function renderAbout() {
  layout(`${t[lang].about} - DAMOLDA`);

  const copy = {
    ko: {
      eyebrow: "DAMOLDA ABOUT",
      title: "기억이 머무는 자리에, 형태를 남깁니다.",
      lead:
        "DAMOLDA는 지나간 순간이 일상 안에서 다시 만져질 수 있도록 작은 오브제와 기록의 형식으로 감정을 보관합니다.",
      body: [
        "어떤 물건은 장식이기 전에 한 사람의 시간입니다.",
        "여행에서 접어 둔 표, 오래 간직한 편지, 손때가 남은 재료, 함께한 존재의 작은 흔적. 우리는 그런 단서를 천천히 읽고 오래 두고 볼 수 있는 형태로 다듬습니다.",
        "완벽하게 과거를 복원하기보다, 오늘의 공간에 자연스럽게 놓이는 조용한 기념을 만듭니다.",
      ],
      notes: [
        ["Memory", "오래 남기고 싶은 순간"],
        ["Object", "일상에 놓이는 작은 형태"],
        ["Record", "시간을 따라 쌓이는 제작 노트"],
      ],
    },
    en: {
      eyebrow: "DAMOLDA ABOUT",
      title: "We give form to the places where memory stays.",
      lead:
        "DAMOLDA keeps emotion in small objects and records, so passing moments can be touched again inside everyday life.",
      body: [
        "Some objects are a person's time before they are decoration.",
        "A folded ticket from a journey, a letter kept for years, a material marked by use, a small trace of a beloved presence. We read those clues slowly and refine them into forms made to stay close.",
        "Rather than restoring the past exactly, we create quiet keepsakes that belong naturally in the rooms of today.",
      ],
      notes: [
        ["Memory", "Moments worth carrying forward"],
        ["Object", "Small forms for everyday rooms"],
        ["Record", "Studio notes gathered over time"],
      ],
    },
  };

  const pageCopy = lang === "ko" ? copy.ko : copy.en;

  $(".app").innerHTML = `
    <main class="page about-shell about-stage">
      <section class="about-panel" aria-labelledby="aboutTitle">
        <div class="about-title">
          <div class="kicker">${pageCopy.eyebrow}</div>
          <h1 id="aboutTitle">${pageCopy.title}</h1>
          <p class="about-lead">${pageCopy.lead}</p>
        </div>
        <div class="about-text">
          ${pageCopy.body.map((paragraph) => `<p>${paragraph}</p>`).join("")}
          <dl class="about-notes">
            ${pageCopy.notes
              .map(
                ([term, description]) => `
                  <div>
                    <dt>${term}</dt>
                    <dd>${description}</dd>
                  </div>`,
              )
              .join("")}
          </dl>
        </div>
      </section>
    </main>
    ${siteFooter()}`;
}
