import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import ScrollAnimatedSection from './ScrollAnimatedSection';

// Iconos SVG para no tener que añadir nuevas imágenes
const CheckIcon = () => (
  <svg className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
);

const PackageCard = ({ title, price, maintenance, description, features, recommended, ctaText, ctaAction, verDetallesAction }) => {
  const cardClass = recommended 
    ? "bg-gray-800 border-2 border-blue-500 rounded-xl shadow-2xl shadow-blue-500/20 transform lg:scale-105" 
    : "bg-gray-800/50 border border-gray-700 rounded-xl shadow-lg";

  return (
    <div className={`${cardClass} p-8 flex flex-col h-full relative`}>
      {recommended && (
        <div className="absolute top-0 right-0 -mt-4 mr-4">
          <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">Recomendado</span>
        </div>
      )}
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 mb-6 flex-grow">{description}</p>
      <div className="mb-8">
        <span className="text-5xl font-extrabold text-white">{price}</span>
        <span className="text-gray-400 text-lg"> USD</span>
      </div>
      <ul className="space-y-4 mb-8 text-gray-300">
        {features.slice(0, 3).map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckIcon />
            <span>{feature}</span>
          </li>
        ))}
        {features.length > 3 && (
          <li className="text-blue-400 text-sm">+{features.length - 3} características más...</li>
        )}
      </ul>
      <div className="mt-auto space-y-3">
        <button 
          onClick={verDetallesAction}
          className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105"
        >
          Ver Detalles
        </button>
        <button 
          onClick={ctaAction}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105"
        >
          {ctaText}
        </button>
      </div>
      <p className="text-center text-gray-500 text-sm mt-4">Mantenimiento Anual: ${maintenance} USD</p>
    </div>
  );
};


export default function DisenoWeb({ setActiveSection, onSelectPaquete }) {
  const packages = [
    {
      id: 'emprendedor',
      title: "Paquete Emprendedor",
      price: "$150",
      maintenance: "100",
      description: "Ideal para profesionales o negocios que inician y necesitan una presencia online rápida y efectiva.",
      features: [
        "Landing Page (Sitio de una sola página).",
        "Diseño profesional y adaptable a móviles.",
        "Dominio .com (1er año incluido).",
        "Hosting y Certificado SSL (1er año incluido).",
        "Formulario de contacto y botón de WhatsApp."
      ],
      recommended: false,
      ctaText: "¡Lo Quiero!",
    },
    {
      id: 'profesional',
      title: "Paquete Profesional",
      price: "$250",
      maintenance: "180",
      description: "La solución completa para pymes que buscan consolidar su imagen y atraer clientes con contenido.",
      features: [
        "Todo lo del Paquete Emprendedor.",
        "Hasta 5 páginas (Inicio, Servicios, etc.).",
        "Sección de Blog o Portafolio para SEO.",
        "Diseño 100% personalizado.",
        "Soporte prioritario."
      ],
      recommended: true,
      ctaText: "¡Excelente Elección!",
    },
    {
      id: 'tienda-online',
      title: "Paquete Tienda Online",
      price: "Desde $700",
      maintenance: "420",
      description: "La herramienta definitiva para negocios que desean vender productos por internet 24/7.",
      features: [
        "Todo lo del Paquete Profesional.",
        "Catálogo de Productos autogestionable.",
        "Carrito de compras y proceso de pago.",
        "Integración con PayPal, Zelle, y más.",
        "Capacitación de 1 hora para el cliente."
      ],
      recommended: false,
      ctaText: "¡A Vender!",
    }
  ];

  const handleCTA = () => {
    setActiveSection('contacto');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>Paquetes de Diseño Web - Tech Solution</title>
        <meta name="description" content="Ofrecemos paquetes de diseño web a la medida para emprendedores, profesionales y tiendas online. Lleva tu negocio al siguiente nivel." />
      </Helmet>

      {/* Hero Section */}
      <section 
        className="bg-gray-900 bg-cover bg-center py-20 sm:py-32 text-white text-center relative overflow-hidden"
      >
        {/* Background Image - Clear and Sharp */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://argrupo.es/wp-content/uploads/2021/06/la-importancia-del-diseno-web-para-la-empresa.jpg')`
          }}
        />
        <div className="absolute inset-0 bg-gray-900/80" />
        
        {/* Alternative: You can replace the URL above with your own image */}
        {/* Example: backgroundImage: `url('/your-image.jpg')` */}
        
        <div className="relative z-10 container mx-auto px-6">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            Creamos la Página Web que tu Negocio Merece
          </motion.h1>
          <motion.p 
            className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-gray-300"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Desde una landing page impactante hasta una tienda online completa.
          </motion.p>
        </div>
      </section>

      {/* Pricing Section */}
      <div className="py-16 sm:py-24 bg-gray-900">
        <div className="container mx-auto px-6">
          <ScrollAnimatedSection>
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-8 items-stretch">
              {packages.map((pkg, index) => (
                <PackageCard 
                  key={index} 
                  {...pkg}
                  ctaAction={handleCTA}
                  verDetallesAction={() => onSelectPaquete(pkg.id)}
                />
              ))}
            </div>
          </ScrollAnimatedSection>
        </div>
      </div>
    </motion.div>
  );
}
