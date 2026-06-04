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
function L(o){return lang==='ko' ? o.ko : o.en}
function href(page, extra=''){return `${page}?lang=${lang}${extra}`}
function layout(title='DAMOLDA'){
  document.title = title;
  const nav = `
  <header class="top">
    <a class="brand" href="${href('index.html')}"><img class="brand-handwordmark" src="assets/damolda-handwordmark.png" alt="다몰다"></a>
    <nav class="nav"><a href="${href('themes.html')}">${t[lang].themes}</a><a href="${href('journal.html')}">${t[lang].journal}</a><a href="${href('about.html')}">${t[lang].about}</a></nav>
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
function renderHome(){layout('DAMOLDA'); $('.app').innerHTML=`<section class="hero"><img class="hero-bg" src="assets/hero.png" alt=""><div class="hero-copy"><h1>Quietly kept.</h1><p>Keep what matters.</p><a class="linkline" href="${href('themes.html')}">${t[lang].enterThemes} →</a></div></section>`}
function renderThemes(){layout(`${t[lang].themes} - DAMOLDA`); let i=0; const set=()=>{const th=D.themes[i]; $('.app').innerHTML=`<main class="page theme-shell"><div class="section-head"><h1 class="page-title">${t[lang].themes}</h1><p>${i+1} / ${D.themes.length}</p></div>${tabs(th.id)}<section class="stage"><button class="arrow" id="prev">←</button><article class="theme-card"><div class="theme-visual"></div><div class="theme-copy"><div class="kicker">DAMOLDA THEME HALL</div><h2>${L(th)}</h2><div class="subthemes">${lang==='ko'?th.noteKo:th.noteEn}</div><div class="actions"><a class="linkline" href="${href('theme.html',`&id=${th.id}`)}">${th.open?t[lang].enterGallery:t[lang].viewObjects} →</a>${!th.open?`<span class="soon">${t[lang].coming}</span>`:''}</div></div></article><button class="arrow" id="next">→</button></section></main>`; $('#prev').onclick=()=>{i=(i+D.themes.length-1)%D.themes.length;set()}; $('#next').onclick=()=>{i=(i+1)%D.themes.length;set()};}; set()}
function renderTheme(){const id=params.get('id')||'emotion'; const th=D.themes.find(x=>x.id===id)||D.themes[0]; layout(`${L(th)} - DAMOLDA`); $('.app').innerHTML=`<main class="page"><div class="section-head"><h1>${L(th)}</h1><p>${t[lang].themes}</p></div>${tabs(th.id)}<div class="subthemes">${lang==='ko'?th.noteKo:th.noteEn}</div><div class="object-grid">${th.objects.map(oid=>{const o=D.objects[oid];return `<a class="mini-object" href="${href('object.html',`&id=${oid}`)}"><span>${t[lang].object}</span><h3>${L(o)}</h3>${o.status==='soon'?`<span>${t[lang].coming}</span>`:''}</a>`}).join('')}</div></main>`}
function renderObject(){const id=params.get('id')||'jiryeok'; const o=D.objects[id]||D.objects.jiryeok; const th=D.themes.find(x=>x.id===o.theme); layout(`${L(o)} - DAMOLDA`); $('.app').innerHTML=`<main class="page"><section class="object-page"><div class="object-visual"></div><div class="object-copy"><div class="kicker">${L(th)} / ${t[lang].object}</div><h2>${L(o)}</h2><div class="actions"><a class="linkline" href="${href('detail.html',`&id=${id}`)}">${t[lang].toDetails} →</a>${o.status==='soon'?`<span class="soon">${t[lang].coming}</span>`:''}</div></div></section></main>`}
function renderDetail(){const id=params.get('id')||'jiryeok'; const o=D.objects[id]||D.objects.jiryeok; const th=D.themes.find(x=>x.id===o.theme); layout(`${L(o)} ${t[lang].details} - DAMOLDA`); const skus=o.skus||['Coming Soon']; $('.app').innerHTML=`<main class="page"><div class="section-head"><h1>${L(o)}</h1><p>${L(th)}</p></div><div class="about-panel"><div class="about-title"><div class="kicker">${t[lang].details}</div><h1>${L(o)}</h1></div><div class="about-text"><div class="detail-list">${skus.map(s=>`<div class="sku"><span>${L(o)} - ${s}</span><span>${t[lang].buy}</span></div>`).join('')}</div></div></div></main>`}
function renderJournal(){layout(`${t[lang].journal} - DAMOLDA`); const cards=[t[lang].making,t[lang].materials,t[lang].process,t[lang].studio]; $('.app').innerHTML=`<main class="page journal-shell"><div class="section-head"><h1 class="page-title">${t[lang].journal}</h1><p>Studio Archive</p></div><div class="journal-grid">${cards.map(c=>`<article class="journal-card"><div class="kicker">Coming Soon</div><h2>${c}</h2><p>${t[lang].soonText}</p></article>`).join('')}</div></main>`}
function renderAbout(){layout(`${t[lang].about} - DAMOLDA`); const bodyKo=`<p>어떤 순간들은 앞으로도 이어질 가치가 있습니다.</p><p>드물어서가 아니라, 거창해서가 아니라, 우리 삶의 일부가 되었기 때문입니다.</p><p>여행의 조각, 서랍 속 편지, 사랑하는 존재의 작은 흔적, 평범한 하루에 남은 물건.</p><p>DAMOLDA는 그런 순간들을 위한 형태를 생각합니다. 과거를 그대로 붙잡기 위해서가 아니라, 일상 속에 둘 수 있는 모습으로 남기기 위해서입니다.</p><p>기억은 이야기의 일부일 뿐입니다. 우리가 간직하기로 한 것들은 지나간 일을 떠올리게 하는 데서 그치지 않습니다. 그것들은 다음에 올 시간과 함께 놓입니다.</p><p>DAMOLDA exists for the moments worth carrying forward.</p>`; const bodyEn=`<p>Some moments are worth carrying forward.</p><p>Not because they are rare. Not because they are grand. But because they become part of who we are.</p><p>A ticket from a journey. A letter kept in a drawer. A small trace of a beloved companion. An object from an ordinary day.</p><p>DAMOLDA exists for those moments. Not to preserve them exactly as they were, but to give them a form that can remain in everyday life.</p><p>Memory is only part of the story. The objects we keep are not only reminders of what happened. They become companions to what comes next.</p><p>DAMOLDA exists for the moments worth carrying forward.</p>`; $('.app').innerHTML=`<main class="page about-shell"><div class="section-head"><h1 class="page-title">${t[lang].about}</h1><p>DAMOLDA</p></div><section class="about-panel"><div class="about-title"><div class="kicker">DAMOLDA</div><h1>Some moments are worth carrying forward.</h1></div><div class="about-text">${lang==='ko'?bodyKo:bodyEn}</div></section></main>`}
const page = document.body.dataset.page;
({home:renderHome,themes:renderThemes,theme:renderTheme,object:renderObject,detail:renderDetail,journal:renderJournal,about:renderAbout}[page]||renderHome)();
