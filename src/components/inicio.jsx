// src/components/inicio.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import ScrollAnimatedSection from './ScrollAnimatedSection';

const MetodologiaIcono = ({ icono, titulo, texto }) => (
    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 text-center transform transition-transform duration-300 hover:-translate-y-2">
        <div className="text-blue-400 text-5xl mb-4">{icono}</div>
        <h4 className="text-xl font-bold mb-2">{titulo}</h4>
        <p className="text-gray-400">{texto}</p>
    </div>
);

const VentajaIcono = ({ icono, titulo, texto }) => (
    <div className="flex items-start">
        <div className="text-blue-400 text-3xl mr-4 mt-1">{icono}</div>
        <div>
            <h4 className="text-xl font-bold mb-1">{titulo}</h4>
            <p className="text-gray-400">{texto}</p>
        </div>
    </div>
);

const marcas = [
  { nombre: 'Dell', logo: '/Dell.png' },
  { nombre: 'HP', logo: '/HP.png' },
  { nombre: 'Lenovo', logo: '/Lenovo.png' },
  { nombre: 'Samsung', logo: '/Samsung.png' },
  { nombre: 'Asus', logo: '/Asus.png' },
  { nombre: 'Gateway', logo: '/Gateway.png' },
  { nombre: 'Huawei', logo: '/Huawei.png' },
  { nombre: 'ChromeBook', logo: '/Chromebook.png' }
];
const marcasDuplicadas = [...marcas, ...marcas];

export default function Inicio({ setActiveSection }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>Tech Solution - Soluciones Tecnológicas a tu Alcance</title>
        <meta name="description" content="Servicios profesionales de reparación de computadoras, mantenimiento preventivo y diseño web en Caracas. ¡Contáctanos para un diagnóstico gratuito!" />
      </Helmet>
      <style>
        {`
          .scroller {
            max-width: 90%;
            margin: auto;
          }

          .scroller__inner {
            padding-block: 1rem;
            display: flex;
            flex-wrap: wrap;
            gap: 2rem;
          }

          .scroller[data-animated="true"] {
            overflow: hidden;
            -webkit-mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
            mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
          }

          .scroller[data-animated="true"] .scroller__inner {
            width: max-content;
            flex-wrap: nowrap;
            animation: scroll 40s linear infinite;
          }

          @keyframes scroll {
            to {
              transform: translate(calc(-50% - 1rem));
            }
          }
        `}
      </style>
      <section 
        className="h-screen flex flex-col justify-center items-center text-center px-6 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(17, 24, 39, 0.8), rgba(17, 24, 39, 0.8)), url('/servicio-tecnico.jpg')`
        }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-down text-white">
          Soluciones Tecnológicas a tu Alcance
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in-up">
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

      <ScrollAnimatedSection>
        <section id="quienes-somos" className="py-16 sm:py-20 bg-gray-800/50">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-stretch">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Quienes Somos</h2>
              <p className="text-gray-300 mb-4">
                Somos un equipo apasionados por la tecnología aspirantes a ser tu consultor tecnologico de confianza. Dedicados a ofrecer soluciones eficientes y confiables. Queremos ganarnos tu confianza, brindándote un servicio de calidad y atención personalizada ofreciéndote soluciones tecnológicas de integridad.
              </p>
              <p className="text-gray-300 mb-4">
                Entendemos las necesidades de nuestros clientes y nos esforzamos por superar sus expectativas en cada proyecto. Creemos en un servicio honesto, transparente y personalizado, porque más que clientes, buscamos construir relaciones a largo plazo.
              </p>
              <p className="text-gray-400">
                Desde la reparación más compleja hasta el diseño de una página web impactante, nuestro compromiso es con la calidad y tu satisfacción.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img src="/Consultoria.jpeg" alt="Consultoría tecnológica" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>
      </ScrollAnimatedSection>

      <ScrollAnimatedSection>
        <section id="metodologia" className="py-16 sm:py-20">
          <div className="container mx-auto px-6 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-12">Nuestra Metodología de Trabajo</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
      </ScrollAnimatedSection>

      <ScrollAnimatedSection>
        <section id="marcas" className="py-16 sm:py-20 bg-gray-800/50">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12">Marcas con las que Trabajamos</h2>
            <div className="scroller" data-animated="true">
              <div className="scroller__inner">
                {marcasDuplicadas.map((marca, index) => (
                  <div key={index} className="bg-gray-700/50 p-4 rounded-lg h-24 flex items-center justify-center w-48 flex-shrink-0">
                    <img src={marca.logo} alt={marca.nombre} className="max-h-16 w-auto" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimatedSection>
      
      <ScrollAnimatedSection>
        <section id="por-que-elegirnos" className="py-16 sm:py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12">¿Por Qué Elegirnos?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto text-left">
              <VentajaIcono
                icono="⏱️"
                titulo="Servicio Rápido y Eficiente"
                texto="Entendemos tu urgencia. Nos comprometemos a ofrecer diagnósticos y reparaciones en el menor tiempo posible."
              />
              <VentajaIcono
                icono="💡"
                titulo="Diagnóstico Gratuito"
                texto="Evaluamos tu equipo sin costo alguno. Sabrás exactamente cuál es el problema y el presupuesto antes de decidir."
              />
              <VentajaIcono
                icono="👨‍🔧"
                titulo="Técnicos Certificados"
                texto="Nuestro equipo está formado por profesionales con experiencia y pasión por la tecnología, garantizando un trabajo de calidad."
              />
              <VentajaIcono
                icono="✅"
                titulo="Garantía de Satisfacción"
                texto="Respaldamos nuestro trabajo. Todas nuestras reparaciones cuentan con garantía para tu tranquilidad."
              />
            </div>
          </div>
        </section>
      </ScrollAnimatedSection>

      <ScrollAnimatedSection>
        <section id="proximamente" className="py-16 sm:py-20 bg-gray-800/50">
            <div className="container mx-auto px-6 text-center max-w-3xl">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Más Servicios en Camino</h2>
                <p className="text-gray-300 text-lg">
                    En Tech Solution, creemos en la mejora continua. Estamos constantemente actualizándonos y explorando nuevas tecnologías para ampliar nuestra oferta y brindarte las soluciones más innovadoras del mercado. ¡Mantente atento a nuestras próximas novedades!
                </p>
            </div>
        </section>
      </ScrollAnimatedSection>

      <ScrollAnimatedSection>
        <section id="cta-final" className="py-20 bg-blue-600">
          <div className="container mx-auto px-6 text-center">
              <h2 className="text-3xl font-extrabold text-white mb-4">¿Listo para Solucionar tu Problema Tecnológico?</h2>
              <p className="text-blue-200 mb-8 max-w-2xl mx-auto">No dejes que un problema técnico detenga tu día. Contáctanos y deja que nuestros expertos se encarguen.</p>
              <button 
                 onClick={() => setActiveSection('contacto')}
                 className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full transition-transform duration-300 transform hover:scale-105 shadow-lg">
                Obtener Ayuda Ahora
              </button>
          </div>
        </section>
      </ScrollAnimatedSection>
    </motion.div>
  );
}
