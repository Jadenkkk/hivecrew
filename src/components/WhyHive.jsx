// WhyHive — two-column section: numbered reasons left, quote block right
export default function WhyHive({ t }) {
  return (
    <section className="s s-white" id="why">
      <div className="why-layout">
        <div>
          <span className="eyebrow f-in">{t['wy.ey']}</span>
          {/* wy.title contains <br> and <em> — use dangerouslySetInnerHTML */}
          <h2
            className="h2 f-in d1"
            dangerouslySetInnerHTML={{ __html: t['wy.title'] }}
          />
          <div className="why-list">
            <div className="why-row f-in d1">
              <span className="why-n">01</span>
              <div>
                <div className="why-t">{t['w1.t']}</div>
                <div className="why-d">{t['w1.d']}</div>
              </div>
            </div>
            <div className="why-row f-in d2">
              <span className="why-n">02</span>
              <div>
                <div className="why-t">{t['w2.t']}</div>
                <div className="why-d">{t['w2.d']}</div>
              </div>
            </div>
            <div className="why-row f-in d3">
              <span className="why-n">03</span>
              <div>
                <div className="why-t">{t['w3.t']}</div>
                <div className="why-d">{t['w3.d']}</div>
              </div>
            </div>
            <div className="why-row f-in d4">
              <span className="why-n">04</span>
              <div>
                <div className="why-t">{t['w4.t']}</div>
                <div className="why-d">{t['w4.d']}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="why-right f-in d2">
          <div className="quote-block">
            <span className="q-mark">"</span>
            <p className="q-text">{t['wy.q']}</p>
            <div className="q-stats">
              <div className="qs">
                <div className="qs-n">10K<em>+</em></div>
                <div className="qs-l">{t['qs1']}</div>
              </div>
              <div className="qs">
                <div className="qs-n">100<em>%</em></div>
                <div className="qs-l">{t['qs2']}</div>
              </div>
              <div className="qs">
                <div className="qs-n">3</div>
                <div className="qs-l">{t['qs3']}</div>
              </div>
              <div className="qs">
                <div className="qs-n">SEA<em>↔</em></div>
                <div className="qs-l">{t['qs4']}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
