
import React from 'react';
import { Check } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Imagem */}
          <div className="lg:w-1/2 animate-fade-in">
            <div className="relative">
              <div className="bg-malagoli/20 w-full h-full absolute -left-4 -top-4 rounded-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1608278047522-58806a6ac85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Coleção de miniaturas e itens colecionáveis" 
                className="relative z-10 rounded-lg shadow-lg w-full object-cover h-[350px]"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 z-20 animate-float">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-malagoli rounded-full mr-2"></div>
                    <span className="text-sm font-medium text-gray-600">Desde 2012</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-malagoli-light rounded-full mr-2"></div>
                    <span className="text-sm font-medium text-gray-600">+10 anos</span>
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900">Paixão por colecionáveis</div>
                <div className="text-sm text-gray-600">Preservando histórias e memórias</div>
              </div>
            </div>
          </div>
          
          {/* Conteúdo */}
          <div className="lg:w-1/2">
            <div className="inline-block bg-malagoli/10 text-malagoli font-medium px-4 py-1.5 rounded-full text-sm mb-3 animate-fade-in">
              Sobre Nós
            </div>
            <h2 className="section-heading animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Malagoli's Colecionáveis - Resgatando a nostalgia
            </h2>
            <p className="text-gray-600 mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Desde 2012, nos dedicamos à compra e venda de colecionáveis em geral, com foco especial em gibis e miniaturas de veículos em escala 1:64. Nossa paixão é preservar memórias e histórias através de peças únicas que despertam nostalgia.
            </p>
            <p className="text-gray-600 mb-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Participamos de feiras físicas e vendemos em plataformas online, principalmente na Shopee. Além disso, compramos coleções completas e oferecemos um mostruário físico para quem deseja conhecer nosso acervo pessoalmente.
            </p>
            
            {/* Pontos-chave */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="bg-malagoli/10 p-1 rounded-full mr-3 mt-1">
                  <Check className="text-malagoli" size={16} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-0">Gibis e HQs</h4>
                  <p className="text-gray-600">Diversas edições e títulos raros para colecionadores</p>
                </div>
              </div>
              
              <div className="flex items-start animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <div className="bg-malagoli/10 p-1 rounded-full mr-3 mt-1">
                  <Check className="text-malagoli" size={16} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-0">Miniaturas Diecast</h4>
                  <p className="text-gray-600">Especialistas em miniaturas de veículos em escala 1:64</p>
                </div>
              </div>
              
              <div className="flex items-start animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <div className="bg-malagoli/10 p-1 rounded-full mr-3 mt-1">
                  <Check className="text-malagoli" size={16} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-0">Figuras de Ação</h4>
                  <p className="text-gray-600">Personagens que marcaram gerações em peças colecionáveis</p>
                </div>
              </div>
            </div>
            
            <div className="italic text-gray-500 border-l-4 border-malagoli/50 pl-4 animate-fade-in" style={{ animationDelay: '0.7s' }}>
              "A nostalgia preserva nossa mais linda essência"
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
