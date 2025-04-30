
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

const Contact = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="contact" className="section bg-gray-50">
      <div className="container-custom">
        {/* Cabeçalho da seção */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-block bg-malagoli/10 text-malagoli font-medium px-4 py-1.5 rounded-full text-sm mb-3">
            Contato
          </div>
          <h2 className="section-heading">
            Entre em contato conosco
          </h2>
          <p className="text-gray-600 text-lg">
            Estamos prontos para atender às suas dúvidas e necessidades relacionadas aos nossos colecionáveis.
          </p>
        </div>
        
        {/* Formulário e Informações */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* Informações de Contato */}
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-5 text-gray-900">Informações de Contato</h3>
            
            <div className="space-y-4">
              {/* Responsável */}
              <div className="flex items-start">
                <div className="bg-malagoli-orange/20 p-2 rounded-full mr-3 flex-shrink-0">
                  <img
                    src="/lovable-uploads/dc4c9a67-5595-4cde-84fc-a89434bc1ac5.png"
                    alt="Logo"
                    className="w-5 h-5 object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-base font-medium text-gray-900 mb-0">Responsável</h4>
                  <p className="text-gray-600">Paulo Cezar Viana (Pece Viana)</p>
                </div>
              </div>
              
              {/* Telefone */}
              <div className="flex items-start">
                <div className="bg-malagoli/10 p-2 rounded-full mr-3 flex-shrink-0">
                  <Phone className="text-malagoli" size={18} />
                </div>
                <div>
                  <h4 className="text-base font-medium text-gray-900 mb-0">Telefone / WhatsApp</h4>
                  <a 
                    href="tel:+5548991358069" 
                    className="text-gray-600 hover:text-malagoli transition-colors"
                  >
                    (48) 99135-8069
                  </a>
                </div>
              </div>
              
              {/* Email */}
              <div className="flex items-start">
                <div className="bg-malagoli/10 p-2 rounded-full mr-3 flex-shrink-0">
                  <Mail className="text-malagoli" size={18} />
                </div>
                <div>
                  <h4 className="text-base font-medium text-gray-900 mb-0">E-mail</h4>
                  <a 
                    href="mailto:peceviana@hotmail.com" 
                    className="text-gray-600 hover:text-malagoli transition-colors"
                  >
                    peceviana@hotmail.com
                  </a>
                </div>
              </div>
              
              {/* Endereço */}
              <div className="flex items-start">
                <div className="bg-malagoli/10 p-2 rounded-full mr-3 flex-shrink-0">
                  <MapPin className="text-malagoli" size={18} />
                </div>
                <div>
                  <h4 className="text-base font-medium text-gray-900 mb-0">Endereço</h4>
                  <p className="text-gray-600">
                    Rua Prof. Maria do Carmo Souza, 10 / 303B<br />
                    Bairro Campinas – São José – SC<br />
                    CEP 88101-360
                  </p>
                </div>
              </div>
              
              {/* Redes Sociais */}
              <div>
                <h4 className="text-base font-medium text-gray-900 mb-2">Redes Sociais</h4>
                <div className="flex space-x-3">
                  <a 
                    href="https://www.instagram.com/malagolis_colecionaveis/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-malagoli/10 hover:bg-malagoli/20 p-2 rounded-full text-malagoli transition-colors"
                    aria-label="Instagram"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  </a>
                  <a 
                    href="https://www.facebook.com/profile.php?id=100005736676752" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-malagoli/10 hover:bg-malagoli/20 p-2 rounded-full text-malagoli transition-colors"
                    aria-label="Facebook"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                  </a>
                  <a 
                    href="https://shopee.com.br/malagoliscolecionaveis" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-malagoli/10 hover:bg-malagoli/20 p-2 rounded-full text-malagoli transition-colors"
                    aria-label="Shopee"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-bag"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mapa */}
          <div className="h-[300px] rounded-lg overflow-hidden shadow-sm">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.724987806652!2d-48.61566092497987!3d-27.590477676845647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9527391e295452f9%3A0xb90eeb834891374e!2sR.%20Prof.%20Maria%20do%20Carmo%20de%20Souza%2C%2010%20-%20Campinas%2C%20S%C3%A3o%20Jos%C3%A9%20-%20SC%2C%2088101-360!5e0!3m2!1spt-BR!2sbr!4v1681579046650!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Malagoli's Colecionáveis"
            ></iframe>
          </div>
        </div>
        
        {/* Slogan */}
        <div className="mt-8 text-center">
          <p className="text-lg text-malagoli italic">
            "A nostalgia preserva nossa mais linda essência"
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
