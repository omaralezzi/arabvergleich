"use client";

import Link from "next/link";
import { useState } from "react";

import { investmentFinderOptions, investmentPages, type InvestmentPageSlug } from "@/src/content/investment";
import type { Locale } from "@/src/config/site";

export function InvestmentFinder({ locale }: { locale: Locale }) {
  const [selectedPage, setSelectedPage] = useState<InvestmentPageSlug | null>(null);
  const result = selectedPage ? investmentPages[selectedPage] : null;
  const isTrading = selectedPage === "trading";

  return (
    <section className="surface p-6 md:p-8" aria-labelledby="investment-finder-title">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-blue">
          {locale === "ar" ? "دليل اختيار تعليمي" : "Bildungs-Finder"}
        </p>
        <h2 id="investment-finder-title" className="mt-3 text-2xl font-semibold text-brand-navy">
          {locale === "ar" ? "ما الموضوع الذي تريد فهمه أكثر؟" : "Welches Thema moechtest du besser verstehen?"}
        </h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          {locale === "ar"
            ? "اختر موضوعاً لتصل إلى شرح مناسب. النتيجة تعليمية ولا تمثل توصية استثمارية شخصية."
            : "Waehle ein Thema fuer eine passende Erklaerung. Das Ergebnis ist Bildung und keine persoenliche Anlageempfehlung."}
        </p>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-3" role="list">
        {investmentFinderOptions.map((option) => {
          const isSelected = selectedPage === option.page;

          return (
            <button
              key={option.key}
              type="button"
              onClick={() => setSelectedPage(option.page)}
              className={`rounded-3xl border p-4 text-start transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue ${
                isSelected
                  ? "border-brand-blue bg-brand-mist text-brand-blue"
                  : "border-slate-200 bg-slate-50/80 text-brand-ink hover:border-brand-blue/50 hover:bg-white"
              }`}
            >
              <span className="block font-semibold">{option.title[locale]}</span>
              <span className="mt-1 block text-sm leading-6 text-slate-600">{option.description[locale]}</span>
            </button>
          );
        })}
      </div>

      {result ? (
        <div className="mt-6 rounded-3xl border border-sky-100 bg-sky-50 p-5">
          <p className="text-sm font-semibold text-brand-navy">
            {locale === "ar"
              ? `بناءً على اختيارك، قد ترغب في معرفة المزيد عن: ${result.title.ar}`
              : `Auf Basis deiner Auswahl moechtest du vielleicht mehr ueber ${result.title.de} erfahren.`}
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-600">{result.heroDescription[locale]}</p>
          {isTrading ? (
            <p className="mt-3 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-7 text-amber-950">
              {locale === "ar"
                ? "تنبيه: التداول بالرافعة وCFDs ينطوي على مخاطر خسارة مرتفعة. اقرأ التحذير الكامل قبل متابعة أي عرض."
                : "Hinweis: Hebel und CFDs bergen ein hohes Verlustrisiko. Lies den vollstaendigen Risikohinweis, bevor du ein Angebot oeffnest."}
            </p>
          ) : null}
          <Link
            href={`/${locale}/investieren/${result.slug}`}
            className="mt-4 inline-flex rounded-full bg-brand-blue px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
          >
            {locale === "ar" ? "اقرأ الشرح" : "Erklaerung lesen"}
          </Link>
        </div>
      ) : null}
    </section>
  );
}
