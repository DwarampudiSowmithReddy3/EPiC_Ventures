import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Bed, Bath, Maximize, ArrowUpRight } from "lucide-react";
import SectionLabel from "./SectionLabel";
import OrnamentalDivider from "./OrnamentalDivider";

const properties = [
  {
    title: "Modern Villa Estate",
    location: "Beverly Hills, CA",
    price: "$4,500,000",
    beds: 5, baths: 4, sqft: "6,200",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    tag: "Featured",
  },
  {
    title: "Oceanfront Penthouse",
    location: "Miami Beach, FL",
    price: "$3,200,000",
    beds: 4, baths: 3, sqft: "4,800",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    tag: "New Listing",
  },
  {
    title: "Contemporary Mansion",
    location: "Malibu, CA",
    price: "$7,800,000",
    beds: 7, baths: 6, sqft: "9,500",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    tag: "Exclusive",
  },
];

const PropertiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="properties" className="relative overflow-hidden bg-background">
      {/* Decorative gradient orb */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/3 rounded-full blur-[200px] pointer-events-none" />

      <div ref={ref} className="relative z-10 section-padding max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <SectionLabel label="Our Portfolio" className="justify-center mb-6" />
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-foreground leading-tight">
            Featured<br />
            <span className="text-gradient-gold italic font-normal">Properties</span>
          </h2>
          <OrnamentalDivider className="mt-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((prop, i) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.2 }}
              className="group glass-card glass-card-hover rounded-2xl overflow-hidden transition-all duration-700 luxury-shadow"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={prop.image}
                  alt={prop.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.2s] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent" />
                
                {/* Tag */}
                <div className="absolute top-5 left-5">
                  <span className="px-4 py-1.5 rounded-full bg-gold/90 text-primary-foreground text-[10px] font-body font-semibold tracking-[0.15em] uppercase">
                    {prop.tag}
                  </span>
                </div>

                {/* Price */}
                <div className="absolute bottom-5 left-5">
                  <p className="font-display text-3xl font-bold text-foreground">{prop.price}</p>
                </div>

                {/* Arrow */}
                <div className="absolute bottom-5 right-5 w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <ArrowUpRight size={16} className="text-foreground" />
                </div>
              </div>

              <div className="p-7">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-500">
                  {prop.title}
                </h3>
                <div className="flex items-center gap-2 text-muted-foreground text-sm font-body mb-5">
                  <MapPin size={13} className="text-primary" />
                  {prop.location}
                </div>
                <div className="gold-line-long mb-5" />
                <div className="flex items-center justify-between text-muted-foreground text-xs font-body tracking-wider">
                  <span className="flex items-center gap-1.5"><Bed size={13} /> {prop.beds} Beds</span>
                  <span className="flex items-center gap-1.5"><Bath size={13} /> {prop.baths} Baths</span>
                  <span className="flex items-center gap-1.5"><Maximize size={13} /> {prop.sqft} sqft</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;
