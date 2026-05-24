import { useState, useRef, useEffect } from 'react';
import { MapPin } from 'lucide-react';
import useLanguage from '../i18n/useLanguage';
import './Chatbot.css';

const QUICK_REPLIES = [
  { id: 'print',    labelKey: 'chatbot.print', icon: '🖨️' },
  { id: 'design',   labelKey: 'chatbot.design', icon: '🎨' },
  { id: 'delivery', labelKey: 'chatbot.delivery', icon: '🚚' },
];

const RESPONSE_KEYS = {
  print: 'chatbot.printResponse',
  design: 'chatbot.designResponse',
  delivery: 'chatbot.deliveryResponse',
};

export default function Chatbot() {
  const t = useLanguage(s => s.t);
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ id: 'welcome', from: 'bot', textKey: 'chatbot.welcome' }]);
  const [showQuick, setShowQuick] = useState(true);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open]);

  const handleQuick = (reply) => {
    setShowQuick(false);
    setMessages(prev => [
      ...prev,
      { id: Date.now(),       from: 'user', text: `${reply.icon} ${t(reply.labelKey)}` },
      { id: Date.now() + 1,   from: 'bot',  textKey: RESPONSE_KEYS[reply.id] },
      { id: Date.now() + 2,   from: 'bot',  text: '', isWa: true },
    ]);
  };

  const reset = () => {
    setMessages([{ id: 'welcome', from: 'bot', textKey: 'chatbot.welcome' }]);
    setShowQuick(true);
  };

  return (
    <>
      {/* Chat box */}
      {open && (
        <div className="cb-box">
          <div className="cb-header">
            <div className="cb-header-left">
              <span className="cb-avatar">AZ</span>
              <div>
                <p className="cb-name">Art Zone</p>
                <p className="cb-status">● {t('chatbot.online')}</p>
              </div>
            </div>
            <div className="cb-header-actions">
              <button className="cb-icon-btn" onClick={reset} title={t('chatbot.restart')}>↺</button>
              <button className="cb-icon-btn" onClick={() => setOpen(false)} title={t('chatbot.close')}>✕</button>
            </div>
          </div>

          <div className="cb-messages">
            {messages.map((msg) =>
              msg.isWa ? (
                <div key={msg.id} className="cb-wa-wrap">
                  <a
                    href="https://wa.me/966535738136"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cb-wa-btn"
                  >
                    💬 {t('chatbot.whatsapp')}
                  </a>
                </div>
              ) : (
                <div key={msg.id} className={`cb-msg cb-msg--${msg.from}`}>
                  {msg.from === 'bot' && <span className="cb-msg-avatar">AZ</span>}
                  <div className="cb-bubble">{msg.textKey ? t(msg.textKey) : msg.text}</div>
                </div>
              )
            )}

            {showQuick && (
              <div className="cb-quick-wrap">
                {QUICK_REPLIES.map(r => (
                  <button key={r.id} className="cb-quick-btn" onClick={() => handleQuick(r)}>
                    {r.icon} {t(r.labelKey)}
                  </button>
                ))}
              </div>
            )}
            <div ref={bottomRef} />
          </div>
        </div>
      )}

      {/* Floating buttons stack */}
      <div className="cb-float-stack">
        <a
          href="https://maps.google.com/?q=Art+Zone+Printing+Saudi+Arabia"
          target="_blank"
          rel="noopener noreferrer"
          className="cb-float-btn"
          aria-label={t('chatbot.map')}
        >
          <MapPin size={22} />
        </a>

        {/* Toggle button */}
        <button className={`cb-toggle cb-toggle--stacked ${open ? 'cb-toggle--open' : ''}`} onClick={() => setOpen(o => !o)} aria-label={t('chatbot.chat')}>
        {open ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"/></svg>
        )}
          {!open && <span className="cb-badge">1</span>}
        </button>
      </div>
    </>
  );
}
