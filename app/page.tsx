import { HeroSection } from "@/components/sections/hero-section"
import { ConceptSection } from "@/components/sections/concept-section"
import { NetworkSection } from "@/components/sections/network-section"
import { FormatsSection } from "@/components/sections/formats-section"
import { MenuSection } from "@/components/sections/menu-section"
import { AdvantagesSection } from "@/components/sections/advantages-section"
// import { PartnersSection } from "@/components/sections/partners-section"
import { StepsSection } from "@/components/sections/steps-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function FranchisePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ConceptSection />
      <NetworkSection />
      <FormatsSection />
      <MenuSection />
      <AdvantagesSection />
      {/* <PartnersSection /> */}
      <StepsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
