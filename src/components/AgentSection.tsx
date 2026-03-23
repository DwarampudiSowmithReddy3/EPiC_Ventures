import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin, Linkedin, Instagram } from "lucide-react";

const AgentSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="agent" className="relative overflow-hidden bg-background">
      <div ref={ref} className="section-padding max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="gold-line mx-auto mb-6" />
          <p className="text-primary text-sm tracking-[0.3em] uppercase font-body mb-3">Meet Your Agent</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground">
            Your Trusted <span className="text-gradient-gold italic">Advisor</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Agent Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto aspect-[3/4] rounded-2xl overflow-hidden border-2 border-border">
              <div className="absolute inset-0 bg-gradient-to-b from-card/0 via-card/0 to-card/80" />
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80"
                alt="Your agent photo"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <p className="text-xs font-body tracking-widest uppercase text-primary">Replace with your photo</p>
              </div>
            </div>
            {/* Decorative gold border */}
            <div className="absolute -top-3 -left-3 w-24 h-24 border-t-2 border-l-2 border-primary rounded-tl-2xl" />
            <div className="absolute -bottom-3 -right-3 w-24 h-24 border-b-2 border-r-2 border-primary rounded-br-2xl" />
          </motion.div>

          {/* Agent Details */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="font-display text-3xl font-semibold text-foreground mb-2">Your Name Here</h3>
            <p className="text-primary font-body text-sm tracking-widest uppercase mb-6">Senior Real Estate Agent</p>

            <p className="text-muted-foreground font-body leading-relaxed mb-8">
              With a passion for connecting people with their dream homes, I bring years of expertise, 
              market knowledge, and personalized service to every client relationship. 
              My goal is to make your real estate journey seamless, enjoyable, and successful.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 text-muted-foreground font-body">
                <Phone size={18} className="text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-4 text-muted-foreground font-body">
                <Mail size={18} className="text-primary" />
                <span>your.email@example.com</span>
              </div>
              <div className="flex items-center gap-4 text-muted-foreground font-body">
                <MapPin size={18} className="text-primary" />
                <span>Los Angeles, California</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AgentSection;
