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
    <article className="surface flex h-full min-w-0 flex-col p-5 sm:p-6">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-mist text-brand-orange sm:h-12 sm:w-12">
        <Icon name={icon} />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-brand-navy sm:text-xl">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{description}</p>
      <Link
        href={href}
        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-brand-orange px-5 py-3 text-sm font-semibold text-white hover:bg-orange-600 sm:w-fit"
      >
        {cta}
      </Link>
    </article>
  );
}
