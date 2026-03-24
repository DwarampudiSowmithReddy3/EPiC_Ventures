import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Home, Building, Warehouse, BarChart3, Settings, FileCheck, Globe } from "lucide-react";
import SectionLabel from "./SectionLabel";
import OrnamentalDivider from "./OrnamentalDivider";

const services = [
  {
    icon: Home,
    title: "Premium Residential Property",
    desc: "We guide clients through luxury homes, villas, and upscale apartments in select neighbourhoods, providing nuanced pricing insight, neighbourhood evaluation, and lifestyle‑centric recommendations.",
  },
  {
    icon: Building,
    title: "Commercial & Retail Leasing",
    desc: "For corporates, startups, and retailers, we identify prime office spaces, retail hubs, and mixed‑use developments that align with brand positioning and growth.",
  },
  {
    icon: Warehouse,
    title: "Industrial & Warehouse Advisory",
    desc: "Strategic advisory on industrial parks, warehouses, and last‑mile facilities, ensuring optimal location, scalability, and operational efficiency.",
  },
  {
    icon: BarChart3,
    title: "Property Investment & Advisory",
    desc: "High‑end investment advisory including portfolio analysis, yield assessment, and risk‑return structuring. We treat every property as a strategic asset.",
  },
  {
    icon: Settings,
    title: "Property Management",
    desc: "Discreet, premium‑tier property management including tenant curation, rent collection, and maintenance — so your asset performs quietly yet powerfully.",
  },
  {
    icon: FileCheck,
    title: "End‑to‑End Transaction Support",
    desc: "From title verification and due diligence to documentation, registration, and handover — we manage every detail with precision and professionalism.",
  },
  {
    icon: Globe,
    title: "NRI Services",
    desc: "End‑to‑end remote support for NRIs — legal clearance, tax‑efficient structures, documentation, and bank coordination. Our NRI desk ensures you stay in control, no matter where you live.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source src="https://videos.pexels.com/video-files/6077508/6077508-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 overlay-cinematic" />
      </div>

      <div ref={ref} className="relative z-10 section-padding max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-12 md:mb-20"
        >
          <SectionLabel label="What We Offer" className="justify-center mb-6" />
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-foreground leading-tight">
            Our Real Estate<br />
            <span className="text-gradient-gold italic font-normal">Services</span>
          </h2>
          <OrnamentalDivider className="mt-6 md:mt-8" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.1 * i }}
              className={`group glass-card glass-card-hover rounded-2xl p-6 sm:p-8 lg:p-10 transition-all duration-700 relative overflow-hidden ${
                i === 6 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gold/0 group-hover:bg-gold/5 rounded-full blur-[60px] transition-all duration-700" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gold/5 border border-gold/15 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-gold/10 group-hover:border-gold/30 group-hover:scale-110 transition-all duration-500">
                  <s.icon className="w-5 h-5 sm:w-7 sm:h-7 text-primary" />
                </div>
                <h3 className="font-display text-lg sm:text-xl lg:text-2xl font-semibold text-foreground mb-2 sm:mb-3 group-hover:text-gradient-gold transition-colors duration-500">
                  {s.title}
                </h3>
                <p className="text-muted-foreground font-body text-xs sm:text-sm leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
