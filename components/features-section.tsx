import { BookOpen, Award, MessageCircle, Shield, Zap, Users } from "lucide-react"

export function FeaturesSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700">Características</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Todo lo que necesitas en un solo lugar</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              CEA360 ofrece herramientas y recursos diseñados específicamente para cuidadores
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <BookOpen className="h-12 w-12 text-blue-600" />
            <h3 className="text-xl font-bold">Contenido Educativo</h3>
            <p className="text-center text-muted-foreground">
              Artículos, guías y recursos formativos para mejorar tus habilidades como cuidador.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <Award className="h-12 w-12 text-blue-600" />
            <h3 className="text-xl font-bold">Certificaciones</h3>
            <p className="text-center text-muted-foreground">
              Obtén certificados al completar módulos educativos para validar tus conocimientos.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <MessageCircle className="h-12 w-12 text-blue-600" />
            <h3 className="text-xl font-bold">Soporte Inteligente</h3>
            <p className="text-center text-muted-foreground">
              Chatbot especializado para responder tus dudas y orientarte en cualquier momento.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <Shield className="h-12 w-12 text-blue-600" />
            <h3 className="text-xl font-bold">Contenido Premium</h3>
            <p className="text-center text-muted-foreground">
              Accede a recursos avanzados y especializados con nuestra suscripción premium.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <Zap className="h-12 w-12 text-blue-600" />
            <h3 className="text-xl font-bold">Evaluaciones</h3>
            <p className="text-center text-muted-foreground">
              Evalúa tu progreso y comprensión con cuestionarios interactivos.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <Users className="h-12 w-12 text-blue-600" />
            <h3 className="text-xl font-bold">Comunidad</h3>
            <p className="text-center text-muted-foreground">
              Conecta con otros cuidadores para compartir experiencias y apoyo mutuo.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
