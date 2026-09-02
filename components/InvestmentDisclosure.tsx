import type { Locale } from "@/src/config/site";

export function InvestmentDisclosure({ locale }: { locale: Locale }) {
  return (
    <p className="mt-4 text-xs leading-6 text-slate-500">
      {locale === "ar"
        ? "إفصاح إعلاني: قد نحصل على عمولة من XTB عند استخدام رابط الشراكة أو التسجيل عبره. المحتوى هنا معلومات عامة وليس نصيحة استثمارية فردية."
        : "Werblicher Hinweis: Bei Nutzung eines Partnerlinks oder einer Registrierung ueber XTB kann ArabVergleich eine Provision erhalten. Die Inhalte sind allgemeine Informationen und keine individuelle Anlageberatung."}
    </p>
  );
}
