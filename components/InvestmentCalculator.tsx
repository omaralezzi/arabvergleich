"use client";

import { useState } from "react";

import type { Locale } from "@/src/config/site";

function asNonNegativeNumber(value: string) {
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : 0;
}

function calculateInvestmentValue(monthlyContribution: number, years: number, initialInvestment: number, annualReturn: number) {
  const months = Math.max(0, Math.round(years * 12));
  const monthlyRate = annualReturn / 100 / 12;
  const contributions = initialInvestment + monthlyContribution * months;

  if (months === 0) {
    return { contributions, estimatedValue: initialInvestment, estimatedGain: 0 };
  }

  const initialValue = initialInvestment * Math.pow(1 + monthlyRate, months);
  const monthlyValue = monthlyRate === 0 ? monthlyContribution * months : monthlyContribution * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);
  const estimatedValue = initialValue + monthlyValue;

  return {
    contributions,
    estimatedValue,
    estimatedGain: estimatedValue - contributions,
  };
}

export function InvestmentCalculator({ locale }: { locale: Locale }) {
  const [monthlyContribution, setMonthlyContribution] = useState("150");
  const [years, setYears] = useState("15");
  const [initialInvestment, setInitialInvestment] = useState("0");
  const [annualReturn, setAnnualReturn] = useState("4");

  const values = calculateInvestmentValue(
    asNonNegativeNumber(monthlyContribution),
    asNonNegativeNumber(years),
    asNonNegativeNumber(initialInvestment),
    asNonNegativeNumber(annualReturn),
  );
  const formatter = new Intl.NumberFormat(locale === "ar" ? "ar-DE" : "de-DE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });

  const fields = [
    {
      id: "monthly-contribution",
      label: locale === "ar" ? "المبلغ الشهري" : "Monatlicher Betrag",
      value: monthlyContribution,
      onChange: setMonthlyContribution,
      suffix: "EUR",
    },
    {
      id: "investment-years",
      label: locale === "ar" ? "مدة الاستثمار بالسنوات" : "Anlagedauer in Jahren",
      value: years,
      onChange: setYears,
      suffix: locale === "ar" ? "سنة" : "Jahre",
    },
    {
      id: "initial-investment",
      label: locale === "ar" ? "مبلغ ابتدائي اختياري" : "Einmaliger Startbetrag",
      value: initialInvestment,
      onChange: setInitialInvestment,
      suffix: "EUR",
    },
    {
      id: "annual-return",
      label: locale === "ar" ? "عائد سنوي افتراضي" : "Angenommene Jahresrendite",
      value: annualReturn,
      onChange: setAnnualReturn,
      suffix: "%",
    },
  ];

  return (
    <section className="surface p-6 md:p-8" aria-labelledby="investment-calculator-title">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-blue">
          {locale === "ar" ? "حاسبة توضيحية" : "Beispielrechner"}
        </p>
        <h2 id="investment-calculator-title" className="mt-3 text-2xl font-semibold text-brand-navy">
          {locale === "ar" ? "حاسبة خطة الاستثمار" : "Sparplan-Rechner"}
        </h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          {locale === "ar"
            ? "غيّر القيم لتفهم أثر الوقت والمبالغ الدورية. النتيجة مثال حسابي فقط."
            : "Aendere die Werte, um den Einfluss von Zeit und regelmaessigen Betraegen zu verstehen. Das Ergebnis ist nur ein Rechenbeispiel."}
        </p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {fields.map((field) => (
          <label key={field.id} htmlFor={field.id} className="block text-sm font-semibold text-brand-navy">
            {field.label}
            <span className="mt-2 flex items-center rounded-2xl border border-slate-200 bg-slate-50 px-4 focus-within:border-brand-blue focus-within:bg-white focus-within:ring-2 focus-within:ring-brand-blue/15">
              <input
                id={field.id}
                type="number"
                min="0"
                step={field.id === "annual-return" ? "0.1" : "1"}
                inputMode="decimal"
                value={field.value}
                onChange={(event) => field.onChange(event.target.value)}
                className="h-12 min-w-0 flex-1 bg-transparent text-base font-medium text-brand-ink outline-none"
              />
              <span className="text-xs font-medium text-slate-500">{field.suffix}</span>
            </span>
          </label>
        ))}
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {[
          { label: locale === "ar" ? "إجمالي المبالغ المدفوعة" : "Eingezahlte Betraege", value: formatter.format(values.contributions) },
          { label: locale === "ar" ? "القيمة الافتراضية المقدرة" : "Hypothetischer Endwert", value: formatter.format(values.estimatedValue) },
          { label: locale === "ar" ? "الفرق الافتراضي" : "Hypothetischer Ertrag", value: formatter.format(values.estimatedGain) },
        ].map((result) => (
          <div key={result.label} className="rounded-3xl border border-slate-200 bg-slate-50/80 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">{result.label}</p>
            <p className="mt-2 text-xl font-bold text-brand-navy">{result.value}</p>
          </div>
        ))}
      </div>

      <p className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-7 text-amber-950">
        {locale === "ar"
          ? "تنبيه مهم: هذه الحاسبة توضيحية فقط، وليست توقعاً أو ضماناً أو توصية استثمارية. الأداء الفعلي قد يختلف بشكل كبير وقد تخسر جزءاً من رأس المال أو كله."
          : "Wichtiger Hinweis: Dieser Rechner dient nur zur Veranschaulichung. Er ist keine Prognose, Garantie oder Anlageempfehlung. Die tatsaechliche Entwicklung kann stark abweichen; ein Teil oder das gesamte Kapital kann verloren gehen."}
      </p>
    </section>
  );
}
