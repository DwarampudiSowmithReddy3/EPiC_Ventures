import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import AgentSection from "@/components/AgentSection";
import ContactSection from "@/components/ContactSection";
import LuxuryMarquee from "@/components/LuxuryMarquee";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="bg-background min-h-screen overflow-x-hidden">
    <Navbar />
    <HeroSection />
    <LuxuryMarquee text="NextEPiC Ventures" />
    <AboutSection />
    <LuxuryMarquee text="Premium Real Estate" />
    <ServicesSection />
    <LuxuryMarquee text="Excellence · Discretion · Results" />
    <WhyChooseUsSection />
    <AgentSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
