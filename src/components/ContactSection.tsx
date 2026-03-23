import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Send } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source
            src="https://videos.pexels.com/video-files/5992078/5992078-uhd_2560_1440_24fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 overlay-dark" />
      </div>

      <div ref={ref} className="relative z-10 section-padding max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="gold-line mx-auto mb-6" />
          <p className="text-primary text-sm tracking-[0.3em] uppercase font-body mb-3">Get In Touch</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground">
            Let's <span className="text-gradient-gold italic">Connect</span>
          </h2>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12 space-y-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-background/50 border border-border rounded-lg px-5 py-3.5 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-background/50 border border-border rounded-lg px-5 py-3.5 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full bg-background/50 border border-border rounded-lg px-5 py-3.5 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
          />
          <textarea
            rows={5}
            placeholder="Your Message"
            className="w-full bg-background/50 border border-border rounded-lg px-5 py-3.5 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
          />
          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground font-body font-semibold tracking-wider uppercase text-sm py-4 rounded-lg hover:bg-gold-light transition-colors duration-300 flex items-center justify-center gap-3"
          >
            Send Message
            <Send size={16} />
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
