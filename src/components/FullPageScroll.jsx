import { useState, useEffect, useRef, useCallback } from 'react';
import './FullPageScroll.css';

export default function FullPageScroll({ sections }) {
  const [current, setCurrent] = useState(0);
  const currentRef    = useRef(0);
  const transitioning = useRef(false);
  const touchStartY   = useRef(null);
  const total = sections.length;

  const goTo = useCallback((index) => {
    if (transitioning.current || index < 0 || index >= total) return;
    transitioning.current = true;
    currentRef.current = index;
    setCurrent(index);
    setTimeout(() => { transitioning.current = false; }, 900);
  }, [total]);

  useEffect(() => {
    const next = () => goTo(currentRef.current + 1);
    const prev = () => goTo(currentRef.current - 1);

    const onWheel = (e) => {
      e.preventDefault();
      if (e.deltaY > 15)       next();
      else if (e.deltaY < -15) prev();
    };

    const onKey = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') { e.preventDefault(); next(); }
      if (e.key === 'ArrowUp'  || e.key === 'PageUp')   { e.preventDefault(); prev(); }
    };

    const onTouchStart = (e) => { touchStartY.current = e.touches[0].clientY; };
    const onTouchEnd   = (e) => {
      if (touchStartY.current === null) return;
      const diff = touchStartY.current - e.changedTouches[0].clientY;
      if (diff > 50)       next();
      else if (diff < -50) prev();
      touchStartY.current = null;
    };

    window.addEventListener('wheel',      onWheel,      { passive: false });
    window.addEventListener('keydown',    onKey);
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchend',   onTouchEnd,   { passive: true });

    return () => {
      window.removeEventListener('wheel',      onWheel);
      window.removeEventListener('keydown',    onKey);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchend',   onTouchEnd);
    };
  }, [goTo]);

  return (
    <div className="fp-root">
      {/* Sliding track */}
      <div
        className="fp-track"
        style={{ transform: `translateY(calc(-${current} * var(--fp-h)))` }}
      >
        {sections.map((s, i) => (
          <div key={i} className="fp-section">
            {s.content}
          </div>
        ))}
      </div>

      {/* Side navigation dots */}
      <nav className="fp-dots" aria-label="Section navigation">
        {sections.map((s, i) => (
          <button
            key={i}
            className={`fp-dot ${current === i ? 'fp-dot--active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={s.label}
            title={s.label}
          />
        ))}
      </nav>
    </div>
  );
}
