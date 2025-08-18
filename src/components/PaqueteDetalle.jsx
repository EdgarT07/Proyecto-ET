import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import ScrollAnimatedSection from './ScrollAnimatedSection';

const CheckIcon = () => (
  <svg className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
);

export default function PaqueteDetalle({ paquete, setActiveSection }) {
  const paquetes = {
    'emprendedor': {
      title: "Paquete Emprendedor",
      price: "$150",
      maintenance: "$100/año",
      description: "Perfecto para profesionales y negocios que están comenzando su presencia online.",
      heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
      features: [
        "Landing Page de alta conversión",
        "Diseño 100% responsive (móvil, tablet, desktop)",
        "Optimización SEO básica",
        "Formulario de contacto inteligente",
        "Integración con WhatsApp Business",
        "Google Analytics y Search Console",
        "Certificado SSL gratuito",
        "Dominio .com (1er año incluido)",
        "Hosting premium (1er año incluido)",
        "Tiempo de entrega: 5-7 días hábiles"
      ],
      extras: [
        "1 mes de soporte técnico gratuito",
        "Capacitación básica de 30 minutos",
        "Manual de usuario actualizable",
        "Backup automático semanal"
      ],
      process: [
        "Consulta inicial y análisis de necesidades",
        "Diseño de mockup y aprobación",
        "Desarrollo y optimización",
        "Pruebas y ajustes finales",
        "Entrega y capacitación"
      ]
    },
    'profesional': {
      title: "Paquete Profesional",
      price: "$250",
      maintenance: "$180/año",
      description: "La solución completa para pymes que buscan consolidar su imagen digital y atraer más clientes.",
      heroImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      features: [
        "Sitio web de hasta 5 páginas",
        "Diseño personalizado y único",
        "Blog integrado para SEO",
        "Galería de imágenes optimizada",
        "Formularios avanzados con validación",
        "Mapa de ubicación interactivo",
        "Integración con redes sociales",
        "Chat en vivo básico",
        "Newsletter y email marketing",
        "Análisis de competencia",
        "Tiempo de entrega: 7-10 días hábiles"
      ],
      extras: [
        "3 meses de soporte técnico",
        "Capacitación de 1 hora",
        "Actualizaciones de seguridad mensuales",
        "Reporte de rendimiento mensual",
        "1 artículo de blog mensual (3 meses)"
      ],
      process: [
        "Análisis detallado de negocio y competencia",
        "Estrategia de contenidos y SEO",
        "Diseño de wireframes y prototipos",
        "Desarrollo con mejores prácticas",
        "Optimización y testing exhaustivo",
        "Lanzamiento y monitoreo inicial"
      ]
    },
    'tienda-online': {
      title: "Paquete Tienda Online",
      price: "Desde $700",
      maintenance: "$420/año",
      description: "La herramienta definitiva para negocios que quieren vender online 24/7 con todas las funcionalidades de e-commerce.",
      heroImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      features: [
        "Tienda online completa con catálogo ilimitado",
        "Carrito de compras y checkout optimizado",
        "Pasarela de pagos múltiples (PayPal, Zelle, transferencia)",
        "Gestión de inventario en tiempo real",
        "Envíos y cálculo automático de tarifas",
        "Cupones de descuento y promociones",
        "Área de cliente con historial de pedidos",
        "Facturación automática",
        "Integración con WhatsApp para pedidos",
        "Análisis de ventas y reportes",
        "Tiempo de entrega: 15-20 días hábiles"
      ],
      extras: [
        "6 meses de soporte técnico prioritario",
        "Capacitación completa de 2 horas",
        "Setup inicial de productos (hasta 20)",
        "Integración con Google Shopping",
        "Optimización para SEO de productos",
        "1 campaña de email marketing incluida"
      ],
      process: [
        "Análisis de productos y mercado objetivo",
        "Diseño de arquitectura de la tienda",
        "Configuración de pasarelas de pago",
        "Desarrollo del catálogo y sistema de gestión",
        "Testing de compras y seguridad",
        "Capacitación y lanzamiento",
        "Monitoreo post-lanzamiento"
      ]
    }
  };

  const paqueteData = paquetes[paquete] || paquetes['emprendedor'];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>{paqueteData.title} - Tech Solution</title>
        <meta name="description" content={paqueteData.description} />
      </Helmet>

      {/* Hero Section */}
      <section 
        className="h-80 bg-cover bg-center flex items-center justify-center text-white px-4"
        style={{ backgroundImage: `linear-gradient(rgba(17, 24, 39, 0.8), rgba(17, 24, 39, 0.8)), url(${paqueteData.heroImage})` }}
      >
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">{paqueteData.title}</h1>
          <p className="mt-4 text-lg text-gray-300">{paqueteData.description}</p>
          <button 
            onClick={() => setActiveSection('diseno-web')}
            className="mt-6 text-sm bg-white/20 hover:bg-white/30 text-white font-bold py-2 px-4 rounded-full transition-colors"
          >
            ← Volver a Paquetes
          </button>
        </div>
      </section>

      {/* Content Section */}
      <div className="container mx-auto px-6 py-12 sm:py-16">
        <ScrollAnimatedSection>
          <div className="max-w-4xl mx-auto">
            {/* Price Section */}
            <div className="bg-gray-800 rounded-lg p-8 mb-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Precio: {paqueteData.price}</h2>
              <p className="text-gray-400">Mantenimiento: {paqueteData.maintenance}</p>
            </div>

            {/* Features Section */}
            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-blue-400">¿Qué incluye?</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {paqueteData.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckIcon />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Extras Section */}
            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-blue-400">Extras incluidos</h2>
              <div className="bg-gray-800/50 rounded-lg p-6">
                <ul className="space-y-3">
                  {paqueteData.extras.map((extra, index) => (
                    <li key={index} className="flex items-start">
                      <CheckIcon />
                      <span className="text-gray-300">{extra}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Process Section */}
            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-blue-400">Proceso de desarrollo</h2>
              <div className="space-y-4">
                {paqueteData.process.map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-gray-300">{step}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center">
              <button 
                onClick={() => setActiveSection('contacto')}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-transform transform hover:scale-105"
              >
                Solicitar {paqueteData.title}
              </button>
            </section>
          </div>
        </ScrollAnimatedSection>
      </div>
    </motion.div>
  );
}
