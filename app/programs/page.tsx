import Header from "@/components/sections/Header";
import ProgramsSection from "@/components/sections/ProgramsSection";
import ObjectivesSection from "@/components/sections/ObjectivesSection";
import Footer from "@/components/sections/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";

export const metadata = {
  title: "Our Programs - Lumiere Foundation",
  description:
    "Explore our programs including education, healthcare, women & youth empowerment, vocational training, and social welfare initiatives.",
};

export default function ProgramsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-24" /> {/* Spacer for fixed header */}
      <ProgramsSection />
      <ObjectivesSection />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
