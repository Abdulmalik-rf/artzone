import { Clock, Star, Shield, Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import useLanguage from '../i18n/useLanguage';
import Reveal, { StaggerGroup, StaggerItem } from '../components/Reveal';
import { Magnetic } from '../components/Interactions';
import { WhatsAppIcon } from '../components/WhatsApp';
import { getAssetUrl } from '../utils/paths';
import './Contact.css';

export default function Contact() {
  const t = useLanguage(s => s.t);
  const lang = useLanguage(s => s.lang);

  const heading = lang === 'ar' ? (<>دعنا نطبع <em>قصة علامتك</em>.</>) : (<>Let's print your <em>brand's story</em>.</>);
  const sub = lang === 'ar'
    ? 'يسعدنا تواصلكم. شاركونا تفاصيل المشروع — ملف، صورة مرجعية، أو فكرة — وفريقنا يتكفل بالباقي بكل احترافية.'
    : 'We\'re glad you reached out. Share your brief, a reference image, or a PDF — and our team will handle the rest with full professionalism.';

  return (
    <div className="contact-page">

      {/* ── Hero ── */}
      <section className="contact-hero">
        <div className="contact-hero-inner">
          <div>
            <Reveal>
              <p className="contact-badge">{lang === 'ar' ? 'تواصل معنا' : 'Get in touch'}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="contact-heading">{heading}</h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="contact-sub">{sub}</p>
            </Reveal>
            <Reveal delay={0.3}>
              <Magnetic strength={0.3}>
                <a
                  href="https://wa.me/966535738136"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-hero-cta"
                >
                  <WhatsAppIcon size={18} />
                  {lang === 'ar' ? 'تواصل عبر واتساب' : 'WhatsApp the press'}
                </a>
              </Magnetic>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="contact-trust">
                <span className="ct-chip"><Star size={12} /> 4.9 ★</span>
                <span className="ct-chip"><Shield size={12} /> {lang === 'ar' ? '500+ براند' : '500+ brands'}</span>
                <span className="ct-chip">{lang === 'ar' ? 'منذ 2017' : 'Since 2017'}</span>
                <span className="ct-chip"><MapPin size={12} /> {lang === 'ar' ? 'الدمام · المملكة' : 'Dammam · KSA'}</span>
              </div>
            </Reveal>
          </div>

          <Reveal variant="scale" duration={0.9} className="contact-hero-right">
            <div className="contact-hero-tile">
              <img src={getAssetUrl('/portfolio/p76.jpeg')} alt="Art Zone press" loading="eager" />
            </div>
            <div className="contact-hero-tile">
              <img src={getAssetUrl('/portfolio/p77.jpeg')} alt="Showroom" loading="eager" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── What to Expect ── */}
      <section className="contact-expect">
        <div className="contact-expect-inner">
          <Reveal>
            <p className="ce-label">{lang === 'ar' ? '✦ ما يحدث بعد رسالتك' : '✦ What happens after you reach out'}</p>
          </Reveal>
          <StaggerGroup className="ce-steps" stagger={0.1}>
            <StaggerItem className="ce-step">
              <span className="ce-num">01</span>
              <strong>{lang === 'ar' ? 'الاستلام' : 'We acknowledge'}</strong>
              <span>{lang === 'ar' ? 'تأكيد سريع لرسالتك مع موعد عرض السعر.' : 'Quick confirmation with a quote ETA.'}</span>
            </StaggerItem>
            <StaggerItem className="ce-step">
              <span className="ce-num">02</span>
              <strong>{lang === 'ar' ? 'عرض السعر' : 'We quote'}</strong>
              <span>{lang === 'ar' ? 'سعر ثابت مع خيارات الخامة والكمية.' : 'Fixed pricing with stock & quantity options.'}</span>
            </StaggerItem>
            <StaggerItem className="ce-step">
              <span className="ce-num">03</span>
              <strong>{lang === 'ar' ? 'المعاينة' : 'We proof'}</strong>
              <span>{lang === 'ar' ? 'معاينة رقمية للمراجعة قبل الإنتاج.' : 'Digital proof for sign-off before production.'}</span>
            </StaggerItem>
            <StaggerItem className="ce-step">
              <span className="ce-num">04</span>
              <strong>{lang === 'ar' ? 'التسليم' : 'We deliver'}</strong>
              <span>{lang === 'ar' ? 'يصل في الموعد، مغلف بعناية.' : 'On time, packed properly.'}</span>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </section>

      {/* ── Contact channels ── */}
      <section className="contact-body">
        <Reveal>
          <p className="contact-channels-label">{lang === 'ar' ? '✦ قنوات التواصل' : '✦ Direct channels'}</p>
        </Reveal>
        <div className="contact-cards">
          <a href="https://wa.me/966535738136" target="_blank" rel="noopener noreferrer" className="contact-card contact-card--wa">
            <div className="contact-card-icon"><WhatsAppIcon size={18} /></div>
            <h3>{lang === 'ar' ? 'واتساب' : 'WhatsApp'}</h3>
            <p>{lang === 'ar' ? 'الطريقة الأسرع للتواصل مع الفريق.' : 'The fastest way to reach the team.'}</p>
            <span className="contact-card-action">{lang === 'ar' ? 'افتح المحادثة' : 'Open chat'} <ArrowUpRight size={12} /></span>
          </a>
          <a href="tel:+966535738136" className="contact-card">
            <div className="contact-card-icon"><Phone size={18} /></div>
            <h3>{lang === 'ar' ? 'هاتف' : 'Phone'}</h3>
            <p>+966 53 573 8136</p>
            <span className="contact-card-action">{lang === 'ar' ? 'اتصل الآن' : 'Call now'} <ArrowUpRight size={12} /></span>
          </a>
          <a href="mailto:info@artzone.sa" className="contact-card">
            <div className="contact-card-icon"><Mail size={18} /></div>
            <h3>{lang === 'ar' ? 'بريد إلكتروني' : 'Email'}</h3>
            <p>info@artzone.sa</p>
            <span className="contact-card-action">{lang === 'ar' ? 'اكتب لنا' : 'Write us'} <ArrowUpRight size={12} /></span>
          </a>
          <a href="https://www.google.com/maps/search/?api=1&query=18th+Street%2C+Al+Badiyah%2C+Dammam+32243" target="_blank" rel="noopener noreferrer" className="contact-card">
            <div className="contact-card-icon"><MapPin size={18} /></div>
            <h3>{lang === 'ar' ? 'المصنع' : 'The press'}</h3>
            <p>{lang === 'ar' ? 'شارع 18، البادية، الدمام 32243' : '18th Street, Al Badiyah, Dammam 32243'}</p>
            <span className="contact-card-action">{lang === 'ar' ? 'احصل على الاتجاهات' : 'Get directions'} <ArrowUpRight size={12} /></span>
          </a>
        </div>
      </section>

      {/* ── Map ── */}
      <section className="contact-map-section">
        <Reveal>
          <p className="contact-channels-label" style={{ textAlign: 'center', marginBottom: 32 }}>
            {lang === 'ar' ? '✦ زرنا في المصنع' : '✦ Visit the press'}
          </p>
        </Reveal>
        <Reveal variant="scale" duration={0.9}>
          <div className="contact-map-wrap">
            <iframe
              title="Art Zone press location"
              src="https://www.google.com/maps?q=18th+Street,+Al+Badiyah,+Dammam+32243&hl=en&z=15&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <a
              href="https://www.google.com/maps/search/?api=1&query=18th+Street%2C+Al+Badiyah%2C+Dammam+32243"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-map-card"
            >
              <span className="contact-map-card-eyebrow">{lang === 'ar' ? '✦ المصنع' : '✦ The press'}</span>
              <span className="contact-map-card-title">{lang === 'ar' ? 'آرت زون · الدمام' : 'Art Zone · Dammam'}</span>
              <span className="contact-map-card-addr">{lang === 'ar' ? 'شارع 18، البادية، الدمام 32243' : '18th Street, Al Badiyah, Dammam 32243'}</span>
              <span className="contact-map-card-cta">{lang === 'ar' ? 'افتح في خرائط جوجل' : 'Open in Google Maps'} <ArrowUpRight size={14} /></span>
            </a>
          </div>
        </Reveal>
      </section>

    </div>
  );
}
