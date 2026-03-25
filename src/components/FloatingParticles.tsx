import { motion } from "framer-motion";

const FloatingParticles = () => {
  const particles = [
    { size: 4, x: "10%", y: "20%", delay: 0, duration: 8 },
    { size: 2, x: "85%", y: "15%", delay: 2, duration: 12 },
    { size: 5, x: "70%", y: "60%", delay: 1, duration: 10 },
    { size: 2, x: "25%", y: "75%", delay: 3, duration: 9 },
    { size: 3, x: "55%", y: "35%", delay: 1.5, duration: 11 },
    { size: 2, x: "90%", y: "80%", delay: 4, duration: 7 },
    { size: 1.5, x: "40%", y: "10%", delay: 0.5, duration: 13 },
    { size: 3, x: "15%", y: "55%", delay: 2.5, duration: 10 },
    { size: 2, x: "60%", y: "85%", delay: 1, duration: 14 },
    { size: 4, x: "30%", y: "40%", delay: 3.5, duration: 9 },
    { size: 1.5, x: "75%", y: "25%", delay: 0, duration: 11 },
    { size: 3, x: "45%", y: "70%", delay: 2, duration: 8 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            left: p.x,
            top: p.y,
            background: `radial-gradient(circle, hsl(var(--gold-light)), transparent)`,
          }}
          animate={{
            y: [-30, 30, -30],
            x: [-10, 10, -10],
            opacity: [0.1, 0.7, 0.1],
            scale: [1, 2, 1],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      {/* Large ambient orbs */}
      <motion.div
        className="absolute w-64 h-64 rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(var(--gold) / 0.03), transparent 70%)",
          left: "20%",
          top: "30%",
        }}
        animate={{ x: [-40, 40, -40], y: [-20, 20, -20] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-96 h-96 rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(var(--gold) / 0.02), transparent 70%)",
          right: "10%",
          bottom: "20%",
        }}
        animate={{ x: [30, -30, 30], y: [20, -20, 20] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

export default FloatingParticles;
