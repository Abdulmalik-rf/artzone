import { useI18n } from '../i18n.jsx'
import './Work.css'

/* curated order: real photographed jobs only — no digital mockups,
   no stock renders. Equipment shots (p75-p79) live on the About page. */
const WALL = [
  'p80', 'p85', 'p5', 'p86', 'p81', 'p18', 'p87', 'p88', 'p19', 'p82',
  'p89', 'p1', 'p83', 'p84', 'p20', 'p4', 'p33', 'p34', 'p29', 'p36',
  'p37',
]

export default function Work() {
  const { t } = useI18n()

  return (
    <div className="gl">
      <section className="gl-hero">
        <div className="gl-dots halftone" aria-hidden="true" />
        <svg className="gl-reg" viewBox="0 0 44 44" aria-hidden="true">
          <circle cx="22" cy="22" r="13" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="22" cy="22" r="3.5" fill="currentColor" />
          <path d="M22 1v10M22 33v10M1 22h10M33 22h10" stroke="currentColor" strokeWidth="1.5" />
        </svg>

        <div className="container">
          <p className="kicker" data-reveal>
            {t.gallery.kicker}
          </p>
          <h1 className="gl-title" data-reveal style={{ transitionDelay: '60ms' }}>
            {t.gallery.title}
          </h1>
          <div className="gl-sub-row" data-reveal style={{ transitionDelay: '120ms' }}>
            <p className="sec-sub gl-sub">{t.gallery.sub}</p>
            <span className="gl-plate mono" dir="ltr">
              AZ-ARCHIVE / {WALL.length}
            </span>
          </div>
        </div>
      </section>

      <section className="gl-wall-band">
        <div className="container">
          <div className="gl-wall">
            {WALL.map((id, i) => (
              <figure
                key={id}
                className="gl-piece"
                data-reveal
                style={{ transitionDelay: `${Math.min(i % 9, 6) * 50}ms` }}
              >
                <span className="gl-frame">
                  <img
                    src={`./img/portfolio/${id}.jpeg`}
                    alt={`${t.gallery.jobLabel} ${String(i + 1).padStart(2, '0')}`}
                    className="gl-img"
                    loading="lazy"
                  />
                </span>
                <figcaption className="gl-code mono" dir="ltr">
                  <i className="gl-dot" aria-hidden="true" />
                  {t.gallery.jobLabel} {String(i + 1).padStart(2, '0')}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="gl-ready">
        <div className="cmyk-bar" aria-hidden="true">
          <i /><i /><i /><i />
        </div>
        <div className="container gl-ready-inner">
          <div data-reveal>
            <h2 className="gl-ready-title">{t.gallery.ready.title}</h2>
            <p className="gl-ready-sub">{t.gallery.ready.sub}</p>
          </div>
          <a href="#quote" className="btn btn--ink gl-ready-cta" data-reveal>
            {t.gallery.ready.cta}
          </a>
        </div>
      </section>
    </div>
  )
}
