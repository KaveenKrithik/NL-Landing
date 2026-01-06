import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import ObjectivesSection from "@/components/sections/ObjectivesSection";
import ImpactStatsSection from "@/components/sections/ImpactStatsSection";
import DonationSection from "@/components/sections/DonationSection";
import Footer from "@/components/sections/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ObjectivesSection />
      <ImpactStatsSection />
      <DonationSection />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
