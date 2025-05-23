import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { LinkedinIcon, TwitterIcon } from "lucide-react"
import Link from "next/link"

export function EquipoSection() {
  // Actualizar las imágenes del equipoDirectivo
  const equipoDirectivo = [
    {
      name: "Yannina Orellana",
      role: "Fundadora y Directora",
      description:
        "Madre de León y Gaspar, diagnosticados con TEA. Licenciada en Educación con especialización en Inclusión Educativa.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1588&q=80",
      linkedin: "#",
      twitter: "#",
      especialidad: "Educación Inclusiva",
    },
    {
      name: "Dr. Alejandro Méndez",
      role: "Co-fundador y Director Médico",
      description:
        "Neuropediatra especializado en trastornos del neurodesarrollo con más de 15 años de experiencia en diagnóstico e intervención en TEA.",
      image:
        "https://images.unsplash.com/photo-1622902046580-2b47f47f5471?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      linkedin: "#",
      twitter: "#",
      especialidad: "Neurología Pediátrica",
    },
  ]

  // Actualizar las imágenes de los especialistas
  const especialistas = [
    {
      name: "Dra. Carla Rojas",
      role: "Psicóloga especialista en TEA",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1588&q=80",
      especialidad: "Intervención Conductual",
      linkedin: "#",
    },
    {
      name: "Lic. Roberto Sánchez",
      role: "Trabajador Social",
      image:
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      especialidad: "Apoyo Familiar",
      linkedin: "#",
    },
    {
      name: "Mg. Daniela Torres",
      role: "Educadora Diferencial",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      especialidad: "Adaptaciones Curriculares",
      linkedin: "#",
    },
    {
      name: "Dr. Martín Gutiérrez",
      role: "Psiquiatra Infantil",
      image:
        "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      especialidad: "Neurofarmacología",
      linkedin: "#",
    },
  ]

  // Actualizar las imágenes del equipo de tecnología
  const tecnologia = [
    {
      name: "Ana Martínez",
      role: "Directora de Tecnología",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      especialidad: "Desarrollo Web",
      linkedin: "#",
    },
    {
      name: "Carlos Jiménez",
      role: "Desarrollador Full Stack",
      image:
        "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80",
      especialidad: "Accesibilidad Digital",
      linkedin: "#",
    },
    {
      name: "Laura Vega",
      role: "Diseñadora UX/UI",
      image:
        "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      especialidad: "Diseño Inclusivo",
      linkedin: "#",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-700">Nuestro Equipo</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Las personas detrás de CEA360</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Un equipo multidisciplinario comprometido con la neurodiversidad
            </p>
          </div>
        </div>

        <div className="space-y-16">
          {/* Equipo Directivo */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">Equipo Directivo</h3>
            <div className="grid gap-8 md:grid-cols-2">
              {equipoDirectivo.map((persona, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center bg-white rounded-xl p-6 shadow-sm border border-gray-100 transition-all hover:shadow-md"
                >
                  <div className="relative mb-6">
                    <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-teal-100">
                      <img
                        src={persona.image || "/placeholder.svg"}
                        alt={persona.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <Badge className="absolute bottom-0 right-0 bg-teal-600 text-white">{persona.especialidad}</Badge>
                  </div>
                  <h4 className="text-xl font-bold">{persona.name}</h4>
                  <p className="text-teal-600 font-medium mb-3">{persona.role}</p>
                  <p className="text-muted-foreground text-center mb-4">{persona.description}</p>
                  <div className="flex space-x-2">
                    <Link href={persona.linkedin}>
                      <Button variant="outline" size="icon" className="rounded-full">
                        <LinkedinIcon className="h-4 w-4" />
                        <span className="sr-only">LinkedIn</span>
                      </Button>
                    </Link>
                    <Link href={persona.twitter}>
                      <Button variant="outline" size="icon" className="rounded-full">
                        <TwitterIcon className="h-4 w-4" />
                        <span className="sr-only">Twitter</span>
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Especialistas */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">Especialistas Clínicos</h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {especialistas.map((persona, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center bg-white rounded-xl p-6 shadow-sm border border-gray-100 transition-all hover:shadow-md hover:border-teal-100"
                >
                  <div className="relative mb-4">
                    <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-teal-100">
                      <img
                        src={persona.image || "/placeholder.svg"}
                        alt={persona.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-teal-600 text-white">{persona.especialidad}</Badge>
                    </div>
                  </div>
                  <h4 className="text-lg font-bold mt-4">{persona.name}</h4>
                  <p className="text-sm text-teal-600 mb-3">{persona.role}</p>
                  <Link href={persona.linkedin}>
                    <Button variant="ghost" size="sm" className="rounded-full h-8 w-8 p-0">
                      <LinkedinIcon className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Equipo Tecnología */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">Equipo de Tecnología</h3>
            <div className="grid gap-6 sm:grid-cols-3">
              {tecnologia.map((persona, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center bg-white rounded-xl p-6 shadow-sm border border-gray-100 transition-all hover:shadow-md hover:border-teal-100"
                >
                  <div className="relative mb-4">
                    <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-teal-100">
                      <img
                        src={persona.image || "/placeholder.svg"}
                        alt={persona.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-teal-600 text-white">{persona.especialidad}</Badge>
                    </div>
                  </div>
                  <h4 className="text-lg font-bold mt-4">{persona.name}</h4>
                  <p className="text-sm text-teal-600 mb-3">{persona.role}</p>
                  <Link href={persona.linkedin}>
                    <Button variant="ghost" size="sm" className="rounded-full h-8 w-8 p-0">
                      <LinkedinIcon className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground max-w-[800px] mx-auto">
              Nuestro equipo está formado por profesionales certificados en sus áreas de especialidad, con formación
              específica en TEA y un profundo compromiso con la inclusión y el respeto a la neurodiversidad. Todos
              comparten la visión de crear un mundo más comprensivo y accesible para las personas con autismo y sus
              familias.
            </p>
            <Button className="mt-6 bg-teal-600 hover:bg-teal-700">Únete a Nuestro Equipo</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
