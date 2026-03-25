import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import SectionLabel from "./SectionLabel";
import OrnamentalDivider from "./OrnamentalDivider";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [propertyType, setPropertyType] = useState("");

  return (
    <section id="contact" className="relative overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover scale-105">
          <source src="https://videos.pexels.com/video-files/5992078/5992078-uhd_2560_1440_24fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(var(--gold)/0.06),transparent_60%)]" />
      </div>

      <div ref={ref} className="relative z-10 section-padding max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2 }}
          className="text-center mb-12 md:mb-24"
        >
          <SectionLabel label="Get In Touch" className="justify-center mb-6" />
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-foreground leading-[0.9]">
            Connect With
          </h2>
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold leading-[0.9] mt-1">
            <span className="text-gradient-gold italic font-normal">NextEPiC Ventures</span>
          </h2>
          <OrnamentalDivider className="mt-8 md:mt-10" />
          <p className="font-elegant text-base sm:text-lg md:text-xl text-champagne/50 italic mt-6 sm:mt-8 max-w-2xl mx-auto font-light px-2">
            Whether you are exploring a luxury home, commercial space, or investment‑grade property, 
            our team is ready to provide a personalised, high‑level consultation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-2 space-y-6 sm:space-y-8"
          >
            <p className="font-elegant text-lg sm:text-xl lg:text-2xl text-champagne/60 italic leading-relaxed font-light">
              For NRIs, we offer a dedicated process that respects your time, location, and requirements.
            </p>

            <div className="space-y-5 sm:space-y-6">
              {[
                { icon: Mail, label: "Email", value: "info@nextepicventures.com" },
                { icon: Phone, label: "Call Us", value: "+91 XXXX XXX XXX" },
                { icon: MapPin, label: "Office", value: "NextEPiC Ventures, Flat No. 235, Mahaveer Calyx Apartment, BTM 4th Stage, Nyanappanahalli, Behind Royal Residency Layout, Bengaluru – 560076, India" },
              ].map(({ icon: Icon, label, value }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.15, duration: 0.7 }}
                  className="flex items-start gap-3 sm:gap-4 group cursor-pointer"
                >
                  <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-xl border border-primary/20 bg-primary/5 flex items-center justify-center shrink-0 mt-0.5 group-hover:border-primary/40 group-hover:bg-primary/10 transition-all duration-500">
                    <Icon size={16} className="text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] sm:text-xs font-body tracking-[0.25em] uppercase text-primary mb-1">{label}</p>
                    <p className="text-foreground font-body text-xs sm:text-sm leading-relaxed break-words">{value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="lg:col-span-3 glass-card rounded-3xl p-6 sm:p-8 md:p-12 space-y-4 sm:space-y-6 border border-primary/10 hover:border-primary/20 transition-colors duration-700"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {[
                { label: "Full Name", type: "text", placeholder: "Your Name" },
                { label: "Email Address", type: "email", placeholder: "you@example.com" },
              ].map((field) => (
                <div key={field.label}>
                  <label className="text-[10px] font-body tracking-[0.25em] uppercase text-muted-foreground mb-2 block">{field.label}</label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full bg-charcoal-light/50 border border-border rounded-xl px-4 sm:px-5 py-3.5 sm:py-4 font-body text-sm text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:border-primary/40 focus:bg-charcoal-light/70 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div>
                <label className="text-[10px] font-body tracking-[0.25em] uppercase text-muted-foreground mb-2 block">Phone</label>
                <input
                  type="tel"
                  placeholder="+91 XXXX XXX XXX"
                  className="w-full bg-charcoal-light/50 border border-border rounded-xl px-4 sm:px-5 py-3.5 sm:py-4 font-body text-sm text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:border-primary/40 focus:bg-charcoal-light/70 transition-all duration-300"
                />
              </div>
              <div>
                <label className="text-[10px] font-body tracking-[0.25em] uppercase text-muted-foreground mb-2 block">Property Type</label>
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full bg-charcoal-light/50 border border-border rounded-xl px-4 sm:px-5 py-3.5 sm:py-4 font-body text-sm text-foreground focus:outline-none focus:border-primary/40 transition-all duration-300 appearance-none"
                >
                  <option value="" className="bg-card">Select Type</option>
                  <option value="residential" className="bg-card">Residential</option>
                  <option value="commercial" className="bg-card">Commercial</option>
                  <option value="industrial" className="bg-card">Industrial</option>
                  <option value="nri" className="bg-card">NRI Services</option>
                </select>
              </div>
            </div>
            <div>
              <label className="text-[10px] font-body tracking-[0.25em] uppercase text-muted-foreground mb-2 block">Your Message</label>
              <textarea
                rows={4}
                placeholder="How can we assist you with your next premium real estate move?"
                className="w-full bg-charcoal-light/50 border border-border rounded-xl px-4 sm:px-5 py-3.5 sm:py-4 font-body text-sm text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:border-primary/40 focus:bg-charcoal-light/70 transition-all duration-300 resize-none"
              />
            </div>
            <button
              type="submit"
              className="group w-full relative overflow-hidden font-body font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-xs sm:text-sm py-4 sm:py-5 rounded-xl transition-all duration-700 flex items-center justify-center gap-2 sm:gap-3"
            >
              <div className="absolute inset-0 shimmer-gold" />
              <span className="relative text-primary-foreground flex items-center gap-2">
                Schedule a Private Consultation
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </span>
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
