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
    // Primero, revisamos si se quiere ver un detalle de servicio
    if (activeSection.startsWith('servicio-')) {
      const serviceId = activeSection.replace('servicio-', '');
      const service = services.find(s => s.id === serviceId);
      // Si encontramos el servicio, lo mostramos. Si no, volvemos al inicio.
      return service ? <ServicioDetalle key={activeSection} service={service} setActiveSection={setActiveSection} /> : <Inicio key="inicio" setActiveSection={setActiveSection} />;
    }
    
    // Luego, revisamos si se quiere ver una publicación del blog
    if (activeSection.startsWith('blog-')) {
      const postId = activeSection.replace('blog-', '');
      const post = blogPosts.find(p => p.id === postId);
      // Si encontramos la publicación, la mostramos. Si no, volvemos a la lista del blog.
      return post ? <BlogPost key={activeSection} post={post} setActiveSection={setActiveSection} /> : <Blog key="blog" setActiveSection={setActiveSection} />;
    }

    // Si no es una vista de detalle, mostramos la sección principal correspondiente
    switch (activeSection) {
      case 'inicio':
        return <Inicio key="inicio" setActiveSection={setActiveSection} />;
      case 'servicios':
        return <Servicios key="servicios" setActiveSection={setActiveSection} />;
      case 'contacto':
        return <Contacto key="contacto" db={db} />;
      case 'blog':
        return <Blog key="blog" setActiveSection={setActiveSection} />;
      case 'faq':
        return <FAQ key="faq" />;
      default:
        // Si la sección no es reconocida, volvemos al inicio por seguridad.
        return <Inicio key="inicio" setActiveSection={setActiveSection} />;
    }
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
