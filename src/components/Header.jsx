import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Heart, Search, ShoppingBag, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import logoImg from '../assets/logo.png';
import { useShop } from '../context/ShopContext';

const navLinks = [
  { name: 'ABOUT', path: '/about' },
  { name: 'THE CRAFT', path: '/the-craft' },
  { name: 'GALLERY', path: '/gallery' },
  { name: 'SHOP', path: '/shop' },
  { name: 'SUPPORT', path: '/support' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const { cartCount } = useShop();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'glass py-3 shadow-sm' : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Left Side: Logo Tagline */}
        <div className="hidden lg:block w-1/4">
          <Link to="/" className="text-gray-700 text-sm tracking-wide font-light">
            The Inlay co
          </Link>
        </div>

        {/* Center: Main Logo */}
        <div className="flex-shrink-0 flex items-center justify-center lg:w-1/4">
          <Link to="/" className="flex items-center justify-center">
            <img src={logoImg} alt="The Inlay Co Logo" className="h-10 md:h-12 w-auto object-contain" />
          </Link>
        </div>

        {/* Right Side: Icons & Login */}
        <div className="flex items-center justify-end lg:w-1/4 space-x-6">
          <AnimatePresence>
            {isSearchOpen && (
              <motion.form 
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 150, opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                className="overflow-hidden absolute right-16 sm:right-32 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm sm:bg-transparent sm:backdrop-blur-none sm:relative sm:top-0 sm:translate-y-0 sm:right-0 z-50 px-2 sm:px-0 rounded-lg sm:rounded-none"
                onSubmit={handleSearchSubmit}
              >
                <input 
                  type="text" 
                  autoFocus
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent border-b border-gray-400 focus:border-brand-maroon outline-none text-sm py-1 px-2 text-gray-800 placeholder-gray-500"
                />
              </motion.form>
            )}
          </AnimatePresence>
          
          <button 
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="text-gray-800 hover:text-brand-maroon transition-all duration-300 hover:scale-110 hover:-translate-y-0.5"
          >
            <Search strokeWidth={1.5} size={22} />
          </button>
          <Link to="/wishlist" className="text-gray-800 hover:text-brand-maroon transition-all duration-300 hover:scale-110 hover:-translate-y-0.5">
            <Heart strokeWidth={1.5} size={22} />
          </Link>
          <Link to="/cart" className="text-gray-800 hover:text-brand-maroon transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 relative group">
            <ShoppingBag strokeWidth={1.5} size={22} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-brand-maroon text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full group-hover:scale-110 transition-transform">
                {cartCount}
              </span>
            )}
          </Link>
          <Link to="/login" className="hidden sm:block text-sm font-medium tracking-widest uppercase relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-brand-maroon hover:after:w-full hover:text-brand-maroon transition-all duration-300 after:transition-all after:duration-300 hover:-translate-y-0.5">
            LOG-IN
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className="lg:hidden ml-4 text-gray-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Desktop Navigation Links */}
      <nav className={clsx(
        "hidden lg:flex justify-center items-center space-x-12 mt-4 text-xs font-bold tracking-widest",
        (isScrolled || ['/about', '/the-craft', '/gallery', '/shop', '/artisans'].includes(location.pathname) || location.pathname.startsWith('/product/')) ? "text-gray-800" : "text-white drop-shadow-md"
      )}>
        {navLinks.map((link) => (
          <Link 
            key={link.name} 
            to={link.path}
            className={clsx(
              "hover:text-brand-maroon transition-colors relative pb-1",
              location.pathname === link.path && "text-brand-maroon after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-brand-maroon"
            )}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-100 p-6 flex flex-col space-y-4">
          <Link to="/" className="text-gray-700 text-sm tracking-wide font-light mb-4 pb-4 border-b border-gray-100" onClick={() => setMobileMenuOpen(false)}>
            The Inlay co
          </Link>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className="text-sm font-medium tracking-widest text-gray-800 hover:text-brand-maroon"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/login" className="pt-4 mt-2 border-t border-gray-100 text-sm font-medium tracking-widest uppercase text-brand-maroon" onClick={() => setMobileMenuOpen(false)}>
            LOG-IN
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
