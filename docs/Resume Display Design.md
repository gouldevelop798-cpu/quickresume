# QuickResume — Resume Display Page (Spec & Build Prompts)

This is the page the user lands on right after a successful "Generate Resume" submission on the Resume Form page. It shares the site-wide style guide (navy `#0A2540` / accent blue `#2563EB` / Sora+Inter) and reuses the glassmorphism language introduced on the Resume Form page.

---

## 0. How This Page Fits the Flow

> **Prompt:** This page only ever renders after the Resume Form page's validation passes. On successful submit, redirect the user here instantly and clear the green "SUCCESS" label — it was only ever a momentary confirmation before the redirect, not something that lingers on screen. On failed submit, do the opposite: don't navigate anywhere, keep the user on the Resume Form page, and leave the red "FAILED" label (plus all its inline field errors) visible until they fix the form and resubmit.

Reuse the exact same nav bar and footer components from the Home and Resume pages — no changes. I'd keep "Resume" shown as the active nav item here too, since this page is still part of that same flow.

---

## 1. Style Additions for This Page

### 1.1 One Large Glass Dome
Different from the Resume Form page: there, the glass panel wrapped just the six input fields. Here, it wraps three elements together as a single unit — the heading, the resume preview, and both buttons.

> **Prompt:** Wrap the "Your Resume is Ready" heading, the disabled resume preview box, and the two action buttons together inside one large glassmorphism panel — semi-transparent white fill (~12–18% opacity), `backdrop-filter: blur(16px)`, a 1px translucent border, soft shadow, large rounded corners (28–32px). This panel sits on the same navy gradient page background used on the Resume Form page, so the frosting is visible. The resume preview box itself stays solid, opaque white inside the glass panel — the frosting is for the panel's background, not for the resume content, which needs to stay fully readable.

### 1.2 Buttons Keep Their Original Colors
Two buttons, left and right: "Save as .DOCX file" in dark navy, "Save as .PDF file" in bright red (`#FF0000`). Neither of these was something you asked me to change, and honestly the color logic already works well as-is — navy leans toward Word's blue branding, red mirrors Adobe Acrobat's red, so the buttons hint at file type before you even read the label. Keeping both exactly as specified.

Per the source doc, neither button is wired to a real action yet — this pass is about the visual design only.

---

## 2. Page Structure

### 2.1 Nav Bar (reused)
Same as Home and Resume pages, "Resume" shown active.

### 2.2 Heading — "Your Resume is Ready"
> **Prompt:** Large, bold, centered heading reading "Your Resume is Ready" in Sora/Poppins, sitting near the top of the glass panel, just below the nav bar.

### 2.3 Resume Preview (disabled)
> **Prompt:** Below the heading, place a large, solid white, bordered box — this is the live preview of the resume that was just generated from the user's form data (photo, name, education, skills, achievements, etc.). It's read-only: no cursor, no focus states, no editable fields, purely a rendered output the user can look at and scroll if needed.

*Note: the internal layout of the resume itself — how the photo, name, education, skills, and achievements are actually arranged inside this preview — isn't specified in the source doc. That's a separate design decision. Happy to spec that out next, building on the resume-structure breakdown from earlier in our conversation, whenever you're ready.*

### 2.4 Action Buttons
> **Prompt:** Below the preview box, place two large buttons side by side, spaced apart (not touching): "Save as .DOCX file" on the left in dark navy with white bold text, "Save as .PDF file" on the right in bright red with white bold text. Same rounded-corner style as buttons elsewhere on the site. No click behavior yet.

### 2.5 Footer (reused)
Same as Home and Resume pages.

---

## 3. Behavior Rules

| # | Trigger | Result |
|---|---|---|
| 1 | Resume Form page validation succeeds and "Generate Resume" is clicked | Green "SUCCESS" label clears · user is instantly redirected to this page |
| 2 | Resume Form page validation fails | Red "FAILED" label and all inline errors remain · no redirect · user stays on Resume Form page |
| 3 | User is on this page | Resume preview box is fully disabled/read-only |
| 4 | User clicks either "Save as" button | No action yet — design only, not wired up |

---

## 4. Consolidated Build Prompt

> Build the QuickResume "Resume Display" page, which the app redirects to instantly after a successful "Generate Resume" submission on the Resume Form page (clearing the green "SUCCESS" label as it navigates away; on failure, stay on the Resume Form page instead, with the red "FAILED" label and field errors intact). Reuse the site's nav bar (Resume active) and footer. On a navy gradient background, render one large glassmorphism panel (frosted, blurred, translucent white, large rounded corners) containing: a bold centered heading "Your Resume is Ready"; below it, a large solid-white, bordered, read-only resume preview box showing the generated resume; below that, two buttons side by side — "Save as .DOCX file" in dark navy and "Save as .PDF file" in bright red — neither wired to any action yet.

---

## 5. Notes & Open Questions

- **Resume preview's internal layout** isn't defined in the source doc — just that it's a big white disabled box. Want me to design what actually goes inside it next?
- **Nav active state:** I assumed "Resume" stays highlighted here since this page is still part of that flow — flag it if you'd rather it be unhighlighted, or highlight something else.
- **Button colors:** kept exactly as specified (navy + red) since nothing here asked me to change them — just confirming that was intentional on your end too.
