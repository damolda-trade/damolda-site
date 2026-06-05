DAMOLDA Themes Background Patch

적용 내용:
- themes.html 테마관 배경을 실제 나무 배경 이미지로 교체
- CSS로 만든 육각형/도자기/가짜 플레이트 제거
- 기존 메뉴, 언어 전환, 검색, 테마 탭, 좌우 전환 유지
- 대표 제품 이미지를 나중에 얹을 수 있는 .theme-product 슬롯 추가

제품 이미지 넣는 방법:
1. 투명 배경 PNG/WebP 제품 렌더링 파일을 assets/themes/ 폴더에 넣기
   예: assets/themes/nature-product.webp

2. data.js의 해당 theme 객체에 heroImage 추가
   예:
   { id:"nature", ko:"자연", en:"Nature", ..., heroImage:"assets/themes/nature-product.webp" }

권장:
- 제품 파일은 배경 없는 투명 PNG/WebP
- 제품은 플레이트 위에 놓인 시점으로 렌더링하면 가장 자연스러움
