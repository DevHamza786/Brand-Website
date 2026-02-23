# Aussie App Studio — UI System Specification

## Spacing Scale (8pt System)

- **Base unit:** 8px.
- **Scale:** 4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96, 128.
- **Usage:** Padding/margin in multiples of 4 or 8. Section vertical rhythm: 64px–96px between sections (desktop); 48px–64px on tablet; 40px–48px on mobile.

## Border Radius

- **Buttons:** 8px (default), 9999px (pill only if explicitly designed).
- **Cards:** 12px.
- **Inputs:** 8px.
- **Modals / panels:** 16px.
- **Images (e.g. cards):** 12px or 0 (no rounded) for editorial look.

## Shadow System

- **Card default:** `0 2px 8px rgba(12, 34, 56, 0.06)`.
- **Card hover:** `0 8px 24px rgba(12, 34, 56, 0.1)`.
- **Dropdown / popover:** `0 12px 32px rgba(12, 34, 56, 0.12)`.
- **No heavy or coloured shadows;** keep elevation subtle.

## Button States

- **Primary (Ocean + Gold CTA):**
  - Default: Background Ocean or Gold per brand; white or Ocean text; border none.
  - Hover: Brightness 1.05–1.1 or gradient (Gold); scale 1.02; transition 150ms.
  - Active: scale 0.98.
  - Focus: 2px outline offset 2px (accessibility).
- **Secondary (outline):**
  - Default: Border 2px Ocean or Slate; transparent background; text Ocean/Slate.
  - Hover: Background Slate 50 or light teal tint; border same.
- **Disabled:** Opacity 0.5; pointer-events none; cursor not-allowed.

## Form Styling

- **Input height:** 48px (touch-friendly).
- **Border:** 1px Slate 200; focus: 2px Ocean or Gold, outline none (use box-shadow or border).
- **Label:** Above field; Source Sans 3, 500, 14px; color Slate 600.
- **Error:** Border/underline Coral; message text Coral, 14px below field.
- **Placeholder:** Slate 400.

## Card System

- **Padding:** 24px (default), 32px for feature cards.
- **Background:** White on Slate 50 page; or Slate 50 on Ocean sections.
- **Border:** Optional 1px Slate 200; or shadow only.
- **Consistent:** Same border-radius and shadow level across card types (service, case study, value prop).

## Grid System

- **Container max-width:** 1200px (content), 1280px (full bleed optional). Side padding: 24px (mobile), 40px (tablet), 64px (desktop).
- **Columns:** 12-column grid. Gutter: 24px (mobile), 32px (desktop).
- **Service grid:** 2×2 or 4 columns on desktop; 2 or 1 on mobile. Work grid: 2 or 3 columns.

## Container Widths

- **Narrow (copy):** max-width 720px for long-form (About, case study body).
- **Wide (sections):** max-width 1200px for grids and multi-column.

## Animation Timing (ms)

- **Micro:** 150ms (hover, focus).
- **Section / card reveal:** 300–400ms.
- **Page transition (if SPA):** 200ms.
- **Easing:** cubic-bezier(0.25, 0.46, 0.45, 0.94) for entrances.

## Scroll Behavior

- **Anchor links:** smooth scroll (`scroll-behavior: smooth`).
- **No parallax unless minimal and performant;** prefer opacity/translate on scroll for section reveals.

## Accessibility Compliance

- **WCAG 2.1 AA target:** Contrast ≥4.5:1 for body text; ≥3:1 for large text and UI.
- **Focus visible:** All interactive elements have visible focus (outline or ring). No outline: none without replacement.
- **Labels:** Every form field has a visible label (or aria-label).
- **Headings:** Logical order (one H1 per page; no skip).
- **Alt text:** All meaningful images have alt; decorative images alt="" or role="presentation".
- **Keyboard:** Full navigation and form submit via keyboard; no keyboard traps.
- **Reduced motion:** Respect `prefers-reduced-motion: reduce` (disable or shorten animations).

---

*Document version: 1.0 — Implementation-ready.*
