import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, ChevronDown } from 'lucide-react';

const faqs = [
  "Q1. Do you offer custom designs?",
  "Q2. How long does it take to complete an order?",
  "Q3. Do you ship across India?",
  "Q4. Are the products handmade?",
  "Q5. How can I track my order?"
];

const Support = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeFaq, setActiveFaq] = useState(null);

  return (
    <div className="bg-brand-bg min-h-screen pb-24">
      {/* Hero Section for Support */}
      <section className="relative pt-32 pb-48 md:pb-64 flex items-center justify-start overflow-hidden">
        {/* Background Image with slight zoom animation */}
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent z-10" /> 
          <img 
            src="/images/hero.jpg" 
            alt="Artisan working on marble inlay" 
            className="w-full h-full object-cover object-center"
          />
        </motion.div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 z-20 w-full relative">
          <motion.div 
            className="max-w-xl text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-xs font-bold tracking-widest uppercase mb-4 opacity-90">We are here to help</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-tight mb-6 text-white drop-shadow-md">
              Contact us
            </h1>
            <div className="w-16 h-[2px] bg-white/70 mb-6" />
            <p className="text-base md:text-lg text-white/90 leading-relaxed font-light drop-shadow-sm max-w-md">
              We'd love to hear from you.<br/>
              Fill out the form or reach us directly through any of the options below
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form and Contact Methods Section */}
      <section className="relative z-30 max-w-5xl mx-auto px-6 -mt-32 md:-mt-48 mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-[#FDFBF7] rounded-[2rem] shadow-xl p-8 md:p-14 border border-gray-100"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-2">Send us a message</h2>
          <p className="text-gray-600 mb-10 font-light">Fill out the form and we'll get back to you as soon as possible.</p>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium text-sm mb-2">Full name</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-brand-maroon transition-colors"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium text-sm mb-2">Email address</label>
                <input 
                  type="email" 
                  className="w-full bg-transparent border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-brand-maroon transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 font-medium text-sm mb-2">Subject</label>
              <div className="relative">
                <select className="w-full bg-transparent border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-brand-maroon transition-colors appearance-none cursor-pointer">
                  <option value="" disabled selected></option>
                  <option value="inquiry">General Inquiry</option>
                  <option value="order">Order Status</option>
                  <option value="custom">Custom Design</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 font-medium text-sm mb-2">Message</label>
              <textarea 
                rows="5"
                className="w-full bg-transparent border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-brand-maroon transition-colors resize-none"
              ></textarea>
            </div>
            <button 
              type="button"
              className="bg-brand-maroon text-white font-medium px-8 py-3.5 rounded-xl hover:bg-brand-maroon/90 transition-colors"
            >
              Send your message
            </button>
          </form>
        </motion.div>

        {/* Other ways to reach us */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-[#EFEBE4] rounded-[2rem] p-10 flex flex-col items-center"
        >
          <div className="flex items-center space-x-4 mb-10 w-full justify-center">
            <div className="h-[1px] bg-gray-400 w-12 flex-shrink-0 relative">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 border-t border-r border-gray-400 transform rotate-45"></div>
            </div>
            <h3 className="font-serif text-2xl text-gray-800 tracking-wide text-center">Other ways to reach us</h3>
            <div className="h-[1px] bg-gray-400 w-12 flex-shrink-0 relative">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 border-b border-l border-gray-400 transform rotate-45"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 w-full divide-y md:divide-y-0 md:divide-x divide-gray-300">
            <div className="flex flex-col items-center justify-center pt-4 md:pt-0">
              <div className="flex items-center space-x-3 mb-1">
                <Phone className="text-gray-800" size={24} />
                <span className="font-bold text-gray-900 text-lg">Call us</span>
              </div>
              <p className="text-gray-600 ml-9">+91 9897560341</p>
            </div>
            <div className="flex flex-col items-center justify-center pt-8 md:pt-0">
              <div className="flex items-center space-x-3 mb-1">
                <Mail className="text-gray-800" size={24} />
                <span className="font-bold text-gray-900 text-lg">Mail us</span>
              </div>
              <p className="text-gray-600 ml-9">theinlayco@gmail.com</p>
            </div>
            <div className="flex flex-col items-center justify-center pt-8 md:pt-0">
              <div className="flex items-center space-x-3 mb-1">
                <MapPin className="text-gray-800" size={24} />
                <span className="font-bold text-gray-900 text-lg">Visit us</span>
              </div>
              <p className="text-gray-600 ml-9">Chennai, India</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-6 pt-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-2">Frequently Asked Questions</h2>
          <p className="text-gray-600 mb-10 font-light">Find quick answers to the most common questions.</p>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                className={`cursor-pointer rounded-xl px-6 py-5 transition-colors flex flex-col
                  ${index % 2 === 0 ? 'bg-[#EFEBE4]' : 'bg-[#FDFBF7] border border-[#EFEBE4]'}
                `}
              >
                <div className="flex justify-between items-center text-gray-800 font-medium">
                  {faq}
                  <ChevronDown className={`transform transition-transform duration-300 ${activeFaq === index ? 'rotate-180' : ''}`} size={20} />
                </div>
                <AnimatePresence>
                  {activeFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: "auto", opacity: 1, marginTop: 12 }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      className="overflow-hidden text-gray-600 font-light"
                    >
                      <p>This is a placeholder answer. You can replace this text with the actual details and procedures regarding {faq.replace(/^Q\d+\. /, '').toLowerCase()}.</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Support;
