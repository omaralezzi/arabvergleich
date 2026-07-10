import type { ReactNode } from "react";

import { Container } from "@/components/Container";

export function Hero({
  title,
  description,
  actions,
}: {
  title: string;
  description: string;
  actions?: ReactNode;
}) {
  return (
    <section className="section-gap">
      <Container>
        <div className="surface overflow-hidden bg-gradient-to-br from-brand-navy via-brand-blue to-sky-600 px-6 py-10 text-white md:px-10 md:py-14">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold leading-tight md:text-5xl">{title}</h1>
            <p className="mt-4 text-base leading-8 text-sky-50 md:text-lg">{description}</p>
            {actions ? <div className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
