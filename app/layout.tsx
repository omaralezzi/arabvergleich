import type { Metadata } from "next";

import "./globals.css";
import { seoDefaults, siteProfile } from "@/src/content/siteSettings";

export const metadata: Metadata = {
  metadataBase: new URL(siteProfile.domain),
  title: {
    default: seoDefaults.defaultTitle,
    template: seoDefaults.titleTemplate,
  },
  description: seoDefaults.descriptions.ar,
  applicationName: siteProfile.brandName,
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: ["/icon.svg"],
    apple: ["/icon.svg"],
  },
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteProfile.domain,
  },
  openGraph: {
    type: "website",
    siteName: siteProfile.brandName,
    url: siteProfile.domain,
    title: seoDefaults.defaultTitle,
    description: seoDefaults.descriptions.ar,
    locale: "ar_DE",
  },
  twitter: {
    card: "summary_large_image",
    title: seoDefaults.defaultTitle,
    description: seoDefaults.descriptions.ar,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar">
      <body>{children}</body>
    </html>
  );
}
