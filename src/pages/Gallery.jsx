import React from "react";
import { motion } from "framer-motion";

// Import all gallery images
import img1 from "../assets/gallery-1.jpg";
import img2 from "../assets/gallery-2.jpg";
import img3 from "../assets/gallery-3.jpg";
import img4 from "../assets/gallery-4.jpg";
import img6 from "../assets/gallery-6.jpg";
import img7 from "../assets/gallery-7.jpg";
import img8 from "../assets/gallery-8.jpg";
import img9 from "../assets/gallery-9.jpg";
import img10 from "../assets/gallery-10.jpg";
import img11 from "../assets/gallery-11.webp";
import img12 from "../assets/gallery-12.jpg";
import img13 from "../assets/gallery-13.jpg";
import img20 from "../assets/gallery-20.JPG";

const galleryImages = [
  img1, img2, img3, img4, img6, img7, img8, img10, img11, img12, img13, img20
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

export default function Gallery() {
  return (
    <div className="w-full bg-[#FAF8F5] min-h-screen pb-24 font-sans pt-32 lg:pt-40">
      
      {/* Banner Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={fadeUpVariant}
          className="relative bg-[#EBE5DD] rounded-[40px] overflow-hidden flex flex-col md:flex-row shadow-[0_10px_30px_rgba(0,0,0,0.03)] min-h-[300px]"
        >
          {/* Left Content */}
          <div className="p-12 md:p-16 lg:p-20 flex-1 z-10 flex flex-col justify-center">
            <h1 className="text-5xl md:text-6xl lg:text-[72px] font-serif text-[#333] mb-6 tracking-wide">
              Gallery
            </h1>
            <p className="text-[#555] text-lg font-medium leading-relaxed max-w-md">
              A glimpse into the beauty of ParchinKari. Explore our handcrafted creations, intricate details and timeless designs.
            </p>
          </div>
          
          {/* Right Image Mask */}
          <div className="absolute right-0 top-0 bottom-0 w-full md:w-[60%] z-0">
             <div className="absolute inset-0 bg-gradient-to-r from-[#EBE5DD] via-[#EBE5DD]/50 to-transparent z-10"></div>
             <img 
               src={img9} 
               alt="Gallery Banner" 
               className="w-full h-full object-cover object-center" 
             />
          </div>
        </motion.div>
      </section>

      {/* Masonry Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
          {galleryImages.map((imgSrc, index) => (
            <motion.div 
              key={index}
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, margin: "50px" }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: (index % 4) * 0.1 } }
              }}
              className="break-inside-avoid overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 group bg-white"
            >
              <img 
                src={imgSrc} 
                alt={`Gallery artwork ${index + 1}`} 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" 
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
