import React, { useState } from 'react';
import { ShoppingCart, Trash2, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';

// Dados simulados para o carrinho
const cartData = [
  {
    id: 1,
    name: 'God of War Ragnarök',
    price: 249.90,
    image: 'https://via.placeholder.com/100x100/0F172A/FFFFFF?text=God+of+War',
    quantity: 1
  },
  {
    id: 3,
    name: 'Xbox Series X',
    price: 3999.90,
    image: 'https://via.placeholder.com/100x100/0F172A/FFFFFF?text=Xbox+Series+X',
    quantity: 1
  },
  {
    id: 5,
    name: 'Controle DualSense PS5',
    price: 399.90,
    image: 'https://via.placeholder.com/100x100/0F172A/FFFFFF?text=DualSense',
    quantity: 2
  }
];

const Cart: React.FC = () => {
  const [cart, setCart] = useState(cartData);
  
  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCart(cart.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };
  
  const removeItem = (id: number) => {
    setCart(cart.filter(item => item.id !== id));
  };
  
  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };
  
  const calculateShipping = () => {
    // Simulação de cálculo de frete
    const subtotal = calculateSubtotal();
    return subtotal > 300 ? 0 : 25.90;
  };
  
  const calculateTotal = () => {
    return calculateSubtotal() + calculateShipping();
  };
  
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Carrinho de Compras</h1>
      
      {cart.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-card-bg rounded-lg overflow-hidden">
              {/* Header */}
              <div className="grid grid-cols-12 gap-4 p-4 border-b border-gray-800 text-sm font-medium text-gray-400">
                <div className="col-span-6">Produto</div>
                <div className="col-span-2 text-center">Preço</div>
                <div className="col-span-2 text-center">Quantidade</div>
                <div className="col-span-2 text-center">Subtotal</div>
              </div>
              
              {/* Items */}
              {cart.map(item => (
                <div key={item.id} className="grid grid-cols-12 gap-4 p-4 border-b border-gray-800 items-center">
                  {/* Product */}
                  <div className="col-span-6">
                    <div className="flex items-center">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-16 h-16 object-cover rounded-md mr-4"
                      />
                      <div>
                        <Link to={`/produto/${item.id}`} className="font-medium hover:text-primary transition-colors">
                          {item.name}
                        </Link>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="flex items-center text-sm text-red-500 hover:text-red-400 transition-colors mt-1"
                        >
                          <Trash2 size={14} className="mr-1" />
                          Remover
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Price */}
                  <div className="col-span-2 text-center">
                    R$ {item.price.toFixed(2).replace('.', ',')}
                  </div>
                  
                  {/* Quantity */}
                  <div className="col-span-2 flex justify-center">
                    <div className="flex items-center">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="bg-gray-800 text-white p-1 rounded-l hover:bg-gray-700 transition-colors"
                        disabled={item.quantity <= 1}
                      >
                        <Minus size={14} />
                      </button>
                      <span className="bg-gray-800 text-white px-3 py-1">
                        {item.quantity}
                      </span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="bg-gray-800 text-white p-1 rounded-r hover:bg-gray-700 transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                  
                  {/* Subtotal */}
                  <div className="col-span-2 text-center font-medium">
                    R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Continue Shopping */}
            <div className="mt-6">
              <Link to="/" className="text-primary hover:underline flex items-center">
                <ShoppingCart size={16} className="mr-2" />
                Continuar comprando
              </Link>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card-bg rounded-lg overflow-hidden p-6">
              <h2 className="text-xl font-bold mb-4">Resumo do Pedido</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-400">Subtotal</span>
                  <span>R$ {calculateSubtotal().toFixed(2).replace('.', ',')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Frete</span>
                  <span>
                    {calculateShipping() === 0 
                      ? 'Grátis' 
                      : `R$ ${calculateShipping().toFixed(2).replace('.', ',')}`
                    }
                  </span>
                </div>
                <div className="border-t border-gray-800 pt-3 flex justify-between font-bold">
                  <span>Total</span>
                  <span className="text-primary">R$ {calculateTotal().toFixed(2).replace('.', ',')}</span>
                </div>
              </div>
              
              <button className="btn btn-primary w-full">
                Finalizar Compra
              </button>
              
              <div className="mt-4 text-sm text-gray-400">
                <p>Formas de pagamento aceitas:</p>
                <div className="flex space-x-2 mt-2">
                  <div className="bg-gray-700 rounded p-1">Visa</div>
                  <div className="bg-gray-700 rounded p-1">Master</div>
                  <div className="bg-gray-700 rounded p-1">Pix</div>
                  <div className="bg-gray-700 rounded p-1">Boleto</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-12 bg-card-bg rounded-lg">
          <ShoppingCart size={64} className="mx-auto text-gray-500 mb-4" />
          <h2 className="text-xl font-bold mb-2">Seu carrinho está vazio</h2>
          <p className="text-gray-400 mb-6">Adicione produtos ao seu carrinho para continuar.</p>
          <Link to="/" className="btn btn-primary">
            Explorar Produtos
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
