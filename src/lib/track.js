/* Analytics (GA4).
   GA_ID is public (it appears in every page's source), so it lives here
   rather than in a CI secret. Empty = analytics off: scripts/prerender.mjs
   only injects the gtag snippet when it is set. */

export const GA_ID = ''

export function track(event, params = {}) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
  window.gtag('event', event, { page_path: window.location.pathname, ...params })
}

/* client-side navigation: the router changes pages without a reload, so the
   page_view is sent here, after the new <title> is set (GA4's own
   history-change page views are switched off in the gtag config) */
export function trackPageView() {
  track('page_view', {
    page_location: window.location.href,
    page_title: document.title,
  })
}

/* AI assistants that send visitors. ChatGPT also tags its links with
   ?utm_source=chatgpt.com. Keep in sync with the GA4 "AI assistants"
   channel group. */
const AI_SOURCES = [
  ['chatgpt', /(^|\.)chatgpt\.com$|(^|\.)openai\.com$/],
  ['perplexity', /(^|\.)perplexity\.ai$/],
  ['gemini', /^gemini\.google\.com$|^bard\.google\.com$/],
  ['copilot', /^copilot\.microsoft\.com$|(^|\.)bing\.com$/],
  ['claude', /(^|\.)claude\.ai$/],
  ['deepseek', /(^|\.)deepseek\.com$/],
  ['meta_ai', /^(www\.)?meta\.ai$/],
]

/* on first load: a visitor arriving from an AI assistant gets an
   `ai_referral` event with the assistant's name, readable in GA4 reports
   without any admin setup */
export function trackAiReferral() {
  if (typeof window === 'undefined') return
  const utm = new URLSearchParams(window.location.search).get('utm_source') || ''
  let host = ''
  try {
    host = document.referrer ? new URL(document.referrer).hostname : ''
  } catch {
    /* malformed referrer */
  }
  const hit = AI_SOURCES.find(([, re]) => re.test(host) || re.test(utm))
  if (!hit) return
  // bing.com search clicks are ordinary search traffic, not Copilot
  if (hit[0] === 'copilot' && /(^|\.)bing\.com$/.test(host) && !/copilot/i.test(document.referrer)) return
  track('ai_referral', { ai_source: hit[0], referrer_host: host || utm })
}
