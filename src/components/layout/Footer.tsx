import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <span className="text-xl font-bold text-white font-gaming neon-text">UTI DOS GAMES</span>
            </Link>
            <p className="text-gray-400 text-sm">
              A melhor loja de games do Brasil. Encontre os melhores jogos, consoles e acessórios com os melhores preços.
            </p>
          </div>
          
          {/* Links Rápidos */}
          <div className="col-span-1">
            <h3 className="text-white font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/categoria/jogos" className="text-gray-400 hover:text-primary transition-colors">Jogos</Link>
              </li>
              <li>
                <Link to="/categoria/consoles" className="text-gray-400 hover:text-primary transition-colors">Consoles</Link>
              </li>
              <li>
                <Link to="/categoria/acessorios" className="text-gray-400 hover:text-primary transition-colors">Acessórios</Link>
              </li>
            </ul>
          </div>
          
          {/* Informações */}
          <div className="col-span-1">
            <h3 className="text-white font-bold mb-4">Informações</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/quem-somos" className="text-gray-400 hover:text-primary transition-colors">Quem Somos</Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-primary transition-colors">Perguntas Frequentes</Link>
              </li>
              <li>
                <Link to="/politica-de-privacidade" className="text-gray-400 hover:text-primary transition-colors">Política de Privacidade</Link>
              </li>
              <li>
                <Link to="/termos-de-uso" className="text-gray-400 hover:text-primary transition-colors">Termos de Uso</Link>
              </li>
            </ul>
          </div>
          
          {/* Contato */}
          <div className="col-span-1">
            <h3 className="text-white font-bold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <Phone size={16} className="mr-2" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Mail size={16} className="mr-2" />
                <span>contato@utidosgames.com.br</span>
              </li>
            </ul>
            
            {/* Redes Sociais */}
            <div className="mt-4">
              <h3 className="text-white font-bold mb-2">Redes Sociais</h3>
              <div className="flex space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} UTI DOS GAMES. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
