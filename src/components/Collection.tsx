import React from 'react';
import { useIsMobile } from '../hooks/use-mobile';
import { ShoppingBag } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
const categories = [{
  id: 1,
  name: 'Gibis e HQs',
  description: 'Variadas edições de histórias em quadrinhos, desde clássicos aos mais recentes.',
  image: 'https://images.unsplash.com/photo-1601850494422-3cf14624b0b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  delay: '0s'
}, {
  id: 2,
  name: 'Miniaturas Diecast',
  description: 'Carros em miniatura fabricados com metal fundido, em escala 1:64.',
  image: 'https://images.unsplash.com/photo-1594787318286-3d835c1d207f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  delay: '0.1s'
}, {
  id: 3,
  name: 'Figuras de Ação',
  description: 'Personagens de filmes, séries e animes em forma de estatuetas colecionáveis.',
  image: 'https://images.unsplash.com/photo-1608278047522-58806a6ac85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  delay: '0.2s'
}];
const instagramImages = [{
  id: 1,
  url: "https://instagram.fcxj1-1.fna.fbcdn.net/v/t39.30808-6/491984592_2791590141042181_2861908719864698437_n.jpg?stp=c0.26.1170.1285a_dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjExNzB4MTMzOC5zZHIuZjMwODA4LmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.fcxj1-1.fna.fbcdn.net&_nc_cat=101&_nc_oc=Q6cZ2QEbAC1ffajySrhF2m_V2Le0mshqunjZGMA9pXWRAAlC8dmyiw2XkTutNH-6hKGAYBg&_nc_ohc=bFlkpFwl388Q7kNvwEC0TnY&_nc_gid=_Qzw41Pvlp34L0m4l7jZSA&edm=APoiHPcAAAAA&ccb=7-5&ig_cache_key=MzYxMTU2MjQ1MzIzNTI5NzcyNg%3D%3D.3-ccb7-5&oh=00_AfEKrLDv4yqd5gGjsBetRp_oG_uu3yJKN_BLEUlR48lgIw&oe=681800E1&_nc_sid=22de04",
  alt: "Miniaturas colecionáveis Malagoli's"
}, {
  id: 2,
  url: "https://instagram.fcxj1-1.fna.fbcdn.net/v/t39.30808-6/486283022_2768067926727736_5028906971158981795_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQuaW1hZ2VfdXJsZ2VuLjE2MDB4ODQ4LnNkci5mMzA4MDguZGVmYXVsdF9pbWFnZSJ9&_nc_ht=instagram.fcxj1-1.fna.fbcdn.net&_nc_cat=104&_nc_oc=Q6cZ2QGzp2bfTlXTB3lpiWwIRBbdYAwaaTIoTOeREX9uDRRn2MEXnXRCQY1Ks13PY0-UKHc&_nc_ohc=24-5y_w_l64Q7kNvwGS_oo_&_nc_gid=Lgm3eUpPb5Ipt7Z5XA83DA&edm=APoiHPcAAAAA&ccb=7-5&ig_cache_key=MzU5NTY4NTI0NTMyNTM4MjI5NA%3D%3D.3-ccb7-5&oh=00_AfG5MpjYRFGAOf_vt9gTm9eN60Qq6dhEfbQ1xs3a-eZUGg&oe=68180B60&_nc_sid=22de04",
  alt: "Colecionáveis disponíveis na Shopee"
}, {
  id: 3,
  url: "https://instagram.fcxj1-1.fna.fbcdn.net/v/t39.30808-6/485948446_2765558826978646_2243029628600971351_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQuaW1hZ2VfdXJsZ2VuLjEzNTB4MTI2NC5zZHIuZjMwODA4LmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.fcxj1-1.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2QGzp2bfTlXTB3lpiWwIRBbdYAwaaTIoTOeREX9uDRRn2MEXnXRCQY1Ks13PY0-UKHc&_nc_ohc=iyzAGqGi6hcQ7kNvwEYOKhP&_nc_gid=Lgm3eUpPb5Ipt7Z5XA83DA&edm=APoiHPcAAAAA&ccb=7-5&ig_cache_key=MzU5Mzg2ODI5NTQxNDMwMDQ2Nw%3D%3D.3-ccb7-5&oh=00_AfEKuBfjKOUUc3gKf0rWXAi3C0Z4ya5DcOK-ZnroTWmQ6A&oe=6817FDAD&_nc_sid=22de04",
  alt: "Gibis colecionáveis da Malagoli's"
}];
const Collection = () => {
  const isMobile = useIsMobile();
  return <section id="collection" className="section bg-white">
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
        
        
        {/* Grid de categorias */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map(category => <div key={category.id} className="group rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 opacity-0 animate-fade-in" style={{
          animationDelay: category.delay
        }}>
              {/* Imagem */}
              <div className="relative h-64 overflow-hidden">
                <img src={category.image} alt={category.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
                <h3 className="absolute bottom-4 left-4 text-white text-xl font-semibold">{category.name}</h3>
              </div>
              
              {/* Descrição */}
              <div className="p-6 bg-white">
                <p className="text-gray-600">{category.description}</p>
                <a href="https://shopee.com.br/malagoliscolecionaveis" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-4 text-malagoli font-medium hover:text-malagoli-dark transition-colors group">
                  <span>Ver na Shopee</span>
                  <ShoppingBag className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                </a>
              </div>
            </div>)}
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
              <img src={isMobile ? "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" : "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="Coleção de itens" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Collection;