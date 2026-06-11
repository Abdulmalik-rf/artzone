import { useI18n } from '../i18n.jsx'
import './Marquee.css'

export default function Marquee() {
  const { t } = useI18n()
  /* repeat the list so one track always exceeds the viewport width —
     a two-copy translateX(-100%) loop is only seamless when track ≥ viewport */
  const items = [...t.marquee, ...t.marquee, ...t.marquee]

  const Track = ({ hidden }) => (
    <div className="mq-track" aria-hidden={hidden || undefined}>
      {items.map((label, i) => (
        <span key={i} className="mq-item">
          {label}
          <i className="mq-star" aria-hidden="true">✦</i>
        </span>
      ))}
    </div>
  )

  return (
    <div className="mq" dir="ltr">
      <Track />
      <Track hidden />
    </div>
  )
}
