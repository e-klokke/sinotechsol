# CLAUDE.md — Sino Technology Solutions Website Rebuild

This is the autonomous execution brief for Claude Code. Read this file and TASKS.md
before writing any code. Work through TASKS.md top to bottom.

---

## Mission

Replace the current marketing site (sinotechsol.com) with a fast, crawlable, focused site
that communicates what STS does in under 5 seconds. Three service focal points, three
delivery capabilities, nothing else.

The current site is too broad (7+ unfocused service areas, philosophy-heavy copy) and is
fully client-rendered, so search engines and link previews see almost no content. This
rebuild fixes both: a single sharp message, and server-rendered / statically generated HTML.

**Owner:** Eric Bell, Founder and CEO, Sino Technology Solutions
**Headquarters:** Lisbon, Portugal and Tampa, Florida (both must always appear, in this order)

---

## Tech Stack (matches SGS standard)

| Layer | Choice |
|-------|--------|
| Framework | Next.js 14, App Router |
| Language | TypeScript |
| Styling | Tailwind CSS, design tokens in tailwind.config.ts + globals.css token layer |
| Fonts | Archivo (display), IBM Plex Sans (body), IBM Plex Mono (labels), self-hosted via next/font. Do not rely on runtime Google Fonts requests. |
| Email | Resend (contact form, env: RESEND_API_KEY) |
| Hosting | Vercel |
| Domain | sinotechsol.com |
| Rendering | Static Site Generation (SSG) for all pages so content is in the HTML |

No CMS. No database. No auth. This is a static marketing site with one server action
(contact form via Resend).

---

## Site Architecture

This is a 3-page site. The homepage carries 90% of the weight.

### Page 1: Homepage (/)

Single-scroll page with anchored sections. Sticky nav jumps to sections.

**Section order:**

