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
        <h2 className="text-2xl font-semibold text-brand-navy">{title}</h2>
        <div className="mt-6 space-y-4">
          {items.map((item) => (
            <details key={item.question} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <summary className="cursor-pointer list-none font-semibold text-brand-ink">{item.question}</summary>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
