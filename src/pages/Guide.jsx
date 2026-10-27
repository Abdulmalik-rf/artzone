import { useI18n } from '../i18n.jsx'
import { useHref, useRoute } from '../router.jsx'
import { waLink } from '../lib/wa.js'
import { getGuide, guideCover } from '../data/guides.js'
import { getService } from '../data/services.js'
import NotFound from './NotFound.jsx'
import './Guide.css'

/* one body block: { h } | { p } | { ul } | { table } */
function Block({ b }) {
  if (b.h) return <h2 className="ga-h2">{b.h}</h2>
  if (b.p) return <p className="ga-p">{b.p}</p>
  if (b.ul)
    return (
      <ul className="ga-ul">
        {b.ul.map((li) => (
          <li key={li}>{li}</li>
        ))}
      </ul>
    )
  if (b.table)
    return (
      <div className="ga-table-wrap">
        <table className="ga-table">
          <thead>
            <tr>
              {b.table.head.map((th) => (
                <th key={th} scope="col">
                  {th}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {b.table.rows.map((row) => (
              <tr key={row[0]}>
                {row.map((td, i) => (i === 0 ? <th key={i} scope="row">{td}</th> : <td key={i}>{td}</td>))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  return null
}

export default function Guide() {
  const { t, lang } = useI18n()
  const { slug } = useRoute()
  const href = useHref()
  const g = getGuide(slug)
  if (!g) return <NotFound />

  const c = g[lang]
  const ui = t.guideUi
  const cover = guideCover(g)
  const services = g.services.map(getService).filter(Boolean)
  const date = (iso) =>
    new Date(`${iso}T12:00:00Z`).toLocaleDateString(lang === 'ar' ? 'ar-SA-u-ca-gregory-nu-latn' : 'en-GB', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'UTC',
    })

  return (
    <article className="ga">
      <header className="ga-hero">
        <div className="ga-dots halftone halftone--magenta" aria-hidden="true" />
        <div className="container ga-narrow">
          <nav className="ga-crumbs mono" aria-label={ui.guides}>
            <a href={href('/')}>{ui.home}</a>
            <span aria-hidden="true">/</span>
            <a href={href('/guides/')}>{ui.guides}</a>
          </nav>
          <h1 className="ga-title">{c.h1}</h1>
          <p className="ga-meta mono">
            <span>{ui.byline}</span>
            <span aria-hidden="true">·</span>
            <span>
              {ui.updated}: <time dateTime={g.updated} suppressHydrationWarning>
                {date(g.updated)}
              </time>
            </span>
          </p>
          <p className="ga-summary">{c.summary}</p>
        </div>
      </header>

      <div className="container ga-narrow">
        <figure className="ga-figure">
          <img
            src={cover.src}
            srcSet={`${cover.small} 768w, ${cover.src} 1280w`}
            sizes="(max-width: 860px) calc(100vw - 52px), 800px"
            alt={cover.alt[lang]}
            width={cover.w}
            height={cover.h}
            className="ga-img"
            decoding="async"
          />
          <figcaption className="ga-fig-note mono">{ui.illustrative}</figcaption>
        </figure>
      </div>

      <div className="container ga-narrow ga-body">
        {c.blocks.map((b, i) => (
          <Block key={i} b={b} />
        ))}

        <section className="ga-faq" aria-labelledby="ga-faq-title">
          <h2 className="ga-h2" id="ga-faq-title">
            {ui.faq}
          </h2>
          {c.faq.map((f) => (
            <div key={f.q} className="ga-qa">
              <h3 className="ga-q">{f.q}</h3>
              <p className="ga-a">{f.a}</p>
            </div>
          ))}
        </section>

        <section className="ga-services" aria-labelledby="ga-svc-title">
          <h2 className="ga-h2" id="ga-svc-title">
            {ui.services}
          </h2>
          <ul className="ga-svc-list">
            {services.map((s) => (
              <li key={s.slug}>
                <a href={href(`/services/${s.slug}/`)} className="ga-svc">
                  <span className="ga-svc-name">{s[lang].name}</span>
                  <span className="ga-svc-short">{s[lang].short}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <a
          href={waLink(`${ui.waMsg} ${c.h1}`)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--wa ga-cta"
        >
          {ui.ctaWa}
        </a>
      </div>
    </article>
  )
}
