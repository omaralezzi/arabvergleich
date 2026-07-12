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
  "solar",
  "kfz-versicherung",
  "motorrad",
  "rente",
  "berufsunfaehigkeit",
  "leben",
  "unfall",
  "riester-rente",
  "risikoleben",
  "ruerup-rente",
  "pflegezusatz",
  "pkv-vollversicherung",
  "pkv-beamte",
  "krankenzusatz",
  "pkv-studenten",
  "pkv-ue55",
  "hundekrankenversicherung",
  "haftpflicht",
  "hausrat",
  "tierhalter",
  "wohngebaeude",
  "haus-und-grundbesitz",
  "rechtsschutz",
  "firmen",
  "girokonto",
  "baufinanzierung",
  "kredit",
  "kreditkarte",
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
