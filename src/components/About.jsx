// About — two-column section: pillars on left, stat blocks on right
export default function About({ t }) {
  return (
    <section className="s s-white" id="about">
      <div className="about-layout">
        <div className="about-left">
          <span className="eyebrow f-in">{t['ab.ey']}</span>
          {/* ab.title contains <br> and <em> tags — use dangerouslySetInnerHTML */}
          <h2
            className="h2 f-in d1"
            dangerouslySetInnerHTML={{ __html: t['ab.title'] }}
          />
          <p className="lead f-in d2">{t['ab.lead']}</p>
          <div className="about-pillars f-in d3">
            <div className="pillar">
              <span className="pillar-icon">🇰🇷</span>
              <div>
                <div className="pillar-name">{t['p1.n']}</div>
                <div className="pillar-desc">{t['p1.d']}</div>
              </div>
            </div>
            <div className="pillar">
              <span className="pillar-icon">🌏</span>
              <div>
                <div className="pillar-name">{t['p2.n']}</div>
                <div className="pillar-desc">{t['p2.d']}</div>
              </div>
            </div>
            <div className="pillar">
              <span className="pillar-icon">⚡</span>
              <div>
                <div className="pillar-name">{t['p3.n']}</div>
                <div className="pillar-desc">{t['p3.d']}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-right f-in d2">
          <div className="stat-block">
            <div className="stat-n">10K+</div>
            {/* st.1 contains <br> — use dangerouslySetInnerHTML */}
            <div className="stat-l" dangerouslySetInnerHTML={{ __html: t['st.1'] }} />
          </div>
          <div className="stat-block gold-bg">
            <div className="stat-n">SEA</div>
            <div className="stat-l" dangerouslySetInnerHTML={{ __html: t['st.2'] }} />
          </div>
          <div className="stat-block">
            <div className="stat-n">3</div>
            <div className="stat-l" dangerouslySetInnerHTML={{ __html: t['st.3'] }} />
          </div>
          <div className="stat-block">
            <div className="stat-n">KR</div>
            <div className="stat-l" dangerouslySetInnerHTML={{ __html: t['st.4'] }} />
          </div>
        </div>
      </div>
    </section>
  );
}
