# 02: Site Structure

## Routes

| Route | Page | Purpose |
|---|---|---|
| `/` | Home | One-screen pitch, route visitors to the lab offer and contact |
| `/ai-lab` | AI Lab | The core productized offer, expanded |
| `/capabilities` | Capabilities | Supporting services that build trust (security, IT, gov) |
| `/about` | About | Story, approach, people, reach |
| `/contact` | Contact | Convert interest into a conversation |
| `/privacy` | Privacy Policy | Required (email collection, EU presence) |
| `/terms` | Terms | Required basic terms |

Old-URL redirects to add: `/about-4` -> `/about`, `/why-us` -> `/capabilities`, any other
legacy Wix paths -> closest match or `/`.

## Primary navigation

`Home · AI Lab · Capabilities · About · Contact` plus a primary CTA button: **Book a lab session**.

Keep navigation to five items. The CTA is visually distinct (filled cyan button), present in
the header on every page and repeated at the bottom of every page.

## Page section maps

### Home (`/`)
1. **Hero**: headline, subhead, primary + secondary CTA
2. **TrustStrip**: three positioning words + dual HQ; partner/reseller line (TODO verify)
3. **Problem**: the cost of guessing at AI before validating it
4. **HowItWorks**: the four-tier stack graphic with one line each (Anywhere Access,
   Custom Models, Production AI, Your Environment)
5. **Capabilities**: four cards linking to `/capabilities`
6. **WhoItsFor**: healthcare, government, enterprise (the verticals you can support)
7. **Proof**: placeholder for logos / case studies / outcomes (TODO eric)
8. **FinalCTA**: book a lab session

### AI Lab (`/ai-lab`)
1. Offer headline and one-paragraph definition
2. The four tiers, each expanded to 2 to 3 sentences with the spec line
3. **Engagement model**: how a project runs (discovery, build in lab, validate, handoff)
4. **What you avoid**: wasted cloud spend, unproven assumptions, security gaps
5. **Pricing framing**: scoped engagements and managed lab access, not per-GPU-hour commodity
6. CTA

### Capabilities (`/capabilities`)
1. Intro line
2. **AI Infrastructure**: design, deploy, fine-tune, edge inference
3. **Cybersecurity**: assessment, hardening, secure AI deployment (CEH-backed)
4. **IT Consulting and Sourcing**: VAR sourcing and integration (TODO confirm partners)
5. **Government Contracting**: SAM.gov registered, public-sector ready
6. CTA

### About (`/about`)
1. Short origin and mission
2. **Approach**: root-cause engineering, prove-before-scale
3. **Leadership**: Eric Bell bio (founder, CEH Master, MS Digital and Computer Forensics,
   enterprise IT background)
4. **Reach**: Lisbon, Portugal & Tampa, Florida, serving US and Europe
5. **Values**: three short values
6. CTA

### Contact (`/contact`)
1. Heading and one line setting expectations on response time
2. Form: Name, Work email, Organization, What you are trying to build (textarea), Submit
3. Success and error states
4. Direct email and the dual HQ line as a fallback

## Component inventory

Layout: `Header`, `Footer`, `MobileNav`, `Container`, `Section`
Primitives: `Button`, `Eyebrow`, `Card`, `Chip`, `GradientRule`, `IconTile`
Sections: `Hero`, `TrustStrip`, `Problem`, `HowItWorks`, `CapabilitiesGrid`, `WhoItsFor`,
`ProofPlaceholder`, `EngagementSteps`, `PricingFraming`, `LeadershipCard`, `ContactForm`,
`FinalCTA`
