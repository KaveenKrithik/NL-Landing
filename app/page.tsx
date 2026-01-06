import dynamic from "next/dynamic";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import ScrollToTop from "@/components/ui/ScrollToTop";

// Lazy load sections for better performance
const ObjectivesSection = dynamic(() => import("@/components/sections/ObjectivesSection"), {
  loading: () => <div className="py-24" />,
});
const EducationalObjectives = dynamic(() => import("@/components/sections/EducationalObjectives"), {
  loading: () => <div className="py-24" />,
});
const VocationalTraining = dynamic(() => import("@/components/sections/VocationalTraining"), {
  loading: () => <div className="py-24" />,
});
const CharitableObjectives = dynamic(() => import("@/components/sections/CharitableObjectives"), {
  loading: () => <div className="py-24" />,
});
const ImpactStats = dynamic(() => import("@/components/sections/ImpactStats"), {
  loading: () => <div className="py-24" />,
});
const DonationSection = dynamic(() => import("@/components/sections/DonationSection"), {
  loading: () => <div className="py-24" />,
});
const Footer = dynamic(() => import("@/components/sections/Footer"));

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ObjectivesSection />
      <EducationalObjectives />
      <VocationalTraining />
      <CharitableObjectives />
      <ImpactStats />
      <DonationSection />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
