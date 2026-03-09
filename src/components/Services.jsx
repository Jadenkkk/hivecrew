// Services — three-column service cards on off-white background
export default function Services({ t }) {
  return (
    <section className="s s-off" id="services">
      <div className="services-top">
        <div>
          <span className="eyebrow f-in">{t['sv.ey']}</span>
          {/* sv.title contains <br> — use dangerouslySetInnerHTML */}
          <h2
            className="h2 f-in d1"
            dangerouslySetInnerHTML={{ __html: t['sv.title'] }}
          />
        </div>
        <p className="lead f-in d2">{t['sv.lead']}</p>
      </div>
      <div className="svc-grid">
        <div className="svc f-in">
          <span className="svc-n">01</span>
          <span className="svc-ico">🎬</span>
          {/* s1.t contains <br> — use dangerouslySetInnerHTML */}
          <div
            className="svc-title"
            dangerouslySetInnerHTML={{ __html: t['s1.t'] }}
          />
          <div className="svc-body">{t['s1.b']}</div>
        </div>
        <div className="svc f-in d1">
          <span className="svc-n">02</span>
          <span className="svc-ico">🎥</span>
          <div
            className="svc-title"
            dangerouslySetInnerHTML={{ __html: t['s2.t'] }}
          />
          <div className="svc-body">{t['s2.b']}</div>
        </div>
        <div className="svc f-in d2">
          <span className="svc-n">03</span>
          <span className="svc-ico">🏙️</span>
          <div
            className="svc-title"
            dangerouslySetInnerHTML={{ __html: t['s3.t'] }}
          />
          <div className="svc-body">{t['s3.b']}</div>
        </div>
      </div>
    </section>
  );
}
