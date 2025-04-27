import React from 'react';

export default function Historia() {
  return (
    <div className="min-h-screen w-full bg-white pt-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Nuestra Historia</h1>
        <div className="max-w-3xl mx-auto bg-gray-50 rounded-lg p-8">
          <p className="text-gray-600 leading-relaxed mb-6">
            Desde nuestra fundación, Tecnoslab ha estado a la vanguardia en soluciones 
            para pisos industriales. Nuestra trayectoria comenzó con la visión de 
            transformar la industria mediante tecnología innovadora y servicios de alta calidad.
          </p>
          <p className="text-gray-600 leading-relaxed">
            A lo largo de los años, hemos expandido nuestras capacidades y experiencia, 
            consolidándonos como líderes en el mercado de pisos industriales en Brasil 
            y América Latina.
          </p>
        </div>
      </div>
    </div>
  );
}