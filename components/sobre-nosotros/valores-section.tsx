export function ValoresSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-700">Principios</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Nuestros Valores</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Los principios que guían cada acción en CEA360
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center text-center p-6 bg-teal-50 rounded-xl">
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
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Empatía</h3>
            <p className="text-muted-foreground">
              Nuestro proyecto nace desde la experiencia vivida, por lo que entendemos profundamente los desafíos,
              miedos y esperanzas de cada familia. Cada decisión que tomamos está guiada por la pregunta: ¿cómo nos
              hubiera ayudado esto a nosotros?
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-teal-50 rounded-xl">
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
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                <path d="m7 9 5 3.5L17 9" />
                <path d="m7 15 5-3.5 5 3.5" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Accesibilidad</h3>
            <p className="text-muted-foreground">
              Creemos que el apoyo de calidad debe estar al alcance de todas las familias, sin importar su ubicación
              geográfica, nivel socioeconómico o conocimientos previos. Trabajamos constantemente para eliminar barreras
              y llegar a quienes más lo necesitan.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-teal-50 rounded-xl">
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
                <path d="M12 2l3 7h7l-6 4 3 7-7-4-7 4 3-7-6-4h7l3-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Calidad</h3>
            <p className="text-muted-foreground">
              Nos comprometemos con la excelencia en cada recurso, cada orientación y cada profesional que forma parte
              de nuestra red. Todos los especialistas pasan por un riguroso proceso de verificación, garantizando
              formación específica y experiencia en TEA.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
