export const siteName = "ArabVergleich";
export const siteUrl = "https://arabvergleich.de";
export const tagline = {
  ar: "دليلك العربي للمقارنة والتوفير في ألمانيا",
  de: "Dein arabischer Wegweiser zum Vergleichen und Sparen in Deutschland",
} as const;

export const locales = ["ar", "de"] as const;
export type Locale = (typeof locales)[number];

export const localeMeta: Record<Locale, { dir: "rtl" | "ltr"; label: string }> = {
  ar: { dir: "rtl", label: "العربية" },
  de: { dir: "ltr", label: "Deutsch" },
};

export const serviceOrder = [
  "dsl",
  "strom",
  "oekostrom",
  "gas",
  "mobilfunk",
  "pauschalreise",
  "mietwagen",
  "c24-bank",
] as const;

export type ServiceSlug = (typeof serviceOrder)[number];
