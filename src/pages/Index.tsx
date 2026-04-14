import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import AgentSection from "@/components/sections/AgentSection";
import ContactSection from "@/components/sections/ContactSection";
import LuxuryMarquee from "@/components/LuxuryMarquee";
import Footer from "@/components/layout/Footer";

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
