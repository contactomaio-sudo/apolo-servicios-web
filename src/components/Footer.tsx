import React from 'react';
import { Logo } from './Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-slate-400 py-8">
      <div className="container mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-3 text-2xl font-bold tracking-wider text-white mb-2">
          <Logo className="h-8 w-8 text-secondary" />
          <span>APOLO</span>
        </div>
        <p>Soluciones Integrales para su propiedad y negocio.</p>
        <div className="mt-4 border-t border-slate-700 pt-4">
          <p>&copy; {currentYear} APOLO Soluciones Integrales. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;