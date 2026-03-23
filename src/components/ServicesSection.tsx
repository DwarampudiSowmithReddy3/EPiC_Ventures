import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Home, Key, BarChart3, Shield, Handshake, Search } from "lucide-react";
import SectionLabel from "./SectionLabel";
import OrnamentalDivider from "./OrnamentalDivider";

const services = [
  { icon: Search, title: "Property Search", desc: "Curated selection of premium listings tailored to your unique preferences and lifestyle." },
  { icon: Home, title: "Buying Assistance", desc: "End-to-end concierge support from first viewing to the final closing of your dream property." },
  { icon: Key, title: "Selling Services", desc: "Strategic marketing, staging, and pricing to maximize your property's market value." },
  { icon: BarChart3, title: "Market Analysis", desc: "Data-driven insights and forecasting for informed investment decisions." },
  { icon: Shield, title: "Legal Support", desc: "Expert legal guidance ensuring smooth, secure transactions at every step." },
  { icon: Handshake, title: "Negotiation", desc: "Skilled negotiation expertise to secure the most favorable terms for our clients." },
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
          className="text-center mb-20"
        >
          <SectionLabel label="What We Offer" className="justify-center mb-6" />
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-foreground leading-tight">
            Our Premium<br />
            <span className="text-gradient-gold italic font-normal">Services</span>
          </h2>
          <OrnamentalDivider className="mt-8" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.15 * i }}
              className="group glass-card glass-card-hover rounded-2xl p-8 lg:p-10 transition-all duration-700 relative overflow-hidden"
            >
              {/* Hover gradient glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gold/0 group-hover:bg-gold/5 rounded-full blur-[60px] transition-all duration-700" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gold/5 border border-gold/15 flex items-center justify-center mb-6 group-hover:bg-gold/10 group-hover:border-gold/30 group-hover:scale-110 transition-all duration-500">
                  <s.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-3 group-hover:text-gradient-gold transition-colors duration-500">
                  {s.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
