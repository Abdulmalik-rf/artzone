import { useI18n } from '../i18n.jsx'
import { WA_DISPLAY, PHONE_HREF, MAPS_URL } from '../lib/wa.js'
import { CR_NUMBER, VAT_NUMBER } from '../lib/business.js'
import { useHref } from '../router.jsx'
import './Footer.css'

export default function Footer() {
  const { t } = useI18n()
  const href = useHref()
  const year = new Date().getFullYear()

  return (
    <footer className="ft">
      <div className="cmyk-bar" aria-hidden="true">
        <i /><i /><i /><i />
      </div>

      <div className="container">
        <div className="ft-grid">
          <div className="ft-brand">
            <a href={href('/')} className="ft-id">
              <img src="/logo.webp" alt="Art Zone Printing" width="46" height="46" className="ft-logo" loading="lazy" />
              <span className="ft-wordmark">
                {t.brand.name} <i className="mono">{t.brand.tag}</i>
              </span>
            </a>
            <p className="ft-line">{t.footer.line}</p>
            {/* name / address / phone, identical on every page. The {' '}
                spaces don't show in the column layout, but keep the lines
                apart when search engines read the text as a snippet. */}
            <address className="ft-nap">
              <strong className="ft-nap-name">{t.footer.napName}</strong>{' '}
              <span>{t.contact.address}</span>{' '}
              <a href={PHONE_HREF} dir="ltr" className="ft-nap-phone mono">
                {WA_DISPLAY}
              </a>{' '}
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="ft-nap-map">
                {t.contact.mapCta}
              </a>
            </address>
          </div>

          <nav className="ft-nav" aria-label={t.nav.menuLabel}>
            {t.nav.footerLinks.map(([to, label], i) => (
              <a key={to} href={href(to)} className="ft-link">
                <span className="ft-no mono">0{i + 1}</span>
                {label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="ft-top mono"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <svg viewBox="0 0 16 16" width="13" height="13" aria-hidden="true">
              <path
                d="M8 14V2M3.5 6.5 8 2l4.5 4.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="square"
              />
            </svg>
            {t.footer.backToTop}
          </button>
        </div>

        <div className="ft-rule">
          <p className="ft-copy">
            © <span suppressHydrationWarning>{year}</span> {t.footer.rights}
          </p>
          <p className="ft-reg">
            {t.footer.cr} <span className="mono" dir="ltr">{CR_NUMBER}</span>
            <span aria-hidden="true"> · </span>
            {t.footer.vat} <span className="mono" dir="ltr">{VAT_NUMBER}</span>
          </p>
          <a className="ft-phone mono" href={PHONE_HREF} dir="ltr">
            {WA_DISPLAY}
          </a>
        </div>
      </div>
    </footer>
  )
}
