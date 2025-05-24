import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Como faço para rastrear meu pedido?",
    answer: "Após a confirmação do pagamento, você receberá um e-mail com o código de rastreamento. Você também pode acompanhar o status do seu pedido na área 'Meus Pedidos' da sua conta."
  },
  {
    question: "Quais são as formas de pagamento aceitas?",
    answer: "Aceitamos cartões de crédito (Visa, Mastercard, Elo, American Express), boleto bancário, PIX e transferência bancária. Parcelamos em até 12x sem juros nos cartões de crédito."
  },
  {
    question: "Qual o prazo de entrega?",
    answer: "O prazo de entrega varia de acordo com a sua localização. Após a confirmação do pagamento, o prazo médio é de 2 a 5 dias úteis para capitais e regiões metropolitanas, e de 5 a 10 dias úteis para demais localidades."
  },
  {
    question: "Como funciona a garantia dos produtos?",
    answer: "Todos os produtos possuem garantia mínima de 90 dias, conforme o Código de Defesa do Consumidor. Alguns produtos possuem garantia estendida oferecida pelo fabricante, que pode variar de 6 meses a 1 ano."
  },
  {
    question: "Posso trocar ou devolver um produto?",
    answer: "Sim, você pode solicitar a troca ou devolução em até 7 dias após o recebimento do produto, conforme o Código de Defesa do Consumidor. O produto deve estar em perfeito estado, com embalagem original e todos os acessórios."
  },
  {
    question: "Vocês vendem jogos usados?",
    answer: "Sim, temos uma seção de jogos usados em nosso site. Todos os jogos usados passam por uma rigorosa avaliação de qualidade antes de serem disponibilizados para venda."
  },
  {
    question: "Como faço para vender meus jogos usados para a loja?",
    answer: "Você pode entrar em contato conosco pelo WhatsApp ou e-mail para avaliarmos seus jogos. Após a avaliação, oferecemos um valor em dinheiro ou crédito na loja (com valor adicional de 15%)."
  },
  {
    question: "Vocês fazem reparos em consoles e controles?",
    answer: "Sim, oferecemos serviços de reparo para consoles e controles. Entre em contato conosco para uma avaliação e orçamento sem compromisso."
  },
  {
    question: "Vocês enviam para todo o Brasil?",
    answer: "Sim, enviamos para todos os estados do Brasil. O frete é calculado de acordo com o CEP de entrega e o peso do produto."
  },
  {
    question: "Como faço para me tornar um parceiro ou fornecedor?",
    answer: "Envie um e-mail para parcerias@utidosgames.com.br com informações sobre sua empresa e produtos. Nossa equipe entrará em contato para avaliar a possibilidade de parceria."
  }
];

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]); // Primeiro item aberto por padrão
  
  const toggleItem = (index: number) => {
    if (openItems.includes(index)) {
      setOpenItems(openItems.filter(item => item !== index));
    } else {
      setOpenItems([...openItems, index]);
    }
  };
  
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Perguntas Frequentes</h1>
      
      <div className="bg-card-bg rounded-lg overflow-hidden mb-8">
        <div className="p-6">
          <p className="mb-6">
            Encontre respostas para as perguntas mais comuns sobre nossos produtos, serviços, entregas e políticas. Se você não encontrar o que procura, entre em contato conosco pelo WhatsApp ou e-mail.
          </p>
          
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div key={index} className="border border-gray-800 rounded-lg overflow-hidden">
                <button 
                  onClick={() => toggleItem(index)}
                  className="w-full flex justify-between items-center p-4 text-left font-medium hover:bg-gray-800 transition-colors"
                >
                  <span>{item.question}</span>
                  {openItems.includes(index) ? (
                    <ChevronUp size={20} className="text-primary" />
                  ) : (
                    <ChevronDown size={20} className="text-gray-400" />
                  )}
                </button>
                
                {openItems.includes(index) && (
                  <div className="p-4 pt-0 border-t border-gray-800 text-gray-300">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="bg-card-bg rounded-lg overflow-hidden p-6">
        <h2 className="text-2xl font-bold mb-4 text-primary">Ainda tem dúvidas?</h2>
        <p className="mb-6">
          Se você não encontrou a resposta que procurava, entre em contato conosco. Estamos sempre prontos para ajudar!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Atendimento por E-mail</h3>
            <p className="mb-2">Envie sua dúvida para:</p>
            <p className="text-primary">contato@utidosgames.com.br</p>
            <p className="text-sm text-gray-400 mt-2">Respondemos em até 24 horas úteis.</p>
          </div>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Atendimento por WhatsApp</h3>
            <p className="mb-2">Envie uma mensagem para:</p>
            <p className="text-primary">(11) 99999-9999</p>
            <p className="text-sm text-gray-400 mt-2">Disponível de segunda a sexta, das 9h às 18h.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
