import Link from "next/link";

import type { Locale } from "@/src/config/site";

export function LanguageSwitcher({ locale, slug }: { locale: Locale; slug?: string }) {
  const targetLocale = locale === "ar" ? "de" : "ar";
  const href = slug ? `/${targetLocale}/${slug}` : `/${targetLocale}`;

  return (
    <Link
      href={href}
      className="inline-flex min-h-10 items-center justify-center rounded-full border border-slate-200 px-3 py-1.5 text-sm font-medium text-brand-navy hover:border-brand-blue hover:text-brand-blue sm:min-h-11 sm:px-4 sm:py-2"
    >
      {locale === "ar" ? "Deutsch" : "العربية"}
    </Link>
  );
}
