import type { InvestmentCta } from "@/src/content/investment";
import type { Locale } from "@/src/config/site";

import { InvestmentAffiliateCTA } from "@/components/InvestmentAffiliateCTA";
import { InvestmentDisclosure } from "@/components/InvestmentDisclosure";

export function InvestmentPartnerJourney({
  locale,
  cta,
  trading = false,
}: {
  locale: Locale;
  cta?: InvestmentCta;
  trading?: boolean;
}) {
  const copy =
    locale === "ar"
      ? {
          eyebrow: "قبل الانتقال إلى XTB",
          title: "اعرف إلى أين سيأخذك الرابط وما الذي يحدث بعده",
          description:
            "هذا الرابط ينقلك من ArabVergleich إلى موقع XTB. لا ننشئ حساباً بالنيابة عنك ولا نستلم وثائقك أو أموالك.",
          steps: [
            "اقرأ الشرح في هذه الصفحة وحدد المسار الذي تريد فهمه.",
            "اضغط رابط الشراكة المسمى بوضوح للانتقال إلى عرض XTB المرتبط بهذا الموضوع.",
            "لدى XTB، راجع معلومات المنتج الحالية والرسوم والشروط وتحذيرات المخاطر قبل التسجيل أو الإيداع.",
            "إذا قررت المتابعة، تكمل التسجيل والتحقق مباشرة مع XTB وفق إجراءاتهم الحالية.",
          ],
          checklistTitle: "راجع هذه النقاط قبل المتابعة",
          checklist: [
            "رسوم المنتج وتحويل العملات وأي تكاليف إضافية قد تنطبق.",
            "شروط المنتج وحدوده وإمكانية تعديله أو إيقافه.",
            "مخاطر خسارة رأس المال والتحذيرات الملائمة للمنتج.",
            "سياسة الخصوصية لدى XTB وكيفية معالجة بياناتك بعد الانتقال.",
          ],
          tradingNote: "التداول بالرافعة وCFDs ليسا مناسبين للجميع. لا تنتقل إلا بعد قراءة تحذير المخاطر أعلاه وفهمه.",
          actionTitle: "الخطوة التالية",
          actionText: "يفتح هذا الزر موقع XTB في النافذة نفسها لمراجعة العرض الحالي.",
        }
      : {
          eyebrow: "Vor dem Wechsel zu XTB",
          title: "Wohin fuehrt der Link und was passiert danach?",
          description:
            "Dieser Link fuehrt von ArabVergleich auf die Website von XTB. Wir eroeffnen kein Konto fuer dich und nehmen weder Ausweisdokumente noch Geld entgegen.",
          steps: [
            "Lies die Erklaerung auf dieser Seite und waehle den Weg, den du verstehen moechtest.",
            "Nutze den klar bezeichneten Partnerlink zum passenden XTB-Angebot.",
            "Pruefe bei XTB die aktuellen Produktinformationen, Kosten, Bedingungen und Risikohinweise, bevor du dich registrierst oder Geld einzahlst.",
            "Wenn du fortfaehrst, erfolgen Registrierung und Verifizierung direkt nach den aktuellen XTB-Prozessen.",
          ],
          checklistTitle: "Das solltest du vorher pruefen",
          checklist: [
            "Produktkosten, Waehrungsumrechnung und moegliche weitere Gebuehren.",
            "Bedingungen, Grenzen sowie moegliche Aenderungen oder Beendigungen des Produkts.",
            "Risiko eines Kapitalverlusts und die zum Produkt gehoerenden Warnhinweise.",
            "Die XTB-Datenschutzhinweise und die Verarbeitung deiner Daten nach dem Wechsel.",
          ],
          tradingNote: "Hebelprodukte und CFDs sind nicht fuer alle geeignet. Wechsle erst weiter, wenn du den obigen Risikohinweis gelesen und verstanden hast.",
          actionTitle: "Naechster Schritt",
          actionText: "Dieser Button oeffnet das aktuelle XTB-Angebot im selben Fenster.",
        };

  return (
    <section id="xtb-next-step" className="surface scroll-mt-8 p-6 md:p-8" aria-labelledby="xtb-next-step-title">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-blue">{copy.eyebrow}</p>
      <h2 id="xtb-next-step-title" className="mt-3 text-2xl font-semibold text-brand-navy">
        {copy.title}
      </h2>
      <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-600">{copy.description}</p>

      <ol className="mt-6 grid gap-3 md:grid-cols-2">
        {copy.steps.map((step, index) => (
          <li key={step} className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50/80 p-4 text-sm leading-7 text-slate-700">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-blue text-xs font-bold text-white">
              {index + 1}
            </span>
            <span>{step}</span>
          </li>
        ))}
      </ol>

      <div className="mt-6 rounded-2xl border border-sky-100 bg-sky-50/70 p-5">
        <h3 className="text-base font-semibold text-brand-navy">{copy.checklistTitle}</h3>
        <ul className="mt-3 grid gap-2 text-sm leading-7 text-slate-700 md:grid-cols-2">
          {copy.checklist.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {trading ? <p className="mt-5 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-7 text-red-950">{copy.tradingNote}</p> : null}

      {cta ? (
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
          <h3 className="text-base font-semibold text-brand-navy">{copy.actionTitle}</h3>
          <p className="mt-2 text-sm leading-7 text-slate-600">{copy.actionText}</p>
          <div className="mt-4">
            <InvestmentAffiliateCTA campaign={cta.campaign} label={cta.label[locale]} locale={locale} placement="partner-journey" />
          </div>
        </div>
      ) : null}

      <InvestmentDisclosure locale={locale} />
    </section>
  );
}
