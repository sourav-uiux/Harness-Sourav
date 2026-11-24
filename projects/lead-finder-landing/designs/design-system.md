# Design System: lead-finder-landing

- **Role:** Designer
- **Status:** Complete (Pending Owner Approval - Gate 2)
- **Target Project:** `projects/lead-finder-landing`

---

## 1. Design Philosophy
- **Friendly & Encouraging:** Welcoming to young starters who feel insecure about entering the business world.
- **Modern & Energetic:** Crisp, fresh, non-corporate visuals that build momentum and optimism.
- **Zero Confusion:** Uncluttered layouts, clear visual hierarchy, scannable cards, and prominent action buttons.

---

## 2. Color Palette

```
+---------------------------------------------------------------+
|  Primary Brand (Growth & Success)                             |
|  - Emerald 500: #10B981 (Primary CTA buttons, badges)         |
|  - Emerald 600: #059669 (Hover states)                        |
|  - Emerald 50:  #ECFDF5 (Subtle badge & card backgrounds)     |
+---------------------------------------------------------------+
|  Warm Accent (Spark & Optimism)                               |
|  - Amber 400:   #FBBF24 (Highlights, badges, ratings)        |
|  - Amber 50:    #FFFBEB (Warm accent background)              |
+---------------------------------------------------------------+
|  Dark Neutral (Structure & Contrast)                          |
|  - Slate 900:   #0F172A (Headlines, dark section containers)   |
|  - Slate 800:   #1E293B (Card borders, subheaders)           |
|  - Slate 600:   #475569 (Body text, supporting paragraphs)    |
|  - Slate 400:   #94A3B8 (Placeholders, inactive borders)      |
+---------------------------------------------------------------+
|  Light Neutral (Clean Backgrounds)                            |
|  - Slate 50:    #F8FAFC (Page background)                     |
|  - White:       #FFFFFF (Cards, modal surface)                |
+---------------------------------------------------------------+
```

---

## 3. Typography Scale

- **Font Family:** `Plus Jakarta Sans`, `Inter`, or system sans-serif.
- **Scale:**
  - **Hero Headline:** `text-4xl` to `text-6xl` (`36px` - `60px`), `font-extrabold`, `tracking-tight`.
  - **Section Headings (H2):** `text-3xl` to `text-4xl` (`30px` - `36px`), `font-bold`.
  - **Card Titles (H3):** `text-xl` (`20px`), `font-semibold`.
  - **Body Text:** `text-base` to `text-lg` (`16px` - `18px`), `text-slate-600`, line height `1.6`.
  - **Caption / Meta:** `text-sm` (`14px`), `font-medium`.

---

## 4. UI Components & Tokens

### Buttons
- **Primary Action:**
  - Style: `bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3.5 px-7 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5`
- **Secondary Action:**
  - Style: `bg-white hover:bg-slate-50 text-slate-800 font-semibold py-3.5 px-6 rounded-xl border border-slate-200 transition-colors`

### Cards
- Style: `bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow`
- Feature Card Accent: Top icon badge with `w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center`.

### Form Inputs
- Style: `w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-slate-800 bg-white placeholder-slate-400`
- Error state: `border-red-400 focus:ring-red-400`
- Success state: `border-emerald-400 bg-emerald-50/30`

---

## 5. Responsive Breakpoints
- **Mobile (`< 640px`):** Single column, sticky CTA bar or quick scroll, touch targets minimum 48px.
- **Tablet (`640px - 1024px`):** 2-column feature grids, balanced margins.
- **Desktop (`> 1024px`):** Max container width `max-w-6xl` (1152px), multi-column comparison grids.
