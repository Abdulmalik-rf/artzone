import { useI18n } from '../i18n.jsx'
import { useRoute } from '../router.jsx'
import { getService } from '../data/services.js'
import { getGuide } from '../data/guides.js'
import { waLink } from './wa.js'

/* WhatsApp link with a starter message for the page the visitor is on.
   Every message says it comes from the website, so the sales desk can
   tell site leads apart from other chats and see what the visitor wants. */
export function pageWaText(t, lang, page, slug) {
  if (page === 'service') {
    const s = getService(slug)
    if (s) return `${t.serviceUi.waMsg} ${s[lang].name}`
  }
  if (page === 'guide') {
    const g = getGuide(slug)
    if (g) return `${t.guideUi.waMsg} ${g[lang].h1}`
  }
  if (page === 'services') return t.wa.quote
  if (page === 'work') return t.wa.work
  return t.wa.general
}

export function usePageWaLink() {
  const { t, lang } = useI18n()
  const { page, slug } = useRoute()
  return waLink(pageWaText(t, lang, page, slug))
}
