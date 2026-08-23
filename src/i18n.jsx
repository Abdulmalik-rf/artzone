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
          name: 'Restaurant & Café Packaging',
          desc: 'Paper and plastic cups in every size, printed with SFDA-approved food-safe ink, plus all kinds of paper boxes, wraps and greaseproof paper.',
          specs: ['Cups, all sizes', 'SFDA-approved ink', 'Boxes & food wraps'],
        },
        {
          tag: '03',
          name: 'Boxes',
          desc: 'A dedicated line for boxes in hardcover, Forex and acrylic — built and printed in-house.',
          specs: ['Hardcover', 'Forex & acrylic', 'Made & printed'],
        },
        {
          tag: '04',
          name: 'Paper Bags',
          desc: 'All paper bags for restaurants and cafés, every size, with or without handles, printed in eco-friendly ink.',
          specs: ['Every size', 'With / without handles', 'Eco-friendly ink'],
        },
        {
          tag: '05',
          name: 'Stickers & Labels',
          desc: 'All plastic and paper stickers, roll stickers for dates and products in any shape, plus fabric labels for tailors.',
          specs: ['Plastic & paper', 'Roll stickers', 'Fabric labels'],
        },
        {
          tag: '06',
          name: 'Exhibitions & Events',
          desc: 'A dedicated division for events, festivals, exhibitions, wooden project hoardings and everything an occasion needs.',
          specs: ['Events & festivals', 'Project hoardings', 'Full setup'],
        },
        {
          tag: '07',
          name: 'Lightbox & Wayfinding Signs',
          desc: 'All indoor and outdoor lightbox signage, steel structures, and wayfinding signs for projects and roads.',
          specs: ['Indoor & outdoor', 'Steel structures', 'Wayfinding signs'],
        },
        {
          tag: '08',
          name: 'Promotional Gifts',
          desc: 'A dedicated gifts division — gift boxes, USB drives, planners and mugs, plus t-shirt printing and embroidery.',
          specs: ['Boxes & USBs', 'Planners & mugs', 'Print & embroidery'],
        },
        {
          tag: '09',
          name: 'Print Consulting',
          desc: 'A dedicated desk for your printing questions — we help you reach the solution that best serves your product.',
          specs: ['Free consultation', 'Custom solutions', 'Direct support'],
        },
        {
          tag: '10',
          name: 'Book Printing & Binding',
          desc: 'A dedicated division for printing books, novels and magazines, with binding.',
          specs: ['Books & novels', 'Magazines', 'Binding'],
        },
        {
          tag: '11',
          name: 'Newborn & Family Events',
          desc: 'A dedicated division for newborns and family occasions — Forex stands, table cards and congratulation invites.',
          specs: ['Forex stands', 'Table cards', 'Invitations'],
        },
        {
          tag: '12',
          name: 'Graduation Projects',
          desc: 'A dedicated division for building graduation projects from Forex and acrylic.',
          specs: ['Forex', 'Acrylic', 'Made to order'],
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
          desc: 'We finish your job to the exact spec — adding a protective coat, shaping it as required, then cutting it to its final form.',
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
          desc: 'Everything restaurants and cafés need — cups, brochures and all kinds of food-grade boxes.',
        },
        {
          name: 'Home businesses',
          desc: 'We support home businesses with small runs — wrapping paper, boxes and abaya packaging in low quantities.',
        },
        {
          name: 'Events & exhibitions',
          desc: 'A dedicated division for designing and building large-scale exhibitions and events, with a full crew specialized in booths and exhibition fit-out.',
        },
        {
          name: 'Corporate & offices',
          desc: 'We fit out new office locations end to end — acrylic wall signs, nameplates and building wayfinding signage.',
        },
        {
          name: 'Clinics & beauty',
          desc: 'We supply clinics and hospitals with waste bags and labels, sourcing the newest, best-looking models available.',
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
        ['#/about', 'عن المصنع'],
        ['#/contact', 'تواصل معنا'],
      ],
      footerLinks: [
        ['#capabilities', 'خدمات الطباعة والتصنيع'],
        ['#production', 'خطوط الإنتاج'],
        ['#/work', 'معرض الأعمال'],
        ['#/about', 'عن المصنع'],
        ['#/contact', 'تواصل معنا'],
      ],
      quote: 'طلب عرض سعر',
      whatsapp: 'واتساب',
      langLabel: 'EN',
      menuLabel: 'القائمة',
    },

    titles: {
      home: 'آرت زون للطباعة — مصنع طباعة وتغليف متكامل في الدمام',
      work: 'معرض الأعمال — آرت زون للطباعة',
      about: 'عن المصنع — آرت زون للطباعة',
      contact: 'تواصل معنا — آرت زون للطباعة',
    },

    hero: {
      kicker: 'مصنع طباعة وتصنيع وطني · الدمام، المملكة العربية السعودية',
      titleA: 'كافة تقنيات الطباعة والتغليف.',
      titleB: 'تحت سقف تصنيعي واحد.',
      sub: 'طباعة رقمية (ديجيتال) وأوفست لكافة المطبوعات الورقية الفاخرة والملونة، تصنيع وتشكيل مجسمات الأكريليك والفوركس بأعلى دقة، تنفيذ أسوار المشاريع الإنشائية وتركيب البنرات، قسم متخصص للوحات الإعلانية والمضيئة بكوادر فنية متمرسة، خطوط إنتاج متطورة لتغليف وبكجات المطاعم والمقاهي (أكواب وبوكسات)، وقسم متكامل للهدايا الدعائية والترويجية للشركات.',
      ctaQuote: 'طلب عرض سعر',
      ctaWa: 'تواصل مع إدارة المبيعات',
      showcase: {
        alt: 'نماذج منتجات ومطبوعات فاخرة من تنفيذ مصنع آرت زون — علب صلبة، بطاقات أعمال، تيشيرتات، أكواب ورقية، حقائب قماشية، ملصقات ودفاتر رسمية',
        stamp: 'جاهزية تامة للتنفيذ',
      },
      stats: [
        ['+500', 'شريك نجاح وعلامة تجارية'],
        ['2016', 'خبرة وطنية ممتدة منذ'],
        ['24h', 'جاهزية لبدء الإنتاج فور الاعتماد'],
        ['100%', 'تغطية شاملة لكافة مناطق المملكة'],
      ],
    },

    marquee: [
      'بطاقات أعمال فاخرة',
      'علب وبكجات شحن وتغليف',
      'أكياس ورقية بمختلف المقاسات',
      'أكواب ورقية وأكمام عازلة',
      'ملصقات تجارية وليبلات رول',
      'لوحات إعلانية ومضيئة وبنرات',
      'بروشورات وكتالوجات وملفات شركات',
      'أزياء موحدة وهدايا ترويجية',
      'بصمة حرارية وقص ليزري (دايكت)',
    ],

    caps: {
      kicker: 'خدمات الطباعة والتصنيع',
      title: 'كل ما يحمل هوية علامتكم التجارية، نصنّعه بأعلى جودة.',
      sub: 'من تدقيق الملفات واعتماد النماذج الأولية حتى خروج الشحنة النهائية، تتم كافة المراحل التصنيعية داخل مصنعنا في الدمام. اختر الخدمة المطلوبة وتواصل معنا مباشرة لنبدأ التنفيذ.',
      items: [
        {
          tag: '01',
          name: 'مطبوعات الشركات والبطاقات الفاخرة',
          desc: 'طباعة بطاقات الأعمال على أرقى أنواع الورق العادي والفاخر، مع خدمات إضافة البصمة الحرارية واليوﭬي الموضعي (Spot UV)، وطباعة الأوراق والمراسلات الرسمية والأظرف والبروفايلات والكتالوجات والمجلدات.',
          specs: ['بصمة حرارية ويوﭬي', 'ورق فاخر ومتنوع', 'مراسلات رسمية وأظرف'],
        },
        {
          tag: '02',
          name: 'بكجات ومستلزمات المطاعم والمقاهي',
          desc: 'إنتاج وطباعة الأكواب الورقية والبلاستيكية بكافة الأحجام والمقاسات، باستخدام أحبار آمنة ومعتمدة من الهيئة العامة للغذاء والدواء، وتصنيع علب التغليف الورقية وأوراق تغليف الوجبات وسندويشات الطعام.',
          specs: ['أكواب بكافة المقاسات', 'أحبار معتمدة وصحية', 'علب وأوراق تغليف فاخرة'],
        },
        {
          tag: '03',
          name: 'صناديق وعلب التغليف الفاخرة',
          desc: 'خطوط إنتاج متخصصة لتصميم وتصنيع علب الهارد كفر (الكرتون المقوى الفاخر)، وعلب الفوركس والأكريليك مع الطباعة والتشطيب عالي الدقة.',
          specs: ['كرتون مقوى فاخر', 'فوركس وأكريليك', 'تصنيع وطباعة متكاملة'],
        },
        {
          tag: '04',
          name: 'الأكياس الورقية التجارية',
          desc: 'تصنيع وطباعة الأكياس الورقية الفاخرة للمطاعم والمتاجر ومحلات التجزئة بمختلف المقاسات، بمقابض يد أو بدونها، وبأحبار صديقة للبيئة.',
          specs: ['مقاسات متعددة', 'بمقابض أو بدونها', 'أحبار صديقة للبيئة'],
        },
        {
          tag: '05',
          name: 'الملصقات التجارية والليبلات',
          desc: 'طباعة الملصقات البلاستيكية والورقية المقاومة للماء، وملصقات الرول لمنتجات الأغذية والتمور ومستحضرات التجميل، وليبلات القماش المنسوجة للمشاغل ودور الأزياء.',
          specs: ['بلاستيك وورق مقاوم', 'ملصقات رول صناعية', 'ليبلات قماشية منسوجة'],
        },
        {
          tag: '06',
          name: 'تجهيز المعارض والفعاليات والمؤتمرات',
          desc: 'قسم متخصص لتجهيز أجنحة المعارض والبوثات، وتنفيذ أسوار المشاريع الخشبية والإنشائية، وتوفير كافة المطبوعات والمجسمات اللازمة للفعاليات والمؤتمرات.',
          specs: ['أجنحة معارض وبوثات', 'أسوار مشاريع وتغطيات', 'تجهيز متكامل للفعاليات'],
        },
        {
          tag: '07',
          name: 'اللوحات الإعلانية والمضيئة والإرشادية',
          desc: 'تصنيع وتركيب اللوحات الإعلانية المضيئة الداخلية والخارجية (حروف بارزة، ليد)، وتصنيع الهياكل المعدنية، واللوحات الإرشادية للمشاريع والمباني والمجمعات.',
          specs: ['لوحات مضيئة وحروف بارزة', 'هياكل معدنية متينة', 'لوحات إرشادية للمشاريع'],
        },
        {
          tag: '08',
          name: 'الهدايا الدعائية والترويجية للشركات',
          desc: 'حلول متكاملة للهدايا المؤسسية تشمل صناديق الإهداء الفاخرة، وحدات التخزين (USB)، الأجندات، الأقلام، والأكواب الحرارية، مع خدمات الطباعة والتطريز المباشر على الملابس.',
          specs: ['صناديق إهداء فاخرة', 'أجندات وإلكترونيات', 'طباعة وتطريز أزياء'],
        },
        {
          tag: '09',
          name: 'الاستشارات الفنية والطباعية',
          desc: 'فريق استشاري متخصص لمساعدتكم في اختيار أفضل الخامات وتقنيات الطباعة والتشطيب التي تضمن إبراز منتجكم بأبهى صورة وأعلى كفاءة اقتصادية.',
          specs: ['استشارات متخصصة', 'حلول تصنيع مبتكرة', 'دعم فني مباشر'],
        },
        {
          tag: '10',
          name: 'طباعة وتجليد الكتب والمجلات',
          desc: 'خدمات طباعة متقدمة للكتب الثقافية، الروايات، والمجلات الدورية، مع خيارات تجليد متعددة (تجليد فاخر، تجليد حراري، وتدبيس).',
          specs: ['كتب وروايات', 'مجلات ومطبوعات دورية', 'تجليد فاخر وحراري'],
        },
        {
          tag: '11',
          name: 'مطبوعات المناسبات والاستقبالات',
          desc: 'تصميم وتنفيذ ستاندات الفوركس، بطاقات الطاولات، وبطاقات الدعوة الفاخرة لمختلف المناسبات الرسمية والعائلية.',
          specs: ['ستاندات عرض فوركس', 'بطاقات طاولات', 'دعوات استقبال راقية'],
        },
        {
          tag: '12',
          name: 'مجسمات ومشاريع التخرج المتخصصة',
          desc: 'تنفيذ النماذج المعمارية والمجسمات الهندسية ومشاريع التخرج بدقة عالية باستخدام خامات الفوركس والأكريليك والقص الليزري.',
          specs: ['فوركس وأكريليك', 'قص ليزري دقيق', 'تنفيذ هندسي حسب الطلب'],
        },
      ],
    },

    line: {
      kicker: 'مراحل خط الإنتاج',
      title: 'خمس مراحل دقيقة لضمان أعلى جودة.',
      sub: 'يبدأ الإنتاج الفعلي مباشرة فور اعتماد النموذج والبروفة الرقمية.',
      steps: [
        {
          no: 'S1',
          name: 'التجهيز والتدقيق الفني',
          desc: 'فحص ملفات التصميم وضبط معايير الألوان وتجهيز بروفة رقمية للاعتماد النهائي قبل بدء التشغيل.',
        },
        {
          no: 'S2',
          name: 'إعداد خطوط الإنتاج',
          desc: 'معايرة المكائن وتجهيز الخامات المعتمدة ومطابقة درجات الألوان بدقة مع هوية العميل.',
        },
        {
          no: 'S3',
          name: 'مرحلة الطباعة والتشغيل',
          desc: 'تشغيل الطلب على خط الإنتاج المناسب: أوفست للكميات الكبيرة، ديجيتال للسرعة، وماكينات المقاسات العريضة للمساحات الكبيرة.',
        },
        {
          no: 'S4',
          name: 'التشطيب والمعالجة الفنية',
          desc: 'إضافة طبقات الحماية (السلوفان)، تطبيق البصمة واليوﭬي، والقص والتشكيل الدقيق لأخذ المنتج شكله النهائي.',
        },
        {
          no: 'S5',
          name: 'مراقبة الجودة والتسليم',
          desc: 'فحص دقيق لكل دفعة إنتاجية، يعقبه التغليف الآمن والشحن المباشر لكافة مدن ومناطق المملكة.',
        },
      ],
    },

    materials: {
      kicker: 'مكتبة الخامات',
      title: 'تنوّع في الخامات... واحترافية في التنفيذ.',
      sub: 'نوفر تشكيلة واسعة من أجود خامات الورق والكرتون والفينيل والأقمشة لتناسب هوية علامتكم التجارية. بإمكانكم طلب عينات ملموسة مع عرض السعر.',
      chips: [
        { code: 'AZ-01', name: 'ورق كوشيه فاخر', spec: '115–350 جم' },
        { code: 'AZ-02', name: 'كرافت طبيعي', spec: 'أكياس · علب وتغليف · بطاقات تعليق' },
        { code: 'AZ-03', name: 'ورق كتّان محبب', spec: 'بطاقات أعمال · كروت دعوة' },
        { code: 'AZ-04', name: 'سلوفان مخملي فاخر', spec: 'ملمس ناعم ومقاوم' },
        { code: 'AZ-05', name: 'فينيل شفاف وأبيض', spec: 'ملصقات تجارية · واجهات' },
        { code: 'AZ-06', name: 'بصمة وفويل هولوغرافي', spec: 'أختام ضمان · لمسات فنية' },
        { code: 'AZ-07', name: 'كرتون مضلّع ومقوى', spec: 'صناديق شحن وتغليف' },
        { code: 'AZ-08', name: 'كانفاس وأقمشة فاخرة', spec: 'لوحات جدارية · بنرات' },
        { code: 'AZ-09', name: 'أكريليك وخامات صلبة', spec: 'لوحات إعلانية · ستاندات ومجسمات' },
        { code: 'AZ-10', name: 'قطن وأنسجة منسوجة', spec: 'أزياء موحدة · حقائب قماشية' },
      ],
      cta: 'طلب عينات الخامات',
    },

    industries: {
      kicker: 'القطاعات المستفيدة',
      title: 'حلول تصنيعية تلبي تطلعات قطاعكم.',
      sub: 'تتطلب كل صناعة معايير طباعية خاصة — ونحن نلبي احتياجات مختلف القطاعات باحترافية يومياً.',
      items: [
        {
          name: 'المقاهي والمطاعم والضيافة',
          desc: 'حلول متكاملة لقطاع الأغذية والمشروبات تشمل الأكواب الورقية والبلاستيكية، علب الوجبات، وأوراق التغليف المعتمدة غذائياً.',
        },
        {
          name: 'المتاجر والمشاريع الناشئة',
          desc: 'ندعم رواد الأعمال والمشاريع الواعدة بمرونة في كميات الإنتاج، وتوفير أكياس التسوق وعلب التغليف وبكجات العبايات والمنتجات.',
        },
        {
          name: 'المعارض والفعاليات والمؤتمرات',
          desc: 'تنفيذ وتجهيز أجنحة المعارض والفعاليات الكبرى عبر كوادر فنية متخصصة في بناء البوثات وتركيب اللوحات التوجيهية والإعلانية.',
        },
        {
          name: 'الشركات والمؤسسات',
          desc: 'تجهيز المقرات المؤسسية والمكاتب الجديدة باللوحات الجدارية الفاخرة (أكريليك)، اللوحات التعريفية والإرشادية، ومطبوعات الشركات الرسمية.',
        },
        {
          name: 'القطاع الطبي والتجميلي',
          desc: 'توفير المطبوعات الرسمية ومستلزمات التعبئة والتغليف والملصقات الخاصة بالمجمعات الطبية ومراكز التجميل وفق أعلى معايير النظافة والجودة.',
        },
        {
          name: 'العلامات التجارية الواعدة',
          desc: 'تجهيز بكجات إطلاق العلامات التجارية المتكاملة بهوية بصرية مميزة وكميات مرنة تدعم نمو أعمالكم وتوسعها في السوق.',
        },
      ],
    },

    quote: {
      kicker: 'طلب عرض سعر فوري',
      title: 'حدّد المواصفات... واستلم عرض السعر.',
      sub: 'يرجى تعبئة النموذج أدناه — سيتم توجيهه مباشرة لفريق المبيعات والإنتاج عبر واتساب لتزويدكم بعرض السعر خلال أوقات العمل الرسمية.',
      product: 'نوع المنتج المطلوب',
      productOptions: [
        'بطاقات أعمال فاخرة',
        'علب وتغليف / كرتون مقوى',
        'أكياس ورقية',
        'أكواب ورقية وأكمام',
        'ملصقات تجارية / ليبلات',
        'لوحات إعلانية ومضيئة / بنرات',
        'بروشورات / كتالوجات وملفات',
        'ملابس موحدة / هدايا دعائية',
        'منتج بمواصفات خاصة',
      ],
      qty: 'الكمية المطلوبة',
      qtyPlaceholder: 'مثال: 1,000 قطعة',
      material: 'نوع الخامة / المواصفات الإضافية (اختياري)',
      materialPlaceholder: 'مثال: كرافت طبيعي + بصمة ذهبية',
      deadline: 'موعد التسليم المرغوب',
      deadlineOptions: ['مرن', 'خلال أسبوع', 'عاجل'],
      notes: 'ملاحظات وتفاصيل إضافية (اختياري)',
      notesPlaceholder: 'أي مواصفات أو مقاسات خاصة تود مشاركتها مع الفريق الفني…',
      submit: 'إرسال الطلب عبر واتساب',
      hint: 'بدون نماذج معقدة أو تسجيل — يفتح الطلب مباشرة عبر تطبيق واتساب لسهولة وسرعة التواصل.',
      previewHeading: 'معاينة تفاصيل الطلب',
      previewEmpty: '—',
      msg: {
        greeting: 'السلام عليكم ورحمة الله — طلب عرض سعر جديد من آرت زون:',
        product: 'المنتج',
        qty: 'الكمية',
        material: 'الخامة والمواصفات',
        deadline: 'الموعد المطلوب',
        notes: 'ملاحظات إضافية',
      },
    },

    contact: {
      kicker: 'مقر المصنع',
      title: 'يسعدنا استقبالكم في مقرنا، أو التواصل مباشرة مع فريق الإنتاج.',
      sub: 'مقرنا الرئيس في مدينة الدمام، وخدمات الشحن والتوصيل تغطي كافة مناطق المملكة العربية السعودية.',
      addressLabel: 'العنوان الرسمي',
      address: 'شارع 18، حي البادية، الدمام 32243، المملكة العربية السعودية',
      phoneLabel: 'الهاتف المباشر والواتساب',
      mapCta: 'عرض الموقع على خرائط جوجل',
      waCta: 'تواصل مباشرة عبر واتساب',
    },

    footer: {
      line: 'مصنع طباعة وتغليف وطني في الدمام — كافة مراحل الإنتاج تحت سقف واحد منذ عام 2016.',
      rights: 'آرت زون للطباعة. جميع الحقوق محفوظة.',
      backToTop: 'العودة للأعلى',
    },

    workPreview: {
      kicker: 'أحدث الإنتاجات',
      title: 'منتجات صُنعت بأعلى معايير الجودة.',
      sub: 'نماذج من أعمال قمنا بتنفيذها وتسليمها لعملائنا في مختلف مدن المملكة — من مستلزمات الضيافة والتغليف إلى الهدايا الترويجية.',
      cta: 'استعراض كافة الأعمال',
      items: [
        { img: 'portfolio/p80.jpeg', cat: 'المقاهي والمطاعم', name: 'أكواب مخصصة للعلامات التجارية' },
        { img: 'portfolio/p85.jpeg', cat: 'أكواب ومشروبات', name: 'أكواب ورقية مزدوجة عازلة للحرارة' },
        { img: 'portfolio/p34.jpeg', cat: 'هدايا ترويجية', name: 'وحدات تخزين USB مخصصة للشركات' },
      ],
    },

    gallery: {
      kicker: 'معرض الأعمال',
      title: 'جودة نبرهن عليها... وإتقان نلتزم به.',
      sub: 'نماذج حية من إنتاج مصنعنا بالدمام لشركاء نجاحنا في مختلف مناطق المملكة — من حلول التغليف والطباعة الفاخرة إلى اللوحات والتجهيزات المتكاملة.',
      jobLabel: 'JOB',
      ready: {
        title: 'هل ترغب في انضمام علامتكم التجارية لشركاء نجاحنا؟',
        sub: 'شاركونا تفاصيل طلبكم، وسيقوم فريق المبيعات والإنتاج بتزويدكم بعرض السعر في أسرع وقت.',
        cta: 'طلب عرض سعر',
      },
    },

    about: {
      kicker: 'عن المصنع',
      title: 'تصنيع مباشر متكامل... دون وسطاء.',
      lead: 'انطلقت مسيرة «آرت زون» عام 2016 برؤية واضحة: تمكين العلامات التجارية والشركات في المملكة من الحصول على أعلى معايير الجودة وسرعة الإنجاز بأنسب الأسعار، من خلال خطوط إنتاج متكاملة في قلب مدينة الدمام.',
      p1: 'بدلاً من الاعتماد على سلاسل الوسطاء، حرصنا على الاستثمار المباشر في البنية التحتية الصناعية: أحدث مكائن الطباعة والقص والتشطيب الدقيق، بإشراف كوادر فنية متخصصة تضمن أدق التفاصيل وتلتزم بأعلى مقاييس الجودة.',
      p2: 'واليوم، نفخر بتقديم حلول تصنيعية متكاملة تشمل المطبوعات التجارية، والتغليف الفاخر، ومستلزمات الضيافة والمقاهي، واللوحات الإعلانية والهدايا الترويجية، مع توفير خدمات الشحن والتوصيل لكافة مدن ومناطق المملكة. كما نعتز بثقة أكثر من 500 علامة تجارية رائدة اختارت «آرت زون» شريكاً رسمياً لطباعة هويتها.',
      floorKicker: 'من خطوط الإنتاج',
      photos: [
        { img: 'portfolio/p75.jpeg', caption: 'خط الطباعة العريضة والتجهيزات' },
        { img: 'portfolio/p77.jpeg', caption: 'معرض نماذج المنتجات' },
      ],
      valuesKicker: 'قيمنا في العمل',
      valuesTitle: 'ركائزنا الأساسية في التصنيع والجودة.',
      values: [
        { name: 'الدقة المتناهية', desc: 'مطابقة تامة للألوان، وفحص دقيق للقوالب، وتدقيق يدوي لكل دفعة إنتاجية لضمان أعلى مستويات الجودة.' },
        { name: 'سرعة الإنجاز', desc: 'جدولة فورية وبدء الإنتاج مباشرة فور اعتماد العينات، مع الالتزام الصارم بمواعيد التسليم.' },
        { name: 'الشفافية والموثوقية', desc: 'عروض أسعار واضحة ومحددة، والتزام كامل بالمواصفات المتفق عليها دون أي تكاليف إضافية غير معلنة.' },
        { name: 'الإتقان والابتكار', desc: 'لمسات تشطيب احترافية تضيف قيمة استثنائية لمنتجاتكم وتبرز فخامة وتميز علامتكم التجارية.' },
      ],
      cta: {
        title: 'يسعدنا استقبالكم في مقرنا بالدمام.',
        sub: 'تفضلوا بزيارة مصنعنا للاطلاع على خطوط الإنتاج — أو تواصلوا معنا مباشرة لطلب عرض السعر.',
        primary: 'طلب عرض سعر',
        secondary: 'تواصل مع المصنع',
      },
    },

    contactPage: {
      kicker: 'تواصل معنا',
      title: 'تواصل مباشر مع إدارة المبيعات والإنتاج.',
      sub: 'نسعد بخدمتكم وتزويدكم بعروض الأسعار والاستشارات الفنية في أسرع وقت خلال ساعات العمل الرسمية.',
      channels: [
        { key: 'wa', label: 'واتساب', hint: 'خدمة سريعة للرد على الاستفسارات وعروض الأسعار', cta: 'مراسلة عبر واتساب' },
        { key: 'call', label: 'الاتصال الهاتفي', hint: 'تواصل هاتفي مباشر مع المصنع', cta: 'اتصال الآن' },
        { key: 'visit', label: 'زيارة مقر المصنع', hint: 'حي البادية، الدمام', cta: 'عرض الموقع على خرائط جوجل' },
      ],
      quoteNudge: {
        title: 'المواصفات جاهزة لديكم؟',
        sub: 'بإمكانكم تزويدنا بتفاصيل الطلب مباشرة ليصلكم عرض السعر من الفريق الفني.',
        cta: 'طلب عرض سعر',
      },
      faqKicker: 'الأسئلة الشائعة',
      faqTitle: 'إجابات على استفساراتكم.',
      faq: [
        {
          q: 'ما هي المدة المتوقعة لاستلام عرض السعر؟',
          a: 'يتم الرد وتزويدكم بعرض السعر خلال دقائق معدودة في أوقات العمل الرسمية بمجرد تزويدنا بنوع المنتج والكمية والمواصفات المطلوبة.',
        },
        {
          q: 'هل توفرون خدمة الشحن والتوصيل لجميع مناطق المملكة؟',
          a: 'نعم، نوفر خدمة الشحن السريع والآمن إلى كافة مدن ومحافظات المملكة مع توفير رقم تتبع لكل شحنة.',
        },
        {
          q: 'هل تتوفر لديكم خدمة تجهيز وتدقيق ملفات التصميم للطباعة؟',
          a: 'نعم، يقوم فريقنا الفني المتخصص بمراجعة وتجهيز الملفات والتأكد من مطابقتها للمعايير الطباعية وإرسال بروفة رقمية لاعتمادكم قبل بدء الإنتاج.',
        },
        {
          q: 'ما هي صيغ الملفات المقبولة للبدء في الطباعة؟',
          a: 'نقبل كافة الصيغ الطباعية والتصميمية (PDF, AI, PSD, EPS) عالية الدقة، كما يمكنكم مشاركة أفكاركم وسيقوم فريقنا بمساعدتكم في تجهيزها.',
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
