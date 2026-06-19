# 04: Design System

The visual language carries over from the AI compute stack graphic already produced, so the
site and that asset feel like one brand: deep navy, a cyan-to-blue accent, light type, and a
technical monospace label voice.

## Color tokens

| Token | Hex | Use |
|---|---|---|
| `bg-900` | `#0a1322` | Page background (top of gradient) |
| `bg-800` | `#0d1b30` | Page background (bottom of gradient) |
| `surface` | `#13243d` | Card top |
| `surface-2` | `#0f1d33` | Card bottom |
| `border` | `#213f66` | Card and divider borders |
| `border-soft` | `#1f3a5f` | Subtle lines |
| `text` | `#f4f8ff` | Primary text and headings |
| `muted` | `#9db4d6` | Body and secondary text |
| `muted-2` | `#6f8db5` | Mono detail lines (see audit: small-text contrast) |
| `accent` | `#2dd4ff` | Primary accent (cyan) |
| `accent-2` | `#3b82f6` | Accent gradient end (blue) |

**Accent gradient:** linear, `accent` to `accent-2`, left to right. Used for the top page
rule, primary buttons, and the hero highlight only. Keep it scarce so it stays a signal.

## Typography

- **Display:** Archivo, weights 700 and 800. Headlines and device names.
- **Body:** IBM Plex Sans, weights 400, 500, 600. Paragraphs and UI.
- **Label / mono:** IBM Plex Mono, weight 500. Eyebrows, tier numbers, spec lines, footer meta.
  Use uppercase with generous letter-spacing for eyebrows.

Self-host with `next/font` so there is no runtime fetch and no layout shift.

**Type scale (desktop, rem):** display-xl 3.25, display-lg 2.5, h2 1.875, h3 1.5, body-lg
1.25, body 1.125, label 0.875. Scale down roughly 20 percent at mobile.

## Spacing, radius, shadow

- Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96 px
- Section vertical padding: 96 px desktop, 56 px mobile
- Container max width: 1100 px, 24 px gutters
- Card radius: 16 px. Chip radius: full. Button radius: 10 px
- Shadow: soft only; rely on borders and the dark background for depth, not heavy drop shadows
- One accent glow effect (small blur on the tier dots) is allowed, used sparingly

## Components

- **Button (primary):** accent gradient fill, `bg-900` text, 10 px radius, clear focus ring
- **Button (secondary):** transparent, `accent` border and text, fills faintly on hover
- **Eyebrow:** mono, uppercase, `accent` or `muted-2`, letter-spacing 2 to 4 px
- **Card:** `surface` to `surface-2` gradient, 1 px `border`, 16 px radius; the hero/primary
  card may use a brighter `accent` border to draw the eye (as the GB10 tier does in the graphic)
- **Chip:** pill, 1.2 px `accent` border, mono label, no fill
- **IconTile:** line-style icon in `accent`, 2.5 stroke, on a rounded square
- **GradientRule:** 6 px tall accent gradient bar, used at the very top of the page

## Motion

- Subtle only: fade-and-rise on scroll for sections, 150 to 250 ms ease-out
- Respect `prefers-reduced-motion`, disable transforms when set
- No autoplaying video, no parallax

## Tailwind config starter

```ts
// tailwind.config.ts (excerpt)
import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: { 900: "#0a1322", 800: "#0d1b30" },
        surface: { DEFAULT: "#13243d", 2: "#0f1d33" },
        line: { DEFAULT: "#213f66", soft: "#1f3a5f" },
        ink: { DEFAULT: "#f4f8ff", muted: "#9db4d6", faint: "#6f8db5" },
        accent: { DEFAULT: "#2dd4ff", 2: "#3b82f6" },
      },
      borderRadius: { card: "16px", btn: "10px" },
      maxWidth: { container: "1100px" },
      fontFamily: {
        display: ["var(--font-archivo)", "system-ui", "sans-serif"],
        sans: ["var(--font-plex-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
    },
  },
  plugins: [],
} satisfies Config;
```

## Reference asset

The four-tier stack graphic (`sts-ai-compute-stack.svg` / `.png`) is the design north star for
the HowItWorks section. Reuse its colors, the numbered tier pattern, the line icons, and the
mono spec lines. Inline the SVG so it scales crisply and inherits the token colors.
