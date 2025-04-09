"use client"

import { Button } from "@/components/ui/button"
import { PlayIcon, PauseIcon, HeartIcon } from "lucide-react"
import { useState } from "react"

export function MusicFavorites() {
  const [currentlyPlaying, setCurrentlyPlaying] = useState<string | null>(null)

  const favorites = [
    {
      id: "1",
      name: "Lofi Coding",
      artists: [{ name: "Lofi Girl" }],
      album: { name: "Coding Session", images: [{ url: "/placeholder.svg" }] },
      duration_ms: 240000,
      preview_url: "#",
    },
    {
      id: "2",
      name: "Deep Focus",
      artists: [{ name: "Brain.fm" }],
      album: { name: "Concentration", images: [{ url: "/placeholder.svg" }] },
      duration_ms: 180000,
      preview_url: "#",
    },
    {
      id: "3",
      name: "Ambient Programming",
      artists: [{ name: "Code Beats" }],
      album: { name: "Algorithm Sounds", images: [{ url: "/placeholder.svg" }] },
      duration_ms: 210000,
      preview_url: "#",
    },
    {
      id: "4",
      name: "Electronic Focus",
      artists: [{ name: "Productivity" }],
      album: { name: "Deep Work", images: [{ url: "/placeholder.svg" }] },
      duration_ms: 195000,
      preview_url: "#",
    },
    {
      id: "5",
      name: "Jazz for Coding",
      artists: [{ name: "Code Jazz" }],
      album: { name: "Smooth Algorithms", images: [{ url: "/placeholder.svg" }] },
      duration_ms: 225000,
      preview_url: "#",
    },
  ]

  const togglePlay = (id: string) => {
    if (currentlyPlaying === id) {
      setCurrentlyPlaying(null)
    } else {
      setCurrentlyPlaying(id)
    }
  }

  const formatDuration = (ms: number) => {
    const minutes = Math.floor(ms / 60000)
    const seconds = Math.floor((ms % 60000) / 1000)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  return (
    <div className="space-y-2">
      {favorites.map((track) => (
        <div
          key={track.id}
          className="flex items-center justify-between rounded-md border p-3 transition-colors hover:bg-muted/50"
        >
          <div className="flex items-center space-x-3">
            <div className="relative h-12 w-12 overflow-hidden rounded">
              <img
                src={track.album.images[0]?.url || "/placeholder.svg"}
                alt={track.album.name}
                className="h-full w-full object-cover"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute inset-0 flex h-full w-full items-center justify-center rounded-none bg-black/60 opacity-0 transition-opacity hover:opacity-100"
                onClick={() => togglePlay(track.id)}
              >
                {currentlyPlaying === track.id ? (
                  <PauseIcon className="h-6 w-6 text-white" />
                ) : (
                  <PlayIcon className="h-6 w-6 text-white" />
                )}
              </Button>
            </div>
            <div>
              <p className="font-medium">{track.name}</p>
              <p className="text-sm text-muted-foreground">{track.artists.map((a) => a.name).join(", ")}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">{formatDuration(track.duration_ms)}</span>
            <Button variant="ghost" size="icon">
              <HeartIcon className="h-4 w-4 fill-current text-red-500" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}
