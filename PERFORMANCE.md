# Performance Optimizations

## Current Status

The site is highly optimized for performance with the following implementations:

### ✅ Font Loading
- **next/font/google** for automatic font optimization
- **display: swap** on all fonts to prevent FOIT (Flash of Invisible Text)
- Only necessary font weights loaded:
  - Archivo: 700, 800 (display/headings)
  - IBM Plex Sans: 400, 500, 600 (body text)
  - IBM Plex Mono: 500 (labels/mono)
- Fonts are self-hosted and served from the Next.js CDN

### ✅ Static Site Generation
- All marketing pages are statically generated at build time
- Only `/api/contact` route is dynamic (server-rendered on demand)
- No client-side JavaScript except where necessary (Header, MobileNav, Contact form)

### ✅ Bundle Size
Current bundle analysis from build:
```
Route (app)                              Size     First Load JS
├ ○ /                                    183 B          96.1 kB
├ ○ /about                               183 B          96.1 kB
├ ○ /ai-lab                              183 B          96.1 kB
├ ○ /capabilities                        183 B          96.1 kB
├ ○ /contact                             2.45 kB        98.3 kB
+ First Load JS shared by all            87.3 kB
```

Shared JavaScript is only 87.3 kB, which is excellent for a modern React site.

### ✅ Responsive Images
- OG image is optimized at exactly 1200x630 (no oversized images)
- No other images currently in use
- When images are added, use next/image with appropriate sizes and lazy loading

### ✅ CSS Optimization
- Tailwind CSS with automatic purging of unused styles
- No inline style bloat
- Design system uses CSS variables for theming

### ✅ Motion Preferences
- `prefers-reduced-motion` respected in globals.css
- Animations disabled for users who prefer reduced motion

## Recommendations for Future Optimization

### When Adding Images
1. Use `next/image` component with appropriate `sizes` prop
2. Use `loading="lazy"` for below-the-fold images
3. Provide appropriate `width` and `height` to prevent layout shift
4. Consider WebP format with fallbacks
5. Use `priority` prop for LCP images (hero images)

Example:
```tsx
<Image
  src="/hero-image.jpg"
  alt="Descriptive alt text"
  width={1200}
  height={630}
  priority // for above-the-fold images
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

### Code Splitting
Currently using Next.js automatic code splitting. If adding heavy libraries:
- Use dynamic imports for large components
- Example: `const Chart = dynamic(() => import('./Chart'), { ssr: false })`

### Monitoring
Consider adding performance monitoring:
- Vercel Analytics (built-in, privacy-friendly)
- Web Vitals tracking
- Lighthouse CI in deployment pipeline

## Performance Targets

Target metrics (from Lighthouse):
- **Performance**: ≥ 90
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

Current build should easily meet these targets for all static pages.
