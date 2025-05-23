import Link from "next/link"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function BlogPage() {
  // Datos de ejemplo para los artículos del blog
  const blogPosts = [
    {
      id: 1,
      title: "Técnicas de comunicación efectiva con personas autistas",
      excerpt: "Aprende estrategias prácticas para mejorar la comunicación con personas con autismo.",
      category: "Comunicación",
      date: "15 Mayo, 2025",
      imageUrl:
        "https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      slug: "comunicacion-efectiva-autismo",
    },
    {
      id: 2,
      title: "Manejo del estrés para cuidadores",
      excerpt: "Estrategias para gestionar el estrés y evitar el agotamiento como cuidador.",
      category: "Autocuidado",
      date: "10 Mayo, 2025",
      imageUrl:
        "https://images.unsplash.com/photo-1469571486292-b53601010b89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      slug: "manejo-estres-cuidadores",
    },
    {
      id: 3,
      title: "Guía de estimulación sensorial",
      excerpt: "Actividades y recursos para la estimulación sensorial adecuada.",
      category: "Intervención",
      date: "5 Mayo, 2025",
      imageUrl:
        "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1736&q=80",
      slug: "guia-estimulacion-sensorial",
    },
    {
      id: 4,
      title: "Adaptaciones en el hogar para mayor accesibilidad",
      excerpt: "Consejos prácticos para adaptar espacios y mejorar la calidad de vida.",
      category: "Accesibilidad",
      date: "1 Mayo, 2025",
      imageUrl:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      slug: "adaptaciones-hogar-accesibilidad",
    },
    {
      id: 5,
      title: "Derechos y recursos legales para familias",
      excerpt: "Información sobre derechos, ayudas y recursos disponibles para familias.",
      category: "Legal",
      date: "25 Abril, 2025",
      imageUrl:
        "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      slug: "derechos-recursos-legales",
    },
    {
      id: 6,
      title: "Transición a la vida adulta: Guía para cuidadores",
      excerpt: "Preparación y recursos para la transición a la vida adulta de personas con necesidades especiales.",
      category: "Desarrollo",
      date: "20 Abril, 2025",
      imageUrl:
        "https://images.unsplash.com/photo-1517486808906-6ca8b3f8e1c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1749&q=80",
      slug: "transicion-vida-adulta",
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
              <Button size="sm">Registrarse</Button>
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Blog Educativo</h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Recursos, guías y artículos para cuidadores de personas con necesidades especiales
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <div className="relative">
                  <Input type="search" placeholder="Buscar artículos..." className="pr-12 rounded-full" />
                  <Button type="submit" size="sm" className="absolute right-1 top-1 h-7 w-7 rounded-full p-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
                    <span className="sr-only">Buscar</span>
                  </Button>
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
                <TabsTrigger value="comunicacion">Comunicación</TabsTrigger>
                <TabsTrigger value="autocuidado">Autocuidado</TabsTrigger>
                <TabsTrigger value="intervencion">Intervención</TabsTrigger>
                <TabsTrigger value="legal">Legal</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="todos" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {blogPosts.map((post) => (
                  <Link key={post.id} href={`/blog/${post.slug}`}>
                    <Card className="overflow-hidden h-full transition-all hover:shadow-md">
                      <img
                        src={post.imageUrl || "/placeholder.svg"}
                        alt={post.title}
                        width={400}
                        height={200}
                        className="aspect-video w-full object-cover"
                      />
                      <CardHeader className="p-4">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-medium bg-blue-100 text-blue-800 rounded-full px-2 py-0.5">
                            {post.category}
                          </span>
                          <span className="text-xs text-muted-foreground">{post.date}</span>
                        </div>
                        <CardTitle className="line-clamp-2 text-xl">{post.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                      </CardContent>
                      <CardFooter className="p-4">
                        <Button variant="ghost" className="w-full" size="sm">
                          Leer más
                        </Button>
                      </CardFooter>
                    </Card>
                  </Link>
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
            <TabsContent value="comunicacion" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {blogPosts
                  .filter((post) => post.category === "Comunicación")
                  .map((post) => (
                    <Link key={post.id} href={`/blog/${post.slug}`}>
                      <Card className="overflow-hidden h-full transition-all hover:shadow-md">
                        <img
                          src={post.imageUrl || "/placeholder.svg"}
                          alt={post.title}
                          width={400}
                          height={200}
                          className="aspect-video w-full object-cover"
                        />
                        <CardHeader className="p-4">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-medium bg-blue-100 text-blue-800 rounded-full px-2 py-0.5">
                              {post.category}
                            </span>
                            <span className="text-xs text-muted-foreground">{post.date}</span>
                          </div>
                          <CardTitle className="line-clamp-2 text-xl">{post.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                          <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                        </CardContent>
                        <CardFooter className="p-4">
                          <Button variant="ghost" className="w-full" size="sm">
                            Leer más
                          </Button>
                        </CardFooter>
                      </Card>
                    </Link>
                  ))}
              </div>
            </TabsContent>
            {/* Contenido similar para otras pestañas */}
          </Tabs>
        </section>
      </main>
      <Footer />
    </div>
  )
}
