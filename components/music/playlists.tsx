import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PlayIcon, PlusIcon } from "lucide-react"

export function MusicPlaylists() {
  const playlists = [
    {
      id: 1,
      name: "Lofi Coding",
      description: "Chill beats to help you focus while coding",
      tracks: 42,
      duration: "3h 15m",
      cover: "/placeholder.svg",
    },
    {
      id: 2,
      name: "Deep Focus",
      description: "Instrumental music for deep work sessions",
      tracks: 35,
      duration: "2h 45m",
      cover: "/placeholder.svg",
    },
    {
      id: 3,
      name: "Ambient Programming",
      description: "Ambient sounds to enhance your coding environment",
      tracks: 28,
      duration: "2h 10m",
      cover: "/placeholder.svg",
    },
    {
      id: 4,
      name: "Electronic Focus",
      description: "Electronic beats to keep you in the flow",
      tracks: 38,
      duration: "2h 55m",
      cover: "/placeholder.svg",
    },
    {
      id: 5,
      name: "Jazz for Coding",
      description: "Smooth jazz to accompany your programming sessions",
      tracks: 32,
      duration: "2h 30m",
      cover: "/placeholder.svg",
    },
    {
      id: 6,
      name: "Classical Concentration",
      description: "Classical music to help you concentrate",
      tracks: 45,
      duration: "3h 30m",
      cover: "/placeholder.svg",
    },
  ]

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {playlists.map((playlist) => (
        <Card key={playlist.id} className="overflow-hidden">
          <div className="aspect-square w-full overflow-hidden">
            <img
              src={playlist.cover || "/placeholder.svg"}
              alt={playlist.name}
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
            <CardTitle className="line-clamp-1">{playlist.name}</CardTitle>
            <CardDescription className="line-clamp-2">{playlist.description}</CardDescription>
          </CardHeader>
          <CardContent className="px-4 pb-2 pt-0">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>{playlist.tracks} tracks</span>
              <span>{playlist.duration}</span>
            </div>
          </CardContent>
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
