# 05 — Audit

A scan of the package above for errors, bugs, and suggestions. Grouped by severity.

## How I verified

I scanned every file programmatically rather than by eye. Worth noting: a first shell-based
search for dashes returned a false negative because the escape did not expand, and only a
Python scan caught the real matches. Treat automated checks as suspect until confirmed two ways.

## Critical (found and fixed)

1. **Em dashes in visible copy.** The copy, structure, and brief contained 48 em dashes,
   including the rendered site copy (the tier lines, the capabilities grid, the who-it-is-for
   list). This directly violated the hard no-dash rule in the brief. All 48 were replaced with
   colons or commas and the files re-scanned clean. Claude Code should still grep the final
   build output once more, since copy may get rephrased during implementation.

## Must resolve before launch (open)

2. **Unverified claims are placeholders, not content.** Do not ship these without Eric's input:
   reseller partner names, the contact email, response-time promise, pricing packages,
   leadership bio depth, and the proof section. Each is marked `TODO(eric)`. The site should
   not go live with any of them unresolved.
3. **Legal pages are required.** The site collects email addresses and the firm has an EU
   presence (Lisbon), which brings GDPR into scope. Privacy policy and terms must be real,
   not placeholder text. This likely needs a human or counsel, not generated filler.
4. **Color contrast on cards.** The faint detail color (`#6f8db5`) on the lighter top of the
   card gradient (`#13243d`) computes to roughly 4.5:1, which is right at the AA floor for
   normal text and may fail once antialiasing and exact backgrounds are in play. Verify in
   context; if it fails, use the brighter muted color (`#9db4d6`) for detail text on cards.
   Muted text on the page background is fine.

## Bugs and technical risks

5. **Token naming mismatch.** The design table calls the faint color `muted-2`, but the
   Tailwind config names it `ink.faint`. Pick one name so developers are not guessing. Same
   check for the numeric keys (`surface-2`, `accent-2`) which generate `bg-surface-2` and
   `text-accent-2`; confirm that is intended.
6. **SVG color inheritance.** The brief says to inline the stack SVG so it inherits token
   colors, but the existing SVG has hardcoded fills. It will not inherit anything unless the
   fills are refactored to `currentColor` or CSS variables. The hardcoded values already match
   the tokens, so the simpler path is to accept fixed colors and drop the inherit claim.
7. **Font variables must be wired up.** The Tailwind config references `--font-archivo`,
   `--font-plex-sans`, and `--font-plex-mono`. These only exist if `app/layout.tsx` defines
   them via `next/font` with matching `variable` names. Easy to miss and it fails silently to
   a fallback font.
8. **Contact route is not static.** The contact form needs a server route handler for Resend,
   so do not use `output: export`. Default Vercel hosting keeps the marketing pages static
   while allowing the dynamic form route. Confirm this before configuring the build.
9. **Redirect list is incomplete.** Only two legacy URLs are known (`/about-4`, `/why-us`).
   Pull the full old URL list from the current site before launch so no inbound links 404.

## Suggestions (not blocking)

10. **Add privacy-friendly analytics.** None is specified. Vercel Analytics or Plausible would
    give conversion insight without heavy tracking or a cookie banner burden.
11. **Make a dedicated OpenGraph image.** The stack graphic is portrait; OG images are 1200x630
    landscape. Build one from the brand so link previews look intentional.
12. **Keep one primary CTA label.** The header CTA is "Book a lab session" everywhere, which is
    good. The page-level variations ("Start a conversation", "Send") are fine in context, but
    keep the header consistent so the main action is unmistakable.
13. **Guard the positioning.** This package commits fully to the focused "prove before scale"
    lab message. If the broader VAR, sports, and general-consulting breadth needs to live
    somewhere, put it in a separate capability statement or government one-pager rather than
    back on the homepage, or the focus is lost again.
14. **Watch text over the accent gradient.** Keep the cyan-to-blue gradient for accent elements
    and buttons, not as a background behind body text, where contrast gets unpredictable.

## Net assessment

The structure, copy, and design are internally consistent and ready to hand off, with the
dash defect corrected. The real gating items are human inputs (items 2 and 3), not code. Once
those are filled and the four technical checks (4 to 9) are confirmed during the build, this
is launch-ready.
