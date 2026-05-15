import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, ChevronDown } from "lucide-react";
import { products } from "../data/products";
import bannerImg from "../assets/product-11.png"; // using a large image for banner

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Shop() {
  return (
    <div className="w-full bg-[#FAF8F5] min-h-screen pb-24 font-sans pt-32 lg:pt-40">
      
      {/* Hero Banner */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-12">
        <motion.div 
          initial="hidden" animate="visible" variants={fadeUpVariant}
          className="relative rounded-[40px] overflow-hidden flex flex-col md:flex-row shadow-[0_10px_30px_rgba(0,0,0,0.02)] min-h-[350px] bg-white"
        >
          {/* Background Image Mask */}
          <div className="absolute inset-0 z-0 flex justify-end">
             <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5] via-[#FAF8F5]/80 to-transparent z-10 w-full md:w-2/3"></div>
             <img 
               src={bannerImg} 
               alt="Shop Banner" 
               className="w-full md:w-[70%] h-full object-cover object-center" 
             />
          </div>

          {/* Left Content */}
          <div className="relative z-10 p-12 md:p-16 lg:p-20 flex-1 flex flex-col justify-center">
            <h1 className="text-5xl md:text-6xl lg:text-[72px] font-serif text-[#333] mb-6 leading-[1.1] tracking-wide">
              Shop Handcrafted <br className="hidden lg:block"/>
              Inlay Creations
            </h1>
            <p className="text-[#555] text-lg font-medium leading-relaxed max-w-sm">
              Timeless pieces of art, crafted by skilled hands and inspired by heritage.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Filter Bar */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-10">
        <motion.div 
          initial="hidden" animate="visible" variants={fadeUpVariant}
          className="bg-[#EBE5DD] rounded-full px-8 py-4 flex items-center justify-between shadow-sm"
        >
          <div className="flex items-center space-x-6 text-[#444] font-semibold text-sm tracking-widest uppercase">
            <span>Filter</span>
            <div className="w-[1px] h-5 bg-[#444]/30"></div>
            <button className="flex items-center space-x-2 hover:opacity-70 transition-opacity">
              <span>Category</span>
              <ChevronDown size={16} />
            </button>
          </div>
          
          <button className="flex items-center space-x-2 text-[#444] font-semibold text-sm tracking-widest uppercase hover:opacity-70 transition-opacity">
            <span>Sort by</span>
            <ChevronDown size={16} />
          </button>
        </motion.div>
      </section>

      {/* Product Grid */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
          {products.map((product, index) => (
            <motion.div 
              key={product.id}
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "50px" }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: (index % 4) * 0.1 } }
              }}
              className="group flex flex-col"
            >
              <Link to={`/product/${product.id}`} className="overflow-hidden bg-[#f0ebe1] aspect-square mb-5 relative block">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover mix-blend-multiply transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </Link>
              
              <div className="flex flex-col flex-grow">
                <Link to={`/product/${product.id}`}>
                  <h3 className="text-[#333] font-bold text-[15px] leading-snug mb-3 hover:text-[#6A2B32] transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                </Link>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-[#555] font-semibold text-sm">₹{product.price}</span>
                  <button className="text-[#6A2B32] hover:scale-110 transition-transform">
                    <Heart size={20} strokeWidth={1.5} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* View More Button */}
      <div className="flex justify-center mt-20">
        <button className="bg-[#B5ADA3] hover:bg-[#a39a8e] text-white px-10 py-3 rounded-full font-bold tracking-[0.15em] text-sm uppercase transition-colors shadow-sm">
          View More
        </button>
      </div>

    </div>
  );
}
