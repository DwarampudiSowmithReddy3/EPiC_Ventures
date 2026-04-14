import { motion } from "framer-motion";
import { ChevronDown, Play } from "lucide-react";
import FloatingParticles from "@/components/FloatingParticles";

const HeroSection = () => {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden">
      {/* Video Background with Ken Burns */}
      <motion.div
        animate={{ scale: [1, 1.08, 1.04] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0"
      >
        <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2560" alt="Luxury Real Estate" className="absolute inset-0 w-full h-full object-cover" />
      </motion.div>

      {/* Multi-layer cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/70" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,hsl(var(--charcoal)/0.8)_80%)]" />

      <FloatingParticles />

      {/* Animated vertical lines */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: "100%" }}
        transition={{ duration: 2, delay: 1.5 }}
        className="absolute top-0 left-[15%] w-px bg-gradient-to-b from-transparent via-gold/10 to-transparent hidden lg:block"
      />
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: "100%" }}
        transition={{ duration: 2, delay: 1.8 }}
        className="absolute top-0 right-[15%] w-px bg-gradient-to-b from-transparent via-gold/10 to-transparent hidden lg:block"
      />

      {/* Animated corner frames */}
      {[
        "top-6 left-6 md:top-10 md:left-10 border-t-2 border-l-2 rounded-tl-xl",
        "top-6 right-6 md:top-10 md:right-10 border-t-2 border-r-2 rounded-tr-xl",
        "bottom-6 left-6 md:bottom-10 md:left-10 border-b-2 border-l-2 rounded-bl-xl",
        "bottom-6 right-6 md:bottom-10 md:right-10 border-b-2 border-r-2 rounded-br-xl",
      ].map((cls, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2 + i * 0.15 }}
          className={`absolute w-12 h-12 md:w-24 md:h-24 border-primary/30 z-20 hidden sm:block ${cls}`}
        />
      ))}

      {/* Side text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1.5 }}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 hidden xl:block"
      >
        <p className="text-[10px] tracking-[0.5em] uppercase text-primary/20 font-body" style={{ writingMode: "vertical-lr" }}>
          NextEPiC Ventures — Premium Real Estate
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.7, duration: 1.5 }}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 hidden xl:block"
      >
        <p className="text-[10px] tracking-[0.5em] uppercase text-primary/20 font-body" style={{ writingMode: "vertical-rl" }}>
          Bengaluru · Karnataka · India
        </p>
      </motion.div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6 py-24">
        {/* Top ornament */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="mb-6 sm:mb-10"
        >
          <div className="flex items-center justify-center gap-3 sm:gap-6 mb-4 sm:mb-6">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "5rem" }}
              transition={{ duration: 1.2, delay: 0.8 }}
              className="h-px bg-gradient-to-r from-transparent to-primary/60 hidden sm:block"
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-3 h-3 border border-primary/40"
              style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
            />
            <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-3 h-3 border border-primary/40"
              style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
            />
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "5rem" }}
              transition={{ duration: 1.2, delay: 0.8 }}
              className="h-px bg-gradient-to-l from-transparent to-primary/60 hidden sm:block"
            />
          </div>
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            animate={{ opacity: 1, letterSpacing: "0.5em" }}
            transition={{ duration: 2, delay: 0.5 }}
            className="font-elegant text-xs sm:text-sm md:text-base uppercase text-champagne/70 font-light px-2"
          >
            Where Real Estate Meets Vision, Integrity & Results
          </motion.p>
        </motion.div>

        {/* Main title with dramatic reveal */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 150, opacity: 0, rotateX: 40 }}
            animate={{ y: 0, opacity: 1, rotateX: 0 }}
            transition={{ duration: 1.4, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold leading-[0.85] text-foreground"
          >
            NextEPiC
          </motion.h1>
        </div>
        <div className="overflow-hidden mt-0 sm:mt-1">
          <motion.h1
            initial={{ y: 150, opacity: 0, rotateX: 40 }}
            animate={{ y: 0, opacity: 1, rotateX: 0 }}
            transition={{ duration: 1.4, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold leading-[0.85]"
          >
            <span className="text-gradient-gold italic">Ventures</span>
          </motion.h1>
        </div>

        {/* Animated underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 1.5 }}
          className="w-40 sm:w-60 md:w-80 h-px mt-6 sm:mt-8 shimmer-gold origin-center"
        />

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="font-elegant text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-champagne/50 max-w-4xl mt-6 sm:mt-8 italic font-light leading-relaxed px-2"
        >
          Your trusted partner for premium residential, commercial, and investment 
          real estate in Bengaluru and beyond.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.7 }}
          className="font-body text-xs sm:text-sm md:text-base text-champagne/30 max-w-2xl mt-4 sm:mt-5 leading-relaxed px-2"
        >
          We craft bespoke real‑estate journeys for individuals, families, 
          corporates, and NRIs — bringing clarity, confidence, and strategic precision 
          to every property decision.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-8 sm:mt-14 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto"
        >
          <button
            onClick={scrollToAbout}
            className="group relative w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 rounded-full border border-primary/30 overflow-hidden hover:border-primary/60 transition-all duration-700"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            <span className="relative text-[11px] sm:text-xs font-body tracking-[0.25em] sm:tracking-[0.3em] uppercase text-primary group-hover:text-gold-light transition-colors duration-500">
              Explore Our Services
            </span>
          </button>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="group relative w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 rounded-full overflow-hidden transition-all duration-700"
          >
            <div className="absolute inset-0 shimmer-gold opacity-90 group-hover:opacity-100" />
            <span className="relative text-[11px] sm:text-xs font-body tracking-[0.25em] sm:tracking-[0.3em] uppercase text-primary-foreground font-semibold flex items-center gap-2">
              <Play size={12} className="fill-current" />
              Schedule Consultation
            </span>
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer group"
          onClick={scrollToAbout}
        >
          <motion.p
            className="text-[9px] tracking-[0.4em] uppercase text-primary/30 font-body"
          >
            Scroll
          </motion.p>
          <motion.div
            className="w-px h-10 sm:h-16 bg-gradient-to-b from-primary/40 to-transparent"
            animate={{ scaleY: [1, 0.6, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <ChevronDown size={14} className="text-primary/30" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
