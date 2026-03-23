import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin, Linkedin, Instagram, Star } from "lucide-react";
import SectionLabel from "./SectionLabel";
import OrnamentalDivider from "./OrnamentalDivider";

const AgentSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="agent" className="relative overflow-hidden bg-background">
      {/* Decorative gradient orbs */}
      <div className="absolute top-1/3 -left-40 w-80 h-80 bg-gold/3 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/2 rounded-full blur-[200px] pointer-events-none" />

      <div ref={ref} className="relative z-10 section-padding max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <SectionLabel label="Meet Your Agent" className="justify-center mb-6" />
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-foreground leading-tight">
            Your Trusted<br />
            <span className="text-gradient-gold italic font-normal">Advisor</span>
          </h2>
          <OrnamentalDivider className="mt-8" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Agent Image */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Outer decorative frame */}
              <div className="absolute -inset-4 md:-inset-6 border border-gold/15 rounded-3xl" />
              
              {/* Gold corner accents */}
              <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-12 h-12 md:w-16 md:h-16 border-t-2 border-l-2 border-primary rounded-tl-3xl" />
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-12 h-12 md:w-16 md:h-16 border-b-2 border-r-2 border-primary rounded-br-3xl" />
              
              {/* Image container */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden luxury-shadow">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80"
                  alt="Your agent photo"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-charcoal/20" />
                
                {/* Overlay text */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-xs font-body tracking-[0.3em] uppercase text-champagne/60">
                    ★ Replace with your photo ★
                  </p>
                </div>
              </div>

              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 glass-card rounded-xl p-5 gold-border-glow"
              >
                <p className="font-display text-2xl font-bold text-gradient-gold">15+</p>
                <p className="text-[10px] font-body tracking-widest uppercase text-muted-foreground">Years of Excellence</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Agent Details */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-3">
                Your Name Here
              </h3>
              <p className="font-elegant text-lg tracking-[0.2em] uppercase text-primary italic">
                Senior Real Estate Agent
              </p>
            </div>

            <div className="h-px w-full bg-gradient-to-r from-gold/30 via-gold/10 to-transparent" />

            <p className="font-elegant text-xl md:text-2xl text-champagne/70 italic leading-relaxed font-light">
              "My passion is transforming your real estate dreams into reality. Every client deserves a home that tells their unique story."
            </p>

            <p className="text-muted-foreground font-body leading-loose">
              With a passion for connecting people with their dream homes, I bring years of expertise, 
              market knowledge, and personalized service to every client relationship. My boutique approach 
              ensures your real estate journey is seamless, enjoyable, and extraordinarily successful.
            </p>

            <div className="space-y-4">
              {[
                { icon: Phone, text: "+1 (555) 123-4567" },
                { icon: Mail, text: "your.email@example.com" },
                { icon: MapPin, text: "Los Angeles, California" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center group-hover:border-gold/50 group-hover:bg-gold/5 transition-all duration-500">
                    <Icon size={16} className="text-primary" />
                  </div>
                  <span className="text-muted-foreground font-body group-hover:text-foreground transition-colors duration-300">{text}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 pt-4">
              {[Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-gold/40 hover:bg-gold/5 transition-all duration-500"
                >
                  <Icon size={18} />
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
