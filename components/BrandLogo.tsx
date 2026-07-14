import Image from "next/image";

type BrandLogoProps = {
  className?: string;
  withWordmark?: boolean;
  reverse?: boolean;
};

export function BrandLogo({ className = "h-11 w-11", withWordmark = true, reverse = false }: BrandLogoProps) {
  return (
    <span className={`inline-flex items-center gap-2 sm:gap-3 ${reverse ? "flex-row-reverse" : ""}`}>
      <Image
        src="/av-logo-exact.png"
        alt="ArabVergleich logo"
        width={128}
        height={128}
        priority
        className={className}
      />
      {withWordmark ? (
        <span className="text-base font-bold tracking-tight text-brand-navy sm:text-xl">ArabVergleich</span>
      ) : null}
    </span>
  );
}
