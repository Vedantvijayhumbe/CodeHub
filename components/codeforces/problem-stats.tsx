"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from "recharts"

export function CodeforcesProblemStats({ userData, compareUserData }) {
  // Mock data for demonstration
  const data = [
    {
      category: "A",
      [userData.handle]: 45,
      [compareUserData.handle]: 48,
    },
    {
      category: "B",
      [userData.handle]: 38,
      [compareUserData.handle]: 42,
    },
    {
      category: "C",
      [userData.handle]: 30,
      [compareUserData.handle]: 35,
    },
    {
      category: "D",
      [userData.handle]: 25,
      [compareUserData.handle]: 28,
    },
    {
      category: "E",
      [userData.handle]: 15,
      [compareUserData.handle]: 20,
    },
    {
      category: "F",
      [userData.handle]: 8,
      [compareUserData.handle]: 12,
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Problem Solving Comparison</CardTitle>
        <CardDescription>
          Comparing problems solved by {userData.handle} and {compareUserData.handle}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey={userData.handle} fill="#10b981" />
              <Bar dataKey={compareUserData.handle} fill="#f43f5e" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
