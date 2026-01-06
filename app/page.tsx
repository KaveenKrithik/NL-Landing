import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import ObjectivesSection from "@/components/sections/ObjectivesSection";
import AboutSection from "@/components/sections/AboutSection";
import ProgramsSection from "@/components/sections/ProgramsSection";
import VocationalSection from "@/components/sections/VocationalSection";
import ImpactStatsSection from "@/components/sections/ImpactStatsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import DonationSection from "@/components/sections/DonationSection";
import HowToHelpSection from "@/components/sections/HowToHelpSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ObjectivesSection />
      <AboutSection />
      <ProgramsSection />
      <VocationalSection />
      <ImpactStatsSection />
      <TestimonialsSection />
      <DonationSection />
      <HowToHelpSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
