import type { Locale } from "@/src/config/site";

type LocalizedText = Record<Locale, string>;
type LocalizedParagraphs = Record<Locale, string[]>;

type LegalSection = {
  heading: LocalizedText;
  body: LocalizedParagraphs;
};

export const siteProfile = {
  brandName: "ArabVergleich",
  domain: "https://arabvergleich.de",
  contactEmail: "info@arabvergleich.de",
  phone: "",
  ownerName: "Omar Al-Ezzi",
  street: "Vautierstr. 57",
  postalCodeCity: "40237 Duesseldorf",
  country: "Deutschland",
  responsiblePerson: "Omar Al-Ezzi",
  taxNumber: "89830456129",
} as const;

export const seoDefaults = {
  titleTemplate: "%s | ArabVergleich",
  defaultTitle: "ArabVergleich",
  descriptions: {
    ar: "ArabVergleich يساعد المستخدم العربي في ألمانيا على فهم المقارنات الأساسية واختيار الخدمات بطريقة أبسط.",
    de: "ArabVergleich hilft arabischsprachigen Menschen in Deutschland dabei, wichtige Vergleiche einfacher zu verstehen und passende Dienste leichter auszuwaehlen.",
  },
  keywords: {
    ar: [
      "مقارنة الخدمات في ألمانيا",
      "مقارنة الإنترنت في ألمانيا",
      "مقارنة الكهرباء في ألمانيا",
      "مقارنة الغاز في ألمانيا",
      "عروض الموبايل في ألمانيا",
      "ArabVergleich",
    ],
    de: [
      "Dienstleistungen in Deutschland vergleichen",
      "DSL Vergleich Deutschland",
      "Stromvergleich Deutschland",
      "Gasvergleich Deutschland",
      "Mobilfunk Vergleich Deutschland",
      "ArabVergleich",
    ],
  },
} as const;

export const contentWorkflow = {
  quickEditFiles: [
    "src/content/serviceCatalog.ts",
    "src/content/siteContent.ts",
    "src/content/siteSettings.ts",
    "src/config/affiliateTools.ts",
    "src/config/site.ts",
  ],
} as const;

