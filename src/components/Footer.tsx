import OrnamentalDivider from "./OrnamentalDivider";

const Footer = () => (
  <footer className="relative bg-charcoal-light border-t border-gold/10 py-10 sm:py-16 px-4 sm:px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 items-center">
        {/* Left */}
        <div className="text-center md:text-left">
          <div className="flex items-center gap-3 justify-center md:justify-start mb-3 sm:mb-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gold/30 flex items-center justify-center gold-border-glow">
              <span className="text-gradient-gold font-display font-bold text-base sm:text-lg">NE</span>
            </div>
            <div>
              <span className="font-display text-foreground text-lg sm:text-xl tracking-wide">
                Next<span className="text-gradient-gold">EPiC</span>
              </span>
              <p className="text-[8px] sm:text-[9px] tracking-[0.3em] uppercase text-muted-foreground font-body">Ventures</p>
            </div>
          </div>
          <p className="text-muted-foreground text-[10px] sm:text-xs font-body tracking-wider">
            © {new Date().getFullYear()} NextEPiC Ventures. All rights reserved.
          </p>
          <p className="text-champagne/40 text-[10px] sm:text-xs font-elegant italic mt-1">
            Integrity. Vision. Results.
          </p>
        </div>

        {/* Centre */}
        <div className="text-center hidden md:block">
          <OrnamentalDivider className="mb-4" />
          <p className="font-elegant text-champagne/40 italic text-base lg:text-lg">
            "Premium Real Estate, Thoughtfully Executed."
          </p>
        </div>

        {/* Right */}
        <div className="text-center md:text-right space-y-2">
          <div className="flex items-center justify-center md:justify-end gap-3 sm:gap-4 text-[10px] sm:text-xs font-body tracking-wider text-muted-foreground flex-wrap">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <span className="text-gold/20">|</span>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <span className="text-gold/20">|</span>
            <a href="#" className="hover:text-primary transition-colors">Disclaimer</a>
          </div>
          <p className="text-muted-foreground text-[10px] sm:text-xs font-body">
            Bengaluru, Karnataka, India
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
