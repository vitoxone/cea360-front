import { Card, CardContent } from "@/components/ui/card"

export function SpecialistsSection() {
  const specialists = [
    {
      name: "Dra. María Rodríguez",
      role: "Psicóloga especialista en autismo",
      description:
        "Especializada en diagnóstico temprano e intervención conductual para niños y adolescentes con autismo.",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      name: "Lic. Carlos Méndez",
      role: "Terapeuta Ocupacional",
      description:
        "Experto en integración sensorial y desarrollo de habilidades para la vida diaria en niños con autismo.",
      image:
        "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    },
    {
      name: "Abg. Laura Sánchez",
      role: "Abogada especialista en educación inclusiva",
      description: "Asesora legal en derechos educativos y acceso a servicios para personas con autismo.",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    },
    {
      name: "Lic. Pedro Gómez",
      role: "Trabajador Social",
      description:
        "Especialista en coordinación de recursos comunitarios y apoyo familiar para personas con autismo y sus cuidadores.",
      image:
        "https://images.unsplash.com/photo-1562788869-4ed32648eb72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-teal-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-700">
              Equipo Profesional
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Especialistas comprometidos</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Contamos con un equipo multidisciplinario para brindar asesoría integral a familias y cuidadores
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
          {specialists.map((specialist, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-square w-full overflow-hidden">
                <img
                  src={specialist.image || "/placeholder.svg"}
                  alt={specialist.name}
                  className="h-full w-full object-cover transition-all hover:scale-105"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="text-xl font-bold">{specialist.name}</h3>
                <p className="text-sm text-teal-600 font-medium">{specialist.role}</p>
                <p className="mt-2 text-sm text-muted-foreground">{specialist.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
