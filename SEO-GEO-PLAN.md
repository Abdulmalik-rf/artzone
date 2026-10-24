# Art Zone Printing — SEO & GEO Plan

_Audit date: 24 Oct 2026 · Site: https://art-zone-print.com · Codebase: `artzone-press/`_

**GEO** (generative engine optimization) = getting cited and recommended by ChatGPT, Gemini / Google AI Mode / AI Overviews, Perplexity, Copilot and Claude. In 2026 it rests on the same foundations as SEO: crawlable content, a clear business entity, trusted third-party mentions, and pages that answer real questions with specific facts.

---

## 0. Diagnosis in one paragraph

Search engines and AI assistants cannot see this business right now. The website is an **empty 1.2 KB HTML shell**: all the content is drawn by JavaScript, every "page" is a `#hash` (so Google sees one URL), the English version has no URL at all, and there's no robots.txt, sitemap, canonical tag, Open Graph or structured data. AI crawlers mostly don't run JavaScript, so ChatGPT, Claude and Perplexity read a blank page, and Hostinger's CDN **blocks GPTBot outright (HTTP 429)**. Off the website, the Google Business Profile (4.8★, 22 reviews, 169 photos) is the brand's only real asset, but **it has no website linked and shows a different phone number** from the site. Web searches for the brand return nothing, and the name collides with an unrelated Saudi "ArtZone" app.

The good news: the competition is weak. Results for "مطبعة الدمام", "طباعة اكواب ورقية الدمام" and similar queries are mostly Haraj and Mstaml classifieds, magicpin and D&B directory stubs, and competitors with no real websites. AI answers to "best printer in Dammam" currently fall back to "check Google Maps". A crawlable, fact-rich site plus a strong Maps profile can win this niche quickly.

---

## 1. Audit findings (with evidence)

### 🔴 Critical: blocks all ranking and AI citation

| # | Finding | Evidence | Impact |
|---|---|---|---|
| C1 | Client-side rendering only | `curl https://art-zone-print.com/` returns 1,228 bytes: `<div id="root"></div>` and a script | GPTBot, ClaudeBot and PerplexityBot see no text. Google must render JS (slower, less reliable) |
| C2 | Hash routing (`#/work`, `#/about`, `#/contact`) | `src/router.jsx` | Google ignores fragments, so the whole site is **one indexable URL**. No page can rank for its own topic |
| C3 | English has no URL | Language comes from `localStorage` (`src/i18n.jsx:750`) | English content can never be indexed. No hreflang possible |
| C4 | Hostinger CDN blocks GPTBot | GPTBot UA → **429** every time. ClaudeBot, PerplexityBot, OAI-SearchBot, Googlebot and Bingbot → 200 | OpenAI's index can't fetch the site |
| C5 | GBP has **no website** and a **different phone** | Maps: "إضافة الموقع الإلكتروني" is empty. GBP phone **057 366 5867** vs site **+966 53 573 8136** | No link between the brand's strongest asset and the site. Inconsistent business details weaken trust for Google and AI |
| C6 | No robots.txt, sitemap.xml or analytics | robots.txt / sitemap.xml → 404. No GA4 / Search Console tags | Can't submit, measure or debug anything |

### 🟠 High

| # | Finding | Evidence |
|---|---|---|
| H1 | Duplicate hosts | `www.` and the temp `royalblue-hamster-323320.hostingersite.com` both serve 200 with identical content. No canonical tag, no www→apex redirect |
| H2 | Wrong-language meta | The Arabic-default page ships an **English** meta description (`index.html`). The `<title>` mixes EN and AR |
| H3 | No structured data | 0 JSON-LD blocks. No LocalBusiness, Service, FAQ or Breadcrumb |
| H4 | No social / share meta | 0 `og:` tags. WhatsApp link previews (the main sales channel) show nothing |
| H5 | Gallery images are anonymous | Alt text = `"JOB 01"`, `"JOB 02"`… (`src/pages/Work.jsx`). File names `p80.jpeg`. ~3 MB of JPEGs, no `width`/`height` |
| H6 | 404s return Hostinger's default page | `/work` → "This Page Does Not Exist" (generic) |
| H7 | Brand-name collision and variants | Another Saudi "ArtZone" exists (artzone.sa, app `com.artzone.sa`, @ArtZone_KSA). The brand appears as "آرت زون", "ارت زون", "مطبعة ارت زون للطباعة" (GBP) and "ARTZONE PRINTING" (Maps query). The old site's email was `info@artzone.sa`, a domain that now redirects to the other ArtZone |
| H8 | Search vocabulary mismatch | People search **كروت شخصية, بوكسات, استكرات/ستيكرات, اكواب دبل, لوحات محلات**. The site (formal register) says بطاقات أعمال, علب, ملصقات. Some of these are different words, not spelling variants |

