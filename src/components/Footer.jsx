import { useI18n } from '../i18n.jsx'
import { WA_DISPLAY, PHONE_HREF } from '../lib/wa.js'
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
                {t.brand.name}<i className="mono">{t.brand.tag}</i>
              </span>
            </a>
            <p className="ft-line">{t.footer.line}</p>
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
          <a className="ft-phone mono" href={PHONE_HREF} dir="ltr">
            {WA_DISPLAY}
          </a>
        </div>
      </div>
    </footer>
  )
}
