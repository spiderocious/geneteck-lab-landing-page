import React from 'react';
import { motion } from 'framer-motion';
import { Microscope, BookOpen, Shield, Activity, Users, Settings } from 'lucide-react';
import { getText } from '../../utils/text';

const Header = () => {
  const navItems = [
    { name: getText('header.nav.about'), icon: BookOpen },
    { name: getText('header.nav.research'), icon: Shield },
    { name: getText('header.nav.services'), icon: Activity },
    { name: getText('header.nav.publications'), icon: BookOpen },
    { name: getText('header.nav.team'), icon: Users },
    { name: getText('header.nav.contact'), icon: Settings }
  ];

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100"
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <motion.a
            href="/"
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative">
              <Microscope className="w-8 h-8 text-primary-blue group-hover:rotate-180 transition-transform duration-500" />
              <div className="absolute inset-0 bg-primary-blue/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="font-heading font-semibold text-xl text-[#1a1a3f]">
              {getText('header.logo')}
            </span>
          </motion.a>
          
          <nav className="hidden md:block">
            <ul className="flex items-center gap-2">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a 
                    href={`#${item.name.toLowerCase()}`}
                    className="px-4 py-2 text-[15px] font-medium text-gray-600 hover:text-primary-blue transition-colors"
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>
          
          <div className="hidden items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="hidden md:block px-6 py-2 text-[15px] font-medium text-gray-600 hover:text-primary-blue transition-colors rounded-full bg-white/50"
            >
              {getText('header.cta.portal')}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-6 py-2 text-[15px] font-medium text-white bg-[#7c3aed] rounded-full hover:bg-[#6d28d9] transition-colors"
            >
              {getText('header.cta.consultation')}
            </motion.button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;