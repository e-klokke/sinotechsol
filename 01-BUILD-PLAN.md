# 01: Build Plan (To-Do)

Work top to bottom. Each phase ends with a check before moving on. Boxes are for Claude Code
to tick as it goes.

## Phase 0: Project setup
- [ ] Scaffold Next.js 14 App Router + TypeScript project
- [ ] Add Tailwind CSS and create `tailwind.config.ts` with tokens from `04-DESIGN-SYSTEM.md`
- [ ] Self-host Archivo, IBM Plex Sans, IBM Plex Mono via `next/font/local` or `next/font/google` with `display: swap`
- [ ] Set up `content/` directory with typed copy objects
- [ ] Configure ESLint + Prettier, commit a clean baseline
- [ ] Connect repo to Vercel, confirm a placeholder deploy succeeds
- Check: `npm run build` passes, placeholder site is live

## Phase 1: Design system foundation
- [ ] Implement color, spacing, radius, and shadow tokens
- [ ] Implement typography scale (display / heading / body / mono label)
- [ ] Build primitive components: `Button`, `Container`, `Section`, `Eyebrow`, `Card`, `Chip`
- [ ] Build `GradientRule` (the cyan top bar) and a subtle grid background utility
- Check: a `/styleguide` route renders all primitives correctly (can be removed before launch)

## Phase 2: Global layout
- [ ] `Header` with logo, nav (Home, AI Lab, Capabilities, About, Contact), and primary CTA button
- [ ] Mobile nav (accessible disclosure menu, focus trap, ESC to close)
- [ ] `Footer` with nav, dual HQ line, contact email, legal links, copyright
- [ ] Sticky-on-scroll header behavior, reduced-motion respected
- Check: layout is keyboard navigable, no layout shift, passes axe with no critical issues

## Phase 3: Pages and sections
- [ ] Home: Hero, TrustStrip, Problem, HowItWorks (4-tier stack), Capabilities, WhoItsFor, ProofPlaceholder, FinalCTA
- [ ] AI Lab: offer detail, the four tiers expanded, engagement model, pricing framing, CTA
- [ ] Capabilities: AI infrastructure, Cybersecurity, IT consulting and sourcing, Government contracting
- [ ] About: story, approach, dual HQ and reach, leadership (Eric bio), values
- [ ] Contact: form (name, work email, organization, message), success/error states, alt contact info
- Check: all routes build statically, no console errors

## Phase 4: Content integration
- [ ] Move all copy into `content/` and wire pages to it
- [ ] Insert the four-tier stack graphic as the HowItWorks visual (SVG, inline or `next/image`)
- [ ] Mark every unverifiable claim with a `TODO(eric)` placeholder
- Check: zero em or en dashes in rendered copy (grep the build output)

## Phase 5: SEO and crawlability
- [ ] Per-page `metadata` (title, description, canonical, OG, Twitter)
- [ ] Generate `sitemap.xml` and `robots.txt`
- [ ] Add JSON-LD `Organization` and `LocalBusiness` structured data (both HQ locations)
- [ ] Produce a real `og-image` (1200x630) from the brand system
- [ ] Confirm all primary content is present in the server-rendered HTML (view-source check)
- Check: SEO Lighthouse = 100, rich results test passes

## Phase 6: Contact form
- [ ] Wire form to a Next.js route handler that sends via Resend
- [ ] Add honeypot + basic rate limit for spam
- [ ] Server-side validation, friendly client-side errors, no PII logged
- [ ] Confirmation message and fallback mailto if the API fails
- Check: a test submission arrives by email

## Phase 7: QA and launch
- [ ] Responsive pass at 360, 768, 1024, 1440 widths
- [ ] Accessibility pass: contrast (see audit), focus order, alt text, form labels, landmarks
- [ ] Performance pass: image sizes, font loading, no unused JS, lazy-load below the fold
- [ ] Cross-browser smoke test (Chromium, Safari, Firefox)
- [ ] 301 redirects from old URLs (for example `/about-4` -> `/about`, `/why-us` -> `/capabilities`)
- [ ] Add a privacy policy and terms page (required: site collects emails, EU presence)
- [ ] Final `TODO(eric)` sweep, then deploy to production
- Check: Definition of done in `CLAUDE.md` fully satisfied
