import { useI18n } from '../i18n.jsx'
import { WA_DISPLAY, PHONE_HREF, MAPS_URL, MAPS_EMBED, waLink } from '../lib/wa.js'
import './Contact.css'

function WaGlyph({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  )
}

export default function Contact() {
  const { t } = useI18n()
  const c = t.contactPage

  const channelMeta = {
    wa: { value: WA_DISPLAY, ltr: true, href: waLink(), newTab: true, btnClass: 'btn--wa' },
    call: { value: WA_DISPLAY, ltr: true, href: PHONE_HREF, newTab: false, btnClass: 'btn--ink' },
    visit: { value: t.contact.address, ltr: false, href: MAPS_URL, newTab: true, btnClass: 'btn--ghost' },
  }

  return (
    <div className="cn">
      {/* ---------- page hero ---------- */}
      <section className="cn-hero">
        <div className="cn-dots halftone halftone--magenta" aria-hidden="true" />
        <div className="container">
          <p className="kicker" data-reveal>
            {c.kicker}
          </p>
          <h1 className="cn-title" data-reveal style={{ transitionDelay: '60ms' }}>
            {c.title}
          </h1>
          <p className="sec-sub" data-reveal style={{ transitionDelay: '120ms' }}>
            {c.sub}
          </p>
        </div>
      </section>

      {/* ---------- channels ---------- */}
      <section className="cn-channels-band">
        <div className="container">
          <div className="cn-channels">
            {c.channels.map((ch, i) => {
              const meta = channelMeta[ch.key]
              return (
                <article
                  key={ch.key}
                  className="cn-channel"
                  data-reveal
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <span className="cn-channel-label mono">
                    <i className="cn-channel-dot" aria-hidden="true" />
                    {ch.label}
                  </span>
                  <p className="cn-channel-value" dir={meta.ltr ? 'ltr' : undefined}>
                    {meta.value}
                  </p>
                  <p className="cn-channel-hint">{ch.hint}</p>
                  <a
                    href={meta.href}
                    className={`btn ${meta.btnClass} cn-channel-cta`}
                    {...(meta.newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {ch.key === 'wa' && <WaGlyph />}
                    {ch.cta}
                  </a>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* ---------- map + quote nudge ---------- */}
      <section className="cn-map-band">
        <div className="container cn-map-grid">
          <div className="cn-mapcol" data-reveal>
            <div className="cn-mapwrap cropmarks">
              <iframe
                className="cn-map"
                src={MAPS_EMBED}
                title={t.contact.address}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>

          <div className="cn-side">
            <div className="cn-nudge" data-reveal style={{ transitionDelay: '80ms' }}>
              <div className="cmyk-bar" aria-hidden="true">
                <i /><i /><i /><i />
              </div>
              <div className="cn-nudge-body">
                <h2 className="cn-nudge-title">{c.quoteNudge.title}</h2>
                <p className="cn-nudge-sub">{c.quoteNudge.sub}</p>
                <a href="#quote" className="btn btn--ink cn-nudge-cta">
                  {c.quoteNudge.cta}
                </a>
              </div>
            </div>

            <div className="cn-address" data-reveal style={{ transitionDelay: '140ms' }}>
              <span className="cn-address-label mono">{t.contact.addressLabel}</span>
              <p className="cn-address-value">{t.contact.address}</p>
              <a className="cn-maplink" href={MAPS_URL} target="_blank" rel="noopener noreferrer">
                {t.contact.mapCta}
                <svg className="cn-arrow" viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
                  <path
                    d="M2 8h11M9 3.5 13.5 8 9 12.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="square"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="cn-faq-band">
        <div className="container">
          <p className="kicker" data-reveal>
            {c.faqKicker}
          </p>
          <h2 className="sec-title" data-reveal style={{ transitionDelay: '50ms' }}>
            {c.faqTitle}
          </h2>

          <div className="cn-faq" data-reveal style={{ transitionDelay: '100ms' }}>
            {c.faq.map((item, i) => (
              <details key={i} className="cn-q">
                <summary className="cn-q-summary">
                  <span className="cn-q-no mono">0{i + 1}</span>
                  <span className="cn-q-text">{item.q}</span>
                </summary>
                <p className="cn-q-answer">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
