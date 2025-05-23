"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ChatbotUI } from "@/components/chatbot-ui"

export default function SoportePage() {
  const [message, setMessage] = useState("")
  const [isSending, setIsSending] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim()) return

    setIsSending(true)
    // Simulación de envío de mensaje
    setTimeout(() => {
      setMessage("")
      setIsSending(false)
    }, 1500)
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Soporte</h2>
        <p className="text-muted-foreground">Obtén ayuda y respuestas a tus preguntas</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Asistente Virtual</CardTitle>
            <CardDescription>Nuestro chatbot puede responder preguntas frecuentes y orientarte</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <ChatbotUI />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contacto Directo</CardTitle>
            <CardDescription>Envíanos un mensaje y te responderemos a la brevedad</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Asunto
                </label>
                <Input id="subject" placeholder="Escribe el asunto de tu consulta" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  placeholder="Describe tu consulta en detalle"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="min-h-[150px]"
                  required
                />
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button onClick={handleSubmit} disabled={isSending || !message.trim()} className="w-full">
              {isSending ? "Enviando..." : "Enviar Mensaje"}
            </Button>
          </CardFooter>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Preguntas Frecuentes</CardTitle>
          <CardDescription>Respuestas a las consultas más comunes</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <h3 className="font-medium">¿Cómo puedo obtener un certificado?</h3>
            <p className="text-muted-foreground">
              Los certificados se generan automáticamente al completar un curso. Puedes descargarlos desde la sección
              "Certificados" en tu dashboard.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">¿Cuál es la diferencia entre la cuenta gratuita y premium?</h3>
            <p className="text-muted-foreground">
              La cuenta gratuita te da acceso a contenido básico, mientras que la premium desbloquea todos los cursos
              avanzados, recursos descargables y soporte prioritario.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">¿Puedo cambiar mi plan de suscripción?</h3>
            <p className="text-muted-foreground">
              Sí, puedes actualizar o cancelar tu suscripción en cualquier momento desde la sección "Suscripción" en tu
              dashboard.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">¿Cómo puedo recuperar mi contraseña?</h3>
            <p className="text-muted-foreground">
              En la página de inicio de sesión, haz clic en "¿Olvidaste tu contraseña?" y sigue las instrucciones
              enviadas a tu correo electrónico.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
