"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend } from "recharts"

const data = [
  {
    date: "Jan",
    you: 5,
    friend: 8,
  },
  {
    date: "Feb",
    you: 12,
    friend: 15,
  },
  {
    date: "Mar",
    you: 18,
    friend: 20,
  },
  {
    date: "Apr",
    you: 25,
    friend: 28,
  },
  {
    date: "May",
    you: 35,
    friend: 40,
  },
  {
    date: "Jun",
    you: 42,
    friend: 48,
  },
  {
    date: "Jul",
    you: 55,
    friend: 60,
  },
  {
    date: "Aug",
    you: 68,
    friend: 72,
  },
  {
    date: "Sep",
    you: 82,
    friend: 90,
  },
  {
    date: "Oct",
    you: 95,
    friend: 105,
  },
  {
    date: "Nov",
    you: 110,
    friend: 125,
  },
  {
    date: "Dec",
    you: 127,
    friend: 156,
  },
]

export function CompareChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <XAxis dataKey="date" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="you"
          name="You"
          stroke="hsl(var(--primary))"
          strokeWidth={2}
          dot={{ r: 4 }}
          activeDot={{ r: 6 }}
        />
        <Line
          type="monotone"
          dataKey="friend"
          name="Friend"
          stroke="hsl(var(--destructive))"
          strokeWidth={2}
          dot={{ r: 4 }}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
