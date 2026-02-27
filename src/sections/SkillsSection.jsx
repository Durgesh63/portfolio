import { motion } from 'framer-motion';
import Card from '../components/Card';
import SectionHeading from '../components/SectionHeading';
import { skills } from '../assets/data';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

const SkillsSection = () => (
  <section id="skills" className="section-shell">
    <SectionHeading
      eyebrow="Core Stack"
      title="Technology Expertise"
      subtitle="Production-focused tooling for frontend performance, backend scalability, and distributed deployment reliability."
    />

    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="grid gap-6 md:grid-cols-2"
    >
      {skills.map((group) => {
        const GroupIcon = group.icon;
        return (
          <motion.div key={group.category} variants={item}>
            <Card className="h-full">
              <div className="mb-5 flex items-center gap-3">
                <span className="rounded-xl bg-white/10 p-2 text-sky-200">
                  <GroupIcon size={20} />
                </span>
                <h3 className="font-display text-xl font-semibold text-white">{group.category}</h3>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {group.items.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.03, x: 2 }}
                      className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 transition hover:border-sky-300/40 hover:shadow-glow"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-sky-200">
                          <Icon size={16} />
                        </span>
                        <span>{skill.name}</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </Card>
          </motion.div>
        );
      })}
    </motion.div>
  </section>
);

export default SkillsSection;
