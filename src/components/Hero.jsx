import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShieldCheck, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

const badges = [
  { icon: <CheckCircle2 size={18} className="text-white" />, bgClass: "bg-brand-maroon", text: "Handcrafted by skilled artisans" },
  { icon: <ShieldCheck size={18} className="text-brand-maroon" />, bgClass: "bg-white", text: "Premium quality marble" },
  { icon: <RefreshCw size={18} className="text-brand-maroon" />, bgClass: "bg-white", text: "Easy returns hassle-free" }
];

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-start overflow-hidden">
      {/* Background Image with slight zoom animation */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-black/20 z-10" /> {/* Overlay for text readability */}
        <img 
          src="/images/hero.jpg" 
          alt="Artisan working on marble inlay" 
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* Badges Overlay */}
      <div className="absolute top-32 right-6 md:right-12 z-20 flex flex-col space-y-3">
        {badges.map((badge, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 + (index * 0.2) }}
            className="flex items-center space-x-3 bg-brand-maroon/80 backdrop-blur-md py-2 px-4 rounded-full shadow-sm max-w-[240px]"
          >
            <div className={`${badge.bgClass} rounded-full p-1 shadow-sm`}>
              {badge.icon}
            </div>
            <span className="text-xs font-medium text-white leading-tight">
              {badge.text}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 z-20 w-full mt-12">
        <motion.div 
          className="max-w-xl text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-tight mb-6 text-white drop-shadow-md">
            The beauty of <br /> parchinkari
          </h1>
          <p className="text-base md:text-lg text-white/90 mb-10 leading-relaxed font-light drop-shadow-sm max-w-md">
            Parchin Kari is the intricate art of inlaying semi-precious stones into marble. 
            A timeless tradition that transforms stone into stories.
          </p>
          
          <Link to="/the-craft" className="w-fit group flex items-center space-x-3 bg-black/30 hover:bg-black/50 backdrop-blur-sm border border-white/40 text-white px-8 py-4 rounded-full transition-all duration-300">
            <span className="text-xs font-semibold tracking-widest uppercase">Discover the craft</span>
            <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
