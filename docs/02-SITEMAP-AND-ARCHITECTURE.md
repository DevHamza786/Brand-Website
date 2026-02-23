# Aussie App Studio — Website Architecture & Sitemap

## Page Hierarchy & URL Structure

```
/                           → Home
/about                      → About Us
/services                   → Services (overview)
/services/web-development   → Web Development
/services/mobile-apps       → Mobile App Development
/services/ui-ux             → UI/UX Design
/services/maintenance       → Support & Maintenance
/work                       → Case Studies / Portfolio
/work/[slug]                → Single Case Study
/contact                    → Contact
/privacy                    → Privacy Policy
/terms                      → Terms & Conditions
/404                        → Custom 404 (handled by framework)
```

## Header Navigation (Desktop)

| Label | URL | Purpose |
|-------|-----|---------|
| Services | /services (dropdown) | Top-level offering; dropdown: Web, Mobile, UI/UX, Maintenance |
| Work | /work | Social proof and differentiation |
| About | /about | Trust and team |
| Contact | /contact | Primary CTA |

**Dropdown structure for Services:**  
- Web Development → /services/web-development  
- Mobile Apps → /services/mobile-apps  
- UI/UX Design → /services/ui-ux  
- Support & Maintenance → /services/maintenance  

**CTA in header:** "Start a project" or "Book a call" → /contact (primary button style).

## Footer Structure

**Column 1 — Offerings**  
- Web Development  
- Mobile App Development  
- UI/UX Design  
- Support & Maintenance  

**Column 2 — Company**  
- About Us  
- Work / Case Studies  
- Contact  

**Column 3 — Legal**  
- Privacy Policy  
- Terms & Conditions  

**Column 4 — Connect**  
- Email (hello@aussieappstudio.com.au)  
- LinkedIn (optional)  
- Optional: "Book a call" CTA  

**Bottom bar:**  
- © [Year] Aussie App Studio. All rights reserved.  
- Optional: "Made in Australia" or tagline.

## Breadcrumb Logic

- **Home:** No breadcrumb.  
- **Services overview:** Home > Services  
- **Service page:** Home > Services > [Service Name]  
- **Work:** Home > Work  
- **Case study:** Home > Work > [Project Name]  
- **About / Contact / Legal:** Home > [Page Name]  

Breadcrumbs use schema.org `BreadcrumbList` for SEO.

## Internal Linking System

- **Home** links to: Services (all 4), Work (featured 2–3), About (intro), Contact (CTA).  
- **Services overview** links to each service page and to Contact.  
- **Each service page** links to related service(s), Work (relevant case study), Contact.  
- **Work** links to each case study; each case study links back to Work and relevant service(s).  
- **About** links to Services, Work, Contact.  
- **Footer** repeats key links on every page.  
- **Anchor links:** Home can use #services, #work, #contact for one-page flow; still keep canonical URLs for each section page.

## Why This Structure Fits the Brand

1. **Conversion-driven:** Few top-level choices reduce paradox of choice; Contact is always one click away.  
2. **SEO:** Clear hierarchy and descriptive URLs support "software house Australia," "web development Sydney," etc.  
3. **Trust:** Work and About before Contact mirror the journey: "See what we do → Who we are → Get in touch."  
4. **Scalable:** /work/[slug] and /services/[slug] allow new case studies and services without restructuring.  
5. **Local + global:** Structure is generic enough for AUS, USA, NZ; content and CTAs can be tailored by region later (e.g. "Book a call" with time-zone clarity).

---

*Document version: 1.0 — Implementation-ready.*
