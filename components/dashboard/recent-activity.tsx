import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function RecentActivity() {
  const activities = [
    {
      id: 1,
      user: {
        name: "John Doe",
        image: "/placeholder.svg",
        initials: "JD",
      },
      action: "solved",
      problem: "Two Sum",
      difficulty: "Easy",
      platform: "LeetCode",
      time: "2 hours ago",
    },
    {
      id: 2,
      user: {
        name: "John Doe",
        image: "/placeholder.svg",
        initials: "JD",
      },
      action: "solved",
      problem: "Valid Parentheses",
      difficulty: "Easy",
      platform: "LeetCode",
      time: "5 hours ago",
    },
    {
      id: 3,
      user: {
        name: "John Doe",
        image: "/placeholder.svg",
        initials: "JD",
      },
      action: "participated in",
      problem: "Codeforces Round #835",
      difficulty: "",
      platform: "Codeforces",
      time: "1 day ago",
    },
    {
      id: 4,
      user: {
        name: "John Doe",
        image: "/placeholder.svg",
        initials: "JD",
      },
      action: "solved",
      problem: "Merge Intervals",
      difficulty: "Medium",
      platform: "LeetCode",
      time: "2 days ago",
    },
    {
      id: 5,
      user: {
        name: "John Doe",
        image: "/placeholder.svg",
        initials: "JD",
      },
      action: "solved",
      problem: "LRU Cache",
      difficulty: "Medium",
      platform: "LeetCode",
      time: "3 days ago",
    },
  ]

  return (
    <div className="space-y-8">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={activity.user.image} alt={activity.user.name} />
            <AvatarFallback>{activity.user.initials}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">
              {activity.user.name} <span className="text-muted-foreground">{activity.action}</span>{" "}
              <span className="font-medium">{activity.problem}</span>
            </p>
            <div className="flex items-center gap-2 pt-1">
              {activity.difficulty && (
                <Badge
                  variant="outline"
                  className={
                    activity.difficulty === "Easy"
                      ? "border-green-500 text-green-500"
                      : activity.difficulty === "Medium"
                        ? "border-yellow-500 text-yellow-500"
                        : "border-red-500 text-red-500"
                  }
                >
                  {activity.difficulty}
                </Badge>
              )}
              <Badge variant="secondary">{activity.platform}</Badge>
              <p className="text-xs text-muted-foreground">{activity.time}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
