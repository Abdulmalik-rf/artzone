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
const { render, dict, GALLERY, PAGE_PATHS, pathFor, SERVICES, SLUG_BY_CAP, GUIDES, pageMeta } = ssr
const { LEGAL_NAME, CR_NUMBER, UNIFIED_NUMBER, VAT_NUMBER } = ssr
const PAGES = Object.keys(PAGE_PATHS)
/* every indexable route: fixed pages + one per service */
const ROUTES = [
  ...PAGES.map((page) => ({ page, slug: null })),
  ...SERVICES.map((s) => ({ page: 'service', slug: s.slug })),
  ...GUIDES.map((g) => ({ page: 'guide', slug: g.slug })),
]
const SERVICE_BY_SLUG = Object.fromEntries(SERVICES.map((s) => [s.slug, s]))
const GUIDE_BY_SLUG = Object.fromEntries(GUIDES.map((g) => [g.slug, g]))
const PHOTO = Object.fromEntries(GALLERY.map((g) => [g.file, g]))

// The prerendered HTML is readable before JS runs, so the bundle can yield
// bandwidth to fonts and images (measured: FCP 2.8 s -> 2.1 s on slow 4G).
const template = readFileSync(join(DIST, 'index.html'), 'utf8').replace(
  '<script type="module" crossorigin src=',
  '<script type="module" crossorigin fetchpriority="low" src=',
)
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
    legalName: LEGAL_NAME,
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
    vatID: VAT_NUMBER,
    taxID: VAT_NUMBER,
    identifier: [
      { '@type': 'PropertyValue', propertyID: 'Saudi Commercial Registration (CR)', value: CR_NUMBER },
      { '@type': 'PropertyValue', propertyID: 'Saudi Unified Establishment Number', value: UNIFIED_NUMBER },
    ],
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
        itemOffered: {
          '@type': 'Service',
          name: item.name,
          description: item.desc,
          ...(SLUG_BY_CAP[item.tag] && { url: abs(pathFor('service', lang, SLUG_BY_CAP[item.tag])) }),
        },
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

const PAGE_TYPE = {
  home: 'WebPage',
  services: 'CollectionPage',
  service: 'WebPage',
  guides: 'CollectionPage',
  guide: 'WebPage',
  work: 'CollectionPage',
  about: 'AboutPage',
  contact: 'ContactPage',
}

// all service images live in /img/work/ (gallery photos + plant shots)
const serviceImages = (svc) => svc.images.map((f) => abs(`/img/work/${f}.webp`))

