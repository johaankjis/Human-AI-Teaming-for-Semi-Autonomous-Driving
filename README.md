# Human-AI Teaming for Semi-Autonomous Driving

Human-AI Teaming for Semi-Autonomous Driving is a Next.js dashboard that showcases metrics, explainability tooling, and system insights for a shared-control driving stack. The interface highlights how reinforcement learning agents and human drivers collaborate within semi-autonomous scenarios.

## Features
- **Realtime-style performance summaries** – Metrics cards surface improvements in lane keeping, trajectory prediction, co-adaptation, and safety scoring compared to baselines. 【F:components/metrics-overview.tsx†L5-L53】
- **Pipeline visualization** – The architecture panel walks through the data sources, prediction models, RL control layer, explainable AI features, and validation tooling that compose the system. 【F:components/system-architecture.tsx†L5-L77】
- **Explainability workspace** – Tabbed views for decision boundaries, SHAP feature attribution, and Grad-CAM heatmaps illustrate why the agent acts the way it does. 【F:components/explainability-panel.tsx†L1-L119】
- **Training analytics** – Dual Recharts line charts compare baseline models with RL agents across lane-keeping accuracy and trajectory reliability. 【F:components/performance-charts.tsx†L1-L84】
- **Scenario validation matrix** – Richly annotated cards track test coverage and status across representative driving scenarios. 【F:components/scenario-validation.tsx†L1-L75】

## Tech Stack
- **Framework:** Next.js 15 (App Router) with React 19 and TypeScript.【F:package.json†L1-L54】
- **Styling:** Tailwind CSS 4 with CSS variables for theming and the `cn` helper for class merging.【F:app/globals.css†L1-L200】【F:lib/utils.ts†L1-L6】
- **UI toolkit:** shadcn/ui primitives (Radix UI bindings) stored in `components/ui` for shared form, layout, and interactive elements.【F:components/ui/button.tsx†L1-L60】
- **Charts & data viz:** Recharts for responsive line charts.【F:components/performance-charts.tsx†L1-L84】
- **Icons:** lucide-react icon set across dashboard panels.【F:components/header.tsx†L1-L28】

## Getting Started
1. **Install dependencies**
   ```bash
   pnpm install
   ```
2. **Run the development server**
   ```bash
   pnpm dev
   ```
   Visit `http://localhost:3000` to view the dashboard.
3. **Lint the project**
   ```bash
   pnpm lint
   ```
4. **Create a production build**
   ```bash
   pnpm build
   pnpm start
   ```

## Project Structure
```text
app/                  # App Router entry, layout, and page composition
components/           # Dashboard-specific panels and reusable UI modules
  ui/                 # shadcn/ui primitives (Radix-based controls & layouts)
hooks/                # Reusable hooks shared across components
lib/                  # Utility helpers (e.g., Tailwind class combiner)
public/               # Static assets served by Next.js
styles/               # Tailwind configuration layers and tokens
```

## Customization Tips
- Metrics, charts, and scenario datasets are defined inline in their respective components—swap them with live data-fetching logic or API calls as needed.【F:components/metrics-overview.tsx†L5-L53】【F:components/performance-charts.tsx†L1-L84】【F:components/scenario-validation.tsx†L5-L58】
- Extend the explainability tabs by adding new `TabsTrigger` and `TabsContent` blocks; the shadcn `Tabs` primitive is ready for additional modalities.【F:components/explainability-panel.tsx†L7-L118】
- Leverage the UI primitives in `components/ui` to keep new panels visually consistent with the existing design system.【F:components/ui/card.tsx†L1-L32】【F:components/ui/badge.tsx†L1-L32】

## Scripts
| Script        | Description                    |
|---------------|--------------------------------|
| `pnpm dev`    | Start the Next.js development server. |
| `pnpm build`  | Build the application for production. |
| `pnpm start`  | Serve the production build. |
| `pnpm lint`   | Run ESLint over the project. |

## License
No explicit license is declared. Confirm licensing requirements before distribution.
