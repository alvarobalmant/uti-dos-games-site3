import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

interface WhatsAppProps {
  phoneNumber?: string;
  message?: string;
}

const WhatsApp: React.FC<WhatsAppProps> = ({ 
  phoneNumber = "5511999999999", 
  message = "Olá! Estou interessado em saber mais sobre os produtos da UTI DOS GAMES." 
}) => {
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };
  
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button 
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle size={24} />
      </button>
      
      <div className="absolute bottom-full right-0 mb-2 bg-white text-gray-800 rounded-lg shadow-lg p-3 w-64 text-sm transform scale-0 opacity-0 origin-bottom-right transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 pointer-events-none">
        <p className="font-medium">Precisa de ajuda?</p>
        <p className="text-gray-600 mt-1">Clique para falar conosco pelo WhatsApp</p>
        <div className="flex items-center mt-2 text-green-600">
          <Phone size={14} className="mr-1" />
          <span>+{phoneNumber.replace(/(\d{2})(\d{2})(\d{5})(\d{4})/, "$1 $2 $3-$4")}</span>
        </div>
      </div>
    </div>
  );
};

export default WhatsApp;
