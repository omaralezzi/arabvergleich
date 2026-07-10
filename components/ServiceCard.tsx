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
    <article className="surface flex h-full flex-col p-6">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-mist text-brand-orange">
        <Icon name={icon} />
      </div>
      <h3 className="mt-4 text-xl font-semibold text-brand-navy">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{description}</p>
      <Link
        href={href}
        className="mt-6 inline-flex w-fit rounded-full bg-brand-orange px-5 py-3 text-sm font-semibold text-white hover:bg-orange-600"
      >
        {cta}
      </Link>
    </article>
  );
}
