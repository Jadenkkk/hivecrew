// Creators — Sandbox-style creator showcase
// [변경] curtain-reveal: 커튼(검정 블록)이 위로 올라가며 사진 드러남 + 지그재그 순차 등장

import creator1 from '../assets/creator1.png';
import creator2 from '../assets/creator2.png';
import creator3 from '../assets/creator3.png';
import creator4 from '../assets/creator4.png';

const creators = [
  { name: 'Kim Sungmin',  handle: '@sungmin.fit',    followers: '420K', engagement: '3.9%', category: 'Fitness',  photo: creator1, pos: 'center top' },
  { name: 'Park Jiyeon',  handle: '@jiyeon.strong',  followers: '340K', engagement: '4.8%', category: 'Strength', photo: creator2, pos: 'center center' },
  { name: 'Lee Haerin',   handle: '@haerin.active',  followers: '280K', engagement: '5.6%', category: 'Sports',   photo: creator3, pos: 'center top' },
  { name: 'Choi Woobin',  handle: '@woobin.lift',    followers: '510K', engagement: '3.5%', category: 'Fitness',  photo: creator4, pos: 'center top' },
];

export default function Creators() {
  return (
    <section className="s s-white" id="creators">
      {/* 섹션 헤더 */}
      <div className="creators-top">
        <span className="eyebrow f-in">Our Creators</span>
        <h2 className="h2 f-in d1">Korea's <em>Finest</em><br />Health Creators</h2>
        <p className="lead f-in d2">
          From yoga studios to lifting platforms — Korea's most trusted health and wellness voices.
        </p>
      </div>

      {/* [변경] curtain-reveal 카드: 스크롤 시 검정 커튼이 위로 올라가며 사진 등장 */}
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
                    <span>Followers</span>
                  </div>
                  <div className="creator-stat-divider" />
                  <div className="creator-stat">
                    <strong>{c.engagement}</strong>
                    <span>Engagement</span>
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
