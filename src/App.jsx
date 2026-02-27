import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import ScrollTopButton from './components/ScrollTopButton';
import CursorGlow from './components/CursorGlow';
import LoadingScreen from './components/LoadingScreen';
import BackgroundBlobs from './components/BackgroundBlobs';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ExperienceSection from './sections/ExperienceSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSection from './sections/ContactSection';
import Footer from './sections/Footer';
import { profile, socialLinks } from './assets/data';
import { useActiveSection } from './hooks/useActiveSection';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const sectionIds = useMemo(() => ['home', 'about', 'skills', 'experience', 'projects', 'contact'], []);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1350);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <ScrollProgress />
      <BackgroundBlobs />
      <CursorGlow />
      <Navbar activeSection={activeSection} brand={profile.brand} />

      <AnimatePresence>{isLoading ? <LoadingScreen key="loader" /> : null}</AnimatePresence>

      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 12 : 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative z-20"
      >
        <HeroSection socialLinks={socialLinks} profile={profile} />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        {/* <ContactSection /> */}
        <Footer socialLinks={socialLinks} name={profile.name} />
      </motion.main>

      <ScrollTopButton />
    </>
  );
};

export default App;
