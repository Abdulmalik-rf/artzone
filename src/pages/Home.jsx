import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import useLanguage from '../i18n/useLanguage';
import Reveal, { StaggerGroup, StaggerItem } from '../components/Reveal';
import { Magnetic, SplitText, TickerCounter } from '../components/Interactions';
import { WhatsAppIcon } from '../components/WhatsApp';
import './Home.css';

// ── Word rotor for hero headline ───────────────────────────────────────────
function HeroRotor({ words }) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const id = setInterval(() => {
      setVisible(false);
      setTimeout(() => { setIndex(i => (i + 1) % words.length); setVisible(true); }, 450);
    }, 2800);
    return () => clearInterval(id);
  }, [words.length]);
  return (
    <span className={`display-rotor ${visible ? 'word-in' : 'word-out'}`}>
      {words[index]}
    </span>
  );
}

// ── Portfolio preview data ─────────────────────────────────────────────────
const PORT_ITEMS = [
  { id: 80, src: '/portfolio/p80.jpeg', cat: 'Cups',      title: 'Café Cup Collection',     sub: 'Full-Color Print' },
  { id: 89, src: '/portfolio/p89.jpeg', cat: 'Cups',      title: 'Rue Du Rhône',             sub: 'Black & Gold' },
  { id: 88, src: '/portfolio/p88.jpeg', cat: 'Cups',      title: 'Île Rousseau Lounge',      sub: 'Paper Cup + Lid' },
  { id: 19, src: '/portfolio/p19.jpeg', cat: 'Packaging', title: 'Rigid Gift Boxes',         sub: 'Velvet Lining' },
  { id: 1,  src: '/portfolio/p1.jpeg',  cat: 'Bags',      title: 'Kraft Shopping Bags',      sub: 'Matte Lamination' },
  { id: 76, src: '/portfolio/p76.jpeg', cat: 'Press',     title: 'The Art Zone Press',       sub: 'Visit us in KSA' },
];

