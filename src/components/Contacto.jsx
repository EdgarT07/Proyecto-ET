// src/components/Contacto.jsx

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { collection, addDoc } from 'firebase/firestore';
import { services } from '../data/servicesData';

export default function Contacto({ db }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
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

    // Validación mejorada
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'message'];
    const emptyFields = requiredFields.filter(field => !formData[field].trim());
    
    if (emptyFields.length > 0) {
      setStatus({ message: `Por favor, completa todos los campos requeridos.`, type: 'error' });
      return;
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({ message: 'Por favor, ingresa un correo electrónico válido.', type: 'error' });
      return;
    }

    // Validación de teléfono
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    if (!phoneRegex.test(formData.phone)) {
      setStatus({ message: 'Por favor, ingresa un número de teléfono válido.', type: 'error' });
      return;
    }

    setStatus({ message: 'Enviando...', type: 'loading' });
    
    try {
      await addDoc(collection(db, "messages"), {
        ...formData,
        fullName: `${formData.firstName} ${formData.lastName}`,
        createdAt: new Date(),
        status: 'pending'
      });
      
      setStatus({ 
        message: '¡Mensaje enviado con éxito! Te contactaremos pronto.', 
        type: 'success' 
      });
      
      // Limpiar formulario excepto email y mensaje si el usuario quiere
      setFormData({
        firstName: '',
        lastName: '',
        email: formData.email, // Mantener email para facilidad
        phone: '',
        service: '',
        message: formData.message // Mantener mensaje para referencia
      });
      
    } catch (error) {
      console.error("Error al enviar mensaje a Firestore:", error);
      setStatus({ message: 'Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.', type: 'error' });
    }
  };

  return (
    <motion.section 
      id="contacto" 
      className="py-24 sm:py-32"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>Contacto - Tech Solution</title>
        <meta name="description" content="¿Tienes alguna pregunta o necesitas un servicio? Envíanos un mensaje a través de nuestro formulario o contáctanos directamente por WhatsApp o teléfono." />
      </Helmet>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold">Contáctanos</h1>
          <p className="text-gray-400 mt-4">
            ¿Tienes alguna pregunta o necesitas un servicio? Completa el formulario y te contactaremos pronto.
          </p>
          <p className="text-green-400 font-semibold mt-4 text-lg">
            ¡Whatsapp y teléfono de contacto al final de la sección!
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Información Personal */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-gray-300 mb-2 font-medium">
                    Nombre <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="firstName" 
                    name="firstName" 
                    value={formData.firstName} 
                    onChange={handleChange} 
                    className="w-full bg-gray-700 border border-gray-600 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Tu nombre"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-gray-300 mb-2 font-medium">
                    Apellido <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="lastName" 
                    name="lastName" 
                    value={formData.lastName} 
                    onChange={handleChange} 
                    className="w-full bg-gray-700 border border-gray-600 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Tu apellido"
                    required
                  />
                </div>
              </div>

              {/* Contacto */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                    Correo Electrónico <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    className="w-full bg-gray-700 border border-gray-600 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="tu@email.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-gray-300 mb-2 font-medium">
                    Número de Teléfono <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    className="w-full bg-gray-700 border border-gray-600 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="+58 412-123-4567"
                    required
                  />
                </div>
              </div>

              {/* Servicio de Interés */}
              <div>
                <label htmlFor="service" className="block text-gray-300 mb-2 font-medium">
                  Servicio de Interés
                </label>
                <select 
                  id="service" 
                  name="service" 
                  value={formData.service} 
                  onChange={handleChange} 
                  className="w-full bg-gray-700 border border-gray-600 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  <option value="">Selecciona un servicio</option>
                  {services.map(service => (
                    <option key={service.id} value={service.title}>
                      {service.icon} {service.title}
                    </option>
                  ))}
                  <option value="otro">Otro (especificar en el mensaje)</option>
                </select>
              </div>

              {/* Mensaje */}
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                  Mensaje <span className="text-red-500">*</span>
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  value={formData.message} 
                  onChange={handleChange} 
                  className="w-full bg-gray-700 border border-gray-600 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Cuéntanos en detalle qué necesitas..."
                  required
                ></textarea>
                <p className="text-sm text-gray-400 mt-1">
                  Incluye detalles sobre tu problema o proyecto para poder ayudarte mejor.
                </p>
              </div>

              {/* Botón de Envío */}
              <div className="text-center pt-4">
                <button 
                  type="submit" 
                  disabled={status.type === 'loading'}
                  className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed shadow-lg hover:shadow-blue-500/25"
                >
                  {status.type === 'loading' ? 'Enviando...' : 'Enviar Mensaje'}
                </button>
              </div>
            </form>

            {/* Mensajes de Estado */}
            {status.message && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-6 text-center p-4 rounded-md ${
                  status.type === 'success' 
                    ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                    : ''
                } ${
                  status.type === 'error' 
                    ? 'bg-red-500/20 text-red-300 border border-red-500/30' 
                    : ''
                } ${
                  status.type === 'loading' 
                    ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30' 
                    : ''
                }`}
              >
                {status.message}
              </motion.div>
            )}
          </div>

          {/* Información de Contacto Directo */}
          <div className="text-center mt-12">
            <p className="text-gray-400 mb-6 text-lg">¿Prefieres contactarnos directamente?</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a 
                href="https://wa.me/message/YLSBZB5M3URED1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 shadow-lg hover:shadow-green-500/25"
              >
                <img src="/whatsapp.png" alt="WhatsApp" className="w-6 h-6" />
                <span>Contactar por WhatsApp</span>
              </a>
              
              <a 
                href="tel:+584122106109"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 shadow-lg hover:shadow-blue-500/25"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                <span>Llamar Ahora</span>
              </a>
            </div>
            
            <div className="mt-6 text-gray-400">
              <p className="text-sm">
                Horario de atención: Lunes a Viernes 8:00 AM - 6:00 PM | Sábados 9:00 AM - 2:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
