// Creators — Sandbox-style creator showcase
// [변경] curtain-reveal: 커튼(검정 블록)이 위로 올라가며 사진 드러남 + 지그재그 순차 등장
// [변경] 모든 텍스트를 i18n.js에서 관리 (t prop으로 전달)

import creator1 from '../assets/creator1.png';
import creator2 from '../assets/creator2.png';
import creator3 from '../assets/creator3.png';
import creator4 from '../assets/creator4.png';

const CREATOR_PHOTOS = [
  { photo: creator1, pos: 'center top' },
  { photo: creator2, pos: 'center center' },
  { photo: creator3, pos: 'center top' },
  { photo: creator4, pos: 'center top' },
];

export default function Creators({ t }) {
  const creators = [1, 2, 3, 4].map((n, i) => ({
    name:       t[`cr${n}.name`],
    handle:     t[`cr${n}.handle`],
    followers:  t[`cr${n}.followers`],
    engagement: t[`cr${n}.engagement`],
    category:   t[`cr${n}.category`],
    ...CREATOR_PHOTOS[i],
  }));

  return (
    <section className="s s-white" id="creators">
      {/* 섹션 헤더 */}
      <div className="creators-top">
        <span className="eyebrow f-in">{t['cr.ey']}</span>
        <h2 className="h2 f-in d1" dangerouslySetInnerHTML={{ __html: t['cr.title'] }} />
        <p className="lead f-in d2">{t['cr.lead']}</p>
      </div>

      {/* [변경] curtain-reveal 카드: 스크롤 시 커튼이 위로 올라가며 사진 등장 */}
      <div className="creators-grid">
        {creators.map((c) => (
          <div className="creator-card f-in" key={c.handle}>
            <div className="creator-img-wrap">
              {/* 커튼: 처음엔 카드 전체를 덮음 → .show 시 위로 슬라이드 아웃 */}
              <div className="creator-curtain" />

              {/* 배경 사진: 커튼이 올라가면 드러남 */}
              <div
                className="creator-bg"
                style={{
                  backgroundImage: `url(${c.photo})`,
                  backgroundSize: 'cover',
                  backgroundPosition: c.pos,
                }}
              />

              {/* 카테고리 뱃지 */}
              <span className="creator-category">{c.category}</span>

              {/* 호버 오버레이 — 아래서 슬라이드업 */}
              <div className="creator-overlay">
                <div className="creator-overlay-name">{c.name}</div>
                <div className="creator-overlay-handle">{c.handle}</div>
                <div className="creator-overlay-stats">
                  <div className="creator-stat">
                    <strong>{c.followers}</strong>
                    <span>{t['cr.followers']}</span>
                  </div>
                  <div className="creator-stat-divider" />
                  <div className="creator-stat">
                    <strong>{c.engagement}</strong>
                    <span>{t['cr.engagement']}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
