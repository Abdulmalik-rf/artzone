import { Link } from 'react-router-dom';
import { CheckCircle2, PackageCheck, PenTool, Sparkles, Truck, ArrowUpRight } from 'lucide-react';
import useLanguage from '../i18n/useLanguage';
import Reveal, { StaggerGroup, StaggerItem } from '../components/Reveal';
import { Magnetic, TickerCounter } from '../components/Interactions';
import { WhatsAppIcon } from '../components/WhatsApp';
import './About.css';

const copy = {
  en: {
    badge: 'Premium printing press · since 2017',
    titleA: 'A press that prints',
    titleB: 'with intent.',
    lead: 'Art Zone helps restaurants, cafés, retailers, and growing brands create printed pieces that feel considered from the first touch.',
    body: 'From custom bags and cups to rigid boxes, stickers, displays, and launch kits — we combine design sense with reliable production so your brand looks sharp in the real world.',
    quote: 'Get a free quote',
    portfolio: 'View portfolio',
    stats: [
      ['500+', 'Brands served'],
      ['4,000+', 'Orders delivered'],
      ['4.9★', 'Average rating'],
      ['20+', 'Years of expertise'],
    ],
    promiseEyebrow: 'Our promise',
    promiseA: 'Built for brands that ',
    promiseB: 'care about the details.',
    promiseText: 'The difference is in the alignment, stock, finish, colour, and how everything arrives. We manage those details so your team can focus on the launch, service, or sale.',
    values: [
      ['Design-led production', 'We help shape the final look, not just print the file.'],
      ['Clear timelines', 'Quotes, proofs, and production updates stay straightforward.'],
      ['KSA-wide delivery', 'Finished orders are packed properly and delivered across the Kingdom.'],
    ],
    processEyebrow: 'From idea to delivery',
    processA: 'How we ',
    processB: 'work.',
    process: [
      ['Brief', 'Send the product, quantity, deadline, and any references.'],
      ['Design & proof', 'We prepare the print-ready file and confirm the details.'],
      ['Produce', 'Your order moves through material, print, finishing, and quality checks.'],
      ['Deliver', 'Everything is packed and sent to your door or event location.'],
    ],
    ctaTitleA: 'Ready to make your next print ',
    ctaTitleB: 'feel premium?',
    ctaText: 'Send us your idea on WhatsApp.',
  },
  ar: {
    badge: 'مصنع طباعة فاخر · منذ 2017',
    titleA: 'مصنع يطبع',
    titleB: 'بنية واضحة.',
    lead: 'تساعد آرت زون المطاعم والمقاهي والمتاجر والعلامات الناشئة على تنفيذ مطبوعات تبدو مدروسة من أول لمسة.',
    body: 'من الأكياس والأكواب المخصصة إلى الصناديق الفاخرة والملصقات والعروض وأطقم الإطلاق، نجمع بين حس التصميم ودقة الإنتاج لتظهر علامتك باحتراف.',
    quote: 'احصل على عرض سعر',
    portfolio: 'عرض الأعمال',
    stats: [
      ['500+', 'براند'],
      ['4,000+', 'طلب'],
      ['4.9★', 'تقييم'],
      ['20+', 'سنوات خبرة'],
    ],
    promiseEyebrow: 'وعدنا',
    promiseA: 'مصمم للعلامات التي ',
    promiseB: 'تهتم بالتفاصيل.',
    promiseText: 'الفارق يظهر في المحاذاة والخامة والتشطيب واللون وطريقة وصول الطلب. نحن ندير هذه التفاصيل حتى يركز فريقك على الإطلاق أو الخدمة أو البيع.',
    values: [
      ['إنتاج بروح التصميم', 'نساعد في تشكيل المظهر النهائي، لا نطبع الملف فقط.'],
      ['مواعيد واضحة', 'عروض السعر والمعاينات وتحديثات الإنتاج تبقى مباشرة وواضحة.'],
      ['توصيل داخل السعودية', 'تُغلف الطلبات بعناية وتصل إلى مختلف مناطق المملكة.'],
    ],
    processEyebrow: 'من الفكرة إلى التسليم',
    processA: 'طريقة ',
    processB: 'عملنا.',
    process: [
      ['الملخص', 'أرسل المنتج والكمية والموعد وأي مراجع تصميم.'],
      ['التصميم', 'نجهز الملف المناسب للطباعة ونؤكد التفاصيل.'],
      ['الإنتاج', 'يمر طلبك بالخامة والطباعة والتشطيب وفحص الجودة.'],
      ['التسليم', 'نغلف كل شيء ونرسله إلى بابك أو موقع الفعالية.'],
    ],
    ctaTitleA: 'جاهز لجعل مطبوعاتك القادمة ',
    ctaTitleB: 'أكثر فخامة؟',
    ctaText: 'أرسل فكرتك على واتساب.',
  },
};

