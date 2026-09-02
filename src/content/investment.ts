import type { Locale } from "@/src/config/site";
import type { XtbCampaignKey } from "@/src/config/investment";

type LocalizedText = Record<Locale, string>;

export type InvestmentPageSlug = "xtb" | "aktien" | "etf" | "sparplan" | "zinsen" | "trading";

export type InvestmentSection = {
  title: LocalizedText;
  body: Record<Locale, string[]>;
};

export type InvestmentCta = {
  campaign: XtbCampaignKey;
  label: LocalizedText;
  placement: "hero" | "inline" | "comparison-card" | "calculator-result" | "partner-journey";
};

export type InvestmentPage = {
  slug: InvestmentPageSlug;
  title: LocalizedText;
  eyebrow: LocalizedText;
  heroTitle: LocalizedText;
  heroDescription: LocalizedText;
  highlights: Record<Locale, string[]>;
  seo: Record<Locale, { title: string; description: string }>;
  primaryCta?: InvestmentCta;
  secondaryCta?: InvestmentCta;
  sections: InvestmentSection[];
  faq: Record<Locale, { question: string; answer: string }[]>;
  tradingCtas?: InvestmentCta[];
};

export const investmentNavigationGroup = {
  slug: "investieren",
  href: "/investieren",
  title: {
    ar: "الاستثمار والتداول",
    de: "Investieren & Trading",
  },
} as const;

export const investmentPageSlugs: InvestmentPageSlug[] = ["xtb", "aktien", "etf", "sparplan", "zinsen", "trading"];

export const investmentSearchItems = [
  {
    slug: "investieren",
    href: "/investieren",
    title: investmentNavigationGroup.title,
    category: investmentNavigationGroup.title,
  },
  {
    slug: "investieren-xtb",
    href: "/investieren/xtb",
    title: { ar: "مراجعة XTB", de: "XTB Erfahrungen" },
    category: investmentNavigationGroup.title,
  },
  {
    slug: "investieren-aktien",
    href: "/investieren/aktien",
    title: { ar: "الأسهم", de: "Aktien" },
    category: investmentNavigationGroup.title,
  },
  {
    slug: "investieren-etf",
    href: "/investieren/etf",
    title: { ar: "صناديق ETF", de: "ETFs" },
    category: investmentNavigationGroup.title,
  },
  {
    slug: "investieren-sparplan",
    href: "/investieren/sparplan",
    title: { ar: "خطط الاستثمار", de: "Sparplaene" },
    category: investmentNavigationGroup.title,
  },
  {
    slug: "investieren-zinsen",
    href: "/investieren/zinsen",
    title: { ar: "فائدة الرصيد غير المستثمر", de: "Zinsen auf Guthaben" },
    category: investmentNavigationGroup.title,
  },
  {
    slug: "investieren-trading",
    href: "/investieren/trading",
    title: { ar: "التداول وCFD", de: "Trading und CFDs" },
    category: investmentNavigationGroup.title,
  },
] as const;

