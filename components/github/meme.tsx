"use client"

import { Button } from "@/components/ui/button"
import { DownloadIcon, ShareIcon, RefreshCwIcon } from "lucide-react"
import { useState, useEffect } from "react"

export function GitHubMeme({ userData, compareUserData }) {
  const [memeUrl, setMemeUrl] = useState("/placeholder.svg?height=400&width=500")
  const [loading, setLoading] = useState(false)

  const generateMeme = async () => {
    setLoading(true)

    try {
      // In a real app, you would call a meme generation API
      // For now, we'll just simulate a delay and use a placeholder

      // Determine which template to use based on the comparison
      const template = "181913649" // Drake template
      let topText = ""
      let bottomText = ""

      if (userData.public_repos > compareUserData.public_repos) {
        topText = `${userData.login} with ${userData.public_repos} repos`
        bottomText = `${compareUserData.login} with only ${compareUserData.public_repos} repos`
      } else {
        topText = `${compareUserData.login} with ${compareUserData.public_repos} repos`
        bottomText = `${userData.login} with only ${userData.public_repos} repos`
      }

      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // In a real app, you would set the actual meme URL from the API response
      setMemeUrl("/placeholder.svg?height=400&width=500")
    } catch (error) {
      console.error("Error generating meme:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    generateMeme()
  }, [userData, compareUserData])

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="overflow-hidden rounded-md">
        {loading ? (
          <div className="flex h-[400px] w-[500px] items-center justify-center bg-muted">
            <p>Generating meme...</p>
          </div>
        ) : (
          <img src={memeUrl || "/placeholder.svg"} alt="Generated meme" className="max-h-[400px] w-auto" />
        )}
      </div>
      <div className="flex space-x-2">
        <Button variant="outline" size="sm" onClick={generateMeme} disabled={loading}>
          <RefreshCwIcon className="mr-2 h-4 w-4" />
          Generate New
        </Button>
        <Button variant="outline" size="sm" disabled={loading}>
          <DownloadIcon className="mr-2 h-4 w-4" />
          Save
        </Button>
        <Button size="sm" disabled={loading}>
          <ShareIcon className="mr-2 h-4 w-4" />
          Share
        </Button>
      </div>
    </div>
  )
}
