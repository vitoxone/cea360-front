import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-teal-600 text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Sé parte de nuestra comunidad</h2>
            <p className="mx-auto max-w-[700px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Juntos podemos construir un camino más claro y esperanzador para las familias que viven con TEA
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 max-w-[600px]">
            <div className="flex flex-col items-center space-y-2 rounded-lg bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold">Para Familias</h3>
              <p className="text-white/80 text-sm">
                Únete a una comunidad que entiende tus desafíos y celebra tus logros. Accede a recursos, especialistas
                verificados y apoyo emocional.
              </p>
              <Link href="/register" className="w-full mt-4">
                <Button size="lg" className="w-full bg-white text-teal-600 hover:bg-teal-50">
                  Registrarse como Familia
                </Button>
              </Link>
            </div>

            <div className="flex flex-col items-center space-y-2 rounded-lg bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold">Para Especialistas</h3>
              <p className="text-white/80 text-sm">
                Forma parte de una red de profesionales comprometidos con la excelencia. Comparte tu conocimiento y
                amplía tu impacto.
              </p>
              <Link href="/especialistas/registro" className="w-full mt-4">
                <Button size="lg" className="w-full bg-white text-teal-600 hover:bg-teal-50">
                  Unirse como Especialista
                </Button>
              </Link>
            </div>
          </div>

          <p className="mt-8 text-white/80 max-w-[600px]">
            "Cada familia que se une, cada especialista que comparte su conocimiento, cada historia de éxito que se
            cuenta, nos acerca más a nuestra visión: un mundo donde el diagnóstico de TEA abra puertas en lugar de
            cerrarlas."
          </p>
          <p className="font-medium">— Yannina Orellana, Fundadora de CEA360</p>
        </div>
      </div>
    </section>
  )
}
