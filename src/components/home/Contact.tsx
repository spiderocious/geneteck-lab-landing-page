import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';
import { getText } from '../../utils/text';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-[#0066FF] overflow-hidden"
      style={{
        backgroundImage: `url('https://moniepoint.com/contact/world.svg')`,
        backgroundPosition: 'right center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain'
      }}
    >
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-[600px] text-white mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-semibold mb-4"
          >
            {getText('contact.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90"
          >
            {getText('contact.description')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#0052CC] rounded-[32px] p-12"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                <img src="https://moniepoint.com/images/ng.svg" alt="Nigeria" className="w-5 h-5" />
              </div>
              <span className="text-white text-xl">{getText('contact.location.country')}</span>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <p className="text-white text-lg">{getText('contact.location.address')}</p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <p className="text-white text-lg">{getText('contact.location.email')}</p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <p className="text-white text-lg">{getText('contact.location.phone')}</p>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-white rounded-[32px] p-12 space-y-6"
          >
            <input
              type="text"
              name="name"
              placeholder={getText('contact.form.fullName')}
              value={formState.name}
              onChange={handleChange}
              className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-blue-500 text-gray-900"
              required
            />
            
            <input
              type="email"
              name="email"
              placeholder={getText('contact.form.email')}
              value={formState.email}
              onChange={handleChange}
              className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-blue-500 text-gray-900"
              required
            />
            
            <textarea
              name="message"
              placeholder={getText('contact.form.message')}
              value={formState.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-blue-500 text-gray-900 resize-none"
              required
            />
            
            <button
              type="submit"
              className="w-full py-4 bg-[#0066FF] text-white rounded-2xl font-medium hover:bg-[#0052CC] transition-colors"
            >
              {getText('contact.form.submit')}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;