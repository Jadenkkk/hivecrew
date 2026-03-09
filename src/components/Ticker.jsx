// Ticker — horizontally scrolling marquee strip between Hero and About
export default function Ticker({ t }) {
  // Items are duplicated in the DOM (like the original) to create a seamless loop
  const keys = ['tk.1', 'tk.2', 'tk.3', 'tk.4', 'tk.5', 'tk.6'];

  return (
    <div className="ticker">
      <div className="ticker-track">
        {/* First set */}
        {keys.map((k) => (
          <span key={`a-${k}`} className="ticker-item">
            <span className="ticker-dot"></span>
            <span>{t[k]}</span>
          </span>
        ))}
        {/* Duplicate set for seamless loop */}
        {keys.map((k) => (
          <span key={`b-${k}`} className="ticker-item">
            <span className="ticker-dot"></span>
            <span>{t[k]}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
