// src/components/Inicio.jsx

import React from 'react';
import { motion } from 'framer-motion';

const MetodologiaIcono = ({ icono, titulo, texto }) => (
    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 text-center transform transition-transform duration-300 hover:-translate-y-2">
        <div className="text-blue-400 text-5xl mb-4">{icono}</div>
        <h4 className="text-xl font-bold mb-2">{titulo}</h4>
        <p className="text-gray-400">{texto}</p>
    </div>
);

export default function Inicio({ setActiveSection }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      {/* SECCIÓN HERO (BIENVENIDA) CON IMAGEN DE FONDO */}
      <section 
        className="h-screen flex flex-col justify-center items-center text-center px-6 bg-cover bg-center"
        style={{
          // Coloca tu imagen en la carpeta 'public' y cambia el nombre del archivo aquí
          backgroundImage: `linear-gradient(rgba(17, 24, 39, 0.8), rgba(17, 24, 39, 0.8)), url('/servicio-tecnico.jpg')`
        }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-down text-white">
          Soluciones Tecnológicas a tu Alcance
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in-up">
          Reparación, mantenimiento y diseño web. Confianza, rapidez y los mejores precios para potenciar tu mundo digital.
        </p>
        <button 
           onClick={() => setActiveSection('contacto')}
           className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-transform duration-300 transform hover:scale-105">
          Contáctanos Ahora
        </button>
        <div className="absolute bottom-10 animate-bounce">
            <svg className="w-8 h-8 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
        </div>
      </section>

      {/* SECCIÓN QUIÉNES SOMOS */}
      <section id="quienes-somos" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Quiénes Somos</h2>
            <p className="text-gray-300 mb-4">
              Somos un equipo de profesionales apasionados por la tecnología, dedicados a ofrecer soluciones eficientes y confiables. Con años de experiencia en el sector, entendemos las necesidades de nuestros clientes y nos esforzamos por superar sus expectativas en cada proyecto.
            </p>
            <p className="text-gray-400">
              Desde la reparación más compleja hasta el diseño de una página web impactante, nuestro compromiso es con la calidad y tu satisfacción.
            </p>
          </div>
          <div className="bg-gray-700/50 rounded-lg flex items-center justify-center h-80 border-2 border-dashed border-gray-500">
            <p className="text-gray-400">Marco para imagen (ej. foto del equipo)</p>
          </div>
        </div>
      </section>

      {/* SECCIÓN METODOLOGÍA DE TRABAJO */}
      <section id="metodologia" className="py-20">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Nuestra Metodología de Trabajo</h2>
            <div className="grid md:grid-cols-3 gap-8">
                <MetodologiaIcono 
                    icono="📞" 
                    titulo="1. Contacto y Diagnóstico" 
                    texto="Nos contactas, escuchamos tu necesidad y realizamos un diagnóstico preciso para ofrecerte la mejor solución." 
                />
                <MetodologiaIcono 
                    icono="🛠️" 
                    titulo="2. Ejecución y Desarrollo" 
                    texto="Aplicamos nuestra experiencia y herramientas de última generación para reparar tu equipo o construir tu sitio web." 
                />
                <MetodologiaIcono 
                    icono="✅" 
                    titulo="3. Entrega y Soporte" 
                    texto="Te entregamos el trabajo finalizado, garantizando su calidad y ofreciéndote soporte post-servicio." 
                />
            </div>
        </div>
      </section>

      {/* SECCIÓN MISIÓN Y OBJETIVO */}
      <section id="mision-objetivo" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12">
            <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
                <h3 className="text-2xl font-bold text-blue-400 mb-3">Misión</h3>
                <p className="text-gray-300">Facilitar el acceso a soluciones tecnológicas de alta calidad, brindando un servicio técnico honesto y eficiente que resuelva los problemas de nuestros clientes y potencie sus proyectos a través del diseño web.</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
                <h3 className="text-2xl font-bold text-blue-400 mb-3">Objetivo</h3>
                <p className="text-gray-300">Convertirnos en el aliado tecnológico de confianza para personas y pequeñas empresas en nuestra comunidad, siendo reconocidos por nuestra excelencia, rapidez y atención al cliente personalizada.</p>
            </div>
        </div>
      </section>
      
      {/* SECCIÓN PLANES Y TARIFAS */}
      <section id="planes" className="py-20">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Planes y Tarifas</h2>
            <div className="grid lg:grid-cols-3 gap-8">
                {/* Plan Básico */}
                <div className="border border-gray-700 rounded-lg p-8">
                    <h4 className="text-xl font-semibold mb-2">Soporte Esencial</h4>
                    <p className="text-4xl font-bold mb-4">$25<span className="text-lg font-normal text-gray-400">/hr</span></p>
                    <ul className="space-y-3 text-gray-300 mb-6">
                        <li>Diagnóstico de Hardware</li>
                        <li>Soporte Remoto (1 sesión)</li>
                        <li>Optimización Básica</li>
                    </ul>
                    <button onClick={() => setActiveSection('contacto')} className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full transition-colors">Contratar</button>
                </div>
                {/* Plan Recomendado */}
                <div className="border-2 border-blue-500 rounded-lg p-8 relative shadow-lg shadow-blue-500/20">
                    <span className="absolute top-0 -translate-y-1/2 bg-blue-500 px-3 py-1 text-sm font-semibold rounded-full">Recomendado</span>
                    <h4 className="text-xl font-semibold mb-2">Paquete Pro</h4>
                    <p className="text-4xl font-bold mb-4">$60</p>
                    <ul className="space-y-3 text-gray-300 mb-6">
                        <li>Mantenimiento Completo</li>
                        <li>Eliminación de Virus</li>
                        <li>Soporte Prioritario</li>
                    </ul>
                    <button onClick={() => setActiveSection('contacto')} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-colors">Contratar</button>
                </div>
                {/* Plan Premium */}
                <div className="border border-gray-700 rounded-lg p-8">
                    <h4 className="text-xl font-semibold mb-2">Diseño Web Básico</h4>
                    <p className="text-4xl font-bold mb-4">$150</p>
                    <ul className="space-y-3 text-gray-300 mb-6">
                        <li>Landing Page Profesional</li>
                        <li>Diseño Responsivo</li>
                        <li>Formulario de Contacto</li>
                    </ul>
                    <button onClick={() => setActiveSection('contacto')} className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full transition-colors">Contratar</button>
                </div>
            </div>
        </div>
      </section>
    </motion.div>
  );
}
