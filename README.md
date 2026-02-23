# Aussie App Studio — Brand Website

Production-ready marketing website for **Aussie App Studio** (aussieappstudio.com.au): a digital product agency for web and mobile app development in Australia, USA, and NZ.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** (custom design tokens)
- **Fonts:** Outfit (headlines), Source Sans 3 (body) via `next/font`

## Docs (implementation guide)

All strategy and implementation docs are in `/docs`:

| Doc | Contents |
|-----|----------|
| `01-BRAND-IDENTITY-SYSTEM.md` | Logo, colours, typography, visual language |
| `02-SITEMAP-AND-ARCHITECTURE.md` | URLs, nav, footer, breadcrumbs, internal linking |
| `03-PAGE-LAYOUTS-AND-SECTIONS.md` | Section-by-section layout and CTA logic |
| `04-SEO-STRATEGY.md` | Keywords, on-page SEO, structured data, technical SEO |
| `05-CONVERSION-AND-MARKETING-STACK.md` | Email, CRM, funnel, thank-you, GA4, pixels |
| `06-UI-SYSTEM-SPECIFICATION.md` | Spacing, shadows, buttons, forms, a11y |
| `07-MOBILE-AND-PERFORMANCE.md` | Breakpoints, mobile UX, speed, Lighthouse |
| `08-TECH-STACK.md` | Frontend, hosting, deployment, security |
| `09-WEBSITE-COPY.md` | All page copy and CTAs |
| `10-LEGAL-AND-COMPLIANCE.md` | Privacy, Terms, cookies, GDPR outline |

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Contact form

The contact form POSTs to `/api/contact`. The API route validates input and returns success; it does **not** send email by default. To go live:

1. Add your Formspree ID and POST to Formspree, or
2. Integrate SendGrid/Resend in the API route and send mail server-side, or
3. Forward the payload to your CRM webhook.

See `app/api/contact/route.ts` for the handler and `docs/05-CONVERSION-AND-MARKETING-STACK.md` for the full flow.

## Environment

- No env vars required for local run.
- For production: set `NEXT_PUBLIC_SITE_URL` if you need it (e.g. for sitemap); sitemap and robots currently use `https://aussieappstudio.com.au`.

## Deployment (e.g. Vercel)

1. Connect the repo to Vercel.
2. Add production domain `aussieappstudio.com.au` (and www if desired).
3. Optional: add env vars for contact (e.g. Formspree, SendGrid API key).
4. Deploy. Sitemap: `https://aussieappstudio.com.au/sitemap.xml`, robots: `https://aussieappstudio.com.au/robots.txt`.

## License

Proprietary — Aussie App Studio.
