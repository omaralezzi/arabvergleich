import type { Locale } from "@/src/config/site";

export function WidgetLimitNotice({ locale }: { locale: Locale }) {
  return (
    <div className="mb-5 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-7 text-slate-700">
      <p className="font-semibold text-brand-navy">
        {locale === "ar" ? "ملاحظة مهمة حول أداة المقارنة" : "Wichtiger Hinweis zum Vergleichstool"}
      </p>
      <p className="mt-2">
        {locale === "ar"
          ? "أداة CHECK24 هنا تعمل داخل إطار خارجي رسمي. لهذا لا يمكننا فرض ترتيب النتائج من الأرخص للأغلى، أو تثبيت 10 نتائج فقط مع أزرار التالي/السابق، أو ترجمة النصوص الداخلية بالكامل للعربية من طرف موقعنا."
          : "Das CHECK24-Tool laeuft in einem offiziellen externen iFrame. Deshalb koennen Sortierung, feste 10er-Pagination oder eine komplette interne Uebersetzung hier nicht lokal ueberschrieben werden."}
      </p>
      {locale === "ar" ? (
        <div className="mt-3 rounded-xl bg-white p-4">
          <p className="font-semibold text-brand-navy">مساعدة سريعة لقراءة النتائج بالألمانية:</p>
          <ul className="mt-2 space-y-2">
            <li>`Preis` = السعر</li>
            <li>`Bonus` = بونص أو مكافأة</li>
            <li>`Vertragslaufzeit` = مدة العقد</li>
            <li>`Preisgarantie` = ضمان ثبات السعر</li>
            <li>`kuendbar` = قابل للإلغاء</li>
          </ul>
        </div>
      ) : null}
    </div>
  );
}
