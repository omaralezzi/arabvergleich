import { affiliateTools, type AffiliateToolKey } from "@/src/config/affiliateTools";
import { type Locale, type ServiceSlug } from "@/src/config/site";

type ToolKind = "calculator" | "form" | "link";

type LocalizedText = Record<Locale, string>;

type ServiceSeed = {
  slug: ServiceSlug;
  categorySlug: ServiceCategorySlug;
  icon: string;
  toolKeys: AffiliateToolKey[];
  toolKind: ToolKind;
  title: LocalizedText;
  shortDescription: LocalizedText;
};

type ServiceWikiOverride = Partial<
  Pick<
    ServicePageData,
    "ctaLabel" | "heroTitle" | "heroDescription" | "whenYouNeedIt" | "tips" | "examples" | "faq" | "usageGuide" | "infoBox" | "seo"
  >
>;

export type ServicePageData = ServiceSeed & {
  ctaLabel: LocalizedText;
  heroTitle: LocalizedText;
  heroDescription: LocalizedText;
  whenYouNeedIt: Record<Locale, string[]>;
  tips: Record<Locale, string[]>;
  examples: Record<Locale, string[]>;
  faq: Record<Locale, { question: string; answer: string }[]>;
  usageGuide: Record<Locale, { title: string; steps: string[]; note: string }>;
  infoBox?: Record<Locale, { title: string; body: string[] }>;
  seo: Record<Locale, { title: string; description: string }>;
};

export type ServiceCategorySlug =
  | "energie"
  | "kfz"
  | "vorsorge"
  | "gesundheit"
  | "sach"
  | "finanzen"
  | "alltag";

export type ServiceCategory = {
  slug: ServiceCategorySlug;
  icon: string;
  title: LocalizedText;
  description: LocalizedText;
  serviceSlugs: ServiceSlug[];
};

const categoryDefinitions: ServiceCategory[] = [
  {
    slug: "energie",
    icon: "Sun",
    title: {
      ar: "الطاقة والسكن",
      de: "Energie und Zuhause",
    },
    description: {
      ar: "خدمات الكهرباء والغاز والطاقة الشمسية لتسهيل المقارنة من أول خطوة.",
      de: "Vergleiche rund um Strom, Gas und Solarloesungen in einer klaren Struktur.",
    },
    serviceSlugs: ["solar", "strom", "oekostrom", "gas"],
  },
  {
    slug: "kfz",
    icon: "Car",
    title: {
      ar: "السيارات والتنقل",
      de: "Auto und Mobilitaet",
    },
    description: {
      ar: "كل ما يتعلق بتأمين السيارة والدراجة النارية ضمن قسم واحد سهل الوصول.",
      de: "Kfz- und Motorradvergleiche an einem Ort, damit Nutzer schneller zum passenden Bereich kommen.",
    },
    serviceSlugs: ["kfz-versicherung", "motorrad"],
  },
  {
    slug: "vorsorge",
    icon: "Heart",
    title: {
      ar: "التقاعد والحماية المستقبلية",
      de: "Vorsorge und Zukunftsschutz",
    },
    description: {
      ar: "خيارات الادخار والحماية الطويلة الأمد بطريقة مفهومة وبسيطة.",
      de: "Altersvorsorge und Absicherung in einer leicht verstaendlichen Navigation.",
    },
    serviceSlugs: ["rente", "berufsunfaehigkeit", "leben", "unfall", "riester-rente", "risikoleben", "ruerup-rente", "pflegezusatz"],
  },
  {
    slug: "gesundheit",
    icon: "Shield",
    title: {
      ar: "التأمين الصحي",
      de: "Krankenversicherungen",
    },
    description: {
      ar: "من التأمين الصحي الخاص حتى التأمينات الإضافية ضمن قسم واحد مرتب.",
      de: "Private Krankenversicherung und Zusatzbausteine sauber nach Zielgruppe sortiert.",
    },
    serviceSlugs: ["pkv-vollversicherung", "pkv-beamte", "krankenzusatz", "pkv-studenten", "pkv-ue55"],
  },
  {
    slug: "sach",
    icon: "Home",
    title: {
      ar: "التأمينات اليومية والممتلكات",
      de: "Sachversicherungen",
    },
    description: {
      ar: "التأمينات المهمة للحياة اليومية والمنزل والأعمال الصغيرة.",
      de: "Alltags- und Sachversicherungen fuer Privatpersonen, Immobilien und kleine Unternehmen.",
    },
    serviceSlugs: [
      "hundekrankenversicherung",
      "haftpflicht",
      "hausrat",
      "tierhalter",
      "wohngebaeude",
      "haus-und-grundbesitz",
      "rechtsschutz",
      "firmen",
    ],
  },
  {
    slug: "finanzen",
    icon: "Banknote",
    title: {
      ar: "المال والحسابات",
      de: "Finanzen",
    },
    description: {
      ar: "الحسابات البنكية والتمويل والقروض وبطاقات الائتمان ضمن هيكل واضح وسريع.",
      de: "Konten, Kredite und Finanzierung in einer Struktur, die direkt zur gesuchten Loesung fuehrt.",
    },
    serviceSlugs: ["girokonto", "baufinanzierung", "kredit", "kreditkarte", "c24-bank"],
  },
  {
    slug: "alltag",
    icon: "WiFi",
    title: {
      ar: "الإنترنت والموبايل والسفر",
      de: "Alltag, Internet und Reisen",
    },
    description: {
      ar: "الإنترنت والموبايل والسفر وتأجير السيارات ضمن قسم عملي وسهل الاستخدام.",
      de: "Internet, Mobilfunk, Reisen und Mietwagen gebuendelt fuer einen schnelleren Einstieg.",
    },
    serviceSlugs: ["dsl", "mobilfunk", "pauschalreise", "mietwagen"],
  },
];

const calculatorGuide = {
  ar: {
    title: "كيف تستخدم أداة المقارنة؟",
    steps: [
      "ابدأ بالبيانات الأساسية المطلوبة حتى تظهر لك النتائج المناسبة لوضعك.",
      "راجع الفلاتر أو الخيارات الظاهرة وعدلها فقط عند الحاجة حتى لا تتشتت.",
      "قارن بين السعر والشروط ومدة الالتزام، ولا تعتمد على أول نتيجة فقط.",
      "عندما تجد عرضاً مناسباً، افتح التفاصيل ثم أكمل الطلب عبر الجهة الرسمية.",
    ],
    note: "الأفضل دائماً مقارنة أكثر من نتيجة واحدة قبل اتخاذ القرار النهائي.",
  },
  de: {
    title: "Wie nutzt du dieses Vergleichstool?",
    steps: [
      "Starte mit den wichtigsten Angaben, damit passende Ergebnisse fuer deine Situation geladen werden.",
      "Nutze Filter und Optionen nur gezielt, damit die Auswahl klar und uebersichtlich bleibt.",
      "Vergleiche Preis, Bedingungen und Laufzeit zusammen und nicht nur die erste Zeile der Liste.",
      "Wenn ein Angebot passt, oeffne die Details und fuehre den Antrag beim offiziellen Partner weiter.",
    ],
    note: "Vergleiche nach Moeglichkeit immer mehrere passende Ergebnisse vor der finalen Auswahl.",
  },
} as const;

const formGuide = {
  ar: {
    title: "كيف تستخدم هذا النموذج؟",
    steps: [
      "جهز البيانات المهمة مسبقاً مثل الرمز البريدي أو المعلومات الشخصية أو تفاصيل العقد الحالي.",
      "املأ الحقول خطوة خطوة ولا تنتقل للمرحلة التالية قبل مراجعة المعلومات.",
      "إذا ظهر لك أكثر من خيار، ركز على الواضح والمناسب لك بدل متابعة كل احتمال.",
      "بعد الانتهاء، أكمل الطلب من خلال الشريك الرسمي وتحقق من أي شروط إضافية.",
    ],
    note: "إذا لم تكن متأكداً من معلومة معينة، توقف واقرأ الشرح الموجود في نفس الصفحة قبل المتابعة.",
  },
  de: {
    title: "Wie nutzt du dieses Formular?",
    steps: [
      "Bereite die wichtigsten Daten vor, zum Beispiel Postleitzahl, Personendaten oder Angaben zum bestehenden Vertrag.",
      "Fuellen die Felder Schritt fuer Schritt aus und pruefe jede Angabe kurz vor dem Weitergehen.",
      "Wenn mehrere Optionen sichtbar werden, konzentriere dich auf die klaren und passenden Varianten.",
      "Schliesse den Antrag danach beim offiziellen Partner ab und achte auf moegliche Zusatzbedingungen.",
    ],
    note: "Wenn du bei einem Feld unsicher bist, lies zuerst die Erklaerung auf der Seite und gehe dann weiter.",
  },
} as const;

function getGuide(toolKind: ToolKind) {
  return toolKind === "form" ? formGuide : calculatorGuide;
}

