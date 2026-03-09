import { useEffect, useState } from 'react';

// Intro — fullscreen splash that plays once on load, then fades out to reveal the site
// Phase 1 (0–800ms):   logo fades + scales in
// Phase 2 (800–1400ms): logo stays visible
// Phase 3 (1400–2000ms): logo fades + scales up out
// Phase 4 (2000–2600ms): overlay fades out
export default function Intro({ onDone }) {
  const [phase, setPhase] = useState('enter'); // 'enter' | 'hold' | 'exit' | 'done'

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('hold'), 800);
    const t2 = setTimeout(() => setPhase('exit'), 1600);
    const t3 = setTimeout(() => { setPhase('done'); onDone(); }, 2600);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onDone]);

  if (phase === 'done') return null;

  return (
    <div className={`intro-overlay intro-${phase}`}>
      <div className="intro-logo">
        HIVE<i>.</i>
      </div>
      <div className="intro-line" />
    </div>
  );
}
