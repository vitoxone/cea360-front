import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-teal-50 to-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Acompañamiento integral para familias y cuidadores
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Plataforma centralizada con recursos, comunidad y asesoría especializada para familias de niños, niñas y
                adolescentes con autismo.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/register">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                  Unirse a la Comunidad
                </Button>
              </Link>
              <Link href="/recursos">
                <Button size="lg" variant="outline">
                  Explorar Recursos
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              alt="Terapeuta trabajando con niño con autismo en sesión de terapia"
              className="aspect-video overflow-hidden rounded-xl object-cover object-center"
              height="550"
              src="https://images.unsplash.com/photo-1607962837359-5e7e89f86776?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              width="550"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
