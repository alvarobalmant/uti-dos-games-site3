import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  rating: number;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  oldPrice,
  image,
  rating,
  category,
  isNew = false,
  isSale = false
}) => {
  const discount = oldPrice ? Math.round(((oldPrice - price) / oldPrice) * 100) : 0;
  
  return (
    <div className="product-card group">
      {/* Badges */}
      <div className="absolute top-2 left-2 z-10 flex flex-col gap-2">
        {isNew && (
          <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">
            NOVO
          </span>
        )}
        {isSale && (
          <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            -{discount}%
          </span>
        )}
      </div>
      
      {/* Image */}
      <Link to={`/produto/${id}`}>
        <div className="relative overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="product-card-image transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>
      
      {/* Content */}
      <div className="product-card-content">
        {/* Category */}
        <div className="text-xs text-gray-400 mb-1">{category}</div>
        
        {/* Title */}
        <Link to={`/produto/${id}`}>
          <h3 className="product-card-title hover:text-primary transition-colors">{name}</h3>
        </Link>
        
        {/* Rating */}
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={14} 
              className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-400"} 
            />
          ))}
          <span className="text-xs text-gray-400 ml-1">({rating.toFixed(1)})</span>
        </div>
        
        {/* Price */}
        <div className="mt-auto">
          <div className="flex items-center">
            {oldPrice && (
              <span className="text-gray-400 line-through text-sm mr-2">
                R$ {oldPrice.toFixed(2).replace('.', ',')}
              </span>
            )}
            <span className="product-card-price">
              R$ {price.toFixed(2).replace('.', ',')}
            </span>
          </div>
          
          {/* Add to cart button */}
          <button className="w-full mt-3 btn btn-primary flex items-center justify-center">
            <ShoppingCart size={16} className="mr-2" />
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
