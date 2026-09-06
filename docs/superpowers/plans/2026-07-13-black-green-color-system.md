# Black Green Color System Implementation Plan

> **For agentic workers:** This plan is executed inline in the current session.

**Goal:** Expand the existing black-green palette with layered green surfaces plus restrained cyan and amber semantic colors.

**Architecture:** Keep color ownership centralized in `index.css` variables and update `App.css` component selectors to consume semantic variables. Do not alter component structure or data flow.

**Tech Stack:** React, TypeScript, Vite, Tailwind CSS, plain CSS variables.

---

### Task 1: Establish global color tokens

**Files:**
- Modify: `E:/1/xunji/personal-training-site/src/index.css`

- [ ] Replace the current page, surface, text, border, accent and danger variables with the approved black-green palette and add `--surface-raised`, `--info`, `--signal`, `--success`, `--warning`, and `--focus-ring`.
- [ ] Update the body background gradient to transition through page black, deep green and a restrained cyan-green glow.
- [ ] Add a shared `:focus-visible` outline using `--focus-ring`.

### Task 2: Map component styles to semantic colors

**Files:**
- Modify: `E:/1/xunji/personal-training-site/src/App.css`

- [ ] Replace hard-coded status colors for positive, negative, warning and information states with `--success`, `--danger`, `--warning`, and `--info`.
- [ ] Add a raised surface layer for featured cards and active panels.
- [ ] Tune borders, shadows, tags, progress fills, chart series and navigation states so green is reserved for emphasis rather than every surface.
- [ ] Preserve all existing breakpoints and dimensions.

### Task 3: Verify visual and build behavior

**Files:**
- Inspect: `src/index.css`, `src/App.css`, all routed pages

- [ ] Run `npm run build` and confirm exit code 0.
- [ ] Open `/`, `/blog`, `/training`, `/algorithm`, and `/market` at desktop width and confirm each page renders.
- [ ] Open the same routes at 390px width and check that text, cards, navigation and status colors remain readable.
- [ ] Check browser console for errors and verify the existing mobile menu still opens and closes.
