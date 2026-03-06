# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Product

**SignalOps** — a conversion-focused landing page for a Shopify-focused SaaS product. The AI agent monitors store and marketing data and sends high-signal alerts (via Slack/WhatsApp/email) with recommended actions. Core differentiator: no dashboards, just signals.

Full product spec: `REVENUE_ANALYST.md`

## Tech Stack

- **Framework**: Next.js 15 (App Router, TypeScript)
- **Styling**: Tailwind CSS v4 + DaisyUI v5
- **Theme**: Custom `signalops` dark theme defined in `app/globals.css` via `[data-theme="signalops"]` CSS block

## Commands

```bash
npm install       # install dependencies
npm run dev       # start dev server (localhost:3000)
npm run build     # production build
npm run lint      # ESLint
```

## Architecture

```
app/
  layout.tsx           # root layout — sets data-theme="signalops", metadata
  page.tsx             # landing page — composes all section components
  globals.css          # @import tailwindcss, @plugin daisyui, custom theme vars
  survey/page.tsx      # post-signup micro survey (client component)
  api/signup/route.ts  # POST /api/signup → logs + sendWelcomeEmail placeholder
  api/survey/route.ts  # POST /api/survey → logs survey responses placeholder
components/
  Navbar.tsx            # sticky, blur — "Signal<Ops>" branding + Join Beta CTA
  Hero.tsx              # headline, badge, CTA, hero alert preview card
  ProblemSection.tsx    # dashboard fatigue — platforms grid + pain point cards
  SolutionSection.tsx   # "high-signal only" core principle card
  AlertsSection.tsx     # 3 operator alert cards (revenue/inventory/cost)
  HowItWorksSection.tsx # 3-step flow cards
  FeaturesSection.tsx   # 2×2 benefit-focused feature cards
  FoundingOfferSection.tsx # exclusive beta invitation panel
  SignupForm.tsx        # client component — name/email/storeUrl → POST /api/signup → /survey
  Footer.tsx            # minimal branding + tagline
```

## Key Design Rules

- **Theme variables**: all in `app/globals.css` `[data-theme="signalops"]` block — edit there, not in components
- **Tailwind v4**: no `tailwind.config.js` — all config is CSS-first. Use `@theme` in globals.css to add custom tokens
- **No `tailwind.config.js`** — DaisyUI v5 is registered via `@plugin "daisyui"` in the CSS file
- **Color palette**: background `oklch(7% 0 0)` / primary neon green `oklch(87% 0.29 138)` / use `text-primary`, `border-primary`, `bg-primary` for the green accent
- **Alert card pattern** (used in Hero + AlertsSection): `border-l-4` with `border-l-success/warning/error` + dark bg card
- **Section anatomy**: `py-24 px-4`, inner `max-w-4xl mx-auto`, label `font-mono text-xs text-primary uppercase tracking-widest`
- **Server vs client**: all components are server components except `SignupForm` and `survey/page.tsx` which are `"use client"`

## Pending Integrations

- **Email**: `sendWelcomeEmail()` stub in `app/api/signup/route.ts` — wire up Resend, Postmark, or SendGrid
- **Database**: Both API routes log to console — wire up Airtable, Notion, or Supabase to persist signups and survey responses
