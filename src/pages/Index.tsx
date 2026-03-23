import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PropertiesSection from "@/components/PropertiesSection";
import ServicesSection from "@/components/ServicesSection";
import AgentSection from "@/components/AgentSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="bg-background min-h-screen">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <PropertiesSection />
    <ServicesSection />
    <AgentSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
