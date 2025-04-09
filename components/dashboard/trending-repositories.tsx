import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { StarIcon, GitForkIcon, EyeIcon, ExternalLinkIcon } from "lucide-react"

export function TrendingRepositories() {
  const repositories = [
    {
      id: 1,
      name: "vercel/next.js",
      description: "The React Framework for the Web",
      language: "JavaScript",
      stars: 98500,
      forks: 23400,
      watchers: 2100,
      url: "https://github.com/vercel/next.js",
    },
    {
      id: 2,
      name: "facebook/react",
      description: "A declarative, efficient, and flexible JavaScript library for building user interfaces",
      language: "JavaScript",
      stars: 196000,
      forks: 41000,
      watchers: 6700,
      url: "https://github.com/facebook/react",
    },
    {
      id: 3,
      name: "microsoft/TypeScript",
      description: "TypeScript is a superset of JavaScript that compiles to clean JavaScript output",
      language: "TypeScript",
      stars: 85000,
      forks: 11000,
      watchers: 2000,
      url: "https://github.com/microsoft/TypeScript",
    },
    {
      id: 4,
      name: "tailwindlabs/tailwindcss",
      description: "A utility-first CSS framework for rapid UI development",
      language: "CSS",
      stars: 62000,
      forks: 3200,
      watchers: 900,
      url: "https://github.com/tailwindlabs/tailwindcss",
    },
  ]

  const formatNumber = (num) => {
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}k`
    }
    return num
  }

  return (
    <div className="space-y-4">
      {repositories.map((repo) => (
        <Card key={repo.id}>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">{repo.name}</CardTitle>
              <Badge>{repo.language}</Badge>
            </div>
            <CardDescription>{repo.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-4">
              <div className="flex items-center">
                <StarIcon className="mr-1 h-4 w-4 text-yellow-500" />
                <span className="text-sm">{formatNumber(repo.stars)}</span>
              </div>
              <div className="flex items-center">
                <GitForkIcon className="mr-1 h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{formatNumber(repo.forks)}</span>
              </div>
              <div className="flex items-center">
                <EyeIcon className="mr-1 h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{formatNumber(repo.watchers)}</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button size="sm" className="ml-auto">
              <ExternalLinkIcon className="mr-2 h-4 w-4" />
              View Repository
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
