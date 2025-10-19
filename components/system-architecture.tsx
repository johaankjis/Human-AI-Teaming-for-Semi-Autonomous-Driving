import type React from "react"
import { Card } from "@/components/ui/card"
import { Database, Cpu, Eye, CheckCircle2, ArrowDown } from "lucide-react"

const architectureSteps = [
  {
    title: "Open-Source Driving Datasets",
    description: "Waymo, Argoverse, nuScenes",
    icon: Database,
    color: "bg-chart-1/10 text-chart-1",
  },
  {
    title: "Trajectory Prediction",
    description: "Driver Behavior Model (LSTM, Transformers)",
    icon: Brain,
    color: "bg-chart-2/10 text-chart-2",
  },
  {
    title: "RL-Based Agent",
    description: "Shared Control Policies (PyTorch, PPO)",
    icon: Cpu,
    color: "bg-chart-3/10 text-chart-3",
  },
  {
    title: "Explainable AI Layer",
    description: "Decision Boundaries & Interaction Viz",
    icon: Eye,
    color: "bg-chart-4/10 text-chart-4",
  },
  {
    title: "Validation Framework",
    description: "Lane Keeping, Changes, Obstacle Avoidance",
    icon: CheckCircle2,
    color: "bg-chart-5/10 text-chart-5",
  },
]

function Brain(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
      <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
      <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
      <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
      <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
      <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
      <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
      <path d="M6 18a4 4 0 0 1-1.967-.516" />
      <path d="M19.967 17.484A4 4 0 0 1 18 18" />
    </svg>
  )
}

export function SystemArchitecture() {
  return (
    <Card className="p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-foreground">System Architecture</h2>
        <p className="text-sm text-muted-foreground">End-to-end pipeline for human-AI teaming</p>
      </div>
      <div className="space-y-3">
        {architectureSteps.map((step, index) => {
          const Icon = step.icon
          return (
            <div key={step.title}>
              <div className="flex items-start gap-4">
                <div className={`rounded-lg p-3 ${step.color}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex-1 space-y-1">
                  <h3 className="font-medium text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
              {index < architectureSteps.length - 1 && (
                <div className="ml-[26px] my-2">
                  <ArrowDown className="h-4 w-4 text-muted-foreground" />
                </div>
              )}
            </div>
          )
        })}
      </div>
    </Card>
  )
}
