"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookmarkIcon, SearchIcon, StarIcon } from "lucide-react"
import { BookRecommendations } from "@/components/books/recommendations"
import { BookCategories } from "@/components/books/categories"
import { BookFavorites } from "@/components/books/favorites"

export default function BooksPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [loading, setLoading] = useState(false)
  const [searchResults, setSearchResults] = useState<any[]>([])

  // Mock data for demonstration
  const mockSearchResults = [
    {
      id: "1",
      volumeInfo: {
        title: "Clean Code: A Handbook of Agile Software Craftsmanship",
        authors: ["Robert C. Martin"],
        publishedDate: "2008-08-01",
        description:
          "Even bad code can function. But if code isn't clean, it can bring a development organization to its knees. Every year, countless hours and significant resources are lost because of poorly written code. But it doesn't have to be that way.",
        imageLinks: {
          thumbnail: "/placeholder.svg",
        },
        categories: ["Computers", "Software Development", "Programming"],
        pageCount: 464,
        averageRating: 4.7,
      },
    },
    {
      id: "2",
      volumeInfo: {
        title: "The Pragmatic Programmer: Your Journey to Mastery",
        authors: ["Andrew Hunt", "David Thomas"],
        publishedDate: "1999-10-30",
        description:
          "The Pragmatic Programmer cuts through the increasing specialization and technicalities of modern software development to examine the core process--taking a requirement and producing working, maintainable code that delights its users.",
        imageLinks: {
          thumbnail: "/placeholder.svg",
        },
        categories: ["Computers", "Software Development", "Programming"],
        pageCount: 352,
        averageRating: 4.8,
      },
    },
    {
      id: "3",
      volumeInfo: {
        title: "Design Patterns: Elements of Reusable Object-Oriented Software",
        authors: ["Erich Gamma", "Richard Helm", "Ralph Johnson", "John Vlissides"],
        publishedDate: "1994-11-10",
        description:
          "Capturing a wealth of experience about the design of object-oriented software, four top-notch designers present a catalog of simple and succinct solutions to commonly occurring design problems.",
        imageLinks: {
          thumbnail: "/placeholder.svg",
        },
        categories: ["Computers", "Object-Oriented Programming", "Software Design"],
        pageCount: 416,
        averageRating: 4.6,
      },
    },
    {
      id: "4",
      volumeInfo: {
        title: "Introduction to Algorithms",
        authors: ["Thomas H. Cormen", "Charles E. Leiserson", "Ronald L. Rivest", "Clifford Stein"],
        publishedDate: "2009-07-31",
        description:
          "Some books on algorithms are rigorous but incomplete; others cover masses of material but lack rigor. Introduction to Algorithms uniquely combines rigor and comprehensiveness.",
        imageLinks: {
          thumbnail: "/placeholder.svg",
        },
        categories: ["Computers", "Algorithms", "Computer Science"],
        pageCount: 1312,
        averageRating: 4.5,
      },
    },
  ]

  const searchBooks = async () => {
    if (!searchQuery.trim()) return

    setLoading(true)
    try {
      // In a real app, you would fetch from the Google Books API
      // const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}+subject:programming`)
      // setSearchResults(response.data.items || [])

      // Using mock data for demonstration
      setTimeout(() => {
        setSearchResults(mockSearchResults)
        setLoading(false)
      }, 500)
    } catch (error) {
      console.error("Error searching books:", error)
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Programming Books</h1>
        <p className="text-muted-foreground">Discover and explore programming books to enhance your skills</p>
      </div>

      <div className="flex space-x-2">
        <div className="relative flex-1">
          <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search programming books..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && searchBooks()}
          />
        </div>
        <Button onClick={searchBooks} disabled={loading || !searchQuery.trim()}>
          Search
        </Button>
      </div>

      {searchResults.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Search Results</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {searchResults.map((book) => (
              <Card key={book.id} className="flex flex-col overflow-hidden">
                <div className="aspect-[2/3] w-full overflow-hidden">
                  <img
                    src={book.volumeInfo.imageLinks?.thumbnail || "/placeholder.svg"}
                    alt={book.volumeInfo.title}
                    className="h-full w-full object-cover transition-all hover:scale-105"
                  />
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="line-clamp-1 text-base">{book.volumeInfo.title}</CardTitle>
                  <CardDescription className="line-clamp-1">
                    {book.volumeInfo.authors?.join(", ") || "Unknown Author"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-4 pb-2 pt-0">
                  <p className="line-clamp-2 text-sm text-muted-foreground">{book.volumeInfo.description}</p>
                </CardContent>
                <CardFooter className="mt-auto flex items-center justify-between p-4">
                  <div className="flex items-center">
                    <StarIcon className="mr-1 h-4 w-4 text-yellow-500" />
                    <span className="text-sm">{book.volumeInfo.averageRating || "N/A"}</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    <BookmarkIcon className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      )}

      <Tabs defaultValue="recommendations" className="space-y-4">
        <TabsList>
          <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
          <TabsTrigger value="categories">Categories</TabsTrigger>
          <TabsTrigger value="favorites">My Favorites</TabsTrigger>
        </TabsList>
        <TabsContent value="recommendations" className="space-y-4">
          <BookRecommendations />
        </TabsContent>
        <TabsContent value="categories" className="space-y-4">
          <BookCategories />
        </TabsContent>
        <TabsContent value="favorites" className="space-y-4">
          <BookFavorites />
        </TabsContent>
      </Tabs>
    </div>
  )
}
