import Link from "next/link";

import { BrandLogo } from "@/components/BrandLogo";
import { Container } from "@/components/Container";
import { HeaderCategoryScroller } from "@/components/HeaderCategoryScroller";
import { HeaderSearch } from "@/components/HeaderSearch";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import type { Locale } from "@/src/config/site";

export function Header({ locale }: { locale: Locale }) {
  return (
    <header className="relative z-30 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <Container className="flex flex-col gap-3 py-3 lg:gap-5 lg:py-4">
        <div className="flex flex-col gap-3 lg:relative lg:flex-row lg:items-center lg:justify-between lg:gap-6">
          <div className="flex items-center justify-between gap-3 lg:justify-start">
            <Link href={`/${locale}`} className="shrink-0">
              <BrandLogo className="h-10 w-10 sm:h-12 sm:w-12" />
            </Link>
            <div className="flex justify-start lg:hidden">
              <LanguageSwitcher locale={locale} />
            </div>
          </div>
          <div className="order-2 flex w-full lg:absolute lg:left-1/2 lg:top-1/2 lg:w-full lg:max-w-3xl lg:-translate-x-1/2 lg:-translate-y-1/2">
            <HeaderSearch locale={locale} />
          </div>
          <div className="hidden lg:flex lg:justify-end">
            <LanguageSwitcher locale={locale} />
          </div>
        </div>
        <HeaderCategoryScroller locale={locale} />
      </Container>
    </header>
  );
}
