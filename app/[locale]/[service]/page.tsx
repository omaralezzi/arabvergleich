import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { AffiliateEmbed } from "@/components/AffiliateEmbed";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { C24Banner } from "@/components/C24Banner";
import { Container } from "@/components/Container";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { WidgetLimitNotice } from "@/components/WidgetLimitNotice";
import { legalPageContent, services, getAffiliateHtml } from "@/src/content/siteContent";
import { legalContent, seoDefaults, siteProfile } from "@/src/content/siteSettings";
import { locales, type Locale, serviceOrder, type ServiceSlug } from "@/src/config/site";

const legalSlugs = ["impressum", "datenschutz", "ueber-uns"] as const;
type LegalSlug = (typeof legalSlugs)[number];

export async function generateStaticParams() {
  return locales.flatMap((locale) => [...serviceOrder, ...legalSlugs].map((service) => ({ locale, service })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; service: string }>;
}): Promise<Metadata> {
  const { locale, service } = await params;
  if (!locales.includes(locale as Locale)) {
    return {};
  }

  if (service in services) {
    const content = services[service as ServiceSlug];
    const alternateLocale = locale === "ar" ? "de" : "ar";

    return {
      ...content.seo[locale as Locale],
      keywords: [...seoDefaults.keywords[locale as Locale]],
      alternates: {
        canonical: `${siteProfile.domain}/${locale}/${service}`,
        languages: {
          ar: `${siteProfile.domain}/ar/${service}`,
          de: `${siteProfile.domain}/de/${service}`,
        },
      },
      openGraph: {
        type: "article",
        url: `${siteProfile.domain}/${locale}/${service}`,
        siteName: siteProfile.brandName,
        title: content.seo[locale as Locale].title,
        description: content.seo[locale as Locale].description,
        locale: locale === "ar" ? "ar_DE" : "de_DE",
        alternateLocale: [alternateLocale === "ar" ? "ar_DE" : "de_DE"],
      },
      twitter: {
        card: "summary_large_image",
        title: content.seo[locale as Locale].title,
        description: content.seo[locale as Locale].description,
      },
    };
  }

  if (legalSlugs.includes(service as LegalSlug)) {
    const legalSeo = legalPageContent[service as LegalSlug].seo[locale as Locale];

    return {
      ...legalSeo,
      alternates: {
        canonical: `${siteProfile.domain}/${locale}/${service}`,
        languages: {
          ar: `${siteProfile.domain}/ar/${service}`,
          de: `${siteProfile.domain}/de/${service}`,
        },
      },
      openGraph: {
        type: "article",
        url: `${siteProfile.domain}/${locale}/${service}`,
        siteName: siteProfile.brandName,
        title: legalSeo.title,
        description: legalSeo.description,
        locale: locale === "ar" ? "ar_DE" : "de_DE",
      },
      twitter: {
        card: "summary_large_image",
        title: legalSeo.title,
        description: legalSeo.description,
      },
    };
  }

  return {};
}

