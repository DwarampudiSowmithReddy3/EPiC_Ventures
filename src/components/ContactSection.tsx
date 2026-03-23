import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import SectionLabel from "./SectionLabel";
import OrnamentalDivider from "./OrnamentalDivider";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source src="https://videos.pexels.com/video-files/5992078/5992078-uhd_2560_1440_24fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 overlay-cinematic" />
      </div>

      <div ref={ref} className="relative z-10 section-padding max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <SectionLabel label="Get In Touch" className="justify-center mb-6" />
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-foreground leading-tight">
            Let's Begin Your<br />
            <span className="text-gradient-gold italic font-normal">Journey</span>
          </h2>
          <OrnamentalDivider className="mt-8" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <p className="font-elegant text-xl text-champagne/70 italic leading-relaxed font-light">
              Ready to find your perfect property? We'd love to hear from you. Reach out and let's make your dream home a reality.
            </p>

            <div className="space-y-6">
              {[
                { icon: Phone, label: "Call Us", value: "+1 (555) 123-4567" },
                { icon: Mail, label: "Email", value: "info@yourluxuryestates.com" },
                { icon: MapPin, label: "Visit", value: "123 Luxury Ave, Los Angeles, CA" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl border border-gold/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-body tracking-[0.25em] uppercase text-primary mb-1">{label}</p>
                    <p className="text-foreground font-body">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-3 glass-card rounded-3xl p-8 md:p-12 space-y-6 gold-border-glow"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-[10px] font-body tracking-[0.25em] uppercase text-muted-foreground mb-2 block">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-charcoal-light/50 border border-border rounded-xl px-5 py-4 font-body text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-gold/40 transition-colors"
                />
              </div>
              <div>
                <label className="text-[10px] font-body tracking-[0.25em] uppercase text-muted-foreground mb-2 block">Email Address</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-charcoal-light/50 border border-border rounded-xl px-5 py-4 font-body text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-gold/40 transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="text-[10px] font-body tracking-[0.25em] uppercase text-muted-foreground mb-2 block">Subject</label>
              <input
                type="text"
                placeholder="I'm interested in..."
                className="w-full bg-charcoal-light/50 border border-border rounded-xl px-5 py-4 font-body text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-gold/40 transition-colors"
              />
            </div>
            <div>
              <label className="text-[10px] font-body tracking-[0.25em] uppercase text-muted-foreground mb-2 block">Your Message</label>
              <textarea
                rows={5}
                placeholder="Tell us about your dream property..."
                className="w-full bg-charcoal-light/50 border border-border rounded-xl px-5 py-4 font-body text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-gold/40 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="group w-full relative overflow-hidden bg-primary text-primary-foreground font-body font-semibold tracking-[0.2em] uppercase text-sm py-5 rounded-xl transition-all duration-500 flex items-center justify-center gap-3"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gold-dark via-gold-light to-gold-dark opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative">Send Message</span>
              <Send size={16} className="relative" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
