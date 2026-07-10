import { affiliateTools, type AffiliateToolKey } from "@/src/config/affiliateTools";
import { serviceOrder, type Locale, type ServiceSlug } from "@/src/config/site";

type ServiceOverview = {
  slug: ServiceSlug;
  icon: string;
  toolKeys: AffiliateToolKey[];
  ctaLabel: Record<Locale, string>;
  title: Record<Locale, string>;
  shortDescription: Record<Locale, string>;
  heroTitle: Record<Locale, string>;
  heroDescription: Record<Locale, string>;
  whenYouNeedIt: Record<Locale, string[]>;
  tips: Record<Locale, string[]>;
  examples: Record<Locale, string[]>;
  faq: Record<Locale, { question: string; answer: string }[]>;
  infoBox?: Record<Locale, { title: string; body: string[] }>;
  usageGuide?: Record<Locale, { title: string; steps: string[]; note?: string }>;
  seo: Record<Locale, { title: string; description: string }>;
};

type ArticleItem = {
  slug: string;
  href: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  sections: Record<Locale, { heading: string; body: string[] }[]>;
};

type MostUsedItem = {
  slug: string;
  href: string;
  label: Record<Locale, string>;
};

export const disclosure = {
  ar: "إفصاح: قد تحتوي هذه الصفحة على روابط أو أدوات شراكة. عند استخدامها قد نحصل على عمولة، دون تكلفة إضافية عليك.",
  de: "Hinweis: Diese Seite kann Partnerlinks oder Vergleichstools enthalten. Bei Nutzung können wir eine Provision erhalten, ohne Mehrkosten für dich.",
} as const;

export const footerDisclosure = {
  ar: "قد نحصل على عمولة من بعض الأدوات أو الروابط دون تكلفة إضافية عليك.",
  de: "Bei einigen Tools oder Links können wir eine Provision erhalten, ohne Mehrkosten für dich.",
} as const;

export const socialLinks = [
  { name: "Instagram", href: "https://instagram.com/arabvergleich" },
  { name: "TikTok", href: "https://tiktok.com/@arabvergleich" },
  { name: "YouTube", href: "https://youtube.com/@arabvergleich" },
  { name: "Facebook", href: "https://facebook.com/arabvergleich" },
] as const;

export const siteChrome = {
  navLabel: {
    ar: "الخدمات",
    de: "Leistungen",
  },
  homeHero: {
    title: {
      ar: "قارن أهم الخدمات في ألمانيا بسهولة وبالعربية",
      de: "Vergleiche wichtige Dienstleistungen in Deutschland einfach und verständlich",
    },
    description: {
      ar: "الإنترنت، الكهرباء، الغاز، الموبايل، السفر، تأجير السيارات والحساب البنكي — كل ذلك في مكان واحد وبشرح بسيط يناسب المقيمين الجدد والقدامى في ألمانيا.",
      de: "Internet, Strom, Gas, Mobilfunk, Reisen, Mietwagen und Bankkonto – an einem Ort, einfach erklärt für arabischsprachige Menschen in Deutschland.",
    },
  },
  mostUsed: {
    title: {
      ar: "الأكثر استخداماً في ألمانيا",
      de: "Haeufig genutzt in Deutschland",
    },
  },
  faqTitle: {
    ar: "أسئلة عامة",
    de: "Allgemeine Fragen",
  },
  generalFaq: {
    ar: [
      {
        question: "هل هذا الموقع تابع لـ CHECK24؟",
        answer: "لا. ArabVergleich منصة مستقلة تشرح الخيارات بطريقة مبسطة وتستخدم بعض أدوات الشراكة للمقارنة.",
      },
      {
        question: "هل أدفع أكثر عند استخدام الروابط أو الأدوات؟",
        answer: "لا يفترض أن تدفع تكلفة إضافية. قد نحصل فقط على عمولة من الشريك عند الاستخدام.",
      },
      {
        question: "هل الشرح مناسب لمن لا يتحدث الألمانية جيداً؟",
        answer: "نعم، المحتوى مكتوب بلغة بسيطة جداً مع أمثلة عملية للحياة اليومية في ألمانيا.",
      },
      {
        question: "هل هذه النصوص تعتبر استشارة قانونية أو مالية؟",
        answer: "لا. هي معلومات عامة للمساعدة في الفهم والمقارنة قبل اتخاذ القرار المناسب لك.",
      },
    ],
    de: [
      {
        question: "Ist diese Seite offiziell von CHECK24?",
        answer: "Nein. ArabVergleich ist ein unabhaengiges Informationsportal und nutzt teilweise Partner-Tools fuer Vergleiche.",
      },
      {
        question: "Zahle ich mehr, wenn ich die Tools oder Links nutze?",
        answer: "In der Regel nicht. Wir koennen lediglich eine Provision vom Partner erhalten.",
      },
      {
        question: "Ist die Sprache auch fuer Menschen geeignet, die wenig Deutsch koennen?",
        answer: "Ja. Die Inhalte sind bewusst einfach geschrieben und erklaeren typische Alltagssituationen.",
      },
      {
        question: "Sind die Inhalte eine Rechts- oder Finanzberatung?",
        answer: "Nein. Es sind allgemeine Informationen, die dir beim Verstehen und Vergleichen helfen sollen.",
      },
    ],
  },
} as const;

