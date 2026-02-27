import { motion } from 'framer-motion';

const SectionHeading = ({ eyebrow, title, subtitle }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.55 }}
    className="mb-12 max-w-3xl"
  >
    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300/90">{eyebrow}</p>
    <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">{title}</h2>
    {subtitle ? <p className="mt-4 text-slate-300">{subtitle}</p> : null}
  </motion.div>
);

export default SectionHeading;
