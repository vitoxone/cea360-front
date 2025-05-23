"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { LayoutDashboard, FileText, Users, MessageSquare, CreditCard, BarChart, Settings, BookOpen } from "lucide-react"

interface NavItem {
  title: string
  href: string
  icon: React.ReactNode
}

export function AdminNav() {
  const pathname = usePathname()

  const navItems: NavItem[] = [
    {
      title: "Dashboard",
      href: "/admin",
      icon: <LayoutDashboard className="mr-2 h-4 w-4" />,
    },
    {
      title: "Contenido",
      href: "/admin/contenido",
      icon: <FileText className="mr-2 h-4 w-4" />,
    },
    {
      title: "Cursos",
      href: "/admin/cursos",
      icon: <BookOpen className="mr-2 h-4 w-4" />,
    },
    {
      title: "Usuarios",
      href: "/admin/usuarios",
      icon: <Users className="mr-2 h-4 w-4" />,
    },
    {
      title: "Comentarios",
      href: "/admin/comentarios",
      icon: <MessageSquare className="mr-2 h-4 w-4" />,
    },
    {
      title: "Suscripciones",
      href: "/admin/suscripciones",
      icon: <CreditCard className="mr-2 h-4 w-4" />,
    },
    {
      title: "Estadísticas",
      href: "/admin/estadisticas",
      icon: <BarChart className="mr-2 h-4 w-4" />,
    },
    {
      title: "Configuración",
      href: "/admin/configuracion",
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
