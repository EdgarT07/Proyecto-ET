// src/App.jsx

import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/header';
import Inicio from './components/inicio';
import Servicios from './components/servicios';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import ServicioDetalle from './components/ServicioDetalle';
import Blog from './components/Blog';
import FAQ from './components/FAQ';
import BlogPost from './components/BlogPost';

import { db } from './firebaseConfig';
import { services } from './data/servicesData';
import { blogPosts } from './data/blogData';

export default function App() {
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeSection]);

  const renderContent = () => {
    let view;

    // Lógica para vistas de detalle
    if (activeSection.startsWith('servicio-')) {
      const serviceId = activeSection.substring('servicio-'.length);
      const service = services.find(s => s.id === serviceId);
      view = service 
        ? <ServicioDetalle key={activeSection} service={service} setActiveSection={setActiveSection} /> 
        : <Servicios key="servicios" setActiveSection={setActiveSection} />; // Fallback
    } else if (activeSection.startsWith('blog-')) {
      const postId = activeSection.substring('blog-'.length);
      const post = blogPosts.find(p => p.id === postId);
      view = post 
        ? <BlogPost key={activeSection} post={post} setActiveSection={setActiveSection} /> 
        : <Blog key="blog" setActiveSection={setActiveSection} />; // Fallback
    } else {
      // Lógica para secciones principales
      switch (activeSection) {
        case 'inicio':
          view = <Inicio key="inicio" setActiveSection={setActiveSection} />;
          break;
        case 'servicios':
          view = <Servicios key="servicios" setActiveSection={setActiveSection} />;
          break;
        case 'contacto':
          view = <Contacto key="contacto" db={db} />;
          break;
        case 'blog':
          view = <Blog key="blog" setActiveSection={setActiveSection} />;
          break;
        case 'faq':
          view = <FAQ key="faq" />;
          break;
        default:
          view = <Inicio key="inicio-default" setActiveSection={setActiveSection} />;
      }
    }
    return view;
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white font-sans">
      <Header setActiveSection={setActiveSection} />
      <main>
        <AnimatePresence mode="wait">
          {renderContent()}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
