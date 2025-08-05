// src/components/Servicios.jsx

import React from 'react';

export default function Servicios() {
    const services = [
        { icon: '💻', title: 'Reparación de Laptops y PC', description: 'Diagnóstico y solución de fallas de hardware y software.' },
        { icon: '⚙️', title: 'Mantenimiento Preventivo', description: 'Optimización del sistema y actualización de componentes.' },
        { icon: '🛡️', title: 'Eliminación de Virus', description: 'Limpieza profunda de malware, spyware y virus.' },
        { icon: '💾', title: 'Recuperación de Datos', description: 'Recuperamos archivos de discos duros dañados o borrados.' },
        { icon: '🌐', title: 'Soporte Remoto', description: 'Solucionamos problemas de software sin que te muevas de casa.' },
        { icon: '📱', title: 'Diseño Web', description: 'Creamos sitios web personalizados y optimizados para tu negocio.' }
    ];

  return (
    <section id="servicios" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Nuestros Servicios</h2>
          <p className="text-gray-400 mt-2">Ofrecemos una solución integral para tus necesidades tecnológicas.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
