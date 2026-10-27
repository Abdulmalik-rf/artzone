/* ===================================================================
   Guides (/guides/<slug>/) — evergreen buyer guides.
   Plain data (no React) so the router and prerender script can use it.

   Content rules:
   - General print-industry knowledge, stated as typical / common
     practice. Never present a number as Art Zone's own spec, MOQ or
     price; route those questions to WhatsApp.
   - Arabic in the formal register; colloquial search term once in
     brackets where it helps.
   - Body is a list of blocks: { h } heading, { p } paragraph,
     { ul } bullet list, { table: { head, rows } }.
   - `cover` is an illustrative (AI-generated) photo in /img/guides/<file>.webp
     plus a -768 variant; it is captioned as illustrative on the page, never
     presented as the Art Zone plant or a client job.
   =================================================================== */

export const GUIDES = [
  {
    slug: 'paper-cup-sizes',
    published: '2026-10-25',
    updated: '2026-10-25',
    services: ['paper-cups'],
    cover: {
      file: 'paper-cup-sizes',
      alt: { ar: 'أربعة أكواب ورقية بمقاسات متدرجة من الإسبريسو حتى 16 أونز على طاولة مقهى', en: 'Four paper cups in ascending sizes, from espresso to 16 oz, on a café counter' },
    },
    ar: {
      title: 'دليل مقاسات الأكواب الورقية: أي مقاس يناسب مقهاك؟ | آرت زون',
      description: 'دليل مقاسات الأكواب الورقية بالأونصة والمليلتر: 4 و8 و12 و16 أونز، الفرق بين الكوب السنقل والدبل، وكيف تختار المقاسات وتجهّز تصميم الكوب للطباعة.',
      h1: 'دليل مقاسات الأكواب الورقية: أي مقاس يناسب مقهاك؟',
      summary: 'تُقاس الأكواب الورقية عادةً بالأونصة (oz)، والأونصة تعادل نحو 30 مل. الأكثر شيوعاً في المقاهي أربعة مقاسات: 4 أونز للإسبريسو، و8 أونز للكابتشينو والفلات وايت، و12 أونز للاتيه والمشروبات المعتادة، و16 أونز للأحجام الكبيرة. ويكفي معظم المقاهي مقاسان أو ثلاثة فقط.',
      blocks: [
        { h: 'المقاسات الشائعة وما يُقدَّم فيها' },
        {
          p: 'يشير مقاس الكوب إلى سعته حتى الحافة تقريباً، لذلك تكون كمية المشروب المقدَّم أقل قليلاً من السعة المكتوبة. وتختلف السعة الفعلية بفارق بسيط بين مصنّع وآخر، فالأرقام التالية تقريبية.',
        },
        {
          table: {
            head: ['المقاس', 'السعة التقريبية', 'الاستخدام الشائع'],
            rows: [
              ['4 أونز', 'نحو 120 مل', 'الإسبريسو، القهوة السعودية، عينات التذوق'],
              ['8 أونز', 'نحو 240 مل', 'الكابتشينو، الفلات وايت، الشاي'],
              ['12 أونز', 'نحو 355 مل', 'اللاتيه، الأمريكانو، المشروب الساخن المعتاد'],
              ['16 أونز', 'نحو 475 مل', 'الأحجام الكبيرة من اللاتيه والموكا'],
            ],
          },
        },
        {
          p: 'أما المشروبات الباردة فتُقدَّم غالباً في أكواب بلاستيكية شفافة بمقاسات أكبر مع غطاء مسطح أو مقبب، لأن الثلج يشغل جزءاً من السعة.',
        },
        { h: 'الكوب السنقل أم الدبل؟' },
        {
          ul: [
            'الكوب السنقل (جدار مفرد): ورقة واحدة، أقل تكلفة، ويحتاج غالباً إلى كمّ عازل عند تقديم المشروبات الساخنة.',
            'الكوب الدبل (جدار مزدوج): طبقتان بينهما فراغ يعزل الحرارة، فيُمسك مباشرة دون كمّ، ويعطي ملمساً أمتن ومظهراً أفخم.',
            'الكوب البلاستيكي الشفاف: للمشروبات الباردة، ويُظهر ألوان المشروب، ويُطبع عليه الشعار عادةً بلون واحد أو لونين.',
          ],
        },
        { h: 'كيف تختار المقاسات لقائمتك؟' },
        {
          ul: [
            'ابدأ من قائمة المشروبات: حدّد المشروب الأكثر مبيعاً واختر مقاسه أولاً.',
            'قلّل عدد المقاسات: مقاسان أو ثلاثة تكفي غالباً، وتقلّل تكلفة الطباعة والتخزين.',
            'وحّد الأغطية قدر الإمكان: بعض المقاسات المتقاربة تشترك في قطر الحافة نفسه، فاسأل عن ذلك قبل الطلب.',
            'فكّر في الطلبات الخارجية: الكوب الدبل يحافظ على حرارة المشروب ويحمي يد العميل أثناء التوصيل.',
          ],
        },
        { h: 'تجهيز تصميم الكوب للطباعة' },
        {
          p: 'لا يُطبع الكوب وهو مجسم، بل تُطبع ورقته وهي مسطحة على شكل مروحة منحنية ثم تُشكَّل. لذلك يحتاج التصميم إلى قالب (ديلاين) خاص بكل مقاس، مع مراعاة خط اللحام حيث يلتقي طرفا الورقة، وتجنّب وضع الشعار أو النصوص المهمة عليه.',
        },
        {
          ul: [
            'اطلبوا قالب المقاس من المطبعة قبل بدء التصميم.',
            'أبقوا الشعار والنصوص بعيداً عن خط اللحام وعن الحافة العلوية والسفلية.',
            'أرسلوا الشعار بصيغة متجهة (PDF أو AI أو EPS) مع أكواد ألوان الهوية.',
            'اعتمدوا البروفة الرقمية قبل بدء الإنتاج.',
          ],
        },
      ],
      faq: [
        {
          q: 'كم مليلتر في الكوب 8 أونز؟',
          a: 'الأونصة السائلة تعادل نحو 29.6 مل، فيتسع الكوب 8 أونز لنحو 240 مل حتى الحافة، ويُقدَّم فيه عادةً أقل من ذلك قليلاً.',
        },
        {
          q: 'ما المقاس المناسب للقهوة السعودية؟',
          a: 'تُقدَّم القهوة السعودية بكميات صغيرة، لذلك تُستخدم لها عادةً الأكواب الصغيرة بمقاس 4 أونز أو أقل.',
        },
        {
          q: 'ما أقل كمية لطباعة الأكواب في آرت زون؟',
          a: 'تختلف حسب نوع الكوب ومقاسه وطريقة الطباعة. أرسلوا المقاس والكمية التقريبية عبر واتساب ونرد بالحد الأدنى وعرض السعر خلال ساعات العمل.',
        },
      ],
    },
    en: {
      title: 'Paper Cup Sizes Guide: Which Size Suits Your Café? | Art Zone',
      description: 'A guide to paper cup sizes in ounces and millilitres (4, 8, 12 and 16 oz), single vs double wall, how to choose sizes for your menu and how to prepare cup artwork for print.',
      h1: 'Paper cup sizes: which size suits your café?',
      summary: 'Paper cups are usually sized in fluid ounces (oz); one ounce is about 30 ml. Four sizes cover most cafés: 4 oz for espresso, 8 oz for cappuccino and flat white, 12 oz for lattes and regular drinks, and 16 oz for large drinks. Most cafés need only two or three of them.',
      blocks: [
        { h: 'Common sizes and what goes in them' },
        {
          p: 'A cup size refers to its capacity filled roughly to the brim, so the drink you serve is a little less than the stated size. Actual capacity also varies slightly between manufacturers, so treat these figures as approximate.',
        },
        {
          table: {
            head: ['Size', 'Approx. capacity', 'Typical use'],
            rows: [
              ['4 oz', 'about 120 ml', 'Espresso, Saudi coffee, tasting samples'],
              ['8 oz', 'about 240 ml', 'Cappuccino, flat white, tea'],
              ['12 oz', 'about 355 ml', 'Latte, americano, the regular hot drink'],
              ['16 oz', 'about 475 ml', 'Large lattes and mochas'],
            ],
          },
        },
        {
          p: 'Cold drinks usually go into larger clear plastic cups with a flat or dome lid, because ice takes up part of the volume.',
        },
        { h: 'Single wall or double wall?' },
        {
          ul: [
            'Single wall: one layer of paper, lower cost, usually needs a sleeve for hot drinks.',
            'Double wall: two layers with an insulating gap, held without a sleeve, sturdier and more premium in the hand.',
            'Clear plastic: for cold drinks; shows off the drink and usually carries a one- or two-colour logo.',
          ],
        },
        { h: 'How to choose sizes for your menu' },
        {
          ul: [
            'Start from the menu: pick the size of your best-selling drink first.',
            'Keep the range small: two or three sizes are usually enough and lower printing and storage costs.',
            'Share lids where you can: some neighbouring sizes use the same rim diameter, so ask before you order.',
            'Think about delivery: double-wall cups keep drinks hot and protect the customer’s hand in transit.',
          ],
        },
        { h: 'Preparing cup artwork for print' },
        {
          p: 'A cup is not printed in 3D: its paper is printed flat as a curved fan shape and then formed. Each size needs its own template (die-line), and the artwork must allow for the seam where the two ends of the paper overlap — keep logos and key text away from it.',
        },
        {
          ul: [
            'Ask the printer for the template of your size before you start designing.',
            'Keep the logo and text away from the seam and the top and bottom edges.',
            'Send the logo as a vector file (PDF, AI or EPS) with your brand colour codes.',
            'Approve the digital proof before production starts.',
          ],
        },
      ],
      faq: [
        {
          q: 'How many ml is an 8 oz cup?',
          a: 'One fluid ounce is about 29.6 ml, so an 8 oz cup holds about 240 ml to the brim and is usually served a little below that.',
        },
        {
          q: 'Which size is used for Saudi coffee?',
          a: 'Saudi coffee is served in small amounts, so small cups of 4 oz or less are typically used.',
        },
        {
          q: 'What is the minimum cup order at Art Zone?',
          a: 'It depends on the cup type, size and print method. Send the size and rough quantity on WhatsApp and we will reply with the minimum and a quote during working hours.',
        },
      ],
    },
  },

  {
    slug: 'offset-vs-digital-printing',
    published: '2026-10-25',
    updated: '2026-10-25',
    services: ['business-cards', 'boxes', 'stickers-labels'],
    cover: {
      file: 'offset-vs-digital',
      alt: { ar: 'ماكينة طباعة أوفست إلى جانب ماكينة طباعة رقمية في مطبعة حديثة', en: 'An offset press beside a digital production printer in a modern print shop' },
    },
    ar: {
      title: 'الطباعة الأوفست أم الرقمية (الديجيتال)؟ الفرق ومتى تختار كلاً منهما | آرت زون',
      description: 'ما الفرق بين الطباعة الأوفست والطباعة الرقمية (الديجيتال)؟ مقارنة في التكلفة والسرعة والجودة ومطابقة الألوان، ومتى تختار كلاً منهما للكروت والبروشورات والعلب.',
      h1: 'الطباعة الأوفست أم الرقمية (الديجيتال)؟ الفرق ومتى تختار كلاً منهما',
      summary: 'الطباعة الرقمية (الديجيتال) تطبع مباشرة من الملف دون ألواح، فهي الأنسب للكميات الصغيرة والطلبات العاجلة والطباعة المخصصة لكل نسخة. أما الأوفست فتحتاج إلى تجهيز ألواح، لكن تكلفة القطعة تنخفض كلما زادت الكمية، مع ثبات أعلى في الألوان، فهي الأنسب للكميات الكبيرة.',
      blocks: [
        { h: 'كيف تعمل كل طريقة؟' },
        {
          p: 'في الطباعة الرقمية تنتقل الصورة من الملف إلى الورق مباشرة بالحبر أو الحبر الجاف (التونر)، دون ألواح أو تجهيز مسبق للماكينة. أما في الأوفست فيُنقل التصميم أولاً إلى ألواح معدنية، لوح لكل لون، ثم ينتقل الحبر من اللوح إلى أسطوانة مطاطية ومنها إلى الورق.',
        },
        { h: 'مقارنة سريعة' },
        {
          table: {
            head: ['المعيار', 'الطباعة الرقمية (الديجيتال)', 'الأوفست'],
            rows: [
              ['التجهيز قبل الطباعة', 'لا يحتاج إلى ألواح', 'ألواح وضبط للماكينة'],
              ['تكلفة القطعة', 'ثابتة تقريباً مهما زادت الكمية', 'تنخفض كلما زادت الكمية'],
              ['الكميات المناسبة', 'صغيرة ومتوسطة', 'متوسطة وكبيرة'],
              ['السرعة للطلبات الصغيرة', 'أسرع', 'أبطأ بسبب التجهيز'],
              ['تخصيص كل نسخة (أسماء، أرقام)', 'ممكن بسهولة', 'غير عملي'],
              ['مطابقة ألوان الهوية (بانتون)', 'تقريبية', 'دقيقة بألوان خاصة'],
              ['تنوع الورق والمقاسات', 'محدود نسبياً', 'أوسع'],
            ],
          },
        },
        { h: 'متى تختار الطباعة الرقمية؟' },
        {
          ul: [
            'كمية صغيرة من بطاقات الأعمال (الكروت الشخصية) أو طلب عاجل.',
            'دعوات أو بطاقات تحمل اسماً أو رقماً مختلفاً في كل نسخة.',
            'نموذج أولي أو عينة قبل الطباعة بكمية كبيرة.',
          ],
        },
        { h: 'متى تختار الأوفست؟' },
        {
          ul: [
            'كميات كبيرة من البروشورات والكتالوجات والأوراق الرسمية.',
            'هوية تعتمد على لون محدد يجب أن يتطابق في كل الطلبات.',
            'العلب والمطبوعات التي تحتاج إلى ورق خاص أو مقاسات كبيرة.',
          ],
        },
        { h: 'وماذا عن الطباعة العريضة؟' },
        {
          p: 'للبنرات واللوحات والملصقات الكبيرة تُستخدم ماكينات الطباعة العريضة التي تطبع على الفينيل والأقمشة والكانفاس بعروض كبيرة. وفي مصنع آرت زون بالدمام تُوزَّع الطلبات حسب طبيعتها: الأوفست للكميات الكبيرة، والرقمية للسرعة، والطباعة العريضة للمساحات الكبيرة.',
        },
        { h: 'نقطة التعادل بين الطريقتين' },
        {
          p: 'لا توجد كمية واحدة تفصل بين الطريقتين، فنقطة التعادل تختلف حسب نوع المنتج والمقاس وعدد الألوان والتشطيبات. لذلك أرسلوا المنتج والكمية والموعد، ونقترح الطريقة الأوفر لطلبكم.',
        },
      ],
      faq: [
        {
          q: 'هل جودة الطباعة الرقمية أقل من الأوفست؟',
          a: 'جودة الطباعة الرقمية الحديثة عالية جداً وتناسب معظم المطبوعات التجارية، ويبقى للأوفست تفوّق في مطابقة ألوان الهوية الخاصة (بانتون) وثباتها في الكميات الكبيرة.',
        },
        {
          q: 'أيهما أرخص لطباعة 500 بطاقة أعمال؟',
          a: 'يعتمد ذلك على الورق والتشطيب، لكن الكميات الصغيرة تكون غالباً أوفر بالطباعة الرقمية لأنها لا تحتاج إلى تجهيز ألواح. أرسلوا التفاصيل عبر واتساب لنقارن لكم.',
        },
      ],
    },
    en: {
      title: 'Offset vs Digital Printing: Differences and When to Use Each | Art Zone',
      description: 'Offset vs digital printing compared on cost, speed, quality and colour matching, with when to choose each for business cards, brochures and boxes.',
      h1: 'Offset vs digital printing: the difference and when to use each',
      summary: 'Digital printing prints straight from the file with no plates, so it suits short runs, urgent jobs and personalised copies. Offset needs plates and press setup, but the cost per piece falls as quantity rises and colour stays more consistent, so it suits large runs.',
      blocks: [
        { h: 'How each method works' },
        {
          p: 'Digital printing puts the image from the file directly onto paper with ink or toner, with no plates or press setup. Offset first transfers the design onto metal plates, one per colour; ink then moves from the plate to a rubber blanket and from the blanket to the paper.',
        },
        { h: 'Quick comparison' },
        {
          table: {
            head: ['Factor', 'Digital', 'Offset'],
            rows: [
              ['Setup before printing', 'No plates', 'Plates and press makeready'],
              ['Cost per piece', 'Roughly flat at any quantity', 'Falls as quantity rises'],
              ['Best run length', 'Short to medium', 'Medium to long'],
              ['Speed on small jobs', 'Faster', 'Slower, due to setup'],
              ['Per-copy personalisation', 'Easy', 'Impractical'],
              ['Brand colour (Pantone) match', 'Approximate', 'Precise, with spot colours'],
              ['Paper and size range', 'More limited', 'Wider'],
            ],
          },
        },
        { h: 'When to choose digital' },
        {
          ul: [
            'A small batch of business cards, or an urgent order.',
            'Invitations or cards with a different name or number on each copy.',
            'A prototype or sample before a large run.',
          ],
        },
        { h: 'When to choose offset' },
        {
          ul: [
            'Large runs of brochures, catalogues and stationery.',
            'A brand colour that must match exactly across every order.',
            'Boxes and print that need special stock or large sheet sizes.',
          ],
        },
        { h: 'And wide-format?' },
        {
          p: 'Banners, signs and large graphics are printed on wide-format machines that handle vinyl, fabric and canvas at large widths. At the Art Zone plant in Dammam, jobs are routed by their nature: offset for volume, digital for speed, and wide-format for scale.',
        },
        { h: 'The break-even point' },
        {
          p: 'There is no single quantity that separates the two; the break-even point depends on the product, size, number of colours and finishes. Send the product, quantity and deadline and we will recommend the more economical method for your job.',
        },
      ],
      faq: [
        {
          q: 'Is digital print quality lower than offset?',
          a: 'Modern digital print quality is very high and suits most commercial print. Offset still leads on matching special brand colours (Pantone) and keeping them consistent over long runs.',
        },
        {
          q: 'Which is cheaper for 500 business cards?',
          a: 'It depends on stock and finish, but small quantities are usually cheaper digitally because there are no plates to set up. Send the details on WhatsApp and we will compare for you.',
        },
      ],
    },
  },

  {
    slug: 'print-ready-files',
    published: '2026-10-25',
    updated: '2026-10-25',
    services: ['business-cards', 'banners', 'boxes'],
    cover: {
      file: 'print-ready-files',
      alt: { ar: 'مكتب مصمم عليه شاشة تعرض تصميماً بخطوط القص ومروحة ألوان CMYK وبروفة مطبوعة', en: 'A designer’s desk with a print layout showing crop marks, a CMYK swatch fan and a printed proof' },
    },
    ar: {
      title: 'كيف تجهّز ملف التصميم للطباعة؟ قائمة تدقيق قبل الإرسال | آرت زون',
      description: 'قائمة تدقيق لتجهيز ملف التصميم للطباعة: نظام الألوان CMYK، الدقة 300 نقطة لكل إنش، هوامش القص (النزف) 3 مم، تحويل الخطوط، وتجهيز طبقات البصمة واليوﭬي وخط القص.',
      h1: 'كيف تجهّز ملف التصميم للطباعة؟ قائمة تدقيق قبل الإرسال',
      summary: 'الملف الجاهز للطباعة يكون غالباً بنظام ألوان CMYK، وبدقة 300 نقطة لكل إنش بالمقاس الفعلي، مع هامش قص (نزف) بنحو 3 مم من كل جانب، وخطوط محوّلة أو مضمّنة، ويُصدَّر بصيغة PDF. وتحتاج التشطيبات الخاصة كالبصمة واليوﭬي وخط القص إلى طبقات منفصلة.',
      blocks: [
        { h: '1. نظام الألوان: CMYK وليس RGB' },
        {
          p: 'تعرض الشاشات الألوان بنظام RGB، بينما تطبع الماكينات بأربعة أحبار CMYK. لذلك صمّموا الملف بنظام CMYK أو حوّلوه قبل الإرسال، وتوقعوا اختلافاً بسيطاً في الألوان الزاهية جداً. وإذا كانت للهوية ألوان محددة فأرسلوا أكواد البانتون الخاصة بها.',
        },
        { h: '2. الدقة: 300 نقطة لكل إنش بالمقاس الفعلي' },
        {
          p: 'تحتاج الصور في المطبوعات القريبة من العين، كالكروت والبروشورات والعلب، إلى دقة 300 نقطة لكل إنش (dpi) بمقاسها الفعلي في التصميم. أما البنرات واللوحات الكبيرة التي تُشاهد من مسافة فتكفيها دقة أقل عادةً. وتكبير صورة صغيرة لا يرفع جودتها.',
        },
        { h: '3. هامش القص (النزف) والمنطقة الآمنة' },
        {
          ul: [
            'مدّوا الخلفيات والصور خارج حدود التصميم بنحو 3 مم من كل جانب، حتى لا تظهر حواف بيضاء بعد القص.',
            'أبقوا النصوص والشعار داخل المنطقة الآمنة، على بعد 3 إلى 5 مم على الأقل من خط القص.',
            'لا تضعوا إطاراً رفيعاً ملاصقاً لحافة التصميم، فأي انحراف بسيط في القص يُظهره غير متساوٍ.',
          ],
        },
        { h: '4. الخطوط والشعار' },
        {
          ul: [
            'حوّلوا الخطوط إلى منحنيات (Outlines) أو ضمّنوها في ملف PDF، خاصة الخطوط العربية.',
            'أرسلوا الشعار بصيغة متجهة (AI أو EPS أو PDF) لا كصورة.',
            'استخدموا الأسود الصافي (100% K) للنصوص الصغيرة حتى تُطبع حادة وواضحة.',
          ],
        },
        { h: '5. التشطيبات الخاصة وخط القص' },
        {
          p: 'تحتاج البصمة الحرارية واليوﭬي الموضعي إلى طبقة منفصلة تحتوي فقط على العناصر المطلوب تشطيبها، بلون واحد متجه. وبالمثل يوضع خط القص (الدايكت) للعلب والملصقات المشكّلة في طبقة مستقلة بلون خاص، دون أن يُطبع.',
        },
        { h: '6. صيغة الملف' },
        {
          table: {
            head: ['الصيغة', 'متى تستخدم'],
            rows: [
              ['PDF', 'الصيغة المفضلة للملف النهائي، مع تضمين الخطوط والصور'],
              ['AI / EPS', 'الشعارات والتصاميم المتجهة'],
              ['PSD', 'التصاميم المعتمدة على الصور، بدقة عالية وبالمقاس الفعلي'],
            ],
          },
        },
        {
          p: 'يقبل مصنع آرت زون ملفات PDF وAI وPSD وEPS عالية الدقة، ويراجع فريق التدقيق الفني كل ملف ويرسل بروفة رقمية لاعتمادها قبل الطباعة. وإن لم يكن لديكم ملف جاهز، فيكفي إرسال الشعار والفكرة ليجهّز الفريق الملف.',
        },
      ],
      faq: [
        {
          q: 'ماذا يحدث إذا أرسلت الملف بنظام RGB؟',
          a: 'يُحوَّل الملف إلى CMYK قبل الطباعة، وقد تبدو بعض الألوان الزاهية أهدأ قليلاً. لذلك نرسل بروفة رقمية لتعتمدوا الألوان قبل الإنتاج.',
        },
        {
          q: 'كم يكون هامش النزف؟',
          a: 'المتعارف عليه نحو 3 مم من كل جانب، وقد يختلف لبعض المنتجات كالعلب والأكواب التي لها قوالب خاصة.',
        },
        {
          q: 'هل يمكن الطباعة من ملف Word أو صورة من الجوال؟',
          a: 'يمكن الاستفادة منهما كمرجع للفكرة، لكن فريق التدقيق الفني سيعيد تجهيز التصميم بالمقاس والدقة المناسبين قبل الطباعة.',
        },
      ],
    },
    en: {
      title: 'How to Prepare Print-Ready Files: Checklist Before You Send | Art Zone',
      description: 'A checklist for print-ready artwork: CMYK colour, 300 dpi at final size, 3 mm bleed, outlined fonts, and separate layers for foil, spot UV and die-lines.',
      h1: 'How to prepare a print-ready file: a checklist before you send',
      summary: 'A print-ready file is usually in CMYK, at 300 dpi at final size, with about 3 mm of bleed on every side and fonts outlined or embedded, exported as a PDF. Special finishes such as foil, spot UV and die-cut lines need their own separate layers.',
      blocks: [
        { h: '1. Colour: CMYK, not RGB' },
        {
          p: 'Screens display colour in RGB, while presses print with four CMYK inks. Design in CMYK or convert before sending, and expect very bright colours to shift slightly. If your brand uses specific colours, send their Pantone codes.',
        },
        { h: '2. Resolution: 300 dpi at final size' },
        {
          p: 'Images in print seen up close — cards, brochures, boxes — need 300 dots per inch at their actual size in the layout. Banners and large signs viewed from a distance usually need less. Enlarging a small image does not add detail.',
        },
        { h: '3. Bleed and safe zone' },
        {
          ul: [
            'Extend backgrounds and images about 3 mm past the trim on every side, so no white edges show after cutting.',
            'Keep text and logos inside the safe zone, at least 3–5 mm in from the trim line.',
            'Avoid thin borders hugging the edge; any small cutting tolerance makes them look uneven.',
          ],
        },
        { h: '4. Fonts and logos' },
        {
          ul: [
            'Convert fonts to outlines or embed them in the PDF — especially Arabic fonts.',
            'Send logos as vector files (AI, EPS or PDF), not images.',
            'Use pure black (100% K) for small text so it prints sharp.',
          ],
        },
        { h: '5. Special finishes and die-lines' },
        {
          p: 'Hot foil and spot UV need a separate layer containing only the elements to be finished, in a single vector colour. Likewise, the die-cut line for boxes and shaped stickers goes on its own layer in a spot colour and is not printed.',
        },
        { h: '6. File format' },
        {
          table: {
            head: ['Format', 'Use it for'],
            rows: [
              ['PDF', 'The preferred final file, with fonts and images embedded'],
              ['AI / EPS', 'Logos and vector artwork'],
              ['PSD', 'Image-based designs, high resolution at final size'],
            ],
          },
        },
        {
          p: 'Art Zone accepts high-resolution PDF, AI, PSD and EPS files. Our prepress team checks every file and sends a digital proof for approval before printing. If you have no print-ready file, send the logo and the idea and the team will prepare it.',
        },
      ],
      faq: [
        {
          q: 'What happens if I send an RGB file?',
          a: 'It is converted to CMYK before printing and some bright colours may look a little calmer, which is why we send a digital proof for you to approve the colours first.',
        },
        {
          q: 'How much bleed should I add?',
          a: 'About 3 mm on each side is standard; boxes and cups have their own templates and can differ.',
        },
        {
          q: 'Can you print from a Word file or a phone photo?',
          a: 'They are useful as a reference for the idea, but our prepress team will rebuild the design at the right size and resolution before printing.',
        },
      ],
    },
  },

  {
    slug: 'print-finishes',
    published: '2026-10-25',
    updated: '2026-10-25',
    services: ['business-cards', 'boxes', 'stickers-labels'],
    cover: {
      file: 'print-finishes',
      alt: { ar: 'بطاقات أعمال سوداء ببصمة ذهبية ويوﭬي موضعي لامع وعلبة هدايا فاخرة', en: 'Black business cards with gold foil and glossy spot UV, beside a premium gift box' },
    },
    ar: {
      title: 'دليل تشطيبات الطباعة: البصمة واليوﭬي الموضعي والسلوفان المخملي والقص | آرت زون',
      description: 'ما الفرق بين البصمة الحرارية (الفويل) واليوﭬي الموضعي والسلوفان اللامع والمطفي والمخملي والقص بالقالب (الدايكت)؟ متى تستخدم كل تشطيب وكيف تجهّز الملف له.',
      h1: 'دليل تشطيبات الطباعة: البصمة واليوﭬي الموضعي والسلوفان والقص',
      summary: 'التشطيبات خطوات تُنفَّذ بعد الطباعة لحماية المطبوع وإبراز الهوية. السلوفان يغلّف السطح كاملاً بلمسة لامعة أو مطفية أو مخملية، والبصمة الحرارية تضيف لمعة معدنية ذهبية أو فضية أو هولوغرافية، واليوﭬي الموضعي يضيف لمعة شفافة بارزة على عناصر محددة، والقص بالقالب (الدايكت) يمنح المطبوع شكلاً خاصاً.',
      blocks: [
        { h: 'التشطيبات بنظرة سريعة' },
        {
          table: {
            head: ['التشطيب', 'ماذا يفعل', 'الأنسب له'],
            rows: [
              ['السلوفان اللامع', 'طبقة شفافة لامعة تحمي السطح وتُبرز الألوان', 'المنيوهات، الأغلفة، المطبوعات كثيرة الاستخدام'],
              ['السلوفان المطفي', 'طبقة غير عاكسة بمظهر هادئ وأنيق', 'البروشورات وبطاقات الأعمال والأغلفة'],
              ['السلوفان المخملي (سوفت تاتش)', 'ملمس ناعم يشبه المخمل', 'بطاقات الأعمال الفاخرة وعلب الهدايا'],
              ['البصمة الحرارية (فويل)', 'رقاقة معدنية تُثبَّت بالحرارة والضغط بقالب', 'الشعارات والعناوين على الكروت والعلب'],
              ['اليوﭬي الموضعي (Spot UV)', 'طلاء شفاف لامع وبارز على عناصر محددة', 'إبراز الشعار فوق سطح مطفي أو مخملي'],
              ['القص بالقالب (دايكت)', 'قص المطبوع بشكل خاص بقالب', 'العلب، الملصقات المشكّلة، البطاقات ذات الحواف الخاصة'],
            ],
          },
        },
        { h: 'السلوفان: لامع أم مطفي أم مخملي؟' },
        {
          p: 'السلوفان طبقة رقيقة تُلصق على سطح المطبوع كاملاً، فتحميه من الرطوبة والخدوش وتطيل عمره. اللامع يُبرز الألوان ويعكس الضوء، والمطفي أهدأ وأسهل في القراءة تحت الإضاءة القوية، أما المخملي فيمنح ملمساً ناعماً فاخراً يلاحظه العميل بمجرد لمس البطاقة أو العلبة.',
        },
        {
          p: 'يُستحسن الانتباه إلى أن الأسطح المخملية الداكنة قد تُظهر آثار الأصابع والخدوش مع الاستخدام الكثيف، لذلك تناسب المطبوعات الفاخرة أكثر من المطبوعات كثيرة التداول.',
        },
        { h: 'البصمة الحرارية (الفويل)' },
        {
          p: 'تُنقل رقاقة معدنية رقيقة إلى الورق بقالب ساخن، فتظهر العناصر بلمعة ذهبية أو فضية أو هولوغرافية لا تحققها أحبار الطباعة العادية. تُستخدم عادةً للشعار والعناوين وأختام الضمان.',
        },
        {
          ul: [
            'جهّزوا عناصر البصمة كرسوم متجهة (Vector)، لا كصور.',
            'تجنّبوا الخطوط والنصوص الدقيقة جداً، فقد لا تُطبع البصمة فيها بوضوح.',
            'ضعوا عناصر البصمة في طبقة مستقلة بلون واحد.',
          ],
        },
        { h: 'اليوﭬي الموضعي (Spot UV)' },
        {
          p: 'طلاء شفاف لامع يُطبَّق على أجزاء محددة فقط من التصميم، ويجف بالأشعة فوق البنفسجية فيبدو بارزاً قليلاً عند اللمس. يظهر أجمل ما يكون فوق السلوفان المطفي أو المخملي، لأن التباين بين اللمعة والسطح الهادئ هو ما يلفت الانتباه.',
        },
        { h: 'القص بالقالب (الدايكت)' },
        {
          p: 'يُصنع قالب بحدود الشكل المطلوب ليقص المطبوع ويثنيه بدقة، وهو أساس تصنيع العلب والملصقات المشكّلة والبطاقات ذات الأشكال الخاصة. في الملصقات يمكن قص الملصق دون قص ورقة الظهر (القص النصفي) ليسهل نزعه.',
        },
        {
          ul: [
            'ارسموا خط القص في طبقة مستقلة بلون خاص، ولا يُطبع.',
            'اتركوا هامش نزف حول خط القص، وأبقوا النصوص بعيدة عنه.',
            'في العلب، اطلبوا القالب (الديلاين) الخاص بالمقاس قبل التصميم.',
          ],
        },
        { h: 'تشكيلات شائعة' },
        {
          ul: [
            'بطاقة أعمال فاخرة: سلوفان مخملي + يوﭬي موضعي على الشعار + بصمة ذهبية على الاسم.',
            'علبة هدايا: سلوفان مطفي + بصمة ذهبية للشعار + قص بالقالب.',
            'منيو مطعم: سلوفان لامع لحمايته من الاستخدام اليومي.',
          ],
        },
        {
          p: 'يضيف كل تشطيب مرحلة إنتاج إضافية، فيؤثر في التكلفة ومدة التنفيذ حسب الكمية. ولمعرفة تجهيز الملفات بالتفصيل راجعوا دليل تجهيز ملفات التصميم للطباعة.',
        },
      ],
      faq: [
        {
          q: 'هل يمكن الجمع بين البصمة واليوﭬي الموضعي على البطاقة نفسها؟',
          a: 'نعم، وهو من أكثر التشكيلات استخداماً للبطاقات الفاخرة، بشرط أن يكون لكل تشطيب طبقته المستقلة في الملف.',
        },
        {
          q: 'ما الفرق بين اليوﭬي الموضعي والسلوفان اللامع؟',
          a: 'السلوفان اللامع يغطي سطح المطبوع كاملاً، أما اليوﭬي الموضعي فيُطبَّق على عناصر مختارة فقط ويكون بارزاً قليلاً.',
        },
        {
          q: 'هل تزيد التشطيبات مدة التنفيذ؟',
          a: 'نعم، فكل تشطيب مرحلة إنتاج إضافية. نحدد لكم الموعد الدقيق مع عرض السعر حسب الكمية ونوع التشطيب.',
        },
      ],
    },
    en: {
      title: 'Print Finishes Guide: Foil, Spot UV, Soft-Touch & Die-Cutting | Art Zone',
      description: 'Hot foil, spot UV, gloss, matte and soft-touch lamination, and die-cutting explained: what each finish does, where to use it, and how to prepare the file.',
      h1: 'Print finishes explained: foil, spot UV, lamination and die-cutting',
      summary: 'Finishes are steps after printing that protect a piece and lift the brand. Lamination covers the whole surface in gloss, matte or soft-touch; hot foil adds metallic gold, silver or holographic shine; spot UV adds a raised clear gloss to selected elements; and die-cutting gives the piece a custom shape.',
      blocks: [
        { h: 'Finishes at a glance' },
        {
          table: {
            head: ['Finish', 'What it does', 'Best for'],
            rows: [
              ['Gloss lamination', 'Clear glossy film that protects and makes colour pop', 'Menus, covers, heavily handled print'],
              ['Matte lamination', 'Non-reflective film with a calm, refined look', 'Brochures, business cards, covers'],
              ['Soft-touch lamination', 'Velvety feel in the hand', 'Premium business cards and gift boxes'],
              ['Hot foil', 'Metallic foil fixed with a heated die', 'Logos and titles on cards and boxes'],
              ['Spot UV', 'Raised clear gloss on selected elements', 'A logo shining over a matte or soft-touch surface'],
              ['Die-cutting', 'Cuts the piece to a custom shape with a die', 'Boxes, shaped stickers, cards with special edges'],
            ],
          },
        },
        { h: 'Lamination: gloss, matte or soft-touch?' },
        {
          p: 'Lamination is a thin film bonded over the whole printed surface; it protects against moisture and scuffs and makes the piece last longer. Gloss makes colours pop and reflects light, matte is calmer and easier to read under strong light, and soft-touch gives a velvety feel customers notice the moment they pick up the card or box.',
        },
        {
          p: 'Dark soft-touch surfaces can show fingerprints and scuffs with heavy handling, so they suit premium pieces better than print that is passed around all day.',
        },
        { h: 'Hot foil' },
        {
          p: 'A thin metallic foil is transferred onto the paper with a heated die, giving gold, silver or holographic shine that ordinary inks cannot. It is typically used for logos, titles and security seals.',
        },
        {
          ul: [
            'Prepare foil elements as vector artwork, not images.',
            'Avoid very fine lines and tiny text; foil may not hold cleanly in them.',
            'Put foil elements on their own layer in a single colour.',
          ],
        },
        { h: 'Spot UV' },
        {
          p: 'A clear gloss coating applied only to chosen parts of the design and cured with ultraviolet light, so it feels slightly raised. It looks best over matte or soft-touch lamination: the contrast between gloss and the calm surface is what catches the eye.',
        },
        { h: 'Die-cutting' },
        {
          p: 'A die is made in the outline of the shape to cut and crease the piece precisely. It is the basis of boxes, shaped stickers and cards with custom shapes. For stickers, a kiss-cut cuts through the sticker but not the backing, so it peels off easily.',
        },
        {
          ul: [
            'Draw the cut line on its own layer in a spot colour; it is not printed.',
            'Leave bleed around the cut line and keep text away from it.',
            'For boxes, ask for the template (die-line) for your size before designing.',
          ],
        },
        { h: 'Popular combinations' },
        {
          ul: [
            'Premium business card: soft-touch + spot UV on the logo + gold foil on the name.',
            'Gift box: matte lamination + gold foil logo + die-cut.',
            'Restaurant menu: gloss lamination to survive daily handling.',
          ],
        },
        {
          p: 'Each finish adds a production step, which affects cost and lead time depending on quantity. For file preparation in detail, see the guide to preparing print-ready files.',
        },
      ],
      faq: [
        {
          q: 'Can foil and spot UV go on the same card?',
          a: 'Yes. It is one of the most popular premium combinations, as long as each finish has its own layer in the file.',
        },
        {
          q: 'What is the difference between spot UV and gloss lamination?',
          a: 'Gloss lamination covers the whole surface; spot UV is applied only to chosen elements and is slightly raised.',
        },
        {
          q: 'Do finishes add to the lead time?',
          a: 'Yes, each finish is an extra production step. We confirm the exact date with the quote, based on quantity and finish.',
        },
      ],
    },
  },

  {
    slug: 'paper-types-weights',
    published: '2026-10-25',
    updated: '2026-10-25',
    services: ['business-cards', 'paper-bags', 'boxes'],
    cover: {
      file: 'paper-types-weights',
      alt: { ar: 'أنواع من الورق: لامع ومطفي وكتان وكرافت وكرتون مضلّع مع دفتر عينات', en: 'Paper stocks fanned out: gloss, matte, linen, kraft and corrugated board with a swatch book' },
    },
    ar: {
      title: 'دليل أنواع الورق وأوزانه (جرام): أي ورق يناسب مطبوعتك؟ | آرت زون',
      description: 'دليل أوزان الورق بالجرام لكل متر مربع وأنواعه: الكوشيه اللامع والمطفي، الورق غير المطلي، ورق الكتان، الكرافت والكرتون. ما الوزن المناسب للكروت والبروشورات والعلب والأكياس؟',
      h1: 'دليل أنواع الورق وأوزانه: أي ورق يناسب مطبوعتك؟',
      summary: 'يُقاس وزن الورق بالجرام لكل متر مربع (جم/م²). الأوراق المكتبية نحو 80 جم، والبروشورات والنشرات بين 115 و170 جم، والأغلفة والمنيوهات بين 200 و300 جم، وبطاقات الأعمال غالباً 300 إلى 350 جم. ويحدد نوع الورق، مطلي أو غير مطلي أو كرافت، الملمس ومظهر الألوان بقدر ما يحدده الوزن.',
      blocks: [
        { h: 'ماذا يعني الوزن بالجرام؟' },
        {
          p: 'الرقم يعني وزن متر مربع واحد من الورق. كلما زاد الرقم كان الورق أثقل وأكثر صلابة غالباً، لكن السماكة الفعلية تختلف بين الأنواع: فالورق غير المطلي يبدو أسمك من الكوشيه بالوزن نفسه.',
        },
        { h: 'الأوزان الشائعة واستخداماتها' },
        {
          table: {
            head: ['الوزن التقريبي', 'الاستخدام الشائع'],
            rows: [
              ['80–120 جم', 'الأوراق الرسمية (الليترهيد)، صفحات المستندات، الأوراق الداخلية للدفاتر'],
              ['115–170 جم', 'النشرات (الفلايرات)، الصفحات الداخلية للبروشورات والكتالوجات'],
              ['200–300 جم', 'أغلفة البروشورات والكتالوجات، المنيوهات، البوسترات المقواة'],
              ['300–350 جم', 'بطاقات الأعمال (الكروت الشخصية)، بطاقات الدعوة، بطاقات التعليق'],
              ['كرتون مقوى', 'العلب الصغيرة وعلب المنتجات'],
              ['كرتون مضلّع', 'علب الشحن والتوصيل، ويُقاس بنوع التموج لا بالجرام فقط'],
            ],
          },
        },
        {
          p: 'هذه نطاقات تقريبية متعارف عليها في السوق، ويختلف الاختيار النهائي حسب الاستخدام والميزانية والملمس المطلوب.',
        },
        { h: 'أنواع الورق' },
        {
          ul: [
            'الكوشيه (الورق المطلي): سطح ناعم يُظهر الألوان زاهية وحادة، ويأتي لامعاً أو مطفياً. الأنسب للبروشورات والكتالوجات والنشرات.',
            'الورق غير المطلي: ملمس طبيعي ويسهل الكتابة عليه بالقلم، لذلك يُستخدم للأوراق الرسمية والدفاتر والنماذج.',
            'ورق الكتان المحبب: ملمس منقوش يمنح إحساساً فاخراً لبطاقات الأعمال والدعوات.',
            'الكرافت: ورق بني طبيعي غير مبيّض، شائع في الأكياس والعلب وبطاقات التعليق للعلامات التي تريد مظهراً طبيعياً.',
            'الكرتون: المقوى للعلب الصغيرة وعلب المنتجات، والمضلّع لعلب الشحن.',
            'الفينيل والورق اللاصق: للملصقات، ويتوفر شفافاً وأبيض ومقاوماً للماء.',
          ],
        },
        { h: 'الكوشيه اللامع أم المطفي؟' },
        {
          p: 'اللامع يجعل الصور والألوان أكثر حيوية، لكنه يعكس الضوء. المطفي أسهل في القراءة ويمنح مظهراً أهدأ وأرقى، ويُفضَّل للمطبوعات ذات النصوص الكثيرة.',
        },
        { h: 'نصائح قبل اختيار الورق' },
        {
          ul: [
            'الأثقل ليس دائماً الأفضل: الورق الثقيل يحتاج إلى تخطيط (ثني مسبق) قبل الطي حتى لا يتشقق عند خط الطي.',
            'فكّروا في الاستخدام: منيو يُمسك يومياً يحتاج ورقاً أقوى وسلوفاناً، ونشرة توزَّع مرة واحدة يكفيها وزن أخف.',
            'فكّروا في الشحن: الورق الأثقل يرفع وزن الشحنة وتكلفتها في الكميات الكبيرة.',
            'اطلبوا العينات: يوفر مصنع آرت زون عينات ملموسة من الخامات مع عرض السعر، لتلمسوا الورق قبل الطباعة.',
          ],
        },
      ],
      faq: [
        {
          q: 'ما وزن الورق المناسب لبطاقات الأعمال؟',
          a: 'الأكثر شيوعاً بين 300 و350 جم، وتُستخدم أوزان أثقل أو ورق كتان للبطاقات الفاخرة.',
        },
        {
          q: 'ما الفرق بين الكوشيه اللامع والمطفي؟',
          a: 'اللامع يُبرز الألوان والصور ويعكس الضوء، والمطفي أهدأ وأسهل في القراءة ويناسب النصوص الكثيرة.',
        },
        {
          q: 'هل يمكن رؤية عينات الورق قبل الطلب؟',
          a: 'نعم، يمكن طلب عينات ملموسة من الخامات مع عرض السعر عبر واتساب.',
        },
      ],
    },
    en: {
      title: 'Paper Types and Weights (GSM) Guide: Which Paper for Your Print? | Art Zone',
      description: 'A guide to paper weights in gsm and paper types: gloss and matte coated, uncoated, linen, kraft and board. Which weight for business cards, brochures, boxes and bags?',
      h1: 'Paper types and weights: which paper suits your print?',
      summary: 'Paper weight is measured in grams per square metre (gsm). Office paper is around 80 gsm, flyers and brochure pages 115–170 gsm, covers and menus 200–300 gsm, and business cards usually 300–350 gsm. The paper type — coated, uncoated or kraft — shapes the feel and how colour looks as much as the weight does.',
      blocks: [
        { h: 'What does gsm mean?' },
        {
          p: 'The number is the weight of one square metre of the paper. A higher number usually means a heavier, stiffer sheet, but actual thickness varies by type: uncoated paper feels thicker than coated paper of the same gsm.',
        },
        { h: 'Common weights and their uses' },
        {
          table: {
            head: ['Approx. weight', 'Typical use'],
            rows: [
              ['80–120 gsm', 'Letterheads, document pages, notebook inner pages'],
              ['115–170 gsm', 'Flyers, brochure and catalogue inner pages'],
              ['200–300 gsm', 'Brochure and catalogue covers, menus, stiff posters'],
              ['300–350 gsm', 'Business cards, invitations, hang tags'],
              ['Folding board', 'Small boxes and product packaging'],
              ['Corrugated board', 'Shipping and delivery boxes; graded by flute, not just gsm'],
            ],
          },
        },
        {
          p: 'These are typical market ranges; the final choice depends on use, budget and the feel you want.',
        },
        { h: 'Paper types' },
        {
          ul: [
            'Coated (art) paper: a smooth surface that keeps colours vivid and sharp, in gloss or matte. Best for brochures, catalogues and flyers.',
            'Uncoated paper: a natural feel that takes pen easily, so it is used for letterheads, notebooks and forms.',
            'Textured linen: an embossed feel that makes business cards and invitations feel premium.',
            'Kraft: natural, unbleached brown paper, common for bags, boxes and hang tags when a brand wants a natural look.',
            'Board: folding board for small and product boxes, corrugated board for shipping boxes.',
            'Vinyl and adhesive stock: for stickers, in clear, white and waterproof versions.',
          ],
        },
        { h: 'Gloss or matte coated?' },
        {
          p: 'Gloss makes photos and colours livelier but reflects light. Matte is easier to read and looks calmer and more refined, so it suits text-heavy pieces.',
        },
        { h: 'Tips before you choose' },
        {
          ul: [
            'Heavier is not always better: heavy stock needs scoring before folding, or it cracks along the fold.',
            'Think about use: a menu handled every day needs stronger stock and lamination; a one-off flyer can be lighter.',
            'Think about shipping: heavier paper adds weight and cost on large runs.',
            'Ask for swatches: Art Zone provides physical material swatches with the quote, so you can feel the paper before printing.',
          ],
        },
      ],
      faq: [
        {
          q: 'What paper weight suits business cards?',
          a: 'Most commonly 300–350 gsm; premium cards use heavier stock or textured linen.',
        },
        {
          q: 'What is the difference between gloss and matte coated paper?',
          a: 'Gloss brings out colours and photos and reflects light; matte is calmer, easier to read and suits text-heavy pieces.',
        },
        {
          q: 'Can I see paper samples before ordering?',
          a: 'Yes. You can request physical material swatches with your quote on WhatsApp.',
        },
      ],
    },
  },
]

export const GUIDE_SLUGS = GUIDES.map((g) => g.slug)

/* cover image paths + intrinsic size (all covers are 1280x720) */
export function guideCover(g) {
  const base = `/img/guides/${g.cover.file}`
  return { src: `${base}.webp`, small: `${base}-768.webp`, w: 1280, h: 720, alt: g.cover.alt }
}

export function getGuide(slug) {
  return GUIDES.find((g) => g.slug === slug) || null
}

/* guides that mention a service, for the "read more" link on service pages */
export function guidesForService(slug) {
  return GUIDES.filter((g) => g.services.includes(slug))
}
