
import React from 'react';
import { useIsMobile } from '../hooks/use-mobile';
import { ShoppingBag } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';

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

const instagramImages = [
  {
    id: 1,
    url: "https://instagram.fcxj1-1.fna.fbcdn.net/v/t39.30808-6/491984592_2791590141042181_2861908719864698437_n.jpg?stp=c0.26.1170.1285a_dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjExNzB4MTMzOC5zZHIuZjMwODA4LmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.fcxj1-1.fna.fbcdn.net&_nc_cat=101&_nc_oc=Q6cZ2QEbAC1ffajySrhF2m_V2Le0mshqunjZGMA9pXWRAAlC8dmyiw2XkTutNH-6hKGAYBg&_nc_ohc=bFlkpFwl388Q7kNvwEC0TnY&_nc_gid=_Qzw41Pvlp34L0m4l7jZSA&edm=APoiHPcAAAAA&ccb=7-5&ig_cache_key=MzYxMTU2MjQ1MzIzNTI5NzcyNg%3D%3D.3-ccb7-5&oh=00_AfEKrLDv4yqd5gGjsBetRp_oG_uu3yJKN_BLEUlR48lgIw&oe=681800E1&_nc_sid=22de04",
    alt: "Miniaturas colecionáveis Malagoli's"
  },
  {
    id: 2,
    url: "https://instagram.fcxj1-1.fna.fbcdn.net/v/t39.30808-6/486283022_2768067926727736_5028906971158981795_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQuaW1hZ2VfdXJsZ2VuLjE2MDB4ODQ4LnNkci5mMzA4MDguZGVmYXVsdF9pbWFnZSJ9&_nc_ht=instagram.fcxj1-1.fna.fbcdn.net&_nc_cat=104&_nc_oc=Q6cZ2QGzp2bfTlXTB3lpiWwIRBbdYAwaaTIoTOeREX9uDRRn2MEXnXRCQY1Ks13PY0-UKHc&_nc_ohc=24-5y_w_l64Q7kNvwGS_oo_&_nc_gid=Lgm3eUpPb5Ipt7Z5XA83DA&edm=APoiHPcAAAAA&ccb=7-5&ig_cache_key=MzU5NTY4NTI0NTMyNTM4MjI5NA%3D%3D.3-ccb7-5&oh=00_AfG5MpjYRFGAOf_vt9gTm9eN60Qq6dhEfbQ1xs3a-eZUGg&oe=68180B60&_nc_sid=22de04",
    alt: "Colecionáveis disponíveis na Shopee"
  },
  {
    id: 3,
    url: "https://instagram.fcxj1-1.fna.fbcdn.net/v/t39.30808-6/485948446_2765558826978646_2243029628600971351_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQuaW1hZ2VfdXJsZ2VuLjEzNTB4MTI2NC5zZHIuZjMwODA4LmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.fcxj1-1.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2QGzp2bfTlXTB3lpiWwIRBbdYAwaaTIoTOeREX9uDRRn2MEXnXRCQY1Ks13PY0-UKHc&_nc_ohc=iyzAGqGi6hcQ7kNvwEYOKhP&_nc_gid=Lgm3eUpPb5Ipt7Z5XA83DA&edm=APoiHPcAAAAA&ccb=7-5&ig_cache_key=MzU5Mzg2ODI5NTQxNDMwMDQ2Nw%3D%3D.3-ccb7-5&oh=00_AfEKuBfjKOUUc3gKf0rWXAi3C0Z4ya5DcOK-ZnroTWmQ6A&oe=6817FDAD&_nc_sid=22de04",
    alt: "Gibis colecionáveis da Malagoli's"
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
        
        {/* Instagram Images Carousel */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-6 text-center">Destaques do Instagram</h3>
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {instagramImages.map((image) => (
                <CarouselItem key={image.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <div className="overflow-hidden rounded-md shadow-md h-64 sm:h-80">
                      <img 
                        src={image.url} 
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
          <div className="mt-4 text-center">
            <a 
              href="https://www.instagram.com/malagolis_colecionaveis/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-malagoli hover:text-malagoli-dark font-medium text-sm inline-flex items-center"
            >
              Ver mais no Instagram
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
              </svg>
            </a>
          </div>
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
                <a 
                  href="https://shopee.com.br/malagoliscolecionaveis" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-secondary flex items-center justify-center"
                >
                  <ShoppingBag className="mr-2" size={18} />
                  <span>Visite nossa loja</span>
                </a>
              </div>
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
