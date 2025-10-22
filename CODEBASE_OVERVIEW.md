# Codebase Overview

This document provides a high-level map of the Human-AI Teaming for Semi-Autonomous Driving dashboard so that new contributors can quickly find the primary entry points, UI modules, shared utilities, and styling conventions that shape the application.

## Application Shell
- **App Router entry:** `app/layout.tsx` defines the HTML scaffold, loads the Geist font pair, and wires Vercel Analytics for runtime instrumentation.【F:app/layout.tsx†L1-L26】
- **Dashboard composition:** `app/page.tsx` composes the header, metrics, explainability, performance, and validation panels into the main viewport.【F:app/page.tsx†L1-L23】
- **Global styles:** `app/globals.css` loads Tailwind’s base layers, defines OKLCH color tokens, and applies theme-aware surface styling used throughout the dashboard.【F:app/globals.css†L1-L120】

## Feature Panels (`components/`)
- `header.tsx` renders the application chrome, iconography, and quick actions that appear at the top of every page.【F:components/header.tsx†L1-L28】
- `metrics-overview.tsx` surfaces KPI cards for lane-keeping accuracy, trajectory reliability, co-adaptation, and safety scoring, each with trend deltas and descriptive context.【F:components/metrics-overview.tsx†L5-L53】
- `system-architecture.tsx` visualizes the data and decision pipeline, tracing inputs through perception, RL control, and validation stages to explain the shared-control stack.【F:components/system-architecture.tsx†L5-L77】
- `explainability-panel.tsx` provides tabbed content for decision boundaries, SHAP attributions, and Grad-CAM overlays so users can explore why the agent acts as it does.【F:components/explainability-panel.tsx†L1-L119】
- `performance-charts.tsx` uses Recharts line charts to compare baseline and RL agent performance for lane deviation and trajectory error metrics.【F:components/performance-charts.tsx†L1-L84】
- `scenario-validation.tsx` summarizes the validation matrix, listing representative driving scenarios along with coverage, tooling, and next steps.【F:components/scenario-validation.tsx†L1-L75】

Reusable primitives live under `components/ui/`. Buttons, cards, badges, and other shadcn/ui wrappers centralize Radix bindings and Tailwind variants so new panels can stay visually consistent.【F:components/ui/button.tsx†L1-L60】【F:components/ui/card.tsx†L1-L32】

## Hooks and State Utilities (`hooks/`)
- `use-mobile.ts` exposes a `useIsMobile` hook that watches the viewport breakpoint to tailor responsive layouts without duplicating media queries.【F:hooks/use-mobile.ts†L1-L19】
- `use-toast.ts` implements a headless toast store with reducer-driven actions for enqueueing, updating, and dismissing notifications across the app.【F:hooks/use-toast.ts†L1-L120】

## Supporting Libraries
- `lib/utils.ts` exports the `cn` helper for merging class names, mirroring the pattern from shadcn/ui templates.【F:lib/utils.ts†L1-L6】
- `components/theme-provider.tsx` wraps Radix’s `ThemeProvider` to toggle Tailwind CSS color schemes while honoring the system preference flag.【F:components/theme-provider.tsx†L1-L34】

## Styling and Tokens
Tailwind CSS 4 powers the design system. `styles/globals.css` mirrors the theme tokens so standalone style imports (for Storybook or tests) stay consistent with the App Router bundle.【F:styles/globals.css†L1-L120】 The shadcn configuration in `components.json` binds Tailwind to the `app/globals.css` file and aliases component paths to the `@/` namespace for ergonomics.【F:components.json†L1-L20】 PostCSS is configured to load Tailwind’s new plugin entry point via `postcss.config.mjs`.【F:postcss.config.mjs†L1-L8】

## Running and Building
Common scripts are defined in `package.json`:
- `pnpm dev` – start the Next.js development server.
- `pnpm build` – compile a production build.
- `pnpm start` – serve the compiled build locally.
- `pnpm lint` – run ESLint checks.【F:package.json†L1-L54】

With this map you can trace any UI surface back to its source module, locate the reusable primitives that enforce styling, and understand how application state is shared through hooks and utilities before diving into feature-specific changes.
