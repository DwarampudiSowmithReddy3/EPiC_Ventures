import { motion } from "framer-motion";

const FloatingParticles = () => {
  const particles = [
    { size: 3, x: "10%", y: "20%", delay: 0, duration: 8 },
    { size: 2, x: "85%", y: "15%", delay: 2, duration: 12 },
    { size: 4, x: "70%", y: "60%", delay: 1, duration: 10 },
    { size: 2, x: "25%", y: "75%", delay: 3, duration: 9 },
    { size: 3, x: "55%", y: "35%", delay: 1.5, duration: 11 },
    { size: 2, x: "90%", y: "80%", delay: 4, duration: 7 },
    { size: 1.5, x: "40%", y: "10%", delay: 0.5, duration: 13 },
    { size: 2.5, x: "15%", y: "55%", delay: 2.5, duration: 10 },
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
            y: [-20, 20, -20],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;
