import { Card, CardContent } from "@/components/ui/card"
import { QuoteIcon } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Gracias a CEA360 pude conectar con otras madres que entienden exactamente lo que estamos viviendo. Los recursos y la comunidad han sido fundamentales para nuestro día a día con TEA.",
      author: "Carolina Pérez",
      role: "Madre de niño con TEA",
      image: "https://randomuser.me/api/portraits/women/54.jpg",
    },
    {
      quote:
        "La asesoría legal me ayudó a entender los derechos educativos de mi hijo con TEA y a conseguir los apoyos que necesitaba en su escuela. Ha sido un cambio radical para toda la familia.",
      author: "Roberto Sánchez",
      role: "Padre de adolescente con TEA",
      image: "https://randomuser.me/api/portraits/men/76.jpg",
    },
    {
      quote:
        "Como cuidadora de un niño con TEA, siempre me sentía agotada y sin herramientas. Los talleres y recursos de CEA360 me han dado estrategias prácticas y un espacio para cuidar también de mí misma.",
      author: "Ana Martínez",
      role: "Cuidadora principal",
      image: "https://randomuser.me/api/portraits/women/29.jpg",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-700">Testimonios</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Experiencias que inspiran</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Descubre cómo CEA360 ha impactado la vida de familias y cuidadores
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative overflow-hidden">
              <CardContent className="p-6">
                <QuoteIcon className="h-8 w-8 text-teal-200 absolute top-4 right-4" />
                <p className="mb-4 text-muted-foreground italic relative z-10">"{testimonial.quote}"</p>
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.author}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-medium">{testimonial.author}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
