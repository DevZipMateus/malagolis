
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: Usuário tentou acessar rota inexistente:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow flex items-center justify-center bg-gray-50 py-32">
        <div className="text-center max-w-lg mx-auto px-4">
          <h1 className="text-6xl font-bold text-malagoli mb-6">404</h1>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Página não encontrada</h2>
          <p className="text-gray-600 mb-8">
            A página que você está procurando não existe ou foi removida.
          </p>
          <a 
            href="/" 
            className="btn-primary inline-flex"
          >
            Voltar para a página inicial
          </a>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
