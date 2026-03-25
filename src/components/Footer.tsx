import { motion } from "framer-motion";
import OrnamentalDivider from "./OrnamentalDivider";

const Footer = () => (
  <footer className="relative overflow-hidden">
    {/* Subtle video background */}
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-t from-background via-card to-card" />
    </div>

    {/* Top gold line */}
    <div className="h-px w-full shimmer-gold" />

    <div className="relative z-10 py-12 sm:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 items-center">
          {/* Left */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-4 sm:mb-5">
              <div className="relative w-11 h-11 sm:w-14 sm:h-14 rounded-full border border-primary/30 flex items-center justify-center gold-border-glow">
                <span className="text-gradient-gold font-display font-bold text-base sm:text-xl">NE</span>
              </div>
              <div>
                <span className="font-display text-foreground text-lg sm:text-2xl tracking-wide">
                  Next<span className="text-gradient-gold">EPiC</span>
                </span>
                <p className="text-[8px] sm:text-[9px] tracking-[0.3em] uppercase text-muted-foreground font-body">Ventures</p>
              </div>
            </div>
            <p className="text-muted-foreground text-[10px] sm:text-xs font-body tracking-wider">
              © {new Date().getFullYear()} NextEPiC Ventures. All rights reserved.
            </p>
            <p className="text-champagne/30 text-[10px] sm:text-xs font-elegant italic mt-1">
              Integrity. Vision. Results.
            </p>
          </div>

          {/* Centre */}
          <div className="text-center hidden md:block">
            <OrnamentalDivider className="mb-5" />
            <p className="font-elegant text-champagne/30 italic text-base lg:text-xl">
              "Premium Real Estate, Thoughtfully Executed."
            </p>
          </div>

          {/* Right */}
          <div className="text-center md:text-right space-y-3">
            <div className="flex items-center justify-center md:justify-end gap-3 sm:gap-5 text-[10px] sm:text-xs font-body tracking-wider text-muted-foreground flex-wrap">
              {["Privacy Policy", "Terms of Service", "Disclaimer"].map((link, i) => (
                <span key={link} className="flex items-center gap-3 sm:gap-5">
                  <a href="#" className="hover:text-primary transition-colors duration-300">{link}</a>
                  {i < 2 && <span className="text-primary/15">|</span>}
                </span>
              ))}
            </div>
            <p className="text-muted-foreground text-[10px] sm:text-xs font-body">
              Bengaluru, Karnataka, India
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
