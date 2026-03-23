import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PropertiesSection from "@/components/PropertiesSection";
import ServicesSection from "@/components/ServicesSection";
import AgentSection from "@/components/AgentSection";
import ContactSection from "@/components/ContactSection";
import LuxuryMarquee from "@/components/LuxuryMarquee";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="bg-background min-h-screen overflow-x-hidden">
    <Navbar />
    <HeroSection />
    <LuxuryMarquee text="Luxury Living" />
    <AboutSection />
    <LuxuryMarquee text="Premium Estates" />
    <PropertiesSection />
    <LuxuryMarquee text="Excellence in Service" />
    <ServicesSection />
    <AgentSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
