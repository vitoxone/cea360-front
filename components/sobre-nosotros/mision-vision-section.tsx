export function MisionVisionSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-teal-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-700">Propósito</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Misión y Visión</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">Nuestro compromiso con la comunidad TEA</p>
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="h-16 w-16 rounded-full bg-teal-100 flex items-center justify-center mb-4">
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
                className="h-8 w-8 text-teal-600"
              >
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Nuestra Misión</h3>
            <p className="text-muted-foreground">
              Ser un puente efectivo entre las familias y los profesionales especializados en TEA, facilitando el acceso
              a información confiable, recursos prácticos y una comunidad de apoyo que acompañe en cada etapa del
              camino.
            </p>
            <p className="text-muted-foreground mt-4">
              Democratizamos el acceso a herramientas y conocimientos especializados, para que la ubicación geográfica o
              los recursos económicos no sean una barrera para recibir apoyo de calidad.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="h-16 w-16 rounded-full bg-teal-100 flex items-center justify-center mb-4">
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
                className="h-8 w-8 text-teal-600"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="m16 10-4 4-4-4" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Nuestra Visión</h3>
            <p className="text-muted-foreground">
              Crear una comunidad latinoamericana unida, informada y acompañada, donde cada familia con miembros con TEA
              tenga acceso a los recursos, el apoyo y la orientación que necesita para desarrollar todo su potencial.
            </p>
            <p className="text-muted-foreground mt-4">
              Aspiramos a transformar la experiencia de las familias, pasando del aislamiento y la desinformación a una
              red de contención profesional y humana que potencie el desarrollo y la calidad de vida de las personas con
              TEA.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
