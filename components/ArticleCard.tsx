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
    <article className="surface p-6">
      <h3 className="text-lg font-semibold text-brand-navy">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
      <div className="mt-5 space-y-4">
        {sections.map((section) => (
          <div key={section.heading} className="rounded-2xl bg-slate-50 p-4">
            <h4 className="text-sm font-semibold text-brand-navy">{section.heading}</h4>
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
        className="mt-5 inline-flex rounded-full border border-brand-blue px-4 py-2 text-sm font-semibold text-brand-blue hover:bg-brand-blue hover:text-white"
      >
        {cta}
      </Link>
    </article>
  );
}
