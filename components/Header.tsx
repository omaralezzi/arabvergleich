import Link from "next/link";

import { Container } from "@/components/Container";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { topNavigationGroups } from "@/src/content/serviceCatalog";
import { siteProfile } from "@/src/content/siteSettings";
import type { Locale } from "@/src/config/site";

export function Header({ locale }: { locale: Locale }) {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <Container className="py-3 md:py-4">
        <div className="flex items-center justify-between gap-4">
          <Link href={`/${locale}`} className="flex min-w-0 items-center gap-3 text-lg font-bold tracking-tight text-brand-navy sm:text-xl">
            <img src="/av-logo.svg" alt="AV logo" className="h-9 w-9 rounded-xl sm:h-10 sm:w-10" />
            <span className="truncate">{siteProfile.brandName}</span>
          </Link>
          <div className="shrink-0 lg:hidden">
            <LanguageSwitcher locale={locale} />
          </div>
        </div>

        <div className="mt-3 lg:hidden">
          <details className="surface overflow-hidden">
            <summary className="cursor-pointer list-none px-4 py-3 text-sm font-semibold text-brand-navy">
              {locale === "ar" ? "تصفح الأقسام" : "Bereiche durchsuchen"}
            </summary>
            <nav className="grid gap-2 border-t border-slate-200 px-4 py-4 text-sm text-slate-600 sm:grid-cols-2">
              {topNavigationGroups.map((group) => (
                <Link
                  key={group.slug}
                  href={`/${locale}/${group.href}`}
                  className="rounded-2xl bg-slate-50 px-3 py-3 hover:text-brand-blue"
                >
                  {group.title[locale]}
                </Link>
              ))}
            </nav>
          </details>
        </div>

        <div className="hidden lg:mt-0 lg:flex lg:items-center lg:justify-between lg:gap-6">
          <nav className="flex flex-1 items-center justify-center gap-4 xl:gap-6 text-sm text-slate-600">
            {topNavigationGroups.map((group) => (
              <Link key={group.slug} href={`/${locale}/${group.href}`} className="whitespace-nowrap hover:text-brand-blue">
                {group.title[locale]}
              </Link>
            ))}
          </nav>
          <div className="shrink-0">
            <LanguageSwitcher locale={locale} />
          </div>
        </div>
      </Container>
    </header>
  );
}
