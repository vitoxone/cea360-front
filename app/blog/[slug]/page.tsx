import Link from "next/link"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { StarRating } from "@/components/star-rating"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // En una implementación real, buscaríamos el artículo por su slug
  const post = {
    title: "Técnicas de comunicación efectiva con personas autistas",
    content: `
      <p>La comunicación efectiva con personas con autismo requiere comprender sus necesidades únicas y adaptar nuestro enfoque. Este artículo explora estrategias prácticas basadas en evidencia para mejorar la interacción y conexión.</p>
      
      <h2>Comprendiendo los desafíos de comunicación</h2>
      <p>Las personas con autismo pueden experimentar diversos desafíos en la comunicación, incluyendo:</p>
      <ul>
        <li>Dificultad para interpretar expresiones faciales y lenguaje corporal</li>
        <li>Interpretación literal del lenguaje</li>
        <li>Desafíos con la reciprocidad conversacional</li>
        <li>Sensibilidad sensorial que puede interferir con la atención</li>
      </ul>
      
      <h2>Estrategias efectivas</h2>
      <p>Estas técnicas pueden ayudar a establecer una comunicación más clara y efectiva:</p>
      
      <h3>1. Utiliza lenguaje claro y concreto</h3>
      <p>Evita metáforas, sarcasmo o expresiones ambiguas. Sé directo y específico en tus instrucciones y explicaciones.</p>
      
      <h3>2. Proporciona tiempo adicional para procesar</h3>
      <p>Muchas personas con autismo necesitan más tiempo para procesar la información verbal. Haz pausas entre instrucciones y evita bombardear con demasiada información a la vez.</p>
      
      <h3>3. Apoya la comunicación con ayudas visuales</h3>
      <p>Las imágenes, pictogramas, horarios visuales y otras ayudas gráficas pueden complementar la comunicación verbal y proporcionar claridad adicional.</p>
      
      <h3>4. Respeta las preferencias sensoriales</h3>
      <p>Minimiza las distracciones ambientales durante las conversaciones importantes. Considera factores como la iluminación, el ruido de fondo y la proximidad física.</p>
      
      <h3>5. Establece rutinas de comunicación</h3>
      <p>La previsibilidad ayuda. Establecer momentos regulares para la comunicación y seguir estructuras consistentes puede reducir la ansiedad.</p>
    `,
    category: "Comunicación",
    date: "15 Mayo, 2025",
    author: "Dra. María Rodríguez",
    authorRole: "Especialista en Comunicación Aumentativa",
    imageUrl:
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    authorImage: "https://randomuser.me/api/portraits/women/68.jpg",
    readingTime: "8 min",
    relatedPosts: [
      {
        id: 2,
        title: "Sistemas de comunicación alternativa y aumentativa",
        slug: "sistemas-comunicacion-alternativa",
      },
      {
        id: 3,
        title: "Desarrollo de habilidades sociales en niños con autismo",
        slug: "desarrollo-habilidades-sociales-autismo",
      },
    ],
  }

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
        <article className="container max-w-3xl py-6 lg:py-12">
          <div className="space-y-4">
            <Link href="/blog" className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline">
              ← Volver al blog
            </Link>
            <div>
              <h1 className="text-3xl font-bold lg:text-4xl">{post.title}</h1>
              <div className="mt-4 flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="rounded-full bg-gray-100 p-1">
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
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 16v-4" />
                      <path d="M12 8h.01" />
                    </svg>
                  </div>
                  <span>{post.readingTime} de lectura</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="rounded-full bg-gray-100 p-1">
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
                      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                      <line x1="16" x2="16" y1="2" y2="6" />
                      <line x1="8" x2="8" y1="2" y2="6" />
                      <line x1="3" x2="21" y1="10" y2="10" />
                    </svg>
                  </div>
                  <span>{post.date}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <img
              src={post.imageUrl || "/placeholder.svg"}
              alt={post.title}
              width={800}
              height={400}
              className="aspect-video w-full rounded-lg object-cover"
            />
          </div>
          <div className="mt-8 flex items-center space-x-4">
            <img
              src={post.authorImage || "/placeholder.svg"}
              alt={post.author}
              className="h-12 w-12 rounded-full object-cover"
            />
            <div>
              <div className="font-medium">{post.author}</div>
              <div className="text-sm text-muted-foreground">{post.authorRole}</div>
            </div>
          </div>
          <Separator className="my-8" />
          <div
            className="prose prose-blue max-w-none dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <Separator className="my-8" />
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">¿Te ha resultado útil este artículo?</h2>
            <StarRating />
            <div className="flex flex-col space-y-4">
              <Button className="w-full sm:w-auto">Descargar como PDF</Button>
              <Button variant="outline" className="w-full sm:w-auto">
                Obtener certificado
              </Button>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Artículos relacionados</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {post.relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                  <Card className="h-full overflow-hidden transition-all hover:shadow-md">
                    <CardContent className="p-4">
                      <h3 className="line-clamp-2 text-lg font-bold">{relatedPost.title}</h3>
                      <Button variant="ghost" className="mt-4 p-0" size="sm">
                        Leer artículo →
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
