import { motion } from 'framer-motion';

const blobs = [
  { className: 'left-[-120px] top-[-80px] h-72 w-72 bg-sky-500/25', duration: 16 },
  { className: 'right-[-80px] top-[20%] h-80 w-80 bg-emerald-500/20', duration: 20 },
  { className: 'left-[35%] bottom-[-140px] h-96 w-96 bg-cyan-400/15', duration: 18 },
];

const BackgroundBlobs = () => (
  <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
    {blobs.map((blob) => (
      <motion.div
        key={blob.className}
        className={`absolute rounded-full blur-3xl ${blob.className}`}
        animate={{ y: [0, -20, 0], x: [0, 12, 0] }}
        transition={{ duration: blob.duration, repeat: Infinity, ease: 'easeInOut' }}
      />
    ))}
  </div>
);

export default BackgroundBlobs;
