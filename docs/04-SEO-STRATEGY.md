# Aussie App Studio — Advanced SEO Strategy

## Keyword Mapping

### Primary Keywords
| Keyword | Intent | Target Page | Priority |
|---------|--------|-------------|----------|
| web development australia | Commercial | /services/web-development | 1 |
| mobile app development sydney | Commercial | /services/mobile-apps | 1 |
| software development agency australia | Commercial | /services, / | 1 |
| app development melbourne | Commercial | /services/mobile-apps | 1 |

### Secondary Keywords
| Keyword | Intent | Target Page |
|---------|--------|-------------|
| custom web development australia | Commercial | /services/web-development |
| react development australia | Commercial | /services/web-development |
| flutter app development | Commercial | /services/mobile-apps |
| UI UX design agency australia | Commercial | /services/ui-ux |
| digital product agency | Commercial | /, /about |

### Long-Tail Clusters
- "web and mobile app development agency australia" → /services, Home
- "agile web development team sydney" → /about, /services
- "conversion-focused web design" → /services/ui-ux, /services/web-development
- "software house australia USA NZ" → /, /about
- "time zone aligned development team" → /about, Home

### Topical Authority Structure
- **Pillar:** "Software development" / "Digital product development" (Home, /services).
- **Clusters:** Web development, Mobile apps, UI/UX, Maintenance (each service page + case studies).
- **Supporting:** About (trust), Work (proof), Contact (conversion). Blog optional later (e.g. "React best practices," "Flutter vs React Native").

---

## On-Page SEO

### Home
- **Meta title (≤60):** `Aussie App Studio | Web & Mobile App Development | Australia, USA, NZ`
- **Meta description (≤160):** `Premier digital product agency in Australia. We build high-performance web and mobile apps with React, Flutter & Node.js. Time-zone aligned for Sydney, Auckland & the US. Get a quote.`
- **H1:** One primary headline (e.g. "Digital products that win—in your time zone.")
- **H2–H3:** Why Aussie App Studio, What we do, Featured work, FAQ.

### About
- **Meta title:** `About Us | Aussie App Studio — Digital Product Agency`
- **Meta description:** `Australian-owned software studio building web and mobile apps for brands in Australia, the USA and NZ. Agile, secure, conversion-focused. Meet the team.`
- **H1:** About Us / Australian craft, global standards.
- **H2–H3:** Our story, Our values, How we work.

### Services Overview
- **Meta title:** `Web & Mobile App Development Services | Aussie App Studio`
- **Meta description:** `End-to-end digital product services: strategy, UI/UX design, web and mobile development, support. Built for growth in Australia, USA and NZ.`
- **H1:** Services / From strategy to launch—and beyond.
- **H2:** Each service category.

### Service Pages (example: Web Development)
- **Meta title:** `Custom Web Development Australia | React, Node.js | Aussie App Studio`
- **Meta description:** `Scalable web apps with React and Node.js. From e‑commerce to dashboards—built for Australian and global markets. Get a scope.`
- **H1:** Web Development
- **H2–H3:** What we deliver, Technologies, Related work, FAQ.

### Work
- **Meta title:** `Case Studies & Portfolio | Aussie App Studio`
- **Meta description:** `See how we build web and mobile products for brands across Australia, New Zealand and the US. Real projects, real results.`
- **H1:** Work / Products we're proud of.

### Case Study
- **Meta title:** `[Project Name] | Case Study | Aussie App Studio`
- **Meta description:** `[One-line outcome]. [Client/sector]. Web/Mobile development by Aussie App Studio.`
- **H1:** [Project name]
- **H2:** Challenge, Solution, Results.

### Contact
- **Meta title:** `Contact | Get a Quote | Aussie App Studio`
- **Meta description:** `Start your project. We reply within 24 hours. Serving Sydney, Melbourne, Auckland and the US. Book a call or send a brief.`
- **H1:** Contact / Start a project.

### Internal Link Map (SEO)
- Home → Services (all), Work, About, Contact.
- Services overview → Each service page, Contact.
- Each service page → Services overview, 1–2 case studies, Contact.
- Work → Case studies; each case study → Work, relevant service, Contact.
- About → Services, Work, Contact.
- Footer on every page → Services, Work, About, Contact, Privacy, Terms.

---

## Structured Data Recommendations

- **Organization:** JSON-LD on all pages. Name, url, logo, sameAs (social if any), contactPoint (email, areaServed: AU, US, NZ).
- **WebSite:** JSON-LD on Home with `potentialAction` SearchAction if search exists; else omit.
- **BreadcrumbList:** On every non-home page per breadcrumb logic.
- **FAQPage:** On Home (and optionally on service pages) for FAQ section.
- **Service:** On each service page (name, description, provider = Organization).
- **Article:** On each case study (headline, image, datePublished, author).

---

## Technical SEO

### robots.txt (sample)
```
User-agent: *
Allow: /
Disallow: /thank-you
Disallow: /api/

Sitemap: https://aussieappstudio.com.au/sitemap.xml
```

### XML Sitemap
- **Format:** Include: /, /about, /services, /services/web-development, /services/mobile-apps, /services/ui-ux, /services/maintenance, /work, /contact, /privacy, /terms. Include all case study URLs. `lastmod` and `changefreq` (weekly for blog if added, monthly for static).
- **Index only canonical URLs.**

### Canonical Strategy
- **Canonical URL:** Self-referencing on every page. `https://aussieappstudio.com.au/[path]`.
- **No duplicate content:** Single URL for each resource. If query params used (e.g. filter), canonical = main list URL.

### Open Graph
- **og:title:** Same as meta title or shorter.
- **og:description:** Same as meta description.
- **og:image:** 1200×630 default share image (logo or hero crop).
- **og:url:** Canonical URL.
- **og:type:** website (article for case studies).
- **og:locale:** en_AU. Optional en_US, en_NZ if targeting.

### Twitter Card
- **twitter:card:** summary_large_image.
- **twitter:title,** **twitter:description,** **twitter:image:** Align with OG. **twitter:site:** @handle if exists.

---

*Document version: 1.0 — Implementation-ready.*
