import OrnamentalDivider from "./OrnamentalDivider";

const Footer = () => (
  <footer className="relative bg-charcoal-light border-t border-gold/10 py-16 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center">
        {/* Logo */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center gold-border-glow">
            <span className="text-gradient-gold font-display font-bold text-xl">L</span>
          </div>
          <div>
            <span className="font-display text-foreground text-xl tracking-wide">
              Your <span className="text-gradient-gold">Logo</span>
            </span>
            <p className="text-[9px] tracking-[0.3em] uppercase text-muted-foreground font-body">Luxury Estates</p>
          </div>
        </div>

        <OrnamentalDivider className="mb-8" />

        <p className="font-elegant text-champagne/40 italic text-lg mb-6">
          "Where luxury meets legacy."
        </p>

        <p className="text-muted-foreground text-xs font-body tracking-wider">
          © {new Date().getFullYear()} Your Company. All rights reserved. 
          <span className="mx-2 text-gold/20">|</span>
          Crafted with excellence.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
