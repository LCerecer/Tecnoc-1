import React, { useRef } from 'react';
import { Feature197 } from '@/components/ui/accordion-feature';

const productData = {
  features: [
    {
      id: 1,
      title: "Pisos de quinta generación",
      summary: "Repara tu piso en menos de 48 horas, sin necesidad de colados, con alta planicidad y a 1/5 del precio ofrecido en el mercado",
      url: "#",
      image: "https://res.cloudinary.com/dy089iwsg/image/upload/v1745505006/Tecnosbal_logo_ccdmij.png",
    },
    {
      id: 2,
      title: "Medición de alta precisión",
      summary: "Mediciones de piso para VNA y pasillos robóticos con garantía total. Tecnología avanzada que asegura precisión milimétrica, sin demoras ni errores.",
      url: "#",
      image: "https://res.cloudinary.com/dy089iwsg/image/upload/v1745505380/Cogri_logo_ohocoz.png",
    },
    {
      id: 3,
      title: "Reparación de pisos industriales",
      summary: "¿Otro problema? Nosotros lo solucionamos",
      url: "#",
      image: "https://res.cloudinary.com/dy089iwsg/image/upload/v1745506451/Piso_Logo_kpqqq8.png",
    }
  ],
};

const tecnoCMData = {
  features: [
    {
      id: 1,
      title: "Tecnología de Vanguardia",
      image: "https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg",
      description: "Implementamos las últimas innovaciones en medición y corrección de planicidad, utilizando equipos de última generación para garantizar resultados precisos y confiables en cada proyecto.",
    },
    {
      id: 2,
      title: "Medición Avanzada",
      image: "https://images.pexels.com/photos/3912981/pexels-photo-3912981.jpeg",
      description: "Nuestros sistemas de medición utilizan tecnología láser de alta precisión, permitiendo detectar variaciones mínimas en la superficie y generar informes detallados para una corrección exacta.",
    },
    {
      id: 3,
      title: "Soluciones Personalizadas",
      image: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg",
      description: "Desarrollamos planes de corrección específicos para cada cliente, considerando las características únicas de su instalación y los requerimientos particulares de su operación.",
    }
  ],
};

export default function Productos() {
  const tecnoMGRef = useRef<HTMLDivElement>(null);

  const scrollToTecnoMG = () => {
    tecnoMGRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="min-h-screen w-full bg-white pt-20">
      <div className="container mx-auto px-4">
        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">¿Qué ofrece TecnoSlab?</h2>
          <p className="text-gray-600 leading-relaxed">
            Tecnoslab ofrece soluciones especializadas en medición y corrección de planicidad para pisos industriales y robóticos. Realizamos mediciones bajo estándares internacionales como ASTM, ACI y normas específicas para sistemas VNA y robóticos, garantizando resultados precisos y confiables. Nuestro equipo técnico emplea perfilógrafos avanzados y tecnología láser para asegurar pisos con tolerancias mínimas adaptadas a cada cliente. Proporcionamos asesoría integral desde el diseño inicial hasta la certificación final del piso, optimizando la eficiencia operativa y reduciendo costos de mantenimiento. Somos expertos en sistemas automatizados y robóticos, incluyendo instalaciones exigentes como AutoStore, Amazon AMR y Geek+. En Tecnoslab transformamos los retos técnicos de planicidad en soluciones concretas que impulsan la productividad de tu negocio.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 mb-12">
          <button 
            onClick={scrollToTecnoMG}
            className="relative overflow-hidden rounded-lg group hover:shadow-xl transition-shadow duration-300"
          >
            <img 
              src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg" 
              alt="TecnoMG" 
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h3 className="text-2xl font-bold text-white">TecnoMG</h3>
            </div>
          </button>
           
          <button 
            onClick={scrollToTecnoMG}
            className="relative overflow-hidden rounded-lg group hover:shadow-xl transition-shadow duration-300"
          >
            <img 
              src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg" 
              alt="TecnoCM" 
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h3 className="text-2xl font-bold text-white">TecnoCM</h3>
            </div>
          </button>
        </div>

        <div ref={tecnoMGRef}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">TecnoMG</h2>
          <Feature197 {...productData} />
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">TecnoCM</h2>
          <Feature197 {...tecnoCMData} />
        </div>
      </div>
    </div>
  );
}