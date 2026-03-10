// About → Business — sandbox 스타일 2패널 + 라인별 텍스트 슬라이드업 애니메이션
// [변경] 배경 이미지 추가: biz1.png (Creator Partnership), biz2.png (Marketing Solutions)
import biz1 from '../assets/biz1.png';
import biz2 from '../assets/biz2.png';

export default function About({ t }) {
  return (
    <section className="biz-section" id="about">
      {/* 섹션 eyebrow */}
      <div className="biz-header f-in">
        <span className="eyebrow">{t['biz.ey']}</span>
      </div>

      {/* 2패널 그리드 */}
      <div className="biz-grid">
        {/* 패널 01 — biz1.png 배경 */}
        <div className="biz-panel f-in" style={{ backgroundImage: `url(${biz1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          {/* [변경] 타이틀 라인별 슬라이드업: wrap(overflow:hidden) > line(translateY) */}
          <h2 className="biz-title">
            {t['biz.1t'].split('\n').map((line, i) => (
              <span key={i} className="biz-title-wrap">
                <span className="biz-title-line" style={{ transitionDelay: `${0.1 + i * 0.12}s` }}>
                  {line}
                </span>
              </span>
            ))}
          </h2>

          {/* 설명 — 페이드업 딜레이 */}
          <p className="biz-desc">{t['biz.1d']}</p>
          <span className="biz-label">Creator Partnership</span>
        </div>

        {/* 패널 02 — biz2.png 배경 */}
        <div className="biz-panel f-in" style={{ backgroundImage: `url(${biz2})`, backgroundSize: 'cover', backgroundPosition: 'center', '--panel-delay': '0.15s' }}>
          <h2 className="biz-title">
            {t['biz.2t'].split('\n').map((line, i) => (
              <span key={i} className="biz-title-wrap">
                <span className="biz-title-line" style={{ transitionDelay: `${0.25 + i * 0.12}s` }}>
                  {line}
                </span>
              </span>
            ))}
          </h2>

          <p className="biz-desc">{t['biz.2d']}</p>
          <span className="biz-label">Marketing Solutions</span>
        </div>
      </div>
    </section>
  );
}
