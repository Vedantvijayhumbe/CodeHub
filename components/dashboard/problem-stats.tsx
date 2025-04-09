"use client"

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"

const data = [
  { name: "Easy", value: 45, color: "#10b981" },
  { name: "Medium", value: 32, color: "#f59e0b" },
  { name: "Hard", value: 12, color: "#ef4444" },
]

export function ProblemStats() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip formatter={(value, name) => [`${value} problems`, name]} contentStyle={{ borderRadius: "8px" }} />
        </PieChart>
      </ResponsiveContainer>
      <div className="flex justify-center gap-6 pt-2">
        {data.map((entry, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full" style={{ backgroundColor: entry.color }} />
            <span className="text-sm">{entry.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
