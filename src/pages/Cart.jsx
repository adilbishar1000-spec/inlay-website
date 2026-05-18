import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trash2, ShoppingBag } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export default function Cart() {
  const { cart, removeFromCart, updateCartQuantity } = useShop();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="w-full bg-[#FAF8F5] min-h-screen pt-32 lg:pt-40 pb-24 font-sans">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <h1 className="text-4xl md:text-5xl font-serif text-[#333] mb-12">Your Cart</h1>

        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 bg-white rounded-[2rem] shadow-sm">
            <ShoppingBag size={64} className="text-[#333]/20 mb-6" />
            <h2 className="text-2xl font-serif text-[#333] mb-4">Your cart is empty</h2>
            <p className="text-[#555] mb-8">Looks like you haven't added anything yet.</p>
            <Link 
              to="/shop" 
              className="bg-[#6A2B32] hover:bg-[#582128] text-white px-8 py-3 rounded-full font-bold tracking-widest text-sm uppercase transition-colors"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Cart Items */}
            <div className="flex-1 space-y-6">
              {cart.map((item, index) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  key={item.id} 
                  className="flex flex-col sm:flex-row gap-4 sm:gap-6 bg-white p-4 sm:p-6 rounded-2xl sm:rounded-[2rem] shadow-sm relative group"
                >
                  <div className="flex gap-4 sm:gap-6">
                    <Link to={`/product/${item.id}`} className="w-20 sm:w-24 h-20 sm:h-24 bg-[#e6dfd5] rounded-xl overflow-hidden flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover mix-blend-multiply hover:scale-105 transition-transform" />
                    </Link>
                    <div className="flex-1 flex flex-col justify-center sm:hidden">
                      <Link to={`/product/${item.id}`}>
                        <h3 className="text-base font-bold text-[#333] hover:text-[#6A2B32] transition-colors mb-1 line-clamp-2">{item.name}</h3>
                      </Link>
                      <p className="text-[#555] font-semibold text-sm">₹{item.price.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</p>
                    </div>
                  </div>
                  
                  <div className="flex-1 flex flex-col justify-center">
                    <div className="hidden sm:block">
                      <Link to={`/product/${item.id}`}>
                        <h3 className="text-lg font-bold text-[#333] hover:text-[#6A2B32] transition-colors mb-2">{item.name}</h3>
                      </Link>
                      <p className="text-[#555] font-semibold text-sm mb-4">₹{item.price.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</p>
                    </div>
                    
                    <div className="flex items-center justify-between sm:justify-start gap-4 mt-2 sm:mt-0">
                      <div className="flex items-center justify-between border border-[#333]/20 rounded-full px-4 py-1.5 w-[100px] text-[#333] font-medium">
                        <button onClick={() => updateCartQuantity(item.id, item.quantity - 1)} className="hover:text-[#6A2B32]">−</button>
                        <span className="text-sm">{item.quantity}</span>
                        <button onClick={() => updateCartQuantity(item.id, item.quantity + 1)} className="hover:text-[#6A2B32]">+</button>
                      </div>
                      <div className="flex items-center gap-4">
                        <p className="font-bold text-[#333] sm:hidden">₹{(item.price * item.quantity).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</p>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-400 hover:text-red-500 transition-colors p-2 rounded-full hover:bg-red-50"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="hidden sm:block absolute right-8 top-1/2 -translate-y-1/2">
                    <p className="font-bold text-[#333]">₹{(item.price * item.quantity).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="w-full lg:w-[400px]">
              <div className="bg-white p-8 rounded-[2rem] shadow-sm sticky top-32">
                <h2 className="text-2xl font-serif text-[#333] mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6 text-[#555]">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-medium text-[#333]">₹{totalAmount.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="text-green-600 font-medium">Free</span>
                  </div>
                </div>
                
                <div className="w-full h-[1px] bg-gray-200 mb-6"></div>
                
                <div className="flex justify-between mb-8">
                  <span className="font-bold text-lg text-[#333]">Total</span>
                  <span className="font-bold text-xl text-[#6A2B32]">₹{totalAmount.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
                </div>
                
                <button className="w-full bg-[#6A2B32] hover:bg-[#582128] text-white py-4 rounded-xl font-bold tracking-widest text-sm uppercase transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-lg">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
