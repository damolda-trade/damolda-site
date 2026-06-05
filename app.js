const D = window.DAMOLDA_DATA;
const $ = (s) => document.querySelector(s);
const params = new URLSearchParams(location.search);
let lang = params.get('lang') || localStorage.getItem('damolda_lang') || 'ko';
if(!['ko','en'].includes(lang)) lang='ko';
localStorage.setItem('damolda_lang', lang);
const t = {
  ko:{themes:'테마관',journal:'저널',about:'어바웃',enterThemes:'테마관 입장',enterGallery:'전시관 입장',viewObjects:'작품 보기',toDetails:'상세 페이지로',coming:'Coming Soon',search:'검색',object:'오브제',details:'상세 페이지',buy:'구매 준비 중',making:'제작 기록',materials:'원재료 노트',process:'공정 노트',studio:'스튜디오 노트',soonText:'이 영역은 촬영과 제작 기록이 쌓이면 채워집니다.'},
  en:{themes:'Themes',journal:'Journal',about:'About',enterThemes:'Enter Themes',enterGallery:'Enter Gallery',viewObjects:'View Objects',toDetails:'To Detailed Pages',coming:'Coming Soon',search:'Search',object:'Object',details:'Detailed Page',buy:'Purchase Coming Soon',making:'Making',materials:'Materials',process:'Process',studio:'Studio Notes',soonText:'This space will be filled with studio films, process notes, and material records.'}
};

const THEME_PHRASES = {
  emotion:{ko:'기억이 식지 않도록, 온도를 남기는 방.', en:'A room for keeping the temperature of memory.'},
  nature:{ko:'돌과 바람, 나무가 천천히 남긴 감각.', en:'Stone, wind, and wood held in a slower rhythm.'},
  philosophy:{ko:'보이지 않는 연결을 조용히 바라보는 자리.', en:'A quiet place for invisible connections.'},
  season:{ko:'지나가는 계절이 손끝에 머무는 순간.', en:'A passing season held at the edge of the hand.'},
  city:{ko:'차가운 구조 속에 남은 작은 불빛.', en:'A small light left inside the city structure.'},
  village:{ko:'오래된 길과 손때가 만든 낮은 온기.', en:'A low warmth shaped by old paths and touch.'},
  strategy:{ko:'선택과 균형, 타이밍을 다루는 감각.', en:'A sense for choice, balance, and timing.'},
  senses:{ko:'손이 기억하는 조용한 놀이와 반복.', en:'Quiet play and repetition remembered by the hand.'}
};
function themePhrase(th){ const p = THEME_PHRASES[th.id] || {ko:th.noteKo,en:th.noteEn}; return lang==='ko' ? p.ko : p.en; }

