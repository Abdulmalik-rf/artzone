import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { LangProvider, dict } from './i18n.jsx'
import { RouteProvider, parseLocation } from './router.jsx'
import App from './App.jsx'

/* Build-time render of one URL (used by scripts/prerender.mjs) */
export function render(pathname) {
  const route = parseLocation(pathname)
  const html = renderToString(
    <StrictMode>
      <RouteProvider initial={route}>
        <LangProvider>
          <App />
        </LangProvider>
      </RouteProvider>
    </StrictMode>,
  )
  return { html, route }
}

export { dict }
export { GALLERY, photoByFile } from './data/gallery.js'
export { PAGE_PATHS, pathFor } from './router.jsx'
export { WA_NUMBER, MAPS_URL } from './lib/wa.js'
export { SERVICES, SLUG_BY_CAP } from './data/services.js'
export { pageMeta } from './lib/meta.js'
export { GUIDES } from './data/guides.js'
export { LEGAL_NAME, CR_NUMBER, UNIFIED_NUMBER, VAT_NUMBER } from './lib/business.js'
