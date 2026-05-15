import React, { useEffect } from "react";
import { motion } from "framer-motion";

import heroArtist from "../assets/hero-artist.jpg";
import designArtist from "../assets/design-artist.jpg";
import arifImg from "../assets/Mohammad arif, 42png.png";
import sameerImg from "../assets/Sameer khan, 26.png";
import rahimImg from "../assets/Abdul rahim, 55.png";
import farhanImg from "../assets/Farhan sheikh, 34.png";
import zaidImg from "../assets/Zaid mansoori, 24.png";

const artisans = [
  {
    name: "Mohammad Arif, 42",
    image: arifImg,
    description: "A master of stone-cutting precision, he specializes in shaping semi-precious gems for intricate floral motifs.",
  },
  {
    name: "Sameer Khan, 26",
    image: sameerImg,
    description: "The lead for pattern tracing, he focuses on bridging traditional Mughal geometry with modern design aesthetics.",
  },
  {
    name: "Abdul Rahim, 55",
    image: rahimImg,
    description: "A veteran engraver with over three decades of experience, he carves the deep grooves that form the heart of the inlay.",
  },
  {
    name: "Farhan Sheikh, 34",
    image: farhanImg,
    description: "A specialist in finishing and polishing, he is responsible for giving the marble its signature mirror-like glow.",
  },
  {
    name: "Zaid Mansoori, 22",
    image: zaidImg,
    description: "Part of the new generation of artisans, he focuses on the selection and color grading of natural stones.",
  }
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Artisans() {
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[#FAF8F5] min-h-screen pb-24 font-sans pt-32 lg:pt-40">
      
      {/* Top Banner Section */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-24 relative">
        <motion.div 
          initial="hidden" animate="visible" variants={fadeUpVariant}
          className="relative min-h-[400px] flex items-center bg-[#EBE5DD] rounded-[40px] overflow-hidden"
        >
          {/* Text Content */}
          <div className="relative z-10 p-10 md:p-16 lg:p-20 w-full lg:w-1/2">
            <h3 className="text-[#333] font-bold text-sm tracking-widest uppercase mb-4">Meet our artisans</h3>
            <h1 className="text-5xl md:text-6xl font-serif text-[#333] mb-6 leading-[1.1] tracking-wide">
              The hands <br/> behind the heritage
            </h1>
            <p className="text-[#444] text-lg font-bold leading-relaxed max-w-md">
              Our artisans carry forward centuries of tradition with unmatched skill, patience and passion.
            </p>
          </div>
          
          {/* Image */}
          <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[60%] z-0 flex justify-end">
             <div className="absolute inset-0 bg-gradient-to-r from-[#EBE5DD] via-[#EBE5DD]/70 to-transparent z-10 hidden lg:block"></div>
             <img src={heroArtist} alt="Heritage Hands" className="w-full h-full object-cover object-right-top" />
          </div>
        </motion.div>
      </section>

      {/* Middle Keepers Section */}
      <section className="max-w-[1200px] mx-auto px-6 lg:px-12 mb-24">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
          className="flex flex-col md:flex-row items-center gap-12 lg:gap-20"
        >
          <div className="flex-1">
            <h3 className="text-[#333] font-bold text-sm tracking-widest uppercase mb-4">Our Artisans</h3>
            <h2 className="text-4xl md:text-5xl font-serif text-[#333] mb-6 tracking-wide">
              Keepers of tradition.
            </h2>
            <p className="text-[#555] font-medium leading-relaxed">
              Behind every inlay lies a story of dedication. Our artisans come from families where this craft has been passed down through generations. With steady hands and a deep understanding of detail, they turn natural stones into timeless expressions of art.
            </p>
          </div>

          <div className="flex-1 w-full relative rounded-[40px] overflow-hidden bg-[#e6dfd5] min-h-[300px]">
            <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#FAF8F5] to-transparent z-10 hidden md:block"></div>
            <img src={designArtist} alt="Traditional Craftsmanship" className="w-full h-full object-cover rounded-[40px]" />
          </div>
        </motion.div>
      </section>

      {/* Grid Section */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {artisans.map((artisan, index) => (
            <motion.div 
              key={index}
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "50px" }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: (index % 3) * 0.1 } }
              }}
              className="bg-[#F4EFEA] rounded-[40px] p-8 flex flex-col items-center text-center shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-48 h-48 md:w-56 md:h-56 mb-6 rounded-full overflow-hidden bg-white/50 border-4 border-white/50 shadow-sm relative flex items-end justify-center">
                {/* Adding fade gradient to bottom of image similar to reference */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#F4EFEA]/80 via-transparent to-transparent z-10"></div>
                <img src={artisan.image} alt={artisan.name} className="w-full h-full object-cover object-top z-0" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#333] mb-4">
                {artisan.name}
              </h3>
              <p className="text-[#555] font-medium leading-relaxed text-[15px] max-w-xs">
                {artisan.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
