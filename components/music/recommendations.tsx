import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PlayIcon, PlusIcon } from "lucide-react"

export function MusicRecommendations() {
  const recommendations = [
    {
      id: 1,
      name: "Coding Focus Mix",
      description: "Personalized mix based on your listening habits",
      cover: "/placeholder.svg",
    },
    {
      id: 2,
      name: "Programming Beats",
      description: "Trending beats popular among programmers",
      cover: "/placeholder.svg",
    },
    {
      id: 3,
      name: "Algorithm Sounds",
      description: "Music inspired by algorithms and data structures",
      cover: "/placeholder.svg",
    },
    {
      id: 4,
      name: "Developer's Playlist",
      description: "Top tracks listened to by developers worldwide",
      cover: "/placeholder.svg",
    },
  ]

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {recommendations.map((recommendation) => (
        <Card key={recommendation.id} className="overflow-hidden">
          <div className="aspect-square w-full overflow-hidden">
            <img
              src={recommendation.cover || "/placeholder.svg"}
              alt={recommendation.name}
              className="h-full w-full object-cover transition-all hover:scale-105"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute inset-0 flex h-full w-full items-center justify-center rounded-none bg-black/60 opacity-0 transition-opacity hover:opacity-100"
            >
              <PlayIcon className="h-12 w-12 text-white" />
            </Button>
          </div>
          <CardHeader className="p-4">
            <CardTitle className="line-clamp-1">{recommendation.name}</CardTitle>
            <CardDescription className="line-clamp-2">{recommendation.description}</CardDescription>
          </CardHeader>
          <CardFooter className="p-4">
            <Button variant="outline" className="w-full">
              <PlusIcon className="mr-2 h-4 w-4" />
              Add to Queue
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