### 🟡 Medium

- H1 headline is a slogan ("كافة تقنيات الطباعة والتغليف. تحت سقف تصنيعي واحد.") that doesn't name what the business is or where. Home is ~1,400 words in a single page, with 12 services sharing one URL.
- No NAP block (name, address, phone) in the footer. The footer shows only the phone, and no hours anywhere.
- Claims that need proof or should be specific: "500+ brands", "24h to press", "SFDA-approved ink" (a regulatory claim; keep only if there's documentation).
- Fonts: 3 Google Font families, render-blocking. `logo.png` is 177 KB and used as the favicon.
- `[data-reveal]` sets `opacity:0` until JS runs, so content is invisible without JS (fix as part of prerendering).
- HTML is served `x-hcdn-cache-status: DYNAMIC`, TTFB ~600 ms. Static prerendered files will cache.

### ✅ Working

HTTPS with an http→https 301, `lang="ar" dir="rtl"`, a single H1 per view, a proper H2/H3 hierarchy, a light bundle (282 KB transfer), real portfolio photos, a strong GBP rating (4.8), an existing FAQ, and a WhatsApp conversion path.

---

## 2. Market and keyword intelligence

Source: Google Autocomplete (`gl=sa`, `hl=ar`), pulled 24 Oct 2026. These are real query patterns. Validate volumes in Google Keyword Planner and Search Console once tracking is live.

**Core head terms:** مطبعة الدمام · مطابع الدمام · مطبعة في الدمام · **افضل مطبعة في الدمام** · **ارخص مطبعة في الدمام** · مطابع الدمام والخبر · محلات طباعه الدمام · مطبعة قريبة مني (مفتوح الآن) · **مطابع الدمام انستقرام** (people look for Instagram portfolios)

**Product × Dammam (pages that sell):**
- Cups: طباعة اكواب ورقية الدمام · طباعة اكواب ورقية **دبل** · طباعة اكواب قهوة ورقية · طباعة اكواب بلاستيك · طباعة اكواب الدمام
- Boxes: **مطبعة بوكسات الدمام** · طباعة بوكسات مطاعم · طباعة بوكسات **حلا** · طباعة بوكسات **قهوة** · طباعة بوكسات شحن · طباعة بوكسات بالجملة · طباعة بوكسات واكياس
- Bags: مطبعة اكياس الدمام · طباعة اكياس ورقية · طباعة اكياس الدمام
- Cards: طباعة كروت الدمام · طباعة كروت شخصية **فاخرة / فوري / ديجيتال** · اسعار طباعة كروت شخصية
- Stickers and labels: مطبعة ملصق الدمام · طباعة ستيكرات حسب الطلب · استكرات **شفافة / ضد الماء** · طباعة ليبل **رول / قماش / ملابس**
- Signage: لوحات محلات الدمام · **تركيب لوحات محلات الدمام** · لوحات مضيئة للمحلات · مصنع لوحات ارشادية · اسوار مشاريع / تنفيذ اسوار مشاريع
- Banners: طباعة بنر الدمام · كم سعر طباعة البنر
- Other demand: طباعة منيو مطاعم (اكريلك / جلد) · تكلفة طباعة منيو · طباعة ورق تغليف (هدايا / شوكولاتة / ورد) · ستاندات مواليد · توزيعات مواليد الدمام · ستاند فوركس · طباعة كتب الدمام · مطبعة كتب الدمام · طباعة تيشرتات الدمام · هدايا دعائية الدمام · مجسمات مشاريع تخرج
- English: printing press dammam · business card printing dammam · sticker printing dammam · banner printing dammam · t shirt printing dammam

**Local competitors named in autocomplete:** مطابع الملحم، المطوع، الديوان، الرجاء، الوفاء، رمس (RMS)، الخير، ويج، الدمام الحديثة. None showed a strong website in the searches.

**Nearby cities (searched as "مطبعة + city"):** الخبر، الظهران، القطيف، الجبيل (الصناعية)، الأحساء.

**Takeaways**
1. Demand is **product-first and city-second**. Each product needs its own page.
2. Price intent is real ("كم سعر / اسعار / تكلفة / ارخص"). Published "starting from" prices and MOQs are a big GEO lever, because AI assistants quote numbers.
3. Users type colloquially and without hamza (اكواب، اكياس، طباعه). Google normalizes hamza, but **بوكسات / كروت / استكرات** must actually appear on the page.

> **Register decision needed.** The project rule is to keep Arabic copy formal (بطاقات أعمال, not كروت شخصية). Recommendation: keep the formal register for headings and body, and add the search term **once, in parentheses or a spec line**, e.g. «بطاقات الأعمال (الكروت الشخصية)», «العلب والبوكسات», «الملصقات (الاستيكرات)». The voice stays formal and the page still matches what people type.

---

## 3. Phase 1 — Technical foundation (week 1–2) · _code work, I can do this_

### 3.1 Path routing + build-time prerendering (fixes C1, C2, C3)
Keep Vite + React and the static Hostinger deploy. Add a **prerender step** so every route ships as real HTML.

- **URL scheme:** Arabic at root (it's the default market), English under `/en/`. The same slug in both languages keeps hreflang pairing simple and links clean when shared on WhatsApp (Arabic slugs turn into long `%D8%…` strings).
  - `/` · `/en/`
  - `/services/` · `/services/paper-cups/` …
  - `/work/` · `/about/` · `/contact/`
- **Implementation:**
  - `src/entry-server.jsx` renders with React 19 `renderToString` for a given `(path, lang)`.
  - `scripts/prerender.mjs` runs after `vite build`. It loops the route list, injects the rendered markup and per-page `<head>`, and writes `dist/<route>/index.html`.
  - The client switches to `hydrateRoot`. The router moves from `hashchange` to the History API with real `<a href>` links. The language comes from the URL prefix, and `localStorage` is used only to remember the toggle.
  - No automatic language redirects (Google advises against them). The toggle links to the counterpart URL.
- **Keep old links working:** a small client snippet maps `#/work` → `/work/` and so on (`replaceState`).
- **Reveal animation:** only hide `[data-reveal]` when `html.js` is set, so prerendered content is visible without JS.
- **CI:** `.github/workflows/deploy.yml` stays the same; `npm run build` just gains the prerender step.

### 3.2 Per-page `<head>` (fixes H2, H4)
Generated from a single `seo` map in `i18n.jsx`:
- A unique `<title>` (≤ 60 chars) and meta description (≤ 155 chars) **in the page's language**.
- `<link rel="canonical">` (self).
- `hreflang`: `ar-SA`, `en`, `x-default` → Arabic.
- Open Graph and Twitter tags with a 1200×630 `og:image` per section (real product photos). `og:locale` = `ar_SA` / `en_US`.
- Favicon set: `favicon.ico`, `icon.svg`, `apple-touch-icon.png` (180), `site.webmanifest`, `theme-color`. Stop using the 177 KB PNG as the favicon.

Title patterns:
- Home AR: `آرت زون للطباعة | مطبعة ومصنع تغليف ولوحات إعلانية في الدمام`
- Service AR: `طباعة أكواب ورقية بالشعار في الدمام — أكواب دبل وسنقل | آرت زون`
- Home EN: `Art Zone Printing | Print, Packaging & Signage Factory in Dammam`

### 3.3 Server config: `public/.htaccess` (fixes H1, H6)
Hostinger runs LiteSpeed, which honors `.htaccess`.
- 301 `www.art-zone-print.com` → `art-zone-print.com`.
- 301 `royalblue-hamster-323320.hostingersite.com` → the main domain, or at least serve `X-Robots-Tag: noindex` when `HTTP_HOST` is the temp host.
- `ErrorDocument 404 /404.html`: a branded, prerendered 404 page that returns a real 404 status and links to services.
- `Cache-Control: public, max-age=31536000, immutable` for `/assets/*` (hashed files), and a short cache for HTML.
- Trailing-slash consistency (one form, 301 the other).

### 3.4 Crawl-control files (fixes C6)
- **`robots.txt`:** allow all, `Sitemap:` line. Explicitly allow `OAI-SearchBot`, `ChatGPT-User`, `GPTBot`, `ClaudeBot`, `Claude-SearchBot`, `Claude-User`, `PerplexityBot`, `Perplexity-User`, `Google-Extended`, `Applebot-Extended`, `Bingbot`. For a local business that wants to be recommended, being in training data is a benefit, not a cost.
- **`sitemap.xml`:** generated by the prerender script, with `xhtml:link` hreflang alternates, real `lastmod`, and an image sitemap entry for each gallery photo.
- **`llms.txt`:** a short Markdown summary of who we are, services, areas, contact, and key URLs. Google says it ignores llms.txt, but it costs ~10 minutes and some other agents read it. Low priority.

### 3.5 Unblock GPTBot at Hostinger (fixes C4) · _you, in hPanel_
hPanel → Websites → art-zone-print.com → **CDN / Security → bot protection / "AI crawlers"**: allow AI bots, including GPTBot. The Hostinger API has no endpoint for this setting. After the change I'll re-run the user-agent test (`curl -A GPTBot…` should return 200).

### 3.6 Structured data (JSON-LD, prerendered into each page) (fixes H3)
- **Site-wide `LocalBusiness` + `Organization`** (one `@id`, e.g. `https://art-zone-print.com/#business`):
  - `name` "آرت زون للطباعة"
  - `alternateName` ["Art Zone Printing", "مطبعة آرت زون", "ارت زون للطباعة", "ARTZONE PRINTING"]
  - `url`, `logo`, `image`, `telephone` (one confirmed number), `address` (PostalAddress: شارع 18، البادية، الدمام 32243، SA), `geo` 26.4313401, 50.0963457 (already in `wa.js`)
  - `hasMap` (GBP URL), `openingHoursSpecification` (match GBP exactly), `foundingDate` 2016
  - `areaServed` [Dammam, Khobar, Dhahran, Qatif, Jubail, Al-Ahsa, Saudi Arabia], `priceRange`, `sameAs` [GBP, Instagram, TikTok, Snapchat, X, LinkedIn — only real profiles], `hasOfferCatalog` → the services
  - Optional: `vatID`, `identifier` (Commercial Registration number). These are strong trust signals.
  - **Don't** add `aggregateRating` from your own site. Google treats self-serving LocalBusiness reviews as ineligible, and it can trigger a manual action.
- **Each service page:** `Service` (`serviceType`, `provider` → `#business`, `areaServed`, an `offers` price range when known), `BreadcrumbList`, `FAQPage`. FAQ rich results are limited to gov/health sites, but the markup still helps machines parse question–answer pairs.
- **Gallery / case studies:** `ImageObject` with `caption`, `contentLocation`, `creator` → `#business`.
- Validate everything with the Rich Results Test and validator.schema.org before shipping.

### 3.7 Images and performance (fixes H5)
- Rename files descriptively (`paper-cups-double-wall-cafe-dammam.webp`). Write real alt text in the page language, e.g. «أكواب ورقية دبل مطبوعة بشعار مقهى — مقاس 8 أونز».
- Convert the portfolio to WebP/AVIF with 2–3 `srcset` widths, and add `width`/`height` to every `<img>` to prevent layout shift. Expect ~3 MB → ~800 KB.
- Self-host fonts with `font-display: swap` and an Arabic subset, and preload the hero font. Consider dropping one of the three families.
- Logo → SVG or ~10 KB WebP. Preload the hero image (already `fetchpriority=high`).
- Target Core Web Vitals on mobile: LCP < 2.5 s, CLS < 0.1, INP < 200 ms. Measure in Search Console's CWV report and PageSpeed Insights.

### 3.8 Measurement plumbing (fixes C6)
- Verify **Google Search Console** (Domain property via DNS TXT at Hostinger) and **Bing Webmaster Tools** (import from GSC). Bing's index feeds ChatGPT search and Copilot. Submit sitemaps and enable IndexNow in Bing.
- **GA4**, or a lighter privacy-friendly tool, with a key event on every `wa.me` and `tel:` click. Record the product parameter from the QuoteBuilder (e.g. `wa_click{product:"paper-cups", page:"/services/paper-cups/"}`).
- A GA4 channel group for AI referrals: `chatgpt.com`, `perplexity.ai`, `gemini.google.com`, `copilot.microsoft.com`, `claude.ai`.
- UTM on the GBP website link (`?utm_source=google&utm_medium=organic&utm_campaign=gbp`) so Maps traffic is distinguishable.

---

## 4. Phase 2 — Content architecture (weeks 2–6) · _code + your facts_

### 4.1 Site map (target)

```
/                         Home (brand + what/where + top services + proof + NAP)
/services/                Services hub (all 12 lines, short answer for each)
  /paper-cups/            طباعة أكواب ورقية (سنقل/دبل/بلاستيك، مقاسات، أقل كمية)
  /boxes/                 طباعة علب وبوكسات (مطاعم، حلا، قهوة، شحن، هارد كفر)
  /paper-bags/            طباعة أكياس ورقية
  /food-packaging/        تغليف المطاعم: ورق تغليف، علب وجبات
  /business-cards/        بطاقات الأعمال (الكروت الشخصية) + المطبوعات الرسمية
  /stickers-labels/       الملصقات والاستيكرات + ليبل رول + ليبل قماش
  /signage/               اللوحات الإعلانية والمضيئة + لوحات المحلات + حروف بارزة
  /wayfinding-signs/      اللوحات الإرشادية للمباني والمشاريع
  /hoardings/             أسوار المشاريع
  /exhibitions-events/    بوثات المعارض وتجهيز الفعاليات
  /banners/               طباعة البنرات والرول أب
  /menus/                 طباعة المنيو (ورق، أكريليك، جلد)
  /corporate-gifts/       الهدايا الدعائية + طباعة وتطريز الملابس
  /book-printing/         طباعة وتجليد الكتب والمجلات
  /newborn-occasions/     ستاندات وتوزيعات المواليد والمناسبات
  /graduation-projects/   مجسمات ومشاريع التخرج (فوركس، أكريليك، ليزر)
/industries/              (phase 3) cafés & restaurants, home businesses, corporate, clinics, events
/work/                    Gallery, filterable, every photo captioned
/work/<case-study>/       3–6 real case studies
/guides/                  4–8 evergreen guides (see 4.4)
/about/                   Facts page: CR, VAT, founding, plant, machines, team, capacity
/contact/                 NAP, hours, map, WhatsApp, FAQ
```

Start with the **top 8 by demand and margin**: paper cups, boxes, paper bags, business cards, stickers/labels, signage, banners, corporate gifts. Add the rest as photos and facts become available. Thin pages hurt more than missing pages.

### 4.2 Service-page template (built once, filled per service)
Each section is written so an AI assistant can lift it as a standalone answer:

1. **H1** with product + city: «طباعة أكواب ورقية بالشعار في الدمام».
2. **Answer-first summary (40–60 words):** what you make, for whom, minimum quantity, lead time, delivery area, and how to order. This is the paragraph AI tools quote.
3. **Spec table:** types (سنقل / دبل / بلاستيك), sizes (4/8/12/16 oz), materials, print methods, finishes, **MOQ**, **lead time**, **"starting from" price or a price range**, delivery cities.
4. **Real photos** (3–6) with descriptive captions.
5. **How ordering works** (the 5 production stations, short).
6. **FAQ (4–6 Qs)** taken from real queries: «كم أقل كمية لطباعة الأكواب؟», «كم سعر طباعة 1000 كوب ورقي؟», «هل الأحبار آمنة للأغذية؟», «هل توصلون للخبر والجبيل؟».
7. **CTA:** WhatsApp pre-filled with the product name (the QuoteBuilder already supports this), plus a phone link.
8. **Related services** (internal links) and a "last updated" date.
9. JSON-LD: Service, BreadcrumbList, FAQPage.

### 4.3 Gallery and proof
- Caption every job by product, industry and spec: «أكواب دبل 8 أونز — مقهى مختص، الخبر» instead of «JOB 07». Filter by product category, and link each category to its service page.
- Write **3–6 case studies** with client permission: brief → material/spec → quantity → turnaround → photo set → (optional) client quote. Case studies are the most "non-commodity" content you can publish, which is exactly what Google's AI-features guide asks for.
- Pair the site with an active **Instagram** account (people search «مطابع الدمام انستقرام»). Link it from the site and in `sameAs`.

### 4.4 Guides (low volume, high citation value)
Write a few guides that answer what buyers and AI assistants ask, with specific numbers:
- «دليل مقاسات الأكواب الورقية: 4 و8 و12 و16 أونز — أيها يناسب مقهاك؟»
- «كم تكلفة طباعة الكروت الشخصية في السعودية؟ العوامل التي تحدد السعر»
- «الفرق بين الطباعة الأوفست والديجيتال ومتى تختار كل منهما»
- «أقل كمية لطباعة البوكسات والأكياس — حلول للمشاريع المنزلية»
- «كيف تجهّز ملف التصميم للطباعة (CMYK، النزف، الدقة)»
- EN: "Paper cup printing in Saudi Arabia: sizes, MOQs and lead times"

Each guide needs a byline (company or named expert), a date, a comparison table, and links to the related service page.

### 4.5 About = the facts page
AI assistants recommend businesses they can **verify**. Publish only facts you can stand behind:
- Legal name, CR number, VAT number, founding year, plant address and size, machine list (offset / digital / wide-format / laser / die-cut, with brands if you're comfortable), team size, daily capacity, divisions, delivery coverage, working hours.
- Re-check the claims "500+ brands", "24h to press" and "SFDA-approved inks". Keep what can be backed up, and phrase it precisely (e.g. "inks compliant with SFDA food-contact requirements", only if you have documentation).

### 4.6 Home page tweaks
- Make the **H1 descriptive** and keep the slogan as the display line: H1 «آرت زون للطباعة — مطبعة ومصنع تغليف ولوحات إعلانية في الدمام», with «كافة تقنيات الطباعة والتغليف تحت سقف تصنيعي واحد» styled as the big visual headline (a `<p>`).
- Each of the 12 capability cards links to its service page.
- Footer **NAP block** on every page in `<address>`: name, full address, the one phone number, hours, and a Maps link.

---

## 5. Phase 3 — Local SEO & entity building (start week 1, ongoing) · _you / the team_

This is the highest-ROI work. For a local manufacturer, Maps and reviews decide most leads, and AI assistants lean on the same data.

### 5.1 Google Business Profile
- [ ] **Add the website** (`https://art-zone-print.com/?utm_source=google&utm_medium=organic&utm_campaign=gbp`).
- [ ] **Fix the phone mismatch.** Choose one primary number and use it on GBP, the site, schema and every directory. Add the second number as "additional phone" on GBP if both are real.
- [ ] Name: keep it to the real business name. Don't stuff keywords into it (a suspension risk). Ideally make it identical to the site and schema, e.g. «آرت زون للطباعة» / "Art Zone Printing".
- [ ] **Categories:** the primary is currently "خدمة طباعة رقمية" (Digital printing service). Test "مطبعة / Print shop" or "Commercial printer" as primary, and add secondaries that match real divisions: Sign shop, Packaging company/supply, Promotional products supplier, Sticker manufacturer, T-shirt printing, Banner store, Book printing / bookbinder, Exhibition planner. Check that each exists in GBP's list. Change one thing at a time and watch rankings for 2–3 weeks.
- [ ] **Services and Products** sections: one entry per service page, with photo, short description, "from" price, and a link to the matching page.
- [ ] Description (750 chars, Arabic): what you make, the divisions, Dammam + Eastern Province + Kingdom-wide delivery, since 2016.
- [ ] Hours (including Saturday and holiday hours), attributes, service area (Eastern Province cities).
- [ ] **Posts weekly** (a new job photo + a link to its service page), and photos weekly. The 169 existing photos are a strong base.

### 5.2 Reviews (22 → 100+ in 6 months)
- After each delivery, the WhatsApp sales staff send a short review link (GBP → "Ask for reviews" short URL) with a polite message. No incentives, and no gating where only happy customers get the link.
- Customers who mention what they ordered («الأكواب»، «البوكسات»، «اللوحة») help both Maps relevance and AI summaries. Ask for honest feedback about the product; don't script the wording.
- Reply to **every** review in Arabic within 48 h, mentioning the product naturally.

### 5.3 Consistent listings (the same name, address, phone and URL everywhere)
Priority order:
1. **Bing Places** (import from GBP). It feeds Bing, Copilot and ChatGPT local answers.
2. **Apple Business Connect** (Apple Maps, Siri, Spotlight; iPhone share is high in KSA).
3. **Saudi Business Center / Maroof (معروف)**: check the current status of the trust listing, and add the CR number. AI answers about Dammam printers explicitly tell users to check verified registries.
4. **Eastern Province Chamber (غرفة الشرقية)** member directory.
5. Classifieds that actually rank: a verified **Haraj** store, **Mstaml**, plus **magicpin**, D&B, local Yellow-Pages-type directories. Use the same NAP everywhere and link to the matching service page.
6. Social profiles: **Instagram, TikTok, Snapchat (public profile), X, LinkedIn** with an identical name, bio, phone and website. Snapchat and TikTok are major discovery channels in KSA.

Keep a spreadsheet of every listing (URL, login owner, NAP as published), and add every real profile to the `sameAs` list in the schema.

### 5.4 Brand-entity disambiguation
- Always use the full name: **"آرت زون للطباعة" / "Art Zone Printing"**, never just "ArtZone" (that name belongs to the other Saudi app).
- Move email to the own domain (`info@art-zone-print.com`) and stop using `info@artzone.sa`.
- Use the same logo, name and description on every profile.

---

## 6. Phase 4 — GEO-specific actions (month 2+)

Phase 1 already fixes the basics (crawlable HTML, AI bots allowed, consistent entity, structured data). On top of that:

1. **Citable, specific facts on every page:** numbers (MOQ, sizes, lead times, prices), named materials and methods, dates. AI tools quote concrete sentences, not slogans.
2. **Answer-first paragraphs and FAQ blocks** written in the words people use (see §2). Google's guide says there's no ideal length and no need to "chunk" content. What matters is clarity and originality.
3. **Avoid mass-produced city doorway pages.** Google calls content created mainly for query fan-out variations spam. Make city pages only where there's real substance: e.g. «تركيب لوحات المحلات في الخبر» with actual installs, photos and delivery times there. Otherwise cover the cities in an "areas we serve" section.
4. **Third-party mentions** (these drive most AI recommendations):
   - Get listed in Arabic "best printers in Dammam / Eastern Province" articles and supplier roundups for cafés and restaurants.
   - **Alyaum (اليوم)** is Dammam-based: a story about the plant, local manufacturing or Vision 2030 SME angles.
   - Client credits: ask café and corporate clients to tag or credit "تغليف: آرت زون للطباعة" on Instagram or their sites.
   - Supplier directories for F&B packaging and exhibitions.
5. **Optional: a Wikidata item**, only if there are independent sources (news coverage, chamber listing).
6. **Monthly AI visibility check (manual, free):** a fixed panel of ~20 prompts in AR and EN, run in ChatGPT (search on), Gemini / Google AI Mode, Perplexity and Copilot. Log whether Art Zone is mentioned, cited (with a link) and described accurately. Sample prompts:
   - «أفضل مطبعة في الدمام لطباعة الأكواب الورقية»
   - «مطبعة بوكسات حلا في الدمام بكمية قليلة»
   - «من يركب لوحات محلات مضيئة في الدمام؟»
   - «كم سعر طباعة 1000 كرت شخصي في الدمام؟»
   - "paper cup printing factory in Dammam"
   - "who prints custom boxes for cafés in the Eastern Province"

---

## 7. KPIs and targets

| Metric | Baseline (Oct 2026) | 3 months | 6 months |
|---|---|---|---|
| Indexed URLs (GSC) | 1 (hash SPA) | 25+ | 40+ |
| GSC impressions/mo, non-brand AR | n/a (no GSC) | measurable trend | 3× month-3 |
| Top-10 rankings: «مطبعة الدمام», «طباعة اكواب ورقية الدمام», «مطبعة بوكسات الدمام», «لوحات محلات الدمام» | none | 2 of 4 | 4 of 4 |
| GBP reviews | 22 (4.8★) | 50 | 100+ |
| GBP website clicks / calls / directions | website: 0 (none linked) | track | +50% vs month 3 |
| WhatsApp clicks from site (GA4) | not tracked | baseline | +100% |
| AI prompt panel: mentioned / cited | 0 / 20 (brand not findable) | 4 / 20 | 10 / 20 |
| GPTBot / ClaudeBot / PerplexityBot fetch status | 429 / 200 / 200 (empty HTML) | 200 + full HTML | — |

---

## 8. Roadmap

| Week | Work | Owner |
|---|---|---|
| 1 | Unblock AI bots in hPanel · fix GBP website + phone · create GSC + Bing WMT · answer the open questions (§9) | You |
| 1–2 | Path routing + prerender · per-page head · hreflang · canonical · `.htaccess` · robots / sitemap / llms.txt · 404 · JSON-LD · GA4 events · image renames, alt text, WebP | Claude (code) |
| 2 | Deploy, submit sitemaps, request indexing, re-test with bot user-agents and the Rich Results Test | Claude + you |
| 2–4 | First 8 service pages (template + content) · captioned gallery · About facts page · footer NAP | Claude drafts, you supply facts and photos |
| 1–8 | Review engine · weekly GBP posts · Bing Places, Apple, Maroof/SBC, chamber, Haraj, social profiles | Team |
| 4–8 | 3 case studies · 3 guides · remaining service pages | Claude + team |
| 6+ | PR (Alyaum), roundups, client credits · monthly AI panel and GSC review · iterate | Team + Claude |

---

## 9. Open questions (needed before or during Phase 1–2)

1. **Which phone is primary:** +966 53 573 8136 (site/WhatsApp) or 057 366 5867 (GBP)? Are both active?
2. **Exact working hours** (GBP shows it opens Sunday 9 am; what about Saturday and Friday?).
3. CR number and VAT number: OK to publish?
4. Documentation for the **SFDA food-safe ink** claim, plus the basis for "500+ brands" and "24 h".
5. **Real MOQs, lead times and "starting from" prices** for the top 8 products, even rough ranges.
6. Real social profiles (Instagram / TikTok / Snapchat / X handles) to link.
7. Which clients we can name in case studies.
8. **Arabic register:** OK to add colloquial search terms in parentheses (كروت شخصية، بوكسات، استيكرات) alongside the formal wording?
9. Email on the own domain: create `info@art-zone-print.com`?

---

### Sources consulted
- Google, [Optimizing for generative AI features in Search](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide): no llms.txt or special markup needed, GBP/Merchant Center recommended, fan-out spam warning
- Vercel, [The rise of the AI crawler](https://vercel.com/blog/the-rise-of-the-ai-crawler): major AI crawlers don't execute JS
- Google, [AI Mode in Arabic](https://blog.google/intl/ar-mena/products/explore-get-answers/introducing-ai-mode-in-arabic/) (Oct 2025) and [AI Overviews availability](https://support.google.com/websearch/answer/14901683)
- StatCounter, [Saudi Arabia search engine share](https://gs.statcounter.com/search-engine-market-share/all/saudi-arabia): Google ~94–96%, Bing ~3–6%
- Search Engine Land, [How ChatGPT conducts local searches](https://searchengineland.com/how-does-chatgpt-conduct-local-searches-454894) · BrightLocal, [ChatGPT search sources](https://www.brightlocal.com/research/uncovering-chatgpt-search-sources/) · Whitespark, [review sites for ChatGPT](https://whitespark.ca/blog/want-to-rank-in-chatgpt-focus-on-these-review-sites-new-research/)
- Live tests on art-zone-print.com (curl with bot user-agents, rendered-DOM inspection), the Google Maps listing, and Google Autocomplete (`gl=sa`) query data
