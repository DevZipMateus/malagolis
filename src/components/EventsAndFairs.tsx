
import React from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const EventsAndFairs = () => {
  const fairImages = [
    {
      src: "/lovable-uploads/1018606386906372.jpeg",
      alt: "Feira de Colecionáveis em Florianópolis"
    },
    {
      src: "/lovable-uploads/1386849332453612.jpeg",
      alt: "Stand na Feira de Colecionáveis"
    },
    {
      src: "/lovable-uploads/1388368415817802.jpeg",
      alt: "Exposição de produtos colecionáveis"
    },
    {
      src: "/lovable-uploads/1828267837960833.jpeg",
      alt: "Produtos Malagoli's em exibição"
    },
    {
      src: "/lovable-uploads/1185894869998319.jpeg",
      alt: "Organização de Feira de Colecionáveis"
    }
  ];

  return (
    <section id="events" className="section bg-gray-50 py-16">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="section-heading">Eventos e Feiras</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Participamos e organizamos feiras de colecionáveis na Grande Florianópolis. 
            Confira alguns momentos das nossas exposições.
          </p>
        </div>
        
        {/* Carousel de imagens */}
        <div className="relative px-4 md:px-12 lg:px-16">
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {fairImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="hover-card border-none">
                      <CardContent className="p-2">
                        <div className="aspect-square overflow-hidden rounded-xl">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 md:left-4" />
            <CarouselNext className="absolute right-0 md:right-4" />
          </Carousel>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-lg font-medium text-malagoli mb-4">
            Organizamos Feiras de Colecionáveis na Grande Florianópolis
          </p>
          <a 
            href="#contact" 
            className="btn-primary inline-flex items-center space-x-2"
          >
            <span>Entre em contato</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default EventsAndFairs;
