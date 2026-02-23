# Aussie App Studio — Page-by-Page Strategic Layout

## Homepage

### Hero
- **Structure:** Full-viewport height (min 90vh). Left: headline + subhead + dual CTA (primary: "Start a project", secondary: "See our work"). Right: custom visual (illustration or hero image) aligned to Ocean/teal palette.
- **Headline:** One clear value proposition (e.g. "Digital products that win—in your time zone.").
- **Subhead:** One sentence on who it’s for and outcome (AUS/US/NZ, scalable, conversion-focused).
- **Layout decision:** Asymmetric (60/40 or 55/45) to avoid generic centered-stack. No carousel.
- **Scroll cue:** Subtle chevron or "Scroll" only if content below fold.

### Value Proposition Block
- **Section ID:** `#why-aussie` or `#difference`.
- **Structure:** 4 pillars in a 2×2 or 4-column grid (time-zone aligned, scalable architecture, conversion-first, local trust / global reach). Each: icon + short heading + one sentence. No long paragraphs.
- **Layout:** Cards with consistent padding; optional subtle border or shadow. Icon above text.
- **CTA psychology:** Reinforce "built for growth" and link to /services or /contact.

### Social Proof
- **Structure:** Logos (clients or regions) in a restrained strip; optional "Trusted by teams in Sydney, Melbourne, Auckland, and the US." No fake logos.
- **If no logos yet:** Use "Serving brands across Australia, New Zealand, and the USA" with flags or place names only.
- **Layout:** Single row, grayscale or low-opacity logos, centered. No carousel unless 8+.

### Differentiation Section
- **Headline:** e.g. "Why global brands choose us."
- **Content:** 3–4 short differentiators with icons (e.g. Agile delivery, Security-first, ROI-focused, Time-zone overlap). Bullet or card format.
- **Scroll narrative:** After "who we are" (hero + value prop), this answers "why us" before Work.

### Work Preview
- **Section ID:** `#work`.
- **Structure:** 2–3 featured case studies. Card: image, client/sector, one-line outcome, "Read case study" link.
- **Layout:** Grid (2 columns desktop, 1 mobile). No auto-play carousel; optional "View all" → /work.
- **Trust mechanism:** Real project names and outcomes where possible; placeholder only if necessary.

### FAQ (Schema-Ready)
- **Section ID:** `#faq`.
- **Structure:** 3–5 questions. Accordion or expandable. Each item: `<h3>` question, `<p>` answer. JSON-LD `FAQPage` schema on the page.
- **Placement:** After Work, before final CTA. Reduces friction for "I have one more question" users.

### Lead Capture
- **Placement:** Optional compact strip above footer: "Get a no-obligation scope for your project." Email + "Send" or "Book a call" → /contact. Single field to maximise conversion; no long form on home.

### Final CTA
- **Structure:** Full-width band (Ocean or Teal). Headline: e.g. "Ready to build something that scales?" CTA: "Start a project" → /contact. Short supporting line only.

### Contact UX Flow (from /contact)
- **Fields:** Name, Email, Company (optional), Message, and optionally "Preferred time zone" or "I'm in: AUS / USA / NZ."
- **Thank-you:** Redirect to /thank-you with clear message and next step (e.g. "We’ll reply within 24 hours."). No dead end.

---

## About Page

- **Hero:** Short headline (e.g. "Australian craft, global standards.") + one paragraph. No giant team photo unless authentic.
- **Story block:** 2–3 short paragraphs: who we are, why we exist, who we serve. Tone: confident, specific, no "we help businesses grow."
- **Values or principles:** 3–4 items with icon + line each (e.g. Transparency, Delivery discipline, Conversion focus, Time-zone respect).
- **Optional:** Team intro (photos + roles) or "We're a small studio that punches above its weight."
- **CTA:** "See our work" and "Start a project" at bottom.

---

## Services Overview (/services)

- **Hero:** One headline (e.g. "From strategy to launch—and beyond."), one subhead.
- **Grid:** 4 service cards (Web, Mobile, UI/UX, Maintenance). Each: title, 2-sentence description, "Learn more" → service page. Visual rhythm: same card height; icon or small image per card.
- **Process strip (optional):** "Strategy → Design → Build → Maintain" in a horizontal timeline or steps.
- **CTA:** "Not sure where to start? Let's talk." → /contact.

---

## Service Pages (e.g. /services/web-development)

- **Hero:** Service name + one-sentence promise. No generic "We do web development."
- **Body:** 2–3 sections: What we deliver, How we work (brief), Technologies (React, Node, etc.). Use H2/H3 hierarchy.
- **Related work:** 1–2 case studies linking to /work/[slug].
- **FAQ:** 2–3 service-specific questions (schema-ready).
- **CTA:** "Get a quote" or "Discuss your project" → /contact. Sticky or at bottom.

---

## Work (/work)

- **Hero:** Short headline (e.g. "Products we’re proud of.").
- **Grid:** All case studies. Card: thumb, client/sector, one-line outcome, link. Filter by service or sector if 6+.
- **Layout:** 2 or 3 columns; consistent card style. No masonry unless content varies heavily.

---

## Case Study (/work/[slug])

- **Layout:** Article-style. Hero image or mockup, client name, sector, one-line outcome. Then: Challenge, Solution, Result (or similar). Short paragraphs; bullets where helpful.
- **Trust:** Real metrics if possible ("X% increase in conversions"). Optional quote from client.
- **Navigation:** Breadcrumb; "Next case study" / "Back to Work" at bottom.
- **CTA:** "Have a similar project?" → /contact.

---

## Contact Page

- **Structure:** Left: short headline + supporting text (e.g. "Tell us about your project. We reply within 24 hours."). Right: form (Name, Email, Company, Message, Time zone or Region). No excessive fields.
- **Alternative:** "Book a call" link (Calendly or similar) as primary; form for async.
- **Trust:** "Serving Sydney, Melbourne, Auckland, and the US. We work in your hours."

---

## 404 Page

- **Personality:** Friendly, on-brand. Message: e.g. "That page took a wrong turn. Let’s get you back on track." Links: Home, Services, Contact. Optional illustration (lost map or compass) in brand style. No generic "Page not found" only.

---

## Section Summary Table

| Page    | Hero | Value/Proof | Differentiation | FAQ | CTA |
|---------|------|-------------|-----------------|-----|-----|
| Home    | ✓    | ✓ (pillars + proof) | ✓ | ✓ (accordion) | Multiple |
| About   | ✓    | Story/values | — | — | Bottom |
| Services| ✓    | Grid        | — | — | Bottom |
| Service | ✓    | Body + tech | — | ✓ (2–3) | Bottom |
| Work    | ✓    | Grid        | — | — | — |
| Case study | ✓ | Article    | — | — | Bottom |
| Contact | —    | Short copy  | — | — | Form / Book call |
| 404     | —    | Message + links | — | — | Home, Contact |

---

*Document version: 1.0 — Implementation-ready.*
