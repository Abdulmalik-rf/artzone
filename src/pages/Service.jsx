import { useI18n } from '../i18n.jsx'
import { useHref, useRoute } from '../router.jsx'
import { waLink } from '../lib/wa.js'
import { getService } from '../data/services.js'
import { photoByFile } from '../data/gallery.js'
import NotFound from './NotFound.jsx'
import './Service.css'

export default function Service() {
  const { t, lang } = useI18n()
  const { slug } = useRoute()
  const href = useHref()
  const s = getService(slug)
  if (!s) return <NotFound />

  const c = s[lang]
  const ui = t.serviceUi
  const photos = s.images.map(photoByFile).filter(Boolean)
  const related = s.related.map(getService).filter(Boolean)

  return (
    <div className="sd">
      {/* ---------- hero ---------- */}
      <section className="sd-hero">
        <div className="sd-dots halftone halftone--cyan" aria-hidden="true" />
        <div className="container">
          <nav className="sd-crumbs mono" aria-label={ui.services}>
            <a href={href('/')}>{ui.home}</a>
            <span aria-hidden="true">/</span>
            <a href={href('/services/')}>{ui.services}</a>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{c.name}</span>
          </nav>
          <h1 className="sd-title" data-reveal>
            {c.h1}
          </h1>
          <p className="sd-lead" data-reveal style={{ transitionDelay: '60ms' }}>
            {c.summary}
          </p>
          <div className="sd-ctas" data-reveal style={{ transitionDelay: '120ms' }}>
            <a
              href={waLink(`${ui.waMsg} ${c.name}`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--wa"
            >
              {ui.ctaWa}
            </a>
            <a href={href('#quote')} className="btn btn--ghost">
              {ui.ctaQuote}
            </a>
          </div>
        </div>
      </section>

      {/* ---------- real job photos ---------- */}
      {photos.length > 0 && (
        <section className="sd-photos-band" aria-label={ui.photos}>
          <div className="container">
            <div className={`sd-photos sd-photos--${Math.min(photos.length, 4)}`}>
              {photos.map((p, i) => (
                <figure key={p.file} className="sd-photo" data-reveal style={{ transitionDelay: `${i * 70}ms` }}>
                  <img
                    src={`/img/work/${p.file}.webp`}
                    alt={p.alt[lang]}
                    width={p.w}
                    height={p.h}
                    className="sd-photo-img"
                    loading={i > 1 ? 'lazy' : 'eager'}
                    decoding="async"
                  />
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ---------- spec sheet ---------- */}
      <section className="sd-specs-band">
        <div className="container sd-specs">
          {[
            ['options', c.options],
            ['materials', c.materials],
            ['audience', c.audience],
          ].map(([key, items], i) => (
            <article key={key} className="sd-spec" data-reveal style={{ transitionDelay: `${i * 70}ms` }}>
              <div className="cmyk-bar sd-spec-bar" aria-hidden="true">
                <i /><i /><i /><i />
              </div>
              <div className="sd-spec-body">
                <h2 className="sd-spec-title">{ui[key]}</h2>
                <ul className="sd-spec-list">
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ---------- ordering steps ---------- */}
      <section className="sd-process-band">
        <div className="container">
          <h2 className="sec-title sd-h2" data-reveal>
            {ui.process}
          </h2>
          <ol className="sd-steps">
            {ui.processSteps.map((step, i) => (
              <li key={step} className="sd-step" data-reveal style={{ transitionDelay: `${i * 60}ms` }}>
                <span className="sd-step-no mono">S{i + 1}</span>
                <span className="sd-step-text">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="sd-faq-band">
        <div className="container">
          <h2 className="sec-title sd-h2" data-reveal>
            {ui.faq}
          </h2>
          <div className="sd-faq" data-reveal>
            {c.faq.map((item, i) => (
              <details key={item.q} className="sd-q" open={i === 0}>
                <summary className="sd-q-summary">
                  <span className="sd-q-no mono">0{i + 1}</span>
                  <span className="sd-q-text">{item.q}</span>
                </summary>
                <p className="sd-q-answer">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- related ---------- */}
      <section className="sd-related-band">
        <div className="container">
          <h2 className="sec-title sd-h2" data-reveal>
            {ui.related}
          </h2>
          <div className="sd-related">
            {related.map((r, i) => (
              <a
                key={r.slug}
                href={href(`/services/${r.slug}/`)}
                className="sd-rel"
                data-reveal
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <span className="sd-rel-name">{r[lang].name}</span>
                <span className="sd-rel-short">{r[lang].short}</span>
                <span className="sd-rel-arrow mono" aria-hidden="true">
                  →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="sd-ready">
        <div className="cmyk-bar" aria-hidden="true">
          <i /><i /><i /><i />
        </div>
        <div className="container sd-ready-inner">
          <div data-reveal>
            <h2 className="sd-ready-title">{ui.ready.title}</h2>
            <p className="sd-ready-sub">{ui.ready.sub}</p>
          </div>
          <a
            href={waLink(`${ui.waMsg} ${c.name}`)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--wa sd-ready-cta"
            data-reveal
          >
            {ui.ctaWa}
          </a>
        </div>
      </section>
    </div>
  )
}
