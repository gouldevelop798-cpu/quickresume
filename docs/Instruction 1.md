# QuickResume — Landing Page Spec & Build Prompts

**Product:** QuickResume — an AI resume-building app
**Audience:** General job seekers (broad, all backgrounds/experience levels)
**Visual direction:** Professional corporate — navy & blue palette, trustworthy and clean
**Structure:** Follows the original wireframe exactly (Nav → Hero → Objectives → Contact CTA → Footer). No extra sections added.

---

## 1. Global Style Guide

Use this as the foundation for every section below.

**Color palette**
| Role | Color | Hex |
|---|---|---|
| Primary (backgrounds, nav, headers) | Deep Navy | `#0A2540` |
| Secondary (section backgrounds, cards) | Slate Blue | `#123A66` |
| Accent (links, highlights, icons) | Bright Blue | `#2563EB` |
| CTA / Buttons | Bright Blue or Amber (pick one, stay consistent) | `#2563EB` / `#F5B700` |
| Neutral background | Off-white | `#F8FAFC` |
| Body text | Slate Gray | `#334155` |
| Text on navy | White | `#FFFFFF` |

**Typography**
- Headings: **Sora** or **Poppins** — bold, geometric, confident
- Body: **Inter** — clean, highly readable at small sizes
- Headline weight: 700–800; body weight: 400–500

**Components**
- Buttons: rounded corners (8px), solid fill, subtle hover state (darken 10% or slight lift/shadow)
- Cards: white background, soft shadow (`0 4px 12px rgba(0,0,0,0.06)`), 12px radius
- Icons: simple line-style icon set (e.g. Lucide or Feather), single accent color, no clutter
- Spacing: generous padding between sections (80–120px desktop, 48px mobile)

**Tone of voice:** Direct, confident, reassuring — speaks to someone stressed about job hunting and short on time. Avoid slang; keep it professional but warm (not corporate-cold).

---

## 2. Navigation Bar

**Structure (from wireframe):** Logo left · Home · Resume · Contacts right

> **Prompt:** Design a clean, fixed/sticky top navigation bar on a white or off-white background with a subtle bottom border. Place the "QuickResume" logo (bold, navy `#0A2540`, Sora font) on the left. On the right, place three nav links — Home, Resume, Contacts — in medium-weight Inter, slate gray, with a navy underline or color shift on hover/active state. Keep the bar height compact (64–72px) and let it collapse into a simple hamburger menu on mobile.

---

## 3. Hero Section

**Structure (from wireframe):** Bold headline + single CTA button, centered

> **Prompt:** Design a hero section with a navy (`#0A2540`) or off-white background — pick whichever gives the strongest contrast with your button color. Center a bold headline reading **"Create Your Resume Within Seconds"** in large Sora/Poppins type (44–56px desktop). Below it, place one prominent CTA button labeled **"Get Resume"** in bright blue or amber, white text, rounded corners, with generous padding so it feels like the clear single action on the page. Keep the section otherwise uncluttered — no supporting image or subheadline required, just headline + button, vertically centered with ample whitespace above and below.

*Optional (not required, since you chose to keep the wireframe exact): a one-line subheadline under the headline, e.g. "AI-powered resumes, ready in seconds — no design skills needed." Add only if you feel the hero needs more context.*

---

## 4. "Our Objectives" Section

**Structure (from wireframe):** Section header + two icon blocks side by side

> **Prompt:** Design a section on an off-white or light slate background with a centered section header reading **"Our Objectives"** (bold, navy, with a thin accent-colored rule above or below it, echoing the bordered header style in the wireframe). Below it, lay out two equal-width cards side by side (stack vertically on mobile), each with: a simple line icon at the top in accent blue, a short bold line, and 1–2 sentences of supporting copy. Suggested content:
> - **Icon 1 — Speed (lightning bolt icon):** "We provide you with the best AI-generated resume within seconds."
> - **Icon 2 — Experience (star/sparkle icon):** "We give you the best experience of resume creation, every time."
>
> Give each card a white background, soft shadow, and rounded corners so they feel like distinct, tappable/scannable blocks.

---

## 5. Contact CTA Section

**Structure (from wireframe):** Header line + single button

> **Prompt:** Design a full-width banner section on a navy or slate-blue background with white centered text reading **"For More Information"**, followed by a single centered CTA button labeled **"Contact Us."** Use the same accent color as the hero button for consistency. Keep this section short and high-contrast — it should read as a clear, low-friction secondary call to action, distinct in background color from the sections above and below it.

---

## 6. Footer

**Structure (from wireframe):** Left tagline block + right links block

> **Prompt:** Design a footer split into two columns (stack on mobile). Left column: a short, confident tagline in bold navy or white-on-navy text — **"Don't waste your time looking for the best resume. Use us."** Right column: a "Links" heading followed by a simple vertical list — Home, Resume, Contact — in Inter, slate gray, with hover states matching the nav. Add a thin top border or background shift to separate the footer from the section above it. Optionally include a small copyright line at the very bottom (e.g. "© 2026 QuickResume. All rights reserved.").

*Note: the wireframe uses "Contacts" in the nav but "Contact" in the footer — worth picking one for consistency (I'd suggest "Contact" everywhere, it reads slightly cleaner).*

---

## 7. Consolidated Build Prompt

If you want to hand this to an AI page builder or developer in one shot, use this:

> Build a one-page landing site for "QuickResume," an AI resume-builder app, targeting general job seekers. Use a professional corporate style: navy (`#0A2540`) and bright blue (`#2563EB`) as primary colors, off-white (`#F8FAFC`) backgrounds, Sora/Poppins for headings and Inter for body text. Structure, top to bottom: (1) a sticky nav bar with the QuickResume logo left and Home/Resume/Contact links right; (2) a centered hero with the headline "Create Your Resume Within Seconds" and one bright CTA button "Get Resume"; (3) an "Our Objectives" section with a centered header and two side-by-side icon cards on speed and experience; (4) a navy banner CTA section reading "For More Information" with a "Contact Us" button; (5) a two-column footer with a bold tagline on the left ("Don't waste your time looking for the best resume. Use us.") and a Links list on the right. Keep the layout clean, generous with whitespace, mobile-responsive, and avoid adding sections beyond these five.

---

## 8. Open Questions for You
- Final CTA color: bright blue (safer/more corporate) or amber (more contrast/pop)? Either works with navy.
- "Contact" vs "Contacts" — pick one for consistency across nav and footer.
- Logo: do you have a wordmark/icon already, or do you need one designed?
