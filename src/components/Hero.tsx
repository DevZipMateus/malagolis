import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';
const Hero = () => {
  const isMobile = useIsMobile();
  return <section className="pt-16 md:pt-24 pb-6 md:pb-8 bg-gradient-to-br from-white to-malagoli-light/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-5"></div>
      
      {/* Elementos decorativos */}
      <div className="absolute top-40 right-10 w-72 h-72 bg-malagoli/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-60 h-60 bg-malagoli-light/10 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10 py-[60px]">
        <div className="flex flex-col md:flex-row items-center">
          {/* Conteúdo */}
          <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0 text-center md:text-left">
            <h1 className={`font-bold text-gray-900 leading-tight mb-4 ${isMobile ? 'text-3xl' : 'text-4xl md:text-5xl lg:text-6xl'} block`}>
              <span className="text-malagoli">Colecionáveis</span>{" "}
              <span>que despertam nostalgia e paixão</span>
            </h1>
            
            <p className="text-lg text-gray-700 mb-6 max-w-lg mx-auto md:mx-0 opacity-100 animate-fade-in-delay-1">
              <strong>Gibis raros</strong>, <strong>gibis antigos</strong>, miniaturas diecast, figuras de ação e muito mais. Desde 2012 preservando histórias e memórias através de itens colecionáveis únicos.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 opacity-100 animate-fade-in-delay-2">
              <a href="https://shopee.com.br/malagoliscolecionaveis" target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center justify-center group">
                <ShoppingBag className="mr-2 group-hover:animate-bounce" size={20} />
                <span>Comprar na Shopee</span>
              </a>
              <a href="#contact" className="btn-secondary">
                <span>Entre em contato</span>
              </a>
            </div>
            
            <p className="text-malagoli-dark/80 mt-4 italic text-sm opacity-100 animate-fade-in-delay-3">
              "A nostalgia preserva nossa mais linda essência"
            </p>
          </div>
          
          {/* Imagem */}
          <div className="md:w-1/2 opacity-100 animate-fade-in-delay-1">
            <div className="relative">
              <div className="bg-malagoli/20 w-full h-full absolute -left-4 -top-4 rounded-lg"></div>
              <img src="/lovable-uploads/dc4c9a67-5595-4cde-84fc-a89434bc1ac5.png" alt="Malagoli's Colecionáveis - Gibis raros e antigos, miniaturas e colecionáveis" className="relative z-10 rounded-lg shadow-lg w-full" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Decoração ondulada */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="1" d="M0,32L80,37.3C160,43,320,53,480,58.7C640,64,800,64,960,53.3C1120,43,1280,21,1360,10.7L1440,0L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
        </svg>
      </div>
    </section>;
};
export default Hero;