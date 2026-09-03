# QuickResume — Contact Page (Design Spec)

This is the "Contacts" destination from the site's nav bar. It carries the same global style (navy `#0A2540` / accent blue `#2563EB` / Sora + Inter), the same nav bar, and the same footer as every other page on the site — the creative territory is everything in between.

---

## 1. Overall Page Concept

**"Two worlds, one screen."**

The page is split cleanly down the middle — left half is about *where we are* (the map + location identity), right half is about *reaching us* (the form). Both halves are full-viewport-height, so the page feels bold and intentional rather than like a typical long-scroll contact form. On mobile, the map stacks above the form.

The page background continues the navy-to-slate-blue diagonal gradient from earlier pages. The form lives inside a glassmorphism panel (consistent with the Resume Form and Resume Display pages). The map has no glass — it sits raw and vivid against the navy background, grounded by a soft inner glow around its border.

---

## 2. Nav Bar

Same component as all other pages. "Contacts" shown as the active nav item (accent-blue underline or color shift).

---

## 3. Page Hero Banner (above the split)

> **Prompt:** Before the two-column split, add a short, bold page hero banner spanning the full width. It doesn't need to be tall — just enough room for a large centered heading. Use a slightly lighter navy or a thin gradient strip to give it a distinct visual weight from what follows. Centered content:
>
> - Overline text (small caps, accent blue, letter-spaced): `GET IN TOUCH`
> - Large heading (Sora bold, white, ~52px): `We'd love to hear from you.`
> - Short subline (Inter, slate-tinted white, ~16px): `Send us a message, or find us at our office in Kumasi, Ghana.`

---

## 4. Left Panel — Location

> **Prompt:** The left half of the split section shows where QuickResume is physically located. Stack these elements top-to-bottom, centered horizontally within the panel:

### 4.1 Location Identity Block
> A small section above the map with an accent-blue location-pin icon, followed by:
> - **Primary text** (Sora bold, white, ~20px): `Atwima Twedie, Kumasi`
> - **Secondary text** (Inter, muted white, ~14px): `Ashanti Region, Ghana`

### 4.2 Embedded Map
> An embedded interactive map (e.g. Google Maps or OpenStreetMap iframe) centered on **Atwima Twedie, Kumasi, Ghana**. The map should:
> - Fill most of the left panel's width with a comfortable margin on all sides
> - Have a pin/marker on Atwima Twedie
> - Have softly rounded corners (16px) consistent with the site's card language
> - Have a subtle glowing border (`box-shadow: 0 0 0 3px rgba(37,99,235,0.4)`) in accent blue to tie it to the brand palette rather than look like a raw iframe drop-in
> - Maintain an aspect ratio of approximately 4:3

### 4.3 Office Hour Badge (decorative, creative touch)
> Below the map, a small pill-shaped badge in semi-transparent navy with a thin accent-blue border, containing a clock icon and the text: `Mon – Fri · 9:00 AM – 5:00 PM GMT`
> This adds life to the panel without cluttering it.

---

## 5. Right Panel — Contact Form (Glass Panel)

> **Prompt:** The right half of the split holds the contact form inside a glassmorphism panel — the same treatment as the Resume Form page (frosted blur, translucent white fill ~15% opacity, 1px translucent border, soft shadow, 28–32px rounded corners). The panel should have generous internal padding. All form labels sit above their inputs in Inter medium, white. Required fields show a red asterisk (⭐) before the label.

### Form Fields, top to bottom:

#### Row 1 — Two columns side by side
| Field | Type | Required | Details |
|---|---|---|---|
| Full Name | Text input | Yes ⭐ | Max 50 characters · text-wrap · every word auto-capitalized (e.g. "Ampea Benjamin Oppong") · same rules as Resume Form page |
| Date of Birth | Date picker | Yes ⭐ | Calendar shows years 1970–2026 · selected date displays as MM/DD/YY · same rules as Resume Form page |

#### Row 2 — Two columns side by side
| Field | Type | Required | Details |
|---|---|---|---|
| Email Account | Email input | Yes ⭐ | Only Gmail accounts accepted (must end in `@gmail.com`) — any other domain is rejected with an inline error |
| Phone Number | Composite field | Yes ⭐ | A dropdown for country code (left) + a number input (right), side by side within the field |

##### Phone Number — Country Code Dropdown Options
| Flag | Country | Dial Code |
|---|---|---|
| 🇬🇭 | Ghana | +233 |
| 🇳🇬 | Nigeria | +234 |
| 🇹🇬 | Togo | +228 |
| 🇺🇸 | United States | +1 |
| 🇬🇧 | United Kingdom | +44 |

> Default shown: Ghana (+233) — since the product is Ghana-based. Flag emoji + dial code shown together in the dropdown.

#### Row 3 — Full width
| Field | Type | Required | Details |
|---|---|---|---|
| Subject | Text input | Yes ⭐ | Single-line · short · e.g. "Partnership Enquiry", "Bug Report" |

