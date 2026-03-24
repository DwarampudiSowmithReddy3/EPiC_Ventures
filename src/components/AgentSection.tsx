import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin, Linkedin, Instagram, Star, Eye, TrendingUp, Heart } from "lucide-react";
import SectionLabel from "./SectionLabel";
import OrnamentalDivider from "./OrnamentalDivider";

const traits = [
  { icon: Eye, label: "Visionary & growth‑oriented" },
  { icon: TrendingUp, label: "Deep financial & regulatory awareness" },
  { icon: Heart, label: "Long‑term value for clients & partners" },
];

const AgentSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="leadership" className="relative overflow-hidden bg-background">
      <div className="absolute top-1/3 -left-40 w-80 h-80 bg-gold/3 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/2 rounded-full blur-[200px] pointer-events-none" />

      <div ref={ref} className="relative z-10 section-padding max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-12 md:mb-20"
        >
          <SectionLabel label="Our Leadership" className="justify-center mb-6" />
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-foreground leading-tight">
            Meet Our<br />
            <span className="text-gradient-gold italic font-normal">Leadership</span>
          </h2>
          <OrnamentalDivider className="mt-6 md:mt-8" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-elegant text-base sm:text-lg md:text-xl text-champagne/60 italic mt-6 md:mt-8 max-w-3xl mx-auto leading-relaxed font-light px-2"
          >
            At NextEPiC Ventures, leadership is anchored in vision, discipline, and relentless ambition. 
            Our team drives a culture of excellence and client‑centric execution.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Agent Image */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
              <div className="absolute -inset-3 sm:-inset-4 md:-inset-6 border border-gold/15 rounded-3xl" />
              <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 md:-top-6 md:-left-6 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 border-t-2 border-l-2 border-primary rounded-tl-3xl" />
              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 md:-bottom-6 md:-right-6 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 border-b-2 border-r-2 border-primary rounded-br-3xl" />
              
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden luxury-shadow">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80"
                  alt="Anil Kumar T - Founder & Managing Partner"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-charcoal/20" />
                
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} className="text-primary fill-primary sm:w-3.5 sm:h-3.5" />
                    ))}
                  </div>
                  <p className="text-[10px] sm:text-xs font-body tracking-[0.2em] sm:tracking-[0.3em] uppercase text-champagne/60">
                    ★ Replace with your photo ★
                  </p>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-6 md:-bottom-8 md:-right-8 glass-card rounded-xl p-3 sm:p-5 gold-border-glow"
              >
                <p className="font-display text-xl sm:text-2xl font-bold text-gradient-gold">Founder</p>
                <p className="text-[9px] sm:text-[10px] font-body tracking-widest uppercase text-muted-foreground">Managing Partner</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Agent Details */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6 sm:space-y-8"
          >
            <div>
              <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-2 sm:mb-3">
                Anil Kumar T
              </h3>
              <p className="font-elegant text-base sm:text-lg tracking-[0.15em] sm:tracking-[0.2em] uppercase text-primary italic">
                Founder & Managing Partner
              </p>
            </div>

            <div className="h-px w-full bg-gradient-to-r from-gold/30 via-gold/10 to-transparent" />

            <p className="font-elegant text-lg sm:text-xl md:text-2xl text-champagne/70 italic leading-relaxed font-light">
              "Combining deep market insight with a structured, process‑oriented approach to deliver 
              precision‑driven advisory and premium‑level service."
            </p>

            <p className="text-muted-foreground font-body leading-loose text-sm sm:text-base">
              Anil Kumar T is a seasoned real estate and business leader with a proven track record in 
              delivering high‑value transactions and long‑term asset growth. He leads NextEPiC Ventures 
              with a commitment to integrity, transparency, and strategic foresight. He is passionate 
              about building a real estate brand that stands for discretion, trust, and sustained performance.
            </p>

            {/* Key traits */}
            <div className="space-y-3">
              {traits.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                    <Icon size={13} className="text-primary sm:w-3.5 sm:h-3.5" />
                  </div>
                  <span className="text-foreground font-body text-xs sm:text-sm">{label}</span>
                </div>
              ))}
            </div>

            <div className="space-y-3 sm:space-y-4">
              {[
                { icon: Phone, text: "+91 XXXX XXX XXX" },
                { icon: Mail, text: "info@nextepicventures.com" },
                { icon: MapPin, text: "Bengaluru, Karnataka, India" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 sm:gap-4 group cursor-pointer">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gold/20 flex items-center justify-center shrink-0 group-hover:border-gold/50 group-hover:bg-gold/5 transition-all duration-500">
                    <Icon size={15} className="text-primary sm:w-4 sm:h-4" />
                  </div>
                  <span className="text-muted-foreground font-body text-xs sm:text-sm group-hover:text-foreground transition-colors duration-300">{text}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 sm:gap-4 pt-2 sm:pt-4">
              {[Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-gold/40 hover:bg-gold/5 transition-all duration-500"
                >
                  <Icon size={16} className="sm:w-[18px] sm:h-[18px]" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AgentSection;
