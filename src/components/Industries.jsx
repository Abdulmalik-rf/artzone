import { useI18n } from '../i18n.jsx'
import './Industries.css'

export default function Industries() {
  const { t } = useI18n()

  return (
    <section id="industries" className="nd">
      <div className="nd-dots halftone" aria-hidden="true" />

      <div className="container">
        <header className="nd-head">
          <div className="nd-head-copy">
            <span className="kicker" data-reveal>
              {t.industries.kicker}
            </span>
            <h2 className="sec-title" data-reveal style={{ transitionDelay: '60ms' }}>
              {t.industries.title}
            </h2>
            <p className="sec-sub" data-reveal style={{ transitionDelay: '120ms' }}>
              {t.industries.sub}
            </p>
          </div>

          <div
            className="nd-plate mono"
            data-reveal
            style={{ transitionDelay: '180ms' }}
            aria-hidden="true"
          >
            <svg className="nd-reg" viewBox="0 0 24 24" width="20" height="20">
              <circle cx="12" cy="12" r="7" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <path d="M12 1v22M1 12h22" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="12" cy="12" r="2.4" fill="currentColor" />
            </svg>
            <span>AZ-IND/06</span>
          </div>
        </header>

        <ol className="nd-ledger">
          {t.industries.items.map((item, i) => (
            <li
              key={i}
              className="nd-entry"
              data-reveal
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="nd-row">
                <span className="nd-no mono" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                  <i className="nd-chip" />
                </span>
                <div className="nd-body">
                  <h3 className="nd-name">{item.name}</h3>
                  <p className="nd-desc">{item.desc}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
