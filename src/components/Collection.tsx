
import React from 'react';
import { useIsMobile } from '../hooks/use-mobile';

const categories = [
  {
    id: 1,
    name: 'Gibis e HQs',
    description: 'Variadas edições de histórias em quadrinhos, desde clássicos aos mais recentes.',
    image: 'https://images.unsplash.com/photo-1601850494422-3cf14624b0b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    delay: '0s'
  },
  {
    id: 2,
    name: 'Miniaturas Diecast',
    description: 'Carros em miniatura fabricados com metal fundido, em escala 1:64.',
    image: 'https://images.unsplash.com/photo-1594787318286-3d835c1d207f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    delay: '0.1s'
  },
  {
    id: 3,
    name: 'Figuras de Ação',
    description: 'Personagens de filmes, séries e animes em forma de estatuetas colecionáveis.',
    image: 'https://images.unsplash.com/photo-1608278047522-58806a6ac85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    delay: '0.2s'
  },
  {
    id: 4,
    name: 'Chaveiros',
    description: 'Pequenos itens colecionáveis para levar seus personagens favoritos sempre com você.',
    image: 'https://images.unsplash.com/photo-1611225337530-a6e8939f38a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    delay: '0.3s'
  },
  {
    id: 5,
    name: 'Cards',
    description: 'Cartões colecionáveis de diversas franquias e personagens.',
    image: 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    delay: '0.4s'
  },
  {
    id: 6,
    name: 'Brinquedos Antigos',
    description: 'Peças nostálgicas que relembram a infância de várias gerações.',
    image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    delay: '0.5s'
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
        </div>
        
        {/* Grid de categorias */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div 
              key={category.id}
              className="group rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 opacity-0 animate-fade-in"
              style={{ animationDelay: category.delay }}
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
                  className="inline-block mt-4 text-malagoli font-medium hover:text-malagoli-dark transition-colors"
                >
                  Ver na loja →
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
              <a href="#contact" className="btn-primary">
                Fale conosco
              </a>
            </div>
            <div className="md:w-4/12">
              <img 
                src={isMobile ? 
                  "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" :
                  "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                } 
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
