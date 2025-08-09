// src/components/ServicioDetalle.jsx

import React from 'react';
import { motion } from 'framer-motion';

export default function ServicioDetalle({ service, setActiveSection }) {
  // REEMPLAZA ESTOS VALORES CON LOS TUYOS
  const PHONE_NUMBER = '+584122106109'; // Tu número de teléfono para llamadas

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section 
        className="h-80 bg-cover bg-center flex items-center justify-center text-white px-4"
        style={{ backgroundImage: `linear-gradient(rgba(17, 24, 39, 0.7), rgba(17, 24, 39, 0.7)), url(${service.heroImage})` }}
      >
        <h1 className="text-3xl text-center sm:text-4xl md:text-5xl font-extrabold">{service.title}</h1>
      </section>

      <div className="container mx-auto px-6 py-12 sm:py-16">
        {/* Descripción Principal */}
        <section className="max-w-4xl mx-auto mb-12 sm:mb-16">
          <p className="text-lg text-gray-300 leading-relaxed">
            {service.mainDescription}
          </p>
        </section>

        {/* Características Clave */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-blue-400">Características Clave</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {service.features.map((feature, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-lg flex items-center">
                <span className="text-green-400 mr-3 text-xl">✔</span>
                <p className="text-gray-300">{feature}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Galería de Imágenes */}
        <section className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-blue-400">Galería de Proyectos</h2>
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
        <section className="text-center bg-gray-800 p-8 md:p-12 rounded-lg">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">¿Interesado en este servicio?</h2>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Contáctanos hoy mismo para obtener una cotización personalizada.
              <span className="block text-green-400 font-semibold mt-2">¡La consulta es gratuita!</span>
            </p>
            {/* BOTONES DE CONTACTO DIRECTO */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                    href={`https://wa.me/message/YLSBZB5M3URED1`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition-colors flex items-center justify-center gap-2"
                >
                    <img src="/whatsapp.png" alt="WhatsApp" className="w-6 h-6" />
                    Contactar por WhatsApp
                </a>
                <a 
                    href={`tel:${PHONE_NUMBER}`}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition-colors flex items-center justify-center gap-2"
                >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
                    Llamar Ahora
                </a>
            </div>
        </section>
      </div>
    </motion.div>
  );
}
