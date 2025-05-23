import { Card } from "@/components/ui/card"
import { Users, BookOpen, Video, MessageCircle, Globe, Heart } from "lucide-react"

export function MainFeaturesSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-700">Nuestra Propuesta</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Una solución integral</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Centralizamos el acceso a herramientas y conocimientos para familias y cuidadores
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <Card className="flex flex-col items-center space-y-2 p-6 shadow-sm">
            <Users className="h-12 w-12 text-teal-600" />
            <h3 className="text-xl font-bold">Comunidad Virtual</h3>
            <p className="text-center text-muted-foreground">
              Conecta con otras familias y cuidadores para compartir experiencias y apoyo mutuo.
            </p>
          </Card>
          <Card className="flex flex-col items-center space-y-2 p-6 shadow-sm">
            <BookOpen className="h-12 w-12 text-teal-600" />
            <h3 className="text-xl font-bold">Recursos Educativos</h3>
            <p className="text-center text-muted-foreground">
              Material adaptado y herramientas prácticas para el desarrollo y aprendizaje.
            </p>
          </Card>
          <Card className="flex flex-col items-center space-y-2 p-6 shadow-sm">
            <Video className="h-12 w-12 text-teal-600" />
            <h3 className="text-xl font-bold">Cápsulas Informativas</h3>
            <p className="text-center text-muted-foreground">
              Videos cortos con información clave sobre autismo, estrategias y recomendaciones.
            </p>
          </Card>
          <Card className="flex flex-col items-center space-y-2 p-6 shadow-sm">
            <MessageCircle className="h-12 w-12 text-teal-600" />
            <h3 className="text-xl font-bold">Asesoría Especializada</h3>
            <p className="text-center text-muted-foreground">
              Orientación personalizada con profesionales expertos en diferentes áreas.
            </p>
          </Card>
          <Card className="flex flex-col items-center space-y-2 p-6 shadow-sm">
            <Globe className="h-12 w-12 text-teal-600" />
            <h3 className="text-xl font-bold">Acceso Descentralizado</h3>
            <p className="text-center text-muted-foreground">
              Acceso centralizado a recursos y especialistas sin importar tu ubicación geográfica.
            </p>
          </Card>
          <Card className="flex flex-col items-center space-y-2 p-6 shadow-sm">
            <Heart className="h-12 w-12 text-teal-600" />
            <h3 className="text-xl font-bold">Bienestar Integral</h3>
            <p className="text-center text-muted-foreground">
              Recursos para reducir la sobrecarga y mejorar la calidad de vida de cuidadores.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
