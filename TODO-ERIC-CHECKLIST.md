# Pre-Launch Checklist: Items Requiring Verification

**CRITICAL**: These items must be resolved before the site goes live. Each has a `TODO(eric)` placeholder in the code.

## 🚨 Legal Requirements (BLOCKING)

### Privacy Policy & Terms
**Location**: `app/privacy/page.tsx`, `app/terms/page.tsx`
**Status**: Placeholder content only
**Why Critical**: Site collects email addresses and has EU presence (Lisbon). GDPR compliance required.
**Action Needed**:
- Provide or approve actual privacy policy content
- Provide or approve actual terms of service content
- Consider consulting legal counsel for EU/US compliance

---

## 📧 Contact Information

### Contact Email Address
**Locations**:
- `content/global.ts` (line 7)
- `03-WEBSITE-COPY.md` suggests: `hello@sinotechsol.com`

**Current Placeholder**: `hello@sinotechsol.com`
**Action Needed**: Confirm this is the correct email address to use

### Response Time Promise
**Locations**:
- `content/contact.ts` (line 5)
- `app/contact/page.tsx` (line 63)

**Current Text**: "Send a short note and we will reply within two business days."
**Action Needed**: Confirm this response time commitment is realistic and approved

---

## 🤝 Reseller Partnerships

### Trust Strip / Homepage
**Locations**:
- `content/home.ts` (line 16)
- `components/sections/TrustStrip.tsx` (line 26)

**Current Text**: "Authorized reseller partnerships across Cisco, Dell, Oracle, HP, and Lenovo."
**Action Needed**:
- Confirm exact partner status before publishing
- Verify authorization to claim reseller relationships
- Update or remove if partnerships not confirmed

### Capabilities Page
**Locations**:
- `content/capabilities.ts` (line 24)
- `app/capabilities/page.tsx` (line 49)

**Current Text**: "Authorized partnerships with leading enterprise vendors."
**Action Needed**: Same as above - verify and specify or remove

---

## 💰 Pricing Information

### AI Lab Pricing
**Locations**:
- `content/ai-lab.ts` (line 81)
- `app/ai-lab/page.tsx` (line 124)

**Current Text**: References "packages and starting price points"
**Action Needed**: Confirm pricing structure and any specific packages or starting prices to mention

---

## 👤 Leadership Bio

### Eric Bell Bio Depth
**Locations**:
- `content/about.ts` (line 16)
- `app/about/page.tsx` (line 63)

**Current Bio**: "Eric brings more than fifteen years of enterprise IT experience across healthcare and telecommunications, a CEH Master certification, and a master's degree in Digital and Computer Forensics."

**Action Needed**:
- Confirm this level of detail is appropriate
- Decide whether to add:
  - Athletic background
  - Authorship background
  - Additional professional details

---

## 🏆 Proof / Case Studies

### Social Proof Section
**Locations**:
- `content/home.ts` (line 99)
- `components/sections/ProofPlaceholder.tsx` (line 12)

**Current State**: Placeholder component with TODO comment
**Action Needed**:
- Replace with real outcomes, client logos, or short case studies
- OR remove the section if proof is not yet available
- Ensure any claims can be verified (per audit requirement)

---

## ✅ Pre-Launch Actions

Before deploying to production:

1. **Legal** (BLOCKING)
   - [ ] Privacy policy content approved and added
   - [ ] Terms of service content approved and added

2. **Contact Info**
   - [ ] Contact email confirmed and set in `.env.local`
   - [ ] Response time promise approved or revised

3. **Partnerships**
   - [ ] Reseller partnerships verified or removed
   - [ ] Partner names approved for public use

4. **Pricing**
   - [ ] Pricing framing approved or kept generic
   - [ ] Package details added or kept vague

5. **Bio**
   - [ ] Leadership bio depth approved
   - [ ] Additional background sections added or omitted

6. **Proof**
   - [ ] Case studies/logos added or section removed
   - [ ] All claims verified

7. **Environment Variables**
   - [ ] Create `.env.local` from `.env.local.example`
   - [ ] Add `RESEND_API_KEY`
   - [ ] Add `CONTACT_EMAIL`
   - [ ] Configure same vars in Vercel dashboard

8. **Final Checks**
   - [ ] All `TODO(eric)` comments resolved
   - [ ] No em or en dashes in copy (grep rendered output)
   - [ ] Dual HQ displayed on every page (Lisbon, Portugal & Tampa, Florida)
   - [ ] Test contact form with real API key
   - [ ] Verify 301 redirects work (`/about-4` → `/about`, `/why-us` → `/capabilities`)

---

## 📝 Notes from Audit

From `05-AUDIT.md`:
- "Do not ship these without Eric's input"
- "The site should not go live with any of them unresolved"
- Privacy and terms are "required (email collection, EU presence)"
- "This likely needs a human or counsel, not generated filler"

---

## 🚀 Deployment Steps

Once all checklist items are completed:

1. Set environment variables in Vercel
2. Push to GitHub
3. Vercel will auto-deploy
4. Verify live site functionality
5. Test contact form on production
6. Check social media previews (OG image)
7. Submit to Google Search Console