function InfoList({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="surface p-6 md:p-8">
      <h2 className="text-2xl font-semibold text-brand-navy">{title}</h2>
      <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
        {items.map((item) => (
          <li key={item} className="rounded-2xl bg-slate-50 px-4 py-3">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

function UsageGuide({
  title,
  steps,
  note,
}: {
  title: string;
  steps: string[];
  note?: string;
}) {
  return (
    <section className="surface p-6 md:p-8">
      <h2 className="text-2xl font-semibold text-brand-navy">{title}</h2>
      <ol className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
        {steps.map((step, index) => (
          <li key={step} className="rounded-2xl bg-slate-50 px-4 py-3">
            <span className="font-semibold text-brand-navy">{index + 1}. </span>
            {step}
          </li>
        ))}
      </ol>
      {note ? <p className="mt-4 rounded-2xl border border-sky-100 bg-sky-50 px-4 py-3 text-sm leading-7 text-slate-700">{note}</p> : null}
    </section>
  );
}

function LegalPage({ locale, slug }: { locale: Locale; slug: LegalSlug }) {
  if (slug === "impressum") {
    return (
      <Container className="section-gap space-y-8">
        <div className="surface p-6 md:p-8">
          <Breadcrumbs locale={locale} current="Impressum" />
          <h1 className="mt-4 text-3xl font-bold text-brand-navy">Impressum</h1>
          <p className="mt-4 text-sm leading-7 text-slate-600">{legalContent.impressum.intro[locale]}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="surface p-6 md:p-8">
            <h2 className="text-2xl font-semibold text-brand-navy">{legalContent.impressum.operatorCardTitle[locale]}</h2>
            <div className="mt-4 space-y-2 text-sm leading-7 text-slate-600">
              <p>{siteProfile.ownerName}</p>
              <p>{siteProfile.street}</p>
              <p>{siteProfile.postalCodeCity}</p>
              <p>{siteProfile.country}</p>
            </div>
          </div>
          <div className="surface p-6 md:p-8">
            <h2 className="text-2xl font-semibold text-brand-navy">{legalContent.impressum.contactCardTitle[locale]}</h2>
            <div className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
              <p>{siteProfile.contactEmail}</p>
              {siteProfile.phone ? <p>{siteProfile.phone}</p> : null}
              <p>
                {locale === "ar" ? "المسؤول عن المحتوى: " : "Verantwortlich fuer den Inhalt: "}
                {siteProfile.responsiblePerson}
              </p>
              {legalContent.impressum.contactBody[locale].map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
        <div className="surface p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-brand-navy">{legalContent.impressum.taxCardTitle[locale]}</h2>
          <div className="mt-4 space-y-2 text-sm leading-7 text-slate-600">
            <p>
              {locale === "ar" ? "الرقم الضريبي: " : "Steuernummer: "}
              {siteProfile.taxNumber}
            </p>
            <p>
              {locale === "ar"
                ? "حالياً يتم تشغيل الموقع بشكل شخصي. يمكن تحديث هذه البيانات لاحقاً عند التحول إلى نشاط تجاري."
                : "Die Website wird derzeit privat betrieben. Diese Angaben koennen spaeter bei Umstellung auf eine gewerbliche Taetigkeit angepasst werden."}
            </p>
          </div>
        </div>
        <div className="surface p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-brand-navy">{legalContent.impressum.check24Title[locale]}</h2>
          <div className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
            {legalContent.impressum.check24Body[locale].map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Container>
    );
  }

  if (slug === "datenschutz") {
    return (
      <Container className="section-gap space-y-8">
        <div className="surface p-6 md:p-8">
          <Breadcrumbs locale={locale} current="Datenschutz" />
          <h1 className="mt-4 text-3xl font-bold text-brand-navy">
            {locale === "ar" ? "سياسة الخصوصية" : "Datenschutzerklaerung"}
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-600">{legalContent.datenschutz.intro[locale]}</p>
        </div>
        {legalContent.datenschutz.sections.map((section) => (
          <section key={section.heading[locale]} className="surface p-6 md:p-8">
            <h2 className="text-2xl font-semibold text-brand-navy">{section.heading[locale]}</h2>
            <div className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
              {section.body[locale].map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}
      </Container>
    );
  }

  return (
    <Container className="section-gap space-y-8">
      <div className="surface p-6 md:p-8">
        <Breadcrumbs locale={locale} current={locale === "ar" ? "من نحن" : "Ueber uns"} />
        <h1 className="mt-4 text-3xl font-bold text-brand-navy">{locale === "ar" ? "من نحن" : "Ueber uns"}</h1>
        <div className="mt-4 space-y-6">
          {legalContent.about.sections.map((section) => (
            <section key={section.heading[locale]} className="space-y-3 text-sm leading-7 text-slate-600">
              <h2 className="text-xl font-semibold text-brand-navy">{section.heading[locale]}</h2>
              {section.body[locale].map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ locale: string; service: string }>;
}) {
  const { locale, service } = await params;
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const currentLocale = locale as Locale;

  if (legalSlugs.includes(service as LegalSlug)) {
    return <LegalPage locale={currentLocale} slug={service as LegalSlug} />;
  }

  if (!(service in services)) {
    notFound();
  }

  const content = services[service as ServiceSlug];
  const isBank = content.slug === "c24-bank";
  const needsWidgetLimitNotice =
    currentLocale === "ar" &&
    (content.slug === "strom" || content.slug === "oekostrom" || content.slug === "gas");

  return (
    <>
      <Hero
        title={content.heroTitle[currentLocale]}
        description={content.heroDescription[currentLocale]}
        actions={
          <>
            <Link
              href={`#comparison`}
              className="rounded-full bg-brand-orange px-5 py-3 text-sm font-semibold text-white hover:bg-orange-600"
            >
              {content.ctaLabel[currentLocale]}
            </Link>
            <LanguageSwitcher locale={currentLocale} slug={service} />
          </>
        }
      />

      <Container className="space-y-8">
        <div className="surface p-6 md:p-8">
          <Breadcrumbs locale={currentLocale} current={content.title[currentLocale]} />
          <p className="mt-4 text-base leading-8 text-slate-600">{content.shortDescription[currentLocale]}</p>
        </div>

        {content.infoBox ? (
          <section className="surface p-6 md:p-8">
            <h2 className="text-2xl font-semibold text-brand-navy">{content.infoBox[currentLocale].title}</h2>
            <div className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
              {content.infoBox[currentLocale].body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        ) : null}

        <div className="grid gap-6 lg:grid-cols-3">
          <InfoList title={currentLocale === "ar" ? "متى تحتاج هذه الخدمة؟" : "Wann brauchst du diesen Vergleich?"} items={content.whenYouNeedIt[currentLocale]} />
          <InfoList title={currentLocale === "ar" ? "نصائح قبل المقارنة" : "Tipps vor dem Vergleich"} items={content.tips[currentLocale]} />
          <InfoList title={currentLocale === "ar" ? "أمثلة عملية" : "Praktische Beispiele"} items={content.examples[currentLocale]} />
        </div>
      </Container>

      {isBank ? (
        <C24Banner locale={currentLocale} />
      ) : (
        <Container className="section-gap space-y-8" id="comparison">
          {needsWidgetLimitNotice ? <WidgetLimitNotice locale={currentLocale} /> : null}
          {content.usageGuide ? (
            <UsageGuide
              title={content.usageGuide[currentLocale].title}
              steps={content.usageGuide[currentLocale].steps}
              note={content.usageGuide[currentLocale].note}
            />
          ) : null}
          {content.toolKeys.map((toolKey, index) => (
            <section key={toolKey} className="surface p-6 md:p-8">
              <div className="mb-4 flex items-center justify-between gap-4">
                <h2 className="text-2xl font-semibold text-brand-navy">
                  {currentLocale === "ar"
                    ? index === 0
                      ? "أداة المقارنة"
                      : "أداة مقارنة إضافية"
                    : index === 0
                      ? "Vergleichstool"
                      : "Weiteres Vergleichstool"}
                </h2>
              </div>
              <AffiliateEmbed html={getAffiliateHtml(toolKey)} className="min-h-20" />
              <AffiliateDisclosure locale={currentLocale} />
            </section>
          ))}
        </Container>
      )}

      <Container>
        <FAQ title="FAQ" items={content.faq[currentLocale]} />
      </Container>
    </>
  );
}
