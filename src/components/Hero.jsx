import { useI18n } from '../i18n.jsx'
import { waLink } from '../lib/wa.js'
import './Hero.css'

/* press registration mark (crosshair + circle) */
function RegMark({ className }) {
  return (
    <svg className={className} viewBox="0 0 44 44" aria-hidden="true" focusable="false">
      <circle cx="22" cy="22" r="13" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="22" cy="22" r="3.5" fill="currentColor" />
      <path d="M22 1v10M22 33v10M1 22h10M33 22h10" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

export default function Hero() {
  const { t } = useI18n()
  const { showcase, stats } = t.hero

  return (
    <section id="top" className="hr">
      {/* background print-craft decorations */}
      <div className="hr-dots halftone" aria-hidden="true" />
      <RegMark className="hr-reg hr-reg--a" />
      <RegMark className="hr-reg hr-reg--b" />

      <div className="container hr-inner">
        <div className="hr-grid">
          {/* ---- copy column ---- */}
          <div className="hr-copy">
            <p className="kicker" data-reveal>
              {t.hero.kicker}
            </p>

            <h1 className="hr-title" data-reveal style={{ transitionDelay: '70ms' }}>
              <span className="hr-title-line">{t.hero.titleA}</span>
              <span className="hr-title-line hr-title-mark">{t.hero.titleB}</span>
            </h1>

            <p className="hr-sub" data-reveal style={{ transitionDelay: '140ms' }}>
              {t.hero.sub}
            </p>

            <div className="hr-ctas" data-reveal style={{ transitionDelay: '210ms' }}>
              <a href="#quote" className="btn btn--ink">
                {t.hero.ctaQuote}
              </a>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--wa"
              >
                {t.hero.ctaWa}
              </a>
            </div>
          </div>

          {/* ---- branded product showcase column ---- */}
          <div className="hr-show-wrap" data-reveal style={{ transitionDelay: '130ms' }}>
            <div className="hr-show-dots halftone halftone--cyan" aria-hidden="true" />

            <figure className="hr-show cropmarks">
              <img
                src="./img/hero-products.webp"
                alt={showcase.alt}
                className="hr-show-img"
                fetchPriority="high"
              />
              <span className="hr-stamp mono">{showcase.stamp}</span>
            </figure>
          </div>
        </div>

        {/* ---- stats band ---- */}
        <div className="hr-stats-band" data-reveal style={{ transitionDelay: '260ms' }}>
          <hr className="cutline hr-stats-cut" />
          <div className="hr-stats">
            {stats.map(([num, label]) => (
              <div className="hr-stat" key={label}>
                <span className="hr-stat-num mono">{num}</span>
                <span className="hr-stat-label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
