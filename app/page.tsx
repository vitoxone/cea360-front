import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { HeroSection } from "@/components/hero-section"
import { MainFeaturesSection } from "@/components/main-features-section"
import { CommunitySection } from "@/components/community-section"
import { ResourcesSection } from "@/components/resources-section"
import { SpecialistsSection } from "@/components/specialists-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { WorkshopsSection } from "@/components/workshops-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { NewsletterSubscription } from "@/components/newsletter-subscription"

export default function Home() {
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
        <HeroSection />
        <MainFeaturesSection />
        <CommunitySection />
        <ResourcesSection />
        <WorkshopsSection />
        <SpecialistsSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <NewsletterSubscription />
      <Footer />
    </div>
  )
}
