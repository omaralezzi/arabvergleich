"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { serviceCategories } from "@/src/content/serviceCatalog";
import type { Locale } from "@/src/config/site";

type HeaderSearchProps = {
  locale: Locale;
};

export function HeaderSearch({ locale }: HeaderSearchProps) {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const services = useMemo(
    () =>
      serviceCategories.flatMap((category) =>
        category.services.map((service) => ({
          slug: service.slug,
          title: service.title[locale],
          category: category.title[locale],
          href: `/${locale}/${service.slug}`,
        })),
      ),
    [locale],
  );

  const normalizedQuery = query.trim().toLowerCase();
  const results = useMemo(() => {
    if (!normalizedQuery) {
      return services.slice(0, 8);
    }

    return services
      .filter(
        (service) =>
          service.title.toLowerCase().includes(normalizedQuery) || service.category.toLowerCase().includes(normalizedQuery),
      )
      .slice(0, 8);
  }, [normalizedQuery, services]);

  const hasDropdown = isFocused && results.length > 0;

  return (
    <div className="relative w-full max-w-3xl">
      <label className="sr-only" htmlFor={`header-search-${locale}`}>
        {locale === "ar" ? "ابحث في جميع الخدمات" : "Alle Leistungen durchsuchen"}
      </label>
      <div className="flex items-center rounded-full border border-slate-200 bg-white shadow-sm transition focus-within:border-brand-blue focus-within:ring-2 focus-within:ring-brand-blue/15">
        <input
          id={`header-search-${locale}`}
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => window.setTimeout(() => setIsFocused(false), 120)}
          placeholder={locale === "ar" ? "ابحث في كل الأقسام والخدمات" : "In allen Bereichen und Services suchen"}
          className="h-11 w-full rounded-full bg-transparent px-4 text-sm text-slate-800 outline-none placeholder:text-slate-400 sm:h-12 sm:px-5 sm:text-[15px] lg:h-14 lg:px-6 lg:text-base"
          dir={locale === "ar" ? "rtl" : "ltr"}
        />
        <span className="px-3 text-slate-400 sm:px-4 lg:px-5" aria-hidden="true">
          {locale === "ar" ? "⌕" : "⌕"}
        </span>
      </div>
      {hasDropdown ? (
        <div className="absolute inset-x-0 top-[calc(100%+0.5rem)] z-50 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
          <div className="border-b border-slate-100 px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 sm:px-5">
            {locale === "ar" ? "نتائج الخدمات" : "Service results"}
          </div>
          <div className="max-h-96 overflow-y-auto py-2">
            {results.map((service) => (
              <Link
                key={service.slug}
                href={service.href}
                className="flex items-center justify-between gap-4 px-4 py-3 text-sm transition hover:bg-slate-50 sm:px-5"
              >
                <div className="min-w-0">
                  <div className="truncate font-semibold text-slate-900">{service.title}</div>
                  <div className="truncate text-xs text-slate-500">{service.category}</div>
                </div>
                <span className="shrink-0 text-brand-blue">{locale === "ar" ? "اذهب" : "Open"}</span>
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
