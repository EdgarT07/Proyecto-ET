// src/App.jsx

import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion'; // Importamos AnimatePresence
import Header from './components/Header';
import Inicio from './components/Inicio';
import Servicios from './components/Servicios';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import ServicioDetalle from './components/ServicioDetalle';

import { db } from './firebaseConfig';
import { services } from './data/servicesData';

export default function App() {
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeSection]);

  const renderContent = () => {
    // Le pasamos una 'key' única a cada componente para que AnimatePresence sepa que ha cambiado
    if (activeSection.startsWith('servicio-')) {
      const serviceId = activeSection.replace('servicio-', '');
      const service = services.find(s => s.id === serviceId);
      return service ? <ServicioDetalle key={activeSection} service={service} setActiveSection={setActiveSection} /> : <Inicio key="inicio" setActiveSection={setActiveSection} />;
    }

    switch (activeSection) {
      case 'inicio':
        return <Inicio key="inicio" setActiveSection={setActiveSection} />;
      case 'servicios':
        return <Servicios key="servicios" setActiveSection={setActiveSection} />;
      case 'contacto':
        return <Contacto key="contacto" db={db} />;
      default:
        return <Inicio key="inicio" setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white font-sans">
      <Header setActiveSection={setActiveSection} />
      <main>
        {/* AnimatePresence gestiona la animación de los componentes que entran y salen */}
        <AnimatePresence mode="wait">
          {renderContent()}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}