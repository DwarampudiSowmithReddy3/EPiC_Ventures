import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Award, Building2, Users, TrendingUp } from "lucide-react";
import SectionLabel from "./SectionLabel";
import OrnamentalDivider from "./OrnamentalDivider";

const stats = [
  { icon: Building2, value: 500, suffix: "+", label: "Properties Handled" },
  { icon: Users, value: 1200, suffix: "+", label: "Happy Clients" },
  { icon: Award, value: 15, suffix: "+", label: "Years Experience" },
  { icon: TrendingUp, value: 2, prefix: "₹", suffix: "B+", label: "Total Transactions" },
];

const AnimatedCounter = ({ value, prefix = "", suffix = "", isInView }: { value: number; prefix?: string; suffix?: string; isInView: boolean }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = value;
    const duration = 2000;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, value]);
  return <span>{prefix}{count.toLocaleString()}{suffix}</span>;
};

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="relative overflow-hidden">
      {/* Cinematic video background */}
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=2560" alt="About Us" className="w-full h-full object-cover scale-105" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--gold)/0.05),transparent_60%)]" />
      </div>

      {/* Decorative lines */}
      <div className="absolute top-0 bottom-0 left-8 lg:left-16 w-px bg-gradient-to-b from-transparent via-primary/8 to-transparent hidden xl:block" />
      <div className="absolute top-0 bottom-0 right-8 lg:right-16 w-px bg-gradient-to-b from-transparent via-primary/8 to-transparent hidden xl:block" />

      <div ref={ref} className="relative z-10 section-padding max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2 }}
          className="text-center mb-12 md:mb-24"
        >
          <SectionLabel label="Our Story" className="justify-center mb-6" />
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-foreground leading-[0.9]">
            About NextEPiC
          </h2>
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold leading-[0.9] mt-1">
            <span className="text-gradient-gold italic font-normal">Ventures</span>
          </h2>
          <OrnamentalDivider className="mt-8 md:mt-10" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="lg:col-span-3 space-y-6 sm:space-y-8"
          >
            <div className="relative pl-6 border-l-2 border-primary/30">
              <p className="font-elegant text-xl sm:text-2xl md:text-3xl lg:text-4xl text-champagne/80 italic leading-relaxed font-light">
                "A boutique real estate agency built on excellence, discretion, and long‑term value creation."
              </p>
            </div>
            <p className="text-muted-foreground font-body leading-loose text-sm sm:text-base md:text-lg">
              We specialise in high‑value residential, commercial, and industrial properties across 
              Bengaluru, with a focus on prime micro‑markets and upcoming growth corridors. Guided 
              by a vision to be the preferred partner for discerning clients and investors, we blend 
              market intelligence, ethical practices, and hands‑on execution.
            </p>
            <p className="text-muted-foreground font-body leading-loose text-sm sm:text-base md:text-lg">
              Our mission is to simplify complex real estate decisions, protect your interests, and 
              deliver measurable, above‑market outcomes. Whether you're an individual, family, 
              corporate, or NRI — we bring clarity, confidence, and strategic precision to every 
              property decision.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="lg:col-span-2 grid grid-cols-2 gap-3 sm:gap-5"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.6 + i * 0.15 }}
                className="glass-card glass-card-hover rounded-2xl p-5 sm:p-7 text-center transition-all duration-700 group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl bg-primary/5 border border-primary/15 flex items-center justify-center mx-auto mb-3 sm:mb-5 group-hover:bg-primary/10 group-hover:border-primary/30 group-hover:scale-110 transition-all duration-500">
                  <stat.icon className="w-4 h-4 sm:w-6 sm:h-6 text-primary" />
                </div>
                <p className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-gradient-gold">
                  <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} isInView={isInView} />
                </p>
                <p className="text-muted-foreground text-[9px] sm:text-xs font-body mt-2 tracking-widest uppercase">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