const serviceWikiOverrides: Partial<Record<ServiceSlug, ServiceWikiOverride>> = {
  solar: {
    heroTitle: {
      ar: "دليل مبسط للطاقة الشمسية في ألمانيا",
      de: "Solaranlage in Deutschland einfach erklaert",
    },
    heroDescription: {
      ar: "هذه الصفحة تساعدك على فهم متى تكون الطاقة الشمسية منطقية لك، وما هي المعلومات التي يطلبها النموذج قبل متابعة الطلب.",
      de: "Diese Seite hilft dir zu verstehen, wann eine Solaranlage sinnvoll sein kann und welche Angaben das Formular vor dem Absenden braucht.",
    },
    whenYouNeedIt: {
      ar: ["عند التفكير بتقليل فاتورة الكهرباء على المدى الطويل.", "إذا كان لديك بيت أو مبنى وتريد معرفة إن كانت المساحة مناسبة.", "عندما تريد فكرة أولية قبل التواصل مع شركة التركيب."],
      de: ["Wenn du langfristig Stromkosten senken moechtest.", "Wenn du ein Haus oder Gebaeude hast und pruefen willst, ob Solar sinnvoll ist.", "Wenn du vor einem Gespraech mit einem Anbieter zuerst eine einfache Orientierung brauchst."],
    },
    tips: {
      ar: ["جهز معلومات بسيطة عن نوع المبنى وعدد الطوابق أو شكل السطح.", "لا تبدأ بالسعر فقط، بل اسأل أولاً: هل التركيب مناسب تقنياً لمبناك؟", "افهم هل هدفك التوفير الشهري أم الاستثمار طويل المدى."],
      de: ["Halte einfache Angaben zum Gebaeudetyp und zur Dachsituation bereit.", "Starte nicht nur mit dem Preis, sondern zuerst mit der Frage, ob dein Gebaeude technisch geeignet ist.", "Klaere fuer dich, ob es vor allem um monatliche Ersparnis oder langfristige Investition geht."],
    },
    examples: {
      ar: [
        "صاحب بيت يريد معرفة إن كان السطح مناسباً قبل طلب عرض تركيب.",
        "عائلة تريد تقليل فاتورة الكهرباء على المدى الطويل وتحتاج نقطة بداية واضحة.",
        "مستخدم يريد فهماً أولياً قبل أن يتواصل مع شركة الطاقة الشمسية.",
      ],
      de: [
        "Eine Hausbesitzerin moechte erst wissen, ob das Dach grundsaetzlich geeignet ist.",
        "Eine Familie will langfristig Stromkosten senken und braucht einen klaren Einstieg.",
        "Jemand moechte sich zuerst orientieren, bevor ein Anbieter kontaktiert wird.",
      ],
    },
    infoBox: {
      ar: {
        title: "ما الذي يفهمه المستخدم قبل تعبئة نموذج الطاقة الشمسية؟",
        body: [
          "النموذج لا يعطيك قراراً نهائياً فوراً، بل يساعد على جمع معلوماتك الأساسية ليتواصل معك الشريك بعرض أقرب لوضعك.",
          "كلما كانت معلوماتك عن المبنى أوضح، كانت النتيجة الأولية والرد اللاحق أكثر فائدة.",
        ],
      },
      de: {
        title: "Was sollte man vor dem Solaranlagen-Formular verstehen?",
        body: [
          "Das Formular liefert noch keine endgueltige Zusage, sondern sammelt die wichtigsten Eckdaten fuer eine passendere Rueckmeldung vom Partner.",
          "Je klarer deine Angaben zum Gebaeude sind, desto nuetzlicher ist die erste Einschaetzung.",
        ],
      },
    },
  },
  "kfz-versicherung": {
    heroTitle: {
      ar: "كيف تقارن تأمين السيارة في ألمانيا؟",
      de: "Kfz-Versicherung in Deutschland richtig vergleichen",
    },
    heroDescription: {
      ar: "هنا تفهم أولاً متى تقارن، وما الفرق بين تغيير العقد الحالي والتأمين لسيارة جديدة، ثم تنتقل إلى الأداة المناسبة.",
      de: "Hier verstehst du zuerst den Unterschied zwischen Wechsel und Neuversicherung und gehst danach direkt ins passende Vergleichstool.",
    },
    tips: {
      ar: ["إذا كانت السيارة جديدة عليك، جهز بيانات السيارة وتاريخ التسجيل.", "إذا كنت ستغير شركة التأمين، تأكد من موعد الإلغاء أو نهاية العقد الحالي.", "لا تعتمد على السعر فقط، بل راجع قيمة التحمل ونطاق التغطية."],
      de: ["Wenn das Fahrzeug neu fuer dich ist, halte Fahrzeugdaten und Zulassungsinformationen bereit.", "Wenn du wechseln willst, pruefe zuerst Kuendigungsfrist oder Vertragsende.", "Achte nicht nur auf den Preis, sondern auch auf Selbstbeteiligung und Leistungsumfang."],
    },
    faq: {
      ar: [
        { question: "متى أقارن تأمين السيارة؟", answer: "عادة عند شراء سيارة، أو قبل نهاية العقد الحالي، أو إذا ارتفع القسط السنوي عليك." },
        { question: "هل كل عرض رخيص مناسب؟", answer: "ليس دائماً. بعض العروض تكون أرخص لكن بتغطية أضعف أو تحمل أعلى." },
        { question: "ما أول معلومة أجهزها؟", answer: "بيانات السيارة والسائق الأساسي غالباً هي أول ما تحتاجه الأداة." },
      ],
      de: [
        { question: "Wann sollte ich die Kfz-Versicherung vergleichen?", answer: "Typisch beim Fahrzeugkauf, vor Vertragsende oder wenn dein Beitrag deutlich steigt." },
        { question: "Ist jeder guenstige Tarif automatisch gut?", answer: "Nicht unbedingt. Ein niedriger Preis kann auch weniger Leistung oder hoehere Selbstbeteiligung bedeuten." },
        { question: "Welche Angabe ist am wichtigsten zu Beginn?", answer: "Meist brauchst du zuerst die Fahrzeugdaten und Angaben zur Hauptfahrerin oder zum Hauptfahrer." },
      ],
    },
  },
  motorrad: {
    infoBox: {
      ar: {
        title: "ما الفرق بين قسم السيارة وقسم الدراجة النارية؟",
        body: [
          "الدراجة النارية لها أسئلة وشروط مختلفة عن السيارة، لذلك وضعناها في صفحة مستقلة حتى لا يتشتت المستخدم.",
          "إذا كنت تبحث عن تأمين دراجة، الأفضل أن تبدأ هنا مباشرة بدل قسم السيارة العام.",
        ],
      },
      de: {
        title: "Warum ist Motorrad ein eigener Bereich?",
        body: [
          "Motorradversicherungen haben andere Angaben und andere Tariflogik als klassische Kfz-Versicherungen.",
          "Darum ist dieser Bereich bewusst getrennt, damit du direkter zum passenden Vergleich kommst.",
        ],
      },
    },
  },
  rente: {
    heroTitle: {
      ar: "شرح مبسط لفكرة التقاعد والادخار الطويل",
      de: "Rente und langfristige Vorsorge einfach verstehen",
    },
    heroDescription: {
      ar: "هذه الصفحة لا تعطي نصيحة استثمارية، لكنها تشرح لك كيف تبدأ المقارنة بشكل بسيط، وما هي الأسئلة التي تساعدك قبل فتح النموذج.",
      de: "Diese Seite ist keine Anlageberatung, erklaert aber einen einfachen Einstieg und die wichtigsten Fragen vor dem Formular.",
    },
    infoBox: {
      ar: {
        title: "قبل أن تبدأ: ماذا يعني قسم التقاعد هنا؟",
        body: [
          "الفكرة ليست أن تختار منتجاً بسرعة، بل أن تفهم أولاً هل تبحث عن ادخار شهري، حماية مستقبلية، أم منتج له مزايا ضريبية.",
          "كلما عرفت هدفك الشخصي بوضوح، كان ملء النموذج أسهل واختيار العرض أنسب.",
        ],
      },
      de: {
        title: "Was bedeutet dieser Rentenbereich?",
        body: [
          "Es geht hier nicht darum, moeglichst schnell irgendein Produkt auszuwaehlen, sondern zuerst dein Ziel zu verstehen.",
          "Wenn du dein Ziel kennst, wird das Formular einfacher und die spaetere Auswahl sinnvoller.",
        ],
      },
    },
  },
  berufsunfaehigkeit: {
    infoBox: {
      ar: {
        title: "متى يفكر الشخص في تأمين العجز عن العمل؟",
        body: [
          "عندما يعتمد دخله بشكل أساسي على عمله الشهري، ويخشى أن المرض أو الإصابة قد توقفه عن العمل لفترة طويلة.",
          "هذه الصفحة تساعد على فهم الفكرة أولاً، لأن كثيراً من الناس يسمعون الاسم لكن لا يفهمون متى يكون مهماً فعلاً.",
        ],
      },
      de: {
        title: "Wann wird Berufsunfaehigkeit wichtig?",
        body: [
          "Wenn dein Einkommen stark von deiner Arbeitsfaehigkeit abhaengt und eine laengere Erkrankung grosse Folgen haette.",
          "Viele kennen den Begriff, aber nicht den praktischen Hintergrund. Genau dabei hilft diese Seite zuerst.",
        ],
      },
    },
  },
  leben: {
    tips: {
      ar: ["اسأل نفسك لمن تريد الحماية: نفسك أم العائلة أو الشريك؟", "افهم هل تبحث عن حماية مالية فقط أم عن ادخار أيضاً.", "إذا لم تكن متأكداً من نوع المنتج، اقرأ الشرح أولاً قبل تعبئة النموذج."],
      de: ["Frage dich zuerst, wen du absichern moechtest: dich selbst, Familie oder Partnerin bzw. Partner.", "Klaere, ob es dir nur um Absicherung oder auch um Sparen geht.", "Wenn du den Produkttyp nicht sicher einordnen kannst, lies zuerst die Erklaerung und fuelle dann das Formular aus."],
    },
  },
  unfall: {
    infoBox: {
      ar: {
        title: "الفرق البسيط بين تأمين الحوادث وتأمين العجز عن العمل",
        body: [
          "تأمين الحوادث يركز عادة على الإصابات الناتجة عن حادث مفاجئ.",
          "أما تأمين العجز عن العمل فيرتبط أكثر بفقدان القدرة على العمل حتى لو كان السبب مرضاً وليس حادثاً فقط.",
        ],
      },
      de: {
        title: "Einfacher Unterschied: Unfall oder Berufsunfaehigkeit?",
        body: [
          "Die Unfallversicherung bezieht sich meist auf Folgen eines ploetzlichen Unfalls.",
          "Berufsunfaehigkeit greift eher dann, wenn du allgemein laenger nicht mehr arbeiten kannst, auch durch Krankheit.",
        ],
      },
    },
  },
  "riester-rente": {
    infoBox: {
      ar: {
        title: "لماذا وضعنا ريستر رينته في صفحة منفصلة؟",
        body: [
          "لأن هذا النوع يختلف عن التقاعد العادي من حيث الفكرة والدعم المحتمل وطريقة المقارنة.",
          "الشخص الذي يسمع عن Riester غالباً يحتاج شرحاً مستقلاً قبل أن يدخل في التفاصيل.",
        ],
      },
      de: {
        title: "Warum ist Riester-Rente eine eigene Seite?",
        body: [
          "Weil sich Riester in Logik, Foerderung und Auswahl deutlich von allgemeiner Vorsorge unterscheiden kann.",
          "Wer gezielt nach Riester sucht, braucht meist zuerst eine eigene Einordnung statt allgemeiner Renteninfos.",
        ],
      },
    },
  },
  risikoleben: {
    infoBox: {
      ar: {
        title: "لمن يكون تأمين الحياة المؤقت غالباً؟",
        body: [
          "غالباً للأشخاص الذين يريدون حماية عائلاتهم أو التزامات مالية كبيرة مثل القرض السكني.",
          "هو ليس نفس فكرة الادخار للتقاعد، بل أقرب إلى حماية مالية إذا حدث الأسوأ.",
        ],
      },
      de: {
        title: "Fuer wen ist Risikoleben oft sinnvoll?",
        body: [
          "Haeufig fuer Menschen mit Familie oder groesseren finanziellen Verpflichtungen wie Immobilienkrediten.",
          "Es geht dabei weniger um Sparen und mehr um finanzielle Absicherung fuer den Ernstfall.",
        ],
      },
    },
  },
  "ruerup-rente": {
    tips: {
      ar: ["إذا كنت لا تعرف الفرق بينها وبين Riester أو التقاعد العادي، لا تملأ النموذج بسرعة.", "ابدأ من الهدف: هل تريد ادخاراً طويل الأمد؟ هل يهمك الجانب الضريبي؟", "اختر هذه الصفحة إذا كنت تريد هذا النوع تحديداً، لا لمجرد أن الاسم مألوف."],
      de: ["Wenn du den Unterschied zu Riester oder allgemeiner Vorsorge nicht klar kennst, starte nicht sofort mit dem Formular.", "Gehe zuerst von deinem Ziel aus: langfristiges Sparen, steuerlicher Aspekt oder beides?", "Nutze diese Seite gezielt fuer Ruerup und nicht nur, weil dir der Name bekannt vorkommt."],
    },
  },
  pflegezusatz: {
    heroDescription: {
      ar: "هذه الصفحة تشرح بشكل بسيط لماذا يفكر بعض الناس في تأمين الرعاية الإضافي، وما هي النقاط التي تساعد على فهمه قبل تعبئة النموذج.",
      de: "Diese Seite erklaert in einfacher Form, warum Menschen ueber Pflegezusatz nachdenken und welche Punkte vor dem Formular wichtig sind.",
    },
  },
  "pkv-vollversicherung": {
    infoBox: {
      ar: {
        title: "متى يهمك هذا القسم؟",
        body: [
          "إذا كنت تبحث تحديداً عن التأمين الصحي الخاص الكامل، وليس فقط إضافة صغيرة على التأمين الحالي.",
          "بعض المستخدمين يخلطون بين PKV الكامل والتأمينات الصحية الإضافية، لذلك فصلنا هذا القسم بوضوح.",
        ],
      },
      de: {
        title: "Wann ist dieser Bereich der richtige?",
        body: [
          "Wenn du gezielt eine vollstaendige private Krankenversicherung suchst und nicht nur eine Zusatzversicherung.",
          "Viele verwechseln Voll-PKV mit kleinen Zusatzbausteinen. Darum ist dieser Bereich klar getrennt.",
        ],
      },
    },
  },
  "pkv-beamte": {
    tips: {
      ar: ["هذا القسم مخصص لحالة الموظفين الحكوميين، لذلك لا تبدأ منه إذا لم تكن هذه حالتك.", "اقرأ الشرح أولاً حتى تفهم لماذا تم فصل هذا القسم عن PKV العام.", "إذا كنت غير متأكد من الفئة المناسبة لك، لا تملأ نموذجين مختلفين بشكل عشوائي."],
      de: ["Dieser Bereich ist speziell fuer Beamte gedacht. Starte hier also nur, wenn das wirklich zu deiner Situation passt.", "Lies zuerst die Einordnung, damit klar wird, warum dieser Bereich von der allgemeinen PKV getrennt ist.", "Wenn du unsicher bist, fuelle nicht beliebig mehrere Formulare aus."],
    },
  },
  krankenzusatz: {
    infoBox: {
      ar: {
        title: "الفرق بين التأمين الصحي الإضافي وPKV الكامل",
        body: [
          "التأمين الإضافي يعني عادة أنك لا تغيّر النظام بالكامل، بل تضيف تغطيات أو مزايا محددة.",
          "إذا كنت تبحث عن تحسين جزء معين فقط، فهذه الصفحة غالباً أنسب من PKV الكامل.",
        ],
      },
      de: {
        title: "Zusatzversicherung oder Voll-PKV?",
        body: [
          "Zusatzversicherung bedeutet meist: Du wechselst nicht das ganze System, sondern erweiterst bestimmte Leistungen.",
          "Wenn du nur einzelne Bereiche verbessern willst, ist diese Seite oft passender als die Voll-PKV.",
        ],
      },
    },
  },
  "pkv-studenten": {
    whenYouNeedIt: {
      ar: ["إذا كنت طالباً وتبحث عن صفحة موجهة لوضعك مباشرة.", "عندما لا تريد الخلط بين خيارات الطلاب وخيارات الموظفين أو العائلات.", "إذا كنت تحتاج فهماً مبسطاً قبل فتح النموذج."],
      de: ["Wenn du studierst und direkt in einem auf dich zugeschnittenen Bereich starten willst.", "Wenn du studentische Optionen nicht mit allgemeinen oder beruflichen Tarifen mischen willst.", "Wenn du vor dem Formular eine einfache Orientierung brauchst."],
    },
  },
  "pkv-ue55": {
    infoBox: {
      ar: {
        title: "لماذا قسم +55 منفصل؟",
        body: [
          "لأن احتياجات المقارنة والأسئلة المطلوبة تختلف غالباً عن الفئات الأصغر عمراً.",
          "فصل هذا القسم يسهل على المستخدم الوصول إلى نقطة البداية المناسبة بدون تشويش.",
        ],
      },
      de: {
        title: "Warum ist Ue55 getrennt?",
        body: [
          "Weil Fragen, Anforderungen und Vergleichslogik in dieser Altersgruppe oft anders ausfallen als bei juengeren Personen.",
          "Ein eigener Bereich macht den Einstieg klarer und vermeidet unpassende Wege.",
        ],
      },
    },
  },
  haftpflicht: {
    heroTitle: {
      ar: "هل تحتاج تأمين المسؤولية في ألمانيا؟",
      de: "Brauchst du eine Haftpflichtversicherung in Deutschland?",
    },
    heroDescription: {
      ar: "هذا من أكثر أنواع التأمين شيوعاً في الحياة اليومية. هنا تشرح الصفحة الفكرة ببساطة قبل أن تدخل إلى المقارنة نفسها.",
      de: "Das ist eine der haeufigsten Alltagsversicherungen in Deutschland. Diese Seite erklaert zuerst die Grundidee und leitet dann in den Vergleich weiter.",
    },
    infoBox: {
      ar: {
        title: "ماذا يفهم المستخدم من هذه الصفحة؟",
        body: [
          "الفكرة الأساسية هي الحماية من تكاليف أضرار قد تتسبب بها للغير بشكل غير مقصود.",
          "لأنها من التأمينات اليومية الشائعة، يحتاج المستخدم شرحاً مبسطاً قبل رؤية النتائج الكثيرة داخل الأداة.",
        ],
      },
      de: {
        title: "Worum geht es hier einfach erklaert?",
        body: [
          "Im Kern geht es um Schutz bei Schaeden, die du anderen unbeabsichtigt zufuegst.",
          "Gerade weil diese Versicherung sehr verbreitet ist, hilft eine einfache Einordnung vor dem eigentlichen Vergleich.",
        ],
      },
    },
  },
  hausrat: {
    tips: {
      ar: ["اسأل نفسك أولاً: ماذا تريد أن تحمي داخل المنزل؟", "لا تختَر العرض فقط لأنه مشهور؛ المهم أن تفهم ما الذي يغطيه فعلاً.", "إذا كنت تسكن لأول مرة في ألمانيا، فهذا النوع يحتاج شرحاً بسيطاً قبل المقارنة."],
      de: ["Frage dich zuerst, was im Haushalt eigentlich abgesichert werden soll.", "Waehle nicht nur nach Bekanntheit, sondern danach, was der Tarif wirklich abdeckt.", "Gerade beim ersten Start in Deutschland hilft eine einfache Erklaerung vor dem Vergleich."],
    },
  },
  tierhalter: {
    infoBox: {
      ar: {
        title: "هذا القسم ليس نفس تأمين صحة الحيوان",
        body: [
          "تأمين أصحاب الحيوانات يختلف عن تأمين صحة الحيوان نفسه.",
          "إذا كان هدفك علاج الحيوان أو تكاليف الطبيب، فغالباً صفحة تأمين صحة الكلاب أنسب لك من هذه الصفحة.",
        ],
      },
      de: {
        title: "Nicht dasselbe wie Tiergesundheit",
        body: [
          "Tierhalterhaftpflicht ist etwas anderes als eine Krankenversicherung fuer das Tier.",
          "Wenn es dir um Tierarzt- oder Behandlungskosten geht, passt meist eher die Hundekrankenversicherung.",
        ],
      },
    },
  },
  wohngebaeude: {
    whenYouNeedIt: {
      ar: ["إذا كنت تملك مبنى أو بيتاً وتبحث عن حماية تخص البناء نفسه.", "عندما تحتاج مقارنة خاصة بالعقار لا بمحتويات المنزل.", "إذا أردت الفصل بوضوح بين تأمين البيت وتأمين الأثاث داخل البيت."],
      de: ["Wenn du ein Haus oder Gebaeude besitzt und den baulichen Schutz vergleichen willst.", "Wenn du einen Immobilienvergleich brauchst und nicht nur Schutz fuer Inhalte im Haus.", "Wenn du klar zwischen Gebaeude und Hausrat unterscheiden willst."],
    },
  },
  "haus-und-grundbesitz": {
    infoBox: {
      ar: {
        title: "لمن هذه الصفحة غالباً؟",
        body: [
          "هذه الصفحة أقرب لمن لديهم ارتباط بالعقار أو الملكية ويريدون مقارنة مخصصة لهذا المجال.",
          "وضعناها بشكل منفصل لأن اسمها قد يربك المستخدم إذا ظهرت داخل قائمة عامة بدون شرح.",
        ],
      },
      de: {
        title: "Fuer wen ist diese Seite gedacht?",
        body: [
          "Diese Seite richtet sich vor allem an Menschen mit Bezug zu Immobilieneigentum und speziellen Haftungsfragen.",
          "Der Bereich ist bewusst getrennt, weil der Begriff sonst in allgemeinen Listen schnell unklar bleibt.",
        ],
      },
    },
  },
  rechtsschutz: {
    infoBox: {
      ar: {
        title: "فكرة القسم باختصار",
        body: [
          "الحماية القانونية ليست لكل الناس بنفس الدرجة، لذلك الصفحة تساعد أولاً في فهم الفكرة قبل المقارنة.",
          "إذا كنت لا تعرف هل تحتاجها فعلاً، ابدأ بقراءة الأمثلة الموجودة هنا قبل استعمال الأداة.",
        ],
      },
      de: {
        title: "Die Grundidee in einfacher Form",
        body: [
          "Rechtsschutz ist nicht fuer jede Person gleich wichtig. Darum hilft die Seite erst beim Verstehen und dann beim Vergleichen.",
          "Wenn du unsicher bist, ob du diese Versicherung wirklich brauchst, starte mit den Beispielen auf der Seite.",
        ],
      },
    },
  },
  firmen: {
    heroDescription: {
      ar: "هذا القسم مخصص لأصحاب الأعمال أو الشركات الصغيرة الذين يريدون نقطة بداية واضحة بدل البحث وسط التأمينات الخاصة بالأفراد.",
      de: "Dieser Bereich ist fuer Selbststaendige und kleine Unternehmen gedacht, die nicht zwischen privaten Versicherungen suchen wollen.",
    },
  },
  girokonto: {
    infoBox: {
      ar: {
        title: "ما الذي يفيد المستخدم هنا قبل المقارنة؟",
        body: [
          "الحساب الجاري ليس مجرد كلمة بنك. المستخدم يحتاج أن يعرف: هل يريد حساباً رقمياً فقط؟ هل يحتاج بطاقة؟ هل يحتاج سحب نقدي كثير؟",
          "لهذا الصفحة تشرح الفكرة أولاً ثم تترك له أداة المقارنة بعد أن تتضح الحاجة أكثر.",
        ],
      },
      de: {
        title: "Was hilft hier vor dem Vergleich?",
        body: [
          "Ein Girokonto ist nicht einfach nur irgendein Bankkonto. Wichtige Fragen sind: nur digital, Karte, Bargeld, App oder Filiale?",
          "Darum erklaert die Seite zuerst die Bedarfslage und zeigt danach erst den Vergleich.",
        ],
      },
    },
  },
  baufinanzierung: {
    infoBox: {
      ar: {
        title: "قبل فتح نموذج تمويل العقار",
        body: [
          "هذا النموذج يفيد من لديه مشروع شراء أو تمويل عقار ويحتاج نقطة بداية منظمة.",
          "إذا كنت ما زلت فقط في مرحلة الفضول العامة، اقرأ الشرح أولاً حتى لا تدخل النموذج بمعلومات غير واضحة.",
        ],
      },
      de: {
        title: "Vor dem Baufinanzierungs-Formular",
        body: [
          "Das Formular ist vor allem sinnvoll, wenn bereits ein konkretes Kauf- oder Finanzierungsinteresse besteht.",
          "Wenn du noch ganz am Anfang stehst, hilft erst die Einordnung auf der Seite und danach das Formular.",
        ],
      },
    },
  },
  kredit: {
    tips: {
      ar: ["حدد المبلغ والمدة قبل فتح الأداة حتى تكون المقارنة واقعية.", "اقرأ المعدل الفعلي لا الانطباع العام فقط.", "لا تبحث عن أرخص قرض فقط، بل عن القرض الذي تستطيع فهمه وتسديده بوضوح."],
      de: ["Lege Betrag und Laufzeit vorher fest, damit der Vergleich realistischer wird.", "Achte auf den effektiven Satz und nicht nur auf den ersten Eindruck.", "Suche nicht nur den billigsten Kredit, sondern einen, den du klar verstehst und realistisch bedienen kannst."],
    },
  },
  kreditkarte: {
    infoBox: {
      ar: {
        title: "ما الفرق بين الحساب الجاري وبطاقة الائتمان؟",
        body: [
          "بعض الناس يخلطون بين الحساب البنكي وبطاقة الائتمان، لذلك وضعنا بطاقات الائتمان في صفحة مستقلة.",
          "إذا كان هدفك بطاقة للسفر أو الدفع أو مزايا معينة، فهذه الصفحة أنسب من قسم الحسابات الجارية.",
        ],
      },
      de: {
        title: "Kreditkarte oder Girokonto?",
        body: [
          "Viele verwechseln Girokonto und Kreditkarte. Deshalb ist dieser Bereich bewusst separat aufgebaut.",
          "Wenn du gezielt eine Karte fuer Reisen, Zahlungen oder Zusatzvorteile suchst, bist du hier richtig.",
        ],
      },
    },
  },
  dsl: {
    heroTitle: {
      ar: "كيف تختار إنترنت المنزل وDSL في ألمانيا؟",
      de: "DSL und Internet zuhause in Deutschland einfach waehlen",
    },
    heroDescription: {
      ar: "هنا تفهم السرعة المناسبة، مدة العقد، ورسوم البداية، ثم تستخدم المقارنة بطريقة أبسط حسب عدد الأشخاص وطبيعة الاستخدام في البيت.",
      de: "Hier verstehst du passende Geschwindigkeit, Laufzeit und Startkosten und nutzt den Vergleich danach gezielter fuer deinen Haushalt.",
    },
    infoBox: {
      ar: {
        title: "كيف تختار عقد DSL بشكل أبسط؟",
        body: [
          "اسأل نفسك أولاً: كم شخصاً يستخدم الإنترنت في البيت؟ وهل الاستخدام للدراسة فقط أم للبث والعمل أيضاً؟",
          "بعدها ركز على السرعة، مدة العقد، ورسوم البداية بدل النظر فقط إلى السعر المعلن في أول شهر.",
        ],
      },
      de: {
        title: "Wie waehlst du DSL einfacher aus?",
        body: [
          "Frage dich zuerst, wie viele Personen den Anschluss nutzen und ob es eher um Surfen, Homeoffice oder Streaming geht.",
          "Danach solltest du vor allem auf Geschwindigkeit, Laufzeit und Startkosten achten und nicht nur auf den ersten Werbepreis.",
        ],
      },
    },
    examples: {
      ar: [
        "طالب يعيش وحده ويحتاج إنترنتاً مستقراً للدراسة والمكالمات.",
        "عائلة من 4 أشخاص تستخدم البث والعمل من المنزل وتحتاج سرعة أعلى.",
        "مستخدم يريد فقط تخفيض السعر دون تغيير كبير في مستوى الخدمة.",
      ],
      de: [
        "Ein Student lebt allein und braucht stabiles Internet fuer Studium und Videoanrufe.",
        "Eine vierkoepfige Familie streamt viel und arbeitet teilweise von zuhause.",
        "Jemand moechte vor allem den Preis senken, ohne grosse Aenderung beim Nutzungsprofil.",
      ],
    },
  },
  strom: {
    heroTitle: {
      ar: "مقارنة الكهرباء في ألمانيا بشكل أوضح",
      de: "Strom in Deutschland klarer vergleichen",
    },
    heroDescription: {
      ar: "هذه الصفحة تساعدك على فهم ما يفرق فعلاً بين عروض الكهرباء: التكلفة السنوية، مدة العقد، الضمان السعري، والبونصات قبل الدخول إلى النتائج.",
      de: "Diese Seite zeigt dir, was Stromtarife wirklich unterscheidet: Jahreskosten, Laufzeit, Preisgarantie und Boni vor dem eigentlichen Vergleich.",
    },
    infoBox: {
      ar: {
        title: "ما الذي يهم فعلاً في مقارنة الكهرباء؟",
        body: [
          "الأهم غالباً ليس فقط القسط الشهري، بل السعر السنوي، مدة العقد، وهل يوجد ضمان سعر أو بونص.",
          "إذا كنت لا تعرف استهلاكك بدقة، استخدم تقديراً قريباً من واقع المنزل حتى تكون النتائج منطقية.",
        ],
      },
      de: {
        title: "Was ist beim Stromvergleich wirklich wichtig?",
        body: [
          "Entscheidend ist oft nicht nur der Monatsabschlag, sondern der Jahrespreis, die Laufzeit und moegliche Preisgarantien oder Boni.",
          "Wenn du deinen Verbrauch nicht genau kennst, nutze einen realistischen Richtwert fuer deinen Haushalt.",
        ],
      },
    },
    examples: {
      ar: [
        "شخص انتقل إلى شقة جديدة ولا يعرف أي مزود كهرباء يختار.",
        "عائلة تريد تخفيض التكلفة السنوية وتفهم إن كان البونص مفيداً فعلاً.",
        "مستخدم يريد تغيير المزود الحالي لأن السعر ارتفع عليه هذا العام.",
      ],
      de: [
        "Jemand ist neu in eine Wohnung gezogen und braucht schnell einen passenden Stromtarif.",
        "Eine Familie will die Jahreskosten senken und Bonusangebote richtig einordnen.",
        "Ein Haushalt moechte den Anbieter wechseln, weil der bisherige Tarif deutlich teurer wurde.",
      ],
    },
  },
  oekostrom: {
    infoBox: {
      ar: {
        title: "متى أبدأ من قسم الكهرباء الخضراء؟",
        body: [
          "إذا كان يهمك أن تكون المقارنة من البداية ضمن عروض أقرب للطاقة المتجددة، فهذا القسم مناسب لك.",
          "أما إذا كنت تريد نظرة أوسع على السوق كله أولاً، فابدأ بصفحة الكهرباء العامة ثم ارجع لهذه الصفحة.",
        ],
      },
      de: {
        title: "Wann starte ich mit Oekostrom?",
        body: [
          "Wenn dir wichtig ist, direkt in einem Bereich mit Fokus auf erneuerbare Tarife zu starten, passt diese Seite.",
          "Wenn du erst einen breiteren Marktueberblick willst, beginne mit Strom und vergleiche danach gezielt weiter.",
        ],
      },
    },
  },
  gas: {
    tips: {
      ar: ["في الغاز أيضاً انظر إلى السعر السنوي، لا إلى القسط فقط.", "إذا كنت منتقلاً حديثاً، حاول معرفة الاستهلاك أو استخدم تقديراً واقعياً.", "راجع شروط البونص ومدة العقد قبل اتخاذ القرار."],
      de: ["Auch beim Gasvergleich ist der Jahrespreis oft wichtiger als nur der monatliche Betrag.", "Wenn du neu eingezogen bist, nutze moeglichst einen realistischen Verbrauch.", "Pruefe Bonusbedingungen und Laufzeit vor der Entscheidung."],
    },
  },
  mobilfunk: {
    infoBox: {
      ar: {
        title: "ما الذي يقرر عقد الموبايل المناسب؟",
        body: [
          "هل تحتاج مكالمات كثيرة، إنترنت أكثر، أو فقط خطاً بسيطاً بسعر منخفض؟",
          "الصفحة تساعدك على التفكير بهذه الأسئلة أولاً قبل الدخول في عشرات العروض المختلفة.",
        ],
      },
      de: {
        title: "Was entscheidet beim passenden Mobilfunktarif?",
        body: [
          "Brauchst du viel Datenvolumen, viele Anrufe oder einfach nur einen guenstigen Basisvertrag?",
          "Die Seite hilft dir, diese Fragen zuerst zu ordnen, bevor du viele Tarife gleichzeitig anschaust.",
        ],
      },
    },
  },
  pauschalreise: {
    heroDescription: {
      ar: "هذه الصفحة تشرح بطريقة بسيطة كيف تبدأ مقارنة عروض السفر والعطلات بدون أن تتوه بين الخيارات، ثم تنقلك إلى الأداة.",
      de: "Diese Seite zeigt dir einfach, wie du Pauschalreisen vergleichen kannst, ohne dich in zu vielen Optionen zu verlieren, und fuehrt dich danach zum Tool.",
    },
  },
  mietwagen: {
    tips: {
      ar: ["انتبه إلى شروط الاستلام والتأمين وليس السعر فقط.", "اختر نوع السيارة بحسب الرحلة الفعلية لا بحسب الشكل فقط.", "إذا ظهرت لك عروض كثيرة، قارن بين الشروط أولاً ثم السعر."],
      de: ["Achte auf Abholbedingungen und Versicherung und nicht nur auf den Preis.", "Waehle die Fahrzeugklasse passend zur Reise und nicht nur nach Optik.", "Wenn viele Angebote erscheinen, vergleiche erst die Bedingungen und dann den Preis."],
    },
  },
  "c24-bank": {
    ctaLabel: {
      ar: "انتقل إلى العرض",
      de: "Zum Angebot",
    },
    heroTitle: {
      ar: "شرح سريع لحساب C24 Bank",
      de: "C24 Bank kurz und einfach erklaert",
    },
    heroDescription: {
      ar: "هنا لا يوجد نموذج مقارنة طويل، بل شرح سريع لفكرة الحساب الرقمي مع انتقال مباشر إلى العرض الرسمي إذا كان مناسباً لك.",
      de: "Hier gibt es kein langes Vergleichsformular, sondern eine kurze Einordnung zum digitalen Konto und danach den direkten Weg zum offiziellen Angebot.",
    },
    whenYouNeedIt: {
      ar: [
        "إذا كنت تريد حساباً رقمياً سريع الفتح بدون تعقيد كبير.",
        "عندما تبحث عن عرض مباشر بدلاً من مقارنة عشرات الحسابات.",
        "إذا أردت أن تفهم الفكرة أولاً ثم تذهب إلى الصفحة الرسمية للبنك.",
      ],
      de: [
        "Wenn du ein digitales Konto mit schnellem Einstieg suchst.",
        "Wenn du lieber direkt ein konkretes Angebot statt vieler Vergleiche sehen willst.",
        "Wenn du die Grundidee kurz verstehen und dann zum offiziellen Angebot wechseln moechtest.",
      ],
    },
    tips: {
      ar: [
        "اقرأ أولاً هل الحساب يناسب استخدامك اليومي أو السفر أو الدفع الرقمي.",
        "راجع الشروط الأساسية مثل البطاقة، السحب النقدي، والتطبيق قبل فتح العرض الرسمي.",
        "إذا كنت تريد مقارنة أوسع بين بنوك مختلفة، فابدأ من قسم الحسابات الجارية بدلاً من هذه الصفحة.",
      ],
      de: [
        "Pruefe zuerst, ob das Konto eher zu Alltag, Reisen oder digitalem Bezahlen passt.",
        "Achte auf Karte, Bargeldnutzung und App-Erlebnis, bevor du ins offizielle Angebot gehst.",
        "Wenn du breiter zwischen mehreren Banken vergleichen willst, starte besser im Girokonto-Bereich.",
      ],
    },
    examples: {
      ar: [
        "مستخدم يريد حساباً رقمياً بسيطاً ويفضل الانتقال مباشرة إلى العرض.",
        "شخص لا يريد المقارنة الطويلة بل يريد فهم سريع ثم قرار واضح.",
        "مستخدم يبحث عن صفحة تعريفية مختصرة قبل فتح حساب جديد.",
      ],
      de: [
        "Jemand moechte ein einfaches digitales Konto und direkt zum Angebot weitergehen.",
        "Eine Person will keine lange Vergleichsliste, sondern eine kurze Einordnung und dann eine klare Entscheidung.",
        "Jemand sucht eine kompakte Infoseite vor der eigentlichen Kontoeroeffnung.",
      ],
    },
  },
};

