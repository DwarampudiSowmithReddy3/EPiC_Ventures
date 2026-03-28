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
    <section id="leadership" className="relative overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=2560" alt="Office Background" className="w-full h-full object-cover scale-105" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      </div>

      <div ref={ref} className="relative z-10 section-padding max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2 }}
          className="text-center mb-12 md:mb-24"
        >
          <SectionLabel label="Our Leadership" className="justify-center mb-6" />
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-foreground leading-[0.9]">
            Meet Our
          </h2>
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold leading-[0.9] mt-1">
            <span className="text-gradient-gold italic font-normal">Leadership</span>
          </h2>
          <OrnamentalDivider className="mt-8 md:mt-10" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-elegant text-base sm:text-lg md:text-xl lg:text-2xl text-champagne/50 italic mt-6 md:mt-10 max-w-3xl mx-auto leading-relaxed font-light px-2"
          >
            Leadership anchored in vision, discipline, and relentless ambition — driving 
            a culture of excellence and client‑centric execution.
          </motion.p>
        </motion.div>

        <div className="space-y-24 md:space-y-32">
          {/* First Leader: Anil Kumar T */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Agent Image with grand frame */}
            <motion.div
              initial={{ opacity: 0, x: -80, scale: 0.95 }}
              animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
                {/* Outer decorative frame */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 1, duration: 1 }}
                  className="absolute -inset-4 sm:-inset-6 md:-inset-8"
                >
                  <div className="absolute top-0 left-0 w-16 h-16 sm:w-20 sm:h-20 border-t-2 border-l-2 border-primary/40 rounded-tl-3xl" />
                  <div className="absolute bottom-0 right-0 w-16 h-16 sm:w-20 sm:h-20 border-b-2 border-r-2 border-primary/40 rounded-br-3xl" />
                  <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-primary/15 rounded-tr-xl" />
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-primary/15 rounded-bl-xl" />
                </motion.div>

                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden luxury-shadow">
                  <img
                    src="/features-1.jpg"
                    alt="Anil Kumar T - Founder & Managing Partner"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  
                  {/* Bottom overlay info */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={12} className="text-primary fill-primary" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ delay: 1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -bottom-5 -right-3 sm:-bottom-8 sm:-right-8 glass-card rounded-2xl p-4 sm:p-6 gold-border-glow border border-primary/20"
                >
                  <p className="font-display text-xl sm:text-3xl font-bold text-gradient-gold">Founder</p>
                  <p className="text-[9px] sm:text-[10px] font-body tracking-[0.3em] uppercase text-muted-foreground">Managing Partner</p>
                </motion.div>

                {/* Side accent */}
                <motion.div
                  initial={{ height: 0 }}
                  animate={isInView ? { height: "60%" } : {}}
                  transition={{ delay: 1.2, duration: 1 }}
                  className="absolute -left-4 sm:-left-6 top-[20%] w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent"
                />
              </div>
            </motion.div>

            {/* Agent Details */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6 sm:space-y-8"
            >
              <div>
                <h3 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-2 sm:mb-3">
                  Anil Kumar T
                </h3>
                <p className="font-elegant text-base sm:text-lg tracking-[0.15em] sm:tracking-[0.2em] uppercase text-primary italic">
                  Founder & Managing Partner
                </p>
              </div>

              <div className="h-px w-full shimmer-gold" />

              <p className="font-elegant text-lg sm:text-xl md:text-2xl lg:text-3xl text-champagne/60 italic leading-relaxed font-light">
                "Combining deep market insight with a structured, process‑oriented approach to deliver 
                precision‑driven advisory and premium‑level service."
              </p>

              <p className="text-muted-foreground font-body leading-loose text-sm sm:text-base">
                Anil Kumar T is a seasoned real estate and business leader with a proven track record in 
                delivering high‑value transactions and long‑term asset growth. He leads NextEPiC Ventures 
                with a commitment to integrity, transparency, and strategic foresight.
              </p>

              {/* Key traits with animated reveal */}
              <div className="space-y-3 sm:space-y-4">
                {traits.map(({ icon: Icon, label }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.8 + i * 0.15, duration: 0.6 }}
                    className="flex items-center gap-3 sm:gap-4 group"
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-primary/5 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/10 group-hover:border-primary/40 transition-all duration-500">
                      <Icon size={14} className="text-primary" />
                    </div>
                    <span className="text-foreground font-body text-xs sm:text-sm">{label}</span>
                  </motion.div>
                ))}
              </div>

              <div className="space-y-3 sm:space-y-4 pt-4">
                {[
                  { icon: Phone, text: "+91  9946313291" },
                  { icon: Mail, text: "office@nextepic.in" },
                  { icon: MapPin, text: "Bengaluru, Karnataka, India" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3 sm:gap-4 group cursor-pointer">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl border border-primary/15 flex items-center justify-center shrink-0 group-hover:border-primary/40 group-hover:bg-primary/5 transition-all duration-500">
                      <Icon size={15} className="text-primary" />
                    </div>
                    <span className="text-muted-foreground font-body text-xs sm:text-sm group-hover:text-foreground transition-colors duration-300">{text}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3 sm:gap-4 pt-4">
                {[
                  { icon: Linkedin, href: "https://www.linkedin.com/in/anil-kumar-talari-703997338/" },
                  { icon: Instagram, href: "#" }
                ].map(({ icon: Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    target={href !== "#" ? "_blank" : undefined}
                    rel={href !== "#" ? "noopener noreferrer" : undefined}
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-500"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>        </div>
      </div>
    </section>
  );
};

export default AgentSection;
