import Link from "next/link";

import { xtbCampaigns, type XtbCampaignKey } from "@/src/config/investment";
import type { Locale } from "@/src/config/site";

export function InvestmentAffiliateCTA({
  campaign,
  label,
  locale,
  placement,
  variant = "primary",
}: {
  campaign: XtbCampaignKey;
  label: string;
  locale: Locale;
  placement: string;
  variant?: "primary" | "secondary";
}) {
  const destination = xtbCampaigns[campaign];

  return (
    <Link
      href={destination.internalPath}
      prefetch={false}
      data-affiliate-provider={destination.provider}
      data-affiliate-campaign={campaign}
      data-affiliate-placement={placement}
      className={
        variant === "primary"
          ? "inline-flex items-center justify-center rounded-full bg-brand-orange px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue"
          : "inline-flex items-center justify-center rounded-full border border-white/35 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
      }
      aria-label={`${label} - ${locale === "ar" ? "رابط شراكة" : "Partnerlink"}`}
    >
      {label}
    </Link>
  );
}
