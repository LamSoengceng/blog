# Algorithm Visualization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add an extensible interactive algorithm visualizer to algorithm detail pages, starting with “盛最多水的容器”.

**Architecture:** Keep algorithm execution as pure step generation, playback state in a reusable player, and visual output in renderer components selected by visualization type. Existing problem data and routes remain unchanged; problems without a registered visualization render the current detail page only.

**Tech Stack:** React 18, TypeScript, Vite, CSS variables, existing black-green design tokens, no new runtime dependencies.

---

### Task 1: Define visualization contracts

**Files:**
- Create: `E:/1/xunji/personal-training-site/src/components/algorithmVisualization/types.ts`

- [ ] **Step 1: Define the shared step and snapshot types**

Create `AlgorithmStep` with `title`, `explanation`, `variables`, `visualizationType`, and an array snapshot containing values, optional pointers, active range, compared indexes, settled indexes, and result.

- [ ] **Step 2: Define the renderer props and visualization registry types**

Export types that allow the visualizer to select an array renderer by `visualizationType` without coupling the player to a specific algorithm.

- [ ] **Step 3: Run the existing type/build check**

Run `npm run build` from `E:/1/xunji/personal-training-site`.

Expected: exit code 0; the new types are not imported by runtime code yet.

### Task 2: Add the “盛最多水的容器” step generator

**Files:**
- Create: `E:/1/xunji/personal-training-site/src/components/algorithmVisualization/containerSteps.ts`

- [ ] **Step 1: Implement deterministic two-pointer step generation**

Use the fixed demo input `[1, 8, 6, 2, 5, 4, 8, 3]`. Generate an initial step and one step for each pointer comparison. Each step must record `left`, `right`, `leftHeight`, `rightHeight`, `area`, and `maxArea`; mark the compared indexes, active range, and the pointer moved after the comparison.

- [ ] **Step 2: Encode the algorithm explanation in the step data**

Use Chinese explanations that state the current width, limiting height, area, maximum area, and why the shorter side moves. The final step must expose the answer `49`.

- [ ] **Step 3: Export the generator through a slug registry**

Export a registry keyed by `11-盛最多水的容器` and a lookup function returning the step list or `null`. Do not add required fields to `AlgorithmProblem`.

- [ ] **Step 4: Run `npm run build`**

Expected: exit code 0.

### Task 3: Implement the reusable step player

**Files:**
- Create: `E:/1/xunji/personal-training-site/src/components/algorithmVisualization/AlgorithmStepPlayer.tsx`

- [ ] **Step 1: Implement controlled playback state**

Accept `steps`, `currentStep`, `onStepChange`, and `onPlayingChange`. Render previous, play/pause, next, and reset controls. Disable previous at index 0, disable next at the final index, and stop playback at the final index.

- [ ] **Step 2: Add timer cleanup and playback boundaries**

Use an effect with a `setInterval` based on a 900ms delay. Clear the interval on pause, unmount, step-list changes, and when the final step is reached.

- [ ] **Step 3: Add keyboard controls**

When the player container is focused, `Space` toggles playback and left/right arrows move one step. Ignore keyboard handling when the event target is an input, textarea, select, or button.

- [ ] **Step 4: Add progress and step explanation**

Render `current + 1 / total`, a progress bar, the current title, and the current explanation. Keep controls usable on narrow screens.

- [ ] **Step 5: Run `npm run build`**

Expected: exit code 0.

### Task 4: Implement the array renderer

**Files:**
- Create: `E:/1/xunji/personal-training-site/src/components/algorithmVisualization/ArrayRenderer.tsx`
- Modify: `E:/1/xunji/personal-training-site/src/App.css`

- [ ] **Step 1: Render a stable array layout**

Render each value as a fixed-width column with a height derived from its value. Keep the array in a horizontally scrollable viewport on mobile and prevent step changes from resizing the layout.

- [ ] **Step 2: Render semantic state markers**

Show index labels and value labels. Render `left` and `right` pointer labels, active range styling, compared columns, settled columns, and the current result using the snapshot fields.

- [ ] **Step 3: Add black-green visual styling**

Use existing variables: mint for active state, cyan for pointers, amber for maximum/result, and orange/danger with reduced opacity for settled or discarded state. Use no new color family or decorative blobs.

- [ ] **Step 4: Add responsive CSS**

At 560px and below, reduce column width and keep labels inside their columns. The renderer must not cause horizontal overflow outside its own viewport.

- [ ] **Step 5: Run `npm run build`**

Expected: exit code 0.

### Task 5: Compose the visualizer and connect it to the detail page

**Files:**
- Create: `E:/1/xunji/personal-training-site/src/components/algorithmVisualization/AlgorithmVisualizer.tsx`
- Modify: `E:/1/xunji/personal-training-site/src/pages/AlgorithmDetailPage.tsx`
- Modify: `E:/1/xunji/personal-training-site/src/App.css`

- [ ] **Step 1: Implement renderer selection**

Create `AlgorithmVisualizer` that accepts a step list, maintains the current index and playing state, selects `ArrayRenderer` for `visualizationType: 'array'`, and renders the player beside or below the renderer depending on viewport width.

- [ ] **Step 2: Render the variable panel**

Display the current step's variables as stable key/value rows, with `maxArea` and `result` receiving the amber emphasis.

- [ ] **Step 3: Add the visualization registry lookup to the detail page**

Look up the current problem slug after the problem guard. Render the visualization panel after `algorithm-guide-panel` only when steps exist. Keep all existing panels and content unchanged.

- [ ] **Step 4: Add the empty/fallback behavior**

Do not render an empty visualization for other problems. If a registered generator returns no steps, render nothing and preserve the current page.

- [ ] **Step 5: Run `npm run build`**

Expected: exit code 0.

### Task 6: Verify behavior in the browser

**Files:**
- Inspect: `E:/1/xunji/personal-training-site/src/components/algorithmVisualization/*`
- Inspect: `E:/1/xunji/personal-training-site/src/pages/AlgorithmDetailPage.tsx`

- [ ] **Step 1: Start or reuse the Vite development server**

Run `npm run dev -- --host 127.0.0.1` from `E:/1/xunji/personal-training-site`, using another port only if 5173 is occupied.

- [ ] **Step 2: Open the first visualized problem**

Navigate to `/algorithm/11-盛最多水的容器`. Confirm the array, pointer labels, current variables, explanation and progress are visible.

- [ ] **Step 3: Verify controls and boundaries**

Check reset, next, previous, play, pause, final-step auto-stop, Space, left arrow, and right arrow. Confirm no duplicate intervals occur after repeated play/pause actions.

- [ ] **Step 4: Verify fallback and responsive layout**

Open an unregistered algorithm detail page and confirm no empty visualizer appears. Inspect the visualized page at desktop width and 390px width; confirm no text overlap, no page-level horizontal overflow, and no console errors.

- [ ] **Step 5: Run the final build**

Run `npm run build` and record the successful output in the handoff.

## Self-review

- Spec coverage: contracts, step generation, playback, array rendering, theming, detail-page integration, fallback behavior, responsive layout, reduced-motion-compatible transitions, and browser verification are covered by Tasks 1-6.
- Placeholder scan: no `TBD`, `TODO`, or unspecified implementation step is present.
- Type consistency: `AlgorithmStep`, `visualizationType: 'array'`, snapshot fields, registry lookup, renderer props, and player props are defined consistently across tasks.
