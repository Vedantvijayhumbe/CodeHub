"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from "recharts"
import { useEffect, useState } from "react"

export function GitHubActivity({ userData, compareUserData, userCommits, compareUserCommits }) {
  const [chartData, setChartData] = useState([])

  useEffect(() => {
    if (userCommits.length > 0 && compareUserCommits.length > 0) {
      // Process commits to get weekly activity
      const processCommits = (commits) => {
        // Get the last 8 weeks
        const weeks = []
        const now = new Date()

        for (let i = 7; i >= 0; i--) {
          const weekStart = new Date(now)
          weekStart.setDate(now.getDate() - i * 7)
          weeks.push({
            label: `Week ${8 - i}`,
            start: weekStart,
            end: new Date(weekStart.getTime() + 7 * 24 * 60 * 60 * 1000),
            count: 0,
          })
        }

        // Count commits per week
        commits.forEach((commit) => {
          const commitDate = new Date(commit.timestamp)

          for (const week of weeks) {
            if (commitDate >= week.start && commitDate < week.end) {
              week.count++
              break
            }
          }
        })

        return weeks.map((week) => ({ week: week.label, count: week.count }))
      }

      const userWeeklyActivity = processCommits(userCommits)
      const compareUserWeeklyActivity = processCommits(compareUserCommits)

      // Create chart data
      const data = userWeeklyActivity.map((item, index) => ({
        week: item.week,
        [userData.login]: item.count,
        [compareUserData.login]: compareUserWeeklyActivity[index].count,
      }))

      setChartData(data)
    }
  }, [userCommits, compareUserCommits, userData, compareUserData])

  // If we don't have real data yet, use mock data
  const mockData = [
    {
      week: "Week 1",
      [userData.login]: 12,
      [compareUserData.login]: 18,
    },
    {
      week: "Week 2",
      [userData.login]: 15,
      [compareUserData.login]: 20,
    },
    {
      week: "Week 3",
      [userData.login]: 18,
      [compareUserData.login]: 22,
    },
    {
      week: "Week 4",
      [userData.login]: 17,
      [compareUserData.login]: 24,
    },
    {
      week: "Week 5",
      [userData.login]: 20,
      [compareUserData.login]: 26,
    },
    {
      week: "Week 6",
      [userData.login]: 22,
      [compareUserData.login]: 28,
    },
    {
      week: "Week 7",
      [userData.login]: 24,
      [compareUserData.login]: 30,
    },
    {
      week: "Week 8",
      [userData.login]: 23,
      [compareUserData.login]: 32,
    },
  ]

  const displayData = chartData.length > 0 ? chartData : mockData

  return (
    <Card>
      <CardHeader>
        <CardTitle>Weekly Activity</CardTitle>
        <CardDescription>
          Comparing weekly GitHub activity between {userData.login} and {compareUserData.login}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={displayData}>
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey={userData.login}
                stroke="#10b981"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
              <Line
                type="monotone"
                dataKey={compareUserData.login}
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
