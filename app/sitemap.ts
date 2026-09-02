import type { MetadataRoute } from "next";

import { siteProfile } from "@/src/content/siteSettings";
import { investmentPageSlugs } from "@/src/content/investment";
import { locales, serviceOrder } from "@/src/config/site";

const legalPages = ["impressum", "datenschutz", "ueber-uns"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const localeEntries = locales.map((locale) => ({
    url: `${siteProfile.domain}/${locale}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: locale === "ar" ? 1 : 0.9,
  }));

  const serviceEntries = locales.flatMap((locale) =>
    serviceOrder.map((service) => ({
      url: `${siteProfile.domain}/${locale}/${service}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  );

  const legalEntries = locales.flatMap((locale) =>
    legalPages.map((page) => ({
      url: `${siteProfile.domain}/${locale}/${page}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.3,
    })),
  );

  const investmentEntries = locales.flatMap((locale) => [
    {
      url: `${siteProfile.domain}/${locale}/investieren`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    ...investmentPageSlugs.map((page) => ({
      url: `${siteProfile.domain}/${locale}/investieren/${page}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ]);

  return [...localeEntries, ...serviceEntries, ...investmentEntries, ...legalEntries];
}
