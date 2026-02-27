import { useEffect, useState } from 'react';

export const useActiveSection = (sectionIds) => {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.35 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, [sectionIds]);

  return activeSection;
};