// ─────────────────────────────────────────────────────────────────────────
export default function Home() {
  const [modal, setModal] = useState(null);
  const t = useLanguage(s => s.t);
  const lang = useLanguage(s => s.lang);

  const portfolioCat = (cat) => {
    if (lang !== 'ar') return cat;
    return { Bags: 'الأكياس', Cups: 'الأكواب', Packaging: 'التغليف', Press: 'المصنع' }[cat] || cat;
  };

  const workHeading = lang === 'ar' ? (<>أعمالنا <em>الأخيرة</em>.</>) : (<>Recent <em>chapters</em>.</>);
  const processHeading = lang === 'ar' ? (<>ثلاث خطوات <em>دقيقة</em>.</>) : (<>Three steps, <em>no friction</em>.</>);

  const openModal  = item => setModal(item);
  const closeModal = ()   => setModal(null);
  const prevModal  = ()   => { const i = PORT_ITEMS.findIndex(p => p.id === modal.id); setModal(PORT_ITEMS[(i - 1 + PORT_ITEMS.length) % PORT_ITEMS.length]); };
  const nextModal  = ()   => { const i = PORT_ITEMS.findIndex(p => p.id === modal.id); setModal(PORT_ITEMS[(i + 1) % PORT_ITEMS.length]); };

  useEffect(() => {
    const fn = e => {
      if (!modal) return;
      if (e.key === 'Escape')     closeModal();
      if (e.key === 'ArrowLeft')  prevModal();
      if (e.key === 'ArrowRight') nextModal();
    };
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, [modal]);

  const heroRotorWords = lang === 'ar'
    ? ['كل علبة.', 'كل كوب.', 'كل كيس.', 'كل تغليف.']
    : ['every cup.', 'every box.', 'every bag.', 'every gift.'];

  return (
    <div className="home-page">

      {/* ══════════════════════════════════════
          1. HERO
      ══════════════════════════════════════ */}
      <section className="hero-section">
        <div className="hero-inner">
          <div className="hero-left">
            <h1 className="hero-headline">
              <SplitText text={lang === 'ar' ? 'علامتك على' : 'Your brand on'} delay={0.15} />
              <br />
              <HeroRotor words={heroRotorWords} />
            </h1>

            <Reveal delay={0.3}>
              <p className="hero-tagline">
                {lang === 'ar'
                  ? 'طباعة تبيع قبل أن ينطق العميل بكلمة. مصاغة بدقة المليمتر — وتسلم بسرعة في أي مكان في المملكة.'
                  : 'Print that sells before a word is spoken. Crafted to the millimeter — delivered fast, anywhere in KSA.'}
              </p>
            </Reveal>

            <Reveal delay={0.45} className="hero-actions">
              <Magnetic strength={0.3}>
                <a href="https://wa.me/966535738136" target="_blank" rel="noopener noreferrer" className="btn btn-terra">
                  <WhatsAppIcon size={18} />
                  {lang === 'ar' ? 'احصل على عرض سعر' : 'Get a free quote'}
                </a>
              </Magnetic>
              <Link to="/portfolio" className="btn btn-outline">
                {lang === 'ar' ? 'استعرض الأعمال' : 'Browse the work'}
                <ArrowUpRight size={16} />
              </Link>
            </Reveal>

            <Reveal delay={0.6} className="hero-trust">
              <strong>4.9★</strong>
              <span>{lang === 'ar' ? 'موثوقة من 500+ براند في المملكة' : 'Trusted by 500+ brands across KSA'}</span>
            </Reveal>
          </div>

          <Reveal variant="scale" duration={0.9} className="hero-right">
            <img className="hero-logo-display" src="/logo-full.webp?v=2" alt="Art Zone Printing" loading="eager" />
          </Reveal>
        </div>

        <div className="hero-inner">
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-num"><TickerCounter value={500} suffix="+" /></span>
              <span className="hero-stat-label">{lang === 'ar' ? 'براند' : 'Brands served'}</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-num"><TickerCounter value={4000} suffix="+" /></span>
              <span className="hero-stat-label">{lang === 'ar' ? 'طلب' : 'Orders shipped'}</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-num">4.9<em>★</em></span>
              <span className="hero-stat-label">{lang === 'ar' ? 'تقييم' : 'Avg. rating'}</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-num"><TickerCounter value={20} suffix="+" /></span>
              <span className="hero-stat-label">{lang === 'ar' ? 'سنوات خبرة' : 'Years of expertise'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          2. PROCESS
      ══════════════════════════════════════ */}
      <section className="process-section">
        <div className="process-inner">
          <Reveal className="process-header">
            <p className="eyebrow">{lang === 'ar' ? 'كيف نعمل' : 'How it works'}</p>
            <h2 className="process-heading">{processHeading}</h2>
            <p className="process-sub">
              {lang === 'ar'
                ? 'لست بحاجة إلى مصمم ومورد وفريق لوجستي. نحن الثلاثة — أخبرنا بما تحتاج ونحن نتولى الباقي.'
                : "You don't need a designer, a supplier, and a logistics team. We're all three — tell us what you need and we handle everything."}
            </p>
            <div className="process-cta-row">
              <a href="https://wa.me/966535738136" target="_blank" rel="noopener noreferrer" className="btn btn-ink">
                <WhatsAppIcon size={16} /> {lang === 'ar' ? 'ابدأ مشروعك' : 'Start a project'}
              </a>
              <Link to="/built-for-you" className="btn-link">{lang === 'ar' ? 'تعرف أكثر' : 'Learn more'} <ArrowUpRight size={14} /></Link>
            </div>
          </Reveal>

          <StaggerGroup className="process-steps" stagger={0.15}>
            <StaggerItem className="process-step">
              <span className="process-step-num">01</span>
              <div className="process-step-body">
                <h3>{lang === 'ar' ? 'أخبرنا بفكرتك' : 'Tell us your idea'}</h3>
                <p>{lang === 'ar' ? 'شارك نوع المنتج والحجم والكمية وأي مراجع تصميم. رسالة واتساب واحدة كافية.' : 'Share your product type, size, quantity, and any design references. One WhatsApp message is enough.'}</p>
              </div>
            </StaggerItem>
            <StaggerItem className="process-step">
              <span className="process-step-num">02</span>
              <div className="process-step-body">
                <h3>{lang === 'ar' ? 'نصمم ونسعّر' : 'We design & quote'}</h3>
                <p>{lang === 'ar' ? 'فريقنا ينشئ تصميمًا جاهزًا للطباعة ويرسل لك سعرًا ثابتًا. تراجع وتوافق قبل البدء.' : 'Our team creates a print-ready design and sends a fixed price. You review and approve before anything is printed.'}</p>
              </div>
            </StaggerItem>
            <StaggerItem className="process-step">
              <span className="process-step-num">03</span>
              <div className="process-step-body">
                <h3>{lang === 'ar' ? 'نطبع ونسلّم' : 'Printed & delivered'}</h3>
                <p>{lang === 'ar' ? 'الإنتاج يبدأ في نفس اليوم. يصل إلى أي مكان في المملكة — سريع، مع تتبع، في الوقت المحدد.' : 'Production starts the same day. Delivered anywhere in KSA — fast, tracked, and on time.'}</p>
              </div>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </section>

      {/* ══════════════════════════════════════
          3. FEATURED WORK
      ══════════════════════════════════════ */}
      <section className="work-section">
        <div className="work-header">
          <Reveal>
            <p className="eyebrow">{lang === 'ar' ? 'أعمالنا' : 'The Work'}</p>
            <h2 className="work-heading">{workHeading}</h2>
          </Reveal>
          <Reveal delay={0.15}>
            <Link to="/portfolio" className="btn-link">
              {lang === 'ar' ? 'كل الأعمال' : 'All chapters'}
              <ArrowUpRight size={14} />
            </Link>
          </Reveal>
        </div>

        <StaggerGroup className="work-grid" stagger={0.08}>
          {PORT_ITEMS.map((item, i) => (
            <StaggerItem
              key={item.id}
              className="work-card"
              variant="up"
              onClick={() => openModal(item)}
            >
              <div className="work-card-img">
                <img src={item.src} alt="" loading="lazy" />
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal className="work-cta" delay={0.1}>
          <Magnetic>
            <Link to="/portfolio" className="btn btn-ink">
              {lang === 'ar' ? 'عرض المعرض كاملاً' : 'View full portfolio'}
              <ArrowUpRight size={16} />
            </Link>
          </Magnetic>
        </Reveal>
      </section>

      {/* ── Lightbox — image only ── */}
      {modal && (
        <div className="port-modal-backdrop" onClick={closeModal}>
          <button className="port-modal-close" onClick={closeModal} aria-label="Close"><X size={22} /></button>
          <button className="port-modal-prev" onClick={(e) => { e.stopPropagation(); prevModal(); }} aria-label="Previous"><ChevronLeft size={26} /></button>
          <button className="port-modal-next" onClick={(e) => { e.stopPropagation(); nextModal(); }} aria-label="Next"><ChevronRight size={26} /></button>
          <img className="port-modal-img-only" src={modal.src} alt="" onClick={e => e.stopPropagation()} />
        </div>
      )}

    </div>
  );
}
