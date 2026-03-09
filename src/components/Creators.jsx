// Creators — Sandbox-style creator showcase
// [변경] 호버 오버레이 방식으로 재작성: 기본엔 이미지만, hover시 정보 슬라이드업

// [변경] 더미 사진: randomuser.me 포트레이트 이미지 사용 (헬스/피트니스 느낌의 인물 선택)
const creators = [
  { name: 'Kim Jisoo',    handle: '@jisoo.fit',       followers: '280K', engagement: '4.2%', category: 'Fitness',  photo: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { name: 'Park Minjun',  handle: '@minjun.wellness', followers: '195K', engagement: '5.1%', category: 'Wellness', photo: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { name: 'Lee Soyeon',   handle: '@soyeon.yoga',     followers: '340K', engagement: '3.8%', category: 'Yoga',     photo: 'https://randomuser.me/api/portraits/women/65.jpg' },
  { name: 'Choi Hyunwoo', handle: '@hyunwoo.lift',    followers: '420K', engagement: '3.5%', category: 'Strength', photo: 'https://randomuser.me/api/portraits/men/75.jpg' },
  { name: 'Jung Yuna',    handle: '@yuna.pilates',    followers: '165K', engagement: '6.2%', category: 'Pilates',  photo: 'https://randomuser.me/api/portraits/women/90.jpg' },
  { name: 'Han Seungho',  handle: '@seungho.run',     followers: '210K', engagement: '4.7%', category: 'Running',  photo: 'https://randomuser.me/api/portraits/men/55.jpg' },
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

      {/* [변경] 호버 오버레이 방식 카드: 기본엔 이미지 영역만 표시, 호버시 정보 슬라이드업 */}
      <div className="creators-grid">
        {creators.map((c) => (
          <div className="creator-card f-in" key={c.handle}>
            {/* [변경] 배경 이미지: randomuser.me 포트레이트 사진 */}
            <div className="creator-img" style={{ backgroundImage: `url(${c.photo})`, backgroundSize: 'cover', backgroundPosition: 'center top' }}>
              {/* 카테고리 뱃지 — 기본 표시 */}
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
