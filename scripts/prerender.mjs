/* ===================================================================
   Build-time prerender.
   Runs after `vite build` (client -> dist/) and `vite build --ssr`
   (server entry -> dist-ssr/). For every route x language it writes
   dist/<path>/index.html with the rendered markup and a full <head>
   (title, description, canonical, hreflang, Open Graph, JSON-LD), then
   generates 404.html, sitemap.xml and llms.txt.

   Optional env at build time:
     VITE_GA_ID          GA4 measurement id (G-XXXX) -> loads gtag
     GSC_VERIFICATION    Google Search Console meta verification token
     BING_VERIFICATION   Bing Webmaster Tools meta verification token
   =================================================================== */

import { readFileSync, writeFileSync, mkdirSync, readdirSync, rmSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const DIST = join(ROOT, 'dist')
const SSR_DIR = join(ROOT, 'dist-ssr')

export const SITE = 'https://art-zone-print.com'
const LANGS = ['ar', 'en']
const HREFLANG = { ar: 'ar-SA', en: 'en' }
const OG_LOCALE = { ar: 'ar_SA', en: 'en_US' }
const PHONE = '+966535738136'
const GBP_URL = 'https://www.google.com/maps/place/?q=place_id:ChIJf7zmfxv9ST4RpyzYSjUT70M'
const GEO = { latitude: 26.4313401, longitude: 50.0963457 }
const OG_IMAGE = { url: `${SITE}/img/og-image.jpg`, width: 1200, height: 630 }
const TODAY = new Date().toISOString().slice(0, 10)

const ssr = await import(pathToFileURL(join(SSR_DIR, 'entry-server.js')).href)
const { render, dict, GALLERY, PAGE_PATHS, pathFor } = ssr
const PAGES = Object.keys(PAGE_PATHS)

const template = readFileSync(join(DIST, 'index.html'), 'utf8')
const assets = readdirSync(join(DIST, 'assets'))

/* ---------- helpers ---------- */

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const abs = (path) => `${SITE}${path}`

const jsonLd = (data) =>
  `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`

const findAsset = (re) => assets.find((f) => re.test(f))

/* ---------- structured data ---------- */

const CITIES = {
  ar: ['الدمام', 'الخبر', 'الظهران', 'القطيف', 'الجبيل', 'الأحساء'],
  en: ['Dammam', 'Khobar', 'Dhahran', 'Qatif', 'Jubail', 'Al Ahsa'],
}

function businessNode(lang) {
  const t = dict[lang]
  return {
    '@type': 'LocalBusiness',
    '@id': `${SITE}/#business`,
    name: lang === 'ar' ? 'آرت زون للطباعة' : 'Art Zone Printing',
    alternateName: [
      lang === 'ar' ? 'Art Zone Printing' : 'آرت زون للطباعة',
      'مطبعة آرت زون',
      'ارت زون للطباعة',
      'ARTZONE PRINTING',
    ],
    description: t.seo.home,
    url: abs(pathFor('home', lang)),
    logo: abs('/logo-512.png'),
    image: [OG_IMAGE.url, abs('/img/work/showroom-dammam-plant.webp'), abs('/img/work/wide-format-printer-plant.webp')],
    telephone: PHONE,
    foundingDate: '2016',
    address: {
      '@type': 'PostalAddress',
      streetAddress: lang === 'ar' ? 'شارع 18، حي البادية' : '18th Street, Al Badiyah',
      addressLocality: lang === 'ar' ? 'الدمام' : 'Dammam',
      addressRegion: lang === 'ar' ? 'المنطقة الشرقية' : 'Eastern Province',
      postalCode: '32243',
      addressCountry: 'SA',
    },
    geo: { '@type': 'GeoCoordinates', ...GEO },
    hasMap: GBP_URL,
    areaServed: [
      ...CITIES[lang].map((name) => ({ '@type': 'City', name })),
      { '@type': 'Country', name: lang === 'ar' ? 'المملكة العربية السعودية' : 'Saudi Arabia' },
    ],
    knowsLanguage: ['ar', 'en'],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: PHONE,
      contactType: 'sales',
      areaServed: 'SA',
      availableLanguage: ['Arabic', 'English'],
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: t.caps.kicker,
      itemListElement: t.caps.items.map((item) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: item.name, description: item.desc },
      })),
    },
  }
}

