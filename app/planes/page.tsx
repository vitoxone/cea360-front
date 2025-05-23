import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { Check } from "lucide-react"

export default function PlanesPage() {
  const plans = [
    {
      name: "Gratuito",
      description: "Para comenzar a explorar",
      price: "0",
      features: [
        "Acceso a artículos básicos",
        "Participación en comunidad",
        "Recursos educativos limitados",
        "Soporte por chatbot",
      ],
      cta: "Comenzar Gratis",
      href: "/register",
      popular: false,
    },
    {
      name: "Premium",
      description: "Para cuidadores comprometidos",
      price: "9.99",
      interval: "mes",
      features: [
        "Acceso completo a todos los cursos",
        "Certificados descargables",
        "Recursos educativos ilimitados",
        "Soporte prioritario",
        "Webinars exclusivos mensuales",
        "Descarga de materiales en PDF",
      ],
      cta: "Comenzar Premium",
      href: "/register?plan=premium",
      popular: true,
    },
    {
      name: "Premium Anual",
      description: "La mejor opción de valor",
      price: "99.99",
      interval: "año",
      discount: "Ahorra un 16%",
      features: [
        "Todos los beneficios Premium",
        "2 meses gratis",
        "Acceso anticipado a nuevos cursos",
        "Sesiones de consulta personalizadas",
        "Comunidad exclusiva de cuidadores",
      ],
      cta: "Obtener Descuento Anual",
      href: "/register?plan=premium-anual",
      popular: false,
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Planes y Precios</h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Elige el plan que mejor se adapte a tus necesidades como cuidador
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="container px-4 py-12 md:px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={`flex flex-col ${plan.popular ? "border-blue-600 shadow-lg" : "border-border"}`}
              >
                {plan.popular && (
                  <div className="rounded-t-lg bg-blue-600 py-1 text-center text-sm font-medium text-white">
                    Más Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="mb-4 flex items-baseline">
                    <span className="text-3xl font-bold">${plan.price}</span>
                    {plan.interval && <span className="ml-1 text-muted-foreground">/{plan.interval}</span>}
                  </div>
                  {plan.discount && (
                    <div className="mb-4 rounded-lg bg-blue-50 p-2 text-center text-sm font-medium text-blue-700">
                      {plan.discount}
                    </div>
                  )}
                  <ul className="space-y-2">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href={plan.href} className="w-full">
                    <Button className={`w-full ${plan.popular ? "bg-blue-600 hover:bg-blue-700" : ""}`}>
                      {plan.cta}
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="mt-12 space-y-4 text-center">
            <h2 className="text-2xl font-bold">Preguntas Frecuentes</h2>
            <div className="mx-auto max-w-3xl space-y-4">
              <div className="rounded-lg border p-4 text-left">
                <h3 className="font-medium">¿Puedo cambiar de plan en cualquier momento?</h3>
                <p className="mt-1 text-muted-foreground">
                  Sí, puedes actualizar o cancelar tu suscripción en cualquier momento desde tu perfil.
                </p>
              </div>
              <div className="rounded-lg border p-4 text-left">
                <h3 className="font-medium">¿Qué métodos de pago aceptan?</h3>
                <p className="mt-1 text-muted-foreground">
                  Aceptamos tarjetas de crédito/débito y PayPal para todos nuestros planes de suscripción.
                </p>
              </div>
              <div className="rounded-lg border p-4 text-left">
                <h3 className="font-medium">¿Ofrecen reembolsos?</h3>
                <p className="mt-1 text-muted-foreground">
                  Ofrecemos una garantía de devolución de 14 días si no estás satisfecho con tu suscripción premium.
                </p>
              </div>
              <div className="rounded-lg border p-4 text-left">
                <h3 className="font-medium">¿Hay descuentos para organizaciones?</h3>
                <p className="mt-1 text-muted-foreground">
                  Sí, ofrecemos planes especiales para organizaciones y centros educativos. Contáctanos para más
                  información.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
