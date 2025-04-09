"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  {
    date: "Jan",
    problems: 5,
  },
  {
    date: "Feb",
    problems: 12,
  },
  {
    date: "Mar",
    problems: 18,
  },
  {
    date: "Apr",
    problems: 25,
  },
  {
    date: "May",
    problems: 35,
  },
  {
    date: "Jun",
    problems: 42,
  },
  {
    date: "Jul",
    problems: 55,
  },
  {
    date: "Aug",
    problems: 68,
  },
  {
    date: "Sep",
    problems: 82,
  },
  {
    date: "Oct",
    problems: 95,
  },
  {
    date: "Nov",
    problems: 110,
  },
  {
    date: "Dec",
    problems: 127,
  },
]

export function ProfileChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <XAxis dataKey="date" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="problems"
          stroke="hsl(var(--primary))"
          strokeWidth={2}
          dot={{ r: 4 }}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
