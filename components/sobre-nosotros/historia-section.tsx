export function HistoriaSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-700">
                Nuestra Historia
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">De la necesidad nace la solución</h2>
              <p className="text-muted-foreground md:text-xl">
                CEA360 nace de la experiencia personal de Yannina Orellana, madre de tres hijos, dos de ellos con
                diagnóstico de autismo.
              </p>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Cuando León y Gaspar fueron diagnosticados con autismo, Yannina se enfrentó a los desafíos que muchas
                familias conocen bien: la búsqueda incansable de profesionales especializados, información confiable y
                una red de apoyo que entendiera realmente lo que estaba viviendo.
              </p>
              <p>
                "Recuerdo pasar noches enteras investigando, contactando especialistas, y sintiendo que cada paso era
                como navegar en un océano sin mapa. Pensé que si para mí era difícil, ¿cómo sería para familias con
                menos recursos o en zonas alejadas?"
              </p>
              <p>
                Esta reflexión fue la semilla que dio origen a CEA360: una plataforma que centraliza recursos, conecta
                con especialistas verificados y crea una comunidad de apoyo para que ninguna familia tenga que recorrer
                este camino en soledad.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              alt="Madre abrazando a su hijo con autismo en un momento de conexión"
              className="aspect-[4/3] overflow-hidden rounded-xl object-cover object-center"
              height="600"
              src="https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              width="800"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
