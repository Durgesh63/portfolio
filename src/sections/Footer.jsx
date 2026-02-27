import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Footer = ({ socialLinks, name }) => {
  const github = socialLinks.find((item) => item.label === 'GitHub')?.href || '#';
  const linkedin = socialLinks.find((item) => item.label === 'LinkedIn')?.href || '#';

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      className="border-t border-white/10 py-8"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 text-sm text-slate-400 sm:flex-row sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} {name}. All rights reserved.</p>
        <div className="flex items-center gap-3">
          <a href={github} target="_blank" rel="noreferrer" className="hover:text-sky-300">
            <FaGithub size={16} />
          </a>
          <a href={linkedin} target="_blank" rel="noreferrer" className="hover:text-sky-300">
            <FaLinkedinIn size={16} />
          </a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
