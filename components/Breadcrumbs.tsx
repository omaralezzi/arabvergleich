import Link from "next/link";

import type { Locale } from "@/src/config/site";

export function Breadcrumbs({ locale, current }: { locale: Locale; current: string }) {
  return (
    <nav className="text-sm text-slate-500">
      <Link href={`/${locale}`} className="hover:text-brand-blue">
        {locale === "ar" ? "الرئيسية" : "Startseite"}
      </Link>
      <span className="mx-2">/</span>
      <span>{current}</span>
    </nav>
  );
}
