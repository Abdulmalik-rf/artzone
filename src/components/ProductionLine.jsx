import { useI18n } from '../i18n.jsx'
import './ProductionLine.css'

/* station accents cycle like process plates: C → M → Y → C → M */
const ACCENTS = ['c', 'm', 'y']

function PlRegMark({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="13" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="24" cy="24" r="2.4" fill="currentColor" />
      <path d="M24 1v9M24 38v9M1 24h9M38 24h9" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

export default function ProductionLine() {
  const { t } = useI18n()

  return (
    <section id="production" className="pl">
      <div className="pl-dots" aria-hidden="true" />
      <PlRegMark className="pl-reg pl-reg--end" />
      <PlRegMark className="pl-reg pl-reg--start" />

      <div className="container">
        <header className="pl-head">
          <div className="pl-head-copy" data-reveal>
            <p className="kicker pl-kicker">{t.line.kicker}</p>
            <h2 className="sec-title pl-title">{t.line.title}</h2>
          </div>
          <span
            className="mono pl-code"
            dir="ltr"
            aria-hidden="true"
            data-reveal
            style={{ transitionDelay: '120ms' }}
          >
            AZ-LINE / 05
          </span>
        </header>

        <ol className="pl-track">
          {t.line.steps.map((step, i) => (
            <li
              key={step.no}
              className={`pl-station pl-station--${ACCENTS[i % ACCENTS.length]}`}
              data-reveal
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              {i > 0 && <span className="pl-arrow" aria-hidden="true" />}
              <span className="pl-node mono">{step.no}</span>
              <article className="pl-card">
                <h3 className="pl-name">{step.name}</h3>
                <p className="pl-desc">{step.desc}</p>
              </article>
            </li>
          ))}
        </ol>

        <div className="pl-foot" data-reveal>
          <p className="pl-note mono">
            <span className="pl-note-mark" aria-hidden="true">✱</span>
            <span className="pl-note-txt">{t.line.sub}</span>
          </p>
        </div>
      </div>
    </section>
  )
}
