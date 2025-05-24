import React, { useState, useEffect } from 'react';
import { Filter, ChevronDown } from 'lucide-react';
import ProductCard from '../product/ProductCard';
import Carousel from '../ui/Carousel';

// Dados simulados para o banner
const bannerImages = [
  {
    src: 'https://via.placeholder.com/1200x500/0F172A/FFFFFF?text=Novos+Lançamentos',
    alt: 'Novos Lançamentos',
    title: 'Novos Lançamentos',
    subtitle: 'Confira os jogos mais aguardados que acabaram de chegar!',
    buttonText: 'Ver Lançamentos',
    buttonLink: '/categoria/lancamentos'
  },
  {
    src: 'https://via.placeholder.com/1200x500/0F172A/FFFFFF?text=Promoção+de+Consoles',
    alt: 'Promoção de Consoles',
    title: 'Promoção de Consoles',
    subtitle: 'Até 30% de desconto em consoles selecionados',
    buttonText: 'Aproveitar',
    buttonLink: '/categoria/consoles'
  },
  {
    src: 'https://via.placeholder.com/1200x500/0F172A/FFFFFF?text=Acessórios+Gamer',
    alt: 'Acessórios Gamer',
    title: 'Acessórios Gamer',
    subtitle: 'Melhore sua experiência com os melhores acessórios',
    buttonText: 'Ver Acessórios',
    buttonLink: '/categoria/acessorios'
  }
];

// Dados simulados para produtos
const productsData = [
  {
    id: 1,
    name: 'God of War Ragnarök',
    price: 249.90,
    oldPrice: 299.90,
    image: 'https://via.placeholder.com/300x300/0F172A/FFFFFF?text=God+of+War',
    rating: 4.8,
    category: 'Jogos PS5',
    isNew: true,
    isSale: true
  },
  {
    id: 2,
    name: 'Horizon Forbidden West',
    price: 199.90,
    image: 'https://via.placeholder.com/300x300/0F172A/FFFFFF?text=Horizon',
    rating: 4.7,
    category: 'Jogos PS5',
    isNew: true
  },
  {
    id: 3,
    name: 'Xbox Series X',
    price: 3999.90,
    oldPrice: 4499.90,
    image: 'https://via.placeholder.com/300x300/0F172A/FFFFFF?text=Xbox+Series+X',
    rating: 4.9,
    category: 'Consoles',
    isSale: true
  },
  {
    id: 4,
    name: 'Nintendo Switch OLED',
    price: 2499.90,
    image: 'https://via.placeholder.com/300x300/0F172A/FFFFFF?text=Switch+OLED',
    rating: 4.6,
    category: 'Consoles'
  },
  {
    id: 5,
    name: 'Controle DualSense PS5',
    price: 399.90,
    oldPrice: 449.90,
    image: 'https://via.placeholder.com/300x300/0F172A/FFFFFF?text=DualSense',
    rating: 4.5,
    category: 'Acessórios',
    isSale: true
  },
  {
    id: 6,
    name: 'Headset Gamer RGB',
    price: 299.90,
    image: 'https://via.placeholder.com/300x300/0F172A/FFFFFF?text=Headset+Gamer',
    rating: 4.3,
    category: 'Acessórios',
    isNew: true
  },
  {
    id: 7,
    name: 'The Last of Us Part II',
    price: 149.90,
    oldPrice: 199.90,
    image: 'https://via.placeholder.com/300x300/0F172A/FFFFFF?text=The+Last+of+Us',
    rating: 4.9,
    category: 'Jogos PS4',
    isSale: true
  },
  {
    id: 8,
    name: 'Halo Infinite',
    price: 179.90,
    image: 'https://via.placeholder.com/300x300/0F172A/FFFFFF?text=Halo+Infinite',
    rating: 4.4,
    category: 'Jogos Xbox'
  }
];

// Categorias disponíveis
const categories = [
  'Todos',
  'Jogos PS5',
  'Jogos PS4',
  'Jogos Xbox',
  'Consoles',
  'Acessórios'
];

const Catalog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Filtrar produtos quando a categoria muda
  useEffect(() => {
    if (selectedCategory === 'Todos') {
      setFilteredProducts(productsData);
    } else {
      setFilteredProducts(productsData.filter(product => product.category === selectedCategory));
    }
  }, [selectedCategory]);
  
  return (
    <div>
      {/* Banner Rotativo */}
      <Carousel images={bannerImages} />
      
      {/* Filtros */}
      <div className="my-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
          <h2 className="text-2xl font-bold mb-4 md:mb-0">Produtos</h2>
          
          <button 
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center text-gray-300 hover:text-primary transition-colors md:hidden"
          >
            <Filter size={20} className="mr-2" />
            Filtrar
            <ChevronDown size={16} className={`ml-1 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {/* Filtros para Desktop */}
          <div className="hidden md:flex space-x-4">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1 rounded-full transition-colors ${
                  selectedCategory === category 
                    ? 'bg-primary text-black' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* Filtros para Mobile */}
        {isFilterOpen && (
          <div className="flex flex-wrap gap-2 mb-4 md:hidden">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1 rounded-full transition-colors ${
                  selectedCategory === category 
                    ? 'bg-primary text-black' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}
      </div>
      
      {/* Grid de Produtos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      
      {/* Mensagem se não houver produtos */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg">Nenhum produto encontrado nesta categoria.</p>
        </div>
      )}
    </div>
  );
};

export default Catalog;
