"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageCircle, X, Send } from "lucide-react"

export function ChatBotWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState<{ text: string; sender: "bot" | "user" }[]>([
    {
      text: "¡Hola! Soy el asistente virtual de CEA360 disponible 24/7. ¿En qué puedo ayudarte hoy?",
      sender: "bot",
    },
  ])
  const [isTyping, setIsTyping] = useState(false)

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
    autismo:
      "El autismo o TEA es un trastorno del neurodesarrollo que afecta la comunicación social y puede incluir patrones repetitivos de comportamiento. En CEA360 ofrecemos recursos especializados para familias y cuidadores.",
    recursos:
      "Contamos con guías, videos, plantillas visuales y materiales descargables para apoyar el desarrollo de personas con TEA. Puedes encontrarlos en la sección 'Recursos' de nuestra web.",
  }

  const handleSendMessage = () => {
    if (!message.trim()) return

    // Agregar mensaje del usuario
    const newMessages = [...messages, { text: message, sender: "user" }]
    setMessages(newMessages)
    setMessage("")
    setIsTyping(true)

    // Simular respuesta del bot
    setTimeout(() => {
      let botResponse = "Lo siento, no tengo información sobre eso. ¿Puedo ayudarte con algo más?"

      // Buscar palabras clave en el mensaje del usuario
      const userInput = message.toLowerCase()
      for (const [keyword, response] of Object.entries(botResponses)) {
        if (userInput.includes(keyword)) {
          botResponse = response
          break
        }
      }

      setMessages([...newMessages, { text: botResponse, sender: "bot" }])
      setIsTyping(false)
    }, 1000)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <Button
          onClick={() => setIsOpen(true)}
          className="h-14 w-14 rounded-full bg-teal-600 hover:bg-teal-700 shadow-lg"
          aria-label="Abrir chat con asistente virtual"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="sr-only">Abrir chat</span>
        </Button>
      ) : (
        <Card className="w-80 shadow-lg" role="dialog" aria-labelledby="chat-title">
          <CardHeader className="bg-teal-600 text-white p-4 flex flex-row justify-between items-center">
            <CardTitle className="text-lg" id="chat-title">
              Asistente CEA360
            </CardTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-white"
              aria-label="Cerrar chat"
            >
              <X className="h-5 w-5" />
              <span className="sr-only">Cerrar</span>
            </Button>
          </CardHeader>
          <CardContent className="p-4 h-80 overflow-y-auto">
            <div className="space-y-4" role="log" aria-live="polite">
              {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-lg px-4 py-2 ${
                      msg.sender === "user" ? "bg-teal-600 text-white" : "bg-gray-100"
                    }`}
                  >
                    <p>{msg.text}</p>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] rounded-lg bg-gray-100 px-4 py-2">
                    <p className="animate-pulse">Escribiendo...</p>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
          <CardFooter className="p-4 border-t">
            <div className="flex w-full items-center space-x-2">
              <Input
                placeholder="Escribe tu mensaje..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1"
                aria-label="Mensaje para el asistente"
              />
              <Button
                size="icon"
                onClick={handleSendMessage}
                disabled={!message.trim()}
                className="bg-teal-600 hover:bg-teal-700"
                aria-label="Enviar mensaje"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Enviar</span>
              </Button>
            </div>
          </CardFooter>
        </Card>
      )}
    </div>
  )
}
