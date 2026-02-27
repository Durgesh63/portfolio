import { motion } from 'framer-motion';

const Card = ({ children, className = '', whileHover }) => (
  <motion.div
    whileHover={whileHover || { y: -6 }}
    transition={{ type: 'spring', stiffness: 240, damping: 20 }}
    className={`glass rounded-2xl p-6 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.8)] ${className}`}
  >
    {children}
  </motion.div>
);

export default Card;
