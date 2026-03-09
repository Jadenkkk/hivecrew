import { useState, useEffect, useCallback } from 'react';
import { T } from './i18n';
import Intro from './components/Intro';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import Creators from './components/Creators';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import WhyHive from './components/WhyHive';
import CTA from './components/CTA';
import Footer from './components/Footer';

// App — root component managing language state, scroll listener, and IntersectionObserver
// [변경] Intro 스플래시 추가: introVisible 상태로 인트로 표시/숨김 제어
// 순서: Intro → Nav → Hero → Ticker → Creators → About → Services → Portfolio → WhyHive → CTA → Footer
export default function App() {
  const [lang, setLang] = useState('en');
  const [introVisible, setIntroVisible] = useState(true);
  const t = T[lang];

  const handleIntroDone = useCallback(() => setIntroVisible(false), []);

  // Update <html lang="..."> when language changes (mirrors original setLang behaviour)
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  // IntersectionObserver — adds .show to .f-in elements when they enter viewport
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('show');
        });
      },
      { threshold: 0.06 }
    );

    // Observe all .f-in elements present after render
    const els = document.querySelectorAll('.f-in');
    els.forEach((el) => io.observe(el));

    return () => io.disconnect();
  // Re-run when language changes so newly rendered .f-in elements are observed
  }, [lang]);

  return (
    <>
      {/* [변경] 인트로 스플래시: 처음 한 번만 재생, 끝나면 onDone 콜백으로 숨김 */}
      {introVisible && <Intro onDone={handleIntroDone} />}
      <Nav t={t} />
      <Hero t={t} />
      <Ticker t={t} />
      {/* [변경] Creators 추가 — 인플루언서 쇼케이스 */}
      <Creators />
      <About t={t} />
      <Services t={t} />
      {/* [변경] Portfolio 추가 — 브랜드 캠페인 케이스 */}
      <Portfolio />
      <WhyHive t={t} />
      <CTA t={t} />
      <Footer />
    </>
  );
}
