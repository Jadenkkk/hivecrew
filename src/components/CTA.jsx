// CTA — centred call-to-action section with Instagram links
export default function CTA({ t }) {
  return (
    <section className="cta-s" id="contact">
      <span className="eyebrow f-in">{t['ct.ey']}</span>
      <h2 className="cta-title f-in d1">
        {t['ct.t1']}<br />
        <em>{t['ct.t2']}</em>
      </h2>
      <p className="cta-sub f-in d2">{t['ct.sub']}</p>
      <div className="cta-btns f-in d3">
        <a
          href="https://www.instagram.com/hivecrew.official/"
          target="_blank"
          rel="noreferrer"
          className="btn btn-dark"
        >
          {/* Instagram icon SVG — preserved from original */}
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5"/>
            <circle cx="12" cy="12" r="4"/>
            <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
          </svg>
          <span>{t['ct.btn1']}</span>
        </a>
        <a
          href="https://www.instagram.com/hivecrew.official/"
          target="_blank"
          rel="noreferrer"
          className="btn btn-ghost"
        >
          {t['ct.btn2']}
        </a>
      </div>
    </section>
  );
}
