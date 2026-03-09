import { useState, useEffect } from 'react';
import { T } from './i18n';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import About from './components/About';
import Services from './components/Services';
import WhyHive from './components/WhyHive';
import Process from './components/Process';
import CTA from './components/CTA';
import Footer from './components/Footer';

// App — root component managing language state, scroll listener, and IntersectionObserver
export default function App() {
  const [lang, setLang] = useState('en');
  const t = T[lang];

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
      <Nav lang={lang} setLang={setLang} t={t} />
      <Hero t={t} />
      <Ticker t={t} />
      <About t={t} />
      <Services t={t} />
      <WhyHive t={t} />
      <Process t={t} />
      <CTA t={t} />
      <Footer />
    </>
  );
}
