import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { Calendar, MessageSquare } from "lucide-react"

export default function EspecialistasPage() {
  // Datos de ejemplo para los especialistas
  const especialistas = [
    {
      id: 1,
      name: "Dra. María Rodríguez",
      role: "Psicóloga especialista en autismo",
      description:
        "Especialista en diagnóstico temprano e intervención conductual para niños y adolescentes con autismo. Más de 10 años de experiencia clínica y docente universitaria.",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      areas: ["Diagnóstico", "Intervención Conductual", "Apoyo Familiar"],
      disponible: true,
    },
    {
      id: 2,
      name: "Lic. Carlos Méndez",
      role: "Terapeuta Ocupacional",
      description:
        "Experto en integración sensorial y desarrollo de habilidades para la vida diaria. Formación especializada en modelos de intervención para autismo basados en rutinas y entornos naturales.",
      image:
        "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      areas: ["Integración Sensorial", "Habilidades Funcionales", "Adaptaciones"],
      disponible: true,
    },
    {
      id: 3,
      name: "Abg. Laura Sánchez",
      role: "Abogada especialista en educación inclusiva",
      description:
        "Asesora legal especializada en derechos educativos para personas con autismo. Experiencia en litigios de inclusión escolar y acceso a servicios públicos.",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      areas: ["Derechos Educativos", "Normativa Inclusiva", "Asesoría Legal"],
      disponible: false,
    },
    {
      id: 4,
      name: "Lic. Pedro Gómez",
      role: "Trabajador Social",
      description:
        "Especialista en coordinación de recursos comunitarios y apoyo a familias. Experiencia en programas de transición a la vida adulta y autonomía para personas con TEA.",
      image:
        "https://images.unsplash.com/photo-1562788869-4ed32648eb72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
      areas: ["Apoyo Familiar", "Recursos Comunitarios", "Transición Vital"],
      disponible: true,
    },
    {
      id: 5,
      name: "Dra. Ana Martínez",
      role: "Neuropsicóloga",
      description:
        "Especialista en evaluación neuropsicológica y diseño de intervenciones cognitivas para personas con TEA. Investigadora en funciones ejecutivas y procesamiento de información.",
      image:
        "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      areas: ["Evaluación Cognitiva", "Intervención Neuropsicológica", "Investigación"],
      disponible: true,
    },
    {
      id: 6,
      name: "Prof. Javier López",
      role: "Educador Diferencial",
      description:
        "Experto en adaptaciones curriculares y estrategias pedagógicas para estudiantes con TEA. Consultor educativo para escuelas regulares y especiales.",
      image:
        "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      areas: ["Adaptaciones Curriculares", "Estrategias Pedagógicas", "Consultoría Educativa"],
      disponible: false,
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-40 bg-background">
        <div className="flex h-20 items-center justify-between py-6">
          <MainNav />
          <nav className="flex items-center gap-2">
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Iniciar Sesión
              </Button>
            </Link>
            <Link href="/register">
              <Button size="sm" className="bg-teal-600 hover:bg-teal-700">
                Registrarse
              </Button>
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-teal-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Nuestros Especialistas</h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Profesionales comprometidos con el bienestar y desarrollo de personas con TEA
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="container px-4 py-12 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {especialistas.map((especialista) => (
              <Card key={especialista.id} className="overflow-hidden h-full flex flex-col">
                <div className="aspect-square w-full overflow-hidden">
                  <img
                    src={especialista.image || "/placeholder.svg"}
                    alt={especialista.name}
                    className="h-full w-full object-cover transition-all hover:scale-105"
                  />
                </div>
                <CardHeader className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{especialista.name}</CardTitle>
                      <p className="text-sm text-teal-600 font-medium">{especialista.role}</p>
                    </div>
                    <div
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        especialista.disponible ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                      }`}
                    >
                      {especialista.disponible ? "Disponible" : "No disponible"}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-0 flex-grow">
                  <CardDescription className="mb-4">{especialista.description}</CardDescription>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {especialista.areas.map((area, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center rounded-full bg-teal-50 px-2.5 py-0.5 text-xs font-medium text-teal-700"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-4 border-t flex justify-between">
                  <Button variant="outline" className="w-[48%]">
                    <Calendar className="mr-2 h-4 w-4" />
                    Agendar
                  </Button>
                  <Button className="w-[48%] bg-teal-600 hover:bg-teal-700">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Contactar
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
        <section className="w-full py-12 md:py-24 bg-teal-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold">¿Necesitas una consulta personalizada?</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Nuestro equipo de especialistas está disponible para brindarte orientación específica para tu
                  situación con TEA
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contacto">
                  <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                    Solicitar Consulta
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
