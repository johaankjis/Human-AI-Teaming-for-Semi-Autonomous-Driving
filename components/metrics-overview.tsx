import { Card } from "@/components/ui/card"
import { TrendingUp, Target, Brain, Shield } from "lucide-react"

const metrics = [
  {
    label: "Lane-Keeping Accuracy",
    value: "30%",
    description: "Improvement vs baseline",
    icon: Target,
    trend: "+30%",
    color: "text-chart-1",
  },
  {
    label: "Trajectory Prediction",
    value: "25%",
    description: "Reliability improvement",
    icon: Brain,
    trend: "+25%",
    color: "text-chart-2",
  },
  {
    label: "Co-Adaptation",
    value: "20%",
    description: "Across driving scenarios",
    icon: TrendingUp,
    trend: "+20%",
    color: "text-chart-3",
  },
  {
    label: "Safety Score",
    value: "98.5%",
    description: "Multi-agent validation",
    icon: Shield,
    trend: "+12%",
    color: "text-chart-4",
  },
]

export function MetricsOverview() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => {
        const Icon = metric.icon
        return (
          <Card key={metric.label} className="p-6">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">{metric.label}</p>
                <p className="text-3xl font-bold text-foreground">{metric.value}</p>
                <p className="text-xs text-muted-foreground">{metric.description}</p>
              </div>
              <div className={`rounded-lg bg-secondary p-2 ${metric.color}`}>
                <Icon className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-1">
              <TrendingUp className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-accent">{metric.trend}</span>
              <span className="text-xs text-muted-foreground">from last week</span>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
