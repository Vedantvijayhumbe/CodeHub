"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  CodeIcon,
  GithubIcon,
  BookIcon,
  MusicIcon,
  CalendarIcon,
  SmileIcon,
  UsersIcon,
  HomeIcon,
  LogOutIcon,
  SettingsIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function Sidebar() {
  const pathname = usePathname()

  const routes = [
    {
      label: "Home",
      icon: HomeIcon,
      href: "/",
      active: pathname === "/",
    },
    {
      label: "Codeforces",
      icon: CodeIcon,
      href: "/codeforces",
      active: pathname === "/codeforces",
    },
    {
      label: "GitHub",
      icon: GithubIcon,
      href: "/github",
      active: pathname === "/github",
    },
    {
      label: "Books",
      icon: BookIcon,
      href: "/books",
      active: pathname === "/books",
    },
    {
      label: "Music",
      icon: MusicIcon,
      href: "/music",
      active: pathname === "/music",
    },
    {
      label: "Competitions",
      icon: CalendarIcon,
      href: "/competitions",
      active: pathname === "/competitions",
    },
    {
      label: "Memes",
      icon: SmileIcon,
      href: "/memes",
      active: pathname === "/memes",
    },
    {
      label: "Connect",
      icon: UsersIcon,
      href: "/connect",
      active: pathname === "/connect",
    },
  ]

  return (
    <div className="flex h-full w-[70px] flex-col items-center border-r bg-background p-3 md:w-[240px]">
      <Link href="/" className="flex items-center gap-2 py-4">
        <CodeIcon className="h-6 w-6" />
        <span className="hidden text-xl font-bold md:inline-block">CoderHub</span>
      </Link>
      <ScrollArea className="flex-1 w-full">
        <div className="flex flex-col gap-2 pt-4">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "flex h-9 items-center rounded-md px-3 text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                route.active && "bg-accent text-accent-foreground",
              )}
            >
              <route.icon className="h-5 w-5" />
              <span className="hidden md:inline-block md:ml-2">{route.label}</span>
            </Link>
          ))}
        </div>
      </ScrollArea>
      <div className="mt-auto flex w-full flex-col gap-2 pt-4">
        <Link
          href="/settings"
          className="flex h-9 items-center rounded-md px-3 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
        >
          <SettingsIcon className="h-5 w-5" />
          <span className="hidden md:inline-block md:ml-2">Settings</span>
        </Link>
        <Button variant="ghost" className="flex h-9 items-center rounded-md px-3 justify-start">
          <LogOutIcon className="h-5 w-5" />
          <span className="hidden md:inline-block md:ml-2">Logout</span>
        </Button>
      </div>
    </div>
  )
}
