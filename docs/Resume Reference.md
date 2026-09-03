# QuickResume — Resume Form Page (Spec & Build Prompts)

This page is what the **"Resume"** nav link on the landing page routes to (e.g. `/resume`). It shares the landing page's global style guide (navy `#0A2540` / accent blue `#2563EB` / Sora+Inter) with the additions below.

---

## 0. Connecting the Landing Page

> **Prompt:** Wire the "Resume" link in the top navigation (on both the landing page and this page) to route to `/resume`. When the user is on this page, show "Resume" in the nav with the active state (accent-blue text or underline) so it's clear which page they're on. Reuse the exact same nav component from the landing page — same logo, same Home/Resume/Contacts links, same styling — so the transition between pages feels seamless.

---

## 1. Style Additions for This Page

### 1.1 Glass Effect ("Glass Dome") Panel
The flat blue block from the wireframe becomes a **glassmorphic panel**: a frosted-glass card that holds all six form fields.

> **Prompt:** Wrap the form fields in a glassmorphism card: semi-transparent white fill (~12–18% opacity) over a `backdrop-filter: blur(16px)`, a 1px semi-transparent white border (`rgba(255,255,255,0.3)`), a soft drop shadow, and large rounded corners (28–32px) for a smooth "dome" silhouette. Text and input labels inside stay dark/navy for readability against the frosted background; the input fields themselves stay solid white so they're clearly typable.

*Assumption: "glass dome" = a rounded frosted-glass card (glassmorphism), not a literal architectural dome shape. Flag me if you meant something more literal.*

### 1.2 Page Background
Glass only reads as "glass" if there's something colorful behind it to blur.

> **Prompt:** Give this page a soft navy-to-blue gradient background (e.g. `#0A2540` → `#123A66`, diagonal), or a subtle abstract shape/blob in the background, so the frosted glass panel has something visible to blur and stands out from a plain white page.

*Open to a different background if you had something specific in mind — this is my default so the glass effect actually shows up.*

### 1.3 "Generate Resume" Button — Now Blue
> **Prompt:** Change the "Generate Resume" button from purple to accent blue (`#2563EB`), white bold text, same rounded corners as the landing page's "Get Resume" button, with a darker-blue hover state. Keep it centered below the glass panel.

---

## 2. Page Structure

### 2.1 Nav Bar
Same as landing page — Logo left, Home / Resume / Contacts right, "Resume" active on this page.

### 2.2 Image Import Area
> **Prompt:** Design a dashed-border upload zone above the glass panel with centered text: "IMPORT YOUR IMAGE" / "OR" / "DRAG FILES (ONLY IMAGES HERE)". Make it both clickable (opens file picker) and a drop target.

**Validation:**
- Accepts **only** `.png`, `.jpg`, `.jpeg`.
- Any other file type — whether selected via the file picker or dragged in — must be **rejected outright** (not attached), not just flagged after the fact.

### 2.3 Form Fields (inside the glass panel)

Two-column layout, matching the wireframe pairing:

| Field | Type | Required | Default / Placeholder | Rules |
|---|---|---|---|---|
| Full Name (start with surname) | Text input | Yes ⭐ | — | Max 50 characters · text-wrap · every word auto-capitalized (e.g. "Ampea Benjamin Oppong") |
| Date of Birth | Date picker | Yes ⭐ | `MM/DD/YY` | Calendar shows years 1970–2026 · selected date displays as Month/Day/Year |
| University of Studies | Dropdown | Yes ⭐ | "Please Choose the University" | KNUST · KsTU · University of Ghana · Ho Technical University · Tamale Technical University · Others |
| Department of Studies | Dropdown | Yes ⭐ | "Please Choose Your Department of Studies" | Chemical Engineering · Mechanical Engineering · Computer Science · Artificial Intelligence · Pharmacy · Others |
| Your Skills | Dropdown | Yes ⭐ | "Please Choose Your Skills" | Programming · Video Editing · Artificial Intelligence Skills · 3D Modelling Skills · 3D Animation Skills · Others |
| Your Achievements | Textarea | No | — | Max 30 words · text-wrap |

⭐ = red asterisk placed immediately before the label text, exactly as in the wireframe.

### 2.4 Generate Resume Button + Status Indicator
> **Prompt:** Place the blue "Generate Resume" button centered beneath the glass panel. Reserve space directly beside it for a status word: red **"FAILED"** on validation failure, green **"SUCCESS"** when everything passes.

---

## 3. Full Validation Rule Set

| # | Rule | Applies to | Error shown |
|---|---|---|---|
| 1 | Only image files (`.png`/`.jpg`/`.jpeg`) can be imported or dragged in — everything else is blocked | Image import | — |
| 2 | Required-field asterisks are red, positioned exactly as in the wireframe | Full Name, DOB, University, Department, Skills | — |
| 3 | On submit, empty required text/date fields get a red border | Full Name, Date of Birth | "Please fill the forms" |
| 4 | On submit, any dropdown left on its default placeholder gets a red border | University, Department, Skills | "Please You Have Not Selected Anything" (shown beneath the field) |
| 5a | Full Name over 50 characters gets a red border | Full Name | "Maximum of 50 Characters Required" |
| 5b | Achievements over the limit (if filled) gets a red border | Your Achievements | "Maximum of 30 Words" |
| 6 | Full Name where any word isn't capitalized gets a red border | Full Name | "Each Words Inputted Should Be Capitalized" |
| 7 | On submit with any failure, all applicable warnings show at once | Whole form | Red **"FAILED"** beside the button |
| 8 | On submit with everything valid, all warnings clear | Whole form | Green **"SUCCESS"** beside the button |

---

## 4. Consolidated Build Prompt

> Build the QuickResume "Resume" page, routed from the landing page's "Resume" nav link. Reuse the landing page's nav bar with "Resume" active. Below it, add an image drag-and-drop/import box that accepts only .png/.jpg/.jpeg and rejects anything else outright. Below that, place a glassmorphism panel (frosted, blurred, translucent white, large rounded corners) over a navy gradient page background, containing six fields in a two-column layout: Full Name (text, required, max 50 chars, auto-capitalized, text-wrap), Date of Birth (date picker, required, years 1970–2026, displays as MM/DD/YY), University of Studies (required dropdown with a default "Please Choose the University" placeholder and a fixed list of Ghanaian universities plus "Others"), Department of Studies (required dropdown, default placeholder, fixed list of departments plus "Others"), Your Skills (required dropdown, default placeholder, fixed list of skills plus "Others"), and Your Achievements (optional textarea, max 30 words, text-wrap). Required fields show a red asterisk before their label. Below the panel, place a blue "Generate Resume" button. On submit, validate everything: empty required fields and unselected dropdowns get red borders with their specific inline error messages, and a red "FAILED" appears beside the button; if everything passes, all errors clear and a green "SUCCESS" appears beside the button instead.

---

## 5. Notes, Assumptions & Questions for You

- **Achievements limit:** confirmed as 30 words, with the error message "Maximum of 30 Words." Updated throughout.
- **Blue shade:** I used the same accent blue as the landing page (`#2563EB`) for the button, for consistency. Let me know if you had a different blue in mind.
- **Full Name error copy:** kept exactly as given ("Each Words Inputted Should Be Capitalized") since it's a functional string — happy to clean up the grammar to "Each Word Typed Should Be Capitalized" if you'd like.
- **"Contacts" nav destination** still isn't defined (goes with the landing page's contact section, or its own page?) — not needed yet, just flagging for later.
