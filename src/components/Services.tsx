import React from 'react';
import { BuildingOfficeIcon, SparklesIcon, ShieldCheckIcon, ShoppingBagIcon } from './icons';

interface Service {
  icon: React.ReactElement;
  title: string;
  description: string;
}

const servicesList: Service[] = [
  {
    icon: <BuildingOfficeIcon />,
    title: 'Administración de Consorcios',
    description: 'Gestión integral y transparente para consorcios de propiedad horizontal. Optimizamos recursos y garantizamos la convivencia.'
  },
  {
    icon: <SparklesIcon />,
    title: 'Servicios de Limpieza',
    description: 'Soluciones de limpieza profesional para galerías comerciales, oficinas y edificios, asegurando espacios impecables y seguros.'
  },
  {
    icon: <ShieldCheckIcon />,
    title: 'Vigilancia y Seguridad',
    description: 'Personal de vigilancia capacitado para proteger su propiedad y negocio, brindando tranquilidad las 24 horas del día.'
  },
  {
    icon: <ShoppingBagIcon />,
    title: 'Venta de Productos de Limpieza',
    description: 'Abastecimiento de productos de limpieza de alta calidad para edificios, shoppings y empresas. Todo lo que necesita en un solo lugar.'
  }
];

const ServiceCard: React.FC<Service> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center transform hover:-translate-y-2">
    <div className="w-20 h-20 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-primary mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </div>
);


const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-20 bg-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-primary">Nuestros Servicios</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Ofrecemos un abanico de soluciones diseñadas para cubrir todas las necesidades de su propiedad o negocio con eficiencia y profesionalismo.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesList.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;