export const investmentPages: Record<InvestmentPageSlug, InvestmentPage> = {
  xtb: {
    slug: "xtb",
    title: { ar: "مراجعة XTB", de: "XTB Erfahrungen" },
    eyebrow: { ar: "مراجعة مزود", de: "Anbieterprofil" },
    heroTitle: { ar: "XTB: نظرة متوازنة قبل فتح حساب", de: "XTB: Ein ausgewogener Blick vor der Kontoeroeffnung" },
    heroDescription: {
      ar: "تعرف على مجالات الاستثمار والتداول التي يقدمها XTB، وما الذي يستحق المراجعة قبل اتخاذ أي قرار. هذه الصفحة معلومات عامة وليست نصيحة استثمارية فردية.",
      de: "Lerne die Anlage- und Handelsbereiche von XTB kennen und sieh, was du vor einer Entscheidung pruefen solltest. Diese Seite liefert allgemeine Informationen und keine individuelle Anlageberatung.",
    },
    highlights: {
      ar: ["أسهم وETFs وخطط استثمار ضمن مسارات منفصلة.", "شرح مبسط للفائدة على الرصيد والمنصة والتطبيق.", "تداول CFD مذكور بشكل منفصل مع تحذير واضح من المخاطر."],
      de: ["Aktien, ETFs und Sparplaene als getrennte Wege.", "Einfacher Einblick in Guthabenzinsen, Plattform und App.", "CFD-Handel ist klar getrennt und mit Risikohinweis erklaert."],
    },
    seo: {
      ar: { title: "مراجعة XTB في ألمانيا", description: "نظرة عربية متوازنة على XTB: الأسهم وETFs وخطط الاستثمار والتطبيق والتداول والمخاطر." },
      de: { title: "XTB Erfahrungen: Aktien, ETFs, Sparplaene und Trading", description: "Sachliche Orientierung zu XTB in Deutschland: Anlagewege, Plattform, Kostenhinweise und Risiken." },
    },
    primaryCta: { campaign: "home", label: { ar: "الانتقال إلى موقع XTB", de: "Zu XTB wechseln" }, placement: "hero" },
    secondaryCta: { campaign: "mobile-app", label: { ar: "الانتقال إلى تطبيق XTB", de: "Zur XTB App wechseln" }, placement: "inline" },
    sections: [
      {
        title: { ar: "ما هو XTB؟", de: "Was ist XTB?" },
        body: {
          ar: ["XTB مزود تداول واستثمار عبر الإنترنت. في ألمانيا يوضح موقعه ومنصة الشركاء مسارات للأسهم وETFs وخطط الاستثمار، إضافة إلى منتجات تداول ذات مخاطر أعلى مثل CFDs.", "اختيار المنصة لا يغني عن فهم المنتج نفسه: شراء سهم أو ETF بدون رافعة يختلف جوهرياً عن تداول CFD بالرافعة."],
          de: ["XTB ist ein Online-Anbieter fuer Trading und Investieren. Fuer Deutschland beschreibt XTB Wege zu Aktien, ETFs und Sparplaenen sowie Handelsprodukte mit hoeherem Risiko wie CFDs.", "Die Wahl der Plattform ersetzt nicht das Verstaendnis des Produkts: Der Kauf einer Aktie oder eines ETFs ohne Hebel unterscheidet sich grundlegend vom CFD-Handel mit Hebel."],
        },
      },
      {
        title: { ar: "لمن قد تكون المنصة ذات صلة؟", de: "Fuer wen kann die Plattform relevant sein?" },
        body: {
          ar: ["قد تكون نقطة بداية لمن يريد استكشاف الاستثمار طويل الأمد في الأسهم أو ETFs، أو فهم كيفية عمل خطة استثمار دورية. لا يعني ذلك أن أي منتج مناسب تلقائياً لظروفك.", "إذا كان هدفك هو المضاربة قصيرة الأجل أو استخدام الرافعة، فاقرأ صفحة التداول وتحذير المخاطر بالكامل قبل فتح أي مسار."],
          de: ["Sie kann ein Einstieg fuer Menschen sein, die langfristige Aktien- oder ETF-Anlagen oder einen regelmaessigen Sparplan verstehen moechten. Das bedeutet nicht, dass ein Produkt automatisch zu deiner persoenlichen Situation passt.", "Wenn du kurzfristig handeln oder Hebel einsetzen willst, lies zuerst die Trading-Seite und den Risikohinweis vollstaendig."],
        },
      },
      {
        title: { ar: "الأسهم وETFs", de: "Aktien und ETFs" },
        body: {
          ar: ["الأسهم تمثل حصة في شركة واحدة، بينما ETF يجمع عادة عدداً من القيم أو يتتبع مؤشراً. كلاهما يمكن أن ينخفض في القيمة، لكن ETF قد يوفر انتشاراً أوسع من سهم منفرد.", "قبل الاستخدام، تحقق من جدول التكاليف، العملة، وحدود العمولات أو التحويل المعمول بها وقت فتح الحساب."],
          de: ["Aktien stehen fuer einen Anteil an einem einzelnen Unternehmen, waehrend ein ETF meist mehrere Werte buendelt oder einen Index abbildet. Beide koennen im Wert fallen; ein ETF kann jedoch breiter streuen als eine einzelne Aktie.", "Pruefe vor der Nutzung die aktuelle Kostenuebersicht, Waehrung und geltende Grenzen fuer Provisionen oder Umrechnungen."],
        },
      },
      {
        title: { ar: "خطط الاستثمار، الفائدة، التطبيق والمنصة", de: "Sparplaene, Zinsen, App und Plattform" },
        body: {
          ar: ["تساعد خطط الاستثمار على تنظيم المبالغ الدورية، لكنها لا تزيل مخاطر السوق. كما أن الفائدة على الرصيد غير المستثمر تعتمد على شروط قد تتغير ويجب مراجعتها مباشرة لدى المزود.", "يوفر XTB الوصول عبر منصة الويب والتطبيق. جرّب واجهة الاستخدام وراجع وظائفها وشروط الحساب قبل الاعتماد عليها."],
          de: ["Sparplaene koennen regelmaessige Betraege strukturieren, nehmen aber kein Marktrisiko weg. Zinsen auf nicht angelegtes Guthaben unterliegen Bedingungen, die sich aendern koennen und direkt beim Anbieter geprueft werden sollten.", "XTB bietet Zugriff ueber Web-Plattform und App. Pruefe Bedienung, Funktionen und Kontobedingungen, bevor du dich darauf verlaesst."],
        },
      },
      {
        title: { ar: "التكاليف والتنظيم وما يجب مراجعته", de: "Kosten, Regulierung und worauf du achten solltest" },
        body: {
          ar: ["لا تعتمد على عبارة تسويقية واحدة عن الرسوم. راجع دائماً تفاصيل العمولات، فروقات الأسعار، تحويل العملات، تكاليف الاحتفاظ، وشروط المنتجات المعروضة وقت التسجيل.", "راجع المعلومات القانونية والتنظيمية الحالية مباشرة لدى XTB، وافهم حماية الأموال وحدودها قبل تحويل أي مبلغ."],
          de: ["Verlasse dich nicht auf eine einzelne Werbeaussage zu Kosten. Pruefe immer die aktuell geltenden Angaben zu Provisionen, Spreads, Waehrungsumrechnung, Haltekosten und Produktbedingungen.", "Lies die aktuellen rechtlichen und regulatorischen Informationen direkt bei XTB und verstehe den Schutz von Geldern sowie dessen Grenzen, bevor du Geld einzahlst."],
        },
      },
      {
        title: { ar: "المزايا والقيود", de: "Staerken und Punkte zum Abwaegen" },
        body: {
          ar: ["من نقاط القوة وجود مسارات متعددة في مكان واحد، مثل الأسهم وETFs وخطط الاستثمار والتطبيق. هذا قد يسهل الانتقال بين التعلم والتنفيذ.", "في المقابل، كثرة المنتجات قد تربك المبتدئ، ووجود منتجات CFD عالية المخاطر يتطلب الفصل الواضح بين الاستثمار طويل الأجل والتداول النشط."],
          de: ["Eine Staerke ist die Buendelung mehrerer Wege wie Aktien, ETFs, Sparplaene und App in einem Angebot. Das kann den Weg vom Verstehen zur Umsetzung vereinfachen.", "Gleichzeitig kann die Produktvielfalt Einsteiger ueberfordern. CFD-Produkte mit hohem Risiko verlangen eine klare Trennung zwischen langfristigem Investieren und aktivem Trading."],
        },
      },
    ],
    faq: {
      ar: [
        { question: "هل XTB مناسب لكل شخص؟", answer: "لا. الملاءمة تعتمد على الهدف والمعرفة والمخاطر التي يمكنك تحملها. المحتوى هنا عام ولا يحدد ما هو الأنسب لك." },
        { question: "هل أبدأ بالتداول أو بالاستثمار؟", answer: "هما مساران مختلفان. ابدأ بفهم المنتج والمخاطر، ولا تعامل تداول CFD كبديل مكافئ للاستثمار طويل الأجل." },
      ],
      de: [
        { question: "Ist XTB fuer jede Person passend?", answer: "Nein. Das haengt von Zielen, Wissen und deiner Risikobereitschaft ab. Die Inhalte hier sind allgemein und treffen keine individuelle Eignungsentscheidung." },
        { question: "Soll ich mit Trading oder Investieren beginnen?", answer: "Das sind unterschiedliche Wege. Verstehe zuerst Produkt und Risiko und behandle CFD-Trading nicht als gleichwertigen Ersatz fuer langfristiges Investieren." },
      ],
    },
  },
  aktien: {
    slug: "aktien",
    title: { ar: "الأسهم", de: "Aktien" },
    eyebrow: { ar: "الاستثمار في الأسهم", de: "Aktien verstehen" },
    heroTitle: { ar: "ما هي الأسهم قبل أن تفكر في شرائها؟", de: "Was sind Aktien, bevor du sie kaufst?" },
    heroDescription: {
      ar: "السهم يمثل حصة في شركة. هنا ستجد الفرق بين الاستثمار طويل الأجل والتداول القصير، ولماذا لا تكفي حركة السعر وحدها لاتخاذ قرار.",
      de: "Eine Aktie steht fuer einen Anteil an einem Unternehmen. Hier lernst du den Unterschied zwischen langfristigem Investieren und kurzfristigem Handeln kennen - und warum ein Kurs allein keine Entscheidung ersetzt.",
    },
    highlights: {
      ar: ["السهم يرتبط بشركة واحدة ومخاطره مركزة.", "الأسهم الكسرية تعني الاستثمار بمبلغ بدل عدد كامل من الأسهم.", "التكلفة والعملة والضرائب أمور تستحق الفهم قبل الشراء."],
      de: ["Eine Aktie bezieht sich auf ein einzelnes Unternehmen und buendelt dessen Risiko.", "Bruchstuecke erlauben einen Betrag statt einer ganzen Aktie zu investieren.", "Kosten, Waehrung und Steuern gehoeren vor dem Kauf auf die Checkliste."],
    },
    seo: {
      ar: { title: "الاستثمار في الأسهم في ألمانيا", description: "شرح مبسط للأسهم والأسهم الكسرية والتكاليف والمخاطر قبل استخدام عرض XTB." },
      de: { title: "Aktien kaufen: Grundlagen, Kosten und Risiken", description: "Einfacher Einstieg in Aktien, Bruchstuecke, Kosten und Risiken mit einem passenden XTB-Angebot." },
    },
    primaryCta: { campaign: "stocks", label: { ar: "الانتقال إلى عرض الأسهم لدى XTB", de: "Zum XTB Aktien-Angebot" }, placement: "hero" },
    secondaryCta: { campaign: "etf", label: { ar: "تعرف على ETFs أيضاً", de: "Auch ETFs ansehen" }, placement: "inline" },
    sections: [
      {
        title: { ar: "الفكرة الأساسية", de: "Die Grundidee" },
        body: {
          ar: ["عندما تشتري سهماً، فأنت تتعرض لأداء شركة واحدة. قد يرتفع السعر أو ينخفض بسبب نتائج الشركة أو القطاع أو السوق الأوسع.", "لذلك لا تتعامل مع السهم كحساب ادخار أو كدخل مضمون. حتى الشركات المعروفة قد تمر بتقلبات قوية."],
          de: ["Mit einer Aktie beteiligst du dich an der Entwicklung eines einzelnen Unternehmens. Der Kurs kann wegen Unternehmenszahlen, Branche oder Gesamtmarkt steigen oder fallen.", "Behandle eine Aktie deshalb weder wie ein Sparkonto noch wie garantiertes Einkommen. Auch bekannte Unternehmen koennen stark schwanken."],
        },
      },
      {
        title: { ar: "الأسهم الكسرية", de: "Bruchstuecke von Aktien" },
        body: {
          ar: ["تسمح بعض المنصات بالاستثمار بمبلغ محدد بدلاً من شراء سهم كامل. هذا يسمى غالباً سهماً كسرياً، وقد يجعل البدء بمبالغ صغيرة ممكناً.", "تحقق من طريقة التنفيذ والحقوق المرتبطة بالأسهم الكسرية وشروط البيع أو التحويل لدى المزود."],
          de: ["Manche Plattformen erlauben einen festen Betrag statt einer ganzen Aktie. Das wird oft als Aktienbruchstueck bezeichnet und kann einen Einstieg mit kleineren Betraegen ermoeglichen.", "Pruefe beim Anbieter Ausfuehrung, Rechte bei Bruchstuecken sowie Bedingungen fuer Verkauf oder Uebertrag."],
        },
      },
      {
        title: { ar: "التكاليف والأفق الزمني", de: "Kosten und Zeithorizont" },
        body: {
          ar: ["راجع العمولة وتحويل العملة وفروق الأسعار والضرائب المحتملة. قد تبدو التكاليف الصغيرة غير مهمة في عملية واحدة لكنها تؤثر عند تكرار الشراء والبيع.", "اختر أفقاً زمنياً واقعياً ولا تضع أموالاً تحتاجها قريباً في استثمار قد تنخفض قيمته."],
          de: ["Pruefe Provisionen, Waehrungsumrechnung, Spreads und moegliche Steuern. Kleine Kosten wirken bei einer Transaktion gering, koennen bei haeufigem Kaufen und Verkaufen aber relevant werden.", "Waehle einen realistischen Zeithorizont und investiere kein Geld, das du kurzfristig benoetigst, in einen Wert, der fallen kann."],
        },
      },
    ],
    faq: {
      ar: [{ question: "هل السهم استثمار مضمون؟", answer: "لا. قيمة الأسهم يمكن أن تنخفض وقد تخسر جزءاً أو كل المبلغ المستثمر." }],
      de: [{ question: "Sind Aktien garantiert?", answer: "Nein. Aktienkurse koennen fallen; ein Verlust eines Teils oder des gesamten eingesetzten Kapitals ist moeglich." }],
    },
  },
  etf: {
    slug: "etf",
    title: { ar: "صناديق ETF", de: "ETFs" },
    eyebrow: { ar: "فهم ETFs", de: "ETFs verstehen" },
    heroTitle: { ar: "ETF: انتشار أوسع لا يعني غياب المخاطر", de: "ETF: Breitere Streuung bedeutet nicht risikofrei" },
    heroDescription: {
      ar: "صندوق ETF يتتبع عادة مجموعة من الأوراق المالية أو مؤشراً. تعرف على التنويع، وTER، والفرق بين التوزيع وإعادة الاستثمار قبل اختيار أي منتج.",
      de: "Ein ETF bildet meist eine Gruppe von Wertpapieren oder einen Index ab. Verstehe Diversifikation, TER sowie ausschüttende und thesaurierende Varianten, bevor du ein Produkt auswaehlst.",
    },
    highlights: {
      ar: ["ETF قد يوزع المخاطر على قيم متعددة، لكنه لا يمنع الخسارة.", "TER هي التكلفة السنوية الجارية للصندوق.", "النسخة الموزعة تختلف عن المعيدة للاستثمار."],
      de: ["Ein ETF kann Risiko auf mehrere Werte verteilen, verhindert Verluste aber nicht.", "Die TER ist die laufende Jahreskostenquote eines Fonds.", "Ausschuettende und thesaurierende Varianten funktionieren unterschiedlich."],
    },
    seo: {
      ar: { title: "ما هو ETF؟ دليل ETF للمقيمين في ألمانيا", description: "شرح ETF والتنويع وTER وخطط ETF الاستثمارية مع رابط XTB مناسب." },
      de: { title: "ETF einfach erklaert: Diversifikation, TER und Sparplan", description: "Verstehe ETFs, Streuung, TER sowie ETF-Sparplaene und sieh dir das XTB ETF-Angebot an." },
    },
    primaryCta: { campaign: "etf", label: { ar: "الانتقال إلى عرض ETFs لدى XTB", de: "Zum XTB ETF-Angebot" }, placement: "hero" },
    secondaryCta: { campaign: "investment-plans-etf", label: { ar: "اكتشف خطة ETF الدورية", de: "ETF-Sparplan entdecken" }, placement: "inline" },
    sections: [
      {
        title: { ar: "كيف يعمل ETF؟", de: "Wie funktioniert ein ETF?" },
        body: {
          ar: ["ETF هو صندوق يتداول في البورصة وقد يتتبع مؤشراً أو موضوعاً أو مجموعة من الأصول. النتيجة تعتمد على ما يحتويه الصندوق وكيف يتحرك السوق.", "التنويع قد يخفف اعتمادك على شركة واحدة، لكنه لا يحمي من هبوط السوق أو من مخاطر قطاع أو منطقة محددة."],
          de: ["Ein ETF ist ein boersengehandelter Fonds, der einen Index, ein Thema oder eine Gruppe von Vermoegenswerten abbilden kann. Das Ergebnis haengt vom Inhalt des Fonds und von der Marktentwicklung ab.", "Diversifikation kann die Abhaengigkeit von einem einzelnen Unternehmen senken, schuetzt aber nicht vor Marktrueckgaengen oder Risiken einer Branche oder Region."],
        },
      },
      {
        title: { ar: "التوزيع أو إعادة الاستثمار وTER", de: "Ausschuettend oder thesaurierend und die TER" },
        body: {
          ar: ["قد يدفع ETF الموزع العوائد نقداً، بينما يعيد ETF المعيد للاستثمار إدخالها في الصندوق. لا توجد صيغة أفضل للجميع؛ المهم فهم الأثر على خطتك وضرائبك.", "TER هي نسبة التكاليف السنوية للصندوق، لكنها ليست التكلفة الوحيدة الممكنة. راجع أيضاً تكاليف المنصة والشراء وتحويل العملة."],
          de: ["Ein ausschuettender ETF kann Ertraege auszahlen, ein thesaurierender ETF legt sie im Fonds wieder an. Keine Variante ist fuer alle besser; wichtig ist der Effekt auf Plan und Steuern.", "Die TER ist die laufende Kostenquote eines Fonds, aber nicht die einzige moegliche Kostenposition. Pruefe auch Plattform-, Kauf- und Waehrungsumrechnungskosten."],
        },
      },
      {
        title: { ar: "صلة ETF بخطط الاستثمار", de: "ETFs und Sparplaene" },
        body: {
          ar: ["يمكن شراء ETF دفعة واحدة أو بشكل دوري عبر خطة استثمار، بحسب ما يتيحه المزود. الاستثمار الدوري لا يضمن عائداً لكنه قد يساعد على الالتزام بمبلغ منتظم.", "استخدم الحاسبة في صفحة خطط الاستثمار كتمرين توضيحي فقط، وليس كتوقع لنتيجة حقيقية."],
          de: ["Ein ETF kann einmalig oder regelmaessig per Sparplan gekauft werden, wenn der Anbieter dies anbietet. Regelmaessiges Investieren garantiert keine Rendite, kann aber helfen, einen festen Betrag zu strukturieren.", "Nutze den Rechner auf der Sparplan-Seite nur als Beispiel und nicht als Vorhersage eines echten Ergebnisses."],
        },
      },
    ],
    faq: {
      ar: [{ question: "هل ETF أفضل من السهم دائماً؟", answer: "ليس دائماً. ETF يختلف في طريقة الانتشار والتكاليف والتركيب، لكن الاختيار يعتمد على ما تفهمه وعلى تحملك للمخاطر." }],
      de: [{ question: "Ist ein ETF immer besser als eine Aktie?", answer: "Nein. Ein ETF unterscheidet sich bei Streuung, Kosten und Aufbau. Die Entscheidung haengt davon ab, was du verstehst und welches Risiko du tragen kannst." }],
    },
  },
  sparplan: {
    slug: "sparplan",
    title: { ar: "خطط الاستثمار", de: "Sparplaene" },
    eyebrow: { ar: "استثمار دوري", de: "Regelmaessig investieren" },
    heroTitle: { ar: "افهم خطة الاستثمار قبل جعلها تلقائية", de: "Verstehe einen Sparplan, bevor du ihn automatisierst" },
    heroDescription: {
      ar: "خطة الاستثمار هي طريقة لوضع مبلغ دوري في منتجات استثمارية. تعرّف على المرونة والمبالغ الدورية والمخاطر، ثم استخدم الحاسبة كتوضيح رياضي فقط.",
      de: "Ein Sparplan ist eine Methode, regelmaessig Geld in Anlageprodukte einzuzahlen. Verstehe Flexibilitaet, regelmaessige Betraege und Risiken und nutze den Rechner nur als mathematisches Beispiel.",
    },
    highlights: {
      ar: ["المبلغ الدوري لا يجعل القيمة المستقبلية مضمونة.", "الاستثمار الجزئي قد يجعل المبالغ الصغيرة قابلة للتنفيذ.", "المرونة وشروط الإيقاف والتعديل تحتاج مراجعة مباشرة."],
      de: ["Ein regelmaessiger Betrag macht den spaeteren Wert nicht sicher.", "Teilinvestitionen koennen kleinere Betraege moeglich machen.", "Flexibilitaet sowie Pausen- und Aenderungsbedingungen solltest du direkt pruefen."],
    },
    seo: {
      ar: { title: "خطة ETF الاستثمارية في ألمانيا", description: "شرح خطط الاستثمار وETF Sparplan مع حاسبة توضيحية وروابط XTB المناسبة." },
      de: { title: "ETF Sparplan und Investitionsplan einfach erklaert", description: "Verstehe regelmaessiges Investieren mit ETF- und Aktiensparplaenen inklusive unverbindlichem Beispielrechner." },
    },
    primaryCta: { campaign: "investment-plans", label: { ar: "الانتقال إلى خطط الاستثمار لدى XTB", de: "Zu den XTB Sparplaenen" }, placement: "hero" },
    secondaryCta: { campaign: "investment-plans-etf", label: { ar: "اكتشف خطة ETF لدى XTB", de: "XTB ETF-Sparplan entdecken" }, placement: "calculator-result" },
    sections: [
      {
        title: { ar: "ما هي خطة الاستثمار؟", de: "Was ist ein Sparplan?" },
        body: {
          ar: ["في خطة الاستثمار، يضع المستخدم مبلغاً دورياً في منتج أو مجموعة منتجات. قد تكون الخطة مرتبطة بـ ETFs أو أسهم أو تركيبة منهما، بحسب العرض المتاح.", "انتظام الدفع لا يلغي تقلب السوق، ولا يضمن أن تبيع لاحقاً بأعلى من إجمالي ما دفعته."],
          de: ["Bei einem Sparplan wird regelmaessig ein Betrag in ein Produkt oder eine Produktgruppe eingezahlt. Je nach Angebot kann der Plan ETFs, Aktien oder eine Kombination enthalten.", "Regelmaessige Einzahlungen nehmen keine Marktschwankungen weg und garantieren nicht, dass du spaeter mehr erhaeltst als du eingezahlt hast."],
        },
      },
      {
        title: { ar: "المبالغ الصغيرة والمرونة", de: "Kleine Betraege und Flexibilitaet" },
        body: {
          ar: ["إمكانية البدء بمبلغ صغير أو تعديل المبلغ لاحقاً تعتمد على شروط المزود والمنتج. اقرأ القواعد الخاصة بالتنفيذ، الإيقاف، الرسوم، والحد الأدنى قبل التفعيل.", "لا تجعل الدفع التلقائي بديلاً عن مراجعة ميزانيتك أو صندوق الطوارئ."],
          de: ["Ob du klein starten oder Betraege spaeter aendern kannst, haengt von Anbieter und Produktbedingungen ab. Lies Regeln zu Ausfuehrung, Pause, Kosten und Mindestbetraegen vor der Aktivierung.", "Automatisches Einzahlen ersetzt nicht den Blick auf Budget oder Notgroschen."],
        },
      },
      {
        title: { ar: "متى تحتاج إلى مراجعة الخطة؟", de: "Wann solltest du einen Plan pruefen?" },
        body: {
          ar: ["راجع الخطة عندما يتغير دخلك أو هدفك أو قدرتك على تحمل الخسارة. التعديل لا يجب أن يكون رد فعل على كل حركة يومية في السوق.", "إذا كان المال مطلوباً قريباً، ففكر بحذر قبل ربطه بأصول تتقلب قيمتها."],
          de: ["Pruefe den Plan, wenn sich Einkommen, Ziel oder Risikobereitschaft aendern. Eine Aenderung muss keine Reaktion auf jede taegliche Marktbewegung sein.", "Wenn du das Geld bald brauchst, ueberlege besonders vorsichtig, bevor du es an Werte mit schwankendem Kurs bindest."],
        },
      },
    ],
    faq: {
      ar: [{ question: "هل يمكن أن تخسر خطة الاستثمار؟", answer: "نعم. قيمة الاستثمارات يمكن أن تنخفض، وحتى الاستثمار الدوري لا يمنع الخسائر." }],
      de: [{ question: "Kann ein Sparplan Verluste machen?", answer: "Ja. Anlagewerte koennen fallen, und regelmaessiges Investieren verhindert Verluste nicht." }],
    },
  },
  zinsen: {
    slug: "zinsen",
    title: { ar: "فائدة الرصيد غير المستثمر", de: "Zinsen auf Guthaben" },
    eyebrow: { ar: "فهم الفائدة على الرصيد", de: "Guthabenzinsen verstehen" },
    heroTitle: { ar: "الفائدة على الرصيد: راجع الشروط قبل الاعتماد عليها", de: "Zinsen auf Guthaben: Bedingungen zuerst pruefen" },
    heroDescription: {
      ar: "قد يقدم المزود فائدة على مبالغ غير مستثمرة. السعر والشروط والعملات وحدود الأهلية قابلة للتغيير، لذلك لا نعتمد رقماً ثابتاً هنا.",
      de: "Ein Anbieter kann Zinsen auf nicht angelegtes Guthaben zahlen. Satz, Bedingungen, Waehrungen und Anspruchsgrenzen koennen sich aendern; deshalb nennen wir hier keinen festen Wert.",
    },
    highlights: {
      ar: ["الفائدة ليست عائداً مضموناُ دائماً أو إلى الأبد.", "العملات والشروط والحدود قد تؤثر على العائد الفعلي.", "الرصيد غير المستثمر يختلف عن استثمار في ETF أو سهم."],
      de: ["Zinsen sind nicht zwingend dauerhaft oder unveraenderlich garantiert.", "Waehrungen, Bedingungen und Grenzen koennen den tatsaechlichen Ertrag beeinflussen.", "Nicht angelegtes Guthaben unterscheidet sich von einer Anlage in ETF oder Aktie."],
    },
    seo: {
      ar: { title: "فائدة على الرصيد غير المستثمر لدى XTB", description: "شرح عربي لشروط ومخاطر الفائدة على الرصيد غير المستثمر قبل زيارة عرض XTB." },
      de: { title: "Zinsen auf nicht angelegtes Guthaben bei XTB", description: "Verstehe Bedingungen, Aenderungsrisiken und Abgrenzung zu Geldanlage vor dem XTB-Angebot." },
    },
    primaryCta: { campaign: "interest", label: { ar: "الانتقال إلى عرض الفائدة لدى XTB", de: "Zum XTB Zinsangebot" }, placement: "hero" },
    sections: [
      {
        title: { ar: "ما المقصود بالفائدة على الرصيد؟", de: "Was bedeutet Zins auf Guthaben?" },
        body: {
          ar: ["المقصود هو احتمال دفع فائدة على مبالغ نقدية غير مستثمرة في الحساب، وفق شروط يحددها المزود. هذا لا يعني أن كل رصيد أو كل عملة أو كل فترة تتلقى نفس المعاملة.", "الفائدة لا تحول الحساب تلقائياً إلى بديل كامل لحساب التوفير أو للطوارئ؛ راجع درجة الحماية والشروط الفعلية."],
          de: ["Gemeint ist die moegliche Verzinsung von nicht investierten Geldbestaenden im Konto nach Bedingungen des Anbieters. Das bedeutet nicht, dass jedes Guthaben, jede Waehrung oder jeder Zeitraum gleich behandelt wird.", "Die Verzinsung macht ein Konto nicht automatisch zu einem vollwertigen Ersatz fuer Tagesgeld oder Notgroschen. Pruefe Schutz und konkrete Bedingungen."],
        },
      },
      {
        title: { ar: "لماذا لا نذكر نسبة ثابتة؟", de: "Warum nennen wir keinen festen Zinssatz?" },
        body: {
          ar: ["تتغير المعدلات والعروض وشروط الأهلية. نشر رقم قديم قد يؤدي إلى قرار خاطئ، لذلك يجب قراءة المعلومات الحالية في وجهة الشريك قبل التسجيل أو الإيداع.", "انتبه إلى تاريخ سريان العرض، العملة، المدة، الحدود القصوى، وما إذا كانت هناك شروط مرتبطة بالحساب."],
          de: ["Saetze, Aktionen und Anspruchsbedingungen koennen sich aendern. Eine alte Zahl kann zu einer falschen Entscheidung fuehren; lies deshalb die aktuelle Partnerinformation vor Registrierung oder Einzahlung.", "Achte auf Geltungsdatum, Waehrung, Zeitraum, Hoechstgrenzen und moegliche Kontobedingungen."],
        },
      },
    ],
    faq: {
      ar: [{ question: "هل الفائدة مضمونة في المستقبل؟", answer: "لا نفترض ذلك. تحقق دائماً من السعر والشروط الحالية مباشرة لدى المزود." }],
      de: [{ question: "Sind die Zinsen kuenftig garantiert?", answer: "Davon sollte man nicht ausgehen. Pruefe Satz und Bedingungen immer direkt beim Anbieter." }],
    },
  },
  trading: {
    slug: "trading",
    title: { ar: "التداول وCFD", de: "Trading und CFDs" },
    eyebrow: { ar: "مسار عالي المخاطر", de: "Hoeheres Risiko" },
    heroTitle: { ar: "التداول النشط وCFD ليسا بديلاً عن الاستثمار الطويل", de: "Aktives Trading und CFDs sind kein Ersatz fuer langfristiges Investieren" },
    heroDescription: {
      ar: "تداول Forex والسلع والمؤشرات عبر CFDs قد يتضمن رافعة مالية وخطر خسارة مرتفع. ابدأ بفهم الرافعة والسبريد والسواب قبل فتح أي عرض.",
      de: "Trading mit Forex, Rohstoffen und Indizes ueber CFDs kann Hebel und ein hohes Verlustrisiko beinhalten. Verstehe Hebel, Spreads und Swaps, bevor du ein Angebot oeffnest.",
    },
    highlights: {
      ar: ["الرافعة يمكن أن تضخم الربح والخسارة.", "السبريد والسواب يؤثران في تكلفة المركز.", "CFD ليس امتلاكاً مباشراً للأصل في العادة."],
      de: ["Hebel kann Gewinne und Verluste verstaerken.", "Spreads und Swaps beeinflussen die Kosten einer Position.", "Ein CFD ist in der Regel kein direkter Besitz des Basiswerts."],
    },
    seo: {
      ar: { title: "تداول CFD وForex والسلع والمؤشرات", description: "شرح عربي منفصل لتداول CFD والرافعة والمخاطر مع مسارات XTB للفوركس والسلع والمؤشرات." },
      de: { title: "CFD Trading: Forex, Rohstoffe und Indizes verstehen", description: "Getrennte Einordnung von CFD-Handel, Hebel, Spreads, Swaps und den Risiken bei Forex, Rohstoffen und Indizes." },
    },
    sections: [
      {
        title: { ar: "ما هو CFD؟", de: "Was ist ein CFD?" },
        body: {
          ar: ["CFD هو عقد على فرق السعر، وليس عادة شراءً مباشراً للسهم أو ETF أو السلعة. النتيجة تعتمد على اتجاه السعر وحجم المركز والتكاليف المرتبطة به.", "لأن التداول قد يستخدم الرافعة، يمكن أن تتحرك النتيجة أسرع من حركة الأصل الأساسي."],
          de: ["Ein CFD ist ein Vertrag auf eine Kursdifferenz und in der Regel kein direkter Kauf einer Aktie, eines ETFs oder einer Ware. Das Ergebnis haengt von Kursrichtung, Positionsgroesse und verbundenen Kosten ab.", "Weil Trading Hebel einsetzen kann, kann sich das Ergebnis schneller bewegen als der zugrunde liegende Markt."],
        },
      },
      {
        title: { ar: "الرافعة والسبريد والسواب", de: "Hebel, Spread und Swap" },
        body: {
          ar: ["الرافعة تتيح التعرض لحركة أكبر بمبلغ أقل، لكنها تضخم أيضاً الخسائر. السبريد هو فرق السعر بين الشراء والبيع، والسواب قد يرتبط بالاحتفاظ بالمركز لليوم التالي.", "قبل التداول، افهم متى تفتح الصفقة، ومتى يمكن أن تغلق، وما هي الخسارة التي يمكنك تحملها فعلاً."],
          de: ["Hebel ermoeglicht eine groessere Marktbewegung mit kleinerem Einsatz, verstaerkt aber auch Verluste. Der Spread ist die Differenz zwischen Kauf- und Verkaufskurs, ein Swap kann beim Halten ueber Nacht anfallen.", "Verstehe vor dem Trading, wann eine Position eroeffnet oder geschlossen werden kann und welchen Verlust du tatsaechlich tragen kannst."],
        },
      },
      {
        title: { ar: "Forex والسلع والمؤشرات", de: "Forex, Rohstoffe und Indizes" },
        body: {
          ar: ["Forex يتعلق بأزواج العملات. السلع قد تشمل أسواقاً مثل المعادن أو الطاقة، والمؤشرات تمثل سلالاً من الأسهم. كل مسار له عوامل سعر ومخاطر مختلفة.", "هذه صفحة تعليمية عامة. لا تستخدمها كإشارة للشراء أو البيع أو كتوصية بحجم صفقة."],
          de: ["Forex betrifft Waehrungspaare. Rohstoffe koennen Maerkte wie Metalle oder Energie umfassen, Indizes bilden Koerbe von Aktien ab. Jeder Weg hat eigene Kurstreiber und Risiken.", "Diese Seite ist allgemeine Bildung. Sie ist kein Signal zum Kaufen oder Verkaufen und keine Empfehlung fuer eine Positionsgroesse."],
        },
      },
    ],
    tradingCtas: [
      { campaign: "forex", label: { ar: "الانتقال إلى تداول Forex لدى XTB", de: "Zum XTB Forex-Angebot" }, placement: "comparison-card" },
      { campaign: "commodities", label: { ar: "الانتقال إلى السلع لدى XTB", de: "Zum XTB Rohstoff-Angebot" }, placement: "comparison-card" },
      { campaign: "indices", label: { ar: "الانتقال إلى المؤشرات لدى XTB", de: "Zum XTB Indizes-Angebot" }, placement: "comparison-card" },
    ],
    faq: {
      ar: [{ question: "هل CFD مناسب للاستثمار طويل الأجل؟", answer: "CFD منتج تداول عالي المخاطر وليس مكافئاً تلقائياً لامتلاك سهم أو ETF على المدى الطويل." }],
      de: [{ question: "Sind CFDs fuer langfristiges Investieren gedacht?", answer: "CFDs sind risikoreiche Trading-Produkte und nicht automatisch mit dem langfristigen Besitz einer Aktie oder eines ETFs gleichzusetzen." }],
    },
  },
};

