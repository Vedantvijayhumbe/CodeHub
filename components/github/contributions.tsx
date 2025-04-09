"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from "recharts"
import { useEffect, useState } from "react"

export function GitHubContributions({ userData, compareUserData, userCommits, compareUserCommits }) {
  const [chartData, setChartData] = useState([])

  useEffect(() => {
    if (userCommits.length > 0 && compareUserCommits.length > 0) {
      // Process commits to get monthly contribution counts
      const processCommits = (commits) => {
        const monthlyCommits = {
          Jan: 0,
          Feb: 0,
          Mar: 0,
          Apr: 0,
          May: 0,
          Jun: 0,
          Jul: 0,
          Aug: 0,
          Sep: 0,
          Oct: 0,
          Nov: 0,
          Dec: 0,
        }

        commits.forEach((commit) => {
          const date = new Date(commit.timestamp)
          const month = date.toLocaleString("default", { month: "short" })
          monthlyCommits[month]++
        })

        return monthlyCommits
      }

      const userMonthlyCommits = processCommits(userCommits)
      const compareUserMonthlyCommits = processCommits(compareUserCommits)

      // Create chart data
      const data = Object.keys(userMonthlyCommits).map((month) => ({
        month,
        [userData.login]: userMonthlyCommits[month],
        [compareUserData.login]: compareUserMonthlyCommits[month],
      }))

      setChartData(data)
    }
  }, [userCommits, compareUserCommits, userData, compareUserData])

  // If we don't have real data yet, use mock data
  const mockData = [
    {
      month: "Jan",
      [userData.login]: 120,
      [compareUserData.login]: 180,
    },
    {
      month: "Feb",
      [userData.login]: 150,
      [compareUserData.login]: 200,
    },
    {
      month: "Mar",
      [userData.login]: 180,
      [compareUserData.login]: 220,
    },
    {
      month: "Apr",
      [userData.login]: 170,
      [compareUserData.login]: 240,
    },
    {
      month: "May",
      [userData.login]: 200,
      [compareUserData.login]: 260,
    },
    {
      month: "Jun",
      [userData.login]: 220,
      [compareUserData.login]: 280,
    },
    {
      month: "Jul",
      [userData.login]: 240,
      [compareUserData.login]: 300,
    },
    {
      month: "Aug",
      [userData.login]: 230,
      [compareUserData.login]: 320,
    },
    {
      month: "Sep",
      [userData.login]: 250,
      [compareUserData.login]: 340,
    },
    {
      month: "Oct",
      [userData.login]: 270,
      [compareUserData.login]: 360,
    },
    {
      month: "Nov",
      [userData.login]: 290,
      [compareUserData.login]: 380,
    },
    {
      month: "Dec",
      [userData.login]: 310,
      [compareUserData.login]: 400,
    },
  ]

  const displayData = chartData.length > 0 ? chartData : mockData

  return (
    <Card>
      <CardHeader>
        <CardTitle>Contribution Comparison</CardTitle>
        <CardDescription>
          Comparing GitHub contributions between {userData.login} and {compareUserData.login}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={displayData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey={userData.login} fill="#10b981" />
              <Bar dataKey={compareUserData.login} fill="#f43f5e" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
