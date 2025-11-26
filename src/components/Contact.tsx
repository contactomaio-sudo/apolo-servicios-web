import React from 'react';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from './icons';
import ContactForm from './ContactForm';

const Contact: React.FC = () => {
  const address = "9 de julio 70, Villa Carlos Paz, Córdoba";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <section id="contacto" className="py-20 bg-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-primary">Póngase en Contacto</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            ¿Listo para llevar la gestión de su propiedad al siguiente nivel? Complete el formulario o contáctenos directamente.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          
          {/* Columna de Información de Contacto */}
          <div className="lg:w-1/3 w-full bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-primary mb-6">Información Directa</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex-shrink-0 text-primary pt-1"><PhoneIcon className="w-8 h-8"/></div>
                <div>
                  <h4 className="font-bold text-slate-800">Teléfono</h4>
                  <a href="tel:+5493541200553" className="text-lg text-slate-600 hover:text-secondary transition-colors">+54 9 3541 20-0553</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex-shrink-0 text-primary pt-1"><EnvelopeIcon className="w-8 h-8"/></div>
                <div>
                  <h4 className="font-bold text-slate-800">Correo Electrónico</h4>
                  <a href="mailto:contacto@apolo.com.ar" className="text-lg text-slate-600 hover:text-secondary transition-colors">contacto@apolo.com.ar</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex-shrink-0 text-primary pt-1"><MapPinIcon className="w-8 h-8"/></div>
                <div>
                  <h4 className="font-bold text-slate-800">Oficina</h4>
                  <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="text-lg text-slate-600 hover:text-secondary transition-colors">{address}</a>
                </div>
              </div>
            </div>
          </div>

          {/* Columna del Formulario */}
          <div className="lg:w-2/3 w-full">
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;