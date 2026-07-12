import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ArticleCard } from "@/components/ArticleCard";
import { Container } from "@/components/Container";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { serviceCategories } from "@/src/content/serviceCatalog";
import { seoDefaults, siteProfile } from "@/src/content/siteSettings";
import { locales, serviceOrder, type Locale } from "@/src/config/site";
import { articles, homeServiceCards, mostUsedItems, siteChrome } from "@/src/content/siteContent";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) {
    return {};
  }

  return {
    title: locale === "ar" ? "ArabVergleich | قارن أهم الخدمات في ألمانيا" : "ArabVergleich | Dienstleistungen in Deutschland vergleichen",
    description: siteChrome.homeHero.description[locale as Locale],
    keywords: [...seoDefaults.keywords[locale as Locale]],
    alternates: {
      canonical: `${siteProfile.domain}/${locale}`,
      languages: {
        ar: `${siteProfile.domain}/ar`,
        de: `${siteProfile.domain}/de`,
      },
    },
    openGraph: {
      type: "website",
      url: `${siteProfile.domain}/${locale}`,
      title:
        locale === "ar" ? "ArabVergleich | قارن أهم الخدمات في ألمانيا" : "ArabVergleich | Dienstleistungen in Deutschland vergleichen",
      description: siteChrome.homeHero.description[locale as Locale],
      siteName: siteProfile.brandName,
      locale: locale === "ar" ? "ar_DE" : "de_DE",
    },
    twitter: {
      card: "summary_large_image",
      title:
        locale === "ar" ? "ArabVergleich | قارن أهم الخدمات في ألمانيا" : "ArabVergleich | Dienstleistungen in Deutschland vergleichen",
      description: siteChrome.homeHero.description[locale as Locale],
    },
  };
}

