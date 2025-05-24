import React, { useState } from 'react';
import { ShoppingCart, Menu, X, Search, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  
  return (
    <header className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-white font-gaming neon-text">UTI DOS GAMES</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-300 hover:text-primary transition-colors">Home</Link>
            <Link to="/categoria/jogos" className="text-gray-300 hover:text-primary transition-colors">Jogos</Link>
            <Link to="/categoria/consoles" className="text-gray-300 hover:text-primary transition-colors">Consoles</Link>
            <Link to="/categoria/acessorios" className="text-gray-300 hover:text-primary transition-colors">Acessórios</Link>
            <Link to="/quem-somos" className="text-gray-300 hover:text-primary transition-colors">Quem Somos</Link>
          </nav>
          
          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleSearch}
              className="text-gray-300 hover:text-primary transition-colors"
              aria-label="Buscar"
            >
              <Search size={20} />
            </button>
            
            <Link to="/carrinho" className="text-gray-300 hover:text-primary transition-colors relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-primary text-black text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </Link>
            
            <Link to="/login" className="hidden md:block text-gray-300 hover:text-primary transition-colors">
              <User size={20} />
            </Link>
            
            <button 
              onClick={toggleMenu}
              className="md:hidden text-gray-300 hover:text-primary transition-colors"
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Search Bar */}
        {isSearchOpen && (
          <div className="py-4 border-t border-gray-800">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Buscar jogos, consoles, acessórios..." 
                className="w-full bg-gray-800 border border-gray-700 rounded-lg py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary">
                <Search size={20} />
              </button>
            </div>
          </div>
        )}
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-800">
            <nav className="flex flex-col py-4">
              <Link to="/" className="py-2 text-gray-300 hover:text-primary transition-colors">Home</Link>
              <Link to="/categoria/jogos" className="py-2 text-gray-300 hover:text-primary transition-colors">Jogos</Link>
              <Link to="/categoria/consoles" className="py-2 text-gray-300 hover:text-primary transition-colors">Consoles</Link>
              <Link to="/categoria/acessorios" className="py-2 text-gray-300 hover:text-primary transition-colors">Acessórios</Link>
              <Link to="/quem-somos" className="py-2 text-gray-300 hover:text-primary transition-colors">Quem Somos</Link>
              <Link to="/login" className="py-2 text-gray-300 hover:text-primary transition-colors">Login</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
