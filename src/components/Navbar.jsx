import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { WhatsAppIcon } from './WhatsApp';
import { useState, useEffect } from 'react';
import useLanguage from '../i18n/useLanguage';
import { getAssetUrl } from '../utils/paths';
import './Navbar.css';

const NAV_LINKS = [
  { to: '/',              key: 'nav.home' },
  { to: '/about',         key: 'nav.aboutUs' },
  { to: '/built-for-you', key: 'nav.builtForYou' },
  { to: '/portfolio',     key: 'nav.portfolio' },
  { to: '/contact',       key: 'nav.contactUs' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const t = useLanguage(s => s.t);
  const lang = useLanguage(s => s.lang);
  const toggleLang = useLanguage(s => s.toggleLang);

  useEffect(() => { setIsMenuOpen(false); }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        {/* Left — logo */}
        <Link to="/" className="header-logo">
          <img src={getAssetUrl('/logo.webp?v=2')} alt="Art Zone Logo" />
          <span className="header-logo-mark">Art&nbsp;Zone</span>
        </Link>

        {/* Center — desktop nav */}
        <nav className="desktop-nav" aria-label="Main navigation">
          {NAV_LINKS.map(({ to, key }) => (
            <Link
              key={to}
              to={to}
              className={`nav-link ${location.pathname === to ? 'active' : ''}`}
            >
              {t(key)}
            </Link>
          ))}
        </nav>

        {/* Right — actions */}
        <div className="header-right">
          <a
            href="https://wa.me/966535738136"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-quote-btn"
          >
            <WhatsAppIcon size={14} />
            {t('nav.whatsappUs')}
          </a>
          <button className="hdr-btn lang-toggle" onClick={toggleLang} aria-label={t('nav.switchLanguage')}>
            <Globe size={18} />
            <span className="lang-label">{lang === 'en' ? 'ع' : 'EN'}</span>
          </button>
          <button className="hdr-btn hamburger" onClick={() => setIsMenuOpen(true)} aria-label={t('nav.toggleMenu')}>
            <Menu size={22} />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {isMenuOpen && (
        <div className="drawer-backdrop" onClick={() => setIsMenuOpen(false)}>
          <nav className="drawer" onClick={e => e.stopPropagation()} aria-label="Mobile navigation">
            <button className="drawer-close" onClick={() => setIsMenuOpen(false)} aria-label={t('nav.closeMenu')}>
              <X size={20} />
            </button>
            {NAV_LINKS.map(({ to, key }) => (
              <Link
                key={to}
                to={to}
                className={`drawer-link ${location.pathname === to ? 'active' : ''}`}
              >
                {t(key)}
              </Link>
            ))}
            <a
              href="https://wa.me/966535738136"
              target="_blank"
              rel="noopener noreferrer"
              className="drawer-cta"
            >
              <WhatsAppIcon size={16} />
              {t('nav.whatsappUs')}
            </a>
            <div className="drawer-foot">
              <p className="drawer-foot-label">{lang === 'ar' ? 'تواصل' : 'Contact'}</p>
              <a href="tel:+966535738136">+966 53 573 8136</a>
              <a href="mailto:info@artzone.sa">info@artzone.sa</a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
