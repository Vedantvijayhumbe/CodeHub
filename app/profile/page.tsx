import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { GithubIcon, CodeIcon, TrophyIcon, SettingsIcon } from "lucide-react"
import { ProfileChart } from "@/components/profile/profile-chart"
import { ContributionCalendar } from "@/components/profile/contribution-calendar"

export default function ProfilePage() {
  return (
    <div className="container mx-auto p-4 py-6 space-y-8">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3 space-y-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center space-y-4">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="/placeholder.svg" alt="Profile" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="space-y-1 text-center">
                  <h2 className="text-2xl font-bold">John Doe</h2>
                  <p className="text-muted-foreground">@johndoe</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <SettingsIcon className="mr-2 h-4 w-4" />
                    Edit Profile
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Platforms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <CodeIcon className="h-5 w-5" />
                  <span>Codeforces</span>
                </div>
                <Badge>1423</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <GithubIcon className="h-5 w-5" />
                  <span>GitHub</span>
                </div>
                <Badge>Active</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Achievements</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <TrophyIcon className="h-5 w-5 text-yellow-500" />
                <span>7-Day Streak</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrophyIcon className="h-5 w-5 text-blue-500" />
                <span>100 Problems Solved</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrophyIcon className="h-5 w-5 text-green-500" />
                <span>First Hard Problem</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:w-2/3 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Progress Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <ProfileChart />
            </CardContent>
          </Card>

          <Tabs defaultValue="problems">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="problems">Problems</TabsTrigger>
              <TabsTrigger value="contributions">Contributions</TabsTrigger>
              <TabsTrigger value="stats">Stats</TabsTrigger>
            </TabsList>
            <TabsContent value="problems" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Problem Solving Progress</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Easy</span>
                      <span>45/100</span>
                    </div>
                    <Progress value={45} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Medium</span>
                      <span>32/100</span>
                    </div>
                    <Progress value={32} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Hard</span>
                      <span>12/100</span>
                    </div>
                    <Progress value={12} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="contributions">
              <Card>
                <CardHeader>
                  <CardTitle>GitHub Contributions</CardTitle>
                </CardHeader>
                <CardContent>
                  <ContributionCalendar />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="stats">
              <Card>
                <CardHeader>
                  <CardTitle>Coding Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">Total Problems</p>
                      <p className="text-2xl font-bold">127</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">Current Streak</p>
                      <p className="text-2xl font-bold">7 days</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">Longest Streak</p>
                      <p className="text-2xl font-bold">14 days</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">Contests</p>
                      <p className="text-2xl font-bold">12</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
