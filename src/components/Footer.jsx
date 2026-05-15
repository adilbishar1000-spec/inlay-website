import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
);

const Footer = () => {
  return (
    <footer className="bg-brand-bg pt-20">
      <div className="max-w-7xl mx-auto px-6">
        

        {/* Footer Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-gray-200">
          
          <div className="lg:col-span-1">
            <h3 className="font-serif text-4xl text-brand-maroon mb-2">INLAY</h3>
            <p className="text-gray-500 font-light mb-6">The inlay co</p>
            <div className="flex space-x-4 text-gray-800">
              <a href="#" className="hover:text-brand-maroon transition-colors"><FacebookIcon /></a>
              <a href="#" className="hover:text-brand-maroon transition-colors"><TwitterIcon /></a>
              <a href="#" className="hover:text-brand-maroon transition-colors"><InstagramIcon /></a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-6 text-sm">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link to="/about" className="hover:text-brand-maroon transition-colors">About</Link></li>
              <li><Link to="/the-craft" className="hover:text-brand-maroon transition-colors">The Craft</Link></li>
              <li><Link to="/gallery" className="hover:text-brand-maroon transition-colors">Gallery</Link></li>
              <li><Link to="/shop" className="hover:text-brand-maroon transition-colors">Shop</Link></li>
              <li><Link to="/journal" className="hover:text-brand-maroon transition-colors">Journal</Link></li>
              <li><Link to="/contact" className="hover:text-brand-maroon transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-6 text-sm">Shop</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link to="/shop" className="hover:text-brand-maroon transition-colors">All Products</Link></li>
              <li><Link to="/shop" className="hover:text-brand-maroon transition-colors">Tabletop</Link></li>
              <li><Link to="/shop" className="hover:text-brand-maroon transition-colors">Home Décor</Link></li>
              <li><Link to="/shop" className="hover:text-brand-maroon transition-colors">Utility Objects</Link></li>
              <li><Link to="/shop" className="hover:text-brand-maroon transition-colors">Wall Art</Link></li>
              <li><Link to="/shop" className="hover:text-brand-maroon transition-colors">Gifting</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-6 text-sm">Help</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link to="/support" className="hover:text-brand-maroon transition-colors">Shipping</Link></li>
              <li><Link to="/support" className="hover:text-brand-maroon transition-colors">Returns</Link></li>
              <li><Link to="/support" className="hover:text-brand-maroon transition-colors">Care Guide</Link></li>
              <li><Link to="/support" className="hover:text-brand-maroon transition-colors">FAQs</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="font-semibold text-gray-900 mb-6 text-sm">Stay Connected</h4>
            <p className="text-sm text-gray-600 mb-4">Subscribe to our newsletter for updates and inspiration.</p>
            <div className="flex border-b border-gray-300 pb-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-transparent w-full text-sm outline-none placeholder-gray-400"
              />
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="py-6 text-center text-xs text-gray-500">
          <p>© 2026 The Inlay Co. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
