/* ===================================================================
   Service pages (/services/<slug>/) — one entry per product line.
   Plain data (no React) so the router and the prerender script can
   import it too.

   Copy rules:
   - Arabic in the formal register; the colloquial search term appears
     once in brackets next to the formal one (e.g. «(الكروت الشخصية)»).
   - Only facts the business has confirmed (see the home-page copy).
     No sizes, minimum quantities or prices until the plant supplies
     them — FAQ answers route those questions to WhatsApp instead.
   - `capTag` links the page to its card in the home capabilities grid.
   - `images` are file names from src/data/gallery.js: real job photos first,
     then illustrative ones (ILLUSTRATIVE) only where real photos are short.
   =================================================================== */

export const SERVICES = [
  {
    slug: 'paper-cups',
    capTag: '02',
    images: [
      'branded-paper-cups-cafe-collection',
      'double-wall-paper-cup-floral-print',
      'hot-cup-with-lid-ile-rousseau',
      'clear-plastic-cup-ile-rousseau',
    ],
    related: ['boxes', 'paper-bags', 'stickers-labels'],
    ar: {
      name: 'طباعة الأكواب الورقية والبلاستيكية',
      short: 'أكواب ورقية بجدار مفرد ومزدوج (دبل) وأكواب بلاستيكية شفافة، مطبوعة بهوية المقهى أو المطعم.',
      title: 'طباعة أكواب ورقية بالشعار في الدمام — سنقل ودبل وبلاستيك | آرت زون',
      description: 'طباعة الأكواب الورقية والبلاستيكية بشعار المقهى أو المطعم في الدمام: أكواب سنقل ودبل للمشروبات الساخنة وأكواب شفافة للباردة، مع بروفة رقمية وشحن لكافة مدن المملكة.',
      h1: 'طباعة الأكواب الورقية بالشعار في الدمام',
      summary: 'يطبع مصنع آرت زون للطباعة في الدمام الأكواب الورقية والبلاستيكية بشعار المقهى أو المطعم وبكافة الأحجام: أكواب بجدار مفرد (سنقل)، وأكواب مزدوجة الجدار (دبل) عازلة للحرارة، وأكواب بلاستيكية شفافة للمشروبات الباردة. نُرسل بروفة رقمية لاعتمادها قبل الطباعة، ونشحن لكافة مدن المملكة.',
      options: [
        'أكواب ورقية بجدار مفرد (سنقل) للمشروبات الساخنة',
        'أكواب ورقية مزدوجة الجدار (أكواب دبل) عازلة للحرارة',
        'أكواب بلاستيكية شفافة للمشروبات الباردة مع الأغطية',
        'أكمام عازلة مطبوعة للأكواب',
        'طباعة بلون الهوية أو طباعة كاملة الألوان',
      ],
      materials: [
        'ورق مخصص لأكواب المشروبات الساخنة والباردة',
        'أحبار آمنة ومعتمدة لعبوات الأغذية',
        'طباعة على كامل محيط الكوب',
      ],
      audience: [
        'المقاهي المختصة ومحامص القهوة',
        'المطاعم وخدمات الطلبات الخارجية',
        'الفعاليات والمعارض',
        'الشركات لخدمات الضيافة الداخلية',
      ],
      faq: [
        {
          q: 'ما الفرق بين الكوب السنقل والكوب الدبل؟',
          a: 'الكوب السنقل مصنوع من جدار ورقي واحد، ويُستخدم عادةً مع كمّ عازل عند تقديم المشروبات الساخنة. أما الكوب الدبل فمكوّن من جدارين يعزلان الحرارة، فيُمسك مباشرة دون كمّ إضافي ويمنح ملمساً أفخم لهوية المقهى.',
        },
        {
          q: 'هل الأحبار المستخدمة آمنة على المشروبات؟',
          a: 'نعم، تُطبع الأكواب بأحبار آمنة ومعتمدة لعبوات الأغذية.',
        },
        {
          q: 'ما أقل كمية يمكن طلبها؟',
          a: 'تختلف أقل كمية حسب نوع الكوب ومقاسه وطريقة الطباعة. أرسلوا لنا النوع والمقاس والكمية التقريبية عبر واتساب، ونزوّدكم بالحد الأدنى وعرض السعر خلال ساعات العمل.',
        },
        {
          q: 'هل تتوفر خدمة تصميم الكوب؟',
          a: 'نعم، يجهّز فريق التدقيق الفني ملف الطباعة من شعاركم أو فكرتكم، ويُرسل بروفة رقمية لاعتمادكم قبل بدء الإنتاج.',
        },
        {
          q: 'هل توصلون الأكواب خارج الدمام؟',
          a: 'نعم، نشحن الطلبات إلى كافة مدن ومحافظات المملكة مع رقم تتبع لكل شحنة.',
        },
      ],
    },
    en: {
      name: 'Paper & Plastic Cup Printing',
      short: 'Single-wall and double-wall paper cups and clear plastic cups, printed with your café or restaurant brand.',
      title: 'Custom Printed Paper Cups in Dammam — Single & Double Wall | Art Zone',
      description: 'Branded paper and plastic cup printing in Dammam: single-wall and double-wall hot cups and clear cold cups, with a digital proof first and delivery across Saudi Arabia.',
      h1: 'Custom printed paper cups in Dammam',
      summary: 'Art Zone Printing prints paper and plastic cups with your café or restaurant logo at its plant in Dammam, in every size: single-wall cups, insulated double-wall cups for hot drinks, and clear plastic cups for cold drinks. You approve a digital proof before anything is printed, and we deliver to every city in Saudi Arabia.',
      options: [
        'Single-wall paper cups for hot drinks',
        'Insulated double-wall paper cups',
        'Clear plastic cups with lids for cold drinks',
        'Printed cup sleeves',
        'Brand-colour or full-colour printing',
      ],
      materials: [
        'Cup board made for hot and cold drinks',
        'Food-safe inks approved for food packaging',
        'Wrap-around print on the full cup',
      ],
      audience: [
        'Specialty cafés and coffee roasters',
        'Restaurants and takeaway services',
        'Events and exhibitions',
        'Companies, for in-house hospitality',
      ],
      faq: [
        {
          q: 'What is the difference between single-wall and double-wall cups?',
          a: 'A single-wall cup has one paper wall and is usually served with a sleeve for hot drinks. A double-wall cup has two walls that insulate the heat, so it can be held without a sleeve and feels more premium in the hand.',
        },
        {
          q: 'Are the inks safe for drinks?',
          a: 'Yes. Cups are printed with food-safe inks approved for food packaging.',
        },
        {
          q: 'What is the minimum order?',
          a: 'It depends on the cup type, size and print method. Send us the type, size and rough quantity on WhatsApp and we will reply with the minimum and a quote during working hours.',
        },
        {
          q: 'Can you design the cup?',
          a: 'Yes. Our prepress team prepares the print file from your logo or idea and sends a digital proof for approval before production.',
        },
        {
          q: 'Do you deliver outside Dammam?',
          a: 'Yes, we ship to every city in Saudi Arabia, with tracking on every shipment.',
        },
      ],
    },
  },

  {
    slug: 'boxes',
    capTag: '03',
    images: ['kraft-food-box-ile-rousseau', 'boxes-food-kraft', 'boxes-rigid-gift'],
    related: ['paper-cups', 'paper-bags', 'corporate-gifts'],
    ar: {
      name: 'طباعة العلب والبوكسات',
      short: 'علب الوجبات والحلويات والقهوة، علب الشحن، والعلب الفاخرة من الكرتون المقوى والفوركس والأكريليك.',
      title: 'طباعة علب وبوكسات بالشعار في الدمام — مطاعم وحلويات وهدايا | آرت زون',
      description: 'تصنيع وطباعة العلب والبوكسات في الدمام: علب الوجبات والحلويات والقهوة، علب الشحن من الكرتون المضلّع، والعلب الفاخرة هارد كفر وفوركس وأكريليك، مع الشحن لكافة مناطق المملكة.',
      h1: 'طباعة العلب والبوكسات بالشعار في الدمام',
      summary: 'يصمّم مصنع آرت زون للطباعة في الدمام ويطبع علب التغليف بكافة أنواعها: علب الوجبات والحلويات والقهوة للمطاعم والمقاهي، وعلب الشحن من الكرتون المضلّع، والعلب الفاخرة من الكرتون المقوى (هارد كفر) والفوركس والأكريليك للهدايا والمنتجات، مع تشطيبات البصمة والسلوفان، وشحن لكافة مدن المملكة.',
      options: [
        'علب الوجبات والحلويات (بوكسات الحلا) وعلب القهوة',
        'علب الشحن والتوصيل من الكرتون المضلّع',
        'العلب الفاخرة من الكرتون المقوى (هارد كفر)',
        'علب الفوركس والأكريليك للعرض والإهداء',
        'تغليف العبايات والمنتجات للمشاريع المنزلية بكميات مرنة',
      ],
      materials: [
        'كرتون مضلّع ومقوى',
        'ورق كرافت طبيعي',
        'سلوفان مخملي ناعم الملمس',
        'بصمة حرارية وفويل هولوغرافي',
        'قص وتشكيل حسب المقاس (دايكت)',
      ],
      audience: [
        'المطاعم والمقاهي ومحلات الحلويات',
        'المتاجر الإلكترونية والمشاريع المنزلية',
        'العلامات التجارية لتغليف المنتجات',
        'الشركات لعلب الهدايا المؤسسية',
      ],
      faq: [
        {
          q: 'هل يمكن تنفيذ علبة بمقاس خاص؟',
          a: 'نعم، نصمّم قالب القص حسب مقاس منتجكم، ونرسل بروفة رقمية للتصميم قبل الإنتاج.',
        },
        {
          q: 'هل تطبعون كميات صغيرة للمشاريع المنزلية؟',
          a: 'نعم، ندعم المشاريع المنزلية والناشئة بكميات إنتاج مرنة لعلب التغليف وبكجات العبايات والمنتجات. أرسلوا الكمية المطلوبة عبر واتساب لنؤكد الحد الأدنى للعلبة المختارة.',
        },
        {
          q: 'ما التشطيبات المتاحة للعلب الفاخرة؟',
          a: 'تشمل التشطيبات البصمة الحرارية الذهبية والفضية والهولوغرافي، والسلوفان المخملي، واليوﭬي الموضعي، إضافة إلى القص والتشكيل حسب التصميم.',
        },
        {
          q: 'كم تستغرق مدة التنفيذ؟',
          a: 'تختلف المدة حسب نوع العلبة والكمية والتشطيب، ويبدأ الإنتاج فور اعتماد البروفة. نحدد لكم موعد التسليم بدقة مع عرض السعر.',
        },
      ],
    },
    en: {
      name: 'Box & Packaging Printing',
      short: 'Food, dessert and coffee boxes, shipping boxes, and premium rigid, Forex and acrylic boxes.',
      title: 'Custom Printed Boxes in Dammam — Food, Dessert & Gift Boxes | Art Zone',
      description: 'Custom box printing in Dammam: food, dessert and coffee boxes, corrugated shipping boxes, and premium rigid, Forex and acrylic boxes, delivered across Saudi Arabia.',
      h1: 'Custom printed boxes in Dammam',
      summary: 'Art Zone Printing designs and prints every kind of box at its plant in Dammam: food, dessert and coffee boxes for restaurants and cafés, corrugated shipping boxes, and premium rigid (hardcover), Forex and acrylic boxes for gifts and products, finished with foil and lamination and delivered to every city in Saudi Arabia.',
      options: [
        'Food, dessert and coffee boxes',
        'Corrugated shipping and delivery boxes',
        'Premium rigid (hardcover) boxes',
        'Forex and acrylic display and gift boxes',
        'Abaya and product packaging for home businesses, in flexible quantities',
      ],
      materials: [
        'Corrugated and rigid board',
        'Natural kraft',
        'Soft-touch laminate',
        'Hot foil and holographic foil',
        'Die-cut to your size',
      ],
      audience: [
        'Restaurants, cafés and dessert shops',
        'Online stores and home businesses',
        'Brands packaging their products',
        'Companies ordering corporate gift boxes',
      ],
      faq: [
        {
          q: 'Can you make a box in a custom size?',
          a: 'Yes. We build the cutting die around your product and send a digital proof of the design before production.',
        },
        {
          q: 'Do you print small runs for home businesses?',
          a: 'Yes. We support home businesses and startups with flexible quantities for boxes, abaya packaging and product packaging. Send the quantity on WhatsApp and we will confirm the minimum for the box you chose.',
        },
        {
          q: 'Which finishes are available for premium boxes?',
          a: 'Gold, silver and holographic hot foil, soft-touch laminate and spot UV, plus die-cutting to the shape of your design.',
        },
        {
          q: 'How long does production take?',
          a: 'It depends on the box type, quantity and finish. Production starts as soon as you approve the proof, and we confirm the delivery date with the quote.',
        },
      ],
    },
  },

  {
    slug: 'paper-bags',
    capTag: '04',
    images: ['kraft-paper-bags-ile-rousseau', 'bags-handles', 'bags-takeaway'],
    related: ['boxes', 'paper-cups', 'stickers-labels'],
    ar: {
      name: 'طباعة الأكياس الورقية',
      short: 'أكياس ورقية بمقابض أو بدونها بكافة المقاسات، مطبوعة بأحبار صديقة للبيئة.',
      title: 'طباعة أكياس ورقية بالشعار في الدمام — كرافت بمقابض وبدون | آرت زون',
      description: 'تصنيع وطباعة الأكياس الورقية بالشعار في الدمام للمطاعم والمقاهي والمتاجر: كافة المقاسات، بمقابض أو بدونها، بأحبار صديقة للبيئة وشحن لكافة مناطق المملكة.',
      h1: 'طباعة الأكياس الورقية بالشعار في الدمام',
      summary: 'يصنّع مصنع آرت زون للطباعة في الدمام الأكياس الورقية ويطبعها بهوية علامتكم للمطاعم والمقاهي والمتاجر ومحلات التجزئة، بكافة المقاسات، بمقابض أو بدونها، وبأحبار صديقة للبيئة، مع شحن الطلبات لكافة مدن المملكة.',
      options: [
        'أكياس ورقية بمقابض للمتاجر والهدايا',
        'أكياس ورقية بدون مقابض للمطاعم والطلبات الخارجية',
        'أكياس بكافة المقاسات حسب المنتج',
        'طباعة بلون الهوية أو بعدة ألوان',
      ],
      materials: [
        'ورق كرافت طبيعي',
        'أحبار صديقة للبيئة',
      ],
      audience: [
        'المطاعم والمقاهي',
        'المتاجر ومحلات التجزئة',
        'المشاريع المنزلية والمتاجر الإلكترونية',
        'الفعاليات والهدايا',
      ],
      faq: [
        {
          q: 'هل تتوفر أكياس بمقابض وبدون مقابض؟',
          a: 'نعم، نصنّع الأكياس الورقية بمقابض أو بدونها حسب الاستخدام، بكافة المقاسات.',
        },
        {
          q: 'ما أقل كمية لطباعة الأكياس الورقية؟',
          a: 'تختلف أقل كمية حسب المقاس وعدد الألوان. أرسلوا المقاس والكمية التقريبية عبر واتساب ونرد بالحد الأدنى وعرض السعر.',
        },
        {
          q: 'هل يمكن طباعة الأكياس مع العلب والأكواب بنفس الهوية؟',
          a: 'نعم، ننتج الأكياس والعلب والأكواب في المصنع نفسه، فتصلكم بهوية متطابقة الألوان في طلب واحد.',
        },
      ],
    },
    en: {
      name: 'Paper Bag Printing',
      short: 'Paper bags with or without handles in every size, printed with eco-friendly inks.',
      title: 'Custom Printed Paper Bags in Dammam — Kraft, With or Without Handles | Art Zone',
      description: 'Branded paper bag printing in Dammam for restaurants, cafés and shops: every size, with or without handles, eco-friendly inks, delivered across Saudi Arabia.',
      h1: 'Custom printed paper bags in Dammam',
      summary: 'Art Zone Printing makes and prints branded paper bags at its plant in Dammam for restaurants, cafés, shops and retailers: every size, with or without handles, printed with eco-friendly inks and delivered to every city in Saudi Arabia.',
      options: [
        'Paper bags with handles for shops and gifts',
        'Paper bags without handles for restaurants and takeaway',
        'Every size, made to fit your product',
        'Brand-colour or multi-colour printing',
      ],
      materials: ['Natural kraft paper', 'Eco-friendly inks'],
      audience: [
        'Restaurants and cafés',
        'Shops and retailers',
        'Home businesses and online stores',
        'Events and gifting',
      ],
      faq: [
        {
          q: 'Do you make bags with and without handles?',
          a: 'Yes. We make paper bags with or without handles, depending on how you use them, in every size.',
        },
        {
          q: 'What is the minimum order for paper bags?',
          a: 'It depends on the size and number of colours. Send the size and rough quantity on WhatsApp and we will reply with the minimum and a quote.',
        },
        {
          q: 'Can bags be printed together with boxes and cups?',
          a: 'Yes. Bags, boxes and cups are all produced on the same floor, so they arrive colour-matched in one order.',
        },
      ],
    },
  },

  {
    slug: 'business-cards',
    capTag: '01',
    images: ['bc-premium-foil', 'bc-stock-fan', 'bc-stationery-set'],
    related: ['stickers-labels', 'corporate-gifts', 'banners'],
    ar: {
      name: 'بطاقات الأعمال (الكروت الشخصية) والمطبوعات الرسمية',
      short: 'بطاقات أعمال على ورق عادي وفاخر مع البصمة واليوﭬي الموضعي، والأوراق الرسمية والأظرف والبروفايلات.',
      title: 'طباعة كروت شخصية فاخرة في الدمام — بطاقات أعمال وبصمة ويوﭬي | آرت زون',
      description: 'طباعة بطاقات الأعمال (الكروت الشخصية) في الدمام على ورق عادي وفاخر مع البصمة الحرارية واليوﭬي الموضعي، إضافة إلى الأوراق الرسمية والأظرف والبروفايلات والبروشورات.',
      h1: 'طباعة بطاقات الأعمال (الكروت الشخصية) في الدمام',
      summary: 'يطبع مصنع آرت زون للطباعة في الدمام بطاقات الأعمال (الكروت الشخصية) على الورق العادي والفاخر، مع خط مخصص للبصمة الحرارية واليوﭬي الموضعي (Spot UV)، إضافة إلى الأوراق والمراسلات الرسمية والأظرف وبروفايلات الشركات والبروشورات والمجلدات، بطباعة رقمية للطلبات السريعة وأوفست للكميات الكبيرة.',
      options: [
        'بطاقات أعمال على ورق عادي أو فاخر',
        'بطاقات بالبصمة الحرارية الذهبية والفضية',
        'بطاقات باليوﭬي الموضعي والسلوفان المخملي',
        'الأوراق الرسمية (الليترهيد) والأظرف',
        'بروفايلات الشركات والبروشورات والمجلدات',
      ],
      materials: [
        'ورق كوشيه 115–350 جم',
        'ورق كتّان محبب للبطاقات والدعوات',
        'سلوفان مخملي ناعم الملمس',
        'بصمة حرارية ويوﭬي موضعي',
      ],
      audience: [
        'الشركات والمؤسسات',
        'رواد الأعمال والمهنيون',
        'العيادات والمكاتب',
        'المتاجر والمطاعم',
      ],
      faq: [
        {
          q: 'ما الفرق بين الطباعة الرقمية والأوفست للكروت؟',
          a: 'تناسب الطباعة الرقمية (الديجيتال) الكميات الصغيرة والطلبات السريعة، بينما تناسب طباعة الأوفست الكميات الكبيرة بتكلفة أقل للقطعة وثبات أعلى في الألوان. نقترح لكم الأنسب حسب الكمية والموعد.',
        },
        {
          q: 'هل تتوفر البصمة الذهبية واليوﭬي على بطاقات الأعمال؟',
          a: 'نعم، لدينا خط مخصص للبصمة الحرارية واليوﭬي الموضعي لإبراز الشعار والعناصر المختارة.',
        },
        {
          q: 'ما صيغ الملفات المقبولة؟',
          a: 'نقبل ملفات PDF وAI وPSD وEPS عالية الدقة، ويمكنكم إرسال الفكرة أو الشعار فقط ليجهّز فريقنا الملف للطباعة.',
        },
        {
          q: 'هل يمكن طباعة كامل هوية الشركة في طلب واحد؟',
          a: 'نعم، نطبع بطاقات الأعمال والأوراق الرسمية والأظرف والبروفايلات بهوية متطابقة الألوان في طلب واحد.',
        },
      ],
    },
    en: {
      name: 'Business Cards & Corporate Stationery',
      short: 'Business cards on standard and premium stock with foil and spot UV, plus letterheads, envelopes and company profiles.',
      title: 'Business Card Printing in Dammam — Premium, Foil & Spot UV | Art Zone',
      description: 'Business card printing in Dammam on standard and premium stock with hot foil and spot UV, plus letterheads, envelopes, company profiles and brochures.',
      h1: 'Business card printing in Dammam',
      summary: 'Art Zone Printing prints business cards on standard and premium stock at its plant in Dammam, with a dedicated hot-foil and spot-UV line, plus letterheads, envelopes, company profiles, brochures and folders. Digital printing handles fast and short runs; offset handles volume.',
      options: [
        'Business cards on standard or premium stock',
        'Gold and silver hot-foil cards',
        'Spot UV and soft-touch cards',
        'Letterheads and envelopes',
        'Company profiles, brochures and folders',
      ],
      materials: [
        'Coated art paper, 115–350 gsm',
        'Textured linen paper for cards and invitations',
        'Soft-touch laminate',
        'Hot foil and spot UV',
      ],
      audience: [
        'Companies and institutions',
        'Founders and professionals',
        'Clinics and offices',
        'Shops and restaurants',
      ],
      faq: [
        {
          q: 'Digital or offset for business cards?',
          a: 'Digital suits short runs and urgent orders; offset suits large runs with a lower cost per card and tighter colour consistency. We recommend the right one for your quantity and deadline.',
        },
        {
          q: 'Can business cards have gold foil and spot UV?',
          a: 'Yes. We run a dedicated hot-foil and spot-UV line to make the logo and chosen details stand out.',
        },
        {
          q: 'Which file formats do you accept?',
          a: 'High-resolution PDF, AI, PSD and EPS. You can also send just the idea or the logo and our team will prepare the print file.',
        },
        {
          q: 'Can you print our full stationery set in one order?',
          a: 'Yes. Business cards, letterheads, envelopes and profiles are printed colour-matched in one order.',
        },
      ],
    },
  },

  {
    slug: 'stickers-labels',
    capTag: '05',
    images: ['vinyl-cutting-plotter-stickers', 'labels-rolls', 'labels-jars'],
    related: ['boxes', 'paper-cups', 'business-cards'],
    ar: {
      name: 'الملصقات (الاستيكرات) والليبلات',
      short: 'ملصقات ورقية وبلاستيكية مقاومة للماء، ملصقات رول للمنتجات والتمور، وليبلات قماشية للأزياء.',
      title: 'طباعة استيكرات وملصقات وليبل رول في الدمام — مقاومة للماء | آرت زون',
      description: 'طباعة الملصقات (الاستيكرات) في الدمام: ورقية وبلاستيكية مقاومة للماء، شفافة وبيضاء، ملصقات رول للمنتجات والتمور ومستحضرات التجميل بأي شكل، وليبلات قماش منسوجة للأزياء.',
      h1: 'طباعة الملصقات (الاستيكرات) والليبلات في الدمام',
      summary: 'يطبع مصنع آرت زون للطباعة في الدمام الملصقات (الاستيكرات) الورقية والبلاستيكية المقاومة للماء بأي شكل ومقاس، وملصقات الرول (ليبل رول) لمنتجات الأغذية والتمور ومستحضرات التجميل، والليبلات القماشية المنسوجة للمشاغل ودور الأزياء، مع القص الدقيق حسب التصميم.',
      options: [
        'ملصقات ورقية وبلاستيكية بأي شكل ومقاس',
        'ملصقات رول (ليبل رول) للمنتجات والتمور ومستحضرات التجميل',
        'استيكرات شفافة وبيضاء للواجهات والعبوات',
        'ملصقات ضمان وأختام هولوغرافية',
        'ليبلات قماشية منسوجة للملابس والعبايات',
      ],
      materials: [
        'فينيل شفاف وأبيض',
        'ورق وبلاستيك مقاوم للماء',
        'فويل هولوغرافي',
        'قص آلي دقيق حسب الشكل',
      ],
      audience: [
        'مصانع ومحلات التمور والأغذية',
        'علامات مستحضرات التجميل والعطور',
        'المشاغل ودور الأزياء',
        'المتاجر الإلكترونية والمشاريع المنزلية',
      ],
      faq: [
        {
          q: 'هل الملصقات مقاومة للماء؟',
          a: 'نعم، نوفر ملصقات ورقية وبلاستيكية مقاومة للماء، تناسب العبوات التي تُحفظ في الثلاجة أو تتعرض للرطوبة.',
        },
        {
          q: 'هل يمكن قص الملصق بشكل الشعار؟',
          a: 'نعم، تُقص الملصقات آلياً بأي شكل حسب التصميم، سواء كانت مفردة أو على رول.',
        },
        {
          q: 'ما الفرق بين الملصقات المفردة وملصقات الرول؟',
          a: 'تُستخدم الملصقات المفردة للتغليف اليدوي والهدايا، بينما تُستخدم ملصقات الرول (ليبل رول) لتعبئة المنتجات بكميات كبيرة وتسريع وضعها على العبوات.',
        },
        {
          q: 'هل تطبعون ليبلات قماشية للملابس؟',
          a: 'نعم، ننفذ الليبلات القماشية المنسوجة للمشاغل ودور الأزياء والعبايات.',
        },
      ],
    },
    en: {
      name: 'Stickers & Labels',
      short: 'Waterproof paper and plastic stickers, roll labels for products and dates, and woven fabric labels.',
      title: 'Sticker & Roll Label Printing in Dammam — Waterproof, Any Shape | Art Zone',
      description: 'Sticker and label printing in Dammam: waterproof paper and plastic stickers, clear and white vinyl, roll labels for food, dates and cosmetics in any shape, and woven fabric labels.',
      h1: 'Sticker and label printing in Dammam',
      summary: 'Art Zone Printing prints waterproof paper and plastic stickers in any shape and size at its plant in Dammam, roll labels for food, dates and cosmetics, and woven fabric labels for tailors and fashion houses, all cut precisely to the design.',
      options: [
        'Paper and plastic stickers in any shape and size',
        'Roll labels for food, dates and cosmetics',
        'Clear and white stickers for windows and packaging',
        'Security seals and holographic stickers',
        'Woven fabric labels for clothing and abayas',
      ],
      materials: [
        'Clear and white vinyl',
        'Waterproof paper and plastic',
        'Holographic foil',
        'Precision machine cutting to shape',
      ],
      audience: [
        'Date and food producers',
        'Cosmetics and fragrance brands',
        'Tailors and fashion houses',
        'Online stores and home businesses',
      ],
      faq: [
        {
          q: 'Are the stickers waterproof?',
          a: 'Yes. We offer waterproof paper and plastic stickers, suited to packaging that is refrigerated or exposed to moisture.',
        },
        {
          q: 'Can stickers be cut to the shape of our logo?',
          a: 'Yes. Stickers are machine-cut to any shape, as single stickers or on a roll.',
        },
        {
          q: 'Single stickers or roll labels?',
          a: 'Single stickers suit hand packing and gifts; roll labels suit high-volume product packing and faster application.',
        },
        {
          q: 'Do you make woven fabric labels?',
          a: 'Yes, for tailors, fashion houses and abaya brands.',
        },
      ],
    },
  },

  {
    slug: 'signage',
    capTag: '07',
    images: [
      'ile-rousseau-cafe-illuminated-sign',
      'rue-du-rhone-illuminated-sign',
      'rue-du-rhone-pin-logo-sign',
      'steel-table-number-sign',
    ],
    related: ['banners', 'corporate-gifts', 'business-cards'],
    ar: {
      name: 'اللوحات الإعلانية والمضيئة (لوحات المحلات)',
      short: 'لوحات مضيئة داخلية وخارجية بحروف بارزة، هياكل معدنية، ولوحات إرشادية وتعريفية للمباني والمشاريع.',
      title: 'لوحات محلات ولوحات مضيئة في الدمام — تصنيع وتركيب حروف بارزة | آرت زون',
      description: 'تصنيع وتركيب اللوحات الإعلانية والمضيئة في الدمام: لوحات المحلات بالحروف البارزة والإضاءة، الهياكل المعدنية، اللوحات الإرشادية للمباني والمشاريع، ولوحات الأكريليك للمكاتب.',
      h1: 'تصنيع وتركيب اللوحات الإعلانية والمضيئة في الدمام',
      summary: 'يصنّع قسم اللوحات في مصنع آرت زون للطباعة بالدمام اللوحات الإعلانية والمضيئة الداخلية والخارجية (لوحات المحلات) بالحروف البارزة والإضاءة، ويركّبها فريق فني متمرس، إضافة إلى الهياكل المعدنية، واللوحات الإرشادية للمشاريع والمباني والطرق، ولوحات الأكريليك الجدارية واللوحات التعريفية للمكاتب.',
      options: [
        'لوحات محلات مضيئة بحروف بارزة',
        'لوحات مضيئة داخلية وخارجية (لايت بوكس)',
        'هياكل معدنية للوحات الكبيرة',
        'لوحات إرشادية للمباني والمشاريع والطرق',
        'لوحات أكريليك جدارية ولوحات تعريفية للمكاتب',
      ],
      materials: [
        'أكريليك وخامات صلبة',
        'إضاءة ليد',
        'هياكل من الحديد والستانلس ستيل',
        'فينيل للواجهات',
      ],
      audience: [
        'المقاهي والمطاعم والمحلات التجارية',
        'الشركات والمكاتب الجديدة',
        'المشاريع الإنشائية والمجمعات',
        'المعارض والفعاليات',
      ],
      faq: [
        {
          q: 'هل تشمل الخدمة تركيب اللوحة؟',
          a: 'نعم، يتولى فريقنا الفني المتخصص تصنيع اللوحة وتركيبها في الموقع.',
        },
        {
          q: 'هل تنفذون لوحات بحروف بارزة مضيئة؟',
          a: 'نعم، نصنّع لوحات الحروف البارزة المضيئة للواجهات، إضافة إلى اللوحات المضيئة الداخلية والخارجية.',
        },
        {
          q: 'هل تنفذون اللوحات الإرشادية للمباني والمشاريع؟',
          a: 'نعم، نصنّع اللوحات الإرشادية والتعريفية للمباني والمجمعات والمشاريع، ولوحات الأكريليك للمكاتب الجديدة.',
        },
        {
          q: 'كيف أحصل على عرض سعر للوحة؟',
          a: 'أرسلوا عبر واتساب صورة الواجهة ومقاساتها التقريبية والشعار، ونرد بالخيارات المناسبة وعرض السعر.',
        },
      ],
    },
    en: {
      name: 'Shop Signs & Illuminated Signage',
      short: 'Indoor and outdoor illuminated signs with raised letters, steel structures, and wayfinding signs for buildings and projects.',
      title: 'Shop Signs & Illuminated Signage in Dammam — Made & Installed | Art Zone',
      description: 'Illuminated signage made and installed in Dammam: shop signs with raised illuminated letters, steel structures, wayfinding signs for buildings and projects, and acrylic office signs.',
      h1: 'Illuminated signs and shop signage in Dammam',
      summary: 'The signage division at Art Zone Printing in Dammam makes indoor and outdoor illuminated signs, including shop signs with raised illuminated letters, and an experienced crew installs them. It also builds steel structures, wayfinding signs for projects, buildings and roads, and acrylic wall signs and nameplates for offices.',
      options: [
        'Shop signs with raised illuminated letters',
        'Indoor and outdoor lightbox signs',
        'Steel structures for large signs',
        'Wayfinding signs for buildings, projects and roads',
        'Acrylic wall signs and office nameplates',
      ],
      materials: ['Acrylic and rigid media', 'LED lighting', 'Steel and stainless-steel structures', 'Façade vinyl'],
      audience: [
        'Cafés, restaurants and shops',
        'Companies fitting out new offices',
        'Construction projects and compounds',
        'Exhibitions and events',
      ],
      faq: [
        {
          q: 'Do you install the signs?',
          a: 'Yes. Our specialist crew makes the sign and installs it on site.',
        },
        {
          q: 'Do you make illuminated raised-letter signs?',
          a: 'Yes, for façades, alongside indoor and outdoor lightbox signs.',
        },
        {
          q: 'Do you make wayfinding signs for buildings and projects?',
          a: 'Yes. We make wayfinding and identification signs for buildings, compounds and projects, and acrylic signs for new offices.',
        },
        {
          q: 'How do I get a quote for a sign?',
          a: 'Send a photo of the façade, rough measurements and your logo on WhatsApp, and we will reply with suitable options and a quote.',
        },
      ],
    },
  },

  {
    slug: 'banners',
    capTag: null,
    images: ['large-format-printer-operator', 'wide-format-printer-plant', 'canvas-art-print-heron'],
    related: ['signage', 'stickers-labels', 'corporate-gifts'],
    ar: {
      name: 'طباعة البنرات والطباعة العريضة',
      short: 'طباعة البنرات وتركيبها، أسوار المشاريع، وطباعة الكانفاس والأقمشة على خط الطباعة العريضة.',
      title: 'طباعة بنرات في الدمام — تركيب بنرات وأسوار مشاريع وكانفاس | آرت زون',
      description: 'طباعة البنرات وتركيبها في الدمام على خط الطباعة العريضة: بنرات الواجهات والفعاليات، أسوار المشاريع الإنشائية، لوحات الكانفاس والأقمشة، وملصقات الواجهات الزجاجية.',
      h1: 'طباعة البنرات والطباعة العريضة في الدمام',
      summary: 'يطبع مصنع آرت زون للطباعة في الدمام البنرات على خط الطباعة العريضة ويتولى تركيبها، وينفّذ أسوار المشاريع الإنشائية والخشبية، ولوحات الكانفاس والأقمشة الجدارية، وملصقات الواجهات الزجاجية، إضافة إلى تجهيز مطبوعات المعارض والفعاليات.',
      options: [
        'بنرات للواجهات والمحلات والفعاليات مع التركيب',
        'أسوار المشاريع الإنشائية والخشبية',
        'لوحات كانفاس وأقمشة جدارية',
        'ملصقات الواجهات الزجاجية',
        'مطبوعات المعارض والفعاليات',
      ],
      materials: ['كانفاس وأقمشة', 'فينيل شفاف وأبيض', 'خامات صلبة للتثبيت'],
      audience: [
        'المحلات والمطاعم عند الافتتاح والعروض',
        'شركات المقاولات والمشاريع الإنشائية',
        'منظمو المعارض والفعاليات',
        'المنازل والمكاتب (لوحات الكانفاس)',
      ],
      faq: [
        {
          q: 'هل تشمل الخدمة تركيب البنر؟',
          a: 'نعم، نطبع البنرات ونتولى تركيبها في الموقع.',
        },
        {
          q: 'هل تنفذون أسوار المشاريع؟',
          a: 'نعم، ننفّذ أسوار المشاريع الإنشائية والخشبية مع طباعة التغطيات وتركيبها.',
        },
        {
          q: 'ما المعلومات المطلوبة لعرض سعر البنر؟',
          a: 'المقاس المطلوب، ومكان التركيب (داخلي أو خارجي)، والتصميم أو الشعار، والكمية. أرسلوها عبر واتساب ونرد بعرض السعر.',
        },
      ],
    },
    en: {
      name: 'Banner & Wide-Format Printing',
      short: 'Banner printing and installation, project hoardings, and canvas and fabric printing on the wide-format line.',
      title: 'Banner Printing in Dammam — Installation, Hoardings & Canvas | Art Zone',
      description: 'Banner printing and installation in Dammam on our wide-format line: façade and event banners, construction hoardings, canvas and fabric wall prints, and window graphics.',
      h1: 'Banner and wide-format printing in Dammam',
      summary: 'Art Zone Printing prints banners on its wide-format line in Dammam and installs them, builds construction and timber project hoardings, prints canvas and fabric wall art and window graphics, and produces print for exhibitions and events.',
      options: [
        'Façade, shop and event banners, installed',
        'Construction and timber project hoardings',
        'Canvas and fabric wall prints',
        'Window graphics',
        'Exhibition and event print',
      ],
      materials: ['Canvas and fabric', 'Clear and white vinyl', 'Rigid mounting media'],
      audience: [
        'Shops and restaurants for openings and promotions',
        'Contractors and construction projects',
        'Exhibition and event organisers',
        'Homes and offices (canvas art)',
      ],
      faq: [
        { q: 'Do you install banners?', a: 'Yes. We print the banner and install it on site.' },
        {
          q: 'Do you build project hoardings?',
          a: 'Yes. We build construction and timber hoardings, and print and install their graphics.',
        },
        {
          q: 'What do you need for a banner quote?',
          a: 'The size, where it goes (indoor or outdoor), the design or logo, and the quantity. Send them on WhatsApp and we will reply with a quote.',
        },
      ],
    },
  },

  {
    slug: 'corporate-gifts',
    capTag: '08',
    images: ['corporate-usb-gift-tins', 'usb-keychain-gifts-display', 'usb-gift-tins-display'],
    related: ['boxes', 'business-cards', 'stickers-labels'],
    ar: {
      name: 'الهدايا الدعائية والترويجية للشركات',
      short: 'صناديق إهداء، وحدات USB، أجندات وأقلام وأكواب حرارية، وطباعة وتطريز الملابس الموحدة.',
      title: 'هدايا دعائية للشركات في الدمام — USB وأجندات وتطريز | آرت زون',
      description: 'هدايا دعائية وترويجية للشركات في الدمام مطبوعة بالشعار: صناديق إهداء فاخرة، وحدات تخزين USB، أجندات، أقلام، أكواب حرارية، وطباعة وتطريز الملابس الموحدة.',
      h1: 'الهدايا الدعائية والترويجية للشركات في الدمام',
      summary: 'يوفر قسم الهدايا في مصنع آرت زون للطباعة بالدمام حلولاً متكاملة للهدايا المؤسسية المطبوعة بشعار الشركة: صناديق الإهداء الفاخرة، ووحدات التخزين (USB)، والأجندات، والأقلام، والأكواب الحرارية، إضافة إلى الطباعة والتطريز المباشر على الملابس الموحدة والحقائب القماشية.',
      options: [
        'صناديق إهداء فاخرة بهوية الشركة',
        'وحدات تخزين USB في علب معدنية',
        'أجندات وأقلام مطبوعة بالشعار',
        'أكواب حرارية وأكواب مطبوعة',
        'طباعة وتطريز الملابس الموحدة والتيشيرتات',
        'حقائب قماشية مطبوعة',
      ],
      materials: ['قطن وأنسجة منسوجة', 'طباعة وتطريز مباشر على الملابس', 'علب معدنية وصناديق إهداء'],
      audience: [
        'الشركات والمؤسسات',
        'المؤتمرات والمعارض',
        'فرق العمل والموظفون',
        'الفعاليات والمناسبات',
      ],
      faq: [
        {
          q: 'هل يمكن تجهيز طقم هدايا متكامل في صندوق واحد؟',
          a: 'نعم، نجهّز صناديق إهداء فاخرة تضم عدة منتجات مطبوعة بهوية الشركة، مثل الأجندة والقلم ووحدة USB.',
        },
        {
          q: 'هل تطرزون الشعار على الملابس؟',
          a: 'نعم، نوفر الطباعة والتطريز المباشر على الملابس الموحدة والتيشيرتات.',
        },
        {
          q: 'كيف أحصل على عرض سعر للهدايا؟',
          a: 'أرسلوا عبر واتساب المنتجات المطلوبة والكمية والمناسبة وموعد التسليم، ونرد بالخيارات وعرض السعر.',
        },
      ],
    },
    en: {
      name: 'Corporate & Promotional Gifts',
      short: 'Gift boxes, USB drives, planners, pens and thermal mugs, plus uniform printing and embroidery.',
      title: 'Corporate Gifts in Dammam — Branded USBs, Planners & Embroidery | Art Zone',
      description: 'Branded corporate and promotional gifts in Dammam: premium gift boxes, USB drives, planners, pens, thermal mugs, and printing and embroidery on uniforms.',
      h1: 'Corporate and promotional gifts in Dammam',
      summary: 'The gifts division at Art Zone Printing in Dammam supplies corporate gifts branded with your logo: premium gift boxes, USB drives, planners, pens and thermal mugs, plus direct printing and embroidery on uniforms and tote bags.',
      options: [
        'Premium branded gift boxes',
        'USB drives in metal tins',
        'Branded planners and pens',
        'Thermal and printed mugs',
        'Uniform and t-shirt printing and embroidery',
        'Printed tote bags',
      ],
      materials: ['Cotton and woven fabrics', 'Direct print and embroidery on clothing', 'Metal tins and gift boxes'],
      audience: [
        'Companies and institutions',
        'Conferences and exhibitions',
        'Teams and staff',
        'Events and occasions',
      ],
      faq: [
        {
          q: 'Can you put together a complete gift set in one box?',
          a: 'Yes. We assemble premium gift boxes with several branded items, such as a planner, pen and USB drive.',
        },
        { q: 'Do you embroider logos on clothing?', a: 'Yes, we print and embroider directly on uniforms and t-shirts.' },
        {
          q: 'How do I get a quote for gifts?',
          a: 'Send the items, quantity, occasion and delivery date on WhatsApp and we will reply with options and a quote.',
        },
      ],
    },
  },
]

export const SERVICE_SLUGS = SERVICES.map((s) => s.slug)

export function getService(slug) {
  return SERVICES.find((s) => s.slug === slug) || null
}

/* home capabilities card tag -> service slug */
export const SLUG_BY_CAP = Object.fromEntries(
  SERVICES.filter((s) => s.capTag).map((s) => [s.capTag, s.slug]),
)