function graphFor(page, lang, slug) {
  const t = dict[lang]
  const url = abs(pathFor(page, lang, slug))
  const meta = pageMeta(t, page, slug, lang)
  const webPage = {
    '@type': PAGE_TYPE[page],
    '@id': `${url}#webpage`,
    url,
    name: meta.title,
    description: meta.description,
    inLanguage: HREFLANG[lang],
    isPartOf: { '@id': `${SITE}/#website` },
    about: { '@id': `${SITE}/#business` },
    primaryImageOfPage: { '@type': 'ImageObject', url: OG_IMAGE.url },
  }
  const graph = [businessNode(lang), websiteNode(lang), webPage]

  if (page !== 'home') {
    const crumbs = [{ name: t.serviceUi.home, item: abs(pathFor('home', lang)) }]
    if (page === 'service') {
      crumbs.push({ name: t.serviceUi.services, item: abs(pathFor('services', lang)) })
      crumbs.push({ name: SERVICE_BY_SLUG[slug][lang].name, item: url })
    } else if (page === 'guide') {
      crumbs.push({ name: t.guideUi.guides, item: abs(pathFor('guides', lang)) })
      crumbs.push({ name: GUIDE_BY_SLUG[slug][lang].h1, item: url })
    } else {
      crumbs.push({ name: t.titles[page], item: url })
    }
    webPage.breadcrumb = { '@id': `${url}#breadcrumb` }
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, ...c })),
    })
  }

  if (page === 'services') {
    webPage.mainEntity = {
      '@type': 'ItemList',
      itemListElement: SERVICES.map((svc, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: svc[lang].name,
        url: abs(pathFor('service', lang, svc.slug)),
      })),
    }
  }

  if (page === 'guides') {
    webPage.mainEntity = {
      '@type': 'ItemList',
      itemListElement: GUIDES.map((g, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: g[lang].h1,
        url: abs(pathFor('guide', lang, g.slug)),
      })),
    }
  }

  if (page === 'guide') {
    const g = GUIDE_BY_SLUG[slug]
    const c = g[lang]
    const image = abs(`/img/work/${g.image}.webp`)
    webPage.mainEntity = { '@id': `${url}#article` }
    webPage.primaryImageOfPage = { '@type': 'ImageObject', url: image }
    graph.push(
      {
        '@type': 'Article',
        '@id': `${url}#article`,
        headline: c.h1,
        description: c.description,
        abstract: c.summary,
        inLanguage: HREFLANG[lang],
        // full timestamps with the Riyadh offset (Google flags bare dates)
        datePublished: `${g.published}T09:00:00+03:00`,
        dateModified: `${g.updated}T09:00:00+03:00`,
        image,
        mainEntityOfPage: { '@id': `${url}#webpage` },
        author: { '@id': `${SITE}/#business` },
        publisher: { '@id': `${SITE}/#business` },
        about: g.services.map((sl) => ({ '@id': `${abs(pathFor('service', lang, sl))}#service` })),
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        inLanguage: HREFLANG[lang],
        mainEntity: c.faq.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    )
  }

  if (page === 'service') {
    const svc = SERVICE_BY_SLUG[slug]
    const c = svc[lang]
    const images = serviceImages(svc)
    webPage.mainEntity = { '@id': `${url}#service` }
    if (images.length) webPage.primaryImageOfPage = { '@type': 'ImageObject', url: images[0] }
    graph.push(
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: c.name,
        serviceType: c.name,
        description: c.summary,
        url,
        provider: { '@id': `${SITE}/#business` },
        areaServed: [
          { '@type': 'City', name: CITIES[lang][0] },
          { '@type': 'Country', name: lang === 'ar' ? 'المملكة العربية السعودية' : 'Saudi Arabia' },
        ],
        ...(images.length && { image: images }),
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: c.name,
          itemListElement: c.options.map((o) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: o } })),
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        inLanguage: HREFLANG[lang],
        mainEntity: c.faq.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    )
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

function headFor(page, lang, slug, { notFound = false } = {}) {
  const t = dict[lang]
  const { title, description: desc } = pageMeta(t, page, slug, lang)
  const url = abs(pathFor(page, lang, slug))
  // service pages share their first real job photo; everything else the brand card
  const svcImage =
    page === 'service'
      ? serviceImages(SERVICE_BY_SLUG[slug])[0]
      : page === 'guide'
        ? abs(`/img/work/${GUIDE_BY_SLUG[slug].image}.webp`)
        : null
  const ogImage = svcImage ? { url: svcImage } : OG_IMAGE
  const tags = [
    `<title>${esc(title)}</title>`,
    `<meta name="description" content="${esc(desc)}" />`,
  ]

  if (notFound) {
    tags.push('<meta name="robots" content="noindex" />')
  } else {
    tags.push(
      `<link rel="canonical" href="${url}" />`,
      ...LANGS.map((l) => `<link rel="alternate" hreflang="${HREFLANG[l]}" href="${abs(pathFor(page, l, slug))}" />`),
      `<link rel="alternate" hreflang="x-default" href="${abs(pathFor(page, 'ar', slug))}" />`,
      `<meta property="og:type" content="${page === 'guide' ? 'article' : 'website'}" />`,
      `<meta property="og:site_name" content="${lang === 'ar' ? 'آرت زون للطباعة' : 'Art Zone Printing'}" />`,
      `<meta property="og:title" content="${esc(title)}" />`,
      `<meta property="og:description" content="${esc(desc)}" />`,
      `<meta property="og:url" content="${url}" />`,
      `<meta property="og:image" content="${ogImage.url}" />`,
      ...(ogImage.width
        ? [
            `<meta property="og:image:width" content="${ogImage.width}" />`,
            `<meta property="og:image:height" content="${ogImage.height}" />`,
            `<meta property="og:image:alt" content="${esc(t.hero.showcase.alt)}" />`,
          ]
        : []),
      `<meta property="og:locale" content="${OG_LOCALE[lang]}" />`,
      `<meta property="og:locale:alternate" content="${OG_LOCALE[lang === 'ar' ? 'en' : 'ar']}" />`,
      `<meta name="twitter:card" content="summary_large_image" />`,
      `<meta name="twitter:title" content="${esc(title)}" />`,
      `<meta name="twitter:description" content="${esc(desc)}" />`,
      `<meta name="twitter:image" content="${ogImage.url}" />`,
      jsonLd(graphFor(page, lang, slug)),
    )
  }

  // (React itself emits preloads for the hero image and logo)
  tags.push(...fontPreloads(lang))
  tags.push(...analyticsTags())
  return tags.join('\n    ')
}

