import Link from "next/link";

import { BrandLogo } from "@/components/BrandLogo";
import { Container } from "@/components/Container";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { topNavigationGroups } from "@/src/content/serviceCatalog";
import type { Locale } from "@/src/config/site";

export function Header({ locale }: { locale: Locale }) {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <Container className="flex flex-col gap-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <Link href={`/${locale}`} className="shrink-0">
            <BrandLogo className="h-11 w-11" />
          </Link>
          <div className="lg:hidden">
            <LanguageSwitcher locale={locale} />
          </div>
          <div className="hidden lg:block">
            <LanguageSwitcher locale={locale} />
          </div>
        </div>
        <nav className="flex gap-2 overflow-x-auto pb-1 text-sm text-slate-600 lg:hidden">
          {topNavigationGroups.map((group) => (
            <Link
              key={group.slug}
              href={`/${locale}#${group.slug}`}
              className="whitespace-nowrap rounded-full border border-slate-200 bg-slate-50 px-4 py-2 hover:border-brand-blue hover:text-brand-blue"
            >
              {group.title[locale]}
            </Link>
          ))}
        </nav>
        <nav className="hidden flex-1 items-center justify-center gap-4 text-sm text-slate-600 lg:flex">
          {topNavigationGroups.map((group) => (
            <Link key={group.slug} href={`/${locale}#${group.slug}`} className="hover:text-brand-blue">
              {group.title[locale]}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
