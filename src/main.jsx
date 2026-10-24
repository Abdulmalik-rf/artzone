import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { LangProvider, LANG_PREF_KEY } from './i18n.jsx'
import { RouteProvider, legacyRedirect, parseLocation, pathFor } from './router.jsx'
import App from './App.jsx'
import './styles/fonts.css'
import './styles/base.css'

/* Redirects that must happen before React mounts (full page loads, so the
   prerendered HTML for the destination is what hydrates):
   1. old hash links from the first build: /#/work -> /work/
   2. a returning visitor who chose English lands on "/" -> /en/ */
function preMountRedirect() {
  const { pathname, hash } = window.location
  const { lang } = parseLocation(pathname)
  const legacy = legacyRedirect(hash, lang)
  if (legacy) return legacy
  if (pathname === '/') {
    let pref = null
    try {
      pref = localStorage.getItem(LANG_PREF_KEY)
    } catch {
      /* storage blocked — stay on Arabic */
    }
    if (pref === 'en') return pathFor('home', 'en') + hash
  }
  return null
}

const target = preMountRedirect()
if (target) {
  window.location.replace(target)
} else {
  const container = document.getElementById('root')
  const app = (
    <StrictMode>
      <RouteProvider>
        <LangProvider>
          <App />
        </LangProvider>
      </RouteProvider>
    </StrictMode>
  )
  /* prerendered pages hydrate; the dev server serves an empty shell */
  if (container.firstElementChild) hydrateRoot(container, app)
  else createRoot(container).render(app)
}
