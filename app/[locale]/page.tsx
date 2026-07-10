import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ArticleCard } from "@/components/ArticleCard";
import { Container } from "@/components/Container";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { seoDefaults, siteProfile } from "@/src/content/siteSettings";
import { locales, type Locale } from "@/src/config/site";
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

  return (
    <>
      <Hero
        title={siteChrome.homeHero.title[currentLocale]}
        description={siteChrome.homeHero.description[currentLocale]}
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
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-brand-navy">
              {currentLocale === "ar" ? "الخدمات الأساسية" : "Wichtige Vergleichsbereiche"}
            </h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              {currentLocale === "ar"
                ? "كل صفحة تشرح الفكرة أولاً ثم تضع أداة المقارنة المناسبة."
                : "Jede Seite erklaert zuerst die Grundlagen und zeigt danach das passende Vergleichstool."}
            </p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {homeServiceCards.map((service) => (
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
        <div className="surface p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-brand-navy">{siteChrome.mostUsed.title[currentLocale]}</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
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
