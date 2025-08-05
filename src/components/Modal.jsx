// src/components/Modal.jsx

import React from 'react';

export default function Modal({ service, onClose }) {
  // Evita que el clic dentro del modal lo cierre
  const handleModalContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    // Fondo oscuro semi-transparente
    <div 
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4"
      onClick={onClose} // Cierra el modal al hacer clic en el fondo
    >
      {/* Contenedor del modal */}
      <div 
        className="bg-gray-800 rounded-lg shadow-2xl w-full max-w-2xl p-8 border border-blue-500/50 relative transform transition-all duration-300 scale-95 animate-scale-in"
        onClick={handleModalContentClick}
      >
        {/* Botón para cerrar */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
        >
          &times;
        </button>

        {/* Contenido del modal */}
        <div className="flex items-start space-x-6">
            <div className="text-5xl">{service.icon}</div>
            <div>
                <h2 className="text-3xl font-bold text-white mb-2">{service.title}</h2>
                <p className="text-blue-400 text-xl font-semibold mb-4">{service.price}</p>
            </div>
        </div>
        
        <div className="mt-6 border-t border-gray-700 pt-6">
            <h3 className="text-xl font-semibold text-white mb-3">¿Qué incluye este servicio?</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
                {service.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                ))}
            </ul>
        </div>
      </div>
      {/* Estilos para la animación del modal */}
      <style jsx>{`
        @keyframes scale-in {
            from {
                transform: scale(0.9);
                opacity: 0;
            }
            to {
                transform: scale(1);
                opacity: 1;
            }
        }
        .animate-scale-in {
            animation: scale-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

