import { useEffect, useRef } from 'react'
import { useI18n } from './i18n.jsx'
import { useRoute } from './router.jsx'
import { waLink } from './lib/wa.js'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import Capabilities from './components/Capabilities.jsx'
import ProductionLine from './components/ProductionLine.jsx'
import Materials from './components/Materials.jsx'
import Industries from './components/Industries.jsx'
import WorkPreview from './components/WorkPreview.jsx'
import QuoteBuilder from './components/QuoteBuilder.jsx'
import Footer from './components/Footer.jsx'
import Work from './pages/Work.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'

function WhatsAppGlyph({ size = 26 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#07300f" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  )
}

function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Capabilities />
      <ProductionLine />
      <Materials />
      <Industries />
      <WorkPreview />
      <QuoteBuilder />
    </>
  )
}

const PAGES = { home: Home, work: Work, about: About, contact: Contact }

export default function App() {
  const { lang, t } = useI18n()
  const { page, anchor } = useRoute()

  /* per-page document title */
  useEffect(() => {
    document.title = t.titles[page] || t.titles.home
  }, [t, page])

  /* scroll management: pages open at top; home anchors scroll to section.
     Same-page anchor clicks scroll smoothly; arriving from another page
     jumps straight to the target instead of gliding past whole sections. */
  const prevPage = useRef(page)
  useEffect(() => {
    const changedPage = prevPage.current !== page
    prevPage.current = page
    if (page === 'home' && anchor) {
      document
        .getElementById(anchor)
        ?.scrollIntoView({ behavior: changedPage ? 'instant' : 'smooth' })
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }
  }, [page, anchor])

  /* scroll-reveal: observe everything tagged data-reveal */
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [lang, page])

  const Page = PAGES[page] || Home

  return (
    <>
      <Navbar />
      <main>
        <Page />
      </main>
      <Footer />
      <a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-float"
        aria-label={t.nav.whatsapp}
      >
        <WhatsAppGlyph />
      </a>
    </>
  )
}
