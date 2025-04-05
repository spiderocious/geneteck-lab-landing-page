import React from 'react';
import { motion } from 'framer-motion';
import { Globe2, Zap, Sun, Cpu } from 'lucide-react';
import { getText } from '../../utils/text';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const FeatureCard = ({ title, description, icon, index }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col gap-4"
    >
      <div className="w-12 h-12 rounded-xl bg-[#E5E7EB] bg-opacity-40 flex items-center justify-center">
        {React.cloneElement(icon as React.ReactElement, { className: "w-6 h-6 text-[#6366F1]" })}
      </div>
      <h3 className="text-[22px] font-semibold text-[#1F2937]">{title}</h3>
      <p className="text-[#6B7280] leading-relaxed">{description}</p>
    </motion.div>
  );
};

const Research = () => {
  const featureIcons = [
    Globe2,
    Cpu,
    Zap,
    Sun
  ];

  const features = getText('research.features').map((feature, index) => ({
    ...feature,
    icon: featureIcons[index]
  }));

  return (
    <section id="research" className="min-h-screen py-24 bg-gradient-to-br from-white to-purple-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-semibold text-[#1F2937] mb-6"
            >
              {getText('research.title')}<br />
              {getText('research.subtitle')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[#6B7280] text-lg mb-12 leading-relaxed"
            >
              {getText('research.description')}
            </motion.p>
            
            <div className="grid md:grid-cols-2 gap-12">
              {features.map((feature, index) => (
                <FeatureCard
                  key={feature.title}
                  title={feature.title}
                  description={feature.description}
                  icon={<feature.icon />}
                  index={index}
                />
              ))}
            </div>
          </div>

          <div className="relative">
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              src="https://fly.io/phx/ui/images/fly-globe-cb332f77ddb429aa3ef4e0a2c6c592ba.png?vsn=d"
              alt="Global Infrastructure"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;