import React, { useRef } from 'react';
import { Feature197 } from '@/components/ui/accordion-feature';
import { Feature } from '@/components/ui/feature';

const productData = {
  features: [
    {
      id: 1,
      title: "Descripción de producto",
      image: "https://images.pexels.com/photos/3862632/pexels-photo-3862632.jpeg",
      description: "Nuestros productos de quinta generación representan lo último en tecnología para pisos industriales. Diseñados para ofrecer durabilidad excepcional y rendimiento superior, estos productos son la solución ideal para las demandas más exigentes del sector industrial.",
    },
    {
      id: 2,
      title: "Aplicaciones",
      image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg",
      description: "Perfectos para almacenes, centros de distribución, plantas de manufactura y cualquier espacio que requiera pisos de alto rendimiento. Nuestros productos se adaptan a diversas necesidades industriales, garantizando siempre los más altos estándares de calidad.",
    },
    {
      id: 3,
      title: "Mejor uso",
      image: "https://images.pexels.com/photos/1797428/pexels-photo-1797428.jpeg",
      description: "Ideal para áreas de alto tráfico, zonas de almacenamiento pesado y espacios que requieren resistencia excepcional. Nuestros productos están optimizados para maximizar la eficiencia operativa mientras minimizan el mantenimiento requerido.",
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
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Productos</h1>
        
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
            className="relative overflow-hidden rounded-lg group hover:shadow-xl transition-shadow duration-300"
          >
            <img 
              src="https://images.pexels.com/photos/3862632/pexels-photo-3862632.jpeg" 
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
          <Feature />
        </div>
      </div>
    </div>
  );
}