const heroImages = ['/portfolio/p68.jpeg', '/portfolio/p89.jpeg'];
const valueIcons = [PenTool, CheckCircle2, Truck];
const processIcons = [Sparkles, PenTool, PackageCheck, Truck];

export default function About() {
  const lang = useLanguage(s => s.lang);
  const t = copy[lang] || copy.en;

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-inner">
          <div className="about-hero-copy">
            <Reveal duration={0.6}>
              <p className="about-kicker">{t.badge}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1>{t.titleA} <em>{t.titleB}</em></h1>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="about-lead">{t.lead}</p>
            </Reveal>
            <Reveal delay={0.35}>
              <p className="about-body">{t.body}</p>
            </Reveal>
            <Reveal delay={0.45} className="about-actions">
              <Magnetic strength={0.3}>
                <a href="https://wa.me/966535738136" target="_blank" rel="noopener noreferrer" className="btn btn-terra">
                  <WhatsAppIcon size={18} /> {t.quote}
                </a>
              </Magnetic>
              <Link to="/portfolio" className="btn btn-outline">
                {t.portfolio}
                <ArrowUpRight size={16} />
              </Link>
            </Reveal>
          </div>

          <Reveal variant="scale" duration={0.9} className="about-gallery" aria-label="Art Zone print samples">
            {heroImages.map((src, index) => (
              <figure key={src} className={`about-gallery-card card-${index + 1}`}>
                <img src={src} alt="" loading={index === 0 ? 'eager' : 'lazy'} />
              </figure>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="about-stats-band">
        <div className="about-stats-grid">
          {t.stats.map(([number, label], i) => {
            const numeric = parseFloat(String(number).replace(/[^\d.]/g, ''));
            const suffix = String(number).replace(/[\d.,]/g, '');
            return (
              <Reveal delay={i * 0.08} key={label} className="about-stat">
                <strong>
                  {numeric > 0 ? <TickerCounter value={numeric} suffix={suffix} /> : number}
                </strong>
                <span>{label}</span>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="about-promise">
        <Reveal className="about-section-heading">
          <p className="about-kicker">{t.promiseEyebrow}</p>
          <h2>{t.promiseA}<em>{t.promiseB}</em></h2>
          <p>{t.promiseText}</p>
        </Reveal>

        <StaggerGroup className="about-values" stagger={0.1}>
          {t.values.map(([title, text], index) => {
            const Icon = valueIcons[index];
            return (
              <StaggerItem className="about-value" key={title} variant="up">
                <div className="about-value-icon"><Icon size={20} /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </section>

      <section className="about-process">
        <div className="about-process-inner">
          <Reveal className="about-section-heading">
            <p className="about-kicker">{t.processEyebrow}</p>
            <h2>{t.processA}<em>{t.processB}</em></h2>
          </Reveal>
          <StaggerGroup className="about-process-grid" stagger={0.1}>
            {t.process.map(([title, text], index) => {
              const Icon = processIcons[index];
              return (
                <StaggerItem className="about-step" key={title} variant="up">
                  <div className="about-step-top">
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <Icon size={20} color="var(--terra-light)" />
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      <Reveal as="section" className="about-cta">
        <div>
          <p className="about-kicker">{lang === 'ar' ? 'ابدأ الآن' : 'Start now'}</p>
          <h2>{t.ctaTitleA}<em>{t.ctaTitleB}</em></h2>
        </div>
        <div className="about-cta-actions">
          <Magnetic>
            <a href="https://wa.me/966535738136" target="_blank" rel="noopener noreferrer" className="btn btn-terra">
              <WhatsAppIcon size={18} /> {t.quote}
            </a>
          </Magnetic>
          <Link to="/portfolio" className="btn btn-outline">
            {t.portfolio}
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
