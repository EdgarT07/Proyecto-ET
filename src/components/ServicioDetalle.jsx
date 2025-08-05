// src/components/ServicioDetalle.jsx

import React from 'react';
import { motion } from 'framer-motion';

export default function ServicioDetalle({ service, setActiveSection }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section 
        className="h-80 bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `linear-gradient(rgba(17, 24, 39, 0.7), rgba(17, 24, 39, 0.7)), url(${service.heroImage})` }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold">{service.title}</h1>
      </section>

      <div className="container mx-auto px-6 py-16">
        {/* Descripción Principal */}
        <section className="max-w-4xl mx-auto mb-16">
          <p className="text-lg text-gray-300 leading-relaxed">
            {service.mainDescription}
          </p>
        </section>

        {/* Características Clave */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-400">Características Clave</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {service.features.map((feature, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-lg flex items-center">
                <span className="text-green-400 mr-3">✔</span>
                <p className="text-gray-300">{feature}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Galería de Imágenes */}
        <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-blue-400">Galería de Proyectos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {service.gallery.map((image, index) => (
                    <div key={index} className="bg-gray-700/50 rounded-lg flex items-center justify-center h-64 border-2 border-dashed border-gray-500">
                        <img src={image} alt={`Galería ${index + 1}`} className="w-full h-full object-cover rounded-lg"/>
                    </div>
                ))}
            </div>
             <p className="text-center text-gray-500 mt-4">Aquí puedes integrar un carrusel de imágenes.</p>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gray-800 p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">¿Interesado en este servicio?</h2>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">Contáctanos hoy mismo para obtener una cotización personalizada y resolver todas tus dudas.</p>
            <button 
                onClick={() => setActiveSection('contacto')}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-10 rounded-full transition-transform duration-300 transform hover:scale-105">
                Hablar con un experto
            </button>
        </section>
      </div>
    </motion.div>
  );
}
