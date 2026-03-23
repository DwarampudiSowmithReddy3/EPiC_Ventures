const Footer = () => (
  <footer className="bg-card border-t border-border py-10 px-6 text-center">
    <div className="flex items-center justify-center gap-3 mb-4">
      <div className="w-8 h-8 rounded-full border-2 border-primary flex items-center justify-center">
        <span className="text-primary font-display font-bold text-sm">L</span>
      </div>
      <span className="font-display text-foreground text-lg">Your <span className="text-primary">Logo</span></span>
    </div>
    <p className="text-muted-foreground text-sm font-body">
      © {new Date().getFullYear()} Your Company. All rights reserved.
    </p>
  </footer>
);

export default Footer;