export const articles: ArticleItem[] = [
  {
    slug: "internet-vertrag",
    href: "/dsl",
    title: {
      ar: "كيف تختار عقد إنترنت مناسب في ألمانيا؟",
      de: "Wie waehlt man einen passenden Internetvertrag in Deutschland?",
    },
    description: {
      ar: "شرح مبسط للسرعة، مدة العقد، ورسوم التأسيس قبل التوقيع.",
      de: "Einfach erklaert: Geschwindigkeit, Laufzeit und einmalige Kosten vor dem Abschluss.",
    },
    sections: {
      ar: [
        {
          heading: "ابدأ من احتياجك الحقيقي",
          body: [
            "إذا كنت تسكن وحدك وتستخدم الإنترنت للتصفح والدراسة والمكالمات، فغالباً لا تحتاج أعلى سرعة موجودة.",
            "أما إذا كان في البيت أكثر من شخص ويستعملون البث والعمل من المنزل في نفس الوقت، فهنا تصبح السرعة الأعلى أكثر منطقية.",
          ],
        },
        {
          heading: "لا تنظر إلى السعر وحده",
          body: [
            "بعض العروض تبدو رخيصة في الأشهر الأولى ثم يرتفع السعر لاحقاً، لذلك اقرأ السعر بعد الفترة الترويجية.",
            "راجع أيضاً رسوم التفعيل، تكلفة الراوتر، ومدة الالتزام لأن هذه الأشياء تؤثر كثيراً على القرار.",
          ],
        },
        {
          heading: "متى يكون العقد مناسباً لك؟",
          body: [
            "العقد المناسب هو الذي يعطيك سرعة كافية وسعراً واضحاً وشروطاً تفهمها بدون تعقيد.",
            "إذا لم تكن متأكدًا، اختر عرضاً متوازناً ثم قارن بينه وبين عرضين آخرين بدل أن تتوه بين عشرات النتائج.",
          ],
        },
      ],
      de: [
        {
          heading: "Starte mit deinem echten Bedarf",
          body: [
            "Wenn du allein wohnst und vor allem surfst, lernst oder Videoanrufe machst, brauchst du oft nicht den groessten Tarif.",
            "Leben mehrere Personen im Haushalt und nutzen Streaming oder Homeoffice gleichzeitig, ist mehr Geschwindigkeit sinnvoller.",
          ],
        },
        {
          heading: "Schau nicht nur auf den Startpreis",
          body: [
            "Manche Angebote wirken am Anfang guenstig und werden spaeter deutlich teurer. Deshalb ist der Preis nach der Aktion wichtig.",
            "Achte auch auf Anschlusskosten, Routerkosten und Vertragslaufzeit, weil genau diese Punkte den Unterschied machen.",
          ],
        },
        {
          heading: "Woran erkennst du einen passenden Vertrag?",
          body: [
            "Ein guter Vertrag ist schnell genug, preislich klar und ohne Bedingungen, die du kaum verstehst.",
            "Wenn du unsicher bist, vergleiche lieber wenige passende Tarife gruendlich statt sehr viele oberflaechlich.",
          ],
        },
      ],
    },
  },
  {
    slug: "strom-sparen",
    href: "/strom",
    title: {
      ar: "كيف توفر في فاتورة الكهرباء؟",
      de: "Wie kannst du bei der Stromrechnung sparen?",
    },
    description: {
      ar: "نصائح عملية للمقارنة وفهم الاستهلاك والرسوم السنوية.",
      de: "Praktische Tipps zu Verbrauch, Grundpreis und Anbieterwechsel.",
    },
    sections: {
      ar: [
        {
          heading: "افهم الفاتورة أولاً",
          body: [
            "قبل أن تقارن، حاول معرفة الاستهلاك السنوي بالكيلوواط ساعة من آخر فاتورة إن وُجدت.",
            "هذا الرقم مهم لأنه يجعل النتائج أقرب للواقع ويمنعك من اختيار عرض يبدو جيداً فقط على الورق.",
          ],
        },
        {
          heading: "السعر السنوي أهم من الانطباع الأول",
          body: [
            "لا يكفي أن ترى قسطاً شهرياً منخفضاً. المهم هو كم ستدفع تقريباً خلال السنة كاملة.",
            "راجع أيضاً إذا كان هناك بونص، وهل السعر ثابت، وهل العقد طويل أو مرن.",
          ],
        },
        {
          heading: "كيف توفر فعلاً؟",
          body: [
            "التوفير الحقيقي يأتي من عقد سعره واضح ومناسب لاستهلاكك، وليس فقط من أول نتيجة في القائمة.",
            "قارن بين عرضين أو ثلاثة، ثم اختر العرض الذي يجمع بين السعر المعقول والشروط السهلة.",
          ],
        },
      ],
      de: [
        {
          heading: "Verstehe zuerst deine Abrechnung",
          body: [
            "Vor dem Vergleich hilft es, den Jahresverbrauch in kWh aus der letzten Rechnung zu kennen.",
            "Mit diesem Wert werden die Ergebnisse realistischer und besser vergleichbar.",
          ],
        },
        {
          heading: "Der Jahrespreis ist wichtiger als der erste Eindruck",
          body: [
            "Ein niedriger Monatsabschlag allein reicht nicht. Entscheidend ist, was du ueber das Jahr zahlst.",
            "Pruefe ausserdem Bonus, Preisgarantie und Laufzeit, bevor du dich festlegst.",
          ],
        },
        {
          heading: "Wie sparst du wirklich?",
          body: [
            "Wirkliches Sparen bedeutet: passender Tarif, klare Bedingungen und ein Preis, der zu deinem Verbrauch passt.",
            "Vergleiche lieber einige gute Angebote gruendlich statt nur das erste Ergebnis zu nehmen.",
          ],
        },
      ],
    },
  },
  {
    slug: "oekostrom-unterschied",
    href: "/oekostrom",
    title: {
      ar: "ما الفرق بين الكهرباء العادية والكهرباء الخضراء؟",
      de: "Was ist der Unterschied zwischen normalem Strom und Oekostrom?",
    },
    description: {
      ar: "متى يكون أوكوستروم مناسباً لك وما الذي يجب مراجعته قبل الاختيار.",
      de: "Wann Oekostrom sinnvoll sein kann und worauf du achten solltest.",
    },
    sections: {
      ar: [
        {
          heading: "ما معنى الكهرباء الخضراء ببساطة؟",
          body: [
            "المقصود عادة هو عروض كهرباء مرتبطة بالطاقة المتجددة أو مصنفة كتعرفات أكثر استدامة.",
            "لكن هذا لا يعني أن كل عرض أخضر مناسب تلقائياً، لذلك المقارنة تبقى مهمة.",
          ],
        },
        {
          heading: "متى تكون خياراً جيداً؟",
          body: [
            "إذا كنت تريد الجمع بين السعر المقبول وفكرة طاقة أقرب للاستدامة، فهذه الصفحة مناسبة لك.",
            "أما إذا كنت تريد رؤية كل السوق أولاً بدون تضييق، فابدأ بصفحة الكهرباء العامة ثم ارجع وقارن.",
          ],
        },
        {
          heading: "على ماذا تركز قبل الاختيار؟",
          body: [
            "ركز على ثلاثة أشياء: السعر السنوي، مدة العقد، ومدى وضوح شروط العرض.",
            "بهذه الطريقة لا يكون قرارك مبنياً فقط على الاسم، بل على فائدة حقيقية لك.",
          ],
        },
      ],
      de: [
        {
          heading: "Was bedeutet Oekostrom einfach erklaert?",
          body: [
            "Gemeint sind meist Tarife mit Bezug zu erneuerbaren Energien oder entsprechend eingeordneten Angeboten.",
            "Das bedeutet aber nicht automatisch, dass jeder Oekostrom-Tarif auch wirklich gut zu dir passt.",
          ],
        },
        {
          heading: "Wann ist Oekostrom sinnvoll?",
          body: [
            "Wenn dir neben dem Preis auch Nachhaltigkeit wichtig ist, ist Oekostrom ein guter Startpunkt.",
            "Wenn du zuerst den ganzen Markt sehen willst, starte mit Strom und vergleiche danach gezielt weiter.",
          ],
        },
        {
          heading: "Worauf solltest du achten?",
          body: [
            "Wichtig sind vor allem Jahrespreis, Laufzeit und klar verstaendliche Bedingungen.",
            "So triffst du eine Entscheidung, die nicht nur gut klingt, sondern auch praktisch zu dir passt.",
          ],
        },
      ],
    },
  },
  {
    slug: "bankkonto-kostenlos",
    href: "/c24-bank",
    title: {
      ar: "هل الحساب البنكي المجاني مناسب لك؟",
      de: "Ist ein kostenloses Bankkonto fuer dich geeignet?",
    },
    description: {
      ar: "أسئلة بسيطة تساعدك على معرفة ما تحتاجه من الحساب البنكي.",
      de: "Einfache Fragen, um herauszufinden, welches Konto zu deinem Alltag passt.",
    },
    sections: {
      ar: [
        {
          heading: "ليس كل حساب مجاني مناسباً للجميع",
          body: [
            "بعض الناس يحتاجون حساباً رقمياً بسيطاً فقط، وآخرون يحتاجون سحباً متكرراً أو خدمات إضافية.",
            "لذلك كلمة مجاني وحدها لا تكفي لتقرر إذا كان الحساب مناسباً لك أم لا.",
          ],
        },
        {
          heading: "اسأل نفسك قبل الاختيار",
          body: [
            "هل ستستخدم الحساب من الهاتف فقط؟ هل تحتاج بطاقة؟ هل يهمك وجود فرع فعلي؟",
            "كل سؤال من هذه الأسئلة يساعدك على تضييق الخيارات بسرعة.",
          ],
        },
        {
          heading: "الاختيار الجيد هو الاختيار الواضح",
          body: [
            "ابحث عن حساب تفهم رسومه وخدماته وشروطه، وليس فقط حساباً عليه كلمة مجاني.",
            "إذا كنت جديداً في ألمانيا، الأفضل أن تبدأ بخيار بسيط وواضح ثم تطور قرارك لاحقاً إذا احتجت.",
          ],
        },
      ],
      de: [
        {
          heading: "Nicht jedes kostenlose Konto passt zu jedem",
          body: [
            "Manche Menschen brauchen nur ein einfaches digitales Konto, andere moechten mehr Bargeld oder Zusatzfunktionen.",
            "Deshalb reicht das Wort kostenlos allein nicht aus, um ein Konto richtig einzuordnen.",
          ],
        },
        {
          heading: "Diese Fragen helfen vor der Auswahl",
          body: [
            "Willst du alles per App erledigen? Brauchst du Karten? Ist dir eine Filiale wichtig?",
            "Mit solchen Fragen kannst du passende Konten viel schneller eingrenzen.",
          ],
        },
        {
          heading: "Ein gutes Konto ist vor allem klar",
          body: [
            "Wichtig ist ein Konto mit verstaendlichen Kosten, Leistungen und Bedingungen.",
            "Gerade am Anfang in Deutschland ist ein einfacher und uebersichtlicher Start oft die beste Wahl.",
          ],
        },
      ],
    },
  },
];

