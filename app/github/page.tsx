"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { GitHubContributions } from "@/components/github/contributions"
import { GitHubRepositories } from "@/components/github/repositories"
import { GitHubLanguages } from "@/components/github/languages"
import { GitHubMeme } from "@/components/github/meme"
import { GitHubActivity } from "@/components/github/activity"
import { format } from "date-fns"
import { fetchGitHubUser, fetchGitHubCommits, fetchGitHubRepos, fetchGitHubLanguages } from "@/lib/api"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

export default function GitHubPage() {
  const [username, setUsername] = useState("")
  const [compareUsername, setCompareUsername] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [userData, setUserData] = useState<any>(null)
  const [compareUserData, setCompareUserData] = useState<any>(null)
  const [userCommits, setUserCommits] = useState<any[]>([])
  const [compareUserCommits, setCompareUserCommits] = useState<any[]>([])
  const [userRepos, setUserRepos] = useState<any[]>([])
  const [compareUserRepos, setCompareUserRepos] = useState<any[]>([])
  const [userLanguages, setUserLanguages] = useState<Record<string, number>>({})
  const [compareUserLanguages, setCompareUserLanguages] = useState<Record<string, number>>({})

  const fetchUserData = async () => {
    if (!username.trim()) return

    setLoading(true)
    setError(null)

    try {
      const user = await fetchGitHubUser(username)
      const commits = await fetchGitHubCommits(username)
      const repos = await fetchGitHubRepos(username)
      const languages = await fetchGitHubLanguages(username)

      setUserData(user)
      setUserCommits(commits || [])
      setUserRepos(repos || [])
      setUserLanguages(languages || {})
    } catch (error) {
      console.error("Error fetching GitHub data:", error)
      setError("Failed to fetch GitHub data. Please check the username and try again.")
    } finally {
      setLoading(false)
    }
  }

  const fetchCompareUserData = async () => {
    if (!compareUsername.trim()) return

    setLoading(true)
    setError(null)

    try {
      const user = await fetchGitHubUser(compareUsername)
      const commits = await fetchGitHubCommits(compareUsername)
      const repos = await fetchGitHubRepos(compareUsername)
      const languages = await fetchGitHubLanguages(compareUsername)

      setCompareUserData(user)
      setCompareUserCommits(commits || [])
      setCompareUserRepos(repos || [])
      setCompareUserLanguages(languages || {})
    } catch (error) {
      console.error("Error fetching compare GitHub data:", error)
      setError("Failed to fetch comparison data. Please check the username and try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">GitHub Profiles</h1>
        <p className="text-muted-foreground">Compare your GitHub stats with other programmers</p>
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
            <CardDescription>Enter your GitHub username</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex space-x-2">
              <Input
                placeholder="Your GitHub username"
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
                    <AvatarImage src={userData.avatar_url} alt={userData.login} />
                    <AvatarFallback>{userData.login.substring(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-semibold">{userData.name}</h3>
                    <p className="text-sm text-muted-foreground">@{userData.login}</p>
                    <p className="text-sm">{userData.bio}</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div className="rounded-lg bg-muted p-3">
                    <p className="text-sm font-medium">Repositories</p>
                    <p className="text-2xl font-bold">{userData.public_repos}</p>
                  </div>
                  <div className="rounded-lg bg-muted p-3">
                    <p className="text-sm font-medium">Followers</p>
                    <p className="text-2xl font-bold">{userData.followers}</p>
                  </div>
                  <div className="rounded-lg bg-muted p-3">
                    <p className="text-sm font-medium">Following</p>
                    <p className="text-2xl font-bold">{userData.following}</p>
                  </div>
                </div>

                <div className="rounded-lg bg-muted p-3">
                  <p className="text-sm font-medium">Member since</p>
                  <p className="text-sm">{format(new Date(userData.created_at), "MMMM d, yyyy")}</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Compare With</CardTitle>
            <CardDescription>Enter another GitHub username to compare</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex space-x-2">
              <Input
                placeholder="Other GitHub username"
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
                    <AvatarImage src={compareUserData.avatar_url} alt={compareUserData.login} />
                    <AvatarFallback>{compareUserData.login.substring(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-semibold">{compareUserData.name}</h3>
                    <p className="text-sm text-muted-foreground">@{compareUserData.login}</p>
                    <p className="text-sm">{compareUserData.bio}</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div className="rounded-lg bg-muted p-3">
                    <p className="text-sm font-medium">Repositories</p>
                    <p className="text-2xl font-bold">{compareUserData.public_repos}</p>
                  </div>
                  <div className="rounded-lg bg-muted p-3">
                    <p className="text-sm font-medium">Followers</p>
                    <p className="text-2xl font-bold">{compareUserData.followers}</p>
                  </div>
                  <div className="rounded-lg bg-muted p-3">
                    <p className="text-sm font-medium">Following</p>
                    <p className="text-2xl font-bold">{compareUserData.following}</p>
                  </div>
                </div>

                <div className="rounded-lg bg-muted p-3">
                  <p className="text-sm font-medium">Member since</p>
                  <p className="text-sm">{format(new Date(compareUserData.created_at), "MMMM d, yyyy")}</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {userData && compareUserData && (
        <>
          <Tabs defaultValue="contributions" className="space-y-4">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="contributions">Contributions</TabsTrigger>
              <TabsTrigger value="repositories">Repositories</TabsTrigger>
              <TabsTrigger value="languages">Languages</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
            </TabsList>
            <TabsContent value="contributions" className="space-y-4">
              <GitHubContributions
                userData={userData}
                compareUserData={compareUserData}
                userCommits={userCommits}
                compareUserCommits={compareUserCommits}
              />
            </TabsContent>
            <TabsContent value="repositories" className="space-y-4">
              <GitHubRepositories
                userData={userData}
                compareUserData={compareUserData}
                userRepos={userRepos}
                compareUserRepos={compareUserRepos}
              />
            </TabsContent>
            <TabsContent value="languages" className="space-y-4">
              <GitHubLanguages
                userData={userData}
                compareUserData={compareUserData}
                userLanguages={userLanguages}
                compareUserLanguages={compareUserLanguages}
              />
            </TabsContent>
            <TabsContent value="activity" className="space-y-4">
              <GitHubActivity
                userData={userData}
                compareUserData={compareUserData}
                userCommits={userCommits}
                compareUserCommits={compareUserCommits}
              />
            </TabsContent>
          </Tabs>

          <Card>
            <CardHeader>
              <CardTitle>Generated Meme</CardTitle>
              <CardDescription>Based on your comparison with {compareUserData.login}</CardDescription>
            </CardHeader>
            <CardContent>
              <GitHubMeme userData={userData} compareUserData={compareUserData} />
            </CardContent>
          </Card>
        </>
      )}
    </div>
  )
}
