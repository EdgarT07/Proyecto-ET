// src/components/Servicios.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { services } from '../data/servicesData';

export default function Servicios({ setActiveSection }) {
  return (
    <motion.section
      id="servicios"
      className="py-20 bg-gray-800/50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>Nuestros Servicios - Tech Solution</title>
        <meta name="description" content="Explora nuestros servicios: reparación de laptops y PC, mantenimiento, eliminación de virus, recuperación de datos, soporte remoto y diseño web." />
      </Helmet>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Nuestros Servicios</h2>
          <p className="text-gray-400 mt-2">Soluciones integrales para tus necesidades tecnológicas.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-gray-800 p-8 rounded-lg flex flex-col"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
              <p className="text-gray-400 flex-grow">{service.shortDescription}</p>
              <button 
                onClick={() => setActiveSection(`servicio-${service.id}`)}
                className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-colors w-full"
              >
                Ver Detalles
              </button>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
