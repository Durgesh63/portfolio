import { motion } from 'framer-motion';
import { useMouseGlow } from '../hooks/useMouseGlow';

const CursorGlow = () => {
  const mouse = useMouseGlow();

  return (
    <motion.div
      animate={{ x: mouse.x - 120, y: mouse.y - 120 }}
      transition={{ type: 'tween', ease: 'linear', duration: 0.12 }}
      className="pointer-events-none fixed left-0 top-0 z-10 hidden h-60 w-60 rounded-full bg-sky-400/15 blur-3xl lg:block"
    />
  );
};

export default CursorGlow;
