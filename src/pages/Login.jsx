import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, ArrowRight } from 'lucide-react';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Fake login
    setTimeout(() => {
      navigate('/shop');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] pt-32 lg:pt-40 pb-24 flex items-center justify-center px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white w-full max-w-md rounded-[2rem] shadow-[0_10px_30px_rgba(0,0,0,0.03)] p-10 md:p-12"
      >
        <div className="text-center mb-10">
          <h1 className="text-3xl font-serif text-[#333] mb-3">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h1>
          <p className="text-[#555] font-light">
            {isLogin ? 'Log in to access your orders and wishlist.' : 'Sign up to discover exclusive handcrafted pieces.'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-[#333] mb-2">Full Name</label>
              <input 
                type="text" 
                required
                className="w-full bg-[#FAF8F5] border border-[#EBE5DD] rounded-xl px-4 py-3 outline-none focus:border-[#6A2B32] transition-colors"
                placeholder="John Doe"
              />
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-[#333] mb-2">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="email" 
                required
                className="w-full bg-[#FAF8F5] border border-[#EBE5DD] rounded-xl pl-12 pr-4 py-3 outline-none focus:border-[#6A2B32] transition-colors"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-medium text-[#333]">Password</label>
              {isLogin && <a href="#" className="text-xs text-[#6A2B32] hover:underline">Forgot?</a>}
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="password" 
                required
                className="w-full bg-[#FAF8F5] border border-[#EBE5DD] rounded-xl pl-12 pr-4 py-3 outline-none focus:border-[#6A2B32] transition-colors"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button 
            type="submit"
            className="w-full bg-[#6A2B32] hover:bg-[#582128] text-white rounded-xl py-3.5 font-bold tracking-widest text-[13px] uppercase transition-all hover:-translate-y-0.5 shadow-md hover:shadow-lg mt-4 flex items-center justify-center gap-2 group"
          >
            {isLogin ? 'Sign In' : 'Create Account'}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-[#555]">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button 
            onClick={() => setIsLogin(!isLogin)}
            className="text-[#6A2B32] font-semibold hover:underline"
          >
            {isLogin ? 'Sign up' : 'Log in'}
          </button>
        </div>
      </motion.div>
    </div>
  );
}