1. **Hero** — Dark background. Company name. One line: what STS does and for whom.
   Single CTA button: "Let's Talk" (scrolls to #contact section).

2. **Services** (id="services") — Three focal points, side by side on desktop, stacked mobile:

   **IT Infrastructure**
   Enterprise network architecture, cloud migration strategy, data center design,
   and systems integration. We build the backbone your operations run on.

   **Cybersecurity**
   Threat assessment, incident response, compliance frameworks, and digital forensics.
   CEH Master certified. We secure what matters.

   **AI Research**
   Applied AI R&D through our private lab: model evaluation, fine-tuning, RAG systems,
   edge inference, and proof-of-concept builds. Design and validate before you commit
   to cloud spend.

   Each card: visual anchor (icon or simple graphic, no stock photos), 2-3 sentence
   description. No "learn more" links. Everything the visitor needs is on this page.

3. **Capabilities** (id="capabilities") — Three delivery methods, horizontal row:

   **IT Consulting and Sourcing**
   Strategic technology advisory and procurement. We match the right solution to the
   problem, not the other way around.

   **Government Contracting**
   SAM.gov registered. NAICS: 541512, 541519, 541513, 517110, 334111, 541330.
   Cleared for federal, state, and local contracts.

   **VAR: Value Added Reseller**
   Authorized reseller for enterprise hardware and software. Cisco, Dell, Oracle, HP,
   Lenovo. Competitive pricing with implementation support.

4. **Partners** — Trust bar. Grayscale logos: Cisco, Dell, Oracle, HP, Lenovo.
   Subtle, no explanatory text. Hover: opacity shift to full color.

5. **Contact** (id="contact") — Inline contact form: Name, Email, Message, Submit.
   Below the form: Lisbon, Portugal address + Tampa, Florida address side by side.
   Powered by Resend server action.

6. **Footer** — Copyright, Lisbon + Tampa, Privacy/Terms placeholder links.

### Page 2: About (/about)

Eric Bell's professional background. Credibility page. Direct, factual, no fluff.

**Include:**
- CEH Master certification
- MS in Digital and Computer Forensics
- 15+ years enterprise IT: AT&T, CenturyLink, Duke Medical Center, Paycom
- SAM.gov registered with NAICS codes
- Dual headquarters: Lisbon, Portugal and Tampa, Florida
- Professional headshot: placeholder div with alt text until real photo is supplied.
  Use `TODO(eric)` comment.

### Page 3: Contact (/contact)

Standalone contact page (mirrors homepage contact section for direct linking).
Same Resend form. Same dual-address block.

---

## Design System

### Philosophy

Dark-mode primary. Typography-forward. Minimal. No stock photography of any kind.
No illustrations of servers, no hooded hackers, no handshake photos, no clip art.
Let whitespace, type, and partner logos build trust.

### Colors (Tailwind config)

```
navy:         #0A1628    (primary background)
slate:        #1A2744    (card/surface background)
white:        #FFFFFF    (primary text on dark)
gray-400:     #94A3B8    (secondary text, body copy)
gray-600:     #475569    (muted text, borders)
accent:       #0EA5E9    (CTA buttons, links, highlights, sky blue)
accent-hover: #38BDF8    (button hover state)
```

### Typography

- Display (headings): Archivo, self-hosted via next/font
- Body: IBM Plex Sans, self-hosted via next/font
- Labels/code: IBM Plex Mono, self-hosted via next/font
- Hero headline: text-5xl md:text-7xl, font-bold, white
- Section headings: text-3xl, font-semibold, white
- Body: text-base (16px), gray-400, leading-relaxed
- No font sizes below 14px anywhere

### Spacing

- Sections: py-24 on desktop, py-16 on mobile
- Max content width: max-w-6xl mx-auto px-6
- Card gaps: gap-8 on desktop, gap-6 on mobile

### Components

- **CTA Button:** bg-accent text-white px-8 py-3 rounded-lg font-medium
  hover:bg-accent-hover transition-colors
- **Service Card:** bg-slate rounded-xl p-8, border border-gray-600/30
- **Capability Card:** border border-accent/30 rounded-xl p-8, no fill
- **Trust Logo:** grayscale, opacity-60, hover:opacity-100 transition
- **Nav:** fixed top, bg-navy/90 backdrop-blur-md, z-50

### Motion

- Minimal. No scroll animations, no parallax, no GSAP, no heavy libraries.
- Transitions on hover states only (buttons, logos, nav links).
- prefers-reduced-motion respected on all transitions.

---

## Repo Conventions

- App Router under `app/`, one folder per route
- Shared UI in `components/`, section blocks in `components/sections/`
- Copy strings centralized in `content/` as typed objects so non-devs can edit safely
- Design tokens in `tailwind.config.ts` plus a `globals.css` token layer
- All images optimized with `next/image`; provide width/height to avoid layout shift

---

## Hard Rules (do not deviate)

1. **Headquarters** must always read: Lisbon, Portugal and Tampa, Florida. Never one city
   alone on any commercial page. Both appear on homepage, contact page, and footer.
2. **No em dashes or en dashes** in any visible copy. Use commas, periods, or parentheses.
   Hyphens in compound words (well-rounded, government-ready) are fine.
3. **No fabricated proof.** Do not invent testimonials, client names, logos, certifications,
   uptime figures, or metrics. Where proof belongs, render the section with clearly labeled
   placeholder content and a `TODO(eric)` comment so it is obvious before launch.
4. **No stock photography.** No images unless they are partner logos or a headshot placeholder.
5. **Do not market raw GPU capacity or hosting SLAs.** The AI Research lab is for design,
   fine-tuning, POCs, and edge inference, not high-concurrency production hosting.
6. **Accessibility:** target WCAG AA. Body text contrast >= 4.5:1, large text >= 3:1.
   Verify the gray-400 on navy and accent on navy pairs specifically.
7. **Server-side rendered / statically generated.** Every page must output real HTML.
   The current site is invisible to crawlers. This is the primary technical fix.
8. **No "learn more" links.** Everything the visitor needs is on the homepage.
   The About page exists for credibility depth. The Contact page exists for direct linking.

---

## SEO

- Title: "Sino Technology Solutions: IT Infrastructure, Cybersecurity, AI Research"
- Meta description: "Enterprise IT infrastructure, cybersecurity, and AI research
  consulting. Lisbon, Portugal and Tampa, Florida."
- OpenGraph image: simple navy bg, white text, company name + tagline (1200x630)
- Sitemap at /sitemap.xml
- robots.txt allowing all crawlers
- Structured data: Organization schema with both addresses

---

## Environment Variables

```
RESEND_API_KEY=         # Resend API key for contact form
CONTACT_EMAIL=          # Destination email for form submissions
NEXT_PUBLIC_SITE_URL=   # https://sinotechsol.com
```

---

## Folder Structure

```
sinotechsol/
  app/
    layout.tsx           # Root layout: fonts, metadata, nav, footer
    page.tsx             # Homepage (single scroll)
    about/
      page.tsx           # About Eric Bell
    contact/
      page.tsx           # Standalone contact form
    api/
      contact/
        route.ts         # Resend server action
    sitemap.ts           # Dynamic sitemap
    robots.ts            # Robots config
  components/
    Nav.tsx
    Footer.tsx
    ContactForm.tsx
    sections/
      Hero.tsx
      Services.tsx
      Capabilities.tsx
      Partners.tsx
      Contact.tsx
  content/
    copy.ts              # All page copy as typed objects
  public/
    logos/               # Partner logos (Cisco, Dell, Oracle, HP, Lenovo)
    og-image.png         # OpenGraph image
  tailwind.config.ts
  globals.css            # Token layer
  next.config.mjs
  package.json
  tsconfig.json
  .env.local
  CLAUDE.md
  TASKS.md
```

---

## Build, Run, Deploy

```bash
npm install
npm run dev        # local at http://localhost:3000
npm run build      # must pass with zero type errors before any deploy
npm run lint
npx vercel --prod  # deploy (or push to the connected Vercel branch)
```

---

## Definition of Done

The site is done when:
1. All three pages render statically with correct metadata
2. Copy is centralized in `content/` as typed objects
3. Navigation works (sticky nav with section anchors on homepage, hamburger on mobile)
4. Contact form sends mail via Resend and shows success/error states
5. Partner logos display in grayscale trust bar
6. Responsive at 375px, 768px, 1440px
7. Lighthouse: Performance >= 90, Accessibility >= 95, SEO = 100 on the home route
8. sitemap.xml, robots.txt, per-page metadata, and OpenGraph image all present
9. No em dashes or en dashes in any rendered text
10. Both Lisbon and Tampa addresses visible on homepage, contact page, and footer
11. Every `TODO(eric)` is resolved or explicitly approved to ship as placeholder
12. Fonts (Archivo, IBM Plex Sans, IBM Plex Mono) self-hosted, no runtime Google Fonts calls
