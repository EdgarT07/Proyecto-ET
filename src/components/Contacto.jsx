// src/components/Contacto.jsx

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { collection, addDoc } from 'firebase/firestore';

export default function Contacto({ db }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ message: '', type: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!db) {
        setStatus({ message: 'Error: La base de datos no está conectada.', type: 'error' });
        return;
    }
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ message: 'Por favor, completa todos los campos.', type: 'error' });
      return;
    }

    setStatus({ message: 'Enviando...', type: 'loading' });
    try {
      await addDoc(collection(db, "messages"), {
        ...formData,
        createdAt: new Date()
      });
      setStatus({ message: '¡Mensaje enviado con éxito! Te contactaremos pronto.', type: 'success' });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error("Error al enviar mensaje a Firestore:", error);
      setStatus({ message: 'Hubo un error al enviar el mensaje.', type: 'error' });
    }
  };

  return (
    <motion.section 
      id="contacto" 
      className="py-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Contáctanos</h2>
          <p className="text-gray-400 mt-2">¿Tienes alguna pregunta? Envíanos un mensaje.</p>
        </div>
        <div className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg border border-gray-700">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-300 mb-2">Nombre</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-300 mb-2">Correo Electrónico</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-300 mb-2">Mensaje</label>
              <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-transform duration-300 transform hover:scale-105">
                Enviar Mensaje
              </button>
            </div>
          </form>
          {status.message && (
            <div className={`mt-6 text-center p-3 rounded-md ${
                status.type === 'success' ? 'bg-green-500/20 text-green-300' : ''
            } ${
                status.type === 'error' ? 'bg-red-500/20 text-red-300' : ''
            } ${
                status.type === 'loading' ? 'bg-yellow-500/20 text-yellow-300' : ''
            }`}>
              {status.message}
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
}
