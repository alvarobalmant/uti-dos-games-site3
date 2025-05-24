import React, { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { Link } from 'react-router-dom';

// Dados simulados para resultados de busca
const searchResults = [
  {
    id: 1,
    name: 'God of War Ragnarök',
    price: 249.90,
    image: 'https://via.placeholder.com/50x50/0F172A/FFFFFF?text=GoW',
    category: 'Jogos PS5'
  },
  {
    id: 2,
    name: 'Horizon Forbidden West',
    price: 199.90,
    image: 'https://via.placeholder.com/50x50/0F172A/FFFFFF?text=HFW',
    category: 'Jogos PS5'
  },
  {
    id: 3,
    name: 'Xbox Series X',
    price: 3999.90,
    image: 'https://via.placeholder.com/50x50/0F172A/FFFFFF?text=Xbox',
    category: 'Consoles'
  },
  {
    id: 5,
    name: 'Controle DualSense PS5',
    price: 399.90,
    image: 'https://via.placeholder.com/50x50/0F172A/FFFFFF?text=DS5',
    category: 'Acessórios'
  }
];

interface SearchBarProps {
  placeholder?: string;
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  placeholder = "Buscar jogos, consoles, acessórios...",
  className = ""
}) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<typeof searchResults>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  
  // Simula a busca quando o query muda
  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      setIsSearching(false);
      setShowResults(false);
      return;
    }
    
    setIsSearching(true);
    
    // Simula um delay de API
    const timer = setTimeout(() => {
      // Filtra os resultados baseado no query
      const filtered = searchResults.filter(item => 
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      );
      
      setResults(filtered);
      setIsSearching(false);
      setShowResults(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [query]);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };
  
  const clearSearch = () => {
    setQuery('');
    setResults([]);
    setShowResults(false);
  };
  
  const handleItemClick = () => {
    setShowResults(false);
  };
  
  return (
    <div className={`relative ${className}`}>
      <div className="relative">
        <input 
          type="text" 
          value={query}
          onChange={handleInputChange}
          placeholder={placeholder}
          className="w-full bg-gray-800 border border-gray-700 rounded-lg py-2 pl-4 pr-10 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          onFocus={() => query.length >= 2 && setShowResults(true)}
          onBlur={() => setTimeout(() => setShowResults(false), 200)}
        />
        
        {query ? (
          <button 
            onClick={clearSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300 transition-colors"
          >
            <X size={18} />
          </button>
        ) : (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <Search size={18} />
          </div>
        )}
      </div>
      
      {/* Results Dropdown */}
      {showResults && (
        <div className="absolute z-50 mt-2 w-full bg-card-bg rounded-lg shadow-lg border border-gray-800 overflow-hidden">
          {isSearching ? (
            <div className="p-4 text-center text-gray-400">
              Buscando...
            </div>
          ) : results.length > 0 ? (
            <div>
              {results.map(item => (
                <Link 
                  key={item.id}
                  to={`/produto/${item.id}`}
                  className="flex items-center p-3 hover:bg-gray-800 transition-colors"
                  onClick={handleItemClick}
                >
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-10 h-10 object-cover rounded mr-3"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium">{item.name}</h4>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-xs text-gray-400">{item.category}</span>
                      <span className="text-sm text-primary font-medium">
                        R$ {item.price.toFixed(2).replace('.', ',')}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
              
              <div className="p-2 border-t border-gray-800">
                <Link 
                  to={`/busca?q=${encodeURIComponent(query)}`}
                  className="block w-full text-center text-sm text-primary hover:underline py-1"
                  onClick={handleItemClick}
                >
                  Ver todos os resultados
                </Link>
              </div>
            </div>
          ) : (
            <div className="p-4 text-center text-gray-400">
              Nenhum resultado encontrado para "{query}"
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
