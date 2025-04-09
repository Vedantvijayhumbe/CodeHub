"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Pie, PieChart, ResponsiveContainer, Tooltip, Legend, Cell } from "recharts"
import { useEffect, useState } from "react"

export function GitHubLanguages({ userData, compareUserData, userLanguages, compareUserLanguages }) {
  const [userLanguagesArray, setUserLanguagesArray] = useState([])
  const [compareUserLanguagesArray, setCompareUserLanguagesArray] = useState([])

  useEffect(() => {
    // Generate colors for the pie chart
    const COLORS = ["#10b981", "#3b82f6", "#8b5cf6", "#f43f5e", "#f59e0b", "#84cc16", "#06b6d4"]

    // Transform the languages object into an array for the pie chart
    if (Object.keys(userLanguages).length > 0) {
      const languagesArray = Object.entries(userLanguages).map(([name, value], index) => ({
        name,
        value,
        color: COLORS[index % COLORS.length],
      }))
      setUserLanguagesArray(languagesArray)
    }

    if (Object.keys(compareUserLanguages).length > 0) {
      const languagesArray = Object.entries(compareUserLanguages).map(([name, value], index) => ({
        name,
        value,
        color: COLORS[index % COLORS.length],
      }))
      setCompareUserLanguagesArray(languagesArray)
    }
  }, [userLanguages, compareUserLanguages])

  // Mock data if we don't have real data
  const mockUserLanguagesArray = [
    { name: "JavaScript", value: 45, color: "#10b981" },
    { name: "TypeScript", value: 30, color: "#3b82f6" },
    { name: "Python", value: 15, color: "#8b5cf6" },
    { name: "HTML", value: 5, color: "#f43f5e" },
    { name: "CSS", value: 5, color: "#f59e0b" },
  ]

  const mockCompareUserLanguagesArray = [
    { name: "C", value: 80, color: "#10b981" },
    { name: "Shell", value: 15, color: "#3b82f6" },
    { name: "Perl", value: 5, color: "#8b5cf6" },
  ]

  const displayUserLanguages = userLanguagesArray.length > 0 ? userLanguagesArray : mockUserLanguagesArray
  const displayCompareUserLanguages =
    compareUserLanguagesArray.length > 0 ? compareUserLanguagesArray : mockCompareUserLanguagesArray

  return (
    <Card>
      <CardHeader>
        <CardTitle>Programming Languages</CardTitle>
        <CardDescription>
          Comparing programming languages used by {userData.login} and {compareUserData.login}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-center text-lg font-medium">{userData.login}</h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={displayUserLanguages}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {displayUserLanguages.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-center text-lg font-medium">{compareUserData.login}</h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={displayCompareUserLanguages}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {displayCompareUserLanguages.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
