import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Home, Building, Warehouse, BarChart3, Settings, FileCheck, Globe, ArrowRight } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";
import OrnamentalDivider from "@/components/OrnamentalDivider";

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
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="services" className="relative overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2560" alt="Commercial Property" className="w-full h-full object-cover scale-105" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(var(--gold)/0.04),transparent_60%)]" />
      </div>

      <div ref={ref} className="relative z-10 section-padding max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2 }}
          className="text-center mb-12 md:mb-24"
        >
          <SectionLabel label="What We Offer" className="justify-center mb-6" />
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-foreground leading-[0.9]">
            Our Real Estate
          </h2>
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold leading-[0.9] mt-1">
            <span className="text-gradient-gold italic font-normal">Services</span>
          </h2>
          <OrnamentalDivider className="mt-8 md:mt-10" />
        </motion.div>

        {/* Staggered asymmetric grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.08 * i }}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              className={`group relative glass-card rounded-2xl p-6 sm:p-8 lg:p-10 transition-all duration-700 overflow-hidden border border-transparent hover:border-primary/20 ${
                i === 6 ? "md:col-span-2 lg:col-span-1" : ""
              } ${i === 0 ? "lg:row-span-1" : ""}`}
            >
              {/* Animated glow on hover */}
              <motion.div
                className="absolute -top-20 -right-20 w-60 h-60 rounded-full blur-[80px] pointer-events-none"
                animate={{
                  background: hoveredIdx === i
                    ? "radial-gradient(circle, hsl(var(--gold) / 0.1), transparent)"
                    : "radial-gradient(circle, transparent, transparent)",
                }}
                transition={{ duration: 0.5 }}
              />

              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-px">
                <motion.div
                  className="h-full shimmer-gold"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              <div className="relative z-10">
                {/* Number badge */}
                <div className="flex items-center justify-between mb-5 sm:mb-7">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-primary/5 border border-primary/15 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/30 group-hover:scale-110 transition-all duration-500">
                    <s.icon className="w-5 h-5 sm:w-7 sm:h-7 text-primary" />
                  </div>
                  <span className="font-display text-4xl sm:text-5xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors duration-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="font-display text-lg sm:text-xl lg:text-2xl font-semibold text-foreground mb-3 sm:mb-4 group-hover:text-primary transition-colors duration-500">
                  {s.title}
                </h3>
                <p className="text-muted-foreground font-body text-xs sm:text-sm leading-relaxed mb-4">{s.desc}</p>

                <div className="flex items-center gap-2 text-primary/40 group-hover:text-primary group-hover:gap-3 transition-all duration-500">
                  <span className="text-[10px] font-body tracking-[0.2em] uppercase">Learn More</span>
                  <ArrowRight size={12} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
