export function ImpactoSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-teal-600 text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-white/20 px-3 py-1 text-sm text-white">Resultados</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-white">Nuestro Impacto</h2>
            <p className="max-w-[700px] text-white/80 md:text-xl">
              Transformando vidas a través de conexiones significativas
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-4">
          <div className="flex flex-col items-center text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
            <div className="text-4xl font-bold mb-2">2,500+</div>
            <p className="text-white/80">Familias acompañadas</p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
            <div className="text-4xl font-bold mb-2">350+</div>
            <p className="text-white/80">Especialistas verificados</p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
            <div className="text-4xl font-bold mb-2">95%</div>
            <p className="text-white/80">Satisfacción de usuarios</p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
            <div className="text-4xl font-bold mb-2">12</div>
            <p className="text-white/80">Países alcanzados</p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="max-w-[800px] mx-auto text-white/90 md:text-lg">
            Detrás de cada número hay una historia de transformación. Familias que pasaron de la incertidumbre a la
            confianza, niños y niñas que desarrollaron nuevas habilidades, y profesionales que encontraron una comunidad
            donde compartir su conocimiento y seguir creciendo.
          </p>
        </div>
      </div>
    </section>
  )
}
