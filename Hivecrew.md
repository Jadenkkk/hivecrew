# CLAUDE.md

이 파일은 Claude Code (claude.ai/code)가 이 저장소에서 작업할 때 참고하는 가이드입니다.

## 프로젝트 개요

HIVE — 서울 기반 헬스/피트니스/웰니스 인플루언서 에이전시. 한국 크리에이터와 동남아시아·중국 브랜드를 연결해 협찬 캠페인을 제공한다.

**라이브 URL:** https://hivecrew.vercel.app
**GitHub:** https://github.com/Jadenkkk/hivecrew

## 아키텍처

**React + Vite** 프로젝트. 영어 전용 (한국어 토글 제거됨).

- **폰트:** Google Fonts (Cormorant Garamond + Inter) — CDN으로 로드
- **i18n:** `src/i18n.js`에 `T.en` 객체로 영어 텍스트 관리 (KO 키는 파일에 남아있지만 미사용)
- **애니메이션:** IntersectionObserver 기반 페이드인 (`.f-in` / `.show`), CSS keyframe 애니메이션
- **배포:** Vercel (main 브랜치 push 시 자동 배포)

## 파일 구조

```
src/
  components/
    Intro.jsx      인트로 스플래시 (로고 등장 → 페이드아웃)
    Nav.jsx        고정 네비 (다크 히어로 지원, on-dark / scrolled 클래스)
    Hero.jsx       풀스크린 다크 히어로 (CSS keyframe 애니메이션)
    Ticker.jsx     자동 스크롤 마키
    Creators.jsx   인플루언서 쇼케이스 (호버 슬라이드업 오버레이)
    About.jsx      헬스/웰니스 포커스 소개 섹션
    Services.jsx   협찬 서비스 3종 카드
    Portfolio.jsx  더미 브랜드 캠페인 케이스 4개
    WhyHive.jsx    HIVE 선택 이유
    CTA.jsx        인스타그램 문의 CTA
    Footer.jsx     푸터
  i18n.js          영어 텍스트 (T.en)
  App.jsx          인트로 상태, IntersectionObserver, 섹션 렌더링 순서
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
- `.hero-title`, `.hero-label`, `.hero-sub`, `.hero-actions` — `heroTitleIn` keyframe (인트로 종료 후 순차 등장)
- `.f-in` + `.show` — IntersectionObserver 트리거 스크롤 페이드인
- `.creator-overlay` — 호버 시 `translateY(100%) → 0` 슬라이드업

## 주요 컴포넌트 메모

### Creators.jsx
- 6명 더미 인플루언서 (randomuser.me 포트레이트 사진 사용)
- 실제 사진으로 교체 시 `photo` 필드에 URL 또는 `/src/assets/` 경로 사용
- 카테고리: Fitness, Wellness, Yoga, Strength, Pilates, Running

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
git add .
git commit -m "설명"
git push
```

## 워크플로우 가이드 (Claude Code)

코드 변경 후 항상:
1. **로컬 미리보기 링크 표시**: `http://localhost:5173`
2. **사용자 확인 후 커밋 + 푸시** — Vercel이 main 브랜치 push 시 자동 배포
3. **라이브 사이트**: https://hivecrew.vercel.app
4. **JSX/CSS 주석 추가** — 변경 사항 명시. 예: `{/* [변경] 설명 */}`, `/* [변경] 설명 */`

## 콘텐츠

- **문의:** 모든 CTA → https://www.instagram.com/hivecrew.official/
- **언어:** 영어 전용 (한국어 토글 제거)
- **백엔드 없음** — 완전 정적 (인스타그램 API 연동 예정)
