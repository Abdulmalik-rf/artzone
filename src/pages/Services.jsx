import { useI18n } from '../i18n.jsx'
import { useHref } from '../router.jsx'
import { waLink } from '../lib/wa.js'
import { SERVICES, SLUG_BY_CAP } from '../data/services.js'
import { photoByFile } from '../data/gallery.js'
import './Services.css'

export default function Services() {
  const { t, lang } = useI18n()
  const href = useHref()
  const p = t.servicesPage
  /* capabilities without their own page yet (events, consulting, books…) */
  const more = t.caps.items.filter((item) => !SLUG_BY_CAP[item.tag])
  const arrow = lang === 'ar' ? '←' : '→'

  return (
    <div className="sv">
      <section className="sv-hero">
        <div className="sv-dots halftone" aria-hidden="true" />
        <div className="container">
          <p className="kicker" data-reveal>
            {p.kicker}
          </p>
          <h1 className="sv-title" data-reveal style={{ transitionDelay: '60ms' }}>
            {p.title}
          </h1>
          <p className="sec-sub sv-sub" data-reveal style={{ transitionDelay: '120ms' }}>
            {p.sub}
          </p>
        </div>
      </section>

      <section className="sv-grid-band">
        <div className="container sv-grid">
          {SERVICES.map((s, i) => {
            const c = s[lang]
            const photo = s.images[0] ? photoByFile(s.images[0]) : null
            return (
              <a
                key={s.slug}
                href={href(`/services/${s.slug}/`)}
                className="sv-card"
                data-reveal
                style={{ transitionDelay: `${(i % 4) * 60}ms` }}
              >
                <span className="sv-frame">
                  {photo ? (
                    <img
                      src={photo.src}
                      alt={photo.alt[lang]}
                      width={photo.w}
                      height={photo.h}
                      className="sv-img"
                      loading={i > 3 ? 'lazy' : 'eager'}
                      decoding="async"
                    />
                  ) : (
                    <span className="sv-img sv-img--plate halftone halftone--magenta" aria-hidden="true">
                      <span className="mono">AZ-{String(i + 1).padStart(2, '0')}</span>
                    </span>
                  )}
                  {photo?.illustrative && (
                    <span className="sv-img-note mono">{t.guideUi.illustrative}</span>
                  )}
                </span>
                <span className="sv-body">
                  <span className="sv-no mono">{String(i + 1).padStart(2, '0')}</span>
                  <h2 className="sv-name">{c.name}</h2>
                  <span className="sv-short">{c.short}</span>
                  <span className="sv-cta mono">{p.cardCta} {arrow}</span>
                </span>
              </a>
            )
          })}
        </div>
      </section>

      <section className="sv-more-band">
        <div className="container">
          <h2 className="sec-title" data-reveal>
            {p.moreTitle}
          </h2>
          <p className="sec-sub" data-reveal>
            {p.moreSub}
          </p>
          <ul className="sv-more">
            {more.map((item) => (
              <li key={item.tag} className="sv-more-item" data-reveal>
                <h3 className="sv-more-name">{item.name}</h3>
                <p className="sv-more-desc">{item.desc}</p>
                <a
                  href={waLink(`${t.serviceUi.waMsg} ${item.name}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sv-more-link mono"
                >
                  {t.nav.whatsapp} {arrow}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
