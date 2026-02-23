# Aussie App Studio — Legal & Compliance

## Privacy Policy — Structure

1. **Introduction:** Who we are (Aussie App Studio), domain (aussieappstudio.com.au), and purpose of the policy.
2. **Data we collect:** Contact form (name, email, company, message, region/time zone); usage data (IP, browser, pages visited) if analytics are used; cookies (see Cookie Consent).
3. **Legal basis (GDPR):** Consent (forms, cookie banner); legitimate interest (analytics, security); contract (if engagement follows).
4. **How we use data:** To respond to enquiries; to send requested information; to improve the website; to comply with law.
5. **Sharing:** We do not sell data. Data may be shared with: email/service providers (e.g. SendGrid, Formspree); analytics (GA4); hosting (Vercel). Processors under contract.
6. **Retention:** Contact form data retained as needed to fulfil enquiry and any subsequent contract; typically 24–36 months unless longer required. Analytics: as per provider (e.g. 26 months GA4).
7. **Your rights (GDPR):** Access, rectification, erasure, restriction, portability, object, withdraw consent, complain to supervisory authority (e.g. OAIC for Australia; ICO for UK; state AG for US). Contact email for requests.
8. **International transfer:** Hosting/processors may be outside your country; we ensure appropriate safeguards (e.g. standard contractual clauses).
9. **Security:** Reasonable measures (HTTPS, access control, secure providers).
10. **Changes:** Policy may be updated; date of last update; material changes communicated or highlighted on site.
11. **Contact:** Email (e.g. privacy@aussieappstudio.com.au or hello@) for privacy requests.

**URL:** /privacy

---

## Terms & Conditions — Structure

1. **Acceptance:** Use of site constitutes acceptance. If you represent a business, you warrant authority to bind it.
2. **Services:** General description of services (digital product development, etc.). Specific terms for projects governed by separate agreement/statement of work.
3. **Use of site:** Lawful use only; no misuse (e.g. scraping, malware, impersonation). Content (text, design, code) owned by Aussie App Studio or licensors; no unauthorised copying.
4. **Enquiries and quotes:** Submitting a form does not create a contract; we will respond and may issue a proposal. Contract formed only when both parties sign an agreement.
5. **Intellectual property:** Clarify that pre-existing IP remains with each party; deliverables as per project agreement (typically client owns deliverables upon payment).
6. **Disclaimer:** Site and content provided “as is”; we do not warrant uninterrupted or error-free use. Limitation of liability for use of site (not for contracted services).
7. **Limitation of liability:** Cap to fees paid for contracted work (if applicable); exclude indirect/consequential loss. For site use only: liability limited to maximum extent permitted by law.
8. **Governing law and jurisdiction:** e.g. Laws of New South Wales, Australia; courts of NSW. Or specify if company is registered elsewhere.
9. **Changes:** We may update these terms; continued use after changes = acceptance. Date of last update.
10. **Contact:** Email for questions about terms.

**URL:** /terms

---

## Cookie Consent Logic

1. **Banner or bar:** On first visit (or when cookie preference not set), show a clear notice: “We use cookies and similar tech for essential operation, analytics, and (if applicable) marketing. You can accept all, or choose only essential.”
2. **Options:**  
   - **Essential:** Strictly necessary (e.g. security, form submission). No consent required but list them.  
   - **Analytics:** GA4, etc. Consent required in GDPR/UK.  
   - **Marketing:** Meta/LinkedIn pixels, etc. Consent required.
3. **Storage:** Store choice in localStorage (e.g. `cookie_consent: { essential: true, analytics: true, marketing: false }`). Do not set non-essential cookies until consent.
4. **Script loading:** Load GA4/Meta only if user accepts analytics/marketing. Essential scripts run always.
5. **Re-open:** Link in footer: “Cookie settings” to reopen and change preferences.
6. **Documentation:** In Privacy Policy, list cookie types, purpose, duration, and provider.

---

## GDPR Compliance Outline

- **Lawful basis:** Document for each processing (consent for marketing/analytics; legitimate interest for security/logs; contract for client work).
- **Transparency:** Privacy Policy and cookie notice in plain language; no pre-ticked non-essential cookies.
- **Rights:** Respond to access, rectification, erasure, portability, restriction, object within 30 days; provide contact (email) and link to complaint authority.
- **DPA:** If using processors (e.g. Vercel, SendGrid, GA4), ensure contract or terms include GDPR Art. 28–style obligations. Prefer providers with DPA and SCCs.
- **Data minimisation:** Collect only what’s needed for form response and analytics.
- **Retention:** Define and state in Privacy Policy; delete or anonymise when no longer needed.
- **Breach:** Internal process to assess and notify supervisory authority (72h) and affected individuals where risk to rights.

**Note:** Australian Privacy Act (and APPs) also apply if Australian entity; align Privacy Policy with both APPs and GDPR if serving EU/UK users.

---

*Document version: 1.0 — Implementation-ready. Have a lawyer review before go-live.*
