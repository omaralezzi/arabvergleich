import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "ArabVergleich",
  description: "ArabVergleich helps Arabic-speaking people in Germany compare essential services in simple language.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar">
      <body>{children}</body>
    </html>
  );
}
