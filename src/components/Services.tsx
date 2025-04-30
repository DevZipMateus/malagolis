
import React from 'react';
import { ShoppingBag, CreditCard, ShoppingCart, Package } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Venda de Colecionáveis',
    description: 'Oferecemos uma ampla variedade de itens colecionáveis, desde gibis até miniaturas raras, com preços justos.',
    icon: ShoppingBag,
    delay: '0s'
  },
  {
    id: 2,
    title: 'Compra de Coleções',
    description: 'Compramos sua coleção de itens colecionáveis, realizando avaliações justas e pagamento imediato.',
    icon: ShoppingCart,
    delay: '0.1s'
  },
  {
    id: 3,
    title: 'Pagamento Facilitado',
    description: 'Trabalhamos com links de pagamento, facilitando a compra dos nossos produtos em qualquer lugar do Brasil.',
    icon: CreditCard,
    delay: '0.2s'
  },
  {
    id: 4,
    title: 'Mostruário Físico',
    description: 'Visite nosso mostruário físico e conheça nossa variedade de produtos colecionáveis pessoalmente.',
    icon: Package,
    delay: '0.3s'
  }
];

const Services = () => {
  return (
    <section id="services" className="section bg-gray-50">
      <div className="container-custom">
        {/* Cabeçalho da seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-malagoli/10 text-malagoli font-medium px-4 py-1.5 rounded-full text-sm mb-4">
            Nossos Serviços
          </div>
          <h2 className="section-heading">
            O que oferecemos para colecionadores
          </h2>
          <p className="section-subheading">
            Somos especializados na compra e venda de itens colecionáveis, com foco especial em gibis e miniaturas de veículos em escala 1:64.
          </p>
        </div>
        
        {/* Grid de serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-lg p-8 border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-300 transform hover:scale-[1.02] opacity-0 animate-fade-in"
              style={{ animationDelay: service.delay }}
            >
              <div className="bg-malagoli/10 p-4 rounded-lg inline-block mb-5">
                <service.icon className="text-malagoli" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="mt-16 text-center">
          <a 
            href="https://shopee.com.br/malagoliscolecionaveis" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary"
          >
            <ShoppingBag className="mr-2" size={18} />
            <span>Visitar nossa loja na Shopee</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