export const investmentFinderOptions = [
  { key: "sparplan", page: "sparplan", title: { ar: "استثمار مبلغ شهري", de: "Monatlich investieren" }, description: { ar: "لفهم خطط الاستثمار والمبالغ الدورية.", de: "Um Sparplaene und regelmaessige Betraege zu verstehen." } },
  { key: "stocks", page: "aktien", title: { ar: "التعرف على الأسهم", de: "Einzelne Aktien verstehen" }, description: { ar: "لفهم الشركات والأسهم الكسرية والتكاليف.", de: "Um Unternehmen, Bruchstuecke und Kosten zu verstehen." } },
  { key: "etf", page: "etf", title: { ar: "التعرف على ETFs", de: "ETFs verstehen" }, description: { ar: "لفهم التنويع وTER وخطط ETF.", de: "Um Streuung, TER und ETF-Sparplaene zu verstehen." } },
  { key: "interest", page: "zinsen", title: { ar: "فائدة الرصيد النقدي", de: "Zinsen auf Guthaben" }, description: { ar: "لفهم الشروط قبل الاعتماد على أي سعر.", de: "Um Bedingungen vor einer Zinsentscheidung zu verstehen." } },
  { key: "trading", page: "trading", title: { ar: "التداول النشط", de: "Aktives Trading" }, description: { ar: "لفهم CFDs والمخاطر قبل فتح أي أداة.", de: "Um CFDs und Risiken vor einem Tool zu verstehen." } },
] as const;

export function getInvestmentPage(slug: string) {
  return investmentPages[slug as InvestmentPageSlug];
}
