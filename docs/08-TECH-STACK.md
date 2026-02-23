# Aussie App Studio — Recommended Tech Stack

## Frontend

- **Framework:** Next.js 14+ (App Router).
- **Rationale:** SSR/SSG for SEO; file-based routing; built-in Image and font optimisation; easy deployment (Vercel). Fits content-heavy, conversion-focused site.

- **Styling:** Tailwind CSS + design tokens (colors, spacing, shadows from UI spec).
- **Rationale:** Fast iteration; consistent spacing/typography; small bundle when purged. No generic Tailwind look if custom tokens and typography are applied.

- **Language:** TypeScript.
- **Rationale:** Fewer runtime errors; better refactors; professional baseline for "software house" positioning.

## CMS (If Needed)

- **Option A:** No CMS — content in code or MDX for speed and simplicity. Copy updates via code deploy.
- **Option B:** Headless CMS (e.g. Sanity, Contentful) if non-developers need to edit copy, case studies, or blog. Connect via API; keep pages statically generated where possible.

**Recommendation for launch:** No CMS; add later if content velocity demands it.

## Backend Logic

- **Contact form:** Serverless function (Next.js API route or Vercel serverless) that validates, then sends email (SendGrid, Resend) or forwards to Formspree/CRM webhook.
- **No database required for MVP;** optional later for lead storage or blog.

## Hosting

- **Vercel.** Same ecosystem as Next.js; automatic HTTPS, preview deployments, edge. Alternative: Netlify (similar).

## CDN

- **Vercel Edge Network** (included) or Cloudflare in front if extra DDoS/caching needed. Not required for launch.

## SSL

- **Automatic** on Vercel/Netlify. Enforce HTTPS; HSTS header recommended.

## Security

- **Headers:** Content-Security-Policy (restrict scripts and origins); X-Frame-Options; X-Content-Type-Options. Vercel/Next.js config or middleware.
- **Forms:** CSRF consideration if using session-based auth (not needed for simple contact form with serverless); rate limit contact endpoint (e.g. 5 req/min per IP).
- **Dependencies:** Regular `npm audit`; keep Next.js and deps updated.

## Backup

- **Code:** Git (e.g. GitHub); no database to backup at launch. If CMS added later, use provider’s backup/export.
- **Env:** Store secrets in Vercel/host env; do not commit.

## Deployment Workflow

1. **Main branch** → production (aussieappstudio.com.au). PR previews for staging.
2. **Build:** `next build`; output static/SSR per route.
3. **Domain:** Point apex and www to Vercel; configure in dashboard.
4. **CI:** Lint + typecheck on PR; optional E2E (e.g. Playwright) on critical paths (Contact, Thank-you).

---

**Why this stack fits:**

- **Brand:** A software house site built with a modern, scalable stack (React/Next.js) signals capability.
- **SEO:** SSR and static generation give crawlable, fast pages.
- **Speed:** Next.js Image, font optimisation, and code splitting support Lighthouse targets.
- **Maintainability:** TypeScript + Tailwind + one repo; any developer can onboard quickly.
- **Cost:** Free tier (Vercel) sufficient for launch; scale as traffic grows.

---

*Document version: 1.0 — Implementation-ready.*
