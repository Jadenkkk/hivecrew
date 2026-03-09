// Footer — minimal three-column bar: logo, copyright, Instagram handle
export default function Footer() {
  return (
    <footer>
      <div className="f-logo">HIVE<i>.</i></div>
      <div className="f-copy">© 2024 HIVE Studio. All rights reserved.</div>
      <div className="f-ig">
        <a
          href="https://www.instagram.com/hivecrew.official/"
          target="_blank"
          rel="noreferrer"
        >
          @hivecrew.official
        </a>
      </div>
    </footer>
  );
}
