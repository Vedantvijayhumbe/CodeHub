import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { StarIcon, BookmarkIcon } from "lucide-react"

export function RecommendedBooks() {
  const books = [
    {
      id: 1,
      title: "Clean Code: A Handbook of Agile Software Craftsmanship",
      author: "Robert C. Martin",
      cover: "/placeholder.svg",
      rating: 4.7,
      categories: ["Software Development", "Programming"],
    },
    {
      id: 2,
      title: "The Pragmatic Programmer: Your Journey to Mastery",
      author: "Andrew Hunt, David Thomas",
      cover: "/placeholder.svg",
      rating: 4.8,
      categories: ["Software Development", "Programming"],
    },
    {
      id: 3,
      title: "Introduction to Algorithms",
      author: "Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein",
      cover: "/placeholder.svg",
      rating: 4.5,
      categories: ["Algorithms", "Computer Science"],
    },
    {
      id: 4,
      title: "Design Patterns: Elements of Reusable Object-Oriented Software",
      author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
      cover: "/placeholder.svg",
      rating: 4.6,
      categories: ["Object-Oriented Programming", "Software Design"],
    },
  ]

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {books.map((book) => (
        <Card key={book.id} className="flex flex-col overflow-hidden">
          <div className="aspect-[2/3] w-full overflow-hidden">
            <img
              src={book.cover || "/placeholder.svg"}
              alt={book.title}
              className="h-full w-full object-cover transition-all hover:scale-105"
            />
          </div>
          <CardHeader className="p-4">
            <CardTitle className="line-clamp-1 text-base">{book.title}</CardTitle>
            <CardDescription className="line-clamp-1">{book.author}</CardDescription>
          </CardHeader>
          <CardContent className="px-4 pb-2 pt-0">
            <div className="flex flex-wrap gap-1">
              {book.categories.map((category, index) => (
                <Badge key={index} variant="secondary">
                  {category}
                </Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter className="mt-auto flex items-center justify-between p-4">
            <div className="flex items-center">
              <StarIcon className="mr-1 h-4 w-4 text-yellow-500" />
              <span className="text-sm">{book.rating}</span>
            </div>
            <Button variant="ghost" size="sm">
              <BookmarkIcon className="h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
