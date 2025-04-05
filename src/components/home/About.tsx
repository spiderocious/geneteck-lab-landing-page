import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Globe2, Dna, Brain, FlaskConical } from 'lucide-react';
import { getText } from '../../utils/text';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  iconBgColor: string;
  iconColor: string;
}

const Feature = ({ icon, title, description, delay, iconBgColor, iconColor }: FeatureProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className="relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className={`mb-6 p-4 ${iconBgColor} rounded-2xl w-fit`}>
        {React.cloneElement(icon as React.ReactElement, { 
          className: `w-8 h-8 ${iconColor}` 
        })}
      </div>
      <h3 className="text-xl font-heading font-semibold mb-4 text-[#1a1a3f]">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
};

const About = () => {
  const featureIcons = [
    Globe2,
    Dna,
    Brain,
    FlaskConical
  ];

  const featureStyles = [
    {
      iconBgColor: "bg-blue-50",
      iconColor: "text-blue-500"
    },
    {
      iconBgColor: "bg-purple-50",
      iconColor: "text-purple-500"
    },
    {
      iconBgColor: "bg-pink-50",
      iconColor: "text-pink-500"
    },
    {
      iconBgColor: "bg-green-50",
      iconColor: "text-green-500"
    }
  ];

  const features = getText('about.features').map((feature, index) => ({
    ...feature,
    icon: featureIcons[index],
    ...featureStyles[index]
  }));

  return (
    <section id="about" className="min-h-screen flex items-center bg-gradient-to-br from-[#f5f3ff] via-[#fdf2f8] to-[#e0f2fe]">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-heading mb-6 text-[#1a1a3f]"
          >
            {getText('about.title')}
            <span className="block mt-2 text-[#7c3aed]">{getText('about.subtitle')}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            {getText('about.description')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Feature
              key={feature.title}
              icon={<feature.icon />}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
              iconBgColor={feature.iconBgColor}
              iconColor={feature.iconColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};


export default About