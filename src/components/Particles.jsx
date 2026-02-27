import { motion } from 'framer-motion';

const particles = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  x: `${(i * 17) % 100}%`,
  delay: i * 0.25,
  duration: 10 + (i % 6),
  size: 2 + (i % 3),
}));

const Particles = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    {particles.map((particle) => (
      <motion.span
        key={particle.id}
        initial={{ y: '100%', opacity: 0 }}
        animate={{ y: '-12%', opacity: [0, 0.6, 0] }}
        transition={{
          duration: particle.duration,
          delay: particle.delay,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{ left: particle.x, width: particle.size, height: particle.size }}
        className="absolute rounded-full bg-sky-200/70 blur-[1px]"
      />
    ))}
  </div>
);

export default Particles;
