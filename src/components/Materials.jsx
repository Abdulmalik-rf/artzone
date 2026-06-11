import { useI18n } from '../i18n.jsx'
import { waLink } from '../lib/wa.js'
import './Materials.css'

export default function Materials() {
  const { t } = useI18n()
  const { chips } = t.materials

  return (
    <section id="materials" className="mt">
      <div className="mt-dots halftone halftone--cyan" aria-hidden="true" />

      <div className="container">
        <div className="mt-head">
          <div className="mt-head-copy">
            <span className="kicker" data-reveal>
              {t.materials.kicker}
            </span>
            <h2 className="sec-title" data-reveal style={{ transitionDelay: '60ms' }}>
              {t.materials.title}
            </h2>
            <p className="sec-sub" data-reveal style={{ transitionDelay: '120ms' }}>
              {t.materials.sub}
            </p>
          </div>

          <span className="mt-range mono" data-reveal style={{ transitionDelay: '180ms' }} aria-hidden="true">
            {chips[0].code} · {chips[chips.length - 1].code}
          </span>
        </div>

        <ul className="mt-grid">
          {chips.map((chip, i) => (
            <li
              key={chip.code}
              className="mt-cell"
              data-reveal
              style={{ transitionDelay: `${Math.min(120 + i * 45, 480)}ms` }}
            >
              <article className="mt-chip">
                <div className={`mt-swatch mt-swatch--${i + 1}`} aria-hidden="true" />
                <div className="mt-chip-body">
                  <span className="mt-chip-code mono">{chip.code}</span>
                  <h3 className="mt-chip-name">{chip.name}</h3>
                  <p className="mt-chip-spec mono">{chip.spec}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <div className="mt-foot" data-reveal>
          <span className="mt-foot-line" aria-hidden="true" />
          <span className="mt-scissor" aria-hidden="true">
            &#9986;
          </span>
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn btn--ghost mt-cta">
            {t.materials.cta}
          </a>
        </div>
      </div>
    </section>
  )
}
