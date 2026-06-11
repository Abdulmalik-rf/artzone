import { useI18n } from '../i18n.jsx'
import './WorkPreview.css'

export default function WorkPreview() {
  const { t } = useI18n()
  const items = t.workPreview.items

  return (
    <section id="work-preview" className="wp">
      <div className="container">
        <div className="wp-head">
          <div>
            <p className="kicker" data-reveal>
              {t.workPreview.kicker}
            </p>
            <h2 className="sec-title" data-reveal style={{ transitionDelay: '0.05s' }}>
              {t.workPreview.title}
            </h2>
            <p className="sec-sub" data-reveal style={{ transitionDelay: '0.1s' }}>
              {t.workPreview.sub}
            </p>
          </div>
          <a href="#/work" className="btn btn--ghost wp-cta" data-reveal>
            {t.workPreview.cta}
          </a>
        </div>

        <div className="wp-grid">
          {items.map((item, i) => (
            <a
              key={item.img}
              href="#/work"
              className="wp-card"
              data-reveal
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="wp-frame cropmarks">
                <img
                  src={`./img/${item.img}`}
                  alt={item.name}
                  className="wp-img"
                  loading="lazy"
                />
              </span>
              <span className="wp-meta">
                <span className="wp-cat mono">{item.cat}</span>
                <span className="wp-name">{item.name}</span>
              </span>
            </a>
          ))}
        </div>

        <a href="#/work" className="btn btn--ghost wp-cta-mobile" data-reveal>
          {t.workPreview.cta}
        </a>
      </div>
    </section>
  )
}
