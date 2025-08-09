// src/components/BlogPost.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import ScrollAnimatedSection from './ScrollAnimatedSection';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function BlogPost({ post, setActiveSection }) {
  // REEMPLAZA ESTOS VALORES CON LOS TUYOS
  const WHATSAPP_NUMBER = '584122106109';
  const PHONE_NUMBER = '+584122106109';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Banner del Artículo */}
      <section 
        className="h-96 bg-cover bg-center flex items-end text-white p-6 sm:p-8"
        style={{ backgroundImage: `linear-gradient(to top, rgba(17, 24, 39, 0.9), transparent), url(${post.heroImage})` }}
      >
        <div className="container mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold max-w-4xl">{post.title}</h1>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Contenido del Artículo */}
          <article className="prose prose-invert prose-lg max-w-none">
            {post.content.map((item, index) => {
              if (item.type === 'heading') {
                return <h2 key={index} className="text-2xl sm:text-3xl font-bold mt-12 mb-4 text-blue-400">{item.text}</h2>;
              }
              if (item.type === 'image') {
                return <img key={index} src={item.src} alt={item.alt} className="rounded-lg my-8 w-full" />;
              }
              return <p key={index} className="text-gray-300">{item.text}</p>;
            })}
          </article>

          {/* Carrusel de Imágenes */}
          <ScrollAnimatedSection>
            <section className="my-16">
              <h2 className="text-3xl font-bold text-center mb-8 text-blue-400">Galería Relacionada</h2>
              <div className="rounded-lg overflow-hidden">
                <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={30}
                  slidesPerView={1}
                  navigation
                  pagination={{ clickable: true }}
                  className="mySwiper"
                >
                  {post.gallery.map((image, index) => (
                    <SwiperSlide key={index}>
                      <img src={image} alt={`Galería ${index + 1}`} className="w-full h-96 object-cover" />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </section>
          </ScrollAnimatedSection>

          {/* Call to Action */}
          <ScrollAnimatedSection>
            <section className="text-center bg-gray-800 p-8 md:p-12 rounded-lg my-16">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">¿Necesitas Ayuda Profesional?</h2>
                <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                  Si este artículo te fue útil y tienes un problema que requiere de expertos, no dudes en contactarnos.
                  <span className="block text-green-400 font-semibold mt-2">¡La consulta es gratuita!</span>
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a 
                        href={`https://wa.me/${WHATSAPP_NUMBER}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition-colors flex items-center justify-center gap-2"
                    >
                        <img src="/whatsapp.png" alt="WhatsApp" className="w-6 h-6" />
                        Contactar por WhatsApp
                    </a>
                    <a 
                        href={`tel:${PHONE_NUMBER}`}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition-colors flex items-center justify-center gap-2"
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
                        Llamar Ahora
                    </a>
                </div>
            </section>
          </ScrollAnimatedSection>

          {/* Navegación */}
          <div className="text-center border-t border-gray-700 pt-8">
            <button 
                onClick={() => setActiveSection('blog')}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors">
                ← Volver al Blog
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
