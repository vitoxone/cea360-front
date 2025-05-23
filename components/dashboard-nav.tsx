"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { BookOpen, BadgeIcon as Certificate, MessageSquare, Home, Settings, CreditCard, FileText } from "lucide-react"

interface NavItem {
  title: string
  href: string
  icon: React.ReactNode
}

export function DashboardNav() {
  const pathname = usePathname()

  const navItems: NavItem[] = [
    {
      title: "Inicio",
      href: "/dashboard",
      icon: <Home className="mr-2 h-4 w-4" />,
    },
    {
      title: "Mis Cursos",
      href: "/dashboard/cursos",
      icon: <BookOpen className="mr-2 h-4 w-4" />,
    },
    {
      title: "Certificados",
      href: "/dashboard/certificados",
      icon: <Certificate className="mr-2 h-4 w-4" />,
    },
    {
      title: "Soporte",
      href: "/dashboard/soporte",
      icon: <MessageSquare className="mr-2 h-4 w-4" />,
    },
    {
      title: "Suscripción",
      href: "/dashboard/suscripcion",
      icon: <CreditCard className="mr-2 h-4 w-4" />,
    },
    {
      title: "Recursos",
      href: "/dashboard/recursos",
      icon: <FileText className="mr-2 h-4 w-4" />,
    },
    {
      title: "Configuración",
      href: "/dashboard/configuracion",
      icon: <Settings className="mr-2 h-4 w-4" />,
    },
  ]

  return (
    <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10">
      <div className="flex flex-col gap-2 p-2">
        {navItems.map((item) => (
          <Button
            key={item.href}
            variant={pathname === item.href ? "secondary" : "ghost"}
            size="sm"
            className={cn("justify-start", pathname === item.href && "bg-blue-100 hover:bg-blue-200 text-blue-900")}
            asChild
          >
            <Link href={item.href}>
              {item.icon}
              {item.title}
            </Link>
          </Button>
        ))}
      </div>
    </ScrollArea>
  )
}
