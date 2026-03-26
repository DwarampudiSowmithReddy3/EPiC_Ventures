import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
      for (const item of [...navItems].reverse()) {
        const el = document.querySelector(item.href);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(item.href);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-gold/10 py-2 sm:py-3"
          : "bg-transparent py-3 sm:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-12">
        {/* Logo */}
        <button onClick={() => handleClick("#hero")} className="flex items-center gap-2 sm:gap-3 group">
          <div className="relative w-9 h-9 sm:w-12 sm:h-12 rounded-full border border-gold/40 flex items-center justify-center group-hover:border-gold transition-colors duration-500 gold-border-glow">
            <span className="text-gradient-gold font-display font-bold text-sm sm:text-lg">NE</span>
            <div className="absolute -inset-1 rounded-full border border-gold/10 animate-pulse-glow" />
          </div>
          <div className="hidden sm:block">
            <span className="font-display text-foreground text-base sm:text-lg tracking-wide">
              Next<span className="text-gradient-gold">EPiC</span>
            </span>
            <p className="text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-body -mt-0.5">Ventures</p>
          </div>
        </button>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-10">
          {navItems.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => handleClick(item.href)}
                className="relative text-[10px] xl:text-xs font-body tracking-[0.2em] xl:tracking-[0.25em] uppercase transition-colors duration-300 group"
              >
                <span className={activeSection === item.href ? "text-primary" : "text-muted-foreground group-hover:text-foreground"}>
                  {item.label}
                </span>
                <motion.div
                  className="absolute -bottom-1.5 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: activeSection === item.href ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden lg:block">
          <button
            onClick={() => handleClick("#contact")}
            className="relative overflow-hidden px-5 xl:px-6 py-2 xl:py-2.5 rounded-full border border-gold/30 text-[10px] xl:text-xs font-body tracking-[0.2em] uppercase text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500"
          >
            Inquire Now
          </button>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-foreground p-1">
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-gold/10 overflow-hidden"
          >
            <ul className="flex flex-col items-center gap-6 sm:gap-8 py-8 sm:py-10">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <button
                    onClick={() => handleClick(item.href)}
                    className={`text-sm font-body tracking-[0.25em] uppercase transition-colors ${
                      activeSection === item.href ? "text-primary" : "text-muted-foreground hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </button>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.08 }}
              >
                <button
                  onClick={() => handleClick("#contact")}
                  className="px-8 py-3 rounded-full border border-gold/30 text-xs font-body tracking-[0.2em] uppercase text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500"
                >
                  Inquire Now
                </button>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
