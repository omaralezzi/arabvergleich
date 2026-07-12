import Link from "next/link";

import { Container } from "@/components/Container";
import { SocialLinks } from "@/components/SocialLinks";
import { footerDisclosure } from "@/src/content/siteContent";
import { siteProfile } from "@/src/content/siteSettings";
import type { Locale } from "@/src/config/site";

export function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <Container className="grid gap-8 py-10 text-sm text-slate-600 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div className="space-y-5">
          <div>
            <p className="text-lg font-bold text-brand-navy">{siteProfile.brandName}</p>
            <p className="mt-2 max-w-xl leading-7">
              {siteProfile.brandName}
              {" "}
              {locale === "ar"
                ? "منصة مستقلة للمعلومات والمقارنات تساعد المستخدم على فهم الخيارات قبل استخدام أدوات الشراكة."
                : "ist ein unabhaengiges Informations- und Vergleichsportal, das Optionen zuerst einfach erklaert und danach passende Partner-Tools zeigt."}
            </p>
          </div>
          <SocialLinks />
          <p className="text-xs text-slate-500">
            {locale === "ar" ? "للتواصل: " : "Kontakt: "}
            {siteProfile.contactEmail}
          </p>
          <p className="text-xs leading-6 text-gray-400">{footerDisclosure[locale]}</p>
        </div>
        <div className="grid content-start gap-3">
          <p className="text-sm font-semibold text-brand-navy">{locale === "ar" ? "روابط مهمة" : "Wichtige Links"}</p>
          <Link href={`/${locale}/impressum`} className="hover:text-brand-blue">
            Impressum
          </Link>
          <Link href={`/${locale}/datenschutz`} className="hover:text-brand-blue">
            Datenschutz
          </Link>
          <Link href={`/${locale}/ueber-uns`} className="hover:text-brand-blue">
            {locale === "ar" ? "من نحن" : "Ueber uns"}
          </Link>
        </div>
      </Container>
    </footer>
  );
}
