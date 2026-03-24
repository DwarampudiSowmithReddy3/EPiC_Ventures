import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import FloatingParticles from "./FloatingParticles";

const HeroSection = () => {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover scale-105">
        <source src="https://videos.pexels.com/video-files/5765973/5765973-uhd_2560_1440_30fps.mp4" type="video/mp4" />
      </video>

      {/* Multi-layer overlay */}
      <div className="absolute inset-0 overlay-gradient" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 via-transparent to-charcoal/60" />
      
      <FloatingParticles />

      {/* Corner ornaments */}
      <div className="absolute top-8 left-8 w-20 h-20 border-t border-l border-gold/20 z-20" />
      <div className="absolute top-8 right-8 w-20 h-20 border-t border-r border-gold/20 z-20" />
      <div className="absolute bottom-8 left-8 w-20 h-20 border-b border-l border-gold/20 z-20" />
      <div className="absolute bottom-8 right-8 w-20 h-20 border-b border-r border-gold/20 z-20" />

      {/* Side text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 hidden xl:block"
      >
        <p className="text-[10px] tracking-[0.5em] uppercase text-gold/30 font-body" style={{ writingMode: "vertical-lr" }}>
          NextEPiC Ventures — Premium Real Estate
        </p>
      </motion.div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="mb-8"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent to-gold/60" />
            <div className="w-2 h-2 rotate-45 border border-gold/50 animate-pulse-glow" />
            <div className="h-px w-12 md:w-20 bg-gradient-to-l from-transparent to-gold/60" />
          </div>
          <p className="font-elegant text-sm md:text-base tracking-[0.5em] uppercase text-champagne/80 font-light">
            Where Real Estate Meets Vision, Integrity & Results
          </p>
        </motion.div>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.9] text-foreground"
          >
            NextEPiC
          </motion.h1>
        </div>
        <div className="overflow-hidden mt-2">
          <motion.h1
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.9]"
          >
            <span className="text-gradient-gold italic">Ventures</span>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="font-elegant text-lg md:text-xl lg:text-2xl text-champagne/60 max-w-3xl mt-8 italic font-light leading-relaxed"
        >
          Your trusted partner for premium residential, commercial, and investment 
          real estate in Bengaluru and beyond. We combine deep market insight with 
          discreet, high‑touch service to deliver exceptional outcomes.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="font-body text-sm md:text-base text-champagne/40 max-w-2xl mt-6 leading-relaxed"
        >
          At NextEPiC Ventures, we craft bespoke real‑estate journeys for individuals, families, 
          corporates, and NRIs. From luxury homes to prime commercial spaces, we bring clarity, 
          confidence, and strategic precision to every property decision.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="mt-12 flex items-center gap-6"
        >
          <button
            onClick={scrollToAbout}
            className="group relative px-10 py-4 rounded-full border border-gold/30 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/10 to-gold/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            <span className="relative text-xs font-body tracking-[0.3em] uppercase text-primary group-hover:text-gold-light transition-colors">
              Explore Our Services
            </span>
          </button>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="group relative px-10 py-4 rounded-full bg-primary/90 hover:bg-primary overflow-hidden transition-all duration-500"
          >
            <span className="relative text-xs font-body tracking-[0.3em] uppercase text-primary-foreground">
              Schedule Consultation
            </span>
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer"
          onClick={scrollToAbout}
        >
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-gold/40 to-gold/20" />
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <ChevronDown size={16} className="text-gold/40" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
