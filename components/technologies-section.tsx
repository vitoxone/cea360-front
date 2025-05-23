import { Card } from "@/components/ui/card"

export function TechnologiesSection() {
  const technologies = [
    {
      name: "Next.js",
      description: "Framework React con App Router para renderizado híbrido",
      icon: "/images/tech/nextjs-icon.svg",
    },
    {
      name: "Tailwind CSS",
      description: "Framework CSS utility-first para diseño rápido y responsivo",
      icon: "/images/tech/tailwind-icon.svg",
    },
    {
      name: "shadcn/ui",
      description: "Componentes de UI reutilizables y accesibles",
      icon: "/images/tech/shadcn-icon.svg",
    },
    {
      name: "Lucide React",
      description: "Biblioteca de iconos SVG para React",
      icon: "/images/tech/lucide-icon.svg",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-700">Infraestructura</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Tecnologías utilizadas</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Construimos CEA360 con tecnologías modernas para garantizar una experiencia rápida, accesible y segura
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
          {technologies.map((tech, index) => (
            <Card key={index} className="flex flex-col items-center p-6 text-center h-full">
              <div className="mb-4 h-16 w-16 flex items-center justify-center rounded-full bg-teal-50">
                {/* Fallback a un icono genérico si la imagen no está disponible */}
                <div className="h-8 w-8 text-teal-600">
                  {tech.name === "Next.js" && (
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 0-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z" />
                    </svg>
                  )}
                  {tech.name === "Tailwind CSS" && (
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
                    </svg>
                  )}
                  {tech.name === "shadcn/ui" && (
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm-1-13v6h2v-6h-2zm0 8v2h2v-2h-2z" />
                    </svg>
                  )}
                  {tech.name === "Lucide React" && (
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  )}
                </div>
              </div>
              <h3 className="text-xl font-bold">{tech.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{tech.description}</p>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-muted-foreground">
            Nuestro stack tecnológico está diseñado para ofrecer una plataforma rápida, accesible y fácil de mantener,
            garantizando la mejor experiencia para nuestros usuarios.
          </p>
        </div>
      </div>
    </section>
  )
}
