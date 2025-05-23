import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { Clock, Users, Award, Search, Filter, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FormacionPage() {
  // Datos de ejemplo para los cursos
  const cursos = [
    {
      id: 1,
      title: "Fundamentos del Trastorno del Espectro Autista",
      description: "Curso introductorio sobre características, diagnóstico y enfoques de intervención en TEA.",
      image: "/images/tea-course-fundamentals.png",
      duration: "8 semanas",
      students: 324,
      level: "Principiante",
      instructor: "Dra. María Rodríguez",
      price: "Gratuito",
      featured: true,
      category: "Fundamentos",
      rating: 4.8,
    },
    {
      id: 2,
      title: "Estrategias de Comunicación Aumentativa y Alternativa para TEA",
      description: "Implementación de sistemas de CAA para personas con TEA y dificultades de comunicación.",
      image: "/images/tea-course-communication.jpg",
      duration: "6 semanas",
      students: 186,
      level: "Intermedio",
      instructor: "Lic. Carlos Méndez",
      price: "$49.99",
      featured: false,
      category: "Comunicación",
      rating: 4.6,
    },
    {
      id: 3,
      title: "Manejo de Conductas Desafiantes en TEA",
      description: "Análisis funcional de la conducta y estrategias de intervención positiva.",
      image: "/images/tea-course-behavior.jpg",
      duration: "10 semanas",
      students: 253,
      level: "Avanzado",
      instructor: "Dra. María Rodríguez",
      price: "$69.99",
      featured: false,
      category: "Conducta",
      rating: 4.9,
    },
    {
      id: 4,
      title: "Inclusión Educativa: Marco Legal y Estrategias para TEA",
      description: "Normativas de inclusión y adaptaciones curriculares para estudiantes con TEA.",
      image: "/images/tea-course-inclusion.jpg",
      duration: "4 semanas",
      students: 142,
      level: "Intermedio",
      instructor: "Abg. Laura Sánchez",
      price: "$39.99",
      featured: false,
      category: "Educación",
      rating: 4.5,
    },
    {
      id: 5,
      title: "Integración Sensorial en la Vida Diaria con TEA",
      description: "Evaluación e intervención en procesamiento sensorial para personas con TEA.",
      image: "/images/tea-course-sensory.jpg",
      duration: "8 semanas",
      students: 198,
      level: "Intermedio",
      instructor: "Lic. Carlos Méndez",
      price: "$59.99",
      featured: true,
      category: "Sensorial",
      rating: 4.7,
    },
    {
      id: 6,
      title: "Apoyo a Familias: Recursos y Autocuidado para cuidadores de personas con TEA",
      description: "Estrategias de apoyo familiar y prevención del desgaste en cuidadores.",
      image: "/images/tea-course-family.jpg",
      duration: "6 semanas",
      students: 176,
      level: "Principiante",
      instructor: "Lic. Pedro Gómez",
      price: "$29.99",
      featured: false,
      category: "Autocuidado",
      rating: 4.9,
    },
    {
      id: 7,
      title: "Transición a la Vida Adulta para Personas con TEA",
      description: "Estrategias y recursos para apoyar la independencia y autonomía en la adultez.",
      image: "/images/tea-course-adult.jpg",
      duration: "8 semanas",
      students: 132,
      level: "Avanzado",
      instructor: "Dra. Ana Martínez",
      price: "$59.99",
      featured: false,
      category: "Desarrollo",
      rating: 4.6,
    },
    {
      id: 8,
      title: "Habilidades Sociales para Niños y Adolescentes con TEA",
      description: "Técnicas y actividades para desarrollar competencias sociales en diferentes contextos.",
      image: "/images/tea-course-social.jpg",
      duration: "6 semanas",
      students: 215,
      level: "Intermedio",
      instructor: "Prof. Javier López",
      price: "$49.99",
      featured: false,
      category: "Social",
      rating: 4.8,
    },
    {
      id: 9,
      title: "Tecnología Asistiva para Personas con TEA",
      description: "Herramientas tecnológicas y aplicaciones que facilitan la comunicación y el aprendizaje.",
      image: "/images/tea-course-tech.jpg",
      duration: "4 semanas",
      students: 167,
      level: "Principiante",
      instructor: "Ing. Roberto Sánchez",
      price: "$39.99",
      featured: false,
      category: "Tecnología",
      rating: 4.7,
    },
  ]

  // Datos para los filtros actualizados
  const publicoObjetivo = [
    { id: "familias", label: "Familias / Cuidadores" },
    { id: "profesionales", label: "Profesionales (trabajo social, psicología, educación diferencial, derecho)" },
    { id: "docentes", label: "Docentes / Educadores" },
    { id: "personas-tea", label: "Personas con diagnóstico TEA" },
    { id: "adultos-tea", label: "Adultos con TEA" },
  ]

  const areaDisciplinaria = [
    { id: "trabajo-social", label: "Trabajo social" },
    { id: "psicologia", label: "Psicología" },
    { id: "educacion-diferencial", label: "Educación diferencial" },
    { id: "derecho", label: "Derecho y legislación" },
    { id: "salud", label: "Salud y terapias psicología" },
  ]

  const modalidad = [
    { id: "asincronico", label: "Curso online asincrónico (a tu ritmo)" },
    { id: "descargable", label: "Descargable" },
    { id: "en-vivo", label: "Talleres y programas en vivo" },
    { id: "masterclass", label: "Masterclasses" },
  ]

  const duracion = [
    { id: "corto", label: "Corto (menos de 1 hora)" },
    { id: "medio", label: "Medio (2 horas)" },
    { id: "extendido", label: "Extendido (más de 3 horas)" },
  ]

  const tematica = [
    { id: "diagnostico", label: "Diagnóstico y evaluación" },
    { id: "intervencion", label: "Estrategias de intervención" },
    { id: "apoyo-emocional", label: "Apoyo emocional y social cuidadores" },
    { id: "educacion-inclusiva", label: "Educación inclusiva" },
    { id: "derechos", label: "Derechos y legislación" },
    { id: "transicion", label: "Transición a vida adulta" },
    { id: "sexualidad", label: "Sexualidad y autismo" },
    { id: "conductas", label: "Manejo de conductas desafiantes" },
    { id: "autocuidado", label: "Autocuidado familiar" },
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Formación Especializada</h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Cursos diseñados por expertos para mejorar la calidad de vida de personas con autismo
                </p>
              </div>
              <div className="w-full max-w-md space-y-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input type="search" placeholder="Buscar cursos..." className="pl-10 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container px-4 py-12 md:px-6">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {/* Filtros */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">Filtros</h2>
                <Button variant="ghost" size="sm" className="h-8 text-sm">
                  <X className="mr-2 h-3 w-3" />
                  Limpiar
                </Button>
              </div>

              <Accordion type="multiple" defaultValue={["publico", "area", "modalidad", "duracion", "tematica"]}>
                <AccordionItem value="publico">
                  <AccordionTrigger>Público Objetivo</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      {publicoObjetivo.map((item) => (
                        <div key={item.id} className="flex items-center space-x-2">
                          <Checkbox id={`publico-${item.id}`} aria-labelledby={`label-publico-${item.id}`} />
                          <label
                            id={`label-publico-${item.id}`}
                            htmlFor={`publico-${item.id}`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {item.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="area">
                  <AccordionTrigger>Área Disciplinaria</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      {areaDisciplinaria.map((item) => (
                        <div key={item.id} className="flex items-center space-x-2">
                          <Checkbox id={`area-${item.id}`} />
                          <label
                            htmlFor={`area-${item.id}`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {item.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="modalidad">
                  <AccordionTrigger>Modalidad</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      {modalidad.map((item) => (
                        <div key={item.id} className="flex items-center space-x-2">
                          <Checkbox id={`modalidad-${item.id}`} />
                          <label
                            htmlFor={`modalidad-${item.id}`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {item.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="duracion">
                  <AccordionTrigger>Duración</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      {duracion.map((item) => (
                        <div key={item.id} className="flex items-center space-x-2">
                          <Checkbox id={`duracion-${item.id}`} />
                          <label
                            htmlFor={`duracion-${item.id}`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {item.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="tematica">
                  <AccordionTrigger>Temática</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      {tematica.map((item) => (
                        <div key={item.id} className="flex items-center space-x-2">
                          <Checkbox id={`tematica-${item.id}`} />
                          <label
                            htmlFor={`tematica-${item.id}`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {item.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="precio">
                  <AccordionTrigger>Precio</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="precio-gratuito" />
                        <label
                          htmlFor="precio-gratuito"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Solo cursos gratuitos
                        </label>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm">Rango de precio</span>
                          <span className="text-sm font-medium">$0 - $100</span>
                        </div>
                        <Slider defaultValue={[0, 100]} max={100} step={1} />
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="pt-4">
                <Button className="w-full bg-teal-600 hover:bg-teal-700">
                  <Filter className="mr-2 h-4 w-4" />
                  Aplicar Filtros
                </Button>
              </div>
            </div>

            {/* Cursos */}
            <div className="lg:col-span-3">
              <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold">Todos los Cursos</h2>
                  <p className="text-muted-foreground">Mostrando {cursos.length} cursos disponibles</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Ordenar por:</span>
                  <select className="rounded-md border border-input bg-background px-3 py-1 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                    <option value="popular">Más populares</option>
                    <option value="recent">Más recientes</option>
                    <option value="price-low">Precio: Menor a Mayor</option>
                    <option value="price-high">Precio: Mayor a Menor</option>
                    <option value="rating">Mejor calificados</option>
                  </select>
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {cursos.map((curso) => (
                  <Card key={curso.id} className="overflow-hidden h-full flex flex-col">
                    <div className="relative">
                      <img
                        src={curso.image || "/placeholder.svg"}
                        alt={curso.title}
                        width={400}
                        height={200}
                        className="aspect-video w-full object-cover"
                      />
                      {curso.featured && <Badge className="absolute top-2 right-2 bg-teal-600">Destacado</Badge>}
                      <Badge className="absolute top-2 left-2 bg-teal-100 text-teal-800">{curso.category}</Badge>
                    </div>
                    <CardHeader className="p-4">
                      <CardTitle className="line-clamp-2 text-xl">{curso.title}</CardTitle>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <span>{curso.instructor}</span>
                        <span className="ml-auto flex items-center">
                          {curso.rating}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="ml-1 text-yellow-500"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-0 flex-grow">
                      <CardDescription className="line-clamp-3 mb-4">{curso.description}</CardDescription>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <div className="flex items-center text-sm">
                          <Clock className="mr-1 h-4 w-4 text-muted-foreground" />
                          <span>{curso.duration}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Users className="mr-1 h-4 w-4 text-muted-foreground" />
                          <span>{curso.students} estudiantes</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Award className="mr-1 h-4 w-4 text-muted-foreground" />
                          <span>{curso.level}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 border-t flex justify-between items-center">
                      <div className="font-bold text-lg">
                        {curso.price === "Gratuito" ? (
                          <span className="text-green-600">Gratuito</span>
                        ) : (
                          <span>{curso.price}</span>
                        )}
                      </div>
                      <Button className="bg-teal-600 hover:bg-teal-700">
                        {curso.price === "Gratuito" ? "Inscribirse" : "Comprar"}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              <div className="flex justify-center mt-10">
                <Button variant="outline" className="mx-2">
                  Anterior
                </Button>
                <Button variant="outline" className="mx-2">
                  Siguiente
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
