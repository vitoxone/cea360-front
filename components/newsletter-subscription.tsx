"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"

export function NewsletterSubscription() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return

    setIsSubmitting(true)

    // Simulación de envío de formulario
    setTimeout(() => {
      setIsSubmitting(false)
      setEmail("")

      toast({
        title: "¡Suscripción exitosa!",
        description: "Gracias por suscribirte a nuestro boletín mensual.",
        action: <ToastAction altText="Cerrar">Cerrar</ToastAction>,
      })
    }, 1500)
  }

  return (
    <div className="w-full bg-teal-50 py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Mantente informado</h2>
          <p className="text-muted-foreground max-w-[600px]">
            Suscríbete a nuestro boletín mensual y recibe los últimos artículos, investigaciones y recursos sobre TEA
          </p>
          <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col gap-2 sm:flex-row">
            <Input
              type="email"
              placeholder="Tu correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              aria-label="Correo electrónico para suscripción"
              className="flex-1"
            />
            <Button type="submit" disabled={isSubmitting} className="bg-teal-600 hover:bg-teal-700">
              {isSubmitting ? "Procesando..." : "Suscribirme"}
            </Button>
          </form>
          <p className="text-xs text-muted-foreground">
            Al suscribirte, aceptas recibir nuestro boletín mensual. Puedes darte de baja en cualquier momento.
          </p>
        </div>
      </div>
    </div>
  )
}