export const mostUsedItems: MostUsedItem[] = [
  {
    slug: "dsl",
    href: "/dsl",
    label: { ar: "الإنترنت المنزلي DSL", de: "DSL fuer zuhause" },
  },
  {
    slug: "mobilfunk",
    href: "/mobilfunk",
    label: { ar: "عقود الموبايل", de: "Mobilfunkvertraege" },
  },
  {
    slug: "strom",
    href: "/strom",
    label: { ar: "تغيير مزود الكهرباء", de: "Wechsel des Stromanbieters" },
  },
  {
    slug: "gas",
    href: "/gas",
    label: { ar: "مقارنة الغاز", de: "Gasvergleich" },
  },
  {
    slug: "mietwagen",
    href: "/mietwagen",
    label: { ar: "تأجير السيارات أثناء السفر", de: "Mietwagen fuer Reisen" },
  },
  {
    slug: "c24-bank",
    href: "/c24-bank",
    label: { ar: "فتح حساب بنكي أونلاين", de: "Online-Bankkonto eroeffnen" },
  },
] as const;

export const services: Record<ServiceSlug, ServiceOverview> = {
  dsl: {
    slug: "dsl",
    icon: "WiFi",
    toolKeys: ["dslCalculator"],
    ctaLabel: { ar: "ابدأ المقارنة", de: "Vergleich starten" },
    title: { ar: "DSL والإنترنت", de: "DSL und Internet" },
    shortDescription: {
      ar: "افهم السرعات، مدة العقد، ورسوم التفعيل قبل اختيار الإنترنت المنزلي.",
      de: "Verstehe Geschwindigkeit, Laufzeit und Anschlusskosten vor dem Abschluss.",
    },
    heroTitle: { ar: "مقارنة الإنترنت DSL في ألمانيا", de: "DSL in Deutschland einfach vergleichen" },
    heroDescription: {
      ar: "إذا كنت جديداً في ألمانيا أو تريد تغيير العقد الحالي، فهذه الصفحة تساعدك على فهم الأساسيات قبل استخدام أداة المقارنة.",
      de: "Wenn du neu in Deutschland bist oder deinen Vertrag wechseln moechtest, hilft dir diese Seite zuerst mit den wichtigsten Grundlagen.",
    },
    whenYouNeedIt: {
      ar: ["عند الانتقال إلى شقة جديدة.", "عندما ينتهي عقدك الحالي قريباً.", "إذا كانت السرعة الحالية لا تكفي للعمل أو الدراسة."],
      de: ["Beim Umzug in eine neue Wohnung.", "Wenn dein aktueller Vertrag bald endet.", "Wenn deine aktuelle Geschwindigkeit fuer Arbeit oder Studium nicht reicht."],
    },
    tips: {
      ar: ["تحقق من مدة العقد: 24 شهراً قد تكون طويلة لبعض الناس.", "اسأل عن رسوم التفعيل والراوتر.", "إذا كنت تسكن وحدك فقد تكفيك سرعة متوسطة."],
      de: ["Pruefe die Laufzeit: 24 Monate koennen fuer manche zu lang sein.", "Achte auf Anschlussgebuehren und Routerkosten.", "Wenn du allein wohnst, reicht oft eine mittlere Geschwindigkeit."],
    },
    examples: {
      ar: ["طالب يعيش وحده ويحتاج إنترنتاً مستقراً للدراسة.", "عائلة من 4 أشخاص تستخدم البث والعمل من المنزل.", "شخص يريد فقط تخفيض السعر دون تغيير كبير في السرعة."],
      de: ["Ein Student wohnt allein und braucht stabiles Internet fuer das Studium.", "Eine Familie mit vier Personen nutzt Streaming und Homeoffice.", "Jemand moechte vor allem den Preis senken, ohne viel an der Geschwindigkeit zu aendern."],
    },
    faq: {
      ar: [
        { question: "هل أحتاج راوتر جديد دائماً؟", answer: "ليس دائماً. بعض العقود تسمح باستخدام راوترك الحالي، وبعضها يفرض جهازاً من الشركة." },
        { question: "ما السرعة المناسبة لعائلة؟", answer: "غالباً سرعة متوسطة إلى عالية تكون أفضل إذا كان هناك بث وعمل ودراسة في وقت واحد." },
        { question: "هل يمكنني التبديل قبل نهاية العقد؟", answer: "غالباً لا، إلا في حالات معينة. الأفضل مراجعة تاريخ الإلغاء." },
        { question: "ماذا لو لم أكن أعرف الألمانية؟", answer: "اكتب الشروط المهمة أو اطلب مساعدة صديق قبل توقيع العقد." },
      ],
      de: [
        { question: "Brauche ich immer einen neuen Router?", answer: "Nicht immer. Manche Tarife erlauben dein eigenes Geraet, andere liefern einen Router mit." },
        { question: "Welche Geschwindigkeit passt zu einer Familie?", answer: "Oft ist eine mittlere bis hohe Geschwindigkeit sinnvoll, wenn mehrere Personen gleichzeitig online sind." },
        { question: "Kann ich vor Vertragsende wechseln?", answer: "Meistens nicht ohne Weiteres. Schau zuerst auf die Kuendigungsfrist." },
        { question: "Was ist, wenn ich wenig Deutsch kann?", answer: "Notiere dir die wichtigsten Punkte oder lass den Vertrag vorher kurz gegenlesen." },
      ],
    },
    usageGuide: {
      ar: {
        title: "كيف تستخدم أداة مقارنة DSL والإنترنت؟",
        steps: [
          "ابدأ بإدخال الرمز البريدي `PLZ` الخاص بمنطقتك حتى تظهر العروض المتاحة في عنوانك.",
          "بعد ذلك راجع السرعة المناسبة لك: شخص واحد يكفيه غالباً عرض متوسط، بينما العائلة تحتاج سرعة أعلى.",
          "انتبه إلى مدة العقد، تكلفة الراوتر، ورسوم التفعيل قبل الضغط على أي عرض.",
          "إذا رأيت أكثر من عرض جيد، قارن بين السعر بعد الأشهر الأولى وليس فقط السعر الدعائي في البداية.",
        ],
        note: "إذا لم تكن متأكدًا من السرعة، اختر عرضًا متوسطًا أولاً ثم قارن التفاصيل بهدوء.",
      },
      de: {
        title: "Wie nutzt du das DSL- und Internet-Vergleichstool?",
        steps: [
          "Gib zuerst deine Postleitzahl ein, damit nur verfuegbare Tarife fuer deine Adresse angezeigt werden.",
          "Pruefe dann, welche Geschwindigkeit zu deinem Alltag passt: fuer eine Person oft mittel, fuer Familien meist hoeher.",
          "Achte vor der Auswahl auf Laufzeit, Routerkosten und einmalige Anschlussgebuehren.",
          "Vergleiche gute Angebote nicht nur nach dem Startpreis, sondern auch nach dem Preis im weiteren Verlauf.",
        ],
        note: "Wenn du unsicher bist, starte mit einem mittleren Tarif und vergleiche danach in Ruhe weiter.",
      },
    },
    seo: {
      ar: {
        title: "مقارنة الإنترنت DSL في ألمانيا للعرب | ArabVergleich",
        description: "شرح بسيط لمقارنة عروض الإنترنت و DSL في ألمانيا واختيار العقد المناسب للعائلات والطلاب والمقيمين الجدد.",
      },
      de: {
        title: "DSL in Deutschland vergleichen | ArabVergleich",
        description: "Einfache Erklaerung fuer DSL- und Internetvergleiche in Deutschland fuer Familien, Studierende und Neuankommende.",
      },
    },
  },
  strom: {
    slug: "strom",
    icon: "Bolt",
    toolKeys: ["stromCalculator"],
    ctaLabel: { ar: "ابدأ المقارنة", de: "Vergleich starten" },
    title: { ar: "الكهرباء", de: "Strom" },
    shortDescription: {
      ar: "قارن مزودي الكهرباء وافهم الفرق بين السعر الشهري والتكلفة السنوية.",
      de: "Vergleiche Stromanbieter und verstehe den Unterschied zwischen Monatsbetrag und Jahreskosten.",
    },
    heroTitle: { ar: "مقارنة الكهرباء في ألمانيا", de: "Stromanbieter in Deutschland vergleichen" },
    heroDescription: {
      ar: "إذا كنت انتقلت إلى منزل جديد أو تريد تخفيض الفاتورة، فهذه الصفحة تشرح لك ما الذي تراجعه قبل التبديل.",
      de: "Wenn du umgezogen bist oder deine Kosten senken moechtest, zeigt dir diese Seite, worauf du vor dem Wechsel achten solltest.",
    },
    whenYouNeedIt: {
      ar: ["عند السكن في شقة جديدة.", "إذا ارتفعت فاتورتك السنوية.", "إذا كنت على التعرفة الأساسية وتريد سعراً أفضل."],
      de: ["Beim Einzug in eine neue Wohnung.", "Wenn deine Jahresabrechnung hoch ausfaellt.", "Wenn du noch im Grundversorgungstarif bist und sparen moechtest."],
    },
    tips: {
      ar: ["أدخل استهلاكاً قريباً من الواقع إن وجد.", "انتبه لمدى ثبات السعر ومدة العقد.", "اقرأ شروط البونص ولا تعتمد عليه وحده."],
      de: ["Nutze einen moeglichst realistischen Verbrauchswert.", "Achte auf Preisgarantie und Vertragslaufzeit.", "Lies die Bonusbedingungen und entscheide nicht nur danach."],
    },
    examples: {
      ar: ["شخص يسكن وحده ويريد فاتورة أبسط وأوضح.", "عائلة من 4 أشخاص تريد خفض التكلفة السنوية.", "شخص لا يعرف المورد الحالي ويريد البدء من جديد."],
      de: ["Eine Person lebt allein und moechte eine klarere Rechnung.", "Eine vierkoepfige Familie will die Jahreskosten senken.", "Jemand kennt seinen aktuellen Anbieter kaum und moechte neu vergleichen."],
    },
    faq: {
      ar: [
        { question: "هل ينقطع الكهرباء عند التبديل؟", answer: "عادة لا. عملية التبديل تتم ورقياً بين الشركات." },
        { question: "ما هو الاستهلاك السنوي؟", answer: "هو كمية الكهرباء التي تستخدمها خلال سنة، وغالباً تُحسب بالكيلوواط ساعة." },
        { question: "هل البونص مهم؟", answer: "قد يكون مفيداً، لكن الأفضل النظر أيضاً إلى السعر بعد السنة الأولى." },
        { question: "ماذا لو لم أكن أعرف قيمة الاستهلاك؟", answer: "يمكنك استخدام تقدير تقريبي حسب عدد الأشخاص في المنزل." },
      ],
      de: [
        { question: "Faellt beim Wechsel der Strom aus?", answer: "Normalerweise nicht. Der Wechsel laeuft im Hintergrund zwischen den Anbietern." },
        { question: "Was bedeutet Jahresverbrauch?", answer: "Das ist die Strommenge, die du in einem Jahr nutzt, meist in kWh angegeben." },
        { question: "Ist ein Bonus wichtig?", answer: "Er kann helfen, aber wichtiger ist auch der Preis nach dem ersten Jahr." },
        { question: "Was mache ich ohne Verbrauchsdaten?", answer: "Nutze zunaechst einen ungefaehren Richtwert passend zu deiner Haushaltsgroesse." },
      ],
    },
    infoBox: {
      ar: {
        title: "ما الفرق بين الكهرباء العادية والكهرباء الخضراء؟",
        body: [
          "الكهرباء العادية تعرض لك كل عروض الكهرباء بشكل عام، وغالباً يكون التركيز فيها على السعر، مدة العقد، وثبات التعرفة.",
          "الكهرباء الخضراء تعرض لك عروضاً تركز على الطاقة المتجددة أو التعرفات المصنفة كصديقة للبيئة.",
          "إذا كان همك الأول هو السعر فابدأ بالكهرباء العادية، وإذا كان يهمك جانب الاستدامة فابدأ بالكهرباء الخضراء.",
        ],
      },
      de: {
        title: "Was ist der Unterschied zwischen Strom und Oekostrom?",
        body: [
          "Bei Strom vergleichst du allgemeine Tarife mit Fokus auf Preis, Laufzeit und Bedingungen.",
          "Bei Oekostrom vergleichst du Tarife, die auf erneuerbare oder entsprechend gekennzeichnete Energie setzen.",
          "Wenn dir vor allem der Preis wichtig ist, starte mit Strom. Wenn dir Nachhaltigkeit wichtig ist, starte mit Oekostrom.",
        ],
      },
    },
    usageGuide: {
      ar: {
        title: "كيف تستخدم أداة مقارنة الكهرباء؟",
        steps: [
          "أدخل الرمز البريدي أولاً، لأنه يحدد العروض المتاحة في مدينتك أو منطقتك.",
          "إذا كنت تعرف استهلاكك السنوي `kWh` من الفاتورة القديمة فأدخله، وإن لم تعرف استخدم تقديراً قريباً من واقع منزلك.",
          "اقرأ السعر السنوي، مدة العقد، وهل يوجد بونص أو ضمان سعر قبل اختيار العرض.",
          "لا تستعجل في أول نتيجة؛ قارن 2 أو 3 عروض ثم اختر الأنسب من حيث السعر والشروط.",
        ],
        note: "إذا كنت جديداً في ألمانيا ولا تعرف الاستهلاك، ابدأ بتقدير بسيط حسب عدد الأشخاص في المنزل.",
      },
      de: {
        title: "Wie nutzt du das Strom-Vergleichstool?",
        steps: [
          "Trage zuerst deine Postleitzahl ein, damit passende Tarife fuer deine Region erscheinen.",
          "Wenn du deinen Jahresverbrauch in kWh kennst, gib ihn ein. Wenn nicht, nutze einen realistischen Richtwert.",
          "Pruefe Jahrespreis, Laufzeit, Bonus und Preisgarantie, bevor du ein Angebot auswählst.",
          "Nimm nicht sofort das erste Ergebnis, sondern vergleiche zwei oder drei passende Tarife genauer.",
        ],
        note: "Wenn du neu in Deutschland bist, reicht am Anfang auch eine vorsichtige Verbrauchsschaetzung.",
      },
    },
    seo: {
      ar: {
        title: "مقارنة الكهرباء في ألمانيا بالعربي | ArabVergleich",
        description: "قارن أسعار الكهرباء في ألمانيا وتعرّف كيف تختار مزوداً مناسباً وتوفر في فاتورتك.",
      },
      de: {
        title: "Strom in Deutschland vergleichen | ArabVergleich",
        description: "Vergleiche Strompreise in Deutschland und finde einen passenden Anbieter einfach erklaert.",
      },
    },
  },
  oekostrom: {
    slug: "oekostrom",
    icon: "Leaf",
    toolKeys: ["oekostromCalculator"],
    ctaLabel: { ar: "ابدأ المقارنة", de: "Vergleich starten" },
    title: { ar: "الكهرباء الخضراء", de: "Oekostrom" },
    shortDescription: {
      ar: "تعرف على خيارات الكهرباء الخضراء وكيف تقارن بينها دون تعقيد.",
      de: "Verstehe Oekostrom-Angebote und vergleiche sie ohne komplizierte Fachsprache.",
    },
    heroTitle: { ar: "مقارنة الكهرباء الخضراء في ألمانيا", de: "Oekostrom in Deutschland vergleichen" },
    heroDescription: {
      ar: "إذا كان يهمك السعر مع خيار أكثر استدامة، فابدأ هنا لفهم الفكرة بشكل بسيط.",
      de: "Wenn dir neben dem Preis auch ein nachhaltigerer Tarif wichtig ist, bekommst du hier einen einfachen Einstieg.",
    },
    whenYouNeedIt: {
      ar: ["عند الرغبة في تعرفة أكثر استدامة.", "إذا أردت مقارنة أوكوستروم مع العقد الحالي.", "إذا كنت تنتقل إلى شقة جديدة وتبدأ من الصفر."],
      de: ["Wenn dir ein nachhaltigerer Tarif wichtig ist.", "Wenn du Oekostrom mit deinem aktuellen Vertrag vergleichen willst.", "Wenn du neu einziehst und von Anfang an passend waehlen moechtest."],
    },
    tips: {
      ar: ["لا تنظر فقط إلى كلمة أخضر؛ راجع السعر والعقد أيضاً.", "قارن التعرفة السنوية وليس السعر الشهري فقط.", "اسأل نفسك إن كنت تحتاج مرونة أو ثباتاً أطول."],
      de: ["Schau nicht nur auf das Wort Oekostrom, sondern auch auf Preis und Laufzeit.", "Vergleiche die Jahreskosten und nicht nur den Abschlag pro Monat.", "Ueberlege, ob dir Flexibilitaet oder laengere Preisstabilitaet wichtiger ist."],
    },
    examples: {
      ar: ["طالب يريد خياراً بسيطاً وسعراً واضحاً.", "عائلة تفضل الكهرباء الخضراء إذا كان الفرق السعري مناسباً.", "شخص يريد تغيير المزود دون تعقيد."],
      de: ["Ein Student moechte einen einfachen Tarif mit klarem Preis.", "Eine Familie bevorzugt Oekostrom, wenn der Preisunterschied ueberschaubar bleibt.", "Jemand moechte unkompliziert den Anbieter wechseln."],
    },
    faq: {
      ar: [
        { question: "هل أوكوستروم دائماً أغلى؟", answer: "ليس دائماً. أحياناً تكون الأسعار قريبة جداً أو حتى منافسة." },
        { question: "هل أحتاج إجراء خاص للتبديل؟", answer: "عادة لا، فالإجراءات تشبه تبديل أي مزود كهرباء." },
        { question: "هل تنقطع الخدمة؟", answer: "عادة لا يحدث انقطاع عند الانتقال بين المزودين." },
        { question: "كيف أعرف إن كان العرض مناسباً؟", answer: "انظر إلى السعر السنوي ومدة العقد وشروط الإلغاء." },
      ],
      de: [
        { question: "Ist Oekostrom immer teurer?", answer: "Nein. Teilweise liegen die Preise sehr nah beieinander oder sind sogar konkurrenzfaehig." },
        { question: "Brauche ich fuer den Wechsel etwas Besonderes?", answer: "Meist nicht. Der Ablauf ist aehnlich wie bei jedem anderen Stromwechsel." },
        { question: "Kommt es zu einer Unterbrechung?", answer: "Normalerweise nicht." },
        { question: "Woran erkenne ich ein passendes Angebot?", answer: "Achte auf Jahrespreis, Vertragsdauer und Kuendigungsbedingungen." },
      ],
    },
    infoBox: {
      ar: {
        title: "متى أختار الكهرباء الخضراء؟",
        body: [
          "اختر الكهرباء الخضراء إذا كنت تريد أن تبدأ المقارنة من عروض تركز على الطاقة المتجددة مباشرة.",
          "إذا كنت تريد نظرة أوسع على السوق كله، فابدأ بصفحة الكهرباء العادية ثم قارن بعدها مع صفحة الكهرباء الخضراء.",
          "عادةً القرار النهائي يكون بين ثلاثة عناصر: السعر، نوع التعرفة، ومدة العقد.",
        ],
      },
      de: {
        title: "Wann ist Oekostrom die bessere Startseite?",
        body: [
          "Oekostrom ist passend, wenn du direkt mit Tarifen aus dem Bereich erneuerbare Energie starten willst.",
          "Wenn du zuerst den breiten Markt sehen willst, starte mit Strom und vergleiche danach mit Oekostrom.",
          "Am Ende geht es meistens um Preis, Tarifart und Vertragslaufzeit.",
        ],
      },
    },
    usageGuide: {
      ar: {
        title: "كيف تستخدم أداة مقارنة الكهرباء الخضراء؟",
        steps: [
          "أدخل الرمز البريدي حتى تظهر لك عروض أوكوستروم المتاحة في منطقتك.",
          "أدخل الاستهلاك السنوي إذا كنت تعرفه، أو استخدم رقماً تقريبياً إذا كانت هذه أول مرة تقارن فيها.",
          "بعد ظهور النتائج، راجع السعر السنوي ومدة العقد ثم قارنها مع فكرة التعرفة الخضراء المناسبة لك.",
          "إذا وجدت عرضين متشابهين، اختر العرض الذي يوازن بين السعر والشروط بشكل أوضح لك.",
        ],
        note: "الفكرة هنا ليست فقط أن يكون العرض أخضر، بل أن يكون مناسباً أيضاً من ناحية السعر والعقد.",
      },
      de: {
        title: "Wie nutzt du das Oekostrom-Vergleichstool?",
        steps: [
          "Gib deine Postleitzahl ein, damit Oekostrom-Tarife fuer deine Region angezeigt werden.",
          "Nutze deinen Jahresverbrauch, falls du ihn kennst, oder eine realistische Schaetzung.",
          "Vergleiche nach dem Laden der Ergebnisse vor allem Jahrespreis, Laufzeit und Tarifbedingungen.",
          "Wenn zwei Angebote nah beieinander liegen, waehle das klarere Gesamtpaket aus Preis und Bedingungen.",
        ],
        note: "Nicht nur die Oeko-Kennzeichnung ist wichtig, sondern auch der Tarif selbst.",
      },
    },
    seo: {
      ar: {
        title: "مقارنة الكهرباء الخضراء في ألمانيا | ArabVergleich",
        description: "تعرف على عروض الكهرباء الخضراء في ألمانيا وقارن بينها بلغة بسيطة وواضحة.",
      },
      de: {
        title: "Oekostrom vergleichen | ArabVergleich",
        description: "Vergleiche Oekostrom-Angebote in Deutschland einfach und verstaendlich.",
      },
    },
  },
  gas: {
    slug: "gas",
    icon: "Flame",
    toolKeys: ["gasCalculator"],
    ctaLabel: { ar: "ابدأ المقارنة", de: "Vergleich starten" },
    title: { ar: "الغاز", de: "Gas" },
    shortDescription: {
      ar: "فهم بسيط لعقود الغاز المنزلية وكيف تختار بين السعر والمرونة.",
      de: "Einfach erklaert: Gastarife fuer zuhause zwischen Preis und Flexibilitaet.",
    },
    heroTitle: { ar: "مقارنة الغاز في ألمانيا", de: "Gas in Deutschland vergleichen" },
    heroDescription: {
      ar: "خاصة في الشتاء، قد يكون عقد الغاز مناسباً أو مكلفاً جداً حسب المنزل والاستهلاك. هنا نبدأ من الأساس.",
      de: "Gerade im Winter kann der Gastarif einen grossen Unterschied machen. Hier findest du die Grundlagen in einfacher Sprache.",
    },
    whenYouNeedIt: {
      ar: ["إذا كان لديك تدفئة غاز.", "عند الانتقال إلى منزل جديد.", "إذا أردت تخفيف التكاليف السنوية."],
      de: ["Wenn deine Wohnung oder dein Haus mit Gas beheizt wird.", "Beim Umzug.", "Wenn du deine Jahreskosten senken moechtest."],
    },
    tips: {
      ar: ["راجع الاستهلاك السابق إن وجد.", "قارن مدة السعر الثابت.", "انتبه لرسوم الإلغاء أو التجديد التلقائي."],
      de: ["Nutze moeglichst den frueheren Verbrauchswert.", "Vergleiche die Dauer der Preisgarantie.", "Achte auf Kuendigung und automatische Verlaengerung."],
    },
    examples: {
      ar: ["شخص يسكن وحده في شقة صغيرة.", "عائلة في منزل أكبر وتستهلك كثيراً في الشتاء.", "شخص يريد تغيير المزود لأول مرة."],
      de: ["Eine Person lebt allein in einer kleinen Wohnung.", "Eine Familie wohnt groesser und verbraucht im Winter deutlich mehr.", "Jemand wechselt den Anbieter zum ersten Mal."],
    },
    faq: {
      ar: [
        { question: "هل الغاز مناسب لكل منزل؟", answer: "يعتمد على نظام التدفئة الموجود لديك." },
        { question: "كيف أعرف الاستهلاك السنوي؟", answer: "يمكنك غالباً إيجاده في الفاتورة السابقة أو التقدير حسب حجم المنزل." },
        { question: "هل التبديل معقد؟", answer: "عادة لا، لكن تأكد من البيانات الصحيحة ورقم العداد." },
        { question: "هل السعر الأرخص هو الأفضل دائماً؟", answer: "ليس دائماً. انظر أيضاً للعقد والخدمة والشروط." },
      ],
      de: [
        { question: "Ist Gas fuer jede Wohnung relevant?", answer: "Nur wenn deine Heizung oder Warmwasser ueber Gas laeuft." },
        { question: "Wo finde ich den Jahresverbrauch?", answer: "Oft auf der letzten Abrechnung oder als Schaetzung nach Wohnflaeche und Haushaltsgroesse." },
        { question: "Ist der Wechsel kompliziert?", answer: "Meist nicht, aber Zaehlerdaten und Adresse muessen stimmen." },
        { question: "Ist der billigste Tarif immer der beste?", answer: "Nicht unbedingt. Laufzeit, Service und Bedingungen sind genauso wichtig." },
      ],
    },
    usageGuide: {
      ar: {
        title: "كيف تستخدم أداة مقارنة الغاز؟",
        steps: [
          "أدخل الرمز البريدي أولاً لأن أسعار الغاز تختلف حسب المنطقة.",
          "إذا كان لديك استهلاك سابق من فاتورة قديمة فاستعمله، وإذا لم يكن لديك استخدم تقديراً قريباً من حجم السكن.",
          "بعد ظهور النتائج، راجع السعر السنوي ومدة العقد وضمان السعر وليس السعر الشهري فقط.",
          "إذا كنت ستبدل مزودك، حضّر بيانات العنوان ورقم العداد حتى تكون المقارنة أوضح لاحقاً.",
        ],
        note: "إذا كنت غير متأكد من الاستهلاك، لا مشكلة، المهم أن يكون التقدير قريباً قدر الإمكان.",
      },
      de: {
        title: "Wie nutzt du das Gas-Vergleichstool?",
        steps: [
          "Gib zuerst deine Postleitzahl ein, weil Gastarife je nach Region unterschiedlich sind.",
          "Nutze deinen bisherigen Verbrauch aus einer alten Abrechnung oder eine passende Schaetzung nach Wohnsituation.",
          "Achte nach den Ergebnissen auf Jahrespreis, Laufzeit und Preisgarantie statt nur auf den Monatswert.",
          "Wenn du wechseln willst, halte Adresse und Zaehlerdaten griffbereit, damit spaeter alles leichter ist.",
        ],
        note: "Auch eine gute Schaetzung ist fuer den ersten Vergleich bereits hilfreich.",
      },
    },
    seo: {
      ar: {
        title: "مقارنة الغاز في ألمانيا بالعربي | ArabVergleich",
        description: "قارن عقود الغاز في ألمانيا وتعرف على أهم النقاط قبل اختيار مزود جديد.",
      },
      de: {
        title: "Gas in Deutschland vergleichen | ArabVergleich",
        description: "Vergleiche Gastarife in Deutschland und verstehe die wichtigsten Punkte vor dem Wechsel.",
      },
    },
  },
  mobilfunk: {
    slug: "mobilfunk",
    icon: "Phone",
    toolKeys: ["mobilfunkCalculator"],
    ctaLabel: { ar: "ابدأ المقارنة", de: "Vergleich starten" },
    title: { ar: "الموبايل", de: "Mobilfunk" },
    shortDescription: {
      ar: "اختر عقد موبايل أو شريحة مناسبة حسب البيانات، المكالمات ومدة الالتزام.",
      de: "Finde einen passenden Mobilfunktarif nach Datenvolumen, Telefonie und Laufzeit.",
    },
    heroTitle: { ar: "مقارنة عقود الموبايل في ألمانيا", de: "Mobilfunktarife in Deutschland vergleichen" },
    heroDescription: {
      ar: "إذا كنت تحتاج إنترنت أكثر على الهاتف أو تريد تخفيض التكلفة الشهرية، فابدأ بالمقارنة بعد فهم احتياجك الحقيقي.",
      de: "Wenn du mehr Daten brauchst oder monatlich sparen willst, lohnt sich zuerst ein klarer Blick auf deinen echten Bedarf.",
    },
    whenYouNeedIt: {
      ar: ["عند الوصول الجديد إلى ألمانيا.", "إذا كان عقدك الحالي مكلفاً.", "إذا كنت تحتاج بيانات أكثر أو أقل."],
      de: ["Wenn du neu in Deutschland bist.", "Wenn dein aktueller Vertrag teuer ist.", "Wenn du mehr oder weniger Datenvolumen brauchst."],
    },
    tips: {
      ar: ["لا تدفع على بيانات لا تستخدمها.", "انتبه لمدة العقد وإمكانية الإلغاء.", "تحقق من الشبكة المناسبة لمنطقتك."],
      de: ["Bezahle nicht fuer Datenvolumen, das du kaum nutzt.", "Achte auf Laufzeit und Kuendigungsmoeglichkeiten.", "Pruefe, welches Netz in deiner Region gut funktioniert."],
    },
    examples: {
      ar: ["طالب يحتاج بيانات كثيرة للتنقل.", "شخص يستخدم الهاتف للمكالمات فقط تقريباً.", "عائلة تريد أرقاماً متعددة بتكلفة أفضل."],
      de: ["Ein Student braucht viel Datenvolumen unterwegs.", "Jemand telefoniert fast nur und nutzt wenig Internet.", "Eine Familie moechte mehrere Nummern guenstig organisieren."],
    },
    faq: {
      ar: [
        { question: "هل أختار عقداً أم شريحة مسبقة الدفع؟", answer: "يعتمد على الاستخدام والاستقرار. المسبق مناسب للمرونة، والعقد قد يكون أوفر لبعض الاستخدامات." },
        { question: "ما معنى البيانات GB؟", answer: "هي كمية الإنترنت التي يمكنك استخدامها شهرياً." },
        { question: "هل يمكن الاحتفاظ برقمي؟", answer: "في كثير من الحالات نعم عبر نقل الرقم." },
        { question: "كيف أعرف أن الشبكة جيدة؟", answer: "اسأل في منطقتك أو راجع تغطية الشبكة قبل التوقيع." },
      ],
      de: [
        { question: "Vertrag oder Prepaid?", answer: "Das haengt von deinem Alltag ab. Prepaid ist flexibler, ein Vertrag kann bei regelmaessiger Nutzung guenstiger sein." },
        { question: "Was bedeutet GB?", answer: "Das ist dein monatliches Datenvolumen fuer mobiles Internet." },
        { question: "Kann ich meine Nummer behalten?", answer: "In vielen Faellen ja, ueber eine Rufnummernmitnahme." },
        { question: "Wie erkenne ich ein gutes Netz?", answer: "Frage im Umfeld nach oder pruefe die Netzabdeckung in deiner Region." },
      ],
    },
    usageGuide: {
      ar: {
        title: "كيف تستخدم أداة مقارنة الموبايل؟",
        steps: [
          "فكر أولاً: هل تحتاج بيانات كثيرة أم أنك تستخدم الهاتف للمكالمات أكثر؟",
          "بعد فتح الأداة، قارن بين حجم البيانات، مدة العقد، وإمكانية الاحتفاظ برقمك الحالي.",
          "إذا كنت لا تريد التزاماً طويلاً، انتبه جيداً لمدة العقد قبل اختيار العرض.",
          "اختر العرض الذي يناسب استخدامك الحقيقي، لا العرض الذي يبدو كبيراً فقط.",
        ],
        note: "الشخص الذي يستخدم الواي فاي أغلب الوقت غالباً لا يحتاج باقة بيانات كبيرة جداً.",
      },
      de: {
        title: "Wie nutzt du das Mobilfunk-Vergleichstool?",
        steps: [
          "Ueberlege zuerst, ob du vor allem viel Datenvolumen oder eher Telefonie brauchst.",
          "Vergleiche dann Datenmenge, Laufzeit und moegliche Rufnummernmitnahme.",
          "Wenn du flexibel bleiben willst, achte besonders auf die Vertragsdauer.",
          "Wähle am Ende den Tarif, der zu deinem echten Alltag passt, nicht nur den groessten Tarif.",
        ],
        note: "Wer meist im WLAN ist, braucht oft kein sehr grosses Datenpaket.",
      },
    },
    seo: {
      ar: {
        title: "مقارنة عقود الموبايل في ألمانيا | ArabVergleich",
        description: "شرح بسيط لعقود الموبايل في ألمانيا ومقارنة العروض حسب البيانات والسعر والمرونة.",
      },
      de: {
        title: "Mobilfunktarife vergleichen | ArabVergleich",
        description: "Vergleiche Mobilfunktarife in Deutschland einfach nach Datenvolumen, Preis und Flexibilitaet.",
      },
    },
  },
  pauschalreise: {
    slug: "pauschalreise",
    icon: "Plane",
    toolKeys: ["pauschalreiseCalculator"],
    ctaLabel: { ar: "ابدأ المقارنة", de: "Vergleich starten" },
    title: { ar: "السفر والعطلات", de: "Pauschalreisen" },
    shortDescription: {
      ar: "قارن باقات السفر والعطلات بطريقة بسيطة قبل الحجز.",
      de: "Vergleiche Pauschalreisen einfach und verstaendlich vor der Buchung.",
    },
    heroTitle: { ar: "مقارنة باقات السفر والعطلات", de: "Pauschalreisen einfach vergleichen" },
    heroDescription: {
      ar: "إذا كنت تبحث عن رحلة مع فندق وطيران معاً، فهذه الصفحة تساعدك على البدء من فكرة واضحة.",
      de: "Wenn du Flug und Hotel zusammen buchen moechtest, findest du hier einen einfachen Einstieg.",
    },
    whenYouNeedIt: {
      ar: ["عند التخطيط لإجازة عائلية.", "إذا كنت تريد مقارنة السعر والخدمات معاً.", "عند الرغبة في حجز أبسط وبخطوات أقل."],
      de: ["Bei der Planung eines Familienurlaubs.", "Wenn du Preis und Leistung zusammen vergleichen willst.", "Wenn du moeglichst einfach buchen moechtest."],
    },
    tips: {
      ar: ["راجع سياسة الإلغاء.", "انتبه لما إذا كان النقل أو الطعام مشمولين.", "قارن المواعيد بمرونة إن كان السفر غير ثابت."],
      de: ["Pruefe die Stornobedingungen.", "Achte darauf, ob Transfer oder Verpflegung enthalten sind.", "Vergleiche flexible Reisedaten, wenn du nicht festgelegt bist."],
    },
    examples: {
      ar: ["عائلة تبحث عن إجازة صيفية واضحة الميزانية.", "زوجان يريدان رحلة قصيرة بدون تعقيد.", "شخص يريد مقارنة أكثر من وجهة بسرعة."],
      de: ["Eine Familie sucht einen Sommerurlaub mit klar kalkulierbarem Budget.", "Ein Paar moechte eine kurze Auszeit ohne viel Organisationsaufwand.", "Jemand will mehrere Reiseziele schnell gegenueberstellen."],
    },
    faq: {
      ar: [
        { question: "ما معنى Pauschalreise؟", answer: "غالباً تعني باقة تشمل عدة عناصر مثل الطيران والفندق معاً." },
        { question: "هل هي دائماً أوفر؟", answer: "ليس دائماً، لكنها قد تكون أسهل في التنظيم لبعض الناس." },
        { question: "هل يمكن الإلغاء بسهولة؟", answer: "يعتمد ذلك على شروط العرض، لذلك اقرأها قبل الحجز." },
        { question: "هل هذه الصفحة تقوم بالحجز؟", answer: "لا. هي تساعدك على الوصول إلى أداة المقارنة المناسبة." },
      ],
      de: [
        { question: "Was ist eine Pauschalreise?", answer: "Meist sind mehrere Reiseleistungen wie Flug und Hotel zusammengebuendelt." },
        { question: "Ist das immer guenstiger?", answer: "Nicht immer, aber oft einfacher in der Organisation." },
        { question: "Kann ich leicht stornieren?", answer: "Das haengt von den Bedingungen des Angebots ab." },
        { question: "Buche ich direkt auf dieser Seite?", answer: "Nein. Die Seite fuehrt dich zum passenden Vergleichstool." },
      ],
    },
    usageGuide: {
      ar: {
        title: "كيف تستخدم أداة مقارنة السفر والعطلات؟",
        steps: [
          "ابدأ بتحديد وجهة السفر أو الفترة التقريبية التي تناسبك.",
          "بعد ظهور العروض، راجع هل السعر يشمل الفندق والطيران فقط أم توجد خدمات إضافية أيضاً.",
          "قارن بين أكثر من عرض من حيث التقييم، الإلغاء، والموقع قبل الحجز.",
          "إذا كانت التواريخ مرنة لديك، جرّب أكثر من تاريخ لأن السعر قد يختلف كثيراً.",
        ],
        note: "أحياناً فرق يوم أو يومين فقط يغيّر السعر بشكل واضح.",
      },
      de: {
        title: "Wie nutzt du das Pauschalreisen-Vergleichstool?",
        steps: [
          "Starte mit Reiseziel oder einem passenden Reisezeitraum.",
          "Pruefe danach, ob der Preis nur Flug und Hotel oder weitere Leistungen enthaelt.",
          "Vergleiche mehrere Angebote nach Bewertung, Stornierung und Lage.",
          "Wenn du flexibel bist, teste verschiedene Reisedaten, weil sich Preise stark aendern koennen.",
        ],
        note: "Schon ein kleiner Datumswechsel kann einen grossen Preisunterschied machen.",
      },
    },
    seo: {
      ar: {
        title: "مقارنة السفر والعطلات | ArabVergleich",
        description: "ابدأ مقارنة باقات السفر والعطلات بطريقة بسيطة وواضحة قبل الحجز.",
      },
      de: {
        title: "Pauschalreisen vergleichen | ArabVergleich",
        description: "Vergleiche Pauschalreisen einfach und klar vor der Buchung.",
      },
    },
  },
  mietwagen: {
    slug: "mietwagen",
    icon: "Car",
    toolKeys: ["mietwagenCalculator"],
    ctaLabel: { ar: "ابدأ المقارنة", de: "Vergleich starten" },
    title: { ar: "تأجير السيارات", de: "Mietwagen" },
    shortDescription: {
      ar: "اختر سيارة مناسبة للسفر أو العمل مع فهم التأمين والشروط الأساسية.",
      de: "Finde einen passenden Mietwagen und verstehe wichtige Bedingungen wie Versicherung und Abholung.",
    },
    heroTitle: { ar: "مقارنة تأجير السيارات", de: "Mietwagen einfach vergleichen" },
    heroDescription: {
      ar: "إذا كنت مسافراً أو تحتاج سيارة مؤقتة، فابدأ بفهم الفروق المهمة قبل الحجز.",
      de: "Wenn du fuer eine Reise oder kurzfristig ein Auto brauchst, helfen dir diese Hinweise vor dem Vergleich.",
    },
    whenYouNeedIt: {
      ar: ["عند السفر داخل أو خارج ألمانيا.", "إذا كنت تحتاج سيارة لبضعة أيام.", "عند مقارنة السعر مع التأمين والشروط."],
      de: ["Bei Reisen innerhalb oder ausserhalb Deutschlands.", "Wenn du fuer ein paar Tage ein Auto brauchst.", "Wenn du Preis, Versicherung und Bedingungen zusammen vergleichen willst."],
    },
    tips: {
      ar: ["تحقق من التأمين ونسبة التحمل.", "راجع سياسة الوقود والاستلام.", "تأكد من عمر السائق والشروط الإضافية."],
      de: ["Pruefe Versicherung und Selbstbeteiligung.", "Achte auf Tankregelung und Abholort.", "Beachte Altersgrenzen und moegliche Zusatzgebuehren."],
    },
    examples: {
      ar: ["عائلة تحتاج سيارة في عطلة الصيف.", "طالب يريد سيارة ليومين عند الانتقال.", "شخص يريد استلام السيارة من المطار مباشرة."],
      de: ["Eine Familie braucht ein Auto fuer den Sommerurlaub.", "Ein Student moechte fuer zwei Tage ein Fahrzeug beim Umzug.", "Jemand will den Wagen direkt am Flughafen abholen."],
    },
    faq: {
      ar: [
        { question: "هل التأمين مشمول دائماً؟", answer: "ليس بنفس المستوى في كل عرض، لذلك اقرأ التفاصيل." },
        { question: "ما معنى Selbstbeteiligung؟", answer: "هو المبلغ الذي قد تتحمله بنفسك عند وقوع ضرر." },
        { question: "هل يمكن الاستلام من المطار؟", answer: "في كثير من الحالات نعم، حسب المدينة والعرض." },
        { question: "هل الأرخص هو الأفضل؟", answer: "ليس دائماً. راجع التأمين والشروط قبل الحجز." },
      ],
      de: [
        { question: "Ist Versicherung immer enthalten?", answer: "Oft ja, aber nicht immer im gleichen Umfang." },
        { question: "Was bedeutet Selbstbeteiligung?", answer: "Das ist der Anteil, den du im Schadensfall selbst zahlst." },
        { question: "Kann ich am Flughafen abholen?", answer: "In vielen Faellen ja, je nach Ort und Angebot." },
        { question: "Ist das billigste Angebot das beste?", answer: "Nicht unbedingt. Pruefe immer auch Schutz und Bedingungen." },
      ],
    },
    usageGuide: {
      ar: {
        title: "كيف تستخدم أداة مقارنة تأجير السيارات؟",
        steps: [
          "حدد مكان الاستلام وموعد الاستلام والإرجاع بدقة حتى تكون النتائج صحيحة.",
          "بعد ظهور العروض، لا تنظر للسعر فقط، بل راجع التأمين ونسبة التحمل وسياسة الوقود.",
          "إذا كنت مسافراً مع عائلة أو حقائب كثيرة، تأكد من حجم السيارة قبل الاختيار.",
          "قارن بين عرضين أو ثلاثة ثم اختر العرض الذي يوضح الشروط بشكل أفضل.",
        ],
        note: "العرض الأرخص قد لا يكون الأفضل إذا كان التأمين أضعف أو الشروط أصعب.",
      },
      de: {
        title: "Wie nutzt du das Mietwagen-Vergleichstool?",
        steps: [
          "Waehle Abholort sowie Abhol- und Rueckgabezeit moeglichst genau aus.",
          "Achte nach den Ergebnissen nicht nur auf den Preis, sondern auch auf Versicherung, Selbstbeteiligung und Tankregelung.",
          "Wenn du mit Familie oder viel Gepaeck reist, pruefe die Fahrzeuggroesse sorgfaeltig.",
          "Vergleiche zwei oder drei passende Angebote und entscheide dich fuer das klarste Gesamtpaket.",
        ],
        note: "Das billigste Angebot ist nicht immer das sinnvollste, wenn Bedingungen oder Schutz schwach sind.",
      },
    },
    seo: {
      ar: {
        title: "مقارنة تأجير السيارات | ArabVergleich",
        description: "قارن عروض تأجير السيارات وافهم التأمين والشروط قبل الحجز.",
      },
      de: {
        title: "Mietwagen vergleichen | ArabVergleich",
        description: "Vergleiche Mietwagenangebote und verstehe Versicherung und Bedingungen vor der Buchung.",
      },
    },
  },
  "c24-bank": {
    slug: "c24-bank",
    icon: "Banknote",
    toolKeys: ["c24BankLink"],
    ctaLabel: { ar: "فتح حساب C24 الآن", de: "C24 Konto eroeffnen" },
    title: { ar: "C24 Bank", de: "C24 Bank" },
    shortDescription: {
      ar: "شرح مبسط لمتى قد يكون الحساب البنكي الرقمي مناسباً لك في ألمانيا.",
      de: "Einfache Einordnung, wann ein digitales Bankkonto fuer deinen Alltag in Deutschland passen kann.",
    },
    heroTitle: { ar: "فتح حساب C24 Bank في ألمانيا", de: "C24 Bank fuer Deutschland verstehen" },
    heroDescription: {
      ar: "إذا كنت تبحث عن حساب رقمي سهل الفتح والإدارة، فابدأ هنا لفهم الفكرة قبل الضغط على الرابط.",
      de: "Wenn du ein digitales Konto suchst, bekommst du hier zuerst eine einfache Orientierung.",
    },
    whenYouNeedIt: {
      ar: ["عند الوصول الجديد إلى ألمانيا.", "إذا كنت تريد حساباً أونلاين بسيطاً.", "إذا كنت تريد إدارة الحساب من الهاتف."],
      de: ["Wenn du neu in Deutschland bist.", "Wenn du ein einfaches Online-Konto suchst.", "Wenn du dein Konto vor allem per App verwalten willst."],
    },
    tips: {
      ar: ["راجع الرسوم الفعلية والخدمات المشمولة.", "تأكد من المستندات المطلوبة لفتح الحساب.", "اسأل نفسك هل تحتاج فرعاً فعلياً أم يكفيك التطبيق."],
      de: ["Pruefe echte Kosten und enthaltene Leistungen.", "Achte auf die benoetigten Unterlagen fuer die Kontoeroeffnung.", "Ueberlege, ob du eine Filiale brauchst oder dir eine App reicht."],
    },
    examples: {
      ar: ["طالب يريد حساباً لإدارة المصاريف اليومية.", "شخص جديد في ألمانيا يحتاج حساباً سريعاً.", "عائلة تريد حساباً إضافياً للاستخدام الرقمي."],
      de: ["Ein Student moechte seine Alltagsausgaben einfach verwalten.", "Jemand ist neu in Deutschland und braucht schnell ein Konto.", "Eine Familie sucht ein zusaetzliches digitales Konto."],
    },
    faq: {
      ar: [
        { question: "هل الحساب مناسب للجميع؟", answer: "ليس بالضرورة. يعتمد ذلك على حاجتك للسحب، الفروع، والبطاقات والخدمات." },
        { question: "هل أحتاج وثائق ألمانية كثيرة؟", answer: "يعتمد على متطلبات الجهة المقدمة للحساب وقت التقديم." },
        { question: "هل التقديم يتم هنا؟", answer: "لا، التقديم يتم عبر الرابط الخارجي الرسمي للشريك." },
        { question: "هل الحساب الرقمي يكفي للحياة اليومية؟", answer: "يكفي لكثير من الناس، لكن البعض يفضل بنكاً له فروع أيضاً." },
      ],
      de: [
        { question: "Ist das Konto fuer alle passend?", answer: "Nicht unbedingt. Das haengt davon ab, ob du Filialen, Bargeld oder besondere Leistungen brauchst." },
        { question: "Brauche ich viele deutsche Unterlagen?", answer: "Das richtet sich nach den aktuellen Anforderungen bei der Antragstellung." },
        { question: "Stelle ich den Antrag hier?", answer: "Nein, der Antrag erfolgt ueber den externen Partnerlink." },
        { question: "Reicht ein digitales Konto im Alltag?", answer: "Fuer viele ja, andere bevorzugen zusaetzlich eine Bank mit Filiale." },
      ],
    },
    seo: {
      ar: {
        title: "فتح حساب C24 Bank في ألمانيا | ArabVergleich",
        description: "شرح مبسط لحساب C24 Bank ومتى يمكن أن يكون مناسباً للمقيمين في ألمانيا.",
      },
      de: {
        title: "C24 Bank Konto in Deutschland | ArabVergleich",
        description: "Einfache Einordnung zum C24 Bank Konto und wann es fuer Menschen in Deutschland passend sein kann.",
      },
    },
  },
};

