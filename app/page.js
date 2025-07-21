import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import FacilitiesSection from "@/components/facilities-section"
import FacilityPreviewSection from "@/components/facility-preview-section"
import ContactSection from "@/components/contact-section"
import FooterSection from "@/components/footer-section"
import MembershipSection from "@/components/membership-section"
import TestimonialsSection from "@/components/testimonials-section"
export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <FacilitiesSection />
      <FacilityPreviewSection />
      <MembershipSection />
      <TestimonialsSection />
      <ContactSection />
      <FooterSection />

    </main>
  )
}
