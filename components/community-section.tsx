import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CommunitySection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-teal-50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-700">Comunidad</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Nunca más estarás solo</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Únete a nuestra comunidad de familias y cuidadores donde podrás compartir experiencias, resolver dudas y
                encontrar apoyo emocional en cada etapa del camino.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-5 w-5 text-teal-600"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Grupos de apoyo por edades y necesidades específicas
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-5 w-5 text-teal-600"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Foros moderados por profesionales
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-5 w-5 text-teal-600"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Encuentros virtuales semanales
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-5 w-5 text-teal-600"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Intercambio de recursos y experiencias
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/comunidad">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                  Conocer la Comunidad
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              alt="Grupo de padres en una sesión de apoyo para familias con niños con autismo"
              className="aspect-video overflow-hidden rounded-xl object-cover object-center"
              height="400"
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
              width="500"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
