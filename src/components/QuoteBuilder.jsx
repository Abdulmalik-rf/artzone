import { useMemo, useState } from 'react'
import { useI18n } from '../i18n.jsx'
import { waLink } from '../lib/wa.js'
import './QuoteBuilder.css'

export default function QuoteBuilder() {
  const { t } = useI18n()
  const q = t.quote

  /* selects/radios store the INDEX so values survive a language toggle */
  const [productIdx, setProductIdx] = useState(-1)
  const [qty, setQty] = useState('')
  const [material, setMaterial] = useState('')
  const [deadlineIdx, setDeadlineIdx] = useState(-1)
  const [notes, setNotes] = useState('')

  /* decorative ticket number, stamped once per visit */
  const jobNo = useMemo(() => {
    const d = new Date()
    const mm = String(d.getMonth() + 1).padStart(2, '0')
    const dd = String(d.getDate()).padStart(2, '0')
    return `AZ-${d.getFullYear()}-${mm}${dd}`
  }, [])

  /* single source of truth for the preview AND the WhatsApp message */
  const rows = [
    [q.msg.product, productIdx >= 0 ? q.productOptions[productIdx] : ''],
    [q.msg.qty, qty.trim()],
    [q.msg.material, material.trim()],
    [q.msg.deadline, deadlineIdx >= 0 ? q.deadlineOptions[deadlineIdx] : ''],
    [q.msg.notes, notes.trim()],
  ]

  const onSubmit = (e) => {
    e.preventDefault()
    const lines = [q.msg.greeting]
    rows.forEach(([label, value]) => {
      if (value) lines.push(`${label}: ${value}`)
    })
    window.open(waLink(lines.join('\n')), '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="quote" className="qb">
      {/* press-room decorations */}
      <div className="qb-decor halftone halftone--magenta" aria-hidden="true" />
      <svg className="qb-reg" viewBox="0 0 44 44" aria-hidden="true">
        <circle cx="22" cy="22" r="13" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="22" cy="22" r="4" fill="currentColor" />
        <line x1="22" y1="1" x2="22" y2="43" stroke="currentColor" strokeWidth="1.5" />
        <line x1="1" y1="22" x2="43" y2="22" stroke="currentColor" strokeWidth="1.5" />
      </svg>

      <div className="container">
        <p className="kicker" data-reveal>
          {q.kicker}
        </p>
        <h2 className="sec-title" data-reveal style={{ transitionDelay: '0.05s' }}>
          {q.title}
        </h2>
        <p className="sec-sub" data-reveal style={{ transitionDelay: '0.1s' }}>
          {q.sub}
        </p>

        <div className="qb-grid">
          {/* ============ LEFT — the form ============ */}
          <form className="qb-form cropmarks" data-reveal onSubmit={onSubmit}>
            <div className="qb-field">
              <label className="qb-label mono" htmlFor="qb-product">
                <i className="qb-label-idx">01</i>
                {q.product}
              </label>
              <div className="qb-select-wrap">
                <select
                  id="qb-product"
                  className="qb-control qb-select"
                  value={productIdx}
                  onChange={(e) => setProductIdx(Number(e.target.value))}
                >
                  <option value={-1}>{q.previewEmpty}</option>
                  {q.productOptions.map((opt, i) => (
                    <option key={i} value={i}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="qb-row2">
              <div className="qb-field">
                <label className="qb-label mono" htmlFor="qb-qty">
                  <i className="qb-label-idx">02</i>
                  {q.qty}
                </label>
                <input
                  id="qb-qty"
                  className="qb-control"
                  type="text"
                  inputMode="numeric"
                  value={qty}
                  placeholder={q.qtyPlaceholder}
                  onChange={(e) => setQty(e.target.value)}
                />
              </div>

              <div className="qb-field">
                <label className="qb-label mono" htmlFor="qb-material">
                  <i className="qb-label-idx">03</i>
                  {q.material}
                </label>
                <input
                  id="qb-material"
                  className="qb-control"
                  type="text"
                  value={material}
                  placeholder={q.materialPlaceholder}
                  onChange={(e) => setMaterial(e.target.value)}
                />
              </div>
            </div>

            <div className="qb-field">
              <span className="qb-label mono" id="qb-deadline-label">
                <i className="qb-label-idx">04</i>
                {q.deadline}
              </span>
              {/* deselectable toggle set — aria-pressed, not radio semantics */}
              <div className="qb-seg" role="group" aria-labelledby="qb-deadline-label">
                {q.deadlineOptions.map((opt, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-pressed={deadlineIdx === i}
                    className={`qb-pill ${deadlineIdx === i ? 'is-on' : ''}`}
                    onClick={() => setDeadlineIdx(deadlineIdx === i ? -1 : i)}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            <div className="qb-field">
              <label className="qb-label mono" htmlFor="qb-notes">
                <i className="qb-label-idx">05</i>
                {q.notes}
              </label>
              <textarea
                id="qb-notes"
                className="qb-control qb-textarea"
                rows={3}
                value={notes}
                placeholder={q.notesPlaceholder}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn--wa qb-submit">
              {q.submit}
            </button>
            <p className="qb-hint">{q.hint}</p>
          </form>

          {/* ============ RIGHT — live job-ticket preview ============ */}
          <aside className="qb-ticket-wrap" data-reveal style={{ transitionDelay: '0.1s' }}>
            <div className="qb-ticket cropmarks">
              <div className="cmyk-bar qb-ticket-bar" aria-hidden="true">
                <i />
                <i />
                <i />
                <i />
              </div>

              <div className="qb-ticket-head">
                <span className="qb-ticket-heading mono">{q.previewHeading}</span>
                <span className="qb-ticket-no mono">{jobNo}</span>
              </div>

              <dl className="qb-ticket-rows">
                {rows.map(([label, value], i) => (
                  <div key={i} className={`qb-ticket-row ${value ? 'is-filled' : ''}`}>
                    <dt className="qb-ticket-label mono">
                      <i className="qb-ticket-dot" aria-hidden="true" />
                      {label}
                    </dt>
                    <dd className="qb-ticket-value">{value || q.previewEmpty}</dd>
                  </div>
                ))}
              </dl>

              <div className="qb-ticket-foot">
                <span className="qb-ticket-meter" aria-hidden="true">
                  {rows.map(([, value], i) => (
                    <i key={i} className={value ? 'is-on' : ''} />
                  ))}
                </span>
                <span className="qb-barcode" aria-hidden="true" />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
