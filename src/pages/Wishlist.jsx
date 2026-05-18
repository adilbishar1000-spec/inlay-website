import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export default function Wishlist() {
  const { wishlist, toggleWishlist, addToCart } = useShop();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[#FAF8F5] min-h-screen pt-32 lg:pt-40 pb-24 font-sans">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <h1 className="text-4xl md:text-5xl font-serif text-[#333] mb-12">Your Wishlist</h1>

        {wishlist.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 bg-white rounded-[2rem] shadow-sm">
            <Heart size={64} className="text-[#333]/20 mb-6" />
            <h2 className="text-2xl font-serif text-[#333] mb-4">Your wishlist is empty</h2>
            <p className="text-[#555] mb-8">Save items you love here to easily find them later.</p>
            <Link 
              to="/shop" 
              className="bg-[#6A2B32] hover:bg-[#582128] text-white px-8 py-3 rounded-full font-bold tracking-widest text-sm uppercase transition-colors"
            >
              Explore Collection
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
            {wishlist.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (index % 4) * 0.1 }}
                className="group flex flex-col bg-white rounded-[2rem] p-4 shadow-sm relative"
              >
                <button 
                  onClick={() => toggleWishlist(product)}
                  className="absolute top-6 right-6 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-full text-[#6A2B32] hover:bg-white hover:scale-110 transition-all shadow-sm"
                >
                  <Trash2 size={18} />
                </button>
                <Link to={`/product/${product.id}`} className="overflow-hidden bg-[#e6dfd5] rounded-xl aspect-square mb-5 relative block">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover mix-blend-multiply transform group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </Link>

                <div className="flex flex-col flex-grow px-2">
                  <Link to={`/product/${product.id}`}>
                    <h3 className="text-[#333] font-bold text-[15px] leading-snug mb-2 hover:text-[#6A2B32] transition-colors line-clamp-1">
                      {product.name}
                    </h3>
                  </Link>
                  <div className="flex items-center justify-between mt-auto mb-4">
                    <span className="text-[#555] font-semibold text-sm">₹{product.price.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
                  </div>
                  <button 
                    onClick={() => addToCart(product, 1)}
                    className="w-full flex items-center justify-center gap-2 bg-[#FAF8F5] hover:bg-[#6A2B32] hover:text-white text-[#333] border border-[#333]/10 hover:border-[#6A2B32] rounded-xl py-3 font-bold text-[13px] uppercase tracking-widest transition-all duration-300"
                  >
                    <ShoppingBag size={16} /> Move to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
