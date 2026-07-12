import type { ReactNode } from "react";

import { Container } from "@/components/Container";

export function Hero({
  eyebrow,
  title,
  description,
  actions,
  highlights = [],
}: {
  eyebrow?: string;
  title: string;
  description: string;
  actions?: ReactNode;
  highlights?: string[];
}) {
  return (
    <section className="section-gap">
      <Container>
        <div className="surface hero-shell overflow-hidden p-0 text-white">
          <div className="hero-grid relative grid gap-10 overflow-hidden rounded-3xl bg-gradient-to-br from-brand-navy via-brand-blue to-sky-600 px-6 py-10 md:px-10 md:py-14 xl:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.9fr)]">
            <div className="hero-orb hero-orb-one" />
            <div className="hero-orb hero-orb-two" />

            <div className="relative z-10 max-w-4xl">
              {eyebrow ? (
                <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold tracking-[0.2em] text-white/90">
                  {eyebrow}
                </p>
              ) : null}
              <h1 className="mt-5 text-3xl font-bold leading-tight md:text-5xl xl:text-6xl">{title}</h1>
              <p className="mt-4 max-w-2xl text-base leading-8 text-sky-50 md:text-lg">{description}</p>
              {actions ? <div className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
            </div>

            {highlights.length ? (
              <div className="relative z-10 grid gap-3 self-end xl:justify-self-end xl:max-w-sm">
                {highlights.map((highlight, index) => (
                  <div key={highlight} className="rounded-3xl border border-white/15 bg-white/10 px-5 py-4 backdrop-blur-sm">
                    <p className="text-xs font-semibold tracking-[0.18em] text-white/60">
                      {(index + 1).toString().padStart(2, "0")}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-white/92 md:text-base">{highlight}</p>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