function createService(seed: ServiceSeed): ServicePageData {
  const guide = getGuide(seed.toolKind);
  const override = serviceWikiOverrides[seed.slug];

  return {
    ...seed,
    ctaLabel: override?.ctaLabel ?? {
      ar: seed.toolKind === "form" ? "ابدأ النموذج" : "ابدأ المقارنة",
      de: seed.toolKind === "form" ? "Formular starten" : "Vergleich starten",
    },
    heroTitle: override?.heroTitle ?? {
      ar: `${seed.title.ar} في ألمانيا`,
      de: `${seed.title.de} in Deutschland vergleichen`,
    },
    heroDescription: override?.heroDescription ?? {
      ar: `هذه الصفحة تشرح ${seed.title.ar} بطريقة مبسطة، ثم تنقلك مباشرة إلى الأداة المناسبة حتى يصل المستخدم بسرعة إلى ما يبحث عنه.`,
      de: `Diese Seite erklaert ${seed.title.de} einfach und fuehrt danach direkt zum passenden Tool, damit Nutzerinnen und Nutzer schneller ans Ziel kommen.`,
    },
    whenYouNeedIt: override?.whenYouNeedIt ?? {
      ar: [
        `عندما تريد مقارنة عروض ${seed.title.ar} بدون تشتت.`,
        "إذا كنت جديداً في ألمانيا وتريد فهم الفكرة قبل التقديم.",
        "عندما تريد الوصول السريع إلى خيارات مناسبة لحالتك.",
      ],
      de: [
        `Wenn du Angebote fuer ${seed.title.de} uebersichtlich vergleichen moechtest.`,
        "Wenn du neu in Deutschland bist und das Thema erst einfach verstehen willst.",
        "Wenn du schnell zu passenden Optionen fuer deine Situation kommen moechtest.",
      ],
    },
    tips: override?.tips ?? {
      ar: [
        "لا تنظر إلى السعر وحده، بل راجع الشروط ومدة العقد أو الالتزام أيضاً.",
        "اقرأ الوصف المختصر أولاً ثم استخدم الأداة بهدوء خطوة خطوة.",
        "إذا ظهرت لك نتائج كثيرة، ابدأ بثلاثة خيارات فقط ثم قارن بينها.",
      ],
      de: [
        "Achte nicht nur auf den Preis, sondern auch auf Bedingungen und Laufzeit.",
        "Lies zuerst die kurze Einordnung und nutze das Tool dann Schritt fuer Schritt.",
        "Wenn viele Ergebnisse erscheinen, starte mit drei passenden Optionen und vergleiche diese genauer.",
      ],
    },
    examples: override?.examples ?? {
      ar: [
        "مستخدم يريد قراراً واضحاً بدون قراءة عشرات الصفحات الألمانية المعقدة.",
        "شخص يقارن بين عدة عروض ويريد معرفة أين يبدأ بشكل صحيح.",
        "عائلة أو فرد يريد تقليل الوقت والوصول مباشرة إلى الخيار المناسب.",
      ],
      de: [
        "Eine Person moechte eine klare Entscheidung treffen, ohne viele komplizierte deutsche Seiten zu lesen.",
        "Jemand vergleicht mehrere Angebote und sucht einen einfachen Einstiegspunkt.",
        "Ein Haushalt oder Einzelperson moechte Zeit sparen und direkt zum passenden Bereich gelangen.",
      ],
    },
    faq: override?.faq ?? {
      ar: [
        {
          question: `هل اكمل الطلب داخل ArabVergleich؟`,
          answer: "لا، ArabVergleich يشرح ويوجه فقط. اكمال الطلب يتم عند الشريك الخارجي الرسمي.",
        },
        {
          question: "هل المقارنة مجانية للمستخدم؟",
          answer: "عادة نعم. قد نحصل نحن على عمولة شراكة بدون تكلفة إضافية عليك.",
        },
        {
          question: "ماذا لو لم أفهم بعض الشروط؟",
          answer: "ابدأ بالشرح الموجود في الصفحة، ثم راجع تفاصيل العرض النهائي قبل اتخاذ القرار.",
        },
      ],
      de: [
        {
          question: "Schliesse ich den Antrag direkt bei ArabVergleich ab?",
          answer: "Nein. ArabVergleich erklaert und leitet weiter, der eigentliche Abschluss erfolgt beim offiziellen Partner.",
        },
        {
          question: "Ist der Vergleich fuer Nutzerinnen und Nutzer kostenlos?",
          answer: "In der Regel ja. Wir koennen lediglich eine Partnerprovision erhalten, ohne Mehrkosten fuer dich.",
        },
        {
          question: "Was mache ich bei unklaren Bedingungen?",
          answer: "Nutze zuerst die Erklaerungen auf der Seite und pruefe anschliessend die Details des finalen Angebots.",
        },
      ],
    },
    usageGuide: override?.usageGuide ?? {
      ar: {
        title: guide.ar.title,
        steps: [...guide.ar.steps],
        note: guide.ar.note,
      },
      de: {
        title: guide.de.title,
        steps: [...guide.de.steps],
        note: guide.de.note,
      },
    },
    infoBox: override?.infoBox,
    seo: override?.seo ?? {
      ar: {
        title: `${seed.title.ar} في ألمانيا | ArabVergleich`,
        description: `${seed.shortDescription.ar} مع شرح مبسط وخطوات عملية للمقارنة قبل متابعة الطلب.`,
      },
      de: {
        title: `${seed.title.de} | ArabVergleich`,
        description: `${seed.shortDescription.de} Einfach erklaert mit klaren Schritten vor dem eigentlichen Antrag.`,
      },
    },
  };
}

