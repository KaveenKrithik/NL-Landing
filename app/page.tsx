import dynamic from "next/dynamic";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";

// Lazy load heavy components
const STEMPillars = dynamic(() => import("@/components/sections/STEMPillars"), {
  loading: () => <div className="py-24" />,
});
const StatsSection = dynamic(() => import("@/components/sections/StatsSection"), {
  loading: () => <div className="py-24" />,
});
const FeaturesSection = dynamic(() => import("@/components/sections/FeaturesSection"), {
  loading: () => <div className="py-24" />,
});
const FutureInnovators = dynamic(() => import("@/components/sections/FutureInnovators"), {
  loading: () => <div className="py-24" />,
});
const Accreditation = dynamic(() => import("@/components/sections/Accreditation"), {
  loading: () => <div className="py-24" />,
});
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"), {
  loading: () => <div className="py-24" />,
});
const CTASection = dynamic(() => import("@/components/sections/CTASection"), {
  loading: () => <div className="py-24" />,
});
const Footer = dynamic(() => import("@/components/sections/Footer"));

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <STEMPillars />
      <StatsSection />
      <FeaturesSection />
      <FutureInnovators />
      <Accreditation />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  );
}
