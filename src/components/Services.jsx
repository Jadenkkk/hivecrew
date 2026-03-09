// Services — three-column service cards reframed for brand sponsorship
// [변경] 콘텐츠 재작성: 기존 엔터테인먼트 → 브랜드 스폰서십 / 인플루언서 매칭 방향으로 변경
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
        {/* [변경] 서비스 1: 인플루언서 매칭 */}
        <div className="svc f-in">
          <span className="svc-n">01</span>
          <span className="svc-ico">🎯</span>
          <div
            className="svc-title"
            dangerouslySetInnerHTML={{ __html: t['s1.t'] }}
          />
          <div className="svc-body">{t['s1.b']}</div>
        </div>
        {/* [변경] 서비스 2: 콘텐츠 제작 */}
        <div className="svc f-in d1">
          <span className="svc-n">02</span>
          <span className="svc-ico">🎬</span>
          <div
            className="svc-title"
            dangerouslySetInnerHTML={{ __html: t['s2.t'] }}
          />
          <div className="svc-body">{t['s2.b']}</div>
        </div>
        {/* [변경] 서비스 3: 캠페인 관리 */}
        <div className="svc f-in d2">
          <span className="svc-n">03</span>
          <span className="svc-ico">📊</span>
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
