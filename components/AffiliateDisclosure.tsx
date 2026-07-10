import { disclosure } from "@/src/content/siteContent";
import type { Locale } from "@/src/config/site";

export function AffiliateDisclosure({ locale }: { locale: Locale }) {
  return <p className="mt-3 text-xs text-gray-400">{disclosure[locale]}</p>;
}
