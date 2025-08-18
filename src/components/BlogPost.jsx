// src/components/BlogPost.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import ScrollAnimatedSection from './ScrollAnimatedSection';

// Este componente renderizará cada parte del contenido del post
const PostContent = ({ item }) => {
  switch (item.type) {
    case 'heading':
      return <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4 text-blue-400">{item.text}</h2>;
    case 'paragraph':
      return <p className="text-gray-300 leading-relaxed mb-4">{item.text}</p>;
    case 'image':
      return <img src={item.src} alt={item.alt} className="my-8 rounded-lg w-full h-auto object-cover" />;
    default:
      return null;
  }
};

export default function BlogPost({ post, setActiveSection }) {
  if (!post) {
    // Si por alguna razón no se encuentra el post, volvemos al blog.
    setActiveSection('blog');
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>{`${post.title} - Tech Solution Blog`}</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>
      
      {/* Hero Section del Post */}
      <section 
        className="h-80 bg-cover bg-center flex items-center justify-center text-white px-4"
        style={{ backgroundImage: `linear-gradient(rgba(17, 24, 39, 0.8), rgba(17, 24, 39, 0.8)), url(${post.heroImage})` }}
      >
        <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">{post.title}</h1>
            <button 
                onClick={() => setActiveSection('blog')}
                className="mt-6 text-sm bg-white/20 hover:bg-white/30 text-white font-bold py-2 px-4 rounded-full transition-colors"
            >
                ← Volver al Blog
            </button>
        </div>
      </section>

      {/* Contenido del Post */}
      <div className="container mx-auto px-6 py-12 sm:py-16">
        <ScrollAnimatedSection>
          <article className="max-w-3xl mx-auto">
            {post.content.map((item, index) => (
              <PostContent key={index} item={item} />
            ))}
          </article>
        </ScrollAnimatedSection>
        
        {/* Galería de Imágenes del Post */}
        {post.gallery && post.gallery.length > 0 && (
          <ScrollAnimatedSection>
            <section className="mt-12 sm:mt-16">
                <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-blue-400">Galería</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
                    {post.gallery.map((image, index) => (
                        <div key={index} className="bg-gray-700/50 rounded-lg flex items-center justify-center h-64">
                            <img src={image} alt={`Galería ${index + 1}`} className="w-full h-full object-cover rounded-lg"/>
                        </div>
                    ))}
                </div>
            </section>
          </ScrollAnimatedSection>
        )}
      </div>
    </motion.div>
  );
}