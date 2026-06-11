import { useI18n } from '../i18n.jsx'
import './About.css'

export default function About() {
  const { t } = useI18n()
  const a = t.about

  return (
    <div className="ab">
      {/* ---------- page hero ---------- */}
      <section className="ab-hero">
        <div className="ab-dots halftone halftone--cyan" aria-hidden="true" />
        <div className="container">
          <p className="kicker" data-reveal>
            {a.kicker}
          </p>
          <h1 className="ab-title" data-reveal style={{ transitionDelay: '60ms' }}>
            {a.title}
          </h1>
          <p className="ab-lead" data-reveal style={{ transitionDelay: '120ms' }}>
            {a.lead}
          </p>
        </div>
      </section>

      {/* ---------- story + wide press image ---------- */}
      <section className="ab-story">
        <div className="container">
          <div className="ab-prose">
            <p data-reveal>{a.p1}</p>
            <p data-reveal style={{ transitionDelay: '80ms' }}>{a.p2}</p>
          </div>

          <figure className="ab-wide cropmarks" data-reveal>
            <img
              src="./img/about-press.webp"
              alt={a.kicker}
              className="ab-wide-img"
              loading="lazy"
            />
          </figure>

          <div className="ab-floor">
            <p className="kicker" data-reveal>
              {a.floorKicker}
            </p>
            <div className="ab-floor-grid">
              {a.photos.map((photo, i) => (
                <figure
                  key={photo.img}
                  className="ab-shot"
                  data-reveal
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <span className="ab-shot-frame">
                    <img
                      src={`./img/${photo.img}`}
                      alt={photo.caption}
                      className="ab-shot-img"
                      loading="lazy"
                    />
                  </span>
                  <figcaption className="ab-shot-cap mono">
                    <i className="ab-shot-dot" aria-hidden="true" />
                    {photo.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- values ---------- */}
      <section className="ab-values-band">
        <div className="container">
          <p className="kicker" data-reveal>
            {a.valuesKicker}
          </p>
          <h2 className="sec-title" data-reveal style={{ transitionDelay: '50ms' }}>
            {a.valuesTitle}
          </h2>

          <div className="ab-values">
            {a.values.map((v, i) => (
              <article
                key={v.name}
                className="ab-value"
                data-reveal
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <span className="ab-value-no mono">
                  0{i + 1}
                  <i className="ab-value-dot" aria-hidden="true" />
                </span>
                <h3 className="ab-value-name">{v.name}</h3>
                <p className="ab-value-desc">{v.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- stats band ---------- */}
      <section className="ab-stats-band">
        <div className="container">
          <hr className="cutline" />
          <div className="ab-stats" data-reveal>
            {t.hero.stats.map(([num, label]) => (
              <div className="ab-stat" key={label}>
                <span className="ab-stat-num mono">{num}</span>
                <span className="ab-stat-label">{label}</span>
              </div>
            ))}
          </div>
          <hr className="cutline" />
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="ab-cta-band">
        <div className="container ab-cta-inner">
          <div data-reveal>
            <h2 className="ab-cta-title">{a.cta.title}</h2>
            <p className="ab-cta-sub">{a.cta.sub}</p>
          </div>
          <div className="ab-cta-actions" data-reveal>
            <a href="#quote" className="btn btn--ink">
              {a.cta.primary}
            </a>
            <a href="#/contact" className="btn btn--ghost">
              {a.cta.secondary}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
