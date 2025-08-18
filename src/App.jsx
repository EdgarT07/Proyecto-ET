import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';

// Importación de componentes
import Header from './components/header';
import Inicio from './components/inicio';
import Servicios from './components/servicios';
import ServicioDetalle from './components/ServicioDetalle';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import FAQ from './components/FAQ';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import DisenoWeb from './components/DisenoWeb'; // <-- NUEVO COMPONENTE

// Importación de datos (CORREGIDO)
import { services } from './data/servicesData';
import { blogPosts } from './data/blogData';

function App() {
  const [activeSection, setActiveSection] = useState('inicio');
  const [selectedService, setSelectedService] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);

  const handleSelectService = (service) => {
    setSelectedService(service);
    setActiveSection('servicio-detalle');
  };

  const handleSelectPost = (post) => {
    setSelectedPost(post);
    setActiveSection('blog-post');
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'inicio':
        return <Inicio setActiveSection={setActiveSection} />;
      case 'servicios':
        return <Servicios services={services} onSelectService={handleSelectService} />;
      case 'servicio-detalle':
        return <ServicioDetalle service={selectedService} setActiveSection={setActiveSection} />;
      case 'diseno-web': // <-- NUEVO CASO
        return <DisenoWeb setActiveSection={setActiveSection} />;
      case 'blog':
        return <Blog setActiveSection={setActiveSection} onSelectPost={handleSelectPost} />;
      case 'blog-post':
        return <BlogPost post={selectedPost} setActiveSection={setActiveSection} />;
      case 'faq':
        return <FAQ />;
      case 'contacto':
        return <Contacto />;
      default:
        return <Inicio setActiveSection={setActiveSection} />;
    }
  };

  return (
    <HelmetProvider>
      <div className="bg-gray-900 text-gray-100 font-sans">
        <Header activeSection={activeSection} setActiveSection={setActiveSection} />
        <main>
          <AnimatePresence mode="wait">
            <div key={activeSection}>
              {renderSection()}
            </div>
          </AnimatePresence>
        </main>
        <Footer setActiveSection={setActiveSection} />
      </div>
    </HelmetProvider>
  );
}

export default App;
