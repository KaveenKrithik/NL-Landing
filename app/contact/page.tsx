import Header from "@/components/sections/Header";
import ContactSection from "@/components/sections/ContactSection";
import FAQSection from "@/components/sections/FAQSection";
import Footer from "@/components/sections/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";

export const metadata = {
  title: "Contact Us - Lumiere Foundation",
  description:
    "Get in touch with Lumiere Foundation, Tamil Nadu, India. We welcome inquiries about donations, programs, and partnerships.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-24" /> {/* Spacer for fixed header */}
      <ContactSection />
      <FAQSection />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
