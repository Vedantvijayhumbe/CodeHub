"use client"

import { useState } from "react"

export function ContributionCalendar() {
  // Mock data for the contribution calendar
  const generateMockData = () => {
    const today = new Date()
    const data = []

    for (let i = 0; i < 365; i++) {
      const date = new Date(today)
      date.setDate(date.getDate() - (364 - i))

      // Generate random contribution count (0-10)
      const count = Math.floor(Math.random() * 11)

      data.push({
        date: date.toISOString().split("T")[0],
        count,
      })
    }

    return data
  }

  const [contributions] = useState(generateMockData())

  // Function to determine the color based on contribution count
  const getColor = (count) => {
    if (count === 0) return "bg-muted"
    if (count < 3) return "bg-emerald-100 dark:bg-emerald-900"
    if (count < 6) return "bg-emerald-300 dark:bg-emerald-700"
    if (count < 9) return "bg-emerald-500 dark:bg-emerald-500"
    return "bg-emerald-700 dark:bg-emerald-300"
  }

  // Group contributions by week
  const weeks = []
  let currentWeek = []

  for (let i = 0; i < contributions.length; i++) {
    const date = new Date(contributions[i].date)
    const dayOfWeek = date.getDay()

    if (dayOfWeek === 0 && currentWeek.length > 0) {
      weeks.push(currentWeek)
      currentWeek = []
    }

    currentWeek.push(contributions[i])

    if (i === contributions.length - 1) {
      weeks.push(currentWeek)
    }
  }

  // Get month labels
  const months = []
  let currentMonth = -1

  for (const contribution of contributions) {
    const date = new Date(contribution.date)
    const month = date.getMonth()

    if (month !== currentMonth) {
      currentMonth = month
      months.push({
        month,
        date,
      })
    }
  }

  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

  return (
    <div className="space-y-4">
      <div className="flex justify-start gap-2 overflow-x-auto pb-2">
        {months.map((item, index) => (
          <div key={index} className="text-xs text-muted-foreground">
            {monthNames[item.month]}
          </div>
        ))}
      </div>

      <div className="flex gap-1 overflow-x-auto pb-4">
        {weeks.map((week, weekIndex) => (
          <div key={weekIndex} className="flex flex-col gap-1">
            {week.map((day, dayIndex) => (
              <div
                key={dayIndex}
                className={`h-3 w-3 rounded-sm ${getColor(day.count)}`}
                title={`${day.date}: ${day.count} contributions`}
              />
            ))}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-end gap-2">
        <div className="text-xs text-muted-foreground">Less</div>
        <div className="h-3 w-3 rounded-sm bg-muted" />
        <div className="h-3 w-3 rounded-sm bg-emerald-100 dark:bg-emerald-900" />
        <div className="h-3 w-3 rounded-sm bg-emerald-300 dark:bg-emerald-700" />
        <div className="h-3 w-3 rounded-sm bg-emerald-500 dark:bg-emerald-500" />
        <div className="h-3 w-3 rounded-sm bg-emerald-700 dark:bg-emerald-300" />
        <div className="text-xs text-muted-foreground">More</div>
      </div>
    </div>
  )
}
