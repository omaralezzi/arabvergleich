import Link from "next/link";

import { Container } from "@/components/Container";
import { SocialLinks } from "@/components/SocialLinks";
import { footerDisclosure } from "@/src/content/siteContent";
import type { Locale } from "@/src/config/site";

export function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <Container className="flex flex-col gap-5 py-8 text-sm text-slate-600">
        <div className="flex flex-wrap gap-4">
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
        <SocialLinks />
        <p>ArabVergleich ist ein unabhaengiges Informations- und Vergleichsportal.</p>
        <p className="text-xs text-gray-400">{footerDisclosure[locale]}</p>
      </Container>
    </footer>
  );
}
