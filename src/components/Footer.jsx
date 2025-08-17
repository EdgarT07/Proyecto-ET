// src/components/Footer.jsx

import React from 'react';

export default function Footer() {
  // Reemplaza estos enlaces con los tuyos
  const instagramLink = "https://www.instagram.com/techsolutionccs/";
  const facebookLink = "https://www.facebook.com/tu-pagina";
  const WHATSAPP_NUMBER = '584122106109'; // Tu número de WhatsApp con código de país

  return (
    <footer className="bg-gray-900 border-t border-blue-500/30">
      <div className="container mx-auto px-6 py-8">
        <div className="flex justify-center mb-6 space-x-6">
            <a href={instagramLink} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:opacity-75 transition-opacity">
                <img src="/instagram.png" alt="Logo de Instagram" className="w-6 h-6" />
            </a>
            <a href={facebookLink} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:opacity-75 transition-opacity">
                 <img src="/Facebook.png" alt="Logo de Facebook" className="w-6 h-6" />
            </a>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-gray-400 hover:opacity-75 transition-opacity">
                 <img src="/whatsapp.png" alt="Logo de WhatsApp" className="w-6 h-6" />
            </a>
        </div>
        <div className="text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} TECH SOLUTION. Todos los derechos reservados.</p>
            <p className="text-sm mt-2">Diseñado con ❤️ para emprendedores.</p>
        </div>
      </div>
    </footer>
  );
}
