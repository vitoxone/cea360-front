import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-teal-600 text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              No tienes que hacer este camino solo
            </h2>
            <p className="mx-auto max-w-[700px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Únete a nuestra comunidad de familias y cuidadores comprometidos con el bienestar y desarrollo de niños,
              niñas y adolescentes con autismo.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link href="/register">
              <Button size="lg" className="bg-white text-teal-600 hover:bg-teal-50">
                Registrarse Gratis
              </Button>
            </Link>
            <Link href="/contacto">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-teal-700">
                Contactar a un Especialista
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
