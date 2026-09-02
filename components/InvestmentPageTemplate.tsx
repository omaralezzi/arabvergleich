import Link from "next/link";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { InvestmentAffiliateCTA } from "@/components/InvestmentAffiliateCTA";
import { InvestmentCalculator } from "@/components/InvestmentCalculator";
import { InvestmentDisclosure } from "@/components/InvestmentDisclosure";
import { InvestmentPartnerJourney } from "@/components/InvestmentPartnerJourney";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import type { InvestmentPage } from "@/src/content/investment";
import { mutableInvestmentData } from "@/src/config/investment";
import type { Locale } from "@/src/config/site";

export function InvestmentPageTemplate({ locale, page }: { locale: Locale; page: InvestmentPage }) {
  const cfdRisk = mutableInvestmentData.cfdRiskWarning;

  return (
    <>
      <Hero
        eyebrow={page.eyebrow[locale]}
        title={page.heroTitle[locale]}
        description={page.heroDescription[locale]}
        highlights={page.highlights[locale]}
        actions={
          <>
            <Link href="#xtb-next-step" className="inline-flex items-center justify-center rounded-full bg-brand-orange px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue">
              {locale === "ar" ? "كيف تتابع إلى XTB؟" : "Wie geht es bei XTB weiter?"}
            </Link>
            <LanguageSwitcher locale={locale} path={`/investieren/${page.slug}`} />
          </>
        }
      />

      <Container className="space-y-8">
        <section className="surface p-6 md:p-8">
          <Breadcrumbs locale={locale} current={page.title[locale]} />
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">{page.heroDescription[locale]}</p>
        </section>

        {page.slug === "trading" ? (
          <section className="rounded-3xl border border-red-200 bg-red-50 p-6 md:p-8" aria-label={locale === "ar" ? "تحذير مخاطر CFD" : "CFD-Risikohinweis"}>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red-700">
              {locale === "ar" ? "تحذير مخاطر CFD" : "CFD-Risikohinweis"}
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-red-950">
              {locale === "ar"
                ? `${cfdRisk.value}${cfdRisk.unit} من حسابات المستثمرين الأفراد تخسر المال عند تداول CFDs مع هذا المزود.`
                : `${cfdRisk.value}${cfdRisk.unit} der Kleinanlegerkonten verlieren beim CFD-Handel mit diesem Anbieter Geld.`}
            </h2>
            <p className="mt-3 max-w-4xl text-sm leading-7 text-red-950">
              {locale === "ar"
                ? "فكر جيداً في ما إذا كنت تفهم كيفية عمل CFDs وما إذا كنت تستطيع تحمل المخاطر العالية لخسارة أموالك."
                : "Du solltest ueberlegen, ob du verstehst, wie CFDs funktionieren, und ob du es dir leisten kannst, das hohe Risiko einzugehen, dein Geld zu verlieren."}
            </p>
            <p className="mt-3 text-xs text-red-800">
              {locale === "ar" ? `ساري من ${cfdRisk.effectiveFrom}، آخر تحقق: ${cfdRisk.lastVerified}.` : `Gueltig ab ${cfdRisk.effectiveFrom}, zuletzt geprueft: ${cfdRisk.lastVerified}.`}
            </p>
          </section>
        ) : null}

        <InvestmentPartnerJourney locale={locale} cta={page.primaryCta} trading={page.slug === "trading"} />

        <div className="grid gap-6 lg:grid-cols-2">
          {page.sections.map((section) => (
            <section key={section.title[locale]} className="surface p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-brand-navy">{section.title[locale]}</h2>
              <div className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                {section.body[locale].map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        {page.slug === "sparplan" ? <InvestmentCalculator locale={locale} /> : null}

        {page.tradingCtas ? (
          <section className="surface p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-blue">
              {locale === "ar" ? "مسارات تداول منفصلة" : "Getrennte Trading-Wege"}
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-brand-navy">
              {locale === "ar" ? "افتح المسار الذي تريد فهمه" : "Oeffne den Weg, den du verstehen moechtest"}
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {page.tradingCtas.map((cta) => (
                <div key={cta.campaign} className="rounded-3xl border border-slate-200 bg-slate-50/80 p-5">
                  <p className="text-sm leading-7 text-slate-600">
                    {locale === "ar"
                      ? "ينقلك هذا الرابط إلى صفحة XTB الخاصة بهذا النوع من التداول. راجع الشروط والرسوم والتحذيرات هناك قبل التسجيل أو الإيداع."
                      : "Dieser Link fuehrt zum XTB-Angebot fuer diesen Trading-Bereich. Pruefe dort Bedingungen, Kosten und Warnhinweise vor einer Registrierung oder Einzahlung."}
                  </p>
                  <div className="mt-4">
                    <InvestmentAffiliateCTA campaign={cta.campaign} label={cta.label[locale]} locale={locale} placement={cta.placement} />
                  </div>
                </div>
              ))}
            </div>
            <InvestmentDisclosure locale={locale} />
          </section>
        ) : null}

        {page.slug === "sparplan" && page.secondaryCta ? (
          <section className="surface p-6 md:p-8">
            <h2 className="text-2xl font-semibold text-brand-navy">
              {locale === "ar" ? "هل تريد قراءة شروط خطة ETF؟" : "Moechtest du ETF-Sparplaene bei XTB ansehen?"}
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
              {locale === "ar"
                ? "بعد استخدام الحاسبة، راجع شروط المنتج الحالية ورسومه قبل التسجيل أو إعداد أي دفعة تلقائية."
                : "Nach dem Rechenbeispiel solltest du die aktuellen Produktbedingungen und Kosten pruefen, bevor du dich registrierst oder eine automatische Zahlung einrichtest."}
            </p>
            <div className="mt-5">
              <InvestmentAffiliateCTA campaign={page.secondaryCta.campaign} label={page.secondaryCta.label[locale]} locale={locale} placement="calculator-result" />
            </div>
            <InvestmentDisclosure locale={locale} />
          </section>
        ) : null}

        <section className="surface p-6 md:p-8">
          <p className="text-sm leading-7 text-slate-600">
            {locale === "ar" ? "للاطلاع على بقية مسارات الاستثمار، يمكنك الرجوع إلى" : "Weitere Wege findest du im Bereich"}{" "}
            <Link href={`/${locale}/investieren`} className="font-semibold text-brand-blue hover:text-sky-700">
              {locale === "ar" ? "الاستثمار والتداول" : "Investieren & Trading"}
            </Link>
            .
          </p>
        </section>
      </Container>

      <Container>
        <FAQ title="FAQ" items={page.faq[locale]} />
      </Container>
    </>
  );
}
