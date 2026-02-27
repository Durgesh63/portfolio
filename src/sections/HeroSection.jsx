import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { FaReact, FaNodeJs, FaAws } from 'react-icons/fa';
import { SiMongodb, SiSocketdotio, SiDocker } from 'react-icons/si';
import Button from '../components/Button';
import Particles from '../components/Particles';
import { typingWords } from '../assets/data';
import { useTypingEffect } from '../hooks/useTypingEffect';

const resumeUrl = `https://drive.google.com/file/d/13g8MptiI2VM2YGn8C_yzEZgZWPpwYg73/view?usp=sharing`;

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  mail: HiOutlineMail,
};

const floatingTech = [
  { icon: FaReact, className: 'left-[12%] top-[30%] text-sky-300', delay: 0.2 },
  { icon: FaNodeJs, className: 'left-[20%] top-[62%] text-emerald-300', delay: 0.4 },
  { icon: SiMongodb, className: 'right-[18%] top-[32%] text-emerald-200', delay: 0.6 },
  { icon: SiSocketdotio, className: 'right-[10%] top-[58%] text-sky-200', delay: 0.8 },
  { icon: FaAws, className: 'left-[45%] top-[16%] text-orange-300', delay: 1 },
  { icon: SiDocker, className: 'right-[34%] top-[16%] text-cyan-200', delay: 1.2 },
];

const HeroSection = ({ socialLinks, profile }) => {
  const typed = useTypingEffect(typingWords);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-28">
      <Particles />
      {floatingTech.map((tech) => {
        const Icon = tech.icon;
        return (
          <motion.div
            key={tech.className}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.8, y: [0, -12, 0] }}
            transition={{ delay: tech.delay, duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className={`absolute hidden text-3xl md:block ${tech.className}`}
          >
            <Icon />
          </motion.div>
        );
      })}

      <div className="section-shell z-10">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 inline-flex rounded-full border border-sky-300/30 bg-sky-300/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-sky-200"
        >
          3+ Years Delivering Scalable Products
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-4xl font-extrabold leading-tight text-white sm:text-6xl"
        >
          {profile.name}
          <span className="mt-2 block bg-gradient-to-r from-sky-300 to-emerald-300 bg-clip-text text-transparent">
            {profile.role}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 max-w-2xl text-base text-slate-300 sm:text-lg"
        >
          I engineer full-stack systems that stay fast under load, scale cleanly across cloud infrastructure, and deliver
          polished user experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-5 h-8 text-lg font-semibold text-sky-200"
        >
          {typed}
          <span className="ml-1 inline-block h-5 w-[2px] animate-pulse bg-emerald-300 align-middle" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Button href="#projects">View Projects</Button>
          <Button target="_blank" href={resumeUrl} variant="secondary" download>
            Download Resume
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-10 flex items-center gap-3"
        >
          {socialLinks.map((social) => {
            const Icon = iconMap[social.icon];
            return (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noreferrer"
                className="glass rounded-full p-3 text-slate-100 transition hover:-translate-y-1 hover:text-sky-300 hover:shadow-glow"
              >
                <Icon size={18} />
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
