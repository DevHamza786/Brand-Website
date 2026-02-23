# Aussie App Studio — Conversion & Marketing Stack

## Email Integration Flow

1. **Form submit (Contact / Lead strip):** POST to backend or third-party (e.g. Formspree, Netlify Forms, or custom API).
2. **Server action:** Validate, sanitise, then:
   - Send confirmation email to user (optional): "We've received your message."
   - Notify internal: New lead to hello@ or CRM.
3. **Redirect:** User to /thank-you. No double-submit; use loading state on button.

**Suggested services:** Formspree (simple), Netlify Forms (if on Netlify), or SendGrid + serverless function for custom branding.

---

## CRM Suggestion

- **Option A:** HubSpot (free tier) — forms, pipeline, email sequences, good for "Book a call" + form leads.
- **Option B:** Pipedrive or similar — if sales-led; link "Book a call" to Calendly and sync to CRM.
- **Minimum:** Spreadsheet + email notifications until volume justifies CRM.

---

## Funnel Architecture

1. **Awareness:** SEO (services, location, intent keywords); optional paid (Google Ads for "web development australia").
2. **Consideration:** Home (value prop, work, FAQ), Services, Work (case studies), About.
3. **Conversion:** Contact (form or "Book a call"); Thank-you page with next step.
4. **Nurture (optional):** Email sequence after lead: e.g. "What to expect," "Our process," "Case study relevant to you."

---

## Lead Magnet Logic

- **Optional:** "Project brief template" or "Pre-launch checklist" in exchange for email. Gate behind form on /contact or dedicated /resources. Use to segment and follow up with high-intent content.
- **Primary CTA remains:** "Start a project" / "Book a call" — no mandatory lead magnet for first touch.

---

## Thank-You Page Conversion Step

- **URL:** /thank-you (no index in robots).
- **Content:** "Thanks, [Name]. We'll be in touch within 24 hours." Next step: "In the meantime, see our work" (link to /work) or "Add us on LinkedIn."
- **Optional:** Single CTA (e.g. "Book a call now" if they chose form) or calendar link. No clutter.

---

## Retargeting Setup

- **Pixel:** Meta (Facebook/Instagram) and/or LinkedIn Pixel on all pages. Fire on /thank-you for "converted" audience; exclude from future ads if desired.
- **Audience:** Visitors who didn’t reach /contact or /thank-you (e.g. last 30 days). Retarget with case study or "Book a call" creative.
- **Google Ads:** Remarketing tag on site; audience = visitors without conversion. Use for "web development australia" etc.

---

## GA4 Setup Plan

- **Property:** One GA4 property for aussieappstudio.com.au.
- **Data stream:** Web, production URL only.
- **Events:** page_view (default), form_submit (Contact), outbound_click (e.g. Calendly), scroll depth (optional).
- **Conversions:** Mark form_submit (and thank-you page view if no server-side event) as conversion.
- **Audiences:** All visitors; Contact page visitors; Thank-you (converters). Use for remarketing and reporting.

---

## Pixel Tracking Strategy

- **GA4:** All pages; consent banner can gate non-essential (see Legal).
- **Meta/LinkedIn:** All pages; same consent logic.
- **No redundant or duplicate firing;** one tag manager (GTM) recommended for clarity.

---

## Heatmap Tool Suggestion

- **Hotjar or Microsoft Clarity:** Session recordings + heatmaps. Focus on Home (hero, CTAs), Contact (form drop-off), and key service pages. Privacy-compliant (mask inputs, respect Do Not Track if applied).

---

*Document version: 1.0 — Implementation-ready.*
