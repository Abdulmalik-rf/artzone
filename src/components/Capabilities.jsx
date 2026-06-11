import { useI18n } from '../i18n.jsx'
import './Capabilities.css'

export default function Capabilities() {
  const { t } = useI18n()

  return (
    <section id="capabilities" className="cp">
      <div className="container">
        <header className="cp-head" data-reveal>
          <div className="cp-dots halftone" aria-hidden="true" />
          <div className="cp-head-text">
            <p className="kicker">{t.caps.kicker}</p>
            <h2 className="sec-title">{t.caps.title}</h2>
            <p className="sec-sub">{t.caps.sub}</p>
          </div>
          <span className="cp-head-code mono" aria-hidden="true">
            AZ·CAT/09
          </span>
        </header>

        <div className="cp-grid">
          {t.caps.items.map((item, i) => (
            <article
              key={item.tag}
              className="cp-card"
              data-reveal
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="cp-sheet">
                <div className="cmyk-bar cp-bar" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                  <i />
                </div>

                <div className="cp-body">
                  <div className="cp-tag-row">
                    <span className="cp-tag mono">{item.tag}</span>
                    <i className="cp-dot" aria-hidden="true" />
                    <span className="cp-rule" aria-hidden="true" />
                  </div>

                  <h3 className="cp-name">{item.name}</h3>
                  <p className="cp-desc">{item.desc}</p>

                  <ul className="cp-specs">
                    {item.specs.map((spec) => (
                      <li key={spec} className="cp-spec mono">
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