const serviceSeeds: ServiceSeed[] = [
  {
    slug: "solar",
    categorySlug: "energie",
    icon: "Sun",
    toolKeys: ["solarCalculator"],
    toolKind: "form",
    title: { ar: "الطاقة الشمسية", de: "Solaranlage" },
    shortDescription: {
      ar: "قارن حلول الطاقة الشمسية للمنازل والمباني بطريقة سهلة وواضحة.",
      de: "Finde passende Solarloesungen fuer Haus oder Gebaeude in einer einfachen Vergleichsstruktur.",
    },
  },
  {
    slug: "kfz-versicherung",
    categorySlug: "kfz",
    icon: "Car",
    toolKeys: ["kfzCalculator"],
    toolKind: "calculator",
    title: { ar: "تأمين السيارة", de: "Kfz-Versicherung" },
    shortDescription: {
      ar: "قارن تأمين السيارة بسرعة وافهم الخطوات قبل اختيار العرض.",
      de: "Vergleiche Autoversicherungen uebersichtlich und finde schneller den passenden Tarif.",
    },
  },
  {
    slug: "motorrad",
    categorySlug: "kfz",
    icon: "Car",
    toolKeys: ["motorradCalculator"],
    toolKind: "calculator",
    title: { ar: "تأمين الدراجة النارية", de: "Motorrad" },
    shortDescription: {
      ar: "قسم مستقل للدراجات النارية حتى يصل المستخدم مباشرة إلى المقارنة المناسبة.",
      de: "Eigener Motorradbereich, damit Nutzer nicht im allgemeinen Kfz-Thema suchen muessen.",
    },
  },
  {
    slug: "rente",
    categorySlug: "vorsorge",
    icon: "PiggyBank",
    toolKeys: ["renteForm"],
    toolKind: "form",
    title: { ar: "التقاعد", de: "Rente" },
    shortDescription: {
      ar: "ابدأ من الأساسيات ثم انتقل إلى نموذج المقارنة الخاص بالتقاعد.",
      de: "Verstehe den Einstieg in die Altersvorsorge und nutze danach direkt das passende Formular.",
    },
  },
  {
    slug: "berufsunfaehigkeit",
    categorySlug: "vorsorge",
    icon: "Shield",
    toolKeys: ["berufsunfaehigkeitForm"],
    toolKind: "form",
    title: { ar: "تأمين العجز عن العمل", de: "Berufsunfaehigkeit" },
    shortDescription: {
      ar: "صفحة مرتبة لفهم تأمين العجز عن العمل قبل تعبئة النموذج.",
      de: "Ein klarer Einstieg in die Berufsunfaehigkeitsabsicherung mit direkter Weiterleitung zum Formular.",
    },
  },
  {
    slug: "leben",
    categorySlug: "vorsorge",
    icon: "Heart",
    toolKeys: ["lebenForm"],
    toolKind: "form",
    title: { ar: "تأمين الحياة", de: "Leben" },
    shortDescription: {
      ar: "شرح مبسط لتأمين الحياة مع وصول مباشر إلى النموذج المناسب.",
      de: "Lebensversicherung einfach erklaert und direkt mit dem passenden Formular verknuepft.",
    },
  },
  {
    slug: "unfall",
    categorySlug: "vorsorge",
    icon: "Shield",
    toolKeys: ["unfallCalculator"],
    toolKind: "calculator",
    title: { ar: "تأمين الحوادث", de: "Unfall" },
    shortDescription: {
      ar: "مقارنة تأمين الحوادث ضمن قسم واضح وسهل للزائر.",
      de: "Unfallversicherung in einer einfachen Vergleichsseite ohne unnötige Umwege.",
    },
  },
  {
    slug: "riester-rente",
    categorySlug: "vorsorge",
    icon: "PiggyBank",
    toolKeys: ["riesterRenteForm"],
    toolKind: "form",
    title: { ar: "ريستر رينته", de: "Riester-Rente" },
    shortDescription: {
      ar: "قسم مستقل لفهم ريستر رينته ثم تعبئة النموذج المناسب.",
      de: "Ein eigener Bereich fuer Riester-Rente mit direkter Struktur bis zum Formular.",
    },
  },
  {
    slug: "risikoleben",
    categorySlug: "vorsorge",
    icon: "Heart",
    toolKeys: ["risikolebenForm"],
    toolKind: "form",
    title: { ar: "تأمين الحياة المؤقت", de: "Risikoleben" },
    shortDescription: {
      ar: "تنظيم واضح لتأمين الحياة المؤقت مع انتقال مباشر إلى الأداة.",
      de: "Risikoleben geordnet erklaert und direkt mit dem Vergleichsformular verbunden.",
    },
  },
  {
    slug: "ruerup-rente",
    categorySlug: "vorsorge",
    icon: "PiggyBank",
    toolKeys: ["ruerupRenteForm"],
    toolKind: "form",
    title: { ar: "روروب رينته", de: "Ruerup-Rente" },
    shortDescription: {
      ar: "صفحة مخصصة لروروب رينته حتى يسهل الوصول إليها من القسم الرئيسي.",
      de: "Eigene Seite fuer Ruerup-Rente, klar einsortiert unter Vorsorge.",
    },
  },
  {
    slug: "pflegezusatz",
    categorySlug: "vorsorge",
    icon: "Heart",
    toolKeys: ["pflegezusatzForm"],
    toolKind: "form",
    title: { ar: "تأمين الرعاية الإضافي", de: "Pflegezusatz" },
    shortDescription: {
      ar: "فهم أساسيات تأمين الرعاية الإضافي ثم متابعة النموذج المناسب.",
      de: "Pflegezusatzversicherung einfach verstehen und danach gezielt das Formular nutzen.",
    },
  },
  {
    slug: "pkv-vollversicherung",
    categorySlug: "gesundheit",
    icon: "Shield",
    toolKeys: ["pkvVollversicherungForm"],
    toolKind: "form",
    title: { ar: "التأمين الصحي الخاص الكامل", de: "PKV Vollversicherung" },
    shortDescription: {
      ar: "شرح مبسط للتأمين الصحي الخاص الكامل مع وصول مباشر إلى النموذج.",
      de: "PKV Vollversicherung klar eingeordnet, damit der Einstieg leichter wird.",
    },
  },
  {
    slug: "pkv-beamte",
    categorySlug: "gesundheit",
    icon: "Shield",
    toolKeys: ["pkvBeamteForm"],
    toolKind: "form",
    title: { ar: "PKV للموظفين الحكوميين", de: "PKV fuer Beamte" },
    shortDescription: {
      ar: "قسم مخصص للموظفين الحكوميين لتسهيل الوصول إلى خيارات التأمين المناسبة.",
      de: "Eigener PKV-Bereich fuer Beamte mit direkter und passender Nutzerfuehrung.",
    },
  },
  {
    slug: "krankenzusatz",
    categorySlug: "gesundheit",
    icon: "Shield",
    toolKeys: ["krankenzusatzForm"],
    toolKind: "form",
    title: { ar: "التأمين الصحي الإضافي", de: "Krankenzusatz" },
    shortDescription: {
      ar: "كل ما يحتاجه المستخدم لفهم التأمين الصحي الإضافي في صفحة واحدة.",
      de: "Zusatzversicherungen uebersichtlich gebuendelt und direkt mit dem Formular verknuepft.",
    },
  },
  {
    slug: "pkv-studenten",
    categorySlug: "gesundheit",
    icon: "Shield",
    toolKeys: ["pkvStudentenForm"],
    toolKind: "form",
    title: { ar: "PKV للطلاب", de: "PKV fuer Studenten" },
    shortDescription: {
      ar: "صفحة مبسطة للطلاب حتى يفهموا الخيارات بسرعة قبل التقديم.",
      de: "PKV fuer Studierende einfach dargestellt und direkt erreichbar.",
    },
  },
  {
    slug: "pkv-ue55",
    categorySlug: "gesundheit",
    icon: "Shield",
    toolKeys: ["pkvUe55Form"],
    toolKind: "form",
    title: { ar: "PKV لمن فوق 55", de: "PKV fuer Ue55" },
    shortDescription: {
      ar: "قسم منفصل للفئة العمرية فوق 55 حتى لا يضيع المستخدم بين الخيارات العامة.",
      de: "Eigener PKV-Bereich fuer Menschen ueber 55 mit klarer Ausrichtung.",
    },
  },
  {
    slug: "hundekrankenversicherung",
    categorySlug: "sach",
    icon: "Shield",
    toolKeys: ["hundekrankenversicherungCalculator"],
    toolKind: "calculator",
    title: { ar: "تأمين صحة الكلاب", de: "Hundekrankenversicherung" },
    shortDescription: {
      ar: "مقارنة تأمين صحة الكلاب في صفحة مستقلة وسهلة التصفح.",
      de: "Hundekrankenversicherung sauber getrennt, damit Nutzer direkt dort starten koennen.",
    },
  },
  {
    slug: "haftpflicht",
    categorySlug: "sach",
    icon: "Shield",
    toolKeys: ["haftpflichtCalculator"],
    toolKind: "calculator",
    title: { ar: "تأمين المسؤولية", de: "Haftpflicht" },
    shortDescription: {
      ar: "واحد من أهم الأقسام اليومية، مع شرح بسيط ثم أداة مقارنة مباشرة.",
      de: "Ein zentraler Alltagsvergleich mit klarer Einordnung und direktem Toolzugang.",
    },
  },
  {
    slug: "hausrat",
    categorySlug: "sach",
    icon: "Home",
    toolKeys: ["hausratCalculator"],
    toolKind: "calculator",
    title: { ar: "تأمين محتويات المنزل", de: "Hausrat" },
    shortDescription: {
      ar: "قسم مرتب لتأمين محتويات المنزل دون تعقيد أو تشتيت.",
      de: "Hausratversicherung uebersichtlich aufgebaut und leicht erreichbar.",
    },
  },
  {
    slug: "tierhalter",
    categorySlug: "sach",
    icon: "Shield",
    toolKeys: ["tierhalterCalculator"],
    toolKind: "calculator",
    title: { ar: "تأمين أصحاب الحيوانات", de: "Tierhalter" },
    shortDescription: {
      ar: "خيار واضح لأصحاب الحيوانات مع وصول سريع إلى المقارنة المناسبة.",
      de: "Tierhalterhaftpflicht in einem eigenen, klaren Vergleichsbereich.",
    },
  },
  {
    slug: "wohngebaeude",
    categorySlug: "sach",
    icon: "Home",
    toolKeys: ["wohngebaeudeCalculator"],
    toolKind: "calculator",
    title: { ar: "تأمين المبنى السكني", de: "Wohngebaeude" },
    shortDescription: {
      ar: "قسم خاص بالمباني السكنية مع شرح مبسط قبل المقارنة.",
      de: "Wohngebaeudeversicherung mit einfacher Navigation und direktem Einstieg.",
    },
  },
  {
    slug: "haus-und-grundbesitz",
    categorySlug: "sach",
    icon: "Home",
    toolKeys: ["hausUndGrundbesitzCalculator"],
    toolKind: "calculator",
    title: { ar: "بيت وملكية عقارية", de: "Haus- und Grundbesitz" },
    shortDescription: {
      ar: "صفحة متخصصة لحالات الملكية العقارية ضمن قسم واحد مرتب.",
      de: "Haus- und Grundbesitz sauber einsortiert fuer Nutzer mit Immobilienbezug.",
    },
  },
  {
    slug: "rechtsschutz",
    categorySlug: "sach",
    icon: "Shield",
    toolKeys: ["rechtsschutzCalculator"],
    toolKind: "calculator",
    title: { ar: "الحماية القانونية", de: "Rechtsschutz" },
    shortDescription: {
      ar: "قارن الحماية القانونية بطريقة مبسطة وضمن نفس الهيكلية الجديدة.",
      de: "Rechtsschutzversicherung uebersichtlich erklaert und direkt vergleichbar.",
    },
  },
  {
    slug: "firmen",
    categorySlug: "sach",
    icon: "Briefcase",
    toolKeys: ["firmenForm"],
    toolKind: "form",
    title: { ar: "تأمين الشركات", de: "Firmen" },
    shortDescription: {
      ar: "قسم منفصل للشركات حتى يصل المستخدم إلى هذا المجال مباشرة.",
      de: "Ein eigener Firmenbereich, damit gewerbliche Themen nicht zwischen Privatvergleichen verschwinden.",
    },
  },
  {
    slug: "girokonto",
    categorySlug: "finanzen",
    icon: "Banknote",
    toolKeys: ["girokontoCalculator"],
    toolKind: "calculator",
    title: { ar: "الحساب الجاري", de: "Girokonto" },
    shortDescription: {
      ar: "قسم واضح للحسابات الجارية مع مقارنة مباشرة وسهلة.",
      de: "Girokonten an einer klaren Stelle mit direkter Vergleichsmoeglichkeit.",
    },
  },
  {
    slug: "baufinanzierung",
    categorySlug: "finanzen",
    icon: "Home",
    toolKeys: ["baufinanzierungForm"],
    toolKind: "form",
    title: { ar: "تمويل العقار", de: "Baufinanzierung" },
    shortDescription: {
      ar: "صفحة مرتبة لتمويل العقار ضمن قسم المال والحسابات.",
      de: "Baufinanzierung strukturiert eingeordnet und direkt mit dem Formular verbunden.",
    },
  },
  {
    slug: "kredit",
    categorySlug: "finanzen",
    icon: "Banknote",
    toolKeys: ["kreditCalculator"],
    toolKind: "calculator",
    title: { ar: "القروض", de: "Kredit" },
    shortDescription: {
      ar: "مقارنة القروض ضمن قسم واضح بدلاً من بقائها مخفية بين الخيارات العامة.",
      de: "Kreditvergleich in einem sauberen Finanzbereich mit schneller Orientierung.",
    },
  },
  {
    slug: "kreditkarte",
    categorySlug: "finanzen",
    icon: "CreditCard",
    toolKeys: ["kreditkarteCalculator"],
    toolKind: "calculator",
    title: { ar: "بطاقات الائتمان", de: "Kreditkarte" },
    shortDescription: {
      ar: "قسم مباشر لبطاقات الائتمان حتى يجدها المستخدم بدون بحث طويل.",
      de: "Kreditkarten klar sichtbar innerhalb der Finanzkategorie.",
    },
  },
  {
    slug: "dsl",
    categorySlug: "alltag",
    icon: "WiFi",
    toolKeys: ["dslCalculator"],
    toolKind: "calculator",
    title: { ar: "DSL والإنترنت", de: "DSL und Internet" },
    shortDescription: {
      ar: "افهم السرعات، مدة العقد، ورسوم التفعيل قبل اختيار الإنترنت المنزلي.",
      de: "Verstehe Geschwindigkeit, Laufzeit und Anschlusskosten vor dem Abschluss.",
    },
  },
  {
    slug: "strom",
    categorySlug: "energie",
    icon: "Bolt",
    toolKeys: ["stromCalculator"],
    toolKind: "calculator",
    title: { ar: "الكهرباء", de: "Strom" },
    shortDescription: {
      ar: "قارن مزودي الكهرباء وافهم الفرق بين السعر الشهري والتكلفة السنوية.",
      de: "Vergleiche Stromanbieter und verstehe den Unterschied zwischen Monatsbetrag und Jahreskosten.",
    },
  },
  {
    slug: "oekostrom",
    categorySlug: "energie",
    icon: "Leaf",
    toolKeys: ["oekostromCalculator"],
    toolKind: "calculator",
    title: { ar: "الكهرباء الخضراء", de: "Oekostrom" },
    shortDescription: {
      ar: "تعرف على خيارات الكهرباء الخضراء وكيف تقارن بينها دون تعقيد.",
      de: "Verstehe Oekostrom-Angebote und vergleiche sie ohne komplizierte Fachsprache.",
    },
  },
  {
    slug: "gas",
    categorySlug: "energie",
    icon: "Flame",
    toolKeys: ["gasCalculator"],
    toolKind: "calculator",
    title: { ar: "الغاز", de: "Gas" },
    shortDescription: {
      ar: "قارن عقود الغاز وفهم التكاليف السنوية قبل تغيير المزود.",
      de: "Vergleiche Gastarife und schaue vor dem Wechsel auf die echten Jahreskosten.",
    },
  },
  {
    slug: "mobilfunk",
    categorySlug: "alltag",
    icon: "Phone",
    toolKeys: ["mobilfunkCalculator"],
    toolKind: "calculator",
    title: { ar: "الموبايل", de: "Mobilfunk" },
    shortDescription: {
      ar: "قارن عروض الموبايل والإنترنت المحمول ضمن صفحة سهلة وواضحة.",
      de: "Vergleiche Mobilfunktarife in einer klaren und leicht nutzbaren Seite.",
    },
  },
  {
    slug: "pauschalreise",
    categorySlug: "alltag",
    icon: "Plane",
    toolKeys: ["pauschalreiseCalculator"],
    toolKind: "calculator",
    title: { ar: "السفر والعطلات", de: "Pauschalreise" },
    shortDescription: {
      ar: "صفحة منظمة لعروض السفر والعطلات تسهل الوصول إلى ما تبحث عنه.",
      de: "Pauschalreisen in einer geordneten Vergleichsseite fuer einen schnellen Einstieg.",
    },
  },
  {
    slug: "mietwagen",
    categorySlug: "alltag",
    icon: "Car",
    toolKeys: ["mietwagenCalculator"],
    toolKind: "calculator",
    title: { ar: "تأجير السيارات", de: "Mietwagen" },
    shortDescription: {
      ar: "اعثر على مقارنات تأجير السيارات ضمن نفس الهيكلية الواضحة.",
      de: "Mietwagenvergleiche sauber integriert, damit Reisende schneller finden was sie brauchen.",
    },
  },
  {
    slug: "c24-bank",
    categorySlug: "finanzen",
    icon: "Banknote",
    toolKeys: [],
    toolKind: "link",
    title: { ar: "C24 Bank", de: "C24 Bank" },
    shortDescription: {
      ar: "انتقال مباشر إلى العرض الرسمي للبنك مع شرح عربي مبسط قبل الخروج.",
      de: "Direkter Einstieg zum offiziellen C24-Angebot mit kurzer Orientierung auf ArabVergleich.",
    },
  },
];

