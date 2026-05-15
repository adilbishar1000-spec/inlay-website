import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, HandHeart, ShieldCheck, RefreshCw } from "lucide-react";
import { products } from "../data/products";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const [activeTab, setActiveTab] = useState('description');

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen pt-40 pb-24 flex flex-col items-center justify-center bg-[#FAF8F5]">
        <h2 className="text-3xl font-serif text-[#6A2B32]">Product not found</h2>
        <Link to="/shop" className="mt-6 text-[#555] hover:text-[#6A2B32] underline tracking-widest uppercase text-sm">
          Return to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#FAF8F5] min-h-screen pb-24 font-sans pt-32 lg:pt-40">
      
      {/* Top Product Section */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Thumbnails (Left) */}
          <motion.div 
            initial="hidden" animate="visible" variants={fadeUpVariant}
            className="hidden lg:flex flex-col gap-4 w-[120px] flex-shrink-0"
          >
            {[1, 2, 3].map((num) => (
              <div key={num} className="bg-[#e6dfd5] aspect-square w-full rounded-sm overflow-hidden cursor-pointer hover:ring-2 hover:ring-[#6A2B32]/30 transition-all">
                <img src={product.image} alt="Thumbnail" className="w-full h-full object-cover mix-blend-multiply" />
              </div>
            ))}
          </motion.div>

          {/* Main Image (Middle) */}
          <motion.div 
            initial="hidden" animate="visible" variants={fadeUpVariant}
            className="w-full lg:w-[600px] xl:w-[700px] flex-shrink-0 bg-[#e6dfd5] rounded-sm overflow-hidden"
          >
             <img src={product.image} alt={product.name} className="w-full h-auto object-cover mix-blend-multiply" />
          </motion.div>

          {/* Details (Right) */}
          <motion.div 
            initial="hidden" animate="visible" variants={fadeUpVariant}
            className="flex-1 flex flex-col pt-4 lg:pt-0"
          >
            <h1 className="text-4xl md:text-[44px] font-serif text-[#333] mb-6 leading-[1.15]">
              {product.name}
            </h1>
            
            <div className="w-full h-[1px] bg-[#333]/20 mb-6"></div>
            
            <h2 className="text-2xl font-bold text-[#333] mb-8">
              ₹{product.price.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
            </h2>

            <div className="space-y-4 text-[#444] text-[15px] tracking-wide mb-10 leading-relaxed font-medium">
              <p>Material - {product.material}</p>
              <p>Color - {product.color}</p>
              <p>Set Dimensions - {product.dimensions}</p>
              <p>Each coaster diameter is {product.diameter}</p>
              <p>Net weight - {product.weight}</p>
              <p>Made in {product.origin}</p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 mt-auto">
              {/* Quantity */}
              <div className="flex items-center justify-between border border-[#6A2B32] rounded-full px-6 py-3 w-full sm:w-[140px] text-[#6A2B32] font-medium text-lg">
                <button className="hover:opacity-70">−</button>
                <span>1</span>
                <button className="hover:opacity-70">+</button>
              </div>

              {/* Add to Cart */}
              <button className="bg-[#6A2B32] hover:bg-[#582128] text-white rounded-full px-8 py-3 w-full sm:flex-1 font-bold tracking-widest text-[13px] uppercase transition-colors shadow-sm">
                Add to cart
              </button>

              {/* Heart */}
              <button className="text-[#333] hover:text-[#6A2B32] transition-colors p-2">
                <Heart size={32} strokeWidth={1.5} />
              </button>
            </div>

          </motion.div>
        </div>
      </section>

      {/* Features Pill */}
      <section className="max-w-[1200px] mx-auto px-6 lg:px-12 mb-20">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
          className="border border-[#6A2B32]/30 rounded-[40px] px-8 py-6 md:py-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 bg-[#FAF8F5]"
        >
          <div className="flex items-center gap-4 flex-1 justify-center md:border-r border-[#6A2B32]/30 text-[#6A2B32]">
            <div className="bg-white rounded-full p-2 shadow-sm"><HandHeart size={24} /></div>
            <span className="font-bold text-[15px] leading-tight max-w-[120px]">Handcrafted by skilled artisans</span>
          </div>

          <div className="flex items-center gap-4 flex-1 justify-center md:border-r border-[#6A2B32]/30 text-[#6A2B32]">
            <div className="bg-white rounded-full p-2 shadow-sm"><ShieldCheck size={24} /></div>
            <span className="font-bold text-[15px] leading-tight max-w-[120px]">Premium quality marble</span>
          </div>

          <div className="flex items-center gap-4 flex-1 justify-center text-[#6A2B32]">
            <div className="bg-white rounded-full p-2 shadow-sm"><RefreshCw size={24} /></div>
            <span className="font-bold text-[15px] leading-tight max-w-[120px]">Easy returns hassle-free</span>
          </div>
        </motion.div>
      </section>

      {/* Tabs Section */}
      <section className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
          className="bg-[#EBE5DD] rounded-[40px] p-10 md:p-16 lg:p-20"
        >
          {/* Tab Headers */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-[#333]/20 pb-4 mb-10 gap-6 sm:gap-0">
            <button 
              onClick={() => setActiveTab('description')}
              className={`font-bold text-sm tracking-widest uppercase pb-1 transition-colors ${activeTab === 'description' ? 'text-[#6A2B32] border-b-2 border-[#6A2B32]' : 'text-[#555] hover:text-[#6A2B32]'}`}
            >
              Description
            </button>
            <button 
              onClick={() => setActiveTab('shipping')}
              className={`font-bold text-sm tracking-widest uppercase pb-1 transition-colors ${activeTab === 'shipping' ? 'text-[#6A2B32] border-b-2 border-[#6A2B32]' : 'text-[#555] hover:text-[#6A2B32]'}`}
            >
              Shipping
            </button>
            <button 
              onClick={() => setActiveTab('returns')}
              className={`font-bold text-sm tracking-widest uppercase pb-1 transition-colors ${activeTab === 'returns' ? 'text-[#6A2B32] border-b-2 border-[#6A2B32]' : 'text-[#555] hover:text-[#6A2B32]'}`}
            >
              Returns & Exchange
            </button>
          </div>

          {/* Content */}
          <div className="text-[#444] text-[15px] font-medium leading-relaxed max-w-4xl space-y-10 min-h-[150px]">
            {activeTab === 'description' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="space-y-10">
                <p>{product.description}</p>
                <div>
                  <h3 className="text-[#6A2B32] font-bold text-sm tracking-widest uppercase mb-4">Care Instructions</h3>
                  <ul className="space-y-1">
                    <li>Wipe gently with a soft, dry or slightly damp cloth.</li>
                    <li>Avoid using harsh chemicals or abrasive cleaners.</li>
                    <li>Do not place hot items directly on the surface.</li>
                    <li>Keep away from prolonged moisture and direct sunlight.</li>
                  </ul>
                </div>
              </motion.div>
            )}

            {activeTab === 'shipping' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Made to order. Ships in 10 – 15 working days.</li>
                  <li>Securely packed in wooden crate with protective foam.</li>
                  <li>Worldwide shipping available.</li>
                  <li>You will receive tracking details once shipped.</li>
                </ul>
              </motion.div>
            )}

            {activeTab === 'returns' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Returns accepted within 7 days of delivery.</li>
                  <li>Items must be unused and in original condition.</li>
                  <li>Custom made products are non returnable.</li>
                  <li>For any issues, contact our support team.</li>
                </ul>
              </motion.div>
            )}
          </div>

        </motion.div>
      </section>

    </div>
  );
}
