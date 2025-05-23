import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { Input } from "@/components/ui/input"
import { Search, Download, FileText, BookOpen, Lock } from "lucide-react"

export default function RecursosPage() {
  // Datos de ejemplo para los recursos
  const recursos = [
    {
      id: 1,
      title: "Kit de comunicación visual para niños con autismo",
      type: "kit",
      category: "Comunicación",
      description:
        "Conjunto de 50 pictogramas imprimibles para implementar sistemas de comunicación visual en casa y escuela.",
      image:
        "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      premium: false,
      format: "PDF descargable",
      pages: 25,
      downloads: 1250,
    },
    {
      id: 2,
      title: "Guía completa de manejo conductual en el hogar",
      type: "guia",
      category: "Conducta",
      description:
        "Manual detallado con estrategias prácticas para abordar conductas desafiantes en niños con autismo, incluyendo ejemplos y casos prácticos.",
      image:
        "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      premium: true,
      format: "PDF interactivo",
      pages: 85,
      downloads: 750,
    },
    {
      id: 3,
      title: "Kit de actividades sensoriales para hacer en casa",
      type: "kit",
      category: "Sensorial",
      description:
        "Colección de 30 actividades para regular el procesamiento sensorial, con instrucciones paso a paso e imágenes ilustrativas.",
      image:
        "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      premium: false,
      format: "PDF descargable",
      pages: 40,
      downloads: 980,
    },
    {
      id: 4,
      title: "Guía de derechos educativos para familias",
      type: "guia",
      category: "Legal",
      description:
        "Información detallada sobre leyes de inclusión, procesos de solicitud de apoyos y modelos de cartas para comunicación con instituciones educativas.",
      image:
        "https://images.unsplash.com/photo-1423592707957-3b212afa6733?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
      premium: true,
      format: "PDF con plantillas editables",
      pages: 65,
      downloads: 620,
    },
    {
      id: 5,
      title: "Planificador de transición a la vida adulta",
      type: "kit",
      category: "Desarrollo",
      description:
        "Herramienta completa para planificar la transición a la vida adulta, con evaluaciones, cronogramas y recursos comunitarios.",
      image:
        "https://images.unsplash.com/photo-1560807707-8cc77767d783?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      premium: true,
      format: "PDF interactivo",
      pages: 120,
      downloads: 430,
    },
    {
      id: 6,
      title: "Kit de aprendizaje estructurado - Método TEACCH",
      type: "kit",
      category: "Educación",
      description:
        "Materiales visuales y plantillas para implementar el método TEACCH en casa y escuela, con ejemplos adaptados por edades.",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1622&q=80",
      premium: false,
      format: "PDF descargable",
      pages: 55,
      downloads: 1100,
    },
    {
      id: 7,
      title: "Guía de autocuidado para cuidadores",
      type: "guia",
      category: "Autocuidado",
      description:
        "Manual práctico con estrategias de autocuidado, manejo del estrés y prevención del agotamiento para cuidadores de personas con autismo.",
      image:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      premium: false,
      format: "PDF descargable",
      pages: 35,
      downloads: 1450,
    },
    {
      id: 8,
      title: "Kit de apoyo a la comunicación social",
      type: "kit",
      category: "Social",
      description:
        "Conjunto de herramientas visuales, guiones sociales y actividades para desarrollar habilidades sociales en diferentes contextos.",
      image:
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
      premium: true,
      format: "PDF interactivo con videos complementarios",
      pages: 70,
      downloads: 580,
    },
    {
      id: 9,
      title: "Guía de tecnologías asistivas accesibles",
      type: "guia",
      category: "Tecnología",
      description:
        "Recopilación de aplicaciones, software y dispositivos de bajo costo para apoyar la comunicación y el aprendizaje, con tutoriales de uso.",
      image:
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1120&q=80",
      premium: false,
      format: "PDF con enlaces interactivos",
      pages: 45,
      downloads: 890,
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-40 bg-background">
        <div className="flex h-20 items-center justify-between py-6">
          <MainNav />
          <nav className="flex items-center gap-2">
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Iniciar Sesión
              </Button>
            </Link>
            <Link href="/register">
              <Button size="sm" className="bg-teal-600 hover:bg-teal-700">
                Registrarse
              </Button>
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-teal-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Recursos, Guías PDF y Kits Descargables
                </h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Herramientas prácticas y listas para usar que facilitarán tu día a día con personas con autismo
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Buscar recursos..." className="pl-8 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container px-4 py-12 md:px-6">
          <Tabs defaultValue="todos" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="todos">Todos</TabsTrigger>
                <TabsTrigger value="guias">Guías PDF</TabsTrigger>
                <TabsTrigger value="kits">Kits Descargables</TabsTrigger>
                <TabsTrigger value="gratuitos">Recursos Gratuitos</TabsTrigger>
                <TabsTrigger value="premium">Recursos Premium</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="todos" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {recursos.map((recurso) => (
                  <Card key={recurso.id} className="overflow-hidden h-full">
                    <div className="relative">
                      <img
                        src={recurso.image || "/placeholder.svg"}
                        alt={recurso.title}
                        width={400}
                        height={200}
                        className="aspect-video w-full object-cover"
                      />
                      <div
                        className={`absolute -top-2 -right-2 h-16 w-16 rounded-full flex items-center justify-center ${recurso.premium ? "bg-yellow-400" : "bg-teal-500"}`}
                      >
                        <div className="h-14 w-14 rounded-full bg-white flex items-center justify-center">
                          {recurso.premium ? (
                            <Lock className="h-6 w-6 text-yellow-500" />
                          ) : (
                            <Download className="h-6 w-6 text-teal-500" />
                          )}
                        </div>
                      </div>
                      <div className="absolute top-2 left-2 bg-teal-100 text-teal-800 text-xs font-medium px-2 py-1 rounded-full">
                        {recurso.type === "guia" ? "Guía PDF" : "Kit Descargable"}
                      </div>
                    </div>
                    <CardHeader className="p-4">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-medium bg-gray-100 text-gray-800 rounded-full px-2 py-0.5">
                          {recurso.category}
                        </span>
                        <span className="text-xs text-muted-foreground ml-auto">{recurso.downloads} descargas</span>
                      </div>
                      <CardTitle className="line-clamp-2 text-xl mt-2">{recurso.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <CardDescription className="line-clamp-3 mb-3">{recurso.description}</CardDescription>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <div className="flex items-center mr-4">
                          <FileText className="h-4 w-4 mr-1" />
                          <span>{recurso.format}</span>
                        </div>
                        <div className="flex items-center">
                          <BookOpen className="h-4 w-4 mr-1" />
                          <span>{recurso.pages} páginas</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4">
                      <Button
                        className={`w-full ${recurso.premium ? "bg-yellow-500 hover:bg-yellow-600" : "bg-teal-600 hover:bg-teal-700"}`}
                      >
                        {recurso.premium ? (
                          <>
                            <Lock className="mr-2 h-4 w-4" />
                            Suscríbete al Plan
                          </>
                        ) : (
                          <>
                            <Download className="mr-2 h-4 w-4" />
                            Descargar Gratis
                          </>
                        )}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              <div className="flex justify-center mt-10">
                <Button variant="outline" className="mx-2">
                  Anterior
                </Button>
                <Button variant="outline" className="mx-2">
                  Siguiente
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="guias" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {recursos
                  .filter((recurso) => recurso.type === "guia")
                  .map((recurso) => (
                    <Card key={recurso.id} className="overflow-hidden h-full">
                      <div className="relative">
                        <img
                          src={recurso.image || "/placeholder.svg"}
                          alt={recurso.title}
                          width={400}
                          height={200}
                          className="aspect-video w-full object-cover"
                        />
                        <div
                          className={`absolute -top-2 -right-2 h-16 w-16 rounded-full flex items-center justify-center ${recurso.premium ? "bg-yellow-400" : "bg-teal-500"}`}
                        >
                          <div className="h-14 w-14 rounded-full bg-white flex items-center justify-center">
                            {recurso.premium ? (
                              <Lock className="h-6 w-6 text-yellow-500" />
                            ) : (
                              <Download className="h-6 w-6 text-teal-500" />
                            )}
                          </div>
                        </div>
                        <div className="absolute top-2 left-2 bg-teal-100 text-teal-800 text-xs font-medium px-2 py-1 rounded-full">
                          Guía PDF
                        </div>
                      </div>
                      <CardHeader className="p-4">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-medium bg-gray-100 text-gray-800 rounded-full px-2 py-0.5">
                            {recurso.category}
                          </span>
                          <span className="text-xs text-muted-foreground ml-auto">{recurso.downloads} descargas</span>
                        </div>
                        <CardTitle className="line-clamp-2 text-xl mt-2">{recurso.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <CardDescription className="line-clamp-3 mb-3">{recurso.description}</CardDescription>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <div className="flex items-center mr-4">
                            <FileText className="h-4 w-4 mr-1" />
                            <span>{recurso.format}</span>
                          </div>
                          <div className="flex items-center">
                            <BookOpen className="h-4 w-4 mr-1" />
                            <span>{recurso.pages} páginas</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="p-4">
                        <Button
                          className={`w-full ${recurso.premium ? "bg-yellow-500 hover:bg-yellow-600" : "bg-teal-600 hover:bg-teal-700"}`}
                        >
                          {recurso.premium ? (
                            <>
                              <Lock className="mr-2 h-4 w-4" />
                              Suscríbete al Plan
                            </>
                          ) : (
                            <>
                              <Download className="mr-2 h-4 w-4" />
                              Descargar Gratis
                            </>
                          )}
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="kits" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {recursos
                  .filter((recurso) => recurso.type === "kit")
                  .map((recurso) => (
                    <Card key={recurso.id} className="overflow-hidden h-full">
                      <div className="relative">
                        <img
                          src={recurso.image || "/placeholder.svg"}
                          alt={recurso.title}
                          width={400}
                          height={200}
                          className="aspect-video w-full object-cover"
                        />
                        <div
                          className={`absolute -top-2 -right-2 h-16 w-16 rounded-full flex items-center justify-center ${recurso.premium ? "bg-yellow-400" : "bg-teal-500"}`}
                        >
                          <div className="h-14 w-14 rounded-full bg-white flex items-center justify-center">
                            {recurso.premium ? (
                              <Lock className="h-6 w-6 text-yellow-500" />
                            ) : (
                              <Download className="h-6 w-6 text-teal-500" />
                            )}
                          </div>
                        </div>
                        <div className="absolute top-2 left-2 bg-teal-100 text-teal-800 text-xs font-medium px-2 py-1 rounded-full">
                          Kit Descargable
                        </div>
                      </div>
                      <CardHeader className="p-4">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-medium bg-gray-100 text-gray-800 rounded-full px-2 py-0.5">
                            {recurso.category}
                          </span>
                          <span className="text-xs text-muted-foreground ml-auto">{recurso.downloads} descargas</span>
                        </div>
                        <CardTitle className="line-clamp-2 text-xl mt-2">{recurso.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <CardDescription className="line-clamp-3 mb-3">{recurso.description}</CardDescription>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <div className="flex items-center mr-4">
                            <FileText className="h-4 w-4 mr-1" />
                            <span>{recurso.format}</span>
                          </div>
                          <div className="flex items-center">
                            <BookOpen className="h-4 w-4 mr-1" />
                            <span>{recurso.pages} páginas</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="p-4">
                        <Button
                          className={`w-full ${recurso.premium ? "bg-yellow-500 hover:bg-yellow-600" : "bg-teal-600 hover:bg-teal-700"}`}
                        >
                          {recurso.premium ? (
                            <>
                              <Lock className="mr-2 h-4 w-4" />
                              Suscríbete al Plan
                            </>
                          ) : (
                            <>
                              <Download className="mr-2 h-4 w-4" />
                              Descargar Gratis
                            </>
                          )}
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="gratuitos" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {recursos
                  .filter((recurso) => !recurso.premium)
                  .map((recurso) => (
                    <Card key={recurso.id} className="overflow-hidden h-full">
                      <div className="relative">
                        <img
                          src={recurso.image || "/placeholder.svg"}
                          alt={recurso.title}
                          width={400}
                          height={200}
                          className="aspect-video w-full object-cover"
                        />
                        <div className="absolute -top-2 -right-2 h-16 w-16 rounded-full flex items-center justify-center bg-teal-500">
                          <div className="h-14 w-14 rounded-full bg-white flex items-center justify-center">
                            <Download className="h-6 w-6 text-teal-500" />
                          </div>
                        </div>
                        <div className="absolute top-2 left-2 bg-teal-100 text-teal-800 text-xs font-medium px-2 py-1 rounded-full">
                          {recurso.type === "guia" ? "Guía PDF" : "Kit Descargable"}
                        </div>
                      </div>
                      <CardHeader className="p-4">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-medium bg-gray-100 text-gray-800 rounded-full px-2 py-0.5">
                            {recurso.category}
                          </span>
                          <span className="text-xs text-muted-foreground ml-auto">{recurso.downloads} descargas</span>
                        </div>
                        <CardTitle className="line-clamp-2 text-xl mt-2">{recurso.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <CardDescription className="line-clamp-3 mb-3">{recurso.description}</CardDescription>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <div className="flex items-center mr-4">
                            <FileText className="h-4 w-4 mr-1" />
                            <span>{recurso.format}</span>
                          </div>
                          <div className="flex items-center">
                            <BookOpen className="h-4 w-4 mr-1" />
                            <span>{recurso.pages} páginas</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="p-4">
                        <Button className="w-full bg-teal-600 hover:bg-teal-700">
                          <Download className="mr-2 h-4 w-4" />
                          Descargar Gratis
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="premium" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {recursos
                  .filter((recurso) => recurso.premium)
                  .map((recurso) => (
                    <Card key={recurso.id} className="overflow-hidden h-full">
                      <div className="relative">
                        <img
                          src={recurso.image || "/placeholder.svg"}
                          alt={recurso.title}
                          width={400}
                          height={200}
                          className="aspect-video w-full object-cover"
                        />
                        <div className="absolute -top-2 -right-2 h-16 w-16 rounded-full flex items-center justify-center bg-yellow-400">
                          <div className="h-14 w-14 rounded-full bg-white flex items-center justify-center">
                            <Lock className="h-6 w-6 text-yellow-500" />
                          </div>
                        </div>
                        <div className="absolute top-2 left-2 bg-teal-100 text-teal-800 text-xs font-medium px-2 py-1 rounded-full">
                          {recurso.type === "guia" ? "Guía PDF" : "Kit Descargable"}
                        </div>
                      </div>
                      <CardHeader className="p-4">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-medium bg-gray-100 text-gray-800 rounded-full px-2 py-0.5">
                            {recurso.category}
                          </span>
                          <span className="text-xs text-muted-foreground ml-auto">{recurso.downloads} descargas</span>
                        </div>
                        <CardTitle className="line-clamp-2 text-xl mt-2">{recurso.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <CardDescription className="line-clamp-3 mb-3">{recurso.description}</CardDescription>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <div className="flex items-center mr-4">
                            <FileText className="h-4 w-4 mr-1" />
                            <span>{recurso.format}</span>
                          </div>
                          <div className="flex items-center">
                            <BookOpen className="h-4 w-4 mr-1" />
                            <span>{recurso.pages} páginas</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="p-4">
                        <Button className="w-full bg-yellow-500 hover:bg-yellow-600">
                          <Lock className="mr-2 h-4 w-4" />
                          Suscríbete al Plan
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Sección de suscripción */}
        <section className="w-full py-12 md:py-16 bg-teal-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Accede a todos nuestros recursos premium
                </h2>
                <p className="text-muted-foreground md:text-xl">
                  Con nuestra suscripción mensual o anual tendrás acceso ilimitado a más de 50 guías PDF y kits
                  descargables de alta calidad.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600">
                    Ver Planes de Suscripción
                  </Button>
                  <Button size="lg" variant="outline">
                    Conocer más
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-4xl font-bold text-yellow-500 mb-2">50+</div>
                  <p className="text-muted-foreground">Recursos premium exclusivos</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-4xl font-bold text-yellow-500 mb-2">15+</div>
                  <p className="text-muted-foreground">Nuevos recursos cada mes</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-4xl font-bold text-yellow-500 mb-2">100%</div>
                  <p className="text-muted-foreground">Creados por especialistas</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-4xl font-bold text-yellow-500 mb-2">24/7</div>
                  <p className="text-muted-foreground">Acceso ilimitado</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
