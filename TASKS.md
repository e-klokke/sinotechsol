# TASKS.md — STS Website Build

Work through these tasks top to bottom. Mark each done with [x] after completing.
Do not skip ahead. Each task builds on the previous one.
Do not stop for confirmation unless a task explicitly says to.

---

## Phase 1: Scaffold

- [ ] Initialize Next.js 14 project with App Router, TypeScript, Tailwind
- [ ] Configure tailwind.config.ts with color tokens from CLAUDE.md (navy, slate, accent, grays)
- [ ] Set up folder structure per CLAUDE.md (app/, components/, components/sections/, content/, public/logos/)
- [ ] Configure next.config.mjs: output standalone, image optimization
- [ ] Self-host fonts via next/font: Archivo (display), IBM Plex Sans (body), IBM Plex Mono (labels)
  Do NOT use Google Fonts CDN. Download and serve locally through next/font.
- [ ] Create globals.css with design token layer
- [ ] Create .env.local template with RESEND_API_KEY, CONTACT_EMAIL, NEXT_PUBLIC_SITE_URL
- [ ] Verify: `npm run dev` starts clean with no errors

## Phase 2: Copy Layer

- [ ] Create content/copy.ts with typed objects for all page copy:
  - hero: { headline, subheadline, cta }
  - services: { sectionTitle, cards: [{ title, description }] } (3 cards: IT Infrastructure, Cybersecurity, AI Research)
  - capabilities: { sectionTitle, cards: [{ title, description }] } (3 cards: IT Consulting, Gov Contracting, VAR)
  - about: { pageTitle, bio, credentials, certifications }
  - contact: { sectionTitle, addresses }
  - footer: { copyright, addresses, links }
  Use the exact copy from CLAUDE.md Site Architecture section.
  No em dashes or en dashes in any string. Verify before moving on.
- [ ] Export typed interfaces alongside the copy objects

## Phase 3: Layout Shell

