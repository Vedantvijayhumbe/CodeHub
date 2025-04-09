"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from "recharts"

export function CodeforcesTrends({ userData, compareUserData }) {
  // Mock data for demonstration
  const data = [
    {
      contest: "Round #830",
      [userData.handle]: 1650,
      [compareUserData.handle]: 1720,
    },
    {
      contest: "Round #831",
      [userData.handle]: 1680,
      [compareUserData.handle]: 1750,
    },
    {
      contest: "Round #832",
      [userData.handle]: 1710,
      [compareUserData.handle]: 1730,
    },
    {
      contest: "Round #833",
      [userData.handle]: 1750,
      [compareUserData.handle]: 1780,
    },
    {
      contest: "Round #834",
      [userData.handle]: 1723,
      [compareUserData.handle]: 1810,
    },
    {
      contest: "Round #835",
      [userData.handle]: 1779,
      [compareUserData.handle]: 1790,
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Rating Trends</CardTitle>
        <CardDescription>
          Comparing rating trends between {userData.handle} and {compareUserData.handle}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="contest" />
              <YAxis domain={["dataMin - 100", "dataMax + 100"]} />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey={userData.handle}
                stroke="#10b981"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
              <Line
                type="monotone"
                dataKey={compareUserData.handle}
                stroke="#f43f5e"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
