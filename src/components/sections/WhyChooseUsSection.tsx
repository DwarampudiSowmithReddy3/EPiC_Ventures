import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Crown, Sparkles, Scale, Globe, Target } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";
import OrnamentalDivider from "@/components/OrnamentalDivider";

const reasons = [
  {
    icon: Crown,
    title: "Premium‑Segment Expertise",
    desc: "We specialise in high‑value, selective properties and understand the nuances of luxury and investment‑grade real estate.",
  },
  {
    icon: Sparkles,
    title: "White‑Glove Service",
    desc: "From initial consultation to post‑transaction support, every interaction is handled with discretion, professionalism, and attention to detail.",
  },
  {
    icon: Scale,
    title: "Transparent, Ethical Advisory",
    desc: "We operate with a clear, conflict‑free approach — no hidden clauses, no pressure. Our clients are empowered with facts, options, and clarity.",
  },
  {
    icon: Globe,
    title: "NRI‑Focused Execution",
    desc: "Our dedicated NRI services ensure seamless cross‑border transactions, remote coordination, and a smooth experience for clients living abroad.",
  },
  {
    icon: Target,
    title: "Strategic, Not Transactional",
    desc: "We view each property as part of a larger wealth and lifestyle story, aligning your real estate decisions with personal and financial goals.",
  },
];

const WhyChooseUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="why-us" className="relative overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2560" alt="Premium Property" className="w-full h-full object-cover scale-105" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--gold)/0.04),transparent_70%)]" />
      </div>

      <div ref={ref} className="relative z-10 section-padding max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2 }}
          className="text-center mb-12 md:mb-24"
        >
          <SectionLabel label="The NextEPiC Difference" className="justify-center mb-6" />
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-foreground leading-[0.9]">
            Why Choose
          </h2>
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold leading-[0.9] mt-1">
            <span className="text-gradient-gold italic font-normal">NextEPiC Ventures?</span>
          </h2>
          <OrnamentalDivider className="mt-8 md:mt-10" />
        </motion.div>

        {/* Dramatic layout: large left + stacked right */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Featured first card */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="group relative glass-card rounded-3xl p-8 sm:p-10 lg:p-14 transition-all duration-700 overflow-hidden border border-transparent hover:border-primary/20 lg:row-span-2 flex flex-col justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute top-0 left-0 right-0 h-1 shimmer-gold opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative z-10">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-primary/5 border border-primary/15 flex items-center justify-center mb-6 sm:mb-8 group-hover:bg-primary/10 group-hover:border-primary/30 group-hover:scale-110 transition-all duration-500">
                <Crown className="w-7 h-7 sm:w-9 sm:h-9 text-primary" />
              </div>
              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 sm:mb-5 group-hover:text-primary transition-colors duration-500">
                {reasons[0].title}
              </h3>
              <p className="text-muted-foreground font-body text-sm sm:text-base lg:text-lg leading-relaxed">{reasons[0].desc}</p>
              <div className="mt-8 h-px w-full bg-gradient-to-r from-primary/20 via-primary/5 to-transparent" />
              <p className="mt-6 font-elegant text-lg sm:text-xl text-champagne/40 italic">
                "Excellence is not a skill. It's an attitude."
              </p>
            </div>
          </motion.div>

          {/* Remaining cards in a 2-column grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {reasons.slice(1).map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.12 }}
                className="group relative glass-card rounded-2xl p-6 sm:p-8 transition-all duration-700 overflow-hidden border border-transparent hover:border-primary/20"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative z-10">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/5 border border-primary/15 flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-primary/10 group-hover:border-primary/30 group-hover:scale-110 transition-all duration-500">
                    <r.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-base sm:text-lg lg:text-xl font-semibold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-500">
                    {r.title}
                  </h3>
                  <p className="text-muted-foreground font-body text-xs sm:text-sm leading-relaxed">{r.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
