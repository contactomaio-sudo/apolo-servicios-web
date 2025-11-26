import React from 'react';

const TeamMemberCard: React.FC<{ name: string; title: string; description: string; imageUrl: string }> = ({ name, title, description, imageUrl }) => (
    <div className="bg-light rounded-lg shadow-lg p-6 text-center flex flex-col items-center transform transition-transform duration-300 hover:scale-105">
        <img src={imageUrl} alt={`Retrato de ${name}`} className="w-32 h-32 rounded-full mb-4 object-cover border-4 border-secondary/50" />
        <h3 className="text-xl font-bold text-primary">{name}</h3>
        <p className="text-secondary font-semibold mb-2">{title}</p>
        <p className="text-slate-600 leading-relaxed text-sm">{description}</p>
    </div>
);


const About: React.FC = () => {
  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          <div className="lg:w-1/2">
            <img 
              src="https://picsum.photos/600/400?random=1" 
              alt="Equipo de APOLO en reunión"
              className="rounded-lg shadow-2xl w-full"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-extrabold text-primary mb-6">Sobre APOLO</h2>
            <p className="text-lg text-slate-600 mb-4 leading-relaxed">
              En <span className="font-bold text-primary">APOLO</span>, nos enorgullece ser la empresa de confianza para la gestión y mantenimiento de propiedades en Villa Carlos Paz, Córdoba. Con años de experiencia en el sector, hemos consolidado una oferta de servicios que responde a las más altas exigencias de calidad y eficiencia.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Nuestra misión es simple: brindar tranquilidad a nuestros clientes. Lo logramos a través de un equipo comprometido, soluciones a medida y una atención al detalle que nos diferencia. Desde la administración de su consorcio hasta la seguridad de su local comercial, APOLO es sinónimo de excelencia y confianza.
            </p>
          </div>
        </div>

        <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-primary">Conozca a Nuestro Equipo Directivo</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                La experiencia y el liderazgo que impulsan nuestras soluciones.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <TeamMemberCard 
                name="Sergio Esteban Maiorana"
                title="Director General & Co-Fundador"
                description="Con una sólida trayectoria en administración y gestión de propiedades, Sergio lidera APOLO con una visión estratégica centrada en la eficiencia y la satisfacción del cliente. Su experiencia garantiza una administración transparente y soluciones innovadoras."
                imageUrl="https://picsum.photos/seed/sergio/400/400"
            />
            <TeamMemberCard 
                name="Mauricio Carlos Tolosa"
                title="Director de Operaciones & Co-Fundador"
                description="Especialista en logística y operaciones, Mauricio es el responsable de la excelencia en nuestros servicios de limpieza y seguridad. Su enfoque práctico y su atención al detalle aseguran que nuestros equipos superen las expectativas en cada proyecto."
                imageUrl="https://picsum.photos/seed/mauricio/400/400"
            />
        </div>
      </div>
    </section>
  );
};

export default About;