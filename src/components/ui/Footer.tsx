import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Rival Peluquería y Barbería. Todos los derechos reservados.</p>
        <p>
          <a href="/privacy" className="text-gray-600 hover:text-gray-800">Política de Privacidad</a> | 
          <a href="/terms" className="text-gray-600 hover:text-gray-800"> Términos de Servicio</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;