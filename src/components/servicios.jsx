// src/components/Servicios.jsx

import React, { useState } from 'react';
import Modal from './Modal'; // Importamos el nuevo componente

export default function Servicios() {
    // Estado para controlar el servicio seleccionado
    const [selectedService, setSelectedService] = useState(null);

    // Datos de servicios ampliados
    const services = [
        { 
            id: 1,
            icon: '💻', 
            title: 'Reparación de Laptops y PC', 
            description: 'Diagnóstico y solución completa para fallas de hardware y software.',
            price: 'Desde $25',
            details: [
                'Reemplazo de pantallas, teclados y baterías.',
                'Solución a problemas de sobrecalentamiento y lentitud.',
                'Reparación de placa base a nivel de componentes.',
                'Instalación y configuración de Windows, macOS y Linux.'
            ]
        },
        { 
            id: 2,
            icon: '⚙️', 
            title: 'Mantenimiento Preventivo', 
            description: 'Optimiza y alarga la vida útil de tus equipos con nuestro servicio completo.',
            price: 'Desde $20',
            details: [
                'Limpieza física interna de polvo y componentes.',
                'Optimización de arranque y rendimiento del sistema operativo.',
                'Actualización de drivers y software esencial.',
                'Revisión de estado del disco duro y memoria RAM.'
            ]
        },
        { 
            id: 3,
            icon: '🛡️', 
            title: 'Eliminación de Virus', 
            description: 'Protegemos tu información eliminando cualquier amenaza de seguridad.',
            price: 'Desde $30',
            details: [
                'Escaneo profundo y eliminación de malware, spyware y ransomware.',
                'Reparación de archivos del sistema dañados por virus.',
                'Instalación y configuración de antivirus.',
                'Recomendaciones para mejorar tus hábitos de seguridad.'
            ]
        },
        { 
            id: 4,
            icon: '💾', 
            title: 'Recuperación de Datos', 
            description: 'Intentamos rescatar tus archivos valiosos de dispositivos dañados.',
            price: 'Consulta requerida',
            details: [
                'Recuperación de archivos borrados accidentalmente.',
                'Extracción de datos de discos duros que no arrancan.',
                'Recuperación de información de pendrives y tarjetas SD.',
                'Diagnóstico previo sin costo.'
            ]
        },
        { 
            id: 5,
            icon: '🌐', 
            title: 'Soporte Remoto', 
            description: 'Solución de problemas de software de forma rápida y segura sin moverte.',
            price: '$15 por sesión',
            details: [
                'Configuración de programas y periféricos (impresoras, etc.).',
                'Asistencia para resolver dudas de software.',
                'Limpieza de archivos basura y optimización remota.',
                'Soporte para problemas con correo electrónico y navegadores.'
            ]
        },
        { 
            id: 6,
            icon: '🎨', 
            title: 'Diseño Web', 
            description: 'Creamos sitios web modernos y funcionales para tu negocio o proyecto personal.',
            price: 'Desde $150',
            details: [
                'Diseño de páginas web responsivas (adaptables a móviles).',
                'Creación de Landing Pages para campañas de marketing.',
                'Integración con redes sociales y formularios de contacto.',
                'Optimización básica de SEO para mejorar la visibilidad en Google.'
            ]
        }
    ];

  return (
    <>
        <section id="servicios" className="py-20 bg-gray-800/50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Nuestros Servicios</h2>
              <p className="text-gray-400 mt-2">Haz clic en un servicio para ver más detalles.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <button 
                  key={service.id} 
                  onClick={() => setSelectedService(service)}
                  className="text-left bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Renderiza el modal si hay un servicio seleccionado */}
        {selectedService && (
            <Modal service={selectedService} onClose={() => setSelectedService(null)} />
        )}
    </>
  );
}