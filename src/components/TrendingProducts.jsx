import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

const trendingProductsList = products.slice(5, 9);

const TrendingProducts = () => {
  return (
    <section className="py-12 px-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif text-gray-900 tracking-wide"
        >
          NOW TRENDING
        </motion.h2>
        <Link to="/shop" className="group flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors">
          <span className="text-sm">View all</span>
          <ArrowRight size={16} strokeWidth={1} className="transform group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {trendingProductsList.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>
    </section>
  );
};

const ProductCard = ({ product, index }) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group hover:-translate-y-2 transition-transform duration-300"
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="aspect-square bg-[#f0ebe1] mb-4 overflow-hidden shadow-sm group-hover:shadow-md transition-shadow duration-300">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-700"
          />
        </div>
      </Link>
      <div className="flex justify-between items-start">
        <Link to={`/product/${product.id}`} className="pr-4 block">
          <h3 className="text-sm text-gray-800 leading-snug mb-2 font-medium hover:text-brand-maroon transition-colors line-clamp-2">
            {product.name}
          </h3>
          <p className="text-gray-600 text-sm font-semibold">₹{product.price}</p>
        </Link>
        <button 
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            setIsLiked(!isLiked);
          }}
          className="text-gray-400 hover:text-brand-maroon transition-colors pt-1"
        >
          <Heart size={20} fill={isLiked ? "currentColor" : "none"} className={isLiked ? "text-brand-maroon" : ""} />
        </button>
      </div>
    </motion.div>
  );
};

export default TrendingProducts;
