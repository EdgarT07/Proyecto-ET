// src/App.jsx

import React, { useState } from 'react';
import Header from './components/Header';
import Inicio from './components/Inicio';
import Servicios from './components/servicios';
import Contacto from './components/Contacto';
import Footer from './components/Footer';

// Importamos la instancia 'db' desde nuestra configuración
import { db } from './firebaseConfig';

export default function App() {
  const [activeSection, setActiveSection] = useState('inicio');

  const renderSection = () => {
    switch (activeSection) {
      case 'inicio':
        return <Inicio setActiveSection={setActiveSection} />;
      case 'servicios':
        return <Servicios />;
      case 'contacto':
        return <Contacto db={db} />;
      default:
        return <Inicio setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white font-sans">
      <Header setActiveSection={setActiveSection} />
      <main className="pt-20">
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
}

