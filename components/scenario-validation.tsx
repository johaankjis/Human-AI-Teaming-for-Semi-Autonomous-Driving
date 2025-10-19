import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, AlertCircle, Clock } from "lucide-react"

const scenarios = [
  {
    name: "Lane Keeping",
    status: "passed",
    accuracy: "95%",
    tests: 1250,
    description: "Straight highway driving with minimal traffic",
  },
  {
    name: "Lane Changes",
    status: "passed",
    accuracy: "91%",
    tests: 980,
    description: "Multi-lane highway with moderate traffic density",
  },
  {
    name: "Obstacle Avoidance",
    status: "passed",
    accuracy: "93%",
    tests: 1100,
    description: "Dynamic obstacles and emergency maneuvers",
  },
  {
    name: "Merging",
    status: "in-progress",
    accuracy: "87%",
    tests: 450,
    description: "Highway on-ramp merging scenarios",
  },
  {
    name: "Urban Navigation",
    status: "warning",
    accuracy: "82%",
    tests: 320,
    description: "Complex intersections and pedestrian interactions",
  },
]

export function ScenarioValidation() {
  return (
    <Card className="p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-foreground">Scenario Validation</h2>
        <p className="text-sm text-muted-foreground">Testing across diverse driving conditions</p>
      </div>
      <div className="space-y-4">
        {scenarios.map((scenario) => (
          <div
            key={scenario.name}
            className="rounded-lg border border-border bg-card p-4 hover:bg-accent/5 transition-colors"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-3">
                {scenario.status === "passed" && <CheckCircle2 className="h-5 w-5 text-chart-2" />}
                {scenario.status === "in-progress" && <Clock className="h-5 w-5 text-chart-1" />}
                {scenario.status === "warning" && <AlertCircle className="h-5 w-5 text-chart-4" />}
                <div>
                  <h3 className="font-medium text-foreground">{scenario.name}</h3>
                  <p className="text-sm text-muted-foreground">{scenario.description}</p>
                </div>
              </div>
              <Badge
                variant={
                  scenario.status === "passed" ? "default" : scenario.status === "in-progress" ? "secondary" : "outline"
                }
                className={
                  scenario.status === "passed"
                    ? "bg-chart-2/10 text-chart-2 border-chart-2/20"
                    : scenario.status === "in-progress"
                      ? "bg-chart-1/10 text-chart-1 border-chart-1/20"
                      : "bg-chart-4/10 text-chart-4 border-chart-4/20"
                }
              >
                {scenario.status === "passed" && "Passed"}
                {scenario.status === "in-progress" && "In Progress"}
                {scenario.status === "warning" && "Needs Review"}
              </Badge>
            </div>
            <div className="flex items-center gap-6 mt-3">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Accuracy:</span>
                <span className="text-sm font-medium text-foreground">{scenario.accuracy}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Tests:</span>
                <span className="text-sm font-medium text-foreground">{scenario.tests.toLocaleString()}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
