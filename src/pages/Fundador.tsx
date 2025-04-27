import React from 'react';

export default function Fundador() {
  return (
    <div className="min-h-screen w-full bg-white pt-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Nuestro Fundador</h1>
        <div className="max-w-3xl mx-auto bg-gray-50 rounded-lg p-8">
          <div className="flex flex-col items-center mb-8">
            <img 
              src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg"
              alt="Fundador"
              className="w-48 h-48 rounded-full object-cover mb-4"
            />
            <h2 className="text-2xl font-semibold text-gray-800">Nombre del Fundador</h2>
            <p className="text-gray-600">CEO & Fundador</p>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Con más de dos décadas de experiencia en la industria, nuestro fundador 
            ha liderado la innovación en el sector de pisos industriales, 
            introduciendo tecnologías revolucionarias y estableciendo nuevos 
            estándares de calidad en el mercado.
          </p>
        </div>
      </div>
    </div>
  );
}