function L(o){return lang==='ko' ? o.ko : o.en}
function href(page, extra=''){return `${page}?lang=${lang}${extra}`}
function layout(title='DAMOLDA'){
  document.title = title;
  const nav = `
  <header class="top">
    <a class="brand" href="${href('index.html')}"><img class="brand-handwordmark" src="assets/damolda-handwordmark.png" alt="다몰다"></a>
    <nav class="nav"><a href="${href('themes.html')}">${t[lang].themes}</a><span class="nav-sep">/</span><a href="${href('journal.html')}">${t[lang].journal}</a><span class="nav-sep">/</span><a href="${href('about.html')}">${t[lang].about}</a></nav>
    <div class="right-tools"><input id="search" class="search" placeholder="${t[lang].search}" autocomplete="off"><div class="lang"><a class="${lang==='ko'?'active':''}" href="?lang=ko">한국어</a> | <a class="${lang==='en'?'active':''}" href="?lang=en">EN</a></div></div>
  </header><div id="searchPanel" class="search-panel"></div>`;
  document.body.insertAdjacentHTML('afterbegin', nav);
  setupSearch();
}
function tabs(active){return `<div class="theme-tabs">${D.themes.map(x=>`<a class="theme-tab ${x.id===active?'active':''}" href="${href('theme.html',`&id=${x.id}`)}">${L(x)}</a>`).join('')}</div>`}
function setupSearch(){
  const input = $('#search'), panel = $('#searchPanel');
  if(!input || !panel) return;
  input.addEventListener('input',()=>{
    const q=input.value.trim().toLowerCase();
    if(!q){panel.classList.remove('open');return}
    const themeResults = D.themes.filter(x=>[x.ko,x.en,x.id].join(' ').toLowerCase().includes(q)).map(x=>({type:t[lang].themes,name:L(x),url:href('theme.html',`&id=${x.id}`)}));
    const objectResults = Object.entries(D.objects).filter(([id,o])=>[id,o.ko,o.en].join(' ').toLowerCase().includes(q)).map(([id,o])=>({type:t[lang].object,name:L(o),url:href('object.html',`&id=${id}`)}));
    const results=[...themeResults,...objectResults].slice(0,10);
    panel.innerHTML = results.length ? results.map(r=>`<a class="result" href="${r.url}"><b>${r.name}</b><small>${r.type}</small></a>`).join('') : `<div class="result"><small>No result</small></div>`;
    panel.classList.add('open');
  });
  document.addEventListener('click',(e)=>{if(!panel.contains(e.target)&&e.target!==input)panel.classList.remove('open')});
}
function renderHome(){layout('DAMOLDA'); const heroTitle=lang==='ko'?'조용한 깃듦.':'Quietly kept.'; const heroSub=lang==='ko'?'잔상이 고요하게 머물 수 있도록':'Keep what matters.'; $('.app').innerHTML=`<section class="hero"><img class="hero-bg" src="assets/hero.png" alt=""><div class="hero-copy"><h1>${heroTitle}</h1><p>${heroSub}</p><a class="linkline" href="${href('themes.html')}">${t[lang].enterThemes} →</a></div></section>`}
function renderThemes(){layout(`${t[lang].themes} - DAMOLDA`); let i=0; const revealed = new Set(); const set=()=>{const th=D.themes[i]; const firstView=!revealed.has(th.id); revealed.add(th.id); $('.app').innerHTML=`<main class="page theme-shell gallery-theme-shell">${tabs(th.id)}<section class="stage"><button class="arrow" id="prev" aria-label="Previous theme">←</button><article class="theme-card gallery-theme-card ${firstView?'is-entering':'is-revealed'}"><div class="theme-visual">${th.heroImage ? `<img class="theme-product" src="${th.heroImage}" alt="${L(th)}">` : ``}</div><div class="theme-copy"><div class="kicker">DAMOLDA THEME HALL</div><h2>${L(th)}</h2><div class="subthemes">${lang==='ko'?th.noteKo:th.noteEn}</div><div class="actions"><a class="linkline" href="${href('theme.html',`&id=${th.id}`)}">${th.open?t[lang].enterGallery:t[lang].viewObjects} →</a>${!th.open?`<span class="soon">${t[lang].coming}</span>`:''}</div></div></article><button class="arrow" id="next" aria-label="Next theme">→</button></section></main>`; $('#prev').onclick=()=>{i=(i+D.themes.length-1)%D.themes.length;set()}; $('#next').onclick=()=>{i=(i+1)%D.themes.length;set()};}; set()}
function renderTheme(){const id=params.get('id')||'emotion'; const th=D.themes.find(x=>x.id===id)||D.themes[0]; layout(`${L(th)} - DAMOLDA`); $('.app').innerHTML=`<main class="theme-detail-page theme-detail-${th.id}" style="--theme-bg:url('assets/theme-backgrounds/${th.id}.png')"><div class="theme-detail-bg" aria-hidden="true"></div><div class="theme-detail-tabs">${tabs(th.id)}</div><section class="theme-label-board"><div class="kicker">DAMOLDA THEME NOTE</div><h1>${L(th)}</h1><p class="theme-statement">${themePhrase(th)}</p><p class="theme-keywords">${lang==='ko'?th.noteKo:th.noteEn}</p></section><section class="exhibit-label-list" aria-label="${L(th)} objects">${th.objects.map((oid,idx)=>{const o=D.objects[oid];return `<a class="exhibit-label" href="${href('object.html',`&id=${oid}`)}"><span class="exhibit-no">${String(idx+1).padStart(2,'0')}</span><span class="exhibit-name"><b>${L(o)}</b></span><span class="exhibit-arrow">→</span></a>`}).join('')}</section></main>`}
function renderObject(){const id=params.get('id')||'jiryeok'; const o=D.objects[id]||D.objects.jiryeok; const th=D.themes.find(x=>x.id===o.theme); layout(`${L(o)} - DAMOLDA`); $('.app').innerHTML=`<main class="page"><section class="object-page"><div class="object-visual"></div><div class="object-copy"><div class="kicker">${L(th)} / ${t[lang].object}</div><h2>${L(o)}</h2><div class="actions"><a class="linkline" href="${href('detail.html',`&id=${id}`)}">${t[lang].toDetails} →</a>${o.status==='soon'?`<span class="soon">${t[lang].coming}</span>`:''}</div></div></section></main>`}
function renderDetail(){const id=params.get('id')||'jiryeok'; const o=D.objects[id]||D.objects.jiryeok; const th=D.themes.find(x=>x.id===o.theme); layout(`${L(o)} ${t[lang].details} - DAMOLDA`); const skus=o.skus||['Coming Soon']; $('.app').innerHTML=`<main class="page"><div class="section-head"><h1>${L(o)}</h1><p>${L(th)}</p></div><div class="about-panel"><div class="about-title"><div class="kicker">${t[lang].details}</div><h1>${L(o)}</h1></div><div class="about-text"><div class="detail-list">${skus.map(s=>`<div class="sku"><span>${L(o)} - ${s}</span><span>${t[lang].buy}</span></div>`).join('')}</div></div></div></main>`}
function renderJournal(){layout(`${t[lang].journal} - DAMOLDA`); const cards=[{title:t[lang].making},{title:t[lang].materials},{title:t[lang].process},{title:t[lang].studio}]; $('.app').innerHTML=`<main class="page journal-shell journal-bg"><div class="journal-hero"><h1>${t[lang].journal}</h1><p>다몰다의 생각과 과정, 그리고 일상의 기록들</p></div><div class="journal-grid">${cards.map(c=>`<article class="journal-card action-card"><div class="card-body"><h2>${c.title}</h2><p>${t[lang].soonText}</p></div></article>`).join('')}</div></main>`}
function renderAbout(){layout(`${t[lang].about} - DAMOLDA`); const titleKo='잊혀지기 전 새겨질 수 있도록'; const titleEn='Some moments are worth carrying forward.'; const bodyKo=`<p>잊혀지기 전 새겨질 수 있도록.</p><p>드물어서가 아니라, 거창해서가 아니라, 우리 삶의 일부가 되었기 때문입니다.</p><p>여행의 조각, 서랍 속 편지, 사랑하는 존재의 작은 흔적, 평범한 하루에 남은 물건.</p><p>DAMOLDA는 그런 순간들이 일상 속에 머물 수 있는 형태를 생각합니다.</p><p>DAMOLDA는 당신의 모든 시간이 한 장소에 깃들 수 있도록 존재합니다.</p>`; const bodyEn=`<p>Some moments are worth carrying forward.</p><p>Not because they are rare. Not because they are grand. But because they become part of who we are.</p><p>A ticket from a journey. A letter kept in a drawer. A small trace of a beloved companion. An object from an ordinary day.</p><p>DAMOLDA exists for those moments. Not to preserve them exactly as they were, but to give them a form that can remain in everyday life.</p><p>DAMOLDA exists for the moments worth carrying forward.</p>`; $('.app').innerHTML=`<main class="page about-shell"><div class="section-head"><h1 class="page-title">${t[lang].about}</h1><p>DAMOLDA</p></div><section class="about-panel"><div class="about-title"><div class="kicker">DAMOLDA</div><h1>${lang==='ko'?titleKo:titleEn}</h1></div><div class="about-text">${lang==='ko'?bodyKo:bodyEn}</div></section></main>`}
const page = document.body.dataset.page;
({home:renderHome,themes:renderThemes,theme:renderTheme,object:renderObject,detail:renderDetail,journal:renderJournal,about:renderAbout}[page]||renderHome)();
