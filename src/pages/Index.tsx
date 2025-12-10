import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhoWeServeSection from "@/components/WhoWeServeSection";
import DifferenceSection from "@/components/DifferenceSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ClientsSection from "@/components/ClientsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ServicesSection />
      <WhoWeServeSection />
      <DifferenceSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <ClientsSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
