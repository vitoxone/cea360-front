import type React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function MainNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <span className="font-bold text-xl inline-block text-teal-600">CEA360</span>
      </Link>
      <nav
        className={cn("flex items-center space-x-6 text-sm font-medium", className)}
        {...props}
        aria-label="Navegación principal"
      >
        <Link href="/recursos" className="transition-colors hover:text-foreground/80 text-foreground/60">
          Recursos
        </Link>
        <Link href="/formacion" className="transition-colors hover:text-foreground/80 text-foreground/60">
          Formación
        </Link>
        <Link href="/especialistas" className="transition-colors hover:text-foreground/80 text-foreground/60">
          Especialistas
        </Link>
        <Link href="/blog" className="transition-colors hover:text-foreground/80 text-foreground/60">
          Blog
        </Link>
        <Link href="/contacto" className="transition-colors hover:text-foreground/80 text-foreground/60">
          Contacto
        </Link>
      </nav>
    </div>
  )
}
