// src/components/Footer.jsx

import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-blue-500/30">
      <div className="container mx-auto px-6 py-6 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} TECH SOLUTION. Todos los derechos reservados.</p>
        <p className="text-sm mt-2">Diseñado con ❤️ para emprendedores.</p>
      </div>
    </footer>
  );
}
