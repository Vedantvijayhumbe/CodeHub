import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookIcon } from "lucide-react"

export function BookCategories() {
  const categories = [
    {
      id: 1,
      name: "Algorithms",
      count: 45,
      description: "Books about algorithms and data structures",
    },
    {
      id: 2,
      name: "Programming Languages",
      count: 78,
      description: "Books about specific programming languages",
    },
    {
      id: 3,
      name: "Software Architecture",
      count: 32,
      description: "Books about software design and architecture",
    },
    {
      id: 4,
      name: "Web Development",
      count: 56,
      description: "Books about web development and frameworks",
    },
    {
      id: 5,
      name: "DevOps",
      count: 28,
      description: "Books about DevOps practices and tools",
    },
    {
      id: 6,
      name: "Machine Learning",
      count: 42,
      description: "Books about machine learning and AI",
    },
    {
      id: 7,
      name: "Database Systems",
      count: 35,
      description: "Books about database design and management",
    },
    {
      id: 8,
      name: "Computer Science",
      count: 64,
      description: "Books about computer science fundamentals",
    },
  ]

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {categories.map((category) => (
        <Card key={category.id}>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">{category.name}</CardTitle>
            <CardDescription>{category.count} books</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="line-clamp-2 text-sm text-muted-foreground">{category.description}</p>
            <Button className="mt-4 w-full" variant="outline">
              <BookIcon className="mr-2 h-4 w-4" />
              Browse Category
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
