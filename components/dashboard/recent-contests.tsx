import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CalendarIcon, ClockIcon, ExternalLinkIcon } from "lucide-react"
import { format, addDays } from "date-fns"

export function RecentContests() {
  const contests = [
    {
      id: 1,
      name: "Codeforces Round #835 (Div. 2)",
      platform: "Codeforces",
      date: addDays(new Date(), 2),
      duration: "2 hours",
      url: "https://codeforces.com",
    },
    {
      id: 2,
      name: "LeetCode Weekly Contest 345",
      platform: "LeetCode",
      date: addDays(new Date(), 4),
      duration: "1.5 hours",
      url: "https://leetcode.com",
    },
    {
      id: 3,
      name: "AtCoder Beginner Contest 321",
      platform: "AtCoder",
      date: addDays(new Date(), 5),
      duration: "2 hours",
      url: "https://atcoder.jp",
    },
    {
      id: 4,
      name: "Google Kickstart Round F",
      platform: "Google",
      date: addDays(new Date(), 7),
      duration: "3 hours",
      url: "https://codingcompetitions.withgoogle.com",
    },
  ]

  return (
    <div className="space-y-4">
      {contests.map((contest) => (
        <Card key={contest.id}>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">{contest.name}</CardTitle>
              <Badge>{contest.platform}</Badge>
            </div>
            <CardDescription>Upcoming Contest</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2">
              <div className="flex items-center">
                <CalendarIcon className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>{format(contest.date, "MMMM d, yyyy")}</span>
              </div>
              <div className="flex items-center">
                <ClockIcon className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>{contest.duration}</span>
              </div>
              <Button size="sm" className="mt-2 w-full sm:w-auto">
                <ExternalLinkIcon className="mr-2 h-4 w-4" />
                Register
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
