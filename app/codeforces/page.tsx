"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CodeforcesProblemStats } from "@/components/codeforces/problem-stats"
import { CodeforcesTags } from "@/components/codeforces/tags"
import { CodeforcesProblemDifficulty } from "@/components/codeforces/problem-difficulty"
import { CodeforcesMeme } from "@/components/codeforces/meme"
import { CodeforcesTrends } from "@/components/codeforces/trends"
import { format } from "date-fns"
import { fetchCodeforcesUser, fetchCodeforcesSubmissions } from "@/lib/api"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

export default function CodeforcesPage() {
  const [username, setUsername] = useState("")
  const [compareUsername, setCompareUsername] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [userData, setUserData] = useState<any>(null)
  const [compareUserData, setCompareUserData] = useState<any>(null)
  const [userSubmissions, setUserSubmissions] = useState<any>(null)
  const [compareUserSubmissions, setCompareUserSubmissions] = useState<any>(null)

  const fetchUserData = async () => {
    if (!username.trim()) return

    setLoading(true)
    setError(null)

    try {
      const user = await fetchCodeforcesUser(username)
      const submissions = await fetchCodeforcesSubmissions(username)

      setUserData(user)
      setUserSubmissions(submissions)
    } catch (error) {
      console.error("Error fetching user data:", error)
      setError("Failed to fetch Codeforces data. Please check the username and try again.")
    } finally {
      setLoading(false)
    }
  }

  const fetchCompareUserData = async () => {
    if (!compareUsername.trim()) return

    setLoading(true)
    setError(null)

    try {
      const user = await fetchCodeforcesUser(compareUsername)
      const submissions = await fetchCodeforcesSubmissions(compareUsername)

      setCompareUserData(user)
      setCompareUserSubmissions(submissions)
    } catch (error) {
      console.error("Error fetching compare user data:", error)
      setError("Failed to fetch comparison data. Please check the username and try again.")
    } finally {
      setLoading(false)
    }
  }

  const getRatingColor = (rating: number) => {
    if (rating < 1200) return "text-gray-500"
    if (rating < 1400) return "text-green-500"
    if (rating < 1600) return "text-cyan-500"
    if (rating < 1900) return "text-blue-500"
    if (rating < 2100) return "text-violet-500"
    if (rating < 2400) return "text-yellow-500"
    if (rating < 3000) return "text-orange-500"
    return "text-red-500"
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Codeforces Profiles</h1>
        <p className="text-muted-foreground">Compare your Codeforces stats with other programmers</p>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Your Profile</CardTitle>
            <CardDescription>Enter your Codeforces handle</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex space-x-2">
              <Input
                placeholder="Your Codeforces handle"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Button onClick={fetchUserData} disabled={loading || !username}>
                {loading ? "Loading..." : "Fetch"}
              </Button>
            </div>

            {userData && (
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={userData.titlePhoto} alt={userData.handle} />
                    <AvatarFallback>{userData.handle.substring(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-semibold">{userData.handle}</h3>
                    <p className={`font-medium ${getRatingColor(userData.rating)}`}>
                      {userData.rank} ({userData.rating})
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Max: {userData.maxRank} ({userData.maxRating})
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="rounded-lg bg-muted p-3">
                    <p className="text-sm font-medium">Contribution</p>
                    <p className="text-2xl font-bold">{userData.contribution}</p>
                  </div>
                  <div className="rounded-lg bg-muted p-3">
                    <p className="text-sm font-medium">Friends</p>
                    <p className="text-2xl font-bold">{userData.friendOfCount || 0}</p>
                  </div>
                  <div className="rounded-lg bg-muted p-3">
                    <p className="text-sm font-medium">Last Online</p>
                    <p className="text-sm font-medium">
                      {format(new Date(userData.lastOnlineTimeSeconds * 1000), "MMM d, yyyy")}
                    </p>
                  </div>
                  <div className="rounded-lg bg-muted p-3">
                    <p className="text-sm font-medium">Registered</p>
                    <p className="text-sm font-medium">
                      {format(new Date(userData.registrationTimeSeconds * 1000), "MMM d, yyyy")}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Compare With</CardTitle>
            <CardDescription>Enter another Codeforces handle to compare</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex space-x-2">
              <Input
                placeholder="Other Codeforces handle"
                value={compareUsername}
                onChange={(e) => setCompareUsername(e.target.value)}
              />
              <Button onClick={fetchCompareUserData} disabled={loading || !compareUsername}>
                {loading ? "Loading..." : "Fetch"}
              </Button>
            </div>

            {compareUserData && (
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={compareUserData.titlePhoto} alt={compareUserData.handle} />
                    <AvatarFallback>{compareUserData.handle.substring(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-semibold">{compareUserData.handle}</h3>
                    <p className={`font-medium ${getRatingColor(compareUserData.rating)}`}>
                      {compareUserData.rank} ({compareUserData.rating})
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Max: {compareUserData.maxRank} ({compareUserData.maxRating})
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="rounded-lg bg-muted p-3">
                    <p className="text-sm font-medium">Contribution</p>
                    <p className="text-2xl font-bold">{compareUserData.contribution}</p>
                  </div>
                  <div className="rounded-lg bg-muted p-3">
                    <p className="text-sm font-medium">Friends</p>
                    <p className="text-2xl font-bold">{compareUserData.friendOfCount || 0}</p>
                  </div>
                  <div className="rounded-lg bg-muted p-3">
                    <p className="text-sm font-medium">Last Online</p>
                    <p className="text-sm font-medium">
                      {format(new Date(compareUserData.lastOnlineTimeSeconds * 1000), "MMM d, yyyy")}
                    </p>
                  </div>
                  <div className="rounded-lg bg-muted p-3">
                    <p className="text-sm font-medium">Registered</p>
                    <p className="text-sm font-medium">
                      {format(new Date(compareUserData.registrationTimeSeconds * 1000), "MMM d, yyyy")}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {userData && compareUserData && (
        <>
          <Tabs defaultValue="problems" className="space-y-4">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="problems">Problem Stats</TabsTrigger>
              <TabsTrigger value="tags">Tags</TabsTrigger>
              <TabsTrigger value="difficulty">Difficulty</TabsTrigger>
              <TabsTrigger value="trends">Rating Trends</TabsTrigger>
            </TabsList>
            <TabsContent value="problems" className="space-y-4">
              <CodeforcesProblemStats
                userData={userData}
                compareUserData={compareUserData}
                userSubmissions={userSubmissions}
                compareUserSubmissions={compareUserSubmissions}
              />
            </TabsContent>
            <TabsContent value="tags" className="space-y-4">
              <CodeforcesTags
                userData={userData}
                compareUserData={compareUserData}
                userSubmissions={userSubmissions}
                compareUserSubmissions={compareUserSubmissions}
              />
            </TabsContent>
            <TabsContent value="difficulty" className="space-y-4">
              <CodeforcesProblemDifficulty
                userData={userData}
                compareUserData={compareUserData}
                userSubmissions={userSubmissions}
                compareUserSubmissions={compareUserSubmissions}
              />
            </TabsContent>
            <TabsContent value="trends" className="space-y-4">
              <CodeforcesTrends userData={userData} compareUserData={compareUserData} />
            </TabsContent>
          </Tabs>

          <Card>
            <CardHeader>
              <CardTitle>Generated Meme</CardTitle>
              <CardDescription>Based on your comparison with {compareUserData.handle}</CardDescription>
            </CardHeader>
            <CardContent>
              <CodeforcesMeme userData={userData} compareUserData={compareUserData} />
            </CardContent>
          </Card>
        </>
      )}
    </div>
  )
}
