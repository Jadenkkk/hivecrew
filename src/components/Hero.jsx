// Hero — full-screen dark hero with dot pattern overlay, gold accent label, and two CTAs
// [변경] 전체 재작성: 기존 white 배경 → dark gradient 배경, health/wellness 방향으로 변경
export default function Hero({ t }) {
  return (
    <section className="hero">
      {/* [변경] hero 요소들은 CSS keyframe으로 애니메이션 (f-in 미사용 — 인트로 이후 타이밍 맞춤) */}
      <div className="hero-label">
        <span>{t['h.label']}</span>
      </div>

      <h1 className="hero-title">
        {t['h.t1']} <em>{t['h.t2']}</em><br />
        {t['h.t3']}
      </h1>

      <div className="hero-bottom">
        <p className="hero-sub">
          {t['h.sub']}
        </p>
        <div className="hero-actions">
          {/* [변경] btn-gold: 파트너 문의 버튼 (gold 배경) */}
          <a
            href="https://www.instagram.com/hivecrew.official/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-gold"
          >
            {t['h.btn1']}
          </a>
          {/* [변경] btn-white: 크리에이터 보기 버튼 (ghost, white 테두리) */}
          <a href="#creators" className="btn btn-white">
            {t['h.btn2']}
          </a>
        </div>
      </div>
    </section>
  );
}
