import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Pencil, CheckCircle, Truck } from 'lucide-react';
import { WhatsAppIcon } from '../components/WhatsApp';
import useLanguage from '../i18n/useLanguage';
import './BuiltForYou.css';

const TABS = [
  {
    id: 'brand',
    label: 'Starting a brand?',
    title: 'Print saves you a trip to the library',
    desc: 'Upload files from your phone, and Print will handle printing and delivering them to your home.',
    points: ['Printing school forms and papers', 'No library crowds', 'Delivery to your doorstep', 'Order anytime'],
    cta: { label: 'Print Now →', to: '/portfolio' },
    visual: '/brand-sample.jpeg',
  },
  {
    id: 'cafe',
    label: 'Running a café?',
    title: 'Print saves you a trip to the library',
    desc: 'Upload files from your phone, and Print will handle printing and delivering them to your home.',
    points: ['Printing school forms and papers', 'No library crowds', 'Delivery to your doorstep', 'Order anytime'],
    cta: { label: 'Print Now →', to: '/portfolio' },
    visual: '/cafe-sample.jpeg',
  },
  {
    id: 'event',
    label: 'Planning an event?',
    title: 'Print saves you a trip to the library',
    desc: 'Upload files from your phone, and Print will handle printing and delivering them to your home.',
    points: ['Printing school forms and papers', 'No library crowds', 'Delivery to your doorstep', 'Order anytime'],
    cta: { label: 'Print Now →', to: '/portfolio' },
    visual: '/event-sample.jpeg',
  },
];

export default function BuiltForYou() {
  const [active, setActive] = useState('brand');
  const tab = TABS.find(t => t.id === active);
  const t = useLanguage(s => s.t);
  const tabTexts = t('builtForYou.tabs');
  const tabText = tabTexts[TABS.findIndex(t => t.id === active)];
  const stepTexts = t('builtForYou.steps');

  return (
    <div className="bfy-page page-enter">

      <section className="bfy-hero">
        <span className="bfy-pill">{t('builtForYou.pill')}</span>
        <h1 className="bfy-heading">
          <span className="bfy-black">{t('builtForYou.headingBlack')}</span>
          <br />
          <span className="bfy-purple">{t('builtForYou.headingPurple')}</span>
        </h1>
      </section>

      <section className="bfy-who-section container">
        <p className="bfy-who-label">{t('builtForYou.who')}</p>

        <div className="bfy-tabs">
          {TABS.map(t => (
            <button
              key={t.id}
              className={`bfy-tab ${active === t.id ? 'bfy-tab--active' : ''}`}
              onClick={() => setActive(t.id)}
            >
              {tabTexts[TABS.findIndex(item => item.id === t.id)].label}
            </button>
          ))}
        </div>

        <div className="bfy-panel" key={active}>
          <div className="bfy-panel-text">
            <h2 className="bfy-panel-title">{tabText.title}</h2>
            <p className="bfy-panel-desc">{tabText.desc}</p>
            {tabText.points && (
              <ul className="bfy-points">
                {tabText.points.map(p => <li key={p}>{p}</li>)}
              </ul>
            )}
            {tab.cta && (
              <Link to={tab.cta.to} className="bfy-cta">{tabText.cta} →</Link>
            )}
          </div>
          <div className="bfy-panel-visual">
            <img src={tab.visual} alt={tab.label} className="bfy-panel-img" />
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="bfy-hiw">
        <div className="bfy-hiw-inner container">
          <p className="bfy-hiw-overline">✦ {t('builtForYou.simpleProcess')}</p>
          <h2 className="bfy-hiw-heading">{t('builtForYou.howItWorks')}</h2>
          <p className="bfy-hiw-sub">{t('builtForYou.sub')}</p>

          <div className="bfy-hiw-steps">
            <div className="bfy-hiw-step">
              <div className="bfy-hiw-icon"><WhatsAppIcon size={20} color="#fff" /></div>
              <span className="bfy-hiw-num">01</span>
              <h3>{stepTexts[0][0]}</h3>
              <p>{stepTexts[0][1]}</p>
            </div>
            <div className="bfy-hiw-connector" aria-hidden="true" />
            <div className="bfy-hiw-step">
              <div className="bfy-hiw-icon"><Pencil size={22} /></div>
              <span className="bfy-hiw-num">02</span>
              <h3>{stepTexts[1][0]}</h3>
              <p>{stepTexts[1][1]}</p>
            </div>
            <div className="bfy-hiw-connector" aria-hidden="true" />
            <div className="bfy-hiw-step">
              <div className="bfy-hiw-icon"><CheckCircle size={22} /></div>
              <span className="bfy-hiw-num">03</span>
              <h3>{stepTexts[2][0]}</h3>
              <p>{stepTexts[2][1]}</p>
            </div>
            <div className="bfy-hiw-connector" aria-hidden="true" />
            <div className="bfy-hiw-step">
              <div className="bfy-hiw-icon"><Truck size={22} /></div>
              <span className="bfy-hiw-num">04</span>
              <h3>{stepTexts[3][0]}</h3>
              <p>{stepTexts[3][1]}</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
