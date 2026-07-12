import Link from "next/link";

import { Icon } from "@/components/Icon";
import type { Locale, ServiceSlug } from "@/src/config/site";

export function ServiceCard({
  icon,
  title,
  description,
  href,
  cta,
}: {
  icon: string;
  title: string;
  description: string;
  href: string;
  cta: string;
  locale: Locale;
  slug: ServiceSlug;
}) {
  return (
    <article className="surface group relative flex h-full flex-col overflow-hidden p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-orange via-orange-300 to-brand-blue opacity-70" />
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-mist text-brand-orange transition duration-300 group-hover:scale-105">
        <Icon name={icon} />
      </div>
      <h3 className="mt-5 text-xl font-semibold text-brand-navy">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{description}</p>
      <Link
        href={href}
        className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-brand-orange px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
      >
        {cta}
        <span aria-hidden="true">←</span>
      </Link>
    </article>
  );
}
