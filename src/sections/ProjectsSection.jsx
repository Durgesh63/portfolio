import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { projects } from '../assets/data';

const ProjectsSection = () => (
  <section id="projects" className="section-shell">
    <SectionHeading
      eyebrow="Flagship Work"
      title="High-Impact Products"
      subtitle="Three product-scale implementations focused on performance, real-time capabilities, and backend resilience."
    />

    <div className="grid gap-8">
      {projects.map((project, index) => (
        <motion.article
          key={project.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          whileHover={{ rotateX: 2, rotateY: index % 2 === 0 ? -2 : 2, scale: 1.01 }}
          transition={{ duration: 0.55, type: 'spring', stiffness: 180, damping: 17 }}
          className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 shadow-[0_35px_90px_-55px_rgba(0,0,0,0.9)] backdrop-blur-xl"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-sky-500/10 via-transparent to-emerald-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />

          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h3 className="font-display text-2xl font-semibold text-white">{project.title}</h3>
              <p className="mt-3 max-w-3xl text-slate-300">{project.summary}</p>
            </div>
            <div className="flex gap-2">
              <Button href={project.github} variant="secondary" target="_blank" rel="noreferrer" className="!px-4 !py-2">
                <Github size={16} />
              </Button>
              <Button href={project.demo} variant="secondary" target="_blank" rel="noreferrer" className="!px-4 !py-2">
                <ExternalLink size={16} />
              </Button>
            </div>
          </div>

          <ul className="mt-5 grid gap-2 text-sm text-slate-300 sm:grid-cols-2">
            {project.features.map((feature) => (
              <li key={feature} className="rounded-lg border border-white/10 bg-slate-900/35 px-3 py-2">
                {feature}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ y: -2 }}
                className="rounded-full border border-sky-300/30 bg-sky-300/10 px-3 py-1 text-xs font-medium text-sky-200"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.article>
      ))}
    </div>
  </section>
);

export default ProjectsSection;
