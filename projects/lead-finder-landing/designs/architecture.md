# Technical Architecture: lead-finder-landing

- **Role:** Architect
- **Status:** Complete (Pending Owner Approval - Gate 2)
- **Target Project:** `projects/lead-finder-landing`

---

## 1. Executive Summary & Goals
This architecture document outlines the technical design, directory structure, component model, and tech stack for the **lead-finder-landing** single-page marketing website.

The goal is to deliver a blazingly fast, accessible, mobile-first responsive landing page with an interactive client-side waitlist signup mechanism that requires zero backend operations or hosting complexity.

---

## 2. Tech Stack Selection & Rationale

| Component | Choice | Rationale |
| :--- | :--- | :--- |
| **Markup & Semantics** | Semantic HTML5 | Accessible, SEO-friendly, clean DOM structure. |
| **Styling & Design System** | Tailwind CSS (v3 / Modern Utility CSS) | Rapid component construction, clean design tokens, mobile-first responsive utilities, minimal CSS payload. |
| **Interactivity & State** | Modern Vanilla JavaScript (ES6 Modules) | Zero framework overhead, instantaneous page load, native browser form validation and local storage persistence. |
| **Icons & Visuals** | Lucide Icons (SVG) | Crisp, modern, lightweight, jargon-free visual metaphors. |
| **Build & Dev Tooling** | Vite (Optional) or Zero-dependency Static Bundle | Ultra-fast local development and single-command static build. |

---

## 3. System Components & Architecture

```
+-------------------------------------------------------+
|                      index.html                       |
|                                                       |
|  [ Navbar / Brand Header ]                            |
|                                                       |
|  [ Section 1: Hero ]                                  |
|    - Motivating Headline + Value Proposition          |
|    - Quick CTA button (scrolls to waitlist)           |
|                                                       |
|  [ Section 2: The Problem ]                           |
|    - 3 Empathetic Pain-Point Cards                    |
|                                                       |
|  [ Section 3: Core Features Grid ]                    |
|    - 1. Lead Search (Location, Company, Domain)       |
|    - 2. Client Advice (Pitch scripts, guides)         |
|    - 3. Lead Management (All-in-one CRM preview)      |
|    - 4. Automated Outreach Email (Smart templates)    |
|                                                       |
|  [ Section 4: How It Works ]                          |
|    - 4-Step Agency Launch Roadmap                     |
|                                                       |
|  [ Section 5: Pricing Tiers ]                         |
|    - Free Starter ($0) vs Pro Agency Launch           |
|                                                       |
|  [ Section 6: Interactive Waitlist Signup ]           |
|    - Name, Email, Niche Selector                      |
|    - Validation & Success Feedback State              |
|                                                       |
|  [ Section 7: Footer ]                                |
+-------------------------------------------------------+
```

---

## 4. Client-side Data Model & Storage

### Waitlist Submission Model
```typescript
interface WaitlistSubmission {
  id: string;               // UUID / timestamp-based ID
  name: string;             // User's name
  email: string;            // Validated email address
  niche: string;            // Selected agency niche (e.g. "Web Design", "Social Media", "Lead Gen", "Other")
  submittedAt: string;      // ISO 8601 timestamp
}
```

### Local Storage Handling
- Submissions are validated client-side and saved into `localStorage.getItem("leadfinder_waitlist")`.
- If the user has already joined on that browser, the form automatically displays a personalized "Welcome back! You're on the priority list." status card.

---

## 5. Folder & Code Structure

The project code will reside cleanly within the project structure:

```
projects/lead-finder-landing/
  src/
    index.html               # Main landing page template
    styles/
      main.css               # Base Tailwind layers, custom animations
    scripts/
      main.js                # Entry point, component initialization
      waitlist.js            # Form validation, submission handling, local storage
      mock-data.js           # Interactive feature previews (lead samples, advice tips)
    assets/
      images/                # UI illustrations and badges
  dist/                      # Production build output
  package.json               # Package setup and build scripts
```

---

## 6. Technical Standards & Non-Functional Targets

- **Performance:** 95+ score on Lighthouse Performance audit. Sub-second initial render.
- **Mobile First:** Breakpoints at:
  - Mobile: `< 640px`
  - Tablet: `640px – 1024px`
  - Desktop: `> 1024px`
- **Accessibility:** Semantic `<main>`, `<header>`, `<section>`, `<nav>`, `<form>`, `<button>`. Strict label bindings for form controls. Full keyboard tab-navigation.
- **Security:** Strict sanitation of form inputs before rendering to DOM; zero inline eval.

---

## 7. Technical Risks & Mitigations

| Risk | Impact | Mitigation Strategy |
| :--- | :--- | :--- |
| **No Live Backend for Emails** | Low (Per Scope) | Provide immediate visual feedback + realistic confirmation toast and localStorage persistence so demonstration feels 100% complete. |
| **Over-complicating build setup** | Medium | Keep dependencies minimal. Ensure the page runs directly in any modern browser without needing mandatory complex build tooling. |
