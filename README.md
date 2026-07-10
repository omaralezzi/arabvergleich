# ArabVergleich

Next.js project for a bilingual Arabic/German comparison portal aimed at Arabic-speaking people in Germany.

## Run locally

1. Install dependencies with `pnpm install` or `npm install`.
2. Start the dev server with `pnpm dev`.
3. Open `http://localhost:3000`.

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Log in to Vercel and choose `Add New Project`.
3. Import the GitHub repository.
4. Keep the detected framework as `Next.js`.
5. Deploy without adding environment variables.

Vercel should use the existing `build` script from `package.json` automatically.

## Where to edit things

- Impressum owner details: update the placeholder text in `app/[locale]/[service]/page.tsx` inside the `impressum` section.
- Affiliate codes and links: update `src/config/affiliateTools.ts`.
- Service copy, FAQs, SEO, and home page text: update `src/content/siteContent.ts`.

## Legal note

Impressum and Datenschutz texts are placeholders and should be reviewed legally before publishing the website.
