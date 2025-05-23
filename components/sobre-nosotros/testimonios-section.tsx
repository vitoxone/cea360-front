import { Card, CardContent } from "@/components/ui/card"
import { QuoteIcon } from "lucide-react"

export function TestimoniosSection() {
  const testimonios = [
    {
      quote:
        "Después de meses de búsqueda, CEA360 nos conectó con la terapeuta perfecta para mi hijo. La diferencia ha sido notable, no solo en su desarrollo sino en la tranquilidad que sentimos como familia al tener orientación clara.",
      author: "Marcela Jiménez",
      role: "Madre de Matías, 6 años",
      image:
        "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    },
    {
      quote:
        "Como padre soltero, me sentía completamente perdido después del diagnóstico de mi hija. Los grupos de apoyo de CEA360 me dieron un espacio donde aprender de otras familias y sentirme comprendido por primera vez.",
      author: "Daniel Morales",
      role: "Padre de Valentina, 8 años",
      image:
        "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1748&q=80",
    },
    {
      quote:
        "Vivo en una zona rural donde no hay especialistas en autismo. Gracias a las consultas virtuales de CEA360, mi hijo recibe terapia de calidad sin tener que viajar horas. Ha sido un cambio de vida para toda nuestra familia.",
      author: "Lucía Ramírez",
      role: "Madre de Sebastián, 5 años",
      image:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-teal-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-700">Testimonios</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Historias que inspiran</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Familias que han encontrado en CEA360 un camino de esperanza y resultados
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-3">
          {testimonios.map((testimonio, index) => (
            <Card key={index} className="relative overflow-hidden">
              <CardContent className="p-6">
                <QuoteIcon className="h-8 w-8 text-teal-200 absolute top-4 right-4" />
                <p className="mb-4 text-muted-foreground italic relative z-10">"{testimonio.quote}"</p>
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonio.image || "/placeholder.svg"}
                    alt={testimonio.author}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-medium">{testimonio.author}</h4>
                    <p className="text-sm text-muted-foreground">{testimonio.role}</p>
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
