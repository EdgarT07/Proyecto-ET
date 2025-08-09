// src/components/Header.jsx

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header({ setActiveSection }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (section) => {
    setActiveSection(section);
    setIsOpen(false);
  };

  return (
    <>
      <header className="bg-gray-900/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 border-b border-blue-500/30">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center cursor-pointer" onClick={() => handleLinkClick('inicio')}>
            <img src="/logo.png" alt="Logo de Tech Solution" className="h-12 mr-3" />
            <span className="text-2xl font-bold text-white hidden sm:inline">
              TECH <span className="text-blue-400">SOLUTION</span>
            </span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => handleLinkClick('inicio')} className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Inicio</button>
            <button onClick={() => handleLinkClick('servicios')} className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Servicios</button>
            <button onClick={() => handleLinkClick('blog')} className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Blog</button>
            <button onClick={() => handleLinkClick('faq')} className="text-gray-300 hover:text-blue-400 transition-colors duration-300">FAQ</button>
            <button onClick={() => handleLinkClick('contacto')} className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Contacto</button>
          </nav>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none z-50 relative">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />}
              </svg>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 bg-gray-900/95 z-40 flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center space-y-8">
              <button onClick={() => handleLinkClick('inicio')} className="text-gray-300 hover:text-blue-400 text-2xl">Inicio</button>
              <button onClick={() => handleLinkClick('servicios')} className="text-gray-300 hover:text-blue-400 text-2xl">Servicios</button>
              <button onClick={() => handleLinkClick('blog')} className="text-gray-300 hover:text-blue-400 text-2xl">Blog</button>
              <button onClick={() => handleLinkClick('faq')} className="text-gray-300 hover:text-blue-400 text-2xl">FAQ</button>
              <button onClick={() => handleLinkClick('contacto')} className="text-gray-300 hover:text-blue-400 text-2xl">Contacto</button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}