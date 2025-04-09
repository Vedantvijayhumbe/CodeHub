"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend } from "recharts"

export function CodeforcesTags({ userData, compareUserData }) {
  // Mock data for demonstration
  const data = [
    {
      subject: "Implementation",
      [userData.handle]: 85,
      [compareUserData.handle]: 90,
      fullMark: 100,
    },
    {
      subject: "Math",
      [userData.handle]: 70,
      [compareUserData.handle]: 65,
      fullMark: 100,
    },
    {
      subject: "Greedy",
      [userData.handle]: 80,
      [compareUserData.handle]: 75,
      fullMark: 100,
    },
    {
      subject: "DP",
      [userData.handle]: 60,
      [compareUserData.handle]: 70,
      fullMark: 100,
    },
    {
      subject: "Graphs",
      [userData.handle]: 65,
      [compareUserData.handle]: 80,
      fullMark: 100,
    },
    {
      subject: "Data Structures",
      [userData.handle]: 75,
      [compareUserData.handle]: 85,
      fullMark: 100,
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Problem Tags Comparison</CardTitle>
        <CardDescription>
          Comparing problem-solving skills by tags between {userData.handle} and {compareUserData.handle}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis angle={30} domain={[0, 100]} />
              <Radar
                name={userData.handle}
                dataKey={userData.handle}
                stroke="#10b981"
                fill="#10b981"
                fillOpacity={0.5}
              />
              <Radar
                name={compareUserData.handle}
                dataKey={compareUserData.handle}
                stroke="#f43f5e"
                fill="#f43f5e"
                fillOpacity={0.5}
              />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
