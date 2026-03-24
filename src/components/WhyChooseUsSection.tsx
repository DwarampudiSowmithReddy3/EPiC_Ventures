import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Crown, Sparkles, Scale, Globe, Target } from "lucide-react";
import SectionLabel from "./SectionLabel";
import OrnamentalDivider from "./OrnamentalDivider";

const reasons = [
  {
    icon: Crown,
    title: "Premium‑Segment Expertise",
    desc: "We specialise in high‑value, selective properties and understand the nuances of luxury and investment‑grade real estate.",
  },
  {
    icon: Sparkles,
    title: "White‑Glove Service Experience",
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
    title: "Strategic, Not Just Transactional",
    desc: "We view each property as part of a larger wealth and lifestyle story, aligning your real estate decisions with personal and financial goals.",
  },
];

const WhyChooseUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="why-us" className="relative overflow-hidden bg-background">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/3 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/2 rounded-full blur-[180px] pointer-events-none" />

      <div ref={ref} className="relative z-10 section-padding max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <SectionLabel label="The NextEPiC Difference" className="justify-center mb-6" />
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-foreground leading-tight">
            Why Choose<br />
            <span className="text-gradient-gold italic font-normal">NextEPiC Ventures?</span>
          </h2>
          <OrnamentalDivider className="mt-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.12 * i }}
              className={`group relative glass-card glass-card-hover rounded-2xl p-8 lg:p-10 transition-all duration-700 overflow-hidden ${
                i >= 3 ? "md:col-span-1 lg:col-span-1" : ""
              } ${i === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gold/5 border border-gold/15 flex items-center justify-center mb-6 group-hover:bg-gold/10 group-hover:border-gold/30 group-hover:scale-110 transition-all duration-500">
                  <r.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-3">
                  {r.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
