import { Header } from "@/components/header"
import { MetricsOverview } from "@/components/metrics-overview"
import { SystemArchitecture } from "@/components/system-architecture"
import { ScenarioValidation } from "@/components/scenario-validation"
import { ExplainabilityPanel } from "@/components/explainability-panel"
import { PerformanceCharts } from "@/components/performance-charts"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-6 space-y-6">
        <MetricsOverview />
        <div className="grid gap-6 lg:grid-cols-2">
          <SystemArchitecture />
          <ExplainabilityPanel />
        </div>
        <PerformanceCharts />
        <ScenarioValidation />
      </main>
    </div>
  )
}
