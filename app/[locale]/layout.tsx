import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { localeMeta, locales, siteName, type Locale } from "@/src/config/site";
import { tagline } from "@/src/config/site";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) {
    return {};
  }

  return {
    title: siteName,
    description: tagline[locale as Locale],
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const resolvedLocale = locale as Locale;

  return (
    <div
      lang={resolvedLocale}
      dir={localeMeta[resolvedLocale].dir}
      className={`min-h-screen ${resolvedLocale === "ar" ? "font-[var(--font-cairo)]" : "font-[var(--font-inter)]"}`}
    >
      <Header locale={resolvedLocale} />
      <main>{children}</main>
      <Footer locale={resolvedLocale} />
    </div>
  );
}
