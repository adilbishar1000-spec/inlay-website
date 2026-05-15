import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, ChevronDown } from "lucide-react";
import { products } from "../data/products";
import bannerImg from "../assets/hero-shop.jpeg"; // using a large image for banner

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Shop() {
  const [visibleCount, setVisibleCount] = useState(12);
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [sortType, setSortType] = useState('default');
  
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

  const categories = ['All', 'Gift sets', 'Home decor', 'Table top', 'Utility'];

  let filteredProducts = [...products];
  if (categoryFilter !== 'All') {
    filteredProducts = filteredProducts.filter(p => p.category === categoryFilter);
  }

  if (sortType === 'low-to-high') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortType === 'high-to-low') {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  const displayedProducts = filteredProducts.slice(0, visibleCount);

  return (
    <div className="w-full bg-[#FAF8F5] min-h-screen pb-24 font-sans pt-32 lg:pt-40">

      {/* Hero Banner */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-12">
        <motion.div
          initial="hidden" animate="visible" variants={fadeUpVariant}
          className="relative rounded-[40px] overflow-hidden flex flex-col md:flex-row shadow-[0_10px_30px_rgba(0,0,0,0.02)] min-h-[350px] bg-white"
        >
          {/* Background Image Mask */}
          <div className="absolute inset-0 z-0 flex justify-end overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5] via-[#FAF8F5] to-transparent z-10 w-full md:w-[85%]"></div>
            <motion.img
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
              src={bannerImg}
              alt="Shop Banner"
              className="w-full md:w-[70%] h-full object-cover object-center"
            />
          </div>

          {/* Left Content */}
          <div className="relative z-10 p-12 md:p-16 lg:p-20 flex-1 flex flex-col justify-center">
            <h1 className="text-5xl md:text-6xl lg:text-[72px] font-serif text-[#333] mb-6 leading-[1.1] tracking-wide">
              Shop Handcrafted <br className="hidden lg:block" />
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
          <div className="flex items-center space-x-6 text-[#444] font-semibold text-sm tracking-widest uppercase relative z-50">
            <span>Filter</span>
            <div className="w-[1px] h-5 bg-[#444]/30"></div>
            <div className="relative">
              <button 
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                className="flex items-center space-x-2 hover:opacity-70 transition-opacity"
              >
                <span>{categoryFilter === 'All' ? 'Category' : categoryFilter}</span>
                <ChevronDown size={16} />
              </button>
              {isCategoryOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-lg border border-gray-100 py-2 w-48 z-50">
                  {categories.map(cat => (
                    <button 
                      key={cat}
                      onClick={() => { setCategoryFilter(cat); setIsCategoryOpen(false); setVisibleCount(12); }}
                      className="block w-full text-left px-4 py-2 hover:bg-[#FAF8F5] text-[#333] transition-colors"
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          <div className="relative z-50">
            <button 
              onClick={() => setIsSortOpen(!isSortOpen)}
              className="flex items-center space-x-2 text-[#444] font-semibold text-sm tracking-widest uppercase hover:opacity-70 transition-opacity"
            >
              <span>{sortType === 'default' ? 'Sort by' : sortType === 'low-to-high' ? 'Low to High' : 'High to Low'}</span>
              <ChevronDown size={16} />
            </button>
            {isSortOpen && (
              <div className="absolute top-full right-0 mt-2 bg-white rounded-xl shadow-lg border border-gray-100 py-2 w-48 z-50">
                <button 
                  onClick={() => { setSortType('default'); setIsSortOpen(false); }}
                  className="block w-full text-left px-4 py-2 hover:bg-[#FAF8F5] text-[#333] transition-colors"
                >
                  Default
                </button>
                <button 
                  onClick={() => { setSortType('low-to-high'); setIsSortOpen(false); }}
                  className="block w-full text-left px-4 py-2 hover:bg-[#FAF8F5] text-[#333] transition-colors"
                >
                  Price: Low to High
                </button>
                <button 
                  onClick={() => { setSortType('high-to-low'); setIsSortOpen(false); }}
                  className="block w-full text-left px-4 py-2 hover:bg-[#FAF8F5] text-[#333] transition-colors"
                >
                  Price: High to Low
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </section>

      {/* Product Grid */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
          {displayedProducts.map((product, index) => (
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
                  <span className="text-[#555] font-semibold text-sm">₹{product.price.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
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
      {visibleCount < filteredProducts.length && (
        <div className="flex justify-center mt-20">
          <button 
            onClick={() => setVisibleCount(visibleCount + 4)}
            className="bg-[#B5ADA3] hover:bg-[#a39a8e] text-white px-10 py-3 rounded-full font-bold tracking-[0.15em] text-sm uppercase transition-colors shadow-sm"
          >
            View More
          </button>
        </div>
      )}

    </div>
  );
}
