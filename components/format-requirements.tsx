"use client"

import { motion } from "framer-motion"
import { Ruler, Zap, Wind, Droplets, CheckCircle2 } from "lucide-react"

interface Format {
  id: string
  name: string
  requirements: {
    area: string
    power: string
    ventilation: string
    utilities: string
  }
}

const requirementItems = [
  { key: "area", icon: Ruler, label: "Помещение" },
  { key: "power", icon: Zap, label: "Электропитание" },
  { key: "ventilation", icon: Wind, label: "Вентиляция" },
  { key: "utilities", icon: Droplets, label: "Коммуникации" },
]

export function FormatRequirements({ format }: { format: Format }) {
  return (
    <div className="bg-background rounded-3xl p-6 sm:p-8 shadow-xl border border-forest/10">
      <h3 className="text-2xl font-bold text-foreground mb-6">Требования к помещению</h3>
      <div className="space-y-4">
        {requirementItems.map((item, index) => (
          <motion.div
            key={item.key}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center gap-4 p-4 bg-muted/50 rounded-2xl"
          >
            <div className="w-12 h-12 rounded-xl bg-forest/10 flex items-center justify-center">
              <item.icon className="w-6 h-6 text-forest" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-muted-foreground">{item.label}</p>
              <p className="font-semibold text-foreground">
                {format.requirements[item.key as keyof typeof format.requirements]}
              </p>
            </div>
            <CheckCircle2 className="w-5 h-5 text-forest" />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
