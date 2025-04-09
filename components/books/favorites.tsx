import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { StarIcon, TrashIcon } from "lucide-react"

export function BookFavorites() {
  const books = [
    {
      id: 1,
      title: "Clean Code: A Handbook of Agile Software Craftsmanship",
      author: "Robert C. Martin",
      cover: "/placeholder.svg",
      rating: 4.7,
      categories: ["Software Development", "Programming"],
      dateAdded: "2023-05-15",
    },
    {
      id: 2,
      title: "The Pragmatic Programmer: Your Journey to Mastery",
      author: "Andrew Hunt, David Thomas",
      cover: "/placeholder.svg",
      rating: 4.8,
      categories: ["Software Development", "Programming"],
      dateAdded: "2023-06-22",
    },
    {
      id: 3,
      title: "Introduction to Algorithms",
      author: "Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein",
      cover: "/placeholder.svg",
      rating: 4.5,
      categories: ["Algorithms", "Computer Science"],
      dateAdded: "2023-07-10",
    },
  ]

  return (
    <div className="space-y-4">
      {books.map((book) => (
        <Card key={book.id}>
          <div className="flex flex-col sm:flex-row">
            <div className="aspect-[2/3] w-full max-w-[120px] overflow-hidden sm:h-auto">
              <img src={book.cover || "/placeholder.svg"} alt={book.title} className="h-full w-full object-cover" />
            </div>
            <div className="flex flex-1 flex-col">
              <CardHeader className="p-4">
                <CardTitle className="line-clamp-1">{book.title}</CardTitle>
                <CardDescription>{book.author}</CardDescription>
              </CardHeader>
              <CardContent className="px-4 pb-2 pt-0">
                <div className="flex flex-wrap gap-1">
                  {book.categories.map((category, index) => (
                    <Badge key={index} variant="secondary">
                      {category}
                    </Badge>
                  ))}
                </div>
                <div className="mt-2 flex items-center">
                  <StarIcon className="mr-1 h-4 w-4 text-yellow-500" />
                  <span className="text-sm">{book.rating}</span>
                </div>
              </CardContent>
              <CardFooter className="mt-auto flex items-center justify-between p-4">
                <span className="text-sm text-muted-foreground">Added on {book.dateAdded}</span>
                <Button variant="ghost" size="sm">
                  <TrashIcon className="h-4 w-4" />
                </Button>
              </CardFooter>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
