import { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import useLanguage from '../i18n/useLanguage';
import Reveal from '../components/Reveal';
import { Magnetic, TickerCounter } from '../components/Interactions';
import { WhatsAppIcon } from '../components/WhatsApp';
import { getAssetUrl } from '../utils/paths';
import './Portfolio.css';

const PROJECTS = [
  // Bags
  { id: 1,  src: '/portfolio/p1.jpeg',  cat: 'bags',      title: 'Kraft Shopping Bags',       desc: 'Custom-branded paper bags for retail boutiques.',      type: 'Kraft Paper',        material: 'Matte Lamination' },
  { id: 2,  src: '/portfolio/p2.jpeg',  cat: 'bags',      title: 'Luxury Gift Bags',           desc: 'Premium white-coated bags for high-end gifting.',      type: 'Coated Board',       material: 'Gloss Finish' },
  { id: 3,  src: '/portfolio/p3.jpeg',  cat: 'bags',      title: 'Retail Paper Bags',          desc: 'Full-color print for fashion and lifestyle brands.',   type: 'Art Paper',          material: 'Spot UV' },
  { id: 4,  src: '/portfolio/p4.jpeg',  cat: 'bags',      title: 'Café Carry Bags',            desc: 'Branded takeaway bags for café and restaurant use.',   type: 'Kraft Paper',        material: 'Custom Handle' },
  { id: 5,  src: '/portfolio/p5.jpeg',  cat: 'bags',      title: 'Event Gift Bags',            desc: 'Branded bags for corporate events and launches.',      type: 'White Board',        material: 'Full Color Print' },
  { id: 6,  src: '/portfolio/p6.jpeg',  cat: 'bags',      title: 'Mini Gift Bags',             desc: 'Small-format bags for jewelry and accessories.',       type: 'Coated Paper',       material: 'Matte Finish' },
  { id: 7,  src: '/portfolio/p7.jpeg',  cat: 'bags',      title: 'Large Retail Bags',          desc: 'Oversized bags for furniture and home goods.',         type: 'Recycled Kraft',     material: 'Eco Print' },
  { id: 8,  src: '/portfolio/p8.jpeg',  cat: 'bags',      title: 'Branded Tote Bags',          desc: 'Reusable branded totes for promotions.',              type: 'Non-woven Fabric',   material: 'Screen Print' },
  { id: 9,  src: '/portfolio/p9.jpeg',  cat: 'bags',      title: 'Boutique Paper Bags',        desc: 'Elegant bags for premium boutiques and ateliers.',     type: 'Textured Board',     material: 'Foil Stamp' },

  // Cups
  { id: 10, src: '/portfolio/p10.jpeg', cat: 'cups',      title: 'Double-Wall Coffee Cups',   desc: 'Insulated cups with full-wrap brand printing.',        type: 'Paper — Double Wall','material': 'Custom Sleeve' },
  { id: 11, src: '/portfolio/p11.jpeg', cat: 'cups',      title: 'Plastic Cold Cups',         desc: 'Crystal-clear cups for cold beverages and juices.',   type: 'PET Plastic',        material: 'Full-Wrap Print' },
  { id: 12, src: '/portfolio/p12.jpeg', cat: 'cups',      title: 'Café Coffee Cups',          desc: 'Single-wall cups for in-store café service.',          type: 'Paper — Single Wall','material': 'Offset Print' },
  { id: 13, src: '/portfolio/p13.jpeg', cat: 'cups',      title: 'Glass Coffee Cups',         desc: 'Branded borosilicate glass cups for premium cafés.',   type: 'Borosilicate Glass', material: 'Ceramic Print' },
  { id: 14, src: '/portfolio/p14.jpeg', cat: 'cups',      title: 'Smoothie Cups',             desc: 'Printed plastic cups for smoothie and juice bars.',    type: 'PP Plastic',         material: 'Wrap-Around Label' },
  { id: 15, src: '/portfolio/p15.jpeg', cat: 'cups',      title: 'Event Disposable Cups',     desc: 'Bulk-printed cups for events and corporate catering.', type: 'Paper',              material: 'Custom Print' },
  { id: 16, src: '/portfolio/p16.jpeg', cat: 'cups',      title: 'Espresso Cups',             desc: 'Small-format cups for espresso service.',              type: 'Paper',              material: 'Hot-Stamp Logo' },
  { id: 17, src: '/portfolio/p17.jpeg', cat: 'cups',      title: 'Branded Cold Cups',         desc: 'Vivid branded cups for iced drinks and desserts.',     type: 'RPET Plastic',       material: 'Sleeve Label' },
  { id: 18, src: '/portfolio/p18.jpeg', cat: 'cups',      title: 'Takeaway Cup Sets',         desc: 'Matching cup and lid sets with full brand identity.',  type: 'Paper + Lid',        material: 'Full Color' },

  // Packaging
  { id: 19, src: '/portfolio/p19.jpeg', cat: 'packaging', title: 'Rigid Gift Boxes',          desc: 'Premium rigid boxes for luxury products.',             type: 'Rigid Board',        material: 'Velvet Lining' },
  { id: 20, src: '/portfolio/p20.jpeg', cat: 'packaging', title: 'Custom Folding Boxes',      desc: 'Flat-pack boxes for retail and e-commerce shipping.',  type: 'Corrugated',         material: 'Full Color' },
  { id: 21, src: '/portfolio/p21.jpeg', cat: 'packaging', title: 'Product Sleeve Boxes',      desc: 'Sleeve-wrapped boxes for cosmetics and wellness.',     type: 'Art Cardboard',      material: 'Gloss UV' },
  { id: 22, src: '/portfolio/p22.jpeg', cat: 'packaging', title: 'Mailer Boxes',              desc: 'Branded unboxing experience for e-commerce brands.',   type: 'Corrugated Board',   material: 'Offset + Matte' },
  { id: 23, src: '/portfolio/p23.jpeg', cat: 'packaging', title: 'Food Packaging Boxes',      desc: 'FDA-safe boxes for bakeries and food brands.',         type: 'Food-Grade Board',   material: 'Water-Based Ink' },
  { id: 24, src: '/portfolio/p24.jpeg', cat: 'packaging', title: 'Cosmetics Packaging',       desc: 'Elegant packaging for skincare and beauty brands.',    type: 'Coated Board',       material: 'Soft-Touch Laminate' },
  { id: 25, src: '/portfolio/p25.jpeg', cat: 'packaging', title: 'Jewellery Boxes',           desc: 'Padded boxes for rings, necklaces, and watches.',      type: 'Rigid Box',          material: 'Velvet Insert' },
  { id: 26, src: '/portfolio/p26.jpeg', cat: 'packaging', title: 'Magnetic Closure Boxes',   desc: 'Premium magnetic-lid boxes for gifts and launches.',   type: 'Rigid Board',        material: 'Magnetic Closure' },
  { id: 27, src: '/portfolio/p27.jpeg', cat: 'packaging', title: 'Pastry & Cake Boxes',      desc: 'Clean, food-safe boxes for patisseries.',              type: 'Food-Grade Kraft',   material: 'Window Cut-Out' },
  { id: 28, src: '/portfolio/p28.jpeg', cat: 'packaging', title: 'Tissue Paper Boxes',       desc: 'Branded tissue boxes for hotels and retail.',          type: 'Cardboard',          material: 'Full Wrap Print' },
  { id: 29, src: '/portfolio/p29.jpeg', cat: 'packaging', title: 'Candle Packaging',          desc: 'Custom boxes for candles and home fragrance brands.',  type: 'Rigid Board',        material: 'Emboss + Foil' },
  { id: 30, src: '/portfolio/p30.jpeg', cat: 'packaging', title: 'Tech Product Boxes',        desc: 'Clean minimal packaging for electronics and gadgets.',  type: 'E-Flute Corrugated', material: 'Matte Laminate' },
  { id: 31, src: '/portfolio/p31.jpeg', cat: 'packaging', title: 'Perfume Boxes',             desc: 'Premium boxes for fragrance and luxury cosmetics.',    type: 'Rigid Board',        material: 'Gold Foil Stamp' },
  { id: 32, src: '/portfolio/p32.jpeg', cat: 'packaging', title: 'Subscription Box',          desc: 'Monthly subscription boxes with full brand design.',   type: 'Corrugated',         material: 'Inside + Outside Print' },
  { id: 33, src: '/portfolio/p33.jpeg', cat: 'packaging', title: 'Clothing Boxes',            desc: 'Branded boxes for fashion and apparel shipments.',     type: 'Matte Board',        material: 'Deboss Logo' },
  { id: 34, src: '/portfolio/p34.jpeg', cat: 'packaging', title: 'Supplement Packaging',      desc: 'Clean, clinical packaging for health and wellness.',   type: 'Coated Board',       material: 'Spot UV Logo' },
  { id: 35, src: '/portfolio/p35.jpeg', cat: 'packaging', title: 'Corporate Gift Boxes',      desc: 'Bespoke gift sets for corporate events and VIPs.',     type: 'Rigid Slipcase',     material: 'Custom Interior' },
  { id: 36, src: '/portfolio/p36.jpeg', cat: 'packaging', title: 'Luxury Bag-In-Box',         desc: 'Combined bag-and-box packaging for premium brands.',   type: 'Hybrid Board',       material: 'Full Branding' },
  { id: 37, src: '/portfolio/p37.jpeg', cat: 'packaging', title: 'Custom Print Wrapping',     desc: 'Branded wrapping paper and tissue for boutiques.',     type: 'Tissue Paper',       material: 'Custom Pattern' },

  // ── Real client work — Rue Du Rhône (RR) ──────────────────────────────────
  { id: 38, src: '/portfolio/p38.jpeg', cat: 'branding',  title: 'RR Restaurant Branding',       desc: 'Custom location-pin signage installed at Rue Du Rhône restaurant entrance.',      type: 'Branded Signage',     material: 'Gold on Black' },
  { id: 39, src: '/portfolio/p39.jpeg', cat: 'branding',  title: 'RR Location Pin — Seascape',   desc: 'Giant branded location pin for Rue Du Rhône outdoor promo shoot.',                type: 'Outdoor Display',     material: 'Gold & Black' },
  { id: 40, src: '/portfolio/p40.jpeg', cat: 'branding',  title: 'Rue Du Rhône Pin Sign',        desc: 'Full-logo location pin for Rue Du Rhône Cafe & Restaurant.',                     type: 'Outdoor Signage',     material: 'Gold on Dark Green' },
  { id: 41, src: '/portfolio/p41.jpeg', cat: 'branding',  title: 'RR Night Venue Branding',      desc: 'Rue Du Rhône branded pin sign mounted above the restaurant facade at night.',     type: 'Venue Signage',       material: 'Illuminated' },
  { id: 68, src: '/portfolio/p68.jpeg', cat: 'bags',      title: 'Rue Du Rhône Paper Bag',       desc: 'Luxury black paper bag with gold foil branding for RR Cafe & Restaurant.',        type: 'Art Paper',           material: 'Gold Foil + Rope Handle' },
  { id: 64, src: '/portfolio/p64.jpeg', cat: 'packaging', title: 'RR Branded Napkins — Black',   desc: 'Printed tissue napkins in black and gold for Rue Du Rhône restaurant.',           type: 'Tissue Napkin',       material: 'Black + Gold Print' },
  { id: 65, src: '/portfolio/p65.jpeg', cat: 'packaging', title: 'RR Branded Napkins — White',   desc: 'Branded tissue napkins in white and orange for Rue Du Rhône.',                   type: 'Tissue Napkin',       material: 'Orange + Black Print' },
  { id: 69, src: '/portfolio/p69.jpeg', cat: 'packaging', title: 'RR Sugar Sticks — Mockup',     desc: 'Custom-printed brown sugar stick packets for Rue Du Rhône.',                     type: 'Sachet Packaging',    material: 'Black + Gold' },
  { id: 70, src: '/portfolio/p70.jpeg', cat: 'packaging', title: 'RR Brown Sugar Sticks',        desc: 'Delivered brown sugar stick packets with Rue Du Rhône branding.',                type: 'Sachet Packaging',    material: 'Black + Gold' },
  { id: 72, src: '/portfolio/p72.jpeg', cat: 'cups',      title: 'Rue Du Rhône Coffee Cup',      desc: 'Sleek black paper cup with gold Rue Du Rhône branding for café service.',         type: 'Paper — Single Wall', material: 'Gold Print' },
  { id: 66, src: '/portfolio/p66.jpeg', cat: 'branding',  title: 'Stainless Table Numbers',      desc: 'Polished stainless steel table number holders for restaurant table service.',     type: 'Metal Print',         material: 'Laser Engraved' },

  // ── Real client work — Île Rousseau / Eli Rousseau Café Lounge ────────────
  { id: 42, src: '/portfolio/p42.jpeg', cat: 'branding',  title: 'Île Rousseau Facade Sign',     desc: 'Illuminated building signage for Île Rousseau Café Lounge.',                     type: 'LED Signage',         material: 'Backlit White' },
  { id: 43, src: '/portfolio/p43.jpeg', cat: 'packaging', title: 'Eli Rousseau Pizza Box',       desc: 'Kraft food box for Eli Rousseau Café Lounge with portrait logo.',                type: 'Kraft Board',         material: 'Offset Print' },
  { id: 44, src: '/portfolio/p44.jpeg', cat: 'cups',      title: 'Eli Rousseau Black Cup',       desc: 'Premium black paper cup with gold portrait branding for Eli Rousseau.',          type: 'Paper — Single Wall', material: 'Gold Foil Print' },
  { id: 45, src: '/portfolio/p45.jpeg', cat: 'cups',      title: 'Eli Rousseau Clear Cup',       desc: 'Transparent plastic cold cup with gold Eli Rousseau branding.',                  type: 'PET Plastic',         material: 'Gold Print' },
  { id: 46, src: '/portfolio/p46.jpeg', cat: 'branding',  title: 'Île Rousseau Ceramic Mugs',    desc: 'White ceramic mugs with "Un moment au bord du lac" and gold portrait print.',    type: 'Ceramic Mug',         material: 'Gold Ceramic Print' },
  { id: 47, src: '/portfolio/p47.jpeg', cat: 'packaging', title: 'Eli Rousseau Burger Box',      desc: 'Custom burger box in kraft for Eli Rousseau Café Lounge.',                       type: 'Kraft Food Board',    material: 'Offset Print' },
  { id: 48, src: '/portfolio/p48.jpeg', cat: 'packaging', title: 'Eli Rousseau Sub Box',         desc: 'Branded sandwich/sub box in kraft for Eli Rousseau Café.',                      type: 'Kraft Food Board',    material: 'Offset Print' },
  { id: 49, src: '/portfolio/p49.jpeg', cat: 'cups',      title: 'Eli Rousseau Brown Cup',       desc: 'Double-wall paper cup in warm brown with gold portrait for Eli Rousseau.',       type: 'Paper — Double Wall', material: 'Gold Offset Print' },
  { id: 50, src: '/portfolio/p50.jpeg', cat: 'cups',      title: 'Eli Rousseau Mojito Cup',      desc: 'Cold drink cup with bold Eli Rousseau branding for iced beverages.',             type: 'PET Plastic',         material: 'Full-Wrap Print' },
  { id: 51, src: '/portfolio/p51.jpeg', cat: 'branding',  title: 'Eli Rousseau Bar Counter',     desc: 'Full branded bar counter installation for Eli Rousseau Café Lounge.',            type: 'Interior Signage',    material: 'Gold on Black' },
  { id: 52, src: '/portfolio/p52.jpeg', cat: 'branding',  title: 'Eli Rousseau Branded Plate',   desc: 'Black dessert plate with gold Eli Rousseau portrait seal.',                      type: 'Ceramic Print',       material: 'Gold Seal' },
  { id: 53, src: '/portfolio/p53.jpeg', cat: 'packaging', title: 'Eli Rousseau Cup Carrier',     desc: 'Kraft cup carrier/tray for two cups with Eli Rousseau branding.',                type: 'Kraft Board',         material: 'Offset Print' },
  { id: 54, src: '/portfolio/p54.jpeg', cat: 'branding',  title: 'Eli Rousseau Display Cabinet', desc: 'Branded glass display cabinet for pastries and desserts.',                       type: 'Display Branding',    material: 'Gold on Black' },
  { id: 55, src: '/portfolio/p55.jpeg', cat: 'packaging', title: 'Île Rousseau Pizza Box',       desc: 'Bilingual kraft pizza box (Arabic + English) for Île Rousseau Café.',            type: 'Kraft Board',         material: 'Offset Print' },
  { id: 56, src: '/portfolio/p56.jpeg', cat: 'bags',      title: 'Île Rousseau Takeaway Bags',   desc: 'Kraft flat-bottom paper bags branded for Île Rousseau Café Lounge.',             type: 'Kraft Paper',         material: 'Offset Print' },
  { id: 57, src: '/portfolio/p57.jpeg', cat: 'cups',      title: 'Île Rousseau White Cup',       desc: 'White paper cup with Île Rousseau bilingual logo.',                              type: 'Paper — Single Wall', material: 'Full Color Print' },
  { id: 58, src: '/portfolio/p58.jpeg', cat: 'branding',  title: 'Eli Rousseau Menu Cover',      desc: 'Luxury black textured menu cover with gold portrait and embossed title.',        type: 'Faux Leather',        material: 'Gold Emboss' },
  { id: 59, src: '/portfolio/p59.jpeg', cat: 'packaging', title: 'Île Rousseau Carrier Dieline', desc: 'Print-ready dieline for Île Rousseau double-cup carrier tray.',                  type: 'Kraft Board',         material: 'Offset Print' },
  { id: 60, src: '/portfolio/p60.jpeg', cat: 'branding',  title: 'Île Rousseau Folder',          desc: 'Branded orange bi-fold folder for Île Rousseau Café Lounge.',                   type: 'Coated Board',        material: 'Matte Laminate' },
  { id: 61, src: '/portfolio/p61.jpeg', cat: 'branding',  title: 'Île Rousseau Menu Holder',     desc: 'Genuine leather menu holder with gold Île Rousseau logo and metal corners.',     type: 'Leather Menu',        material: 'Gold Foil Stamp' },
  { id: 62, src: '/portfolio/p62.jpeg', cat: 'packaging', title: 'Île Rousseau Takeaway Box',    desc: 'Kraft food boxes (stacked) with Île Rousseau bilingual branding.',               type: 'Kraft Board',         material: 'Offset Print' },
  { id: 63, src: '/portfolio/p63.jpeg', cat: 'branding',  title: 'Île Rousseau Welcome Banner',  desc: 'Roll-up welcome banner with Île Rousseau character illustration.',               type: 'Roll-Up Banner',      material: 'Vinyl Print' },

  // ── Real client work — Aseer Samdo (عصير صمدو) ───────────────────────────
  { id: 67, src: '/portfolio/p67.jpeg', cat: 'cups',      title: 'Aseer Samdo Juice Cup',        desc: 'Vibrant Arabic-branded juice cup for Aseer Samdo beverage brand.',               type: 'Paper — Single Wall', material: 'Full Color Print' },

  // ── Real client work — Corporate Gifts / USB Boxes ───────────────────────
  { id: 71, src: '/portfolio/p71.jpeg', cat: 'packaging', title: 'Metal Tin Gift Boxes',         desc: 'Window-display metal tin boxes for USB drives and corporate gift sets.',          type: 'Metal Tin',           material: 'Window Cut-Out' },
  { id: 73, src: '/portfolio/p73.jpeg', cat: 'packaging', title: 'USB Gift Packaging Range',     desc: 'Full range of USB flash drive packaging in metal and clear boxes.',              type: 'Metal & Plastic',     material: 'Custom Fit' },
  { id: 74, src: '/portfolio/p74.jpeg', cat: 'packaging', title: 'USB Keychain Gift Sets',       desc: 'Premium USB keychain gift sets in branded metal tin packaging.',                 type: 'Metal Tin',           material: 'Velvet Insert' },

  // ── Studio & production floor ─────────────────────────────────────────────
  { id: 75, src: '/portfolio/p75.jpeg', cat: 'branding',  title: 'Solvent Wide-Format Press',    desc: 'Heavy-duty wide-format printer in the Art Zone production floor.',                type: 'Production Floor',    material: 'Solvent Inkjet' },
  { id: 76, src: '/portfolio/p76.jpeg', cat: 'branding',  title: 'Art Zone Studio — Storefront', desc: 'The Art Zone studio entrance with brand and KSA flags.',                          type: 'Studio',              material: 'On-Site' },
  { id: 77, src: '/portfolio/p77.jpeg', cat: 'branding',  title: 'Showroom Sample Wall',          desc: 'Curated wall of branded cups, bags, and packaging samples from past projects.',   type: 'Studio Display',      material: 'Mixed Samples' },
  { id: 78, src: '/portfolio/p78.jpeg', cat: 'branding',  title: 'Wide-Format Eco-Solvent Press', desc: 'SmJet eco-solvent printer running large-format vinyl prints.',                   type: 'Production Floor',    material: 'Eco-Solvent' },
  { id: 79, src: '/portfolio/p79.jpeg', cat: 'branding',  title: 'Vinyl Sticker Cutting',         desc: 'Soufflé Bertine sticker run on the Jaguar VL vinyl plotter.',                    type: 'Vinyl Cutting',       material: 'Plotter Cut' },

  // ── Branded coffee cup collection ─────────────────────────────────────────
  { id: 80, src: '/portfolio/p80.jpeg', cat: 'cups',      title: 'Café Cup Collection',           desc: 'A lineup of branded paper cups — Innovations, Rue Du Rhône, Free Time, Mila and more.', type: 'Paper Cups',     material: 'Full-Color Print' },
  { id: 81, src: '/portfolio/p81.jpeg', cat: 'cups',      title: 'Full Range — Client Cups',      desc: 'Wide brand range of paper cups produced for cafés and restaurants across KSA.',   type: 'Paper Cups',          material: 'Multiple Finishes' },
  { id: 82, src: '/portfolio/p82.jpeg', cat: 'cups',      title: 'The Low-Fat Café Cup',          desc: 'Branded single-wall cup for The Low-Fat Healthy Food Restaurant.',                type: 'Paper — Single Wall', material: 'Offset Print' },
  { id: 83, src: '/portfolio/p83.jpeg', cat: 'cups',      title: 'Natiia Saudi-Heritage Cup',     desc: 'Illustrated cup with Saudi village heritage artwork for Natiia.',                 type: 'Paper Cup',           material: 'Full-Color Print' },
  { id: 84, src: '/portfolio/p84.jpeg', cat: 'cups',      title: 'Mila Cup — Eid Edition',        desc: 'Special edition Mila Cup with Arabic Eid greeting print.',                        type: 'Paper Cup',           material: 'Soft-Touch Print' },
  { id: 85, src: '/portfolio/p85.jpeg', cat: 'cups',      title: 'Floral Tulip Mauve Cup',        desc: 'Mauve double-wall cup with delicate hand-drawn tulip illustration.',              type: 'Paper — Double Wall', material: 'Line-Art Print' },
  { id: 86, src: '/portfolio/p86.jpeg', cat: 'cups',      title: 'Arabic Calligraphy Cup',        desc: 'Mauve cup with elegant white Arabic calligraphy.',                                type: 'Paper Cup',           material: 'Single-Color Print' },
  { id: 87, src: '/portfolio/p87.jpeg', cat: 'cups',      title: 'Free Time Cafees Cup',          desc: 'Navy cup with shisha logo and botanical accents for Free Time Cafees.',           type: 'Paper Cup',           material: 'Full-Color Print' },
  { id: 88, src: '/portfolio/p88.jpeg', cat: 'cups',      title: 'Île Rousseau Lounge Cup',       desc: 'Orange takeaway cup with Île Rousseau Café Lounge portrait branding.',            type: 'Paper Cup + Lid',     material: 'Full-Color Print' },
  { id: 89, src: '/portfolio/p89.jpeg', cat: 'cups',      title: 'Rue Du Rhône — Black & Gold',   desc: 'Premium black cup with gold Rue Du Rhône Café & Restaurant branding.',            type: 'Paper Cup',           material: 'Gold Print' },
];

export default function Portfolio() {
  const [modal, setModal] = useState(null);
  const lang = useLanguage(s => s.lang);

  const openModal = (project) => setModal(project);
  const closeModal = () => setModal(null);
  const prevModal = () => {
    const idx = PROJECTS.findIndex(p => p.id === modal.id);
    setModal(PROJECTS[(idx - 1 + PROJECTS.length) % PROJECTS.length]);
  };
  const nextModal = () => {
    const idx = PROJECTS.findIndex(p => p.id === modal.id);
    setModal(PROJECTS[(idx + 1) % PROJECTS.length]);
  };

  const heroHeading = lang === 'ar'
    ? (<>أعمالنا.<br /><em>فصلاً بعد فصل.</em></>)
    : (<>The work.<br /><em>Chapter by chapter.</em></>);
  const heroSub = lang === 'ar'
    ? 'مجموعة مختارة من تصاميم وعلامات تجارية في المملكة العربية السعودية. كل قطعة طبعت بدقة المليمتر.'
    : 'A curated selection of brands we\'ve printed across Saudi Arabia. Every piece — crafted to the millimeter.';
  const galleryTitle = lang === 'ar' ? (<>المعرض <em>الكامل</em></>) : (<>The full <em>gallery</em></>);
  const finalEyebrow = lang === 'ar' ? '✦ هل نبدأ مشروعك؟' : '✦ Shall we begin?';
  const finalHeading = lang === 'ar' ? (<>دعنا نطبع قصة <em>علامتك</em>.</>) : (<>Let's print your <em>brand's chapter</em>.</>);

  return (
    <div className="portfolio-page">

      {/* ── Hero ── */}
      <section className="port-hero">
        <div className="port-hero-inner">
          <div className="port-hero-left">
            <Reveal duration={0.6}>
              <p className="port-hero-eyebrow">{lang === 'ar' ? 'المعرض' : 'The Portfolio'}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="port-hero-headline">{heroHeading}</h1>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="port-hero-sub">{heroSub}</p>
            </Reveal>
            <Reveal delay={0.4} className="port-hero-actions">
              <Magnetic strength={0.3}>
                <a href="https://wa.me/966535738136" target="_blank" rel="noopener noreferrer" className="btn btn-terra">
                  <WhatsAppIcon size={18} /> {lang === 'ar' ? 'ابدأ مشروعك' : 'Start a project'}
                </a>
              </Magnetic>
              <Link to="/built-for-you" className="btn btn-outline">
                {lang === 'ar' ? 'كيف نعمل' : 'How it works'}
                <ArrowUpRight size={16} />
              </Link>
            </Reveal>
            <Reveal delay={0.55} className="port-hero-stats">
              <div className="port-hero-stat">
                <span className="port-hero-stat-num"><TickerCounter value={500} suffix="+" /></span>
                <span className="port-hero-stat-label">{lang === 'ar' ? 'براند' : 'Brands'}</span>
              </div>
              <div className="port-hero-stat">
                <span className="port-hero-stat-num"><TickerCounter value={4000} suffix="+" /></span>
                <span className="port-hero-stat-label">{lang === 'ar' ? 'طلب' : 'Orders'}</span>
              </div>
              <div className="port-hero-stat">
                <span className="port-hero-stat-num">4.9<em>★</em></span>
                <span className="port-hero-stat-label">{lang === 'ar' ? 'تقييم' : 'Rating'}</span>
              </div>
              <div className="port-hero-stat">
                <span className="port-hero-stat-num"><TickerCounter value={20} suffix="+" /></span>
                <span className="port-hero-stat-label">{lang === 'ar' ? 'سنوات خبرة' : 'Years'}</span>
              </div>
            </Reveal>
          </div>

          <Reveal variant="scale" duration={0.9} className="port-hero-right">
            <div className="port-hero-tile">
              <img src={getAssetUrl('/portfolio/p80.jpeg')} alt="Café cup collection" loading="eager" />
            </div>
            <div className="port-hero-tile">
              <img src={getAssetUrl('/portfolio/p88.jpeg')} alt="Île Rousseau cup" loading="eager" />
            </div>
            <div className="port-hero-tile">
              <img src={getAssetUrl('/portfolio/p19.jpeg')} alt="Rigid gift boxes" loading="eager" />
            </div>
            <div className="port-hero-tile">
              <img src={getAssetUrl('/portfolio/p89.jpeg')} alt="Rue Du Rhône cup" loading="eager" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="port-gallery-section">
        <div className="port-gallery-head">
          <Reveal className="port-gallery-head-left">
            <p className="port-hero-eyebrow">{lang === 'ar' ? 'كل الأعمال' : 'All work'}</p>
            <h2 className="port-gallery-title">{galleryTitle}</h2>
          </Reveal>
        </div>
        <div className="port-masonry">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              className="port-tile"
              onClick={() => openModal(project)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1, margin: '0px 0px -40px 0px' }}
              transition={{ duration: 0.6, delay: Math.min(i * 0.035, 0.5), ease: [0.2, 0.8, 0.2, 1] }}
            >
              <img src={getAssetUrl(project.src)} alt="" loading="lazy" />
              <div className="port-tile-overlay">
                <span className="port-tile-arrow">
                  <ArrowUpRight size={14} />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="port-final-cta">
        <div className="port-final-inner">
          <Reveal amount={0.4}>
            <p className="port-final-eyebrow">{finalEyebrow}</p>
          </Reveal>
          <Reveal amount={0.4} delay={0.1}>
            <h2 className="port-final-heading">{finalHeading}</h2>
          </Reveal>
          <Reveal amount={0.4} delay={0.2}>
            <p className="port-final-sub">
              {lang === 'ar' ? 'رسالة واحدة. عرض سعر خلال دقائق. الإنتاج يبدأ في نفس اليوم.' : 'One message. A quote in minutes. Production starts the same day.'}
            </p>
          </Reveal>
          <Reveal amount={0.4} delay={0.3} style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center', marginTop: 10 }}>
            <Magnetic>
              <a href="https://wa.me/966535738136" target="_blank" rel="noopener noreferrer" className="btn btn-terra">
                <WhatsAppIcon size={18} /> {lang === 'ar' ? 'تواصل عبر واتساب' : 'WhatsApp the press'}
              </a>
            </Magnetic>
            <Link to="/contact" className="btn btn-ghost-light">
              {lang === 'ar' ? 'صفحة التواصل' : 'Contact page'}
              <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── Lightbox — image only ── */}
      {modal && (
        <div className="port-modal-backdrop" onClick={closeModal}>
          <button className="port-modal-close" onClick={closeModal} aria-label="Close"><X size={22} /></button>
          <button className="port-modal-prev" onClick={(e) => { e.stopPropagation(); prevModal(); }} aria-label="Previous"><ChevronLeft size={26} /></button>
          <button className="port-modal-next" onClick={(e) => { e.stopPropagation(); nextModal(); }} aria-label="Next"><ChevronRight size={26} /></button>
          <img className="port-modal-img-only" src={getAssetUrl(modal.src)} alt="" onClick={e => e.stopPropagation()} />
        </div>
      )}
    </div>
  );
}
