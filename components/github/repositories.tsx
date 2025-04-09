"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { StarIcon, GitForkIcon, ExternalLinkIcon } from "lucide-react"

export function GitHubRepositories({ userData, compareUserData, userRepos, compareUserRepos }) {
  const formatNumber = (num) => {
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}k`
    }
    return num
  }

  // Use real data if available, otherwise use mock data
  const displayUserRepos =
    userRepos.length > 0
      ? userRepos
      : [
          {
            id: 1,
            name: "awesome-project",
            description: "A collection of awesome things",
            language: "JavaScript",
            stargazers_count: 120,
            forks_count: 45,
            html_url: "https://github.com/octocat/awesome-project",
          },
          {
            id: 2,
            name: "react-components",
            description: "Reusable React components",
            language: "TypeScript",
            stargazers_count: 85,
            forks_count: 32,
            html_url: "https://github.com/octocat/react-components",
          },
          {
            id: 3,
            name: "algorithms",
            description: "Common algorithms and data structures",
            language: "Python",
            stargazers_count: 65,
            forks_count: 28,
            html_url: "https://github.com/octocat/algorithms",
          },
        ]

  const displayCompareUserRepos =
    compareUserRepos.length > 0
      ? compareUserRepos
      : [
          {
            id: 1,
            name: "linux",
            description: "Linux kernel source tree",
            language: "C",
            stargazers_count: 138000,
            forks_count: 45000,
            html_url: "https://github.com/torvalds/linux",
          },
          {
            id: 2,
            name: "subsurface-for-dirk",
            description: "Subsurface divelog program",
            language: "C++",
            stargazers_count: 850,
            forks_count: 320,
            html_url: "https://github.com/torvalds/subsurface-for-dirk",
          },
          {
            id: 3,
            name: "test-tlb",
            description: "TLB testing",
            language: "C",
            stargazers_count: 650,
            forks_count: 280,
            html_url: "https://github.com/torvalds/test-tlb",
          },
        ]

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>{userData.login}'s Top Repositories</CardTitle>
          <CardDescription>Most popular repositories by stars</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {displayUserRepos.map((repo) => (
            <div
              key={repo.id}
              className="flex flex-col space-y-2 rounded-md border p-3 transition-colors hover:bg-muted/50"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-medium">{repo.name}</h3>
                <Badge>{repo.language}</Badge>
              </div>
              <p className="text-sm text-muted-foreground">{repo.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex space-x-4">
                  <div className="flex items-center">
                    <StarIcon className="mr-1 h-4 w-4 text-yellow-500" />
                    <span className="text-sm">{formatNumber(repo.stargazers_count)}</span>
                  </div>
                  <div className="flex items-center">
                    <GitForkIcon className="mr-1 h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{formatNumber(repo.forks_count)}</span>
                  </div>
                </div>
                <Button variant="ghost" size="sm" onClick={() => window.open(repo.html_url, "_blank")}>
                  <ExternalLinkIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{compareUserData.login}'s Top Repositories</CardTitle>
          <CardDescription>Most popular repositories by stars</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {displayCompareUserRepos.map((repo) => (
            <div
              key={repo.id}
              className="flex flex-col space-y-2 rounded-md border p-3 transition-colors hover:bg-muted/50"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-medium">{repo.name}</h3>
                <Badge>{repo.language}</Badge>
              </div>
              <p className="text-sm text-muted-foreground">{repo.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex space-x-4">
                  <div className="flex items-center">
                    <StarIcon className="mr-1 h-4 w-4 text-yellow-500" />
                    <span className="text-sm">{formatNumber(repo.stargazers_count)}</span>
                  </div>
                  <div className="flex items-center">
                    <GitForkIcon className="mr-1 h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{formatNumber(repo.forks_count)}</span>
                  </div>
                </div>
                <Button variant="ghost" size="sm" onClick={() => window.open(repo.html_url, "_blank")}>
                  <ExternalLinkIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
