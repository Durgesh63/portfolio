import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 130, damping: 26, mass: 0.2 });

  return <motion.div style={{ scaleX }} className="fixed left-0 top-0 z-50 h-1 w-full origin-left bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-300" />;
};

export default ScrollProgress;
