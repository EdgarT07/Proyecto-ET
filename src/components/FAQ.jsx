// src/components/FAQ.jsx

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqs } from '../data/faqData';

const AccordionItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-700 py-4">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full text-left flex justify-between items-center">
        <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
        <motion.span animate={{ rotate: isOpen ? 180 : 0 }} className="text-blue-400 text-2xl">↓</motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, marginTop: 0 }}
            animate={{ height: 'auto', opacity: 1, marginTop: '16px' }}
            exit={{ height: 0, opacity: 0, marginTop: 0 }}
            className="overflow-hidden"
          >
            <p className="text-gray-300">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQ() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-6 py-24 sm:py-32"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold">Preguntas Frecuentes</h1>
        <p className="text-gray-400 mt-4">Aquí encontrarás respuestas a las dudas más comunes.</p>
      </div>
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} faq={faq} />
        ))}
      </div>
    </motion.div>
  );
}