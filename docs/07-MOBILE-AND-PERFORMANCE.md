# Aussie App Studio — Mobile Optimization & Performance

## Breakpoints

- **Mobile:** 0–767px
- **Tablet:** 768px–1023px
- **Desktop:** 1024px+

Use mobile-first CSS (base = mobile; override at 768px and 1024px).

## Mobile-First Layout Logic

- **Hero:** Stack headline, subhead, CTAs vertically; full-width. Image below or background; reduce height to min 70vh if needed.
- **Value props:** 1 column; cards full width with consistent padding.
- **Service grid:** 1 column on mobile; 2 on tablet; 2 or 4 on desktop.
- **Work grid:** 1 column mobile; 2 tablet+.
- **Footer:** Stack columns vertically; order: Offerings, Company, Legal, Connect.
- **Navigation:** Hamburger menu; drawer or full-screen overlay. No dropdown hover on touch; use tap to open submenu.

## Touch Spacing

- **Minimum tap target:** 44×44px (buttons, links in nav).
- **Spacing between links/buttons:** At least 8px to avoid mis-taps.
- **Form inputs:** Min height 48px; sufficient padding.

## Navigation Pattern (Mobile)

- **Header:** Logo left; hamburger right. Drawer opens from right (or full screen). Close on link click or overlay tap.
- **CTA:** "Start a project" visible in drawer; optional sticky bar at bottom on long pages (Contact CTA).

## Thumb-Zone Considerations

- Primary CTAs placed in lower half of viewport or easily reachable (not only top-right).
- Footer CTAs (e.g. "Book a call") accessible without stretching.

## Mobile Performance Targets

- **LCP:** < 2.5s.
- **FID / INP:** < 100ms.
- **CLS:** < 0.1.
- **TTI:** < 3.5s on mid-range device (4G).
- **Lighthouse mobile score:** 90+ (Performance, Accessibility, Best Practices, SEO).

---

## Speed & Performance Plan

### Image Strategy

- **Format:** Prefer WebP with JPEG/PNG fallback; AVIF where supported (Next.js Image or picture + source).
- **Sizing:** Serve responsive srcset; max width for cards ~800px, hero ~1600px. No 4K unless required.
- **Compression:** Optimise before upload; use Next.js image optimisation or Cloudinary if needed.

### Lazy Loading

- **Images:** Native `loading="lazy"` or framework equivalent for below-fold images. Hero image eager.
- **Iframes:** Lazy load (e.g. Calendly embed).

### Font Optimization

- **Subset:** Load only Latin (and required glyphs). Use `font-display: swap` for Outfit and Source Sans 3.
- **Preload:** Preload critical font files for above-the-fold text (e.g. Outfit 600/700).
- **Avoid:** More than 2 font families; limit weights to 400, 500, 600, 700.

### CDN

- **Recommendation:** Use host CDN (Vercel Edge, Netlify, or Cloudflare). Static assets and images served from CDN; cache long TTL for fonts and images.

### Code Splitting

- **Route-based:** Each page loads only its JS (Next.js automatic).
- **Heavy components:** Dynamic import for below-fold or modal content (e.g. Calendly widget).

### Minification

- **JS/CSS:** Minify in production build. Next.js and Vite do this by default.
- **HTML:** Minify if not handled by framework.

### Lighthouse Target

- **Performance:** 90+
- **Accessibility:** 95+
- **Best Practices:** 95+
- **SEO:** 95+

---

*Document version: 1.0 — Implementation-ready.*
