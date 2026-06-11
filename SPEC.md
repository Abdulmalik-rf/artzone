# ART ZONE PRESS — build spec

A bilingual marketing site for **Art Zone Printing**, a print MANUFACTURER in Dammam, Saudi Arabia.
Design concept: **"the factory floor"** — print-craft aesthetics: warm paper surfaces, deep ink navy,
CMYK accents, job tickets, crop marks, halftone dots, dashed cut-lines, hard offset shadows.
NOT an e-commerce storefront. No soft drop shadows, no glassmorphism, no purple, no rounded-blob design.

## Hard contract (every section/page component)

- Plain JavaScript + JSX. React function component, **default export**, takes NO props.
- Get copy via `const { t, lang } = useI18n()` from the i18n module (`../i18n.jsx` from components/,
  `../i18n.jsx` from pages/ — both folders sit directly under src/). Use ONLY existing keys (read
  `src/i18n.jsx` first — both `en` and `ar` exist; never hardcode visible text except decorative codes).
- Import its own stylesheet: `import './<Name>.css'`.
- Every CSS class in the file MUST start with the component's unique prefix (collision safety).
  Taken prefixes: nb- mq- hr- cp- pl- mt- nd- qb- wp- ft- (plus gl- ab- cn- for the pages).
- No external libraries. Inline SVG is fine; `/logo.png` exists if needed.
- Allowed shared classes from `src/styles/base.css`: `container`, `kicker`, `sec-title`, `sec-sub`,
  `btn`, `btn--ink`, `btn--ghost`, `btn--wa`, `cropmarks`, `halftone`, `halftone--cyan`,
  `halftone--magenta`, `cmyk-bar` (use as `<div className="cmyk-bar"><i/><i/><i/><i/></div>`),
  `mono`, `cutline`, plus `data-reveal` attribute for scroll-in animation (handled globally — just add
  the attribute to elements that should fade in; optionally stagger with inline `transitionDelay`).
- CSS variables available: `--ink --ink-2 --ink-soft --paper --paper-2 --white --cyan --magenta
  --yellow --key --wa --line --line-strong --font-en --font-ar --font-mono --radius
  --shadow-hard --shadow-hard-sm --nav-h --container`.

## RTL is mandatory

The site toggles `dir="rtl"` (Arabic) / `dir="ltr"` (English) on `<html>`.
- Use logical CSS properties everywhere: `margin-inline-start`, `padding-inline`, `inset-inline-end`,
  `border-inline-start`, `text-align: start`.
- Never use `left/right` margins/paddings/positions unless mirrored with `[dir='rtl']` overrides.
- Letter-spacing on Arabic looks broken — if you add letter-spacing, reset it under `[dir='rtl']`.
- Latin codes / phone numbers inside RTL text need `dir="ltr"` on the element.
- Arabic headings need line-height 1.25+.

## Visual language

- Surfaces: `var(--paper)` default; alternate bands may use `var(--paper-2)`, `var(--white)` cards,
  or a dark band `var(--ink)` with `var(--paper)` text (use sparingly).
- Borders: `1.5px solid var(--ink)` on cards; hairlines `1px solid var(--line)`.
- Shadows: ONLY hard offset shadows `var(--shadow-hard)` / `var(--shadow-hard-sm)` on white cards. No blur.
- Corners: radius `var(--radius)` (6px) max. Crisp, technical.
- Accent rule: cyan/magenta/yellow in SMALL doses (tags, dots, hovers, underlines) — like spot colors
  on a press sheet, never as large background washes.
- Type scale: section headers use `.kicker` + `.sec-title` (+ `.sec-sub`). Mono (`.mono`) for codes,
  station numbers, spec labels.
- Hover states feel mechanical: translate(-1px,-1px) + shadow grow, color flips to magenta/cyan.
- Section padding: `padding-block: 96px` desktop, ~64px under 720px.

## Responsive

Breakpoints: 1020px (tablet), 720px (mobile). Grids collapse gracefully; no horizontal overflow at 360px.

## Page briefs (multi-page era)

The site is multi-page via a hash micro-router (`src/router.jsx`): `#/work`, `#/about`, `#/contact`
are pages; `#capabilities` / `#quote` etc. are home anchors (work from any page). Pages are React
components in `src/pages/`, mounted inside `<main>` by App.jsx with Navbar above and the shared
`Footer.jsx` below — pages must NOT render Navbar/Footer themselves. Page roots: a wrapper
`<div className="<prefix>">` containing several `<section>`s. The first section must clear the fixed
navbar: `padding-block-start: calc(var(--nav-h) + clamp(40px, 7vw, 72px))`.

