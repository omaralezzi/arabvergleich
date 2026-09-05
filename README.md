# ArabVergleich

**Bilingual Arabic/German comparison and information platform for people living in Germany.**

[Live Demo](https://www.arabvergleich.de) · [Arabic](https://www.arabvergleich.de/ar) · [German](https://www.arabvergleich.de/de)

## Overview

ArabVergleich is a production-deployed Next.js project that helps Arabic-speaking users understand and compare important services in Germany before continuing to external partner tools or providers.

The project combines bilingual content, reusable comparison flows, partner integrations and structured routing in a single web application.

### What this project demonstrates

- Building and maintaining a real-world **Next.js / TypeScript** application
- Arabic/German localization and RTL/LTR user experience
- Reusable service and comparison page architecture
- Centralized configuration for partner and affiliate integrations
- Internal redirect handling for outbound partner links
- Content-driven pages, FAQs and SEO-oriented information architecture
- Deployment and operation on **Vercel**
- Working on an existing production codebase through iterative, AI-assisted development

## Tech Stack

- **Next.js 15**
- **React 18**
- **TypeScript 5**
- **Tailwind CSS 3**
- **Vercel**
- Partner / affiliate integrations

## Product Structure

The application separates content, integration configuration and UI concerns so that services can be expanded without duplicating the complete page logic.

Key areas include:

```text
app/                         Application routes and localized pages
components/                  Reusable UI components
src/content/                 Bilingual site and service content
src/config/                  Integration and partner configuration
public/                      Static assets
```

Important configuration points:

- `src/config/affiliateTools.ts` — affiliate tools and outbound integrations
- `src/config/investment.ts` — investment/provider configuration and verification metadata
- `src/content/siteContent.ts` — service copy, FAQs and general content
- `src/content/investment.ts` — bilingual investment content
- `app/[locale]/...` — localized application routes

## Selected Features

### Bilingual experience

The platform serves Arabic and German users with localized routes and content. The UI is designed to support both RTL and LTR reading directions.

### Structured comparison journeys

Users first receive a plain-language explanation of a service and the relevant decision criteria, then continue to a comparison tool or external partner.

### Centralized partner integrations

Commercial outbound links are kept in configuration instead of being scattered across UI components. For example, XTB-related calls to action use internal redirect routes before forwarding to the approved external destination.

### Content and SEO architecture

Service explanations, FAQs and educational content are separated from presentation logic, making the platform easier to maintain and extend.

## Run Locally

Requirements: a recent Node.js version and npm or pnpm.

```bash
npm install
npm run dev
```

or

```bash
pnpm install
pnpm dev
```

Then open:

```text
http://localhost:3000
```

## Build

```bash
npm run build
```

The production deployment is hosted on Vercel.

## Live Product

- Main site: https://www.arabvergleich.de
- Arabic: https://www.arabvergleich.de/ar
- German: https://www.arabvergleich.de/de

## Development Approach

I use AI-assisted development as part of my workflow for requirements analysis, implementation, refactoring and debugging, while reviewing the generated code and keeping project structure, integrations and deployment under direct control.

## Portfolio Note

This repository is shared as part of my professional software-development portfolio. Some commercial partner configuration may change over time and should be verified against the corresponding provider before production use.

Legal and financial content on the live platform is informational and does not constitute individual legal or financial advice.

---

**Omar Al-Ezzi**  
Fullstack Developer · AI & SaaS Applications  
GitHub: https://github.com/omaralezzi  
Portfolio: https://al-ezzi.netlify.app
