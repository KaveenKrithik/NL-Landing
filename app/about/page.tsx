import Header from "@/components/sections/Header";
import AboutSection from "@/components/sections/AboutSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import PartnersSection from "@/components/sections/PartnersSection";
import Footer from "@/components/sections/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";

export const metadata = {
  title: "About Us - Lumiere Foundation",
  description:
    "Learn about Lumiere Foundation, our vision, mission, and core values. A Charitable & Educational Trust dedicated to education, healthcare, and social empowerment.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-24" /> {/* Spacer for fixed header */}
      <AboutSection />
      <TestimonialsSection />
      <PartnersSection />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