export const homeServiceCards = serviceOrder.map((slug) => services[slug]);

export const legalPageContent = {
  impressum: {
    seo: {
      ar: {
        title: "Impressum | ArabVergleich",
        description: "Impressum Platzhalter mit Hinweisen fuer ArabVergleich.",
      },
      de: {
        title: "Impressum | ArabVergleich",
        description: "Impressum Platzhalter fuer ArabVergleich mit CHECK24 Partnerhinweis.",
      },
    },
  },
  datenschutz: {
    seo: {
      ar: {
        title: "Datenschutz | ArabVergleich",
        description: "Datenschutz Platzhalter fuer ArabVergleich mit Hinweisen zu Cookies und Partnerlinks.",
      },
      de: {
        title: "Datenschutzerklaerung | ArabVergleich",
        description: "Einfache Datenschutzerklaerung als Platzhalter fuer ArabVergleich.",
      },
    },
  },
  "ueber-uns": {
    seo: {
      ar: {
        title: "من نحن | ArabVergleich",
        description: "تعرف على فكرة ArabVergleich ودوره كموقع مستقل للمقارنة والشرح.",
      },
      de: {
        title: "Ueber uns | ArabVergleich",
        description: "Lerne ArabVergleich als unabhaengiges Informations- und Vergleichsportal kennen.",
      },
    },
  },
} as const;

export function getAffiliateHtml(toolKey: AffiliateToolKey) {
  return affiliateTools[toolKey];
}
