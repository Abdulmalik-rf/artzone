import { createContext, useContext, useEffect, useState } from 'react'

/* ===================================================================
   ART ZONE PRESS — bilingual copy deck (EN / AR)
   Voice: a confident print MANUFACTURER talking to brands.
   Technical, direct, factory-floor — not a webshop.
   =================================================================== */

const dict = {
  en: {
    nav: {
      links: [
        ['#/work', 'Our Work'],
        ['#/about', 'About'],
        ['#/contact', 'Contact'],
      ],
      footerLinks: [
        ['#capabilities', 'What we print'],
        ['#production', 'Production'],
        ['#/work', 'Our Work'],
        ['#/about', 'About'],
        ['#/contact', 'Contact'],
      ],
      quote: 'Get a quote',
      whatsapp: 'WhatsApp',
      langLabel: 'عربي',
      menuLabel: 'Menu',
    },

    titles: {
      home: 'Art Zone Printing — Print Manufacturer, Dammam',
      work: 'Our Work — Art Zone Printing',
      about: 'About the Plant — Art Zone Printing',
      contact: 'Contact — Art Zone Printing',
    },

    hero: {
      kicker: 'Print manufacturer · Dammam, Saudi Arabia',
      titleA: 'Every print process.',
      titleB: 'One factory floor.',
      sub: 'Digital and offset printing for all paper prints, plain and full-color; custom acrylic and Forex signage; project hoardings and banner installation; a dedicated lightbox division with a seasoned crew; a dedicated packaging line for restaurants and cafés — cups and boxes; and a dedicated promotional-gifts division.',
      ctaQuote: 'Build your quote',
      ctaWa: 'Talk to production',
      showcase: {
        alt: 'Art Zone branded print products — rigid box, business cards, t-shirt, coffee cup, tote bag, stickers and notebook, all printed with the Art Zone logo',
        stamp: 'PRESS READY',
      },
      stats: [
        ['500+', 'brands manufactured for'],
        ['2016', 'on press since'],
        ['24h', 'from approval to press'],
        ['KSA', 'Kingdom-wide delivery'],
      ],
    },

    marquee: [
      'Business cards',
      'Boxes & mailers',
      'Paper bags',
      'Cups & sleeves',
      'Labels & stickers',
      'Banners & signage',
      'Brochures & catalogs',
      'Apparel & merch',
      'Foil & die-cut',
    ],

    caps: {
      kicker: 'What we print',
      title: 'If it carries your logo, we make it.',
      sub: 'From the first proof to the last piece out the door, every step happens on our own floor in Dammam. Pick your product below and send the order on WhatsApp — we handle the rest.',
      items: [
        {
          tag: '01',
          name: 'Business Cards & Paper Prints',
          desc: 'Business cards on standard or premium stock, with a dedicated foil and spot-UV line, plus letterheads, envelopes, profiles, brochures and folders.',
          specs: ['Foil & spot-UV', 'Standard & premium stock', 'Letterheads & envelopes'],
        },
        {
          tag: '02',
          name: 'Cups & Sleeves',
          desc: 'Single and double-wall paper cups, sleeves and branded lids — food-safe and built for the morning rush.',
          specs: ['Single & double wall', 'Food-safe inks', 'Cafés & events'],
        },
        {
          tag: '03',
          name: 'Packaging & Boxes',
          desc: 'Rigid boxes, mailers, folding cartons and food packaging, with structural design done in-house.',
          specs: ['Rigid & mailers', 'Custom die-cut', 'Food-grade board'],
        },
        {
          tag: '04',
          name: 'Paper Bags',
          desc: 'Kraft and laminated shopping bags with rope or ribbon handles, sized and printed to your brand.',
          specs: ['Kraft & laminated', 'Rope handles', 'Retail sizes'],
        },
        {
          tag: '05',
          name: 'Stickers & Labels',
          desc: 'Roll labels, sheet stickers, closure seals and holographic finishes for products and packaging.',
          specs: ['Roll & sheet', 'Waterproof vinyl', 'Holographic foil'],
        },
        {
          tag: '06',
          name: 'Marketing & Event Prints',
          desc: 'Brochures, catalogs, menus, flyers, roll-ups and backdrops — everything a campaign or a booth needs.',
          specs: ['Brochures & menus', 'Roll-ups', 'Backdrops'],
        },
        {
          tag: '07',
          name: 'Signs & Displays',
          desc: 'Indoor and outdoor signage, lightboxes, display stands and window graphics at storefront scale.',
          specs: ['Indoor / outdoor', 'Lightboxes', 'Display stands'],
        },
        {
          tag: '08',
          name: 'Apparel & Promotional Gifts',
          desc: 'T-shirts, caps, mugs, USB drives, notebooks and full giveaway kits — printed, embroidered or engraved.',
          specs: ['DTG & embroidery', 'Laser engraving', 'Event kits'],
        },
        {
          tag: '09',
          name: 'Custom & Special Orders',
          desc: 'An odd size, a new material, a product nobody else will touch — bring the idea and we engineer the print.',
          specs: ['Prototyping', 'Special materials', 'Short runs'],
        },
      ],
    },

    line: {
      kicker: 'The production line',
      title: 'From file to freight in five stations.',
      sub: 'Production starts the day your proof is approved.',
      steps: [
        {
          no: 'S1',
          name: 'Prepress',
          desc: 'Files checked, colors profiled, and a digital proof sent for your approval before a single sheet runs.',
        },
        {
          no: 'S2',
          name: 'Setup',
          desc: 'Presses calibrated, substrates loaded, and color matched to your brand standard.',
        },
        {
          no: 'S3',
          name: 'Press run',
          desc: 'Your job runs on the press best suited to it — offset for volume, digital for speed, wide format for scale.',
        },
        {
          no: 'S4',
          name: 'Finishing',
          desc: 'Cutting, creasing, folding, lamination, foil and binding — where print becomes product.',
        },
        {
          no: 'S5',
          name: 'QC & dispatch',
          desc: 'Every batch inspected by hand, packed and shipped to any city in Saudi Arabia.',
        },
      ],
    },

    materials: {
      kicker: 'Materials library',
      title: 'Stocked, swatched, ready to run.',
      sub: 'A working library of papers, boards, vinyls and fabrics. Ask for physical swatches with your quote.',
      chips: [
        { code: 'AZ-01', name: 'Coated art paper', spec: '115–350 gsm' },
        { code: 'AZ-02', name: 'Natural kraft', spec: 'Bags · boxes · tags' },
        { code: 'AZ-03', name: 'Textured linen', spec: 'Cards · invitations' },
        { code: 'AZ-04', name: 'Soft-touch laminate', spec: 'Velvet matte finish' },
        { code: 'AZ-05', name: 'Clear & white vinyl', spec: 'Labels · windows' },
        { code: 'AZ-06', name: 'Holographic foil', spec: 'Seals · effects' },
        { code: 'AZ-07', name: 'Corrugated board', spec: 'Mailers · shippers' },
        { code: 'AZ-08', name: 'Canvas & fabric', spec: 'Walls · banners' },
        { code: 'AZ-09', name: 'Acrylic & rigid media', spec: 'Signage · displays' },
        { code: 'AZ-10', name: 'Cotton & blends', spec: 'Apparel · totes' },
      ],
      cta: 'Request physical swatches',
    },

    industries: {
      kicker: 'Who we run for',
      title: 'Tuned to your industry.',
      sub: 'Different sectors wear print differently. We manufacture for all of them, daily.',
      items: [
        {
          name: 'Cafés & restaurants',
          desc: 'Cups, sleeves, food wraps, menus and delivery bags with brand color that stays consistent across every reorder.',
        },
        {
          name: 'Retail & e-commerce',
          desc: 'Mailer boxes, tissue, closure seals and thank-you cards built to survive the unboxing video.',
        },
        {
          name: 'Events & exhibitions',
          desc: 'Backdrops, badges, lanyards, gift kits and signage — delivered before the doors open.',
        },
        {
          name: 'Corporate & offices',
          desc: 'Stationery systems, reports, onboarding kits and branded giveaways for teams of any size.',
        },
        {
          name: 'Clinics & beauty',
          desc: 'Soft-touch boxes, gold-foil labels and packaging that feels as premium as what is inside it.',
        },
        {
          name: 'Startups & founders',
          desc: 'Launch-ready brand kits in small, flexible runs — then scale the volume when you do.',
        },
      ],
    },

    quote: {
      kicker: 'Instant quote',
      title: 'Spec your job. Get a price.',
      sub: 'Fill the ticket below — it opens in WhatsApp addressed to our production desk, and a quote comes back in minutes during working hours.',
      product: 'What are we printing?',
      productOptions: [
        'Business cards',
        'Boxes / packaging',
        'Paper bags',
        'Cups & sleeves',
        'Stickers / labels',
        'Banner / signage',
        'Brochure / catalog',
        'Apparel / merch',
        'Something else',
      ],
      qty: 'Quantity',
      qtyPlaceholder: 'e.g. 1,000',
      material: 'Material / finish (optional)',
      materialPlaceholder: 'e.g. kraft + gold foil',
      deadline: 'Timeline',
      deadlineOptions: ['Flexible', 'This week', 'Urgent'],
      notes: 'Notes / sizes (optional)',
      notesPlaceholder: 'Anything production should know…',
      submit: 'Send ticket via WhatsApp',
      hint: 'No forms, no account — the ticket opens in your WhatsApp and you press send.',
      previewHeading: 'TICKET PREVIEW',
      previewEmpty: '—',
      msg: {
        greeting: 'Hello Art Zone — new job ticket:',
        product: 'Product',
        qty: 'Quantity',
        material: 'Material / finish',
        deadline: 'Timeline',
        notes: 'Notes',
      },
    },

    contact: {
      kicker: 'The plant',
      title: 'Visit the floor, or message the press.',
      sub: 'We run from Dammam and ship to every city in Saudi Arabia.',
      addressLabel: 'Address',
      address: '18th Street, Al Badiyah, Dammam 32243, Saudi Arabia',
      phoneLabel: 'Phone & WhatsApp',
      mapCta: 'Open in Google Maps',
      waCta: 'Message production now',
    },

    footer: {
      line: 'Print manufacturer, Dammam — every process under one roof since 2016.',
      rights: 'Art Zone Printing. All rights reserved.',
      backToTop: 'Back to top',
    },

    workPreview: {
      kicker: 'Fresh off the press',
      title: 'Made on this floor.',
      sub: 'Real jobs that left the plant — cups, menus and brand installations for clients across the Kingdom.',
      cta: 'View the full gallery',
      items: [
        { img: 'portfolio/p80.jpeg', cat: 'F&B', name: 'Client cup families' },
        { img: 'portfolio/p85.jpeg', cat: 'Cups', name: 'Double-wall hot cups' },
        { img: 'portfolio/p34.jpeg', cat: 'Merch', name: 'Corporate gift USBs' },
      ],
    },

    gallery: {
      kicker: 'The work',
      title: 'Proof, not promises.',
      sub: 'Real jobs for real clients, straight from the floor in Dammam — cups, packaging, signage, menus and more.',
      jobLabel: 'JOB',
      ready: {
        title: 'Want yours on this wall?',
        sub: 'Send a ticket — a quote comes back in minutes.',
        cta: 'Build your quote',
      },
    },

    about: {
      kicker: 'The plant',
      title: 'A factory, not a middleman.',
      lead: 'Art Zone started in 2016 with one promise: brands in Saudi Arabia should not have to choose between quality, speed and a fair price. So we built all three into one floor in Dammam.',
      p1: 'Most "printers" are brokers — they take your file, send it somewhere else, and add a margin. We took the opposite route: presses, die-cutters, finishing lines and a working materials library under one roof, run by people who care about a tenth of a millimeter.',
      p2: 'Today the floor turns out everything from business cards and cups to packaging, signage and merch, and ships to every city in the Kingdom. More than 500 brands trust us with the part of their identity you can actually touch.',
      floorKicker: 'From the floor',
      photos: [
        { img: 'portfolio/p75.jpeg', caption: 'The wide-format line' },
        { img: 'portfolio/p77.jpeg', caption: 'The product wall' },
      ],
      valuesKicker: 'How we run',
      valuesTitle: 'Four rules on the wall.',
      values: [
        { name: 'Precision', desc: 'Color-matched, die-checked and hand-inspected — every batch, every time.' },
        { name: 'Speed', desc: 'Production starts the day your proof is approved, not next week.' },
        { name: 'Honesty', desc: 'Fixed quotes, real timelines, no surprises on delivery day.' },
        { name: 'Craft', desc: 'Finishing that makes people keep the box after the gift.' },
      ],
      cta: {
        title: 'See it for yourself.',
        sub: 'Visit the floor in Dammam — or start with a ticket.',
        primary: 'Get a quote',
        secondary: 'Contact the plant',
      },
    },

    contactPage: {
      kicker: 'Contact',
      title: 'Talk to the production desk.',
      sub: 'One message is enough — quotes come back in minutes during working hours.',
      channels: [
        { key: 'wa', label: 'WhatsApp', hint: 'Fastest — quotes in minutes', cta: 'Open WhatsApp' },
        { key: 'call', label: 'Phone', hint: 'Call the plant directly', cta: 'Call now' },
        { key: 'visit', label: 'Visit the floor', hint: 'Al Badiyah, Dammam', cta: 'Open in Google Maps' },
      ],
      quoteNudge: {
        title: 'Know your specs already?',
        sub: 'Skip the small talk — fill the job ticket and send it straight to production.',
        cta: 'Build your quote',
      },
      faqKicker: 'Quick answers',
      faqTitle: 'Before you ask.',
      faq: [
        {
          q: 'How fast will I get a quote?',
          a: 'Minutes, during working hours. Send the product, quantity and deadline — pricing and timeline come straight back.',
        },
        {
          q: 'Do you deliver outside Dammam?',
          a: 'Yes — we ship to every city in Saudi Arabia, packed and tracked.',
        },
        {
          q: 'Can you prepare the design?',
          a: 'Yes. Our prepress team prepares print-ready files and sends a digital proof for your approval before anything runs.',
        },
        {
          q: 'What files do you accept?',
          a: 'Anything from finished print-ready PDFs to a rough idea — we will take it from there.',
        },
      ],
    },
  },

  /* ================================================================ */

  ar: {
    nav: {
      links: [
        ['#/work', 'معرض الأعمال'],
        ['#/about', 'من نحن'],
        ['#/contact', 'تواصل معنا'],
      ],
      footerLinks: [
        ['#capabilities', 'ماذا نطبع'],
        ['#production', 'خط الإنتاج'],
        ['#/work', 'معرض الأعمال'],
        ['#/about', 'من نحن'],
        ['#/contact', 'تواصل معنا'],
      ],
      quote: 'اطلب تسعيرة',
      whatsapp: 'واتساب',
      langLabel: 'EN',
      menuLabel: 'القائمة',
    },

    titles: {
      home: 'آرت زون للطباعة — مصنع طباعة في الدمام',
      work: 'معرض الأعمال — آرت زون للطباعة',
      about: 'من نحن — آرت زون للطباعة',
      contact: 'تواصل معنا — آرت زون للطباعة',
    },

    hero: {
      kicker: 'مصنع طباعة · الدمام، السعودية',
      titleA: 'كل تقنيات الطباعة.',
      titleB: 'تحت سقف واحد.',
      sub: 'طباعة ديجتال واوفست لجميع المطبوعات الورقية العادية والملونة، وتنفيذ مجسمات اكراليك وفوركس بالشكل المطلوب، وتنفيذ أسوار مشاريع وتركيب البنر، وقسم خاص للوحات المضيئة بطقم عمالة متمرسين، وقسم خاص لبكجات المطاعم والمقاهي من اكواب وبوكسات، وقسم خاص للهدايا الدعائية.',
      ctaQuote: 'جهّز تسعيرتك',
      ctaWa: 'كلّم فريق الإنتاج',
      showcase: {
        alt: 'منتجات بشعار آرت زون — علبة صلبة، كروت شخصية، تيشيرت، كوب قهوة، حقيبة قماش، ستيكرات ودفتر',
        stamp: 'جاهز للتشغيل',
      },
      stats: [
        ['+500', 'علامة تجارية تطبع عندنا'],
        ['2016', 'بداية المشوار'],
        ['24h', 'من الاعتماد إلى التشغيل'],
        ['100%', 'تغطية لكل مدن المملكة'],
      ],
    },

    marquee: [
      'كروت شخصية',
      'علب وصناديق شحن',
      'أكياس ورقية',
      'أكواب وأكمام',
      'ستيكرات وليبلات',
      'بنرات ولوحات',
      'بروشورات وكتالوجات',
      'ملابس وهدايا دعائية',
      'فويل ودايكت',
    ],

    caps: {
      kicker: 'ماذا نطبع',
      title: 'كل ما يحمل شعارك، نصنعه بأنفسنا.',
      sub: 'من أول بروفة إلى آخر قطعة تغادر المصنع، كل خطوة تتم تحت سقفنا في الدمام. اختر منتجك من الأقسام التالية وأرسل طلبك عبر واتساب — والباقي علينا.',
      items: [
        {
          tag: '01',
          name: 'الكروت الشخصية والمطبوعات الورقية',
          desc: 'كروت شخصية متوفرة بالورق العادي والفاخر، ويوجد قسم خاص بطباعة البصمة واليوﭬي، وطباعة الأوراق الرسمية والأظرف والبروفايلات والبروشورات والفولدرات.',
          specs: ['بصمة ويوﭬي', 'ورق عادي وفاخر', 'أوراق رسمية وأظرف'],
        },
        {
          tag: '02',
          name: 'الأكواب والأكمام',
          desc: 'أكواب ورقية بجدار مفرد أو مزدوج، وأكمام وأغطية بشعارك — آمنة غذائياً وصامدة في زحمة الصباح.',
          specs: ['جدار مفرد ومزدوج', 'أحبار آمنة غذائياً', 'كافيهات وفعاليات'],
        },
        {
          tag: '03',
          name: 'العلب والتغليف',
          desc: 'علب صلبة وعلب شحن وكراتين قابلة للطي وتغليف أغذية، وحتى التصميم الهيكلي ننجزه داخل مصنعنا.',
          specs: ['علب صلبة وشحن', 'قصّ بمقاسك', 'كرتون آمن غذائياً'],
        },
        {
          tag: '04',
          name: 'الأكياس الورقية',
          desc: 'أكياس تسوق كرافت أو مغلّفة، بمقابض حبل أو شريط، نفصّلها مقاساً وطباعةً على هوية علامتك.',
          specs: ['كرافت ومغلّف', 'مقابض حبل', 'مقاسات المتاجر'],
        },
        {
          tag: '05',
          name: 'الستيكرات والليبلات',
          desc: 'ليبلات رول وستيكرات شيت وأختام إغلاق وتشطيبات هولوغرافية تليق بمنتجاتك وتغليفها.',
          specs: ['رول وشيت', 'فينيل ضد الماء', 'فويل هولوغرافي'],
        },
        {
          tag: '06',
          name: 'مطبوعات التسويق والفعاليات',
          desc: 'بروشورات وكتالوجات ومنيوهات وفلايرات ورول أب وخلفيات معارض — عدّة كاملة لحملتك أو جناحك.',
          specs: ['بروشورات ومنيوهات', 'رول أب', 'خلفيات معارض'],
        },
        {
          tag: '07',
          name: 'اللوحات والستاندات',
          desc: 'لوحات داخلية وخارجية وصناديق مضيئة وستاندات عرض وستيكرات واجهات تُرى من آخر الشارع.',
          specs: ['داخلي / خارجي', 'صناديق مضيئة', 'ستاندات عرض'],
        },
        {
          tag: '08',
          name: 'الملابس والهدايا الدعائية',
          desc: 'تيشيرتات وكابات ومجات وفلاشات ودفاتر وأطقم توزيعات كاملة — طباعة أو تطريز أو حفر.',
          specs: ['طباعة وتطريز', 'حفر ليزر', 'أطقم فعاليات'],
        },
        {
          tag: '09',
          name: 'الطلبات الخاصة',
          desc: 'مقاس غريب، خامة جديدة، أو منتج اعتذر عنه كل من سألته — تعال بالفكرة، والتنفيذ علينا.',
          specs: ['نماذج أولية', 'خامات خاصة', 'كميات صغيرة'],
        },
      ],
    },

    line: {
      kicker: 'خط الإنتاج',
      title: 'خمس محطات بين ملفك وشحنتك.',
      sub: 'تعتمد البروفة، ويبدأ الإنتاج في اليوم نفسه.',
      steps: [
        {
          no: 'S1',
          name: 'التجهيز الفني',
          desc: 'نفحص ملفاتك ونضبط الألوان، ثم نرسل لك بروفة رقمية — لا تتحرك ورقة قبل اعتمادك.',
        },
        {
          no: 'S2',
          name: 'الإعداد',
          desc: 'نعاير المكائن ونجهز الخامات، ونطابق الألوان على هوية علامتك بدقة.',
        },
        {
          no: 'S3',
          name: 'التشغيل',
          desc: 'نشغّل طلبك على الماكينة الأنسب: أوفست للكميات، ديجيتال للسرعة، والعريضة للمقاسات الكبيرة.',
        },
        {
          no: 'S4',
          name: 'التشطيب',
          desc: 'قص وتكسير وطي وسلوفان وفويل وتجليد — هنا يتحول المطبوع إلى منتج.',
        },
        {
          no: 'S5',
          name: 'الفحص والشحن',
          desc: 'نفحص كل دفعة يدوياً، ثم نغلفها ونشحنها إلى أي مدينة في المملكة.',
        },
      ],
    },

    materials: {
      kicker: 'مكتبة الخامات',
      title: 'الخامة جاهزة… والماكينة أجهز.',
      sub: 'مكتبة نعمل منها يومياً: ورق وكرتون وفينيل وأقمشة. اطلب عينات تلمسها بيدك مع تسعيرتك.',
      chips: [
        { code: 'AZ-01', name: 'ورق كوشيه', spec: '115–350 جم' },
        { code: 'AZ-02', name: 'كرافت طبيعي', spec: 'أكياس · علب · بطاقات تعليق' },
        { code: 'AZ-03', name: 'ورق كتّان محبب', spec: 'كروت · دعوات' },
        { code: 'AZ-04', name: 'سلوفان مخملي', spec: 'مطفي ناعم اللمس' },
        { code: 'AZ-05', name: 'فينيل شفاف وأبيض', spec: 'ليبلات · واجهات' },
        { code: 'AZ-06', name: 'فويل هولوغرافي', spec: 'أختام · لمسات مميزة' },
        { code: 'AZ-07', name: 'كرتون مضلّع', spec: 'علب شحن · مايلر' },
        { code: 'AZ-08', name: 'كانفاس وأقمشة', spec: 'جدران · بنرات' },
        { code: 'AZ-09', name: 'أكريليك وخامات صلبة', spec: 'لوحات · ستاندات' },
        { code: 'AZ-10', name: 'قطن وخلطاته', spec: 'ملابس · حقائب قماش' },
      ],
      cta: 'اطلب عيناتك الآن',
    },

    industries: {
      kicker: 'لمن تدور مكائننا',
      title: 'إنتاج على مقاس قطاعك.',
      sub: 'لكل قطاع طريقته مع الطباعة — ونحن نصنّع لها جميعاً، كل يوم.',
      items: [
        {
          name: 'المقاهي والمطاعم',
          desc: 'أكواب وأكمام وتغليف وجبات ومنيوهات وأكياس توصيل — بلون علامتك نفسه، طلباً بعد طلب.',
        },
        {
          name: 'التجزئة والمتاجر الإلكترونية',
          desc: 'علب شحن وورق حرير وأختام إغلاق وبطاقات شكر تجعل لحظة فتح الصندوق تستحق التصوير.',
        },
        {
          name: 'الفعاليات والمعارض',
          desc: 'باك دروب، بطاقات تعريف، لانيارد، أكياس هدايا ولوحات — تصلك قبل فتح الأبواب.',
        },
        {
          name: 'الشركات والمكاتب',
          desc: 'قرطاسية موحدة، تقارير، حقائب ترحيبية للموظفين الجدد، وهدايا دعائية للفريق الصغير والشركة الكاملة.',
        },
        {
          name: 'العيادات والتجميل',
          desc: 'علب بملمس مخملي وليبلات بفويل ذهبي وتغليف يليق بفخامة ما بداخله.',
        },
        {
          name: 'المشاريع الناشئة',
          desc: 'هوية متكاملة جاهزة ليوم الإطلاق، بكميات صغيرة ومرنة — وحين تكبر، نكبر معك.',
        },
      ],
    },

    quote: {
      kicker: 'تسعيرة فورية',
      title: 'حدّد مواصفاتك. خذ تسعيرتك.',
      sub: 'عبّئ الطلب بالأسفل — يفتح في واتساب موجّهاً لفريق الإنتاج مباشرة، والتسعيرة تصلك خلال دقائق في أوقات الدوام.',
      product: 'ماذا نطبع لك؟',
      productOptions: [
        'كروت شخصية',
        'علب / تغليف',
        'أكياس ورقية',
        'أكواب وأكمام',
        'ستيكرات / ليبلات',
        'بنر / لوحات',
        'بروشور / كتالوج',
        'ملابس / هدايا دعائية',
        'منتج آخر',
      ],
      qty: 'الكمية',
      qtyPlaceholder: 'مثال: 1,000',
      material: 'الخامة / التشطيب (اختياري)',
      materialPlaceholder: 'مثال: كرافت + فويل ذهبي',
      deadline: 'موعد التسليم',
      deadlineOptions: ['مرن', 'خلال أسبوع', 'مستعجل'],
      notes: 'ملاحظات / مقاسات (اختياري)',
      notesPlaceholder: 'أي تفاصيل تفيد فريق الإنتاج…',
      submit: 'أرسل الطلب عبر واتساب',
      hint: 'بلا نماذج وبلا تسجيل — الطلب يفتح عندك في واتساب، وما عليك إلا ضغطة إرسال.',
      previewHeading: 'معاينة الطلب',
      previewEmpty: '—',
      msg: {
        greeting: 'مرحباً آرت زون — طلب جديد:',
        product: 'المنتج',
        qty: 'الكمية',
        material: 'الخامة / التشطيب',
        deadline: 'موعد التسليم',
        notes: 'ملاحظات',
      },
    },

    contact: {
      kicker: 'المصنع',
      title: 'زرنا في المصنع، أو راسل فريق الإنتاج.',
      sub: 'مقرنا الدمام، وشحننا يغطي كل مدن المملكة.',
      addressLabel: 'العنوان',
      address: 'شارع 18، حي البادية، الدمام 32243، المملكة العربية السعودية',
      phoneLabel: 'الجوال والواتساب',
      mapCta: 'افتح في خرائط جوجل',
      waCta: 'راسل فريق الإنتاج',
    },

    footer: {
      line: 'مصنع طباعة في الدمام — كل مراحل الإنتاج تحت سقف واحد منذ 2016.',
      rights: 'آرت زون للطباعة. جميع الحقوق محفوظة.',
      backToTop: 'العودة للأعلى',
    },

    workPreview: {
      kicker: 'لم يجف حبرها بعد',
      title: 'كل ما تراه صُنع هنا.',
      sub: 'أعمال حقيقية سلّمناها لعملاء في مختلف مدن المملكة — أكواب ومنيوهات وهدايا دعائية.',
      cta: 'تصفّح معرض الأعمال كاملاً',
      items: [
        { img: 'portfolio/p80.jpeg', cat: 'مقاهي ومطاعم', name: 'أكواب عملائنا' },
        { img: 'portfolio/p85.jpeg', cat: 'أكواب', name: 'أكواب حرارية بجدار مزدوج' },
        { img: 'portfolio/p34.jpeg', cat: 'هدايا دعائية', name: 'هدايا USB للشركات' },
      ],
    },

    gallery: {
      kicker: 'أعمالنا',
      title: 'نتائج ملموسة، لا وعود.',
      sub: 'أعمال حقيقية لعملاء حقيقيين، من قلب مصنعنا في الدمام — أكواب وتغليف ولوحات ومنيوهات وغيرها.',
      jobLabel: 'JOB',
      ready: {
        title: 'تريد عملك على هذا الجدار؟',
        sub: 'أرسل طلبك، وتصلك التسعيرة خلال دقائق.',
        cta: 'جهّز تسعيرتك',
      },
    },

    about: {
      kicker: 'المصنع',
      title: 'مصنع يطبع، لا وسيط يبيع.',
      lead: 'بدأت آرت زون عام 2016 بوعد واحد: ألا تُضطر العلامات التجارية في السعودية إلى المفاضلة بين الجودة والسرعة والسعر العادل. فجمعنا الثلاثة في مصنع واحد بالدمام.',
      p1: 'كثير من «المطابع» في السوق مجرد وسطاء: يستلمون ملفك، يمرّرونه إلى من يطبعه فعلاً، ويضيفون عمولتهم فوق السعر. نحن اخترنا الطريق الأصعب: مكائن طباعة وقصّ وخطوط تشطيب ومكتبة خامات كاملة تحت سقف واحد، يشغّلها فريق يدقّق حتى في عُشر المليمتر.',
      p2: 'اليوم يخرج من خطوطنا كل شيء: من الكروت الشخصية والأكواب الورقية إلى علب التغليف واللوحات والهدايا الدعائية، ونشحن إلى كل مدينة في المملكة. وأكثر من 500 علامة تجارية تأتمن آرت زون على الجزء الذي يلمسه عملاؤها من هويتها.',
      floorKicker: 'من قلب المصنع',
      photos: [
        { img: 'portfolio/p75.jpeg', caption: 'خط الطباعة العريضة' },
        { img: 'portfolio/p77.jpeg', caption: 'جدار المنتجات' },
      ],
      valuesKicker: 'كيف نعمل',
      valuesTitle: 'أربع قواعد على جدار المصنع.',
      values: [
        { name: 'الدقة', desc: 'مطابقة ألوان وفحص قوالب وتدقيق يدوي على كل دفعة — بلا استثناء.' },
        { name: 'السرعة', desc: 'الإنتاج يبدأ يوم اعتماد البروفة نفسه — لا بعد أسبوع.' },
        { name: 'الوضوح', desc: 'تسعيرة ثابتة وموعد نلتزم به — بلا مفاجآت يوم التسليم.' },
        { name: 'الإتقان', desc: 'تشطيب يجعل العلبة أجمل من أن تُرمى.' },
      ],
      cta: {
        title: 'تعال شاهد بنفسك.',
        sub: 'زرنا في الدمام — أو ابدأ من مكانك بإرسال طلبك.',
        primary: 'اطلب تسعيرة',
        secondary: 'كلّم المصنع',
      },
    },

    contactPage: {
      kicker: 'تواصل معنا',
      title: 'كلّم فريق الإنتاج مباشرة.',
      sub: 'رسالة واحدة تكفي — وتصلك التسعيرة خلال دقائق في أوقات الدوام.',
      channels: [
        { key: 'wa', label: 'واتساب', hint: 'الأسرع — تسعيرة خلال دقائق', cta: 'افتح واتساب' },
        { key: 'call', label: 'الهاتف', hint: 'خط مباشر مع المصنع', cta: 'اتصل الآن' },
        { key: 'visit', label: 'زيارة المصنع', hint: 'حي البادية، الدمام', cta: 'افتح في خرائط جوجل' },
      ],
      quoteNudge: {
        title: 'مواصفاتك جاهزة؟',
        sub: 'اختصر الطريق: عبّئ طلبك وأرسله لفريق الإنتاج مباشرة.',
        cta: 'جهّز تسعيرتك',
      },
      faqKicker: 'إجابات سريعة',
      faqTitle: 'قبل أن تسأل.',
      faq: [
        {
          q: 'كم تستغرق التسعيرة؟',
          a: 'دقائق معدودة في أوقات الدوام. أرسل لنا نوع المنتج والكمية والموعد المطلوب، وتصلك التسعيرة مع مدة التنفيذ مباشرة.',
        },
        {
          q: 'هل توصلون خارج الدمام؟',
          a: 'نعم، نشحن إلى جميع مدن المملكة بتغليف آمن ورقم تتبع لكل شحنة.',
        },
        {
          q: 'هل تجهّزون التصميم؟',
          a: 'نعم. فريقنا الفني يجهّز ملفاتك للطباعة ويرسل لك بروفة رقمية تعتمدها قبل بدء أي تشغيل.',
        },
        {
          q: 'ما الملفات التي تقبلونها؟',
          a: 'أي شيء: من ملف PDF جاهز للطباعة إلى مجرد فكرة في رسالة واتساب — أرسلها ونحن نتولى الباقي.',
        },
      ],
    },
  },
}

const LangContext = createContext(null)

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    let saved = null
    try {
      saved = localStorage.getItem('az-lang')
    } catch {
      /* storage blocked (privacy mode / sandboxed iframe) — fall through */
    }
    if (saved === 'en' || saved === 'ar') return saved
    return 'ar'
  })

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    try {
      localStorage.setItem('az-lang', lang)
    } catch {
      /* non-fatal */
    }
  }, [lang])

  const toggle = () => setLang((l) => (l === 'en' ? 'ar' : 'en'))

  return (
    <LangContext.Provider value={{ lang, t: dict[lang], toggle }}>
      {children}
    </LangContext.Provider>
  )
}

export function useI18n() {
  return useContext(LangContext)
}
