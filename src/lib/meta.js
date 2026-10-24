import { getService } from '../data/services.js'
import { getGuide } from '../data/guides.js'

/* <title> + meta description for a route. Shared by App (client-side
   navigation) and scripts/prerender.mjs (static <head>). */
export function pageMeta(t, page, slug, lang) {
  if (page === 'service') {
    const s = getService(slug)
    if (s) return { title: s[lang].title, description: s[lang].description }
  }
  if (page === 'guide') {
    const g = getGuide(slug)
    if (g) return { title: g[lang].title, description: g[lang].description }
  }
  return { title: t.titles[page] || t.titles.home, description: t.seo[page] || t.seo.home }
}
