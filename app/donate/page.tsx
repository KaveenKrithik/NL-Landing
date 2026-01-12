import Header from "@/components/sections/Header";
import DonationSection from "@/components/sections/DonationSection";
import ImpactStatsSection from "@/components/sections/ImpactStatsSection";
import FAQSection from "@/components/sections/FAQSection";
import Footer from "@/components/sections/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";

export const metadata = {
  title: "Donate - Lumiere Foundation",
  description:
    "Support our mission to transform lives through education, healthcare, and empowerment. All donations are utilized strictly for charitable purposes.",
};

export default function DonatePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-24" /> {/* Spacer for fixed header */}
      <DonationSection />
      <ImpactStatsSection />
      <FAQSection />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
