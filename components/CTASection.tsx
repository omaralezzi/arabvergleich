import Link from "next/link";

import { Container } from "@/components/Container";

export function CTASection({
  title,
  description,
  cta,
  href,
  external = false,
}: {
  title: string;
  description: string;
  cta: string;
  href: string;
  external?: boolean;
}) {
  return (
    <section className="section-gap">
      <Container>
        <div className="surface flex flex-col gap-5 bg-brand-navy px-6 py-8 text-white md:flex-row md:items-center md:justify-between md:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className="mt-2 text-sm leading-7 text-sky-50">{description}</p>
          </div>
          <Link
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "nofollow sponsored noopener noreferrer" : undefined}
            className="inline-flex w-fit rounded-full bg-brand-orange px-5 py-3 text-sm font-semibold text-white hover:bg-orange-600"
          >
            {cta}
          </Link>
        </div>
      </Container>
    </section>
  );
}
