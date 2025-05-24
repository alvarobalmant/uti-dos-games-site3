import React, { createContext, useState, useContext, ReactNode } from 'react';

// Definindo o tipo para um produto
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

// Definindo o tipo para o contexto do carrinho
interface CartContextType {
  cart: Product[];
  addToCart: (product: Omit<Product, 'quantity'>) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartCount: () => number;
}

// Criando o contexto
const CartContext = createContext<CartContextType | undefined>(undefined);

// Hook personalizado para usar o contexto
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart deve ser usado dentro de um CartProvider');
  }
  return context;
};

// Props para o provider
interface CartProviderProps {
  children: ReactNode;
}

// Componente Provider
export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);

  // Adicionar produto ao carrinho
  const addToCart = (product: Omit<Product, 'quantity'>) => {
    setCart(prevCart => {
      // Verifica se o produto já está no carrinho
      const existingProductIndex = prevCart.findIndex(item => item.id === product.id);
      
      if (existingProductIndex >= 0) {
        // Se já existe, aumenta a quantidade
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += 1;
        return updatedCart;
      } else {
        // Se não existe, adiciona com quantidade 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Remover produto do carrinho
  const removeFromCart = (id: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  // Atualizar quantidade de um produto
  const updateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) return;
    
    setCart(prevCart => 
      prevCart.map(item => 
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  // Limpar o carrinho
  const clearCart = () => {
    setCart([]);
  };

  // Calcular o total do carrinho
  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  // Obter a quantidade total de itens no carrinho
  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  // Valor do contexto
  const value: CartContextType = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartCount
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
