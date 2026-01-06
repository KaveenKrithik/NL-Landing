import Header from "@/components/sections/Header";
import VocationalSection from "@/components/sections/VocationalSection";
import HowToHelpSection from "@/components/sections/HowToHelpSection";
import Footer from "@/components/sections/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";

export const metadata = {
    title: "Vocational Training - Lumiere Foundation",
    description: "Discover our vocational training programs including tailoring, computer education, and handicrafts for women empowerment.",
};

export default function VocationalPage() {
    return (
        <main className="min-h-screen">
            <Header />
            <div className="pt-24" /> {/* Spacer for fixed header */}
            <VocationalSection />
            <HowToHelpSection />
            <Footer />
            <ScrollToTop />
        </main>
    );
}
