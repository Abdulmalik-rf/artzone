/* Analytics events. GA4 is only loaded when VITE_GA_ID is set at build time
   (see scripts/prerender.mjs), so this is a no-op until then. */

export function track(event, params = {}) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
  window.gtag('event', event, { page_path: window.location.pathname, ...params })
}
