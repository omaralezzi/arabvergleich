export function FAQ({
  title,
  items,
}: {
  title: string;
  items: { question: string; answer: string }[];
}) {
  return (
    <section className="section-gap">
      <div className="surface p-6 md:p-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-blue">FAQ</p>
          <h2 className="mt-3 text-2xl font-semibold text-brand-navy">{title}</h2>
        </div>
        <div className="mt-6 space-y-4">
          {items.map((item) => (
            <details key={item.question} className="rounded-3xl border border-slate-200 bg-slate-50/80 p-4 transition open:border-brand-blue/30 open:bg-white">
              <summary className="cursor-pointer list-none font-semibold text-brand-ink">{item.question}</summary>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