- [ ] Build root layout.tsx: html lang, font classes (Archivo, IBM Plex Sans, IBM Plex Mono), metadata defaults, Nav + Footer
- [ ] Build Nav.tsx: fixed top, bg-navy/90 backdrop-blur-md, z-50
  Left: company name (Archivo)
  Right: Services, Capabilities, About, Contact
  Services and Capabilities are anchor links (#services, #capabilities) on homepage
  About links to /about, Contact links to /contact
  Mobile: hamburger with slide-out panel
- [ ] Build Footer.tsx using copy from content/copy.ts:
  Copyright, Lisbon Portugal + Tampa Florida, Privacy/Terms placeholder links
- [ ] Verify: nav and footer render on all viewport sizes (375px, 768px, 1440px)

## Phase 4: Homepage Sections

- [ ] Build components/sections/Hero.tsx using content/copy.ts:
  Dark navy background, min-h-screen
  Company name: Archivo, text-5xl md:text-7xl, bold, white
  One-line value proposition: IBM Plex Sans, text-xl, gray-400
  "Let's Talk" CTA button (smooth scrolls to #contact)
- [ ] Build components/sections/Services.tsx using content/copy.ts:
  Section heading: "What We Do" (id="services")
  Three service cards (bg-slate, rounded-xl, border-gray-600/30, p-8):
    1. IT Infrastructure
    2. Cybersecurity
    3. AI Research
  Grid: 3 columns desktop, 1 column mobile
  Each card: title (Archivo), description (IBM Plex Sans), simple icon or graphic placeholder
  No stock images. No "learn more" links.
- [ ] Build components/sections/Capabilities.tsx using content/copy.ts:
  Section heading: "How We Deliver" (id="capabilities")
  Three capability cards (border-accent/30, rounded-xl, p-8, no fill):
    1. IT Consulting and Sourcing
    2. Government Contracting (include SAM.gov and NAICS codes)
    3. VAR: Value Added Reseller (name partners: Cisco, Dell, Oracle, HP, Lenovo)
  Grid: 3 columns desktop, 1 column mobile
- [ ] Build components/sections/Partners.tsx:
  Horizontal row of partner logos: Cisco, Dell, Oracle, HP, Lenovo
  Grayscale, opacity-60, hover:opacity-100 transition
  Use placeholder SVGs with partner names as text until real logos are supplied
  Add TODO(eric) comment for real logo files
- [ ] Build ContactForm.tsx:
  Fields: Name (text), Email (email), Message (textarea), Submit button
  Client-side validation: all required, email format check
  Submit handler calls /api/contact POST
  States: idle, submitting (spinner), success (green message), error (red message)
  Rate limit: disable button for 30 seconds after successful submit
- [ ] Build components/sections/Contact.tsx (id="contact"):
  Section heading: "Get in Touch"
  ContactForm component
  Below form: two-column address block (Lisbon, Portugal | Tampa, Florida)
- [ ] Assemble homepage page.tsx: Hero, Services, Capabilities, Partners, Contact in order
- [ ] Verify: homepage scrolls through all sections cleanly on 375px, 768px, 1440px

## Phase 5: Contact API

- [ ] Install Resend SDK: `npm install resend`
- [ ] Build /app/api/contact/route.ts:
  POST handler
  Validate: name, email, message all present, email format valid
  Rate limit: basic in-memory rate limiter (5 requests per IP per hour)
  Send email via Resend to CONTACT_EMAIL
  Return 200 on success, 400 on validation error, 429 on rate limit, 500 on send failure
- [ ] Test contact form end-to-end (use RESEND_API_KEY if available, otherwise mock and log)
- [ ] Verify: form shows success message after submit, error message on failure

## Phase 6: About Page

- [ ] Build /app/about/page.tsx using content/copy.ts:
  Page metadata: title "About", description
  Professional background section:
    Eric Bell, Founder and CEO
    CEH Master certification
    MS in Digital and Computer Forensics
    15+ years enterprise IT: AT&T, CenturyLink, Duke Medical Center, Paycom
  Government credentials:
    SAM.gov registered
    NAICS: 541512, 541519, 541513, 517110, 334111, 541330
  Dual headquarters: Lisbon, Portugal and Tampa, Florida
  Headshot placeholder: gray rounded div, alt="Eric Bell", TODO(eric) comment
  CTA at bottom: "Let's Talk" linking to /contact
- [ ] Verify: about page renders statically, metadata correct

## Phase 7: Contact Page

- [ ] Build /app/contact/page.tsx:
  Page metadata: title "Contact", description
  Reuses ContactForm component
  Dual-address block below form
- [ ] Verify: contact page works independently of homepage

## Phase 8: SEO and Metadata

- [ ] Set root metadata in layout.tsx:
  Title template: "%s | Sino Technology Solutions"
  Default: "Sino Technology Solutions: IT Infrastructure, Cybersecurity, AI Research"
  Description from CLAUDE.md
  OpenGraph: title, description, url, type website
  Twitter: card summary_large_image
- [ ] Build /app/sitemap.ts: generate sitemap for /, /about, /contact
- [ ] Build /app/robots.ts: allow all crawlers, reference sitemap
- [ ] Add Organization structured data (JSON-LD) in root layout:
  Name, URL, description, both addresses (Lisbon + Tampa), contact email
- [ ] Create OG image: navy bg, white Archivo text "Sino Technology Solutions", tagline below
  1200x630, save to /public/og-image.png
  If programmatic generation not possible, create a minimal SVG fallback
- [ ] Verify: view-source on every page shows full statically-generated HTML with metadata

## Phase 9: Quality Assurance

- [ ] Run `npm run build` with zero errors, zero warnings, zero type errors
- [ ] Run `npm run lint` clean
- [ ] Scan ALL rendered text for em dashes and en dashes:
  Pass 1: `grep -rn '[—–]' app/ components/ content/`
  Pass 2 (double-check): `python3 -c "import pathlib; [print(f'{p}:{i+1}') for p in pathlib.Path('.').rglob('*.ts*') for i,l in enumerate(p.read_text().splitlines()) if '\u2014' in l or '\u2013' in l]"`
  Fix ALL hits. Replace with commas or periods. Both passes must return empty.
- [ ] Verify TODO(eric) comments exist for: headshot, partner logos, privacy page, terms page
- [ ] Verify all copy comes from content/copy.ts (no inline string literals in components)
- [ ] Verify fonts load from self-hosted files, NOT Google Fonts CDN (check Network tab)
- [ ] Responsive check at 375px, 768px, 1440px:
  Nav collapses to hamburger on mobile
  Service cards stack vertically on mobile
  Capability cards stack vertically on mobile
  Contact form full width on mobile
  Address block stacks on mobile
- [ ] Accessibility:
  All images have alt text
  Form inputs have associated labels
  Body text contrast >= 4.5:1 on navy background (verify gray-400 #94A3B8 on #0A1628)
  Accent contrast >= 3:1 on navy for large text (verify #0EA5E9 on #0A1628)
  Skip-to-content link present
- [ ] Run Lighthouse on home route:
  Performance >= 90
  Accessibility >= 95
  Best Practices >= 90
  SEO = 100
  Fix any failures before proceeding

## Phase 10: Deploy

- [ ] Push to GitHub repository
- [ ] Connect to Vercel (or push to connected branch)
- [ ] Set environment variables in Vercel: RESEND_API_KEY, CONTACT_EMAIL, NEXT_PUBLIC_SITE_URL
- [ ] Deploy: `npx vercel --prod`
- [ ] Verify production:
  sinotechsol.com loads with statically rendered HTML
  All three pages accessible
  Contact form submits
  Metadata renders in link previews (test with https://opengraph.xyz)
  sitemap.xml and robots.txt accessible
- [ ] Final Lighthouse audit on production URL (same targets as Phase 9)
- [ ] Final em dash/en dash scan on production rendered text

---

## Done

When all tasks above are checked, the STS website is shipped.
