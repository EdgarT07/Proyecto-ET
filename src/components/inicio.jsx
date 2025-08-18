import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import ScrollAnimatedSection from './ScrollAnimatedSection';
import './BrandCarousel.css';

// Componentes de la versión original
const MetodologiaIcono = ({ icono, titulo, texto }) => (
    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 text-center transform transition-transform duration-300 hover:-translate-y-2 h-full">
        <div className="text-blue-400 text-5xl mb-4">{icono}</div>
        <h4 className="text-xl font-bold mb-2 text-white">{titulo}</h4>
        <p className="text-gray-400">{texto}</p>
    </div>
);

const VentajaIcono = ({ icono, titulo, texto }) => (
    <div className="flex items-start">
        <div className="text-blue-400 text-3xl mr-4 mt-1">{icono}</div>
        <div>
            <h4 className="text-xl font-bold mb-1 text-white">{titulo}</h4>
            <p className="text-gray-400">{texto}</p>
        </div>
    </div>
);

// Iconos para la nueva sección de Diseño Web
const WebIcon = () => <svg className="w-12 h-12 mb-4 text-blue-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 18a9 9 0 009-9m-9 9a9 9 0 00-9-9"></path></svg>;
const StoreIcon = () => <svg className="w-12 h-12 mb-4 text-blue-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>;
const RocketIcon = () => <svg className="w-12 h-12 mb-4 text-blue-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>;

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
  const scrollerRef = useRef(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (scroller && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      scroller.setAttribute("data-animated", true);
    }
  }, []);

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
      
      {/* SECCIÓN HERO ORIGINAL RESTAURADA */}
      <section 
        className="h-screen flex flex-col justify-center items-center text-center px-6 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(17, 24, 39, 0.8), rgba(17, 24, 39, 0.8)), url('/servicio-tecnico.jpg')`
        }}
      >
        <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4 text-white"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
        >
          Soluciones Tecnológicas a tu Alcance
        </motion.h1>
        <motion.p 
            className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
        >
          Reparación, mantenimiento y diseño web. Confianza, rapidez y los mejores precios para potenciar tu mundo digital.
        </motion.p>
        <motion.button 
            onClick={() => setActiveSection('contacto')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-transform duration-300 transform hover:scale-105"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
        >
          Contáctanos Ahora
        </motion.button>
        <div className="absolute bottom-10 animate-bounce">
            <svg className="w-8 h-8 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
        </div>
      </section>

      {/* SECCIÓN QUIÉNES SOMOS ORIGINAL RESTAURADA */}
      <ScrollAnimatedSection>
        <section id="quienes-somos" className="py-16 sm:py-20 bg-gray-900">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Quienes Somos</h2>
              <p className="text-gray-300 mb-4">
                Somos un equipo apasionados por la tecnología aspirantes a ser tu consultor tecnologico de confianza. Dedicados a ofrecer soluciones eficientes y confiables. Queremos ganarnos tu confianza, brindándote un servicio de calidad y atención personalizada ofreciéndote soluciones tecnológicas de integridad.
              </p>
              <p className="text-gray-300">
                Entendemos las necesidades de nuestros clientes y nos esforzamos por superar sus expectativas en cada proyecto. Creemos en un servicio honesto, transparente y personalizado, porque más que clientes, buscamos construir relaciones a largo plazo.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden h-full">
              <img src="/Consultoria.jpeg" alt="Consultoría tecnológica" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>
      </ScrollAnimatedSection>

      {/* SECCIÓN METODOLOGÍA ORIGINAL RESTAURADA */}
      <ScrollAnimatedSection>
        <section id="metodologia" className="py-16 sm:py-20 bg-gray-800/50">
          <div className="container mx-auto px-6 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-white">Nuestra Metodología de Trabajo</h2>
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

      {/* SECCIÓN DE DISEÑO WEB QUE TE GUSTÓ */}
      <section className="py-16 sm:py-24 bg-gray-900">
        <div className="container mx-auto px-6 text-center">
          <ScrollAnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Lleva tu Negocio al Siguiente Nivel con una Web Profesional</h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-300">
              Una página web no es un gasto, es la mejor inversión para atraer clientes, fortalecer tu marca y vender 24/7.
            </p>
          </ScrollAnimatedSection>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <ScrollAnimatedSection delay={0.1}>
              <div className="bg-gray-800 p-8 rounded-xl h-full text-center">
                <RocketIcon />
                <h3 className="text-xl font-bold text-white mb-2">Páginas de Aterrizaje</h3>
                <p className="text-gray-400">Impacta desde el primer clic. Ideal para startups y campañas.</p>
              </div>
            </ScrollAnimatedSection>
            <ScrollAnimatedSection delay={0.2}>
              <div className="bg-gray-800 p-8 rounded-xl h-full text-center">
                <WebIcon />
                <h3 className="text-xl font-bold text-white mb-2">Sitios Corporativos</h3>
                <p className="text-gray-400">La solución completa para presentar tus servicios y consolidar tu marca.</p>
              </div>
            </ScrollAnimatedSection>
            <ScrollAnimatedSection delay={0.3}>
              <div className="bg-gray-800 p-8 rounded-xl h-full text-center">
                <StoreIcon />
                <h3 className="text-xl font-bold text-white mb-2">Tiendas Online</h3>
                <p className="text-gray-400">Vende tus productos en línea con un e-commerce potente y fácil de gestionar.</p>
              </div>
            </ScrollAnimatedSection>
          </div>
          <ScrollAnimatedSection>
            <button onClick={() => setActiveSection('diseno-web')} className="mt-12 px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-lg font-semibold transition-transform transform hover:scale-105 text-white">
              Ver Paquetes de Diseño Web
            </button>
          </ScrollAnimatedSection>
        </div>
      </section>

      {/* SECCIÓN MARCAS ORIGINAL RESTAURADA */}
      <ScrollAnimatedSection>
        <section id="marcas" className="py-16 sm:py-20 bg-gray-800/50">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-white">Marcas con las que Trabajamos</h2>
            <div ref={scrollerRef} className="scroller" data-speed="slow">
              <ul className="scroller__inner">
                {marcasDuplicadas.map((marca, index) => (
                  <li key={index} className="bg-gray-700/50 p-4 rounded-lg h-24 flex items-center justify-center w-48 flex-shrink-0">
                    <img src={marca.logo} alt={marca.nombre} className="max-h-16 w-auto" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </ScrollAnimatedSection>
      
      {/* SECCIÓN POR QUÉ ELEGIRNOS ORIGINAL RESTAURADA */}
      <ScrollAnimatedSection>
        <section id="por-que-elegirnos" className="py-16 sm:py-20 bg-gray-900">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-white">¿Por Qué Elegirnos?</h2>
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

      {/* SECCIÓN CTA FINAL ORIGINAL RESTAURADA */}
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