**Images** live in `public/img/` and are referenced as `./img/<name>.webp`. Always wrap photos in a
white "press proof" frame: white card, 10px padding, `1.5px solid var(--ink)` border, radius 6px,
`cropmarks` where tasteful, `object-fit: cover` with a fixed aspect-ratio. Every `<img>` needs `alt`
(use the item name from i18n) and `loading="lazy"`. Hover on photo cards: translate(-3px,-3px) +
`--shadow-hard` (see WorkPreview.css for the established pattern).

Each page opens with a "page hero" header: kicker + huge `.sec-title`-style heading (may be larger:
clamp(2.4rem, 5.5vw, 3.8rem)) + sub, with subtle print-craft decorations (registration marks,
halftone patches, mono plate codes) — consistent with section headers but airier.

### Work (gallery) — `src/pages/Work.jsx` + `Work.css` (prefix `gl-`)
Copy: `t.gallery`. Page hero header, then a category filter bar (pill buttons: `t.gallery.filterAll`
+ unique `cat` values from `t.gallery.items`, store the ACTIVE INDEX/value in state; filtering is
client-side; All shows all 9). Grid of 9 photo cards (3 cols, then 2, then 1) from `t.gallery.items`:
press-proof framed image (`./img/{item.img}.webp`, aspect 4/5), then meta row: mono index (01-09) +
`item.cat` chip (mono, magenta), `item.name` heading, `item.spec` as a small dashed-topped spec line.
Stagger `data-reveal`. Filter transitions: simple re-render is fine (keep `key={item.img}`).
End with a CTA band (paper-2 or ink): `t.gallery.ready` — title, sub, button to `#quote`.

### About — `src/pages/About.jsx` + `About.css` (prefix `ab-`)
Copy: `t.about`. Page hero: kicker + title + `t.about.lead` as a large lead paragraph (1.25-1.4rem).
Then a two-column editorial block: `t.about.p1` and `t.about.p2` prose, with the WIDE press photo
(`./img/about-press.webp`, aspect 16/9, press-proof frame) full-width below the prose.
Then a 2-up photo row: `./img/about-quality.webp` and `./img/about-materials.webp` (aspect 4/3) with
mono captions from `t.about.photos` (match img field to caption). Then the values section:
`t.about.valuesKicker`/`valuesTitle` + 4 value cards from `t.about.values` (numbered 01-04, CMYK dot
accents, white cards w/ ink borders — like Capabilities but lighter). Then reuse the hero stats:
`t.hero.stats` as a hairline-separated band (same pattern as home hero). Close with a CTA band:
`t.about.cta` — title, sub, primary btn--ink to `#quote`, secondary btn--ghost to `#/contact`.

### Contact (page) — `src/pages/Contact.jsx` + `Contact.css` (prefix `cn-`)
Copy: `t.contactPage` + `t.contact` (address etc.) + helpers from `../lib/wa.js`
(`WA_DISPLAY, PHONE_HREF, MAPS_URL, MAPS_EMBED, waLink`). Page hero header. Then a 3-up channel card
row from `t.contactPage.channels` (key: wa | call | visit): each a white card w/ ink border + hard
shadow on hover, mono label, value (WA_DISPLAY with dir="ltr" for wa/call; `t.contact.address` for
visit), hint line, and a CTA (wa: waLink() new tab btn--wa; call: PHONE_HREF; visit: MAPS_URL new
tab). Then a wide row: the map (press-proof framed iframe, `MAPS_EMBED`, title attr, grayscale filter
that lifts on hover — `filter: grayscale(1)`, hover none, ~420px tall) beside a "quote nudge" card
(`t.contactPage.quoteNudge`: title, sub, btn--ink to `#quote`) stacked above a compact address block
(`t.contact.addressLabel` + `t.contact.address` + maps link). Then FAQ:
`t.contactPage.faqKicker`/`faqTitle` + 4 native `<details>` accordions from `t.contactPage.faq`
(styled: ink hairline separators, mono plus/minus marker via `summary::after`, generous padding;
remove default markers; `summary { cursor: pointer }`).

## Home section briefs (already built — reference only)

- Navbar (`nb-`), Marquee (`mq-`), Hero (`hr-`, id top), Capabilities (`cp-`, id capabilities),
  ProductionLine (`pl-`, id production, THE dark band), Materials (`mt-`, id materials),
  Industries (`nd-`, id industries), WorkPreview (`wp-`, id work-preview), QuoteBuilder (`qb-`,
  id quote), shared Footer (`ft-`).
