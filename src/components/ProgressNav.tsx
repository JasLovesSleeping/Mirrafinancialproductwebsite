import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const ProgressNav = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const sections = [
    { id: 'client-profile', label: 'Client Profile' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'outcomes', label: 'Outcomes' },
    { id: 'outputs', label: 'Outputs' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Show nav after scrolling past hero (roughly 600px)
      setIsVisible(window.scrollY > 600);

      // Determine active section
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100; // Offset for fixed navbar
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:block"
        >
          
        </motion.div>
      )}
    </AnimatePresence>
  );
};
