import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { InvestmentDisclosure } from "@/components/InvestmentDisclosure";
import { InvestmentFinder } from "@/components/InvestmentFinder";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { InvestmentPartnerJourney } from "@/components/InvestmentPartnerJourney";
import { investmentNavigationGroup, investmentPageSlugs, investmentPages } from "@/src/content/investment";
import { seoDefaults, siteProfile } from "@/src/content/siteSettings";
import { locales, type Locale } from "@/src/config/site";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) return {};

  const currentLocale = locale as Locale;
  const title = currentLocale === "ar" ? "الاستثمار والتداول في ألمانيا" : "Investieren & Trading in Deutschland";
  const description =
    currentLocale === "ar"
      ? "بوابة عربية مبسطة لفهم الأسهم وETFs وخطط الاستثمار والفائدة على الرصيد والتداول عالي المخاطر في ألمانيا."
      : "Einfacher Einstieg in Aktien, ETFs, Sparplaene, Guthabenzinsen und Trading mit hohem Risiko in Deutschland.";

  return {
    title,
    description,
    keywords: [...seoDefaults.keywords[currentLocale], "XTB", "ETF Sparplan", "Aktien", "Trading"],
    alternates: {
      canonical: `${siteProfile.domain}/${currentLocale}/investieren`,
      languages: { ar: `${siteProfile.domain}/ar/investieren`, de: `${siteProfile.domain}/de/investieren` },
    },
    openGraph: { type: "website", url: `${siteProfile.domain}/${currentLocale}/investieren`, title, description, siteName: siteProfile.brandName },
  };
}

export default async function InvestmentHubPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  const currentLocale = locale as Locale;

  return (
    <>
      <Hero
        eyebrow={currentLocale === "ar" ? "دليل عربي للاستثمار في ألمانيا" : "Arabischer Leitfaden fuer Investieren in Deutschland"}
        title={investmentNavigationGroup.title[currentLocale]}
        description={
          currentLocale === "ar"
            ? "ابدأ بفهم المسار الذي تبحث عنه: أسهم أو ETFs أو استثمار دوري أو فائدة على الرصيد أو تداول نشط. XTB هو أول مزود معروض هنا، لذلك لا نقدم هذا القسم كمقارنة بين عدة وسطاء."
            : "Starte mit dem Weg, den du verstehen moechtest: Aktien, ETFs, regelmaessiges Investieren, Guthabenzinsen oder aktives Trading. XTB ist der erste vorgestellte Anbieter; dieser Bereich ist noch kein Mehr-Broker-Vergleich."
        }
        highlights={
          currentLocale === "ar"
            ? ["شرح تعليمي قبل أي رابط تجاري.", "مسارات الاستثمار الطويل منفصلة عن تداول CFD عالي المخاطر.", "XTB هو المزود الأول، وليس ادعاءً بمقارنة عدة وسطاء."]
            : ["Erklaerungen vor jedem kommerziellen Link.", "Langfristiges Investieren bleibt getrennt von risikoreichem CFD-Trading.", "XTB ist der erste Anbieter, kein behaupteter Mehr-Broker-Vergleich."]
        }
        actions={
          <>
            <Link href="#finder" className="rounded-full bg-brand-orange px-5 py-3 text-sm font-semibold text-white hover:bg-orange-600">
              {currentLocale === "ar" ? "ابدأ من الدليل" : "Mit dem Finder starten"}
            </Link>
            <LanguageSwitcher locale={currentLocale} path="/investieren" />
          </>
        }
      />

      <Container className="space-y-8">
        <section className="surface p-6 md:p-8">
          <Breadcrumbs locale={currentLocale} current={investmentNavigationGroup.title[currentLocale]} />
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
            {currentLocale === "ar"
              ? "المحتوى هنا للتعليم العام والمقارنة بين أنواع المنتجات، وليس توصية لشراء أو بيع أو فتح حساب. اقرأ المخاطر وشروط المزود الحالية قبل أي قرار."
              : "Die Inhalte dienen der allgemeinen Bildung und der Einordnung von Produktarten. Sie sind keine Empfehlung zum Kauf, Verkauf oder zur Kontoeroeffnung. Lies Risiken und aktuelle Anbieterbedingungen vor jeder Entscheidung."}
          </p>
          <InvestmentDisclosure locale={currentLocale} />
        </section>

        <div id="finder" className="scroll-mt-8">
          <InvestmentFinder locale={currentLocale} />
        </div>

        <section>
          <div className="mb-6 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-blue">
              {currentLocale === "ar" ? "المسارات المتاحة" : "Verfuegbare Wege"}
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-brand-navy">
              {currentLocale === "ar" ? "اختر الشرح المناسب أولاً" : "Waehle zuerst die passende Erklaerung"}
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {investmentPageSlugs.map((slug) => {
              const page = investmentPages[slug];
              const isTrading = slug === "trading";

              return (
                <article key={slug} className={`surface flex h-full flex-col p-6 ${isTrading ? "border-red-200" : ""}`}>
                  <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${isTrading ? "text-red-700" : "text-brand-blue"}`}>
                    {page.eyebrow[currentLocale]}
                  </p>
                  <h2 className="mt-3 text-xl font-semibold text-brand-navy">{page.title[currentLocale]}</h2>
                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{page.heroDescription[currentLocale]}</p>
                  {isTrading ? (
                    <p className="mt-4 rounded-2xl bg-red-50 px-3 py-2 text-xs leading-6 text-red-800">
                      {currentLocale === "ar" ? "مسار مستقل عالي المخاطر." : "Eigenstaendiger Weg mit hohem Risiko."}
                    </p>
                  ) : null}
                  <Link href={`/${currentLocale}/investieren/${slug}`} className="mt-5 inline-flex w-fit rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-brand-navy hover:border-brand-blue hover:text-brand-blue">
                    {currentLocale === "ar" ? "اقرأ الشرح" : "Erklaerung lesen"}
                  </Link>
                </article>
              );
            })}
          </div>
        </section>

        <section className="surface p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-blue">XTB</p>
          <h2 className="mt-3 text-2xl font-semibold text-brand-navy">
            {currentLocale === "ar" ? "المزود الأول في هذا القسم" : "Der erste Anbieter in diesem Bereich"}
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
            {currentLocale === "ar"
              ? "يمكنك قراءة مراجعة XTB المتوازنة أولاً، أو الانتقال إلى الموقع الرسمي عبر رابط الشراكة العام. لا نصفه بأنه أفضل مزود ولا نعرضه كمقارنة بين عدة وسطاء."
              : "Du kannst zuerst die ausgewogene XTB-Einordnung lesen oder das allgemeine XTB-Angebot ueber den Partnerlink besuchen. Wir bezeichnen XTB nicht als besten Anbieter und stellen ihn nicht als Mehr-Broker-Vergleich dar."}
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href={`/${currentLocale}/investieren/xtb`} className="inline-flex rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-brand-navy hover:border-brand-blue hover:text-brand-blue">
              {currentLocale === "ar" ? "اقرأ مراجعة XTB" : "XTB Einordnung lesen"}
            </Link>
          </div>
          <InvestmentDisclosure locale={currentLocale} />
        </section>

        <InvestmentPartnerJourney
          locale={currentLocale}
          cta={{
            campaign: "home",
            label: { ar: "الانتقال إلى موقع XTB", de: "Zu XTB wechseln" },
            placement: "partner-journey",
          }}
        />
      </Container>
    </>
  );
}
