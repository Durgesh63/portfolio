import { motion } from 'framer-motion';
import Card from '../components/Card';
import SectionHeading from '../components/SectionHeading';
import { stats } from '../assets/data';
import { useCountUp } from '../hooks/useCountUp';

const Stat = ({ value, label, suffix }) => {
  const count = useCountUp(value);

  return (
    <Card className="relative overflow-hidden">
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-sky-400/10 blur-2xl" />
      <p className="font-display text-3xl font-bold text-white">
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-slate-300">{label}</p>
    </Card>
  );
};

const AboutSection = () => (
  <section id="about" className="section-shell">
    <SectionHeading
      eyebrow="About"
      title="Building Scalable, High-Performance MERN Systems"
      subtitle="Passionate MERN Stack Developer with 3 years of experience optimizing backend APIs, integrating real-time capabilities, and deploying resilient AWS workloads."
    />

    <div className="grid gap-6 lg:grid-cols-5">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7 }}
        className="glass rounded-3xl p-8 lg:col-span-3"
      >
        <p className="text-slate-200">
          I specialize in Node.js, Express, and MongoDB architecture, with a strong focus on API performance, aggregation-driven
          data access, and distributed workflows for production reliability.
        </p>
        <p className="mt-4 text-slate-300">
          Recent work includes Redis-backed optimization reducing database load by 45%, Elasticsearch indexing for 1M+ records,
          and AWS S3 optimization that reduced media storage cost by 40%.
        </p>
      </motion.div>

      <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-1">
        {stats.map((stat) => (
          <Stat key={stat.label} {...stat} />
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
