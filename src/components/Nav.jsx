import { useState, useEffect } from 'react';

// Nav — fixed top bar with scroll shadow effect and dark hero support
export default function Nav({ t }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // [변경] on-dark 클래스 상시 추가 — hero가 dark gradient이므로 항상 필요
  // scrolled 상태에서는 on-dark.scrolled CSS가 light 스타일로 override함
  return (
    <nav className={`on-dark${scrolled ? ' scrolled' : ''}`}>
      <a href="#" className="nav-logo">HIVE<i>.</i></a>
      <div className="nav-links">
        <a href="#about">{t['n.about']}</a>
        <a href="#creators">{t['n.creators']}</a>
        <a href="#services">{t['n.services']}</a>
        <a href="#why">{t['n.why']}</a>
        <a href="#contact">{t['n.contact']}</a>
      </div>
    </nav>
  );
}
