// Process — four-step horizontal grid on warm background
export default function Process({ t }) {
  return (
    <section className="s s-warm">
      <span className="eyebrow f-in">{t['pr.ey']}</span>
      <h2 className="h2 f-in d1">{t['pr.title']}</h2>
      <div className="process-grid">
        <div className="step f-in d1">
          <div className="step-arr">›</div>
          <span className="step-n">01</span>
          <div className="step-t">{t['st1.t']}</div>
          <div className="step-d">{t['st1.d']}</div>
        </div>
        <div className="step f-in d2">
          <div className="step-arr">›</div>
          <span className="step-n">02</span>
          <div className="step-t">{t['st2.t']}</div>
          <div className="step-d">{t['st2.d']}</div>
        </div>
        <div className="step f-in d3">
          <div className="step-arr">›</div>
          <span className="step-n">03</span>
          <div className="step-t">{t['st3.t']}</div>
          <div className="step-d">{t['st3.d']}</div>
        </div>
        <div className="step f-in d4">
          {/* Last step has no arrow in original */}
          <span className="step-n">04</span>
          <div className="step-t">{t['st4.t']}</div>
          <div className="step-d">{t['st4.d']}</div>
        </div>
      </div>
    </section>
  );
}
