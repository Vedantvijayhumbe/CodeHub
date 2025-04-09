"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DownloadIcon, ShareIcon, RefreshCwIcon, SmileIcon } from "lucide-react"
import { MemeTemplates } from "@/components/memes/templates"
import { SavedMemes } from "@/components/memes/saved"

export default function MemesPage() {
  const [topText, setTopText] = useState("")
  const [bottomText, setBottomText] = useState("")
  const [selectedTemplate, setSelectedTemplate] = useState("10-guy")
  const [generatedMeme, setGeneratedMeme] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  // Mock templates for demonstration
  const templates = [
    { id: "10-guy", name: "10 Guy" },
    { id: "bad-luck-brian", name: "Bad Luck Brian" },
    { id: "change-my-mind", name: "Change My Mind" },
    { id: "distracted-boyfriend", name: "Distracted Boyfriend" },
    { id: "drake-hotline-bling", name: "Drake Hotline Bling" },
    { id: "expanding-brain", name: "Expanding Brain" },
    { id: "one-does-not-simply", name: "One Does Not Simply" },
    { id: "success-kid", name: "Success Kid" },
    { id: "two-buttons", name: "Two Buttons" },
    { id: "woman-yelling-at-cat", name: "Woman Yelling at Cat" },
  ]

  const generateMeme = async () => {
    if (!topText && !bottomText) return

    setLoading(true)
    try {
      // In a real app, you would fetch from the Meme Generator API
      // const response = await axios.post('https://api.imgflip.com/caption_image', {
      //   template_id: selectedTemplate,
      //   text0: topText,
      //   text1: bottomText,
      //   username: 'your_username',
      //   password: 'your_password'
      // })
      // setGeneratedMeme(response.data.data.url)

      // Using placeholder for demonstration
      setTimeout(() => {
        setGeneratedMeme("/placeholder.svg?height=400&width=500")
        setLoading(false)
      }, 1000)
    } catch (error) {
      console.error("Error generating meme:", error)
      setLoading(false)
    }
  }

  const resetForm = () => {
    setTopText("")
    setBottomText("")
    setGeneratedMeme(null)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Meme Generator</h1>
        <p className="text-muted-foreground">Create programming and coding-related memes to share with friends</p>
      </div>

      <Tabs defaultValue="create" className="space-y-4">
        <TabsList>
          <TabsTrigger value="create">
            <SmileIcon className="mr-2 h-4 w-4" />
            Create Meme
          </TabsTrigger>
          <TabsTrigger value="templates">
            <RefreshCwIcon className="mr-2 h-4 w-4" />
            Templates
          </TabsTrigger>
          <TabsTrigger value="saved">
            <DownloadIcon className="mr-2 h-4 w-4" />
            Saved Memes
          </TabsTrigger>
        </TabsList>
        <TabsContent value="create" className="space-y-4">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Create Your Meme</CardTitle>
                <CardDescription>Fill in the details to generate your meme</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Template
                  </label>
                  <Select value={selectedTemplate} onValueChange={setSelectedTemplate}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a template" />
                    </SelectTrigger>
                    <SelectContent>
                      {templates.map((template) => (
                        <SelectItem key={template.id} value={template.id}>
                          {template.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Top Text
                  </label>
                  <Input placeholder="Enter top text" value={topText} onChange={(e) => setTopText(e.target.value)} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Bottom Text
                  </label>
                  <Input
                    placeholder="Enter bottom text"
                    value={bottomText}
                    onChange={(e) => setBottomText(e.target.value)}
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={resetForm}>
                  Reset
                </Button>
                <Button onClick={generateMeme} disabled={loading || (!topText && !bottomText)}>
                  {loading ? "Generating..." : "Generate Meme"}
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Preview</CardTitle>
                <CardDescription>Your generated meme will appear here</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-center">
                {generatedMeme ? (
                  <div className="overflow-hidden rounded-md">
                    <img
                      src={generatedMeme || "/placeholder.svg"}
                      alt="Generated meme"
                      className="max-h-[400px] w-auto"
                    />
                  </div>
                ) : (
                  <div className="flex h-[300px] w-full items-center justify-center rounded-md border border-dashed">
                    <p className="text-sm text-muted-foreground">
                      {loading ? "Generating meme..." : "Your meme will appear here"}
                    </p>
                  </div>
                )}
              </CardContent>
              {generatedMeme && (
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">
                    <DownloadIcon className="mr-2 h-4 w-4" />
                    Save
                  </Button>
                  <Button size="sm">
                    <ShareIcon className="mr-2 h-4 w-4" />
                    Share
                  </Button>
                </CardFooter>
              )}
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="templates" className="space-y-4">
          <MemeTemplates />
        </TabsContent>
        <TabsContent value="saved" className="space-y-4">
          <SavedMemes />
        </TabsContent>
      </Tabs>
    </div>
  )
}
