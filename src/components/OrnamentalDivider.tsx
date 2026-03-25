import { motion } from "framer-motion";

const OrnamentalDivider = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center justify-center gap-3 sm:gap-5 ${className}`}>
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: "4rem" }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="h-px bg-gradient-to-r from-transparent to-primary/40"
    />
    <div className="flex items-center gap-2">
      <div className="w-1 h-1 rounded-full bg-primary/30" />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="w-2.5 h-2.5 border border-primary/40"
        style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
      />
      <div className="w-1 h-1 rounded-full bg-primary/30" />
    </div>
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: "4rem" }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="h-px bg-gradient-to-l from-transparent to-primary/40"
    />
  </div>
);

export default OrnamentalDivider;
