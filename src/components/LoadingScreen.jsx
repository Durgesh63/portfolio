import { motion } from 'framer-motion';

const LoadingScreen = () => (
  <motion.div
    initial={{ opacity: 1 }}
    exit={{ opacity: 0, transition: { duration: 0.6 } }}
    className="fixed inset-0 z-[60] flex items-center justify-center bg-slatebase"
  >
    <div className="relative flex items-center gap-3">
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="h-3 w-3 rounded-full bg-sky-300"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ repeat: Infinity, duration: 1.5, delay: 0.15 }}
        className="h-3 w-3 rounded-full bg-emerald-300"
      />
      <motion.p className="ml-2 font-display text-sm tracking-[0.2em] text-slate-300">LOADING</motion.p>
    </div>
  </motion.div>
);

export default LoadingScreen;
