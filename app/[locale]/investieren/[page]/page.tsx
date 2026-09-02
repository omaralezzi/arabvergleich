import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { InvestmentPageTemplate } from "@/components/InvestmentPageTemplate";
import { getInvestmentPage, investmentPageSlugs } from "@/src/content/investment";
import { seoDefaults, siteProfile } from "@/src/content/siteSettings";
import { locales, type Locale } from "@/src/config/site";

export async function generateStaticParams() {
  return locales.flatMap((locale) => investmentPageSlugs.map((page) => ({ locale, page })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; page: string }> }): Promise<Metadata> {
  const { locale, page: slug } = await params;
  if (!locales.includes(locale as Locale)) return {};
  const page = getInvestmentPage(slug);
  if (!page) return {};
  const currentLocale = locale as Locale;
  const seo = page.seo[currentLocale];
  const alternateLocale = currentLocale === "ar" ? "de" : "ar";

  return {
    title: seo.title,
    description: seo.description,
    keywords: [...seoDefaults.keywords[currentLocale], "XTB", page.title[currentLocale]],
    alternates: {
      canonical: `${siteProfile.domain}/${currentLocale}/investieren/${page.slug}`,
      languages: {
        ar: `${siteProfile.domain}/ar/investieren/${page.slug}`,
        de: `${siteProfile.domain}/de/investieren/${page.slug}`,
      },
    },
    openGraph: {
      type: "article",
      url: `${siteProfile.domain}/${currentLocale}/investieren/${page.slug}`,
      title: seo.title,
      description: seo.description,
      siteName: siteProfile.brandName,
      locale: currentLocale === "ar" ? "ar_DE" : "de_DE",
      alternateLocale: [alternateLocale === "ar" ? "ar_DE" : "de_DE"],
    },
    twitter: { card: "summary_large_image", title: seo.title, description: seo.description },
  };
}

export default async function InvestmentDetailPage({ params }: { params: Promise<{ locale: string; page: string }> }) {
  const { locale, page: slug } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  const page = getInvestmentPage(slug);
  if (!page) notFound();

  return <InvestmentPageTemplate locale={locale as Locale} page={page} />;
}
