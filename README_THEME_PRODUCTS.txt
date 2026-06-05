테마 대표 제품 이미지 넣는 법

1. 제품 PNG/WebP를 assets/theme-products/ 안에 넣습니다.
   예: assets/theme-products/nature.webp

2. data.js의 해당 theme 객체에 heroImage를 추가합니다.
   예:
   { id:'nature', ko:'자연', en:'Nature', heroImage:'assets/theme-products/nature.webp', ... }

3. 이미지 배경은 투명 PNG/WebP가 좋습니다.
   제품 하단이 나무 플레이트 위에 자연스럽게 닿도록 렌더링하세요.

현재 ZIP은 제품 이미지 없이 나무벽/테이블/플레이트 무대만 보이도록 구성했습니다.
