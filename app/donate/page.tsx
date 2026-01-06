import Header from "@/components/sections/Header";
import DonationSection from "@/components/sections/DonationSection";
import ImpactStatsSection from "@/components/sections/ImpactStatsSection";
import FAQSection from "@/components/sections/FAQSection";
import Footer from "@/components/sections/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";

export const metadata = {
    title: "Donate - Lumiere Foundation",
    description: "Support our mission to empower generations through education. Your contribution is eligible for 80G tax exemption.",
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
