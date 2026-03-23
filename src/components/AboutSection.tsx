import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Building2, Users, TrendingUp } from "lucide-react";

const stats = [
  { icon: Building2, value: "500+", label: "Properties Sold" },
  { icon: Users, value: "1,200+", label: "Happy Clients" },
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: TrendingUp, value: "$2B+", label: "Total Sales" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source
            src="https://videos.pexels.com/video-files/7578548/7578548-uhd_2560_1440_30fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 overlay-dark" />
      </div>

      <div ref={ref} className="relative z-10 section-padding max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="gold-line mb-6" />
            <p className="text-primary text-sm tracking-[0.3em] uppercase font-body mb-3">About Us</p>
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground leading-tight mb-6">
              Redefining Luxury <br />
              <span className="text-gradient-gold italic">Real Estate</span>
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed text-base md:text-lg mb-4">
              With over 15 years of expertise in the luxury real estate market, we specialize in connecting discerning clients with exceptional properties that embody elegance, comfort, and modern sophistication.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed text-base md:text-lg">
              Our commitment to excellence, personalized service, and deep market knowledge ensures every client finds their perfect home — a space that truly reflects their lifestyle and aspirations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }}
                className="bg-card/60 backdrop-blur-sm border border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors duration-300"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="font-display text-2xl md:text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="text-muted-foreground text-sm font-body mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
