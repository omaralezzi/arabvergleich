import Link from "next/link";

export function ArticleCard({
  title,
  description,
  sections,
  href,
  cta,
}: {
  title: string;
  description: string;
  sections: { heading: string; body: string[] }[];
  href: string;
  cta: string;
}) {
  return (
    <article className="surface group relative overflow-hidden p-6 md:p-7">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-blue via-sky-400 to-brand-orange opacity-70" />
      <h3 className="text-xl font-semibold text-brand-navy">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
      <div className="mt-5 space-y-4">
        {sections.map((section, index) => (
          <div key={section.heading} className="rounded-3xl border border-slate-200 bg-slate-50/80 p-4">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-xs font-bold text-brand-blue shadow-sm">
                {index + 1}
              </span>
              <h4 className="text-sm font-semibold text-brand-navy">{section.heading}</h4>
            </div>
            <div className="mt-2 space-y-2 text-sm leading-7 text-slate-600">
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Link
        href={href}
        className="mt-6 inline-flex items-center gap-2 rounded-full border border-brand-blue px-4 py-2 text-sm font-semibold text-brand-blue transition hover:bg-brand-blue hover:text-white"
      >
        {cta}
        <span aria-hidden="true">←</span>
      </Link>
    </article>
  );
}
