// Footer — minimal three-column bar: logo, copyright, Instagram handle
// [변경] 모든 텍스트를 i18n.js에서 관리 (t prop으로 전달)
export default function Footer({ t }) {
  return (
    <footer>
      <div className="f-logo">HIVE<i>.</i></div>
      <div className="f-copy">{t['ft.copy']}</div>
      <div className="f-ig">
        <a
          href="https://www.instagram.com/hivecrew.official/"
          target="_blank"
          rel="noreferrer"
        >
          {t['ft.ig']}
        </a>
      </div>
    </footer>
  );
}
