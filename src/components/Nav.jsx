import { useState, useEffect } from 'react';

// Nav — fixed top bar with scroll shadow effect and language switcher
export default function Nav({ lang, setLang, t }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <a href="#" className="nav-logo">HIVE<i>.</i></a>
      <div className="nav-links">
        <a href="#about">{t['n.about']}</a>
        <a href="#services">{t['n.services']}</a>
        <a href="#why">{t['n.why']}</a>
        <a href="#contact">{t['n.contact']}</a>
        <div className="lang-pill">
          <button
            className={`lang-btn${lang === 'en' ? ' active' : ''}`}
            onClick={() => setLang('en')}
          >
            EN
          </button>
          <button
            className={`lang-btn${lang === 'ko' ? ' active' : ''}`}
            onClick={() => setLang('ko')}
          >
            한국어
          </button>
        </div>
      </div>
    </nav>
  );
}
