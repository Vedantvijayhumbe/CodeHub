import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PlusIcon } from "lucide-react"
import Link from "next/link"

export function MemeTemplates() {
  const templates = [
    {
      id: "10-guy",
      name: "10 Guy",
      image: "/placeholder.svg",
      description: "Stoner Stanley / Really High Guy",
    },
    {
      id: "bad-luck-brian",
      name: "Bad Luck Brian",
      image: "/placeholder.svg",
      description: "Bad things happening to an awkward-looking teenager",
    },
    {
      id: "change-my-mind",
      name: "Change My Mind",
      image: "/placeholder.svg",
      description: "Steven Crowder sitting at a table with a sign",
    },
    {
      id: "distracted-boyfriend",
      name: "Distracted Boyfriend",
      image: "/placeholder.svg",
      description: "Man looking at another woman while with his girlfriend",
    },
    {
      id: "drake-hotline-bling",
      name: "Drake Hotline Bling",
      image: "/placeholder.svg",
      description: "Drake approving/disapproving",
    },
    {
      id: "expanding-brain",
      name: "Expanding Brain",
      image: "/placeholder.svg",
      description: "Increasingly complex/absurd ideas with expanding brains",
    },
    {
      id: "one-does-not-simply",
      name: "One Does Not Simply",
      image: "/placeholder.svg",
      description: "Boromir from Lord of the Rings",
    },
    {
      id: "success-kid",
      name: "Success Kid",
      image: "/placeholder.svg",
      description: "Kid with a fist pump expressing success",
    },
  ]

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {templates.map((template) => (
        <Card key={template.id} className="overflow-hidden">
          <div className="aspect-square w-full overflow-hidden">
            <img
              src={template.image || "/placeholder.svg"}
              alt={template.name}
              className="h-full w-full object-cover transition-all hover:scale-105"
            />
          </div>
          <CardHeader className="p-4">
            <CardTitle className="text-base">{template.name}</CardTitle>
            <CardDescription className="line-clamp-2">{template.description}</CardDescription>
          </CardHeader>
          <CardFooter className="p-4">
            <Link href={`/memes?template=${template.id}`} className="w-full">
              <Button variant="outline" className="w-full">
                <PlusIcon className="mr-2 h-4 w-4" />
                Use Template
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
