# CLAUDE.md — HarborOS

## 1. OVERVIEW

HarborOS is the CFO Intelligence Layer for PE-backed software companies. It converts messy contract documents into clean contract primitives, powering renewals forecasting, ARR bridges, and retention metrics.

## 2. TECH STACK

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS 3.4 + CSS Modules
- **Fonts**: Instrument Serif (headings), DM Sans (body), DM Mono (code)
- **Deployment**: Vercel

## 3. COMMANDS

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
```

## 4. REPOSITORY STRUCTURE

```
harboros-site/
├── app/
│   ├── layout.tsx                          # Root layout — Nav + Footer, Google Fonts
│   ├── page.tsx                            # Homepage
│   ├── globals.css                         # Global styles, CSS variables, grain overlay
│   ├── home.module.css
│   ├── architecture/
│   │   ├── page.tsx                        # Architecture detail page
│   │   └── architecture.module.css
│   ├── founder/
│   │   ├── page.tsx                        # Founder story page
│   │   └── founder.module.css
│   ├── lighthouse/
│   │   ├── page.tsx                        # Lighthouse feature page (marketing)
│   │   └── lighthouse.module.css
│   ├── src/app/
│   │   ├── lighthouse/
│   │   │   ├── layout.tsx                        # Lighthouse shell — DashboardShell + AppProviders
│   │   │   └── page.tsx                          # Lighthouse module: Shoreline Details, Extract, Version History, Learning Loop tabs
│   │   └── api/
│   │       ├── lighthouse/route.ts               # GET (active lighthouse) + POST (create new version)
│   │       ├── lighthouse/versions/route.ts      # GET — all versions for portco, ordered desc
│   │       ├── lighthouse/corrections/route.ts   # GET (corrections list) + POST (log a correction)
│   │       └── docking/extract/route.ts          # POST — PDF extraction via Anthropic API, returns normalized rows
│   ├── src/lib/
│   │   ├── extractContractFromPdf.ts             # Calls Anthropic API with PDF + active Lighthouse system prompt. Returns LighthouseExtraction.
│   │   └── normalizeLighthouseExtraction.ts      # Maps LighthouseExtraction → LighthouseDockingRow[]. Resolves entity and cohort. Populates warnings[].
├── components/
│   ├── Nav.tsx                             # Navigation bar — responsive, scroll-triggered blur
│   └── Footer.tsx                          # Footer
├── hooks/
│   ├── useLighthouseScene.ts               # Canvas animation for /lighthouse marketing page
│   ├── useScrollReveal.ts                  # IntersectionObserver fade-in
│   └── useStars.ts                         # Star animation (unused)
├── email/
│   └── helm-white-128.png
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
├── postcss.config.mjs
├── vercel.json
├── robots.txt
└── sitemap.xml
```

## 5. ROUTES

| Route | File | Purpose |
|-------|------|---------|
| `/` | `app/page.tsx` | Homepage — Hero, Problem, Lighthouse, Architecture, Output, Founder, CTA |
| `/architecture` | `app/architecture/page.tsx` | Contract primitive explanation with lifecycle flow |
| `/lighthouse` | `app/lighthouse/page.tsx` | Contextual Lighthouse marketing page with canvas animation |
| `/founder` | `app/founder/page.tsx` | Founder story and design principles |

## 6. DESIGN TOKENS

```css
--navy: #141C2E
--navy-deep: #0D1219
--navy-mid: #1A2540
--navy-light: #232F47
--offwhite: #F7F6F3
--white: #FFFFFF
--red: #C8392B
--green: #1D9E75
--gray: #8A8A8A
--border: rgba(247, 246, 243, 0.08)
```

## 7. MODULES — CURRENT STATE

### Lighthouse (`/lighthouse`)
- **Purpose**: CFO-authored extraction intelligence. Converts messy contract documents (PDFs) into clean contract primitives. The Contextual Lighthouse is a per-portco instruction set — called Shoreline Details — that governs how the AI reads, interprets, and maps documents into the contract primitive.
- **What it does today**: Four tabs. Shoreline Details — plain-language textarea where the CFO writes house rules (ARR definition, entity logic, cohort taxonomy, grace periods, FX conventions). Rules are stored as versioned, append-only records in `contextual_lighthouses` — each save creates a new version, never overwrites. Extract — drag-and-drop PDF upload, calls `/api/docking/extract` which runs `extractContractFromPdf.ts` (Anthropic API with Shoreline Details in system prompt) then `normalizeLighthouseExtraction.ts` (entity resolution, cohort resolution, warning population). Results render as a compact inline-editable table — one row per contract. Amber underline on unresolved fields. Stamp Selected writes to contracts table via `/api/contracts`. Corrections (CFO edits before stamping) are logged to `lighthouse_corrections`. Version History — read-only list of all saved Lighthouse versions, expandable to show full Shoreline Details text. Learning Loop — corrections log table showing every field-level correction the CFO has made, feeding future Lighthouse refinements.
- **Key files**: `src/app/lighthouse/page.tsx`, `src/lib/extractContractFromPdf.ts`, `src/lib/normalizeLighthouseExtraction.ts`, `src/app/api/lighthouse/route.ts`, `src/app/api/lighthouse/corrections/route.ts`, `src/app/api/docking/extract/route.ts`
- **State**: Live. Extract tab functional end-to-end — PDF upload → AI extraction → entity/cohort resolution → inline review table → stamp to contracts.

## 8. SIDEBAR (`src/components/shell/Sidebar.tsx`)

Lighthouse appears in the sidebar navigation after Docking. Uses the same nav item pattern as other modules.

## 9. KEY FILES

| File | Description |
|------|-------------|
| `app/layout.tsx` | Root layout — wraps all pages with Nav and Footer, loads Google Fonts |
| `app/page.tsx` | Homepage with Hero, Problem, Lighthouse, Architecture, Output, Founder, CTA sections |
| `components/Nav.tsx` | Responsive navigation bar — transparent on home, solid on subpages, scroll-triggered blur |
| `components/Footer.tsx` | Site footer |
| `hooks/useLighthouseScene.ts` | Canvas animation — starfield, ship silhouette, Bezier data flow, lighthouse beam |
| `hooks/useScrollReveal.ts` | IntersectionObserver-based fade-in for `.reveal` elements |
| `src/lib/extractContractFromPdf.ts` | Anthropic PDF extraction. Fetches active Lighthouse from `contextual_lighthouses`, prepends Shoreline Details to system prompt as HOUSE RULES block. Returns `LighthouseExtraction` with 11 typed fields or `ExtractionError`. |
| `src/lib/normalizeLighthouseExtraction.ts` | Maps `LighthouseExtraction` → `LighthouseDockingRow[]`. Resolves `entity_raw` to `entity_id` via exact match. Resolves `cohort` against active cohort labels. Populates `warnings: { field, message }[]` for every unresolved field. Preserves raw AI value for unmatched cohort. |

## 10. DATABASE SCHEMA

### `contextual_lighthouses` table
Per-portco versioned Lighthouse instruction sets.

| Column | Type | Notes |
|--------|------|-------|
| `id` | uuid PK | Auto-generated |
| `portco_id` | uuid | Tenant scope. RLS enforced. |
| `version` | integer | Auto-incrementing within portco. Starts at 1. |
| `shoreline_details` | text | CFO's plain-language house rules, exactly as entered. |
| `compiled_prompt` | text | Full system prompt generated from shoreline_details. |
| `is_active` | boolean | Only one version active per portco at a time. New version deactivates previous. |
| `created_at` | timestamptz | Auto |
| `created_by` | uuid FK | Must be Captain role. |

### `lighthouse_corrections` table
Append-only log of CFO corrections made during Extract review.

| Column | Type | Notes |
|--------|------|-------|
| `id` | uuid PK | Auto-generated |
| `lighthouse_id` | uuid FK | Which Lighthouse version was active at correction time. |
| `portco_id` | uuid | Tenant scope. RLS enforced. |
| `contract_id` | uuid FK | Nullable — correction may be pre-stamp. |
| `field_name` | text | Which field was corrected (arr, entity_raw, cohort, term_start, term_end, status). |
| `extracted_value` | text | What the AI produced. |
| `corrected_value` | text | What the CFO changed it to. |
| `correction_reason` | text | Optional CFO-entered reason. |
| `created_at` | timestamptz | Auto |

## 11. ARCHITECTURAL RULES

1. **Next.js App Router only.** All routes use the `app/` directory with React Server Components where possible.
2. **TypeScript strict mode.** No `any` types without justification.
3. **Tailwind + CSS Modules.** Tailwind for utility classes, CSS Modules for component-scoped styles.
4. **CSS variables for design tokens.** All colors, fonts, and spacing tokens defined in `globals.css`.
5. **Client components marked explicitly.** Use `'use client'` directive only when hooks or browser APIs are needed.
6. **Scroll reveal pattern.** Use `useScrollReveal` hook + `.reveal` class for entrance animations.
7. **Font stack via CSS variables.** `--serif` for headings, `--sans` for body, `--mono` for code.
8. **No unnecessary dependencies.** Keep the dependency tree minimal — React, Next.js, Tailwind only.
9. **Canvas animations in custom hooks.** Complex animations isolated in `hooks/` directory, using `requestAnimationFrame`.
10. **Responsive design via `clamp()` and viewport units.** No fixed breakpoints where fluid sizing works.
11. **SEO basics maintained.** `robots.txt`, `sitemap.xml`, and metadata in `layout.tsx` kept current.
12. **Vercel deployment.** All config in `vercel.json`. No custom server.
13. **ESLint with Next.js rules.** `next/core-web-vitals` and `next/typescript` enforced.
14. **Path alias `@/*`.** Maps to project root via `tsconfig.json`.
15. **Image optimization.** Use Next.js `<Image>` component for all images.
16. **No inline styles.** Use Tailwind utilities or CSS Modules.
17. **Component isolation.** Each page has its own CSS Module. Shared styles go in `globals.css`.
18. **Google Fonts via `next/font`.** No external font CDN links.
19. **Semantic HTML.** Use `<section>`, `<article>`, `<nav>`, `<footer>` over generic `<div>`.
20. **Accessibility.** All interactive elements must be keyboard-navigable.
21. **No console.log in production.** Remove debug logging before commit.
22. **Git hygiene.** Descriptive commit messages. No force-pushes to main.
23. **Environment variables.** Secrets in `.env.local`, never committed.
24. **API routes return JSON.** Standard `{ data, error }` response shape.
25. **RLS on all tables.** Every Supabase table must have Row Level Security enabled and scoped to `portco_id`.
26. **Lighthouse Shoreline Details live in the system prompt, not the user message.** In `extractContractFromPdf.ts`, the CFO's Shoreline Details are injected into the system prompt as a HOUSE RULES block. They must never be appended as a trailing user message — the system prompt governs extraction from the start. The user message contains only the PDF document block.
