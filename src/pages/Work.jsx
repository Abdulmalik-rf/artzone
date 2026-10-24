import { useI18n } from '../i18n.jsx'
import { useHref } from '../router.jsx'
import { GALLERY } from '../data/gallery.js'
import './Work.css'

/* Wall items are real photographed jobs (see src/data/gallery.js), captioned
   with their JOB code unless they carry a named product label (e.g. canvas
   art prints). Equipment shots live on the About page. */

export default function Work() {
  const { t, lang } = useI18n()
  const href = useHref()

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
              AZ-ARCHIVE / {GALLERY.length}
            </span>
          </div>
        </div>
      </section>

      <section className="gl-wall-band">
        <div className="container">
          <div className="gl-wall">
            {GALLERY.map((item, i) => {
              const code = `${t.gallery.jobLabel} ${String(i + 1).padStart(2, '0')}`
              const caption = item.label ? item.label[lang] : code
              const cat = !item.label && item.service ? t.gallery.cats[item.service] : null
              return (
                <figure
                  key={item.file}
                  className="gl-piece"
                  data-reveal
                  style={{ transitionDelay: `${Math.min(i % 9, 6) * 50}ms` }}
                >
                  <span className="gl-frame">
                    <img
                      src={`/img/work/${item.file}.webp`}
                      alt={item.alt[lang]}
                      width={item.w}
                      height={item.h}
                      className="gl-img"
                      loading={i > 1 ? 'lazy' : 'eager'}
                      decoding="async"
                    />
                  </span>
                  <figcaption
                    className={`gl-code${item.label ? ' gl-code--label' : ' mono'}`}
                    dir={item.label ? 'rtl' : 'ltr'}
                  >
                    <i className="gl-dot" aria-hidden="true" />
                    {item.label && item.service ? (
                      <a href={href(`/services/${item.service}/`)} className="gl-cat">
                        {caption}
                      </a>
                    ) : (
                      caption
                    )}
                    {cat && (
                      <>
                        <span className="gl-sep" aria-hidden="true">·</span>
                        <a href={href(`/services/${item.service}/`)} className="gl-cat" dir="auto">
                          {cat}
                        </a>
                      </>
                    )}
                  </figcaption>
                </figure>
              )
            })}
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
          <a href={href('#quote')} className="btn btn--ink gl-ready-cta" data-reveal>
            {t.gallery.ready.cta}
          </a>
        </div>
      </section>
    </div>
  )
}
