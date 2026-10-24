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
   =================================================================== */

export const GUIDES = [
  {
    slug: 'paper-cup-sizes',
    published: '2026-10-25',
    updated: '2026-10-25',
    services: ['paper-cups'],
    image: 'branded-paper-cups-cafe-collection',
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
    image: 'large-format-printer-operator',
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
    image: 'vinyl-cutting-plotter-stickers',
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
]

export const GUIDE_SLUGS = GUIDES.map((g) => g.slug)

export function getGuide(slug) {
  return GUIDES.find((g) => g.slug === slug) || null
}

/* guides that mention a service, for the "read more" link on service pages */
export function guidesForService(slug) {
  return GUIDES.filter((g) => g.services.includes(slug))
}
