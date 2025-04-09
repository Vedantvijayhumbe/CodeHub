import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function TopRatedUsers() {
  const users = [
    {
      id: 1,
      name: "tourist",
      avatar: "/placeholder.svg",
      rating: 3779,
      rank: "Legendary Grandmaster",
      country: "Belarus",
    },
    {
      id: 2,
      name: "Petr",
      avatar: "/placeholder.svg",
      rating: 3602,
      rank: "International Grandmaster",
      country: "Russia",
    },
    {
      id: 3,
      name: "Um_nik",
      avatar: "/placeholder.svg",
      rating: 3559,
      rank: "International Grandmaster",
      country: "Russia",
    },
    {
      id: 4,
      name: "ecnerwala",
      avatar: "/placeholder.svg",
      rating: 3531,
      rank: "International Grandmaster",
      country: "USA",
    },
    {
      id: 5,
      name: "Benq",
      avatar: "/placeholder.svg",
      rating: 3516,
      rank: "International Grandmaster",
      country: "USA",
    },
  ]

  const getRatingColor = (rating) => {
    if (rating < 1200) return "text-gray-500"
    if (rating < 1400) return "text-green-500"
    if (rating < 1600) return "text-cyan-500"
    if (rating < 1900) return "text-blue-500"
    if (rating < 2100) return "text-violet-500"
    if (rating < 2400) return "text-yellow-500"
    if (rating < 3000) return "text-orange-500"
    return "text-red-500"
  }

  return (
    <div className="space-y-4">
      {users.map((user) => (
        <div
          key={user.id}
          className="flex items-center justify-between rounded-md border p-3 transition-colors hover:bg-muted/50"
        >
          <div className="flex items-center space-x-4">
            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-muted text-muted-foreground">
              {user.id}
            </div>
            <Avatar>
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback>{user.name.substring(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{user.name}</p>
              <p className={`text-sm ${getRatingColor(user.rating)}`}>
                {user.rating} • {user.country}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Badge variant="outline">{user.rank}</Badge>
            <Link href={`/codeforces?username=${user.name}`}>
              <Button variant="ghost" size="sm">
                View Profile
              </Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}
