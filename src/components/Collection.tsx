
import React from 'react';
import { useIsMobile } from '../hooks/use-mobile';
import { ShoppingBag } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: 'Gibis de Luxo',
    description: 'Variadas edições de histórias em quadrinhos, desde clássicos aos mais recentes.',
    image: '/lovable-uploads/gibisluxo.jpeg',
    delay: '0s'
  }, 
  {
    id: 2,
    name: 'Velozes e Furiosos',
    description: 'Colecionáveis exclusivos da famosa franquia de filmes de ação.',
    image: '/lovable-uploads/velozesefuriosos.jpeg',
    delay: '0.1s'
  }, 
  {
    id: 3,
    name: 'Brinquedos Antigos',
    description: 'Itens nostálgicos que marcaram época e se tornaram peças valiosas de coleção.',
    image: '/lovable-uploads/brinquedosantigos.jpeg',
    delay: '0.2s'
  },
  {
    id: 4,
    name: 'Miniaturas Premium',
    description: 'Modelos detalhados e de alta qualidade para colecionadores exigentes.',
    image: '/lovable-uploads/miniaturaspremium.jpeg',
    delay: '0.3s'
  }
];

const Collection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="collection" className="section bg-white">
      <div className="container-custom">
        {/* Cabeçalho da seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-malagoli/10 text-malagoli font-medium px-4 py-1.5 rounded-full text-sm mb-4">
            Nossos Colecionáveis
          </div>
          <h2 className="section-heading">
            Descubra nossa variedade de itens
          </h2>
          <p className="section-subheading">
            Trabalhamos com diversas categorias de colecionáveis para todos os tipos de colecionadores, com foco especial em gibis e miniaturas.
          </p>
          
          {/* Shopee Banner */}
          <div className="mt-8 bg-malagoli-light/20 p-4 rounded-md inline-flex items-center justify-center">
            <ShoppingBag className="text-malagoli mr-2" size={24} />
            <span className="text-gray-800">
              Compre agora em nossa <a href="https://shopee.com.br/malagoliscolecionaveis" target="_blank" rel="noopener noreferrer" className="text-malagoli font-semibold hover:underline">loja na Shopee</a>
            </span>
          </div>
        </div>
        
        {/* Grid de categorias */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map(category => (
            <div 
              key={category.id} 
              className="group rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 opacity-0 animate-fade-in" 
              style={{animationDelay: category.delay}}
            >
              {/* Imagem */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
                <h3 className="absolute bottom-4 left-4 text-white text-xl font-semibold">{category.name}</h3>
              </div>
              
              {/* Descrição */}
              <div className="p-6 bg-white">
                <p className="text-gray-600">{category.description}</p>
                <a 
                  href="https://shopee.com.br/malagoliscolecionaveis" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center mt-4 text-malagoli font-medium hover:text-malagoli-dark transition-colors group"
                >
                  <span>Ver na Shopee</span>
                  <ShoppingBag className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* Destaque */}
        <div className="mt-16 bg-gradient-to-br from-malagoli-light/30 to-malagoli/10 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-7/12 mb-8 md:mb-0">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                Precisa vender sua coleção?
              </h3>
              <p className="text-gray-700 mb-4">
                Temos interesse em comprar coleções completas! Entre em contato conosco e faça uma avaliação justa dos seus itens colecionáveis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="btn-primary">
                  Fale conosco
                </a>
                <a href="https://shopee.com.br/malagoliscolecionaveis" target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center justify-center">
                  <ShoppingBag className="mr-2" size={18} />
                  <span>Visite nossa loja</span>
                </a>
              </div>
            </div>
            <div className="md:w-4/12">
              <img 
                src={isMobile ? "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" : "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} 
                alt="Coleção de itens" 
                className="rounded-lg shadow-lg" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collection;
