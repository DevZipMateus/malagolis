
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo e Descrição */}
          <div className="animate-fade-in">
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/dc4c9a67-5595-4cde-84fc-a89434bc1ac5.png" 
                alt="Malagoli's Colecionáveis Logo" 
                className="h-12 w-auto mr-2"
              />
            </div>
            <p className="text-gray-300 mb-6">
              Empresa especializada na compra e venda de colecionáveis em geral desde 2012, com foco em gibis e miniaturas diecast.
            </p>
            <p className="text-gray-400 text-sm italic">
              "A nostalgia preserva nossa mais linda essência"
            </p>
          </div>
          
          {/* Links Rápidos */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-xl font-semibold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-malagoli-light transition-colors duration-300 inline-block">Início</a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-malagoli-light transition-colors duration-300 inline-block">Sobre Nós</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-malagoli-light transition-colors duration-300 inline-block">Serviços</a>
              </li>
              <li>
                <a href="#collection" className="text-gray-300 hover:text-malagoli-light transition-colors duration-300 inline-block">Colecionáveis</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-malagoli-light transition-colors duration-300 inline-block">Contato</a>
              </li>
              <li>
                <a 
                  href="https://shopee.com.br/malagoliscolecionaveis" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-malagoli-light transition-colors duration-300 inline-block"
                >
                  Loja Shopee
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contato */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-semibold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="mr-3 mt-1 flex-shrink-0 text-malagoli-light" size={18} />
                <span className="text-gray-300">(48) 99135-8069</span>
              </li>
              <li className="flex items-start">
                <Mail className="mr-3 mt-1 flex-shrink-0 text-malagoli-light" size={18} />
                <span className="text-gray-300">peceviana@hotmail.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-3 mt-1 flex-shrink-0 text-malagoli-light" size={18} />
                <span className="text-gray-300">
                  Rua Prof. Maria do Carmo Souza, 10 / 303B<br />
                  Bairro Campinas – São José – SC<br />
                  CEP 88101-360
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-white/70">
          <p>© {currentYear} Malagoli's Colecionáveis. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
