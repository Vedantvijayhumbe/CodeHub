import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function FriendsList() {
  const friends = [
    {
      id: 1,
      name: "Chirag Shirsath",
      username: "@chirag_shirsath",
      image: "/placeholder.svg",
      initials: "CS",
      problemsSolved: 342,
      rating: 1387,
      streak: 12,
    },
    {
      id: 2,
      name: "Rohan Patiala",
      username: "@rohan_droid7341",
      image: "/placeholder.svg",
      initials: "RP",
      problemsSolved: 98,
      rating: 1142,
      streak: 5,
    },
    {
      id: 3,
      name: "lil Rushil ",
      username: "@Rushild25",
      image: "/placeholder.svg",
      initials: "RD",
      problemsSolved: 203,
      rating: 1176,
      streak: 21,
    },
    {
      id: 4,
      name: "Aditya 2pac",
      username: "@Aditya-s45",
      image: "/placeholder.svg",
      initials: "BBC",
      problemsSolved: 87,
      rating: 1254,
      streak: 3,
    },
  ]

  return (
    <div className="space-y-4">
      {friends.map((friend) => (
        <div key={friend.id} className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src={friend.image} alt={friend.name} />
              <AvatarFallback>{friend.initials}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium leading-none">{friend.name}</p>
              <p className="text-sm text-muted-foreground">{friend.username}</p>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <div className="text-center">
              <p className="text-sm font-medium">{friend.problemsSolved}</p>
              <p className="text-xs text-muted-foreground">Problems</p>
            </div>
            <div className="text-center">
              <p className="text-sm font-medium">{friend.rating}</p>
              <p className="text-xs text-muted-foreground">Rating</p>
            </div>
            <div className="text-center">
              <p className="text-sm font-medium">{friend.streak} days</p>
              <p className="text-xs text-muted-foreground">Streak</p>
            </div>
          </div>
          <Link href={`/compare?friend=${friend.id}`}>
            <Button variant="outline" size="sm">
              Compare
            </Button>
          </Link>
        </div>
      ))}
    </div>
  )
}
