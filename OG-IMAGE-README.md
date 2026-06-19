# OpenGraph Image

## Current State

A brand-compliant SVG has been created at `/public/og-image.svg` following the design system specifications from 04-DESIGN-SYSTEM.md.

## Required: Convert to PNG

The metadata in `app/layout.tsx` references `/og-image.png`. You need to convert the SVG to PNG (1200x630) for maximum compatibility across social platforms.

### Option 1: Using a design tool
1. Open `og-image.svg` in Figma, Sketch, or similar
2. Export as PNG at 1200x630
3. Save as `public/og-image.png`

### Option 2: Using a command-line tool
```bash
# Install sharp-cli if not already installed
npm install -g sharp-cli

# Convert SVG to PNG
sharp -i public/og-image.svg -o public/og-image.png resize 1200 630
```

### Option 3: Online converter
1. Go to cloudconvert.com or similar
2. Upload `public/og-image.svg`
3. Convert to PNG (1200x630)
4. Save as `public/og-image.png`

## Customization

The SVG can be easily customized:
- Colors match the design system tokens
- Typography uses system fonts (will render as closest available)
- Layout follows the brand's "prove before scale" positioning
- Includes dual HQ locations (Lisbon, Portugal & Tampa, Florida)

For a more polished final version, consider creating a custom design in Figma or Canva that incorporates the AI compute stack graphic from the brand assets.
