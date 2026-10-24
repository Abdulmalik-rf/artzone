import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

/* ===================================================================
   Path router (prerender-friendly).
   Arabic lives at the root, English under /en/:
     /            /en/            -> home
     /work/       /en/work/       -> gallery
     /about/      /en/about/      -> about
     /contact/    /en/contact/    -> contact
   '#quote', '#capabilities', ... stay as home-page section anchors.
   Anything else renders the 404 page.
   =================================================================== */

export const LANGS = ['ar', 'en']
export const DEFAULT_LANG = 'ar'

/* page key -> path (without language prefix) */
export const PAGE_PATHS = {
  home: '/',
  work: '/work/',
  about: '/about/',
  contact: '/contact/',
}

/* legacy hash routes from the first build ('#/work') */
const LEGACY = { '#/work': 'work', '#/about': 'about', '#/contact': 'contact' }

export function pathFor(page, lang) {
  const base = PAGE_PATHS[page] || '/'
  return lang === 'en' ? `/en${base}` : base
}

export function parseLocation(pathname, hash = '') {
  let p = pathname || '/'
  let lang = DEFAULT_LANG
  if (p === '/en' || p.startsWith('/en/')) {
    lang = 'en'
    p = p.slice(3) || '/'
  }
  if (!p.endsWith('/')) p += '/'
  const page = Object.keys(PAGE_PATHS).find((k) => PAGE_PATHS[k] === p) || 'notfound'
  const anchor = hash.match(/^#([a-z-]+)$/)
  return { lang, page, anchor: anchor ? anchor[1] : null }
}

/* '#/work' -> '/work/' (or '/en/work/'); null when not a legacy link */
export function legacyRedirect(hash, lang) {
  return LEGACY[hash] ? pathFor(LEGACY[hash], lang) : null
}

/* Turn a language-neutral href from the copy deck into a real URL:
   '/work/' -> '/en/work/', '#quote' -> '/en/#quote'. External links pass through. */
export function localize(href, lang) {
  if (href.startsWith('#')) return `${pathFor('home', lang)}${href}`
  if (href.startsWith('/')) {
    const [path, hash] = href.split('#')
    const { page } = parseLocation(path)
    return pathFor(page === 'notfound' ? 'home' : page, lang) + (hash ? `#${hash}` : '')
  }
  return href
}

const RouteContext = createContext(null)

export function RouteProvider({ initial, children }) {
  const [route, setRoute] = useState(
    () => initial || parseLocation(window.location.pathname, window.location.hash),
  )

  const navigate = useCallback((href, { replace = false } = {}) => {
    const url = new URL(href, window.location.href)
    window.history[replace ? 'replaceState' : 'pushState'](null, '', url.pathname + url.hash)
    setRoute(parseLocation(url.pathname, url.hash))
  }, [])

  useEffect(() => {
    const onPop = () => setRoute(parseLocation(window.location.pathname, window.location.hash))
    window.addEventListener('popstate', onPop)

    /* intercept same-origin link clicks -> client-side navigation */
    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const a = e.target.closest('a[href]')
      if (!a || a.target || a.hasAttribute('download')) return
      const url = new URL(a.href, window.location.href)
      if (url.origin !== window.location.origin) return
      if (/\.[a-z0-9]+$/i.test(url.pathname)) return // files (xml, txt, images)
      e.preventDefault()
      const samePage = url.pathname === window.location.pathname
      if (samePage && url.hash) {
        window.history.pushState(null, '', url.pathname + url.hash)
        document.getElementById(url.hash.slice(1))?.scrollIntoView({ behavior: 'smooth' })
        return
      }
      if (samePage) {
        window.history.replaceState(null, '', url.pathname)
        window.scrollTo({ top: 0, behavior: 'smooth' })
        return
      }
      window.history.pushState(null, '', url.pathname + url.hash)
      setRoute(parseLocation(url.pathname, url.hash))
    }
    document.addEventListener('click', onClick)

    return () => {
      window.removeEventListener('popstate', onPop)
      document.removeEventListener('click', onClick)
    }
  }, [])

  const value = useMemo(() => ({ ...route, navigate }), [route, navigate])
  return <RouteContext.Provider value={value}>{children}</RouteContext.Provider>
}

export function useRoute() {
  return useContext(RouteContext)
}

/* href helper bound to the current language */
export function useHref() {
  const { lang } = useRoute()
  return useCallback((href) => localize(href, lang), [lang])
}
