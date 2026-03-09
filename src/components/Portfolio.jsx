// Portfolio — brand x creator campaign showcase with 4 dummy campaign cards
// [변경] 신규 생성: 브랜드 스폰서십 캠페인 포트폴리오 섹션

const campaigns = [
  { brand: 'NutriPro SG', creator: '@jisoo.fit', type: 'Protein Supplement', result: '2.4M Impressions', bg: 'linear-gradient(135deg, #f0ebe2 0%, #e0d9cc 100%)' },
  { brand: 'ActiveWear TH', creator: '@hyunwoo.lift', type: 'Sportswear', result: '1.8M Impressions', bg: 'linear-gradient(135deg, #e2e8f0 0%, #ccd6e0 100%)' },
  { brand: 'ZenLife CN', creator: '@soyeon.yoga', type: 'Wellness App', result: '3.1M Impressions', bg: 'linear-gradient(135deg, #e8f0e2 0%, #d2e0cc 100%)' },
  { brand: 'RunFast ID', creator: '@seungho.run', type: 'Running Gear', result: '1.2M Impressions', bg: 'linear-gradient(135deg, #f0e8e2 0%, #e0d2cc 100%)' },
];

export default function Portfolio() {
  return (
    <section className="s s-warm" id="portfolio">
      {/* [변경] 섹션 상단: eyebrow + h2 */}
      <div className="portfolio-top f-in">
        <span className="eyebrow">Portfolio</span>
        <h2 className="h2">Brand × <em>Creator</em><br />Campaigns</h2>
      </div>

      {/* [변경] 2열 캠페인 카드 그리드 */}
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