/* ---------- pages ---------- */

function writePage(file, pathname, page, lang, slug, opts) {
  const { html } = render(pathname)
  const out = template
    .replace('<html lang="ar" dir="rtl">', `<html lang="${lang}" dir="${lang === 'ar' ? 'rtl' : 'ltr'}">`)
    .replace('<!--app-head-->', headFor(page, lang, slug, opts))
    .replace('<!--app-html-->', html)
  mkdirSync(dirname(file), { recursive: true })
  writeFileSync(file, out)
}

const written = []
for (const lang of LANGS) {
  for (const { page, slug } of ROUTES) {
    const path = pathFor(page, lang, slug)
    writePage(join(DIST, path, 'index.html'), path, page, lang, slug)
    written.push(path)
  }
}

// 404: Arabic (site default); any unknown path renders the notfound page
writePage(join(DIST, '404.html'), '/404/', 'notfound', 'ar', null, { notFound: true })
written.push('404.html')

/* ---------- sitemap.xml ---------- */

const imageTag = (loc) => `    <image:image><image:loc>${loc}</image:loc></image:image>`
const urlEntries = ROUTES.flatMap(({ page, slug }) =>
  LANGS.map((lang) => {
    const alternates = [
      ...LANGS.map((l) => `    <xhtml:link rel="alternate" hreflang="${HREFLANG[l]}" href="${abs(pathFor(page, l, slug))}"/>`),
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(pathFor(page, 'ar', slug))}"/>`,
    ]
    const images =
      page === 'work'
        ? GALLERY.map((g) => imageTag(abs(`/img/work/${g.file}.webp`)))
        : page === 'home'
          ? [imageTag(abs('/img/hero-products.webp'))]
          : page === 'service'
            ? serviceImages(SERVICE_BY_SLUG[slug]).map(imageTag)
            : page === 'guide'
              ? [imageTag(abs(`/img/work/${GUIDE_BY_SLUG[slug].image}.webp`))]
              : []
    return [
      '  <url>',
      `    <loc>${abs(pathFor(page, lang, slug))}</loc>`,
      `    <lastmod>${page === 'guide' ? GUIDE_BY_SLUG[slug].updated : TODAY}</lastmod>`,
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
- Registered (legal) name: ${LEGAL_NAME}
- Commercial registration (CR): ${CR_NUMBER} · VAT number: ${VAT_NUMBER}
- Phone & WhatsApp: +966 53 573 8136 (https://wa.me/966535738136)
- Address: ${en.contact.address}
- Google Maps: ${GBP_URL}
- Delivery: every city in Saudi Arabia

## Services
${en.caps.items
  .map((i, n) => {
    const slug = SLUG_BY_CAP[i.tag]
    const link = slug ? ` — ${abs(pathFor('service', 'en', slug))}` : ''
    return `- ${i.name} (${ar.caps.items[n].name}): ${i.desc}${link}`
  })
  .join('\n')}
- Banner & Wide-Format Printing (${SERVICE_BY_SLUG.banners.ar.name}): ${SERVICE_BY_SLUG.banners.en.short} — ${abs(pathFor('service', 'en', 'banners'))}

## Guides
${GUIDES.map((g) => `- [${g.en.h1}](${abs(pathFor('guide', 'en', g.slug))}): ${g.en.summary}`).join('\n')}

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
