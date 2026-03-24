import OrnamentalDivider from "./OrnamentalDivider";

const Footer = () => (
  <footer className="relative bg-charcoal-light border-t border-gold/10 py-16 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-3 gap-12 items-center">
        {/* Left */}
        <div className="text-center md:text-left">
          <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
            <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center gold-border-glow">
              <span className="text-gradient-gold font-display font-bold text-lg">NE</span>
            </div>
            <div>
              <span className="font-display text-foreground text-xl tracking-wide">
                Next<span className="text-gradient-gold">EPiC</span>
              </span>
              <p className="text-[9px] tracking-[0.3em] uppercase text-muted-foreground font-body">Ventures</p>
            </div>
          </div>
          <p className="text-muted-foreground text-xs font-body tracking-wider">
            © {new Date().getFullYear()} NextEPiC Ventures. All rights reserved.
          </p>
          <p className="text-champagne/40 text-xs font-elegant italic mt-1">
            Integrity. Vision. Results.
          </p>
        </div>

        {/* Centre */}
        <div className="text-center">
          <OrnamentalDivider className="mb-4" />
          <p className="font-elegant text-champagne/40 italic text-lg">
            "Premium Real Estate, Thoughtfully Executed."
          </p>
        </div>

        {/* Right */}
        <div className="text-center md:text-right space-y-2">
          <div className="flex items-center justify-center md:justify-end gap-4 text-xs font-body tracking-wider text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <span className="text-gold/20">|</span>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <span className="text-gold/20">|</span>
            <a href="#" className="hover:text-primary transition-colors">Disclaimer</a>
          </div>
          <p className="text-muted-foreground text-xs font-body">
            Bengaluru, Karnataka, India
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
