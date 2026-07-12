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
        <div className="surface overflow-hidden bg-gradient-to-br from-brand-navy via-brand-blue to-sky-600 px-5 py-8 text-white sm:px-6 md:px-10 md:py-14">
          <div className="max-w-4xl">
            <h1 className="text-2xl font-bold leading-tight sm:text-3xl md:text-5xl">{title}</h1>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-sky-50 sm:text-base md:text-lg md:leading-8">{description}</p>
            {actions ? <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">{actions}</div> : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