export const services = Object.fromEntries(serviceSeeds.map((seed) => [seed.slug, createService(seed)])) as Record<ServiceSlug, ServicePageData>;

export const serviceCategories = categoryDefinitions.map((category) => ({
  ...category,
  services: category.serviceSlugs.map((slug) => services[slug]),
}));

export const serviceCategoryMap = Object.fromEntries(serviceCategories.map((category) => [category.slug, category])) as Record<
  ServiceCategorySlug,
  (typeof serviceCategories)[number]
>;

export const serviceToCategoryMap = Object.fromEntries(
  serviceCategories.flatMap((category) => category.serviceSlugs.map((slug) => [slug, category.slug])),
) as Record<ServiceSlug, ServiceCategorySlug>;

export const topNavigationGroups = serviceCategories.map((category) => ({
  slug: category.slug,
  title: category.title,
  href: `#${category.slug}`,
}));

export const mostUsedItems = [
  services["dsl"],
  services["strom"],
  services["kfz-versicherung"],
  services["girokonto"],
  services["kreditkarte"],
  services["mobilfunk"],
  services["mietwagen"],
  services["c24-bank"],
].map((service) => ({
  slug: service.slug,
  href: `/${service.slug}`,
  label: service.title,
}));

export function getAffiliateHtml(toolKey: AffiliateToolKey) {
  return affiliateTools[toolKey];
}

export function getServiceSiblings(serviceSlug: ServiceSlug) {
  const category = serviceCategoryMap[serviceToCategoryMap[serviceSlug]];
  return category.services;
}