export const legalContent = {
  impressum: {
    intro: {
      ar: "هذه الصفحة تعرض البيانات القانونية الأساسية الخاصة بموقع ArabVergleich بصيغة ثنائية اللغة لسهولة الفهم. في حال الحاجة إلى تقييم قانوني ملزم، يُنصح بالرجوع إلى مختص قانوني.",
      de: "Diese Seite enthaelt die grundlegenden rechtlichen Angaben fuer ArabVergleich in zweisprachiger Form. Fuer eine verbindliche rechtliche Bewertung sollte bei Bedarf fachkundiger rechtlicher Rat eingeholt werden.",
    },
    operatorCardTitle: {
      ar: "بيانات صاحب الموقع",
      de: "Angaben zum Betreiber",
    },
    contactCardTitle: {
      ar: "التواصل والمسؤولية",
      de: "Kontakt und Verantwortung",
    },
    taxCardTitle: {
      ar: "البيانات الضريبية",
      de: "Steuerliche Angaben",
    },
    check24Title: {
      ar: "ملاحظة بخصوص برامج الشراكة",
      de: "Hinweis zu Partnerprogrammen",
    },
    contactBody: {
      ar: [
        "للتواصل بخصوص الموقع أو الاستفسارات القانونية يمكن استخدام البريد الإلكتروني المذكور أدناه.",
        "لا يتم حالياً نشر رقم هاتف عام للموقع. لذلك تتم المراسلات الأساسية عبر البريد الإلكتروني.",
      ],
      de: [
        "Fuer Rueckfragen zur Website oder zu rechtlichen Angaben kann die unten genannte E-Mail-Adresse verwendet werden.",
        "Eine oeffentliche Telefonnummer wird derzeit nicht veroeffentlicht. Die wesentliche Kommunikation erfolgt daher per E-Mail.",
      ],
    },
    check24Body: {
      ar: [
        "يستخدم هذا الموقع روابط وأدوات مقارنة من شركاء خارجيين، وخصوصاً CHECK24 وTarifcheck، وفي قسم الاستثمار قد تظهر أيضاً روابط شراكة إلى XTB.",
        "عند استخدام الأدوات أو الضغط على بعض روابط الشراكة قد نحصل على عمولة أو تعويض تسويقي. شروط ورسوم الشريك المعروضة عند فتح الرابط هي المرجع قبل التسجيل أو إتمام أي طلب.",
        "عند تحميل هذه الأدوات أو الانتقال إلى شريك خارجي قد يتم نقل بيانات تقنية بحسب طريقة عمله وسياسة الخصوصية الخاصة به.",
      ],
      de: [
        "Diese Website nutzt Partnerlinks und Vergleichstools externer Anbieter, insbesondere von CHECK24 und Tarifcheck. Im Investment-Bereich koennen zudem Partnerlinks zu XTB erscheinen.",
        "Bei Nutzung der Tools oder beim Anklicken bestimmter Partnerlinks koennen wir eine Provision oder Werbekostenerstattung erhalten. Vor einer Registrierung oder Anfrage sind die beim Partner angezeigten Bedingungen und Kosten massgeblich.",
        "Beim Laden solcher Tools oder beim Wechsel zu einem externen Partner koennen technische Daten gemaess der Funktionsweise und den Datenschutzhinweisen des jeweiligen Anbieters uebermittelt werden.",
      ],
    },
  },
  datenschutz: {
    intro: {
      ar: "تشرح هذه الصفحة بشكل مبسط كيف يمكن معالجة البيانات عند زيارة الموقع أو استخدام أدوات المقارنة المضمنة فيه. بما أن الموقع يستخدم أدوات خارجية من CHECK24 وTarifcheck، يجب أخذ سياسات الخصوصية الخاصة بهم بعين الاعتبار أيضاً.",
      de: "Diese Seite erklaert in vereinfachter Form, wie Daten beim Besuch der Website oder bei der Nutzung eingebundener Vergleichstools verarbeitet werden koennen. Da die Website externe Tools von CHECK24 und Tarifcheck nutzt, sollten auch deren Datenschutzhinweise beachtet werden.",
    },
    sections: [
      {
        heading: {
          ar: "1. نظرة عامة",
          de: "1. Allgemeine Hinweise",
        },
        body: {
          ar: [
            "نحن نتعامل مع البيانات الشخصية فقط بالقدر اللازم لتشغيل الموقع وتحسين تجربة الاستخدام والرد على الرسائل.",
            "يتم تحديث هذه الصفحة عند حدوث تغييرات جوهرية في الأدوات المستخدمة أو في طريقة معالجة البيانات داخل الموقع.",
          ],
          de: [
            "Wir verarbeiten personenbezogene Daten nur insoweit, wie dies fuer den Betrieb der Website, die Nutzerfreundlichkeit und die Kommunikation erforderlich ist.",
            "Diese Seite wird aktualisiert, wenn sich die eingesetzten Tools oder die Verarbeitung personenbezogener Daten auf der Website wesentlich aendern.",
          ],
        },
      },
      {
        heading: {
          ar: "2. ملفات السجل والاستضافة",
          de: "2. Hosting und Server-Logfiles",
        },
        body: {
          ar: [
            "عند زيارة الموقع قد يقوم مزود الاستضافة تلقائياً بتخزين بيانات تقنية مثل عنوان IP، نوع المتصفح، وقت الزيارة، والصفحات المطلوبة من أجل الأمان والتشغيل التقني.",
            "هذه البيانات تستخدم عادة لحماية الخدمة واستقرارها ولا يتم استخدامها هنا لاتخاذ قرارات شخصية عن الزائر.",
            "الاستضافة نفسها قد تولد سجلات تقنية مؤقتة وفقاً للمتطلبات الأمنية والتشغيلية الخاصة بمزود الاستضافة.",
          ],
          de: [
            "Beim Besuch der Website kann der Hosting-Anbieter technische Daten wie IP-Adresse, Browsertyp, Uhrzeit und aufgerufene Seiten automatisch speichern, um Sicherheit und Stabilitaet zu gewaehrleisten.",
            "Diese Daten dienen in der Regel dem technischen Betrieb und der Abwehr von Missbrauch.",
            "Das Hosting kann zudem temporaere technische Protokolle gemaess den betrieblichen und sicherheitsrelevanten Anforderungen des Hosting-Anbieters erzeugen.",
          ],
        },
      },
      {
        heading: {
          ar: "3. روابط الشراكة وأدوات المقارنة",
          de: "3. Partnerlinks und Vergleichstools",
        },
        body: {
          ar: [
            "بعض الصفحات تحتوي على روابط شراكة أو أدوات مقارنة خارجية مثل CHECK24 وTarifcheck، وقد تحتوي صفحات الاستثمار على روابط إلى XTB. عند تحميل الأداة أو الانتقال إلى الرابط قد يتم الاتصال بخوادم الطرف الخارجي.",
            "إذا ضغط المستخدم على رابط شراكة أو استخدم أداة مقارنة، فقد تنتقل بيانات تقنية أو بيانات استخدام إلى الجهة الشريكة بحسب طريقة عمل الأداة نفسها.",
          ],
          de: [
            "Einige Seiten enthalten Partnerlinks oder externe Vergleichstools, zum Beispiel von CHECK24 und Tarifcheck. Investment-Seiten koennen zudem Links zu XTB enthalten. Beim Laden dieser Inhalte oder beim Wechsel ueber einen Link kann eine Verbindung zu Servern des jeweiligen Partners aufgebaut werden.",
            "Wenn Nutzerinnen oder Nutzer Partnerlinks anklicken oder Vergleichstools verwenden, koennen technische Daten oder Nutzungsdaten an den jeweiligen Anbieter uebermittelt werden.",
          ],
        },
      },
      {
        heading: {
          ar: "4. ملفات تعريف الارتباط",
          de: "4. Cookies",
        },
        body: {
          ar: [
            "قد يستخدم الموقع أو الأدوات المضمنة ملفات تعريف ارتباط تقنية أو وظيفية. إذا تم لاحقاً إضافة بانر موافقة أو أدوات تحليل، يجب توثيق ذلك هنا بشكل أوضح.",
            "بحسب الأداة الخارجية المستخدمة، قد يتم أيضاً تخزين أو قراءة معلومات تقنية داخل المتصفح من قبل الشريك الخارجي.",
          ],
          de: [
            "Die Website oder eingebundene Tools koennen technisch notwendige oder funktionale Cookies verwenden. Falls spaeter ein Consent-Banner oder Analyse-Tools eingebunden werden, sollte dieser Abschnitt erweitert werden.",
            "Je nach eingebundenem Drittanbieter-Tool koennen zudem technische Informationen im Browser gespeichert oder ausgelesen werden.",
          ],
        },
      },
      {
        heading: {
          ar: "5. التواصل عبر البريد الإلكتروني",
          de: "5. Kontaktaufnahme per E-Mail",
        },
        body: {
          ar: [
            "إذا تواصل معنا المستخدم عبر البريد الإلكتروني، فسيتم استخدام البيانات المرسلة فقط لمعالجة الطلب والرد عليه عبر العنوان info@arabvergleich.de.",
            "يتم الاحتفاظ بهذه البيانات فقط بالقدر اللازم لمعالجة المراسلة، ما لم توجد التزامات قانونية أخرى للاحتفاظ بها.",
          ],
          de: [
            "Wenn du uns per E-Mail kontaktierst, verwenden wir die uebersandten Daten ausschliesslich zur Bearbeitung der Anfrage und zur Kommunikation ueber info@arabvergleich.de.",
            "Die Daten werden nur so lange gespeichert, wie dies fuer die Bearbeitung der Nachricht erforderlich ist, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.",
          ],
        },
      },
      {
        heading: {
          ar: "6. حقوق المستخدم",
          de: "6. Rechte betroffener Personen",
        },
        body: {
          ar: [
            "يحق للمستخدم عادة طلب معلومات عن بياناته، أو تصحيحها، أو حذفها، أو تقييد معالجتها، وفقاً لما يسمح به القانون.",
            "للتواصل بخصوص هذه الطلبات يمكن استخدام البريد الإلكتروني المذكور في هذه الصفحة.",
          ],
          de: [
            "Betroffene Personen haben im gesetzlichen Rahmen in der Regel das Recht auf Auskunft, Berichtigung, Loeschung oder Einschraenkung der Verarbeitung ihrer Daten.",
            "Fuer entsprechende Anfragen kann die auf dieser Website genannte Kontakt-E-Mail verwendet werden.",
          ],
        },
      },
    ] satisfies LegalSection[],
  },
  about: {
    sections: [
      {
        heading: {
          ar: "فكرة الموقع",
          de: "Die Idee hinter der Seite",
        },
        body: {
          ar: [
            "ArabVergleich يشرح أدوات المقارنة والخدمات الأساسية في ألمانيا بلغة عربية بسيطة تساعد المستخدم على الفهم قبل الضغط على أي عرض.",
            "الهدف من الموقع هو تبسيط القرار للمستخدم، وليس تقديم استشارة قانونية أو مالية فردية.",
          ],
          de: [
            "ArabVergleich erklaert wichtige Vergleichsthemen in Deutschland in einfacher Sprache, damit Nutzerinnen und Nutzer zuerst verstehen und dann vergleichen koennen.",
            "Das Ziel der Website ist eine einfache Orientierung, nicht die Erbringung individueller Rechts- oder Finanzberatung.",
          ],
        },
      },
      {
        heading: {
          ar: "لمن هذا الموقع؟",
          de: "Fuer wen ist die Seite gedacht?",
        },
        body: {
          ar: [
            "المحتوى مناسب خصوصاً للعرب في ألمانيا، سواء للمقيم الجديد أو للشخص الذي يريد تغيير عقده الحالي بدون تعقيد.",
          ],
          de: [
            "Die Inhalte richten sich besonders an arabischsprachige Menschen in Deutschland, egal ob neu angekommen oder bereits laenger hier.",
          ],
        },
      },
    ] satisfies LegalSection[],
  },
} as const;
