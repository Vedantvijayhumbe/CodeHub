import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CodeIcon, TrendingUpIcon, BookIcon, MusicIcon, UsersIcon, CalendarIcon, SmileIcon } from "lucide-react"
import Link from "next/link"
import { RecentContests } from "@/components/dashboard/recent-contests"
import { TopRatedUsers } from "@/components/dashboard/top-rated-users"
import { RecommendedBooks } from "@/components/dashboard/recommended-books"
import { TrendingRepositories } from "@/components/dashboard/trending-repositories"

export default function Home() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Welcome to CoderHub</h1>
        <p className="text-muted-foreground">
          Your all-in-one platform for competitive programming, GitHub stats, music, and more
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Codeforces Rating</CardTitle>
            <CodeIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1842</div>
            <p className="text-xs text-muted-foreground">Expert</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">GitHub Contributions</CardTitle>
            <TrendingUpIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,284</div>
            <p className="text-xs text-muted-foreground">Last year</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Books Read</CardTitle>
            <BookIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">This year</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Connections</CardTitle>
            <UsersIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">+12 this month</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="contests" className="space-y-4">
        <TabsList>
          <TabsTrigger value="contests">
            <CalendarIcon className="mr-2 h-4 w-4" />
            Contests
          </TabsTrigger>
          <TabsTrigger value="users">
            <UsersIcon className="mr-2 h-4 w-4" />
            Top Users
          </TabsTrigger>
          <TabsTrigger value="books">
            <BookIcon className="mr-2 h-4 w-4" />
            Books
          </TabsTrigger>
          <TabsTrigger value="repos">
            <CodeIcon className="mr-2 h-4 w-4" />
            Trending Repos
          </TabsTrigger>
        </TabsList>
        <TabsContent value="contests" className="space-y-4">
          <RecentContests />
        </TabsContent>
        <TabsContent value="users" className="space-y-4">
          <TopRatedUsers />
        </TabsContent>
        <TabsContent value="books" className="space-y-4">
          <RecommendedBooks />
        </TabsContent>
        <TabsContent value="repos" className="space-y-4">
          <TrendingRepositories />
        </TabsContent>
      </Tabs>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-1 md:col-span-2 lg:col-span-2">
          <CardHeader>
            <CardTitle>Featured Meme</CardTitle>
            <CardDescription>Generated based on recent coding trends</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <div className="overflow-hidden rounded-md">
              <img
                src="/placeholder.svg?height=300&width=500"
                alt="Coding meme"
                className="aspect-video object-cover"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Get started with these features</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Link href="/codeforces">
              <Button variant="outline" className="w-full justify-start">
                <CodeIcon className="mr-2 h-4 w-4" />
                Compare Codeforces Stats
              </Button>
            </Link>
            <Link href="/github">
              <Button variant="outline" className="w-full justify-start">
                <TrendingUpIcon className="mr-2 h-4 w-4" />
                Compare GitHub Profiles
              </Button>
            </Link>
            <Link href="/music">
              <Button variant="outline" className="w-full justify-start">
                <MusicIcon className="mr-2 h-4 w-4" />
                Browse Music
              </Button>
            </Link>
            <Link href="/memes">
              <Button variant="outline" className="w-full justify-start">
                <SmileIcon className="mr-2 h-4 w-4" />
                Generate Memes
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
