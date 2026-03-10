// Hero — full-screen dark hero with dot pattern overlay, gold accent label, and two CTAs
// [변경] 전체 재작성: 기존 white 배경 → dark gradient 배경, health/wellness 방향으로 변경
export default function Hero({ t }) {
  return (
    <section className="hero">
      {/* [변경] h.t1이 빈 문자열이면 공백 없이 italic만 렌더링 */}
      <h1 className="hero-title">
        {t['h.t1'] ? `${t['h.t1']} ` : ''}<em>{t['h.t2']}</em><br />
        {t['h.t3']}
      </h1>

      <div className="hero-bottom">
        {/* [변경] h.sub: i18n에서 관리 — "" 이면 숨김, 텍스트 있으면 표시 */}
        {t['h.sub'] && <p className="hero-sub">{t['h.sub']}</p>}
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