#### Row 4 — Full width, tall
| Field | Type | Required | Details |
|---|---|---|---|
| What Do You Want To Say | Textarea | Yes ⭐ | Visually taller than all other fields (roughly 3–4× the height of a normal input) · text-wrap · no character limit unless you decide to add one later |

---

## 6. Submit Button

> **Prompt:** A full-width (or near-full-width) accent-blue button at the bottom of the glass panel, labeled **"Send Message"** in white bold Sora/Poppins. Same rounded-corner and hover-state treatment as the "Get Resume" and "Generate Resume" buttons on the other pages. Keep it consistent — this is the same family of actions across the site.

---

## 7. Validation Rules (Inherited + New)

| # | Field | Rule | Error shown |
|---|---|---|---|
| 1 | Full Name | Empty on submit → red border | "Please fill the forms" |
| 2 | Full Name | Any word not capitalized → red border | "Each Words Inputted Should Be Capitalized" |
| 3 | Full Name | Exceeds 50 characters → red border | "Maximum of 50 Characters Required" |
| 4 | Date of Birth | Empty on submit → red border | "Please fill the forms" |
| 5 | Email Account | Empty on submit → red border | "Please fill the forms" |
| 6 | Email Account | Does not end in `@gmail.com` → red border | "Only Gmail Accounts Are Allowed" |
| 7 | Phone Number | No country code selected → red border | "Please You Have Not Selected Anything" |
| 8 | Phone Number | Number field empty → red border | "Please fill the forms" |
| 9 | Subject | Empty on submit → red border | "Please fill the forms" |
| 10 | What Do You Want To Say | Empty on submit → red border | "Please fill the forms" |

---

## 8. Creative Detail Touches

These small additions give the page personality without breaking the professional tone:

- **Animated map pin:** The marker on the map pulses with a soft ripple animation in accent blue (CSS keyframe, subtle) — makes the location feel alive rather than a static pin.
- **Form field focus glow:** On focus, each input gets a soft accent-blue glow (`box-shadow: 0 0 0 3px rgba(37,99,235,0.25)`) instead of a plain border change — consistent with the glass aesthetic.
- **Left panel gradient overlay:** A subtle vertical gradient at the bottom edge of the map (navy-to-transparent) ties the map into the page background rather than looking like a dropped-in iframe.
- **Flag display in phone dropdown:** Show the flag emoji + dial code in the collapsed state, not just the dial code number, so the user can spot their country at a glance.
- **Send button micro-animation:** On hover, the "Send Message" button shifts up 2px and adds a deeper shadow — gives it a tactile "pressable" feel.

---

## 9. Mobile Behaviour

> **Prompt:** On screens below 768px, stack the two panels vertically: map panel on top, form panel below. The map shrinks to a comfortable height (around 260px). All two-column field rows (Full Name + DOB; Email + Phone) collapse to single-column. The glass panel stretches full-width with reduced padding. Footer and nav stay identical.

---

## 10. Consolidated Build Prompt

> Build the QuickResume "Contacts" page, reached from the nav's Contacts link (active state shown). Reuse the site's nav bar and footer unchanged. The page has three zones: (1) a short, full-width page-hero banner with the overline "GET IN TOUCH", heading "We'd love to hear from you.", and a subline about Kumasi, Ghana; (2) a full-viewport-height two-column split — left panel has a location identity block (pin icon + "Atwima Twedie, Kumasi" + "Ashanti Region, Ghana"), a Google Maps or OpenStreetMap iframe centered on Atwima Twedie with a rounded accent-blue glowing border and a pulsing map pin animation, and a small pill badge showing office hours; right panel is a glassmorphism card containing a contact form with six fields: Full Name (required, max 50 chars, auto-capitalize, text-wrap), Date of Birth (required, date-picker 1970–2026, MM/DD/YY), Email Account (required, Gmail-only — rejects any non-@gmail.com domain with "Only Gmail Accounts Are Allowed"), Phone Number (required, country-code dropdown showing Ghana +233 / Nigeria +234 / Togo +228 / US +1 / UK +44 with flag emojis, default Ghana, plus a number input), Subject (required, single-line), and What Do You Want To Say (required, tall textarea, text-wrap). A full-width accent-blue "Send Message" button sits at the bottom of the glass card. Apply validation: red borders + inline error messages on submit failure, consistent with the Resume Form page's validation language. On mobile, stack map above form, collapse two-column rows to single-column. Keep the navy diagonal gradient page background, accent-blue focus glows on inputs, and a hover micro-lift on the submit button.

---

## 11. Open Questions

- **"Send Message" action:** Like the Resume Display page's save buttons, this isn't wired to anything yet — just the design. Let me know when you're ready to connect it to a backend or email service.
- **Map provider:** I've defaulted to Google Maps or OpenStreetMap iframe — which one do you prefer? Google Maps needs an API key; OpenStreetMap is free with no key needed.
- **Email validation strictness:** Currently specified as "must end in @gmail.com." Should it also check that what comes before the `@` is a valid Gmail username format (letters, numbers, dots only), or is checking the domain suffix enough?
