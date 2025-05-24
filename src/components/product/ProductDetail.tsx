import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Star, ShoppingCart, Heart, Share2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

// Dados simulados para o produto
const productData = {
  id: 1,
  name: 'God of War Ragnarök',
  price: 249.90,
  oldPrice: 299.90,
  images: [
    'https://via.placeholder.com/600x600/0F172A/FFFFFF?text=God+of+War+1',
    'https://via.placeholder.com/600x600/0F172A/FFFFFF?text=God+of+War+2',
    'https://via.placeholder.com/600x600/0F172A/FFFFFF?text=God+of+War+3',
  ],
  rating: 4.8,
  reviewCount: 124,
  category: 'Jogos PS5',
  description: 'God of War Ragnarök é um jogo eletrônico de ação-aventura desenvolvido pela Santa Monica Studio e publicado pela Sony Interactive Entertainment. Foi lançado em 9 de novembro de 2022 para PlayStation 4 e PlayStation 5. É o nono título da série God of War, o nono em ordem cronológica, e a sequência de God of War (2018).',
  features: [
    'Jogo completo em mídia física',
    'Compatível com PlayStation 5',
    'Áudio e legendas em português',
    'Modo história imersivo',
    'Gráficos de última geração'
  ],
  specifications: {
    'Plataforma': 'PlayStation 5',
    'Gênero': 'Ação, Aventura',
    'Classificação': '18+',
    'Idioma': 'Português, Inglês, Espanhol',
    'Lançamento': '09/11/2022',
    'Desenvolvedor': 'Santa Monica Studio'
  },
  stock: 15,
  isNew: true,
  isSale: true
};

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState(productData);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState('description');
  
  // Simula a busca do produto pelo ID
  useEffect(() => {
    // Em um cenário real, aqui faria uma chamada à API
    console.log(`Buscando produto com ID: ${id}`);
    // setProduct(resultado da API)
  }, [id]);
  
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value > 0 && value <= product.stock) {
      setQuantity(value);
    }
  };
  
  const increaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const discount = product.oldPrice ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100) : 0;
  
  return (
    <div>
      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-gray-400 mb-6">
        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link to={`/categoria/${product.category.toLowerCase().replace(' ', '-')}`} className="hover:text-primary transition-colors">
          {product.category}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-300">{product.name}</span>
      </div>
      
      {/* Back Button (Mobile) */}
      <Link to="/" className="inline-flex items-center text-gray-300 hover:text-primary transition-colors mb-4 md:hidden">
        <ArrowLeft size={16} className="mr-1" />
        Voltar
      </Link>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div>
          {/* Main Image */}
          <div className="bg-gray-800 rounded-lg overflow-hidden mb-4">
            <img 
              src={product.images[selectedImage]} 
              alt={product.name} 
              className="w-full h-auto object-cover"
            />
          </div>
          
          {/* Thumbnails */}
          <div className="grid grid-cols-4 gap-2">
            {product.images.map((image, index) => (
              <button 
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`bg-gray-800 rounded-lg overflow-hidden border-2 transition-colors ${
                  selectedImage === index ? 'border-primary' : 'border-transparent hover:border-gray-600'
                }`}
              >
                <img 
                  src={image} 
                  alt={`${product.name} - Imagem ${index + 1}`} 
                  className="w-full h-auto object-cover"
                />
              </button>
            ))}
          </div>
        </div>
        
        {/* Product Info */}
        <div>
          {/* Badges */}
          <div className="flex gap-2 mb-3">
            {product.isNew && (
              <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">
                NOVO
              </span>
            )}
            {product.isSale && (
              <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                -{discount}%
              </span>
            )}
          </div>
          
          {/* Title */}
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          
          {/* Rating */}
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={16} 
                className={i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-400"} 
              />
            ))}
            <span className="text-sm text-gray-400 ml-2">
              {product.rating.toFixed(1)} ({product.reviewCount} avaliações)
            </span>
          </div>
          
          {/* Price */}
          <div className="mb-6">
            {product.oldPrice && (
              <span className="text-gray-400 line-through text-lg mr-2">
                R$ {product.oldPrice.toFixed(2).replace('.', ',')}
              </span>
            )}
            <span className="text-3xl font-bold text-primary">
              R$ {product.price.toFixed(2).replace('.', ',')}
            </span>
            <p className="text-sm text-gray-400 mt-1">
              Em até 12x de R$ {(product.price / 12).toFixed(2).replace('.', ',')} sem juros
            </p>
          </div>
          
          {/* Stock */}
          <div className="mb-6">
            <p className={`text-sm ${product.stock > 0 ? 'text-green-500' : 'text-red-500'}`}>
              {product.stock > 0 
                ? `${product.stock} unidades em estoque` 
                : 'Produto indisponível'
              }
            </p>
          </div>
          
          {/* Quantity */}
          <div className="mb-6">
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-300 mb-2">
              Quantidade
            </label>
            <div className="flex items-center">
              <button 
                onClick={decreaseQuantity}
                className="bg-gray-800 text-white px-3 py-2 rounded-l-lg hover:bg-gray-700 transition-colors"
                disabled={quantity <= 1}
              >
                -
              </button>
              <input 
                type="number" 
                id="quantity"
                value={quantity}
                onChange={handleQuantityChange}
                min="1"
                max={product.stock}
                className="w-16 bg-gray-800 border-y border-gray-700 py-2 text-center text-white focus:outline-none"
              />
              <button 
                onClick={increaseQuantity}
                className="bg-gray-800 text-white px-3 py-2 rounded-r-lg hover:bg-gray-700 transition-colors"
                disabled={quantity >= product.stock}
              >
                +
              </button>
            </div>
          </div>
          
          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <button 
              className="btn btn-primary flex-1 flex items-center justify-center"
              disabled={product.stock <= 0}
            >
              <ShoppingCart size={18} className="mr-2" />
              Adicionar ao Carrinho
            </button>
            
            <button className="btn btn-outline flex items-center justify-center">
              <Heart size={18} className="mr-2" />
              Favoritar
            </button>
            
            <button className="btn btn-outline flex items-center justify-center">
              <Share2 size={18} className="mr-2" />
              Compartilhar
            </button>
          </div>
          
          {/* Tabs */}
          <div className="border-b border-gray-800 mb-4">
            <div className="flex space-x-6">
              <button 
                onClick={() => setActiveTab('description')}
                className={`py-2 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === 'description' 
                    ? 'border-primary text-primary' 
                    : 'border-transparent text-gray-400 hover:text-gray-300'
                }`}
              >
                Descrição
              </button>
              <button 
                onClick={() => setActiveTab('features')}
                className={`py-2 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === 'features' 
                    ? 'border-primary text-primary' 
                    : 'border-transparent text-gray-400 hover:text-gray-300'
                }`}
              >
                Características
              </button>
              <button 
                onClick={() => setActiveTab('specifications')}
                className={`py-2 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === 'specifications' 
                    ? 'border-primary text-primary' 
                    : 'border-transparent text-gray-400 hover:text-gray-300'
                }`}
              >
                Especificações
              </button>
            </div>
          </div>
          
          {/* Tab Content */}
          <div className="text-gray-300">
            {activeTab === 'description' && (
              <p>{product.description}</p>
            )}
            
            {activeTab === 'features' && (
              <ul className="list-disc pl-5 space-y-1">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            )}
            
            {activeTab === 'specifications' && (
              <div className="space-y-2">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="grid grid-cols-2 gap-4 py-2 border-b border-gray-800">
                    <span className="text-gray-400">{key}</span>
                    <span>{value}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
