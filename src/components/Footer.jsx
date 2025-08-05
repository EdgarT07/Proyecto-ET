import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-blue-500/30">
      <div className="container mx-auto px-6 py-8">
        <div className="flex justify-center mb-6 space-x-6 items-center">
            {/* Instagram */}
            <a href="https://www.instagram.com/techsolutionccs?utm_source=ig_web_button_share_sheet&igsh=MWpwY292dGJkMjBxdQ==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:opacity-75 transition-opacity flex items-center ml-4">
                <img src="/instagram.png" alt="Instagram" className="h-8 object-contain" style={{ width: 'auto' }} />
            </a>
            {/* Facebook */}
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:opacity-75 transition-opacity flex items-center">
                <img src="/Facebook.png" alt="Facebook" className="w-8 h-8 object-contain" />
            </a>
            {/* WhatsApp */}
            <a href="https://wa.me/message/YLSBZB5M3URED1" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-gray-400 hover:opacity-75 transition-opacity flex items-center">
                <img src="/whatsapp.png" alt="WhatsApp" className="w-8 h-8 object-contain" />
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
