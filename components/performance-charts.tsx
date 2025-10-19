"use client"

import { Card } from "@/components/ui/card"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts"

const laneKeepingData = [
  { epoch: 0, baseline: 65, rl_agent: 65 },
  { epoch: 10, baseline: 66, rl_agent: 70 },
  { epoch: 20, baseline: 67, rl_agent: 76 },
  { epoch: 30, baseline: 67, rl_agent: 81 },
  { epoch: 40, baseline: 68, rl_agent: 85 },
  { epoch: 50, baseline: 68, rl_agent: 88 },
  { epoch: 60, baseline: 69, rl_agent: 91 },
  { epoch: 70, baseline: 69, rl_agent: 93 },
  { epoch: 80, baseline: 70, rl_agent: 95 },
]

const trajectoryData = [
  { epoch: 0, baseline: 70, prediction: 70 },
  { epoch: 10, baseline: 71, prediction: 75 },
  { epoch: 20, baseline: 72, prediction: 80 },
  { epoch: 30, baseline: 72, prediction: 84 },
  { epoch: 40, baseline: 73, prediction: 87 },
  { epoch: 50, baseline: 73, prediction: 90 },
  { epoch: 60, baseline: 74, prediction: 92 },
  { epoch: 70, baseline: 74, prediction: 94 },
  { epoch: 80, baseline: 75, prediction: 95 },
]

export function PerformanceCharts() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card className="p-6">
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-foreground">Lane-Keeping Accuracy</h2>
          <p className="text-sm text-muted-foreground">RL Agent vs Baseline over training epochs</p>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={laneKeepingData}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
            <XAxis
              dataKey="epoch"
              className="text-xs text-muted-foreground"
              label={{ value: "Training Epoch", position: "insideBottom", offset: -5 }}
            />
            <YAxis
              className="text-xs text-muted-foreground"
              label={{ value: "Accuracy (%)", angle: -90, position: "insideLeft" }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
              }}
            />
            <Line
              type="monotone"
              dataKey="baseline"
              stroke="hsl(var(--chart-2))"
              strokeWidth={2}
              dot={false}
              name="Baseline"
            />
            <Line
              type="monotone"
              dataKey="rl_agent"
              stroke="hsl(var(--chart-1))"
              strokeWidth={2}
              dot={false}
              name="RL Agent"
            />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      <Card className="p-6">
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-foreground">Trajectory Prediction Reliability</h2>
          <p className="text-sm text-muted-foreground">Multi-agent driving scenarios</p>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={trajectoryData}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
            <XAxis
              dataKey="epoch"
              className="text-xs text-muted-foreground"
              label={{ value: "Training Epoch", position: "insideBottom", offset: -5 }}
            />
            <YAxis
              className="text-xs text-muted-foreground"
              label={{ value: "Reliability (%)", angle: -90, position: "insideLeft" }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
              }}
            />
            <Line
              type="monotone"
              dataKey="baseline"
              stroke="hsl(var(--chart-4))"
              strokeWidth={2}
              dot={false}
              name="Baseline"
            />
            <Line
              type="monotone"
              dataKey="prediction"
              stroke="hsl(var(--chart-2))"
              strokeWidth={2}
              dot={false}
              name="Prediction Model"
            />
          </LineChart>
        </ResponsiveContainer>
      </Card>
    </div>
  )
}
