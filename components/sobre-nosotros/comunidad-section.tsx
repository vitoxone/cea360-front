export function ComunidadSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[400px_1fr] lg:gap-12 xl:grid-cols-[500px_1fr] items-center">
          <div className="flex items-center justify-center">
            <img
              alt="Grupo de apoyo para padres de niños con autismo"
              className="aspect-video overflow-hidden rounded-xl object-cover object-center"
              height="400"
              src="https://images.unsplash.com/photo-1573497019236-61f12a24c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              width="500"
            />
          </div>

          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-700">Comunidad</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Juntos somos más fuertes</h2>
              <p className="text-muted-foreground md:text-xl">
                Creamos espacios de encuentro, aprendizaje y apoyo mutuo
              </p>
            </div>

            <div className="space-y-4 text-muted-foreground">
              <p>
                En CEA360 entendemos que el camino del autismo no es solo sobre terapias y diagnósticos, sino también
                sobre conexiones humanas y apoyo emocional. Por eso, hemos desarrollado diversas actividades que
                fortalecen nuestra comunidad:
              </p>

              <div className="grid gap-4 md:grid-cols-2 mt-4">
                <div className="flex items-start space-x-3">
                  <div className="h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
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
                      className="h-5 w-5 text-teal-600"
                    >
                      <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Talleres virtuales</h3>
                    <p className="text-sm text-muted-foreground">
                      Sesiones prácticas con especialistas sobre temas específicos del TEA
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
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
                      className="h-5 w-5 text-teal-600"
                    >
                      <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                      <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Grupos de apoyo</h3>
                    <p className="text-sm text-muted-foreground">
                      Espacios seguros para compartir experiencias y recibir contención emocional
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
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
                      className="h-5 w-5 text-teal-600"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Encuentros virtuales</h3>
                    <p className="text-sm text-muted-foreground">
                      Espacios online para compartir experiencias y fortalecer vínculos
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
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
                      className="h-5 w-5 text-teal-600"
                    >
                      <path d="m7 11 2-2-2-2" />
                      <path d="M11 13h4" />
                      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Cápsulas educativas</h3>
                    <p className="text-sm text-muted-foreground">
                      Contenido breve y práctico sobre estrategias y recursos para el día a día
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
