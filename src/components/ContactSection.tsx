import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import SectionLabel from "./SectionLabel";
import OrnamentalDivider from "./OrnamentalDivider";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [propertyType, setPropertyType] = useState("");

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
          className="text-center mb-12 md:mb-20"
        >
          <SectionLabel label="Get In Touch" className="justify-center mb-6" />
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-foreground leading-tight">
            Connect With<br />
            <span className="text-gradient-gold italic font-normal">NextEPiC Ventures</span>
          </h2>
          <OrnamentalDivider className="mt-6 md:mt-8" />
          <p className="font-elegant text-base sm:text-lg text-champagne/60 italic mt-4 sm:mt-6 max-w-2xl mx-auto font-light px-2">
            Whether you are exploring a luxury home, commercial space, or investment‑grade property, 
            our team is ready to provide a personalised, high‑level consultation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-6 sm:space-y-8"
          >
            <p className="font-elegant text-lg sm:text-xl text-champagne/70 italic leading-relaxed font-light">
              For NRIs, we offer a dedicated process that respects your time, location, and requirements.
            </p>

            <div className="space-y-4 sm:space-y-6">
              {[
                { icon: Mail, label: "Email", value: "info@nextepicventures.com" },
                { icon: Phone, label: "Call Us", value: "+91 XXXX XXX XXX" },
                { icon: MapPin, label: "Office", value: "NextEPiC Ventures, Flat No. 235, Mahaveer Calyx Apartment, BTM 4th Stage, Nyanappanahalli, Behind Royal Residency Layout, Bengaluru – 560076, India" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl border border-gold/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon size={16} className="text-primary sm:w-[18px] sm:h-[18px]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] sm:text-xs font-body tracking-[0.25em] uppercase text-primary mb-1">{label}</p>
                    <p className="text-foreground font-body text-xs sm:text-sm leading-relaxed break-words">{value}</p>
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
            className="lg:col-span-3 glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 space-y-4 sm:space-y-6 gold-border-glow"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div>
                <label className="text-[10px] font-body tracking-[0.25em] uppercase text-muted-foreground mb-2 block">Full Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-charcoal-light/50 border border-border rounded-xl px-4 sm:px-5 py-3 sm:py-4 font-body text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-gold/40 transition-colors"
                />
              </div>
              <div>
                <label className="text-[10px] font-body tracking-[0.25em] uppercase text-muted-foreground mb-2 block">Email Address</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full bg-charcoal-light/50 border border-border rounded-xl px-4 sm:px-5 py-3 sm:py-4 font-body text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-gold/40 transition-colors"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div>
                <label className="text-[10px] font-body tracking-[0.25em] uppercase text-muted-foreground mb-2 block">Phone</label>
                <input
                  type="tel"
                  placeholder="+91 XXXX XXX XXX"
                  className="w-full bg-charcoal-light/50 border border-border rounded-xl px-4 sm:px-5 py-3 sm:py-4 font-body text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-gold/40 transition-colors"
                />
              </div>
              <div>
                <label className="text-[10px] font-body tracking-[0.25em] uppercase text-muted-foreground mb-2 block">Property Type</label>
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full bg-charcoal-light/50 border border-border rounded-xl px-4 sm:px-5 py-3 sm:py-4 font-body text-sm text-foreground focus:outline-none focus:border-gold/40 transition-colors appearance-none"
                >
                  <option value="" className="bg-charcoal">Select Type</option>
                  <option value="residential" className="bg-charcoal">Residential</option>
                  <option value="commercial" className="bg-charcoal">Commercial</option>
                  <option value="industrial" className="bg-charcoal">Industrial</option>
                  <option value="nri" className="bg-charcoal">NRI Services</option>
                </select>
              </div>
            </div>
            <div>
              <label className="text-[10px] font-body tracking-[0.25em] uppercase text-muted-foreground mb-2 block">Your Message</label>
              <textarea
                rows={4}
                placeholder="How can we assist you with your next premium real estate move?"
                className="w-full bg-charcoal-light/50 border border-border rounded-xl px-4 sm:px-5 py-3 sm:py-4 font-body text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-gold/40 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="group w-full relative overflow-hidden bg-primary text-primary-foreground font-body font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-xs sm:text-sm py-4 sm:py-5 rounded-xl transition-all duration-500 flex items-center justify-center gap-2 sm:gap-3"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gold-dark via-gold-light to-gold-dark opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative">Schedule a Private Consultation</span>
              <Send size={14} className="relative sm:w-4 sm:h-4" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
