import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Bed, Bath, Maximize } from "lucide-react";

const properties = [
  {
    title: "Modern Villa Estate",
    location: "Beverly Hills, CA",
    price: "$4,500,000",
    beds: 5, baths: 4, sqft: "6,200",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
  },
  {
    title: "Oceanfront Penthouse",
    location: "Miami Beach, FL",
    price: "$3,200,000",
    beds: 4, baths: 3, sqft: "4,800",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  },
  {
    title: "Contemporary Mansion",
    location: "Malibu, CA",
    price: "$7,800,000",
    beds: 7, baths: 6, sqft: "9,500",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
];

const PropertiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="properties" className="relative overflow-hidden bg-background">
      <div ref={ref} className="section-padding max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="gold-line mx-auto mb-6" />
          <p className="text-primary text-sm tracking-[0.3em] uppercase font-body mb-3">Portfolio</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground">
            Featured <span className="text-gradient-gold italic">Properties</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((prop, i) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
              className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/40 transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={prop.image}
                  alt={prop.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground font-body font-semibold text-sm px-4 py-1.5 rounded-full">
                  {prop.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">{prop.title}</h3>
                <div className="flex items-center gap-1.5 text-muted-foreground text-sm font-body mb-4">
                  <MapPin size={14} className="text-primary" />
                  {prop.location}
                </div>
                <div className="flex items-center gap-5 text-muted-foreground text-sm font-body border-t border-border pt-4">
                  <span className="flex items-center gap-1.5"><Bed size={14} /> {prop.beds} Beds</span>
                  <span className="flex items-center gap-1.5"><Bath size={14} /> {prop.baths} Baths</span>
                  <span className="flex items-center gap-1.5"><Maximize size={14} /> {prop.sqft} sqft</span>
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
