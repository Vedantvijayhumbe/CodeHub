"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Pie, PieChart, ResponsiveContainer, Tooltip, Cell } from "recharts"

export function CodeforcesProblemDifficulty({ userData, compareUserData }) {
  // Mock data for demonstration
  const userDifficultyData = [
    { name: "800-1000", value: 45, color: "#10b981" },
    { name: "1100-1300", value: 35, color: "#22d3ee" },
    { name: "1400-1600", value: 25, color: "#3b82f6" },
    { name: "1700-1900", value: 15, color: "#8b5cf6" },
    { name: "2000+", value: 7, color: "#f43f5e" },
  ]

  const compareUserDifficultyData = [
    { name: "800-1000", value: 48, color: "#10b981" },
    { name: "1100-1300", value: 40, color: "#22d3ee" },
    { name: "1400-1600", value: 30, color: "#3b82f6" },
    { name: "1700-1900", value: 20, color: "#8b5cf6" },
    { name: "2000+", value: 18, color: "#f43f5e" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Problem Difficulty Distribution</CardTitle>
        <CardDescription>
          Comparing problem difficulty distribution between {userData.handle} and {compareUserData.handle}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-center text-lg font-medium">{userData.handle}</h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={userDifficultyData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {userDifficultyData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-center text-lg font-medium">{compareUserData.handle}</h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={compareUserDifficultyData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {compareUserDifficultyData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
