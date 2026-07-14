import Link from "next/link";

import { BrandLogo } from "@/components/BrandLogo";
import { Container } from "@/components/Container";
import { HeaderCategoryScroller } from "@/components/HeaderCategoryScroller";
import { HeaderSearch } from "@/components/HeaderSearch";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import type { Locale } from "@/src/config/site";

export function Header({ locale }: { locale: Locale }) {
  const isArabic = locale === "ar";

  return (
    <header className="border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <Container className="flex flex-col gap-3 py-3 lg:gap-5 lg:py-4">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-4">
          {isArabic ? (
            <>
              <div className="flex items-center justify-between gap-3 lg:order-3 lg:justify-end">
                <div className="order-2 flex justify-start lg:order-1">
                  <LanguageSwitcher locale={locale} />
                </div>
                <Link href={`/${locale}`} className="order-1 shrink-0 lg:order-2">
                  <BrandLogo className="h-10 w-10 sm:h-12 sm:w-12" reverse />
                </Link>
              </div>
              <div className="order-2 w-full flex-1 lg:order-2">
                <HeaderSearch locale={locale} />
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center justify-between gap-3 lg:order-1">
                <Link href={`/${locale}`} className="shrink-0">
                  <BrandLogo className="h-10 w-10 sm:h-12 sm:w-12" />
                </Link>
                <div className="flex justify-start lg:justify-end">
                  <LanguageSwitcher locale={locale} />
                </div>
              </div>
              <div className="order-2 w-full flex-1 lg:order-2">
                <HeaderSearch locale={locale} />
              </div>
            </>
          )}
        </div>
        <HeaderCategoryScroller locale={locale} />
      </Container>
    </header>
  );
}
