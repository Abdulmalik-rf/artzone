import { useI18n } from '../i18n.jsx'
import { useHref } from '../router.jsx'
import { GUIDES } from '../data/guides.js'
import './Guides.css'

export default function Guides() {
  const { t, lang } = useI18n()
  const href = useHref()
  const p = t.guidesPage
  const arrow = lang === 'ar' ? '←' : '→'

  return (
    <div className="gd">
      <section className="gd-hero">
        <div className="gd-dots halftone halftone--cyan" aria-hidden="true" />
        <div className="container">
          <p className="kicker" data-reveal>
            {p.kicker}
          </p>
          <h1 className="gd-title" data-reveal style={{ transitionDelay: '60ms' }}>
            {p.title}
          </h1>
          <p className="sec-sub" data-reveal style={{ transitionDelay: '120ms' }}>
            {p.sub}
          </p>
        </div>
      </section>

      <section className="gd-list-band">
        <div className="container gd-list">
          {GUIDES.map((g, i) => (
            <a
              key={g.slug}
              href={href(`/guides/${g.slug}/`)}
              className="gd-card"
              data-reveal
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <span className="gd-no mono">G-{String(i + 1).padStart(2, '0')}</span>
              <h2 className="gd-name">{g[lang].h1}</h2>
              <span className="gd-summary">{g[lang].summary}</span>
              <span className="gd-cta mono">
                {p.readMore} {arrow}
              </span>
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}
