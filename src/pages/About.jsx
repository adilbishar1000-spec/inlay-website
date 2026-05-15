import React from "react";
import { motion } from "framer-motion";
import aboutHeroImg from "../assets/about_hero.png";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function About() {
  return (
    <div className="w-full bg-[#FAF8F5] min-h-screen pb-24 font-sans">
      
      {/* Hero Section */}
      <section className="relative w-full h-[120vh] min-h-[800px] flex items-center pt-32 pb-48 overflow-hidden">
        
        {/* Background Image & Gradients */}
        <div className="absolute inset-0 z-0">
          <img 
            src={aboutHeroImg} 
            alt="About Background" 
            className="w-full h-full object-cover"
          />
          {/* Top Gradient to blend with header */}
          <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-[#FAF8F5]/90 via-[#FAF8F5]/40 to-transparent"></div>
          {/* Bottom Gradient to blend with page background */}
          <div className="absolute bottom-0 left-0 right-0 h-80 bg-gradient-to-t from-[#FAF8F5] via-[#FAF8F5]/80 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full mt-24">
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.h1 
              variants={fadeUpVariant}
              className="text-6xl md:text-7xl lg:text-[80px] font-serif mb-8 text-white drop-shadow-sm font-medium tracking-wide"
            >
              About Us
            </motion.h1>
            
            <motion.p 
              variants={fadeUpVariant}
              className="text-xl md:text-2xl font-semibold mb-8 leading-snug text-white drop-shadow-sm"
            >
              We are a community of creators, preservers <br className="hidden md:block" />
              and dreamers.
            </motion.p>
            
            <motion.p 
              variants={fadeUpVariant}
              className="text-xl md:text-2xl font-semibold leading-snug text-white drop-shadow-sm max-w-2xl"
            >
              The inlay co was born out of passion <br className="hidden md:block" />
              to preserve the timeless art of ParchinKari <br className="hidden md:block" />
              and bring it to the world
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="relative z-20 max-w-[1400px] mx-auto px-6 lg:px-12 -mt-48">
        
        {/* Mission/Vision/Values Card */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="bg-[#FCFAF8] rounded-[40px] p-10 md:p-16 lg:p-20 shadow-[0_20px_50px_rgba(0,0,0,0.04)] mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-0">
            
            {/* Mission */}
            <div className="flex flex-col lg:pr-16 relative">
              <h2 className="text-2xl lg:text-3xl font-serif text-[#6A2B32] mb-6 font-bold tracking-wide">
                Our mission
              </h2>
              <p className="text-[#6A2B32]/80 text-lg leading-relaxed font-medium">
                To bring Parchin Kari into contemporary living through functional design while supporting artisans and preserving the craft.
              </p>
            </div>

            {/* Vision */}
            <div className="flex flex-col lg:px-16 lg:border-l border-[#6A2B32]/20 relative">
              <h2 className="text-2xl lg:text-3xl font-serif text-[#6A2B32] mb-6 font-bold tracking-wide">
                Our vision
              </h2>
              <p className="text-[#6A2B32]/80 text-lg leading-relaxed font-medium">
                To create a contemporary space where heritage craftsmanship becomes a part of everyday lifestyles through timeless and functional design.
              </p>
            </div>

            {/* Values */}
            <div className="flex flex-col lg:pl-16 lg:border-l border-[#6A2B32]/20 relative">
              <h2 className="text-2xl lg:text-3xl font-serif text-[#6A2B32] mb-6 font-bold tracking-wide">
                Our values
              </h2>
              <p className="text-[#6A2B32]/80 text-lg leading-relaxed font-medium">
                Craftsmanship Functionality<br/>
                Authenticity Sustainability<br/>
                Timelessness
              </p>
            </div>

          </div>
        </motion.div>

        {/* What Drives Us Card */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="bg-[#EBE5DD] rounded-[40px] p-10 md:p-16 lg:p-20 shadow-[0_15px_40px_rgba(0,0,0,0.03)]"
        >
          <h2 className="text-4xl lg:text-[56px] font-serif text-[#333] mb-10 tracking-wide font-normal">
            What Drives Us
          </h2>
          
          <div className="text-[#444] text-lg lg:text-xl leading-relaxed space-y-2 max-w-5xl font-medium">
            <p>
              A commitment to preserving traditional craftsmanship through contemporary design.
            </p>
            <p>
              We aim to create meaningful everyday objects that make handmade artistry more accessible and appreciated.
            </p>
            <p>
              Supporting artisans and sustaining the cultural value of Parchin Kari remains at the core of the brand.
            </p>
          </div>
        </motion.div>

      </section>

    </div>
  );
}
