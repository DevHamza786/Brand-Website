# Aussie App Studio — Brand Identity System

## 1. Logo System

### Primary Logo Concept
- **Format:** Wordmark + icon lockup. "Aussie App Studio" in headline font; icon to the left.
- **Icon:** Abstract "A" formed by two overlapping app-window frames (suggesting web + mobile) with a subtle southern-cross or horizon line. Clean, geometric, not literal.
- **Rationale:** Communicates "app studio" and "Australian" without cliché kangaroos or boomerangs. Feels tech-first, globally credible.

### Secondary Logo Variation
- **Format:** Stacked wordmark for square/social use. "Aussie" on line 1, "App Studio" on line 2, icon above or integrated.
- **Use:** Favicon, social avatars, tight spaces.

### Icon-Only (Brand Mark)
- **Format:** The "A" + app-window icon alone. Minimum size 24px.
- **Use:** App icons, favicon, loading states, social.

### Favicon Pack
- **Sizes:** 16×16, 32×32, 48×48, 180×180 (Apple Touch), 192×192, 512×512.
- **Format:** PNG with transparency; SVG for scalable use.
- **Content:** Icon-only mark on Primary or dark background.

---

## 2. Color System

### Primary
| Name | HEX | RGB | Use |
|------|-----|-----|-----|
| **Ocean Depth** | `#0C2238` | 12, 34, 56 | Headers, primary buttons, key UI |
| **Deep Teal** | `#0F3D5C` | 15, 61, 92 | Secondary backgrounds, cards |

**Psychological reasoning:** Trust, depth, professionalism. Evokes Australian coastal/ocean without being literal. Reads premium and stable.

### Secondary
| Name | HEX | RGB | Use |
|------|-----|-----|-----|
| **Sunrise Gold** | `#C9A227` | 201, 162, 39 | CTAs, highlights, links, accents |
| **Gold Light** | `#E5C04A` | 229, 192, 74 | Hover states, badges |

**Psychological reasoning:** Premium, ambition, warmth. Subtle Australian "gold" without cliché. High contrast on Ocean for accessibility.

### Accent
| Name | HEX | RGB | Use |
|------|-----|-----|-----|
| **Coral** | `#E07B54` | 224, 123, 84 | Alerts, secondary CTAs, tags |
| **Mint** | `#5BB39B` | 91, 179, 155 | Success, positive metrics |

### Neutral Palette
| Name | HEX | RGB | Use |
|------|-----|-----|-----|
| **Slate 900** | `#1A2533` | 26, 37, 51 | Body text |
| **Slate 600** | `#5C6B7A` | 92, 107, 122 | Secondary text |
| **Slate 400** | `#8E9BA8` | 142, 155, 168 | Muted, captions |
| **Slate 200** | `#D1D8E0` | 209, 216, 224 | Borders, dividers |
| **Slate 50** | `#F5F7FA` | 245, 247, 250 | Page backgrounds |
| **White** | `#FFFFFF` | 255, 255, 255 | Cards, hero areas |

### Gradient Usage
- **Hero gradient:** `linear-gradient(165deg, #0C2238 0%, #0F3D5C 50%, #1A2533 100%)`. Use sparingly; no rainbow or purple gradients.
- **CTA gradient (optional):** `linear-gradient(135deg, #C9A227 0%, #E5C04A 100%)` for primary button hover only.
- **Background rules:** One gradient per viewport max. Prefer solid blocks for clarity.

---

## 3. Typography

### Headline Font
- **Font:** **Outfit** (Google Fonts). Weights: 600 (Semibold), 700 (Bold).
- **Rationale:** Modern, geometric, confident. Not overused in SaaS. Works for "Aussie App Studio" wordmark and H1/H2.

### Body Font
- **Font:** **Source Sans 3** (Google Fonts). Weights: 400 (Regular), 500 (Medium), 600 (Semibold).
- **Rationale:** Highly readable, professional, pairs well with Outfit. Used by many institutions; signals reliability.

### UI Font
- **Font:** Same as body (Source Sans 3) for consistency. Buttons, labels, form fields.

### Pairing Logic
- Outfit = identity and impact (headlines, nav, logos).
- Source Sans 3 = content and trust (body, captions, forms).

### Scale & Rules
| Element | Font | Weight | Size (desktop) | Line height | Letter spacing |
|---------|------|--------|----------------|-------------|----------------|
| H1 | Outfit | 700 | 3rem (48px) | 1.1 | -0.02em |
| H2 | Outfit | 600 | 2.25rem (36px) | 1.2 | -0.01em |
| H3 | Outfit | 600 | 1.5rem (24px) | 1.3 | 0 |
| Body | Source Sans 3 | 400 | 1.125rem (18px) | 1.6 | 0 |
| Small | Source Sans 3 | 400 | 0.9375rem (15px) | 1.5 | 0 |
| Button | Source Sans 3 | 600 | 1rem | 1.2 | 0.02em |

---

## 4. Visual Language

### Icon Style
- **Style:** Outline icons, 24px default, 2px stroke. Rounded line caps and joins.
- **Library:** Phosphor Icons or custom SVG set aligned to this style. No mixing filled and outline randomly.
- **Color:** Inherit from text or use Primary/Accent as specified.

### Illustration Direction
- **Use:** Sparingly. If used, geometric, flat, limited palette (Ocean + Gold + White). No 3D blobs or generic "team at laptop" stock.
- **Preferred:** Custom line-work or abstract shapes that suggest "connection" and "build" (e.g. nodes, flows).

### Photography Direction
- **Tone:** Real teams, real work. Prefer Australian offices, Sydney/Melbourne skylines, or neutral tech environments. Avoid stiff stock "handshakes."
- **Treatment:** Slight desaturation or cool tint to align with Ocean palette. No heavy filters.

### Texture / Grain
- **Usage:** Optional subtle noise (3–5% opacity) on hero or dark sections to add depth. Never dominant.

### Motion Personality
- **Principle:** Confident but calm. Animations support hierarchy and feedback, not decoration.
- **Duration:** 200–400ms for micro-interactions; 400–600ms for section reveals.
- **Easing:** `cubic-bezier(0.25, 0.46, 0.45, 0.94)` (ease-out) for entrances; ease-in-out for toggles.

### Micro-Interactions
- Buttons: slight scale (1.02) and brightness increase on hover; 150ms.
- Links: underline slide-in from left; color shift to Gold.
- Cards: subtle lift (shadow + translateY -2px) on hover.

### Avoid
- Gradient meshes, glassmorphism overload, floating orbs.
- Inter, Roboto, or Poppins as primary (overused in AI-looking sites).
- Pure black (#000) or pure white everywhere (reduce contrast fatigue).

---

*Document version: 1.0 — Implementation-ready.*
