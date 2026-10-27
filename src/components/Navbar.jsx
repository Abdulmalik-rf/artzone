import { useEffect, useState } from 'react'
import { useI18n } from '../i18n.jsx'
import { waLink } from '../lib/wa.js'
import { useHref } from '../router.jsx'
import './Navbar.css'

export default function Navbar() {
  const { t, toggle } = useI18n()
  const href = useHref()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`nb ${scrolled ? 'nb--scrolled' : ''}`}>
      <div className="container nb-row">
        <a href={href('/')} className="nb-brand" onClick={() => setOpen(false)}>
          <img src="/logo.webp" alt="Art Zone Printing" width="58" height="58" className="nb-logo" />
          <span className="nb-wordmark">
            {t.brand.name} <i className="mono">{t.brand.tag}</i>
          </span>
        </a>

        <nav className="nb-links" aria-label={t.nav.menuLabel}>
          {t.nav.links.map(([to, label]) => (
            <a key={to} href={href(to)} className="nb-link">
              {label}
            </a>
          ))}
        </nav>

        <div className="nb-actions">
          <button className="nb-lang mono" onClick={toggle} aria-label={t.nav.langLabel}>
            {t.nav.langLabel}
          </button>
          <a href={href('#quote')} className="btn btn--ink nb-cta">
            {t.nav.quote}
          </a>
          <button
            className={`nb-burger ${open ? 'is-open' : ''}`}
            onClick={() => setOpen(!open)}
            aria-label={t.nav.menuLabel}
            aria-expanded={open}
          >
            <i />
            <i />
            <i />
          </button>
        </div>
      </div>

      <div className={`nb-drawer ${open ? 'is-open' : ''}`}>
        {t.nav.links.map(([to, label], i) => (
          <a key={to} href={href(to)} className="nb-drawer-link" style={{ '--i': i }} onClick={() => setOpen(false)}>
            <span className="mono nb-drawer-no">0{i + 1}</span>
            {label}
          </a>
        ))}
        <div className="nb-drawer-foot">
          <a href={href('#quote')} className="btn btn--ink" onClick={() => setOpen(false)}>
            {t.nav.quote}
          </a>
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn btn--wa">
            {t.nav.whatsapp}
          </a>
        </div>
      </div>

      <div className="cmyk-bar nb-bar" aria-hidden="true">
        <i /><i /><i /><i />
      </div>
    </header>
  )
}
