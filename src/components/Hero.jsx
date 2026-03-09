// Hero — full-width opening section with headline and CTA buttons
export default function Hero({ t }) {
  return (
    <section className="hero">
      <div className="hero-label f-in">
        <span>{t['h.label']}</span>
      </div>

      {/* dangerouslySetInnerHTML not needed here — title parts are split across elements */}
      <h1 className="hero-title f-in d1">
        {t['h.t1']} <em>{t['h.t2']}</em><br />
        {t['h.t3']}
      </h1>

      <div className="hero-bottom">
        <p className="hero-sub f-in d2">
          {t['h.sub']}
        </p>
        <div className="hero-actions f-in d3">
          <a
            href="https://www.instagram.com/hivecrew.official/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-dark"
          >
            {t['h.btn1']}
          </a>
          <a href="#about" className="btn btn-ghost">
            {t['h.btn2']}
          </a>
        </div>
      </div>
    </section>
  );
}
