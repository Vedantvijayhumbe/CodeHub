import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { StarIcon, BookmarkIcon } from "lucide-react"

export function BookRecommendations() {
  const books = [
    {
      id: 1,
      title: "Clean Code: A Handbook of Agile Software Craftsmanship",
      author: "Robert C. Martin",
      cover: "/placeholder.svg",
      rating: 4.7,
      categories: ["Software Development", "Programming"],
      description:
        "Even bad code can function. But if code isn't clean, it can bring a development organization to its knees.",
    },
    {
      id: 2,
      title: "The Pragmatic Programmer: Your Journey to Mastery",
      author: "Andrew Hunt, David Thomas",
      cover: "/placeholder.svg",
      rating: 4.8,
      categories: ["Software Development", "Programming"],
      description:
        "The Pragmatic Programmer cuts through the increasing specialization and technicalities of modern software development.",
    },
    {
      id: 3,
      title: "Introduction to Algorithms",
      author: "Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein",
      cover: "/placeholder.svg",
      rating: 4.5,
      categories: ["Algorithms", "Computer Science"],
      description:
        "Some books on algorithms are rigorous but incomplete; others cover masses of material but lack rigor.",
    },
    {
      id: 4,
      title: "Design Patterns: Elements of Reusable Object-Oriented Software",
      author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
      cover: "/placeholder.svg",
      rating: 4.6,
      categories: ["Object-Oriented Programming", "Software Design"],
      description:
        "Capturing a wealth of experience about the design of object-oriented software, four top-notch designers present a catalog of simple and succinct solutions.",
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
            <p className="line-clamp-2 text-sm text-muted-foreground">{book.description}</p>
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
