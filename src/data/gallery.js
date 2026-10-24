/* Gallery wall: real photographed jobs, in display order.
   Files live in /public/img/work/ (WebP). w/h are the intrinsic sizes so the
   browser can reserve space (no layout shift). `label` replaces the JOB code
   caption where a job has a named product line; `service` links the caption
   to that product's service page. */

/* Plant / equipment shots (also in /img/work/) used on service pages, not on
   the gallery wall. */
export const PLANT = [
  {
    file: 'large-format-printer-operator', w: 1280, h: 720,
    alt: { ar: 'فني يشغّل ماكينة الطباعة العريضة في مصنع آرت زون بالدمام', en: 'Technician running the large-format printer at the Art Zone plant in Dammam' },
  },
  {
    file: 'wide-format-printer-plant', w: 1280, h: 720,
    alt: { ar: 'ماكينة الطباعة العريضة للبنرات في مصنع آرت زون', en: 'Wide-format banner printer at the Art Zone plant' },
  },
  {
    file: 'vinyl-cutting-plotter-stickers', w: 1280, h: 720,
    alt: { ar: 'ماكينة قص الفينيل أثناء قص الملصقات في مصنع آرت زون', en: 'Vinyl cutting plotter cutting stickers at the Art Zone plant' },
  },
]

/* every photo by file name: gallery wall + plant shots */
export function photoByFile(file) {
  return GALLERY.find((g) => g.file === file) || PLANT.find((g) => g.file === file) || null
}

