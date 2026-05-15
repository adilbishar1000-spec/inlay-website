import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, Search, ShoppingBag, Menu, X } from 'lucide-react';
import clsx from 'clsx';
import logoImg from '../assets/logo.png';

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
  const location = useLocation();

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
          <button className="text-gray-800 hover:text-brand-maroon transition-colors">
            <Heart strokeWidth={1.5} size={22} />
          </button>
          <button className="text-gray-800 hover:text-brand-maroon transition-colors">
            <Search strokeWidth={1.5} size={22} />
          </button>
          <button className="text-gray-800 hover:text-brand-maroon transition-colors relative">
            <ShoppingBag strokeWidth={1.5} size={22} />
            <span className="absolute -top-1 -right-1 bg-brand-maroon text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
              0
            </span>
          </button>
          <Link to="/login" className="hidden sm:block text-sm font-medium tracking-widest uppercase hover:text-brand-maroon transition-colors">
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
