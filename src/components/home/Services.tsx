/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from 'framer-motion';
import { ArrowRight, Brain, Cpu, Globe2, Power } from 'lucide-react';
import React, { useState } from 'react';
import { getText } from '../../utils/text';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
  bgColor: string;
  iconColor: string;
  details: ServiceDetails;
}

interface ServiceDetails {
  methodology: string;
  impact: string;
  timeline: string;
}

const ServiceCard = ({ icon, title, description, index, bgColor, iconColor, details }: ServiceCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`card-flip ${isFlipped ? 'flipped' : ''} h-[400px] md:h-full md:min-h-[320px]`}
    >
      <div className="card-flip-inner">
        <div className="card-front p-5 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
          <div className={`mb-6 p-4 ${bgColor} rounded-2xl w-fit`}>
            {React.cloneElement(icon as React.ReactElement, {
              className: `w-8 h-8 ${iconColor}`
            })}
          </div>
          <h3 className="text-xl font-heading font-semibold mb-4 text-[#1a1a3f]">{title}</h3>
          <p className="text-gray-600 leading-relaxed mb-8">{description}</p>
          
          <motion.button
            onClick={() => setIsFlipped(true)}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 text-[#7c3aed] font-medium hover:gap-3 transition-all"
          >
            {getText('services.buttons.learnMore')} <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
        
        <div className="card-back p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
          <div className={`inline-flex items-center gap-2 px-4 py-2 ${bgColor} rounded-full mb-3`}>
            {React.cloneElement(icon as React.ReactElement, {
              className: `w-4 h-4 ${iconColor}`
            })}
            <span className={`text-sm font-medium ${iconColor}`}>{title}</span>
          </div>
          
          <div className="space-y-2 mb-4">
            <div>
              <h5 className="font-heading font-semibold mb-1 text-[#1a1a3f]">{getText('services.buttons.methodology')}</h5>
              <p className="text-gray-600 leading-relaxed">{details.methodology}</p>
            </div>
            <div>
              <h5 className="font-heading font-semibold mb-1 text-[#1a1a3f]">{getText('services.buttons.impact')}</h5>
              <p className="text-gray-600 leading-relaxed">{details.impact}</p>
            </div>
            <div>
              <h5 className="font-heading font-semibold mb-1 text-[#1a1a3f]">{getText('services.buttons.timeline')}</h5>
              <p className="text-gray-600 leading-relaxed">{details.timeline}</p>
            </div>
          </div>
          
          <motion.button
            onClick={() => setIsFlipped(false)}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 text-[#7c3aed] font-medium hover:gap-3 transition-all"
          >
            {getText('services.buttons.backToOverview')} <ArrowRight className="w-4 h-4 rotate-180" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const serviceIcons = [
    Power,
    Globe2,
    Brain,
    Cpu
  ];

  const serviceStyles = [
    {
      bgColor: "bg-green-50",
      iconColor: "text-green-500"
    },
    {
      bgColor: "bg-blue-50",
      iconColor: "text-blue-500"
    },
    {
      bgColor: "bg-purple-50",
      iconColor: "text-purple-500"
    },
    {
      bgColor: "bg-orange-50",
      iconColor: "text-orange-500"
    }
  ];

  const services = getText('services.features').map((service: any, index: number) => ({
    ...service,
    icon: serviceIcons[index],
    ...serviceStyles[index],
  }));

  return (
    <section id="services" className="min-h-screen flex items-center bg-gradient-to-br from-[#f5f3ff] via-[#fdf2f8] to-[#e0f2fe]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-heading mb-6 text-[#1a1a3f]"
          >
            {getText('services.title')}
            <span className="block mt-2 text-[#7c3aed]">{getText('services.subtitle')}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            {getText('services.description')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service: any, index: number) => (
            <ServiceCard
              key={service.title}
              icon={<service.icon />}
              title={service.title}
              description={service.description}
              bgColor={service.bgColor}
              iconColor={service.iconColor}
              details={service.details}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;