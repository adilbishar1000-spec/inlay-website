import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import { Link } from 'react-router-dom';

import imgGift from '../assets/Gift sets.jpg';
import imgHome from '../assets/Home decor.JPG';
import imgTable from '../assets/Table top.JPG';
import imgUtility from '../assets/Utility.jpg';

const categories = [
  { id: 'gift', title: 'Gift sets', image: imgGift },
  { id: 'home', title: 'Home decor', image: imgHome },
  { id: 'table', title: 'Table top', image: imgTable },
  { id: 'utility', title: 'Utility', image: imgUtility },
];

const CategoriesSlider = () => {
  const swiperRef = useRef(null);

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif text-gray-900 tracking-wide"
        >
          CATEGORIES
        </motion.h2>
        <LinkToViewAll />
      </div>

      <div className="relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="pb-12"
        >
          {categories.map((category) => (
            <SwiperSlide key={category.id}>
              <Link to="/shop" className="group relative aspect-square overflow-hidden cursor-pointer bg-[#f0ebe1] block">
                <img 
                  src={category.image} 
                  alt={category.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Default overlay hidden, shows on hover or active */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-start p-6">
                  <h3 className="text-white font-serif text-2xl tracking-wider mb-1 line-clamp-2">
                    {category.title}
                  </h3>
                  <div className="mt-auto self-end bg-white text-gray-900 p-2 rounded-full transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation */}
        <div className="flex space-x-4 mt-6">
          <button 
            onClick={() => swiperRef.current?.slidePrev()}
            className="w-12 h-12 rounded-full bg-brand-maroon text-white flex items-center justify-center hover:bg-brand-maroon/90 transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <button 
            onClick={() => swiperRef.current?.slideNext()}
            className="w-12 h-12 rounded-full bg-brand-maroon text-white flex items-center justify-center hover:bg-brand-maroon/90 transition-colors"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

const LinkToViewAll = () => (
  <Link to="/shop" className="group flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors">
    <span className="text-sm">View all</span>
    <ArrowRight size={16} strokeWidth={1} className="transform group-hover:translate-x-1 transition-transform" />
  </Link>
);

export default CategoriesSlider;
