import { useI18n } from '../i18n.jsx'
import { useHref } from '../router.jsx'
import './NotFound.css'

export default function NotFound() {
  const { t } = useI18n()
  const href = useHref()
  const n = t.notFound

  return (
    <div className="nf">
      <section className="nf-hero">
        <div className="nf-dots halftone halftone--magenta" aria-hidden="true" />
        <div className="container">
          <p className="kicker mono">{n.kicker}</p>
          <h1 className="nf-title">{n.title}</h1>
          <p className="sec-sub">{n.sub}</p>
          <nav className="nf-links" aria-label={n.kicker}>
            {n.links.map(([to, label], i) => (
              <a key={to} href={href(to)} className={`btn ${i === 0 ? 'btn--ink' : 'btn--ghost'}`}>
                {label}
              </a>
            ))}
          </nav>
        </div>
      </section>
    </div>
  )
}
