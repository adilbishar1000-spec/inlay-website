import React from 'react';
import { motion } from 'framer-motion';

const Placeholder = ({ title }) => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center pt-24 pb-12 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6">{title}</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          This is a placeholder page for {title}. Content will be added here soon.
        </p>
      </motion.div>
    </div>
  );
};

export default Placeholder;