function websiteNode(lang) {
  return {
    '@type': 'WebSite',
    '@id': `${SITE}/#website`,
    url: abs('/'),
    name: lang === 'ar' ? 'آرت زون للطباعة' : 'Art Zone Printing',
    inLanguage: ['ar-SA', 'en'],
    publisher: { '@id': `${SITE}/#business` },
  }
}

const PAGE_TYPE = { home: 'WebPage', work: 'CollectionPage', about: 'AboutPage', contact: 'ContactPage' }

function graphFor(page, lang) {
  const t = dict[lang]
  const url = abs(pathFor(page, lang))
  const webPage = {
    '@type': PAGE_TYPE[page],
    '@id': `${url}#webpage`,
    url,
    name: t.titles[page],
    description: t.seo[page],
    inLanguage: HREFLANG[lang],
    isPartOf: { '@id': `${SITE}/#website` },
    about: { '@id': `${SITE}/#business` },
    primaryImageOfPage: { '@type': 'ImageObject', url: OG_IMAGE.url },
  }
  const graph = [businessNode(lang), websiteNode(lang), webPage]

  if (page !== 'home') {
    webPage.breadcrumb = { '@id': `${url}#breadcrumb` }
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: t.titles.home, item: abs(pathFor('home', lang)) },
        { '@type': 'ListItem', position: 2, name: t.titles[page], item: url },
      ],
    })
  }

  if (page === 'work') {
    webPage.hasPart = GALLERY.map((g) => ({
      '@type': 'ImageObject',
      contentUrl: abs(`/img/work/${g.file}.webp`),
      caption: g.alt[lang],
      width: g.w,
      height: g.h,
      creator: { '@id': `${SITE}/#business` },
    }))
  }

  if (page === 'contact') {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      inLanguage: HREFLANG[lang],
      mainEntity: t.contactPage.faq.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    })
  }

  return { '@context': 'https://schema.org', '@graph': graph }
}

/* ---------- <head> ---------- */

function analyticsTags() {
  const tags = []
  if (process.env.GSC_VERIFICATION)
    tags.push(`<meta name="google-site-verification" content="${esc(process.env.GSC_VERIFICATION)}" />`)
  if (process.env.BING_VERIFICATION)
    tags.push(`<meta name="msvalidate.01" content="${esc(process.env.BING_VERIFICATION)}" />`)
  const ga = process.env.VITE_GA_ID
  if (ga && /^G-[A-Z0-9]+$/.test(ga)) {
    tags.push(
      `<script async src="https://www.googletagmanager.com/gtag/js?id=${ga}"></script>`,
      `<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${ga}');</script>`,
    )
  }
  return tags
}

function fontPreloads(lang) {
  const wanted =
    lang === 'ar'
      ? [/^ibm-plex-sans-arabic-arabic-400-normal-.*\.woff2$/, /^ibm-plex-sans-arabic-arabic-700-normal-.*\.woff2$/]
      : [/^space-grotesk-latin-400-normal-.*\.woff2$/, /^space-grotesk-latin-700-normal-.*\.woff2$/]
  return wanted
    .map(findAsset)
    .filter(Boolean)
    .map((f) => `<link rel="preload" href="/assets/${f}" as="font" type="font/woff2" crossorigin />`)
}

function headFor(page, lang, { notFound = false } = {}) {
  const t = dict[lang]
  const title = t.titles[page]
  const desc = t.seo[page]
  const url = abs(pathFor(page, lang))
  const tags = [
    `<title>${esc(title)}</title>`,
    `<meta name="description" content="${esc(desc)}" />`,
  ]

  if (notFound) {
    tags.push('<meta name="robots" content="noindex" />')
  } else {
    tags.push(
      `<link rel="canonical" href="${url}" />`,
      ...LANGS.map((l) => `<link rel="alternate" hreflang="${HREFLANG[l]}" href="${abs(pathFor(page, l))}" />`),
      `<link rel="alternate" hreflang="x-default" href="${abs(pathFor(page, 'ar'))}" />`,
      `<meta property="og:type" content="website" />`,
      `<meta property="og:site_name" content="${lang === 'ar' ? 'آرت زون للطباعة' : 'Art Zone Printing'}" />`,
      `<meta property="og:title" content="${esc(title)}" />`,
      `<meta property="og:description" content="${esc(desc)}" />`,
      `<meta property="og:url" content="${url}" />`,
      `<meta property="og:image" content="${OG_IMAGE.url}" />`,
      `<meta property="og:image:width" content="${OG_IMAGE.width}" />`,
      `<meta property="og:image:height" content="${OG_IMAGE.height}" />`,
      `<meta property="og:image:alt" content="${esc(t.hero.showcase.alt)}" />`,
      `<meta property="og:locale" content="${OG_LOCALE[lang]}" />`,
      `<meta property="og:locale:alternate" content="${OG_LOCALE[lang === 'ar' ? 'en' : 'ar']}" />`,
      `<meta name="twitter:card" content="summary_large_image" />`,
      `<meta name="twitter:title" content="${esc(title)}" />`,
      `<meta name="twitter:description" content="${esc(desc)}" />`,
      `<meta name="twitter:image" content="${OG_IMAGE.url}" />`,
      jsonLd(graphFor(page, lang)),
    )
  }

  // (React itself emits preloads for the hero image and logo)
  tags.push(...fontPreloads(lang))
  tags.push(...analyticsTags())
  return tags.join('\n    ')
}

