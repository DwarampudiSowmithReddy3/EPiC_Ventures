import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Building2, Users, TrendingUp } from "lucide-react";
import SectionLabel from "./SectionLabel";
import OrnamentalDivider from "./OrnamentalDivider";

const stats = [
  { icon: Building2, value: "500+", label: "Properties Sold", suffix: "" },
  { icon: Users, value: "1,200+", label: "Happy Clients", suffix: "" },
  { icon: Award, value: "15+", label: "Years Experience", suffix: "" },
  { icon: TrendingUp, value: "$2B+", label: "Total Sales", suffix: "" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source src="https://videos.pexels.com/video-files/7578548/7578548-uhd_2560_1440_30fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 overlay-cinematic" />
      </div>

      {/* Decorative side lines */}
      <div className="absolute top-0 bottom-0 left-12 w-px bg-gradient-to-b from-transparent via-gold/10 to-transparent hidden xl:block" />
      <div className="absolute top-0 bottom-0 right-12 w-px bg-gradient-to-b from-transparent via-gold/10 to-transparent hidden xl:block" />

      <div ref={ref} className="relative z-10 section-padding max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <SectionLabel label="About Us" className="justify-center mb-6" />
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-foreground leading-tight">
            Redefining Luxury<br />
            <span className="text-gradient-gold italic font-normal">Real Estate</span>
          </h2>
          <OrnamentalDivider className="mt-8" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Text Column - 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-3 space-y-6"
          >
            <p className="font-elegant text-2xl md:text-3xl text-champagne/80 italic leading-relaxed font-light">
              "We don't just find houses — we curate lifestyles. Every property we represent is a masterpiece of design, comfort, and distinction."
            </p>
            <div className="h-px w-24 bg-gradient-to-r from-gold/40 to-transparent" />
            <p className="text-muted-foreground font-body leading-loose text-base md:text-lg">
              With over 15 years of expertise in the luxury real estate market, we specialize in connecting discerning clients with exceptional properties that embody elegance, comfort, and modern sophistication. Our boutique approach ensures every client receives the exclusive, personalized attention they deserve.
            </p>
            <p className="text-muted-foreground font-body leading-loose text-base md:text-lg">
              From waterfront estates to penthouse retreats, our portfolio represents the finest in architectural achievement and premium living. We navigate the complexities of high-end real estate so you can focus on what matters — finding the home of your dreams.
            </p>
          </motion.div>

          {/* Stats Column - 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="lg:col-span-2 grid grid-cols-2 gap-5"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + i * 0.15 }}
                className="glass-card glass-card-hover rounded-xl p-6 text-center transition-all duration-500 group"
              >
                <div className="w-12 h-12 rounded-full bg-gold/5 border border-gold/15 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/10 group-hover:border-gold/30 transition-all duration-500">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="font-display text-3xl md:text-4xl font-bold text-gradient-gold">{stat.value}</p>
                <p className="text-muted-foreground text-xs font-body mt-2 tracking-wider uppercase">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
