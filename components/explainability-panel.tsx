"use client"

import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export function ExplainabilityPanel() {
  return (
    <Card className="p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-foreground">Explainable AI Layer</h2>
        <p className="text-sm text-muted-foreground">Decision boundary visualization & interpretability</p>
      </div>
      <Tabs defaultValue="boundaries" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="boundaries">Boundaries</TabsTrigger>
          <TabsTrigger value="shap">SHAP</TabsTrigger>
          <TabsTrigger value="gradcam">Grad-CAM</TabsTrigger>
        </TabsList>
        <TabsContent value="boundaries" className="space-y-4 mt-4">
          <div className="rounded-lg bg-secondary/50 p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-foreground">Lane Change Decision</span>
              <Badge variant="outline" className="bg-chart-1/10 text-chart-1 border-chart-1/20">
                Active
              </Badge>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">AI Confidence</span>
                <span className="font-medium text-foreground">87%</span>
              </div>
              <div className="h-2 rounded-full bg-muted overflow-hidden">
                <div className="h-full w-[87%] bg-chart-1 rounded-full" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Driver Override</span>
                <span className="font-medium text-foreground">13%</span>
              </div>
              <div className="h-2 rounded-full bg-muted overflow-hidden">
                <div className="h-full w-[13%] bg-chart-2 rounded-full" />
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-secondary/50 p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-foreground">Obstacle Avoidance</span>
              <Badge variant="outline" className="bg-chart-2/10 text-chart-2 border-chart-2/20">
                Monitoring
              </Badge>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">AI Confidence</span>
                <span className="font-medium text-foreground">94%</span>
              </div>
              <div className="h-2 rounded-full bg-muted overflow-hidden">
                <div className="h-full w-[94%] bg-chart-2 rounded-full" />
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="shap" className="space-y-4 mt-4">
          <div className="rounded-lg bg-secondary/50 p-4">
            <p className="text-sm text-muted-foreground mb-3">Feature Importance Analysis</p>
            <div className="space-y-3">
              {[
                { feature: "Vehicle Speed", impact: 0.42 },
                { feature: "Lane Position", impact: 0.31 },
                { feature: "Traffic Density", impact: 0.18 },
                { feature: "Weather Conditions", impact: 0.09 },
              ].map((item) => (
                <div key={item.feature} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground">{item.feature}</span>
                    <span className="font-medium text-muted-foreground">{(item.impact * 100).toFixed(0)}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                    <div className="h-full bg-chart-3 rounded-full" style={{ width: `${item.impact * 100}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
        <TabsContent value="gradcam" className="space-y-4 mt-4">
          <div className="rounded-lg bg-secondary/50 p-4">
            <p className="text-sm text-muted-foreground mb-3">Visual Attention Heatmap</p>
            <div className="aspect-video rounded-lg bg-gradient-to-br from-chart-1/20 via-chart-2/20 to-chart-3/20 flex items-center justify-center">
              <p className="text-sm text-muted-foreground">Heatmap visualization area</p>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <div className="flex items-center gap-1">
                <div className="h-3 w-3 rounded-full bg-chart-1" />
                <span className="text-xs text-muted-foreground">High</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="h-3 w-3 rounded-full bg-chart-2" />
                <span className="text-xs text-muted-foreground">Medium</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="h-3 w-3 rounded-full bg-chart-3" />
                <span className="text-xs text-muted-foreground">Low</span>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  )
}
