import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, History, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

import heroCraftImg from "../assets/hero-CRAFT.png";
import artboard4 from "../assets/Artboard 4.png";
import artboard5 from "../assets/Artboard 5.png";
import artboard6 from "../assets/Artboard 6.png";
import artboard7 from "../assets/Artboard 7.png";
import artboard8 from "../assets/Artboard 8.png";
import artboard9 from "../assets/Artboard 9.png";
import aarrImg from "../assets/AARR.png";

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
    transition: { staggerChildren: 0.2 }
  }
};

export default function TheCraft() {
  return (
    <div className="w-full bg-white min-h-screen pb-24 font-sans">
      
      {/* Hero Section */}
      <section className="relative w-full h-[100vh] min-h-[800px] flex items-center pt-32 pb-32 overflow-hidden">
        
        {/* Background Image & Gradients */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroCraftImg} 
            alt="The Craft Hero" 
            className="w-full h-full object-cover"
          />
          {/* Top Gradient to blend with header */}
          <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-white/95 via-white/50 to-transparent"></div>
          {/* Bottom Gradient to blend with page background */}
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
          {/* Subtle Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        {/* Floating Tag */}
        <div className="absolute top-40 right-6 md:right-16 z-20">
      <motion.div
  initial={{ 
    opacity: 0,
    x: 160,
    filter: "blur(14px)"
  }}
  
  animate={{ 
    opacity: 1,
    x: 0,
    filter: "blur(0px)"
  }}

  transition={{
    delay: .2,
    duration: 2,
    ease: [0.16, 1, 0.3, 1]
  }}

  className="bg-[#6A2B32]/70 backdrop-blur-md text-white px-8 py-5 rounded-[40px] text-sm font-medium tracking-wide text-center lg:text-right shadow-xl"
>
  Every piece tells a story
  <br />
  No two pieces are ever the same.
</motion.div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full mt-24">
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={staggerContainer}
            className="max-w-2xl"
          >
            <motion.p 
              variants={fadeUpVariant}
              className="text-white text-sm font-bold tracking-[0.25em] uppercase mb-4 drop-shadow-md"
            >
              OUR HERITAGE
            </motion.p>
            <motion.h1 
              variants={fadeUpVariant}
              className="text-5xl md:text-6xl lg:text-[72px] font-serif mb-8 text-white drop-shadow-lg font-medium leading-tight"
            >
              A legacy in every piece
            </motion.h1>
            
            <motion.div 
              variants={fadeUpVariant}
              className="text-lg md:text-xl font-semibold leading-relaxed text-white drop-shadow-md space-y-6"
            >
              <p>
                Parchin Kari, also known as Pietra Dura, flourished in the Mughal era and continues to be one of India's most refined art forms.
              </p>
              <p>
                It is the intricate art of inlaying hand-cut semi-precious stones into marble to create detailed patterns inspired by nature, geometry and tradition.
              </p>
              <p>
                Each piece reflects centuries of cultural richness, artistic excellence and the careful hands that keep this legacy alive.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* The Making Process Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20 relative z-20 bg-white">
        <motion.h2 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          variants={fadeUpVariant}
          className="text-4xl md:text-5xl lg:text-[56px] font-serif text-[#333] mb-16 tracking-wide font-normal"
        >
          The Making Process
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          
          {/* Step 1 */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUpVariant}>
            <div className="overflow-hidden mb-6 aspect-[4/2.5] lg:aspect-[4/3]">
              <img src={artboard4} alt="Design" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>
            <h3 className="text-[15px] font-bold text-[#333] tracking-[0.1em] mb-3 uppercase">Design</h3>
            <p className="text-[#555] leading-relaxed font-medium">
              Every piece begins with a hand-drawn design inspired by nature, tradition and geometry.
            </p>
          </motion.div>

	  {/* Step 6 */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUpVariant}>
            <div className="overflow-hidden mb-6 aspect-[4/2.5] lg:aspect-[4/3]">
              <img src={artboard9} alt="TIMELESS PIECE" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>
            <h3 className="text-[15px] font-bold text-[#333] tracking-[0.1em] mb-3 uppercase">TIMELESS PIECE</h3>
            <p className="text-[#555] leading-relaxed font-medium">
              A unique creation, crafted with patience and passion, ready to be cherished forever.
            </p>
          </motion.div>

	    {/* Step 5 */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUpVariant}>
            <div className="overflow-hidden mb-6 aspect-[4/2.5] lg:aspect-[4/3]">
              <img src={artboard8} alt="POLISHING" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>
            <h3 className="text-[15px] font-bold text-[#333] tracking-[0.1em] mb-3 uppercase">POLISHING</h3>
            <p className="text-[#555] leading-relaxed font-medium">
              The surface is smoothed and polished to perfection, revealing the natural beauty of the stones.
            </p>
          </motion.div>


          {/* Step 2 */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUpVariant}>
            <div className="overflow-hidden mb-6 aspect-[4/2.5] lg:aspect-[4/3]">
              <img src={artboard5} alt="Stone selection & cutting" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>
            <h3 className="text-[15px] font-bold text-[#333] tracking-[0.1em] mb-3 uppercase">Stone selection & cutting</h3>
            <p className="text-[#555] leading-relaxed font-medium">
              Semi-precious stones are carefully selected and hand-cut into precise shapes.
            </p>
          </motion.div>

          {/* Step 3 */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUpVariant}>
            <div className="overflow-hidden mb-6 aspect-[4/2.5] lg:aspect-[4/3]">
              <img src={artboard6} alt="Inlay" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>
            <h3 className="text-[15px] font-bold text-[#333] tracking-[0.1em] mb-3 uppercase">Inlay</h3>
            <p className="text-[#555] leading-relaxed font-medium">
              Each stone is inlaid into the marble by hand, following the artwork with precision
            </p>
          </motion.div>

          {/* Step 4 */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUpVariant}>
            <div className="overflow-hidden mb-6 aspect-[4/2.5] lg:aspect-[4/3]">
              <img src={artboard7} alt="FINISHING" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>
            <h3 className="text-[15px] font-bold text-[#333] tracking-[0.1em] mb-3 uppercase">FINISHING</h3>
            <p className="text-[#555] leading-relaxed font-medium">
              Fine detailing and cleaning bring out the clarity, color and character of the piece.
            </p>
          </motion.div>

      
        

        </div>
      </section>

      {/* Values/Icons Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          variants={fadeUpVariant}
          className="bg-[#F5EFE7] rounded-[40px] p-12 lg:p-16 shadow-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-0">
            
            {/* Value 1 */}
            <div className="flex flex-col items-center text-center lg:pr-12 relative">
              <div className="text-[#6A2B32] mb-6">
                <Leaf size={44} strokeWidth={1.5} />
              </div>
              <h4 className="text-[#6A2B32] font-semibold text-lg mb-3 tracking-wide">Made to last</h4>
              <p className="text-[#6A2B32]/90 text-sm leading-relaxed">
                Natural stones. Solid marble.<br/>Crafted to be cherished for generations.
              </p>
            </div>

            {/* Value 2 */}
            <div className="flex flex-col items-center text-center lg:px-12 lg:border-l lg:border-r border-[#6A2B32]/20 relative">
              <div className="text-[#6A2B32] mb-6">
                <History size={44} strokeWidth={1.5} />
              </div>
              <h4 className="text-[#6A2B32] font-semibold text-lg mb-3 tracking-wide">Rooted in history</h4>
              <p className="text-[#6A2B32]/90 text-sm leading-relaxed">
                Originated in the Mughal era, influenced by Persian artistry and Indian craftsmanship.
              </p>
            </div>

            {/* Value 3 */}
            <div className="flex flex-col items-center text-center lg:pl-12 relative">
              <div className="text-[#6A2B32] mb-6">
                <Sparkles size={44} strokeWidth={1.5} />
              </div>
              <h4 className="text-[#6A2B32] font-semibold text-lg mb-3 tracking-wide">Inspired by nature</h4>
              <p className="text-[#6A2B32]/90 text-sm leading-relaxed">
                floral motifs vines and geometric forms that celebrate beauty and balance.
              </p>
            </div>

          </div>
        </motion.div>
      </section>

      {/* Bottom CTA Box */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-12 mb-16">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          variants={fadeUpVariant}
          className="relative rounded-[40px] overflow-hidden shadow-lg h-auto md:h-[400px] bg-[#FAF8F5]"
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0 flex justify-end">
            <img 
              src={aarrImg} 
              alt="Crafted slowly" 
              className="w-full md:w-[70%] h-full object-cover md:object-right" 
            />
            {/* Fade image out towards the left so text is legible */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5] via-[#FAF8F5]/80 to-transparent w-full md:w-2/3"></div>
          </div>
          
          <div className="relative z-10 p-10 md:p-16 lg:p-20 flex flex-col justify-center h-full w-full md:w-1/2">
            <h2 className="text-4xl lg:text-[46px] font-serif text-[#6A2B32] mb-6 leading-[1.1] tracking-wide">
              Crafted slowly <br className="hidden md:block" />
              Cherished forever
            </h2>
            <p className="text-[#6A2B32] text-lg lg:text-xl mb-10 font-medium leading-relaxed max-w-sm">
              It takes days. Sometimes weeks. But the beauty of Parchin Kari lies in the time, care and soul spent in every detail.
            </p>
            <Link to="/artisans" className="group flex items-center text-[#6A2B32] font-bold tracking-[0.15em] text-[13px] hover:opacity-80 transition-opacity w-fit uppercase">
              Meet the artisans
              <span className="ml-4 bg-[#6A2B32] text-white p-1.5 rounded-full transform group-hover:translate-x-1 transition-transform">
                <ArrowRight size={16} />
              </span>
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
