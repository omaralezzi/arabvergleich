export type XtbCampaignKey =
  | "home"
  | "stocks"
  | "etf"
  | "investment-plans"
  | "investment-plans-etf"
  | "interest"
  | "mobile-app"
  | "forex"
  | "commodities"
  | "indices";

export type AffiliateCampaign = {
  key: XtbCampaignKey;
  provider: "XTB";
  campaignName: string;
  campaignId: number;
  market: "DE";
  language: "de";
  externalUrl: string;
  internalPath: string;
  source: string;
  lastVerified: string;
  active: boolean;
  fallbackKey: "home";
  conversionIntent: string;
  allowedPages: string[];
};

export type MutableFinancialValue = {
  value: number;
  unit: string;
  source: string;
  lastVerified: string;
  effectiveFrom: string;
  notes?: string;
};

export type InvestmentProvider = {
  key: "xtb";
  name: "XTB";
  market: "DE";
  source: string;
  lastVerified: string;
  productCategories: readonly ["stocks", "etf", "investment-plans", "interest", "trading"];
};

const partnerSource = "XTB Partner Platform";
const lastVerified = "2026-09-02";

export const xtbProvider: InvestmentProvider = {
  key: "xtb",
  name: "XTB",
  market: "DE",
  source: partnerSource,
  lastVerified,
  productCategories: ["stocks", "etf", "investment-plans", "interest", "trading"],
};

export const xtbCampaigns: Record<XtbCampaignKey, AffiliateCampaign> = {
  home: {
    key: "home",
    provider: "XTB",
    campaignName: "Home Page",
    campaignId: 122,
    market: "DE",
    language: "de",
    externalUrl: "https://link-pso.xtb.com/pso/y9kUQ",
    internalPath: "/go/xtb",
    source: partnerSource,
    lastVerified,
    active: true,
    fallbackKey: "home",
    conversionIntent: "General XTB account discovery",
    allowedPages: ["hub", "xtb", "demo", "options"],
  },
  stocks: {
    key: "stocks",
    provider: "XTB",
    campaignName: "0% Stocks Commission",
    campaignId: 24,
    market: "DE",
    language: "de",
    externalUrl: "https://link-pso.xtb.com/pso/nYNgI",
    internalPath: "/go/xtb/stocks",
    source: partnerSource,
    lastVerified,
    active: true,
    fallbackKey: "home",
    conversionIntent: "Stocks discovery",
    allowedPages: ["xtb", "stocks"],
  },
  etf: {
    key: "etf",
    provider: "XTB",
    campaignName: "ETF",
    campaignId: 136,
    market: "DE",
    language: "de",
    externalUrl: "https://link-pso.xtb.com/pso/kD8xt",
    internalPath: "/go/xtb/etf",
    source: partnerSource,
    lastVerified,
    active: true,
    fallbackKey: "home",
    conversionIntent: "ETF discovery",
    allowedPages: ["xtb", "etf", "stocks"],
  },
  "investment-plans": {
    key: "investment-plans",
    provider: "XTB",
    campaignName: "Investment Plans",
    campaignId: 219,
    market: "DE",
    language: "de",
    externalUrl: "https://link-pso.xtb.com/pso/T9UH4",
    internalPath: "/go/xtb/investment-plans",
    source: partnerSource,
    lastVerified,
    active: true,
    fallbackKey: "home",
    conversionIntent: "Investment plan discovery",
    allowedPages: ["xtb", "sparplan"],
  },
  "investment-plans-etf": {
    key: "investment-plans-etf",
    provider: "XTB",
    campaignName: "Investment Plans - ETFs",
    campaignId: 230,
    market: "DE",
    language: "de",
    externalUrl: "https://link-pso.xtb.com/pso/B7MhH",
    internalPath: "/go/xtb/etf-sparplan",
    source: partnerSource,
    lastVerified,
    active: true,
    fallbackKey: "home",
    conversionIntent: "ETF investment plan discovery",
    allowedPages: ["etf", "sparplan"],
  },
  interest: {
    key: "interest",
    provider: "XTB",
    campaignName: "Interest Rates",
    campaignId: 222,
    market: "DE",
    language: "de",
    externalUrl: "https://link-pso.xtb.com/pso/bPqHT",
    internalPath: "/go/xtb/interest",
    source: partnerSource,
    lastVerified,
    active: true,
    fallbackKey: "home",
    conversionIntent: "Interest on uninvested cash discovery",
    allowedPages: ["xtb", "zinsen"],
  },
  "mobile-app": {
    key: "mobile-app",
    provider: "XTB",
    campaignName: "Mobile App",
    campaignId: 126,
    market: "DE",
    language: "de",
    externalUrl: "https://link-pso.xtb.com/pso/cjFrW",
    internalPath: "/go/xtb/app",
    source: partnerSource,
    lastVerified,
    active: true,
    fallbackKey: "home",
    conversionIntent: "XTB app discovery",
    allowedPages: ["xtb"],
  },
  forex: {
    key: "forex",
    provider: "XTB",
    campaignName: "FOREX",
    campaignId: 39,
    market: "DE",
    language: "de",
    externalUrl: "https://link-pso.xtb.com/pso/SxyAA",
    internalPath: "/go/xtb/forex",
    source: partnerSource,
    lastVerified,
    active: true,
    fallbackKey: "home",
    conversionIntent: "Forex trading discovery",
    allowedPages: ["trading"],
  },
  commodities: {
    key: "commodities",
    provider: "XTB",
    campaignName: "Commodities",
    campaignId: 67,
    market: "DE",
    language: "de",
    externalUrl: "https://link-pso.xtb.com/pso/kBH9Q",
    internalPath: "/go/xtb/commodities",
    source: partnerSource,
    lastVerified,
    active: true,
    fallbackKey: "home",
    conversionIntent: "Commodities trading discovery",
    allowedPages: ["trading"],
  },
  indices: {
    key: "indices",
    provider: "XTB",
    campaignName: "Indices",
    campaignId: 261,
    market: "DE",
    language: "de",
    externalUrl: "https://link-pso.xtb.com/pso/qRfOm",
    internalPath: "/go/xtb/indices",
    source: partnerSource,
    lastVerified,
    active: true,
    fallbackKey: "home",
    conversionIntent: "Indices trading discovery",
    allowedPages: ["trading"],
  },
};

export const mutableInvestmentData = {
  cfdRiskWarning: {
    value: 77,
    unit: "%",
    source: "XTB Partnership / ESMA Risk Warning",
    lastVerified,
    effectiveFrom: "2026-08-01",
    notes: "Retail CFD loss percentage supplied in the approved XTB partner communication.",
  } satisfies MutableFinancialValue,
} as const;

const campaignPathAliases: Record<string, XtbCampaignKey> = {
  "etf-sparplan": "investment-plans-etf",
  app: "mobile-app",
};

export function getXtbCampaign(key: string) {
  return xtbCampaigns[campaignPathAliases[key] ?? (key as XtbCampaignKey)];
}
