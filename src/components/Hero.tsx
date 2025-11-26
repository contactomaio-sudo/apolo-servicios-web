import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <img 
        src="https://picsum.photos/1920/1080?grayscale&blur=2" 
        alt="Edificio moderno" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 tracking-tight">
          <span className="text-secondary">APOLO</span> Soluciones Integrales
        </h1>
        <p className="text-lg md:text-2xl max-w-3xl mx-auto mb-8 text-slate-200">
          Su aliado estratégico en administración, limpieza, seguridad y abastecimiento para propiedades y empresas en Villa Carlos Paz.
        </p>
        <a 
          href="#servicios" 
          className="bg-secondary text-dark font-bold py-3 px-8 rounded-full text-lg hover:bg-amber-500 transition-all duration-300 transform hover:scale-105 shadow-xl"
        >
          Descubrir Servicios
        </a>
      </div>
    </section>
  );
};

export default Hero;