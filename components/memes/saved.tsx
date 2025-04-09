import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DownloadIcon, ShareIcon, TrashIcon } from "lucide-react"

export function SavedMemes() {
  const savedMemes = [
    {
      id: 1,
      title: "When the code works on the first try",
      image: "/placeholder.svg",
      template: "Success Kid",
      created: "2023-08-15",
    },
    {
      id: 2,
      title: "One does not simply write bug-free code",
      image: "/placeholder.svg",
      template: "One Does Not Simply",
      created: "2023-08-20",
    },
    {
      id: 3,
      title: "Me vs the guy she told me not to worry about",
      image: "/placeholder.svg",
      template: "Distracted Boyfriend",
      created: "2023-08-25",
    },
    {
      id: 4,
      title: "Expanding brain: coding solutions",
      image: "/placeholder.svg",
      template: "Expanding Brain",
      created: "2023-09-01",
    },
  ]

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {savedMemes.map((meme) => (
        <Card key={meme.id} className="overflow-hidden">
          <div className="aspect-square w-full overflow-hidden">
            <img
              src={meme.image || "/placeholder.svg"}
              alt={meme.title}
              className="h-full w-full object-cover transition-all hover:scale-105"
            />
          </div>
          <CardHeader className="p-4">
            <CardTitle className="text-base">{meme.title}</CardTitle>
            <p className="text-sm text-muted-foreground">
              Template: {meme.template} • Created: {meme.created}
            </p>
          </CardHeader>
          <CardFooter className="flex justify-between p-4">
            <Button variant="outline" size="sm">
              <DownloadIcon className="mr-2 h-4 w-4" />
              Download
            </Button>
            <Button variant="outline" size="sm">
              <ShareIcon className="mr-2 h-4 w-4" />
              Share
            </Button>
            <Button variant="outline" size="sm">
              <TrashIcon className="mr-2 h-4 w-4" />
              Delete
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
