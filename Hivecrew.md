# Hivecrew.md

이 파일은 Claude Code (claude.ai/code)가 이 저장소에서 작업할 때 참고하는 가이드입니다.

## 프로젝트 개요

HIVE — 서울 기반 헬스/피트니스/웰니스 인플루언서 에이전시. 한국 크리에이터와 동남아시아·중국 브랜드를 연결해 협찬 캠페인을 제공한다.

**라이브 URL:** https://hivecrew.vercel.app
**GitHub:** https://github.com/Jadenkkk/hivecrew

## 아키텍처

**React + Vite** 프로젝트. 영어 전용.

- **폰트:** Google Fonts (Cormorant Garamond + Inter) — CDN으로 로드
- **i18n:** `src/i18n.js`에 `T.en` 객체로 영어 텍스트 관리
- **애니메이션:** IntersectionObserver 기반 스크롤 페이드인 (`.f-in` / `.show`), CSS keyframe 애니메이션
  - `.show`는 뷰포트 진입 시 추가, 벗어날 때 제거 → 재스크롤 시 재실행
- **배포:** Vercel (main 브랜치 push 시 자동 배포)

## 컴포넌트 구조

React의 핵심 장점: 페이지를 독립적인 컴포넌트로 분리 → 수정이 국소적, 재사용 가능, 병렬 작업 가능.

```
App.jsx  ← 전체를 조립하는 루트 (인트로 상태, IntersectionObserver 관리)
├── Intro.jsx        인트로 스플래시 (로고 등장 → 페이드아웃, 한 번만 재생)
├── Nav.jsx          고정 네비 (on-dark / scrolled 클래스, 스크롤 감지)
├── Hero.jsx         "HIVE / Korea's No.1..." 풀스크린 다크 히어로
├── Ticker.jsx       자동 스크롤 마키 띠
├── Creators.jsx     인플루언서 카드 4장 (curtain-reveal + 호버 오버레이)
├── About.jsx        소개 섹션 (필라 3개 + 스탯 블록)
├── Services.jsx     서비스 카드 3개
├── Portfolio.jsx    브랜드 캠페인 케이스 4개
├── WhyHive.jsx      HIVE 선택 이유 + 인용구
├── CTA.jsx          인스타그램 문의 CTA
└── Footer.jsx       푸터
```

**나중에 서브페이지 추가 시 재사용 가능한 컴포넌트:** Nav.jsx, Footer.jsx, Ticker.jsx

## 파일 구조

```
src/
  components/      위 컴포넌트 파일들
  assets/
    creator1.png ~ creator4.png   실제 인플루언서 사진 4장
  i18n.js          영어 텍스트 (T.en)
  App.jsx          루트 컴포넌트
  index.css        전체 스타일
  main.jsx
index.html         Vite 진입점 (Google Fonts 포함)
vercel.json        SPA 리라이트 규칙
```

## 페이지 섹션 순서

```
Intro → Nav → Hero → Ticker → Creators → About → Services → Portfolio → WhyHive → CTA → Footer
```

## 디자인 시스템

**레퍼런스:** https://sandbox.co.kr/en/

**컬러 토큰** (`:root` CSS 변수):

| 변수 | 값 | 용도 |
|------|-----|------|
| `--ink` | `#111110` | 기본 텍스트 |
| `--white` | `#ffffff` | 배경 |
| `--gold` | `#b09060` | 포인트 색상 (CTA, 뱃지, 강조) |
| `--off` | `#f7f5f1` | 섹션 배경 (밝은 크림) |
| `--warm` | `#edeae3` | 보조 섹션 배경 |
| `--muted` | `#8c897f` | 본문 / 보조 텍스트 |

**주요 애니메이션:**
- `.intro-overlay` — 인트로 스플래시, `intro-enter/hold/exit` 페이즈 전환
- `.hero-title`, `.hero-actions` — `heroTitleIn` keyframe (인트로 종료 후 순차 등장)
- `.f-in` + `.show` — IntersectionObserver 스크롤 페이드인 (뷰포트 벗어나면 제거 → 재실행)
- `.creator-curtain` — 스크롤 시 커튼이 위로 슬라이드 아웃 → 사진 드러남 (`curtainReveal` keyframe)
- `.creator-bg` — 커튼 뒤 사진 scale(1.06) → scale(1) 줌아웃
- `.creator-overlay` — 호버 시 `translateY(100%) → 0` 슬라이드업

## 주요 컴포넌트 메모

### Hero.jsx
- 헤드라인: *HIVE* (italic gold) + "Korea's No.1 Fitness Collective."
- label(Seoul·Korea)과 sub 텍스트 제거됨 — 타이틀 + 버튼 2개만
- 폰트 사이즈: `clamp(40px, 6.3vw, 90px)`
- h.t1이 빈 문자열일 때 공백 없이 italic만 렌더링하는 조건부 처리 포함

### Creators.jsx
- 실제 인플루언서 사진 4장 (`src/assets/creator1~4.png`)
- 4열 지그재그 그리드 (짝수 카드 80px 아래 오프셋)
- curtain-reveal: 각 카드 고유 색상 커튼 (ink/gold/muted/warm)
- 스크롤 순차 딜레이: 0s / 0.22s / 0.44s / 0.66s
- 사진 교체 시: `src/assets/`에 파일 추가 후 `creator1~4.png` 교체 또는 import 수정

### Portfolio.jsx
- 4개 더미 캠페인 (NutriPro SG, ActiveWear TH, ZenLife CN, RunFast ID)
- 실제 포트폴리오 추가 시 `campaigns` 배열에 항목 추가

### Nav.jsx
- 히어로가 다크 배경이므로 항상 `on-dark` 클래스 적용
- 스크롤 시 `scrolled` 클래스 추가 → 흰 배경으로 전환

## 배포

```bash
# 로컬 미리보기
npm run dev
# → http://localhost:5173

# 배포 (커밋 + 푸시하면 Vercel 자동 배포)
git add [파일들]
git commit -m "설명"
git push
```

## 워크플로우 가이드 (Claude Code)

코드 변경 후 항상:
1. **로컬 미리보기 링크 표시**: `http://localhost:5173`
2. **사용자 확인 후 커밋 + 푸시** — Vercel이 main 브랜치 push 시 자동 배포
3. **라이브 사이트**: https://hivecrew.vercel.app
4. **JSX/CSS 주석 추가** — 변경 사항 명시. 예: `{/* [변경] 설명 */}`, `/* [변경] 설명 */`
5. **Hivecrew.md 업데이트** — 컴포넌트/디자인/텍스트 변경 시 반영

## 콘텐츠

- **문의:** 모든 CTA → https://www.instagram.com/hivecrew.official/
- **언어:** 영어 전용
- **백엔드 없음** — 완전 정적 (인스타그램 API 연동 예정)
- **향후 계획:** 브랜드용 서브페이지 + 크리에이터 모집 서브페이지 추가 예정
