import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Catalog from './components/catalog/Catalog';
import ProductDetail from './components/product/ProductDetail';
import Cart from './components/cart/Cart';
import AboutUs from './components/pages/AboutUs';
import FAQ from './components/pages/FAQ';
import SEO from './components/seo/SEO';
import WhatsApp from './components/integrations/WhatsApp';
import './App.css';

function App() {
  return (
    <Router>
      <SEO 
        title="UTI DOS GAMES - Sua loja de games"
        description="A melhor loja de games do Brasil. Encontre os melhores jogos, consoles e acessórios com os melhores preços."
      />
      <div className="flex flex-col min-h-screen bg-background">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Catalog />} />
            <Route path="/produto/:id" element={<ProductDetail />} />
            <Route path="/carrinho" element={<Cart />} />
            <Route path="/quem-somos" element={<AboutUs />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>
        <Footer />
        <WhatsApp />
      </div>
    </Router>
  );
}

export default App;
