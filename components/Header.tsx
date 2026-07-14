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
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <Container className="flex flex-col gap-4 py-4 lg:gap-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
          {isArabic ? (
            <>
              <div className="flex justify-start lg:order-3 lg:justify-end">
                <Link href={`/${locale}`} className="shrink-0">
                  <BrandLogo className="h-12 w-12" />
                </Link>
              </div>
              <div className="order-2 w-full flex-1">
                <HeaderSearch locale={locale} />
              </div>
              <div className="order-1 flex justify-start lg:order-1">
                <LanguageSwitcher locale={locale} />
              </div>
            </>
          ) : (
            <>
              <div className="flex justify-start lg:order-1">
                <Link href={`/${locale}`} className="shrink-0">
                  <BrandLogo className="h-12 w-12" />
                </Link>
              </div>
              <div className="order-2 w-full flex-1">
                <HeaderSearch locale={locale} />
              </div>
              <div className="order-3 flex justify-start lg:justify-end">
                <LanguageSwitcher locale={locale} />
              </div>
            </>
          )}
        </div>
        <HeaderCategoryScroller locale={locale} />
      </Container>
    </header>
  );
}
