
import React from 'react';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from './icons';

const Contact: React.FC = () => {
  const address = "9 de julio 70, Villa Carlos Paz, Córdoba";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <section id="contacto" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-4">Hablemos de su Proyecto</h2>
        <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-12">
          ¿Listo para llevar la gestión de su propiedad al siguiente nivel? Contáctenos hoy mismo para una cotización sin compromiso.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 flex-shrink-0"><PhoneIcon/></div>
            <a href="tel:+5493541200553" className="text-xl hover:text-secondary transition-colors">+54 9 3541 20-0553</a>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 flex-shrink-0"><EnvelopeIcon/></div>
            <a href="mailto:contacto@apolo.com.ar" className="text-xl hover:text-secondary transition-colors">contacto@apolo.com.ar</a>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 flex-shrink-0"><MapPinIcon/></div>
            <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="text-xl hover:text-secondary transition-colors">{address}</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;