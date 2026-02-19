"use client"

import { useMemo } from "react"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts"

interface Format {
  id: string
  name: string
  investment: { min: number; max: number }
  profit: number
  roi: number
  revenue: { min: number; max: number }
}

export function FormatDashboard({ format }: { format: Format }) {
  const roiData = useMemo(() => {
    const inv = format.investment.min
    return [
      { month: "Месяц 1", value: -inv },
      { month: "Месяц 2", value: -inv * 0.92 },
      { month: "Месяц 3", value: -inv * 0.8 },
      { month: "Месяц 4", value: -inv * 0.65 },
      { month: "Месяц 5", value: -inv * 0.5 },
      { month: "Месяц 6", value: -inv * 0.35 },
      { month: "Месяц 7", value: -inv * 0.2 },
      { month: "Месяц 8", value: -inv * 0.07 },
      { month: "Месяц 9", value: inv * 0.05 },
      { month: "Месяц 10", value: inv * 0.2 },
    ]
  }, [format])

  return (
    <div className="bg-background rounded-3xl p-6 sm:p-8 shadow-xl border border-forest/10">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-foreground mb-2">Финансовые показатели</h3>
        <p className="text-muted-foreground text-sm">Прогнозируемые показатели на основе действующих точек</p>
      </div>

      {/* ROI Chart */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-lg font-semibold text-foreground">Возврат инвестиций</h4>
          <span className="px-3 py-1 bg-red-100 text-red-600 text-sm font-semibold rounded-full">
            от {format.roi} месяцев
          </span>
        </div>
        <ResponsiveContainer width="100%" height={240}>
          <AreaChart data={roiData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
            <defs>
              <linearGradient id="colorROI" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2D5016" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#2D5016" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" vertical={false} />
            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "#4B5563", fontSize: 11 }} />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#4B5563", fontSize: 11 }}
              tickFormatter={(v) => `${v}M`}
            />
            <Tooltip
              contentStyle={{ background: "white", border: "1px solid #E5E7EB", borderRadius: "12px", padding: "12px" }}
              formatter={(value: number) => [`${value.toFixed(1)} млн ₽`, "Накопительно"]}
            />
            <ReferenceLine y={0} stroke="#DC2626" strokeDasharray="5 5" strokeWidth={2} />
            <Area type="monotone" dataKey="value" stroke="#2D5016" strokeWidth={3} fill="url(#colorROI)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
