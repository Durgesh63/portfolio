import { motion } from 'framer-motion';

const Button = ({ children, href, variant = 'primary', className = '', ...props }) => {
  const baseStyle =
    'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300';

  const variants = {
    primary:
      'bg-gradient-to-r from-sky-400 to-emerald-400 text-slate-950 hover:shadow-glow hover:-translate-y-0.5',
    secondary:
      'glass text-slate-100 hover:border-sky-300/60 hover:shadow-glow',
  };

  const mergedClass = `${baseStyle} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} href={href} className={mergedClass} {...props}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className={mergedClass} {...props}>
      {children}
    </motion.button>
  );
};

export default Button;
