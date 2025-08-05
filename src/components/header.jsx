// src/components/Header.jsx

import React from 'react';

export default function Header({ setActiveSection }) {
  // ... el código no cambia ...
  return (
    <header className="bg-gray-900/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 border-b border-blue-500/30">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center cursor-pointer" onClick={() => setActiveSection('inicio')}>
          <img src="/logo.png" alt="Logo de Tech Solution" className="h-12 mr-3" />
          <span className="text-2xl font-bold text-white hidden sm:inline">
            TECH <span className="text-blue-400">SOLUTION</span>
          </span>
        </div>
        <nav className="hidden md:flex space-x-8">
          <button onClick={() => setActiveSection('inicio')} className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Inicio</button>
          <button onClick={() => setActiveSection('servicios')} className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Servicios</button>
          <button onClick={() => setActiveSection('contacto')} className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Contacto</button>
        </nav>
        <div className="md:hidden">
            {/* Aquí podrías agregar un menú para móviles */}
        </div>
      </div>
    </header>
  );
}
