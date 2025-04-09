import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { ArrowRight } from 'lucide-react';
import { getText } from '../../utils/text';
import { useTypewriter } from '../../hooks/useTypewriter';

gsap.registerPlugin(TextPlugin);

interface FloatingElementProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
}

const FloatingElement = ({ children, delay = 0, duration = 20 }: FloatingElementProps) => (
  <motion.div
    initial={{ y: 0 }}
    animate={{ 
      y: [-20, 20, -20],
      rotate: [-5, 5, -5]
    }}
    transition={{ 
      duration, 
      repeat: Infinity,
      delay,
      ease: "easeInOut"
    }}
  >
    {children}
  </motion.div>
);

const Hero = () => {
  const dnaRef = useRef<HTMLImageElement>(null);
  const titleRef = useTypewriter(getText('hero.title'), 0.5);
  const subtitleRef = useTypewriter(getText('hero.subtitle'), 2);
  const emphasisRef = useTypewriter(getText('hero.emphasis'), 3);

  useEffect(() => {
    if (dnaRef.current) {
      gsap.to(dnaRef.current, {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none"
      });
    }
  }, []);

  return (
    <div 
      data-scroll 
      data-scroll-speed="-7"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#f5f3ff] via-[#fdf2f8] to-[#e0f2fe]"
    >
      {/* Animated Background Illustrations */}
      <div className="inset-0 overflow-hidden">
        <div className="relative w-full h-full">
          {/* Hot Air Balloons */}
          <FloatingElement delay={0} duration={15}>
            <img 
              ref={dnaRef}
              src="https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?auto=format&fit=crop&q=80&w=100" 
              className="absolute top-[20%] left-[15%] w-24 h-24 object-cover rounded-full shadow-lg" 
              alt="Floating element" />
          </FloatingElement>
          
          <FloatingElement delay={2} duration={18}>
            <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=100" 
              className="absolute top-[30%] right-[20%] w-32 h-32 object-cover rounded-full shadow-lg" 
              alt="Floating element" />
          </FloatingElement>

          <FloatingElement delay={1} duration={20}>
            <img src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=100" 
              className="absolute bottom-[25%] left-[25%] w-28 h-28 object-cover rounded-full shadow-lg" 
              alt="Floating element" />
          </FloatingElement>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1 
            ref={titleRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-heading text-5xl md:text-7xl lg:text-[85px] font-bold mb-4 text-[#1a1a3f] tracking-[-0.03em]"
          ></motion.h1>

          <div className="flex items-center justify-center gap-4 mb-8">
            <motion.h2
              ref={subtitleRef}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-heading text-4xl md:text-6xl lg:text-[85px] font-bold text-[#1a1a3f] tracking-[-0.03em]"
            ></motion.h2>
            <motion.span
              ref={emphasisRef}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-heading text-4xl md:text-6xl lg:text-[85px] font-bold italic text-[#1a1a3f] tracking-[-0.03em]"
            ></motion.span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-3xl mx-auto mb-12"
          >
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              {getText('hero.description')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex items-center justify-center gap-6"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="group flex items-center gap-2 px-8 py-4 bg-[#7c3aed] text-white rounded-full font-medium hover:bg-[#6d28d9] transition-all text-[15px]"
            >
              {getText('hero.cta')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;