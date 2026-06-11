import { createContext, useContext, useEffect, useState } from 'react'

/* ===================================================================
   Micro hash router.
   '#/work' | '#/about' | '#/contact'  -> dedicated pages
   '#capabilities', '#quote', ...      -> home page + section anchor
   ''                                   -> home
   Hash routing keeps deep links working on any static host.
   =================================================================== */

const PAGES = ['work', 'about', 'contact']

export function parseHash() {
  const h = window.location.hash || ''
  const page = h.match(/^#\/([\w-]+)/)
  if (page && PAGES.includes(page[1])) return { page: page[1], anchor: null }
  const anchor = h.match(/^#([a-z-]+)$/)
  return { page: 'home', anchor: anchor ? anchor[1] : null }
}

const RouteContext = createContext({ page: 'home', anchor: null })

export function RouteProvider({ children }) {
  const [route, setRoute] = useState(parseHash)

  useEffect(() => {
    const onHash = () => setRoute(parseHash())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  return <RouteContext.Provider value={route}>{children}</RouteContext.Provider>
}

export function useRoute() {
  return useContext(RouteContext)
}
