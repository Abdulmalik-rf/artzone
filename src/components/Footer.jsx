import { Link } from 'react-router-dom';
import { Phone, Mail, ShieldCheck, Truck, Award } from 'lucide-react';
import { WhatsAppIcon } from './WhatsApp';
import useLanguage from '../i18n/useLanguage';
import './Footer.css';

const Footer = () => {
  const t = useLanguage(s => s.t);
  const lang = useLanguage(s => s.lang);

  const bandEyebrow = lang === 'ar' ? '✦ هل نبدأ مشروعك؟' : '✦ Shall we begin?';
  const bandLine = lang === 'ar' ? (<>دعنا نبني علامة تجارية <em>تستحق</em> الطباعة.</>) : (<>Let's build a brand <em>worth printing</em>.</>);
  const ctaPrimary = lang === 'ar' ? 'تواصل عبر واتساب' : 'WhatsApp the press';
  const ctaSecondary = lang === 'ar' ? 'صفحة التواصل' : 'Visit contact page';

  return (
    <footer className="footer">
      {/* ── Editorial top band ── */}
      <div className="footer-band">
        <p className="footer-band-eyebrow">{bandEyebrow}</p>
        <h2 className="footer-band-headline">{bandLine}</h2>
        <div className="footer-band-actions">
          <a href="https://wa.me/966535738136" target="_blank" rel="noopener noreferrer" className="btn btn-wa">
            <WhatsAppIcon size={18} /> {ctaPrimary}
          </a>
          <Link to="/contact" className="btn btn-ghost-light">{ctaSecondary}</Link>
        </div>
      </div>

      <div className="footer-content">
        <div className="footer-col">
          <div className="footer-brand">
            <img src="/logo-full.webp?v=2" alt="Art Zone Printing" />
          </div>
          <p>{t('footer.description')}</p>
          <div className="footer-seals">
            <span className="footer-seal"><span className="footer-seal-dot" /><ShieldCheck size={11} /> Secure</span>
            <span className="footer-seal"><span className="footer-seal-dot" /><Truck size={11} /> KSA Shipping</span>
            <span className="footer-seal"><span className="footer-seal-dot" /><Award size={11} /> 8+ yrs</span>
          </div>
        </div>

        <div className="footer-col">
          <h4>{t('footer.quickLinks')}</h4>
          <Link to="/">{t('footer.home')}</Link>
          <Link to="/portfolio">{t('footer.portfolio')}</Link>
          <Link to="/built-for-you">{t('nav.builtForYou')}</Link>
          <Link to="/about">{t('footer.about')}</Link>
          <Link to="/contact">{t('footer.contact')}</Link>
        </div>

        <div className="footer-col">
          <h4>{t('footer.contact')}</h4>
          <a href="https://wa.me/966535738136" target="_blank" rel="noopener noreferrer" className="contact-link">
            <WhatsAppIcon size={15} />
            <span>{t('nav.whatsappUs')}</span>
          </a>
          <a href="tel:+966535738136" className="contact-link">
            <Phone size={15} />
            <span>+966 53 573 8136</span>
          </a>
          <a href="mailto:info@artzone.sa" className="contact-link">
            <Mail size={15} />
            <span>info@artzone.sa</span>
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>© {new Date().getFullYear()} · {t('footer.allRightsReserved')}</p>
          <div className="footer-bottom-links">
            <Link to="/about">{t('footer.about')}</Link>
            <Link to="/contact">{t('footer.contact')}</Link>
            <Link to="/portfolio">{t('footer.portfolio')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
