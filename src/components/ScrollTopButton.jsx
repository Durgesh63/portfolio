import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

const ScrollTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 420);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-40 rounded-full border border-white/20 bg-slate-900/80 p-3 text-sky-300 backdrop-blur-xl transition hover:shadow-glow"
          aria-label="Scroll to top"
        >
          <ChevronUp size={20} />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
};

export default ScrollTopButton;
