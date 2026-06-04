window.DAMOLDA_DATA = {
  themes: [
    { id:'emotion', ko:'감성', en:'Emotion', open:true, noteKo:'리프레시 · 평온 · 위로 · 추억 · 자유 · 따뜻함 · 내면', noteEn:'Refresh · Calm · Comfort · Memory · Freedom · Warmth · Inner Self', objects:['warmth','memory','comfort'] },
    { id:'nature', ko:'자연', en:'Nature', open:false, noteKo:'돌 · 숲 · 바다 · 바람 · 불 · 나무 · 가드닝', noteEn:'Stone · Forest · Sea · Wind · Fire · Wood · Garden', objects:['stone','tide','wood'] },
    { id:'philosophy', ko:'철학', en:'Philosophy', open:false, noteKo:'기억 · 연결 · 순환 · 공명 · 무중력 · 우주', noteEn:'Memory · Connection · Cycle · Resonance · Weightlessness · Cosmos', objects:['resonance','cycle','orbit'] },
    { id:'season', ko:'계절', en:'Season', open:false, noteKo:'봄 · 여름 · 가을 · 겨울 · 비 · 첫눈', noteEn:'Spring · Summer · Autumn · Winter · Rain · First Snow', objects:['spring','rain','snow'] },
    { id:'city', ko:'도시', en:'City', open:false, noteKo:'콘크리트 · 가로등 · 횡단보도 · 지하철 · 창문 · 옥상', noteEn:'Concrete · Streetlight · Crosswalk · Subway · Window · Rooftop', objects:['concrete','streetlight','window'] },
    { id:'village', ko:'시골', en:'Village', open:false, noteKo:'들판 · 울타리 · 우물 · 헛간 · 길 · 장작', noteEn:'Field · Fence · Well · Barn · Path · Firewood', objects:['field','path','firewood'] },
    { id:'quietplay', ko:'조용한 놀이', en:'Quiet Play', open:true, noteKo:'클릭 · 회전 · 촉감 · 집중 · 휴식 · 반복 · 손의 기억', noteEn:'Click · Rotate · Texture · Focus · Rest · Repetition · Hand Memory', objects:['click','drift','loop'] },
    { id:'strategy', ko:'전략', en:'Strategy', open:true, noteKo:'선택 · 위험 · 균형 · 성장 · 교환 · 타이밍 · 흐름', noteEn:'Choice · Risk · Balance · Growth · Exchange · Timing · Momentum', objects:['jiryeok','balance','exchange'] }
  ],
  objects: {
    warmth:{ko:'온기',en:'Warmth',theme:'emotion',status:'soon'},
    memory:{ko:'추억',en:'Memory',theme:'emotion',status:'soon'},
    comfort:{ko:'위로',en:'Comfort',theme:'emotion',status:'soon'},
    stone:{ko:'돌',en:'Stone',theme:'nature',status:'soon'},
    tide:{ko:'물결',en:'Tide',theme:'nature',status:'soon'},
    wood:{ko:'나무',en:'Wood',theme:'nature',status:'soon'},
    resonance:{ko:'공명',en:'Resonance',theme:'philosophy',status:'soon'},
    cycle:{ko:'순환',en:'Cycle',theme:'philosophy',status:'soon'},
    orbit:{ko:'궤도',en:'Orbit',theme:'philosophy',status:'soon'},
    spring:{ko:'봄',en:'Spring',theme:'season',status:'soon'},
    rain:{ko:'비',en:'Rain',theme:'season',status:'soon'},
    snow:{ko:'첫눈',en:'First Snow',theme:'season',status:'soon'},
    concrete:{ko:'콘크리트',en:'Concrete',theme:'city',status:'soon'},
    streetlight:{ko:'가로등',en:'Streetlight',theme:'city',status:'soon'},
    window:{ko:'창',en:'Window',theme:'city',status:'soon'},
    field:{ko:'들판',en:'Field',theme:'village',status:'soon'},
    path:{ko:'길',en:'Path',theme:'village',status:'soon'},
    firewood:{ko:'장작',en:'Firewood',theme:'village',status:'soon'},
    jiryeok:{ko:'지략',en:'Tactic',theme:'strategy',status:'open',skus:['Dollar','Euro','Yen']},
    balance:{ko:'균형',en:'Balance',theme:'strategy',status:'soon'},
    exchange:{ko:'교환',en:'Exchange',theme:'strategy',status:'soon'},
    click:{ko:'클릭',en:'Click',theme:'quietplay',status:'open'},
    drift:{ko:'만지작',en:'Drift',theme:'quietplay',status:'soon'},
    loop:{ko:'반복',en:'Loop',theme:'quietplay',status:'soon'}
  }
};
