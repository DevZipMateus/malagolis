
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Instagram, Facebook, ShoppingBag } from 'lucide-react';
import { useIsMobile } from '../../hooks/use-mobile';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-white py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/dc4c9a67-5595-4cde-84fc-a89434bc1ac5.png" 
              alt="Malagoli's Colecionáveis Logo" 
              className="h-16 w-auto"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link to="/" className="nav-link">Início</Link>
            <a href="#about" className="nav-link">Sobre Nós</a>
            <a href="#services" className="nav-link">Serviços</a>
            <a href="#collection" className="nav-link">Colecionáveis</a>
            <a href="#contact" className="nav-link">Contato</a>
            
            {/* Social Media */}
            <div className="flex items-center ml-6 space-x-3">
              <a 
                href="https://www.instagram.com/malagolis_colecionaveis/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-malagoli transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=100005736676752" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-malagoli transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://shopee.com.br/malagoliscolecionaveis" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-malagoli transition-colors font-medium"
                aria-label="Shopee"
              >
                <ShoppingBag size={20} />
              </a>
            </div>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Menu principal"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white ${
          isMobileMenuOpen ? 'max-h-[500px] opacity-100 shadow-lg' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container-custom py-4 flex flex-col space-y-4 border-t mt-2">
          <Link to="/" className="px-4 py-2 text-gray-800 hover:text-malagoli hover:bg-gray-50 rounded-md" onClick={toggleMobileMenu}>Início</Link>
          <a href="#about" className="px-4 py-2 text-gray-800 hover:text-malagoli hover:bg-gray-50 rounded-md" onClick={toggleMobileMenu}>Sobre Nós</a>
          <a href="#services" className="px-4 py-2 text-gray-800 hover:text-malagoli hover:bg-gray-50 rounded-md" onClick={toggleMobileMenu}>Serviços</a>
          <a href="#collection" className="px-4 py-2 text-gray-800 hover:text-malagoli hover:bg-gray-50 rounded-md" onClick={toggleMobileMenu}>Colecionáveis</a>
          <a href="#contact" className="px-4 py-2 text-gray-800 hover:text-malagoli hover:bg-gray-50 rounded-md" onClick={toggleMobileMenu}>Contato</a>
          
          {/* Social Media */}
          <div className="flex items-center space-x-4 px-4 py-2">
            <a 
              href="https://www.instagram.com/malagolis_colecionaveis/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-malagoli transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="https://www.facebook.com/profile.php?id=100005736676752" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-malagoli transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a 
              href="https://shopee.com.br/malagoliscolecionaveis" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-malagoli transition-colors font-medium"
              aria-label="Shopee"
            >
              <ShoppingBag size={20} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
