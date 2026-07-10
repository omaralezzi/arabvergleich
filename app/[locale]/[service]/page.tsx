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
    return content.seo[locale as Locale];
  }

  if (legalSlugs.includes(service as LegalSlug)) {
    return legalPageContent[service as LegalSlug].seo[locale as Locale];
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
          <p className="mt-4 text-sm leading-7 text-slate-600">
            {locale === "ar"
              ? "هذه صفحة Placeholder. أضف هنا لاحقاً اسم صاحب الموقع، العنوان، وسائل التواصل، والبيانات القانونية المطلوبة قبل النشر."
              : "Dies ist ein Platzhalter. Trage hier vor dem Veroeffentlichen die vollstaendigen Angaben zum Seitenbetreiber, Kontakt und alle rechtlich notwendigen Daten ein."}
          </p>
        </div>
        <div className="surface p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-brand-navy">CHECK24.net Partnerprogramm Hinweis</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            CHECK24.net Partnerprogramm
            <br />
            Wir nehmen am CHECK24.net Partnerprogramm teil. Auf unseren Seiten werden iFrame-Buchungsmasken und
            andere Werbemittel eingebunden, an denen wir ueber Transaktionen, zum Beispiel durch Leads und Sales,
            eine Werbekostenerstattung erhalten koennen. Weitere Informationen zur Datennutzung durch CHECK24.net
            erhalten Sie in der Datenschutzerklaerung von CHECK24.net.
          </p>
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
          <p className="mt-4 text-sm leading-7 text-slate-600">
            {locale === "ar"
              ? "هذه نسخة مبسطة Placeholder ويجب مراجعتها قانونياً قبل النشر النهائي."
              : "Dies ist eine einfache Platzhalter-Version und sollte vor der Veroeffentlichung rechtlich geprueft werden."}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            locale === "ar" ? "Cookies: قد يستخدم الموقع ملفات تعريف الارتباط الضرورية أو التقنية." : "Cookies: Die Seite kann technisch notwendige oder funktionale Cookies verwenden.",
            locale === "ar" ? "Affiliate Links: بعض الروابط قد تكون روابط شراكة." : "Affiliate Links: Einige Links koennen Partnerlinks sein.",
            locale === "ar" ? "Eingebundene Vergleichstools: قد يتم تحميل أدوات مقارنة خارجية من مزودين شركاء." : "Eingebundene Vergleichstools: Externe Vergleichstools koennen von Partneranbietern geladen werden.",
            locale === "ar" ? "Externe Anbieter: بعض المحتوى أو السكربتات قد تأتي من جهات خارجية." : "Externe Anbieter: Einzelne Inhalte oder Skripte koennen von externen Anbietern eingebunden werden.",
            locale === "ar" ? "Analytics Placeholder: يمكن إضافة أدوات إحصائية لاحقاً بعد التحقق القانوني." : "Analytics Platzhalter: Spaeter koennen Analyse-Tools nach rechtlicher Pruefung ergaenzt werden.",
          ].map((item) => (
            <div key={item} className="surface p-6 text-sm leading-7 text-slate-600">
              {item}
            </div>
          ))}
        </div>
      </Container>
    );
  }

  return (
    <Container className="section-gap space-y-8">
      <div className="surface p-6 md:p-8">
        <Breadcrumbs locale={locale} current={locale === "ar" ? "من نحن" : "Ueber uns"} />
        <h1 className="mt-4 text-3xl font-bold text-brand-navy">{locale === "ar" ? "من نحن" : "Ueber uns"}</h1>
        <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600">
          <p>
            {locale === "ar"
              ? "ArabVergleich منصة مستقلة تهدف إلى شرح خدمات المقارنة الأساسية في ألمانيا بلغة بسيطة وواضحة للعرب المقيمين هناك."
              : "ArabVergleich ist ein unabhaengiges Portal, das wichtige Vergleichsthemen in Deutschland fuer arabischsprachige Menschen einfach und klar erklaert."}
          </p>
          <p>
            {locale === "ar"
              ? "نركز على الفهم أولاً: ما الذي تحتاجه، ما الذي يجب مراجعته، ومتى قد يكون العرض مناسباً لك."
              : "Der Fokus liegt zuerst auf Verstaendnis: Was brauchst du, worauf solltest du achten und wann kann ein Angebot zu dir passen."}
          </p>
          <p>
            {locale === "ar"
              ? "الموقع ليس تابعاً رسمياً لـ CHECK24، بل يستخدم بعض أدوات وروابط الشراكة بشكل واضح وهادئ."
              : "Die Seite ist nicht offiziell Teil von CHECK24, sondern nutzt einzelne Partner-Tools und Links transparent und dezent."}
          </p>
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
