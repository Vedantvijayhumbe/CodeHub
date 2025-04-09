"use client"

import { useState, useEffect } from "react"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import {
  PlayIcon,
  PauseIcon,
  SkipBackIcon,
  SkipForwardIcon,
  VolumeIcon,
  Volume2Icon,
  RepeatIcon,
  ShuffleIcon,
} from "lucide-react"

export default function Player() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(70)
  const [isMuted, setIsMuted] = useState(false)
  const [isRepeat, setIsRepeat] = useState(false)
  const [isShuffle, setIsShuffle] = useState(false)

  // Mock current track data
  const currentTrack = {
    title: "Lofi Coding Session",
    artist: "Lofi Girl",
    album: "Coding Beats",
    cover: "/placeholder.svg",
    duration: 240, // in seconds
  }

  useEffect(() => {
    // Simulate progress
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= currentTrack.duration) {
            setIsPlaying(false)
            return 0
          }
          return prev + 1
        })
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [isPlaying, currentTrack.duration])

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  const handleVolumeChange = (value) => {
    setVolume(value[0])
    if (value[0] > 0 && isMuted) {
      setIsMuted(false)
    }
  }

  const handleSeek = (value) => {
    setCurrentTime(value[0])
  }

  return (
    <div className="flex h-20 items-center justify-between border-t bg-background px-4 md:px-6">
      <div className="flex items-center space-x-4">
        <div className="h-12 w-12 overflow-hidden rounded">
          <img
            src={currentTrack.cover || "/placeholder.svg"}
            alt={currentTrack.title}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h3 className="text-sm font-medium">{currentTrack.title}</h3>
          <p className="text-xs text-muted-foreground">{currentTrack.artist}</p>
        </div>
      </div>

      <div className="flex flex-col items-center space-y-1 md:w-1/3">
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" onClick={() => setIsShuffle(!isShuffle)}>
            <ShuffleIcon className={`h-4 w-4 ${isShuffle ? "text-primary" : ""}`} />
          </Button>
          <Button variant="ghost" size="icon">
            <SkipBackIcon className="h-4 w-4" />
          </Button>
          <Button size="icon" className="h-8 w-8 rounded-full" onClick={togglePlay}>
            {isPlaying ? <PauseIcon className="h-4 w-4" /> : <PlayIcon className="h-4 w-4" />}
          </Button>
          <Button variant="ghost" size="icon">
            <SkipForwardIcon className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setIsRepeat(!isRepeat)}>
            <RepeatIcon className={`h-4 w-4 ${isRepeat ? "text-primary" : ""}`} />
          </Button>
        </div>
        <div className="flex w-full items-center space-x-2">
          <span className="text-xs text-muted-foreground">{formatTime(currentTime)}</span>
          <Slider
            value={[currentTime]}
            max={currentTrack.duration}
            step={1}
            onValueChange={handleSeek}
            className="w-full"
          />
          <span className="text-xs text-muted-foreground">{formatTime(currentTrack.duration)}</span>
        </div>
      </div>

      <div className="flex items-center space-x-2 md:w-1/6">
        <Button variant="ghost" size="icon" onClick={toggleMute}>
          {isMuted || volume === 0 ? <VolumeIcon className="h-4 w-4" /> : <Volume2Icon className="h-4 w-4" />}
        </Button>
        <Slider value={[isMuted ? 0 : volume]} max={100} step={1} onValueChange={handleVolumeChange} className="w-20" />
      </div>
    </div>
  )
}
