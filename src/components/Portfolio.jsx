// Portfolio — brand x creator campaign showcase
// [변경] 모든 텍스트를 i18n.js에서 관리 (t prop으로 전달)

const CAMPAIGN_BG = [
  'linear-gradient(135deg, #f0ebe2 0%, #e0d9cc 100%)',
  'linear-gradient(135deg, #e2e8f0 0%, #ccd6e0 100%)',
  'linear-gradient(135deg, #e8f0e2 0%, #d2e0cc 100%)',
  'linear-gradient(135deg, #f0e8e2 0%, #e0d2cc 100%)',
];

export default function Portfolio({ t }) {
  const campaigns = [1, 2, 3, 4].map((n, i) => ({
    brand:   t[`pf${n}.brand`],
    creator: t[`pf${n}.creator`],
    type:    t[`pf${n}.type`],
    result:  t[`pf${n}.result`],
    bg:      CAMPAIGN_BG[i],
  }));

  return (
    <section className="s s-warm" id="portfolio">
      {/* 섹션 상단: eyebrow + h2 */}
      <div className="portfolio-top f-in">
        <span className="eyebrow">{t['pf.ey']}</span>
        <h2 className="h2" dangerouslySetInnerHTML={{ __html: t['pf.title'] }} />
      </div>

      {/* 2열 캠페인 카드 그리드 */}
      <div className="portfolio-grid">
        {campaigns.map((c) => (
          <div className="portfolio-card f-in" key={c.brand}>
            {/* 카드 이미지 영역: gradient 배경 + 캠페인 타입 뱃지 */}
            <div className="portfolio-img" style={{ background: c.bg }}>
              <span className="portfolio-type">{c.type}</span>
            </div>
            <div className="portfolio-info">
              <div>
                <div className="portfolio-brand">{c.brand}</div>
                <div className="portfolio-creator">{c.creator}</div>
              </div>
              <div className="portfolio-result">{c.result}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
