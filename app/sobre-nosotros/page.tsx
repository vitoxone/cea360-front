import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { NewsletterSubscription } from "@/components/newsletter-subscription"
import { HistoriaSection } from "@/components/sobre-nosotros/historia-section"
import { MisionVisionSection } from "@/components/sobre-nosotros/mision-vision-section"
import { ValoresSection } from "@/components/sobre-nosotros/valores-section"
import { ImpactoSection } from "@/components/sobre-nosotros/impacto-section"
import { ComunidadSection } from "@/components/sobre-nosotros/comunidad-section"
import { TestimoniosSection } from "@/components/sobre-nosotros/testimonios-section"
import { EquipoSection } from "@/components/sobre-nosotros/equipo-section"
import { CtaSection } from "@/components/sobre-nosotros/cta-section"
import { TechnologiesSection } from "@/components/technologies-section"

export default function SobreNosotrosPage() {
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Nuestra Historia</h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Conoce quiénes somos, nuestra misión y el impacto que estamos generando en la comunidad TEA
                </p>
              </div>
            </div>
          </div>
        </section>

        <HistoriaSection />
        <MisionVisionSection />
        <ValoresSection />
        <ImpactoSection />
        <ComunidadSection />
        <TestimoniosSection />
        <EquipoSection />
        <TechnologiesSection />
        <CtaSection />
      </main>
      <NewsletterSubscription />
      <Footer />
    </div>
  )
}
