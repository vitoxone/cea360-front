"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

export function StarRating() {
  const [rating, setRating] = useState<number>(0)
  const [hover, setHover] = useState<number>(0)
  const [submitted, setSubmitted] = useState<boolean>(false)

  const handleRatingSubmit = () => {
    if (rating > 0) {
      // Aquí se enviaría la calificación a la base de datos
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center space-y-2 rounded-lg bg-blue-50 p-6 text-center">
        <div className="text-2xl font-bold text-blue-700">¡Gracias por tu valoración!</div>
        <p className="text-muted-foreground">Tu opinión nos ayuda a mejorar nuestro contenido.</p>
      </div>
    )
  }

  return (
    <div className="space-y-4 rounded-lg border p-6">
      <div className="flex justify-center">
        {[...Array(5)].map((_, index) => {
          const ratingValue = index + 1
          return (
            <Button
              key={index}
              variant="ghost"
              size="sm"
              className="p-1"
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(0)}
              onClick={() => setRating(ratingValue)}
              aria-label={`${ratingValue} ${ratingValue === 1 ? "estrella" : "estrellas"}`}
              aria-pressed={ratingValue <= rating}
            >
              <Star
                className={`h-8 w-8 ${
                  ratingValue <= (hover || rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                }`}
              />
              <span className="sr-only">{ratingValue} stars</span>
            </Button>
          )
        })}
      </div>
      <div className="text-center text-sm">
        {rating > 0
          ? `Has seleccionado ${rating} ${rating === 1 ? "estrella" : "estrellas"}`
          : "Selecciona una valoración"}
      </div>
      <Button onClick={handleRatingSubmit} disabled={rating === 0} className="w-full">
        Enviar valoración
      </Button>
    </div>
  )
}
