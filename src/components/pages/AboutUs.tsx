import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Quem Somos</h1>
      
      <div className="bg-card-bg rounded-lg overflow-hidden p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-primary">Nossa História</h2>
        <p className="mb-4">
          A UTI DOS GAMES nasceu em 2023 da paixão de um grupo de gamers que sonhava em criar uma loja que realmente entendesse as necessidades dos jogadores brasileiros. Nosso nome surgiu da ideia de "salvar" os games e consoles que precisam de reparos, mas logo expandimos para oferecer uma experiência completa para os amantes de jogos.
        </p>
        <p className="mb-4">
          Começamos como uma pequena loja física em São Paulo, mas rapidamente crescemos e expandimos para o e-commerce, permitindo que gamers de todo o Brasil tenham acesso aos melhores produtos, com preços justos e um atendimento que só quem realmente entende de games pode oferecer.
        </p>
        <p>
          Hoje, a UTI DOS GAMES é reconhecida como uma das lojas mais confiáveis do mercado, com uma comunidade fiel de clientes que compartilham da mesma paixão que nos motivou a começar esta jornada.
        </p>
      </div>
      
      <div className="bg-card-bg rounded-lg overflow-hidden p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-primary">Nossa Missão</h2>
        <p className="mb-4">
          Proporcionar a melhor experiência de compra para gamers, oferecendo produtos de qualidade, preços justos e um atendimento personalizado que entende as necessidades de cada jogador.
        </p>
        <h3 className="text-xl font-bold mb-2 mt-6">Visão</h3>
        <p className="mb-4">
          Ser a loja de games mais amada do Brasil, reconhecida pela qualidade dos produtos, excelência no atendimento e pela comunidade que construímos ao redor da nossa marca.
        </p>
        <h3 className="text-xl font-bold mb-2 mt-6">Valores</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li><span className="font-medium text-primary">Paixão por Games:</span> Somos gamers atendendo gamers, entendemos o que nossos clientes procuram.</li>
          <li><span className="font-medium text-primary">Transparência:</span> Prezamos pela honestidade em todas as nossas relações.</li>
          <li><span className="font-medium text-primary">Qualidade:</span> Selecionamos cuidadosamente cada produto que oferecemos.</li>
          <li><span className="font-medium text-primary">Comunidade:</span> Acreditamos no poder dos games para unir pessoas.</li>
          <li><span className="font-medium text-primary">Inovação:</span> Estamos sempre em busca de novas formas de melhorar a experiência dos nossos clientes.</li>
        </ul>
      </div>
      
      <div className="bg-card-bg rounded-lg overflow-hidden p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-primary">Nossa Equipe</h2>
        <p className="mb-6">
          Nossa equipe é formada por profissionais apaixonados por games, que trabalham diariamente para oferecer a melhor experiência possível para nossos clientes.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-32 h-32 rounded-full bg-gray-700 mx-auto mb-4 overflow-hidden">
              <img src="https://via.placeholder.com/128x128/0F172A/FFFFFF?text=CEO" alt="CEO" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-bold">João Silva</h3>
            <p className="text-gray-400">CEO & Fundador</p>
          </div>
          
          <div className="text-center">
            <div className="w-32 h-32 rounded-full bg-gray-700 mx-auto mb-4 overflow-hidden">
              <img src="https://via.placeholder.com/128x128/0F172A/FFFFFF?text=CTO" alt="CTO" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-bold">Maria Oliveira</h3>
            <p className="text-gray-400">CTO</p>
          </div>
          
          <div className="text-center">
            <div className="w-32 h-32 rounded-full bg-gray-700 mx-auto mb-4 overflow-hidden">
              <img src="https://via.placeholder.com/128x128/0F172A/FFFFFF?text=CMO" alt="CMO" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-bold">Pedro Santos</h3>
            <p className="text-gray-400">Diretor de Marketing</p>
          </div>
        </div>
      </div>
      
      <div className="bg-card-bg rounded-lg overflow-hidden p-6">
        <h2 className="text-2xl font-bold mb-4 text-primary">Entre em Contato</h2>
        <p className="mb-6">
          Estamos sempre abertos para ouvir sugestões, responder dúvidas ou simplesmente bater um papo sobre games. Entre em contato conosco!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold mb-2">Informações de Contato</h3>
            <p className="mb-1"><span className="text-gray-400">Email:</span> contato@utidosgames.com.br</p>
            <p className="mb-1"><span className="text-gray-400">Telefone:</span> (11) 99999-9999</p>
            <p><span className="text-gray-400">Endereço:</span> Av. Paulista, 1000 - São Paulo, SP</p>
          </div>
          
          <div>
            <h3 className="font-bold mb-2">Horário de Atendimento</h3>
            <p className="mb-1"><span className="text-gray-400">Segunda a Sexta:</span> 9h às 18h</p>
            <p className="mb-1"><span className="text-gray-400">Sábado:</span> 10h às 16h</p>
            <p><span className="text-gray-400">Domingo:</span> Fechado</p>
          </div>
        </div>
        
        <div className="mt-6">
          <Link to="/contato" className="btn btn-primary">
            Enviar Mensagem
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
