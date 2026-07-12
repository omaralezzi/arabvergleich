import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ArticleCard } from "@/components/ArticleCard";
import { Container } from "@/components/Container";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { serviceCategories, mostUsedItems } from "@/src/content/serviceCatalog";
import { seoDefaults, siteProfile } from "@/src/content/siteSettings";
import { locales, type Locale } from "@/src/config/site";
import { articles, siteChrome } from "@/src/content/siteContent";

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

  return (
    <>
      <Hero
        title={siteChrome.homeHero.title[currentLocale]}
        description={siteChrome.homeHero.description[currentLocale]}
        actions={
          <>
            <Link
              href={`/${currentLocale}/dsl`}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand-orange px-5 py-3 text-sm font-semibold text-white hover:bg-orange-600 sm:min-h-0"
            >
              {currentLocale === "ar" ? "ابدأ من الإنترنت" : "Mit DSL starten"}
            </Link>
            <Link
              href={`/${currentLocale}/strom`}
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 sm:min-h-0"
            >
              {currentLocale === "ar" ? "استكشف الكهرباء" : "Strom ansehen"}
            </Link>
          </>
        }
      />

      <Container className="section-gap">
        <div className="mb-6 flex flex-col gap-4 md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-brand-navy">
              {currentLocale === "ar" ? "الأقسام الرئيسية" : "Wichtige Bereiche"}
            </h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              {currentLocale === "ar"
                ? "رتبنا الموقع حسب المواضيع الرئيسية، وتحت كل موضوع ستجد الخدمات الفرعية بشكل واضح وسهل الوصول."
                : "Die Website ist jetzt nach Hauptthemen geordnet. Unter jedem Bereich findest du die passenden Unterthemen klar und direkt erreichbar."}
            </p>
          </div>
        </div>
        <div className="space-y-8">
          {serviceCategories.map((category) => (
            <section key={category.slug} id={category.slug} className="surface p-5 sm:p-6 md:p-8">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-3xl">
                  <h3 className="text-2xl font-semibold text-brand-navy">{category.title[currentLocale]}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{category.description[currentLocale]}</p>
                </div>
                <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 lg:mx-0 lg:flex-wrap lg:overflow-visible lg:px-0">
                  {category.services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/${currentLocale}/${service.slug}`}
                      className="whitespace-nowrap rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 hover:border-brand-blue hover:text-brand-blue"
                    >
                      {service.title[currentLocale]}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="mt-6 grid gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">
                {category.services.map((service) => (
                  <ServiceCard
                    key={service.slug}
                    icon={service.icon}
                    title={service.title[currentLocale]}
                    description={service.shortDescription[currentLocale]}
                    href={`/${currentLocale}/${service.slug}`}
                    cta={currentLocale === "ar" ? "افتح هذا القسم" : "Bereich oeffnen"}
                    locale={currentLocale}
                    slug={service.slug}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </Container>

      <Container className="section-gap">
        <div className="surface p-5 sm:p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-brand-navy">{siteChrome.mostUsed.title[currentLocale]}</h2>
          <div className="mt-6 grid gap-3 sm:gap-4 md:grid-cols-2 xl:grid-cols-3">
            {mostUsedItems.map((item) => (
              <Link
                key={item.slug}
                href={`/${currentLocale}${item.href}`}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium text-slate-700 hover:border-brand-blue hover:text-brand-blue"
              >
                {item.label[currentLocale]}
              </Link>
            ))}
          </div>
        </div>
      </Container>

      <Container className="section-gap">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-brand-navy">
            {currentLocale === "ar" ? "مقالات وشروحات تعليمية" : "Hilfreiche Artikel und Erklaerungen"}
          </h2>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            {currentLocale === "ar"
              ? "هنا ستجد شرحاً مبسطاً لكنه مفيد فعلاً، حتى يفهم المستخدم الفكرة أولاً ثم يدخل إلى المقارنة وهو يعرف ماذا يختار."
              : "Hier findest du einfache, aber wirklich hilfreiche Erklaerungen, damit Nutzerinnen und Nutzer das Thema zuerst verstehen und danach gezielt vergleichen."}
          </p>
        </div>
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
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
