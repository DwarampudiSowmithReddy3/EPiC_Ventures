import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Home, Key, BarChart3, Shield, Handshake, Search } from "lucide-react";

const services = [
  { icon: Search, title: "Property Search", desc: "Curated selection of premium listings tailored to your preferences." },
  { icon: Home, title: "Buying Assistance", desc: "End-to-end support from viewing to closing your dream property." },
  { icon: Key, title: "Selling Services", desc: "Strategic marketing and pricing to maximize your property's value." },
  { icon: BarChart3, title: "Market Analysis", desc: "Data-driven insights for informed real estate investment decisions." },
  { icon: Shield, title: "Legal Support", desc: "Expert legal guidance through every step of the transaction." },
  { icon: Handshake, title: "Negotiation", desc: "Skilled negotiation to secure the best terms for our clients." },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source
            src="https://videos.pexels.com/video-files/6077508/6077508-uhd_2560_1440_25fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 overlay-dark" />
      </div>

      <div ref={ref} className="relative z-10 section-padding max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="gold-line mx-auto mb-6" />
          <p className="text-primary text-sm tracking-[0.3em] uppercase font-body mb-3">What We Offer</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground">
            Our <span className="text-gradient-gold italic">Services</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="group bg-card/40 backdrop-blur-sm border border-border rounded-xl p-8 hover:border-primary/50 hover:bg-card/60 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
