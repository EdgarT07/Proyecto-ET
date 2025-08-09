// src/components/BlogPost.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function BlogPost({ post, setActiveSection }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      {/* Banner del Artículo */}
      <section 
        className="h-96 bg-cover bg-center flex items-center justify-center text-white p-6 sm:p-8 text-center"
        style={{ backgroundImage: `linear-gradient(rgba(17, 24, 39, 0.8), rgba(17, 24, 39, 0.8)), url(${post.heroImage})` }}
      >
        <div className="container mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold max-w-4xl mx-auto">{post.title}</h1>
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