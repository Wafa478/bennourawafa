
import React from 'react';
import { ThemeProvider } from '@/contexts/ThemeContext';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navigation />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
