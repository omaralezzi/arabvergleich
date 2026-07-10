import Link from "next/link";

import { Container } from "@/components/Container";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { homeServiceCards } from "@/src/content/siteContent";
import type { Locale } from "@/src/config/site";

export function Header({ locale }: { locale: Locale }) {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <Container className="flex flex-col gap-4 py-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center justify-between gap-4">
          <Link href={`/${locale}`} className="text-xl font-bold tracking-tight text-brand-navy">
            ArabVergleich
          </Link>
          <div className="lg:hidden">
            <LanguageSwitcher locale={locale} />
          </div>
        </div>
        <nav className="hidden flex-1 items-center justify-center gap-4 text-sm text-slate-600 lg:flex">
          {homeServiceCards.map((service) => (
            <Link key={service.slug} href={`/${locale}/${service.slug}`} className="hover:text-brand-blue">
              {service.title[locale]}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <LanguageSwitcher locale={locale} />
        </div>
      </Container>
    </header>
  );
}
