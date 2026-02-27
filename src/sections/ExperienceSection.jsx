import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { experiences } from '../assets/data';

const ExperienceSection = () => (
  <section id="experience" className="section-shell">
    <SectionHeading
      eyebrow="Career"
      title="Experience Timeline"
      subtitle="Hands-on ownership across backend performance, full-stack delivery, and real-time architecture."
    />

    <div className="relative mx-auto max-w-5xl">
      <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-sky-300/30 to-emerald-300/30 md:left-1/2" />
      <div className="space-y-8">
        {experiences.map((experience, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.article
              key={experience.company}
              initial={{ opacity: 0, x: isEven ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65 }}
              className={`relative md:w-1/2 ${isEven ? 'md:pr-8' : 'md:ml-auto md:pl-8'}`}
            >
              <span className="absolute left-4 top-5 h-3 w-3 -translate-x-1/2 rounded-full bg-sky-300 shadow-glow md:left-auto md:right-[-6px] md:translate-x-0" />
              <div className="glass rounded-2xl p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-emerald-300">{experience.duration}</p>
                <h3 className="mt-2 font-display text-xl font-semibold text-white">{experience.role}</h3>
                <p className="text-sky-200">{experience.company}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {experience.achievements.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
              </div>
            </motion.article>
          );
        })}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
