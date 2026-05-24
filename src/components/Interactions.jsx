import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/* ══════════════════════════════════════════════════════
   CURSOR RING — desktop custom cursor with hover state
══════════════════════════════════════════════════════ */
export function CursorRing() {
  const [hover, setHover] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 30, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 500, damping: 30, mass: 0.3 });

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return;

    const onMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const onOver = (e) => {
      const t = e.target;
      if (t.closest && t.closest('a, button, [data-cursor-hover], .port-tile, .home-port-card, .product-card, .nav-link, .filter-btn')) {
        setHover(true);
      } else {
        setHover(false);
      }
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
    };
  }, [x, y]);

  return (
    <motion.div
      className={`cursor-ring${hover ? ' hover' : ''}`}
      style={{ x: springX, y: springY }}
      aria-hidden="true"
    />
  );
}

/* ══════════════════════════════════════════════════════
   MAGNETIC — magnetic hover effect for buttons/CTAs
══════════════════════════════════════════════════════ */
export function Magnetic({ children, strength = 0.35, className, style }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 18 });
  const springY = useSpring(y, { stiffness: 200, damping: 18 });

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return;
    const el = ref.current;
    if (!el) return;
    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) * strength;
      const dy = (e.clientY - cy) * strength;
      x.set(dx);
      y.set(dy);
    };
    const onLeave = () => {
      x.set(0);
      y.set(0);
    };
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [strength, x, y]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x: springX, y: springY, ...style, display: 'inline-block' }}
    >
      {children}
    </motion.div>
  );
}

/* ══════════════════════════════════════════════════════
   MARQUEE — infinite horizontal scrolling band
══════════════════════════════════════════════════════ */
export function Marquee({ items, speed = 32 }) {
  // Duplicate items so the loop is seamless
  const loop = [...items, ...items];
  return (
    <div className="marquee">
      <div className="marquee-track" style={{ animationDuration: `${speed}s` }}>
        {loop.map((item, i) => (
          <span key={i} className="marquee-item">{item}</span>
        ))}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════
   SPLIT TEXT — letter-by-letter reveal animation
══════════════════════════════════════════════════════ */
// Detects RTL/Arabic so we don't shatter cursive letters that must remain connected.
const ARABIC_TEST = /[؀-ۿݐ-ݿࢠ-ࣿﭐ-﷿ﹰ-﻿]/;

export function SplitText({ text, delay = 0, stagger = 0.025, className, as = 'span' }) {
  const Component = motion[as] || motion.span;
  const str = String(text);
  const isArabic = ARABIC_TEST.test(str);
  const words = str.split(' ');

  // Arabic / RTL: render plain text with a single fade — Arabic is cursive and must flow naturally
  if (isArabic) {
    return (
      <motion.span
        className={className}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay, ease: [0.22, 0.8, 0.32, 1] }}
      >
        {str}
      </motion.span>
    );
  }

  return (
    <Component
      className={className}
      style={{ display: 'inline-block' }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      {words.map((word, wi) => (
        <span key={wi} style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'top' }}>
          {word.split('').map((char, ci) => (
            <motion.span
              key={ci}
              style={{ display: 'inline-block' }}
              variants={{
                hidden: { y: '105%', opacity: 0 },
                show:   { y: '0%',  opacity: 1 },
              }}
              transition={{
                duration: 0.7,
                delay: delay + (wi * 0.06) + (ci * stagger),
                ease: [0.22, 0.8, 0.32, 1],
              }}
            >
              {char}
            </motion.span>
          ))}
          {wi < words.length - 1 && <span style={{ display: 'inline-block' }}>&nbsp;</span>}
        </span>
      ))}
    </Component>
  );
}

/* ══════════════════════════════════════════════════════
   TICKER COUNTER — animated number count-up on view
══════════════════════════════════════════════════════ */
export function TickerCounter({ value, prefix = '', suffix = '', duration = 1.6, className }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);
  const numericValue = typeof value === 'number' ? value : parseFloat(String(value).replace(/[^\d.]/g, ''));

  useEffect(() => {
    if (!ref.current) return;
    let observer;
    let raf;
    const start = () => {
      const startTime = performance.now();
      const tick = (now) => {
        const t = Math.min((now - startTime) / (duration * 1000), 1);
        const eased = 1 - Math.pow(1 - t, 3);
        setDisplay(Math.floor(numericValue * eased));
        if (t < 1) raf = requestAnimationFrame(tick);
        else setDisplay(numericValue);
      };
      raf = requestAnimationFrame(tick);
    };
    observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          start();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(ref.current);
    return () => {
      if (observer) observer.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [numericValue, duration]);

  const formatted = display.toLocaleString();
  return (
    <span ref={ref} className={className}>
      {prefix}{formatted}{suffix}
    </span>
  );
}

/* ══════════════════════════════════════════════════════
   PARALLAX IMAGE — translates Y as user scrolls
══════════════════════════════════════════════════════ */
export function ParallaxImage({ src, alt, className, strength = 60, style }) {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return;
    if (!ref.current) return;
    const onScroll = () => {
      const rect = ref.current.getBoundingClientRect();
      const vh = window.innerHeight;
      if (rect.bottom < 0 || rect.top > vh) return;
      const center = rect.top + rect.height / 2;
      const fromCenter = (center - vh / 2) / vh;
      setOffset(-fromCenter * strength);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [strength]);

  return (
    <div ref={ref} className={className} style={{ overflow: 'hidden', ...style }}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        style={{
          transform: `translateY(${offset}px) scale(1.15)`,
          transition: 'transform 0.08s linear',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
    </div>
  );
}