/* ---------- pages ---------- */

function writePage(file, pathname, page, lang, opts) {
  const { html } = render(pathname)
  const out = template
    .replace('<html lang="ar" dir="rtl">', `<html lang="${lang}" dir="${lang === 'ar' ? 'rtl' : 'ltr'}">`)
    .replace('<!--app-head-->', headFor(page, lang, opts))
    .replace('<!--app-html-->', html)
  mkdirSync(dirname(file), { recursive: true })
  writeFileSync(file, out)
}

const written = []
for (const lang of LANGS) {
  for (const page of PAGES) {
    const path = pathFor(page, lang)
    writePage(join(DIST, path, 'index.html'), path, page, lang)
    written.push(path)
  }
}

// 404: Arabic (site default); any unknown path renders the notfound page
writePage(join(DIST, '404.html'), '/404/', 'notfound', 'ar', { notFound: true })
written.push('404.html')

/* ---------- sitemap.xml ---------- */

const urlEntries = PAGES.flatMap((page) =>
  LANGS.map((lang) => {
    const alternates = [
      ...LANGS.map((l) => `    <xhtml:link rel="alternate" hreflang="${HREFLANG[l]}" href="${abs(pathFor(page, l))}"/>`),
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(pathFor(page, 'ar'))}"/>`,
    ]
    const images =
      page === 'work'
        ? GALLERY.map(
            (g) => `    <image:image><image:loc>${abs(`/img/work/${g.file}.webp`)}</image:loc></image:image>`,
          )
        : page === 'home'
          ? [`    <image:image><image:loc>${abs('/img/hero-products.webp')}</image:loc></image:image>`]
          : []
    return [
      '  <url>',
      `    <loc>${abs(pathFor(page, lang))}</loc>`,
      `    <lastmod>${TODAY}</lastmod>`,
      ...alternates,
      ...images,
      '  </url>',
    ].join('\n')
  }),
)

writeFileSync(
  join(DIST, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urlEntries.join('\n')}
</urlset>
`,
)

/* ---------- llms.txt (plain-language summary for AI agents) ---------- */

const en = dict.en
const ar = dict.ar
writeFileSync(
  join(DIST, 'llms.txt'),
  `# Art Zone Printing (آرت زون للطباعة)

> ${en.seo.home}

Print, packaging and signage manufacturer based in Dammam, Eastern Province, Saudi Arabia. In operation since 2016. Bilingual site: Arabic at the root, English under /en/.

## Contact
- Phone & WhatsApp: +966 53 573 8136 (https://wa.me/966535738136)
- Address: ${en.contact.address}
- Google Maps: ${GBP_URL}
- Delivery: every city in Saudi Arabia

## Services
${en.caps.items.map((i, n) => `- ${i.name} (${ar.caps.items[n].name}): ${i.desc}`).join('\n')}

## Industries served
${en.industries.items.map((i) => `- ${i.name}: ${i.desc}`).join('\n')}

## FAQ
${en.contactPage.faq.map((f) => `- ${f.q} ${f.a}`).join('\n')}

## Pages
${PAGES.map((p) => `- [${en.titles[p]}](${abs(pathFor(p, 'en'))}) · [${ar.titles[p]}](${abs(pathFor(p, 'ar'))})`).join('\n')}
`,
)

rmSync(SSR_DIR, { recursive: true, force: true })
console.log(`prerendered ${written.length} pages + sitemap.xml + llms.txt`)