export default async function LocaleHomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const currentLocale = locale as Locale;
  const summaryStats =
    currentLocale === "ar"
      ? [
          { value: String(serviceCategories.length), label: "أقسام رئيسية" },
          { value: String(serviceOrder.length), label: "صفحة مقارنة" },
          { value: String(articles.length), label: "أدلة مبسطة" },
        ]
      : [
          { value: String(serviceCategories.length), label: "Hauptbereiche" },
          { value: String(serviceOrder.length), label: "Vergleichsseiten" },
          { value: String(articles.length), label: "Einfache Ratgeber" },
        ];

  return (
    <>
      <Hero
        eyebrow={currentLocale === "ar" ? "دليل عربي مبسط للمقارنة في ألمانيا" : "Arabischer Vergleichsleitfaden fuer Deutschland"}
        title={siteChrome.homeHero.title[currentLocale]}
        description={siteChrome.homeHero.description[currentLocale]}
        highlights={
          currentLocale === "ar"
            ? [
                "شرح مبسط قبل كل أداة مقارنة حتى يعرف المستخدم ماذا يختار.",
                "ترتيب واضح للخدمات الأكثر فائدة للمقيمين في ألمانيا.",
                "محتوى عربي وألماني يساعدك على الفهم ثم اتخاذ القرار.",
              ]
            : [
                "Einfache Erklaerungen vor jedem Vergleichstool.",
                "Klare Struktur fuer wichtige Themen in Deutschland.",
                "Arabische und deutsche Inhalte zum Verstehen und Vergleichen.",
              ]
        }
        actions={
          <>
            <Link
              href={`/${currentLocale}/dsl`}
              className="rounded-full bg-brand-orange px-5 py-3 text-sm font-semibold text-white hover:bg-orange-600"
            >
              {currentLocale === "ar" ? "ابدأ من الإنترنت" : "Mit DSL starten"}
            </Link>
            <Link
              href={`/${currentLocale}/strom`}
              className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              {currentLocale === "ar" ? "استكشف الكهرباء" : "Strom ansehen"}
            </Link>
          </>
        }
      />

      <Container className="section-gap">
        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-blue">
              {currentLocale === "ar" ? "ابدأ من القسم المناسب" : "Starte mit dem passenden Bereich"}
            </p>
            <h2 className="text-2xl font-semibold text-brand-navy">
              {currentLocale === "ar" ? "الخدمات الأبرز حالياً" : "Aktuell wichtige Bereiche"}
            </h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              {currentLocale === "ar"
                ? "هذه أبرز الخدمات السريعة. وتحتها ستجد كل الخدمات الجديدة مرتبة داخل أقسامها بشكل كامل."
                : "Hier siehst du die wichtigsten Schnellzugriffe. Darunter findest du alle neuen Bereiche sauber nach Themen sortiert."}
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3 lg:w-[34rem]">
            {summaryStats.map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-slate-200 bg-white px-4 py-4 text-center shadow-sm">
                <p className="text-xl font-bold text-brand-navy">{stat.value}</p>
                <p className="mt-1 text-xs leading-5 text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {homeServiceCards.slice(0, 8).map((service) => (
            <ServiceCard
              key={service.slug}
              icon={service.icon}
              title={service.title[currentLocale]}
              description={service.shortDescription[currentLocale]}
              href={`/${currentLocale}/${service.slug}`}
              cta={service.ctaLabel[currentLocale]}
              locale={currentLocale}
              slug={service.slug}
            />
          ))}
        </div>
      </Container>

      <Container className="section-gap">
        <div className="mb-8 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-blue">
            {currentLocale === "ar" ? "كل الخدمات" : "Alle Leistungen"}
          </p>
          <h2 className="text-2xl font-semibold text-brand-navy">
            {currentLocale === "ar" ? "الخدمات مرتبة حسب الأقسام" : "Leistungen nach Bereichen sortiert"}
          </h2>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            {currentLocale === "ar"
              ? "هنا رجّعت كل الخدمات التي أضفناها اليوم ضمن مجموعات واضحة، حتى لا يضيع المستخدم بين الخيارات وحتى تبقى كل إضافة ظاهرة في مكانها الصحيح."
              : "Hier sind alle Bereiche klar gruppiert, damit neue Leistungen sichtbar bleiben und Nutzer schneller den passenden Einstieg finden."}
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {serviceCategories.map((category) => (
            <section
              key={category.slug}
              id={category.slug}
              className="surface scroll-mt-28 p-6 md:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">
                    {(category.services.length).toString().padStart(2, "0")} {currentLocale === "ar" ? "خدمات" : "Services"}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-brand-navy">{category.title[currentLocale]}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{category.description[currentLocale]}</p>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                {category.services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/${currentLocale}/${service.slug}`}
                    className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-brand-blue hover:bg-white hover:text-brand-blue"
                  >
                    {service.title[currentLocale]}
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </Container>

      <Container className="section-gap">
        <div className="surface p-6 md:p-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-blue">
                {currentLocale === "ar" ? "اختصارات مفيدة" : "Beliebte Direktwege"}
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-brand-navy">{siteChrome.mostUsed.title[currentLocale]}</h2>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                {currentLocale === "ar"
                  ? "إذا كنت تعرف ما الذي تبحث عنه، يمكنك الدخول مباشرة إلى أكثر الصفحات استخداماً."
                  : "Wenn du schon weisst, wonach du suchst, kommst du hier direkt zu den meistgenutzten Seiten."}
              </p>
            </div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {mostUsedItems.map((item, index) => (
              <Link
                key={item.slug}
                href={`/${currentLocale}${item.href}`}
                className="group rounded-3xl border border-slate-200 bg-slate-50/80 p-5 text-sm font-medium text-slate-700 transition hover:border-brand-blue hover:bg-white hover:text-brand-blue"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold tracking-[0.2em] text-slate-400">
                      {(index + 1).toString().padStart(2, "0")}
                    </p>
                    <p className="mt-2 text-base font-semibold text-brand-navy group-hover:text-brand-blue">{item.label[currentLocale]}</p>
                  </div>
                  <span className="rounded-full bg-white px-3 py-1 text-xs text-slate-500 shadow-sm">←</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>

      <Container className="section-gap">
        <div className="mb-6 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-blue">
            {currentLocale === "ar" ? "شرح قبل القرار" : "Erst verstehen, dann entscheiden"}
          </p>
          <h2 className="text-2xl font-semibold text-brand-navy">
            {currentLocale === "ar" ? "مقالات وشروحات تعليمية" : "Hilfreiche Artikel und Erklaerungen"}
          </h2>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            {currentLocale === "ar"
              ? "هنا ستجد شرحاً مبسطاً لكنه مفيد فعلاً، حتى يفهم المستخدم الفكرة أولاً ثم يدخل إلى المقارنة وهو يعرف ماذا يختار."
              : "Hier findest du einfache, aber wirklich hilfreiche Erklaerungen, damit Nutzerinnen und Nutzer das Thema zuerst verstehen und danach gezielt vergleichen."}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {articles.map((article) => (
            <ArticleCard
              key={article.slug}
              title={article.title[currentLocale]}
              description={article.description[currentLocale]}
              sections={article.sections[currentLocale]}
              href={`/${currentLocale}${article.href}`}
              cta={currentLocale === "ar" ? "اذهب إلى صفحة المقارنة" : "Zur Vergleichsseite"}
            />
          ))}
        </div>
      </Container>

      <Container>
        <FAQ title={siteChrome.faqTitle[currentLocale]} items={[...siteChrome.generalFaq[currentLocale]]} />
      </Container>
    </>
  );
}
