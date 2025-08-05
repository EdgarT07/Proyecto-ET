// src/components/Inicio.jsx

import React from 'react';

export default function Inicio({ setActiveSection }) {
  return (
    <section id="inicio" className="container mx-auto px-6 py-24 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
        Soluciones Técnicas a tu Alcance
      </h1>
      <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
        Reparación, mantenimiento y soporte para todos tus equipos informáticos. Confianza, rapidez y los mejores precios.
      </p>
      <button 
         onClick={() => setActiveSection('contacto')}
         className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-transform duration-300 transform hover:scale-105 inline-block">
        Contáctanos Ahora
      </button>
    </section>
  );
}