export const GALLERY = [
  {
    file: 'canvas-art-print-heron', w: 629, h: 1100, service: 'banners',
    label: { ar: 'لوحات كانفاس', en: 'لوحات كانفاس' },
    alt: { ar: 'لوحة فنية مطبوعة على قماش الكانفاس لطائر مالك الحزين عند الغروب', en: 'Canvas art print of a heron at sunset' },
  },
  {
    file: 'branded-paper-cups-cafe-collection', w: 1027, h: 1100, service: 'paper-cups',
    alt: { ar: 'مجموعة أكواب ورقية مطبوعة بشعارات عدد من المقاهي في المملكة', en: 'Stack of paper cups printed with the logos of several Saudi cafés' },
  },
  {
    file: 'double-wall-paper-cup-floral-print', w: 858, h: 1100, service: 'paper-cups',
    alt: { ar: 'كوب ورقي مزدوج الجدار بلون وردي مطبوع برسمة زهور', en: 'Double-wall paper cup in dusty pink with a floral line print' },
  },
  {
    file: 'ile-rousseau-cafe-illuminated-sign', w: 619, h: 1100, service: 'signage',
    alt: { ar: 'لوحة مضيئة لواجهة مقهى إيل روسو ليلاً بحروف عربية وإنجليزية', en: 'Illuminated façade sign for Île Rousseau café at night, Arabic and English letters' },
  },
  {
    file: 'paper-cup-arabic-calligraphy-logo', w: 900, h: 1100, service: 'paper-cups',
    alt: { ar: 'كوب ورقي مطبوع بشعار بالخط العربي', en: 'Paper cup printed with an Arabic calligraphy logo' },
  },
  {
    file: 'custom-printed-paper-cups-range', w: 956, h: 1100, service: 'paper-cups',
    alt: { ar: 'تشكيلة واسعة من الأكواب الورقية المطبوعة حسب الطلب لعملاء المقاهي', en: 'Wide range of custom-printed paper cups for café clients' },
  },
  {
    file: 'kraft-food-box-ile-rousseau', w: 635, h: 539, service: 'boxes',
    alt: { ar: 'علبة طعام من ورق الكرافت مطبوعة بشعار مقهى إيل روسو', en: 'Kraft food box printed with the Île Rousseau café logo' },
  },
  {
    file: 'paper-cup-free-time-cafe', w: 865, h: 1100, service: 'paper-cups',
    alt: { ar: 'كوب ورقي كحلي مطبوع بشعار مقهى فري تايم', en: 'Navy paper cup printed for Free Time Cafés' },
  },
  {
    file: 'hot-cup-with-lid-ile-rousseau', w: 970, h: 1100, service: 'paper-cups',
    alt: { ar: 'كوب مشروبات ساخنة برتقالي مع غطاء مطبوع بشعار إيل روسو', en: 'Orange hot-drink cup with lid printed with the Île Rousseau logo' },
  },
  {
    file: 'kraft-paper-bags-ile-rousseau', w: 798, h: 796, service: 'paper-bags',
    alt: { ar: 'أكياس ورقية كرافت مطبوعة بشعار مقهى إيل روسو', en: 'Kraft paper bags printed with the Île Rousseau café logo' },
  },
  {
    file: 'paper-cup-low-fat', w: 825, h: 1100, service: 'paper-cups',
    alt: { ar: 'كوب ورقي رمادي مطبوع بشعار لو فات', en: 'Grey paper cup printed with the Low-Fat logo' },
  },
  {
    file: 'paper-cup-rue-du-rhone', w: 995, h: 1100, service: 'paper-cups',
    alt: { ar: 'كوب ورقي أسود مطبوع بشعار مطعم ومقهى رو دو رون', en: 'Black paper cup printed for Rue Du Rhône café and restaurant' },
  },
  {
    file: 'rue-du-rhone-illuminated-sign', w: 1100, h: 750, service: 'signage',
    alt: { ar: 'لوحة حروف مضيئة لمطعم رو دو رون على واجهة المبنى ليلاً', en: 'Illuminated letter sign for Rue Du Rhône on the building at night' },
  },
  {
    file: 'paper-cup-heritage-pattern', w: 825, h: 1100, service: 'paper-cups',
    alt: { ar: 'كوب ورقي مطبوع بزخارف ورسومات تراثية ملونة', en: 'Paper cup printed with colourful heritage patterns' },
  },
  {
    file: 'paper-cup-mila-cup', w: 825, h: 1100, service: 'paper-cups',
    alt: { ar: 'كوب ورقي وردي مطبوع بشعار ميلا كب وعبارة عربية', en: 'Pink paper cup printed for Mila Cup with an Arabic phrase' },
  },
  {
    file: 'clear-plastic-cup-ile-rousseau', w: 504, h: 498, service: 'paper-cups',
    alt: { ar: 'كوب بلاستيك شفاف للمشروبات الباردة مع غطاء مطبوع بشعار إيل روسو', en: 'Clear plastic cold-drink cup with lid printed with the Île Rousseau logo' },
  },
  {
    file: 'rue-du-rhone-pin-logo-sign', w: 733, h: 774, service: 'signage',
    alt: { ar: 'مجسم شعار مضيء على شكل دبوس موقع لمطعم رو دو رون', en: 'Illuminated pin-shaped logo sign for Rue Du Rhône' },
  },
  {
    file: 'branded-sugar-sticks', w: 1100, h: 931,
    alt: { ar: 'أعواد سكر مغلفة ومطبوعة بشعار مطعم ومقهى', en: 'Branded sugar sticks printed for a café and restaurant' },
  },
  {
    file: 'corporate-usb-gift-tins', w: 618, h: 1100, service: 'corporate-gifts',
    alt: { ar: 'وحدات تخزين USB في علب معدنية كهدايا دعائية للشركات', en: 'USB drives in metal tins as corporate promotional gifts' },
  },
  {
    file: 'steel-table-number-sign', w: 619, h: 1100, service: 'signage',
    alt: { ar: 'لوحة رقم طاولة من الستانلس ستيل لمطعم', en: 'Stainless-steel table number sign for a restaurant' },
  },
  {
    file: 'usb-keychain-gifts-display', w: 618, h: 1100, service: 'corporate-gifts',
    alt: { ar: 'تشكيلة وحدات USB وميداليات مفاتيح للهدايا الدعائية', en: 'Display of USB drives and keychains for promotional gifts' },
  },
  {
    file: 'usb-gift-tins-display', w: 618, h: 1100, service: 'corporate-gifts',
    alt: { ar: 'نماذج وحدات تخزين USB في علب إهداء معدنية', en: 'Sample USB drives in metal gift tins' },
  },
]
