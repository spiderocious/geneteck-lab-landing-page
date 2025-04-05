import React from 'react';
import { motion } from 'framer-motion';
import { Beaker, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { getText } from '../../utils/text';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-primary-blue/5 to-accent-teal/5 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Beaker className="w-8 h-8 text-primary-blue" />
              <span className="font-heading font-bold text-xl">{getText('footer.company.name')}</span>
            </div>
            <p className="text-gray-600 font-body mb-4">
              {getText('footer.company.description')}
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Github />, href: "#" },
                { icon: <Linkedin />, href: "#" },
                { icon: <Twitter />, href: "#" },
                { icon: <Mail />, href: "#" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  className="p-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  {React.cloneElement(social.icon as React.ReactElement, {
                    className: "w-5 h-5 text-primary-blue"
                  })}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">{getText('footer.quickLinks.title')}</h3>
            <ul className="space-y-2">
              {getText('footer.quickLinks.links').map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-600 hover:text-primary-blue transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">{getText('footer.services.title')}</h3>
            <ul className="space-y-2">
              {getText('footer.services.items').map((service) => (
                <li key={service}>
                  <a href="#services" className="text-gray-600 hover:text-primary-blue transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">{getText('footer.contact.title')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-primary-blue mt-1" />
                <span className="text-gray-600">{getText('contact.location.email')}</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-5 h-5 flex-shrink-0" />
                <address className="text-gray-600 not-italic">
                  {getText('contact.location.address')}
                </address>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-8 text-center">
          <p className="text-gray-600 font-body">
            {getText('footer.copyright').replace('{year}', currentYear.toString())}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;