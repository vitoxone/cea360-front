"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Send } from "lucide-react"

type Message = {
  id: number
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

export function ChatbotUI() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "¡Hola! Soy el asistente virtual de CEA360. ¿En qué puedo ayudarte hoy?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Respuestas predefinidas para el chatbot
  const botResponses: Record<string, string> = {
    hola: "¡Hola! ¿En qué puedo ayudarte hoy?",
    ayuda:
      "Puedo ayudarte con información sobre cursos, certificados, suscripciones o soporte técnico. ¿Qué necesitas saber?",
    cursos:
      "Ofrecemos diversos cursos sobre comunicación, manejo del estrés, estimulación sensorial y más. Puedes explorarlos en la sección 'Cursos' del menú principal.",
    certificado:
      "Los certificados se generan automáticamente al completar un curso. Puedes acceder a ellos desde la sección 'Certificados' en tu dashboard.",
    suscripción:
      "Tenemos planes gratuitos y premium. El plan premium desbloquea todos los cursos avanzados y recursos. Puedes ver más detalles en la sección 'Planes'.",
    contraseña:
      "Para recuperar tu contraseña, ve a la página de inicio de sesión y haz clic en '¿Olvidaste tu contraseña?'. Recibirás instrucciones en tu correo.",
    contacto: "Puedes contactarnos directamente usando el formulario en esta página o escribiendo a soporte@cea360.com",
    gracias: "¡De nada! Estoy aquí para ayudarte. ¿Hay algo más en lo que pueda asistirte?",
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = () => {
    if (!input.trim()) return

    // Agregar mensaje del usuario
    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: "user",
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    // Simular respuesta del bot
    setTimeout(() => {
      let botResponse = "Lo siento, no tengo información sobre eso. ¿Puedo ayudarte con algo más?"

      // Buscar palabras clave en el mensaje del usuario
      const userInput = input.toLowerCase()
      for (const [keyword, response] of Object.entries(botResponses)) {
        if (userInput.includes(keyword)) {
          botResponse = response
          break
        }
      }

      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponse,
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
      setIsTyping(false)
    }, 1000)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  return (
    <div className="flex h-[400px] flex-col rounded-lg border bg-background" aria-label="Chat con asistente virtual">
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[80%] rounded-lg px-4 py-2 ${
                  message.sender === "user" ? "bg-blue-600 text-white" : "bg-muted"
                }`}
                aria-label={`Mensaje de ${message.sender === "user" ? "usuario" : "asistente"}`}
              >
                <p>{message.text}</p>
                <p className="mt-1 text-right text-xs opacity-70">
                  {message.timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="max-w-[80%] rounded-lg bg-muted px-4 py-2">
                <p className="animate-pulse" aria-live="polite">
                  Escribiendo...
                </p>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </ScrollArea>
      <div className="flex items-center gap-2 border-t p-4">
        <Input
          placeholder="Escribe tu mensaje..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1"
          aria-label="Mensaje para el asistente"
        />
        <Button size="icon" onClick={handleSendMessage} disabled={!input.trim()} aria-label="Enviar mensaje">
          <Send className="h-4 w-4" />
          <span className="sr-only">Enviar mensaje</span>
        </Button>
      </div>
    </div>
  )
}
