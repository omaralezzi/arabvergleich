import Image from "next/image";

type BrandLogoProps = {
  className?: string;
  withWordmark?: boolean;
};

export function BrandLogo({ className = "h-11 w-11", withWordmark = true }: BrandLogoProps) {
  return (
    <span className="inline-flex items-center gap-3">
      <Image
        src="/av-logo-exact.png"
        alt="ArabVergleich logo"
        width={128}
        height={128}
        priority
        className={className}
      />
      {withWordmark ? (
        <span className="text-xl font-bold tracking-tight text-brand-navy">ArabVergleich</span>
      ) : null}
    </span>
  );
}
