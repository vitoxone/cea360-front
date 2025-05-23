import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function ResourcesSection() {
  const featuredResources = [
    {
      id: 1,
      title: "Guía para la comunicación efectiva",
      type: "guia",
      image:
        "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      description: "Estrategias prácticas para mejorar la comunicación con niños con autismo.",
    },
    {
      id: 2,
      title: "Manejo de crisis sensoriales",
      type: "video",
      image:
        "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      description: "Técnicas para identificar y manejar momentos de sobrecarga sensorial.",
    },
    {
      id: 3,
      title: "Rutinas visuales para el hogar",
      type: "herramienta",
      image:
        "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      description: "Plantillas personalizables para crear horarios y secuencias visuales.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-700">Recursos</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Herramientas para cada etapa</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Centralizamos recursos especializados para facilitar el día a día de familias y cuidadores
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
          {featuredResources.map((resource) => (
            <Card key={resource.id} className="overflow-hidden flex flex-col h-full">
              <div className="relative h-48">
                <img
                  src={resource.image || "/placeholder.svg"}
                  alt={resource.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute top-2 left-2 bg-teal-100 text-teal-800 text-xs font-medium px-2 py-1 rounded-full">
                  {resource.type === "guia" ? "Guía" : resource.type === "video" ? "Video" : "Herramienta"}
                </div>
              </div>
              <CardContent className="flex-grow p-4">
                <h3 className="font-bold text-lg mb-2">{resource.title}</h3>
                <p className="text-muted-foreground text-sm">{resource.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Link href="/recursos">
            <Button className="bg-teal-600 hover:bg-teal-700">Ver Todos los Recursos</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
