// src/components/Blog.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '../data/blogData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Blog({ setActiveSection, onSelectPost }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-6 py-24 sm:py-32"
    >
      <Helmet>
        <title>Blog de Tecnología - Tech Solution</title>
        <meta name="description" content="Consejos, noticias y trucos del mundo de la tecnología. Aprende a optimizar tu PC, protegerte de virus y mucho más." />
      </Helmet>
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold">Nuestro Blog</h1>
        <p className="text-gray-400 mt-4">Consejos, noticias y trucos del mundo de la tecnología.</p>
      </div>
      
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        className="mySwiper py-4"
      >
        {blogPosts.map((post) => (
          <SwiperSlide key={post.id} className="pb-12">
            <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 h-full flex flex-col transition-all duration-300 ease-in-out transform hover:scale-105 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/30">
              <div className="relative h-48">
                <img src={post.heroImage} alt={post.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <h2 className="absolute bottom-0 left-0 p-4 text-xl font-bold text-white">{post.title}</h2>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-gray-400 mb-4 flex-grow">{post.excerpt}</p>
                <button 
                  onClick={() => {
                    const selectedPost = blogPosts.find(p => p.id === post.id);
                    if (selectedPost && onSelectPost) {
                      onSelectPost(selectedPost);
                      window.scrollTo(0, 0);
                    }
                  }}
                  className="text-blue-400 hover:text-blue-300 font-semibold self-start mt-auto"
                >
                  Leer más →
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      <style jsx global>{`
        .swiper {
          overflow: visible !important;
        }
        .swiper-button-next, .swiper-button-prev {
          color: #3B82F6 !important;
        }
        .swiper-pagination-bullet-active {
          background: #3B82F6 !important;
        }
      `}</style>
    </motion.div>
  );
}
