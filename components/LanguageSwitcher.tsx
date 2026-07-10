import Link from "next/link";

import type { Locale } from "@/src/config/site";

export function LanguageSwitcher({ locale, slug }: { locale: Locale; slug?: string }) {
  const targetLocale = locale === "ar" ? "de" : "ar";
  const href = slug ? `/${targetLocale}/${slug}` : `/${targetLocale}`;

  return (
    <Link
      href={href}
      className="inline-flex items-center rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-brand-navy hover:border-brand-blue hover:text-brand-blue"
    >
      {locale === "ar" ? "Deutsch" : "العربية"}
    </Link>
  );
}
